import { ArrowOutwardOutlined, CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Button, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { SlideAnimation } from '../../common/Animation'

const data = [
  {
    title: 'The Importance Of Intrinsic Motivation for Students',
    category: 'Web Development',
    date: 'Jun 17, 2024',
    img: '/blog1.jpg'
  },
  {
    title: 'The Importance Of Intrinsic Motivation for Students',
    category: 'Software Testing',
    date: 'Aug 21, 2024',
    img: '/blog2.jpg'
  },
  {
    title: 'Professional Mobile Painting and Sculpting',
    category: 'Education',
    date: 'Aug 22, 2024',
    img: '/blog3.jpg'
  },
]

const Blog = () => {
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
        // backgroundImage: `url(/course-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1
      }
    }}>
      <Container sx={{ py: { xs: 5, md: 10 } }} maxWidth='xl'>
        <SlideAnimation direction='up'>
          <Typography sx={{ fontSize: { xs: '30px', md: '40px' }, fontWeight: 600, mb: 2, textAlign: 'center' }}>Latest Blogs
          </Typography>
        </SlideAnimation>
        <Stack alignItems='center'>
          <SlideAnimation direction='up' delay={100}>
            <Typography sx={{ maxWidth: '800px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
          </SlideAnimation>
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' mt={6} gap={3} flexWrap='wrap'>
          {
            data.map((item, i) => (
              <SlideAnimation key={i} direction='up' delay={100 * i}>
                <Box sx={{
                  width: { xs: '100%', md: '320px' }
                }} >
                  <Box sx={{
                    width: { xs: '100%', md: '300px' },
                    height: '220px',
                    mb: 1.5
                  }}>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={item.img} alt="" />
                  </Box>
                  <Typography variant='body2' mb={1}>{item.category}</Typography>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>{item.title}</Typography>
                  <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' gap={.5} alignItems='center'>
                      <CalendarMonthOutlined sx={{ color: 'gray' }} fontSize='small' />
                      <Typography sx={{ fontSize: '14px', color: 'gray' }}>{item.date}</Typography>
                    </Stack>
                    <Button>See More</Button>
                  </Stack>
                </Box>
              </SlideAnimation>
            ))
          }
        </Stack>
        <Stack direction='row' justifyContent='center' mt={4}>
          <SlideAnimation direction='up' delay={400}>
            <Button sx={{ borderRadius: '50px' }} endIcon={<ArrowOutwardOutlined />} variant='outlined'>All Blogs</Button>
          </SlideAnimation>
        </Stack>
      </Container>
    </Box >
  )
}

export default Blog