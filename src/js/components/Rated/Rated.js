import React from "react";
import Container from "@mui/material/Container";
import RatedResults from "./RatedResults";
import {useSelector} from "react-redux";

export default function Rated () {
    const rated = useSelector(state => state.rated)

    return (
        <>
            <Container maxWidth="lg">
                <RatedResults rated={rated}/>
            </Container>
        </>
    )
}