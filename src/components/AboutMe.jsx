import React from 'react'
import { Box, Typography } from '@mui/material'

const AboutMe = () => {
    const aboutMe = ['My name is Jalen Johnson and I am a React Developer. Ive been programming on and off for 3 years. I majored in Computer Science for 2 years at Pace University, and I have multiple certifications. I have a deep understanding on JavaScript, React, HTML and CSS. ']

    return (
        <Box display='flex'
            justifyContent='center'
            textAlign='center'
            backgroundColor='white'
            marginTop='30px'
            marginBottom='40px'
            id='about'
            width='100%'
            alignItems='center'
        >
            <Box display='flex'
                flexDirection='column'
                border='2px solid black'
                padding='20px'
                backgroundColor='#ccc'
                sx={{
                    width: { xs: '95%', md: '80%' }
                }}
            >
                <Typography variant='h2'
                    sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '60px' } }}
                >
                    About Me
                </Typography>
                <Typography padding='60px' paddingTop='40px'>
                    {aboutMe[0]}
                </Typography>
            </Box>
        </Box>
    )
}

export default AboutMe

// 'My name is Jalen Johnson and I am Front End Developer who specializes in React Js. I have been learning and using React for '