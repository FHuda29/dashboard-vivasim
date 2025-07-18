import{R as s,j as e}from"./index-bBoaL7NX.js";import{B as w}from"./Breadcrumb-Db9PlBea.js";import{P as L}from"./PageContainer-ClH7HaBW.js";import{P as W}from"./ParentCard-CFe-nEgX.js";import{C as m}from"./ChildCard-BEYqypGE.js";import{B as i}from"./Button-2ihUhOt_.js";import{T as S}from"./Typography-B41TU7cT.js";import{D as u,a as C}from"./DialogContent-BJGxlzU1.js";import{D as g}from"./DialogTitle-37dVBM_z.js";import{L as B}from"./List-BNgu_2yQ.js";import{L as D}from"./ListItemButton-CJvS5VrH.js";import{L as y}from"./ListItemAvatar-BzYTapqD.js";import{A as k}from"./Avatar-CUO15ytv.js";import{I as R}from"./IconUser-CmQELfGj.js";import{L as T}from"./ListItemText-CPg0R90h.js";import{I as M}from"./IconPlus-BRrLNseT.js";import{D as f}from"./DialogContentText-DDmGEIgI.js";import{D as j}from"./DialogActions-r0byN1sA.js";import{S as O}from"./Slide-Dqs0O3C8.js";import{C as P}from"./CustomTextField-nzkQUDrv.js";import{B as I}from"./Box-Cbtftx36.js";import{A as G}from"./AppBar-D0emTHN5.js";import{T as E}from"./Toolbar-BWjUcWdc.js";import{I as z}from"./IconButton-6ozhzS-w.js";import{I as U}from"./IconX-CaRO0p4G.js";import{D as V}from"./Divider-4e_Zm7wz.js";import{C as q}from"./CustomSelect-_oosuc7Q.js";import{C as Q}from"./CustomSwitch-CTfrjYux.js";import{F as X}from"./FormControl-BPBqqdCO.js";import{I as H}from"./TextField-CNoxaAXv.js";import{M as x}from"./MenuItem-DBmnqxHM.js";import{F as J}from"./FormControlLabel-qTc2OSFR.js";import{S as Y}from"./Stack-DONMPCRZ.js";import{u as $}from"./index-CRYcqtBZ.js";import{u as K}from"./Paper-CEo52ZYq.js";import{C as p}from"./CodeDialog-75JXnHwL.js";import{G as d}from"./Grid2-CC46JW8y.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./CardContent-TrRQSIz8.js";import"./useId-BgKtfLA5.js";import"./CircularProgress-BIjyWvHZ.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-PELJNkOL.js";import"./utils-fXVEFgwU.js";import"./getReactElementRef-bhjrj0fa.js";import"./listItemButtonClasses-BlC_oHqs.js";import"./listItemTextClasses-DSEuY2ct.js";import"./debounce-Be36O1Ab.js";import"./dividerClasses-D6e-UzmO.js";import"./Select-x3FgNbWv.js";import"./Menu-DsMCwLnz.js";import"./Popover-BZ_q2ihg.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-DbIyLDOd.js";import"./mergeSlotProps-9a9CFyBb.js";import"./utils-iop7lDec.js";import"./useControlled-B6T_fxKa.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CaUBXsoR.js";import"./Switch-DpyDSQj6.js";import"./SwitchBase-DqWPx54W.js";import"./isMuiElement-CYEUdTOG.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./useThemeProps-BUO-Zg8Q.js";import"./Tooltip-CRAcMsX-.js";import"./Popper-ppbRY3WN.js";import"./toConsumableArray-CNii3AtI.js";const b=["JohnDeo@gmail.com","SmithRocky@gmail.com"],N=()=>{const[l,t]=s.useState(!1),[n,o]=s.useState(b[1]),c=()=>{t(!0)},a=r=>{t(!1),o(r)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"primary",fullWidth:!0,onClick:c,children:"Open Simple Dialog"}),e.jsxs(S,{variant:"subtitle1",component:"div",mb:1,textAlign:"center",children:["Selected: ",n]}),e.jsxs(u,{onClose:()=>a(n),open:l,children:[e.jsx(g,{children:"Set backup account"}),e.jsxs(B,{sx:{pt:0},children:[b.map(r=>e.jsxs(D,{onClick:()=>a(r),children:[e.jsx(y,{children:e.jsx(k,{sx:{bgcolor:"primary.light",color:"primary.main"},children:e.jsx(R,{width:20,height:20})})}),e.jsx(T,{primary:r})]},r)),e.jsxs(D,{autoFocus:!0,onClick:()=>a("addAccount"),children:[e.jsx(y,{children:e.jsx(k,{children:e.jsx(M,{width:20,height:20})})}),e.jsx(T,{primary:"Add account"})]})]})]})]})},Z=()=>{const[l,t]=s.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"secondary",fullWidth:!0,onClick:n,children:"Open Alert Dialog"}),e.jsxs(u,{open:l,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(g,{id:"alert-dialog-title",children:"Use Google's location service?"}),e.jsx(C,{children:e.jsx(f,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(j,{children:[e.jsx(i,{color:"error",onClick:o,children:"Disagree"}),e.jsx(i,{onClick:o,autoFocus:!0,children:"Agree"})]})]})]})},_=s.forwardRef(function(t,n){return e.jsx(O,{direction:"up",ref:n,...t})}),ee=()=>{const[l,t]=s.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"success",fullWidth:!0,onClick:n,children:"Open Transition Dialog"}),e.jsxs(u,{open:l,TransitionComponent:_,keepMounted:!0,onClose:o,"aria-describedby":"alert-dialog-slide-description",children:[e.jsx(g,{children:"Use Google's location service?"}),e.jsx(C,{children:e.jsx(f,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(j,{children:[e.jsx(i,{color:"error",onClick:o,children:"Disagree"}),e.jsx(i,{onClick:o,children:"Agree"})]})]})]})},te=()=>{const[l,t]=s.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"warning",fullWidth:!0,onClick:n,children:"Open Form Dialog"}),e.jsxs(u,{open:l,onClose:o,children:[e.jsx(g,{children:"Subscribe"}),e.jsxs(C,{children:[e.jsx(f,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(I,{mt:2,children:e.jsx(P,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})})]}),e.jsxs(j,{children:[e.jsx(i,{color:"error",onClick:o,children:"Cancel"}),e.jsx(i,{onClick:o,children:"Subscribe"})]})]})]})},oe=s.forwardRef(function(t,n){return e.jsx(O,{direction:"up",ref:n,...t})}),ne=()=>{const[l,t]=s.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"error",fullWidth:!0,onClick:n,children:"Open Fullscreen Dialog"}),e.jsxs(u,{fullScreen:!0,open:l,onClose:o,TransitionComponent:oe,children:[e.jsx(G,{sx:{position:"relative"},children:e.jsxs(E,{children:[e.jsx(z,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",children:e.jsx(U,{width:24,height:24})}),e.jsx(S,{ml:2,flex:1,variant:"h6",component:"div",children:"Sound"}),e.jsx(i,{autoFocus:!0,color:"inherit",onClick:o,children:"Save"})]})}),e.jsxs(B,{children:[e.jsx(D,{children:e.jsx(T,{primary:"Phone ringtone",secondary:"Titania"})}),e.jsx(V,{}),e.jsx(D,{children:e.jsx(T,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})},ie=()=>{const[l,t]=s.useState(!1),[n,o]=s.useState(!0),[c,a]=s.useState("sm"),r=()=>{t(!0)},h=()=>{t(!1)},F=v=>{a(v.target.value)},A=v=>{o(v.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"primary",fullWidth:!0,onClick:r,children:"Open Maxwidth Dialog"}),e.jsxs(u,{fullWidth:n,maxWidth:c,open:l,onClose:h,children:[e.jsx(g,{children:"Optional sizes"}),e.jsxs(C,{children:[e.jsx(f,{children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(I,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[e.jsxs(X,{sx:{mt:2,minWidth:120},children:[e.jsx(H,{htmlFor:"max-width",children:"maxWidth"}),e.jsxs(q,{autoFocus:!0,value:c,onChange:F,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(x,{children:"false"}),e.jsx(x,{value:"xs",children:"xs"}),e.jsx(x,{value:"sm",children:"sm"}),e.jsx(x,{value:"md",children:"md"}),e.jsx(x,{value:"lg",children:"lg"}),e.jsx(x,{value:"xl",children:"xl"})]})]}),e.jsx(J,{sx:{mt:1},control:e.jsx(Q,{checked:n,onChange:A}),label:"Full width"})]})]}),e.jsx(j,{children:e.jsx(i,{color:"error",variant:"contained",onClick:h,children:"Close"})})]})]})},le=()=>{const[l,t]=s.useState(!1),[n,o]=s.useState("paper"),c=h=>()=>{t(!0),o(h)},a=()=>{t(!1)},r=s.useRef(null);return s.useEffect(()=>{if(l){const{current:h}=r;h!==null&&h.focus()}},[l]),e.jsxs(e.Fragment,{children:[e.jsxs(Y,{spacing:2,children:[e.jsx(i,{variant:"contained",color:"success",onClick:c("paper"),children:"Scroll with Paper"}),e.jsx(i,{variant:"contained",color:"secondary",onClick:c("body"),children:"Scroll with Body"})]}),e.jsxs(u,{open:l,onClose:a,scroll:n,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[e.jsx(g,{id:"scroll-dialog-title",children:"Subscribe"}),e.jsx(C,{dividers:n==="paper",children:e.jsx(f,{id:"scroll-dialog-description",ref:r,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(j,{children:[e.jsx(i,{color:"error",onClick:a,children:"Cancel"}),e.jsx(i,{onClick:a,children:"Subscribe"})]})]})]})},se=()=>{const[l,t]=s.useState(!1),n=K(),o=$(n.breakpoints.down("md")),c=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"warning",fullWidth:!0,onClick:c,children:"Open Responsive Dialog"}),e.jsxs(u,{fullScreen:o,open:l,onClose:a,"aria-labelledby":"responsive-dialog-title",children:[e.jsx(g,{id:"responsive-dialog-title",children:"Use Google's location service?"}),e.jsx(C,{children:e.jsx(f,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(j,{children:[e.jsx(i,{autoFocus:!0,onClick:a,children:"Disagree"}),e.jsx(i,{onClick:a,autoFocus:!0,children:"Agree"})]})]})]})},ae=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import React from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { IconUser, IconPlus } from '@tabler/icons-react';

const emails = ['JohnDeo@gmail.com', 'SmithRocky@gmail.com'];

const [open, setOpen] = React.useState(false);
const [selectedValue, setSelectedValue] = React.useState(emails[1]);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value: string) => {
  setOpen(false);
  setSelectedValue(value);
};

return (
  <>
    <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
      Open Simple Dialog
    </Button>
    <Typography variant="subtitle1" component="div" mb={1} textAlign="center">
      Selected: {selectedValue}
    </Typography>
    <Dialog onClose={() => handleClose(selectedValue)} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItemButton onClick={() => handleClose(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main' }}>
                <IconUser width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItemButton>
        ))}

        <ListItem autoFocus button onClick={() => handleClose('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <IconPlus width={20} height={20} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  </>
);`})}),re=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import React from 'react';
import { 
Button, 
Dialog, 
DialogTitle, 
DialogContent, 
DialogContentText, 
DialogActions,
} from '@mui/material';

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


return (
    <>
        <Button variant="contained" color="secondary" fullWidth onClick={handleClickOpen}>
            Open Alert Dialog
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    </>
);`})}),ce=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


return (
    <>
      <Button variant="contained" color="success" fullWidth onClick={handleClickOpen}>
        Open Transition Dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
);`})}),de=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import React from 'react';
import { 
Button, 
Dialog, 
DialogTitle, 
DialogContent, 
DialogContentText, 
DialogActions, 
Box 
} from '@mui/material';

import CustomTextField from "../../forms/theme-elements/CustomTextField";

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


return (
    <>
        <Button variant="contained" color="warning" fullWidth onClick={handleClickOpen}>
            Open Form Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <Box mt={2}>
                    <CustomTextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    </>
);`})}),me=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { IconX } from '@tabler/icons-react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


return (
    <>
      <Button variant="contained" color="error" fullWidth onClick={handleClickOpen}>
        Open Fullscreen Dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <IconX width={24} height={24} />
            </IconButton>
            <Typography ml={2} flex={1} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
);`})}),ue=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
} from '@mui/material';

import CustomSelect from '../../forms/theme-elements/CustomSelect';
import CustomSwitch from '../../forms/theme-elements/CustomSwitch';
import { DialogProps } from '@mui/material/Dialog';

const [open, setOpen] = React.useState(false);
const [fullWidth, setFullWidth] = React.useState(true);
const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleMaxWidthChange = (event: any) => {
    setMaxWidth(event.target.value);
};

const handleFullWidthChange = (event: any) => {
    setFullWidth(event.target.checked);
};


return (
    <>
      <Button variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
        Open Maxwidth Dialog
      </Button>
      <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <CustomSelect
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </CustomSelect>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={<CustomSwitch checked={fullWidth} onChange={handleFullWidthChange} />}
              label="Full width"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
);`})}),pe=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  DialogProps,
} from '@mui/material';

