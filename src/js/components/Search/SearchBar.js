import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {getMovieByTitle, searchMoviesByTitle} from "../../api/movies";
export const SearchBar = ({onSearch}) => {
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSearch = async () => {
        const result = await searchMoviesByTitle(title)
        onSearch(result)
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