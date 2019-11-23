import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneCareer = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const career = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CAREERS:
      return {
        ...state,
        loading: true
      };
    case types.GET_CAREERS_SUCCESS:
      return {
        ...state,
        payload: action.payload.career,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_CAREERS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_CAREER:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_CAREER_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          career => career.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_CAREER_FAILURE:
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

export const createAndUpdateCareer = (
  state = initialStateForOneCareer,
  action
) => {
  switch (action.type) {
      case types.CREATE_CAREER:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_CAREER_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_CAREER_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_CAREER:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_CAREER_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_CAREER_FAILURE:
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
