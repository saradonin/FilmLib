import React from "react";
import {SingleResult} from "./SingleResult";
import {Grid} from "@mui/material";

export const SearchResults = ({results}) => {

    return (
        <>
            <Grid container spacing={2}>
                {results && results.map((result) => (
                        <SingleResult key={result.imdbID} result={result}/>
                ))}
            </Grid>

        </>
    )
}