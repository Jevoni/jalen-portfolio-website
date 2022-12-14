import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { AiFillLinkedin, AiFillGithub, } from 'react-icons/ai'
import { Link } from "react-scroll";

import Hamburger from './Hamburger';
import Snow from './Snow'
import Resume from '../media/JALENJOHNSON.pdf'

import styles from './Header.module.css'

const Header = () => {
    return (
        <div id='home' className={styles.hero}>
            <Snow />
            <Box className={styles['hero__content']} sx={{
                display: "flex",
                alignItems: 'center',
                flexDirection: "column",
                textAlign: "center",
                height: '90%',
                justifyContent: 'center'
            }}>
                <Hamburger />
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: "column", marginBottom: '30px', }}>
                    <Typography variant="h3" className={`${styles.typewriter} ${styles['animation-1']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        Hello,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-2']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        I'm <span style={{ textShadow: '1.5px 1.5px black', color: '#F55887', fontWeight: 'bold' }}> Jalen</span>,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-3']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        <span style={{ textShadow: '1.5px 1.5px black', color: 'skyblue', fontWeight: 'bold' }}>Full Stack</span> Developer
                    </Typography>
                </Box>
                <Box className={`${styles.fade} ${styles['nav-bar']}`} sx={{
                    marginTop: '30px',
                    marginBottom: '20px',
                    // display: { xs: 'none', sm: 'initial' }
                }}>
                    <Link smooth={true} to='about'>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { xs: '14px', md: '20px' }, border: '2px solid black' }}>
                            About Me
                        </Button>
                    </Link>
                    <Link smooth={true} to='projects'>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { xs: '14px', md: '20px' }, border: '2px solid black' }}>
                            Projects
                        </Button>
                    </Link>
                    <Button variant='filled' href={Resume} target='_blank' sx={{ mt: { xs: '3.75px', md: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { xs: '14px', md: '20px' }, border: '2px solid black' }}>
                        Resume
                    </Button>
                    <Link smooth={true} to='contact'>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { xs: '14px', md: '20px' }, border: '2px solid black' }}>
                            Contact Me
                        </Button>
                    </Link>
                </Box>
                <Box className={styles.fade} sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://www.linkedin.com/in/jalenjohnson23/' target='_blank'>
                        <AiFillLinkedin className={styles.hover} size={30} />
                    </a>
                    <a rel="noreferrer" style={{ textDecoration: 'none', color: 'black', padding: '7px' }} href='https://github.com/Jevoni' target='_blank'>
                        <AiFillGithub className={styles.hover} size={30} />
                    </a>
                </Box>
            </Box>
        </div>
    )
}

export default Header