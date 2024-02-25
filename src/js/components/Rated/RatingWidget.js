import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToRated, removeFromWatchlist } from "../../redux/actions";
import { Rating } from "@mui/material";

export default function RatingWidget({movie}) {
    const [value, setValue] = useState(movie.userRating ? movie.userRating : 0)
    const dispatch = useDispatch()

    const handleRating = (e, newValue) => {
        e.preventDefault()
        setValue(newValue)
        dispatch(addToRated(movie, newValue))
        dispatch(removeFromWatchlist(movie))
    }


    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={handleRating}
        />
    )
}