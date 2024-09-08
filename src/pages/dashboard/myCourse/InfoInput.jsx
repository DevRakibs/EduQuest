import { Box, Button, Collapse, FormControl, IconButton, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CTextField from '../../../common/CTextField';
import CButton from '../../../common/CButton';
import { Add, Close, Delete, KeyboardArrowDownOutlined, Upload } from '@mui/icons-material';

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

const InfoInput = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    category: '',
    price: '',
    startDate: '',
    endDate: '',
  })
  const [batchesInfo, setBatchesInfo] = useState([]);
  const [batchInfoPayload, setBatchInfoPayload] = useState({
    title: '',
    description: ''
  })
  const [includes, setIncludes] = useState([])
  const [description, setDescription] = useState('')
  const [courseImg, setCourseImg] = useState(null)

  const [addBatchInfoSecOpen, setAddBatchInfoSecOpen] = useState(false)
  const [includesInCourseSecOpen, setIncludesInCourseSecOpen] = useState(false)
  const [includesTitle, setIncludesTitle] = useState('')

  const handleAddBatch = () => {
    if (batchInfoPayload.title && batchInfoPayload.description) {
      setBatchesInfo([
        ...batchesInfo,
        {
          title: batchInfoPayload.title,
          description: batchInfoPayload.description
        }
      ]);
      setBatchInfoPayload({
        title: '',
        description: ''
      });
    }
  };

  const handleDeleteBatch = (index) => {
    const newBatches = batchesInfo.filter((_, i) => i !== index);
    setBatchesInfo(newBatches);
  };

  const handleAddIncludes = () => {
    if (includesTitle) {
      setIncludes([...includes, includesTitle]);
      setIncludesTitle('');
    }
  };

  const handleDeleteIncludes = (index) => {
    const newIncludes = includes.filter((_, i) => i !== index);
    setIncludes(newIncludes);
  };
  return (
    <Stack maxWidth='md' flex={1.5} gap={2}>
      <Typography variant='h6'>Course Info</Typography>
      <Stack direction='row' justifyContent='space-between' my={1}>
        <Box />
        <CButton contained>Save Course Info</CButton>
      </Stack>
      <CTextField size='small' topLabel='Title' />
      <FormControl size='small' fullWidth>
        <label>Category</label>
        <Select value={courseInfo.category} onChange={e => setCourseInfo({ ...courseInfo, category: e.target.value })} >
          <MenuItem value={'w'}>Web Development</MenuItem>
          <MenuItem value={'g'}>Graphic Design</MenuItem>
          <MenuItem value={'m'}>Marketing</MenuItem>
        </Select>
      </FormControl>
      <CTextField size='small' topLabel='Price' />
      <Stack direction='row' gap={2}>
        <CTextField size='small' type='date' topLabel='Start Date' />
        <CTextField size='small' type='date' topLabel='End Date' />
      </Stack>

      {/* add batch info */}
      <Stack
        sx={{
          borderRadius: '8px',
          border: '1px solid lightgray',
        }}
      >
        <CButton endIcon={<KeyboardArrowDownOutlined />} onClick={() => setAddBatchInfoSecOpen(p => !p)}>
          Add Batch Information
        </CButton>
        <Collapse sx={{
          m: addBatchInfoSecOpen ? 2 : '',
        }} in={addBatchInfoSecOpen}>
          <CTextField
            sx={{ mb: 2, mt: addBatchInfoSecOpen ? 2 : '', }}
            size='small'
            fullWidth
            topLabel="Title"
            variant="outlined"
            value={batchInfoPayload.title}
            onChange={(e) => setBatchInfoPayload({ ...batchInfoPayload, title: e.target.value })}
          />
          <CTextField
            sx={{ mb: 2 }}
            size='small'
            fullWidth
            topLabel="Description"
            variant="outlined"
            value={batchInfoPayload.description}
            onChange={(e) => setBatchInfoPayload({ ...batchInfoPayload, description: e.target.value })}
          />
          <CButton
            outlined
            fullWidth
            startIcon={<Add />}
            onClick={handleAddBatch}
          >
            Add
          </CButton>

          <Box>
            {batchesInfo.map((batch, index) => (
              <Paper
                key={index}
                sx={{
                  padding: '15px',
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="subtitle1">{batch.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {batch.description}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => handleDeleteBatch(index)}
                >
                  <Delete />
                </IconButton>
              </Paper>
            ))}
          </Box>
        </Collapse>
      </Stack>
      {/* add batch info end*/}

      {/* includes in course */}
      <Stack
        sx={{
          borderRadius: '8px',
          border: '1px solid lightgray'
        }}
      >
        <CButton endIcon={<KeyboardArrowDownOutlined />} onClick={() => setIncludesInCourseSecOpen(p => !p)} >
          Includes in Course
        </CButton>
        <Collapse sx={{
          m: includesInCourseSecOpen ? 2 : '',
        }} in={includesInCourseSecOpen}>
          <CTextField
            size='small'
            fullWidth
            topLabel="Title"
            variant="outlined"
            value={includesTitle}
            onChange={(e) => setIncludesTitle(e.target.value)}
          />
          <CButton
            sx={{ mt: 2 }}
            outlined
            startIcon={<Add />}
            onClick={handleAddIncludes}
          >
            Add
          </CButton>

          <Box>
            {includes.map((batch, index) => (
              <Paper
                key={index}
                sx={{
                  padding: '15px',
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="subtitle1">{batch}</Typography>
                </Box>
                <IconButton
                  onClick={() => handleDeleteIncludes(index)}
                >
                  <Delete />
                </IconButton>
              </Paper>
            ))}
          </Box>
        </Collapse>
      </Stack>
      {/* includes in course end */}

      {/* course description */}
      <Stack>
        <label>Description</label>
        <ReactQuill
          style={{ height: '300px', marginBottom: '70px', borderRadius: '16px' }}
          modules={toolbarOptions}
          theme="snow"
          placeholder="Descriptions*"
          value={description}
          onChange={setDescription}
          required={true}
        />
      </Stack>
      {/* course image */}
      <Stack>
        <Typography>Course Image</Typography>
        <Stack sx={{
          position: 'relative',
          border: '1px solid lightgray',
          p: '20px',
          borderRadius: '8px',
          minHeight: '200px'
        }} direction={{ xs: 'column', md: 'row' }} gap={3}>
          {
            courseImg &&
            <>
              <Box flex={1}>
                <img
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  src={courseImg ? URL.createObjectURL(courseImg) : ''}
                  alt=""
                />
              </Box>
              <IconButton onClick={() => setCourseImg(null)} sx={{
                position: 'absolute',
                border: '1px solid lightgray',
                bgcolor: '#fff', top: 5, left: 5,
                ":hover": {
                  bgcolor: 'gray'
                }
              }}>
                <Close />
              </IconButton>
            </>
          }
          <Stack alignItems='center' justifyContent='center' gap={1} flex={1}>
            <Typography> jpg,png (max 500kb)</Typography>
            <Button variant='outlined' component='label' startIcon={<Upload />}>
              Click to upload
              <input onChange={e => setCourseImg(e.target.files[0])} type="file" hidden />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default InfoInput