import{r as g,j as t}from"./index-D0CpDmcp.js";import{B as N}from"./Breadcrumb-BVcp9-n_.js";import{P as X}from"./PageContainer-GyGJwSoy.js";import{C}from"./CodeDialog-CpWyUB1H.js";import{P as k}from"./ParentCard-Dds6eSz-.js";import{u as j}from"./Paper-DYTAYSZ1.js";import{S as p}from"./Stack-Br4H6Iex.js";import{B as s}from"./Box-YfWKO8y5.js";import{j as D,i as e}from"./Typography-CxjCbjeZ.js";import{a as T}from"./useChartContainerDimensions-Ch9nbZR1.js";import{B as I}from"./BarPlot-B4bOl9vV.js";import{A as K,L as U,b as W}from"./LineHighlightPlot-B0eIQHu0.js";import{R as Y,C as q,a as J}from"./ChartsAxisHighlight-WSH_2Zl3.js";import{F as H}from"./FormControlLabel-LXhN-eej.js";import{S as A}from"./Switch-C6H7-67b.js";import{G as O}from"./Grid2-B3gzDQ3y.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Tooltip-BtHUzaXN.js";import"./useSlot-CFWOFHMb.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./createStack-D1qoiK_y.js";import"./useThemeProps-C4yCam4T.js";import"./useChartId-C9fSUyqb.js";import"./useSkipAnimation-AiDwk6dP.js";import"./path-DyVhHtw_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CdybHpQR.js";import"./SwitchBase-DtKwjBpU.js";const Q=["xAxis","yAxis","width","height","margin","colors","sx","showTooltip","tooltip","showHighlight","axisHighlight","children","slots","slotProps","data","plotType","valueFormatter","area","curve","className"],V={top:5,bottom:5,left:5,right:5},n=g.forwardRef(function(r,h){const{xAxis:x,yAxis:L,width:d,height:S,margin:f=V,colors:l,sx:v,showTooltip:b,tooltip:u,showHighlight:B,axisHighlight:P,children:G,slots:m,slotProps:c,data:y,plotType:a="line",valueFormatter:F=w=>w===null?"":w.toString(),area:R,curve:_="linear",className:E}=r,z=D(r,Q),o=e({},B&&a==="bar"?{x:"band"}:{x:"none"},P);return t.jsxs(Y,e({},z,{ref:h,series:[e({type:a,data:y,valueFormatter:F},a==="bar"?{}:{area:R,curve:_,disableHighlight:!B})],width:d,height:S,margin:f,className:E,xAxis:[e({id:T,scaleType:a==="bar"?"band":"point",data:Array.from({length:y.length},(w,M)=>M),hideTooltip:x===void 0},x)],yAxis:[e({id:T},L)],colors:l,sx:v,disableAxisListener:(!b||(u==null?void 0:u.trigger)!=="axis")&&(o==null?void 0:o.x)==="none"&&(o==null?void 0:o.y)==="none",children:[a==="bar"&&t.jsx(I,{skipAnimation:!0,slots:m,slotProps:c,sx:{shapeRendering:"auto"}}),a==="line"&&t.jsxs(g.Fragment,{children:[t.jsx(K,{skipAnimation:!0,slots:m,slotProps:c}),t.jsx(U,{skipAnimation:!0,slots:m,slotProps:c}),t.jsx(W,{slots:m,slotProps:c})]}),t.jsx(q,e({},o)),b&&t.jsx(J,e({},u,{slotProps:c,slots:m})),G]}))});function Z(){return t.jsx(C,{children:`

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
    

`})}function $(){const r=j().palette.primary.main;return t.jsx(k,{title:"Basic Chart",codeModel:t.jsx(Z,{}),children:t.jsxs(p,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[1,4,2,5,7,2,4,6],height:100,colors:[r]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{plotType:"bar",data:[1,4,2,5,7,2,4,6],height:100,colors:[r]})})]})})}function tt(){return t.jsx(C,{children:`

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
`})}function rt(){const r=j().palette.primary.main;return t.jsx(k,{title:"AreaSparkLine Chart",codeModel:t.jsx(tt,{}),children:t.jsxs(p,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[3,-10,-2,5,7,-2,4,6],height:100,area:!0,colors:[r]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[3,-10,-2,5,7,-2,4,6],height:100,curve:"natural",colors:[r],area:!0})})]})})}function ot(){return t.jsx(C,{children:`
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
            `})}function et(){const[i,r]=g.useState(!0),[h,x]=g.useState(!0),d=j().palette.primary.main,S=l=>{r(l.target.checked)},f=l=>{x(l.target.checked)};return t.jsx(k,{title:" Customization Chart",codeModel:t.jsx(ot,{}),children:t.jsxs(p,{direction:"column",sx:{width:"100%"},children:[t.jsxs(p,{direction:"row",children:[t.jsx(H,{value:"end",control:t.jsx(A,{color:"primary",checked:i,onChange:S}),label:"showHighlight",labelPlacement:"end"}),t.jsx(H,{value:"end",control:t.jsx(A,{color:"primary",checked:h,onChange:f}),label:"showTooltip",labelPlacement:"end"})]}),t.jsxs(p,{direction:"row",sx:{width:"100%"},children:[t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{data:[1,4,2,5,7,2,4,6],height:100,showHighlight:i,showTooltip:h,colors:[d]})}),t.jsx(s,{sx:{flexGrow:1},children:t.jsx(n,{plotType:"bar",data:[1,4,2,5,7,2,4,6],height:100,showHighlight:i,showTooltip:h,colors:[d]})})]})]})})}const it=[{to:"/",title:"Home"},{title:"SparkLineCharts "}],ir=()=>t.jsxs(X,{title:"SparkLineCharts",description:"this is SparkLineCharts ",children:[t.jsx(N,{title:"SparkLineCharts",items:it}),t.jsxs(O,{container:!0,spacing:3,children:[t.jsx($,{}),t.jsx(rt,{}),t.jsx(et,{})]})]});export{ir as default};
