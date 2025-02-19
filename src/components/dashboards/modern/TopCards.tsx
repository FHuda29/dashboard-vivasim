import { Box, CardContent, Grid2 as Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../../assets/images/svgs/icon-dd-invoice.svg';

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
    digits: '2',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Agents',
    digits: '2',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'Total Deposits',
    digits: '5.000.000',
    bgcolor: 'success',
  },
  {
    icon: icon5,
    title: 'Total Base Price',
    digits: '5,108,400',
    bgcolor: 'warning',
  },
  {
    icon: icon6,
    title: 'Available Balance',
    digits: '-108,400',
    bgcolor: 'error',
  },
  {
    icon: icon1,
    title: 'Inv Summary',
    digits: '800',
    bgcolor: 'info',
  },
];

const TopCards = () => {
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
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>)
  );
};

export default TopCards;
