import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import useIsMobile from '../../hook/useIsMobile'
import { CallMade, ExpandMore } from '@mui/icons-material'
import { SlideAnimation } from '../../common/Animation'

const data = [
  {
    question: 'আমি একদম নতুন, আমি কিভাবে কি করতে পারি ?',
    answer: 'প্রথমে আপনাকে স্বাগতম, ফ্রিল্যান্সিং বা ওয়েব সেক্টরে কিছু করতে গেলে প্রথমে একটি কম্পিউটার এবং ইন্টারনেট সংযোগ থাকা জরুরী। আপনার সব কিছু রেডি থাকলে আপনি প্রথমে আমাদের YouTube থেকে Day0 এর ভিডিও গুলো দেখতে পারেন চাইলে YouTube থেকেও শিখতে পারেন সেই সাথে আমাদের Hand Holding Support প্রোগ্রামও চালু আছে যেখানে শুরু থেকে শেষ পর্যন্ত লাইভ ক্লাসের মাধ্যমে ধরে ধরে শিখানো হয়।'
  },
  {
    question: 'আমি শুধু HTML, CSS জানি, সেক্ষেত্রে আমি এখন কি করবো?',
    answer: 'আপনি কি দিয়ে শুরু করবেন এটা ডিপেন্ড করবে আপনার কারেন্ট একটিভিটির উপরে আর আপনার চাহিদার উপরে, আপনার চাহিদা যদি এমন হয় যে খুব দ্রুত আরনিং করতে হবে তাহলে বলবো যে ওয়ার্ডপ্রেসই বেস্ট আপনার জন্য, আর আপনি যদি CSE ব্যাকগ্রাউন্ডের হন বা আপনি যদি প্রোগ্রামিং পেসনেটেড হন এবং আপনার হাতে যদি পর্যাপ্ত সময় থাকে তাহলে বলবো যে JavaScript বা Laravel দিয়ে শুরু করাই বেস্ট হবে।'
  },
  {
    question: 'মার্কেট প্লেস সাপোর্ট কি এবং কিভাবে পাবো ?',
    answer: 'আপনি যদি Hand Holding Support এর স্টুডেন্ট হন তাহলে আপনি লাইফটাইম মার্কেট প্লেস সাপোর্ট পাবেন,মার্কেট প্লেস সাপোর্টে আপনার ক্লাইন্টের মেসেজ রিভিউ, কোন কাজ নিবেন বা কোন কাজ নিবেন না, একটা কাজ পেয়েছেন সেটা কি ভাবে করবেন, ক্লাইন্টের একটা রিকোয়ারমেন্ট বুঝতেছেন না, কোন প্লাগিং দিয়ে বা কি ভাবে করবেন অভারঅল সাপোর্ট গুলো দেয়া হয় শুরু থেকে শেষ পর্যন্ত।তবে যেটা করা হয় না, আপনি একটা কাজ পেয়েছেন সেটা আপনাকেই করতে হবে, আমাদের সাপোর্ট টিম সাপোর্ট দিবে কিন্তু সরাসরি করে দিবেনা।'
  },
  {
    question: 'কোর্স শেষ হতে কত দিন সময় লাগবে ?',
    answer: 'আপনি যদি আমাদের এইচটিএমএল টু ওয়ার্ডপ্রেস অ্যাডভান্স কোর্সে ভর্তি হন তাহলে কোর্স শেষ হতে সময় লাগবে প্রয় ৭-৮ মাস।আর যদি ওয়ার্ডপ্রেস টু অ্যাডভান্স কোর্সে ভর্তি হন তাহলে কোর্স শেষ হতে সময় লাগবে প্রয় ৫-৬ মাস।'
  },
]

const FAQ = () => {
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
        backgroundImage: `url(/shape-5.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1
      }
    }}>
      <Container sx={{ py: { xs: 5, md: 10 } }} maxWidth='lg'>
        <SlideAnimation direction='up'>
          <Typography sx={{ fontSize: { xs: '30px', md: '40px' }, fontWeight: 600, mb: 2, textAlign: 'center' }}>Some Most Asked Question
          </Typography>
        </SlideAnimation>
        <Grid container spacing={4} mt={2}>
          {
            data.map((item, id) => (
              <Grid item key={id} xs={12} md={6} >
                  <SlideAnimation  delay={100 * id} direction='up'>
                  <Accordion sx={{ px: 2, border: '1px solid lightgray', boxShadow: 'none' }} >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{ fontWeight: 'bold', color: 'primary.main', p: 0 }}
                    >
                      {item.question}
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>{item.answer}</AccordionDetails>
                  </Accordion>
              </SlideAnimation>
                </Grid>
            ))
          }
        </Grid>

      </Container>
    </Box>
  )
}

export default FAQ