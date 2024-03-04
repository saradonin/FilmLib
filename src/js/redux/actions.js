import { getMovieById, searchMoviesByTitle } from "../api/movies.js"

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_ERROR = "FETCH_ERROR"
export const SEARCH_SET_RESULTS = "SEARCH_SET_RESULTS"
export const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS"
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST"
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST"
export const ADD_TO_RATED = "ADD_TO_RATED"
export const UPDATE_RATING = "UPDATE_RATING"

export const fetchStart = () => {
    return {
        type: FETCH_START
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
}

export const setSearchResults = (results) => {
    return {
        type: SEARCH_SET_RESULTS,
        payload: results
    }
}

export const setMovieDetails = (movie) => {
    return {
        type: SET_MOVIE_DETAILS,
        payload: movie
    }
}

export const fetchSearchResults = (title) => {
    return (dispatch) => {
        dispatch(fetchStart())

        searchMoviesByTitle(title)
            .then(response => dispatch(setSearchResults(response)))
            .then(() => fetchSuccess())
            .catch(error => fetchError(error))
    }
}

export const fetchMovieDetails = (movieId) => {
    return (dispatch) => {
        dispatch(fetchStart())

        getMovieById(movieId)
            .then(response => dispatch(setMovieDetails(response)))
            .then(() => fetchSuccess())
            .catch(error => fetchError(error))
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



