import * as types from '../types/types';

let initialState = {
    status: null,
    error: null,
    errorMessage: null,
    payload: [],
    count: null,
    loading: false,
}

let initialStateForOneAdmin = {
    status: null,
    error: null,
    errorMessage: null,
    payload: {},
    loading: false,
}

export const admin = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ADMINS:
            return {
                ...state,
                loading: true
            }
        case types.GET_ADMINS_SUCCESS:
            return {
                ...state,
                payload: action.payload.admin,
                status: action.payload.status,
                loading: false,
                // count: action.payload.count,
                count: 20,
                error: false
            }
        case types.GET_ADMINS_FAILURE:
            return {
                ...state,
                status: action.payload.status,
                loading: false,
                errorMessage: action.payload.error,
                error: true
            }


        default:
            return state
    }
}

export const signUpAndUpdateAdmin = (state = initialStateForOneAdmin, action) => {
    switch (action.type) {
        case types.RESET_ADMIN_STATE:
            return initialStateForOneAdmin
        case types.ADMIN_SIGN_UP:
            return {
                ...state,
                loading: true
            }
        case types.ADMIN_SIGN_UP_SUCCESS:
            return {
                ...state,
                payload: action.payload.message,
                status: action.payload.status,
                loading: false,
                error: false
            }
        case types.ADMIN_SIGN_UP_FAILURE:
            return {
                ...state,
                status: action.payload.status,
                loading: false,
                errorMessage: action.payload.error,
                error: true
            }
        case types.UPDATE_ADMIN:
            return {
                ...state,
                loading: true
            }
        case types.UPDATE_ADMIN_SUCCESS:
            return {
                ...state,
                payload: action.payload.message,
                status: action.payload.status,
                loading: false,
                error: false
            }
        case types.UPDATE_ADMIN_FAILURE:
            return {
                ...state,
                status: action.payload.status,
                loading: false,
                errorMessage: action.payload.error,
                error: true
            }

        default:
            return state
    }
}


// export const updateAdmin = (state = initialStateForOneAdmin, action) => {
//     switch (action.type) {
//         case types.UPDATE_ADMIN:
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
//         case types.UPDATE_ADMIN_FAILURE:
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
