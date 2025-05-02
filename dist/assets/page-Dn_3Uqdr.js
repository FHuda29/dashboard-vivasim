import{j as e}from"./index-q1gJB5H0.js";import{B as p}from"./Breadcrumb-Sx0jSoUO.js";import{P as a}from"./PageContainer-ShAoTXqo.js";import{u as s}from"./useTreeViewApiRef-C2zfglkk.js";import{P as l}from"./ParentCard-BoIC9gk3.js";import{C as c}from"./CodeDialog-BUiQRyz8.js";import{S as d}from"./Stack-Cgjz-K8z.js";import{B as n}from"./Button-BiCTccas.js";import{B as u}from"./Box-DjbeIn6R.js";import{S as x,T as i}from"./TreeItem-D-gFBXO0.js";import{G as I}from"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Paper-BfYJvf2K.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";import"./createStack-B9LP_pb5.js";import"./useThemeProps-CrcxdbZ0.js";import"./Checkbox-DgauOCMM.js";import"./SwitchBase-W9NycRqz.js";import"./useFormControl-CXKl78CG.js";import"./mergeSlotProps-02bNjKG-.js";import"./Collapse-BgHX-Q2_.js";function T(){return e.jsx(c,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks/useTreeViewApiRef';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ApiMethodFocusItem ',
},
];
 
export default function ApiMethodFocusItem() {
    const apiRef = useTreeViewApiRef();
    const handleButtonClick = (event: React.SyntheticEvent<Element, Event>) => {
        apiRef.current?.focusItem(event, 'pickers');
    };

    return (
     
            <Stack spacing={2}>
                <div>
                    <Button onClick={handleButtonClick}>Focus pickers item</Button>
                </div>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <SimpleTreeView apiRef={apiRef}>
                        <TreeItem itemId="grid" label="Data Grid">
                            <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                            <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                            <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                        </TreeItem>
                        <TreeItem itemId="pickers" label="Date and Time Pickers">
                            <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                            <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                        </TreeItem>
                        <TreeItem itemId="charts" label="Charts">
                            <TreeItem itemId="charts-community" label="@mui/x-charts" />
                        </TreeItem>
                        <TreeItem itemId="tree-view" label="Tree View">
                            <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                        </TreeItem>
                    </SimpleTreeView>
                </Box>
            </Stack>
 
    );
}

            `})}function h(){const t=s(),m=o=>{var r;(r=t.current)==null||r.focusItem(o,"pickers")};return e.jsx(l,{title:"FocusItem Treeview",codeModel:e.jsx(T,{}),children:e.jsxs(d,{spacing:2,children:[e.jsx("div",{children:e.jsx(n,{onClick:m,children:"Focus pickers item"})}),e.jsx(u,{sx:{minHeight:352,minWidth:250},children:e.jsxs(x,{apiRef:t,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}const f=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],ue=()=>e.jsxs(a,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[e.jsx(p,{title:"SimpleTreeView",items:f}),e.jsx(I,{container:!0,spacing:3,children:e.jsx(h,{})})]});export{ue as default};
