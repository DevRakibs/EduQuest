import { Close, Menu } from '@mui/icons-material'
import { Box, Button, ClickAwayListener, Container, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import useIsMobile from '../../hook/useIsMobile'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const { pathname } = useLocation()

  const isMobile = useIsMobile()

  const token = ''

  return (
    <Box sx={{ borderBottom: '1px solid lightgray' }}>
      <Container maxWidth='xl'>
        <ClickAwayListener onClickAway={() => setSideBarOpen(false)}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' py={2}>
            {/* <Box sx={{ display: { xs: 'none', lg: 'block' } }}></Box> */}
            <Box sx={{
              width: { xs: '150px', md: '200px' }
            }}>
              <Link to='/'>
                <img style={{ width: '100%' }} src='/logo.svg' alt="" />
              </Link>
            </Box>
            <Box>
              <IconButton onClick={() => setSideBarOpen(!sideBarOpen)} sx={{
                bgcolor: 'secondary.main',
                width: '40px',
                height: '40px',
                display: isMobile ? 'block' : 'none',
                position: 'fixed',
                top: 10,
                right: 10,
                color: '#fff',
                zIndex: 9999999,
                ":hover": {
                  bgcolor: 'primary.dark',
                }
              }}>
                <Menu />
              </IconButton>
              <Box sx={{
                bgcolor: isMobile ? 'secondary.main' : '',
                position: isMobile ? 'fixed' : 'relative',
                transform: isMobile ? (sideBarOpen ? 'translateX(0%)' : 'translateX(-100%)') : 'none',
                // backdropFilter: isMobile ? 'blur(10px)' : 'none',
                // backgroundColor: isMobile ? 'rgba(255, 255, 255, 1)' : 'none',
                top: 0,
                width: isMobile ? '250px' : 'none',
                height: isMobile ? '100vh' : 'none',
                left: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'column' : 'row',
                gap: 6,
                p: isMobile ? 3 : 0,
                zIndex: 999,
                transition: '.5s ease',
                boxShadow: { xs: 3, md: 'none' }
              }}>
                <Link
                  to='/'
                  className='link'
                  style={{
                    borderBottom: pathname === '/' ? '3px solid #392C7D' : '',
                    color: isMobile ? '#fff' : 'black'
                  }}
                  onClick={() => setSideBarOpen(false)}
                >Home
                </Link>
                <Typography sx={{ color: isMobile ? '#fff' : 'black' }} onClick={() => setSideBarOpen(false)} >Instructor</Typography>
                <Link
                  to='/course'
                  className='link'
                  style={{
                    borderBottom: pathname === '/course' ? '3px solid #392C7D' : '',
                    color: isMobile ? '#fff' : 'black'
                  }}
                  onClick={() => setSideBarOpen(false)}
                >Course
                </Link>
                <Link
                  to='/resourse'
                  className='link'
                  style={{
                    borderBottom: pathname === '/resourse' ? '3px solid #392C7D' : '',
                    color: isMobile ? '#fff' : 'black'
                  }}
                  onClick={() => setSideBarOpen(false)}
                >Resource
                </Link>
                <Typography sx={{ color: isMobile ? '#fff' : 'black' }} onClick={() => setSideBarOpen(false)} >Blog</Typography>
                {
                  token ?
                    <Link style={{ width: '100%' }} to='/dashboard'>
                      <Button style={{ width: isMobile ? '100%' : 'fit-content' }} variant='contained'>
                        Dashboard
                      </Button>
                    </Link> :
                    <Stack direction='row' gap={2} alignItems='center'>
                      <Link to=''>
                        <Button sx={{ color: isMobile ? '#fff' : '' }}>
                          Signin
                        </Button>
                      </Link>
                      <Link to=''>
                        <Button sx={{ borderRadius: '50px', color: isMobile ? '#fff' : '' }} variant='outlined'>
                          Signup
                        </Button>
                      </Link>
                    </Stack>
                }
                <IconButton onClick={() => setSideBarOpen(false)} sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  display: isMobile ? 'block' : 'none'
                }}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </ClickAwayListener>
      </Container>
    </Box >
  )
}

export default Navbar