import {put, call, takeLatest} from 'redux-saga/effects';
import { api_friends } from './../api';
import {
    FRIENDS_REQUEST,
    FRIENDS_SUCCESS,
    FRIENDS_FAILURE
} from './../constants';

function* friendsWalkerSaga(action){
    try{
        yield call(api_friends)
        yield put({type: FRIENDS_SUCCESS, payload:action.payload})
    }
    catch(e){
        yield put({type: FRIENDS_FAILURE})
    }
}

export function* friendsWatcherSaga(){
    yield takeLatest(FRIENDS_REQUEST, friendsWalkerSaga)
}