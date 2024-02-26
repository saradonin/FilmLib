import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";


export default function RatedResults({ rated }) {

    return (
        <>
            {rated && rated.length > 0 ? (
                <Grid container spacing={2}>
                    {rated.map((movie) => (
                        <SingleMovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1" color="textSecondary">
                    You have not rated any movies yet.
                </Typography>
            )}
        </>
    )
}
