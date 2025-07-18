import{r as R,ag as j,j as f,ai as n,bl as P,b9 as S}from"./index-bBoaL7NX.js";import{g as w,c as N,s as v,d as U,e as E,m as b,l as F}from"./Typography-B41TU7cT.js";function I(e){return w("MuiCircularProgress",e)}N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=S`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,z=typeof g!="string"?P`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof h!="string"?P`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,K=e=>{const{classes:r,variant:s,color:a,disableShrink:l}=e,c={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,l&&"circleDisableShrink"]};return E(c,I,r)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(b(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:z||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(F()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),B=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),G=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(b(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:A||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),W=R.forwardRef(function(r,s){const a=j({props:r,name:"MuiCircularProgress"}),{className:l,color:c="primary",disableShrink:$=!1,size:p=40,style:D,thickness:i=3.6,value:m=0,variant:y="indeterminate",...M}=a,o={...a,color:c,disableShrink:$,size:p,thickness:i,value:m,variant:y},d=K(o),u={},k={},x={};if(y==="determinate"){const C=2*Math.PI*((t-i)/2);u.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(m),u.strokeDashoffset=`${((100-m)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return f.jsx(V,{className:U(d.root,l),style:{width:p,height:p,...k,...D},ownerState:o,ref:s,role:"progressbar",...x,...M,children:f.jsx(B,{className:d.svg,ownerState:o,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:f.jsx(G,{className:d.circle,style:u,ownerState:o,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})});export{W as C};
