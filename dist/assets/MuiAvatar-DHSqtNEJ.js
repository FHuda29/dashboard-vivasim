import{j as r,u as a,al as n,am as l,an as h,ao as x}from"./index-D0CpDmcp.js";import{B as p}from"./Breadcrumb-BVcp9-n_.js";import{P as g}from"./PageContainer-GyGJwSoy.js";import{P as j}from"./ParentCard-Dds6eSz-.js";import{C as e}from"./ChildCard-DYuC6c8b.js";import{C as c}from"./CodeDialog-CpWyUB1H.js";import{G as i}from"./Grid2-B3gzDQ3y.js";import{S as o}from"./Stack-Br4H6Iex.js";import{A as t}from"./Avatar-kYwKbBBr.js";import{I as s}from"./IconMoodSmile-B0okTn4t.js";import{A as d}from"./AvatarGroup-xtzbpSDF.js";import{B as m}from"./Badge-DRo0eH7K.js";import"./Typography-CxjCbjeZ.js";import"./Paper-DYTAYSZ1.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Box-YfWKO8y5.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./createStack-D1qoiK_y.js";import"./usePreviousProps-DKMpbn06.js";const v=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';

<Stack direction="row" spacing={1} justifyContent="center">
    <Avatar sx={{ bgcolor: 'primary.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'primary.main' }} variant="square">
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'primary.main' }} variant="rounded">
        <IconMoodSmile width={24} />
    </Avatar>
</Stack>`})}),A=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';


<Stack direction="row" spacing={1} justifyContent="center">
    <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={User1} />
        <Avatar alt="Travis Howard" src={User2} />
        <Avatar alt="Cindy Baker" src={User3} />
    </AvatarGroup>
</Stack>`})}),u=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, AvatarGroup, Stack} from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';


<Stack direction="row" spacing={1} justifyContent="center">
    <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={User1} />
        <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src={User2} />
        <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src={User3} />
    </AvatarGroup>
</Stack>`})}),S=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';


<Stack direction="row" spacing={1} justifyContent="center">
    <AvatarGroup>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                <Avatar sx={{ width: 22, height: 22 }} alt="Remy Sharp" src={User1} />
            }
        >
            <Avatar alt="Travis Howard" src={User2} />
        </Badge>
    </AvatarGroup>
    <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
    >
        <Avatar alt="Remy Sharp" src={User3} />
    </Badge>
    <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="warning"
    >
        <Avatar alt="Remy Sharp" src={User4} />
    </Badge>
    <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="error"
    >
        <Avatar alt="Remy Sharp" src={User5} />
    </Badge>
</Stack>`})}),y=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';


<Stack direction="row" spacing={1} justifyContent="center">
    <Avatar alt="Remy Sharp" src={User1} sx={{ width: 24, height: 24 }} />
    <Avatar alt="Remy Sharp" src={User2} sx={{ width: 32, height: 32 }} />
    <Avatar alt="Remy Sharp" src={User3} />
    <Avatar alt="Remy Sharp" src={User4} sx={{ width: 50, height: 50 }} />
    <Avatar alt="Remy Sharp" src={User5} sx={{ width: 60, height: 60 }} />
    <Avatar alt="Remy Sharp" src={User6} sx={{ width: 65, height: 65 }} />
</Stack>`})}),w=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import  React from 'react';
import { Avatar, Stack } from '@mui/material';

<Stack direction="row" spacing={1} justifyContent="center">
              <Avatar alt="Remy Sharp" src={User1} />
              <Avatar alt="Travis Howard" src={User2} />
              <Avatar alt="Cindy Baker" src={User3} />
            </Stack>`})}),f=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, Stack } from '@mui/material';

<Stack direction="row" spacing={1} justifyContent="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
              <Avatar sx={{ bgcolor: 'error.main' }}>C</Avatar>
              <Avatar sx={{ bgcolor: 'warning.main' }}>D</Avatar>
              <Avatar sx={{ bgcolor: 'success.main' }}>E</Avatar>
            </Stack>
