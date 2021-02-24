import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {fireReducer} from '../store';

const persistConfig = {
    key: 'subero',
    storage,
};

const persistedReducer = persistReducer(persistConfig, fireReducer);

export default function configureStore() {
    const store = createStore(
        persistedReducer,
        applyMiddleware(thunkMiddleware)
    );

    const persistor = persistStore(store);

    return { store, persistor };
}