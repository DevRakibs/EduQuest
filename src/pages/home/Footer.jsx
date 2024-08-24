import { Facebook, Instagram, MailOutline, MapOutlined, PhoneEnabledOutlined, WhatsApp, YouTube } from '@mui/icons-material'
import { Box, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container sx={{ pt: { xs: 5, md: 10 } }} maxWidth='xl'>
      <Stack direction={{ xs: 'column', md: 'row' }}>

        <Box flex={1.5} sx={{ mb: { xs: 4, md: 0 } }}>
          <Box sx={{
            width: { xs: '150px', md: '200px' },
            mb: 2
          }}>
            <img style={{ width: '100%' }} src='/logo.svg' alt="" />
          </Box>
          <Typography sx={{ maxWidth: '300px', mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</Typography>
          <Stack direction='row' gap={3}>
            <Facebook sx={{ color: 'blue' }} />
            <YouTube sx={{ color: 'red' }} />
            <Instagram sx={{ color: 'coral' }} />
          </Stack>
        </Box>

        <Stack flex={1} gap={2} sx={{ mb: { xs: 4, md: 0 } }}>
          <Typography variant='h5'>For Instructor</Typography>
          <Typography>Profile</Typography>
          <Typography>Login</Typography>
          <Typography>Register</Typography>
          <Typography>Instructor</Typography>
          <Typography>Dashboard</Typography>
        </Stack>

        <Stack flex={1} gap={2} sx={{ mb: { xs: 4, md: 0 } }}>
          <Typography variant='h5'>For Student</Typography>
          <Typography>Profile</Typography>
          <Typography>Login</Typography>
          <Typography>Register</Typography>
          <Typography>Instructor</Typography>
          <Typography>Dashboard</Typography>
        </Stack>

        <Stack flex={1} gap={2}>
          <Typography variant='h5'>Contact Info</Typography>
          <Stack direction='row' gap={1}>
            <MapOutlined />
            <Typography ml={1}>2570 Quadra Street Victoria Road, New York, Canada</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <PhoneEnabledOutlined />
            <Typography ml={1}>623 43434 4343</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <WhatsApp />
            <Typography ml={1}>Contact Whatsapp</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <MailOutline />
            <Typography ml={1}>example@yourmail.com</Typography>
          </Stack>
        </Stack>

      </Stack>
      <Typography sx={{ textAlign: 'center', mt: 6, mb: 3 }}>
        © {new Date().getFullYear()} All Rights Reserved.
      </Typography>

    </Container>
  )
}

export default Footer