import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import BreadCrumb from '../../common/BreadCrumb'
import { SlideAnimation } from '../../common/Animation'
import BlogCard from '../../components/BlogCard'
import { useState } from 'react'

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
  const [category, setCategory] = useState('All Blogs')
  return (
    <Box mb={10}>
      <Stack alignItems='center' justifyContent='center' sx={{
        height: '200px',
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'primary.main', fontWeight: 600, mb: 2 }}>Our Blogs</Typography>
        <BreadCrumb />
      </Stack>
      <Container maxWidth='xl'>
        <Stack mt={{ xs: 5, lg: 10 }} direction='row' flexWrap='wrap' gap={2} justifyContent='center'>
          {
            ['All Blogs', 'Development', 'Graphic', 'Marketing', 'Course', 'Info'].map((item, id) => (
              <Typography sx={{
                bgcolor: category === item ? 'primary.main' : '',
                color: category === item ? '#fff' : '',
                border: '1px solid lightgray',
                px: 2, py: .5, borderRadius: '50px',
                cursor:'pointer',
              }} onClick={() => setCategory(item)} variant='outlined' key={id} label={item}>
                {item}
              </Typography>
            ))
          }
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' mt={6} gap={6} flexWrap='wrap'>
          {
            data.map((item, i) => (
              <SlideAnimation key={i} direction='up' delay={100 * i}>
                <BlogCard item={item} />
              </SlideAnimation>
            ))
          }
        </Stack>
      </Container>
    </Box>
  )
}

export default Blog