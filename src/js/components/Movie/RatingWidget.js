import {Rating} from "@mui/material";
import * as React from "react";
import {useDispatch} from "react-redux";

export default function RatingWidget () {
    return (
        <Rating
            name="simple-controlled"
            value={3}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
    )
}