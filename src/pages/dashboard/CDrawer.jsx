/* eslint-disable react/prop-types */
import { Assignment, FiberManualRecord, Home, KeyboardArrowRight, LibraryAddOutlined, PersonOutlineOutlined, SchoolOutlined, Settings, SpaceDashboardOutlined } from '@mui/icons-material';
import { Avatar, Badge, Box, IconButton, Stack, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

const LinkBtn = ({ style, hidden, end, text, icon, link, onClick, expandIcon, expand, subItem, notification }) => {
  return (
    <NavLink style={{ display: hidden ? 'none' : 'flex', }} end={end} onClick={onClick} className='link' to={link}>
      {
        ({ isActive }) => (
          <Box sx={{
            width: '200px',
            whiteSpace: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
            borderRadius: '8px',
            overflow: 'hidden',
            bgcolor: !expandIcon && isActive ? 'primary.main' : '',
            ...style,
            position: 'relative',
            cursor: 'pointer',
            ":hover": {
              color: isActive ? '' : '#fff'
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: !expandIcon && isActive ? '#fff' : 'text.main' }}>
              {subItem ?
                <FiberManualRecord sx={{ fontSize: '13px' }} /> :
                icon
              }
              <Typography sx={{
                fontSize: subItem ? '12px' : '15px',
                fontWeight: 400, ml: 1
              }}>{text}</Typography>
            </Box>
            {notification && <Badge sx={{ mr: .5 }} badgeContent={notification} color="error" />}
            {expandIcon && <KeyboardArrowRight sx={{
              transition: '.3s ease',
              transform: expand ? 'rotate(90deg)' : 'rotate(0deg)'
            }} />}
          </Box>
        )
      }
    </NavLink>
  )
};


const CDrawer = ({ drawerClose }) => {
  const { user } = useUserContext()

  const links = [
    {
      text: 'Dashboard',
      link: '',
      icon: <SpaceDashboardOutlined fontSize='small' />,
      end: true
    },
    {
      text: 'My Course',
      link: 'my-course',
      icon: <LibraryAddOutlined fontSize='small' />,
      hidden: user.me.role !== 'instructor'
    },
    {
      text: 'My Profile',
      link: 'profile',
      icon: <PersonOutlineOutlined fontSize='small' />
    },
    {
      text: 'All Course',
      link: 'all-course',
      icon: < Assignment fontSize='small' />
    },
    {
      text: 'Enrolled Course',
      link: 'enrolled',
      icon: <SchoolOutlined fontSize='small' />,
      hidden: user.me.role !== 'student'
    },
    {
      text: 'Setting',
      link: 'settings',
      icon: <Settings fontSize='small' />
    },
  ]


  return (
    <Stack>
      <Stack alignItems='center'>
        <Box sx={{
          width: '100%',
          bgcolor: 'primary.main',
          height: '100px'
        }} />
        <Avatar sx={{
          width: '100px',
          height: '100px',
          marginTop: -6.5
        }} />
        <Typography sx={{ fontSize: '25px', fontWeight: 600, mt: 1, color: 'text.main' }}>
          {user.me.role === 'student' ? 'Rolands Richard' : 'Engene Andre'}
        </Typography>
        <Typography sx={{ color: 'text.main' }}>{user.me.role}</Typography>
        <Link to='/'>
          <IconButton sx={{
            position: 'absolute',
            left: 10,
            top: 10
          }}>
            <Home sx={{ color: '#fff' }} />
          </IconButton>
        </Link>
      </Stack>

      <Box sx={{ mx: '20px', mt: 5 }}>
        <Stack gap={.5}>
          {
            links.map((item, id) => {
              return (
                <LinkBtn
                  key={id}
                  notification={''}
                  onClick={drawerClose}
                  link={item.link}
                  icon={item.icon}
                  text={item.text}
                  end={item.end}
                  hidden={item.hidden}
                />
              )
            })
          }
        </Stack>
        {/* <LinkBtn
          notification={12}
          onClick={drawerClose}
          link='/dashboard/notifications'
          icon={<NotificationsNone fontSize='small' />}
          text='Notifications'
        />
        <LinkBtn onClick={() => { }}
          expandIcon
          // expand={expandFoodMenu}
          icon={<LunchDining fontSize='small' />}
          text='Food Menu'
        /> */}
        {/* <Collapse in={expandFoodMenu} timeout="auto" unmountOnExit>
          <Box sx={{ ml: 3 }}>
            <LinkBtn
              onClick={handleDrawerClose}
              link='/dashboard/food-item'
              text='Food Item'
              subItem
            />
            <LinkBtn
              onClick={handleDrawerClose}
              link='/dashboard/food-categories'
              text='Food Categories'
              subItem
            />
          </Box>
        </Collapse> */}
      </Box>

    </Stack>
  )
}

export default CDrawer