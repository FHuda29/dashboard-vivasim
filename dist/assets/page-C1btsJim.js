import{f as H,i as ee,j as i,r as S,aX as D}from"./index-bBoaL7NX.js";import{B as Te}from"./Breadcrumb-Db9PlBea.js";import{P as he}from"./PageContainer-ClH7HaBW.js";import{r as te,a as oe}from"./createSvgIcon-DcL-YXBs.js";import{P as re}from"./ParentCard-CFe-nEgX.js";import{C as ie}from"./CodeDialog-75JXnHwL.js";import{B as z}from"./Box-Cbtftx36.js";import{S as ne,T as ve,t as ye,u as $,h as F,a as G,b as we,g as Pe,i as X,c as Re,d as ke,e as Se}from"./TreeItem-BR8bEMWA.js";import{s as y,u as U,i as c,j as je,x as K}from"./Typography-B41TU7cT.js";import{S as Be,e as h,r as Q}from"./Paper-CEo52ZYq.js";import{C as Ee}from"./Checkbox-9cjnTmwe.js";import{C as Ae}from"./Collapse-glysblWZ.js";import{u as Me}from"./useSlotProps-D8Vfx1ig.js";import{A as De}from"./Avatar-CUO15ytv.js";import{G as Ve}from"./Grid2-CC46JW8y.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./mergeSlotProps-9a9CFyBb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-CYEUdTOG.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useId-BgKtfLA5.js";import"./useControlled-B6T_fxKa.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./useThemeProps-BKqztWfv.js";import"./useThemeProps-BUO-Zg8Q.js";import"./SwitchBase-DqWPx54W.js";import"./useFormControl-CaUBXsoR.js";import"./styled-oSX1ZV8o.js";var B={},Y;function qe(){if(Y)return B;Y=1;var e=te();Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var n=e(oe()),r=H();return B.default=(0,n.default)((0,r.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox"),B}var Le=qe();const Oe=ee(Le);var E={},Z;function Fe(){if(Z)return E;Z=1;var e=te();Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var n=e(oe()),r=H();return E.default=(0,n.default)((0,r.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"}),"IndeterminateCheckBox"),E}var Ge=Fe();const ze=ee(Ge);function $e(){return i.jsx(ie,{children:`
import * as React from 'react';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import SvgIcon, { SvgIconOwnProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
 const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BasicCustomIcons ',
},
]; 


const CustomTreeItem = styled(TreeItem)({
    [\`& .\${treeItemClasses.iconContainer}\`]: {
                '& .close': {
                opacity: 0.3,
        },
    },
});

            function CloseSquare(props: React.JSX.IntrinsicAttributes & { component: React.ElementType<any, keyof React.JSX.IntrinsicElements>; } & SvgIconOwnProps & CommonProps & Omit<any, "children" | "style" | "className" | "classes" | "color" | "fontSize" | "shapeRendering" | "sx" | "viewBox" | "htmlColor" | "inheritViewBox" | "titleAccess">) {
    return (
            <SvgIcon
                className="close"
                fontSize="inherit"
                style={{ width: 14, height: 14 }}
                {...props}
            >
                {/* tslint:disable-next-line: max-line-length */}
                <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
            </SvgIcon>
            );
}

            export default function BasicCustomIcons() {
    return (

            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <SimpleTreeView
                    defaultExpandedItems={['grid']}
                    slots={{
                        expandIcon: AddBoxIcon,
                        collapseIcon: IndeterminateCheckBoxIcon,
                        endIcon: CloseSquare,
                    }}
                >
                    <CustomTreeItem itemId="grid" label="Data Grid">
                        <CustomTreeItem itemId="grid-community" label="@mui/x-data-grid" />
                        <CustomTreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                        <CustomTreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="pickers" label="Date and Time Pickers">
                        <CustomTreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                        <CustomTreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="charts" label="Charts">
                        <CustomTreeItem itemId="charts-community" label="@mui/x-charts" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="tree-view" label="Tree View">
                        <CustomTreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                    </CustomTreeItem>
                </SimpleTreeView>
            </Box>

            );
}


            `})}const g=y(ve)({[`& .${ye.iconContainer}`]:{"& .close":{opacity:.3}}});function Ke(e){return i.jsx(Be,{className:"close",fontSize:"inherit",style:{width:14,height:14},...e,children:i.jsx("path",{d:"M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"})})}function _e(){return i.jsx(re,{title:"CustomIcons Treeview",codeModel:i.jsx($e,{}),children:i.jsx(z,{sx:{minHeight:352,minWidth:250},children:i.jsxs(ne,{defaultExpandedItems:["grid"],slots:{expandIcon:Oe,collapseIcon:ze,endIcon:Ke},children:[i.jsxs(g,{itemId:"grid",label:"Data Grid",children:[i.jsx(g,{itemId:"grid-community",label:"@mui/x-data-grid"}),i.jsx(g,{itemId:"grid-pro",label:"@mui/x-data-grid-pro"}),i.jsx(g,{itemId:"grid-premium",label:"@mui/x-data-grid-premium"})]}),i.jsxs(g,{itemId:"pickers",label:"Date and Time Pickers",children:[i.jsx(g,{itemId:"pickers-community",label:"@mui/x-date-pickers"}),i.jsx(g,{itemId:"pickers-pro",label:"@mui/x-date-pickers-pro"})]}),i.jsx(g,{itemId:"charts",label:"Charts",children:i.jsx(g,{itemId:"charts-community",label:"@mui/x-charts"})}),i.jsx(g,{itemId:"tree-view",label:"Tree View",children:i.jsx(g,{itemId:"tree-view-community",label:"@mui/x-tree-view"})})]})})})}const ae=e=>Array.isArray(e)?e.length>0&&e.some(ae):!!e,Je=({itemId:e,children:n})=>{const{instance:r,selection:{multiSelect:I},publicAPI:x}=$(),p={expandable:ae(n),expanded:r.isItemExpanded(e),focused:r.isItemFocused(e),selected:r.isItemSelected(e),disabled:r.isItemDisabled(e),editing:r!=null&&r.isItemBeingEdited?r==null?void 0:r.isItemBeingEdited(e):!1,editable:r.isItemEditable?r.isItemEditable(e):!1},v=s=>{if(p.disabled)return;p.focused||r.focusItem(s,e);const C=I&&(s.shiftKey||s.ctrlKey||s.metaKey);p.expandable&&!(C&&r.isItemExpanded(e))&&r.toggleItemExpansion(s,e)},m=s=>{if(p.disabled)return;p.focused||r.focusItem(s,e),I&&(s.shiftKey||s.ctrlKey||s.metaKey)?s.shiftKey?r.expandSelectionRange(s,e):r.selectItem({event:s,itemId:e,keepExistingSelection:!0}):r.selectItem({event:s,itemId:e,shouldBeSelected:!0})},b=s=>{const C=s.nativeEvent.shiftKey;I&&C?r.expandSelectionRange(s,e):r.selectItem({event:s,itemId:e,keepExistingSelection:I,shouldBeSelected:s.target.checked})},u=()=>{F(r,G)&&r.isItemEditable(e)&&(r.isItemBeingEdited(e)?r.setEditedItemId(null):r.setEditedItemId(e))};return{interactions:{handleExpansion:v,handleSelection:m,handleCheckboxSelection:b,toggleItemEditing:u,handleSaveItemLabel:(s,C)=>{F(r,G)&&r.isItemBeingEditedRef(e)&&(r.updateItemLabel(e,C),u(),r.focusItem(s,e))},handleCancelItemLabelEditing:s=>{F(r,G)&&r.isItemBeingEditedRef(e)&&(u(),r.focusItem(s,e))}},status:p,publicAPI:x}},We=e=>{const{runItemPlugins:n,items:{onItemClick:r,disabledItemsFocusable:I,indentationAtItemLevel:x},selection:{disableSelection:p,checkboxSelection:v},expansion:{expansionTrigger:m},treeId:b,instance:u,publicAPI:w}=$(),R=S.useContext(we),{id:A,itemId:s,label:C,children:M,rootRef:V}=e,{rootRef:se,contentRef:le,propsEnhancers:f}=n(e),{interactions:P,status:d}=Je({itemId:s,children:M}),q=S.useRef(null),L=S.useRef(null),_=U(V,se,q),ce=U(le,L),J=S.useRef(null),me=Pe({itemId:s,treeId:b,id:A}),de=u.canItemBeTabbed(s)?0:-1,O={rootRefObject:q,contentRefObject:L,interactions:P},pe=o=>t=>{var l;if((l=o.onFocus)==null||l.call(o,t),t.defaultMuiPrevented)return;const a=!d.disabled||I;!d.focused&&a&&t.currentTarget===t.target&&u.focusItem(t,s)},ue=o=>t=>{var l,T,j,W,N;if((l=o.onBlur)==null||l.call(o,t),t.defaultMuiPrevented)return;const a=u.getItemDOMElement(s);d.editing||t.relatedTarget&&X(t.relatedTarget,a)&&(t.target&&((j=(T=t.target)==null?void 0:T.dataset)==null?void 0:j.element)==="labelInput"&&X(t.target,a)||((N=(W=t.relatedTarget)==null?void 0:W.dataset)==null?void 0:N.element)==="labelInput")||u.removeFocusedItem()},Ie=o=>t=>{var a,l,T;(a=o.onKeyDown)==null||a.call(o,t),!(t.defaultMuiPrevented||((T=(l=t.target)==null?void 0:l.dataset)==null?void 0:T.element)==="labelInput")&&u.handleItemKeyDown(t,s)},xe=o=>t=>{var a;(a=o.onDoubleClick)==null||a.call(o,t),!t.defaultMuiPrevented&&P.toggleItemEditing()},fe=o=>t=>{var a,l;(a=o.onClick)==null||a.call(o,t),r==null||r(t,s),!(t.defaultMuiPrevented||(l=J.current)!=null&&l.contains(t.target))&&(m==="content"&&P.handleExpansion(t),v||P.handleSelection(t))},ge=o=>t=>{var a;(a=o.onMouseDown)==null||a.call(o,t),!t.defaultMuiPrevented&&(t.shiftKey||t.ctrlKey||t.metaKey||d.disabled)&&t.preventDefault()},be=o=>t=>{var a;(a=o.onChange)==null||a.call(o,t),!t.defaultMuiPrevented&&(p||d.disabled||P.handleCheckboxSelection(t))},Ce=o=>t=>{var a;(a=o.onClick)==null||a.call(o,t),!t.defaultMuiPrevented&&m==="iconContainer"&&P.handleExpansion(t)};return{getRootProps:(o={})=>{var j;const t=c({},h(e),h(o));let a;d.selected?a=!0:p||d.disabled?a=void 0:a=!1;const l=c({},t,{ref:_,role:"treeitem",tabIndex:de,id:me,"aria-expanded":d.expandable?d.expanded:void 0,"aria-selected":a,"aria-disabled":d.disabled||void 0},o,{onFocus:pe(t),onBlur:ue(t),onKeyDown:Ie(t)});x&&(l.style={"--TreeView-itemDepth":typeof R=="function"?R(s):R});const T=((j=f.root)==null?void 0:j.call(f,c({},O,{externalEventHandlers:t})))??{};return c({},l,T)},getContentProps:(o={})=>{var T;const t=h(o),a=c({},t,o,{ref:ce,onClick:fe(t),onMouseDown:ge(t),status:d});x&&(a.indentationAtItemLevel=!0);const l=((T=f.content)==null?void 0:T.call(f,c({},O,{externalEventHandlers:t})))??{};return c({},a,l)},getGroupTransitionProps:(o={})=>{const t=h(o),a=c({},t,{unmountOnExit:!0,component:"ul",role:"group",in:d.expanded,children:M},o);return x&&(a.indentationAtItemLevel=!0),a},getIconContainerProps:(o={})=>{const t=h(o);return c({},t,o,{onClick:Ce(t)})},getCheckboxProps:(o={})=>{const t=h(o);return c({},t,{visible:v,ref:J,checked:d.selected,disabled:p||d.disabled,tabIndex:-1},o,{onChange:be(t)})},getLabelProps:(o={})=>{const t=c({},h(o)),a=c({},t,{children:C},o,{onDoubleClick:xe(t)});return u.isTreeViewEditable&&(a.editable=d.editable),a},getLabelInputProps:(o={})=>{var l;const t=h(o),a=((l=f.labelInput)==null?void 0:l.call(f,{rootRefObject:q,contentRefObject:L,externalEventHandlers:t,interactions:P}))??{};return c({},o,a)},getDragAndDropOverlayProps:(o={})=>{var l;const t=h(o),a=((l=f.dragAndDropOverlay)==null?void 0:l.call(f,c({},O,{externalEventHandlers:t})))??{};return c({},o,a)},rootRef:_,status:d,publicAPI:w}},Ne=We;function Xe(e){const{slots:n,slotProps:r,status:I}=e,x=$(),p=c({},x.icons.slots,{expandIcon:x.icons.slots.expandIcon??ke,collapseIcon:x.icons.slots.collapseIcon??Re}),v=x.icons.slotProps;let m;n!=null&&n.icon?m="icon":I.expandable?I.expanded?m="collapseIcon":m="expandIcon":m="endIcon";const b=(n==null?void 0:n[m])??p[m],u=Me({elementType:b,externalSlotProps:w=>c({},Q(v[m],w),Q(r==null?void 0:r[m],w)),ownerState:{}});return b?i.jsx(b,c({},u)):null}const Ue=["visible"],Qe=y("li",{name:"MuiTreeItem2",slot:"Root",overridesResolver:(e,n)=>n.root})({listStyle:"none",margin:0,padding:0,outline:0}),Ye=y("div",{name:"MuiTreeItem2",slot:"Content",overridesResolver:(e,n)=>n.content,shouldForwardProp:e=>K(e)&&e!=="status"&&e!=="indentationAtItemLevel"})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",position:"relative",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:`calc(${e.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`}},{props:({status:n})=>n.disabled,style:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"}},{props:({status:n})=>n.focused,style:{backgroundColor:(e.vars||e).palette.action.focus}},{props:({status:n})=>n.selected,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:D(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},{props:({status:n})=>n.selected&&n.focused,style:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:D(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}]})),Ze=y("div",{name:"MuiTreeItem2",slot:"Label",overridesResolver:(e,n)=>n.label,shouldForwardProp:e=>K(e)&&e!=="editable"})(({theme:e})=>c({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative",overflow:"hidden"},e.typography.body1,{variants:[{props:({editable:n})=>n,style:{paddingLeft:"2px"}}]})),He=y("div",{name:"MuiTreeItem2",slot:"IconContainer",overridesResolver:(e,n)=>n.iconContainer})({width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}}),et=y(Ae,{name:"MuiTreeItem2",slot:"GroupTransition",overridesResolver:(e,n)=>n.groupTransition,shouldForwardProp:e=>K(e)&&e!=="indentationAtItemLevel"})({margin:0,padding:0,paddingLeft:"var(--TreeView-itemChildrenIndentation)",variants:[{props:{indentationAtItemLevel:!0},style:{paddingLeft:0}}]}),tt=y(S.forwardRef((e,n)=>{const{visible:r}=e,I=je(e,Ue);return r?i.jsx(Ee,c({},I,{ref:n})):null}),{name:"MuiTreeItem2",slot:"Checkbox",overridesResolver:(e,n)=>n.checkbox})({padding:0});function ot(){return i.jsx(ie,{children:`
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2GroupTransition,
  TreeItem2Label,
  TreeItem2Root,
  TreeItem2Checkbox,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
            
 const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'CustomTreeItemView ',
},
]; 


const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
    padding: theme.spacing(0.5, 1),
  }));
  
  
  
  const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: any, ref) {
  const { id, itemId, label, disabled, children, ...other } = props;
  
    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getCheckboxProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });
  
    return (
      <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root {...getRootProps(other)}>
          <CustomTreeItemContent {...getContentProps()}>
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
            <TreeItem2Checkbox {...getCheckboxProps()} />
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
              <Avatar
                sx={(theme) => ({
                  background: theme.palette.primary.main,
                  width: 24,
                  height: 24,
                  fontSize: '0.8rem',
                })}
              >
                {(label )[0]}
              </Avatar>
              <TreeItem2Label {...getLabelProps()} />
            </Box>
          </CustomTreeItemContent>
          {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
        </TreeItem2Root>
      </TreeItem2Provider>
    );
  });
  
  export default function CustomTreeItemView() {
    return (
    
  
        <Box sx={{ minHeight: 200, minWidth: 250 }}>
          <SimpleTreeView defaultExpandedItems={['3']}>
            <CustomTreeItem itemId="1" label="Amelia Hart">
              <CustomTreeItem itemId="2" label="Jane Fisher" />
            </CustomTreeItem>
            <CustomTreeItem itemId="3" label="Bailey Monroe">
              <CustomTreeItem itemId="4" label="Freddie Reed" />
              <CustomTreeItem itemId="5" label="Georgia Johnson">
                <CustomTreeItem itemId="6" label="Samantha Malone" />
              </CustomTreeItem>
            </CustomTreeItem>
          </SimpleTreeView>
        </Box>
   
    );
  }
                 `})}const rt=y(Ye)(({theme:e})=>({padding:e.spacing(.5,1)})),k=S.forwardRef(function(n,r){const{id:I,itemId:x,label:p,disabled:v,children:m,...b}=n,{getRootProps:u,getContentProps:w,getIconContainerProps:R,getCheckboxProps:A,getLabelProps:s,getGroupTransitionProps:C,status:M}=Ne({id:I,itemId:x,children:m,label:p,disabled:v,rootRef:r,...b});return i.jsx(Se,{itemId:x,children:i.jsxs(Qe,{...u(b),children:[i.jsxs(rt,{...w(),children:[i.jsx(He,{...R(),children:i.jsx(Xe,{status:M})}),i.jsx(tt,{...A()}),i.jsxs(z,{sx:{flexGrow:1,display:"flex",gap:1},children:[i.jsx(De,{sx:V=>({background:V.palette.primary.main,width:24,height:24,fontSize:"0.8rem"}),children:p[0]}),i.jsx(Ze,{...s()})]})]}),m&&i.jsx(et,{...C()})]})})});function it(){return i.jsx(re,{title:"CustomTreeItem",codeModel:i.jsx(ot,{}),children:i.jsx(z,{sx:{minHeight:200,minWidth:250},children:i.jsxs(ne,{defaultExpandedItems:["3"],children:[i.jsx(k,{itemId:"1",label:"Amelia Hart",children:i.jsx(k,{itemId:"2",label:"Jane Fisher"})}),i.jsxs(k,{itemId:"3",label:"Bailey Monroe",children:[i.jsx(k,{itemId:"4",label:"Freddie Reed"}),i.jsx(k,{itemId:"5",label:"Georgia Johnson",children:i.jsx(k,{itemId:"6",label:"Samantha Malone"})})]})]})})})}const nt=[{to:"/",title:"Home"},{title:"SimpleTreeView "}],mo=()=>i.jsxs(he,{title:"SimpleTreeView",description:"this is SimpleTreeView ",children:[i.jsx(Te,{title:"SimpleTreeView",items:nt}),i.jsxs(Ve,{container:!0,spacing:3,children:[i.jsx(_e,{}),i.jsx(it,{})]})]});export{mo as default};
