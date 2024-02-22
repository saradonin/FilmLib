import React from "react";
import Container from "@mui/material/Container";
import RatedResults from "./RatedResults";

export default function Rated ({rated}) {

    return (
        <>
            <Container maxWidth="lg">
                <RatedResults rated={rated}/>
            </Container>
        </>
    )
}