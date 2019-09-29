import { postsWatcherSaga } from './saga.posts'
import { friendsWatcherSaga } from './saga.friends'
import { profilePictureWatcherSaga} from './saga.profilePicture'
import {all} from 'redux-saga/effects'
import { userLoginWatcherSaga } from './saga.loginRequest'

export default function* rootSaga(){
    yield all([
        postsWatcherSaga(),
        friendsWatcherSaga(),
        profilePictureWatcherSaga(),
        userLoginWatcherSaga()
    ])
}
