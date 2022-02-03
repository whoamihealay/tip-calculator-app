var P=Object.defineProperty,z=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var y=(e,r,o)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,d=(e,r)=>{for(var o in r||(r={}))S.call(r,o)&&y(e,o,r[o]);if(x)for(var o of x(r))j.call(r,o)&&y(e,o,r[o]);return e},p=(e,r)=>z(e,E(r));import{s as c,j as w,B,a as I,r as h,R as T,b as A}from"./vendor.ea94b66c.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function o(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(l){if(l.ep)return;l.ep=!0;const a=o(l);fetch(l.href,a)}};N();const v=c.button`
  border-radius: 0.5rem;
  border-style: none;
  color: var(--clr-white);
  font-size: 1.225rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  &:hover,
  &:focus {
    background-color: #96fafa;
  }
`,R=c(v)`
  background-color: hsl(183, 100%, 15%);
  color: hsl(189, 41%, 97%);
  font-size: 1.5rem;
  &:hover,
  &:focus {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
  }
`,t=w.exports.jsx,n=w.exports.jsxs,L=c.section`
  border-radius: 1rem;
  background-color: hsl(183, 100%, 15%);
  padding: 1em;
  color: white;
  width: 100%;
  @media screen and (min-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,O=c.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
`,C=c.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 0.875rem;
    color: hsl(184, 14%, 56%);
  }
  & h2 {
    color: hsl(172, 67%, 45%);
    font-size: 2.225rem;
    font-weight: 700;
  }
`,M=({outputs:e,handleReset:r})=>n(L,{children:[n(O,{children:[n(C,{children:[n("p",{children:[t("b",{children:"Tip Amount"}),t("br",{}),t("span",{children:t("b",{children:"/ person"})})]}),n("h2",{"aria-label":"tip amount per person","data-test":"total-tip-amount",children:["$",e.tip]})]}),n(C,{children:[n("p",{children:[t("b",{children:"Total"}),t("br",{}),t("span",{children:t("b",{children:"/ person"})})]}),n("h2",{"aria-label":"total amount per person","data-test":"total-amount",children:["$",e.total]})]})]}),t(v,{onClick:r,children:"RESET"})]}),f=({id:e,handle:r})=>n(R,{id:e.toString(),name:"percent",onClick:()=>r(e),children:[e,"%"]}),$=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: var(--gap, 1rem);

  @media screen and (min-width: 30em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`,k=c.div`
  position: relative;
  & span {
    position: absolute;
    left: 3px;
    top: calc(50% - 0.7rem);
    color: var(--clr-dg-cyan-2);
  }
  & input {
    background-color: var(--clr-lg-cyan-2);
    border-radius: 0.5rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 800;
    padding: 0.25em 1rem;
    color: hsl(183, 100%, 15%);
    width: 100%;
    cursor: pointer;
    &:focus {
      outline: 2px solid hsl(172, 67%, 45%);
    }
  }
`,g=c.input`
  background-color: var(--clr-lg-cyan-2);
  border-radius: 0.5rem;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0.25em 1rem;
  color: hsl(183, 100%, 15%);
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: 2px solid hsl(172, 67%, 45%);
  }
`,_=c(g)`
  border: ${e=>e.isPeople?"2px solid red":"2px solid transparent"};
  &:focus {
    outline: ${e=>e.isPeople?"2px solid red":"2px solid hsl(172, 67%, 45%)"};
  }
`,D=({inputs:e,handleInputs:r,handlePercent:o})=>n("section",{children:[t("h2",{children:"Select Tip %"}),n($,{children:[t(f,{id:5,handle:o}),t(f,{id:10,handle:o}),t(f,{id:15,handle:o}),t(f,{id:25,handle:o}),t(f,{id:50,handle:o}),t(g,{"aria-label":"Custom tip percent",id:"percent",placeholder:"Custom",type:"number",value:e.percent?e.percent:"",onChange:r})]})]}),H=c.div`
  display: flex;
  justify-content: space-between;
`;c.p``;const q=c.p`
  color: red;
  font-size: 0.875rem;
`,G=({inputs:e,handleInputs:r})=>{let o=e.people===0;return n("section",{children:[n(H,{children:[t("h2",{children:"Number of People"}),o&&t(q,{children:"Can't be zero"})]}),n(k,{children:[t(_,{"aria-label":"How many people?",isPeople:o,id:"people",type:"number",onChange:r,value:e.people?e.people:"",min:"0"}),t("span",{className:"input__icon",children:t(B,{})})]})]})},K=({inputs:e,handleInputs:r})=>n("section",{children:[t("h2",{children:"Bill"}),n(k,{children:[t("span",{children:t(I,{})}),t(g,{"aria-label":"Your bill amount",id:"bill",type:"number",placeholder:"0",value:e.bill?e.bill:"",onChange:r,min:"0",max:"99999"})]})]}),W=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(183, 100%, 15%);
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 10%;
  }
`,F=c.div`
  min-width: 310px;
  padding: 1em;
  margin-inline: auto;
  max-width: 80rem;
`,Y=c(F)`
  display: grid;
  place-items: center;
`,J=c(F)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1em;
  font-size: var(--fs-500);
  background-color: var(--clr-white);
  border-radius: var(--border-rad);
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`,Q=c.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 11px;
  text-align: center;
  a {
    color: hsl(228, 45%, 44%);
  }
  @media screen and (max-width: 30em) {
    display: none;
  }
`,U=()=>n(Q,{children:["Challenge by"," ",t("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",t("a",{href:"https://www.frontendmentor.io/profile/whoamihealay",target:"_blank",rel:"noreferrer",children:"Andrew"}),"."]});function V(){const[e,r]=h.exports.useState({bill:0,percent:0,people:1}),[o,u]=h.exports.useState({tip:0,total:0}),l=i=>{i.target.value===""||typeof i.target.value===null?r(s=>p(d({},s),{[i.target.id]:0})):r(s=>p(d({},s),{[i.target.id]:parseFloat(i.target.value)}))},a=i=>{r(s=>p(d({},s),{percent:i}))},m=()=>{r({bill:0,percent:0,people:1})},b=()=>{const i=document.getElementsByName("percent");for(let s=0;s<i.length;s++)i[s].style.backgroundColor=""};return h.exports.useEffect(()=>{const i=document.getElementById(e.percent.toString());i!==null?(b(),i.style.backgroundColor="var(--clr-strong-cyan)"):b()},[e.percent]),h.exports.useEffect(()=>{e.bill>=99999&&r(i=>p(d({},i),{bill:99999}))},[e.bill]),h.exports.useEffect(()=>{const i=parseFloat((e.bill*e.percent/100/e.people).toFixed(2));e.people===0?u(s=>p(d({},s),{tip:0})):u(s=>p(d({},s),{tip:i}))},[e.bill,e.people,e.percent]),h.exports.useEffect(()=>{const i=parseFloat(((e.bill+e.bill*e.percent/100)/e.people).toFixed(2));e.people===0?u(s=>p(d({},s),{total:0})):u(s=>p(d({},s),{total:i}))},[e.bill,e.percent,e.people]),n(Y,{className:"App",children:[n(W,{children:["SPLI",t("br",{}),"TTER"]}),n(J,{children:[n("div",{children:[t(K,{inputs:e,handleInputs:l}),t(D,{inputs:e,handleInputs:l,handlePercent:a}),t(G,{inputs:e,handleInputs:l})]}),t(M,{outputs:o,handleReset:m})]}),t(U,{})]})}T.render(t(A.StrictMode,{children:t(V,{})}),document.getElementById("root"));
