import * as types from "../types/types";

export const getColleges = params => {
  return {
    type: types.GET_COLLEGES,
    params
  };
};

export const createCollege = params => {
  return {
    type: types.CREATE_COLLEGE,
    params
  };
};

export const updateCollege = params => {
  return {
    type: types.UPDATE_COLLEGE,
    params
  };
};
export const deleteCollege = params => {
  return {
    type: types.DELETE_COLLEGE,
    params
  };
};