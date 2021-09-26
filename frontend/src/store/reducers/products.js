import { actionTypes } from "../types";

const initialState = {
    categories: null,
}

const catergoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CATEGORIES:
            return { ...state, categories: payload };
        default:
            return state;
    }
}

export {
    catergoryReducer,
}