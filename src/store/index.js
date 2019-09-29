import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../reducers';
import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger'


const store = createStore(rootReducer, applyMiddleware(logger))



export default store