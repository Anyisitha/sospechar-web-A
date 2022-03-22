import { types } from "../types/types";

const initialState = {
    loaded: false,
    data: [],
    favorites: []
};

export const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.mediafinishFetching:
            return {
                ...state,
                loaded: true,
                data: [...action.payload]
            };

        case types.mediafinishFetchingFavorites:
            return {
                ...state,
                loaded: true,
                favorites: [...action.payload]
            };

        case types.mediaRemoveFavorite:
            return {
                ...state,
                loaded: true,
                favorites: [...action.payload]
            };

        default:
            return state;
    }
};