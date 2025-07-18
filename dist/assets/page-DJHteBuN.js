import{j as e,r as s}from"./index-bBoaL7NX.js";import{B as c}from"./Breadcrumb-Db9PlBea.js";import{P as p}from"./PageContainer-ClH7HaBW.js";import{P as r}from"./ParentCard-CFe-nEgX.js";import{C as m}from"./CodeDialog-75JXnHwL.js";import{B as a}from"./Box-Cbtftx36.js";import{S as l,T as i}from"./TreeItem-BR8bEMWA.js";import{S as n}from"./Stack-DONMPCRZ.js";import{T as I}from"./Typography-B41TU7cT.js";import{G as x}from"./Grid2-CC46JW8y.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./useThemeProps-BKqztWfv.js";import"./useThemeProps-BUO-Zg8Q.js";import"./Checkbox-9cjnTmwe.js";import"./SwitchBase-DqWPx54W.js";import"./useFormControl-CaUBXsoR.js";import"./mergeSlotProps-9a9CFyBb.js";import"./Collapse-glysblWZ.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";function u(){return e.jsx(m,{children:`
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
title: 'BasicSimpleTreeView ',
},
]; 


export default function BasicSimpleTreeView() {
    return (

        <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView>
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

            `})}function T(){return e.jsx(r,{title:"Basic Treeview",codeModel:e.jsx(u,{}),children:e.jsx(a,{sx:{minHeight:352,minWidth:250},children:e.jsxs(l,{children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})})}function k(){return e.jsx(m,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'TrackitemclicksTree ',
},
]; 

function TrackitemclicksTree() {
    const [lastClickedItem, setLastClickedItem] = React.useState<any>(null);
    return (
       
            <Stack spacing={2}>
                <Typography>
                    {lastClickedItem == null
                        ? 'No item click recorded'
                        : \`Last clicked item: \${lastClickedItem}\`}
                </Typography>
                <Box sx={{ minHeight: 352, minWidth: 300 }}>
                    <SimpleTreeView onItemClick={(event, itemId) => setLastClickedItem(itemId)}>
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
            </Stack >
     
    );
}

export default TrackitemclicksTree
    `})}function h(){const[t,o]=s.useState(null);return e.jsx(r,{title:"Itemclicks  Treeview",codeModel:e.jsx(k,{}),children:e.jsxs(n,{spacing:2,children:[e.jsx(I,{children:t==null?"No item click recorded":`Last clicked item: ${t}`}),e.jsx(a,{sx:{minHeight:352,minWidth:300},children:e.jsxs(l,{onItemClick:(g,d)=>o(d),children:[e.jsxs(i,{itemId:"grid",label:"Data Grid",children:[e.jsx(i,{itemId:"grid-community",label:"@mui/x-data-grid"}),e.jsx(i,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),e.jsx(i,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),e.jsxs(i,{itemId:"pickers",label:"Date and Time Pickers",children:[e.jsx(i,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),e.jsx(i,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),e.jsx(i,{itemId:"charts",label:"Charts",children:e.jsx(i,{itemId:"charts-community",label:"@mui/x-charts"})}),e.jsx(i,{itemId:"tree-view",label:"Tree View",children:e.jsx(i,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})]})})}const b=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],Te=()=>e.jsxs(p,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[e.jsx(c,{title:"SimpleTreeView",items:b}),e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(T,{}),e.jsx(h,{})]})]});export{Te as default};
