import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../redux/actions";
import { searchSelector } from "../../redux/selectors";

export default function Search() {
    const dispatch = useDispatch()
    const results = useSelector(searchSelector)
    const onSearch = (results) => dispatch(setSearchResults(results))

    return (
        <>
            <Container maxWidth="lg">
                <SearchBar onSearch={onSearch} />
                <SearchResults results={results} />
            </Container>
        </>
    )
}