import React, { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { watchlistSelector } from "../../redux/selectors";
import MovieDetails from "./MovieDetails";
import LoadingOverlay from "../Form/LoadingOverlay";


export default function Movie() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const watchlist = useSelector(watchlistSelector)
    const isMovieInWatchlist = watchlist.some(item => item.imdbID === movieId)

    const rated = useSelector(state => state.rated)
    const ratedMovie = rated.find(item => item.imdbID === movieId)
    const userRating = ratedMovie ? ratedMovie.userRating : null

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true)
            const fetchedMovie = await getMovieById(movieId)
            setIsLoading(false)
            const newMovie = { ...fetchedMovie, userRating }
            setMovie(newMovie)
        };
        fetchMovie()
    }, [movieId])


    return (
        <>
            {isLoading && <LoadingOverlay />}
            <MovieDetails movie={{ ...movie, userRating }} isMovieInWatchlist={isMovieInWatchlist} />
        </>
    )
}
