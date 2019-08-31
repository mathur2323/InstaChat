import { SET_PROFILE_PICTURE_REQUEST, SET_PROFILE_PICTURE_SUCCESS, SET_PROFILE_PICTURE_FAILURE } from './../constants'
function getProfilePicture(){
    return{
        type:SET_PROFILE_PICTURE_REQUEST
    }
}

function getProfilePictureSuccess(){
    return{
        type:SET_PROFILE_PICTURE_SUCCESS
    }
}

function getProfilePictureFailure(){
    return{
        type:SET_PROFILE_PICTURE_FAILURE
    }
}

export {getProfilePicture, getProfilePictureSuccess, getProfilePictureFailure}