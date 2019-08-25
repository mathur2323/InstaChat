import getProfileInfoWatcherSaga from './saga.profileInfo'
import getProfileDataWatcherSaga from './saga.profileData'
import {all} from 'redux-saga';

const rootSaga = yield all([getProfileInfoWatcherSaga(),
    getProfileDataWatcherSaga()])

export default rootSaga