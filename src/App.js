import React from 'react'
import { CssBaseline, Box } from '@mui/material'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Middlebar from './components/Middlebar'
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <Box>
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