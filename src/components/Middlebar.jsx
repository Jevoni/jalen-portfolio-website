import { Box, Typography, Link } from '@mui/material'
import React from 'react'

const Middlebar = () => {
    return (
        <Box display='flex'
            flexDirection='column'
            height='20vh' alignItems='center'
            justifyContent='centerTop'
            backgroundColor='#eb8aa7'
            width='100%'
            textAlign='center'
            marginTop='30px'>
            <Typography variant='h2' fontSize='40px'>
                Technologies
            </Typography>
        </Box>
    )
}

export default Middlebar