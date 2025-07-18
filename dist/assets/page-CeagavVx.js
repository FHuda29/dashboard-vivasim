import{j as t,bH as n,bI as f}from"./index-bBoaL7NX.js";import{B as T}from"./Breadcrumb-Db9PlBea.js";import{P as O}from"./PageContainer-ClH7HaBW.js";import{C as p}from"./CodeDialog-75JXnHwL.js";import{P as m}from"./ParentCard-CFe-nEgX.js";import{u as h}from"./Paper-CEo52ZYq.js";import{L as l}from"./LineChart-CYHM6R3I.js";import{l as j,A as S,a as A}from"./LineHighlightPlot-BCkgaSGS.js";import{n as P,o as w}from"./ChartsAxisHighlight-CKgzosZP.js";import{S as b}from"./Stack-DONMPCRZ.js";import{b as k}from"./useChartContainerDimensions-DE_vA97Y.js";import{G as L}from"./Grid2-CC46JW8y.js";import"./Typography-B41TU7cT.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Tooltip-CRAcMsX-.js";import"./useSlot-C2y4Okaq.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./useChartId-Ds7cgTCY.js";import"./path-DyVhHtw_.js";import"./useSkipAnimation-DR_2Sz6H.js";import"./ChartsOverlay-Bakv7Mz0.js";import"./ChartsText-C5vGDRrm.js";import"./useThemeProps-BKqztWfv.js";import"./useThemeProps-BUO-Zg8Q.js";import"./ChartsOnAxisClickHandler-B7dIhAvG.js";import"./ChartsGrid-NX48u9kv.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";function H(){return t.jsx(p,{children:`

"use client";

import { useTheme } from "@mui/material";
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'SimpleAreaChart ',
},
]; 
export default function SimpleAreaChart() {
  const monthlyProfits = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const xLabels = ["January", "February", "March", "April", "May", "June", "July"];

    const theme = useTheme();
    const primary = theme.palette.primary.main;

    return (

            <LineChart
            
                height={300}
                series={[{ data: monthlyProfits, label: 'Profits', area: true, showMark: false, color: primary }]}

                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [\`& .\${lineElementClasses.root}\`]: {
                     display: 'none',
                    },
                }}
            />
     
    );
}
`})}function J(){const o=[4e3,3e3,2e3,2780,1890,2390,3490],a=["January","February","March","April","May","June","July"],i=h().palette.primary.main;return t.jsx(m,{title:"Simple AreaChart",codeModel:t.jsx(H,{}),children:t.jsx(l,{height:300,series:[{data:o,label:"Profits",area:!0,showMark:!1,color:i}],xAxis:[{scaleType:"point",data:a}],sx:{[`& .${j.root}`]:{display:"none"}}})})}function E(){return t.jsx(p,{children:`

"use client";
import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'StackedAreaChart ',
},
]; 

export default function StackedAreaChart() {
      const monthlyProfits = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const monthlyRevenue = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const monthlyExpenses = [2400, 2210, 0, 2000, 2181, 2500, 2100];
    const xLabels = ["January", "February", "March", "April", "May", "June", "July"];

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const expDatacolor = theme.palette.error.main;

    return (

            <LineChart
                
                height={300}
                 series={[
                    { data: monthlyRevenue, label: 'Revenue', area: true, stack: 'total', showMark: false, color: primary },
                    { data: monthlyProfits, label: 'Profits', area: true, stack: 'total', showMark: false, color: secondary },
                    {
                        data: monthlyExpenses,
                        label: 'Expenses',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: expDatacolor
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [\`& .\${lineElementClasses.root}\`]: {
                display: 'none',
                    },
                }}
            />
      
    );
}
`})}function B(){const o=[4e3,3e3,2e3,2780,1890,2390,3490],a=[2400,1398,9800,3908,4800,3800,4300],s=[2400,2210,0,2e3,2181,2500,2100],i=["January","February","March","April","May","June","July"],e=h(),u=e.palette.primary.main,r=e.palette.secondary.main,c=e.palette.error.main;return t.jsx(m,{title:"Stacked Chart",codeModel:t.jsx(E,{}),children:t.jsx(l,{height:300,series:[{data:a,label:"Revenue",area:!0,stack:"total",showMark:!1,color:u},{data:o,label:"Profits",area:!0,stack:"total",showMark:!1,color:r},{data:s,label:"Expenses",area:!0,stack:"total",showMark:!1,color:c}],xAxis:[{scaleType:"point",data:i}],sx:{[`& .${j.root}`]:{display:"none"}}})})}function F(){return t.jsx(p,{children:`

"use client";
import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AreaPlot } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material";

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'TinyAreaChart ',
},
]; 

export default function TinyAreaChart() {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const xLabels = [
        ' A',
        ' B',
        ' C',
        ' D',
        ' E',
        ' F',
        ' G',
    ];
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    return (
     

            <ChartContainer
                width={800}
                height={300}
                series={[
                    {
                        data: uData,
                        type: 'line',
                        label: 'uv',
                        area: true,
                        stack: 'total',
                        color: primary
                    },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            >
                <AreaPlot />
            </ChartContainer>
    
    );
}

`})}function R(){const o=[4e3,3e3,2e3,2780,1890,2390,3490],a=[" A"," B"," C"," D"," E"," F"," G"],i=h().palette.primary.main;return t.jsx(m,{title:"Tiny Chart",codeModel:t.jsx(F,{}),children:t.jsx(P,{width:800,height:300,series:[{data:o,type:"line",label:"uv",area:!0,stack:"total",color:i}],xAxis:[{scaleType:"point",data:a}],children:t.jsx(S,{})})})}function $(){return t.jsx(p,{children:`

"use client";
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'PercentAreaChart ',
},
]; 
const time = [
    new Date(2015, 1, 0),
    new Date(2015, 2, 0),
    new Date(2015, 3, 0),
    new Date(2015, 4, 0),
    new Date(2015, 5, 0),
    new Date(2015, 6, 0),
    new Date(2015, 7, 0),
];
const a = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const b = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const c = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const getPercents = (array) =>
    array.map((v, index) => (100 * v) / (a[index] + b[index] + c[index]));

export default function PercentAreaChart() {

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const amtDatacolor = theme.palette.error.main;

    return (

            <LineChart
            
                height={300}
                series={[
                    {
                        data: getPercents(a),
                        type: 'line',
                        label: 'Revenue',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: primary
                    },
                    {
                        data: getPercents(b),
                        type: 'line',
                        label: 'Profits',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: secondary
                    },
                    {
                        data: getPercents(c),
                        type: 'line',
                        label: 'Expenses',
                        area: true,
                        stack: 'total',
                        showMark: false,
                        color: amtDatacolor
                    },
                ]}
                xAxis={[
                    {
                        scaleType: 'time',
                        data: time,
                        min: time[0].getTime(),
                        max: time[time.length - 1].getTime(),

                    },
                ]}
            />
    );
}
`})}const d=[new Date(2015,1,0),new Date(2015,2,0),new Date(2015,3,0),new Date(2015,4,0),new Date(2015,5,0),new Date(2015,6,0),new Date(2015,7,0)],M=[4e3,3e3,2e3,2780,1890,2390,3490],D=[2400,1398,9800,3908,4800,3800,4300],v=[2400,2210,2290,2e3,2181,2500,2100],x=o=>o.map((a,s)=>100*a/(M[s]+D[s]+v[s]));function G(){const o=h(),a=o.palette.primary.main,s=o.palette.secondary.main,i=o.palette.error.main;return t.jsx(m,{title:"Percent Chart",codeModel:t.jsx($,{}),children:t.jsx(l,{height:300,series:[{data:x(M),type:"line",label:"Revenue",area:!0,stack:"total",showMark:!1,color:a},{data:x(D),type:"line",label:"Profits",area:!0,stack:"total",showMark:!1,color:s},{data:x(v),type:"line",label:"Expenses",area:!0,stack:"total",showMark:!1,color:i}],xAxis:[{scaleType:"time",data:d,min:d[0].getTime(),max:d[d.length-1].getTime()}]})})}function U(){return t.jsx(p,{children:`
'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'AreaChartConnectNulls ',
},
]; 

export default function AreaChartConnectNulls() {
    const data = [4000, 3000, 2000, null, 1890, 2390, 3490];
     const xData = ["January", "February", "March", "April", "May", "June", "July"];

    const theme = useTheme();
    const primary = theme.palette.primary.main;
 
    return (

            <Stack sx={{ width: '100%' }}>
                <LineChart
                    xAxis={[{ data: xData, scaleType: 'point' }]}
                    series={[{ data, showMark: false, area: true, color: primary }]}
                    height={200}
                    margin={{ top: 10, bottom: 20 }}
                />
                <LineChart
                    xAxis={[{ data: xData, scaleType: 'point' }]}
                    series={[{ data, showMark: false, area: true, connectNulls: true, color: primary}]}
                    height={200}
                    margin={{ top: 10, bottom: 20 }}
                />
            </Stack>
    );
}
      `})}function N(){const o=[4e3,3e3,2e3,null,1890,2390,3490],a=["January","February","March","April","May","June","July"],i=h().palette.primary.main;return t.jsx(m,{title:"ConnectNulls Chart",codeModel:t.jsx(U,{}),children:t.jsxs(b,{sx:{width:"100%"},children:[t.jsx(l,{xAxis:[{data:a,scaleType:"point"}],series:[{data:o,showMark:!1,area:!0,color:i}],height:200,margin:{top:10,bottom:20}}),t.jsx(l,{xAxis:[{data:a,scaleType:"point"}],series:[{data:o,showMark:!1,area:!0,connectNulls:!0,color:i}],height:200,margin:{top:10,bottom:20}})]})})}function V(){return t.jsx(p,{children:`
'use client'
import * as React from 'react';
import { green, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { LineChart, areaElementClasses } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'AreaChartFillByValue ',
},
]; 



function ColorSwich({ threshold, color1, color2, id }) {

    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

   const scale = useYScale(); // You can provide the axis Id if you have multiple ones
    const y0 = scale(threshold); // The coordinate of of the origine
    const off = y0 !== undefined ? y0 / svgHeight : 0;

    return (
        <defs>
            <linearGradient
                id={id}
                x1="0"
                x2="0"
                y1="0"
                y2={\`\${svgHeight}px\`}
                gradientUnits="userSpaceOnUse" 
            >
            <stop offset={off} stopColor={color1} stopOpacity={1} />
            <stop offset={off} stopColor={color2} stopOpacity={1} />
        </linearGradient>
        </defs >
    );
}

export default function AreaChartFillByValue() {
    const data = [4000, 3000, -1000, 500, -2100, -250, 3490];
    const xData = ["January", "February", "March", "April", "May", "June", "July"];


    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const amtDatacolor = theme.palette.error.main;

    return (


        <Stack direction="column" width="100%" spacing={1}>
            <LineChart
                xAxis={[{ data: xData, scaleType: 'point' }]}
                yAxis={[{ min: -3000, max: 4000 }]}
                series={[{ data, showMark: false, area: true }]}
                height={200}
                margin={{ top: 20, bottom: 30, left: 75 }}
             sx={{
                    [\`& .\${areaElementClasses.root}\`]: { // Dynamic class name
                        fill: 'url(#swich-color-id-1)',
                    },
                }}
            >

                <ColorSwich
                    color1={primary}
                    color2={amtDatacolor}
                    threshold={0}
                    id="swich-color-id-1"
                />
                <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-1)" />
            </LineChart>

            <LineChart
                xAxis={[{ data: xData, scaleType: 'point' }]}
                yAxis={[{ min: -3000, max: 4000 }]}
                series={[{ data, showMark: false, area: true }]}
                height={200}
                margin={{ top: 20, bottom: 30, left: 75 }}
                sx={{
                    [\`& .\${areaElementClasses.root}\`]: {
                fill: 'url(#swich-color-id-2)',
                    },
                }}
            >
            <ColorPalette id="swich-color-id-2" />

            <rect x={0} y={0} width={5} height="100%" fill="url(#swich-color-id-2)" />
        </LineChart>
        </Stack >

    );
}

function ColorPalette({ id }) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    const scale = useYScale() // You can provide the axis Id if you have multiple ones

    return (
        <defs>
            <linearGradient
                id={id}
                x1="0"
                x2="0"
                y1="0"
                y2={\`\${svgHeight}px\`}
                gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
            >
                <stop
                    offset={scale(5000) / svgHeight}
                   stopColor={green[400]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={green[400]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(4000) / svgHeight}
                    stopColor={green[300]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={green[300]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(3000) / svgHeight}
                    stopColor={green[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={green[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(2000) / svgHeight}
                    stopColor={green[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={green[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(1000) / svgHeight}
                    stopColor={green[50]}
                    stopOpacity={1}
                />
                <stop offset={scale(0) / svgHeight} stopColor={green[50]} stopOpacity={1} />
                <stop offset={scale(0) / svgHeight} stopColor={red[100]} stopOpacity={1} />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={red[100]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-1000) / svgHeight}
                    stopColor={red[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-2000) / svgHeight}
                    stopColor={red[200]}
                    stopOpacity={1}
                />
                <stop
                    offset={scale(-3000) / svgHeight}
                    stopColor={red[300]}
                    stopOpacity={1}
                />
            </linearGradient>
        </defs>
    );
}

`})}function Y({threshold:o,color1:a,color2:s,id:i}){const{top:e,height:u,bottom:r}=k(),c=e+r+u,C=w()(o),g=C!==void 0?C/c:0;return t.jsx("defs",{children:t.jsxs("linearGradient",{id:i,x1:"0",x2:"0",y1:"0",y2:`${c}px`,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:g,stopColor:a,stopOpacity:1}),t.jsx("stop",{offset:g,stopColor:s,stopOpacity:1})]})})}function I(){const o=[4e3,3e3,-1e3,500,-2100,-250,3490],a=["January","February","March","April","May","June","July"],s=h(),i=s.palette.primary.main,e=s.palette.error.main;return t.jsx(m,{title:" FillByValue Chart",codeModel:t.jsx(V,{}),children:t.jsxs(b,{direction:"column",width:"100%",spacing:1,children:[t.jsxs(l,{xAxis:[{data:a,scaleType:"point"}],yAxis:[{min:-3e3,max:4e3}],series:[{data:o,showMark:!1,area:!0}],height:200,margin:{top:20,bottom:30,left:75},sx:{[`& .${A.root}`]:{fill:"url(#swich-color-id-1)"}},children:[t.jsx(Y,{color1:i,color2:e,threshold:0,id:"swich-color-id-1"}),t.jsx("rect",{x:0,y:0,width:5,height:"100%",fill:"url(#swich-color-id-1)"})]}),t.jsxs(l,{xAxis:[{data:a,scaleType:"point"}],yAxis:[{min:-3e3,max:4e3}],series:[{data:o,showMark:!1,area:!0}],height:200,margin:{top:20,bottom:30,left:75},sx:{[`& .${A.root}`]:{fill:"url(#swich-color-id-2)"}},children:[t.jsx(q,{id:"swich-color-id-2"}),t.jsx("rect",{x:0,y:0,width:5,height:"100%",fill:"url(#swich-color-id-2)"})]})]})})}function q({id:o}){const{top:a,height:s,bottom:i}=k(),e=a+i+s,u=w(),r=c=>{const y=u(c);return y!==void 0?y:0};return t.jsx("defs",{children:t.jsxs("linearGradient",{id:o,x1:"0",x2:"0",y1:"0",y2:`${e}px`,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:r(5e3)/e,stopColor:n[400],stopOpacity:1}),t.jsx("stop",{offset:r(4e3)/e,stopColor:n[400],stopOpacity:1}),t.jsx("stop",{offset:r(4e3)/e,stopColor:n[300],stopOpacity:1}),t.jsx("stop",{offset:r(3e3)/e,stopColor:n[300],stopOpacity:1}),t.jsx("stop",{offset:r(3e3)/e,stopColor:n[200],stopOpacity:1}),t.jsx("stop",{offset:r(2e3)/e,stopColor:n[200],stopOpacity:1}),t.jsx("stop",{offset:r(2e3)/e,stopColor:n[100],stopOpacity:1}),t.jsx("stop",{offset:r(1e3)/e,stopColor:n[100],stopOpacity:1}),t.jsx("stop",{offset:r(1e3)/e,stopColor:n[50],stopOpacity:1}),t.jsx("stop",{offset:r(0)/e,stopColor:n[50],stopOpacity:1}),t.jsx("stop",{offset:r(0)/e,stopColor:f[100],stopOpacity:1}),t.jsx("stop",{offset:r(-1e3)/e,stopColor:f[100],stopOpacity:1}),t.jsx("stop",{offset:r(-1e3)/e,stopColor:f[200],stopOpacity:1}),t.jsx("stop",{offset:r(-2e3)/e,stopColor:f[200],stopOpacity:1}),t.jsx("stop",{offset:r(-3e3)/e,stopColor:f[300],stopOpacity:1})]})})}const z=[{to:"/",title:"Home"},{title:"Mui Area Charts"}],Kt=()=>t.jsxs(O,{title:"Mui Area Chart",description:"this is Mui Area Chart",children:[t.jsx(T,{title:"Mui Area  Chart",items:z}),t.jsxs(L,{container:!0,spacing:3,children:[t.jsx(J,{}),t.jsx(B,{}),t.jsx(R,{}),t.jsx(G,{}),t.jsx(N,{}),t.jsx(I,{})]})]});export{Kt as default};
