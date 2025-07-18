import{j as e,u as s,ak as d,an as m}from"./index-bBoaL7NX.js";import{B as u}from"./Breadcrumb-Db9PlBea.js";import{P as x}from"./PageContainer-ClH7HaBW.js";import{P as v}from"./ParentCard-CFe-nEgX.js";import{C as i}from"./ChildCard-BEYqypGE.js";import{I as n}from"./InlineItemCard-DX0UKbAN.js";import{C as c}from"./CodeDialog-75JXnHwL.js";import{G as o}from"./Grid2-CC46JW8y.js";import{C as a}from"./Chip-Bm7HxxC0.js";import{A as l}from"./Avatar-CUO15ytv.js";import{c as D}from"./createReactComponent-BVlLIvSm.js";import{I as p}from"./IconCheck-BZfyYi69.js";import"./Typography-B41TU7cT.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";var h=D("checks","IconChecks",[["path",{d:"M7 12l5 5l10 -10",key:"svg-0"}],["path",{d:"M2 12l5 5m5 -5l5 -5",key:"svg-1"}]]),r=D("mood-happy","IconMoodHappy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 9l.01 0",key:"svg-1"}],["path",{d:"M15 9l.01 0",key:"svg-2"}],["path",{d:"M8 13a4 4 0 1 0 8 0h-8",key:"svg-3"}]]);const C=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { Avatar, Chip}  from '@mui/material';
import { IconMoodHappy } from '@tabler/icons-react';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip avatar={<Avatar>M</Avatar>} label="Default Filled" />
    <Chip avatar={<Avatar>M</Avatar>} label="Default Deletable" onDelete={handleDelete} />
    <Chip avatar={<Avatar alt="Natacha" src={User1} />} label="Primary Filled" color="primary" />
    <Chip avatar={<Avatar alt="Natacha" src={User1} />} label="Primary Deletable" color="primary" onDelete={handleDelete} />
    <Chip icon={<IconMoodHappy />} label="Secondary Filled" color="secondary" />
    <Chip icon={<IconMoodHappy />} label="Secondary Deletable" color="secondary" onDelete={handleDelete} />
    <Chip avatar={<Avatar alt="Natacha" src={User2} />} label="Default Filled" color="success" />
    <Chip avatar={<Avatar alt="Natacha" src={User2} />} label="Default Deletable" color="success" onDelete={handleDelete} />
    <Chip icon={<IconMoodHappy />} label="Default Filled" color="warning" />
    <Chip icon={<IconMoodHappy />} label="Default Deletable" color="warning" onDelete={handleDelete} />
    <Chip avatar={<Avatar alt="Natacha" src={User3} />} label="Default Filled" color="error" />
    <Chip avatar={<Avatar alt="Natacha" src={User3} />} label="Default Deletable" color="error" onDelete={handleDelete} />
</InlineItemCard>`})}),j=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { 
Avatar, 
Chip, 
 }  from '@mui/material';
import { IconMoodHappy } from '@tabler/icons-react';

import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="Default Filled" />
    <Chip variant="outlined" avatar={<Avatar>M</Avatar>} label="Default Deletable" onDelete={handleDelete} />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User1} />} label="Default Filled" color="primary" />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User1} />} label="Default Deletable" color="primary" onDelete={handleDelete} />
    <Chip variant="outlined" icon={<IconMoodHappy />} label="Default Filled" color="secondary" />
    <Chip variant="outlined" icon={<IconMoodHappy />} label="Default Deletable" color="secondary" onDelete={handleDelete} />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User2} />} label="Default Filled" color="success" />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User2} />} label="Default Deletable" color="success" onDelete={handleDelete} />
    <Chip variant="outlined" icon={<IconMoodHappy />} label="Default Filled" color="warning" />
    <Chip variant="outlined" icon={<IconMoodHappy />} label="Default Deletable" color="warning" onDelete={handleDelete} />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User3} />} label="Default Filled" color="error" />
    <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={User3} />} label="Default Deletable" color="error" onDelete={handleDelete} />
</InlineItemCard>`})}),I=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { 
Avatar, 
Chip, 
 }  from '@mui/material';
import { 
IconCheck, 
IconChecks } from '@tabler/icons-react';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip
        label="Custom Icon" color="primary" avatar={<Avatar >M</Avatar>}
        onDelete={handleDelete}
        deleteIcon={<IconCheck width={20} />}
    />
    <Chip
        label="Custom Icon" color="secondary" avatar={<Avatar >S</Avatar>}
        onDelete={handleDelete}
        deleteIcon={<IconChecks width={20} />}
    />
</InlineItemCard>`})}),b=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { 
Avatar, 
Chip, 
 }  from '@mui/material';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip
        label="Custom Icon" color="primary" avatar={<Avatar >M</Avatar>}
        onDelete={handleDelete}
        deleteIcon={<IconCheck width={20} />}
    />
    <Chip
        label="Custom Icon" color="secondary" avatar={<Avatar >S</Avatar>}
        onDelete={handleDelete}
        deleteIcon={<IconChecks width={20} />}
    />
</InlineItemCard>`})}),f=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { 
Avatar, 
Chip, 
}  from '@mui/material';
import { IconMoodHappy } from '@tabler/icons-react';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip
        label="Custom Icon" disabled avatar={<Avatar >M</Avatar>}
        onDelete={handleDelete}
    />
    <Chip
        label="Custom Icon" color="primary" disabled avatar={<Avatar >S</Avatar>}
        onDelete={handleDelete}
    />
