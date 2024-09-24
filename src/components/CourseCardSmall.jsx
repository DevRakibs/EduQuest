/* eslint-disable no-undef */
import { AccessTime, ArrowRightAlt, CalendarMonth, DeleteOutline, Edit, ImportContacts, PlayCircleOutline, PodcastsOutlined } from "@mui/icons-material";
import { Box, Button, Chip, LinearProgress, linearProgressClasses, List, ListItem, Stack, styled, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import CButton from "../common/CButton";
import useUser from "../hook/useUser";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'primary.main',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}



const CourseCardSmall = () => {
  const [progress, setProgress] = useState(30);
  const { user } = useUser()
  return (
    <Stack sx={{
      maxWidth: { xs: '100%', sm: '270px' },
      border: '1px solid lightgray',
      bgcolor: '#fff',
      borderRadius: '16px',
      position: 'relative',
      // overflow: 'hidden'
    }}>
      <Box sx={{
        height: { xs: '300px', md: '140px' },
        m: 1,
        borderRadius: '10px',
        border: '1px solid lightgray',
        bgcolor: 'bg'
      }}>
        <img style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }} src="/course-02.jpg" alt="" />
      </Box>
      <Stack sx={{ m: 1.5 }}>
        <Typography variant="body" sx={{
          fontSize: '14px',
          px: 1,
          mb: 1,
          width: 'fit-content',
          bgcolor: '#DCFCE7',
          borderRadius: '8px',
        }}>Development</Typography>
        <Link className="link" to='/course/234'>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: '600' }}>Wordpress Advance to Marketplace</Typography>
        </Link>
        {user && (
          user?.role === 'student' ?
            <Box>
              <Box sx={{ width: '100%', my: 2 }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
              <Link to='/dashboard/enrolled/525372'>
                <Button variant="outlined" sx={{ width: '100%', borderRadius: '50px' }} size='small'>Continue Watching</Button>
              </Link>
            </Box> :
            <Box>
              <Stack direction='row' gap={2} mt={.5} justifyContent='space-between'>
                <ListItem sx={{ pl: 0 }}>
                  <ImportContacts fontSize="small" />
                  <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap', ml: 1 }}>12 Lesson</Typography>
                </ListItem>
                <ListItem sx={{ pr: 0 }}>
                  <AccessTime fontSize="small" />
                  <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap', ml: 1 }}>40hr 10min</Typography>
                </ListItem>
              </Stack>
              <Stack direction='row' justifyContent='space-between' mt={.5}>
                <Link className="link" to='/course/261'>
                  <CButton endIcon={<ArrowRightAlt />} >Details</CButton>
                </Link>
                <CButton outlined startIcon={<Edit fontSize="small" />} >Edit</CButton>
              </Stack>
            </Box>
        )
        }
      </Stack>
    </Stack>
  )
}

export default CourseCardSmall;