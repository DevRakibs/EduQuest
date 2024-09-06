import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import Breadcrumbs from '../../common/BreadCrumb'
import CButton from '../../common/CButton'
import { AddBoxSharp, CalendarMonth, FormatListBulleted, KeyboardArrowRight, List, PlayCircleFilledOutlined, PlayCircleFilledWhite, PlayCircleOutline, PodcastsOutlined } from '@mui/icons-material'

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

const includeInCourse = [
  {
    icon: '/in-1.png',
    title: '৭ মাসের গাইডেড জার্নি',
    desc: 'একদম বিগিনার ফ্রেন্ডলি ওয়েতে আপডেটেড কারিকুলাম'
  },
  {
    icon: '/in-2.png',
    title: '৪০টি লাইভ ক্লাস',
    desc: 'ন্ডাস্ট্রি এক্সপার্টের কাছে শিখুন লাইভে'
  },
  {
    icon: '/in-3.png',
    title: '৩ টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট',
    desc: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এড করুন সিভিতে, থাকুন সবার চেয়ে এগিয়ে'
  },
  {
    icon: '/in-4.png',
    title: '২০টি প্র্যাক্টিস প্রোজেক্ট',
    desc: 'যা শিখছেন তা দিয়েই করে ফেলুন প্র্যাক্টিস প্রজেক্ট, ঝালাই করুন দক্ষতা'
  },
  {
    icon: '/in-5.png',
    title: '৬০০+ প্রিরেকর্ডেড ভিডিও',
    desc: 'আপডেটেড প্রিরেকর্ডেড ভিডিও থাকছে রিসোর্স হিসেবে'
  },
  {
    icon: '/in-6.png',
    title: 'লাইফটাইম এক্সেস',
    desc: 'প্রিরেকর্ডেড ভিডিও, রিসোর্স এবং ক্লাস রেকর্ডিং এ থাকবে লাইফ টাইম এক্সেস'
  },
  {
    icon: '/in-7.png',
    title: 'মার্কেটপ্লেস গাইডলাইন',
    desc: 'কোড ক্যানিয়নের মত মার্কেটপ্লেসে কিভাবে প্রজেক্ট সেল করবেন, পাবেন গাইডলাইন'
  },
  {
    icon: '/in-8.png',
    title: 'জব মার্কেট গাইডলাইন',
    desc: 'ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান জব মার্কেটে প্রবেশ করার পুর্নাঙ্গ নির্দেশনা'
  },
  {
    icon: '/in-9.png',
    title: 'সার্টিফিকেট',
    desc: 'কোর্স শেষ করে পাবেন শেয়ারেবল কোর্স কমপ্লিশন এবং এসসমেন্ট সার্টিফিকেট'
  },
]

