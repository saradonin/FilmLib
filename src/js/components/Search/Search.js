import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Container from '@mui/material/Container';
import {useDispatch, useSelector} from "react-redux";
import {setSearchResults} from "../../redux/actions";

export default function Search () {
    const dispatch = useDispatch()
    const results = useSelector(state => state.search)
    const onSearch = (results) => dispatch(setSearchResults(results))

    return (
        <>
            <Container maxWidth="lg">
                <SearchBar onSearch={onSearch}/>
                <SearchResults results={results}/>
            </Container>
        </>
    )
}