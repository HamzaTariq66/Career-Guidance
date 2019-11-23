import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// import storageSession from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index';
import { rootSaga } from '../sagas/index';






const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, createLogger())
);
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['loginReducer'],
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};




const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;



