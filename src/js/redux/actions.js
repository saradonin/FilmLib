export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST"
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST"
export const ADD_TO_RATED = "ADD_TO_RATED"
export const UPDATE_RATING = "UPDATE_RATING"

export const setSearchResults = (results) => {
    return {
        type: SET_SEARCH_RESULTS,
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

