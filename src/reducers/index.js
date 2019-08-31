import {combineReducers} from 'redux';

import postsReducers from './reducer.posts'
import friendsReducers from './reducer.friends'
import profilePictureReducers from './reducer.profilePicture'

const rootReducer = combineReducers({
    posts:postsReducers,
    friends:friendsReducers,
    profilePicture:profilePictureReducers
})

export default rootReducer;