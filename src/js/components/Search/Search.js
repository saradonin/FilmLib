import React from "react";
import {SearchBar} from "./SearchBar";
import {SearchResults} from "./SearchResults";
import Container from '@mui/material/Container';

export const Search = () => {

    return (
        <>
            <Container maxWidth="sm">
                <SearchBar/>
                <SearchResults/>
            </Container>
        </>
    )
}