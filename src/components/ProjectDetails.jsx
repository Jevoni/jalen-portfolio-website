import React from 'react'
import { Box, Typography } from '@mui/material'

import Project from './Project'
import { projectsData } from '../utils/projectsData'

const ProjectDetails = () => {

    return (
        <Box id='projects' sx={{ marginTop: '30px' }}>
            <Typography variant='h2' sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' }, textAlign: 'center', paddingBottom: '17px' }}>
                Projects
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {projectsData.map((project, index) => (
                    <Project title={project.title} paragraph={project.info} picture={project.picture} backgroundColor={project.backgroundColor} version={project.version} paragraphC={project.paragraphC} isComingSoon={project.isComingSoon} liveSite={project.liveSite} sourceCode={project.sourceCode} key={index} />
                ))}
            </Box>
        </Box>

    )
}

export default ProjectDetails