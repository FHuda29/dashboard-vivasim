import{j as t}from"./index-q1gJB5H0.js";import{C as n}from"./react-apexcharts.min-C7pxt2jz.js";import{P as p}from"./PageContainer-ShAoTXqo.js";import{B as l}from"./Breadcrumb-Sx0jSoUO.js";import{P as h}from"./ParentCard-BoIC9gk3.js";import{C as c}from"./CodeDialog-BUiQRyz8.js";import{u as d}from"./Paper-BfYJvf2K.js";import"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Box-DjbeIn6R.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";const u=()=>t.jsx(t.Fragment,{children:t.jsx(c,{children:`
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
    title: 'Column Chart',
  },
];

const ColumnChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;

  const optionscolumnchart: Props = {
    chart: {
      id: 'column-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary, secondary, error],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '20%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter(val: any) {
          return '$ {val} thousands';
        },
      },
      theme: 'dark',
    },
    grid: {
      show: false,
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
  };
  const seriescolumnchart: any = [
    {
      name: 'Desktop',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Mobile',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Other',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  return (    
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="bar"
          height="300px"
        />      
  );
};

export default ColumnChart;

`})}),f=[{to:"/",title:"Home"},{title:"Column Chart"}],tt=()=>{const r=d(),o=r.palette.primary.main,e=r.palette.secondary.main,a=r.palette.error.main,i={chart:{id:"column-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[o,e,a],plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter(m){return`$ ${m} thousands`}},theme:"dark"},grid:{show:!1},legend:{show:!0,position:"bottom",width:"50px"}},s=[{name:"Desktop",data:[44,55,57,56,61,58,63,60,66]},{name:"Mobile",data:[76,85,101,98,87,105,91,114,94]},{name:"Other",data:[35,41,36,26,45,48,52,53,41]}];return t.jsxs(p,{title:"Column Chart",description:"this is innerpage",children:[t.jsx(l,{title:"Column Chart",items:f}),t.jsx(h,{title:"Column Chart",codeModel:t.jsx(u,{}),children:t.jsx(n,{options:i,series:s,type:"bar",height:"300px"})})]})};export{tt as default};
