import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link, animateScroll } from "react-scroll";

const Header = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: 'lightslategray',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '2px solid black'
        }}>
            <Box display="flex" alignItems='center' flexDirection="column" textAlign="center" height='90%' justifyContent='center'>
                <Typography variant="h3">
                    Hello,<br /> I'm <span style={{ color: '#F55887', fontWeight: 'bold' }}> Jalen</span>, <br /><span style={{ color: 'skyblue', fontWeight: 'bold' }}>Front End</span> Developer
                </Typography>
                <Box>
                    <Link smooth={true} to='about'><Button variant='filled' href='#about' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                        About Me
                    </Button></Link>
                    <Link smooth={true} to='projects'><Button variant='filled' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                        Projects
                    </Button></Link>
                    <Link smooth={true} to=''><Button variant='filled' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                        Resume
                    </Button></Link>
                    <Link smooth={true} to='contact'><Button variant='filled' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                        Contact Me
                    </Button></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Header