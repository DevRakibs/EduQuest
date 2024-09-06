import { Box, Button, Container, FormControl, IconButton, Input, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { Search } from '@mui/icons-material'
import CourseCard from '../../components/CourseCard'
import { SlideAnimation } from '../../common/Animation'


const Course = () => {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  return (
    <Box mb={10}>
      <Stack alignItems='center' justifyContent='center' sx={{
        height: '200px',
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'primary.main', fontWeight: 600, mb: 2 }}>All Courses</Typography>
        <BreadCrumb page='Courses' />
      </Stack>

      <Stack alignItems='center' gap={3} my={4}>
        <SlideAnimation direction='up'>
          <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 600, textAlign: 'center' }}>আমাদের কোর্স সমূহ</Typography>
        </SlideAnimation>
        <SlideAnimation direction='up' delay={100}>
          <Typography sx={{ maxWidth: '600px',textAlign:'center' }}>এসাইনমেন্ট ও প্রোজেক্ট নির্ভর ইন্ডাস্ট্রি ডিমান্ড প্রফেশনাল কোর্স, ফ্রিল্যান্সিং মার্কেটপ্লেস ক্লাস, বোনাস টিউটোরিয়াল, সাপোর্ট ক্লাস, টপিক বেজড মেটেরিয়ালস এবং ওয়ার্কশীট এর সমন্বয়ে সাজানো হয়েছে অফলাইন ব্যাচের প্রতিটি কোর্স।</Typography>
        </SlideAnimation>
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


        <Stack direction={{ xs: 'column', md: 'row' }} flexWrap='wrap' flex={2} gap={3}>
          {
            [1, 2, 3, 4, 5, 6].map((item,id) => (
              <SlideAnimation key={item} direction='up' delay={100 * id}>
                <Box mt={2}>
                  <CourseCard />
                </Box>
              </SlideAnimation>
            ))
          }
        </Stack>

      </Container>
    </Box>
  )
}

export default Course