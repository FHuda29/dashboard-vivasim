import{j as e}from"./index-bBoaL7NX.js";import{B as p}from"./Breadcrumb-Db9PlBea.js";import{P as a}from"./PageContainer-ClH7HaBW.js";import{u as s}from"./useTreeViewApiRef-DoDJ0yLx.js";import{P as l}from"./ParentCard-CFe-nEgX.js";import{C as c}from"./CodeDialog-75JXnHwL.js";import{S as d}from"./Stack-DONMPCRZ.js";import{B as n}from"./Button-2ihUhOt_.js";import{B as u}from"./Box-Cbtftx36.js";import{S as x,T as i}from"./TreeItem-BR8bEMWA.js";import{G as I}from"./Grid2-CC46JW8y.js";import"./Typography-B41TU7cT.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useThemeProps-BKqztWfv.js";import"./Checkbox-9cjnTmwe.js";import"./SwitchBase-DqWPx54W.js";import"./useFormControl-CaUBXsoR.js";import"./mergeSlotProps-9a9CFyBb.js";import"./Collapse-glysblWZ.js";import"./isMuiElement-CYEUdTOG.js";function T(){return e.jsx(c,{children:`
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

            `})}function h(){const t=s(),m=o=>{var r;(r=t.current)==null||r.focusItem(o,"pickers")};return e.jsx(l,{title:"FocusItem Treeview",codeModel:e.jsx(T,{}),children:e.jsxs(d,{spacing:2,children:[e.jsx("div",{children:e.jsx(n,{onClick:m,children:"Focus pickers item"})}),e.jsx(u,{sx:{minHeight:352,minWidth:250},children:e.jsxs(x,{apiRef:t,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}const f=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],Te=()=>e.jsxs(a,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[e.jsx(p,{title:"SimpleTreeView",items:f}),e.jsx(I,{container:!0,spacing:3,children:e.jsx(h,{})})]});export{Te as default};
