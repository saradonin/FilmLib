import React from "react";
import {Grid} from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";

export default function Rated ({rated}) {

    return (
        <>
            <Grid container spacing={2}>
                {rated && rated.map((movie) => (
                    <SingleMovieCard key={movie.imdbID} movie={movie}/>
                ))}
            </Grid>
        </>
    )
}