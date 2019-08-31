import {put, call, takeLatest} from 'redux-saga/effects';
import { api_posts } from './../api';
import {
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_FAILURE
} from './../constants';

function* postsWalkerSaga(action){
    try{
        yield call(api_posts)
        yield put({type: POSTS_SUCCESS, payload:action.payload})
    }
    catch(e){
        yield put({type: POSTS_FAILURE})
    }
}

export function* postsWatcherSaga(){
    yield takeLatest(POSTS_REQUEST, postsWalkerSaga)
}