import{j as e}from"./index-D0CpDmcp.js";import{B as p}from"./Breadcrumb-BVcp9-n_.js";import{P as a}from"./PageContainer-GyGJwSoy.js";import{u as s}from"./useTreeViewApiRef-CNED-V_5.js";import{P as l}from"./ParentCard-Dds6eSz-.js";import{C as c}from"./CodeDialog-CpWyUB1H.js";import{S as d}from"./Stack-Br4H6Iex.js";import{B as n}from"./Button-CgUWpLWI.js";import{B as u}from"./Box-YfWKO8y5.js";import{S as x,T as i}from"./TreeItem-DKdqUORe.js";import{G as I}from"./Grid2-B3gzDQ3y.js";import"./Typography-CxjCbjeZ.js";import"./Paper-DYTAYSZ1.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./createStack-D1qoiK_y.js";import"./useThemeProps-C4yCam4T.js";import"./Checkbox-CO2W_iZh.js";import"./SwitchBase-DtKwjBpU.js";import"./useFormControl-CdybHpQR.js";import"./mergeSlotProps-EoW_Nak3.js";import"./Collapse-CPW_rnE6.js";function T(){return e.jsx(c,{children:`
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
