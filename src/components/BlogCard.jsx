import { CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ item }) => {
  return (
    <Box sx={{
      width: { xs: '100%', md: '380px' },
      maxWidth:'380px'
    }} >
      <Box sx={{
        width: '100%',
        height: '220px',
        mb: 1.5
      }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src={item.img} alt="" />
      </Box>
      <Box>
        <Typography variant='body2' mb={1}>{item.category}</Typography>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>{item.title}</Typography>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' gap={.5} alignItems='center'>
            <CalendarMonthOutlined sx={{ color: 'gray' }} fontSize='small' />
            <Typography sx={{ fontSize: '14px', color: 'gray' }}>{item.date}</Typography>
          </Stack>
          <Link to='/blog/6565'>
            <Button>See More</Button>
          </Link>
        </Stack>
      </Box>
    </Box >
  )
}

export default BlogCard