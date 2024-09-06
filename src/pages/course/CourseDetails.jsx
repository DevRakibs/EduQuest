/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Chip, Container, Grid, ListItem, Paper, Stack, Typography } from '@mui/material'
import Breadcrumbs from '../../common/BreadCrumb'
import CButton from '../../common/CButton'
import { AccessTime, AddBoxSharp, ArrowRight, CalendarMonth, DoneAll, DoubleArrow, FormatListBulleted, ImportContacts, KeyboardArrowRight, KeyboardDoubleArrowRight, List, PlayCircleFilledOutlined, PlayCircleFilledWhite, PlayCircleOutline, PodcastsOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, format, parse } from 'date-fns'

const courseInfo = [
  {
    title: 'ব্যাচ শুরু',
    desc: 'বৃহস্পতিবার ২৬ সেপ্টেম্বর'
  },
  {
    title: 'লাইভ ক্লাস',
    desc: 'রাত ১০:১৫- ১১:৪৫ (বৃহ,শনি)'
  },
  {
    title: 'সিট বাকি',
    desc: '২৮৬ টি'
  },
  {
    title: 'ভর্তি চলছে',
    desc: '১ম ব্যাচে'
  },
]


const CourseDetails = () => {
  const targetDate = '2024.11.25'
  const [timeRemaining, setTimeRemaining] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const target = parse(targetDate, 'yyyy.MM.dd', new Date());

      const months = differenceInMonths(target, currentDate);
      const days = differenceInDays(target, currentDate) % 30; // Approximation for days within a month
      const hours = differenceInHours(target, currentDate) % 24;

      setTimeRemaining({ months, days, hours });
    };

    calculateTimeRemaining();

    const interval = setInterval(calculateTimeRemaining, 1000 * 60 * 60); // Update every hour
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <Box mb={10}>

      <Stack alignItems='center' justifyContent='center' sx={{
        height: '200px',
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, color: 'primary.main', fontWeight: 600, mb: 2 }}>Course Details</Typography>
        <Breadcrumbs page='Courses' />
      </Stack>

      <Container maxWidth='xl'>

        <Stack direction={{ xs: 'column', lg: 'row' }} gap={5} justifyContent='space-between' mt={{ xs: 10, lg: 10 }}>
          <Stack sx={{ flex: 1 }}>
            <Typography variant='h4' mb={1}>The Complete Web Developer Course 2.0</Typography>
            <Typography variant="body" sx={{
              fontSize: '14px',
              px: 2, py: .5, mb: 1,
              width: 'fit-content',
              bgcolor: 'bg',
              // color: '#fff',
              borderRadius: '50px',
            }}>Web Development</Typography>
            <Stack direction='row' flexWrap='wrap' gap={3} mt={2}>
              {
                courseInfo.map((item, id) => (
                  <Box key={id} sx={{
                    p: 2,
                    minWidth: { xs: '100%', sm: '200px' }, flex: 1,
                    borderRadius: '8px',
                    border: '1px solid green'
                  }} >
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'green' }}>{item.title}</Typography>
                    <Typography variant='body' sx={{ fontSize: '16px' }}>{item.desc}</Typography>
                  </Box>
                ))
              }
            </Stack>
            <Stack sx={{
              borderRadius: '16px',
              border: '1px solid lightgray',
              p: 2,
            }} gap={2} mt={3}>
              <Typography variant='h5'>Overview</Typography>
              <Typography sx={{ fontWeight: 600 }} >Course Description</Typography>
              <Typography variant='body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
              <Typography>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
              <Box>
                <Typography sx={{ fontWeight: 600 }} >What you'll learn</Typography>
                <ul>
                  <li>Become a UX designer.</li>
                  <li>You will be able to add UX designer to your CV.</li>
                  <li>Build & test a full website design.</li>
                  <li>Build & test a full mobile app.</li>
                  <li>Learn to design websites & mobile phone apps.</li>
                  <li>You'll learn how to choose colors.</li>
                  <li>Prototype your designs with interactions.</li>
                  <li>Export production ready assets.</li>
                </ul>
              </Box>
              <Typography sx={{ fontWeight: 600 }} >Requirements</Typography>
              <Typography>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.
                No previous design experience is needed.
                No previous Adobe XD skills are needed.</Typography>
            </Stack>


          </Stack>

          <Box>
            <Box>
              <Box
                sx={{
                  width: { xs: '100%', sm: '470px' },
                  bgcolor: '#fff',
                  position: 'relative',
                  px: 5, py: 2, mb: 2,
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: '1px solid lightgray',
                }}
              >
                <Typography variant="h4" sx={{ color: '#0f2027', fontWeight: 'bold' }}>
                  Course Start in
                  {/* Course Start in {format(parse(targetDate, 'yyyy.MM.dd', new Date()), 'MMMM do, yyyy')} */}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  sx={{ mt: 2 }}
                >
                  <Box textAlign="center">
                    <Typography variant="h3" sx={{ color: '#203a43' }}>
                      {timeRemaining.months}
                    </Typography>
                    <Typography variant="h6">Months</Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h3" sx={{ color: '#203a43' }}>
                      {timeRemaining.days}
                    </Typography>
                    <Typography variant="h6">Days</Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h3" sx={{ color: '#203a43' }}>
                      {timeRemaining.hours}
                    </Typography>
                    <Typography variant="h6">Hours</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Stack sx={{
              width: { xs: '100%', sm: '470px' },
              bgcolor: '#fff',
              position: 'relative',
              borderRadius: '16px',
              border: '1px solid lightgray',
              overflow: 'hidden'
            }}>
              <Box sx={{
                height: { xs: '300px', md: '250px' },
                // border: '1px solid lightgray',
                // m: 2,
                // borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/course-01.jpg" alt="" />
              </Box>
              <Stack sx={{ p: '0 20px 20px' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '20px', color: 'green', my: 1 }}>$100</Typography>
                <Typography sx={{ fontSize: '20px', lineHeight: '25px', fontWeight: '600', mb: 1.5 }}>The Complete Web Developer Course 2.0</Typography>

                <CButton rounded contained>Enrole Now</CButton>
                <Typography variant='h6' mt={3}>Includes</Typography>
                <ListItem>
                  <DoneAll sx={{ color: 'secondary.main', mr: 1 }} />
                  <Typography variant='body'> 11 hours on-demand video</Typography>
                </ListItem>
                <ListItem>
                  <DoneAll sx={{ color: 'secondary.main', mr: 1 }} />
                  <Typography variant='body'> 69 downloadable resources</Typography>
                </ListItem>
                <ListItem>
                  <DoneAll sx={{ color: 'secondary.main', mr: 1 }} />
                  <Typography variant='body'> Full lifetime access</Typography>
                </ListItem>
                <ListItem>
                  <DoneAll sx={{ color: 'secondary.main', mr: 1 }} />
                  <Typography variant='body'> Certificate of Completion</Typography>
                </ListItem>
                <ListItem>
                  <DoneAll sx={{ color: 'secondary.main', mr: 1 }} />
                  <Typography variant='body'> Certificate of Completion</Typography>
                </ListItem>
              </Stack>
            </Stack>
          </Box>
        </Stack>

      </Container>
    </Box >

  )
}

export default CourseDetails