import { Search } from '@mui/icons-material'
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../../../utils/axiosReq'
import CourseCard from '../../../components/CourseCard'
import Loader from '../../../common/Loader'
import ErrorMsg from '../../../common/ErrorMsg'

const AllCourse = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const { data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: () => axiosReq.get('/category/all'),
  })

  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ['course', category, search],
    queryFn: async () => {
      const res = await axiosReq.get('/course/all', {
        params: {
          category: category,
          search: search
        }
      })
      return res?.data.filter(course => course.status === 'active')
    }
  })


  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>Our Courses</Typography>
      <Stack direction='row' gap={2} mb={2}>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          placeholder="Search Course..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ minWidth: 120 }} >
          <FormControl fullWidth size='small'>
            <InputLabel>Filter</InputLabel>
            <Select
              value={category}
              label="Filter"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={''}>None</MenuItem>
              {
                categories?.data?.map(c => (
                  <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box>
      </Stack>


      <Stack direction={{ xs: 'column', md: 'row' }} flexWrap='wrap' flex={2} gap={3}>

        {
          courses?.length === 0 ? <Typography sx={{ textAlign: 'center', mt: 2 }}>No course found</Typography> :
            isLoading ? <Loader /> : isError ? <ErrorMsg /> :
              courses?.map((item) => (
                <Box key={item._id} mt={2}>
                  <CourseCard data={item} />
                </Box>
              ))
        }
      </Stack>
    </Box>
  )
}

export default AllCourse