`})}),b=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons-react';

<Stack direction="row" spacing={1} justifyContent="center">
    <Avatar sx={{ bgcolor: 'primary.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'secondary.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'error.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'warning.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
    <Avatar sx={{ bgcolor: 'success.main' }}>
        <IconMoodSmile width={24} />
    </Avatar>
</Stack>`})}),C=[{to:"/",title:"Home"},{title:"Avatar"}],vr=()=>r.jsxs(g,{title:"Avatar",description:"this is Avatar page",children:[r.jsx(p,{title:"Avatar",items:C}),r.jsx(j,{title:"Avatar",children:r.jsxs(i,{container:!0,spacing:3,children:[r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Image avatars",codeModel:r.jsx(w,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(t,{alt:"Remy Sharp",src:a}),r.jsx(t,{alt:"Travis Howard",src:n}),r.jsx(t,{alt:"Cindy Baker",src:l})]})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Letter avatars",codeModel:r.jsx(f,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(t,{sx:{bgcolor:"primary.main"},children:"A"}),r.jsx(t,{sx:{bgcolor:"secondary.main"},children:"B"}),r.jsx(t,{sx:{bgcolor:"error.main"},children:"C"}),r.jsx(t,{sx:{bgcolor:"warning.main"},children:"D"}),r.jsx(t,{sx:{bgcolor:"success.main"},children:"E"})]})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Icon avatars",codeModel:r.jsx(b,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(t,{sx:{bgcolor:"primary.main"},children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"secondary.main"},children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"error.main"},children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"warning.main"},children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"success.main"},children:r.jsx(s,{width:24})})]})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Variant",codeModel:r.jsx(v,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(t,{sx:{bgcolor:"primary.main"},children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"primary.main"},variant:"square",children:r.jsx(s,{width:24})}),r.jsx(t,{sx:{bgcolor:"primary.main"},variant:"rounded",children:r.jsx(s,{width:24})})]})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Grouped",codeModel:r.jsx(A,{}),children:r.jsx(o,{direction:"row",spacing:1,justifyContent:"center",children:r.jsxs(d,{max:4,children:[r.jsx(t,{alt:"Remy Sharp",src:a}),r.jsx(t,{alt:"Travis Howard",src:n}),r.jsx(t,{alt:"Cindy Baker",src:l})]})})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"Grouped Size",codeModel:r.jsx(u,{}),children:r.jsx(o,{direction:"row",spacing:1,justifyContent:"center",children:r.jsxs(d,{max:4,children:[r.jsx(t,{alt:"Remy Sharp",sx:{width:56,height:56},src:a}),r.jsx(t,{alt:"Travis Howard",sx:{width:56,height:56},src:n}),r.jsx(t,{alt:"Cindy Baker",sx:{width:56,height:56},src:l})]})})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:r.jsx(e,{title:"With Badge",codeModel:r.jsx(S,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(d,{children:r.jsx(m,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.jsx(t,{sx:{width:22,height:22},alt:"Remy Sharp",src:a}),children:r.jsx(t,{alt:"Travis Howard",src:n})})}),r.jsx(m,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",color:"success",children:r.jsx(t,{alt:"Remy Sharp",src:l})}),r.jsx(m,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",color:"warning",children:r.jsx(t,{alt:"Remy Sharp",src:h})}),r.jsx(m,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",color:"error",children:r.jsx(t,{alt:"Remy Sharp",src:x})})]})})}),r.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:8,sm:6},children:r.jsx(e,{title:"Sizes",codeModel:r.jsx(y,{}),children:r.jsxs(o,{direction:"row",spacing:1,justifyContent:"center",children:[r.jsx(t,{alt:"Remy Sharp",src:a,sx:{width:24,height:24}}),r.jsx(t,{alt:"Remy Sharp",src:a,sx:{width:32,height:32}}),r.jsx(t,{alt:"Remy Sharp",src:a}),r.jsx(t,{alt:"Remy Sharp",src:a,sx:{width:50,height:50}}),r.jsx(t,{alt:"Remy Sharp",src:a,sx:{width:60,height:60}}),r.jsx(t,{alt:"Remy Sharp",src:a,sx:{width:65,height:65}})]})})})]})})]});export{vr as default};
