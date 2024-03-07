import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';


export default function CheckboxFilter({ isMovies, isSeries, handleMoviesChange, handleSeriesChange }) {
    return (
        <FormGroup sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <FormControlLabel
                control={<Checkbox checked={isMovies} onChange={e => handleMoviesChange(e.target.checked)} />}
                label="Movies"
            />
            <FormControlLabel
                control={<Checkbox checked={isSeries} onChange={e => handleSeriesChange(e.target.checked)} />}
                label="Series"
            />
        </FormGroup>
    );
}
