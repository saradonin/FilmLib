import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Container from '@mui/material/Container';

export default function Search ({results, onSearch}) {
    return (
        <>
            <Container maxWidth="lg">
                <SearchBar onSearch={onSearch}/>
                <SearchResults results={results}/>
            </Container>
        </>
    )
}