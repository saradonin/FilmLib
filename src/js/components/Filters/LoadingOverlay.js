import React from 'react';
import { CircularProgress, Box } from '@mui/material';


export default function LoadingOverlay() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            zIndex: 9980
        }}>
            <CircularProgress />
        </Box>
    )
}