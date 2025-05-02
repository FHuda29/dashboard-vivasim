import{j as t}from"./index-q1gJB5H0.js";import{C as i}from"./react-apexcharts.min-C7pxt2jz.js";import{P as a}from"./PageContainer-ShAoTXqo.js";import{B as s}from"./Breadcrumb-Sx0jSoUO.js";import{P as m}from"./ParentCard-BoIC9gk3.js";import{C as p}from"./CodeDialog-BUiQRyz8.js";import{u as n}from"./Paper-BfYJvf2K.js";import"./Grid2-CqZBoIec.js";import"./Typography-BxNQAu-e.js";import"./Box-DjbeIn6R.js";import"./useSlotProps-fxj6j4ji.js";import"./Link-CbpODTtF.js";import"./IconCircle-BrnHHpVV.js";import"./createReactComponent-4CU5_L6_.js";import"./Card-bW_5XQOp.js";import"./CardHeader-D3eDM15l.js";import"./useSlot-C5ueERyv.js";import"./Divider-D_QCNZIA.js";import"./dividerClasses-BBaEuH8O.js";import"./CardContent-DWdd_6p9.js";import"./Tooltip-T0REb2Y8.js";import"./useControlled-2SXrPK_C.js";import"./useId-SD238GYo.js";import"./getReactElementRef-BT4zc5ME.js";import"./Grow-NO3rZCFB.js";import"./utils-NaTNKqhR.js";import"./Popper-5ImFPPqG.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CFBZdEcL.js";import"./IconButton-Dqm0TkKE.js";import"./CircularProgress-C7fJ-WBe.js";import"./DialogContent-60XI1Sqs.js";import"./Modal-BICTQXNK.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-BdPp7hjf.js";import"./IconX-yCQnq4t0.js";import"./toConsumableArray-Do5hVaHU.js";const h=()=>t.jsx(t.Fragment,{children:t.jsx(p,{children:`
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
    title: 'Gradient Chart',
  },
];

const GredientChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  
  const optionsgredientchart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: [primary],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

    return (
        <Chart
            options={optionsgredientchart}
            series={seriesgredientchart}
            type="line"
            height="300px"
        />
    );
};

export default GredientChart;`})}),d=[{to:"/",title:"Home"},{title:"Gradient Chart"}],Z=()=>{const r=n().palette.primary.main,e={chart:{height:350,type:"line",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1},dropShadow:{enabled:!0,color:"rgba(0,0,0,0.2)",top:12,left:4,blur:3,opacity:.4}},stroke:{width:7,curve:"smooth"},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[r],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:.9,stops:[0,100,100,100]}},markers:{size:4,opacity:.9,colors:[r],strokeColor:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:0,max:40},tooltip:{theme:"dark"},grid:{show:!1}},o=[{name:"Likes",data:[4,3,10,9,35,19,22,9,12,7,19,5,13,9,17,2,7,5]}];return t.jsxs(a,{title:"Gredient Chart",description:"this is innerpage",children:[t.jsx(s,{title:"Gradient Chart",items:d}),t.jsx(m,{title:"Gradient Chart",codeModel:t.jsx(h,{}),children:t.jsx(i,{options:e,series:o,type:"line",height:"300px"})})]})};export{Z as default};
