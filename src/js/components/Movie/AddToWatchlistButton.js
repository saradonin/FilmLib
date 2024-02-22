import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import {useDispatch} from "react-redux";
import {addToWatchlist} from "../../redux/actions";


export default function AddToWatchlistButton ({movie}) {
    const dispatch = useDispatch()

    const handleAddToWatchList = (movie) => {
        dispatch(addToWatchlist(movie))
    }

    return (
        <Tooltip title="Add to watchlist">
            <IconButton onClick={() => handleAddToWatchList(movie)}>
                <AddToQueueIcon sx={{color: 'green'}}/>
            </IconButton>
        </Tooltip>
    )
}