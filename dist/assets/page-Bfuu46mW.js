import{j as e,r as u}from"./index-q1gJB5H0.js";import{B as I}from"./Breadcrumb-Sx0jSoUO.js";import{P as h}from"./PageContainer-ShAoTXqo.js";import{C as l}from"./CodeDialog-BUiQRyz8.js";import{P as s}from"./ParentCard-BoIC9gk3.js";import{S as o}from"./Stack-Cgjz-K8z.js";import{B as n}from"./Button-BiCTccas.js";import{B as p}from"./Box-DjbeIn6R.js";import{S as c,T as i}from"./TreeItem-D-gFBXO0.js";import{u as T}from"./useTreeViewApiRef-C2zfglkk.js";import{G as g}from"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Paper-BfYJvf2K.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Tooltip-T0REb2Y8.js";import"./useSlot-C5ueERyv.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./createStack-B9LP_pb5.js";import"./useThemeProps-CrcxdbZ0.js";import"./Checkbox-DgauOCMM.js";import"./SwitchBase-W9NycRqz.js";import"./useFormControl-CXKl78CG.js";import"./mergeSlotProps-02bNjKG-.js";import"./Collapse-BgHX-Q2_.js";function k(){return e.jsx(l,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ControlledExpansionTree ',
},
]; 


function ControlledExpansionTree() {
    const [expandedItems, setExpandedItems] = React.useState<any>([]);

    const handleExpandedItemsChange = (event: any, itemIds: any) => {
        setExpandedItems(itemIds);
    };

    const handleExpandClick = () => {
        setExpandedItems((oldExpanded: string | any[]) =>
            oldExpanded.length === 0
                ? [
                    'grid',
                    'grid-community',
                    'grid-pro',
                    'grid-premium',
                    'pickers',
                    'pickers-community',
                    'pickers-pro',
                    'charts',
                    'charts-community',
                    'tree-view',
                    'tree-view-community',
                ]
                : [],
        );
    };
    return (
            <Stack spacing={2}>
                <div>
                    <Button onClick={handleExpandClick}>
                        {expandedItems.length === 0 ? 'Expand all' : 'Collapse all'}
                    </Button>
                </div>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <SimpleTreeView
                        expandedItems={expandedItems}
                        onExpandedItemsChange={handleExpandedItemsChange}
                    >
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
     
    )
}

export default ControlledExpansionTree
              `})}function f(){const[t,m]=u.useState([]),a=(d,x)=>{m(x)},r=()=>{m(d=>d.length===0?["grid","grid-community","grid-pro","grid-premium","pickers","pickers-community","pickers-pro","charts","charts-community","tree-view","tree-view-community"]:[])};return e.jsx(s,{title:"Expansion Treeview",codeModel:e.jsx(k,{}),children:e.jsxs(o,{spacing:2,children:[e.jsx("div",{children:e.jsx(n,{onClick:r,children:t.length===0?"Expand all":"Collapse all"})}),e.jsx(p,{sx:{minHeight:352,minWidth:250},children:e.jsxs(c,{expandedItems:t,onExpandedItemsChange:a,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}function b(){return e.jsx(l,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';
            
const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ApiMethodSetItemExpansion ',
},
]; 

export default function ApiMethodSetItemExpansion() {
    const apiRef = useTreeViewApiRef();

     const handleExpandClick = (event: React.SyntheticEvent<Element, Event>) => {
        if (apiRef.current) {
            apiRef.current.setItemExpansion(event, 'grid', true);
        }
    };

    const handleCollapseClick = (event: React.SyntheticEvent<Element, Event>) => {
        if (apiRef.current) {
            apiRef.current.setItemExpansion(event, 'grid', false);
        }
    };

    return (
            <Stack spacing={2}>
                <Stack spacing={2} direction="row">
                    <Button onClick={handleExpandClick}>Expand Data Grid</Button>
                    <Button onClick={handleCollapseClick}>Collapse Data Grid</Button>
                </Stack>
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


`})}function j(){const t=T(),m=r=>{t.current&&t.current.setItemExpansion(r,"grid",!0)},a=r=>{t.current&&t.current.setItemExpansion(r,"grid",!1)};return e.jsx(s,{title:"SetItemExpansion Treeview",codeModel:e.jsx(b,{}),children:e.jsxs(o,{spacing:2,children:[e.jsxs(o,{spacing:2,direction:"row",children:[e.jsx(n,{onClick:m,children:"Expand Data Grid"}),e.jsx(n,{onClick:a,children:"Collapse Data Grid"})]}),e.jsx(p,{sx:{minHeight:352,minWidth:250},children:e.jsxs(c,{apiRef:t,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}const w=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],ge=()=>e.jsxs(h,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[e.jsx(I,{title:"SimpleTreeView",items:w}),e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(f,{}),e.jsx(j,{})]})]});export{ge as default};
