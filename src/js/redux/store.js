import { createStore, applyMiddleware, compose } from "redux";
import storage from 'redux-persist/lib/storage'
import { thunk } from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(store)

export { store, persistor }