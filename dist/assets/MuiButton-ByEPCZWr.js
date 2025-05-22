import{r as E,b9 as J,ah as K,j as t,aj as T}from"./index-pZ9xQgMg.js";import{B as Q}from"./Breadcrumb-CRa5l2zq.js";import{P as X}from"./PageContainer-LYar8IhV.js";import{P as D}from"./ParentCard-BOCKQ1T0.js";import{C as a}from"./ChildCard-DmJvQqkh.js";import{S as l}from"./Stack-DuXFRM8_.js";import{a as Y,B as n}from"./Button-DrpnHyAw.js";import{c as Z,g as _,s as G,m as U}from"./Typography-PCIzasSl.js";import{u as tt}from"./useId-DuuGdQhb.js";import{c as nt}from"./composeClasses-O3bfDh63.js";import{C as ot}from"./CircularProgress-KhQwCvJ5.js";import{I as C}from"./IconTrash-5tbukuAD.js";import{I as j}from"./IconSend-K53lRKuR.js";import{T as c}from"./Tooltip-DD1oevea.js";import{I as p}from"./IconButton-D8l5j-3s.js";import{I as u}from"./IconBell-Dhg21ViP.js";import{F as x}from"./Fab-NoLU0Sn9.js";import{I as et}from"./IconPlus-CLk2kPC2.js";import{I as it}from"./IconClipboard-DpG54l7J.js";import{B as r}from"./ButtonGroup-C7KpVCNP.js";import{I as m,a as g,b}from"./IconPlayerSkipForward-BR4QaWCo.js";import{c as L}from"./createReactComponent-C7i1OeoA.js";import{C as s}from"./CodeDialog-C4_8VgUE.js";import{G as i}from"./Grid2-TVAQUeLW.js";import"./Paper-Bglc4K2l.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./Box-DgOhk5yP.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./createStack-BEzwOkyd.js";import"./useControlled-kCJ_Peco.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";var I=L("align-center","IconAlignCenter",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M8 12l8 0",key:"svg-1"}],["path",{d:"M6 18l12 0",key:"svg-2"}]]),w=L("align-left","IconAlignLeft",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l10 0",key:"svg-1"}],["path",{d:"M4 18l14 0",key:"svg-2"}]]),y=L("align-right","IconAlignRight",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M10 12l10 0",key:"svg-1"}],["path",{d:"M6 18l14 0",key:"svg-2"}]]);function rt(e){return _("MuiLoadingButton",e)}const h=Z("MuiLoadingButton",["root","label","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),lt=e=>{const{loading:o,loadingPosition:d,classes:f}=e,k={root:["root",o&&"loading"],label:["label"],startIcon:[o&&`startIconLoading${T(d)}`],endIcon:[o&&`endIconLoading${T(d)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${T(d)}`]},S=nt(k,rt,f);return{...f,...S}},at=e=>e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"&&e!=="classes",st=G(n,{shouldForwardProp:e=>at(e)||e==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,o)=>[o.root,o.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(U(({theme:e})=>({display:"inline-flex",[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0},variants:[{props:{loadingPosition:"center"},style:{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}}},{props:({ownerState:o})=>o.loadingPosition==="start"&&o.fullWidth,style:{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}}},{props:({ownerState:o})=>o.loadingPosition==="end"&&o.fullWidth,style:{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}}]}))),ct=G("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,o)=>{const{ownerState:d}=e;return[o.loadingIndicator,o[`loadingIndicator${T(d.loadingPosition)}`]]}})(U(({theme:e})=>({position:"absolute",visibility:"visible",display:"flex",variants:[{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:({loadingPosition:o,ownerState:d})=>o==="start"&&d.size!=="small",style:{left:14}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:({loadingPosition:o,ownerState:d})=>o==="end"&&d.size!=="small",style:{right:14}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:({ownerState:o})=>o.loadingPosition==="start"&&o.fullWidth,style:{position:"relative",left:-10}},{props:({ownerState:o})=>o.loadingPosition==="end"&&o.fullWidth,style:{position:"relative",right:-10}}]}))),$=G("span",{name:"MuiLoadingButton",slot:"Label",overridesResolver:(e,o)=>[o.label]})({display:"inherit",alignItems:"inherit",justifyContent:"inherit"}),W=E.forwardRef(function(o,d){const f=E.useContext(Y),k=J(f,o),S=K({props:k,name:"MuiLoadingButton"}),{children:P,disabled:F=!1,id:N,loading:z=!1,loadingIndicator:V,loadingPosition:H="center",variant:M="text",...q}=S,O=tt(N),A=V??t.jsx(ot,{"aria-labelledby":O,color:"inherit",size:16}),B={...S,disabled:F,loading:z,loadingIndicator:A,loadingPosition:H,variant:M},v=lt(B),R=z?t.jsx(ct,{className:v.loadingIndicator,ownerState:B,children:A}):null;return t.jsxs(st,{disabled:F||z,id:O,ref:d,...q,variant:M,classes:v,ownerState:B,children:[B.loadingPosition==="end"?t.jsx($,{className:v.label,children:P}):R,B.loadingPosition==="end"?R:t.jsx($,{className:v.label,children:P})]})}),dt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{variant:"contained",color:"primary",children:"Primary"}),t.jsx(n,{variant:"contained",color:"secondary",children:"Secondary"}),t.jsx(n,{disabled:!0,children:"Disabled"}),t.jsx(n,{href:"#text-buttons",variant:"contained",color:"primary",children:"Link"})]}),ut=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{variant:"contained",color:"primary",children:"Primary"}),t.jsx(n,{variant:"contained",color:"secondary",children:"Secondary"}),t.jsx(n,{variant:"contained",color:"error",children:"Error"}),t.jsx(n,{variant:"contained",color:"warning",children:"Warning"}),t.jsx(n,{variant:"contained",color:"success",children:"Success"})]}),xt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(W,{loading:!0,loadingIndicator:"Loading…",variant:"contained",color:"error",startIcon:t.jsx(C,{width:18}),children:"Left Icon"}),t.jsx(W,{loading:!0,variant:"contained",color:"secondary",endIcon:t.jsx(C,{width:18}),children:"Right Icon"})]}),ht=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},alignItems:"center",justifyContent:"center",children:[t.jsx(n,{variant:"contained",size:"small",children:"Small"}),t.jsx(n,{variant:"contained",size:"medium",children:"Medium"}),t.jsx(n,{variant:"contained",size:"large",children:"Large"})]}),jt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{variant:"outlined",color:"error",startIcon:t.jsx(C,{width:18}),children:"Left Icon"}),t.jsx(n,{variant:"outlined",color:"secondary",endIcon:t.jsx(j,{width:18}),children:"Right Icon"})]}),pt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},alignItems:"center",justifyContent:"center",children:[t.jsx(n,{variant:"outlined",size:"small",children:"Small"}),t.jsx(n,{variant:"outlined",size:"medium",children:"Medium"}),t.jsx(n,{variant:"outlined",size:"large",children:"Large"})]}),Bt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{color:"primary",children:"Primary"}),t.jsx(n,{color:"secondary",children:"Secondary"}),t.jsx(n,{disabled:!0,children:"Disabled"}),t.jsx(n,{href:"#text-buttons",color:"primary",children:"Link"})]}),mt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{color:"primary",children:"Primary"}),t.jsx(n,{color:"secondary",children:"Secondary"}),t.jsx(n,{color:"error",children:"Error"}),t.jsx(n,{color:"warning",children:"Warning"}),t.jsx(n,{color:"success",children:"Success"})]}),gt=()=>t.jsxs(l,{spacing:1,direction:"row",justifyContent:"center",children:[t.jsx(n,{color:"error",startIcon:t.jsx(C,{width:18}),children:"Left Icon"}),t.jsx(n,{color:"secondary",endIcon:t.jsx(j,{width:18}),children:"Right Icon"})]}),bt=()=>t.jsxs(l,{spacing:1,direction:"row",alignItems:"center",justifyContent:"center",children:[t.jsx(n,{size:"small",children:"Small"}),t.jsx(n,{size:"medium",children:"Medium"}),t.jsx(n,{size:"large",children:"Large"})]}),It=()=>t.jsxs(l,{spacing:1,direction:"row",justifyContent:"center",children:[t.jsx(c,{title:"Bell",children:t.jsx(p,{color:"primary","aria-label":"primary-bell",children:t.jsx(u,{width:18})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{color:"secondary","aria-label":"secondary-bell",children:t.jsx(u,{width:18})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{color:"error","aria-label":"error-bell",children:t.jsx(u,{width:18})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{color:"warning","aria-label":"warning-bell",children:t.jsx(u,{width:18})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{color:"success","aria-label":"success-bell",children:t.jsx(u,{width:18})})})]}),wt=()=>t.jsxs(l,{spacing:1,direction:"row",justifyContent:"center",children:[t.jsx(c,{title:"Bell",children:t.jsx(p,{"aria-label":"small-bell",children:t.jsx(u,{width:16})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{size:"medium","aria-label":"medium-bell",children:t.jsx(u,{width:19})})}),t.jsx(c,{title:"Bell",children:t.jsx(p,{"aria-label":"large-bell",children:t.jsx(u,{width:21})})})]}),yt=()=>t.jsxs(l,{spacing:1,direction:"row",justifyContent:"center",children:[t.jsx(c,{title:"Send",children:t.jsx(x,{color:"primary","aria-label":"send",children:t.jsx(j,{width:20})})}),t.jsx(c,{title:"Add",children:t.jsx(x,{color:"secondary","aria-label":"plus",children:t.jsx(et,{width:20})})}),t.jsx(x,{disabled:!0,"aria-label":"clipboard",children:t.jsx(it,{width:20})})]}),ft=()=>t.jsx(t.Fragment,{children:t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center",children:[t.jsx(c,{title:"Send",children:t.jsx(x,{color:"primary","aria-label":"send",children:t.jsx(j,{width:20})})}),t.jsx(c,{title:"Send",children:t.jsx(x,{color:"secondary","aria-label":"send",children:t.jsx(j,{width:20})})}),t.jsx(c,{title:"Send",children:t.jsx(x,{color:"warning","aria-label":"send",children:t.jsx(j,{width:20})})}),t.jsx(c,{title:"Send",children:t.jsx(x,{color:"error","aria-label":"send",children:t.jsx(j,{width:20})})}),t.jsx(c,{title:"Send",children:t.jsx(x,{color:"success","aria-label":"send",children:t.jsx(j,{width:20})})})]})}),St=()=>t.jsx(t.Fragment,{children:t.jsxs(l,{spacing:1,direction:"row",justifyContent:"center",children:[t.jsx(c,{title:"Bell",children:t.jsx(x,{size:"small",color:"primary","aria-label":"small-bell",children:t.jsx(u,{width:16})})}),t.jsx(c,{title:"Bell",children:t.jsx(x,{size:"medium",color:"secondary","aria-label":"medium-bell",children:t.jsx(u,{width:18})})}),t.jsx(c,{title:"Bell",children:t.jsx(x,{size:"large",color:"warning","aria-label":"large-bell",children:t.jsx(u,{width:20})})})]})}),vt=()=>t.jsxs(l,{spacing:1,children:[t.jsxs(r,{variant:"outlined","aria-label":"outlined button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{variant:"contained","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]})]}),Tt=()=>t.jsxs(l,{spacing:1,justifyContent:"center",children:[t.jsxs(r,{size:"small",variant:"outlined","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{variant:"outlined","aria-label":"outlined button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{size:"large",variant:"outlined","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]})]}),Ct=()=>t.jsxs(l,{spacing:1,direction:"row",children:[t.jsxs(r,{orientation:"vertical",variant:"contained","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{orientation:"vertical",variant:"outlined","aria-label":"outlined button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{orientation:"vertical",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]})]}),kt=()=>t.jsxs(l,{spacing:2,direction:{xs:"column",sm:"row",lg:"column"},justifyContent:"center",children:[t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"column",lg:"row"},children:[t.jsxs(r,{variant:"contained","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{variant:"contained",color:"secondary","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{variant:"contained",color:"error","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{color:"success",variant:"contained","aria-label":"outlined primary button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]})]}),t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"column",lg:"row"},children:[t.jsxs(r,{variant:"outlined","aria-label":"outlined button group",children:[t.jsx(n,{children:t.jsx(m,{width:18})}),t.jsx(n,{children:t.jsx(g,{width:18})}),t.jsx(n,{children:t.jsx(b,{width:18})})]}),t.jsxs(r,{variant:"outlined",color:"secondary","aria-label":"outlined button group",children:[t.jsx(n,{children:t.jsx(m,{width:18})}),t.jsx(n,{children:t.jsx(g,{width:18})}),t.jsx(n,{children:t.jsx(b,{width:18})})]}),t.jsxs(r,{variant:"outlined",color:"warning","aria-label":"outlined button group",children:[t.jsx(n,{children:t.jsx(m,{width:18})}),t.jsx(n,{children:t.jsx(g,{width:18})}),t.jsx(n,{children:t.jsx(b,{width:18})})]}),t.jsxs(r,{variant:"outlined",color:"error","aria-label":"outlined button group",children:[t.jsx(n,{children:t.jsx(m,{width:18})}),t.jsx(n,{children:t.jsx(g,{width:18})}),t.jsx(n,{children:t.jsx(b,{width:18})})]}),t.jsxs(r,{variant:"outlined",color:"success","aria-label":"outlined button group",children:[t.jsx(n,{children:t.jsx(m,{width:18})}),t.jsx(n,{children:t.jsx(g,{width:18})}),t.jsx(n,{children:t.jsx(b,{width:18})})]})]}),t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"column",lg:"row"},children:[t.jsxs(r,{variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:t.jsx(w,{width:18})}),t.jsx(n,{children:t.jsx(I,{width:18})}),t.jsx(n,{children:t.jsx(y,{width:18})})]}),t.jsxs(r,{color:"secondary",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:t.jsx(w,{width:18})}),t.jsx(n,{children:t.jsx(I,{width:18})}),t.jsx(n,{children:t.jsx(y,{width:18})})]}),t.jsxs(r,{color:"warning",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:t.jsx(w,{width:18})}),t.jsx(n,{children:t.jsx(I,{width:18})}),t.jsx(n,{children:t.jsx(y,{width:18})})]}),t.jsxs(r,{color:"error",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:t.jsx(w,{width:18})}),t.jsx(n,{children:t.jsx(I,{width:18})}),t.jsx(n,{children:t.jsx(y,{width:18})})]}),t.jsxs(r,{color:"success",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:t.jsx(w,{width:18})}),t.jsx(n,{children:t.jsx(I,{width:18})}),t.jsx(n,{children:t.jsx(y,{width:18})})]})]})]}),zt=()=>t.jsxs(l,{spacing:1,direction:"column",justifyContent:"center",children:[t.jsxs(r,{variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{color:"secondary",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]}),t.jsxs(r,{color:"error",variant:"text","aria-label":"text button group",children:[t.jsx(n,{children:"One"}),t.jsx(n,{children:"Two"}),t.jsx(n,{children:"Three"})]})]}),Gt=()=>t.jsxs(l,{spacing:1,direction:{xs:"column",sm:"row"},justifyContent:"center",children:[t.jsx(n,{variant:"outlined",color:"primary",children:"Primary"}),t.jsx(n,{variant:"outlined",color:"secondary",children:"Secondary"}),t.jsx(n,{variant:"outlined",color:"error",children:"Error"}),t.jsx(n,{variant:"outlined",color:"warning",children:"Warning"}),t.jsx(n,{variant:"outlined",color:"success",children:"Success"})]}),Lt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button disabled>Disabled</Button>
    <Button href="#text-buttons" variant="contained" color="primary">
      Link
    </Button>
