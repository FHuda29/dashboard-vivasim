import{j as t}from"./index-D0CpDmcp.js";import{C as s}from"./react-apexcharts.min-D2r1KjlJ.js";import{P as n}from"./PageContainer-GyGJwSoy.js";import{B as m}from"./Breadcrumb-BVcp9-n_.js";import{P as p}from"./ParentCard-Dds6eSz-.js";import{C as l}from"./CodeDialog-CpWyUB1H.js";import{u as h}from"./Paper-DYTAYSZ1.js";import"./Grid2-B3gzDQ3y.js";import"./Typography-CxjCbjeZ.js";import"./Box-YfWKO8y5.js";import"./useSlotProps-BSM9QyQs.js";import"./Link-Bnmvu_Gi.js";import"./IconCircle-D7zSMm9k.js";import"./createReactComponent-3iThfHP-.js";import"./Card-CBAn0QXF.js";import"./CardHeader-BR6S_Hd-.js";import"./useSlot-CFWOFHMb.js";import"./Divider-cwsqb4Sr.js";import"./dividerClasses-Cmg2xQcr.js";import"./CardContent-B3dzlDvA.js";import"./Tooltip-BtHUzaXN.js";import"./useControlled-DdQeg7Rb.js";import"./useId-BnzzJGZL.js";import"./getReactElementRef-BjzLCeGl.js";import"./Grow-CRn5r_sP.js";import"./utils-knGZQcB_.js";import"./Popper-BuGE3Q_O.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B-3ZW63z.js";import"./IconButton-BxWHF3Dm.js";import"./CircularProgress-DwEGvCDN.js";import"./DialogContent-CpBRrOrV.js";import"./Modal-BGPPYg_F.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-j3YPohRR.js";import"./IconX-BqO6wXIF.js";import"./toConsumableArray-CKS5ILGl.js";const c=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
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

export default LineChart;`})}),d=[{to:"/",title:"Home"},{title:"Line Chart"}],_=()=>{const e=h(),r=e.palette.primary.main,o=e.palette.secondary.main,i={chart:{height:350,type:"line",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",zoom:{type:"x",enabled:!0},toolbar:{show:!1},shadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},grid:{show:!1},colors:[r,o],dataLabels:{enabled:!0},stroke:{curve:"straight",width:"2"},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark"}},a=[{name:"High - 2013",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}];return t.jsxs(n,{title:"Line Chart",description:"this is innerpage",children:[t.jsx(m,{title:"Line Chart",items:d}),t.jsx(p,{title:"Line Chart",codeModel:t.jsx(c,{}),children:t.jsx(s,{options:i,series:a,type:"line",height:"308px",width:"90%"})})]})};export{_ as default};
