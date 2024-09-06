import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CourseCardSmall from '../../../components/CourseCardSmall'
import CButton from '../../../common/CButton'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const MyCourse = () => {
  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>My Courses</Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Box />
        <Link to='/dashboard/my-course/add'>
          <CButton contained startIcon={<Add fontSize='small' />} >Add New Course</CButton>
        </Link>
      </Stack>

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

export default MyCourse