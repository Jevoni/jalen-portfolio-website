import React from 'react'
import { Box, Typography } from '@mui/material'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightslategray',
            textAlign: 'center',
            padding: '20px',
        }}>
            <Typography>Made by <span style={{ textShadow: '1.5px 1.5px black', color: '#F55887', fontWeight: 'bold' }}>Jalen Johnson</span> using <span style={{ textShadow: '1.5px 1.5px black', color: 'skyblue', fontWeight: 'bold' }}>React.js <FaReact /></span></Typography>
        </Box>
    )
}

export default Footer