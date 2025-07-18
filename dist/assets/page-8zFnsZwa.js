import{r as C,j as r}from"./index-bBoaL7NX.js";import{B as E}from"./Breadcrumb-Db9PlBea.js";import{P as F}from"./PageContainer-ClH7HaBW.js";import{P as T}from"./ParentCard-CFe-nEgX.js";import{C as z}from"./CodeDialog-75JXnHwL.js";import{S as q}from"./Stack-DONMPCRZ.js";import{j as H,u as J,s as V,i as R,c as K,g as O,d as Q,e as Z}from"./Typography-B41TU7cT.js";import{b as ee,h as te,e as re,g as ae}from"./useChartContainerDimensions-DE_vA97Y.js";import{g as M,d as L}from"./getPercentageValue-BjR1AbJ4.js";import{C as ne}from"./ChartsText-C5vGDRrm.js";import{G as S}from"./Grid2-CC46JW8y.js";import"./Paper-CEo52ZYq.js";import"./useSlotProps-D8Vfx1ig.js";import"./Link-2pHd2OFC.js";import"./IconCircle-RJ076v1n.js";import"./createReactComponent-BVlLIvSm.js";import"./Box-Cbtftx36.js";import"./Card-DDyARx6g.js";import"./CardHeader-BGxrrKRe.js";import"./useSlot-C2y4Okaq.js";import"./Divider-4e_Zm7wz.js";import"./dividerClasses-D6e-UzmO.js";import"./CardContent-TrRQSIz8.js";import"./Tooltip-CRAcMsX-.js";import"./useControlled-B6T_fxKa.js";import"./useId-BgKtfLA5.js";import"./getReactElementRef-bhjrj0fa.js";import"./Grow-DbIyLDOd.js";import"./utils-fXVEFgwU.js";import"./Popper-ppbRY3WN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-PELJNkOL.js";import"./IconButton-6ozhzS-w.js";import"./CircularProgress-BIjyWvHZ.js";import"./DialogContent-BJGxlzU1.js";import"./Modal-B5yRmzaP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-37dVBM_z.js";import"./IconX-CaRO0p4G.js";import"./toConsumableArray-CNii3AtI.js";import"./createStack-D5Eniu1T.js";import"./styled-oSX1ZV8o.js";import"./useThemeProps-BUO-Zg8Q.js";import"./useThemeProps-BKqztWfv.js";import"./path-DyVhHtw_.js";import"./isMuiElement-CYEUdTOG.js";function ie(e){return Math.PI*e/180}function k(e){const t=ie(e);return[Math.sin(t),-Math.cos(t)]}function se(e,t){const a=[[0,0],k(e),k(t)],i=Math.min(e,t),n=Math.max(e,t),u=Math.floor(i/90)*90;for(let s=1;s<=4;s+=1){const x=u+s*90;x<n&&a.push(k(x))}const c=Math.min(...a.map(([s])=>s)),o=Math.max(...a.map(([s])=>s)),l=Math.min(...a.map(([,s])=>s)),d=Math.max(...a.map(([,s])=>s));return{cx:-c/(o-c),cy:-l/(d-l),minX:c,maxX:o,minY:l,maxY:d}}function oe(e,t,a,i,{minX:n,maxX:u,minY:c,maxY:o}){return Math.min(...[{ratio:Math.abs(n),space:e},{ratio:Math.abs(u),space:a-e},{ratio:Math.abs(c),space:t},{ratio:Math.abs(o),space:i-t}].map(({ratio:l,space:d})=>l<1e-5?1/0:d/l))}const W=C.createContext({value:null,valueMin:0,valueMax:0,startAngle:0,endAngle:0,innerRadius:0,outerRadius:0,cornerRadius:0,cx:0,cy:0,maxRadius:0,valueAngle:null});function ue(e){const{value:t=null,valueMin:a=0,valueMax:i=100,startAngle:n=0,endAngle:u=360,outerRadius:c,innerRadius:o,cornerRadius:l,cx:d,cy:s,children:x}=e,{left:y,top:P,width:p,height:v}=ee(),m=se(n,u),w=d?M(d,p):m.cx*p,$=s?M(s,v):m.cy*v;let G=y+w,j=P+$;const g=oe(w,$,p,v,m);if(d===void 0){const h=g*(m.maxX-m.minX);G=y+(p-h)/2+m.cx*h}if(s===void 0){const h=g*(m.maxY-m.minY);j=P+(v-h)/2+m.cy*h}const f=M(c??g,g),A=M(o??"80%",g),b=M(l??0,f-A),Y=C.useMemo(()=>{const h=Math.PI*n/180,I=Math.PI*u/180;return{value:t,valueMin:a,valueMax:i,startAngle:h,endAngle:I,outerRadius:f,innerRadius:A,cornerRadius:b,cx:G,cy:j,maxRadius:g,valueAngle:t===null?null:h+(I-h)*(t-a)/(i-a)}},[t,a,i,n,u,f,A,b,G,j,g]);return r.jsx(W.Provider,{value:Y,children:x})}function B(){return C.useContext(W)}const ce=["width","height","margin","title","desc","value","valueMin","valueMax","startAngle","endAngle","outerRadius","innerRadius","cornerRadius","cx","cy","children"],le=V("div",{name:"MuiGauge",slot:"Container"})(({ownerState:e,theme:t})=>({width:e.width??"100%",height:e.height??"100%",display:"flex",position:"relative",flexGrow:1,flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden","&>svg":{width:"100%",height:"100%"},"& text":{fill:(t.vars||t).palette.text.primary}})),_=C.forwardRef(function(t,a){const{width:i,height:n,margin:u,title:c,desc:o,value:l,valueMin:d=0,valueMax:s=100,startAngle:x,endAngle:y,outerRadius:P,innerRadius:p,cornerRadius:v,cx:m,cy:w,children:$}=t,G=H(t,ce),{containerRef:j,width:g,height:f}=te(i,n),A=C.useRef(null),b=J(a,A);return r.jsx(le,R({ref:j,ownerState:{width:i,height:n},role:"meter","aria-valuenow":l===null?void 0:l,"aria-valuemin":d,"aria-valuemax":s},G,{children:g&&f?r.jsx(re,{width:g,height:f,margin:R({left:10,right:10,top:10,bottom:10},u),svgRef:A,children:r.jsx(ue,{value:l,valueMin:d,valueMax:s,startAngle:x,endAngle:y,outerRadius:P,innerRadius:p,cornerRadius:v,cx:m,cy:w,children:r.jsx(ae,{width:g,height:f,ref:b,title:c,desc:o,disableAxisListener:!0,"aria-hidden":"true",children:$})})}):null}))}),de=V("path",{name:"MuiGauge",slot:"ReferenceArc",overridesResolver:(e,t)=>t.referenceArc})(({theme:e})=>({fill:(e.vars||e).palette.primary.main}));function U(e){const{value:t,valueMin:a,valueMax:i,startAngle:n,endAngle:u,outerRadius:c,innerRadius:o,cornerRadius:l,cx:d,cy:s}=B();if(t===null)return null;const x=n+(t-a)/(i-a)*(u-n);return r.jsx(de,R({transform:`translate(${d}, ${s})`,d:L().cornerRadius(l)({startAngle:n,endAngle:x,innerRadius:o,outerRadius:c})},e))}const me=V("path",{name:"MuiGauge",slot:"ReferenceArc",overridesResolver:(e,t)=>t.referenceArc})(({theme:e})=>({fill:(e.vars||e).palette.divider}));function X(e){const{startAngle:t,endAngle:a,outerRadius:i,innerRadius:n,cornerRadius:u,cx:c,cy:o}=B();return r.jsx(me,R({transform:`translate(${c}, ${o})`,d:L().cornerRadius(u)({startAngle:t,endAngle:a,innerRadius:n,outerRadius:i})},e))}function ge(e){return O("MuiGauge",e)}const D=K("MuiGauge",["root","valueArc","referenceArc","valueText"]),he=["text","className"];function xe({value:e}){return e===null?null:e.toLocaleString()}function fe(e){const{text:t=xe,className:a}=e,i=H(e,he),{value:n,valueMin:u,valueMax:c,cx:o,cy:l}=B(),d=typeof t=="function"?t({value:n,valueMin:u,valueMax:c}):t;return d===null?null:r.jsx("g",{className:a,children:r.jsx(ne,R({x:o,y:l,text:d,style:{textAnchor:"middle",dominantBaseline:"central"}},i))})}const pe=["text","children","classes","className"],ve=e=>{const{classes:t}=e;return Z({root:["root"],valueArc:["valueArc"],referenceArc:["referenceArc"],valueText:["valueText"]},ge,t)},N=C.forwardRef(function(t,a){const{text:i,children:n,className:u}=t,c=H(t,pe),o=ve(t);return r.jsxs(_,R({},c,{className:Q(o.root,u),ref:a,children:[r.jsx(X,{className:o.referenceArc}),r.jsx(U,{className:o.valueArc}),r.jsx(fe,{className:o.valueText,text:i}),n]}))});function Ae(){return r.jsx(z,{children:`
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'BasicGaugesChart ',
},
]; 

export default function BasicGaugesChart() {
    return (

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                <Gauge width={200} height={200} value={60} />
                <Gauge width={200} height={200} value={60} startAngle={-90} endAngle={90} />
            </Stack>
    );
}


`})}function Ce(){return r.jsx(T,{title:"Basic Chart",codeModel:r.jsx(Ae,{}),children:r.jsxs(q,{direction:{xs:"column",md:"row"},spacing:{xs:1,md:3},children:[r.jsx(N,{width:200,height:200,value:60}),r.jsx(N,{width:200,height:200,value:60,startAngle:-90,endAngle:90})]})})}function Re(){return r.jsx(z,{children:`
import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
   
const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'ArcDesignChart ',
},
]; 
const settings = {
    width: 200,
    height: 200,
    value: 60,
};

