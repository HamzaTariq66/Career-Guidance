const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const tablename = "users";
const tablename2= "contact_us";

module.exports = {
    login,
    create,
    contact,
    update,
    getAll,
    getById
};

async function login({ email, password }) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM '+tablename+' WHERE email ="'+email+'"', (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                bcrypt.compare(password, rows[0].password, function (err, isMatch) {
                    if (err) {
                        reject(error);
                    } else if (isMatch) {
                        const token = jwt.sign({ sub: rows[0] }, config.secret);
                        resolve({
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

async function create(userParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where email = "'+userParam.email+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else if(rows.length > 0)
                reject({message: 'email "' + userParam.email + '" is already taken'});
            else {
                // hash password
                if (userParam.password)
                    userParam.password = bcrypt.hashSync(userParam.password, 10);

                var prepareData = { 
                    email: userParam.email,
                    password: userParam.password,
                    first_name: userParam.first_name,
                    last_name: userParam.last_name,
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

async function update(id, userParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where id = "'+id+'"', (err, rows, fields) => {
            if(err) 
                reject(err);
            else {
                // hash password
                if (userParam.password)
                    userParam.password = bcrypt.hashSync(userParam.password, 10);

                const updateStr = 'first_name = "'+userParam.first_name+'"'+ 
                                  ',last_name = "'+userParam.last_name+'"'+
                                  ',password = "'+userParam.password+'"';

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
                    user: rows,
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
                    user: rows,
                    status:200
                });
            }
        });
    });
}

async function contact(userParam) {
    return new Promise((resolve, reject) => {
        var prepareData = { 
            full_name: userParam.full_name,
            email: userParam.email,
            subject: userParam.subject,
            message: userParam.message,
        };
        let sql         = 'insert into '+tablename2+' set ?';
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
    });
}