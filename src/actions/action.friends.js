import { FRIENDS_REQUEST, FRIENDS_SUCCESS, FRIENDS_FAILURE } from '../constants'
function getFriends(){
    return{
        type:FRIENDS_REQUEST
    }
}

function getFriendsSuccess(){
    return{
        type:FRIENDS_SUCCESS
    }
}

function getFriendsFailure(){
    return{
        type:FRIENDS_FAILURE
    }
}

export {getFriends, getFriendsSuccess, getFriendsFailure}