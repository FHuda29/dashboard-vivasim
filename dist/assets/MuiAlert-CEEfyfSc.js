import{j as t,R as d}from"./index-D0CpDmcp.js";import{B as h}from"./Breadcrumb-BVcp9-n_.js";import{P as m}from"./PageContainer-GyGJwSoy.js";import{P as p}from"./ParentCard-Dds6eSz-.js";import{C as r}from"./ChildCard-DYuC6c8b.js";import{C as l}from"./CodeDialog-CpWyUB1H.js";import{G as i}from"./Grid2-B3gzDQ3y.js";import{S as s}from"./Stack-Br4H6Iex.js";import{A as e}from"./Alert-GQVafBkl.js";import{A as n}from"./AlertTitle-DNa6p8Mg.js";import{B as c}from"./Button-CgUWpLWI.js";import{C as u}from"./Collapse-CPW_rnE6.js";import{I as x}from"./IconButton-BxWHF3Dm.js";import{I as f}from"./IconX-BqO6wXIF.js";import"./Typography-CxjCbjeZ.js";import"./Paper-DYTAYSZ1.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Box-YfWKO8y5.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./toConsumableArray-CKS5ILGl.js";import"./createStack-D1qoiK_y.js";import"./Close-DI9m-hsf.js";import"./CircularProgress-DwEGvCDN.js";const j=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

import React from 'react';
import {
  Stack,
  Alert,
} from "@mui/material";

<Stack spacing={1}>
    <Alert variant="filled" severity="error">
        This is an error alert — check it out!
    </Alert>
    <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
    </Alert>
    <Alert variant="filled" severity="info">
        This is an info alert — check it out!
    </Alert>
    <Alert variant="filled" severity="success">
        This is a success alert — check it out!
    </Alert>
</Stack>`})}),v=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

import React from 'react';
import {
  Stack,
  Alert,
} from "@mui/material";

<Stack spacing={1}>
    <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
    </Alert>
</Stack>`})}),A=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

import React from 'react';
import {
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";

<Stack spacing={1}>
    <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
    </Alert>
    <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
    </Alert>
    <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
    </Alert>
    <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
    </Alert>
</Stack>`})}),g=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

import React from 'react';
import {
  Stack,
  Button,
  Alert,
} from "@mui/material";

<Stack spacing={1}>
    <Alert variant="filled" severity="warning">
        This is a success alert — check it out!
    </Alert>
    <Alert
        variant="filled"
        severity="info"
        action={
            <Button color="inherit" size="small">
                UNDO
            </Button>
        }
    >
        This is a success alert — check it out!
    </Alert>
</Stack>`})}),k=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

import * as React from 'react';
import {
  Stack,
  Button,
  IconButton,
  Collapse,
  Alert,
} from "@mui/material";

<Stack spacing={1}>
    <Collapse in={open}>
        <Alert
            variant="filled"
            severity="info"
            sx={{ mb: 1 }}
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <IconX width={20} />
                </IconButton>
            }
        >
            Close me!
        </Alert>
    </Collapse>
</Stack>
<Button
    disabled={open}
    variant="contained"
    onClick={() => {
        setOpen(true);
    }}
>
    Re-open
</Button>`})}),T=[{to:"/",title:"Home"},{title:"Alert"}],ut=()=>{const[a,o]=d.useState(!0);return t.jsxs(m,{title:"Alert",description:"this is Alert page",children:[t.jsx(h,{title:"Alert",items:T}),t.jsx(p,{title:"Alert",children:t.jsxs(i,{container:!0,spacing:3,children:[t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Filled",codeModel:t.jsx(j,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(e,{variant:"filled",severity:"error",children:"This is an error alert — check it out!"}),t.jsx(e,{variant:"filled",severity:"warning",children:"This is a warning alert — check it out!"}),t.jsx(e,{variant:"filled",severity:"info",children:"This is an info alert — check it out!"}),t.jsx(e,{variant:"filled",severity:"success",children:"This is a success alert — check it out!"})]})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Outlined",codeModel:t.jsx(v,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(e,{variant:"outlined",severity:"error",children:"This is an error alert — check it out!"}),t.jsx(e,{variant:"outlined",severity:"warning",children:"This is a warning alert — check it out!"}),t.jsx(e,{variant:"outlined",severity:"info",children:"This is an info alert — check it out!"}),t.jsx(e,{variant:"outlined",severity:"success",children:"This is a success alert — check it out!"})]})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Description",codeModel:t.jsx(A,{}),children:t.jsxs(s,{spacing:1,children:[t.jsxs(e,{variant:"filled",severity:"error",children:[t.jsx(n,{children:"Error"}),"This is an error alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(e,{variant:"filled",severity:"warning",children:[t.jsx(n,{children:"Warning"}),"This is a warning alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(e,{variant:"filled",severity:"info",children:[t.jsx(n,{children:"Info"}),"This is an info alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(e,{variant:"filled",severity:"success",children:[t.jsx(n,{children:"Success"}),"This is a success alert — ",t.jsx("strong",{children:"check it out!"})]})]})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Action",codeModel:t.jsx(g,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(e,{variant:"filled",severity:"warning",children:"This is a success alert — check it out!"}),t.jsx(e,{variant:"filled",severity:"info",action:t.jsx(c,{color:"inherit",size:"small",children:"UNDO"}),children:"This is a success alert — check it out!"})]})})}),t.jsx(i,{display:"flex",alignItems:"stretch",size:12,children:t.jsxs(r,{title:"Transition",codeModel:t.jsx(k,{}),children:[t.jsx(s,{spacing:1,children:t.jsx(u,{in:a,children:t.jsx(e,{variant:"filled",severity:"info",sx:{mb:1},action:t.jsx(x,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{o(!1)},children:t.jsx(f,{width:20})}),children:"Close me!"})})}),t.jsx(c,{disabled:a,variant:"contained",onClick:()=>{o(!0)},children:"Re-open"})]})})]})})]})};export{ut as default};
