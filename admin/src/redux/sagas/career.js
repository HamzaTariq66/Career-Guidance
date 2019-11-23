import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getCareers() {
  yield takeLatest(types.GET_CAREERS, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_CAREERS, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_CAREERS_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_CAREERS_FAILURE, payload: error });
  }
}

export function* createCareer() {
  yield takeLatest(types.CREATE_CAREER, doCreateCareerApiCall);
}

function* doCreateCareerApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_CAREER, params.params);
    console.log("reponse is", response);
    createNotification("success", "Career Added Successfully");
    yield put({ type: types.CREATE_CAREER_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_CAREER_FAILURE, payload: error });
  }
}

export function* updateCareer() {
  yield takeLatest(types.UPDATE_CAREER, doUpdateCareerApiCall);
}

function* doUpdateCareerApiCall(params) {
  try {
    const URL = urls.UPDATE_CAREER.replace(":id", params.params.careerId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "Career Updated Successfully");
    yield put({ type: types.UPDATE_CAREER_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_CAREER_FAILURE, payload: error });
  }
}

export function* deleteCareer() {
  yield takeLatest(types.DELETE_CAREER, doDeleteCareerApiCall);
}

function* doDeleteCareerApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_CAREER.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "Career Deleted Successfully");
    yield put({
      type: types.DELETE_CAREER_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_CAREER_FAILURE, payload: error });
  }
}
