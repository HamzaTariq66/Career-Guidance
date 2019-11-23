import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneQuestion = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const question = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        payload: action.payload.question,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_QUESTIONS_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_QUESTION:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          question => question.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_QUESTION_FAILURE:
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

export const createAndUpdateQuestion = (
  state = initialStateForOneQuestion,
  action
) => {
  switch (action.type) {
      case types.CREATE_QUESTION:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_QUESTION_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_QUESTION:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_QUESTION_FAILURE:
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
