import{j as t,R as d}from"./index-q1gJB5H0.js";import{B as h}from"./Breadcrumb-Sx0jSoUO.js";import{P as m}from"./PageContainer-ShAoTXqo.js";import{P as p}from"./ParentCard-BoIC9gk3.js";import{C as r}from"./ChildCard-CxfxNJXb.js";import{C as l}from"./CodeDialog-BUiQRyz8.js";import{G as i}from"./Grid2-CqZBoIec.js";import{S as s}from"./Stack-Cgjz-K8z.js";import{A as e}from"./Alert-Bdc-5zR2.js";import{A as n}from"./AlertTitle-BylDBrZn.js";import{B as c}from"./Button-BiCTccas.js";import{C as u}from"./Collapse-BgHX-Q2_.js";import{I as x}from"./IconButton-Dqm0TkKE.js";import{I as f}from"./IconX-yCQnq4t0.js";import"./Typography-BxNQAu-e.js";import"./Paper-BfYJvf2K.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Box-DjbeIn6R.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./toConsumableArray-Do5hVaHU.js";import"./createStack-B9LP_pb5.js";import"./Close-D9Qbw5x7.js";import"./CircularProgress-C7fJ-WBe.js";const j=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

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
