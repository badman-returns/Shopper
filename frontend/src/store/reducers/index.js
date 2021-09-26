import { combineReducers } from "redux";
import { catergoryReducer } from "./products";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['categories']
}

const reducers = combineReducers({
    categories: catergoryReducer
});

export default persistReducer(persistConfig, reducers);