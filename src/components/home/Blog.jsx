import { ArrowOutwardOutlined, CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Button, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { SlideAnimation } from '../../common/Animation'
import BlogCard from '../BlogCard'

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
                <BlogCard item={item} />
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