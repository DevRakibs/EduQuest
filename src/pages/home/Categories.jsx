import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { FadeAnimation, SlideAnimation } from '../../common/Animation'

const data = [
  { name: 'Digital Marketing', img: '/e1.png' },
  { name: 'UI/UX Design', img: '/e2.png' },
  { name: '3D Visual Design', img: '/e3.png' },
  { name: 'Content Marketing', img: '/e4.png' },
  { name: 'Photography', img: '/e5.png' },
  { name: 'Photo Lifestyle', img: '/e6.png' },
  { name: 'Art & Design', img: '/e7.png' },
  { name: 'Graphic Design', img: '/e8.png' },
  { name: 'Interior Design', img: '/e2.png' },
  { name: '3D Visual Design', img: '/e3.png' },
  { name: 'Art & Design', img: '/e7.png' },
]

const Categories = () => {
  return (
    <Box sx={{
      position: 'relative',
      // height: { xs: '1044px', md: '800px' },
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(/bg4.jpg)`,
        // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        // filter: 'brightness(0.6)',
        zIndex: -1
      }
    }}>

      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 5, md: 10 } }} maxWidth='xl'>
        <SlideAnimation direction='up'>
          <Typography sx={{ fontSize: { xs: '30px', md: '40px' }, fontWeight: 600, mb: 2, textAlign: 'center' }}>
            Find out by popular Categories
          </Typography>
        </SlideAnimation>
        <SlideAnimation direction='up' delay={100}>
          <Typography sx={{ maxWidth: '800px', textAlign: 'center' }}>We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.</Typography>
        </SlideAnimation>
        <Stack direction='row' gap={3} mt={7} justifyContent='center' flexWrap='wrap'>
          {
            data.map((item, i) => (
              <FadeAnimation key={i} delay={100 * i}>

                <Stack sx={{
                  bgcolor: '#fff',
                  p: { xs: 1, md: 1.3 },
                  cursor: 'pointer',
                  borderRadius: '50px',
                  transition: '.5s',
                  ":hover": {
                    bgcolor: 'primary.main',
                    color: '#fff'
                  }
                }} direction='row' alignItems='center' gap={{ xs: .5, md: 2 }}>
                  <Box sx={{
                    width: { xs: '35px', md: '45px' },
                    height: { xs: '35px', md: '45px' }
                  }}>
                    <img style={{ width: '100%', borderRadius: '100px', border: '4px solid #ecedff' }} src={item.img} alt="" />
                  </Box>
                  <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: '10px' }}>{item.name}</Typography>
                </Stack>
              </FadeAnimation>
            ))
          }
        </Stack>
      </Container>
    </Box>
  )
}

export default Categories