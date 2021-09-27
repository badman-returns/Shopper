import { actionTypes } from '../types';

const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

const setProductDetails = (product) => {
    return {
        type: actionTypes.SET_PRODUCT_DETAILS,
        payload: product,
    }
}

export {
    setProducts,
    setProductDetails,
}