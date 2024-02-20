import {SET_SEARCH_RESULTS} from "./actions";
import {combineReducers} from "redux";

const search = (state = [], {type, payload}) => {
    switch (type) {
        case (SET_SEARCH_RESULTS):
            return payload
        default:
            return state
    }
}

const reducer = combineReducers({
    search,
})

export default reducer
