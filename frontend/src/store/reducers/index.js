import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['products']
}

const reducers = combineReducers({
    products: productsReducer,
});

export default persistReducer(persistConfig, reducers);