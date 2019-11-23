import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getDegrees() {
  yield takeLatest(types.GET_DEGREES, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_DEGREES, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_DEGREES_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_DEGREES_FAILURE, payload: error });
  }
}

export function* createDegree() {
  yield takeLatest(types.CREATE_DEGREE, doCreateDegreeApiCall);
}

function* doCreateDegreeApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_DEGREE, params.params);
    console.log("reponse is", response);
    createNotification("success", "Degree Added Successfully");
    yield put({ type: types.CREATE_DEGREE_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_DEGREE_FAILURE, payload: error });
  }
}

export function* updateDegree() {
  yield takeLatest(types.UPDATE_DEGREE, doUpdateDegreeApiCall);
}

function* doUpdateDegreeApiCall(params) {
  try {
    const URL = urls.UPDATE_DEGREE.replace(":id", params.params.degreeId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "Degree Updated Successfully");
    yield put({ type: types.UPDATE_DEGREE_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_DEGREE_FAILURE, payload: error });
  }
}

export function* deleteDegree() {
  yield takeLatest(types.DELETE_DEGREE, doDeleteDegreeApiCall);
}

function* doDeleteDegreeApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_DEGREE.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "Degree Deleted Successfully");
    yield put({
      type: types.DELETE_DEGREE_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_DEGREE_FAILURE, payload: error });
  }
}
