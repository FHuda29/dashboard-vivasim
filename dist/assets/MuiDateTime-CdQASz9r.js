import{j as e,R as r}from"./index-q1gJB5H0.js";import{d as h}from"./dayjs.min-Cw2pHPCw.js";import{P as y}from"./ParentCard-BoIC9gk3.js";import{C as o}from"./ChildCard-CxfxNJXb.js";import{B as j}from"./Breadcrumb-Sx0jSoUO.js";import{P as f}from"./PageContainer-ShAoTXqo.js";import{C as m}from"./CodeDialog-BUiQRyz8.js";import{G as i}from"./Grid2-CqZBoIec.js";import{L as a,E as l}from"./AdapterDayjs-CWe19Hk9.js";import{M as T,D as k,T as D,r as s}from"./DateTimePicker-CBgUzDYG.js";import"./Paper-BfYJvf2K.js";import"./Typography-BxNQAu-e.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Box-DjbeIn6R.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";import"./useThemeProps-CrcxdbZ0.js";import"./InputAdornment-R8Z08I6l.js";import"./useFormControl-CXKl78CG.js";import"./TextField-jB7bX9P6.js";import"./Select-Be-xDOsD.js";import"./Menu-CI0qCauS.js";import"./Popover-B2Kr2jsd.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-02bNjKG-.js";import"./List-CdKlZLq8.js";import"./utils-iop7lDec.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-BbMb6ExL.js";import"./index-Cppacv_H.js";import"./Button-BiCTccas.js";import"./DialogActions-oMatEHlz.js";import"./ListItem-COsOw9eb.js";import"./listItemButtonClasses-CrDt3rgL.js";import"./Chip-J76kHj1Q.js";import"./Tabs-DNi_i87_.js";import"./KeyboardArrowRight-BYTEHBB3.js";import"./MenuItem-C7G2QaZb.js";import"./listItemTextClasses-BL7DomhZ.js";const P=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
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
