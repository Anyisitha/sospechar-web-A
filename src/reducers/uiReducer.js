import { types } from "../types/types";

const initialState = {
    loading: false,
    playingMedia: null,
    loginErrorMessage: null,
    registerErrorMessage: null,
    registerSuccessMessage: null,
    userPop: false
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            };

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            };

        case types.uiloginErrorMessage:
            return {
                ...state,
                loginErrorMessage: action.payload
            };

        case types.uiregisterErrorMessage:
            return {
                ...state,
                registerErrorMessage: action.payload
            };

        case types.uiregisterSuccessMessage:
            return {
                ...state,
                registerSuccessMessage: action.payload
            };

        case types.uiRemoveErrorMessage:
            return {
                ...state,
                loginErrorMessage: null,
                registerErrorMessage: null
            };

        case types.uiRemoveSuccessMessage:
            return {
                ...state,
                registerSuccessMessage: null
            };

        case types.uiPlayingMedia:
            return {
                ...state,
                playingMedia: action.payload
            };

        case types.uiStopMedia:
            return {
                ...state,
                playingMedia: null
            };

        case types.uiShowUserPop:
            return {
                ...state,
                userPop: true
            };

        case types.uiHideUserPop:
            return {
                ...state,
                userPop: false
            };

        default:
            return state;
    }
};