import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {useDispatch} from "react-redux";
import {removeFromWatchlist} from "../../redux/actions";
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';



export default function RemoveFromWatchlistButton({movie}) {
    const dispatch = useDispatch()

    const handleRemoveFromWatchlist = () => {
        dispatch(removeFromWatchlist(movie))
    }

    return (
        <Tooltip title="Remove from watchlist">
            <IconButton onClick={handleRemoveFromWatchlist}>
                <RemoveFromQueueIcon sx={{color: 'red'}}/>
            </IconButton>
        </Tooltip>
    )
}