import * as types from '../types/types';
let initialState = {
    status: null,
    error: null,
    data: null,
    loading: null,
    isLoggedIn: false
}
export const loginReducer = (state = initialState, action) => {    
    switch (action.type) {
        case types.LOGOUT:
        localStorage.setItem('jwtToken', '');
            return {
                ...state,
                data: null,
                loading: false,
                isLoggedIn: false
            }
        case types.LOGIIN_API:
        return {
            ...state, 
            loading: true,
            status: null,
        }
        case types.LOGIIN_API_SUCCESS:
        localStorage.setItem('jwtToken', action.payload.token);
            return {
                ...state,
                status: action.payload.status,
                data: action.payload,
                loading: false,
                error: false,
                isLoggedIn: true
            }
        case types.LOGIIN_API_FAILURE:
            return {
                ...state,
                status: action.status,
                data: null,
                loading: false,
                error: true,
                isLoggedIn: false
            }
        default:
            return state 
    }
}
