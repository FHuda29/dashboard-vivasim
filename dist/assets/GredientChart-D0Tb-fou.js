import{j as t}from"./index-D0CpDmcp.js";import{C as i}from"./react-apexcharts.min-D2r1KjlJ.js";import{P as a}from"./PageContainer-GyGJwSoy.js";import{B as s}from"./Breadcrumb-BVcp9-n_.js";import{P as m}from"./ParentCard-Dds6eSz-.js";import{C as p}from"./CodeDialog-CpWyUB1H.js";import{u as n}from"./Paper-DYTAYSZ1.js";import"./Grid2-B3gzDQ3y.js";import"./Typography-CxjCbjeZ.js";import"./Box-YfWKO8y5.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";const h=()=>t.jsx(t.Fragment,{children:t.jsx(p,{children:`
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
