import React, { useState } from 'react'
import { Box } from '@mui/material'

import styles from './Hamburger.module.css'
import Resume from '../media/JALENJOHNSON.pdf'

const Hamburger = () => {
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
        <>
            <Box sx={{ zIndex: 1000, position: 'fixed', top: '10px', left: '10px', display: { xs: 'initial', sm: 'none' } }}>
                <div className={`${styles.burger} ${styles['burger-squeeze']} ${styles[`${hamDisplay}`]}`} onClick={() => { handleHamburger() }}>
                    <div className={styles['burger-lines']}></div>
                </div>
            </Box>
            <Box onClick={() => { handleHamburger() }} sx={{
                display: displays ? 'none' : 'initial', zIndex: 999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, .9)'
            }}>
                <Box className={styles['hero__content']} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Box style={{ height: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#home'>Home</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#about'>About Me</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#projects'>Projects</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href={Resume} target='_blank' rel="noreferrer">Resume</a>
                        <a onClick={() => { handleHamburger() }} style={{ color: 'black', textDecoration: 'none', }} href='#contact'>Contact Me</a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Hamburger