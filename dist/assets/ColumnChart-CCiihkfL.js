import{j as t}from"./index-D0CpDmcp.js";import{C as n}from"./react-apexcharts.min-D2r1KjlJ.js";import{P as p}from"./PageContainer-GyGJwSoy.js";import{B as l}from"./Breadcrumb-BVcp9-n_.js";import{P as h}from"./ParentCard-Dds6eSz-.js";import{C as c}from"./CodeDialog-CpWyUB1H.js";import{u as d}from"./Paper-DYTAYSZ1.js";import"./Grid2-B3gzDQ3y.js";import"./Typography-CxjCbjeZ.js";import"./Box-YfWKO8y5.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";const u=()=>t.jsx(t.Fragment,{children:t.jsx(c,{children:`
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
