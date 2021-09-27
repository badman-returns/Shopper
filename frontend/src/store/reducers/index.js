import { combineReducers } from "redux";
import { catergoryReducer, featuredProductsReducer } from "./products";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['categories', 'featured']
}

const reducers = combineReducers({
    categories: catergoryReducer,
    featured: featuredProductsReducer,
});

export default persistReducer(persistConfig, reducers);