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
            boxShadow: '0px 0px 6px 0px',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row' }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <p>testtdyj</p> */}
                    <Typography variant='h2' sx={{ marginLeft: '4px', fontSize: { xs: '25px', sm: '30px', md: '35px' } }}>
                        {title} <span style={{ fontSize: '25px', color: 'red' }}>{version}</span>
                    </Typography>
                </Box>
                <Box sx={{ filter: blur, marginBottom: '15px' }}>
                    <Button href={sourceCode} target='_blank' sx={{ fontSize: { xs: '12.5px', sm: '14.5px' }, color: 'black', border: '2px solid black', margin: '1px' }}>
                        Source Code
                    </Button>
                    <Button href={liveSite} target='_blank' sx={{ fontSize: { xs: '12.5px', sm: '14.5px' }, color: 'black', border: '2px solid black', margin: '1px', display: liveSite ? '' : 'none' }}>
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