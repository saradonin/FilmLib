import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function OrderBySelect({ orderBy, setOrderBy }) {

    const handleChange = (e) => {
        setOrderBy(e.target.value);
    };

    return (
        <Box sx={{
            minWidth: 120,
            paddingTop: '25px',
            paddingBottom: '25px',
            display: 'flex',
            justifyContent: 'end',
        }} >
            <FormControl size="small"
                sx={{ minWidth: 216 }}>
                <InputLabel id="demo-simple-select-label">Order by ...</InputLabel>
                <Select
                    labelId="order-by-select-label"
                    id="order-by-select"
                    value={orderBy}
                    label="Order by ..."
                    onChange={handleChange}
                >
                    <MenuItem value={"titleAsc"}>Title (A-Z)</MenuItem>
                    <MenuItem value={"titleDesc"}>Title (Z-A)</MenuItem>
                    <MenuItem value={"ratingHigh"}>Rating (highest)</MenuItem>
                    <MenuItem value={"ratingLow"}>Rating (lowest)</MenuItem>
                    <MenuItem value={"yearNew"}>Year (newest)</MenuItem>
                    <MenuItem value={"yearOld"}>Year (oldest)</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}