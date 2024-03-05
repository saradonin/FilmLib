import React, { useState } from "react";
import Container from '@mui/material/Container';
import WatchlistResults from "./WatchlistResults";
import { useSelector, useDispatch } from "react-redux";
import { watchlistSelector } from "../../redux/selectors";
import FilterForm from "../Filters/FilterForm";
import { setWatchlistMoviesFilter, setWatchlistSeriesFilter } from "../../redux/actions";


export default function Watchlist() {
    const [orderBy, setOrderBy] = useState('');

    const watchlist = useSelector(state => watchlistSelector(state, orderBy));

    const isMovies = useSelector(state => state.filterSettings.watchlistMovies)
    const isSeries = useSelector(state => state.filterSettings.watchlistSeries)
    const dispatch = useDispatch()

    const handleMoviesChange = (value) => {
        dispatch(setWatchlistMoviesFilter(value));
    };

    const handleSeriesChange = (value) => {
        dispatch(setWatchlistSeriesFilter(value));
    }

    const filteredMovies = watchlist.filter(movie => {
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
        <>
            <Container maxWidth="lg">
                <FilterForm
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    isMovies={isMovies}
                    isSeries={isSeries}
                    handleMoviesChange={handleMoviesChange}
                    handleSeriesChange={handleSeriesChange}
                />
                <WatchlistResults watchlist={filteredMovies} />
            </Container>
        </>
    )
}