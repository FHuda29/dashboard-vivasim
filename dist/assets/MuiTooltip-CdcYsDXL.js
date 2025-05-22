import{r as f,j as t}from"./index-pZ9xQgMg.js";import{I as Q}from"./InlineItemCard-BaBCShbg.js";import{B as U}from"./Breadcrumb-CRa5l2zq.js";import{P as X}from"./PageContainer-LYar8IhV.js";import{P as Y}from"./ParentCard-BOCKQ1T0.js";import{C as m}from"./ChildCard-DmJvQqkh.js";import{C as d}from"./CodeDialog-C4_8VgUE.js";import{G as s}from"./Grid2-TVAQUeLW.js";import{S as j}from"./Stack-DuXFRM8_.js";import{T as o,t as R}from"./Tooltip-DD1oevea.js";import{I as C}from"./IconButton-D8l5j-3s.js";import{I as w}from"./IconTrash-5tbukuAD.js";import{B as i}from"./Button-DrpnHyAw.js";import{F as S}from"./Fab-NoLU0Sn9.js";import{I as P}from"./IconPlus-CLk2kPC2.js";import{B as _}from"./Box-DgOhk5yP.js";import{u as tt,s as F}from"./Typography-PCIzasSl.js";import{F as ot}from"./Modal-ETINFcPv.js";import{u as it}from"./Paper-Bglc4K2l.js";import{T as et,g as b,a as rt}from"./utils--BW9XhXC.js";import{g as nt}from"./getReactElementRef-BDXd3hfF.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./DialogContent-DrCK57oZ.js";import"./useId-DuuGdQhb.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";import"./createStack-BEzwOkyd.js";import"./useControlled-kCJ_Peco.js";import"./Grow-CByEer0C.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./CircularProgress-KhQwCvJ5.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const lt={entering:{transform:"none"},entered:{transform:"none"}},at=f.forwardRef(function(c,W){const l=it(),A={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{addEndListener:B,appear:L=!0,children:h,easing:v,in:y,onEnter:E,onEntered:k,onEntering:N,onExit:I,onExited:M,onExiting:D,style:x,timeout:T=A,TransitionComponent:Z=et,...q}=c,u=f.useRef(null),z=tt(u,nt(h),W),a=e=>r=>{if(e){const n=u.current;r===void 0?e(n):e(n,r)}},G=a(N),V=a((e,r)=>{rt(e);const n=b({style:x,timeout:T,easing:v},{mode:"enter"});e.style.webkitTransition=l.transitions.create("transform",n),e.style.transition=l.transitions.create("transform",n),E&&E(e,r)}),$=a(k),H=a(D),J=a(e=>{const r=b({style:x,timeout:T,easing:v},{mode:"exit"});e.style.webkitTransition=l.transitions.create("transform",r),e.style.transition=l.transitions.create("transform",r),I&&I(e)}),K=a(M),O=e=>{B&&B(u.current,e)};return t.jsx(Z,{appear:L,in:y,nodeRef:u,onEnter:V,onEntered:$,onEntering:G,onExit:J,onExited:K,onExiting:H,addEndListener:O,timeout:T,...q,children:(e,{ownerState:r,...n})=>f.cloneElement(h,{style:{transform:"scale(0)",visibility:e==="exited"&&!y?"hidden":void 0,...lt[e],...x,...h.props.style},ref:z,...n})})}),st=()=>t.jsx(t.Fragment,{children:t.jsx(d,{children:`

import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Button, Stack, Fab, Box } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { IconPlus, IconTrash } from '@tabler/icons-react';

<Stack direction="row" spacing={2} alignItems="center">
    <Tooltip title="Delete">
        <IconButton>
            <IconTrash width={20} height={20} />
        </IconButton>
    </Tooltip>
    <Tooltip title="Add">
        <Button variant="outlined" color="primary">
            Button
        </Button>
    </Tooltip>
    <Tooltip title="Delete">
        <IconButton color="error">
            <IconTrash width={20} height={20} />
        </IconButton>
    </Tooltip>
    <Tooltip title="Add">
        <Fab color="secondary">
            <IconPlus width={20} height={20} />
        </Fab>
    </Tooltip>
