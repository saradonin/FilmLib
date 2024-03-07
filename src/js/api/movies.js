const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL


export const getMovieById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getMovieByTitle = async (title) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&t=${title}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const searchMoviesByTitle = async (title) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${title}`)
        const data = await response.json()
        return data.Search
    } catch (error) {
        console.log(error)
    }
}