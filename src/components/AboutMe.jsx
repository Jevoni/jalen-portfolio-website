import React from 'react'
import { Box, Typography } from '@mui/material'
import { FaReact, } from 'react-icons/fa'
import { SiMaterialui, SiAntdesign, SiRedux, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si'

import AboutMePic from '../media/AboutMe.JPG'

const AboutMe = () => {
    const aboutMe = ['Programming has never felt like just a job or hobby. Its one of the first things I do in the morning and one of the last things I do at night. Programming allows me to express my creativity through code. ']

    return (
        <Box id='about' sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: '30px',
            marginBottom: '40px',
            width: '100%',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: { xs: '95%', md: '80%' },
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid black',
                padding: '20px',
                backgroundColor: '#ccc',
                boxShadow: '0px 0px 9px 0px'
            }}>
                <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' } }}>
                    About Me
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                }}>
                    <Box sx={{
                        width: { md: '50%', xs: '100%' },
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{ padding: '30px', paddingTop: '40px' }}>
                            {aboutMe[0]}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            paddingBottom: '30px'
                        }}>
                            <SiJavascript size={25} />
                            <SiHtml5 size={25} />
                            <SiCss3 size={25} />
                            <FaReact size={25} />
                            <SiRedux size={25} />
                            <SiNextdotjs size={25} />
                            <SiGit size={25} />
                            <SiGithub size={25} />
                            <SiMaterialui size={25} />
                            <SiAntdesign size={25} />
                        </Box>
                    </Box>
                    <Box component='img' src={AboutMePic} sx={{
                        height: '260px',
                        width: '250px',
                        border: '2px solid black',
                        margin: { xs: '3px', md: '3px' },
                    }} />
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMe