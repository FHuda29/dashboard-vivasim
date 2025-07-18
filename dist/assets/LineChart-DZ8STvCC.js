import{j as t}from"./index-bBoaL7NX.js";import{C as s}from"./react-apexcharts.min-Ct7wb3Ln.js";import{P as n}from"./PageContainer-ClH7HaBW.js";import{B as m}from"./Breadcrumb-Db9PlBea.js";import{P as p}from"./ParentCard-CFe-nEgX.js";import{C as l}from"./CodeDialog-75JXnHwL.js";import{u as h}from"./Paper-CEo52ZYq.js";import"./Grid2-CC46JW8y.js";import"./Typography-B41TU7cT.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";const c=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Props } from 'react-apexcharts';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Line Chart',
  },
];

const LineChart = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionslinechart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        type: 'x',
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      shadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month',
      },
    },
    grid: {
      show: false,
    },
    colors: [primary, secondary],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
      width: '2',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const serieslinechart: any = [
    {
      name: 'High - 2013',
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: 'Low - 2013',
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  return (
    <Chart
        options={optionslinechart}
        series={serieslinechart}
        type="line"
        height="308px"
        width={'90%'}
    />
  );
};

export default LineChart;`})}),d=[{to:"/",title:"Home"},{title:"Line Chart"}],et=()=>{const e=h(),r=e.palette.primary.main,o=e.palette.secondary.main,i={chart:{height:350,type:"line",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",zoom:{type:"x",enabled:!0},toolbar:{show:!1},shadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},grid:{show:!1},colors:[r,o],dataLabels:{enabled:!0},stroke:{curve:"straight",width:"2"},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark"}},a=[{name:"High - 2013",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}];return t.jsxs(n,{title:"Line Chart",description:"this is innerpage",children:[t.jsx(m,{title:"Line Chart",items:d}),t.jsx(p,{title:"Line Chart",codeModel:t.jsx(c,{}),children:t.jsx(s,{options:i,series:a,type:"line",height:"308px",width:"90%"})})]})};export{et as default};
