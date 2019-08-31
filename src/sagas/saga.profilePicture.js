import {put, call, takeLatest} from 'redux-saga/effects';
import { api_profile_picture } from './../api';
import {
    SET_PROFILE_PICTURE_REQUEST,
    SET_PROFILE_PICTURE_SUCCESS,
    SET_PROFILE_PICTURE_FAILURE
} from './../constants';

function* profilePictureWalkerSaga(action){
    try{
        yield call(api_profile_picture)
        yield put({type: SET_PROFILE_PICTURE_SUCCESS, payload:action.payload})
    }
    catch(e){
        yield put({type: SET_PROFILE_PICTURE_FAILURE})
    }
}

export function* profilePictureWatcherSaga(){
    yield takeLatest(SET_PROFILE_PICTURE_REQUEST, profilePictureWalkerSaga)
}