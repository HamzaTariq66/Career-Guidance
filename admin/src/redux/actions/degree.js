import * as types from "../types/types";

export const getDegrees = params => {
  return {
    type: types.GET_DEGREES,
    params
  };
};

export const createDegree = params => {
  return {
    type: types.CREATE_DEGREE,
    params
  };
};

export const updateDegree = params => {
  return {
    type: types.UPDATE_DEGREE,
    params
  };
};
export const deleteDegree = params => {
  return {
    type: types.DELETE_DEGREE,
    params
  };
};