</Stack>`})}),Pt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button variant="contained" color="primary">
        Primary
    </Button>
    <Button variant="contained" color="secondary">
        Secondary
    </Button>
    <Button variant="contained" color="error">
        Error
    </Button>
    <Button variant="contained" color="warning">
        Warning
    </Button>
    <Button variant="contained" color="success">
        Success
    </Button>
</Stack>`})}),Ft=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Stack } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import LoadingButton from '@mui/lab/LoadingButton';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <LoadingButton loading loadingIndicator="Loading…"
      variant="contained"
      color="error"
      startIcon={<IconTrash width={18} />}
    >
      Left Icon
    </LoadingButton >
    <LoadingButton loading
      variant="contained"
      color="secondary"
      endIcon={<IconTrash width={18} />}
    >
      Right Icon
    </LoadingButton >
</Stack>`})}),Mt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center">
    <Button variant="contained" size="small">
      Small
    </Button>
    <Button variant="contained" size="medium">
      Medium
    </Button>
    <Button variant="contained" size="large">
      Large
    </Button>
</Stack>`})}),Ot=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button variant="outlined" color="primary">
      Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
    <Button variant="outlined" color="warning">
      Warning
    </Button>
    <Button variant="outlined" color="success">
      Success
    </Button>
</Stack>`})}),At=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';
import { IconTrash, IconSend } from '@tabler/icons-react';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button
        variant="outlined"
        color="error"
        startIcon={<IconTrash width={18} />}
    >
        Left Icon
    </Button>
    <Button
        variant="outlined"
        color="secondary"
        endIcon={<IconSend width={18} />}
    >
        Right Icon
    </Button>
</Stack>`})}),Rt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center">
    <Button variant="outlined" size="small">
      Small
    </Button>
    <Button variant="outlined" size="medium">
      Medium
    </Button>
    <Button variant="outlined" size="large">
      Large
    </Button>
