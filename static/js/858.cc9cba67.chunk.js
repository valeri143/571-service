"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[858],{3225:function(e,n,i){i.d(n,{D:function(){return j},f:function(){return m}});var t=i(9439),r=i(2791),c=i(9230),s=i(5705),l=i(8007),o=i(4254),a=i(4784),h=i(6174),d=i(3689),u=i(7609),x=i(184),m=l.Ry().shape({name:l.Z_().required("Please enter your name"),number:l.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:l.O7().required("Please check the checkbox to continue")}),j=function(){var e=(0,c.$G)(),n=(0,t.Z)(e,1)[0],i=(0,r.useState)(!1),l=(0,t.Z)(i,2),j=l[0],g=l[1];return(0,x.jsxs)(h.qb,{children:[(0,x.jsx)(h.eX,{children:n("form.h3")}),(0,x.jsx)(s.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:m,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;g(!0),i()},children:function(e){var i=e.setFieldValue;return(0,x.jsxs)(s.l0,{children:[(0,x.jsxs)(d.IT,{children:[(0,x.jsxs)(d.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,x.jsx)(d.se,{}),(0,x.jsx)(d.Ld,{width:"22",height:"22",children:(0,x.jsx)("use",{href:"".concat(u.Z,"#icon-address-book")})}),(0,x.jsx)(d.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,x.jsx)(s.Bc,{name:"name",component:a.j})]}),(0,x.jsxs)(d.IT,{children:[(0,x.jsx)(d.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,x.jsx)(d.oB,{}),(0,x.jsx)(d.Ld,{width:"22",height:"22",children:(0,x.jsx)("use",{href:"".concat(u.Z,"#icon-call-yellow-outline")})}),(0,x.jsx)(d.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,o.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,x.jsx)(s.Bc,{name:"number",component:a.j})]}),(0,x.jsxs)(d.VA,{children:[(0,x.jsxs)(d.BS,{children:[(0,x.jsx)(d.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,x.jsx)(s.Bc,{name:"checkbox",component:a.j}),n("form.checkboxText")]}),!j&&(0,x.jsx)(d.Sn,{type:"submit",children:n("header.buttonText")}),j&&(0,x.jsx)(d.wh,{children:(0,x.jsxs)(d.lo,{children:[(0,x.jsx)(d.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},9175:function(e,n,i){i.d(n,{d:function(){return h}});var t=i(9230),r=i(7543),c=i(6174),s=i(804),l=i(7609),o=i(1578),a=i(184),h=function(e){var n=e.h1,i=e.p,h=e.buttonText,d=e.style,u=e.Bg,x=(0,t.$G)().t;return(0,a.jsx)("section",{children:(0,a.jsx)(u,{children:(0,a.jsxs)(r.fM,{children:[(0,a.jsx)(c.XU,{style:{width:"auto"},children:x("".concat(n))}),i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r._B,{children:x("".concat(i))}),(0,a.jsxs)(s.bj,{onClick:o.A,style:d,children:[(0,a.jsx)(s.TE,{}),(0,a.jsx)(s.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(l.Z,"#icon-car-wash")})}),(0,a.jsx)(s.Oo,{children:x("".concat(h))})]})]}):(0,a.jsxs)(s.bj,{style:d,onClick:o.A,children:[(0,a.jsx)(s.TE,{}),(0,a.jsx)(s.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(l.Z,"#icon-car-wash")})}),(0,a.jsx)(s.Oo,{children:x("".concat(h))})]})]})})})}},4784:function(e,n,i){i.d(n,{j:function(){return r}});var t=i(184),r=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,i){i.d(n,{u:function(){return t}});var t=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var i=e.split(" ").slice(1).join("").replace(/\D/g,"");if(i.length<=12){var t="+380 ";return i.length<=3&&(t+=i),i.length>3&&i.length<6&&(t+=i.slice(0,3)+" "+i.slice(3,6)),i.length>=6&&i.length<8&&(t+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)),i.length>=8&&(t+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)+" "+i.slice(7,9)),t}}},3409:function(e,n,i){i.r(n),i.d(n,{default:function(){return P}});var t,r=i(168),c=i(2791),s=i(8547),l=i.p+"static/media/headlight-bg@1x-min.0f4c925013d68c8a3999.jpg",o=i.p+"static/media/headlight-bg@2x-min.66faecf00df301d5c0e1.jpg",a=i(9175),h=i(9230),d=i(6174),u=i(3225),x=i(184),m=(0,c.lazy)((function(){return i.e(141).then(i.bind(i,9141))})),j=function(){var e=(0,h.$G)().t;return(0,x.jsx)("section",{children:(0,x.jsx)(d.PQ,{children:(0,x.jsxs)(d.F8,{children:[(0,x.jsx)(u.D,{}),(0,x.jsxs)(d.Gf,{children:[(0,x.jsx)(d._B,{children:e("headlightPolishing.paragraph.0")}),(0,x.jsx)(d._B,{children:e("headlightPolishing.paragraph.1")}),(0,x.jsx)(d._B,{children:e("headlightPolishing.paragraph.2")})]}),(0,x.jsx)(m,{h2:"headlightPolishing.h2",list:"headlightPolishing.serviceList",price:"headlightPolishing.priceList"})]})})})},g=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(503)]).then(i.bind(i,5462))})),f=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(691)]).then(i.bind(i,862))})),p=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(741),i.e(418)]).then(i.bind(i,8556))})),b=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(704)]).then(i.bind(i,6286))})),v=(0,c.lazy)((function(){return i.e(881).then(i.bind(i,2125))})),k=s.ZP.div(t||(t=(0,r.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),l,o),y={gap:"15px",maxWidth:"max-content",paddingRight:"15px",margin:0,justifyContent:"normal"},P=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.d,{h1:"services.servicesUlText.0",p:"headlightPolishing.p",buttonText:"carWash.buttonText",style:y,Bg:k}),(0,x.jsx)(j,{}),(0,x.jsx)(g,{}),(0,x.jsx)(f,{}),(0,x.jsx)(p,{}),(0,x.jsx)(b,{}),(0,x.jsx)(v,{})]})}}}]);
//# sourceMappingURL=858.cc9cba67.chunk.js.map