import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['categories', 'featured']
}

const reducers = combineReducers({
    products: productsReducer,
});

export default persistReducer(persistConfig, reducers);