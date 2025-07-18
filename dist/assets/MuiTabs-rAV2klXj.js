import{j as e,r as p}from"./index-bBoaL7NX.js";import{B as T}from"./Breadcrumb-Db9PlBea.js";import{P as g}from"./PageContainer-ClH7HaBW.js";import{P as I}from"./ParentCard-CFe-nEgX.js";import{C as r}from"./ChildCard-BEYqypGE.js";import{C as h}from"./CodeDialog-75JXnHwL.js";import{G as o}from"./Grid2-CC46JW8y.js";import{T as s,a as C,b as m}from"./TabPanel-zikNw7c8.js";import{B as i}from"./Box-Cbtftx36.js";import{a as b,T as u}from"./Tabs-C6ldO0TN.js";import{D as f}from"./Divider-4e_Zm7wz.js";import{I as j}from"./IconPhone-BjX1-yas.js";import{I as B}from"./IconHeart-CZoZfsKJ.js";import{I as c}from"./IconUser-CmQELfGj.js";import"./Typography-B41TU7cT.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useThemeProps-BKqztWfv.js";import"./composeClasses-O3bfDh63.js";import"./debounce-Be36O1Ab.js";import"./KeyboardArrowRight-BUHflnHK.js";import"./dividerClasses-D6e-UzmO.js";const w=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:`

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
</TabContext>`})}),V=[{to:"/",title:"Home"},{title:"Tabs"}],t=[{value:"1",icon:e.jsx(j,{width:20,height:20}),label:"Item One",disabled:!1},{value:"2",icon:e.jsx(B,{width:20,height:20}),label:"Item Two",disabled:!1},{value:"3",icon:e.jsx(c,{width:20,height:20}),label:"Item Three",disabled:!0}],v=[{value:"1",icon:e.jsx(c,{width:20,height:20}),label:"Item 1"},{value:"2",icon:e.jsx(c,{width:20,height:20}),label:"Item 2"},{value:"3",icon:e.jsx(c,{width:20,height:20}),label:"Item 3"},{value:"4",icon:e.jsx(c,{width:20,height:20}),label:"Item 4"},{value:"5",icon:e.jsx(c,{width:20,height:20}),label:"Item 5"},{value:"6",icon:e.jsx(c,{width:20,height:20}),label:"Item 6"},{value:"7",icon:e.jsx(c,{width:20,height:20}),label:"Item 7"}],Le=()=>{const[l,x]=p.useState("1"),n=(a,d)=>{x(d)};return e.jsxs(g,{title:"Tabs",description:"this is Tabs page",children:[e.jsx(T,{title:"Tabs",items:V}),e.jsx(I,{title:"Tabs",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Text",codeModel:e.jsx(w,{}),children:e.jsxs(s,{value:l,children:[e.jsx(i,{children:e.jsx(C,{onChange:n,"aria-label":"lab API tabs example",children:t.map((a,d)=>e.jsx(b,{label:a.label,value:String(d+1)},a.value))})}),e.jsx(f,{}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map((a,d)=>e.jsx(m,{value:String(d+1),children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon",codeModel:e.jsx(P,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon with Label",codeModel:e.jsx(O,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Bottom",codeModel:e.jsx(y,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"bottom",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Left",codeModel:e.jsx(M,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"start",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Icon Right",codeModel:e.jsx(L,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",children:t.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"end",value:a.value,disabled:a.disabled},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:t.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Scrollable",codeModel:e.jsx(A,{}),children:e.jsxs(s,{value:l,children:[e.jsx(u,{value:l,onChange:n,"aria-label":"icon tabs example",variant:"scrollable",scrollButtons:"auto",children:v.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"top",value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",mt:2,children:v.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(r,{title:"Vertical",codeModel:e.jsx(R,{}),children:e.jsx(s,{value:l,children:e.jsxs(i,{width:"100%",gap:2,display:"flex",flexGrow:1,sx:{height:224},children:[e.jsx(u,{value:l,orientation:"vertical",onChange:n,variant:"scrollable",scrollButtons:"auto",children:v.map(a=>e.jsx(b,{icon:a.icon,label:a.label,iconPosition:"top",value:a.value},a.value))}),e.jsx(i,{bgcolor:"grey.200",width:"100%",children:v.map(a=>e.jsx(m,{value:a.value,children:a.label},a.value))})]})})})})]})})]})};export{Le as default};
