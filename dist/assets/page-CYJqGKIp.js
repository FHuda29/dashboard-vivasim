import{j as e,r as p}from"./index-D0CpDmcp.js";import{B as u}from"./Breadcrumb-BVcp9-n_.js";import{P as x}from"./PageContainer-GyGJwSoy.js";import{C as t}from"./CodeDialog-CpWyUB1H.js";import{P as r}from"./ParentCard-Dds6eSz-.js";import{B as m}from"./Box-YfWKO8y5.js";import{S as l,T as i}from"./TreeItem-DKdqUORe.js";import{S as I}from"./Stack-Br4H6Iex.js";import{B as h}from"./Button-CgUWpLWI.js";import{G as T}from"./Grid2-B3gzDQ3y.js";import"./Typography-CxjCbjeZ.js";import"./Paper-DYTAYSZ1.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Tooltip-BtHUzaXN.js";import"./useSlot-CFWOFHMb.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./useThemeProps-C4yCam4T.js";import"./Checkbox-CO2W_iZh.js";import"./SwitchBase-DtKwjBpU.js";import"./useFormControl-CdybHpQR.js";import"./mergeSlotProps-EoW_Nak3.js";import"./Collapse-CPW_rnE6.js";import"./createStack-D1qoiK_y.js";function b(){return e.jsx(t,{children:`
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
