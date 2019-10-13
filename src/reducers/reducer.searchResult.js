import * as actionType from './../constants'

const defaultState = {
    users:[]
}

const searchResultReducer = (state = defaultState, action)=>{
    switch(action.type){
        case actionType.SEARCH_RESULT:
            return {
                ...state,
                users:action.payload
            }
        default: 
            return state
    }
}

export default searchResultReducer