import React, { useState } from "react";
import Container from '@mui/material/Container';
import WatchlistResults from "./WatchlistResults";
import { useSelector } from "react-redux";
import { watchlistSelector } from "../../redux/selectors";
import OrderBySelect from "../Form/OrderBySelect";

export default function Watchlist() {
    const [orderBy, setOrderBy] = useState('');

    const watchlist = useSelector(state => watchlistSelector(state, orderBy));

    return (
        <>
            <Container maxWidth="lg">
                <OrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />
                <WatchlistResults watchlist={watchlist} />
            </Container>
        </>
    )
}