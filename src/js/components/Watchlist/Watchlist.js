import React from "react";
import Container from '@mui/material/Container';
import WatchlistResults from "./WatchlistResults";

export default function Watchlist ({watchlist}) {
    return (
        <>
            <Container maxWidth="lg">
                <WatchlistResults watchlist={watchlist}/>
            </Container>
        </>
    )
}