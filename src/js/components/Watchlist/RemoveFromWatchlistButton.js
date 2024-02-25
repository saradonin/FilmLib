import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../../redux/actions";
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';


export default function RemoveFromWatchlistButton({movie}) {
    const dispatch = useDispatch()

    const handleRemoveFromWatchlist = () => {
        dispatch(removeFromWatchlist(movie))
    }

    return (
        <Tooltip title="Remove from watchlist">
            <IconButton onClick={handleRemoveFromWatchlist}>
                <RemoveFromQueueIcon sx={{color: '#d32f2f'}}/>
            </IconButton>
        </Tooltip>
    )
}