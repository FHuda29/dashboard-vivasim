import{j as e,r as p}from"./index-q1gJB5H0.js";import{B as u}from"./Breadcrumb-Sx0jSoUO.js";import{P as x}from"./PageContainer-ShAoTXqo.js";import{C as t}from"./CodeDialog-BUiQRyz8.js";import{P as r}from"./ParentCard-BoIC9gk3.js";import{B as m}from"./Box-DjbeIn6R.js";import{S as l,T as i}from"./TreeItem-D-gFBXO0.js";import{S as I}from"./Stack-Cgjz-K8z.js";import{B as h}from"./Button-BiCTccas.js";import{G as T}from"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Paper-BfYJvf2K.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Tooltip-T0REb2Y8.js";import"./useSlot-C5ueERyv.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./useThemeProps-CrcxdbZ0.js";import"./Checkbox-DgauOCMM.js";import"./SwitchBase-W9NycRqz.js";import"./useFormControl-CXKl78CG.js";import"./mergeSlotProps-02bNjKG-.js";import"./Collapse-BgHX-Q2_.js";import"./createStack-B9LP_pb5.js";function b(){return e.jsx(t,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

 const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'MultiSelectTreeView ',
},
]; 

function MultiSelectTreeView() {
    return (
       
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView multiSelect>
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
     
    )
}

export default MultiSelectTreeView

              `})}function g(){return e.jsx(r,{title:"MultiSelect Treeview",codeModel:e.jsx(b,{}),children:e.jsx(m,{sx:{minHeight:352,minWidth:250},children:e.jsxs(l,{multiSelect:!0,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})})}function S(){return e.jsx(t,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'CheckboxSelection ',
},
]; 

export default function CheckboxSelection() {
    return (
            <Box sx={{ minHeight: 352, minWidth: 290 }}>
                <SimpleTreeView checkboxSelection>
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
    );
}


                `})}function j(){return e.jsx(r,{title:"CheckboxSelection",codeModel:e.jsx(S,{}),children:e.jsx(m,{sx:{minHeight:352,minWidth:290},children:e.jsxs(l,{checkboxSelection:!0,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})})}function k(){return e.jsx(t,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Button from '@mui/material/Button';

 const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ControlledSelectiontree ',
},
]; 


function ControlledSelectiontree() {
    const [selectedItems, setSelectedItems] = React.useState<any>([]);

    const handleSelectedItemsChange = (event: any, ids: any) => {
        setSelectedItems(ids);
    };

    const handleSelectClick = () => {
        setSelectedItems((oldSelected: string | any[]) =>
            oldSelected.length === 0
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
                    <Button onClick={handleSelectClick}>
                        {selectedItems.length === 0 ? 'Select all' : 'Unselect all'}
                    </Button>
                </div>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <SimpleTreeView
                        selectedItems={selectedItems}
                        onSelectedItemsChange={handleSelectedItemsChange}
                        multiSelect
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

export default ControlledSelectiontree
            
            `})}function w(){const[o,d]=p.useState([]),c=(a,n)=>{d(n)},s=()=>{d(a=>a.length===0?["grid","grid-community","grid-pro","grid-premium","pickers","pickers-community","pickers-pro","charts","charts-community","tree-view","tree-view-community"]:[])};return e.jsx(r,{title:"ControlledSelectiontree",codeModel:e.jsx(k,{}),children:e.jsxs(I,{spacing:2,children:[e.jsx("div",{children:e.jsx(h,{onClick:s,children:o.length===0?"Select all":"Unselect all"})}),e.jsx(m,{sx:{minHeight:352,minWidth:250},children:e.jsxs(l,{selectedItems:o,onSelectedItemsChange:c,multiSelect:!0,children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}const C=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],be=()=>e.jsxs(x,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[e.jsx(u,{title:"SimpleTreeView",items:C}),e.jsxs(T,{container:!0,spacing:3,children:[e.jsx(g,{}),e.jsx(j,{}),e.jsx(w,{})]})]});export{be as default};