const CourseDetails = () => {
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
        <Stack direction={{ xs: 'column', lg: 'row' }} gap={{ xs: 6, lg: 20 }} justifyContent='space-between' mt={{ xs: 10, lg: 15 }}>
          <Stack sx={{ flex: 1 }}>
            <Typography variant='h4' mb={2}>Full Stack Web Development with JavaScript (MERN)</Typography>
            <Typography variant='body' mb={2}>১ বারই কোর্স কিনুন। ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখুন। কারন এক্সেস তো থাকবে লাইফটাইমই! আর সাথে ৩ টা জিনিস রাখবেন- ল্যাপটপ বা কম্পিউটার, ইন্টারনেট কানেকশন ও শেখার অদম্য ইচ্ছা। বিজয় আপনারই!</Typography>
            <Typography variant="body" sx={{
              fontSize: '14px',
              px: 1,
              width: 'fit-content',
              bgcolor: '#DCFCE7',
              borderRadius: '8px',
            }}>Development</Typography>
            <Stack direction='row' gap={3} alignItems='center' mt={2}>
              <CButton contained rounded endIcon={<KeyboardArrowRight />} >ব্যাচে ভর্তি হোন</CButton>
              <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>৳4,000</Typography>
            </Stack>
            <Stack direction='row' flexWrap='wrap' gap={2} mt={3}>
              <Chip icon={<PodcastsOutlined fontSize='small' />} label="২৮ টি  লাইভ ক্লাস" variant="outlined" />
              <Chip icon={<List fontSize='small' />} label="১০ টি  প্রজেক্টস" variant="outlined" />
              <Chip icon={<CalendarMonth fontSize='small' />} label="২৫ দিন বাকি" variant="outlined" />
              <Chip icon={<PlayCircleOutline fontSize='small' />} label="৪৮ টি প্রি রেকর্ডেড ভিডিও" variant="outlined" />
            </Stack>
          </Stack>
          <Box sx={{
            width: { xs: '100%', md: '500px' },
            maxWidth: '500px',
            height: '250px'
          }}>
            <img style={{ width: '100%', objectFit: 'cover', borderRadius: '16px', border: '1px solid lightgray', height: '100%' }} src="/course-01.jpg" alt="" />
          </Box>
        </Stack>

        <Stack direction='row' flexWrap='wrap' gap={3} mt={{ xs: 10, lg: 15 }} justifyContent='center'>
          {
            courseInfo.map((item, id) => (
              <Paper key={id} sx={{
                p: 2,
                minWidth: '300px',
                borderRadius: '8px'
              }} elevation={3} >
                <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{item.title}</Typography>
                <Typography variant='body' sx={{ fontSize: '16px' }}>{item.desc}</Typography>
              </Paper>
            ))
          }
        </Stack>

        <Stack mt={{ xs: 10, lg: 15 }}>
          <Typography variant='h4' textAlign='center'>কোর্সে আপনি পাচ্ছেন</Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ boxShadow: 3, py: 4, borderRadius: '8px' }} gap={{ xs: 6, md: 4 }} justifyContent='center' flexWrap='wrap' mt={6}>
            {
              includeInCourse.map((item, id) => (
                <Stack sx={{ width: { xs: '100%', lg: '400px' }, p: 1.5 }} key={id} alignItems='center' justifyItems='center' spacing={2}>
                  <img style={{ width: '40px' }} src={item.icon} alt="" />
                  <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>{item.title}</Typography>
                  <Typography variant='body' sx={{ textAlign: 'center' }}>{item.desc}</Typography>
                </Stack>
              ))
            }
          </Stack>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' gap={5} alignItems='center' mt={{ xs: 10, lg: 15 }}>
          <Typography variant='h4'>দেখে নিন কোর্সের ডেমো ক্লাস</Typography>
          <Box sx={{
            width: { xs: '100%', md: '500px' },
            height: '250px',
            position: 'relative',
            ":before": {
              position: 'absolute',
              content: '""',
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(000,000,000,.3)',
              borderRadius: '16px'
            }
          }}>
            <img style={{ width: '100%', borderRadius: '16px', height: '100%' }} src="/web22.jpg" alt="" />
            <PlayCircleFilledWhite
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                color: '#fff',
                fontSize: '70px'
              }}
            />
          </Box>
        </Stack>

        <Stack mt={{ xs: 10, lg: 15 }} justifyContent='center' alignItems='center'>
          <Typography variant='h4' sx={{ textAlign: 'center' }}>কোর্স সম্পর্কে</Typography>
          <Typography variant='body' sx={{ textAlign: 'center', maxWidth: '800px' }} mt={4}>বর্তমান সময়ে লোকাল জব মার্কেট, অনলাইন রিমোট জব মার্কেট কিংবা ফ্রিল্যান্সিং মার্কেট সহ সকল ক্ষেত্রে MERN ডেভেলপারের বিপুল চাহিদা লক্ষ্য করা যাচ্ছে। MERN Stack Development এমন একটি Combination যার দ্বারা Production Level এর সব ধরনের এপ তৈরি করা সম্ভব। আমাদের এই Full-Stack কোর্সে আপনারা Front-end এর জন্য HTML, CSS, Bootstrap, Tailwind, JavaScript ES6, React এর পাশাপাশি Backend এর জন্য শিখতে পারবেন Node JS, Express JS এবং MongoDB। এছাড়া GIT, Rest API, Firebase Authentication বিষয়েও আপনারা পাবেন বিস্তারিত ক্লাস। তাই সময়োপযোগী দক্ষতা অর্জন করতে এনরোল করুন আমাদের The Complete Guide to MERN Stack Development কোর্সটিতে।</Typography>
        </Stack>

      </Container>
    </Box >

  )
}

export default CourseDetails