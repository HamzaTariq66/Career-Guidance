import * as types from "../types/types";

export const getSubjects = params => {
  return {
    type: types.GET_SUBJECTS,
    params
  };
};

export const createSubject = params => {
  return {
    type: types.CREATE_SUBJECT,
    params
  };
};

export const updateSubject = params => {
  return {
    type: types.UPDATE_SUBJECT,
    params
  };
};
export const deleteSubject = params => {
  return {
    type: types.DELETE_SUBJECT,
    params
  };
};
