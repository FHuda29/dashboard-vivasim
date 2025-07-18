import{j as e,R as h}from"./index-bBoaL7NX.js";import{P as u}from"./ParentCard-CFe-nEgX.js";import{C as s}from"./ChildCard-BEYqypGE.js";import{B as x}from"./Breadcrumb-Db9PlBea.js";import{P as b}from"./PageContainer-ClH7HaBW.js";import{C as a}from"./CustomRadio-_WsXvSYG.js";import{B as d}from"./Box-Cbtftx36.js";import{F as n}from"./FormControlLabel-qTc2OSFR.js";import{R as l}from"./Radio-GSiGeisI.js";import{R as g}from"./RadioGroup-COzkG0Xs.js";import{C as p}from"./CodeDialog-75JXnHwL.js";import{G as c}from"./Grid2-CC46JW8y.js";import"./Paper-CEo52ZYq.js";import"./Typography-B41TU7cT.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CaUBXsoR.js";import"./SwitchBase-DqWPx54W.js";import"./useControlled-B6T_fxKa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-BgKtfLA5.js";import"./FormGroup-CsISzJoH.js";import"./Tooltip-CRAcMsX-.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";const k=()=>e.jsxs(d,{textAlign:"center",children:[e.jsx(n,{value:"end",control:e.jsx(a,{color:"primary",checked:!0}),label:"Primary",labelPlacement:"end"}),e.jsx(n,{value:"end",control:e.jsx(a,{color:"secondary",checked:!0}),label:"Secondary",labelPlacement:"end"}),e.jsx(n,{value:"end",control:e.jsx(a,{color:"success",checked:!0}),label:"Success",labelPlacement:"end"}),e.jsx(n,{value:"end",control:e.jsx(a,{color:"error",checked:!0}),label:"Danger",labelPlacement:"end"}),e.jsx(n,{value:"end",control:e.jsx(a,{color:"warning",checked:!0}),label:"Warning",labelPlacement:"end"})]}),C=()=>{const[t,i]=h.useState(!0),r=o=>{i(o.target.checked)};return e.jsxs(d,{textAlign:"center",children:[e.jsx(l,{checked:t,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),e.jsx(l,{disabled:!0,inputProps:{"aria-label":"disabled checked checkbox"}}),e.jsx(l,{color:"default",inputProps:{"aria-label":"checkbox with default color"}})]})},R=()=>{const[t,i]=h.useState(!0),r=o=>{i(o.target.checked)};return e.jsxs(d,{textAlign:"center",children:[e.jsx(l,{checked:t,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),e.jsx(l,{checked:t,onChange:r,color:"secondary",inputProps:{"aria-label":"primary checkbox"}}),e.jsx(l,{checked:t,onChange:r,inputProps:{"aria-label":"primary checkbox"},sx:{color:o=>o.palette.success.main,"&.Mui-checked":{color:o=>o.palette.success.main}}}),e.jsx(l,{checked:t,onChange:r,inputProps:{"aria-label":"primary checkbox"},sx:{color:o=>o.palette.error.main,"&.Mui-checked":{color:o=>o.palette.error.main}}}),e.jsx(l,{checked:t,onChange:r,inputProps:{"aria-label":"primary checkbox"},sx:{color:o=>o.palette.warning.main,"&.Mui-checked":{color:o=>o.palette.warning.main}}})]})},f=()=>{const[t,i]=h.useState("a"),r=m=>{i(m.target.value)},o=m=>({checked:t===m,onChange:r,value:m,name:"size-radio-button-demo",inputProps:{"aria-label":m}});return e.jsxs(d,{textAlign:"center",children:[e.jsx(l,{...o("a"),size:"small"}),e.jsx(l,{...o("b")}),e.jsx(l,{...o("c"),sx:{"& .MuiSvgIcon-root":{fontSize:28}}})]})},j=()=>{const[t,i]=h.useState(!0),r=o=>{i(o.target.checked)};return e.jsxs(d,{textAlign:"center",children:[e.jsx(a,{checked:t,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),e.jsx(a,{disabled:!0,inputProps:{"aria-label":"disabled checked checkbox"}}),e.jsx(a,{checked:!t,inputProps:{"aria-label":"checkbox with default color"}})]})},y=()=>e.jsx(d,{textAlign:"center",children:e.jsxs(g,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[e.jsx(n,{value:"top",control:e.jsx(a,{}),label:"Top",labelPlacement:"top"}),e.jsx(n,{value:"start",control:e.jsx(a,{}),label:"Start",labelPlacement:"start"}),e.jsx(n,{value:"bottom",control:e.jsx(a,{}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(n,{value:"end",control:e.jsx(a,{}),label:"End"})]})}),P=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'block',
    width: 21,
    height: 21,
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'radial-gradient({theme.palette.background.paper},{theme.palette.background.paper} 28%,transparent 32%)'
        : 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
}));

function CustomRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon
          sx={{
            backgroundColor: props.color ? '{props.color}.main' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const [checked, setChecked] = React.useState(true);

const handleChange = (event: any) => {
    setChecked(event.target.checked);
};

<Box textAlign="center">
    <CustomRadio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <CustomRadio disabled inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
    <CustomRadio
        checked={!checked}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
    />
</Box>`})}),B=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";

import { Box, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'block',
    width: 21,
    height: 21,
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'radial-gradient({theme.palette.background.paper},{theme.palette.background.paper} 28%,transparent 32%)'
        : 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
}));

function CustomRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon
          sx={{
            backgroundColor: props.color ? '{props.color}.main' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}


<Box textAlign="center">
    <FormControlLabel
        value="end"
        control={<CustomRadio color="primary" checked />}
        label="Primary"
        labelPlacement="end"
    />
    <FormControlLabel
        value="end"
        control={<CustomRadio color="secondary" checked />}
        label="Secondary"
        labelPlacement="end"
    />
    <FormControlLabel
        value="end"
        control={<CustomRadio color="success" checked />}
        label="Success"
        labelPlacement="end"
    />
    <FormControlLabel
        value="end"
        control={<CustomRadio color="error" checked />}
        label="Danger"
        labelPlacement="end"
    />
    <FormControlLabel
        value="end"
        control={<CustomRadio color="warning" checked />}
        label="Warning"
        labelPlacement="end"
    />
</Box>`})}),v=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";
import React from 'react';
import { Box, Radio } from '@mui/material';

