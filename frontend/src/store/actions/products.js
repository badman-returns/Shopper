import { actionTypes } from '../types';

const seProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export {
    seProducts
}