import { actionTypes } from '../types';

const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        payload: categories,
    };
}

export {
    setCategories,
}