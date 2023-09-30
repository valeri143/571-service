"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[4275],{3225:function(e,n,r){r.d(n,{D:function(){return j},f:function(){return m}});var t=r(9439),i=r(2791),a=r(9230),c=r(5705),s=r(8007),o=r(4254),l=r(4784),h=r(6174),u=r(3689),x=r(7609),d=r(184),m=s.Ry().shape({name:s.Z_().required("Please enter your name"),number:s.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:s.O7().required("Please check the checkbox to continue")}),j=function(){var e=(0,a.$G)(),n=(0,t.Z)(e,1)[0],r=(0,i.useState)(!1),s=(0,t.Z)(r,2),j=s[0],p=s[1];return(0,d.jsxs)(h.qb,{children:[(0,d.jsx)(h.eX,{children:n("form.h3")}),(0,d.jsx)(c.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:m,onSubmit:function(e,n){e.name,e.number;var r=n.resetForm;p(!0),r()},children:function(e){var r=e.setFieldValue;return(0,d.jsxs)(c.l0,{children:[(0,d.jsxs)(u.IT,{children:[(0,d.jsxs)(u.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,d.jsx)(u.se,{}),(0,d.jsx)(u.Ld,{width:"22",height:"22",children:(0,d.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,d.jsx)(u.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,d.jsx)(c.Bc,{name:"name",component:l.j})]}),(0,d.jsxs)(u.IT,{children:[(0,d.jsx)(u.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,d.jsx)(u.oB,{}),(0,d.jsx)(u.Ld,{width:"22",height:"22",children:(0,d.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,d.jsx)(u.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,o.u)(e.target.value);r("number",n)},onFocus:function(e){e.target.value||r("number","+380 ")}}),(0,d.jsx)(c.Bc,{name:"number",component:l.j})]}),(0,d.jsxs)(u.VA,{children:[(0,d.jsxs)(u.BS,{children:[(0,d.jsx)(u.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,d.jsx)(c.Bc,{name:"checkbox",component:l.j}),n("form.checkboxText")]}),!j&&(0,d.jsx)(u.Sn,{type:"submit",children:n("header.buttonText")}),j&&(0,d.jsx)(u.wh,{children:(0,d.jsxs)(u.lo,{children:[(0,d.jsx)(u.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},191:function(e,n,r){r.d(n,{k:function(){return h}});var t=r(9230),i=r(7543),a=r(804),c=r(7609),s=r(6174),o=r(1578),l=r(184),h=function(e){var n=e.h1,r=e.p,h=e.style,u=e.Bg,x=e.maxWidth,d=(0,t.$G)().t;return(0,l.jsx)("section",{children:(0,l.jsx)(u,{children:(0,l.jsxs)(i.fM,{children:[(0,l.jsx)(s.XU,{style:{width:"auto",maxWidth:x},children:d("".concat(n))}),r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i._B,{children:d("".concat(r))}),(0,l.jsxs)(a.bj,{style:{margin:0,justifyContent:"normal",gap:"40px"},onClick:o.A,children:[(0,l.jsx)(a.TE,{}),(0,l.jsx)(a.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-tools")})}),(0,l.jsx)(a.Oo,{children:d("carService.buttonText")})]})]}):(0,l.jsxs)(a.bj,{style:h,onClick:o.A,children:[(0,l.jsx)(a.TE,{}),(0,l.jsx)(a.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(c.Z,"#icon-tools")})}),(0,l.jsx)(a.Oo,{children:d("carService.buttonText")})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return i}});var t=r(184),i=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{u:function(){return t}});var t=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var r=e.split(" ").slice(1).join("").replace(/\D/g,"");if(r.length<=12){var t="+380 ";return r.length<=3&&(t+=r),r.length>3&&r.length<6&&(t+=r.slice(0,3)+" "+r.slice(3,6)),r.length>=6&&r.length<8&&(t+=r.slice(0,3)+" "+r.slice(3,5)+" "+r.slice(5,7)),r.length>=8&&(t+=r.slice(0,3)+" "+r.slice(3,5)+" "+r.slice(5,7)+" "+r.slice(7,9)),t}}},8988:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,i=r(168),a=r(2791),c=r(8547),s=r.p+"static/media/extra-bg@1x-min.60d2812d8a9f2ab72331.jpg",o=r.p+"static/media/extra-bg@2x-min.66b6a27b2210958cf9c5.jpg",l=r(191),h=r(9230),u=r(6174),x=r(3225),d=r(184),m=(0,a.lazy)((function(){return r.e(9141).then(r.bind(r,9141))})),j=function(){var e=(0,h.$G)().t;return(0,d.jsx)("section",{children:(0,d.jsx)(u.hX,{children:(0,d.jsxs)(u.F8,{children:[(0,d.jsx)(x.D,{}),(0,d.jsxs)(u.Gf,{children:[(0,d.jsxs)(u._B,{children:[e("extraRepair.paragraph.0")," ",(0,d.jsx)(u.Fe,{children:e("extraRepair.paragraph.1")}),e("extraRepair.paragraph.2")]}),(0,d.jsxs)(u._B,{children:[e("extraRepair.paragraph.3"),(0,d.jsxs)(u.Fe,{children:[" ",e("extraRepair.paragraph.4")]}),e("extraRepair.paragraph.5")]}),(0,d.jsx)(u._B,{children:e("extraRepair.paragraph.6")})]}),(0,d.jsx)(m,{h2:"extraRepair.h2",list:"extraRepair.serviceList",price:"extraRepair.priceList"})]})})})},p=(0,a.lazy)((function(){return Promise.all([r.e(271),r.e(8503)]).then(r.bind(r,5462))})),f=(0,a.lazy)((function(){return Promise.all([r.e(271),r.e(6691)]).then(r.bind(r,862))})),b=(0,a.lazy)((function(){return Promise.all([r.e(271),r.e(322),r.e(2649)]).then(r.bind(r,8556))})),g=(0,a.lazy)((function(){return Promise.all([r.e(271),r.e(5704)]).then(r.bind(r,6286))})),v=(0,a.lazy)((function(){return r.e(3881).then(r.bind(r,2125))})),k=c.ZP.div(t||(t=(0,i.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),s,o),y=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.k,{h1:"carService.h4List.1",p:"extraRepair.p",Bg:k}),(0,d.jsx)(j,{}),(0,d.jsx)(p,{}),(0,d.jsx)(f,{}),(0,d.jsx)(b,{}),(0,d.jsx)(g,{}),(0,d.jsx)(v,{})]})}}}]);
//# sourceMappingURL=4275.2d99f036.chunk.js.map