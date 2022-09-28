import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Box, TextField, Typography, Button } from '@mui/material'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_fq7sz6a', 'template_hbm0x7k', form.current, 'EiH-GMXiToprhw-mg')
            .then(() => {
                alert('Email Sent. Thank You!');
            }, (error) => {
                alert('Email could not be sent');
            });
    };

    return (
        <Box
            id='contact'
            sx={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'lightslategray',
                width: '100%',
                alignItems: 'center',
                marginTop: '28px',
                borderTop: '2px solid black'
            }}
        >
            <Typography variant='h2' paddingTop='15px' sx={{ fontSize: { xs: '25px', sm: '35px', md: '3.5rem' }, textAlign: 'center' }}>Contant Me</Typography>
            <form ref={form} onSubmit={sendEmail}>
                <Box
                    m={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 'auto',
                        height: 'auto'
                    }}
                >
                    <TextField
                        variant='filled'
                        label='Full Name'
                        name="user_name"
                        sx={{
                            background: 'white',
                            width: {
                                lg: '700px', md: '650px', sm: '550px', xs: '300px'
                            },
                        }} />
                    <TextField
                        variant='filled'
                        label='Email'
                        type='email'
                        name="user_email"
                        sx={{
                            background: 'white',
                            width: {
                                lg: '700px', md: '650px', sm: '550px', xs: '300px'
                            },
                        }} />
                    <TextField
                        variant='filled'
                        label='Message'
                        name="message"
                        multiline
                        sx={{
                            background: 'white',
                            width: {
                                lg: '700px', md: '650px', sm: '550px', xs: '300px'
                            },
                            marginBottom: '20px'
                        }
                        } />
                    <Button
                        variant='contained'
                        style={{
                            backgroundColor: 'black'
                        }}
                        value='Send'
                        type='submit'>
                        Submit
                    </Button>
                </Box>

            </form >
            <hr width='88%' marginTop='20px'></hr>
        </Box >

    )
}

export default Contact