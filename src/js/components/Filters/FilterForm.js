import React from 'react'
import { Box } from '@mui/material'
import CheckboxFilter from './CheckboxFilter'
import OrderBySelect from './OrderBySelect'


export default function FilterForm({ orderBy, setOrderBy, isMovies, isSeries, handleMoviesChange, handleSeriesChange }) {
    return (
        <Box sx={{
            minWidth: 120,
            paddingTop: '25px',
            paddingBottom: '25px',
            display: 'flex',
            justifyContent: 'end',
        }} >
            <CheckboxFilter
                isMovies={isMovies}
                isSeries={isSeries}
                handleMoviesChange={handleMoviesChange}
                handleSeriesChange={handleSeriesChange}
            />
            <OrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />

        </Box>
    )
}