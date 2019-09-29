import * as actionType from './../constants'

const defaultState = {
    user:{},
    isUserAvailable:false,
    accessToken:''
}

export const loginRequestReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionType.USER_LOGIN_REQUEST_SUCCESS : 
        return {
            accessToken:action.payload,
            isUserAvailable:true,
        }
        case actionType.USER_LOGIN_REQUEST_FAILURE :
            return {
                ...state,
                isUserAvailable:false
            }
            case actionType.USER_LOGOUT_REQUEST:
                sessionStorage.removeItem('access_token')
                return{
                    ...state,
                    accessToken:''
                }
        default:
            return state
    }
}