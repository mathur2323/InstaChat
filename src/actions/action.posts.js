import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE } from '../constants'
function getPosts(){
    return{
        type:POSTS_REQUEST
    }
}

function getPostsSuccess(){
    return{
        type:POSTS_SUCCESS
    }
}

function getPostsFailure(){
    return{
        type:POSTS_FAILURE
    }
}

export {getPosts, getPostsSuccess, getPostsFailure}