</Stack>`})}),ct=()=>t.jsx(t.Fragment,{children:t.jsx(d,{children:`

import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Button, Stack, Fab, Box } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { IconPlus } from '@tabler/icons-react';

<Box textAlign="center">
    <Tooltip title="Delete" arrow>
        <Fab color="secondary">
            <IconPlus width={20} height={20} />
        </Fab>
    </Tooltip>
</Box>
`})}),mt=()=>t.jsx(t.Fragment,{children:t.jsx(d,{children:`

import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Button, Stack, Fab, Box } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  ['& .{tooltipClasses.tooltip}']: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  ['& .{tooltipClasses.tooltip}']: {
    maxWidth: 'none',
  },
});

const longText = '
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
';

import { IconPlus, IconTrash } from '@tabler/icons-react';

<Stack spacing={1} direction="row">
    <Tooltip title={longText}>
        <Button variant="outlined">Default Width [300px]</Button>
    </Tooltip>
    <CustomWidthTooltip title={longText}>
        <Button color="secondary" variant="outlined">Custom Width [500px]</Button>
    </CustomWidthTooltip>
    <NoMaxWidthTooltip title={longText}>
        <Button color="warning" variant="outlined">No wrapping</Button>
    </NoMaxWidthTooltip>
</Stack>`})}),dt=()=>t.jsx(t.Fragment,{children:t.jsx(d,{children:`

import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Button, Stack, Fab, Box } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

<Stack spacing={1} direction="row">
    <Tooltip title="Add">
        <Button variant="outlined" color="primary">Grow</Button>
    </Tooltip>
    <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Add"
    >
        <Button variant="outlined" color="secondary">Fade</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Zoom} title="Add">
        <Button variant="outlined" color="warning">Zoom</Button>
    </Tooltip>
</Stack>`})}),pt=()=>t.jsx(t.Fragment,{children:t.jsx(d,{children:`

import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Tooltip title="Top Start" placement="top-start">
        <Button variant="outlined" color="primary">Top Start</Button>
    </Tooltip>
    <Tooltip title="Top" placement="top">
        <Button variant="outlined" color="secondary">Top</Button>
    </Tooltip>
    <Tooltip title="Top End" placement="top-end">
        <Button variant="outlined" color="warning">Top End</Button>
    </Tooltip>
    <Tooltip title="Left Start" placement="left-start">
        <Button variant="outlined" color="success">Left Start</Button>
    </Tooltip>
    <Tooltip title="Left" placement="left">
        <Button variant="outlined" color="error">Left</Button>
    </Tooltip>
    <Tooltip title="Left End" placement="left-end">
        <Button variant="outlined" color="primary">Left End</Button>
    </Tooltip>
    <Tooltip title="Right Start" placement="right-start">
        <Button variant="outlined" color="secondary">Right Start</Button>
    </Tooltip>
    <Tooltip title="Right" placement="right">
        <Button variant="outlined" color="warning">Right</Button>
    </Tooltip>
    <Tooltip title="Right End" placement="right-end">
        <Button variant="outlined" color="success">Right End</Button>
    </Tooltip>
    <Tooltip title="Bottom Start" placement="bottom-start">
        <Button variant="outlined" color="error">Bottom Start</Button>
    </Tooltip>
    <Tooltip title="Bottom" placement="bottom">
        <Button variant="outlined" color="primary">Bottom</Button>
    </Tooltip>
    <Tooltip title="Bottom End" placement="bottom-end">
        <Button variant="outlined" color="secondary">Bottom End</Button>
    </Tooltip>
