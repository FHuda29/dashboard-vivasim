import{R as E,j as e,u as b,ak as u,al as y,an as T,am as S,ao as A,aj as V,bC as H,bD as O,bE as $,bF as q}from"./index-bBoaL7NX.js";import{B as N}from"./Breadcrumb-Db9PlBea.js";import{P as W}from"./PageContainer-ClH7HaBW.js";import{P as F}from"./ParentCard-CFe-nEgX.js";import{B as f}from"./BlankCard-BfHU7njI.js";import{T as I}from"./TableContainer-OLbhJ7zr.js";import{T as k,a as w,b as h,c as t,d as B}from"./TableRow-Zqkg4FIQ.js";import{T as i}from"./Typography-B41TU7cT.js";import{S as p}from"./Stack-DONMPCRZ.js";import{A as j}from"./Avatar-CUO15ytv.js";import{B as m}from"./Box-Cbtftx36.js";import{A as D}from"./AvatarGroup-BMLabPjz.js";import{C as v}from"./Chip-Bm7HxxC0.js";import{I as P}from"./IconButton-6ozhzS-w.js";import{I as G}from"./IconDotsVertical-2Bwo94K3.js";import{M}from"./Menu-DsMCwLnz.js";import{M as c}from"./MenuItem-DBmnqxHM.js";import{L as d}from"./ListItemIcon-c_QwcXcb.js";import{I as L}from"./IconPlus-BRrLNseT.js";import{I as z}from"./IconEdit-BUB-FThl.js";import{I as R}from"./IconTrash-B1FRgie-.js";import{I as X}from"./IconCircle-RJ076v1n.js";import{I as J}from"./IconClock-BOxNGwFz.js";import{I as U}from"./IconDots-CTaTwbyr.js";import{I as K}from"./IconCheck-BZfyYi69.js";import{I as Q}from"./IconX-CaRO0p4G.js";import{I as Y}from"./IconArrowBackUp-BRAuOfCy.js";import{L as Z}from"./LinearProgress-DqUUSQPl.js";import{b as _}from"./tableData-Bph-hNPP.js";import{C as ee}from"./CodeDialog-75JXnHwL.js";import{G as g}from"./Grid2-CC46JW8y.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useId-BgKtfLA5.js";import"./CircularProgress-BIjyWvHZ.js";import"./createReactComponent-BVlLIvSm.js";import"./Popover-BZ_q2ihg.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./getReactElementRef-bhjrj0fa.js";import"./mergeSlotProps-9a9CFyBb.js";import"./Modal-B5yRmzaP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-PELJNkOL.js";import"./List-BNgu_2yQ.js";import"./listItemTextClasses-DSEuY2ct.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./Popper-ppbRY3WN.js";import"./DialogContent-BJGxlzU1.js";import"./DialogTitle-37dVBM_z.js";import"./toConsumableArray-CNii3AtI.js";import"./isMuiElement-CYEUdTOG.js";const ae=[{status:"active",avatar:b,name:"Olivia Rhye",project:"Xtreme admin",percent:60,users:[{img:b},{img:u}]},{status:"cancel",avatar:u,name:"Barbara Steele",project:"Adminpro admin",percent:30,users:[{img:b},{img:u},{img:y}]},{status:"active",avatar:y,name:"Leonard Gordon",project:"Monster admin",percent:45,users:[{img:y},{img:u}]},{status:"pending",avatar:S,name:"Evelyn Pope",project:"Materialpro admin",percent:37,users:[{img:b},{img:u},{img:T}]},{status:"cancel",avatar:T,name:"Tommy Garza",project:"Elegant admin",percent:87,users:[{img:T},{img:A}]},{status:"pending",avatar:A,name:"Isabel Vasquez",project:"Modernize admin",percent:32,users:[{img:u},{img:S}]}],te=()=>{const[l,o]=E.useState(null),s=!!l,x=a=>{o(a.currentTarget)},n=()=>{o(null)};return e.jsx(f,{children:e.jsx(I,{children:e.jsxs(k,{"aria-label":"simple table",children:[e.jsx(w,{children:e.jsxs(h,{children:[e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"User"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Project Name"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Users"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Status"})}),e.jsx(t,{})]})}),e.jsx(B,{children:ae.map(a=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(t,{children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(j,{src:a.avatar,alt:a.avatar,sx:{width:42,height:42}}),e.jsx(m,{children:e.jsx(i,{variant:"h6",children:a.name})})]})}),e.jsx(t,{scope:"row",children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:a.project})}),e.jsx(t,{children:e.jsx(D,{sx:{justifyContent:"start"},children:a.users.map((r,C)=>e.jsx(j,{src:r.img,alt:r.img,sx:{width:35,height:35}},C))})}),e.jsx(t,{children:e.jsx(v,{label:a.status,sx:{backgroundColor:a.status=="active"?r=>r.palette.primary.light:a.status=="cancel"?r=>r.palette.error.light:r=>r.palette.success.light,color:a.status=="active"?r=>r.palette.primary.main:a.status=="cancel"?r=>r.palette.error.main:r=>r.palette.success.main}})}),e.jsxs(t,{children:[e.jsx(P,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:x,children:e.jsx(G,{width:18})}),e.jsxs(M,{id:"basic-menu",anchorEl:l,open:s,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(L,{width:18})}),"Add"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(z,{width:18})}),"Edit"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(R,{width:18})}),"Delete"]})]})]})]},a.name))})]})})})},re=[{status:"active",avatar:b,tag:"rhye",cname:"Olivia Rhye",email:"olivia@ui.com",teams:[{name:"Design",bgcolor:"primary.main"},{name:"Product",bgcolor:"secondary.main"}]},{status:"offline",avatar:u,tag:"steele",cname:"Barbara Steele",email:"steele@ui.com",teams:[{name:"Product",bgcolor:"secondary.main"},{name:"Operations",bgcolor:"error.main"}]},{status:"active",avatar:y,tag:"gordon",cname:"Leonard Gordon",email:"olivia@ui.com",teams:[{name:"Finance",bgcolor:"primary.main"},{name:"Customer Success",bgcolor:"success.main"}]},{status:"offline",avatar:S,tag:"pope",cname:"Evelyn Pope",email:"steele@ui.com",teams:[{name:"Operations",bgcolor:"error.main"},{name:"Design",bgcolor:"primary.main"}]},{status:"active",avatar:T,tag:"garza",cname:"Tommy Garza",email:"olivia@ui.com",teams:[{name:"Product",bgcolor:"secondary.main"}]},{status:"active",avatar:A,tag:"vasquez",cname:"Isabel Vasquez",email:"steele@ui.com",teams:[{name:"Customer Success",bgcolor:"success.main"}]}],se=()=>{const[l,o]=E.useState(null),s=!!l,x=a=>{o(a.currentTarget)},n=()=>{o(null)};return e.jsx(f,{children:e.jsx(I,{children:e.jsxs(k,{"aria-label":"simple table",children:[e.jsx(w,{children:e.jsxs(h,{children:[e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Customer"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Status"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Email Address"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Teams"})}),e.jsx(t,{})]})}),e.jsx(B,{children:re.map(a=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(t,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(j,{src:a.avatar,alt:a.avatar,sx:{width:42,height:42}}),e.jsxs(m,{children:[e.jsx(i,{variant:"h6",children:a.cname}),e.jsxs(i,{variant:"subtitle1",color:"textSecondary",children:["@",a.tag]})]})]})}),e.jsx(t,{children:e.jsx(v,{label:a.status,size:"small",icon:a.status=="active"?e.jsx(X,{width:14}):e.jsx(J,{width:14}),sx:{backgroundColor:a.status=="active"?r=>r.palette.success.light:r=>r.palette.grey[100],color:a.status=="active"?r=>r.palette.success.main:r=>r.palette.grey[500],".MuiChip-icon":{color:"inherit !important"}}})}),e.jsx(t,{children:e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:a.email})}),e.jsx(t,{scope:"row",children:e.jsx(p,{direction:"row",spacing:1,children:a.teams.map((r,C)=>e.jsx(v,{label:r.name,sx:{backgroundColor:r.bgcolor,color:"white",fontSize:"11px"},size:"small"},C))})}),e.jsxs(t,{children:[e.jsx(P,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:x,children:e.jsx(U,{width:18})}),e.jsxs(M,{id:"basic-menu",anchorEl:l,open:s,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(L,{width:18})}),"Add"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(z,{width:18})}),"Edit"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(R,{width:18})}),"Delete"]})]})]})]},a.cname))})]})})})},ie=[{no:3066,status:"paid",avatar:b,cname:"Olivia Rhye",email:"olivia@ui.com",percent:60},{no:3067,status:"cancelled",avatar:u,cname:"Barbara Steele",email:"steele@ui.com",percent:30},{no:3068,status:"paid",avatar:y,cname:"Leonard Gordon",email:"olivia@ui.com",percent:45},{no:3069,status:"refunded",avatar:S,cname:"Evelyn Pope",email:"steele@ui.com",percent:37},{no:3070,status:"cancelled",avatar:T,cname:"Tommy Garza",email:"olivia@ui.com",percent:87},{no:3071,status:"refunded",avatar:A,cname:"Isabel Vasquez",email:"steele@ui.com",percent:32}],le=()=>{const[l,o]=E.useState(null),s=!!l,x=a=>{o(a.currentTarget)},n=()=>{o(null)};return e.jsx(f,{children:e.jsx(I,{children:e.jsxs(k,{"aria-label":"simple table",children:[e.jsx(w,{children:e.jsxs(h,{children:[e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Invoice"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Status"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Customer"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Progress"})}),e.jsx(t,{})]})}),e.jsx(B,{children:ie.map(a=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(t,{scope:"row",children:e.jsxs(i,{variant:"subtitle1",color:"textPrimary",fontWeight:600,children:["INV-",a.no]})}),e.jsx(t,{children:e.jsx(v,{label:a.status,icon:a.status=="paid"?e.jsx(K,{width:16}):a.status=="cancelled"?e.jsx(Q,{width:16}):e.jsx(Y,{width:16}),sx:{backgroundColor:a.status=="paid"?r=>r.palette.primary.light:a.status=="cancelled"?r=>r.palette.error.light:r=>r.palette.secondary.light,color:a.status=="paid"?r=>r.palette.primary.main:a.status=="cancelled"?r=>r.palette.error.main:r=>r.palette.secondary.main,".MuiChip-icon":{color:"inherit !important"}}})}),e.jsx(t,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(j,{src:a.avatar,alt:a.avatar,sx:{width:42,height:42}}),e.jsxs(m,{children:[e.jsx(i,{variant:"h6",children:a.cname}),e.jsx(i,{variant:"subtitle1",color:"textSecondary",children:a.email})]})]})}),e.jsx(t,{children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(m,{width:"100%",children:e.jsx(Z,{variant:"determinate",value:a.percent,color:"primary"})}),e.jsxs(i,{variant:"subtitle2",color:"textSecondary",children:[a.percent,"%"]})]})}),e.jsxs(t,{children:[e.jsx(P,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:x,children:e.jsx(G,{width:18})}),e.jsxs(M,{id:"basic-menu",anchorEl:l,open:s,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(L,{width:18})}),"Add"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(z,{width:18})}),"Edit"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(R,{width:18})}),"Delete"]})]})]})]},a.no))})]})})})},ne=[{status:"active",avatar:V,users:"4300",title:"Top Authors",subtitle:"Successful Fellas",teams:[{name:"Angular",bgcolor:"error.light",textcolor:"error.main"},{name:"PHP",bgcolor:"primary.light",textcolor:"primary.main"}]},{status:"offline",avatar:H,users:"1200",title:"Popular Authors",subtitle:"Most Successful",teams:[{name:"Bootstrap",bgcolor:"primary.light",textcolor:"primary.main"}]},{status:"active",avatar:O,users:"2000",title:"New Users",subtitle:"Awesome Users",teams:[{name:"Reactjs",bgcolor:"success.light",textcolor:"success.main"},{name:"Angular",bgcolor:"error.light",textcolor:"error.main"}]},{status:"offline",avatar:$,users:"1500",title:"Active Customers",subtitle:"Best Customers",teams:[{name:"Bootstrap",bgcolor:"primary.light",textcolor:"primary.main"}]},{status:"active",avatar:q,users:"9500",title:"Bestseller Theme",subtitle:"Amazing Templates",teams:[{name:"Angular",bgcolor:"error.light",textcolor:"error.main"},{name:"Reactjs",bgcolor:"success.light",textcolor:"success.main"}]}],oe=()=>{const[l,o]=E.useState(null),s=!!l,x=a=>{o(a.currentTarget)},n=()=>{o(null)};return e.jsx(f,{children:e.jsx(I,{children:e.jsxs(k,{"aria-label":"simple table",children:[e.jsx(w,{children:e.jsxs(h,{children:[e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Authors"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Courses"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Users"})}),e.jsx(t,{})]})}),e.jsx(B,{children:ne.map(a=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(t,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(j,{src:a.avatar,alt:a.avatar,variant:"rounded",sx:{width:42,height:42}}),e.jsxs(m,{children:[e.jsx(i,{variant:"subtitle1",fontWeight:600,children:a.title}),e.jsx(i,{variant:"subtitle2",color:"textSecondary",children:a.subtitle})]})]})}),e.jsx(t,{children:e.jsx(p,{direction:"row",spacing:1,children:a.teams.map((r,C)=>e.jsx(v,{label:r.name,sx:{backgroundColor:r.bgcolor,color:r.textcolor,fontSize:"11px"},size:"small"},C))})}),e.jsx(t,{children:e.jsxs(i,{variant:"subtitle1",color:"textSecondary",children:[a.users," Users"]})}),e.jsxs(t,{children:[e.jsx(P,{id:"basic-button","aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:x,children:e.jsx(U,{width:18})}),e.jsxs(M,{id:"basic-menu",anchorEl:l,open:s,onClose:n,MenuListProps:{"aria-labelledby":"basic-button"},children:[e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(L,{width:18})}),"Add"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(z,{width:18})}),"Edit"]}),e.jsxs(c,{onClick:n,children:[e.jsx(d,{children:e.jsx(R,{width:18})}),"Delete"]})]})]})]},a.title))})]})})})},ce=_,de=()=>e.jsx(f,{children:e.jsx(I,{children:e.jsxs(k,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[e.jsx(w,{children:e.jsxs(h,{children:[e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Users"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Project Name"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Team"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Status"})}),e.jsx(t,{children:e.jsx(i,{variant:"h6",children:"Budget"})})]})}),e.jsx(B,{children:ce.map(l=>{var o;return e.jsxs(h,{children:[e.jsx(t,{children:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(j,{src:l.imgsrc,alt:l.imgsrc,sx:{width:35}}),e.jsxs(m,{children:[e.jsx(i,{variant:"h6",fontWeight:"600",children:l.name}),e.jsx(i,{color:"textSecondary",variant:"subtitle2",children:l.post})]})]})}),e.jsx(t,{children:e.jsx(i,{color:"textSecondary",variant:"h6",fontWeight:400,children:l.pname})}),e.jsx(t,{children:e.jsx(p,{direction:"row",children:e.jsx(D,{max:4,children:(o=l.teams)==null?void 0:o.map(s=>e.jsx(j,{sx:{bgcolor:s.color,width:35,height:35},children:s.text},s.id))})})}),e.jsx(t,{children:e.jsx(v,{sx:{bgcolor:l.status==="Active"?s=>s.palette.success.light:l.status==="Pending"?s=>s.palette.warning.light:l.status==="Completed"?s=>s.palette.primary.light:l.status==="Cancel"?s=>s.palette.error.light:s=>s.palette.secondary.light,color:l.status==="Active"?s=>s.palette.success.main:l.status==="Pending"?s=>s.palette.warning.main:l.status==="Completed"?s=>s.palette.primary.main:l.status==="Cancel"?s=>s.palette.error.main:s=>s.palette.secondary.main,borderRadius:"8px"},size:"small",label:l.status})}),e.jsx(t,{children:e.jsxs(i,{variant:"h6",children:["$",l.budget,"k"]})})]},l.id)})})]})})}),me=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{children:`
import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  LinearProgress,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Box, Stack
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import img6 from 'src/assets/images/profile/user-6.jpg';
import {
  IconArrowBackUp,
  IconCheck,
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react';


interface rowsType {
  no: number;
  status: string;
  avatar: string;
  cname: string;
  email: string;
  percent: number;
}

const rows: rowsType[] = [
  {
    no: 3066,
    status: 'paid',
    avatar: img1,
    cname: 'Olivia Rhye',
    email: 'olivia@ui.com',
    percent: 60,
  },
  {
    no: 3067,
    status: 'cancelled',
    avatar: img2,
    cname: 'Barbara Steele',
    email: 'steele@ui.com',
    percent: 30,
  },
  {
    no: 3068,
    status: 'paid',
    avatar: img3,
    cname: 'Leonard Gordon',
    email: 'olivia@ui.com',
    percent: 45,
  },
  {
    no: 3069,
    status: 'refunded',
    avatar: img4,
    cname: 'Evelyn Pope',
    email: 'steele@ui.com',
    percent: 37,
  },
  {
    no: 3070,
    status: 'cancelled',
    avatar: img5,
    cname: 'Tommy Garza',
    email: 'olivia@ui.com',
    percent: 87,
  },
  {
    no: 3071,
    status: 'refunded',
    avatar: img6,
    cname: 'Isabel Vasquez',
    email: 'steele@ui.com',
    percent: 32,
  },
];

const Table1 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Invoice</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Customer</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Progress</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope="row">
                  <Typography variant="subtitle1" color="textPrimary" fontWeight={600}>
                    INV-{row.no}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    icon={
                      row.status == 'paid' ? (
                        <IconCheck width={16} />
                      ) : row.status == 'cancelled' ? (
                        <IconX width={16} />
                      ) : (
                        <IconArrowBackUp width={16} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        row.status == 'paid'
                          ? (theme) => theme.palette.primary.light
                          : row.status == 'cancelled'
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.secondary.light,
                      color:
                        row.status == 'paid'
                          ? (theme) => theme.palette.primary.main
                          : row.status == 'cancelled'
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.secondary.main,
                      '.MuiChip-icon': {
                        color: 'inherit !important',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={row.avatar} alt={row.avatar} sx={{ width: 42, height: 42 }} />
                    <Box>
                      <Typography variant="h6">{row.cname}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box width="100%">
                      <LinearProgress variant="determinate" value={row.percent} color="primary" />
                    </Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      {row.percent}%
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <IconDotsVertical width={18} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconPlus width={18} />
                      </ListItemIcon>
                      Add
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default Table1;

`})}),he=[{to:"/",title:"Home"},{title:"Basic Table"}],wa=()=>e.jsxs(W,{title:"Basic Table",description:"this is Basic Table page",children:[e.jsx(N,{title:"Basic Table",items:he}),e.jsx(F,{title:"Basic Table",codeModel:e.jsx(me,{}),children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{size:12,children:e.jsx(m,{children:e.jsx(de,{})})}),e.jsx(g,{size:12,children:e.jsx(m,{children:e.jsx(te,{})})}),e.jsx(g,{size:12,children:e.jsx(m,{children:e.jsx(se,{})})}),e.jsx(g,{size:12,children:e.jsx(m,{children:e.jsx(le,{})})}),e.jsx(g,{size:12,children:e.jsx(m,{children:e.jsx(oe,{})})})]})})]});export{wa as default};
