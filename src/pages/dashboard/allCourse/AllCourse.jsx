import { Search } from '@mui/icons-material'
import { Box, FormControl, IconButton, Input, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import CourseCard from '../../../components/CourseCard'

const AllCourse = () => {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('')


  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>Our Courses</Typography>
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
          [1, 2, 3, 4, 5, 6].map((item, id) => (
            <Box key={item} mt={2}>
              <CourseCard />
            </Box>
          ))
        }
      </Stack>
    </Box>
  )
}

export default AllCourse