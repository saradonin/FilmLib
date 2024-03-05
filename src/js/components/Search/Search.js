import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Container from '@mui/material/Container';
import LoadingOverlay from "../Filters/LoadingOverlay"
import { useSelector } from "react-redux";
import { loadingSelector, searchSelector } from "../../redux/selectors";

export default function Search() {
    const results = useSelector(searchSelector)
    const isLoading = useSelector(loadingSelector)

    return (
        <>
            <Container maxWidth="lg">
                {isLoading && <LoadingOverlay />}
                <SearchBar />
                <SearchResults results={results} />
            </Container>
        </>
    )
}