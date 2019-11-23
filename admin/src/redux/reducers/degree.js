import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneDegree = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const degree = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEGREES:
      return {
        ...state,
        loading: true
      };
    case types.GET_DEGREES_SUCCESS:
      return {
        ...state,
        payload: action.payload.degree,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_DEGREES_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_DEGREE:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_DEGREE_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          degree => degree.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_DEGREE_FAILURE:
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

export const createAndUpdateDegree = (
  state = initialStateForOneDegree,
  action
) => {
  switch (action.type) {
      case types.CREATE_DEGREE:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_DEGREE_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_DEGREE_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_DEGREE:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_DEGREE_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_DEGREE_FAILURE:
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
