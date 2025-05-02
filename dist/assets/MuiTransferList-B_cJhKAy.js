import{R as g,j as e}from"./index-q1gJB5H0.js";import{B as M}from"./Breadcrumb-Sx0jSoUO.js";import{P as F}from"./PageContainer-ShAoTXqo.js";import{P as N}from"./ParentCard-BoIC9gk3.js";import{C as T}from"./ChildCard-CxfxNJXb.js";import{C as y}from"./CustomCheckbox-Ck9mo8NZ.js";import{u as B,P as G}from"./Paper-BfYJvf2K.js";import{G as c}from"./Grid2-CqZBoIec.js";import{B as C}from"./Button-BiCTccas.js";import{I as q,a as J}from"./IconChevronsRight-y7POxz69.js";import{I as O,a as P}from"./IconChevronRight-BTtHKMx3.js";import{L as S}from"./List-CdKlZLq8.js";import{L as z}from"./ListItemButton-2j3W-oft.js";import{L as $}from"./ListItemIcon-Dq9tKh3r.js";import{L as A}from"./ListItemText-B-UPT3Eb.js";import{L as D}from"./ListItem-COsOw9eb.js";import{S as K}from"./Stack-Cgjz-K8z.js";import{C as Q}from"./CardHeader-D3eDM15l.js";import{D as U}from"./Divider-D_QCNZIA.js";import{C as E}from"./CodeDialog-BUiQRyz8.js";import"./Typography-BxNQAu-e.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Box-DjbeIn6R.js";import"./Card-bW_5XQOp.js";import"./CardContent-DWdd_6p9.js";import"./Checkbox-DgauOCMM.js";import"./SwitchBase-W9NycRqz.js";import"./useFormControl-CXKl78CG.js";import"./useSlot-C5ueERyv.js";import"./useControlled-2SXrPK_C.js";import"./mergeSlotProps-02bNjKG-.js";import"./useId-SD238GYo.js";import"./CircularProgress-C7fJ-WBe.js";import"./listItemButtonClasses-CrDt3rgL.js";import"./listItemTextClasses-BL7DomhZ.js";import"./isHostComponent-DVu5iVWx.js";import"./createStack-B9LP_pb5.js";import"./dividerClasses-BBaEuH8O.js";import"./Tooltip-T0REb2Y8.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";function k(t,r){return t.filter(n=>r.indexOf(n)===-1)}function w(t,r){return t.filter(n=>r.indexOf(n)!==-1)}const V=()=>{const[t,r]=g.useState([]),[n,h]=g.useState([0,1,2,3]),[l,m]=g.useState([4,5,6,7]),a=w(t,n),d=w(t,l),x=s=>()=>{const i=t.indexOf(s),o=[...t];i===-1?o.push(s):o.splice(i,1),r(o)},u=()=>{m(l.concat(n)),h([])},b=()=>{m(l.concat(a)),h(k(n,a)),r(k(t,a))},L=()=>{h(n.concat(d)),m(k(l,d)),r(k(t,d))},I=()=>{h(n.concat(l)),m([])},v=B().palette.divider,p=s=>e.jsx(G,{variant:"outlined",sx:{width:200,height:230,overflow:"auto",border:`1px solid ${v}`},children:e.jsxs(S,{dense:!0,component:"div",role:"list",children:[s.map(i=>{const o=`transfer-list-item-${i}-label`;return e.jsxs(z,{role:"listitem",onClick:x(i),children:[e.jsx($,{children:e.jsx(y,{tabIndex:-1,disableRipple:!0,checked:t.indexOf(i)!==-1,inputProps:{"aria-labelledby":o}})}),e.jsx(A,{id:o,primary:`List item ${i+1}`})]},i)}),e.jsx(D,{})]})});return e.jsxs(c,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e.jsx(c,{children:p(n)}),e.jsx(c,{children:e.jsxs(c,{container:!0,direction:"column",alignItems:"center",children:[e.jsx(C,{sx:{my:.5},variant:"outlined",size:"small",onClick:u,disabled:n.length===0,"aria-label":"move all right",children:e.jsx(q,{width:20,height:20})}),e.jsx(C,{sx:{my:.5},variant:"outlined",size:"small",onClick:b,disabled:a.length===0,"aria-label":"move selected right",children:e.jsx(O,{width:20,height:20})}),e.jsx(C,{sx:{my:.5},variant:"outlined",size:"small",onClick:L,disabled:d.length===0,"aria-label":"move selected left",children:e.jsx(P,{width:20,height:20})}),e.jsx(C,{sx:{my:.5},variant:"outlined",size:"small",onClick:I,disabled:l.length===0,"aria-label":"move all left",children:e.jsx(J,{width:20,height:20})})]})}),e.jsx(c,{children:p(l)})]})};function f(t,r){return t.filter(n=>r.indexOf(n)===-1)}function j(t,r){return t.filter(n=>r.indexOf(n)!==-1)}function W(t,r){return[...t,...f(r,t)]}const X=()=>{const[t,r]=g.useState([]),[n,h]=g.useState([0,1,2,3]),[l,m]=g.useState([4,5,6,7]),a=j(t,n),d=j(t,l),x=s=>()=>{const i=t.indexOf(s),o=[...t];i===-1?o.push(s):o.splice(i,1),r(o)},u=s=>j(t,s).length,b=s=>()=>{u(s)===s.length?r(f(t,s)):r(W(t,s))},L=()=>{m(l.concat(a)),h(f(n,a)),r(f(t,a))},I=()=>{h(n.concat(d)),m(f(l,d)),r(f(t,d))},v=B().palette.grey[100],p=(s,i)=>e.jsxs(G,{variant:"outlined",sx:{border:`1px solid ${v}`},children:[e.jsx(Q,{sx:{px:2},avatar:e.jsx(y,{onClick:b(i),checked:u(i)===i.length&&i.length!==0,indeterminate:u(i)!==i.length&&u(i)!==0,disabled:i.length===0,inputProps:{"aria-label":"all items selected"}}),title:s,subheader:`${u(i)}/${i.length} selected`}),e.jsx(U,{}),e.jsxs(S,{sx:{width:200,height:230,overflow:"auto"},dense:!0,component:"div",role:"list",children:[i.map(o=>{const R=`transfer-list-all-item-${o}-label`;return e.jsxs(z,{role:"listitem",onClick:x(o),children:[e.jsx($,{children:e.jsx(y,{checked:t.indexOf(o)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":R}})}),e.jsx(A,{id:R,primary:`List item ${o+1}`})]},o)}),e.jsx(D,{})]})]});return e.jsxs(c,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e.jsx(c,{children:p("Choices",n)}),e.jsx(c,{children:e.jsxs(K,{spacing:1,children:[e.jsx(C,{variant:"outlined",size:"small",onClick:L,disabled:a.length===0,"aria-label":"move selected right",children:e.jsx(O,{width:20,height:20})}),e.jsx(C,{variant:"outlined",size:"small",onClick:I,disabled:d.length===0,"aria-label":"move selected left",children:e.jsx(P,{width:20,height:20})})]})}),e.jsx(c,{children:p("Chosen",l)})]})},Y=()=>e.jsx(e.Fragment,{children:e.jsx(E,{children:`

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Button, Paper, ListItemButton } from '@mui/material';

import {
  IconChevronRight,
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react';

import CustomCheckbox from '../../forms/theme-elements/CustomCheckbox';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const BasicTransferList = () => {
const [checked, setChecked] = React.useState<readonly number[]>([]);
const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

const leftChecked = intersection(checked, left);
const rightChecked = intersection(checked, right);

const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
};

const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
};

const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
};

const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
};

const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
};
const theme = useTheme();
const borderColor = theme.palette.divider;

const customList = (items: readonly number[]) => (
    <Paper
      variant="outlined"
      sx={{ width: 200, height: 230, overflow: 'auto', border: '1px solid {borderColor}' }}
    >
        <List dense component="div" role="list">
            {items.map((value) => {
                const labelId = 'transfer-list-item-{value}-label';


                return (
                    <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                        <ListItemIcon>
                                <CustomCheckbox
                                    tabIndex={-1}
                                    disableRipple
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={'List item {value + 1}'} />
                    </ListItem>
                );
            })}
        </List>
    </Paper>
);

return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        <IconChevronsRight width={20} height={20} />
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        <IconChevronRight width={20} height={20} />
                   </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        <IconChevronLeft width={20} height={20} />
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        <IconChevronsLeft width={20} height={20} />
                    </Button>
                </Grid>
            </Grid>
        <Grid item>{customList(right)}</Grid>
    </Grid>
    );
};`})}),Z=()=>e.jsx(e.Fragment,{children:e.jsx(E,{children:`

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Grid2 as Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  CardHeader,
  Stack,
  Paper,,
  ListItemButton,
} from '@mui/material';

import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import CustomCheckbox from '../../forms/theme-elements/CustomCheckbox';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly number[], b: readonly number[]) {
  return [...a, ...not(b, a)];
}

const EnhancedTransferList = () => {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly number[]) => intersection(checked, items).length;

  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const theme = useTheme();
  const borderColor = theme.palette.grey[100];

  const customList = (title: React.ReactNode, items: readonly number[]) => (
    <Paper variant="outlined" sx={{ border: '1px solid {borderColor}' }}>
      <CardHeader
        sx={{ px: 2 }}
        avatar={
          <CustomCheckbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={'{numberOfChecked(items)}/{items.length} selected'}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = 'transfer-list-all-item-{value}-label';

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <CustomCheckbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={'List item {value + 1}'} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Stack spacing={1}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <IconChevronRight width={20} height={20} />
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <IconChevronLeft width={20} height={20} />
          </Button>
        </Stack>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  );
};`})}),_=[{to:"/",title:"Home"},{title:"Transfer List"}],it=()=>e.jsxs(F,{title:"Transfer List",description:"this is Transfer List page",children:[e.jsx(M,{title:"Transfer List",items:_}),e.jsx(N,{title:"Transfer List",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{display:"flex",alignItems:"stretch",size:12,children:e.jsx(T,{title:"Basic",codeModel:e.jsx(Y,{}),children:e.jsx(V,{})})}),e.jsx(c,{display:"flex",alignItems:"stretch",size:12,children:e.jsx(T,{title:"Enhanced",codeModel:e.jsx(Z,{}),children:e.jsx(X,{})})})]})})]});export{it as default};
