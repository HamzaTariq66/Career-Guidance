const config = require("config.json");
const db = require("_helpers/db");

const tablename = "careers";
const tablename2 = "subjects";

module.exports = {
  create,
  update,
  getAll,
  getById,
  _delete
};

async function create(mydataParam) {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from " +
        tablename +
        ' where title = "' +
        mydataParam.title +
        '"',
      (err, rows, careers) => {
        if (err) reject(err);
        else if (rows.length > 0)
          reject({
            message: 'Title "' + mydataParam.title + '" is already added.'
          });
        else {
          var prepareData = {
            title: mydataParam.title,
            url: mydataParam.url,
            subject_id: mydataParam.subject
          };
          let sql = "insert into " + tablename + " set ?";
          db.query(sql, prepareData, (err, result) => {
            if (err) reject("error: " + err);
            else {
              resolve({
                result: result,
                status: 200
              });
            }
          });
        }
      }
    );
  });
}

async function update(id, mydataParam) {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from " + tablename + '  where id = "' + id + '"',
      (err, rows, careers) => {
        if (err) reject(err);
        else {
          db.query(
            "select * from " +
              tablename +
              ' where id <> "' +
              id +
              '" and title = "' +
              mydataParam.title +
              '"',
            (err, rows, careers) => {
              if (err) reject(err);
              else if (rows.length > 0)
                reject({
                  message: 'Title "' + mydataParam.title + '" is already added.'
                });
              else {
                const updateStr =
                  'title = "' +
                  mydataParam.title +
                  '"' +
                  ', url = "' +
                  mydataParam.url +
                  '"';
                ', subject_id = "' + mydataParam.subject + '"';

                let sql =
                  "update " +
                  tablename +
                  " set " +
                  updateStr +
                  " where id = " +
                  id;
                db.query(sql, (err, result) => {
                  if (err) reject("error: " + err);
                  else {
                    resolve({
                      result: result,
                      status: 200
                    });
                  }
                });
              }
            }
          );
        }
      }
    );
  });
}

async function getAll(id) {
  return new Promise((resolve, reject) => {
    let additional_where =
      typeof id !== "undefined" ? " where tbl1.subject_id = " + id : "";
    let sql =
      "SELECT tbl1.*,tbl2.title as subject FROM " +
      tablename +
      " as tbl1 join " +
      tablename2 +
      " as tbl2 on tbl2.id = tbl1.subject_id " +
      additional_where;
    db.query(sql, (error, rows, careers) => {
      if (error) reject(error);
      else {
        resolve({
          message: "Get All Careers successfully",
          career: rows,
          status: 200
        });
      }
    });
  });
}

async function getById(id) {
  return new Promise((resolve, reject) => {
    let sql =
      "SELECT tbl1.*,tbl2.title as subject FROM " +
      tablename +
      " as tbl1 join " +
      tablename2 +
      " as tbl2 on tbl2.id = tbl1.subject_id where id = " +
      id;
    db.query(sql, (error, rows, careers) => {
      if (error) reject(error);
      else {
        resolve({
          career: rows,
          status: 200
        });
      }
    });
  });
}

async function _delete(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM " + tablename + " where id = " + id,
      (error, rows, careers) => {
        if (error) reject(error);
        else {
          resolve({
            career: rows,
            status: 200
          });
        }
      }
    );
  });
}
