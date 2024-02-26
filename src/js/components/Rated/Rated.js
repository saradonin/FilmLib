import React from "react";
import Container from "@mui/material/Container";
import RatedResults from "./RatedResults";
import { useSelector } from "react-redux";
import { ratedSelector } from "../../redux/selectors";

export default function Rated() {
    const rated = useSelector(ratedSelector)

    return (
        <>
            <Container maxWidth="lg">
                <RatedResults rated={rated} />
            </Container>
        </>
    )
}