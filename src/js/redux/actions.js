import { searchMoviesByTitle } from "../api/movies.js"

export const SEARCH_START = "SEARCH_START"
export const SEARCH_ERROR = "SEARCH_ERROR"
export const SEARCH_SET_RESULTS = "SEARCH_SET_RESULTS"
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST"
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST"
export const ADD_TO_RATED = "ADD_TO_RATED"
export const UPDATE_RATING = "UPDATE_RATING"

export const searchStart = () => {
    return {
        type: SEARCH_START
    }
}

export const searchError = (error) => {
    return {
        type: SEARCH_ERROR,
        payload: error
    }
}

export const setSearchResults = (results) => {
    return {
        type: SEARCH_SET_RESULTS,
        payload: results
    }
}

export const addToWatchlist = (movie) => {
    return {
        type: ADD_TO_WATCHLIST,
        payload: movie
    }
}

export const removeFromWatchlist = (movie) => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload: movie
    }
}

export const addToRated = (movie, rating) => {
    return {
        type: ADD_TO_RATED,
        payload: { movie, rating }
    }
}


export const updateRating = (movie, rating) => {
    return {
        type: UPDATE_RATING,
        payload: { movie, rating }
    }
}

export const fetchSearchResults = (title) => {
    return (dispatch) => {
        dispatch(searchStart(title))

        searchMoviesByTitle(title)
            .then(response => dispatch(setSearchResults(response)))
            .catch(error => searchError(error))
    }
}

