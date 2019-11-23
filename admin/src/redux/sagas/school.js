import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getSchools() {
  yield takeLatest(types.GET_SCHOOLS, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_SCHOOLS, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_SCHOOLS_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_SCHOOLS_FAILURE, payload: error });
  }
}

export function* createSchool() {
  yield takeLatest(types.CREATE_SCHOOL, doCreateSchoolApiCall);
}

function* doCreateSchoolApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_SCHOOL, params.params);
    console.log("reponse is", response);
    createNotification("success", "School Added Successfully");
    yield put({ type: types.CREATE_SCHOOL_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_SCHOOL_FAILURE, payload: error });
  }
}

export function* updateSchool() {
  yield takeLatest(types.UPDATE_SCHOOL, doUpdateSchoolApiCall);
}

function* doUpdateSchoolApiCall(params) {
  try {
    const URL = urls.UPDATE_SCHOOL.replace(":id", params.params.schoolId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "School Updated Successfully");
    yield put({ type: types.UPDATE_SCHOOL_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_SCHOOL_FAILURE, payload: error });
  }
}

export function* deleteSchool() {
  yield takeLatest(types.DELETE_SCHOOL, doDeleteSchoolApiCall);
}

function* doDeleteSchoolApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_SCHOOL.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "School Deleted Successfully");
    yield put({
      type: types.DELETE_SCHOOL_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_SCHOOL_FAILURE, payload: error });
  }
}
