import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getFields() {
  yield takeLatest(types.GET_FIELDS, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_FIELDS, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_FIELDS_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_FIELDS_FAILURE, payload: error });
  }
}

export function* createField() {
  yield takeLatest(types.CREATE_FIELD, doCreateFieldApiCall);
}

function* doCreateFieldApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_FIELD, params.params);
    console.log("reponse is", response);
    createNotification("success", "Field Added Successfully");
    yield put({ type: types.CREATE_FIELD_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_FIELD_FAILURE, payload: error });
  }
}

export function* updateField() {
  yield takeLatest(types.UPDATE_FIELD, doUpdateFieldApiCall);
}

function* doUpdateFieldApiCall(params) {
  try {
    const URL = urls.UPDATE_FIELD.replace(":id", params.params.fieldId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "Field Updated Successfully");
    yield put({ type: types.UPDATE_FIELD_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_FIELD_FAILURE, payload: error });
  }
}

export function* deleteField() {
  yield takeLatest(types.DELETE_FIELD, doDeleteFieldApiCall);
}

function* doDeleteFieldApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_FIELD.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "Field Deleted Successfully");
    yield put({
      type: types.DELETE_FIELD_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_FIELD_FAILURE, payload: error });
  }
}
