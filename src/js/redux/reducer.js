import {ADD_TO_RATED, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SET_SEARCH_RESULTS, UPDATE_RATING} from "./actions";
import {combineReducers} from "redux";

const search = (state = [], {type, payload}) => {
    switch (type) {
        case (SET_SEARCH_RESULTS):
            return payload !== undefined ? payload : state
        default:
            return state
    }
}

const watchlist = (state = [], {type, payload}) => {
    switch (type) {
        case (ADD_TO_WATCHLIST):
            if (!state.find(movie => movie.imdbID === payload.imdbID)) {
                return [...state, payload]
            }
            return state
        case (REMOVE_FROM_WATCHLIST):
            return state.filter((movie) => movie.imdbID !== payload.imdbID)
        default:
            return state
    }
}

const rated = (state = [], {type, payload}) => {
    switch (type) {
        case (ADD_TO_RATED):
            if (!state.find(movie => movie.imdbID === payload.movie.imdbID)) {
                return [...state, {...payload.movie, userRating: payload.rating}]
            }
            return state
        case (UPDATE_RATING):
            return state.map(movie => {
                if (movie.imdbID === payload.movie.imdbID) {
                    return { ...movie, userRating: payload.rating}
                }
                return movie
            })
        default:
            return state
    }
}

const reducer = combineReducers({
    search,
    watchlist,
    rated
})

export default reducer
