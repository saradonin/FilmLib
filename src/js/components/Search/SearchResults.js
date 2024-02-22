import React from "react";
import {Grid} from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";

export default function SearchResults ({results}) {

    return (
        <>
            <Grid container spacing={2}>
                {results && results.map((result) => (
                        <SingleMovieCard key={result.imdbID} movie={result}/>
                ))}
            </Grid>
        </>
    )
}