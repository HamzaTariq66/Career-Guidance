import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getSubjects() {
  yield takeLatest(types.GET_SUBJECTS, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_SUBJECTS, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_SUBJECTS_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_SUBJECTS_FAILURE, payload: error });
  }
}

export function* createSubject() {
  yield takeLatest(types.CREATE_SUBJECT, doCreateSubjectApiCall);
}

function* doCreateSubjectApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_SUBJECT, params.params);
    console.log("reponse is", response);
    createNotification("success", "Subject Added Successfully");
    yield put({ type: types.CREATE_SUBJECT_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_SUBJECT_FAILURE, payload: error });
  }
}

export function* updateSubject() {
  yield takeLatest(types.UPDATE_SUBJECT, doUpdateSubjectApiCall);
}

function* doUpdateSubjectApiCall(params) {
  try {
    const URL = urls.UPDATE_SUBJECT.replace(":id", params.params.subjectId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "Subject Updated Successfully");
    yield put({ type: types.UPDATE_SUBJECT_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_SUBJECT_FAILURE, payload: error });
  }
}

export function* deleteSubject() {
  yield takeLatest(types.DELETE_SUBJECT, doDeleteSubjectApiCall);
}

function* doDeleteSubjectApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_SUBJECT.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "Subject Deleted Successfully");
    yield put({
      type: types.DELETE_SUBJECT_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_SUBJECT_FAILURE, payload: error });
  }
}