</Stack>`})}),Et=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#text-buttons" color="primary">
      Link
    </Button>
</Stack>`})}),Dt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="error">Error</Button>
    <Button color="warning">Warning</Button>
    <Button color="success">Success</Button>
</Stack>`})}),$t=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';
import { IconTrash, IconSend } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Button color="error" startIcon={<IconTrash width={18} />}>
      Left Icon
    </Button>
    <Button color="secondary" endIcon={<IconSend width={18} />}>
      Right Icon
    </Button>
</Stack>`})}),Wt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, Stack } from '@mui/material';

<Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
</Stack>`})}),Ut=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { IconButton, Tooltip, Stack } from '@mui/material';
import { IconBell } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Bell">
      <IconButton color="primary" aria-label="primary-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="secondary" aria-label="secondary-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="error" aria-label="error-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="warning" aria-label="warning-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton color="success" aria-label="success-bell">
        <IconBell width={18} />
      </IconButton>
    </Tooltip>
</Stack>`})}),Nt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { IconButton, Tooltip, Stack } from '@mui/material';
import { IconBell } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Bell">
      <IconButton aria-label="small-bell">
        <IconBell width={16} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton size="medium" aria-label="medium-bell">
        <IconBell width={19} />
      </IconButton>
    </Tooltip>
    <Tooltip title="Bell">
      <IconButton aria-label="large-bell">
        <IconBell width={21} />
      </IconButton>
    </Tooltip>
