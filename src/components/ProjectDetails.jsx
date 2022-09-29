import React from 'react'
import { Box, Typography } from '@mui/material'

import AnimeWorld from '../AnimeWorld.png'
import Portfolio from '../Portfolio.png'
import Crypto from '../Crypto.png'
import YouTube from '../YouTube.png'
import FindCountry from '../FindCountry.png'
import Travel from '../TravelAdvisor.png'
import Project from './Project'

const ProjectDetails = () => {
    const projects = [
        {
            title: 'Anime Place',
            info: 'Are you an anime fan? Anime Place is the perfect web solution to those who want to watch anime online without paying for a monthly subscription. The website showcases all the latest and greatest animes, along with relics from the past.',
            paragraphC: 'Technologies: React, React Redux, React Redux Toolkit, Mui/Material, React Router DOM, React Player, Axios.',
            picture: AnimeWorld,
            liveSite: 'https://anime-place.netlify.app/',
            sourceCode: 'https://github.com/Jevoni/anime-world',
            backgroundColor: 'lightblue',
            version: '(v1.2.2)',
            isComingSoon: false
        },
        {
            title: 'Youtube Lite',
            info: 'This is shallow copy of the YouTube website, which means that there is no backend integration. In non technical terms, its YouTube without the ability to create an account and things of that nature.',
            paragraphC: 'Technologies: React, React DOM, React Player, React Router DOM.',
            picture: YouTube,
            liveSite: 'https://youtubes-lite.netlify.app',
            sourceCode: 'https://github.com/Jevoni/youtube-lite',
            backgroundColor: 'lightblue',
            version: '(v2.0.0)',
            isComingSoon: false
        },
        {
            title: 'Travel Advisor',
            info: 'Looking for a nice hotel stay or try new restuarants in your area? Travel Advisor is a web application that uses the Google Maps api along with the Trip Advisor api in order to display data about the restaurants, and hotels in your area.',
            paragraphC: 'Technologies: React, Axios, Google Maps React, React Dom, React Icons, Mui/Materials.',
            picture: Travel,
            liveSite: 'https://travel-advisor-jalen.netlify.app',
            sourceCode: 'https://github.com/Jevoni/travel-guide',
            backgroundColor: 'lightblue',
            version: '(v1.0.0)',
            isComingSoon: false
        },
        {
            title: 'Country Finder',
            info: 'Who doesnt like to travel? Country Finder is an application that displays relevant data such as the language, currency, population, etc about any country.',
            paragraphC: 'Technologies: React, React DOM, React Redux, React Router DOM, Redux Persist.',
            picture: FindCountry,
            liveSite: 'https://find-country-jalen.netlify.app',
            sourceCode: 'https://github.com/Jevoni/find-country',
            backgroundColor: 'lightblue',
            version: '(v1.0.0)',
            isComingSoon: false
        },
        {
            title: 'CryptoVerse',
            info: 'In our ever involving economy, everything is becoming globalized... including currency. CryptoVerse is web application that displays relevant data about all the major crypto currencies.',
            paragraphC: 'Technologies: Ant Design, Axios, Chart.js, HTML React Player, Milify, Moment, React, React DOM, React Redux, React Router DOM',
            picture: Crypto,
            liveSite: 'https://crypto-verse-jalen.netlify.app',
            sourceCode: 'https://github.com/Jevoni/cryptoverse',
            backgroundColor: 'lightblue',
            version: '(v1.0.0)',
            isComingSoon: false
        },
        {
            title: 'Portfolio Website',
            info: 'First iteration of my Portfolio Website. Looking forward to adding animations and other cool designs. ',
            paragraphC: 'Technologies: React',
            picture: Portfolio,
            liveSite: 'https://jalenj.com',
            sourceCode: 'https://github.com/Jevoni/jalen-portfolio-website',
            backgroundColor: 'lightblue',
            version: '(v1.1.1)',
            isComingSoon: false
        },
        {
            title: 'Exercise App',
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur mollitia facere doloremque tempore, rerum repudiandae nulla veritatis aspernatur officiis vitae commodi ducimus cupiditate consequuntur recusandae, sit earum! Et, nihil?",
            paragraphC: '',
            picture: 'filler',
            liveSite: '',
            sourceCode: '',
            backgroundColor: 'lightblue',
            version: '(Coming Soon...)',
            isComingSoon: true
        },
        {
            title: 'Free-to-Play Games DB',
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur mollitia facere doloremque tempore, rerum repudiandae nulla veritatis aspernatur officiis vitae commodi ducimus cupiditate consequuntur recusandae, sit earum! Et, nihil?",
            paragraphC: '',
            picture: 'filler',
            liveSite: '',
            sourceCode: '',
            backgroundColor: 'lightblue',
            version: '(Coming Soon...)',
            isComingSoon: true
        }]
    return (
        <Box marginTop='30px' id='projects'>
            <Typography variant='h2'
                sx={{
                    fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '60px' },
                    textAlign: 'center',
                    paddingBottom: '17px'
                }}
            >
                Projects
            </Typography>
            <Box display='flex' flexDirection='row' alignItems='center' flexWrap='wrap' justifyContent='center'>
                {projects.map(({ title, info, picture, backgroundColor, version, paragraphC, isComingSoon, sourceCode, liveSite }) => (
                    <Project title={title} paragraph={info} picture={picture} backgroundColor={backgroundColor} version={version} paragraphC={paragraphC} isComingSoon={isComingSoon} liveSite={liveSite} sourceCode={sourceCode} />
                ))}
            </Box>
        </Box>

    )
}

export default ProjectDetails