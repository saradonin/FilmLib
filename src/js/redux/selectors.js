export const searchSelector = state => state.search

export const watchlistSelector = state => state.watchlist

export const ratedSelector = (state, orderBy) => {
    let rated = state.rated

    const getYear = (yearAsString) => {
        return parseInt(yearAsString.substring(0,4))
    }

    switch (orderBy) {
        case 'titleAsc':
            rated = rated.slice().sort((a, b) => a.Title.localeCompare(b.Title))
            break
        case 'titleDesc':
            rated = rated.slice().sort((a, b) => b.Title.localeCompare(a.Title))
            break
        case 'ratingHigh':
            rated = rated.slice().sort((a, b) => b.userRating - a.userRating)
            break
        case 'ratingLow':
            rated = rated.slice().sort((a, b) => a.userRating - b.userRating)
            break
        case 'yearNew':
            rated = rated.slice().sort((a, b) => getYear(b.Year) - getYear(a.Year))
            break
        case 'yearOld':
            rated = rated.slice().sort((a, b) => getYear(a.Year) - getYear(b.Year))
            break
        default:
            break
    }
    return rated
}






