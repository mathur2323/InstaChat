import * as actionType from './../constants'

const defaultState = {}

const postsReducers = (state = defaultState, action)=>{
    switch(action.type){
        case actionType.POSTS_SUCCESS:
            return {
                ...state,
                posts:action.payload,
                response:true
            }

        case actionType.POSTS_FAILURE:
            return {
                ...state,
                response:false
            }
        default: 
            return state
    }
}

export default postsReducers