export default function ArcDesignChart() {
    return (
       

            <Gauge
                {...settings}
                cornerRadius="50%"
                sx={(theme) => ({
                    [\`& .\${gaugeClasses.valueText}\`]: {
                fontSize: 40,
                    },
            [\`& .\${gaugeClasses.valueArc}\`]: {
                 fill: theme.palette.primary,
                    },
            [\`& .\${gaugeClasses.referenceArc}\`]: {
                fill: theme.palette.text.disabled,
                    },
                })}
            />
  
    );
}


`})}const Ge={width:200,height:200,value:60};function je(){return r.jsx(T,{title:"ArcDesign Chart",codeModel:r.jsx(Re,{}),children:r.jsx(N,{...Ge,cornerRadius:"50%",sx:e=>({[`& .${D.valueText}`]:{fontSize:40},[`& .${D.valueArc}`]:{fill:e.palette.primary},[`& .${D.referenceArc}`]:{fill:e.palette.text.disabled}})})})}function Me(){return r.jsx(z,{children:`

import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';



const BCrumb = [
{
to: '/',
title: 'Home',
},
{
title: 'GaugePointerChart ',
},
]; 



function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={\`M \${cx} \${cy} L \${target.x} \${target.y}\`}
            stroke="red"
            strokeWidth={3}
            />
        </g>
    );
}

export default function GaugePointerChart() {
    return (

        <GaugeContainer
            width={200}
            height={200}
            startAngle={-110}
            endAngle={110}
            value={30}
        >
            <GaugeReferenceArc />
            <GaugeValueArc />
            <GaugePointer />
        </GaugeContainer>
    );
}
`})}function ye(){const{valueAngle:e,outerRadius:t,cx:a,cy:i}=B();if(e===null)return null;const n={x:a+t*Math.sin(e),y:i-t*Math.cos(e)};return r.jsxs("g",{children:[r.jsx("circle",{cx:a,cy:i,r:5,fill:"red"}),r.jsx("path",{d:`M ${a} ${i} L ${n.x} ${n.y}`,stroke:"red",strokeWidth:3})]})}function Pe(){return r.jsx(T,{title:"GaugePointer  Chart",codeModel:r.jsx(Me,{}),children:r.jsxs(_,{width:200,height:200,startAngle:-110,endAngle:110,value:30,children:[r.jsx(X,{}),r.jsx(U,{}),r.jsx(ye,{})]})})}const we=[{to:"/",title:"Home"},{title:"GaugeCharts "}],Rt=()=>r.jsxs(F,{title:"GaugeCharts",description:"this is GaugeCharts ",children:[r.jsx(E,{title:"GaugeCharts",items:we}),r.jsxs(S,{container:!0,spacing:3,children:[r.jsx(S,{size:{md:6},children:r.jsx(Ce,{})}),r.jsx(S,{size:{md:6},children:r.jsx(je,{})}),r.jsx(S,{size:{md:6},children:r.jsx(Pe,{})})]})]});export{Rt as default};
