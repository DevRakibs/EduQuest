import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react';
import CButton from '../../../common/CButton';
import InfoInput from './InfoInput';
import ContentInput from './ContentInput';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const AddCourse = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#fff',
      p: 3,
      borderRadius: '16px',
    }} maxWidth='xl'>
      <Typography variant='h5' mb={2}>Create Course</Typography>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Course Info" />
        <Tab label="Course Content" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <InfoInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContentInput />
      </CustomTabPanel>
    </Box >
  )
}

export default AddCourse