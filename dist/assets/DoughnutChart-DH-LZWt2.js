import{j as t}from"./index-pZ9xQgMg.js";import{C as p}from"./react-apexcharts.min-BzQtj2Am.js";import{P as g}from"./PageContainer-LYar8IhV.js";import{B as f}from"./Breadcrumb-CRa5l2zq.js";import{P as m}from"./ParentCard-BOCKQ1T0.js";import{C as l}from"./CodeDialog-C4_8VgUE.js";import{u as y}from"./Paper-Bglc4K2l.js";import{G as e}from"./Grid2-TVAQUeLW.js";import"./Typography-PCIzasSl.js";import"./useSlotProps-D9QVx9CU.js";import"./Link-DmIxGPWX.js";import"./IconCircle-CU5CO1wM.js";import"./createReactComponent-C7i1OeoA.js";import"./Box-DgOhk5yP.js";import"./Card-Dnm4-j67.js";import"./CardHeader-YzZ0dXBA.js";import"./useSlot-C-z2829C.js";import"./Divider-BxeHuQda.js";import"./dividerClasses-BO-YFw3q.js";import"./CardContent-DHXKlgZi.js";import"./Tooltip-DD1oevea.js";import"./useControlled-kCJ_Peco.js";import"./useId-DuuGdQhb.js";import"./getReactElementRef-BDXd3hfF.js";import"./Grow-CByEer0C.js";import"./utils--BW9XhXC.js";import"./Popper--abDNuTs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-HPxiTNUe.js";import"./IconButton-D8l5j-3s.js";import"./CircularProgress-KhQwCvJ5.js";import"./DialogContent-DrCK57oZ.js";import"./Modal-ETINFcPv.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-bn6wGsyP.js";import"./IconX-BfampwNM.js";import"./toConsumableArray-CR4CeRJN.js";const x=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
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
