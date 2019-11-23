const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const tablename = "admins";

module.exports = {
    authenticate,
    create,
    update,
    getAll,
    getById
};

async function authenticate({ email, password }) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM '+tablename+' WHERE email ="'+email+'"', (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                bcrypt.compare(password, rows[0].password, function (err, isMatch) {
                    if (err) {
                        reject(error);
                    } else if (isMatch && rows[0].is_active === "true") {
                        const token = jwt.sign({ sub: rows[0].id }, config.secret);
                        resolve({
                            message: rows,
                            token,
                            status: 200
                        });
                    }
                    else {
                        reject({"success":false,"message":"password doesnot match"});
                    }
                });

            }
        });
    });
}

async function create(adminParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where email = "'+adminParam.email+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else if(rows.length > 0)
                reject({message: 'email "' + adminParam.email + '" is already taken'});
            else {
                // hash password
                if (adminParam.password)
                    adminParam.password = bcrypt.hashSync(adminParam.password, 10);

                var prepareData = { 
                    email: adminParam.email,
                    password: adminParam.password,
                    first_name: adminParam.first_name,
                    last_name: adminParam.last_name,
                    is_active: adminParam.is_active
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

async function update(id, adminParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where id = "'+id+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else {
                // hash password
                if (adminParam.password)
                    adminParam.password = bcrypt.hashSync(adminParam.password, 10);

                const updateStr = 'first_name = "'+adminParam.first_name+'"'+ 
                                  ',last_name = "'+adminParam.last_name+'"'+
                                  ',password = "'+adminParam.password+'"'+
                                  ',is_active = "'+adminParam.is_active+'"';

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
    });
}

async function getAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM '+tablename, (error, rows, fields) => {
            if(error)
                reject(error);
            else {
                resolve({
                    message:"Get All Admin  successfully",
                    admin: rows,
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
                    admin: rows,
                    status:200
                });
            }
        });
    });
}