import * as actionType from './../constants'

const defaultState = {}

const profilePictureReducers = (state = defaultState, action)=>{
    switch(action.type){
        case actionType.SET_PROFILE_PICTURE_SUCCESS:
            return {
                ...state,
                picture:action.payload,
                response:true
            }

        case actionType.SET_PROFILE_PICTURE_FAILURE:
            return {
                ...state,
                response:false
            }
        default: 
            return state
    }
}

export default profilePictureReducers