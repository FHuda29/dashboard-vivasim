import{j as t}from"./index-bBoaL7NX.js";import{C as p}from"./react-apexcharts.min-Ct7wb3Ln.js";import{P as g}from"./PageContainer-ClH7HaBW.js";import{B as f}from"./Breadcrumb-Db9PlBea.js";import{P as m}from"./ParentCard-CFe-nEgX.js";import{C as l}from"./CodeDialog-75JXnHwL.js";import{u as y}from"./Paper-CEo52ZYq.js";import{G as e}from"./Grid2-CC46JW8y.js";import"./Typography-B41TU7cT.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./styled-oSX1ZV8o.js";import"./isMuiElement-CYEUdTOG.js";import"./useThemeProps-BUO-Zg8Q.js";const x=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:`
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
`})}),b=[{to:"/",title:"Home"},{title:"Doughtnut Chart"}],pt=()=>{const r=y(),o=r.palette.primary.main,i=r.palette.primary.light,a=r.palette.secondary.main,s=r.palette.secondary.light,n=r.palette.warning.main,h={chart:{id:"donut-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb"},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:[o,i,a,s,n],tooltip:{theme:"dark",fillSeriesColor:!1}},c=[45,15,27,18,35],d={chart:{id:"pie-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",toolbar:{show:!1}},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"70px"}}},legend:{show:!0,position:"bottom",width:"50px"},colors:[o,i,a,s,n],tooltip:{fillSeriesColor:!1}},u=[45,15,27,18,35];return t.jsxs(g,{title:"Doughnut & Pie Chart",description:"this is innerpage",children:[t.jsx(f,{title:"Doughtnut Chart",items:b}),t.jsxs(e,{container:!0,spacing:3,children:[t.jsx(e,{size:{lg:6,md:12,xs:12},children:t.jsx(m,{title:"Doughnut Charts",codeModel:t.jsx(x,{}),children:t.jsx(p,{options:h,series:c,type:"donut",height:"300px"})})}),t.jsx(e,{size:{lg:6,md:12,xs:12},children:t.jsx(m,{title:"Pie Charts",codeModel:t.jsx(C,{}),children:t.jsx(p,{options:d,series:u,type:"pie",height:"300px"})})})]})]})};export{pt as default};
