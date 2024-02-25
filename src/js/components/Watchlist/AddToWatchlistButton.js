import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../redux/actions";



export default function AddToWatchlistButton ({movie}) {
    const dispatch = useDispatch()

    const handleAddToWatchList = () => {
        dispatch(addToWatchlist(movie))
    }

    return (
        <Tooltip title="Add to watchlist">
            <IconButton onClick={handleAddToWatchList}>
                <AddToQueueIcon sx={{color: '#388e3c'}}/>
            </IconButton>
        </Tooltip>
    )
}