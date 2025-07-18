import{j as t,R as d}from"./index-bBoaL7NX.js";import{B as h}from"./Breadcrumb-Db9PlBea.js";import{P as m}from"./PageContainer-ClH7HaBW.js";import{P as p}from"./ParentCard-CFe-nEgX.js";import{C as r}from"./ChildCard-BEYqypGE.js";import{C as l}from"./CodeDialog-75JXnHwL.js";import{G as e}from"./Grid2-CC46JW8y.js";import{S as s}from"./Stack-DONMPCRZ.js";import{A as i}from"./Alert-CbLSE_hz.js";import{A as n}from"./AlertTitle-DH5tgRjf.js";import{B as c}from"./Button-2ihUhOt_.js";import{C as u}from"./Collapse-glysblWZ.js";import{I as x}from"./IconButton-6ozhzS-w.js";import{I as f}from"./IconX-CaRO0p4G.js";import"./Typography-B41TU7cT.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";import"./createStack-D5Eniu1T.js";import"./Close-BajIXLAg.js";import"./CircularProgress-BIjyWvHZ.js";const j=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`

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
</Button>`})}),T=[{to:"/",title:"Home"},{title:"Alert"}],jt=()=>{const[a,o]=d.useState(!0);return t.jsxs(m,{title:"Alert",description:"this is Alert page",children:[t.jsx(h,{title:"Alert",items:T}),t.jsx(p,{title:"Alert",children:t.jsxs(e,{container:!0,spacing:3,children:[t.jsx(e,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Filled",codeModel:t.jsx(j,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(i,{variant:"filled",severity:"error",children:"This is an error alert — check it out!"}),t.jsx(i,{variant:"filled",severity:"warning",children:"This is a warning alert — check it out!"}),t.jsx(i,{variant:"filled",severity:"info",children:"This is an info alert — check it out!"}),t.jsx(i,{variant:"filled",severity:"success",children:"This is a success alert — check it out!"})]})})}),t.jsx(e,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Outlined",codeModel:t.jsx(v,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(i,{variant:"outlined",severity:"error",children:"This is an error alert — check it out!"}),t.jsx(i,{variant:"outlined",severity:"warning",children:"This is a warning alert — check it out!"}),t.jsx(i,{variant:"outlined",severity:"info",children:"This is an info alert — check it out!"}),t.jsx(i,{variant:"outlined",severity:"success",children:"This is a success alert — check it out!"})]})})}),t.jsx(e,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Description",codeModel:t.jsx(A,{}),children:t.jsxs(s,{spacing:1,children:[t.jsxs(i,{variant:"filled",severity:"error",children:[t.jsx(n,{children:"Error"}),"This is an error alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(i,{variant:"filled",severity:"warning",children:[t.jsx(n,{children:"Warning"}),"This is a warning alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(i,{variant:"filled",severity:"info",children:[t.jsx(n,{children:"Info"}),"This is an info alert — ",t.jsx("strong",{children:"check it out!"})]}),t.jsxs(i,{variant:"filled",severity:"success",children:[t.jsx(n,{children:"Success"}),"This is a success alert — ",t.jsx("strong",{children:"check it out!"})]})]})})}),t.jsx(e,{display:"flex",alignItems:"stretch",size:12,children:t.jsx(r,{title:"Action",codeModel:t.jsx(g,{}),children:t.jsxs(s,{spacing:1,children:[t.jsx(i,{variant:"filled",severity:"warning",children:"This is a success alert — check it out!"}),t.jsx(i,{variant:"filled",severity:"info",action:t.jsx(c,{color:"inherit",size:"small",children:"UNDO"}),children:"This is a success alert — check it out!"})]})})}),t.jsx(e,{display:"flex",alignItems:"stretch",size:12,children:t.jsxs(r,{title:"Transition",codeModel:t.jsx(k,{}),children:[t.jsx(s,{spacing:1,children:t.jsx(u,{in:a,children:t.jsx(i,{variant:"filled",severity:"info",sx:{mb:1},action:t.jsx(x,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{o(!1)},children:t.jsx(f,{width:20})}),children:"Close me!"})})}),t.jsx(c,{disabled:a,variant:"contained",onClick:()=>{o(!0)},children:"Re-open"})]})})]})})]})};export{jt as default};
