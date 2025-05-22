import{j as e,R as u}from"./index-pZ9xQgMg.js";import{P as b}from"./ParentCard-BOCKQ1T0.js";import{C as r}from"./ChildCard-DmJvQqkh.js";import{B as S}from"./Breadcrumb-CRa5l2zq.js";import{P as C}from"./PageContainer-LYar8IhV.js";import{I as c,C as y}from"./CustomRangeSlider-CSXMc4Dp.js";import{C as p}from"./CustomSlider-DU4LUisN.js";import{C as l}from"./CodeDialog-C4_8VgUE.js";import{G as t}from"./Grid2-TVAQUeLW.js";import{B as o}from"./Box-DgOhk5yP.js";import{T as x}from"./Typography-PCIzasSl.js";import{I as h}from"./IconVolume-xEOCxO4c.js";import{S as a,a as V}from"./Slider-Bdm_m8is.js";import{S as v}from"./Stack-DuXFRM8_.js";import"./Paper-Bglc4K2l.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";import"./visuallyHidden-Dan1xhjv.js";import"./isHostComponent-DVu5iVWx.js";import"./createStack-BEzwOkyd.js";const R=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
    borderRadius: '9px',
  },
}));

<CustomSlider defaultValue={[30]}  />
`})}),k=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";
import React from "react";
import { Slider } from '@mui/material';
import { IconVolume, IconVolume2 } from '@tabler/icons-react';
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';


const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
    borderRadius: '9px',
  },
}));

const [value, setValue] = React.useState(30);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);

 <Stack direction="row" spacing={1}>
    <IconVolume2 width={20} />
    <Slider aria-label="Volume" value={value} onChange={handleChange} />
    <IconVolume width={20} />
  </Stack>
`})}),w=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { SliderValueLabelProps } from '@mui/material/Slider';
import {SliderThumb} from '@mui/material/Slider';

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
    borderRadius: '9px',
  },
}));

function AirbnbThumbComponent(props: SliderValueLabelProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
}

<CustomRangeSlider
    slots={{ thumb: AirbnbThumbComponent }}
    getAriaLabel={(index: any) => (index === 0 ? 'Minimum price' : 'Maximum price')}
    defaultValue={[20, 40]}
/>
`})}),M=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";
import * as React from 'react';
import { Slider } from '@mui/material';

<Slider defaultValue={30}  />
`})}),I=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";
import * as React from 'react';
import { Slider } from '@mui/material';

<Slider disabled defaultValue={30}  />
`})}),T=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";

import { Slider } from '@mui/material';

const valuetext = (value: any) => {value}°C;

<Slider
    aria-label="Temperature"
    defaultValue={30}
    getAriaValueText={valuetext}
    valueLabelDisplay="auto"
    step={10}
    marks
    min={10}
    max={110}
/>
`})}),D=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:`
"use client";
import React from 'react';
import { Slider } from '@mui/material';

  function valuetext2(value: any) {
  return {value}°C;
}

  const [value2, setValue2] = React.useState([20, 37]);
  const handleChange2 = (event2: any, newValue2: any) => {
    setValue2(newValue2);
  };

<Slider
    getAriaLabel={() => 'Temperature range'}
    value={value2}
    onChange={handleChange2}
    valueLabelDisplay="auto"
    getAriaValueText={valuetext2}
/>
`})}),A=[{to:"/",title:"Home"},{title:"Slider"}],B=i=>`${i}°C`;function L(i){return`${i}°C`}function z(i){const{children:s,...m}=i;return e.jsxs(V,{...m,children:[s,e.jsx(o,{sx:{height:9,width:"2px",backgroundColor:"#fff"}}),e.jsx(o,{sx:{height:"14px",width:"2px",backgroundColor:"#fff",ml:"2px"}}),e.jsx(o,{sx:{height:9,width:"2px",backgroundColor:"#fff",ml:"2px"}})]})}const Me=()=>{const[i,s]=u.useState(30),m=(d,n)=>{s(n)},[g,f]=u.useState([20,37]),j=(d,n)=>{f(n)};return e.jsxs(C,{title:"Slider",description:"this is Slider page",children:[e.jsx(S,{title:"Slider",items:A}),e.jsx(b,{title:"Slider",children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Custom",codeModel:e.jsx(R,{}),children:e.jsx(p,{defaultValue:[30]})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsxs(r,{title:"Volume",codeModel:e.jsx(k,{}),children:[e.jsx(p,{defaultValue:30,"aria-label":"volume slider"}),e.jsxs(o,{display:"flex",alignItems:"center",children:[e.jsx(x,{children:e.jsx(c,{width:20})}),e.jsx(o,{ml:"auto",children:e.jsx(x,{children:e.jsx(h,{width:20})})})]})]})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Range",codeModel:e.jsx(w,{}),children:e.jsx(y,{slots:{thumb:z},getAriaLabel:d=>d===0?"Minimum price":"Maximum price",defaultValue:[20,40]})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Default",codeModel:e.jsx(M,{}),children:e.jsx(a,{defaultValue:30})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Disabled",codeModel:e.jsx(I,{}),children:e.jsx(a,{disabled:!0,defaultValue:30})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Volume",children:e.jsxs(v,{direction:"row",spacing:1,children:[e.jsx(c,{width:20}),e.jsx(a,{"aria-label":"Volume",value:i,onChange:m}),e.jsx(h,{width:20})]})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Discrete",codeModel:e.jsx(T,{}),children:e.jsx(a,{"aria-label":"Temperature",defaultValue:30,getAriaValueText:B,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})})}),e.jsx(t,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(r,{title:"Range Default",codeModel:e.jsx(D,{}),children:e.jsx(a,{getAriaLabel:()=>"Temperature range",value:g,onChange:j,valueLabelDisplay:"auto",getAriaValueText:L})})})]})})]})};export{Me as default};
