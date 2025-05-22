import{j as e,R as r}from"./index-pZ9xQgMg.js";import{d as h}from"./dayjs.min-BUQYz0iM.js";import{P as y}from"./ParentCard-BOCKQ1T0.js";import{C as o}from"./ChildCard-DmJvQqkh.js";import{B as j}from"./Breadcrumb-CRa5l2zq.js";import{P as f}from"./PageContainer-LYar8IhV.js";import{C as m}from"./CodeDialog-C4_8VgUE.js";import{G as i}from"./Grid2-TVAQUeLW.js";import{L as a,E as l}from"./AdapterDayjs-CAVTR1Lt.js";import{M as T,D as k,T as D,r as s}from"./DateTimePicker-Bj2eVM1Z.js";import"./Paper-Bglc4K2l.js";import"./Typography-PCIzasSl.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./Box-DgOhk5yP.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";import"./useThemeProps-BqIHZD4A.js";import"./InputAdornment-Cok-8s4Z.js";import"./useFormControl-D34Ydy4-.js";import"./TextField-52YJDDYc.js";import"./Select-KnVOJfU6.js";import"./Menu-kcqCS8x-.js";import"./Popover-ti3EBHaH.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D2utqxEY.js";import"./List-BgcNoc8S.js";import"./utils-iop7lDec.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-B2XRo0iR.js";import"./index--LJFdBrR.js";import"./Button-DrpnHyAw.js";import"./DialogActions-C0qeG3_n.js";import"./ListItem-BRiZmmS8.js";import"./listItemButtonClasses-CMZrXRsE.js";import"./Chip-F9KGUN77.js";import"./Tabs-DsknloEL.js";import"./KeyboardArrowRight-CDfWkglB.js";import"./MenuItem-BUpQ2083.js";import"./listItemTextClasses-B-a-vnZw.js";const P=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
"use client";
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

const [value3, setValue3] = React.useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <MobileDateTimePicker
    onChange={(newValue) => {
      setValue3(newValue)
    }}
    slotProps={{
      textField: {
        fullWidth: true,
        variant: 'outlined',
        size: 'small',
        inputProps: { 'aria-label': 'basic date picker' },
      },
    }}
    value={value3}
  />
</LocalizationProvider>
`})}),g=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
"use client";
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

const [value, setValue] = React.useState<Dayjs | null>(null);

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateTimePicker
    slotProps={{
      textField: {
        fullWidth: true,
        size: 'small',
        sx: {
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
          },
          "& .MuiFormHelperText-root": {
            display: "none",
          },
        },
      },
    }}
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider>
`})}),v=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
"use client";
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

const [value2, setValue2] = React.useState<Dayjs | null>(null);

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <TimePicker
    value={value2}
    onChange={(newValue) => {
      setValue2(newValue)
    }}
    viewRenderers={{
      hours: renderTimeViewClock,
      minutes: renderTimeViewClock,
      seconds: renderTimeViewClock,
    }}
    slotProps={{
      textField: {
        size: 'small',
        fullWidth: true,
        sx: {
          '& .MuiSvgIcon-root': {
            width: '18px',
            height: '18px',
          },
          '& .MuiFormHelperText-root': {
            display: 'none',
          },
        },
      },
    }}
  />
</LocalizationProvider>
`})}),M=[{to:"/",title:"Home"},{title:"Date Time"}],Se=()=>{const[p,d]=r.useState(null),[n,u]=r.useState(null),[c,x]=r.useState(h("2018-01-01T00:00:00.000Z"));return e.jsxs(f,{title:"Date Time",description:"this is Date Time page",children:[e.jsx(j,{title:"Date Picker",items:M}),e.jsx(y,{title:"Date Time",children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Basic",codeModel:e.jsx(P,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(T,{onChange:t=>{x(t)},slotProps:{textField:{fullWidth:!0,variant:"outlined",size:"small",inputProps:{"aria-label":"basic date picker"}}},value:c})})})}),e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Different Design",codeModel:e.jsx(g,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(k,{slotProps:{textField:{fullWidth:!0,size:"small",sx:{"& .MuiSvgIcon-root":{width:"18px",height:"18px"},"& .MuiFormHelperText-root":{display:"none"}}}},value:p,onChange:t=>{d(t)}})})})}),e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Timepicker",codeModel:e.jsx(v,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(D,{value:n,onChange:t=>{u(t)},viewRenderers:{hours:s,minutes:s,seconds:s},slotProps:{textField:{size:"small",fullWidth:!0,sx:{"& .MuiSvgIcon-root":{width:"18px",height:"18px"},"& .MuiFormHelperText-root":{display:"none"}}}}})})})})]})})]})};export{Se as default};
