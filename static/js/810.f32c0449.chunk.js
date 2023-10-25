"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[810],{3225:function(e,n,r){r.d(n,{D:function(){return b},f:function(){return f}});var t=r(4165),i=r(5861),o=r(9439),c=r(2791),s=r(9230),a=r(5705),l=r(8007),h=r(4254),u=r(4784),d=r(6174),x=r(3689),m=r(1240),p=r(7609),j=r(184),f=l.Ry().shape({name:l.Z_().required("Please enter your name"),number:l.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:l.O7().required("Please check the checkbox to continue")}),b=function(){var e=(0,s.$G)(),n=(0,o.Z)(e,1)[0],r=(0,c.useState)(!1),l=(0,o.Z)(r,2),b=l[0],g=l[1],v=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,o,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.name,o=n.number,c=r.resetForm,g(!0),e.prev=3,e.next=6,(0,m.C)({name:i,number:o});case 6:g(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:c();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,j.jsxs)(d.qb,{children:[(0,j.jsx)(d.eX,{children:n("form.h3")}),(0,j.jsx)(a.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:f,onSubmit:v,children:(0,j.jsxs)(a.l0,{children:[(0,j.jsxs)(x.IT,{children:[(0,j.jsxs)(x.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,j.jsx)(x.se,{}),(0,j.jsx)(x.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-address-book")})}),(0,j.jsx)(x.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,j.jsx)(a.Bc,{name:"name",component:u.j})]}),(0,j.jsxs)(x.IT,{children:[(0,j.jsx)(x.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,j.jsx)(x.oB,{}),(0,j.jsx)(x.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-call-yellow-outline")})}),(0,j.jsx)(x.ob,{name:"number",id:"number",type:"tel",placeholder:"+38 XXX \u0425XX XX XX",autoComplete:"off",onClick:h.w}),(0,j.jsx)(a.Bc,{name:"number",component:u.j})]}),(0,j.jsxs)(x.VA,{children:[(0,j.jsxs)(x.BS,{children:[(0,j.jsx)(x.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,j.jsx)(a.Bc,{name:"checkbox",component:u.j}),n("form.checkboxText")]}),!b&&(0,j.jsx)(x.Sn,{type:"submit",children:n("header.buttonText")}),b&&(0,j.jsx)(x.wh,{children:(0,j.jsxs)(x.lo,{children:[(0,j.jsx)(x.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})})]})}},191:function(e,n,r){r.d(n,{k:function(){return h}});var t=r(9230),i=r(7543),o=r(804),c=r(7609),s=r(6174),a=r(1578),l=r(184),h=function(e){var n=e.h1,r=e.p,h=e.style,u=e.Bg,d=e.maxWidth,x=(0,t.$G)().t;return(0,l.jsx)("section",{children:(0,l.jsx)(u,{children:(0,l.jsxs)(i.fM,{children:[(0,l.jsx)(s.XU,{style:{width:"auto",maxWidth:d},children:x("".concat(n))}),r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i._B,{children:x("".concat(r))}),(0,l.jsxs)(o.bj,{style:{margin:0,justifyContent:"normal",gap:"40px"},onClick:a.A,children:[(0,l.jsx)(o.TE,{}),(0,l.jsx)(o.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-tools")})}),(0,l.jsx)(o.Oo,{children:x("carService.buttonText")})]})]}):(0,l.jsxs)(o.bj,{style:h,onClick:a.A,children:[(0,l.jsx)(o.TE,{}),(0,l.jsx)(o.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-tools")})}),(0,l.jsx)(o.Oo,{children:x("carService.buttonText")})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return i}});var t=r(184),i=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{w:function(){return i}});var t=r(4110),i=function(){var e=document.querySelector("#number");new t.ZP(e,{mask:"+{38} 000 000 00 00"})}},1240:function(e,n,r){r.d(n,{C:function(){return t}});var t=function(e){var n=e.name,r=e.number;fetch("../send.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,number:r})}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},3822:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,i=r(168),o=r(2791),c=r(8547),s=r(4766),a=r(7180),l=r(191),h=r(9230),u=r(6174),d=r(3225),x=r(184),m=(0,o.lazy)((function(){return r.e(141).then(r.bind(r,9141))})),p=function(){var e=(0,h.$G)().t;return(0,x.jsx)("section",{children:(0,x.jsx)(u.hX,{children:(0,x.jsxs)(u.F8,{children:[(0,x.jsx)(d.D,{}),(0,x.jsxs)(u.Gf,{style:{marginLeft:"5px"},children:[(0,x.jsx)(u._B,{children:e("gearboxRepair.paragraph.0")}),(0,x.jsx)(u._B,{children:e("gearboxRepair.paragraph.1")}),(0,x.jsx)(u._B,{children:e("gearboxRepair.paragraph.2")})]}),(0,x.jsx)(m,{h2:"gearboxRepair.h2",list:"gearboxRepair.serviceList",price:"gearboxRepair.priceList"})]})})})},j=(0,o.lazy)((function(){return Promise.all([r.e(271),r.e(503)]).then(r.bind(r,5462))})),f=(0,o.lazy)((function(){return Promise.all([r.e(271),r.e(691)]).then(r.bind(r,862))})),b=(0,o.lazy)((function(){return Promise.all([r.e(271),r.e(741),r.e(418)]).then(r.bind(r,8556))})),g=(0,o.lazy)((function(){return Promise.all([r.e(271),r.e(704)]).then(r.bind(r,6286))})),v=(0,o.lazy)((function(){return r.e(881).then(r.bind(r,2125))})),k=c.ZP.div(t||(t=(0,i.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),s,a),y=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.k,{h1:"footer.carServiceList.1",p:"gearboxRepair.p",Bg:k}),(0,x.jsx)(p,{}),(0,x.jsx)(j,{}),(0,x.jsx)(f,{}),(0,x.jsx)(b,{}),(0,x.jsx)(g,{}),(0,x.jsx)(v,{})]})}},4766:function(e,n,r){e.exports=r.p+"static/media/chassis-bg@1x-min.ccfea1c4a1fd7133b30e.jpg"},7180:function(e,n,r){e.exports=r.p+"static/media/chassis-bg@2x-min.a1ac102210cdf616de55.jpg"}}]);
//# sourceMappingURL=810.f32c0449.chunk.js.map