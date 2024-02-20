export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"

export const setSearchResults = (results) => {
    return {
        type: SET_SEARCH_RESULTS,
        payload: results
    }
}

