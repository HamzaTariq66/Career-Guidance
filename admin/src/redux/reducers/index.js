import { combineReducers }  from 'redux';
import * as login from '../reducers/loginReducer';
import * as admin from '../reducers/admin';
import * as university from '../reducers/university';
import * as college from '../reducers/college';
import * as school from '../reducers/school';
import * as degree from '../reducers/degree';
import * as field from '../reducers/field';
import * as subject from '../reducers/subject';
import * as career from '../reducers/career';
import * as question from '../reducers/question';

const rootReducer = combineReducers(Object.assign(
    login,  
    admin,
    university,
    college,
    school,
    degree,
    field,
    subject,
    career,
    question
))

export default rootReducer;