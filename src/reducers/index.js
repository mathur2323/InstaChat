import {combineReducers} from 'redux';

import postsReducers from './reducer.posts'
import friendsReducers from './reducer.friends'
import profilePictureReducers from './reducer.profilePicture'
import {loginRequestReducer} from './reducer.loginRequest'
import searchResultReducer from './reducer.searchResult'

const rootReducer = combineReducers({
    posts:postsReducers,
    friends:friendsReducers,
    profilePicture:profilePictureReducers,
    userToken:loginRequestReducer,
    searchResult:searchResultReducer
})

export default rootReducer;