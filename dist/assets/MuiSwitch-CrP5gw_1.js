import{j as e}from"./index-D0CpDmcp.js";import{P as n}from"./ParentCard-Dds6eSz-.js";import{C as o}from"./ChildCard-DYuC6c8b.js";import{B as d}from"./Breadcrumb-BVcp9-n_.js";import{P as x}from"./PageContainer-GyGJwSoy.js";import{C as c}from"./CustomSwitch-j27FqAxZ.js";import{B as i}from"./Box-YfWKO8y5.js";import{S as t}from"./Switch-C6H7-67b.js";import{F as m}from"./FormGroup-Bfvliaqb.js";import{F as l}from"./FormControlLabel-LXhN-eej.js";import{C as s}from"./CodeDialog-CpWyUB1H.js";import{G as r}from"./Grid2-B3gzDQ3y.js";import"./Paper-DYTAYSZ1.js";import"./Typography-CxjCbjeZ.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./SwitchBase-DtKwjBpU.js";import"./useFormControl-CdybHpQR.js";import"./useControlled-DdQeg7Rb.js";import"./formControlState-Dq1zat_P.js";import"./Tooltip-BtHUzaXN.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";const h=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(c,{checked:!0}),e.jsx(c,{}),e.jsx(c,{disabled:!0,defaultChecked:!0}),e.jsx(c,{disabled:!0})]}),u=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{}),e.jsx(t,{disabled:!0,defaultChecked:!0}),e.jsx(t,{disabled:!0})]}),p=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{children:[e.jsx(l,{control:e.jsx(t,{defaultChecked:!0}),label:"Label"}),e.jsx(l,{disabled:!0,control:e.jsx(t,{}),label:"Disabled"})]})}),j=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0,size:"small"}),e.jsx(t,{defaultChecked:!0})]}),f=()=>e.jsxs(i,{textAlign:"center",children:[e.jsx(t,{defaultChecked:!0}),e.jsx(t,{defaultChecked:!0,color:"secondary"}),e.jsx(t,{defaultChecked:!0,color:"error"}),e.jsx(t,{defaultChecked:!0,color:"warning"}),e.jsx(t,{defaultChecked:!0,color:"success"}),e.jsx(t,{defaultChecked:!0,color:"default"})]}),b=()=>e.jsx(i,{textAlign:"center",children:e.jsxs(m,{"aria-label":"position",row:!0,children:[e.jsx(l,{value:"top",control:e.jsx(t,{color:"primary"}),label:"Top",labelPlacement:"top"}),e.jsx(l,{value:"start",control:e.jsx(t,{color:"primary"}),label:"Start",labelPlacement:"start"}),e.jsx(l,{value:"bottom",control:e.jsx(t,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(l,{value:"end",control:e.jsx(t,{color:"primary"}),label:"End",labelPlacement:"end"})]})}),a=()=>e.jsx(e.Fragment,{children:e.jsx(s,{children:`
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
