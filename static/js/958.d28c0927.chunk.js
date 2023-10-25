"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[958],{3225:function(e,n,r){r.d(n,{D:function(){return b},f:function(){return p}});var t=r(4165),i=r(5861),c=r(9439),s=r(2791),o=r(9230),a=r(5705),h=r(8007),l=r(4254),u=r(4784),d=r(6174),x=r(3689),m=r(1240),j=r(7609),f=r(184),p=h.Ry().shape({name:h.Z_().required("Please enter your name"),number:h.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:h.O7().required("Please check the checkbox to continue")}),b=function(){var e=(0,o.$G)(),n=(0,c.Z)(e,1)[0],r=(0,s.useState)(!1),h=(0,c.Z)(r,2),b=h[0],g=h[1],v=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,c,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.name,c=n.number,s=r.resetForm,g(!0),e.prev=3,e.next=6,(0,m.C)({name:i,number:c});case 6:g(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:s();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,f.jsxs)(d.qb,{children:[(0,f.jsx)(d.eX,{children:n("form.h3")}),(0,f.jsx)(a.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:p,onSubmit:v,children:(0,f.jsxs)(a.l0,{children:[(0,f.jsxs)(x.IT,{children:[(0,f.jsxs)(x.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,f.jsx)(x.se,{}),(0,f.jsx)(x.Ld,{width:"22",height:"22",children:(0,f.jsx)("use",{href:"".concat(j.Z,"#icon-address-book")})}),(0,f.jsx)(x.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,f.jsx)(a.Bc,{name:"name",component:u.j})]}),(0,f.jsxs)(x.IT,{children:[(0,f.jsx)(x.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,f.jsx)(x.oB,{}),(0,f.jsx)(x.Ld,{width:"22",height:"22",children:(0,f.jsx)("use",{href:"".concat(j.Z,"#icon-call-yellow-outline")})}),(0,f.jsx)(x.ob,{name:"number",id:"number",type:"tel",placeholder:"+38 XXX \u0425XX XX XX",autoComplete:"off",onClick:l.w}),(0,f.jsx)(a.Bc,{name:"number",component:u.j})]}),(0,f.jsxs)(x.VA,{children:[(0,f.jsxs)(x.BS,{children:[(0,f.jsx)(x.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,f.jsx)(a.Bc,{name:"checkbox",component:u.j}),n("form.checkboxText")]}),!b&&(0,f.jsx)(x.Sn,{type:"submit",children:n("header.buttonText")}),b&&(0,f.jsx)(x.wh,{children:(0,f.jsxs)(x.lo,{children:[(0,f.jsx)(x.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})})]})}},5434:function(e,n,r){r.d(n,{m:function(){return l}});var t=r(9230),i=r(7543),c=r(804),s=r(7609),o=r(6174),a=r(1578),h=r(184),l=function(e){var n=e.h1,r=e.p,l=e.style,u=e.Bg,d=e.maxWidth,x=(0,t.$G)().t;return(0,h.jsx)("section",{children:(0,h.jsx)(u,{children:(0,h.jsxs)(i.fM,{children:[(0,h.jsx)(o.XU,{style:{width:"auto",maxWidth:d},children:x("".concat(n))}),r?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i._B,{children:x("".concat(r))}),(0,h.jsxs)(c.bj,{style:l,onClick:a.A,children:[(0,h.jsx)(c.TE,{}),(0,h.jsx)(c.Ld,{width:"18",height:"18",children:(0,h.jsx)("use",{href:"".concat(s.Z,"#icon-tire")})}),(0,h.jsx)(c.Oo,{children:x("carTire.buttonText")})]})]}):(0,h.jsxs)(c.bj,{onClick:a.A,style:l,children:[(0,h.jsx)(c.TE,{}),(0,h.jsx)(c.Ld,{width:"18",height:"18",children:(0,h.jsx)("use",{href:"".concat(s.Z,"#icon-tire")})}),(0,h.jsx)(c.Oo,{children:x("carTire.buttonText")})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return i}});var t=r(184),i=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{w:function(){return i}});var t=r(4110),i=function(){var e=document.querySelector("#number");new t.ZP(e,{mask:"+{38} 000 000 00 00"})}},1240:function(e,n,r){r.d(n,{C:function(){return t}});var t=function(e){var n=e.name,r=e.number;fetch("../send.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,number:r})}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},2716:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,i=r(168),c=r(2791),s=r(8547),o=r.p+"static/media/tire-chassis-bg@1x-min.bc3c914c2ad618c96a03.jpg",a=r.p+"static/media/tire-chassis-bg@2x-min.d7aa3d95682ae418a898.jpg",h=r(5434),l=r(9230),u=r(6174),d=r(3225),x=r(184),m=(0,c.lazy)((function(){return r.e(493).then(r.bind(r,6493))})),j=function(){var e=(0,l.$G)().t;return(0,x.jsxs)("section",{children:[(0,x.jsx)("h2",{hidden:!0,children:"chassisMaintenance"}),(0,x.jsx)(u.hX,{children:(0,x.jsxs)(u.F8,{children:[(0,x.jsx)(d.D,{}),(0,x.jsxs)(u.Gf,{children:[(0,x.jsx)(u._B,{children:e("chassisMaintenance.p.0")}),(0,x.jsx)(u._B,{children:e("chassisMaintenance.p.1")}),(0,x.jsx)(u._B,{children:e("chassisMaintenance.p.2")})]}),(0,x.jsx)(m,{h2:"chassisMaintenance.h2",price:"chassisMaintenance.priceList",list:"chassisMaintenance.serviceList"})]})})]})},f=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(503)]).then(r.bind(r,5462))})),p=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(691)]).then(r.bind(r,862))})),b=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(741),r.e(418)]).then(r.bind(r,8556))})),g=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(704)]).then(r.bind(r,6286))})),v=(0,c.lazy)((function(){return r.e(881).then(r.bind(r,2125))})),k={margin:0,justifyContent:"normal",gap:"10px",paddingRight:"10px",maxWidth:"max-content",marginTop:"30px"},y=s.ZP.div(t||(t=(0,i.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),o,a),w=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.m,{h1:"footer.tireServiceList.2",style:k,Bg:y,maxWidth:718}),(0,x.jsx)(j,{}),(0,x.jsx)(f,{}),(0,x.jsx)(p,{}),(0,x.jsx)(b,{}),(0,x.jsx)(g,{}),(0,x.jsx)(v,{})]})}}}]);
//# sourceMappingURL=958.d28c0927.chunk.js.map