import * as types from "../types/types";

export const getFields = params => {
  return {
    type: types.GET_FIELDS,
    params
  };
};

export const createField = params => {
  return {
    type: types.CREATE_FIELD,
    params
  };
};

export const updateField = params => {
  return {
    type: types.UPDATE_FIELD,
    params
  };
};
export const deleteField = params => {
  return {
    type: types.DELETE_FIELD,
    params
  };
};