</InlineItemCard>`})}),ut=[{to:"/",title:"Home"},{title:"Tooltip"}],ht=F(({className:p,...c})=>t.jsx(o,{...c,classes:{popper:p}}))({[`& .${R.tooltip}`]:{maxWidth:500}}),xt=F(({className:p,...c})=>t.jsx(o,{...c,classes:{popper:p}}))({[`& .${R.tooltip}`]:{maxWidth:"none"}}),g=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`,ao=()=>t.jsxs(X,{title:"Tooltip",description:"this is Tooltip page",children:[t.jsx(U,{title:"Tooltip",items:ut}),t.jsx(Y,{title:"Tooltip",children:t.jsxs(s,{container:!0,spacing:3,children:[t.jsx(s,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:t.jsx(m,{title:"Simple",codeModel:t.jsx(st,{}),children:t.jsxs(j,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(o,{title:"Delete",children:t.jsx(C,{children:t.jsx(w,{width:20,height:20})})}),t.jsx(o,{title:"Add",children:t.jsx(i,{variant:"outlined",color:"primary",children:"Button"})}),t.jsx(o,{title:"Delete",children:t.jsx(C,{color:"error",children:t.jsx(w,{width:20,height:20})})}),t.jsx(o,{title:"Add",children:t.jsx(S,{color:"secondary",children:t.jsx(P,{width:20,height:20})})})]})})}),t.jsx(s,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:t.jsx(m,{title:"Arrow",codeModel:t.jsx(ct,{}),children:t.jsx(_,{textAlign:"center",children:t.jsx(o,{title:"Delete",arrow:!0,children:t.jsx(S,{color:"secondary",children:t.jsx(P,{width:20,height:20})})})})})}),t.jsx(s,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:t.jsx(m,{title:"Variable Width",codeModel:t.jsx(mt,{}),children:t.jsxs(j,{spacing:1,direction:"row",children:[t.jsx(o,{title:g,children:t.jsx(i,{variant:"outlined",children:"Default Width [300px]"})}),t.jsx(ht,{title:g,children:t.jsx(i,{color:"secondary",variant:"outlined",children:"Custom Width [500px]"})}),t.jsx(xt,{title:g,children:t.jsx(i,{color:"warning",variant:"outlined",children:"No wrapping"})})]})})}),t.jsx(s,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:t.jsx(m,{title:"Transitions",codeModel:t.jsx(dt,{}),children:t.jsxs(j,{spacing:1,direction:"row",children:[t.jsx(o,{title:"Add",children:t.jsx(i,{variant:"outlined",color:"primary",children:"Grow"})}),t.jsx(o,{TransitionComponent:ot,TransitionProps:{timeout:600},title:"Add",children:t.jsx(i,{variant:"outlined",color:"secondary",children:"Fade"})}),t.jsx(o,{TransitionComponent:at,title:"Add",children:t.jsx(i,{variant:"outlined",color:"warning",children:"Zoom"})})]})})}),t.jsx(s,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(m,{title:"Positions",codeModel:t.jsx(pt,{}),children:t.jsxs(Q,{children:[t.jsx(o,{title:"Top Start",placement:"top-start",children:t.jsx(i,{variant:"outlined",color:"primary",children:"Top Start"})}),t.jsx(o,{title:"Top",placement:"top",children:t.jsx(i,{variant:"outlined",color:"secondary",children:"Top"})}),t.jsx(o,{title:"Top End",placement:"top-end",children:t.jsx(i,{variant:"outlined",color:"warning",children:"Top End"})}),t.jsx(o,{title:"Left Start",placement:"left-start",children:t.jsx(i,{variant:"outlined",color:"success",children:"Left Start"})}),t.jsx(o,{title:"Left",placement:"left",children:t.jsx(i,{variant:"outlined",color:"error",children:"Left"})}),t.jsx(o,{title:"Left End",placement:"left-end",children:t.jsx(i,{variant:"outlined",color:"primary",children:"Left End"})}),t.jsx(o,{title:"Right Start",placement:"right-start",children:t.jsx(i,{variant:"outlined",color:"secondary",children:"Right Start"})}),t.jsx(o,{title:"Right",placement:"right",children:t.jsx(i,{variant:"outlined",color:"warning",children:"Right"})}),t.jsx(o,{title:"Right End",placement:"right-end",children:t.jsx(i,{variant:"outlined",color:"success",children:"Right End"})}),t.jsx(o,{title:"Bottom Start",placement:"bottom-start",children:t.jsx(i,{variant:"outlined",color:"error",children:"Bottom Start"})}),t.jsx(o,{title:"Bottom",placement:"bottom",children:t.jsx(i,{variant:"outlined",color:"primary",children:"Bottom"})}),t.jsx(o,{title:"Bottom End",placement:"bottom-end",children:t.jsx(i,{variant:"outlined",color:"secondary",children:"Bottom End"})})]})})})]})})]});export{ao as default};
