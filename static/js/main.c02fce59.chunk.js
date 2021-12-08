(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),l=c.n(a),i=(c(10),c(2)),r=(c(11),c(4)),j=c(0);var b=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),l=Object(i.a)(a,2),b=l[0],o=l[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),h=d[0],x=d[1],O=Object(s.useState)(1),p=Object(i.a)(O,2),f=p[0],m=p[1],N=Object(s.useState)(0),g=Object(i.a)(N,2),v=g[0],k=g[1],C=Object(s.useState)(0),w=Object(i.a)(C,2),S=w[0],F=w[1],y=Object(s.useState)(),T=Object(i.a)(y,2),E=T[0],B=T[1],P=function(e){o(e)},z=function(){var e=c*b/100/f;isNaN(e)||0===f?k("0.00"):k(e.toFixed(2))},I=function(){var e=(c+c*b/100)/f;isNaN(e)||0===f?F("0.00"):F(e.toFixed(2))};return Object(s.useEffect)((function(){z(),I(),B(0===f?"no-people":"yes-people")})),Object(j.jsxs)("div",{className:"App flex",children:[Object(j.jsx)("header",{className:"fs-600 fw-800",children:Object(j.jsxs)("h1",{className:"fs-600 fw-700",children:["SPLI",Object(j.jsx)("br",{}),"TTER"]})}),Object(j.jsxs)("main",{className:"bg-white container flex",children:[Object(j.jsxs)("div",{className:"calc",children:[Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:"Bill"}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("label",{className:"input-icon",children:Object(j.jsx)(r.a,{})}),Object(j.jsx)("label",{for:"bill",className:"sr-only",children:"Bill"}),Object(j.jsx)("input",{id:"bill",className:"inputs",type:"number",placeholder:"0",value:c,onChange:function(e){n(parseFloat(e.target.value)),z(),I()},min:"0",max:"99999"})]})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:"Select Tip %"}),Object(j.jsxs)("div",{className:"tip-grid grid text-white fs-700",children:[Object(j.jsx)("button",{className:"btn percent bg-dark",onClick:function(){return P(5)},children:"5%"}),Object(j.jsx)("button",{className:"btn percent bg-dark",onClick:function(){return P(10)},children:"10%"}),Object(j.jsx)("button",{className:"btn percent bg-dark",onClick:function(){return P(15)},children:"15%"}),Object(j.jsx)("button",{className:"btn percent bg-dark",onClick:function(){return P(25)},children:"25%"}),Object(j.jsx)("button",{className:"btn percent bg-dark",onClick:function(){return P(50)},children:"50%"}),Object(j.jsx)("label",{for:"custom",className:"sr-only",children:"Custom percentage"}),Object(j.jsx)("input",{id:"custom",className:"custom fs-600 fw-700",placeholder:"Custom",type:"number",value:h,onChange:function(e){o(parseFloat(e.target.value)),x(e.target.value)},min:"0"})]})]}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("div",{className:"flex no-zero-div",children:[Object(j.jsx)("h2",{children:"Number of People"}),0===f&&Object(j.jsx)("p",{className:"no-zero fs-200",children:"Can't be zero"})]}),Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("label",{for:"people",className:"sr-only",children:"Number of people"}),Object(j.jsx)("input",{id:"people",className:E,type:"number",onChange:function(e){e.target.value<0?m(0):m(parseFloat(e.target.value))},value:f,min:"0"}),Object(j.jsx)("label",{className:"input-icon",children:Object(j.jsx)(r.b,{})})]})]})]}),Object(j.jsxs)("div",{className:"totals bg-dark text-white",children:[Object(j.jsxs)("div",{className:"tip total-flex flex",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"fw-700",children:"Tip Amount"}),Object(j.jsx)("li",{className:"text-light fs-200 fw-700",children:"/ person"})]}),Object(j.jsxs)("h1",{className:"fs-800",children:["$",v]})]}),Object(j.jsxs)("div",{className:"total total-flex flex",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"fw-700",children:"Total"}),Object(j.jsx)("li",{className:"text-light fs-200 fw-700",children:"/ person"})]}),Object(j.jsxs)("h1",{className:"fs-800",children:["$",S]})]}),Object(j.jsx)("button",{className:"btn reset text-dark fs-500",onClick:function(){n(0),o(0),m(1),k(0),F(0),x("")},children:"RESET"})]})]})]})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),o()}},[[13,1,2]]]);
//# sourceMappingURL=main.c02fce59.chunk.js.map