import { Close, Menu } from '@mui/icons-material';
import { Box, Button, ClickAwayListener, Container, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useIsMobile from '../../hook/useIsMobile';

const navlinks = ['Home', 'Course', 'Resource', 'Blog', 'Contact']

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const token = ''; // Example token, replace with actual logic

  const handleNavClose = () => setSideBarOpen(false);

  // Derived state for active nav items
  const isActive = useMemo(
    () => (path) => pathname.startsWith(path),
    [pathname]
  );

  return (
    <Box sx={{ borderBottom: '1px solid lightgray' }}>
      <Container maxWidth='xl'>
        <ClickAwayListener onClickAway={handleNavClose}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' py={2}>
            <Box sx={{ width: { xs: '150px', md: '200px' } }}>
              <Link className='link' to='/home'>
                <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>EasyLearn</Typography>
                {/* <img style={{ width: '100%' }} src='/logo.svg' alt="Logo" /> */}
              </Link>
            </Box>
            <Box>
              <IconButton
                onClick={() => setSideBarOpen(!sideBarOpen)}
                sx={{
                  bgcolor: 'secondary.main',
                  width: '40px',
                  height: '40px',
                  display: isMobile ? 'block' : 'none',
                  position: 'fixed',
                  top: 10,
                  right: 10,
                  color: '#fff',
                  zIndex: 9999999,
                  ":hover": { bgcolor: 'primary.dark' }
                }}
              >
                <Menu />
              </IconButton>
              <Box
                sx={{
                  bgcolor: isMobile ? 'secondary.main' : '',
                  position: isMobile ? 'fixed' : 'relative',
                  transform: isMobile ? (sideBarOpen ? 'translateX(0%)' : 'translateX(-100%)') : 'none',
                  top: 0,
                  width: isMobile ? '250px' : 'auto',
                  height: isMobile ? '100vh' : 'auto',
                  left: 0,
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: { xs: 3, md: 6 },
                  p: isMobile ? 3 : 0,
                  zIndex: 999,
                  transition: '.5s ease',
                  boxShadow: { xs: 3, md: 'none' }
                }}
              >
                {navlinks.map((label) => (
                  <NavLink
                    key={label}
                    to={`/${label.toLowerCase()}`}
                    className='link'
                    style={({ isActive }) => ({
                      borderBottom: isActive ? `3px solid ${isMobile ? '#fff' : '#392C7D'}` : '',
                      color: isMobile ? '#fff' : 'black'
                    })}
                    onClick={handleNavClose}
                  >
                    {label}
                  </NavLink>
                ))}

                {token ? (
                  <NavLink to='/dashboard' style={{ width: '100%' }}>
                    <Button sx={{ width: isMobile ? '100%' : 'fit-content' }} variant='contained'>
                      Dashboard
                    </Button>
                  </NavLink>
                ) : (
                  <Stack direction='row' gap={2} alignItems='center'>
                    <NavLink to='/signin'>
                      <Button sx={{ color: isMobile ? '#fff' : '' }}>Signin</Button>
                    </NavLink>
                    <NavLink to='/signup'>
                      <Button sx={{ borderRadius: '50px', color: isMobile ? '#fff' : '' }} variant='outlined'>
                        Signup
                      </Button>
                    </NavLink>
                  </Stack>
                )}

                <IconButton
                  onClick={handleNavClose}
                  sx={{ position: 'absolute', top: 0, right: 0, display: isMobile ? 'block' : 'none' }}
                >
                  <Close sx={{ color: '#fff' }} />
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </ClickAwayListener>
      </Container>
    </Box>
  );
};

export default Navbar;
