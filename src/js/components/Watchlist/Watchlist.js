import React from "react";
import {Grid} from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";

export default function Watchlist ({watchlist}) {

    return (
        <>
            <Grid container spacing={2}>
                {watchlist && watchlist.map((movie) => (
                    <SingleMovieCard key={movie.imdbID} movie={movie}/>
                ))}
            </Grid>
        </>
    )
}