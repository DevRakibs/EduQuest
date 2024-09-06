import { AccessTime, CalendarMonth, ImportContacts, KeyboardDoubleArrowRight, PlayCircleOutline, PodcastsOutlined } from "@mui/icons-material";
import { Box, Button, Chip, List, ListItem, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import CButton from "../common/CButton";

const CourseCard = () => {
  return (
    <Stack sx={{
      width: { xs: '100%', sm: '470px' },
      bgcolor: '#fff',
      borderRadius: '16px',
      position: 'relative',
      border: '1px solid lightgray',
      // overflow: 'hidden'
    }}>
      <Box sx={{
        height: { xs: '300px', md: '250px' },
        border: '1px solid lightgray',
        m: 2,
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/course-01.jpg" alt="" />
      </Box>
      {/* <Typography sx={{
        position: 'absolute',
        top: 18, left: 18,
        fontSize: '14px',
        px: 1,
        py: .5,
        bgcolor: 'primary.main',
        color: '#fff',
        borderRadius: '4px',
      }}>অফ-লাইন</Typography> */}
      <Stack sx={{ p: '0 20px 20px' }}>
        <Typography variant="body" sx={{
          fontSize: '14px',
          px: 1,
          mb: 1,
          width: 'fit-content',
          bgcolor: '#DCFCE7',
          borderRadius: '8px',
        }}>Development</Typography>
        <Typography sx={{ fontSize: '20px', lineHeight: '25px', fontWeight: '600', mb: 1.5 }}>Wordpress Advance to Marketplace</Typography>
        <Stack direction='row' gap={1} flexWrap='wrap' mb={2}>
          <Chip icon={<KeyboardDoubleArrowRight fontSize='small' />} label="২৮ টি  লাইভ ক্লাস" variant="outlined" />
          <Chip icon={<KeyboardDoubleArrowRight fontSize='small' />} label="১০ টি  প্রজেক্টস" variant="outlined" />
          <Chip icon={<KeyboardDoubleArrowRight fontSize='small' />} label="২৫ দিন বাকি" variant="outlined" />
          <Chip icon={<KeyboardDoubleArrowRight fontSize='small' />} label="৪৮ টি প্রি রেকর্ডেড ভিডিও" variant="outlined" />
        </Stack>
        {/* <Stack direction='row' gap={2} mt={1} justifyContent='space-between'>
          <ListItem sx={{ pl: 0 }}>
            <ImportContacts fontSize="small" />
            <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap', ml: 1 }}>12 Lesson</Typography>
          </ListItem>
          <ListItem sx={{ pr: 0 }}>
            <AccessTime fontSize="small" />
            <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap', ml: 1 }}>40hr 10min</Typography>
          </ListItem>
        </Stack> */}
        <Stack direction='row' gap={2} justifyContent='space-between' mt={1}>
          <Link to='/course/32'>
            <CButton contained rounded style={{ width: '150px' }}> বিস্তারিত</CButton>
          </Link>
          <CButton rounded outlined>Enrole Now</CButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CourseCard;