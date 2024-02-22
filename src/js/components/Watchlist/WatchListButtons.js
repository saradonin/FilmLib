import React from "react";
import Box from "@mui/material/Box";
import AddToWatchlistButton from "./AddToWatchlistButton";
import RemoveFromWatchlistButton from "./RemoveFromWatchlistButton";
import {useSelector} from "react-redux";

export default function WatchListButtons({movie}) {
    const watchlist = useSelector(state => state.watchlist)
    const isMovieInWatchlist = watchlist.some(item => item.id === movie.id)


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