import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneSchool = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const school = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SCHOOLS:
      return {
        ...state,
        loading: true
      };
    case types.GET_SCHOOLS_SUCCESS:
      return {
        ...state,
        payload: action.payload.school,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_SCHOOLS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_SCHOOL:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_SCHOOL_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          school => school.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_SCHOOL_FAILURE:
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

export const createAndUpdateSchool = (
  state = initialStateForOneSchool,
  action
) => {
  switch (action.type) {
      case types.CREATE_SCHOOL:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_SCHOOL_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_SCHOOL_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_SCHOOL:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_SCHOOL_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_SCHOOL_FAILURE:
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
