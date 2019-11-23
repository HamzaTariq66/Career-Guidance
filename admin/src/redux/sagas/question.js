import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types/types";
import Api from "../../lib/api";
import * as urls from "../../lib/apiUrls";
import { createNotification } from "../actions/createNotifications";

export function* getQuestions() {
  yield takeLatest(types.GET_QUESTIONS, doApiCall);
}

function* doApiCall(params) {
  try {
    const response = yield Api.get(urls.GET_QUESTIONS, params.params);
    console.log("reponse is", response);
    yield put({ type: types.GET_QUESTIONS_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    yield put({ type: types.GET_QUESTIONS_FAILURE, payload: error });
  }
}

export function* createQuestion() {
  yield takeLatest(types.CREATE_QUESTION, doCreateQuestionApiCall);
}

function* doCreateQuestionApiCall(params) {
  try {
    const response = yield Api.post(urls.CREATE_QUESTION, params.params);
    console.log("reponse is", response);
    createNotification("success", "Question Added Successfully");
    yield put({ type: types.CREATE_QUESTION_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.CREATE_QUESTION_FAILURE, payload: error });
  }
}

export function* updateQuestion() {
  yield takeLatest(types.UPDATE_QUESTION, doUpdateQuestionApiCall);
}

function* doUpdateQuestionApiCall(params) {
  try {
    const URL = urls.UPDATE_QUESTION.replace(":id", params.params.questionId);
    const response = yield Api.post(URL, params.params);
    console.log("reponse is", response);
    createNotification("success", "Question Updated Successfully");
    yield put({ type: types.UPDATE_QUESTION_SUCCESS, payload: response });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.UPDATE_QUESTION_FAILURE, payload: error });
  }
}

export function* deleteQuestion() {
  yield takeLatest(types.DELETE_QUESTION, doDeleteQuestionApiCall);
}

function* doDeleteQuestionApiCall(params) {
  try {
    var id = params.params;
    const URL = urls.DELETE_QUESTION.replace(":id", id);
    const response = yield Api.delete(URL);
    console.log("reponse is", response);
    createNotification("success", "Question Deleted Successfully");
    yield put({
      type: types.DELETE_QUESTION_SUCCESS,
      payload: { ...response, id: id }
    });
  } catch (error) {
    console.log("error is", error);
    createNotification("error", error.message);
    yield put({ type: types.DELETE_QUESTION_FAILURE, payload: error });
  }
}
