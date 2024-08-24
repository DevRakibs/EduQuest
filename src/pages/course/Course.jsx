import { Avatar, Box, Button, Container, FormControl, IconButton, Input, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { ArrowForward, Search } from '@mui/icons-material'

const CourseCard = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' gap={{ xs: 1, sm: 2, md: 4 }} sx={{
      // maxWidth: '1000px',
      border: '1px solid lightgray',
      width: '100%',
      bgcolor: '#fff',
      p: 2, borderRadius: '8px',
      position: 'relative',
      boxShadow: 1
    }}>
      <Box sx={{ width: { xs: '100%', md: '300px' }, height: '220px' }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src="/course-01.jpg" alt="" />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '20px', lineHeight: '25px', fontWeight: '600', my: { xs: 1, md: 2 } }}>Wordpress Advance to Marketplace</Typography>
        <Stack direction='row' flexWrap='wrap' gap={1} mb={1}>
          {
            [
              '25 Live Class',
              '15+ Website',
              'Own Softwere',
              'Course Certificate',
              'Re-Admission',
              'Support Instructor'
            ].map(item => (
              <Typography sx={{
                border: '1px solid lightgray',
                px: 1.5, borderRadius: '8px',
                whiteSpace: 'nowrap'
              }} variant='body2' key={item}>{item}</Typography>
            ))
          }
        </Stack>
        <Typography sx={{ mb: 1 }}>Course Fee: <span style={{ color: 'green', }}>$40</span></Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Stack direction='row' gap={1}>
            <Avatar />
            <Box>
              <Typography sx={{ whiteSpace: 'nowrap' }}>Jesse Stevens</Typography>
              <Typography variant='body2'>Instructor</Typography>
            </Box>
          </Stack>
          <Stack sx={{ width: '100%' }} direction='row' gap={2} alignItems='center' mt={{ xs: 1, md: 0 }} justifyContent={{ xs: 'space-between', md: 'flex-end' }}>
            <Button sx={{ borderRadius: '50px' }}>Details</Button>
            <Button variant='contained' sx={{ borderRadius: '50px' }}>Enrole Now</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack >
  )
}

const Course = () => {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  return (
    <Box>
      <Stack alignItems='center' justifyContent='center' sx={{
        height: '200px',
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'primary.main', fontWeight: 600, mb: 2 }}>All Courses</Typography>
        <BreadCrumb page='Courses' />
      </Stack>

      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Stack direction='row' gap={2} mb={2}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '480px',
            bgcolor: '#fff',
            width: '100%',
            border: '1px solid lightgray',
            borderRadius: '4px',
            pl: 2
          }}>
            <Input onChange={e => setSearchText(e.target.value)} fullWidth disableUnderline placeholder='Search' />
            <IconButton><Search /></IconButton>
          </Box>
          <Box sx={{ minWidth: 300 }}>
            <FormControl size='small' fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={statusFilter}
                label="Category"
                onChange={e => setStatusFilter(e.target.value)}
              >
                <MenuItem value={'asall'}>Wordpress development </MenuItem>
                <MenuItem value={'blocksaed'}>PHP Laravel</MenuItem>
                <MenuItem value={'invalaid'}>Graphic Design</MenuItem>
                <MenuItem value={'invasalid'}>Digital Marketing</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>
          <Stack flex={2} alignItems='center' gap={3}>
            {
              [1, 2, 3, 4, 5, 6].map(item => (
                <Box key={item} mt={2}>
                  <CourseCard />
                </Box>
              ))
            }
          </Stack>
          <Paper elevation={3} sx={{
            display: { xs: 'none', lg: 'block' },
            flex: 1,
            p: 3, mt: 2,
            maxHeight: '800px'
          }}>
            <Typography sx={{ fontSize: '22px', fontWeight: 600, mb: 2 }}>Latest Course</Typography>
            <Stack gap={3}>
              {
                [1, 2, 3, 4, 5].map((item, i) => (
                  <Stack direction='row' gap={2} key={i}>
                    <img style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} src="/course-01.jpg" alt="" />
                    <Box>
                      <Typography sx={{ fontWeight: 600, mb: 1 }}>Become a PHP Master and Make Money</Typography>
                      <Stack direction='row' justifyContent='space-between'>
                        <Typography sx={{ color: 'green' }}>$100</Typography>
                        <Button sx={{ borderRadius: '50px' }} variant='outlined' size='small'>Enrole Now</Button>
                      </Stack>
                    </Box>
                  </Stack>
                ))
              }
            </Stack>
          </Paper>
        </Stack>

      </Container>
    </Box>
  )
}

export default Course