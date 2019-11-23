import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneCollege = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const college = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COLLEGES:
      return {
        ...state,
        loading: true
      };
    case types.GET_COLLEGES_SUCCESS:
      return {
        ...state,
        payload: action.payload.college,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_COLLEGES_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_COLLEGE:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_COLLEGE_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          college => college.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_COLLEGE_FAILURE:
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

export const createAndUpdateCollege = (
  state = initialStateForOneCollege,
  action
) => {
  switch (action.type) {
    case types.CREATE_COLLEGE:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_COLLEGE_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_COLLEGE_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_COLLEGE:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_COLLEGE_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_COLLEGE_FAILURE:
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
