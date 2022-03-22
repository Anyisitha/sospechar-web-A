import { types } from "../types/types";

const initialState = {
    isAuth: false,
    loaded: false,
    data: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                isAuth: true,
                loaded: false
            };

        case types.authVerifyingFinish:
            return {
                ...state,
                loaded: true,
                data: { ...action.payload }
            };

        case types.authLogOut:
            return {
                ...state,
                isAuth: false,
                loaded: true,
                data: {}
            };

        default:
            return state;
    }
};