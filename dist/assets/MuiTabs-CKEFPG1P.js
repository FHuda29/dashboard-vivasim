import{j as e,r as p}from"./index-q1gJB5H0.js";import{B as T}from"./Breadcrumb-Sx0jSoUO.js";import{P as g}from"./PageContainer-ShAoTXqo.js";import{P as I}from"./ParentCard-BoIC9gk3.js";import{C as r}from"./ChildCard-CxfxNJXb.js";import{C as h}from"./CodeDialog-BUiQRyz8.js";import{G as o}from"./Grid2-CqZBoIec.js";import{T as s,a as C,b as m}from"./TabPanel-DlHclGzd.js";import{B as i}from"./Box-DjbeIn6R.js";import{a as b,T as u}from"./Tabs-DNi_i87_.js";import{D as f}from"./Divider-D_QCNZIA.js";import{I as j}from"./IconPhone-C6PJ-DCh.js";import{I as B}from"./IconHeart-CGEbkYoM.js";import{I as c}from"./IconUser-ByAeGoNd.js";import"./Typography-BxNQAu-e.js";import"./Paper-BfYJvf2K.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";import"./useThemeProps-CrcxdbZ0.js";import"./composeClasses-O3bfDh63.js";import"./debounce-Be36O1Ab.js";import"./KeyboardArrowRight-BYTEHBB3.js";import"./dividerClasses-BBaEuH8O.js";const w=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Box>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            {COMMON_TAB.map((tab, index) => (
                <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
            ))}
        </TabList>
    </Box>
    <Divider />
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel, index) => (
            <TabPanel key={panel.value} value={String(index + 1)}>
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>
`})}),P=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        {COMMON_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} value={tab.value} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>
`})}),O=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        {COMMON_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} value={tab.value} disabled={tab.disabled} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`})}),y=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        {COMMON_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="bottom" value={tab.value} disabled={tab.disabled} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`})}),M=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        {COMMON_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="start" value={tab.value} disabled={tab.disabled} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`})}),L=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const COMMON_TAB = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Item One', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Item Two', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item Three', disabled: true }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        {COMMON_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="end" value={tab.value} disabled={tab.disabled} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {COMMON_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`})}),A=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const SCROLLABLE_TAB = [
  { value: '1', icon: <IconUser width={20} height={20} />, label: 'Item 1' },
  { value: '2', icon: <IconUser width={20} height={20} />, label: 'Item 2' },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item 3' },
  { value: '4', icon: <IconUser width={20} height={20} />, label: 'Item 4' },
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Item 5' },
  { value: '6', icon: <IconUser width={20} height={20} />, label: 'Item 6' },
  { value: '7', icon: <IconUser width={20} height={20} />, label: 'Item 7' }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" variant="scrollable" scrollButtons="auto">
        {SCROLLABLE_TAB.map((tab) => (
            <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="top" value={tab.value} />
        ))}
    </Tabs>
    <Box bgcolor="grey.200" mt={2}>
        {SCROLLABLE_TAB.map((panel) => (
            <TabPanel key={panel.value} value={panel.value} >
                {panel.label}
            </TabPanel>
        ))}
    </Box>
</TabContext>`})}),R=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

import React from 'react';
import {Box, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";

const SCROLLABLE_TAB = [
  { value: '1', icon: <IconUser width={20} height={20} />, label: 'Item 1' },
  { value: '2', icon: <IconUser width={20} height={20} />, label: 'Item 2' },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Item 3' },
  { value: '4', icon: <IconUser width={20} height={20} />, label: 'Item 4' },
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Item 5' },
  { value: '6', icon: <IconUser width={20} height={20} />, label: 'Item 6' },
  { value: '7', icon: <IconUser width={20} height={20} />, label: 'Item 7' }
];

const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
    <Box width="100%" gap={2} display="flex" flexGrow={1}
    sx={{ height: 224 }}
    >
        <Tabs value={value} orientation="vertical" onChange={handleChange} variant="scrollable" scrollButtons="auto">
            {SCROLLABLE_TAB.map((tab) => (
                <Tab key={tab.value} icon={tab.icon} label={tab.label} iconPosition="top" value={tab.value} />
            ))}
        </Tabs>
        <Box bgcolor="grey.200" width="100%">
            {SCROLLABLE_TAB.map((panel) => (
                <TabPanel key={panel.value} value={panel.value} >
                    {panel.label}
                </TabPanel>
            ))}
        </Box>
    </Box>
</TabContext>`})}),V=[{to:"/",title:"Home"},{title:"Tabs"}],t=[{value:"1",icon:e.jsx(j,{width:20,height:20}),label:"Item One",disabled:!1},{value:"2",icon:e.jsx(B,{width:20,height:20}),label:"Item Two",disabled:!1},{value:"3",icon:e.jsx(c,{width:20,height:20}),label:"Item Three",disabled:!0}],v=[{value:"1",icon:e.jsx(c,{width:20,height:20}),label:"Item 1"},{value:"2",icon:e.jsx(c,{width:20,height:20}),label:"Item 2"},{value:"3",icon:e.jsx(c,{width:20,height:20}),label:"Item 3"},{value:"4",icon:e.jsx(c,{width:20,height:20}),label:"Item 4"},{value:"5",icon:e.jsx(c,{width:20,height:20}),label:"Item 5"},{value:"6",icon:e.jsx(c,{width:20,height:20}),label:"Item 6"},{value:"7",icon:e.jsx(c,{width:20,height:20}),label:"Item 7"}],Oe=()=>{const[l,x]=p.useState("1"),n=(a,d)=>{x(d)};return e.jsxs(g,{title:"Tabs",description:"this is Tabs page",children:[e.jsx(T,{title:"Tabs",items:V}),e.jsx(I,{title:"Tabs",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Text",codeModel:e.jsx(w,{}),children:e.jsxs(s,{value:l,children:[e.jsx(i,{children:e.jsx(C,{onChange:n,"aria-label":"lab API tabs example",children:t.map((a,d)=>e.jsx(b,{label:a.label,value:String(d+1)},a.value))})}),e.jsx(f,{}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map((a,d)=>e.jsx(m,{value:String(d+1),children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon",codeModel:e.jsx(P,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon with Label",codeModel:e.jsx(O,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Bottom",codeModel:e.jsx(y,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"bottom",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Left",codeModel:e.jsx(M,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"start",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Right",codeModel:e.jsx(L,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"end",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Scrollable",codeModel:e.jsx(A,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",variant:"scrollable",scrollButtons:"auto",children:v.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"top",value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:v.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Vertical",codeModel:e.jsx(R,{}),children:e.jsx(s,{value:l,children:e.jsxs(i,{width:"100%",gap:2,display:"flex",flexGrow:1,sx:{height:224},children:[e.jsx(u,{value:l,orientation:"vertical",onChange:n,variant:"scrollable",scrollButtons:"auto",children:v.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"top",value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",width:"100%",children:v.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})})})]})})]})};export{Oe as default};
