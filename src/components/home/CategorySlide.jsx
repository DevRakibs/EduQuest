import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { SlideAnimation } from '../../common/Animation'

const category = [
  { logo: "/writing.svg", text: 'Writing & Translation' },
  { logo: "/programming.svg", text: 'Web Development' },
  { logo: "/marketing.svg", text: 'Digital Marketing' },
  { logo: "/graphic.svg", text: 'Graphic Design' },
  { logo: "/animation.svg", text: 'Video & Animation' },
]

const CategorySlide = () => {
  const match = useMediaQuery('(min-width:600px)')

  return (
    <Box sx={{ my: { xs: 5, md: 5 },overflow:'hidden' }}>
      <Marquee autoFill direction='right' gradient={match} speed={50} >
        {
          category.map((item, i) => (
            <SlideAnimation direction='up' key={i} delay={100*i}>
              <Stack alignItems='center' gap={2} sx={{
                mr: { xs: 8, md: 8, lg: 30 },
                cursor: 'pointer',
              }}>
                <img style={{ width: '30px', objectFit: 'contain' }} src={item.logo} alt="img" />
                <Typography variant='body2'>{item.text}</Typography>
              </Stack>
            </SlideAnimation>
          ))
        }
      </Marquee>
    </Box>
  )
}

export default CategorySlide