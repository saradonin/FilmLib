import React from "react";
import Box from "@mui/material/Box";
import AddToWatchlistButton from "./AddToWatchlistButton";
import RemoveFromWatchlistButton from "./RemoveFromWatchlistButton";

export default function WatchListButtons({movie, isMovieInWatchlist}) {
    return (
        <Box>
            {
                isMovieInWatchlist ? (
                    <RemoveFromWatchlistButton movie={movie}/>
                ) : (
                    <AddToWatchlistButton movie={movie}/>
                )
            }
        </Box>
    )
}