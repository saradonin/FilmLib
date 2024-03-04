import React, { useState } from "react";
import Container from "@mui/material/Container";
import RatedResults from "./RatedResults";
import { useSelector } from "react-redux";
import { ratedSelector } from "../../redux/selectors";
import OrderBySelect from "../Form/OrderBySelect";


export default function Rated() {
    const [orderBy, setOrderBy] = useState('');
    
    const rated = useSelector(state => ratedSelector(state, orderBy));

    return (
            <Container maxWidth="lg">
                <OrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />
                <RatedResults rated={rated} />
            </Container>
    )
}