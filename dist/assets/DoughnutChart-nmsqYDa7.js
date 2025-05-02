import{j as t}from"./index-q1gJB5H0.js";import{C as p}from"./react-apexcharts.min-C7pxt2jz.js";import{P as g}from"./PageContainer-ShAoTXqo.js";import{B as f}from"./Breadcrumb-Sx0jSoUO.js";import{P as m}from"./ParentCard-BoIC9gk3.js";import{C as l}from"./CodeDialog-BUiQRyz8.js";import{u as y}from"./Paper-BfYJvf2K.js";import{G as e}from"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Box-DjbeIn6R.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";const x=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import  Grid  from '@mui/material/Grid2';
import { Props } from 'react-apexcharts';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Doughtnut Chart',
  },
];

const DoughnutChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 1
  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriesdoughnutchart = [45, 15, 27, 18, 35];

    return (
        <Chart
            options={optionsdoughnutchart}
            series={seriesdoughnutchart}
            type="donut"
            height="300px"
        />
    );
};

export default DoughnutChart;
`})}),C=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import  Grid  from '@mui/material/Grid2';
import { Props } from 'react-apexcharts';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Doughtnut Chart',
  },
];

const DoughnutChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 2
  const optionspiechart: Props = {
    chart: {
      id: 'pie-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      fillSeriesColor: false,
    },
  };
  const seriespiechart = [45, 15, 27, 18, 35];

  return (
    <Chart options={optionspiechart} series={seriespiechart} type="pie" height="300px" />
  );
};

export default DoughnutChart;
`})}),b=[{to:"/",title:"Home"},{title:"Doughtnut Chart"}],at=()=>{const r=y(),o=r.palette.primary.main,i=r.palette.primary.light,a=r.palette.secondary.main,s=r.palette.secondary.light,n=r.palette.warning.main,h={chart:{id:"donut-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb"},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:[o,i,a,s,n],tooltip:{theme:"dark",fillSeriesColor:!1}},c=[45,15,27,18,35],d={chart:{id:"pie-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:[o,i,a,s,n],tooltip:{fillSeriesColor:!1}},u=[45,15,27,18,35];return t.jsxs(g,{title:"Doughnut & Pie Chart",description:"this is innerpage",children:[t.jsx(f,{title:"Doughtnut Chart",items:b}),t.jsxs(e,{container:!0,spacing:3,children:[t.jsx(e,{size:{lg:6,md:12,xs:12},children:t.jsx(m,{title:"Doughnut Charts",codeModel:t.jsx(x,{}),children:t.jsx(p,{options:h,series:c,type:"donut",height:"300px"})})}),t.jsx(e,{size:{lg:6,md:12,xs:12},children:t.jsx(m,{title:"Pie Charts",codeModel:t.jsx(C,{}),children:t.jsx(p,{options:d,series:u,type:"pie",height:"300px"})})})]})]})};export{at as default};