const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
   setOpen(true);
   setScroll(scrollType);
};

const handleClose = () => {
   setOpen(false);
};

const descriptionElementRef = React.useRef<HTMLElement>(null);
React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
}, [open]);

return (
    <>
      <Stack spacing={2}>
        <Button variant="contained" color="success" onClick={handleClickOpen('paper')}>
          Scroll with Paper
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClickOpen('body')}>
          Scroll with Body
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => 'Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
              )
              .join('
')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );`})}),he=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:`

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const [open, setOpen] = React.useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

return (
    <>
      <Button variant="contained" color="warning" fullWidth onClick={handleClickOpen}>
        Open Responsive Dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
);`})}),ge=[{to:"/",title:"Home"},{title:"Dialog"}],Et=()=>e.jsxs(L,{title:"Dialog",description:"this is Dialog page",children:[e.jsx(w,{title:"Dialog",items:ge}),e.jsx(W,{title:"Dialog",children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Simple",codeModel:e.jsx(ae,{}),children:e.jsx(N,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Alert",codeModel:e.jsx(re,{}),children:e.jsx(Z,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Transition",codeModel:e.jsx(ce,{}),children:e.jsx(ee,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Form",codeModel:e.jsx(de,{}),children:e.jsx(te,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Full screen",codeModel:e.jsx(me,{}),children:e.jsx(ne,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Max width",codeModel:e.jsx(ue,{}),children:e.jsx(ie,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Scrolling Content",codeModel:e.jsx(pe,{}),children:e.jsx(le,{})})}),e.jsx(d,{display:"flex",alignItems:"stretch",size:{xs:12,lg:4,sm:6},children:e.jsx(m,{title:"Responsive Fullscreen",codeModel:e.jsx(he,{}),children:e.jsx(se,{})})})]})})]});export{Et as default};
