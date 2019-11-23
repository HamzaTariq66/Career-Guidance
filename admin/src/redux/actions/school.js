import * as types from "../types/types";

export const getSchools = params => {
  return {
    type: types.GET_SCHOOLS,
    params
  };
};

export const createSchool = params => {
  return {
    type: types.CREATE_SCHOOL,
    params
  };
};

export const updateSchool = params => {
  return {
    type: types.UPDATE_SCHOOL,
    params
  };
};
export const deleteSchool = params => {
  return {
    type: types.DELETE_SCHOOL,
    params
  };
};
