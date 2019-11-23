import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getUniversities() {
  yield takeLatest(types.GET_UNIVERSITIES, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_UNIVERSITIES, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_UNIVERSITIES_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_UNIVERSITIES_FAILURE, payload: error });
  }
}

export function* createUniversity() {
  yield takeLatest(types.CREATE_UNIVERSITY, doCreateUniversityApiCall);
}

function* doCreateUniversityApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_UNIVERSITY, params.params);
    console.log("reponse is", response);
    createNotification("success", "University Added Successfully");
    yield put({ type: types.CREATE_UNIVERSITY_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_UNIVERSITY_FAILURE, payload: error });
  }
}

export function* updateUniversity() {
  yield takeLatest(types.UPDATE_UNIVERSITY, doUpdateUniversityApiCall);
}

function* doUpdateUniversityApiCall(params) {
  try {
    const URL = urls.UPDATE_UNIVERSITY.replace(
      ":id",
      params.params.universityId
    );
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "University Updated Successfully");
    yield put({ type: types.UPDATE_UNIVERSITY_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_UNIVERSITY_FAILURE, payload: error });
  }
}

export function* deleteUniversity() {
  yield takeLatest(types.DELETE_UNIVERSITY, doDeleteUniversityApiCall);
}

function* doDeleteUniversityApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_UNIVERSITY.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "University Deleted Successfully");
    yield put({
      type: types.DELETE_UNIVERSITY_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_UNIVERSITY_FAILURE, payload: error });
  }
}
