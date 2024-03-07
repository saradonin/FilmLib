import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import RatedResults from "./RatedResults";
import { useDispatch, useSelector } from "react-redux";
import { ratedSelector } from "../../redux/selectors";
import FilterForm from "../Filters/FilterForm";
import { setRatedMoviesFilter, setRatedSeriesFilter } from "../../redux/actions";


export default function Rated() {
    const [orderBy, setOrderBy] = useState('');
    const rated = useSelector(state => ratedSelector(state, orderBy))
    const isMovies = useSelector(state => state.filterSettings.ratedMovies)
    const isSeries = useSelector(state => state.filterSettings.ratedSeries)
    const dispatch = useDispatch()

    const handleMoviesChange = (value) => {
        dispatch(setRatedMoviesFilter(value));
    };

    const handleSeriesChange = (value) => {
        dispatch(setRatedSeriesFilter(value));
    }

    const filteredMovies = rated.filter(movie => {
        if (isMovies && isSeries) {
            return true
        } else if (isMovies) {
            return movie.Type === "movie";
        } else if (isSeries) {
            return movie.Type === "series";
        } else {
            return false
        }
    })

    return (
        <Container maxWidth="lg">
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography variant="h4" gutterBottom sx={{
                    paddingTop: 3
                }}>
                    Rated movies
                </Typography>

                <FilterForm
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    isMovies={isMovies}
                    isSeries={isSeries}
                    handleMoviesChange={handleMoviesChange}
                    handleSeriesChange={handleSeriesChange}
                />
            </Box>
            <RatedResults rated={filteredMovies} />
        </Container>
    )
}