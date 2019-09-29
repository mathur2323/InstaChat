import {
    USER_LOGIN_REQUEST_SUCCESS,
    USER_LOGIN_REQUEST_FAILURE,
    USER_LOGIN_REQUEST
} from './../constants';
import {put, call, takeLatest} from 'redux-saga/effects';
import fire from './../components/config';

function* userLoginWalkerSaga(data){
    try{
        const result = yield call(fire.auth().createUserWithEmailAndPassword(data.payload.email, data.payload.password))
        yield put({type:USER_LOGIN_REQUEST_SUCCESS, payload:result})
    }
    catch(e){
        yield put({type:USER_LOGIN_REQUEST_FAILURE, payload:e})
    }
}

export function* userLoginWatcherSaga(){
    yield takeLatest(USER_LOGIN_REQUEST, userLoginWalkerSaga)
    console.log('test')
}