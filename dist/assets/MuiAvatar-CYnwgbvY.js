import{j as r,u as a,al as n,am as l,an as h,ao as x}from"./index-pZ9xQgMg.js";import{B as p}from"./Breadcrumb-CRa5l2zq.js";import{P as g}from"./PageContainer-LYar8IhV.js";import{P as j}from"./ParentCard-BOCKQ1T0.js";import{C as e}from"./ChildCard-DmJvQqkh.js";import{C as c}from"./CodeDialog-C4_8VgUE.js";import{G as i}from"./Grid2-TVAQUeLW.js";import{S as o}from"./Stack-DuXFRM8_.js";import{A as t}from"./Avatar-CREtXfKl.js";import{I as s}from"./IconMoodSmile-DXCpNyKl.js";import{A as d}from"./AvatarGroup-W-lKN6ge.js";import{B as m}from"./Badge-Dbu24w-d.js";import"./Typography-PCIzasSl.js";import"./Paper-Bglc4K2l.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Box-DgOhk5yP.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";import"./createStack-BEzwOkyd.js";import"./usePreviousProps-Do6Wx2iN.js";const v=()=>r.jsx(r.Fragment,{children:r.jsx(c,{children:`

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
