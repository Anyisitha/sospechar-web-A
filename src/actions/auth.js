import { types } from "../types/types";

import { setLoginErrorMessage } from "./ui";
import { fecthLogin, fecthToken } from "../helpers/user";


export const startLogIn = (email, password) => {
    return async (dispatch) => {

        try {
            const data = await fecthLogin(email, password);

        if (data) {
            localStorage.setItem('X-token', data.token);
            localStorage.setItem('init-date-token', new Date().getTime());

            dispatch(verifyToken());
        } else {
            dispatch(setLoginErrorMessage('El correo o la contraseña son incorrectos'));
        }
        } catch(error) {
            dispatch(setLoginErrorMessage('El correo o la contraseña son incorrectos'));
        }

    };
}

export const verifyToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('X-token') || '';

        if(token && token !== '') {
            try {
                const userData = await fecthToken(token);
    
                if (userData) {
                    dispatch(login());
                    dispatch(verifyingFinished(userData));
                } else {
                    dispatch(logOut());
                }
            } catch(error) {
                dispatch(logOut());
            }
        } else {
            dispatch(logOut());
        }
    }
};

export const login = () => ({
    type: types.authLogin
});

export const logOut = () => {

    localStorage.removeItem('X-token');
    localStorage.removeItem('init-date-token');

    return {
        type: types.authLogOut
    }
};

export const verifyingFinished = (data) => ({
    type: types.authVerifyingFinish,
    payload: data
});
