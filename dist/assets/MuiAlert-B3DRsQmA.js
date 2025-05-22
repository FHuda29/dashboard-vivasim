import{j as t,R as d}from"./index-pZ9xQgMg.js";import{B as h}from"./Breadcrumb-CRa5l2zq.js";import{P as m}from"./PageContainer-LYar8IhV.js";import{P as p}from"./ParentCard-BOCKQ1T0.js";import{C as r}from"./ChildCard-DmJvQqkh.js";import{C as l}from"./CodeDialog-C4_8VgUE.js";import{G as i}from"./Grid2-TVAQUeLW.js";import{S as s}from"./Stack-DuXFRM8_.js";import{A as e}from"./Alert-XWH1BSQm.js";import{A as n}from"./AlertTitle-B1O65Vwq.js";import{B as c}from"./Button-DrpnHyAw.js";import{C as u}from"./Collapse-CFRsUQCt.js";import{I as x}from"./IconButton-D8l5j-3s.js";import{I as f}from"./IconX-BfampwNM.js";import"./Typography-PCIzasSl.js";import"./Paper-Bglc4K2l.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Box-DgOhk5yP.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./toConsumableArray-CR4CeRJN.js";import"./createStack-BEzwOkyd.js";import"./Close-tbN14BDi.js";import"./CircularProgress-KhQwCvJ5.js";const j=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

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
