import{j as e,R as r}from"./index-D0CpDmcp.js";import{d as h}from"./dayjs.min-DpnMW_Ss.js";import{P as y}from"./ParentCard-Dds6eSz-.js";import{C as o}from"./ChildCard-DYuC6c8b.js";import{B as j}from"./Breadcrumb-BVcp9-n_.js";import{P as f}from"./PageContainer-GyGJwSoy.js";import{C as m}from"./CodeDialog-CpWyUB1H.js";import{G as i}from"./Grid2-B3gzDQ3y.js";import{L as a,E as l}from"./AdapterDayjs-DJYDVAjX.js";import{M as T,D as k,T as D,r as s}from"./DateTimePicker-DlFCtEil.js";import"./Paper-DYTAYSZ1.js";import"./Typography-CxjCbjeZ.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Box-YfWKO8y5.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./useThemeProps-C4yCam4T.js";import"./InputAdornment-DuPHhOrK.js";import"./useFormControl-CdybHpQR.js";import"./TextField-BL7FkBIN.js";import"./Select-DUwfbIlc.js";import"./Menu-TWYswZS4.js";import"./Popover-BjLg-pXP.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-EoW_Nak3.js";import"./List-D2v3D0a6.js";import"./utils-iop7lDec.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-Ds0TTNG5.js";import"./index-DKADSP89.js";import"./Button-CgUWpLWI.js";import"./DialogActions-BY2nf59b.js";import"./ListItem-iLSysLFS.js";import"./listItemButtonClasses-BtQuqwdQ.js";import"./Chip-C2vBKMax.js";import"./Tabs-uYDhHmt8.js";import"./KeyboardArrowRight-DiTjW17E.js";import"./MenuItem-CuGaY2Hq.js";import"./listItemTextClasses-IyJ_HmtO.js";const P=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
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
