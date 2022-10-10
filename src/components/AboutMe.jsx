import React from 'react'
import { Box, Typography } from '@mui/material'

import AboutMePic from '../media/AboutMe.JPG'

const AboutMe = () => {
    const aboutMe = ['Programming has never felt like just a job or hobby. Its one of the first things I do in the morning and one of the last things I do at night. Programming allows me to express my creativity through code. ']

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
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <Typography padding='30px' paddingTop='40px' width='50%'>
                        {aboutMe[0]}
                    </Typography>
                    <Box
                        component='img'
                        sx={{
                            height: '260px',
                            width: '250px',
                            border: '2px solid black',
                            margin: { xs: '3px', md: '3px' },
                        }}
                        src={AboutMePic}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMe

// 'My name is Jalen Johnson and I am Front End Developer who specializes in React Js. I have been learning and using React for '