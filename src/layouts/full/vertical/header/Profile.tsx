// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  Stack
} from '@mui/material';
import * as dropdownData from './data';

import { IconMail } from '@tabler/icons-react';

import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import unlimitedImg from 'src/assets/images/backgrounds/unlimited-bg.png';
import { jwtDecode } from 'jwt-decode';


const Profile = () => {

      const [userName,setUserName] = React.useState('');
      const [userLevel, setUserLevel] = React.useState('');
      const [userSession, setUserSession] = React.useState('');
  
      useEffect(() => {
             const token = localStorage.getItem('token');
             if (token) {
                 const decodedToken:any = jwtDecode(token);
 
                 console.log('user_name:', decodedToken.user_name);
                 console.log('session_name:', decodedToken.session_name);
                 console.log('session_level:', decodedToken.session_level);
                 console.log('last_login_time:', decodedToken.last_login);
                 console.log('blocked:', decodedToken.blocked);
                 setUserName(decodedToken.user_name);
                 setUserLevel(decodedToken.session_level);
                 setUserSession(decodedToken.session_name);

                 /*
                 if(decodedToken.session_level.toLowerCase() === 'partner'){
                     const user_login = decodedToken.session_name.split('-')[0];
                 }else if(decodedToken.session_level.toLowerCase() === 'agent-manager'){
                     
                 }else if(decodedToken.session_level.toLowerCase() === 'agent-admin'){
                     
                 }else{
                     
                 }*/
             }else{
                 //router('/auth/login');
             }
  }, []);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={ProfileImg}
          alt={ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '360px',
            p: 4,
          },
        }}
      >
        <Typography variant="h5">User Profile</Typography>
        <Stack direction="row" py={3} spacing={2} alignItems="center">
          <Avatar src={ProfileImg} alt={ProfileImg} sx={{ width: 95, height: 95 }} />
          <Box>
            <Typography variant="subtitle2" color="textPrimary" fontWeight={600}>
              {userName}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {userLevel.toLowerCase() === 'partner' ? (
                  <>Partner</>
              ):(
                userLevel.toLowerCase() === 'agent-manager' || userLevel.toLowerCase() === 'agent-admin' ? (
                  <>Agent</>
                ):(
                  <>HO Admin</>
                )
              )}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <IconMail width={15} height={15} />
              {userLevel}
            </Typography>
          </Box>
        </Stack>
        <Divider />
        {dropdownData.profile.map((profile) => (
          <Box key={profile.title}>
            <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
              <Link to={profile.href}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="45px"
                    height="45px"
                    bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: '240px',
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{
                        width: '240px',
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Box>
          </Box>
        ))}
        <Box mt={2}>
          <Box bgcolor="primary.light" p={3} mb={3} overflow="hidden" position="relative">
            <Box display="flex" justifyContent="space-between">
              {/*
              <Box>
                <Typography variant="h5" mb={2}>
                  Unlimited <br />
                  Access
                </Typography>
                <Button variant="contained" color="primary">
                  Upgrade
                </Button>
              </Box>
              */}
              <img src={unlimitedImg} alt="unlimited" className="signup-bg"></img>
            </Box>
          </Box>
          <Button to="/auth/logout" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
