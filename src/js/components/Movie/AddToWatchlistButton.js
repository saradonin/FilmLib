import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import * as React from "react";

export default function AddToWatchlistButton () {
    return (
        <Tooltip title="Add to watchlist">
            <IconButton>
                <AddToQueueIcon sx={{color: 'inherit'}}/>
            </IconButton>
        </Tooltip>
    )
}