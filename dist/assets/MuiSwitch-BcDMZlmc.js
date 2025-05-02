import{j as e}from"./index-q1gJB5H0.js";import{P as n}from"./ParentCard-BoIC9gk3.js";import{C as o}from"./ChildCard-CxfxNJXb.js";import{B as d}from"./Breadcrumb-Sx0jSoUO.js";import{P as x}from"./PageContainer-ShAoTXqo.js";import{C as c}from"./CustomSwitch-Cr0jvX0R.js";import{B as i}from"./Box-DjbeIn6R.js";import{S as t}from"./Switch-BjIjzMHt.js";import{F as m}from"./FormGroup-CdnPfBTa.js";import{F as l}from"./FormControlLabel-BSn4sxJo.js";import{C as s}from"./CodeDialog-BUiQRyz8.js";import{G as r}from"./Grid2-CqZBoIec.js";import"./Paper-BfYJvf2K.js";import"./Typography-BxNQAu-e.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./SwitchBase-W9NycRqz.js";import"./useFormControl-CXKl78CG.js";import"./useControlled-2SXrPK_C.js";import"./formControlState-Dq1zat_P.js";import"./Tooltip-T0REb2Y8.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";const h=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(c,{checked:!0}),e.jsx(c,{}),e.jsx(c,{disabled:!0,defaultChecked:!0}),e.jsx(c,{disabled:!0})]}),u=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{}),e.jsx(t,{disabled:!0,defaultChecked:!0}),e.jsx(t,{disabled:!0})]}),p=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{children:[e.jsx(l,{control:e.jsx(t,{defaultChecked:!0}),label:"Label"}),e.jsx(l,{disabled:!0,control:e.jsx(t,{}),label:"Disabled"})]})}),j=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0,size:"small"}),e.jsx(t,{defaultChecked:!0})]}),f=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{defaultChecked:!0,color:"secondary"}),e.jsx(t,{defaultChecked:!0,color:"error"}),e.jsx(t,{defaultChecked:!0,color:"warning"}),e.jsx(t,{defaultChecked:!0,color:"success"}),e.jsx(t,{defaultChecked:!0,color:"default"})]}),b=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{"aria-label":"position",row:!0,children:[e.jsx(l,{value:"top",control:e.jsx(t,{color:"primary"}),label:"Top",labelPlacement:"top"}),e.jsx(l,{value:"start",control:e.jsx(t,{color:"primary"}),label:"Start",labelPlacement:"start"}),e.jsx(l,{value:"bottom",control:e.jsx(t,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(l,{value:"end",control:e.jsx(t,{color:"primary"}),label:"End",labelPlacement:"end"})]})}),a=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
"use client";

import { Box, Switch } from '@mui/material';

<Box textAlign="center">
    <Switch defaultChecked />
    <Switch defaultChecked color="secondary" />
    <Switch defaultChecked color="error" />
    <Switch defaultChecked color="warning" />
    <Switch defaultChecked color="success" />
    <Switch defaultChecked color="default" />
</Box>
`})}),C=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
"use client";

import { Box, Switch } from '@mui/material';

<Box textAlign="center">
    <Switch defaultChecked />
    <Switch />
    <Switch disabled defaultChecked />
    <Switch disabled />
</Box>
`})}),S=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
"use client";

import { Box, Switch, FormGroup, FormControlLabel } from '@mui/material';

<Box textAlign="center">
    <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
</Box>
`})}),w=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
"use client";

import { Box, Switch } from '@mui/material';

<Box textAlign="center">
    <Switch defaultChecked size="small" />
    <Switch defaultChecked />
</Box>
`})}),g=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
"use client";

import { Box, Switch, FormGroup, FormControlLabel } from '@mui/material';

<Box textAlign="center">
    <FormGroup aria-label="position" row>
        <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Top"
            labelPlacement="top"
        />
        <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Start"
            labelPlacement="start"
        />
        <FormControlLabel
            value="bottom"
            control={<Switch color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
        />
        <FormControlLabel
            value="end"
            control={<Switch color="primary" />}
            label="End"
            labelPlacement="end"
        />
    </FormGroup>
</Box>
`})}),k=[{to:"/",title:"Home"},{title:"Switch"}],pe=()=>e.jsxs(x,{title:"Switch",description:"this is Switch page",children:[e.jsx(d,{title:"Switch",items:k}),e.jsx(n,{title:"Switch",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Custom",codeModel:e.jsx(a,{}),children:e.jsx(h,{})})}),e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Default",codeModel:e.jsx(C,{}),children:e.jsx(u,{})})}),e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Default with Label",codeModel:e.jsx(S,{}),children:e.jsx(p,{})})}),e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Sizes",codeModel:e.jsx(w,{}),children:e.jsx(j,{})})}),e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Default Colors",codeModel:e.jsx(a,{}),children:e.jsx(f,{})})}),e.jsx(r,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Placement",codeModel:e.jsx(g,{}),children:e.jsx(b,{})})})]})})]});export{pe as default};
