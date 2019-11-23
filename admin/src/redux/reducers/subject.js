import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneSubject = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const subject = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SUBJECTS:
      return {
        ...state,
        loading: true
      };
    case types.GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        payload: action.payload.subject,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_SUBJECTS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_SUBJECT:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          subject => subject.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_SUBJECT_FAILURE:
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

export const createAndUpdateSubject = (
  state = initialStateForOneSubject,
  action
) => {
  switch (action.type) {
      case types.CREATE_SUBJECT:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_SUBJECT_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_SUBJECT:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_SUBJECT_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_SUBJECT_FAILURE:
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
