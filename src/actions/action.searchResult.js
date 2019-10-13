import * as actionType from './../constants'

export const searchResult = (users) => ({
    type: actionType.SEARCH_RESULT,
    payload: users
})