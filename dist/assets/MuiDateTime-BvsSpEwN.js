import{j as e,R as r}from"./index-bBoaL7NX.js";import{d as h}from"./dayjs.min-Qg-qDEGo.js";import{P as y}from"./ParentCard-CFe-nEgX.js";import{C as o}from"./ChildCard-BEYqypGE.js";import{B as j}from"./Breadcrumb-Db9PlBea.js";import{P as f}from"./PageContainer-ClH7HaBW.js";import{C as m}from"./CodeDialog-75JXnHwL.js";import{G as i}from"./Grid2-CC46JW8y.js";import{L as a,E as l}from"./AdapterDayjs-CEFnBEu2.js";import{M as T,D as k,T as D,r as s}from"./DateTimePicker-BQ6AvDAF.js";import"./Paper-CEo52ZYq.js";import"./Typography-B41TU7cT.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Box-Cbtftx36.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useThemeProps-BKqztWfv.js";import"./InputAdornment-DDw9KCxJ.js";import"./useFormControl-CaUBXsoR.js";import"./TextField-CNoxaAXv.js";import"./Select-x3FgNbWv.js";import"./Menu-DsMCwLnz.js";import"./Popover-BZ_q2ihg.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-9a9CFyBb.js";import"./List-BNgu_2yQ.js";import"./utils-iop7lDec.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-BPBqqdCO.js";import"./index-CRYcqtBZ.js";import"./Button-2ihUhOt_.js";import"./DialogActions-r0byN1sA.js";import"./ListItem-C2JIZIoS.js";import"./listItemButtonClasses-BlC_oHqs.js";import"./Chip-Bm7HxxC0.js";import"./Tabs-C6ldO0TN.js";import"./KeyboardArrowRight-BUHflnHK.js";import"./MenuItem-DBmnqxHM.js";import"./listItemTextClasses-DSEuY2ct.js";const P=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
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
`})}),M=[{to:"/",title:"Home"},{title:"Date Time"}],He=()=>{const[p,d]=r.useState(null),[n,u]=r.useState(null),[c,x]=r.useState(h("2018-01-01T00:00:00.000Z"));return e.jsxs(f,{title:"Date Time",description:"this is Date Time page",children:[e.jsx(j,{title:"Date Picker",items:M}),e.jsx(y,{title:"Date Time",children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Basic",codeModel:e.jsx(P,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(T,{onChange:t=>{x(t)},slotProps:{textField:{fullWidth:!0,variant:"outlined",size:"small",inputProps:{"aria-label":"basic date picker"}}},value:c})})})}),e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Different Design",codeModel:e.jsx(g,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(k,{slotProps:{textField:{fullWidth:!0,size:"small",sx:{"& .MuiSvgIcon-root":{width:"18px",height:"18px"},"& .MuiFormHelperText-root":{display:"none"}}}},value:p,onChange:t=>{d(t)}})})})}),e.jsx(i,{display:"flex",alignItems:"stretch",size:{xs:12,lg:6,sm:6},children:e.jsx(o,{title:"Timepicker",codeModel:e.jsx(v,{}),children:e.jsx(a,{dateAdapter:l,children:e.jsx(D,{value:n,onChange:t=>{u(t)},viewRenderers:{hours:s,minutes:s,seconds:s},slotProps:{textField:{size:"small",fullWidth:!0,sx:{"& .MuiSvgIcon-root":{width:"18px",height:"18px"},"& .MuiFormHelperText-root":{display:"none"}}}}})})})})]})})]})};export{He as default};
