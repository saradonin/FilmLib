import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { fetchSearchResults } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function SearchBar() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSearch = () => {
        dispatch(fetchSearchResults(title))
        setTitle("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch()
    }

    return (
        <Box
            component="form"
            sx={{
                paddingTop: '25px',
                paddingBottom: '25px',
                display: 'flex',
                justifyContent: 'center',
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="outlined-basic"
                value={title}
                label="Movie title"
                variant="outlined"
                size="small"
                onChange={handleChange}
            />
            <Button
                variant="contained"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    )
}