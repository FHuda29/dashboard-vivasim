import{r as g,j as t}from"./index-bBoaL7NX.js";import{B as N}from"./Breadcrumb-Db9PlBea.js";import{P as X}from"./PageContainer-ClH7HaBW.js";import{C}from"./CodeDialog-75JXnHwL.js";import{P as k}from"./ParentCard-CFe-nEgX.js";import{u as j}from"./Paper-CEo52ZYq.js";import{S as c}from"./Stack-DONMPCRZ.js";import{B as s}from"./Box-Cbtftx36.js";import{j as D,i as e}from"./Typography-B41TU7cT.js";import{a as T}from"./useChartContainerDimensions-DE_vA97Y.js";import{B as I}from"./BarPlot-CUDQMW5p.js";import{A as K,L as U,b as W}from"./LineHighlightPlot-BCkgaSGS.js";import{R as Y,C as q,a as J}from"./ChartsAxisHighlight-CKgzosZP.js";import{F as H}from"./FormControlLabel-qTc2OSFR.js";import{S as A}from"./Switch-DpyDSQj6.js";import{G as O}from"./Grid2-CC46JW8y.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Tooltip-CRAcMsX-.js";import"./useSlot-C2y4Okaq.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useThemeProps-BKqztWfv.js";import"./useChartId-Ds7cgTCY.js";import"./useSkipAnimation-DR_2Sz6H.js";import"./path-DyVhHtw_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CaUBXsoR.js";import"./SwitchBase-DqWPx54W.js";import"./isMuiElement-CYEUdTOG.js";const Q=["xAxis","yAxis","width","height","margin","colors","sx","showTooltip","tooltip","showHighlight","axisHighlight","children","slots","slotProps","data","plotType","valueFormatter","area","curve","className"],V={top:5,bottom:5,left:5,right:5},n=g.forwardRef(function(r,h){const{xAxis:x,yAxis:L,width:d,height:S,margin:f=V,colors:l,sx:v,showTooltip:b,tooltip:u,showHighlight:B,axisHighlight:P,children:G,slots:m,slotProps:p,data:y,plotType:a="line",valueFormatter:F=w=>w===null?"":w.toString(),area:R,curve:_="linear",className:E}=r,z=D(r,Q),o=e({},B&&a==="bar"?{x:"band"}:{x:"none"},P);return t.jsxs(Y,e({},z,{ref:h,series:[e({type:a,data:y,valueFormatter:F},a==="bar"?{}:{area:R,curve:_,disableHighlight:!B})],width:d,height:S,margin:f,className:E,xAxis:[e({id:T,scaleType:a==="bar"?"band":"point",data:Array.from({length:y.length},(w,M)=>M),hideTooltip:x===void 0},x)],yAxis:[e({id:T},L)],colors:l,sx:v,disableAxisListener:(!b||(u==null?void 0:u.trigger)!=="axis")&&(o==null?void 0:o.x)==="none"&&(o==null?void 0:o.y)==="none",children:[a==="bar"&&t.jsx(I,{skipAnimation:!0,slots:m,slotProps:p,sx:{shapeRendering:"auto"}}),a==="line"&&t.jsxs(g.Fragment,{children:[t.jsx(K,{skipAnimation:!0,slots:m,slotProps:p}),t.jsx(U,{skipAnimation:!0,slots:m,slotProps:p}),t.jsx(W,{slots:m,slotProps:p})]}),t.jsx(q,e({},o)),b&&t.jsx(J,e({},u,{slotProps:p,slots:m})),G]}))});function Z(){return t.jsx(C,{children:`

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTheme } from '@mui/material';
const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BasicSparkLine ',
},
]; 

 function BasicSparkLine() {
    const theme = useTheme();
    const primary = theme.palette.primary.main;


    return (

            <Stack direction="row" sx={{ width: '100%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} colors={[primary]} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        plotType="bar"
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                        colors={[primary]}
                    />
                </Box>
            </Stack>
    )
}

export default BasicSparkLine
    

`})}function $(){const r=j().palette.primary.main;return t.jsx(k,{title:"Basic Chart",codeModel:t.jsx(Z,{}),children:t.jsxs(c,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[1,4,2,5,7,2,4,6],height:100,colors:[r]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{plotType:"bar",data:[1,4,2,5,7,2,4,6],height:100,colors:[r]})})]})})}function tt(){return t.jsx(C,{children:`

    import * as React from 'react';
    import Stack from '@mui/material/Stack';
    import Box from '@mui/material/Box';
    import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
    import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'AreaSparkLineChart ',
},
]; 

export default function AreaSparkLineChart() {
        const theme = useTheme();
        const primary = theme.palette.primary.main;
        return (
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart data={[3, -10, -2, 5, 7, -2, 4, 6]} height={100} area colors={[primary]} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={[3, -10, -2, 5, 7, -2, 4, 6]}
                            height={100}
                            curve="natural"
                            colors={[primary]}
                            area
                        />
                    </Box>
                </Stack>
          
        );
    }
`})}function rt(){const r=j().palette.primary.main;return t.jsx(k,{title:"AreaSparkLine Chart",codeModel:t.jsx(tt,{}),children:t.jsxs(c,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[3,-10,-2,5,7,-2,4,6],height:100,area:!0,colors:[r]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[3,-10,-2,5,7,-2,4,6],height:100,curve:"natural",colors:[r],area:!0})})]})})}function ot(){return t.jsx(C,{children:`
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTheme } from '@mui/material';

 const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BasicSparkLineCustomizationChart ',
},
]; 


export default function BasicSparkLineCustomizationChart() {
    const [showHighlight, setShowHighlight] = React.useState(true);
    const [showTooltip, setShowTooltip] = React.useState(true);

    const theme = useTheme();
    const primary = theme.palette.primary.main;

    const handleHighlightChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setShowHighlight(event.target.checked);
    };

    const handleTooltipChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setShowTooltip(event.target.checked);
    };

    return (

            <Stack direction="column" sx={{ width: '100%' }}>
                <Stack direction="row">
                    <FormControlLabel
                        value="end"
                        control={
                            <Switch
                                color="primary"
                                checked={showHighlight}
                                onChange={handleHighlightChange}

                            />
                        }
                        label="showHighlight"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={
                            <Switch
                                color="primary"
                                checked={showTooltip}
                                onChange={handleTooltipChange}
                            />
                        }
                        label="showTooltip"
                        labelPlacement="end"
                    />
                </Stack>
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                            showHighlight={showHighlight}
                            showTooltip={showTooltip}
                            colors={[primary]}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                            showHighlight={showHighlight}
                            showTooltip={showTooltip}
                            colors={[primary]}
                        />
                    </Box>
                </Stack>
            </Stack>

    );
}
            `})}function et(){const[i,r]=g.useState(!0),[h,x]=g.useState(!0),d=j().palette.primary.main,S=l=>{r(l.target.checked)},f=l=>{x(l.target.checked)};return t.jsx(k,{title:" Customization Chart",codeModel:t.jsx(ot,{}),children:t.jsxs(c,{direction:"column",sx:{width:"100%"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(H,{value:"end",control:t.jsx(A,{color:"primary",checked:i,onChange:S}),label:"showHighlight",labelPlacement:"end"}),t.jsx(H,{value:"end",control:t.jsx(A,{color:"primary",checked:h,onChange:f}),label:"showTooltip",labelPlacement:"end"})]}),t.jsxs(c,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[1,4,2,5,7,2,4,6],height:100,showHighlight:i,showTooltip:h,colors:[d]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{plotType:"bar",data:[1,4,2,5,7,2,4,6],height:100,showHighlight:i,showTooltip:h,colors:[d]})})]})]})})}const it=[{to:"/",title:"Home"},{title:"SparkLineCharts "}],nr=()=>t.jsxs(X,{title:"SparkLineCharts",description:"this is SparkLineCharts ",children:[t.jsx(N,{title:"SparkLineCharts",items:it}),t.jsxs(O,{container:!0,spacing:3,children:[t.jsx($,{}),t.jsx(rt,{}),t.jsx(et,{})]})]});export{nr as default};
