import React from "react";
import {Grid} from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function WatchlistResults ({watchlist}) {

    return (
        <Box minHeight="75vh" display="flex" alignItems="center" justifyContent="center">
            {watchlist && watchlist.length > 0 ? (
                <Grid container spacing={2}>
                    {watchlist.map((movie) => (
                        <SingleMovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1" color="textSecondary">
                    Your watchlist is empty.
                </Typography>
            )}
        </Box>
    )
}