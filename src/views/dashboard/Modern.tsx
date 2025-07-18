// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from "react";
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import TopCards from 'src/components/dashboards/modern/TopCards';
import WelcomeHome from 'src/components/dashboards/modern/Welcome';
import RevenueUpdates from 'src/components/dashboards/modern/RevenueUpdates';
import YearlyBreakup from 'src/components/dashboards/modern/YearlyBreakup';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import EmployeeSalary from 'src/components/dashboards/modern/EmployeeSalary';
import Customers from 'src/components/dashboards/modern/Customers';
import Projects from 'src/components/dashboards/modern/Projects';
import Social from 'src/components/dashboards/modern/Social';
import SellingProducts from 'src/components/dashboards/modern/SellingProducts';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import TopPerformers from 'src/components/dashboards/modern/TopPerformers';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';

//api
import ApiConfig  from "src/constants/apiConstants";
import { ro } from "date-fns/locale";

const Modern = () => {
  const router = useNavigate();
  const [userName,setUserName] = React.useState('');
  const [userLevel, setUserLevel] = React.useState('');
  const [userSession, setUserSession] = React.useState('');
  const [isPartner,setIsPartner] = React.useState(false);
  const [isAgent,setIsAgent] = React.useState(false);
  const [titleDashboard, setTitleDashboard] = React.useState('');

  useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
              const decoded:any = jwtDecode(token);
              console.log("decoded: ",decoded);

              console.log('user_name:', decoded.user_name);
              console.log('session_name:', decoded.session_name);
              console.log('session_level:', decoded.session_level);
              console.log('last_login_time:', decoded.last_login_time);
              console.log('blocked:', decoded.blocked);
              
              setUserName(decoded.user_name);
              setUserLevel(decoded.session_level);
              setUserSession(decoded.session_name);

              if(decoded.session_level.toLowerCase() === 'partner' || decoded.session_level.toLowerCase() === 'partner-admin'){
                setTitleDashboard('Partner');
                const user_login = decoded.session_name.split('-')[0];
                setIsPartner(true);
                setIsAgent(false);
              }else if(decoded.session_level.toLowerCase() === 'agent-manager'){
                setTitleDashboard('Agent Manager');
                setIsPartner(false);
                setIsAgent(true);
              }else if(decoded.session_level.toLowerCase() === 'agent-admin'){
                setTitleDashboard('Agent Admin');
                setIsPartner(false);
                setIsAgent(true);
              }else{
                setTitleDashboard('Head Office');
                setIsPartner(false);
                setIsAgent(false);
              }
            } catch (error) {
              console.error("Invalid token:", error);
            }
        }else{
            router('/auth/login');
        }    
  }, []);

  return (
    (<PageContainer title="Main Dashboard" description="this is Main Dashboard page">
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid
              size={{
                xs: 12
          }}>
            <Typography variant="subtitle2" fontSize={20} fontWeight="600">Welcome to dashboard -  {titleDashboard}</Typography>
          </Grid>
          {isAgent ? (
            <Grid
              size={{
                xs: 12,
                lg: 12
              }}>
              <WelcomeHome />
            </Grid>
          ):(
            isPartner ? (
              <>
              <Grid
                size={{
                  xs: 12,
                  lg: 12
                }}>
                <WelcomeHome />
              </Grid>
              </>
            ):(
              <>
              <Grid
                size={{
                  xs: 12,
                  lg: 12
                }}>
                <TopCards />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  lg: 12
                }}>
                <WelcomeHome />
              </Grid>
              </> 
            )
          )
          }
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 12
            }}>
            <TopCards />
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <RevenueUpdates />
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <Grid container spacing={3}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 12
                }}>
                <YearlyBreakup />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 12
                }}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <EmployeeSalary />
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <Grid container spacing={3}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}>
                <Customers />
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}>
                <Projects />
              </Grid>
              <Grid size={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <SellingProducts />
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <WeeklyStats />
          </Grid>
          */}
          {/* column */}
          {/*
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <TopPerformers />
          </Grid>
          */}
        </Grid>
        {/* column */}
        <Welcome />
      </Box>
    </PageContainer>)
  );
};

export default Modern;


