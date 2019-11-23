import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneField = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const field = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FIELDS:
      return {
        ...state,
        loading: true
      };
    case types.GET_FIELDS_SUCCESS:
      return {
        ...state,
        payload: action.payload.field,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_FIELDS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_FIELD:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_FIELD_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          field => field.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_FIELD_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };

    default:
      return state;
  }
};

export const createAndUpdateField = (
  state = initialStateForOneField,
  action
) => {
  switch (action.type) {
      case types.CREATE_FIELD:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_FIELD_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_FIELD_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_FIELD:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_FIELD_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_FIELD_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };

    default:
      return state;
  }
};
