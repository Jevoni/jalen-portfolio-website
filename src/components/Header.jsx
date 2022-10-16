import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from "react-scroll";

import Resume from '../media/JALENJOHNSON.pdf'

import styles from './Header.module.css'

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
            <Box sx={{
                display: "flex",
                alignItems: 'center',
                flexDirection: "column",
                textAlign: "center",
                height: '90%',
                justifyContent: 'center'
            }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: "column" }}>
                    <Typography variant="h3" className={`${styles.typewriter} ${styles['animation-1']}`}>
                        Hello,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-2']}`}>
                        I'm <span style={{ color: '#F55887', fontWeight: 'bold' }}> Jalen</span>,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-3']}`}>
                        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>Front End</span> Developer
                    </Typography>
                </Box>
                <Box className={styles.fade}>
                    <Link smooth={true} to='about'>
                        <Button variant='filled' href='#about' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                            About Me
                        </Button>
                    </Link>
                    <Link smooth={true} to='projects'>
                        <Button variant='filled' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                            Projects
                        </Button>
                    </Link>
                    <a href={Resume} target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                        <Button variant='filled' sx={{ mt: '60px', mr: '30px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                            Resume
                        </Button>
                    </a>
                    <Link smooth={true} to='contact'>
                        <Button variant='filled' sx={{ mt: '60px', fontWeight: 'bold', fontSize: '20px', border: '2px solid black' }}>
                            Contact Me
                        </Button>
                    </Link>
                </Box>
                <Box className={styles.fade} sx={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                    <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://www.linkedin.com/in/jalenjohnson23/' target='_blank'>
                        <AiFillLinkedin size={30} />
                    </a>
                    <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://github.com/Jevoni' target='_blank'>
                        <AiFillGithub size={30} />
                    </a>
                </Box>
            </Box>
        </Box >
    )
}

export default Header