import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CourseCardSmall from '../../../components/CourseCardSmall'

const EnrolledCourse = () => {
  return (
    <Box sx={{
      bgcolor:'#fff',
      p:3,borderRadius:'16px',
      minHeight:'100vh'
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>Enrolled Course</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4} flexWrap='wrap'>
        {
          [1, 2].map((item, id) => (
            <Box key={id} mt={2}>
              <CourseCardSmall />
            </Box>
          ))
        }
      </Stack>
    </Box>
  )
}

export default EnrolledCourse