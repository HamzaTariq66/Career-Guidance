require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

// api routes
app.use('/admins', require('./admins/admin.controller'));
app.use('/universities', require('./universities/university.controller'));
app.use('/colleges', require('./colleges/college.controller'));
app.use('/schools', require('./schools/school.controller'));
app.use('/degrees', require('./degrees/degree.controller'));
app.use('/fields', require('./fields/field.controller'));
app.use('/subjects', require('./subjects/subject.controller'));
app.use('/careers', require('./careers/career.controller'));
app.use('/users', require('./users/user.controller'));
app.use('/questions', require('./questions/question.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
