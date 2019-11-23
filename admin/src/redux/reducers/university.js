import * as types from "../types/types";

let initialState = {
  status: null,
  error: null,
  errorMessage: null,
  payload: [],
  count: null,
  loading: false
};

let initialStateForOneUniversity = {
  status: null,
  error: null,
  errorMessage: null,
  payload: {},
  loading: false
};

export const university = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_UNIVERSITIES:
      return {
        ...state,
        loading: true
      };
    case types.GET_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        payload: action.payload.university,
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.GET_UNIVERSITIES_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.DELETE_UNIVERSITY:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        payload: state.payload.filter(
          university => university.id !== action.payload.id
        ),
        status: action.payload.status,
        loading: false,
        // count: action.payload.count,
        count: 20,
        error: false
      };
    case types.DELETE_UNIVERSITY_FAILURE:
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

export const createAndUpdateUniversity = (
  state = initialStateForOneUniversity,
  action
) => {
  switch (action.type) {
    case types.CREATE_UNIVERSITY:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.CREATE_UNIVERSITY_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        loading: false,
        errorMessage: action.payload.error,
        error: true
      };
    case types.UPDATE_UNIVERSITY:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_UNIVERSITY_SUCCESS:
      return {
        ...state,
        payload: action.payload.message,
        status: action.payload.status,
        loading: false,
        error: false
      };
    case types.UPDATE_UNIVERSITY_FAILURE:
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

// export const updateUniversity = (state = initialStateForOneUniversity, action) => {
//     switch (action.type) {
//         case types.UPDATE_UNIVERSITY:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case types.UPDATE_ADMIN_SUCCESS:
//             return {
//                 ...state,
//                 payload: action.payload.message,
//                 status: action.payload.status,
//                 loading: false,
//                 error: false
//             }
//         case types.UPDATE_UNIVERSITY_FAILURE:
//             return {
//                 ...state,
//                 status: action.payload.status,
//                 loading: false,
//                 errorMessage: action.payload.error,
//                 error: true
//             }

//         default:
//             return state
//     }
// }