</InlineItemCard>`})}),y=()=>e.jsx(e.Fragment,{children:e.jsx(c,{children:`

import React from 'react';
import { 
Avatar, 
Chip, 
}  from '@mui/material';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip label="Small" size="small" color="primary" />
    <Chip label="Normal" color="primary" />
</InlineItemCard>`})}),A=[{to:"/",title:"Home"},{title:"Chip"}],xe=()=>{const t=()=>{console.info("You clicked the delete icon.")};return e.jsxs(x,{title:"Chip",description:"this is Chip page",children:[e.jsx(u,{title:"Chip",items:A}),e.jsx(v,{title:"Accordion",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{display:"flex",alignItems:"stretch",size:12,children:e.jsx(i,{title:"Filled",codeModel:e.jsx(C,{}),children:e.jsxs(n,{children:[e.jsx(a,{avatar:e.jsx(l,{children:"M"}),label:"Default Filled"}),e.jsx(a,{avatar:e.jsx(l,{children:"M"}),label:"Default Deletable",onDelete:t}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:s}),label:"Primary Filled",color:"primary"}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:s}),label:"Primary Deletable",color:"primary",onDelete:t}),e.jsx(a,{icon:e.jsx(r,{}),label:"Secondary Filled",color:"secondary"}),e.jsx(a,{icon:e.jsx(r,{}),label:"Secondary Deletable",color:"secondary",onDelete:t}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:d}),label:"Default Filled",color:"success"}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:d}),label:"Default Deletable",color:"success",onDelete:t}),e.jsx(a,{icon:e.jsx(r,{}),label:"Default Filled",color:"warning"}),e.jsx(a,{icon:e.jsx(r,{}),label:"Default Deletable",color:"warning",onDelete:t}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:m}),label:"Default Filled",color:"error"}),e.jsx(a,{avatar:e.jsx(l,{alt:"Natacha",src:m}),label:"Default Deletable",color:"error",onDelete:t})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:12,children:e.jsx(i,{title:"Outlined",codeModel:e.jsx(j,{}),children:e.jsxs(n,{children:[e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{children:"M"}),label:"Default Filled"}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{children:"M"}),label:"Default Deletable",onDelete:t}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:s}),label:"Default Filled",color:"primary"}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:s}),label:"Default Deletable",color:"primary",onDelete:t}),e.jsx(a,{variant:"outlined",icon:e.jsx(r,{}),label:"Default Filled",color:"secondary"}),e.jsx(a,{variant:"outlined",icon:e.jsx(r,{}),label:"Default Deletable",color:"secondary",onDelete:t}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:d}),label:"Default Filled",color:"success"}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:d}),label:"Default Deletable",color:"success",onDelete:t}),e.jsx(a,{variant:"outlined",icon:e.jsx(r,{}),label:"Default Filled",color:"warning"}),e.jsx(a,{variant:"outlined",icon:e.jsx(r,{}),label:"Default Deletable",color:"warning",onDelete:t}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:m}),label:"Default Filled",color:"error"}),e.jsx(a,{variant:"outlined",avatar:e.jsx(l,{alt:"Natacha",src:m}),label:"Default Deletable",color:"error",onDelete:t})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(i,{title:"Custom Icon",codeModel:e.jsx(I,{}),children:e.jsxs(n,{children:[e.jsx(a,{label:"Custom Icon",color:"primary",avatar:e.jsx(l,{children:"M"}),onDelete:t,deleteIcon:e.jsx(p,{width:20})}),e.jsx(a,{label:"Custom Icon",color:"secondary",avatar:e.jsx(l,{children:"S"}),onDelete:t,deleteIcon:e.jsx(h,{width:20})})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(i,{title:"Custom outlined Icon",codeModel:e.jsx(b,{}),children:e.jsxs(n,{children:[e.jsx(a,{label:"Custom Icon",variant:"outlined",color:"primary",avatar:e.jsx(l,{children:"M"}),onDelete:t,deleteIcon:e.jsx(p,{width:20})}),e.jsx(a,{label:"Custom Icon",variant:"outlined",color:"secondary",avatar:e.jsx(l,{children:"S"}),onDelete:t,deleteIcon:e.jsx(h,{width:20})})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(i,{title:"Disabled",codeModel:e.jsx(f,{}),children:e.jsxs(n,{children:[e.jsx(a,{label:"Custom Icon",disabled:!0,avatar:e.jsx(l,{children:"M"}),onDelete:t}),e.jsx(a,{label:"Custom Icon",color:"primary",disabled:!0,avatar:e.jsx(l,{children:"S"}),onDelete:t})]})})}),e.jsx(o,{display:"flex",alignItems:"stretch",size:{xs:12,sm:6},children:e.jsx(i,{title:"Sizes",codeModel:e.jsx(y,{}),children:e.jsxs(n,{children:[e.jsx(a,{label:"Small",size:"small",color:"primary"}),e.jsx(a,{label:"Normal",color:"primary"})]})})})]})})]})};export{xe as default};
