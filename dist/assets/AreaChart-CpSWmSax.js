import{j as t}from"./index-q1gJB5H0.js";import{C as i}from"./react-apexcharts.min-C7pxt2jz.js";import{P as m}from"./PageContainer-ShAoTXqo.js";import{B as p}from"./Breadcrumb-Sx0jSoUO.js";import{P as l}from"./ParentCard-BoIC9gk3.js";import{C as n}from"./CodeDialog-BUiQRyz8.js";import{u as h}from"./Paper-BfYJvf2K.js";import"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Box-DjbeIn6R.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";const c=()=>t.jsx(t.Fragment,{children:t.jsx(n,{children:`
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

export default AreaChart;`})}),d=[{to:"/",title:"Home"},{title:"Area Chart"}],_=()=>{const r=h(),e=r.palette.primary.main,a=r.palette.secondary.main,o={chart:{id:"area-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",zoom:{enabled:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:"3",curve:"smooth"},colors:[e,a],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},yaxis:{opposite:!1,labels:{show:!0}},legend:{show:!0,position:"bottom",width:"50px"},grid:{show:!1},tooltip:{theme:"dark",fillSeriesColor:!1}},s=[{name:"Sales Summery 1",data:[31,40,28,51,42,109,100]},{name:"Sales Summery 2",data:[11,32,45,32,34,52,41]}];return t.jsxs(m,{title:"Area Chart",description:"this is innerpage",children:[t.jsx(p,{title:"Area Chart",items:d}),t.jsx(l,{title:"Area Chart",codeModel:t.jsx(c,{}),children:t.jsx(i,{options:o,series:s,type:"area",height:"300px"})})]})};export{_ as default};
