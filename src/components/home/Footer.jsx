import { ArrowOutward, Facebook, Instagram, MailOutline, MapOutlined, PhoneEnabledOutlined, WhatsApp, YouTube } from '@mui/icons-material'
import { Box, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      color: '#fff',
      pb: 5
    }}>

      <Container sx={{ pt: { xs: 5, md: 10 } }} maxWidth='xl'>
        <Stack direction={{ xs: 'column', md: 'row' }}>

          <Box flex={1.5} sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography sx={{ fontSize: '55px', fontWeight: 600 }}>EasyLearn</Typography>
            {/* <Box sx={{
              width: { xs: '150px', md: '200px' },
              mb: 2
            }}>
              <img style={{ width: '100%' }} src='/logo.svg' alt="" />
            </Box> */}
            <Typography sx={{ maxWidth: '300px', mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</Typography>
            <Stack direction='row' gap={3}>
              <Facebook sx={{ color: 'blue' }} />
              <YouTube sx={{ color: 'red' }} />
              <Instagram sx={{ color: 'coral' }} />
            </Stack>
          </Box>

          <Stack flex={1} gap={2} sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant='h5'>Quick Links</Typography>
            <Link to='' className='link'>Free Seminar</Link>
            <Link to='' className='link'>Our Gallery</Link>
            <Link to='/blogs' className='link'>Blog</Link>
            <Link to='' className='link'>Privacy Policy</Link>
          </Stack>

          <Stack flex={1} gap={2} sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant='h5'>Popular Course</Typography>
            <Link to='' className='link'>Web Development</Link>
            <Link to='' className='link'>Professional Graphic Design</Link>
            <Link to='' className='link'>Digital Marketing</Link>
            <Link to='' className='link'>Mern Stack Development</Link>
            <Link to='' className='link'>Content Writing</Link>
          </Stack>

          <Stack flex={1} gap={2}>
            <Typography variant='h5'>Contact Info</Typography>
            <Stack direction='row' gap={1}>
              <MapOutlined />
              <Typography ml={1}>Office:
                Rajmoni Super market <br /> (3rd Floor)
                House # 174 , Road #128
                Mymensingh, Trishal- 2220</Typography>
            </Stack>
            <Stack direction='row' gap={1}>
              <PhoneEnabledOutlined />
              <Typography ml={1}>01764-740380</Typography>
              <a href="tel: 01764-740380"><ArrowOutward sx={{ color: '#fff' }} /></a>
            </Stack>
            <Stack direction='row' gap={1}>
              <WhatsApp />
              <Typography ml={1}>Contact Whatsapp</Typography>
              <a target='blank' href="https://wa.me/+8801640667112"><ArrowOutward sx={{ color: '#fff' }} /></a>
            </Stack>
            <Stack direction='row' gap={1}>
              <MailOutline />
              <Typography ml={1}>perfactrakib@gmail.com</Typography>
              <a href="mailto: perfactrakib@gmail.com"><ArrowOutward sx={{ color: '#fff' }} /></a>
            </Stack>
          </Stack>

        </Stack>
        <Typography sx={{ textAlign: 'center', mt: 6, mb: 3 }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </Typography>

      </Container>
    </Box>
  )
}

export default Footer