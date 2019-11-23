const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const tablename = "colleges";

module.exports = {
    create,
    update,
    getAll,
    getById,
    _delete
};

async function create(mydataParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+' where title = "'+mydataParam.title+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else if(rows.length > 0)
                reject({message: 'Title "' + mydataParam.title + '" is already added.'});
            else {
                var prepareData = { 
                    title: mydataParam.title,
                    url: mydataParam.url,
                    address: mydataParam.address,
                    phone: mydataParam.phone,
                    details: mydataParam.body
                };
                let sql         = 'insert into '+tablename+' set ?';
                db.query(sql, prepareData, (err, result) => {
                    if(err) 
                        reject("error: "+err);
                    else { 
                        resolve({
                            result: result,
                            status: 200
                        });
                    }
                });
            }
        });
    });
}

async function update(id, mydataParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where id = "'+id+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else {
                db.query('select * from '+tablename+' where id <> "'+id+'" and title = "'+mydataParam.title+'"', (err, rows, fields) => {
                    if(err) 
                        reject(err);
                    else if(rows.length > 0)
                        reject({message: 'Title "' + mydataParam.title + '" is already added.'});
                    else {
                        const updateStr = 'title = "'+mydataParam.title+'"'+ 
                                        ', url = "'+mydataParam.url+'"'
                                        ',address = "'+mydataParam.address+'"'
                                        ',phone = "'+mydataParam.phone+'"'+
                                        ',details = "'+mydataParam.body+'"';

                        let sql         = 'update '+tablename+' set '+updateStr+' where id = '+id;
                        db.query(sql, (err, result) => {
                            if(err) 
                                reject("error: "+err);
                            else { 
                                resolve({
                                    result: result,
                                    status: 200
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}

async function getAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM '+tablename, (error, rows, fields) => {
            if(error)
                reject(error);
            else {
                resolve({
                    message:"Get All Colleges successfully",
                    college: rows,
                    status:200
                });
            }
        });
    });
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM '+tablename+' where id = '+id, (error, rows, fields) => {
            if(error)
                reject(error);
            else {
                resolve({
                    college: rows,
                    status:200
                });
            }
        });
    });
}

async function _delete(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM '+tablename+' where id = '+id, (error, rows, fields) => {
            if(error)
                reject(error);
            else {
                resolve({
                    college: rows,
                    status:200
                });
            }
        });
    });
}