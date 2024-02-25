import React from "react";
import {Grid} from "@mui/material";
import SingleMovieCard from "../Movie/SingleMovieCard";
import {useSelector} from "react-redux";

export default function SearchResults ({results}) {
    const rated = useSelector(state => state.rated)

    const isMovieRated = (movie) => {
        return rated.some(item => item.imdbID === movie.imdbID);
    }

    return (
        <>
            <Grid container spacing={2}>
                {results && results.map((result) => (
                        <SingleMovieCard
                            key={result.imdbID}
                            movie={isMovieRated(result) ? rated.find(item => item.imdbID === result.imdbID) : result}
                        />
                ))}
            </Grid>
        </>
    )
}