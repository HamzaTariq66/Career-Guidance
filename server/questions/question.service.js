const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');

const tablename = "questions";
const tablename2= "questions_options";
const tablename3= "degrees";
const tablename4= "subjects";
const tablename5= "users_test";
const tablename6= "users_test_answers";

module.exports = {
    create,
    update,
    getAll,
    getById,
    _delete,
    generate_test,
    generate_test_result,
    test_list
};

async function create(mydataParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+' where title = "'+mydataParam.title+'"', (err, rows, questions) => {
            if(err) 
                reject(err);
            else if(rows.length > 0)
                reject({message: 'Title "' + mydataParam.title + '" is already added.'});
            else {
                if(!validate(mydataParam.title)) {
                    reject("error: "+"Title is required");
                }

                if(!validate(mydataParam.degree)) {
                    reject("error: "+"Degree is required");
                }

                if(!validate(mydataParam.subject)) {
                    reject("error: "+"Subject is required");
                }

                if(!validate(mydataParam.option_1) || !validate(mydataParam.option_2) || 
                !validate(mydataParam.option_3) || !validate(mydataParam.option_4)) {
                    reject("error: "+"All options are required");
                }

                if(!validate(mydataParam.correct_answer)) {
                    reject("error: "+"Correct option is required");
                }

                var prepareData = { 
                    title: mydataParam.title,
                    degree_id: mydataParam.degree,
                    subject_id: mydataParam.subject
                };
                let sql         = 'insert into '+tablename+' set ?';
                db.query(sql, prepareData, (err, result) => {
                    if(err) 
                        reject("error: "+err);
                    else { 
                        let inserted_id = result.insertId;
                        let fullData = [];
                        for(let i=1; i<=4; i++) {
                            var prepareData2 = { 
                                question_id: inserted_id,
                                is_correct: ((mydataParam.correct_answer == 'option_'+i) ? 1 : 0),
                            };
                            if(i == 1)
                                prepareData2.option_title = mydataParam.option_1;
                            else if(i == 2)
                                prepareData2.option_title = mydataParam.option_2;
                            else if(i == 3)
                                prepareData2.option_title = mydataParam.option_3;
                            else if(i == 4)
                                prepareData2.option_title = mydataParam.option_4;

                            fullData.push(prepareData2);
                        }
                        bulkInsert(tablename2, fullData, (error, response) => {
                            if (error) 
                                reject("error: "+err);
                            else {
                                resolve({
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

async function update(id, mydataParam) {
    return new Promise((resolve, reject) => {
        db.query('select * from '+tablename+'  where id = "'+id+'"', (err, rows, questions) => {
            if(err) 
                reject(err);
            else {
                db.query('select * from '+tablename+' where id <> "'+id+'" and title = "'+mydataParam.title+'"', (err, rows, questions) => {
                    if(err) 
                        reject(err);
                    else if(rows.length > 0)
                        reject({message: 'Title "' + mydataParam.title + '" is already added.'});
                    else {
                        if(!validate(mydataParam.title)) {
                            reject("error: "+"Title is required");
                        }
        
                        if(!validate(mydataParam.degree)) {
                            reject("error: "+"Degree is required");
                        }
        
                        if(!validate(mydataParam.subject)) {
                            reject("error: "+"Subject is required");
                        }
        
                        if(!validate(mydataParam.option_1) || !validate(mydataParam.option_2) || 
                        !validate(mydataParam.option_3) || !validate(mydataParam.option_4)) {
                            reject("error: "+"All options are required");
                        }
        
                        if(!validate(mydataParam.correct_answer)) {
                            reject("error: "+"Correct option is required");
                        }
        
                        const updateStr = '  title = "'+mydataParam.title+'"'+
                                          ', degree_id = "'+mydataParam.degree+'"'+
                                          ', subject_id = "'+mydataParam.subject+'"';

                        let sql         = 'update '+tablename+' set '+updateStr+' where id = '+id;
                        db.query(sql, (err, result) => {
                            if(err) 
                                reject("error: "+err);
                            else { 
                                let inserted_id = id;
                                // delete Question Options
                                _deleteQuestionOption(id).then(() => {
                                    let fullData = [];
                                    for(let i=1; i<=4; i++) {
                                        var prepareData2 = { 
                                            question_id: inserted_id,
                                            is_correct: ((mydataParam.correct_answer == 'option_'+i) ? 1 : 0),
                                        };
                                        if(i == 1)
                                            prepareData2.option_title = mydataParam.option_1;
                                        else if(i == 2)
                                            prepareData2.option_title = mydataParam.option_2;
                                        else if(i == 3)
                                            prepareData2.option_title = mydataParam.option_3;
                                        else if(i == 4)
                                            prepareData2.option_title = mydataParam.option_4;

                                        fullData.push(prepareData2);
                                    }
                                    bulkInsert(tablename2, fullData, (error, response) => {
                                        if (error) 
                                            reject("error: "+err);
                                        else {
                                            resolve({
                                                status: 200
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}

async function getAll(id) {
    return new Promise((resolve, reject) => {
        let additional_where = (typeof id !== 'undefined' && id > 0) ? ' where tbl1.degree_id = '+id : '';
        let sql              = 'SELECT tbl1.id, tbl1.title,tbl1.degree_id,tbl3.title as degree, tbl1.subject_id,tbl4.title as subject,'+
                                ' GROUP_CONCAT(tbl2.option_title order by tbl2.id SEPARATOR \'::\') AS optionss, '+
                                ' GROUP_CONCAT(tbl2.is_correct order by tbl2.id SEPARATOR \'::\') AS correct_fields'+
                                ' FROM '+tablename+' as tbl1 '+
                                ' join '+tablename2+' as tbl2 on tbl2.question_id = tbl1.id '+
                                ' join '+tablename3+' as tbl3 on tbl3.id = tbl1.degree_id '+
                                ' join '+tablename4+' as tbl4 on tbl4.id = tbl1.subject_id '+
                                ' '+additional_where+
                                ' group by tbl1.id';
        db.query(sql, (error, rows, questions) => {
            if(error)
                reject(error);
            else {
                resolve({
                    message:"Get All Questions successfully",
                    question: rows,
                    status:200
                });
            }
        });
    });
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        let sql              = 'SELECT tbl1.id, tbl1.title,tbl3.title as degree, tbl4.title as subject'+
                                ' FROM '+tablename+' as tbl1 '+
                                ' join '+tablename3+' as tbl3 on tbl3.id = tbl1.degree_id '+
                                ' join '+tablename4+' as tbl4 on tbl4.id = tbl1.subject_id '+
                                ' where id = '+id;

        db.query(sql, (error, rows, questions) => {
            if(error)
                reject(error);
            else {
                resolve({
                    question: rows,
                    status:200
                });
            }
        });
    });
}

async function _delete(id) {
    _deleteQuestionOption(id).then(() => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM '+tablename+' where id = '+id, (error, rows, questions) => {
                if(error)
                    reject(error);
                else {
                    resolve({
                        question: rows,
                        status:200
                    });
                }
            });
        });
    });
}

async function _deleteQuestionOption(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM '+tablename2+' where question_id = '+id, (error, rows, questions) => {
            if(error)
                reject(error);
            else {
                resolve({
                    question: rows,
                    status:200
                });
            }
        });
    });
}

function validate(col) {
    if(typeof col != "undefined" && col != "") {
        return true;
    }
    return false;
}

async function runQuery(sql, prepareData) {
    let prepareData2 = (typeof prepareData != "undefined") ? prepareData : {};
    return new Promise((resolve, reject) => {
        db.query(sql, prepareData2,(error, result) => {
            if(error)
                reject(error);
            else {
                resolve({
                    results: result
                });
            }
        });
    });
}

function bulkInsert(table, objectArray, callback) {
    let keys = Object.keys(objectArray[0]);
    let values = objectArray.map( obj => keys.map( key => obj[key]));
    let sql = 'INSERT INTO ' + table + ' (' + keys.join(',') + ') VALUES ?';
    db.query(sql, [values], function (error, results, fields) {
        if (error) callback(error);
        callback(null, results);
    });
}

async function generate_test(degree_id, token) {
    return new Promise((resolve, reject) => {
        let additional_where = (typeof degree_id !== 'undefined' && degree_id > 0) ? ' where tbl1.degree_id = '+degree_id : '';
        let sql              = 'SELECT tbl1.id, tbl1.title,tbl1.degree_id,tbl3.title as degree, tbl1.subject_id,tbl4.title as subject'+
                                ' FROM '+tablename+' as tbl1 '+
                                ' join '+tablename3+' as tbl3 on tbl3.id = tbl1.degree_id '+
                                ' join '+tablename4+' as tbl4 on tbl4.id = tbl1.subject_id '+
                                ' '+additional_where+
                                ' group by tbl1.id '+
                                ' order by tbl1.priority desc, tbl4.title desc';
        db.query(sql, async(error, rows, questions) => {
            if(error)
                reject(error);
            else {
                let test        = [];
                const questions = JSON.parse(JSON.stringify(rows));
                if(questions.length == 0) {
                    resolve({
                        test: [],
                        status:200
                    });
                } else {
                    await Promise.all(questions.map((question) => {
                        const sqls      = 'select * from '+tablename2+' where question_id = '+question.id;
                        const promise   = runQuery(sqls).then((question_options) => {
                            const options = JSON.parse(JSON.stringify(question_options.results));
                            let quizes  = [];
                            if(options.length > 0) {
                                quizes = {
                                    subject: question.subject,
                                    question: question.title,
                                    answers: [
                                        {
                                            type: options[0].id.toString(),
                                            content: options[0].option_title
                                        },
                                        {
                                            type: options[1].id.toString(),
                                            content: options[1].option_title
                                        },
                                        {
                                            type: options[2].id.toString(),
                                            content: options[2].option_title
                                        },
                                        {
                                            type: options[3].id.toString(),
                                            content: options[3].option_title
                                        }
                                    ]
                                }
                                test.push(quizes);
                            }
                        });
                        return promise;
                    })); 

                    const checkToken = await getUserInfoFromToken(token);
                    createUpdateUserTest(checkToken.id, degree_id).then((response) => {
                        resolve({
                            testid: response,
                            test: test,
                            status:200
                        });
                    });
                }
            }
        });
    });
}

async function generate_test_result(request_data, token) {
    return new Promise((resolve, reject) => {
        // check if required parameters exists to continue
        const usertoken = (typeof token != "undefined") ? token : '';
        const degree    = (typeof request_data.degree != "undefined") ? request_data.degree : 0;
        const testid    = (typeof request_data.testid != "undefined") ? request_data.testid : 0;
        const answers   = (typeof request_data.answers != "undefined") ? request_data.answers : 0;
        if(usertoken && degree && testid) {
            getUserInfoFromToken(usertoken).then((checkToken) => {
                const user_id = (checkToken.id) ? checkToken.id : 0;
                // get test information
                runQuery(
                    'select * from '+tablename5+' where user_id = '+ user_id +' and degree = '+ degree +' and status = "pending"'
                ).then((response) => {
                    const getresponse = (typeof response.results != "undefined") ? response.results : [];
                    if(getresponse.length == 0) {
                        reject('Error: Unable to process result');
                    } else { 
                        // process results
                        processTestResult(degree, user_id, answers).then((test_result) => {
                            if(response == "") 
                                reject("Error: Unable to process result");
                            else {
                                const test_results = JSON.parse(JSON.stringify(test_result));
                                const choose_res   = (typeof test_results.choose != "undefined") ? test_results.choose : '';
                                // update test table
                                const updateStr = ' status = "complete",'+
                                                  ' result = "'+choose_res+'"';
                                const sql         = 'update '+tablename5+' set '+updateStr+' where id = '+testid;
                                runQuery(sql).then((responsess) => {
                                    const getresponse = (typeof responsess.results != "undefined") ? responsess.results : [];
                                    if(getresponse.length == 0) {
                                        reject('Error: Unable to process result');
                                    } else { 
                                        let fullData    = [];
                                        let answers_op  = answers.split(',');
                                        answers_op.map(async (op) => {
                                            var prepareData = { 
                                                test_id: testid,
                                                questions_options_id: op
                                            };
                                            fullData.push(prepareData); 
                                        });    
                                        bulkInsert(tablename6, fullData, (error, responses) => {
                                            if (error) 
                                                reject("error: "+err);
                                            else {
                                                resolve({
                                                    result:test_results,
                                                    status: 200
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        } else 
            reject('Error: '+ 'Invalid data');
    });
}

async function test_list(token) {
    return new Promise((resolve, reject) => {
        // check if required parameters exists to continue
        const usertoken = (typeof token != "undefined") ? token : '';
        if(usertoken) {
            getUserInfoFromToken(usertoken).then((checkToken) => {
                const user_id = (checkToken.id) ? checkToken.id : 0;
                // get test information
                runQuery(
                    ' SELECT tbl1.*, tbl2.title AS degree_title' +
                    ' FROM '+tablename5+' tbl1' +
                    ' JOIN '+tablename3+' tbl2 ON tbl2.id = tbl1.degree '+
                    ' where user_id = '+ user_id
                ).then((response) => {
                    const getresponse = (typeof response.results != "undefined") ? response.results : [];
                    resolve({
                        test: getresponse,
                        status: 200
                    });
                });
            });
        } else 
            reject('Error: '+ 'Invalid data');
    });
}

async function getUserInfoFromToken(token) {
    return new Promise((resolve, reject) => {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
    
        if (token) {
            jwt.verify(token, config.secret, (err, decoded) => {
              if (err) { 
                reject(err);
              } else { 
                const decod = (decoded.sub);
                resolve(decod);
              }
            });
        } else 
            return false;
    });
}

async function createUpdateUserTest(user_id, degreeid) {
    return new Promise((resolve, reject) => {
        // check if test already generated
        runQuery('select id from '+tablename5+' where user_id = '+user_id+' and degree = '+degreeid+' and status = "pending"').then((rows) => {
            const response = JSON.parse(JSON.stringify(rows));
            if(response.results.length == 0) {
                var prepareData = { 
                    user_id: user_id,
                    degree: degreeid
                };
                let sqls         = 'insert into '+tablename5+' set ?';
                runQuery(sqls, prepareData).then((rows) => {
                    const response = JSON.parse(JSON.stringify(rows));
                    resolve(response.results.insertId);
                });
            } else
                resolve(response.results[0].id);
        });
    });
}


async function processTestResult(degree, user_id, answers) {
    return new Promise((resolve, reject) => {
        const degrees    = (typeof degree != "undefined") ? degree : 0;
        const user_ids   = (typeof user_id != "undefined") ? user_id : 0;
        var answerss     = (typeof answers != "undefined") ? answers : [];
        if(degrees == 0 && user_ids == 0 && answerss.length == 0) {
            reject("");
        } else { 
            const sqls = 'SELECT s.title, SUM(tbl2.is_correct) AS correct_answers, COUNT(tbl2.is_correct) AS total_questions,'+
                        ' concat(round((SUM(tbl2.is_correct) / COUNT(tbl2.is_correct) * 100 ))) AS percentage'+
                        ' FROM questions AS tbl1 '+
                        ' JOIN questions_options AS tbl2 ON tbl2.question_id = tbl1.id'+
                        ' JOIN subjects s ON s.id = tbl1.subject_id'+
                        ' WHERE tbl2.id IN ('+answerss+') and s.display = 1' +
                        ' GROUP BY tbl1.subject_id';
            runQuery(sqls).then((response) => {
                let responses = JSON.parse(JSON.stringify(response.results));
                responses     = responses.sort((a, b) => {
                    var nameA = parseInt(a.percentage); // ignore upper and lowercase
                    var nameB = parseInt(b.percentage); // ignore upper and lowercase
                    if (nameA > nameB)
                        return 1;
                    
                    if (nameA < nameB)
                        return -1;

                    // names must be equal
                    return 0;
                });
                responses = responses.reverse();
                
                switch(degree) {
                    case '1': // high school result
                        if(responses.length > 0) {
                            let report_subjects = [];
                            let report_marks = [];
                            const maths   = 20;
                            const english = 30;
                            const science = 30;
                            const ps      = 20;
                            totalp        = 0;
                            let one_perc  = 0;
                            responses.map((response) => {
                                if(response.title == 'Math') {
                                    one_perc = parseInt((maths / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }
                                
                                if(response.title == 'English') {
                                    one_perc = parseInt((english / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }

                                if(response.title == 'Science') {
                                    one_perc = parseInt((science / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }   

                                if(response.title == 'Pakistan Studies') {
                                    one_perc = parseInt((ps / 100) * response.percentage); 
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }
                                    
                                report_subjects.push(response.title);
                            });
                            
                            if(totalp >= 50) {
                                resolve({
                                    choose: 'Science',
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            } else {
                                resolve({
                                    choose: 'Arts',
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            }
                        } else { 
                            resolve({
                                choose: 'Arts',
                                status: 200,
                                report_subjects:report_subjects,
                                report_marks:report_marks
                            });
                        }
                        break;
                    case '2': // matric result
                        if(responses.length > 0) {
                            let report_subjects = [];
                            let report_marks = [];
                            const maths   = 20;
                            const english = 10;
                            const science = 30;
                            const computer= 30;
                            const ps      = 10;
                            totalp        = 0;
                            const top     = (responses[0]['title']) ? responses[0]['title'] : '';
                            responses.map((response) => {
                                if(response.title == 'Math') {
                                    one_perc = parseInt((maths / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                    report_subjects.push(response.title);
                                }
                                
                                if(response.title == 'English') {
                                    one_perc = parseInt((english / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                    report_subjects.push(response.title);
                                }

                                if(response.title == 'Science') {
                                    one_perc = parseInt((science / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                    report_subjects.push(response.title);
                                }

                                if(response.title == 'Computer Science') {
                                    one_perc = parseInt((computer / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                    report_subjects.push(response.title);
                                }

                                if(response.title == 'Pakistan Studies') { 
                                    one_perc = parseInt((ps / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                    report_subjects.push(response.title);
                                }   
                            });
                            
                            if(totalp >= 50) {
                                resolve({
                                    choose: (top == 'Science') ? 'Biology' : 'Computer Science',
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            } else {
                                resolve({
                                    choose: 'Arts',
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            }
                        } else { 
                            resolve({
                                choose: 'Arts',
                                status: 200,
                                report_subjects:report_subjects,
                                report_marks:report_marks
                            });
                        }
                      break;
                      case '3': // intermediate result
                        if(responses.length > 0) {
                            let report_subjects = [];
                            let report_marks = [];
                            const maths    = 20;
                            const computer = 20;
                            const biology  = 20;
                            const chemistry = 20;
                            const physics  = 20;
                            let totalp     = 0;
                            const top      = (responses[0]['title']) ? responses[0]['title'] : '';
                            responses.map((response) => {
                                if(response.title == 'Biology') {
                                    one_perc = parseInt((biology / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }
                                
                                if(response.title == 'Chemistry') {
                                    one_perc = parseInt((chemistry / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }

                                if(response.title == 'Physics') {
                                    one_perc = parseInt((physics / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }

                                if(response.title == 'Computer Science') { 
                                    one_perc = parseInt((computer / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }   

                                if(response.title == 'Math') { 
                                    one_perc = parseInt((maths / 100) * response.percentage);
                                    totalp  += one_perc;
                                    report_marks.push(one_perc);
                                }

                                report_subjects.push(response.title);
                            });
                            
                            if(totalp >= 50) {
                                let chooses = 'ICOM';
                                if(top == 'Biology') {
                                    chooses = 'Fsc Pre-Medical';
                                } else if(top == 'Chemistry' || top == 'Physics') {
                                    chooses = 'Fsc Pre-Engineering';
                                } else if(top == 'Computer Science') {
                                    chooses = 'ICS';
                                }

                                resolve({
                                    choose: chooses,
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            } else {
                                resolve({
                                    choose: 'FA',
                                    status: 200,
                                    report_subjects:report_subjects,
                                    report_marks:report_marks
                                });
                            }
                        } else { 
                            resolve({
                                choose: 'FA',
                                status: 200,
                                report_subjects:report_subjects,
                                report_marks:report_marks
                            });
                        }
                      break;
                    default:
                        reject("");
                }
            });
        }
    });
}