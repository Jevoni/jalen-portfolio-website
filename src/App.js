import React from 'react'
import { CssBaseline, Box } from '@mui/material'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <Box style={{ overflowX: 'hidden' }}>
            <CssBaseline />
            <Header />
            <AboutMe />
            <ProjectDetails />
            <Contact />
            <Footer />
        </Box>
    )
}

export default App