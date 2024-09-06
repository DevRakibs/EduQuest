import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { CalendarMonthOutlined } from '@mui/icons-material'

const BlogDetails = () => {
  return (
    <>
      <Stack mb={10} sx={{
        backgroundImage: 'url(/section-top.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Container maxWidth='lg'>
          <Stack direction={{xs:'column',lg:'row'}} py={5} gap={5}>
            <Box sx={{ flex: 1 }}>
              <BreadCrumb style={{ mb: 5 }} />
              <Typography variant='body2' mb={1} sx={{ bgcolor: '#fff', px: 2, py: .5, borderRadius: '4px', width: 'fit-content' }}>Business</Typography>
              <Typography variant='h4' sx={{maxWidth:'500px'}}>প্রোডাক্ট ম্যানেজমেন্ট ইন্টারভিউ ক্র্যাক করার ৫ টি টিপস</Typography>
              <Stack direction='row' gap={.5} alignItems='center'>
                <CalendarMonthOutlined sx={{ color: 'gray' }} fontSize='small' />
                <Typography sx={{ fontSize: '14px', color: 'gray' }}>13 Jun 2024</Typography>
              </Stack>
            </Box>
            <Box sx={{
              width: { xs: '100%', lg: '500px' },
              maxWidth:'500px',
              height: '250px',
              mb: 1.5
            }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src='/blog-details1.jpg' alt="" />
            </Box>
          </Stack>
        </Container>
      </Stack>

      <Container maxWidth='md' sx={{mb:10}}>
        <Stack gap={3}>
          <Typography variant='body'>চারদিকে প্রোডাক্ট ম্যানেজারের ভীরে প্রোডাক্ট ম্যানেজার আসলে কাকে বলে? সহজ ভাষায় বলতে গেলে, একটা প্রোডাক্টের জীবনকালের শুরু থেকে শেষ, অর্থাৎ প্রোডাকশন থেকে কনজিউমার পর্যন্ত আগাগোড়া যার নখদর্পণে থাকে তাকেই বলা হয় প্রোডাক্ট ম্যানেজার।</Typography>
          <Typography variant='body'>কাজের পরিধি শুনে ভয় পেয়ে গেলেন না তো? কাজ যতটুক-ই হোক, এটা জেনে নিন যে, বর্তমানে প্রতিটি কোম্পানি-তেই প্রোডাক্ট ম্যানেজার নিয়োগ দেয়া হয়। তাই ইন্টারভিউ ফেইস করে, আপনিও হতে পারেন প্রোডাক্ট ম্যানেজার। </Typography>
          <Typography variant='body'>চলুন জেনে নেই, প্রোডাক্ট ম্যানেজমেন্ট ইন্টারভিউ ক্র্যাক করার ৫ টি টিপস।</Typography>
          <Typography variant='h5'>প্রোডাক্ট ম্যানেজমেন্ট ইন্টারভিউ ক্র্যাক করার ৫ টি টিপস -</Typography>
          <Typography variant='body' sx={{fontSize:'12px',fontWeight:600,ml:5}}>1. Preparation, Preparation & Preparation</Typography>
          <Typography variant='body'>একটি সাকসেসফুল প্রোডাক্ট ম্যানেজমেন্ট ইন্টারভিউয়ের জন্য প্রিপারেশন নেয়া অপরিহার্য। আপনাকে অবশ্যই কোম্পানি এবং পোস্ট নিয়ে রিসার্চ করতে হবে। তাদের মিশন, গোল, প্রোডাক্ট, কম্পিটিশন এবং পোস্টের রেসপন্সিবিলিটি ও প্রয়োজনীয় স্কিল সম্পর্কে জানা। এছাড়াও, আপনার জেনারেল প্রোডাক্ট ম্যানেজমেন্ট আইডিয়া, যেমন প্রোডাক্ট রোডম্যাপ, প্রোডাক্ট লঞ্চ, প্রোডাক্ট মেট্রিকস, A/B টেস্টিং ইত্যাদি সম্পর্কে নলেজ থাকা উচিত।</Typography>
          <Typography variant='body'>পাশাপাশি, আপনি প্রোডাক্ট ম্যানেজমেন্টে কেন জব করতে চান?, "আপনি কীভাবে একটি নতুন প্রোডাক্ট আইডিয়া বের করবেন? ইত্যাদি জেনারেল ইন্টারভিউ কোশ্চেনের এন্সার প্র্যাকটিস করুন।</Typography>
          <Typography variant='body' sx={{fontSize:'12px',fontWeight:600,ml:5}}>2. Be confident</Typography>
          <Typography variant='body'>আপনার কনফিডেন্স শো করা খুবই গুরুত্বপূর্ণ। ইন্টারভিউ বোর্ডে স্পষ্টভাবে এবং সংক্ষেপে কথা বলুন। আপনার স্কিল ও এক্সপেরিয়েন্স সম্পর্কে কনফিডেন্স দেখাতে হবে। মনে রাখবেন, আপনি কেবল একটি জবের জন্য এপ্লাই করছেন না, বরং কোম্পানিকে বোঝাচ্ছেন যে আপনি তাদের টিমের জন্য ভ্যালুয়েবল রিসোর্স হবেন।</Typography>
          <Typography variant='body' sx={{fontSize:'12px',fontWeight:600,ml:5}}>3. Communication Skills</Typography>
          <Typography variant='body'>ইফেক্টিভ কমিউনিকেশন স্কিল একজন সফল প্রোডাক্ট ম্যানেজারের জন্য অপরিহার্য। আপনার আইডিয়াগুলো স্পষ্টভাবে ও সংক্ষেপে ব্যাখ্যা করতে সক্ষম হোন।  মনে রাখবেন, আপনি কেবল আপনার স্কিল ও নলেজই প্রেজেন্ট করছেন না, বরং আপনার সাথে কাজ করার মতো একজন ব্যক্তি হিসেবে নিজেকে উপস্থাপন করছেন।</Typography>
          <Typography variant='body' sx={{fontSize:'12px',fontWeight:600,ml:5}}>4. Relevant experience</Typography>
          <Typography variant='body'>আপনার আগের এক্সপেরিয়েন্সগুলোর সাথে এই পোস্টের রিলেভেন্ট দেখান। আপনার স্কিল এবং নলেজ কীভাবে কোম্পানিকে হেল্প করতে পারে তা ব্যাখ্যা করুন। স্পেসিফিক এক্সাম্পল ইউজ করে আপনার কথাগুলোকে সাপোর্ট করুন। </Typography>
          <Typography variant='body' sx={{fontSize:'12px',fontWeight:600,ml:5}}>5. Addressing </Typography>
          <Typography variant='body'>ইন্টারভিউয়ের পর ধন্যবাদ জ্ঞাপন করার জন্য একটি ইমেইল পাঠান। আপনার ইন্টারেস্ট নিয়ে আবারো এনশিউর করুন এবং কোন প্রশ্ন থাকলে তা জিজ্ঞাসা করুন। 

এই টিপসগুলো ফলো করলে আপনার প্রোডাক্ট ম্যানেজমেন্ট ইন্টারভিউতে সফল হওয়ার সম্ভাবনা অনেক বেশি হবে।</Typography>
        </Stack>
      </Container>

    </>
  )
}

export default BlogDetails