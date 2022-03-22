import { types } from "../types/types";

export const setLoginErrorMessage = (message) => ({
    type: types.uiloginErrorMessage,
    payload: message
});

export const setRegisterErrorMessage = (message) => ({
    type: types.uiregisterErrorMessage,
    payload: message
});

export const setSuccessRegisterMessage = (message) => ({
    type: types.uiregisterSuccessMessage,
    payload: message
});

export const removeErrorMessage = () => ({
    type: types.uiRemoveErrorMessage
});

export const removeSuccessMessage = () => ({
    type: types.uiRemoveSuccessMessage
});

export const playingMedia = (mediaId, mediaTitle, mediaText1, mediaText2, mediaType, mediaBc, sectionId, filePath) => ({
    type: types.uiPlayingMedia,
    payload: {
        mediaId,
        sectionId,
        mediaTitle,
        mediaText1,
        mediaText2, 
        mediaBc,
        mediaType,
        filePath
    }
});

export const stopMedia = () => ({
    type: types.uiStopMedia
});

export const showUserPop = () => ({
    type: types.uiShowUserPop
});

export const hideUserPop = () => ({
    type: types.uiHideUserPop
});