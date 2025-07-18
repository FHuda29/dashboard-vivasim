import * as React from 'react';
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
//import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { numberFormat, invSummaryAgent, formatDate } from "src/utils/Utils";

import { Box, CardContent, Grid2 as Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../../assets/images/svgs/icon-dd-invoice.svg';
import { jwtDecode } from 'jwt-decode';

//const apiUrl = ApiConfig.apiUrl;
import axios from 'src/api/axios';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

const topcards: cardType[] = [
  {
    icon: icon2,
    title: 'Partners',
    digits: '0',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Agents',
    digits: '0',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'Total Deposits',
    digits: '0',
    bgcolor: 'success',
  },
  {
    icon: icon5,
    title: 'Total Base Price',
    digits: '0',
    bgcolor: 'warning',
  },
  {
    icon: icon6,
    title: 'Available Balance',
    digits: '0',
    bgcolor: 'error',
  },
  {
    icon: icon1,
    title: 'Inv Summary',
    digits: '0',
    bgcolor: 'info',
  },
];

const TopCards = () => {
  const router = useNavigate();
  const [userName,setUserName] = React.useState('');
  const [userLevel, setUserLevel] = React.useState('');
  const [userSession, setUserSession] = React.useState('');

  const [totalPartner, setTotalPartner] = React.useState(0);
  const [totalAgent, setTotalAgent] = React.useState(0);

  //const [totalDeposit, setTotalDeposit] = React.useState(0);
  //const [totalBasePrice, setTotalBasePrice] = React.useState(0);
  //const [totalProfit, setTotalProfit] = React.useState(0);

  useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded:any = jwtDecode(token);
                console.log("decoded: ",decoded);

                setUserName(decoded.user_name);
                setUserLevel(decoded.session_level);
                setUserSession(decoded.session_name);
                if(decoded.session_level.toLowerCase() === 'partner' || decoded.session_level.toLowerCase() === 'partner-admin'){
                    const user_login = decoded.session_name.split('-')[0];
                    fetchTotalAgent(decoded.session_name);
                }else if(decoded.session_level.toLowerCase() === 'agent-manager'){
                    //fetchInventorySummaryAgent(parsedData.session_name);
                }else if(decoded.session_level.toLowerCase() === 'agent-admin'){
                    //fetchInventorySummaryAgent(parsedData.session_name);
                }else{
                    //fetchInventorySummaryAll();
                    fetchTotalPartner();
                    //fetchTotalAgent("1");
                    //fetchTotalDeposit();
                    //fetchTotalInventory();
                }    
            }else{
                router('/auth/login');
            }       
  }, []);

  const fetchTotalPartner = async () => {
    let end_point = "dashboard/total/partner";
      axios
        .get(end_point)
        .then((response) => {
          const data = response.data[0];
          setTotalPartner(data.total_partner);

          topcards[0].digits = data.total_partner;
          fetchTotalAgent("1");

      }).catch((error) => {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
        } else {
          console.log(error);
        }
      });
  }

  const fetchTotalAgent = async (user_login:string) => {
    let end_point = "dashboard/total/agent/"+user_login;
      axios
        .get(end_point)
        .then((response) => {
          const data = response.data[0];
          setTotalAgent(data.total_agent);
          topcards[1].digits = data.total_agent;
          fetchTotalDeposit();
      }).catch((error) => {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
        } else {
          console.log(error);
        }
      });
  }

  const fetchTotalDeposit = async () => {
    let end_point = "dashboard/total/deposit";
      axios
        .get(end_point)
        .then((response) => {
          const data = response.data[0];
          topcards[2].digits = data.total_deposit;
          //setTotalDeposit(data.total_deposit);
          fetchTotalBasePrice();
      }).catch((error) => {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
        } else {
          console.log(error);
        }
      });
  }

  const fetchTotalBasePrice = async () => {
    let end_point = "dashboard/total/baseprice";
      axios
        .get(end_point)
        .then((response) => {
          const data = response.data[0];
          topcards[3].digits = data.total;
          //setTotalBasePrice(data.total);
          //const total_profit = totalDeposit - parseInt(data.total)
          //topcards[4].digits = total_profit.toString();
          //setTotalProfit(total_profit);
          fetchTotalSaldoAvailable();
          fetchTotalInventory();
      }).catch((error) => {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
        } else {
          console.log(error);
        }
      });
  }

  const fetchTotalInventory = async () => {
    let end_point = "dashboard/total/inventory";
      axios
        .get(end_point)
        .then((response) => {
          const data = response.data[0];
          topcards[5].digits = data.total_inventory;
      }).catch((error) => {
        if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
        } else {
          console.log(error);
        }
      });
  }

  const fetchTotalSaldoAvailable = async () => {
      const total_available = parseInt(topcards[2].digits) - parseInt(topcards[3].digits);
      topcards[4].digits = total_available.toString();
  }


  return (
    (<Grid container spacing={3}>
      {topcards.map((topcard, i) => (
        <Grid
          key={i}
          size={{
            xs: 12,
            sm: 4,
            lg: 2
          }}>
          <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={topcard.bgcolor + '.main'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                {numberFormat(topcard.digits)}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>)
  );
};

export default TopCards;
