import{j as t}from"./index-bBoaL7NX.js";import{C as s}from"./react-apexcharts.min-Ct7wb3Ln.js";import{P as m}from"./PageContainer-ClH7HaBW.js";import{B as p}from"./Breadcrumb-Db9PlBea.js";import{P as l}from"./ParentCard-CFe-nEgX.js";import{C as n}from"./CodeDialog-75JXnHwL.js";import{u as h}from"./Paper-CEo52ZYq.js";import"./Grid2-CC46JW8y.js";import"./Typography-B41TU7cT.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";const c=()=>t.jsx(t.Fragment,{children:t.jsx(n,{children:`
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
    title: 'Area Chart',
  },
];

const AreaChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionsareachart:Props = {
    chart: {
      id: 'area-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: '3',
      curve: 'smooth',
    },
    colors: [primary, secondary],
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00',
      ],
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriesareachart = [
    {
      name: 'Sales Summery 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Summery 2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

    return (
        <Chart options={optionsareachart} series={seriesareachart} type="area" height="300px" />
    );
};

export default AreaChart;`})}),d=[{to:"/",title:"Home"},{title:"Area Chart"}],rt=()=>{const r=h(),e=r.palette.primary.main,a=r.palette.secondary.main,o={chart:{id:"area-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",zoom:{enabled:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:"3",curve:"smooth"},colors:[e,a],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},yaxis:{opposite:!1,labels:{show:!0}},legend:{show:!0,position:"bottom",width:"50px"},grid:{show:!1},tooltip:{theme:"dark",fillSeriesColor:!1}},i=[{name:"Sales Summery 1",data:[31,40,28,51,42,109,100]},{name:"Sales Summery 2",data:[11,32,45,32,34,52,41]}];return t.jsxs(m,{title:"Area Chart",description:"this is innerpage",children:[t.jsx(p,{title:"Area Chart",items:d}),t.jsx(l,{title:"Area Chart",codeModel:t.jsx(c,{}),children:t.jsx(s,{options:o,series:i,type:"area",height:"300px"})})]})};export{rt as default};
