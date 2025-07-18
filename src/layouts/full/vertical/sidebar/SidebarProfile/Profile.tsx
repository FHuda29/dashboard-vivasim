import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from 'src/store/Store';
import img1 from 'src/assets/images/profile/user-1.jpg';
import { IconPower } from '@tabler/icons-react';
import { AppState } from 'src/store/Store';
import { Link } from 'react-router';
import { jwtDecode } from 'jwt-decode';

export const Profile = () => {
    const [userName,setUserName] = React.useState('');
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    
        useEffect(() => {
                /*
                const data_success_login = localStorage.getItem('data_success_login');
                if (data_success_login) {
                    const parsedData = JSON.parse(data_success_login);
                    console.log('user_name:', parsedData.user_name);
                    console.log('session_name:', parsedData.session_name);
                    console.log('session_level:', parsedData.session_level);
                    console.log('last_login_time:', parsedData.last_login_time);
                    console.log('blocked:', parsedData.blocked);
                    
                    setUserName(parsedData.user_name);
                    setUserLevel(parsedData.session_level);
                    setUserSession(parsedData.session_name);
        
                    if(parsedData.session_level.toLowerCase() === 'partner'){
                        const user_login = parsedData.session_name.split('-')[0];
                    }else if(parsedData.session_level.toLowerCase() === 'agent-manager'){
                        
                    }else if(parsedData.session_level.toLowerCase() === 'agent-admin'){
                        
                    }else{
                        
                    }
                }else{
                    //router('/auth/login');
                }
              */
              const token = localStorage.getItem('token');
              if (token) {
                const parsedToken:any = jwtDecode(token);
                console.log('user_name:', parsedToken.user_name);
                console.log('session_name:', parsedToken.session_name);
                console.log('session_level:', parsedToken.session_level);
                console.log('last_login_time:', parsedToken.last_login_time);
                console.log('blocked:', parsedToken.blocked);
                
                setUserName(parsedToken.user_name);
                setUserLevel(parsedToken.session_level);
                setUserSession(parsedToken.session_name);
    
                if(parsedToken.session_level.toLowerCase() === 'partner'){
                    const user_login = parsedToken.session_name.split('-')[0];
                }else if(parsedToken.session_level.toLowerCase() === 'agent-manager'){
                    
                }else if(parsedToken.session_level.toLowerCase() === 'agent-admin'){
                    
                }else{
                    
                }
              }     
    }, []);

  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';

  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Remy Sharp" src={img1} />

          <Box>
            <Typography variant="h6">{userName}</Typography>
            <Typography variant="caption">{userLevel}</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="primary"
                component={Link}
                to="auth/logout"
                aria-label="logout"
                size="small"
              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