</Stack>`})}),Vt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Fab, Tooltip, Stack } from '@mui/material';
import { IconClipboard, IconPlus, IconSend } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Send">
      <Fab color="primary" aria-label="send">
        <IconSend width={20} />
      </Fab>
    </Tooltip>
    <Tooltip title="Add">
      <Fab color="secondary" aria-label="plus">
        <IconPlus width={20} />
      </Fab>
    </Tooltip>
    <Fab disabled aria-label="clipboard">
      <IconClipboard width={20} />
    </Fab>
</Stack>`})}),Ht=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Fab, Tooltip, Stack } from '@mui/material';
import { IconSend } from '@tabler/icons-react';

<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center">
    <Tooltip title="Send">
        <Fab color="primary" aria-label="send">
          <IconSend width={20} />
        </Fab>
    </Tooltip>
    <Tooltip title="Send">
        <Fab color="secondary" aria-label="send">
          <IconSend width={20} />
        </Fab>
    </Tooltip>
    <Tooltip title="Send">
        <Fab color="warning" aria-label="send">
          <IconSend width={20} />
        </Fab>
    </Tooltip>
    <Tooltip title="Send">
        <Fab color="error" aria-label="send">
          <IconSend width={20} />
        </Fab>
    </Tooltip>
    <Tooltip title="Send">
        <Fab color="success" aria-label="send">
          <IconSend width={20} />
        </Fab>
    </Tooltip>
