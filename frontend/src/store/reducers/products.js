import { actionTypes } from "../types";

const initialState = {
    products: null,
}


const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export {
    productsReducer
}