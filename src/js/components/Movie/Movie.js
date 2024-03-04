import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadingSelector, movieDetailsSelector, watchlistSelector } from "../../redux/selectors";
import MovieDetails from "./MovieDetails";
import LoadingOverlay from "../Form/LoadingOverlay";
import { fetchMovieDetails, updateMovieDetails } from "../../redux/actions";


export default function Movie() {
    const { movieId } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(movieDetailsSelector)
    const isLoading = useSelector(loadingSelector)


    const watchlist = useSelector(watchlistSelector)
    const isMovieInWatchlist = watchlist.some(item => item.imdbID === movieId)

    const rated = useSelector(state => state.rated)
    const ratedMovie = rated.find(item => item.imdbID === movieId)
    const userRating = ratedMovie ? ratedMovie.userRating : null


    useEffect(() => {
        const newMovie = dispatch(fetchMovieDetails(movieId))
    }, [movieId])


    return (
        <>
            {isLoading && <LoadingOverlay />}
            <MovieDetails movie={{ ...movie, userRating }} isMovieInWatchlist={isMovieInWatchlist} />
        </>
    )
}
