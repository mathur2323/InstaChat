import {takeLatest, call, put} from 'redux-saga/effects';
import {
    GET_USER_PROFILE_DATA_ASYNC,
    GET_USER_PROFILE_DATA_SUCCESS,
    GET_USER_PROFILE_DATA_FAILURE
} from './../constants'

export default function* getProfileDataWalkerSaga(action){
    const result = yield put({type:GET_USER_PROFILE_DATA_ASYNC, action})
    if(result.length>0){
        yield put({type:GET_USER_PROFILE_DATA_SUCCESS, action})
    }
    else{
        yield put({type:GET_USER_PROFILE_DATA_FAILURE})
    }
}

export default function* getProfileDataWatcherSaga(){
    takeLatest(GET_USER_PROFILE_DATA_ASYNC, getProfileInfoWalkerSaga)
}