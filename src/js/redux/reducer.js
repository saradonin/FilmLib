import { SEARCH_START, SEARCH_ERROR, SEARCH_SET_RESULTS, ADD_TO_RATED, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, UPDATE_RATING } from "./actions";
import { combineReducers } from "redux";

const searchInitialState = {
    results: [],
    loading: false,
    error: ""
}

const search = (state = searchInitialState, { type, payload }) => {
    switch (type) {
        case (SEARCH_START):
            return { loading: true, error: "", results: [] }
        case (SEARCH_SET_RESULTS):
            return { loading: false, error: "", results: payload }
        case (SEARCH_ERROR):
            return { loading: false, error: payload, results: [...state.results] }
        default:
            return state
    }
}

const watchlist = (state = [], { type, payload }) => {
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

const rated = (state = [], { type, payload }) => {
    switch (type) {
        case (ADD_TO_RATED):
            if (!state.find(movie => movie.imdbID === payload.movie.imdbID)) {
                return [...state, { ...payload.movie, userRating: payload.rating }]
            }
            return state
        case (UPDATE_RATING):
            return state.map(movie => {
                if (movie.imdbID === payload.movie.imdbID) {
                    return { ...movie, userRating: payload.rating }
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
