import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../reducers/rootReducer';
import rootSaga from './../sagas';
import {createSagaMiddleware} from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)