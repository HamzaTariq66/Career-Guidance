import { takeLatest, put } from "redux-saga/effects";
import * as types from '../types/types';
import Api from '../../lib/api';
import * as urls from '../../lib/apiUrls';
import { createNotification } from "../actions/createNotifications";

export function* getAdmins() {
  yield takeLatest(types.GET_ADMINS, doApiCall)
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_ADMINS, params.params);
    console.log('reponse is', response);
    yield put({ type: types.GET_ADMINS_SUCCESS, payload: response });
  } catch (error) {
    console.log('error is', error);
    yield put({ type: types.GET_ADMINS_FAILURE, payload: error });
  }
}

export function* adminSignUp() {
  yield takeLatest(types.ADMIN_SIGN_UP, doSignUpApiCall)
}

function* doSignUpApiCall(params) {
  try {
    const response = yield Api.post(urls.ADMIN_SIGN_UP, params.params);
    console.log('reponse is', response);
    createNotification('success', 'User Added Successfully');
    yield put({ type: types.ADMIN_SIGN_UP_SUCCESS, payload: response });
  } catch (error) {
    console.log('error is', error);
    createNotification('error', error.message);
    yield put({ type: types.ADMIN_SIGN_UP_FAILURE, payload: error });
  }
}

export function* updateAdmin() {
  yield takeLatest(types.UPDATE_ADMIN, doUpdateAdminApiCall)
}

function* doUpdateAdminApiCall(params) {
  try {

    const URL = urls.UPDATE_ADMIN.replace(':id', params.params.adminId);
    const response = yield Api.post(URL, params.params);
    console.log('reponse is', response);
    createNotification('success', 'User Updated Successfully');
    yield put({ type: types.UPDATE_ADMIN_SUCCESS, payload: response });
  } catch (error) {
    console.log('error is', error);
    createNotification('error', error.message);
    yield put({ type: types.UPDATE_ADMIN_FAILURE, payload: error });
  }
}