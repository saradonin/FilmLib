export const searchSelector = state => state.search
export const loadingSelector = state => state.fetch.loading
export const movieDetailsSelector = state => state.movieDetails

const sortByOrder = (array, orderBy) => {

    const getYear = (yearAsString) => {
        return parseInt(yearAsString.substring(0, 4))
    }

    switch (orderBy) {
        case 'titleAsc':
            return array.slice().sort((a, b) => a.Title.localeCompare(b.Title))
        case 'titleDesc':
            return array.slice().sort((a, b) => b.Title.localeCompare(a.Title))
        case 'ratingHigh':
            return array.slice().sort((a, b) => (b.userRating || 0) - (a.userRating || 0))
        case 'ratingLow':
            return array.slice().sort((a, b) => (a.userRating || 0) - (b.userRating || 0))
        case 'yearNew':
            return array.slice().sort((a, b) => getYear(b.Year) - getYear(a.Year))
        case 'yearOld':
            return array.slice().sort((a, b) => getYear(a.Year) - getYear(b.Year))
        default:
            return array
    }
}

export const watchlistSelector = (state, orderBy) => {
    return sortByOrder(state.watchlist, orderBy)
}

export const ratedSelector = (state, orderBy) => {
    return sortByOrder(state.rated, orderBy)
}







