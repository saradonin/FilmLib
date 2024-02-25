import React from "react";
import Container from '@mui/material/Container';
import WatchlistResults from "./WatchlistResults";
import {useSelector} from "react-redux";

export default function Watchlist () {
    const watchlist = useSelector(state => state.watchlist)
    return (
        <>
            <Container maxWidth="lg">
                <WatchlistResults watchlist={watchlist}/>
            </Container>
        </>
    )
}