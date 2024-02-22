import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {useDispatch} from "react-redux";
import {removeFromWatchList} from "../../redux/actions";
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';



export default function RemoveFromWatchlistButton({movie}) {
    const dispatch = useDispatch()

    const handleRemoveFromWatchlist = () => {
        dispatch(removeFromWatchList(movie))
    }

    return (
        <Tooltip title="Remove from watchlist">
            <IconButton onClick={() => handleRemoveFromWatchlist(movie)}>
                <RemoveFromQueueIcon sx={{color: 'red'}}/>
            </IconButton>
        </Tooltip>
    )
}