const [checked, setChecked] = React.useState(true);

const handleChange = (event: any) => {
    setChecked(event.target.checked);
};

<Box textAlign="center">
    <Radio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <Radio disabled inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
    <Radio color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
</Box>`})}),S=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";

import React from 'react';
import { Box, Radio } from '@mui/material';

const [checked, setChecked] = React.useState(true);

const handleChange = (event: any) => {
    setChecked(event.target.checked);
};

<Box textAlign="center">
    <Radio
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <Radio
        checked={checked}
        onChange={handleChange}
        color="secondary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <Radio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        sx={{
            color: (theme) => theme.palette.success.main,
            '&.Mui-checked': {
                color: (theme) => theme.palette.success.main,
            },
        }}
    />
    <Radio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        sx={{
            color: (theme) => theme.palette.error.main,
            '&.Mui-checked': {
                color: (theme) => theme.palette.error.main,
            },
        }}
    />
    <Radio
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        sx={{
            color: (theme) => theme.palette.warning.main,
            '&.Mui-checked': {
                color: (theme) => theme.palette.warning.main,
            },
        }}
    />
</Box>`})}),I=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";
import React from 'react';
import { Box, Radio } from '@mui/material';

const [selectedValue, setSelectedValue] = React.useState('a');
const handleChange2 = (event: any) => {
    setSelectedValue(event.target.value);
};
    
const controlProps = (item: any) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
});

<Box textAlign="center">
    <Radio {...controlProps('a')} size="small" />
    <Radio {...controlProps('b')} />
    <Radio
        {...controlProps('c')}
        sx={{
            '& .MuiSvgIcon-root': {
                fontSize: 28,
            },
        }}
    />
</Box>`})}),w=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`
"use client";

import { Box, RadioGroup, FormControlLabel  } from '@mui/material';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'block',
    width: 21,
    height: 21,
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'radial-gradient({theme.palette.background.paper},{theme.palette.background.paper} 28%,transparent 32%)'
        : 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
}));

function CustomRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon
          sx={{
            backgroundColor: props.color ? '{props.color}.main' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

<Box textAlign="center">
    <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="top" control={<CustomRadio />} label="Top" labelPlacement="top" />
        <FormControlLabel
            value="start"
            control={<CustomRadio />}
            label="Start"
            labelPlacement="start"
        />
        <FormControlLabel
            value="bottom"
            control={<CustomRadio />}
            label="Bottom"
            labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<CustomRadio />} label="End" />
    </RadioGroup>
</Box>
`})}),F=[{to:"/",title:"Home"},{title:"Radio"}],ve=()=>e.jsxs(b,{title:"Radio",description:"this is Radio page",children:[e.jsx(x,{title:"Radio",items:F}),e.jsx(u,{title:"Radio",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Custom",codeModel:e.jsx(P,{}),children:e.jsx(j,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Color with Label",codeModel:e.jsx(B,{}),children:e.jsx(k,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Default",codeModel:e.jsx(v,{}),children:e.jsx(C,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Default Colors",codeModel:e.jsx(S,{}),children:e.jsx(R,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Sizes",codeModel:e.jsx(I,{}),children:e.jsx(f,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(s,{title:"Position",codeModel:e.jsx(w,{}),children:e.jsx(y,{})})})]})})]});export{ve as default};
