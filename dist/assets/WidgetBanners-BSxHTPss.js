import{j as r,u as l}from"./index-D0CpDmcp.js";import{B as m}from"./Breadcrumb-BVcp9-n_.js";import{P as d}from"./PageContainer-GyGJwSoy.js";import{W as x}from"./WelcomeCard-tV9nFCui.js";import{i as c}from"./login-bg-CU7ZWu2D.js";import{P as a}from"./ParentCard-Dds6eSz-.js";import{C as i}from"./CodeDialog-CpWyUB1H.js";import{C as h}from"./Card-CBAn0QXF.js";import{C as s}from"./CardContent-B3dzlDvA.js";import{G as t}from"./Grid2-B3gzDQ3y.js";import{B as o}from"./Box-YfWKO8y5.js";import{T as e}from"./Typography-CxjCbjeZ.js";import{B as n}from"./Button-CgUWpLWI.js";import{s as g}from"./gold-7jBJE6dI.js";import{B as y}from"./Badge-DRo0eH7K.js";import{A as u}from"./Avatar-kYwKbBBr.js";import{S as j}from"./Stack-Br4H6Iex.js";import{M as C}from"./maintenance-C1kely5C.js";import{s as B}from"./empty-shopping-cart-Btd8RuOj.js";import"./Paper-DYTAYSZ1.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./IconArrowUpRight-D0lQVXOn.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./usePreviousProps-DKMpbn06.js";import"./createStack-D1qoiK_y.js";const f=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:`
import { Card, CardContent, Typography, Button, Box, Grid2 as Grid } from '@mui/material';

const Banner1 = () => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        py: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <CardContent sx={{ p: '30px' }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid
              display="flex"
              alignItems="center"
              size={{
                sm: 6
              }}>
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              <Typography variant="h5">Track your every Transaction Easily</Typography>
              <Typography variant="subtitle1" color="textSecondary" my={2}>
                Track and record your every income and expence easily to control your balance
              </Typography>
              <Button variant="contained" color="secondary">
                Download
              </Button>
            </Box>
          </Grid>
          <Grid
              size={{
                sm: 4
              }}>
            <Box mb="-90px">
              <img src={"/images/backgrounds/track-bg.png"} alt={"trackBg"} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Banner1;
`})}),v=()=>r.jsx(a,{title:"Transection",codeModel:r.jsx(f,{}),children:r.jsx(h,{elevation:0,sx:{backgroundColor:p=>p.palette.secondary.light,py:0,overflow:"hidden",position:"relative"},children:r.jsx(s,{sx:{p:"30px"},children:r.jsxs(t,{container:!0,spacing:3,justifyContent:"space-between",children:[r.jsx(t,{display:"flex",alignItems:"center",size:{sm:6},children:r.jsxs(o,{sx:{textAlign:{xs:"center",sm:"left"}},children:[r.jsx(e,{variant:"h5",children:"Track your every Transaction Easily"}),r.jsx(e,{variant:"subtitle1",color:"textSecondary",my:2,children:"Track and record your every income and expence easily to control your balance"}),r.jsx(n,{variant:"contained",color:"secondary",children:"Download"})]})}),r.jsx(t,{size:{sm:4},children:r.jsx(o,{mb:"-90px",children:r.jsx("img",{src:c,alt:c})})})]})})})}),b=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:`
import React from 'react';
import { CardContent, Typography, Button, Card } from '@mui/material';
import { Box } from '@mui/system';

const Banner2 = () => {
  return (
    <Card>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="subtitle1" textAlign="center" mb={2} textTransform="uppercase" color="textSecondary">
          Level Up
        </Typography>
        <Box textAlign="center">
          <img src={"/images/backgrounds/gold.png"} alt="star" width={150} />

          <Typography variant="h5">You reach all Notifications</Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>Congratulations,<br/> Tap to continue next task.</Typography>

          <Button color="primary" variant="contained" size="large">
            Yes, Got it!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Banner2;
`})}),T=()=>r.jsx(a,{title:"Notification",codeModel:r.jsx(b,{}),children:r.jsxs(s,{sx:{p:"30px"},children:[r.jsx(e,{variant:"subtitle1",textAlign:"center",mb:2,textTransform:"uppercase",color:"textSecondary",children:"Level Up"}),r.jsxs(o,{textAlign:"center",children:[r.jsx("img",{src:g,alt:"star",width:150}),r.jsx(e,{variant:"h5",children:"You reach all Notifications"}),r.jsxs(e,{variant:"subtitle1",color:"textSecondary",mt:1,mb:2,children:["Congratulations,",r.jsx("br",{})," Tap to continue next task."]}),r.jsx(n,{color:"primary",variant:"contained",size:"large",children:"Yes, Got it!"})]})]})}),w=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:`
import React from 'react';
import { CardContent, Typography, Button, Avatar, Badge, Card } from '@mui/material';
import { Box, Stack } from '@mui/system';

const Banner3 = () => {
  return (
    <Card>
      <CardContent sx={{ p: '30px' }}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Mutual Friend Revealed
        </Typography>
        <Box textAlign="center">
          <Badge badgeContent={1} color="error" overlap="circular">
            <Avatar src={"/images/profile/user-3.jpg"} alt="userBg" sx={{ width: 140, height: 140 }} />
          </Badge>

          <Typography variant="h5" mt={3}>
            Tommoie Henderson
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
            Accept the request and <br/> type a message
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button color="primary" variant="contained" size="large">
              Accept
            </Button>
            <Button color="error" variant="outlined" size="large">
              Remove
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Banner3;
`})}),z=()=>r.jsx(a,{title:"Friend Card",codeModel:r.jsx(w,{}),children:r.jsxs(s,{sx:{p:"30px"},children:[r.jsx(e,{variant:"h5",textAlign:"center",mb:3,children:"Mutual Friend Revealed"}),r.jsxs(o,{textAlign:"center",children:[r.jsx(y,{badgeContent:1,color:"error",overlap:"circular",children:r.jsx(u,{src:l,alt:"userBg",sx:{width:140,height:140}})}),r.jsx(e,{variant:"h5",mt:3,children:"Tommoie Henderson"}),r.jsxs(e,{variant:"subtitle1",color:"textSecondary",mt:1,mb:2,children:["Accept the request and ",r.jsx("br",{})," type a message"]}),r.jsxs(j,{direction:"row",spacing:2,justifyContent:"center",children:[r.jsx(n,{color:"primary",variant:"contained",size:"large",children:"Accept"}),r.jsx(n,{color:"error",variant:"outlined",size:"large",children:"Remove"})]})]})]})}),A=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:`
import React from 'react';
import { CardContent, Typography, Button, Card } from '@mui/material';
import { Box } from '@mui/system';

const Banner4 = () => {
  return (
    <Card>
      <CardContent sx={{ p: '30px' }}>
        <Box textAlign="center">
          <img src={"/images/backgrounds/maintenance2.svg"} alt="star" width={200} />

          <Typography variant="h5" mt={3}>Oops something went wrong!</Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
            Trying again to bypasses these<br /> temporary error.
          </Typography>

          <Button color="error" variant="contained" size="large">
            Retry
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Banner4;
`})}),k=()=>r.jsx(a,{title:"Error",codeModel:r.jsx(A,{}),children:r.jsx(s,{sx:{p:"30px"},children:r.jsxs(o,{textAlign:"center",children:[r.jsx("img",{src:C,alt:"star",width:200}),r.jsx(e,{variant:"h5",mt:3,children:"Oops something went wrong!"}),r.jsxs(e,{variant:"subtitle1",color:"textSecondary",mt:1,mb:2,children:["Trying again to bypasses these",r.jsx("br",{})," temporary error."]}),r.jsx(n,{color:"error",variant:"contained",size:"large",children:"Retry"})]})})}),S=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:`
import React from 'react';
import { CardContent, Typography, Button, Card } from '@mui/material';
import { Box } from '@mui/system';

const Banner5 = () => {
  return (
    <Card>
      <CardContent sx={{ p: '30px' }}>
        <Box textAlign="center">
          <img src={"/images/products/empty-shopping-cart.svg"} width={200} />

          <Typography variant="h5" mt={3}>Oop, Your cart is empty!</Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
            Get back to shopping and get<br /> rewards from it.
          </Typography>

          <Button color="primary" variant="contained" size="large">
            Go for shopping!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Banner5;

`})}),G=()=>r.jsx(a,{title:"Empty Cart",codeModel:r.jsx(S,{}),children:r.jsx(s,{sx:{p:"30px"},children:r.jsxs(o,{textAlign:"center",children:[r.jsx("img",{src:B,alt:"star",width:200}),r.jsx(e,{variant:"h5",mt:3,children:"Oop, Your cart is empty!"}),r.jsxs(e,{variant:"subtitle1",color:"textSecondary",mt:1,mb:2,children:["Get back to shopping and get",r.jsx("br",{})," rewards from it."]}),r.jsx(n,{color:"primary",variant:"contained",size:"large",children:"Go for shopping!"})]})})}),R=[{to:"/",title:"Home"},{title:"Banner"}],Ar=()=>r.jsxs(d,{title:"Banner",description:"this is Banner page",children:[r.jsx(m,{title:"Banner",items:R}),r.jsxs(t,{container:!0,spacing:3,children:[r.jsx(t,{size:{xs:12,lg:8},children:r.jsxs(t,{container:!0,spacing:3,children:[r.jsx(t,{size:12,children:r.jsx(x,{})}),r.jsx(t,{size:12,children:r.jsx(v,{})}),r.jsx(t,{size:{xs:12,sm:6},children:r.jsx(k,{})}),r.jsx(t,{size:{xs:12,sm:6},children:r.jsx(G,{})})]})}),r.jsx(t,{size:{xs:12,lg:4},children:r.jsxs(t,{container:!0,spacing:3,children:[r.jsx(t,{size:12,children:r.jsx(T,{})}),r.jsx(t,{size:12,children:r.jsx(z,{})})]})})]})]});export{Ar as default};
