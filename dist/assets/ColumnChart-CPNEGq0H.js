import{j as t}from"./index-pZ9xQgMg.js";import{C as n}from"./react-apexcharts.min-BzQtj2Am.js";import{P as p}from"./PageContainer-LYar8IhV.js";import{B as l}from"./Breadcrumb-CRa5l2zq.js";import{P as h}from"./ParentCard-BOCKQ1T0.js";import{C as c}from"./CodeDialog-C4_8VgUE.js";import{u as d}from"./Paper-Bglc4K2l.js";import"./Grid2-TVAQUeLW.js";import"./Typography-PCIzasSl.js";import"./Box-DgOhk5yP.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";const u=()=>t.jsx(t.Fragment,{children:t.jsx(c,{children:`
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
