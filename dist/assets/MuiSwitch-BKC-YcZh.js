import{j as e}from"./index-pZ9xQgMg.js";import{P as n}from"./ParentCard-BOCKQ1T0.js";import{C as o}from"./ChildCard-DmJvQqkh.js";import{B as d}from"./Breadcrumb-CRa5l2zq.js";import{P as x}from"./PageContainer-LYar8IhV.js";import{C as c}from"./CustomSwitch-C06V7WQr.js";import{B as i}from"./Box-DgOhk5yP.js";import{S as t}from"./Switch-jqrwg9j-.js";import{F as m}from"./FormGroup-DuQnWhWW.js";import{F as l}from"./FormControlLabel-D6DjCZQh.js";import{C as s}from"./CodeDialog-C4_8VgUE.js";import{G as r}from"./Grid2-TVAQUeLW.js";import"./Paper-Bglc4K2l.js";import"./Typography-PCIzasSl.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./SwitchBase-B9BuLIhz.js";import"./useFormControl-D34Ydy4-.js";import"./useControlled-kCJ_Peco.js";import"./formControlState-Dq1zat_P.js";import"./Tooltip-DD1oevea.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";const h=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(c,{checked:!0}),e.jsx(c,{}),e.jsx(c,{disabled:!0,defaultChecked:!0}),e.jsx(c,{disabled:!0})]}),u=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{}),e.jsx(t,{disabled:!0,defaultChecked:!0}),e.jsx(t,{disabled:!0})]}),p=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{children:[e.jsx(l,{control:e.jsx(t,{defaultChecked:!0}),label:"Label"}),e.jsx(l,{disabled:!0,control:e.jsx(t,{}),label:"Disabled"})]})}),j=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0,size:"small"}),e.jsx(t,{defaultChecked:!0})]}),f=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{defaultChecked:!0,color:"secondary"}),e.jsx(t,{defaultChecked:!0,color:"error"}),e.jsx(t,{defaultChecked:!0,color:"warning"}),e.jsx(t,{defaultChecked:!0,color:"success"}),e.jsx(t,{defaultChecked:!0,color:"default"})]}),b=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{"aria-label":"position",row:!0,children:[e.jsx(l,{value:"top",control:e.jsx(t,{color:"primary"}),label:"Top",labelPlacement:"top"}),e.jsx(l,{value:"start",control:e.jsx(t,{color:"primary"}),label:"Start",labelPlacement:"start"}),e.jsx(l,{value:"bottom",control:e.jsx(t,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(l,{value:"end",control:e.jsx(t,{color:"primary"}),label:"End",labelPlacement:"end"})]})}),a=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
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
