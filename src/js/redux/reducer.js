import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SEARCH_SET_RESULTS, ADD_TO_RATED, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, UPDATE_RATING, SET_MOVIE_DETAILS } from "./actions";
import { combineReducers } from "redux";


const search = (state = [], { type, payload }) => {
    switch (type) {
        case (SEARCH_SET_RESULTS):
            return payload !== undefined ? payload : state
        default:
            return state
    }
}

const movieDetails = (state = {}, { type, payload }) => {
    switch (type) {
        case (SET_MOVIE_DETAILS):
            return payload !== undefined ? payload : state
        default:
            return state
    }
}

const fetch = (state = { loading: false, error: '' }, { type, payload }) => {
    switch (type) {
        case (FETCH_START):
            return { ...state, loading: true, error: '' }
        case (FETCH_SUCCESS):
            return { ...state, loading: false, error: '' }
        case (FETCH_ERROR):
            return { ...state, loading: false, error: payload || '' }
        default:
            return { ...state, loading: false, error: '' }
    }

}

const watchlist = (state = [], { type, payload }) => {
    switch (type) {
        case (ADD_TO_WATCHLIST):
            const newMovie = { ...payload, watchlist: true }
            if (!state.find(movie => movie.imdbID === payload.imdbID)) {
                return [...state, newMovie]
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
    rated,
    fetch,
    movieDetails,
})

export default reducer
