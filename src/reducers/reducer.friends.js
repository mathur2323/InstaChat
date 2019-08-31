import * as actionType from './../constants'

const defaultState = {}

const friendsReducers = (state = defaultState, action)=>{
    switch(action.type){
        case actionType.FRIENDS_SUCCESS:
            return {
                ...state,
                friends:action.payload,
                response:true
            }

        case actionType.FRIENDS_FAILURE:
            return {
                ...state,
                response:false
            }
        default: 
            return state
    }
}

export default friendsReducers