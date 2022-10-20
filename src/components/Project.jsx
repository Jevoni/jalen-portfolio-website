import { Typography, Box, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

const Project = ({ title, paragraph, picture, backgroundColor, version, paragraphC, isComingSoon, liveSite, sourceCode }) => {
    const [blur, setBlur] = useState('')

    useEffect(() => {
        if (isComingSoon) {
            setBlur('blur(4px)')
        } else {
            setBlur('')
        }
    }, [isComingSoon])

    return (
        <Box m={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { md: '47%' },
            height: 'auto',
            backgroundColor,
            padding: '20px',
            border: '2px solid black',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row' }
            }}>
                <Typography variant='h2' sx={{ fontSize: { xs: '25px', sm: '30px', md: '35px' } }}>
                    {title} <span style={{ fontSize: '25px', color: 'red' }}>{version}</span>
                </Typography>
                <Box sx={{ filter: blur, marginTop: '10px', marginBottom: '10px' }}>
                    <Button href={sourceCode} target='_blank' sx={{ fontWeight: 'bold', fontSize: '16px', color: '#363838', border: '2px solid black', margin: '1px' }}>
                        Source Code
                    </Button>
                    <Button href={liveSite} target='_blank' sx={{ fontWeight: 'bold', fontSize: '16px', color: '#363838', border: '2px solid black', margin: '1px' }}>
                        Live Site
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row', md: 'column', xl: 'row' },
                height: 'auto',
                width: 'auto',
                filter: blur,
            }}>
                <Box sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: { xs: '0.25rem', sm: '0rem' },
                    marginBottom: { xs: '7px', sm: '0px', md: '7px', xl: '0px' },
                    paddingRight: '1px'
                }}>
                    <Typography variant='h5' fontSize='16px'>
                        {paragraph}
                        <br /> <br />{paragraphC}
                    </Typography>
                </Box>
                <Box sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: { xs: '7px', sm: '0px', md: '7px', xl: '0px' },
                    marginLeft: { xs: '0', sm: '0.25rem' },
                    paddingLeft: '1px'
                }}>
                    <Box component='img' src={picture} sx={{
                        height: '200px',
                        width: '300px',
                        border: '2px solid black',
                    }} />
                </Box>
            </Box>
        </Box >
    )
}

export default Project