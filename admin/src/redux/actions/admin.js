import * as types from '../types/types';

export const getAdmins = (params) => {
    return {
        type: types.GET_ADMINS,
        params
    }
}

export const signUp = (params) => {
    return {
        type: types.ADMIN_SIGN_UP,
        params
    }
}

export const updateAdmin = (params) => {
    return {
        type: types.UPDATE_ADMIN,
        params
    }
}

export const resetAdmin = () => {
    return {
        type: types.RESET_ADMIN_STATE,       
    }
}
