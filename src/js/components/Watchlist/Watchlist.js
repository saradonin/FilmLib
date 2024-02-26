import React from "react";
import Container from '@mui/material/Container';
import WatchlistResults from "./WatchlistResults";
import { useSelector } from "react-redux";
import { watchlistSelector } from "../../redux/selectors";

export default function Watchlist() {
    const watchlist = useSelector(watchlistSelector)
    return (
        <>
            <Container maxWidth="lg">
                <WatchlistResults watchlist={watchlist} />
            </Container>
        </>
    )
}