import * as types from "../types/types";

export const getCareers = params => {
  return {
    type: types.GET_CAREERS,
    params
  };
};

export const createCareer = params => {
  return {
    type: types.CREATE_CAREER,
    params
  };
};

export const updateCareer = params => {
  return {
    type: types.UPDATE_CAREER,
    params
  };
};
export const deleteCareer = params => {
  return {
    type: types.DELETE_CAREER,
    params
  };
};
