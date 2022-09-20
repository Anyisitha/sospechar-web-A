import { types } from '../types/types';
import { fecthProfessionalMedia, fetchDeleteFavorite, fetchGetAllFavorites } from '../helpers/media';

export const startMediaFetching = () => {
    return async (dispatch) => {
        try {

            const token = localStorage.getItem('X-token') || '';
            const media = await fecthProfessionalMedia(token);

            console.log(media, "action")

            dispatch(finishMediaFetching(media));

        } catch (error) {
            console.log(error);
        }
    }
};

export const finishMediaFetching = (media) => ({
    type: types.mediafinishFetching,
    payload: media
});

export const startFavoritesFetching = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('X-token') || '';
        const favorites = await fetchGetAllFavorites(token);

        dispatch(finishFavoritesFetching(favorites.data));
    }
}

export const finishFavoritesFetching = (favorites) => ({
    type: types.mediafinishFetchingFavorites,
    payload: favorites
});

export const startRemovingFavorite = (mediaId, favoritesArray = []) => {
    return async (dispatch) => {
        const token = localStorage.getItem('X-token') || '';

        const res = await fetchDeleteFavorite(token, mediaId);

        if (res) {
            const newFavorites = favoritesArray.filter(item => item.id !== mediaId);
            dispatch(removeFavorite(newFavorites));
        }
    }
}

export const removeFavorite = (newFavorites) => ({
    type: types.mediaRemoveFavorite,
    payload: newFavorites
});