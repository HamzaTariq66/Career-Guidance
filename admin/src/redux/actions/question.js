import * as types from "../types/types";

export const getQuestions = params => {
  return {
    type: types.GET_QUESTIONS,
    params
  };
};

export const createQuestion = params => {
  return {
    type: types.CREATE_QUESTION,
    params
  };
};

export const updateQuestion = params => {
  return {
    type: types.UPDATE_QUESTION,
    params
  };
};
export const deleteQuestion = params => {
  return {
    type: types.DELETE_QUESTION,
    params
  };
};
