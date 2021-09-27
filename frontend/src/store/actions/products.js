import { actionTypes } from '../types';

const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        payload: categories,
    };
}

const setFeatured = (products) => {
    return {
        type: actionTypes.SET_FEATURED_PRODUCTS,
        payload: products,
    }
}

export {
    setCategories,
    setFeatured
}