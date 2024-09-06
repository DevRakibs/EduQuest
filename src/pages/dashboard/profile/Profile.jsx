import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='lg'>
      <Typography variant='h5' mb={2}>My Profile</Typography>
      <Divider />

      <Box>
        <Stack direction={{ xs: 'column', md: 'row', mb: 2 }}>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '600px' }}>First Name</Typography>
            <Typography variant='body'>Rolands</Typography>
          </Box>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '200px' }}>Last Name</Typography>
            <Typography variant='body'>Richard</Typography>
          </Box>
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row', mb: 2 }}>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '600px' }}>Registerion Date</Typography>
            <Typography variant='body'>January 16, 2024, 11:15 AM</Typography>
          </Box>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '200px' }}>User Name</Typography>
            <Typography variant='body'>@Ronald66236</Typography>
          </Box>
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row', mb: 2 }}>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '600px' }}>Email</Typography>
            <Typography variant='body'>ronald61@gmail.com</Typography>
          </Box>
          <Box mt={4}>
            <Typography sx={{ fontWeight: 600, mb: .5, minWidth: '200px' }}>Phone Number</Typography>
            <Typography variant='body'>+88012617271</Typography>
          </Box>
        </Stack>
        <Typography sx={{ fontWeight: 600, mb: .5, mt: 4 }}>Bio</Typography>
        <Typography variant='body' sx={{ width: '100px' }}>Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</Typography>
      </Box>

    </Box>
  )
}

export default Profile