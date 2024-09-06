import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import CTextField from '../../../common/CTextField'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }], // Indentation options
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['clean'], // Remove formatting option
  ],
};

const AddCourse = () => {
  const [description, setDescription] = useState('');


  return (
    <Box sx={{
      bgcolor: '#fff',
      p: 3, borderRadius: '16px',
      minHeight: '100vh'
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>Create Course</Typography>
      <Divider sx={{ mb: 2 }} />

      <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>

        <Stack flex={1.5} gap={2}>
          <Typography variant='h6' mb={3}>Course Info</Typography>
          <CTextField size='small' topLabel='Title' />
          <FormControl size='small' fullWidth>
            <label>Category</label>
            <Select >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Graphic Design</MenuItem>
              <MenuItem value={30}>Marketing</MenuItem>
            </Select>
          </FormControl>
          <CTextField size='small' type='number' topLabel='Price' />
          <Stack direction='row' gap={2}>
            <CTextField size='small' type='date' topLabel='Start Date' />
            <CTextField size='small' type='date' topLabel='End Date' />
          </Stack>
          <Stack>
            <label>Description</label>
            <ReactQuill
              style={{ height: '300px' }}
              modules={toolbarOptions}
              theme="snow"
              placeholder="Descriptions*"
              value={description}
              onChange={setDescription}
              required={true}
            />
          </Stack>
        </Stack>

        <Stack flex={1}>right</Stack>

      </Stack>

    </Box>
  )
}

export default AddCourse