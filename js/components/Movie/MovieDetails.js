import React, {useEffect, useState} from "react";
import {getMovieById} from "../../api/movies";
import {Grid} from "@mui/material";

export const MovieDetails = ({movieId}) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchMovie = async () => {
            const newMovie = await getMovieById(movieId)
            setMovie(newMovie)
            console.log(newMovie)
        }
        fetchMovie()
    }, [movieId]);


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>{movie.Title}</h1>
                </Grid>

                <Grid item xs={3}>
                    <img src={movie.Poster}/>
                </Grid>
                <Grid item xs={9}>
                    <p>{movie.Year}</p>
                    <p>{movie.Director}</p>
                    {movie.Plot}
                </Grid>
            </Grid>
        </div>
    )
}