</Stack>`})}),qt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Fab, Tooltip, Stack } from '@mui/material';
import { IconBell } from '@tabler/icons-react';

<Stack spacing={1} direction="row" justifyContent="center">
    <Tooltip title="Bell">
        <Fab size="small" color="primary" aria-label="small-bell">
          <IconBell width={16} />
        </Fab>
    </Tooltip>
    <Tooltip title="Bell">
        <Fab size="medium" color="secondary" aria-label="medium-bell">
          <IconBell width={18} />
        </Fab>
    </Tooltip>
    <Tooltip title="Bell">
        <Fab size="large" color="warning" aria-label="large-bell">
          <IconBell width={20} />
        </Fab>
    </Tooltip>
</Stack>`})}),Jt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, ButtonGroup, Stack } from '@mui/material';

<Stack spacing={1} >
    <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
</Stack>`})}),Kt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, ButtonGroup, Stack } from '@mui/material';

<Stack spacing={1} justifyContent="center">
    <ButtonGroup size="small" variant="outlined" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup size="large" variant="outlined" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
</Stack>`})}),Qt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
  "use client";
  
  import { Button, ButtonGroup, Stack } from '@mui/material';

  <Stack spacing={1} direction="row">
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
  </Stack>`})}),Xt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, ButtonGroup, Stack } from '@mui/material';

<Stack spacing={1} direction="column" justifyContent="center">
    <ButtonGroup variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup color="secondary" variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup color="error" variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
</Stack>`})}),Yt=()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:`
"use client";

import { Button, ButtonGroup, Stack } from '@mui/material';
import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';

<Stack spacing={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }} justifyContent="center">
    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="error" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          color="success"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
    </Stack>
    <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="warning" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="error" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="success" aria-label="outlined button group">
          <Button>
            <IconPlayerSkipBack width={18} />
          </Button>
          <Button>
            <IconPlayerPlay width={18} />
          </Button>
          <Button>
            <IconPlayerSkipForward width={18} />
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={1} direction={{ xs: 'column', sm: 'column', lg: 'row' }}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="warning" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="error" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
        <ButtonGroup color="success" variant="text" aria-label="text button group">
          <Button>
            <IconAlignLeft width={18} />
          </Button>
          <Button>
            <IconAlignCenter width={18} />
          </Button>
          <Button>
            <IconAlignRight width={18} />
          </Button>
        </ButtonGroup>
    </Stack>
</Stack>`})}),Zt=[{to:"/",title:"Home"},{title:"Button"}],Xn=()=>t.jsxs(X,{title:"Buttons",description:"this is Buttons page",children:[t.jsx(Q,{title:"Button",items:Zt}),t.jsxs(i,{container:!0,spacing:3,children:[t.jsx(i,{size:12,children:t.jsx(D,{title:"Buttons",children:t.jsxs(i,{container:!0,spacing:3,children:[t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Default",codeModel:t.jsx(Lt,{}),children:t.jsx(dt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Colors",codeModel:t.jsx(Pt,{}),children:t.jsx(ut,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Loading Buttons",codeModel:t.jsx(Ft,{}),children:t.jsx(xt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Sizes",codeModel:t.jsx(Mt,{}),children:t.jsx(ht,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Outlined",codeModel:t.jsx(Ot,{}),children:t.jsx(Gt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Outlined Icon",codeModel:t.jsx(At,{}),children:t.jsx(jt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Outline Size",codeModel:t.jsx(Rt,{}),children:t.jsx(pt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Text",codeModel:t.jsx(Et,{}),children:t.jsx(Bt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Text Color",codeModel:t.jsx(Dt,{}),children:t.jsx(mt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Text Icon",codeModel:t.jsx($t,{}),children:t.jsx(gt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Text Sizes",codeModel:t.jsx(Wt,{}),children:t.jsx(bt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Icon Color",codeModel:t.jsx(Ut,{}),children:t.jsx(It,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Icon Sizes",codeModel:t.jsx(Nt,{}),children:t.jsx(wt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"FAB",codeModel:t.jsx(Vt,{}),children:t.jsx(yt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"FAB Color",codeModel:t.jsx(Ht,{}),children:t.jsx(ft,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"FAB Size",codeModel:t.jsx(qt,{}),children:t.jsx(St,{})})})]})})}),t.jsx(i,{size:12,children:t.jsx(D,{title:"Button Group",children:t.jsxs(i,{container:!0,spacing:3,children:[t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Default",codeModel:t.jsx(Jt,{}),children:t.jsx(vt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Sizes",codeModel:t.jsx(Kt,{}),children:t.jsx(Tt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Verical",codeModel:t.jsx(Qt,{}),children:t.jsx(Ct,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6},children:t.jsx(a,{title:"Text",codeModel:t.jsx(Xt,{}),children:t.jsx(zt,{})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(a,{title:"Color",codeModel:t.jsx(Yt,{}),children:t.jsx(kt,{})})})]})})})]})]});export{Xn as default};
