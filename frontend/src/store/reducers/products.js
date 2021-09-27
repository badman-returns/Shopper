import { actionTypes } from "../types";

const initialState = {
    products: null,
    productDetails: null,
}


const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case actionTypes.SET_PRODUCT_DETAILS:
            return { ...state, productDetails: payload };
        default:
            return state;
    }
}

export {
    productsReducer
}