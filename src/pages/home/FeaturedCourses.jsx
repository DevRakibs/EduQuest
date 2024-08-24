import { AccessTime, ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowOutwardOutlined, Book, ImportContacts } from '@mui/icons-material'
import { Box, Button, Container, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useIsMobile from '../../hook/useIsMobile';
import { FadeAnimation, SlideAnimation } from '../../common/Animation';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (

    <Stack direction='row' sx={{
      display: { xs: 'none', md: 'block' },
      ml: 2,
      position: 'absolute', top: 0, right: 0
    }}>
      <IconButton disable={currentSlide === 0 ? true : false} onClick={() => previous()} style={{ height: '40px', mr: 2, borderRadius: '50px', width: '90px' }}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={() => next()} style={{ height: '40px', borderRadius: '50px', width: '90px' }}>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1278 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1074, min: 700 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    partialVisibilityGutter: 10,
    items: 1
  }
};

const CourseCard = () => {
  return (
    <Stack sx={{
      width: { xs: '100%', md: '350px' },
      bgcolor: '#fff',
      p: 2, borderRadius: '8px',
      position: 'relative',
      boxShadow: 3
    }}>
      <Box sx={{ width: '100%', height: { xs: '300px', md: '350px' } }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src="/course-01.jpg" alt="" />
      </Box>
      <Typography sx={{ fontSize: '20px', lineHeight: '25px', fontWeight: '600', my: { xs: 1, md: 2 } }}>Wordpress Advance to Marketplace</Typography>
      <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={1} mb={2}>
        {
          [
            '25 Live Class',
            '15+ Website',
            'Own Softwere',
            'Course Certificate',
            'Re-Admission',
            'Support Instructor'
          ].map(item => (
            <Typography sx={{
              border: '1px solid lightgray',
              px: 1.5, borderRadius: '8px',
              whiteSpace: 'nowrap'
            }} variant='body2' key={item}>{item}</Typography>
          ))
        }
      </Stack>
      <Button variant='contained' sx={{ borderRadius: '50px' }}>Register Now</Button>
    </Stack>
  )
}

const FeaturedCourses = (props) => {
  const isMobile = useIsMobile()
  return (
    <Box sx={{
      position: 'relative',
      // height: { xs: '1044px', md: '800px' },
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(/course-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1
      }
    }}>
      <Container sx={{ position: 'relative', py: { xs: 5, md: 10 } }} maxWidth='xl'>
        <Typography sx={{ fontSize: { xs: '30px', md: '40px' }, fontWeight: 600, mb: 2, textAlign: 'center' }}>
          <SlideAnimation direction='up'>
            Featured Courses
          </SlideAnimation>
        </Typography>
        <Stack alignItems='center'>
          <SlideAnimation direction='up' delay={100}>
            <Typography sx={{ maxWidth: '800px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</Typography>
          </SlideAnimation>
        </Stack>
        <Box sx={{ position: 'relative' }} px={1} pt={4}>
          <Carousel
            swipeable
            // draggable={true}
            showDots
            arrows={false}
            infinite
            responsive={responsive}
            centerMode={!isMobile}
            renderButtonGroupOutside
            autoPlay
            customButtonGroup={<ButtonGroup />}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl
            renderDotsOutside
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
          >
            {
              [1, 2, 3, 4, 5, 6].map(item => (
                <Box key={item} mx={1} pb={4} pt={1.5}>
                  <CourseCard />
                </Box>
              ))
            }
          </Carousel>
        </Box>
        <Stack direction='row' justifyContent='center' mt={4}>
          <SlideAnimation direction='up'>
            <Button sx={{ borderRadius: '50px' }} endIcon={<ArrowOutwardOutlined />} variant='outlined'>All Course</Button>
          </SlideAnimation>
        </Stack>
      </Container>
    </Box>
  )
}

export default FeaturedCourses