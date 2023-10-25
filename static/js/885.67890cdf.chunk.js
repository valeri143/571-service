"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[885],{3225:function(e,n,r){r.d(n,{D:function(){return g},f:function(){return f}});var i=r(4165),c=r(5861),t=r(9439),s=r(2791),h=r(9230),l=r(5705),o=r(8007),a=r(4254),d=r(4784),x=r(6174),u=r(3689),j=r(1240),p=r(7609),m=r(184),f=o.Ry().shape({name:o.Z_().required("Please enter your name"),number:o.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:o.O7().required("Please check the checkbox to continue")}),g=function(){var e=(0,h.$G)(),n=(0,t.Z)(e,1)[0],r=(0,s.useState)(!1),o=(0,t.Z)(r,2),g=o[0],b=o[1],w=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(n,r){var c,t,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.name,t=n.number,s=r.resetForm,b(!0),e.prev=3,e.next=6,(0,j.C)({name:c,number:t});case 6:b(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:s();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,m.jsxs)(x.qb,{children:[(0,m.jsx)(x.eX,{children:n("form.h3")}),(0,m.jsx)(l.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:f,onSubmit:w,children:(0,m.jsxs)(l.l0,{children:[(0,m.jsxs)(u.IT,{children:[(0,m.jsxs)(u.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,m.jsx)(u.se,{}),(0,m.jsx)(u.Ld,{width:"22",height:"22",children:(0,m.jsx)("use",{href:"".concat(p.Z,"#icon-address-book")})}),(0,m.jsx)(u.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,m.jsx)(l.Bc,{name:"name",component:d.j})]}),(0,m.jsxs)(u.IT,{children:[(0,m.jsx)(u.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,m.jsx)(u.oB,{}),(0,m.jsx)(u.Ld,{width:"22",height:"22",children:(0,m.jsx)("use",{href:"".concat(p.Z,"#icon-call-yellow-outline")})}),(0,m.jsx)(u.ob,{name:"number",id:"number",type:"tel",placeholder:"+38 XXX \u0425XX XX XX",autoComplete:"off",onClick:a.w}),(0,m.jsx)(l.Bc,{name:"number",component:d.j})]}),(0,m.jsxs)(u.VA,{children:[(0,m.jsxs)(u.BS,{children:[(0,m.jsx)(u.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,m.jsx)(l.Bc,{name:"checkbox",component:d.j}),n("form.checkboxText")]}),!g&&(0,m.jsx)(u.Sn,{type:"submit",children:n("header.buttonText")}),g&&(0,m.jsx)(u.wh,{children:(0,m.jsxs)(u.lo,{children:[(0,m.jsx)(u.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})})]})}},191:function(e,n,r){r.d(n,{k:function(){return a}});var i=r(9230),c=r(7543),t=r(804),s=r(7609),h=r(6174),l=r(1578),o=r(184),a=function(e){var n=e.h1,r=e.p,a=e.style,d=e.Bg,x=e.maxWidth,u=(0,i.$G)().t;return(0,o.jsx)("section",{children:(0,o.jsx)(d,{children:(0,o.jsxs)(c.fM,{children:[(0,o.jsx)(h.XU,{style:{width:"auto",maxWidth:x},children:u("".concat(n))}),r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c._B,{children:u("".concat(r))}),(0,o.jsxs)(t.bj,{style:{margin:0,justifyContent:"normal",gap:"40px"},onClick:l.A,children:[(0,o.jsx)(t.TE,{}),(0,o.jsx)(t.Ld,{width:"18",height:"18",children:(0,o.jsx)("use",{href:"".concat(s.Z,"#icon-tools")})}),(0,o.jsx)(t.Oo,{children:u("carService.buttonText")})]})]}):(0,o.jsxs)(t.bj,{style:a,onClick:l.A,children:[(0,o.jsx)(t.TE,{}),(0,o.jsx)(t.Ld,{width:"18",height:"18",children:(0,o.jsx)("use",{href:"".concat(s.Z,"#icon-tools")})}),(0,o.jsx)(t.Oo,{children:u("carService.buttonText")})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return c}});var i=r(184),c=function(e){var n=e.children;return(0,i.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{w:function(){return c}});var i=r(4110),c=function(){var e=document.querySelector("#number");new i.ZP(e,{mask:"+{38} 000 000 00 00"})}},1240:function(e,n,r){r.d(n,{C:function(){return i}});var i=function(e){var n=e.name,r=e.number;fetch("../send.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,number:r})}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},1503:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var i,c=r(168),t=r(2791),s=r(8547),h=r.p+"static/media/engine-bg@1x-min.bf9e6a105481d62743fb.jpg",l=r.p+"static/media/engine-bg@2x-min.e462ba309ad629468333.jpg",o=r(191),a=r(9230),d=r(6174),x=r(7609),u=r(3225),j=r(184),p=(0,t.lazy)((function(){return r.e(141).then(r.bind(r,9141))})),m=function(){var e=(0,a.$G)().t;return(0,j.jsx)("section",{children:(0,j.jsx)(d.hX,{children:(0,j.jsxs)(d.F8,{children:[(0,j.jsx)(u.D,{}),(0,j.jsxs)(d.Gf,{children:[(0,j.jsx)(d._B,{children:e("engineRepair.paragraph.0")}),(0,j.jsx)(d._B,{children:e("engineRepair.paragraph.1")}),(0,j.jsxs)(d._B,{children:[(0,j.jsx)(d.Fe,{children:e("engineRepair.paragraph.2")}),e("engineRepair.paragraph.3")]}),(0,j.jsxs)(d.oK,{children:[(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.0")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.1")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.2")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.3")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.4")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.5")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.6")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("engineRepair.list.7")})]})})]}),(0,j.jsx)(d._B,{children:e("engineRepair.paragraph2.0")}),(0,j.jsx)(d._B,{children:e("engineRepair.paragraph2.1")}),(0,j.jsx)(d._B,{children:e("engineRepair.paragraph2.2")})]}),(0,j.jsx)(p,{h2:"engineRepair.h2",list:"engineRepair.serviceList",price:"engineRepair.priceList"})]})})})},f=(0,t.lazy)((function(){return Promise.all([r.e(271),r.e(503)]).then(r.bind(r,5462))})),g=(0,t.lazy)((function(){return Promise.all([r.e(271),r.e(691)]).then(r.bind(r,862))})),b=(0,t.lazy)((function(){return Promise.all([r.e(271),r.e(741),r.e(418)]).then(r.bind(r,8556))})),w=(0,t.lazy)((function(){return Promise.all([r.e(271),r.e(704)]).then(r.bind(r,6286))})),k=(0,t.lazy)((function(){return r.e(881).then(r.bind(r,2125))})),y=s.ZP.div(i||(i=(0,c.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),h,l),v=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.k,{h1:"footer.carServiceList.0",p:"engineRepair.p",Bg:y}),(0,j.jsx)(m,{}),(0,j.jsx)(f,{}),(0,j.jsx)(g,{}),(0,j.jsx)(b,{}),(0,j.jsx)(w,{}),(0,j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=885.67890cdf.chunk.js.map