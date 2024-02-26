import { API_KEY, API_URL } from "./constants"

export const getMovieById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`)
        const data = await response.json()
        console.log("fetched movie:", data)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const getMovieByTitle = async (title) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&t=${title}`)
        const data = await response.json()
        console.log("fetched movie:", data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const searchMoviesByTitle = async (title) => {
    try {
        const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${title}`)
        const data = await response.json()
        console.log("search results:", data.Search)
        return data.Search
    } catch (error) {
        console.log(error)
    }
}