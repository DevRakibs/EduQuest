import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CourseCard from '../../../components/CourseCard'
import CourseCardSmall from '../../../components/CourseCardSmall'
import useUser from '../../../hook/useUser'
import useAuth from '../../../hook/useAuth'
import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../../../utils/axiosReq'
import Loader from '../../../common/Loader'
import ErrorMsg from '../../../common/ErrorMsg'

const cardStyle = {
  box: {
    border: '1px solid lightgray',
    p: 2, width: { xs: '100%', md: '270px' },
    bgcolor: '#fff',
    borderRadius: '8px'
  },
  text1: {
    color: 'text.main',
    fontWeight: 400,
    fontSize: '18px'
  },
  text2: {
    color: 'primary.main',
    fontSize: '30px',
    fontWeight: 600
  }
}

const Dashboard = () => {
  const { user } = useUser()
  const { token } = useAuth()
  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ['recentCourse'],
    queryFn: () => axiosReq.get('/course/instructor/recent', { headers: { Authorization: token } })
  })
  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='lg'>

      <Stack alignItems='center' mb={4} sx={{
        bgcolor: 'primary.main',
        color: '#fff',
        borderRadius: '16px'
      }} direction='row' justifyContent='space-between'>
        <Box p={4} flex={2}>
          <Typography variant='h4' mb={1}>
            Hello,
            <span style={{ fontWeight: 300 }}> {user?.name ? user?.name : user?.username}</span>
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: '14px' }} mb={3}>Lets do something today!</Typography>
          <Typography sx={{ fontWeight: 300 }}>Set your study plan and growth with community</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' }, pt: 2 }} flex={1}>
          <img style={{ width: '200x', height: '200px' }} src="/online-learning.gif" alt="" />
        </Box>
      </Stack>

      {/* <Stack direction={{ xs: 'column', md: 'row' }} gap={3}>
        <Box sx={cardStyle.box}>
          <Typography sx={cardStyle.text1}>Enrolled Course</Typography>
          <Typography sx={cardStyle.text2}>05</Typography>
        </Box>
        <Box sx={cardStyle.box}>
          <Typography sx={cardStyle.text1}>Active Course</Typography>
          <Typography sx={cardStyle.text2}>02</Typography>
        </Box>
        <Box sx={cardStyle.box}>
          <Typography sx={cardStyle.text1}>Enrolled Course</Typography>
          <Typography sx={cardStyle.text2}>05</Typography>
        </Box>
      </Stack> */}

      <Typography variant='h5' mt={4} mb={2}>
        {user?.role === 'student' ? 'Recently Enrolled Course' : 'Recently Published Course'}

      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4} flexWrap='wrap'>
        {
          isLoading ? <Loader /> : isError ? <ErrorMsg /> :
            courses?.data?.map((item, id) => (
              <Box key={id} mt={2}>
                <CourseCardSmall data={item} />
              </Box>
            ))
        }
      </Stack>

    </Box>
  )
}

export default Dashboard