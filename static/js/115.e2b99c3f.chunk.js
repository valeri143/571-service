"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[115],{3225:function(e,n,r){r.d(n,{D:function(){return b},f:function(){return p}});var t=r(4165),i=r(5861),c=r(9439),s=r(2791),o=r(9230),h=r(5705),a=r(8007),l=r(4254),x=r(4784),d=r(6174),u=r(3689),j=r(1240),m=r(7609),f=r(184),p=a.Ry().shape({name:a.Z_().required("Please enter your name"),number:a.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:a.O7().required("Please check the checkbox to continue")}),b=function(){var e=(0,o.$G)(),n=(0,c.Z)(e,1)[0],r=(0,s.useState)(!1),a=(0,c.Z)(r,2),b=a[0],g=a[1],w=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,c,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.name,c=n.number,s=r.resetForm,g(!0),e.prev=3,e.next=6,(0,j.C)({name:i,number:c});case 6:g(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:s();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,f.jsxs)(d.qb,{children:[(0,f.jsx)(d.eX,{children:n("form.h3")}),(0,f.jsx)(h.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:p,onSubmit:w,children:(0,f.jsxs)(h.l0,{children:[(0,f.jsxs)(u.IT,{children:[(0,f.jsxs)(u.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,f.jsx)(u.se,{}),(0,f.jsx)(u.Ld,{width:"22",height:"22",children:(0,f.jsx)("use",{href:"".concat(m.Z,"#icon-address-book")})}),(0,f.jsx)(u.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,f.jsx)(h.Bc,{name:"name",component:x.j})]}),(0,f.jsxs)(u.IT,{children:[(0,f.jsx)(u.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,f.jsx)(u.oB,{}),(0,f.jsx)(u.Ld,{width:"22",height:"22",children:(0,f.jsx)("use",{href:"".concat(m.Z,"#icon-call-yellow-outline")})}),(0,f.jsx)(u.ob,{name:"number",id:"number",type:"tel",placeholder:"+38 XXX \u0425XX XX XX",autoComplete:"off",onClick:l.w}),(0,f.jsx)(h.Bc,{name:"number",component:x.j})]}),(0,f.jsxs)(u.VA,{children:[(0,f.jsxs)(u.BS,{children:[(0,f.jsx)(u.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,f.jsx)(h.Bc,{name:"checkbox",component:x.j}),n("form.checkboxText")]}),!b&&(0,f.jsx)(u.Sn,{type:"submit",children:n("header.buttonText")}),b&&(0,f.jsx)(u.wh,{children:(0,f.jsxs)(u.lo,{children:[(0,f.jsx)(u.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})})]})}},9175:function(e,n,r){r.d(n,{d:function(){return l}});var t=r(9230),i=r(7543),c=r(6174),s=r(804),o=r(7609),h=r(1578),a=r(184),l=function(e){var n=e.h1,r=e.p,l=e.buttonText,x=e.style,d=e.Bg,u=(0,t.$G)().t;return(0,a.jsx)("section",{children:(0,a.jsx)(d,{children:(0,a.jsxs)(i.fM,{children:[(0,a.jsx)(c.XU,{style:{width:"auto"},children:u("".concat(n))}),r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i._B,{children:u("".concat(r))}),(0,a.jsxs)(s.bj,{onClick:h.A,style:x,children:[(0,a.jsx)(s.TE,{}),(0,a.jsx)(s.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(o.Z,"#icon-car-wash")})}),(0,a.jsx)(s.Oo,{children:u("".concat(l))})]})]}):(0,a.jsxs)(s.bj,{style:x,onClick:h.A,children:[(0,a.jsx)(s.TE,{}),(0,a.jsx)(s.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(o.Z,"#icon-car-wash")})}),(0,a.jsx)(s.Oo,{children:u("".concat(l))})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return i}});var t=r(184),i=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{w:function(){return i}});var t=r(4110),i=function(){var e=document.querySelector("#number");new t.ZP(e,{mask:"+{38} 000 000 00 00"})}},1240:function(e,n,r){r.d(n,{C:function(){return t}});var t=function(e){var n=e.name,r=e.number;fetch("../send.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,number:r})}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},4700:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var t,i=r(168),c=r(2791),s=r(8547),o=r.p+"static/media/extra-wsh-bg@1x-min.026f93a3a322eabf39e8.jpg",h=r.p+"static/media/extra-wsh-bg@2x-min.362e5849c62bae94caff.jpg",a=r(9175),l=r(9230),x=r(6174),d=r(7609),u=r(3225),j=r(184),m=(0,c.lazy)((function(){return r.e(141).then(r.bind(r,9141))})),f=function(){var e=(0,l.$G)().t;return(0,j.jsx)("section",{children:(0,j.jsx)(x.hX,{children:(0,j.jsxs)(x.F8,{children:[(0,j.jsx)(u.D,{}),(0,j.jsxs)(x.Gf,{children:[(0,j.jsx)(x._B,{children:e("extra.p")}),(0,j.jsxs)(x.oK,{children:[(0,j.jsx)("li",{children:(0,j.jsxs)(x.lx,{children:[(0,j.jsx)(x.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(d.Z,"#icon-check-yellow")})}),(0,j.jsx)(x.yT,{children:e("extra.list.0")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(x.lx,{children:[(0,j.jsx)(x.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(d.Z,"#icon-check-yellow")})}),(0,j.jsx)(x.yT,{children:e("extra.list.1")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(x.lx,{children:[(0,j.jsx)(x.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(d.Z,"#icon-check-yellow")})}),(0,j.jsx)(x.yT,{children:e("extra.list.2")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(x.lx,{children:[(0,j.jsx)(x.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(d.Z,"#icon-check-yellow")})}),(0,j.jsx)(x.yT,{children:e("extra.list.3")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(x.lx,{children:[(0,j.jsx)(x.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(d.Z,"#icon-check-yellow")})}),(0,j.jsx)(x.yT,{children:e("extra.list.4")})]})})]}),(0,j.jsx)(x._B,{children:e("extra.paragraph.0")}),(0,j.jsx)(x._B,{children:e("extra.paragraph.1")}),(0,j.jsx)(x._B,{children:e("extra.paragraph.2")})]}),(0,j.jsx)(m,{h2:"extra.h2",list:"extra.serviceList",price:"extra.priceList"})]})})})},p=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(503)]).then(r.bind(r,5462))})),b=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(691)]).then(r.bind(r,862))})),g=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(741),r.e(418)]).then(r.bind(r,8556))})),w=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(704)]).then(r.bind(r,6286))})),y=(0,c.lazy)((function(){return r.e(881).then(r.bind(r,2125))})),k={margin:0,justifyContent:"normal",gap:"40px",marginTop:"40px"},v=s.ZP.div(t||(t=(0,i.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),o,h),T=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.d,{h1:"carService.h4List.1",buttonText:"header.buttonText",style:k,Bg:v}),(0,j.jsx)(f,{}),(0,j.jsx)(p,{}),(0,j.jsx)(b,{}),(0,j.jsx)(g,{}),(0,j.jsx)(w,{}),(0,j.jsx)(y,{})]})}}}]);
//# sourceMappingURL=115.e2b99c3f.chunk.js.map