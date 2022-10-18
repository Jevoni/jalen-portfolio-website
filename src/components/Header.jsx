import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { AiFillLinkedin, AiFillGithub, } from 'react-icons/ai'
import { Link } from "react-scroll";

import Resume from '../media/JALENJOHNSON.pdf'

import styles from './Header.module.css'

const Header = () => {
    const [displays, setDisplay] = useState(true)
    const [hamDisplay, setHamDisplay] = useState('')
    const handleHamburger = () => {
        if (hamDisplay === 'open') {
            setHamDisplay('')
        } else {
            setHamDisplay('open')
        }
        setDisplay(!displays)
    }

    return (
        <Box id='home' sx={{
            height: '100vh',
            backgroundColor: 'lightslategray',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '2px solid black'
        }}>
            <Box sx={{ zIndex: 1000, position: 'fixed', top: '10px', right: '10px', display: { xs: 'initial', sm: 'none' } }}>
                <div className={`${styles.burger} ${styles['burger-squeeze']} ${styles[`${hamDisplay}`]}`} onClick={() => { handleHamburger() }}>
                    <div className={styles['burger-lines']}></div>
                </div>
            </Box>
            <Box onClick={() => { handleHamburger() }} sx={{
                display: displays ? 'none' : 'initial', zIndex: 999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, .9)'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Box style={{ height: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#home'>Home</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#about'>About Me</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#projects'>Projects</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href={Resume} target='_blank' rel="noreferrer">Resume</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#contact'>Contact Me</a>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: 'center',
                flexDirection: "column",
                textAlign: "center",
                height: '90%',
                justifyContent: 'center'
            }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: "column", marginBottom: '30px', }}>
                    <Typography variant="h3" className={`${styles.typewriter} ${styles['animation-1']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        Hello,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-2']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        I'm <span style={{ color: '#F55887', fontWeight: 'bold' }}> Jalen</span>,<br />
                    </Typography>
                    <Typography variant='h3' className={`${styles.typewriter} ${styles['animation-3']}`} sx={{ fontSize: { xs: '34px', sm: '40px', md: '44px', lg: '48px' } }}>
                        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>Front End</span> Developer
                    </Typography>
                </Box>
                <Box className={`${styles.fade} ${styles['nav-bar']}`} sx={{
                    marginTop: '30px',
                    marginBottom: '20px',
                    // display: { xs: 'none', sm: 'initial' }
                }}>
                    <Link smooth={true} to='about'>
                        <Button variant='filled' href='#about' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { sx: '15px', md: '20px' }, border: '2px solid black' }}>
                            About Me
                        </Button>
                    </Link>
                    <Link smooth={true} to='projects'>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { sx: '15px', md: '20px' }, border: '2px solid black' }}>
                            Projects
                        </Button>
                    </Link>
                    <a href={Resume} target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { sx: '15px', md: '20px' }, border: '2px solid black' }}>
                            Resume
                        </Button>
                    </a>
                    <Link smooth={true} to='contact'>
                        <Button variant='filled' sx={{ mt: { xs: '3.75px', sm: '0px' }, mb: { xs: '3.75px', sm: '0px' }, mr: { xs: '3.75px', sm: '15px' }, ml: { xs: '3.75px', sm: '15px' }, fontWeight: 'bold', fontSize: { sx: '15px', md: '20px' }, border: '2px solid black' }}>
                            Contact Me
                        </Button>
                    </Link>
                </Box>
                <Box className={styles.fade} sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
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