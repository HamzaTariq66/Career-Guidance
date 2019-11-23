import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getColleges() {
  yield takeLatest(types.GET_COLLEGES, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_COLLEGES, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_COLLEGES_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_COLLEGES_FAILURE, payload: error });
  }
}

export function* createCollege() {
  yield takeLatest(types.CREATE_COLLEGE, doCreateCollegeApiCall);
}

function* doCreateCollegeApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_COLLEGE, params.params);
    console.log("reponse is", response);
    createNotification("success", "College Added Successfully");
    yield put({ type: types.CREATE_COLLEGE_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_COLLEGE_FAILURE, payload: error });
  }
}

export function* updateCollege() {
  yield takeLatest(types.UPDATE_COLLEGE, doUpdateCollegeApiCall);
}

function* doUpdateCollegeApiCall(params) {
  try {
    const URL = urls.UPDATE_COLLEGE.replace(":id", params.params.collegeId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "College Updated Successfully");
    yield put({ type: types.UPDATE_COLLEGE_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_COLLEGE_FAILURE, payload: error });
  }
}

export function* deleteCollege() {
  yield takeLatest(types.DELETE_COLLEGE, doDeleteCollegeApiCall);
}

function* doDeleteCollegeApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_COLLEGE.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "College Deleted Successfully");
    yield put({
      type: types.DELETE_COLLEGE_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_COLLEGE_FAILURE, payload: error });
  }
}
