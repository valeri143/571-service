"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[150],{3225:function(e,n,i){i.d(n,{D:function(){return m},f:function(){return j}});var c=i(9439),r=i(2791),t=i(9230),l=i(5705),s=i(8007),h=i(4254),o=i(4784),a=i(6174),d=i(3689),x=i(7609),u=i(184),j=s.Ry().shape({name:s.Z_().required("Please enter your name"),number:s.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:s.O7().required("Please check the checkbox to continue")}),m=function(){var e=(0,t.$G)(),n=(0,c.Z)(e,1)[0],i=(0,r.useState)(!1),s=(0,c.Z)(i,2),m=s[0],f=s[1];return(0,u.jsxs)(a.qb,{children:[(0,u.jsx)(a.eX,{children:n("form.h3")}),(0,u.jsx)(l.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:j,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;f(!0),i()},children:function(e){var i=e.setFieldValue;return(0,u.jsxs)(l.l0,{children:[(0,u.jsxs)(d.IT,{children:[(0,u.jsxs)(d.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,u.jsx)(d.se,{}),(0,u.jsx)(d.Ld,{width:"22",height:"22",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,u.jsx)(d.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,u.jsx)(l.Bc,{name:"name",component:o.j})]}),(0,u.jsxs)(d.IT,{children:[(0,u.jsx)(d.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,u.jsx)(d.oB,{}),(0,u.jsx)(d.Ld,{width:"22",height:"22",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,u.jsx)(d.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,h.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,u.jsx)(l.Bc,{name:"number",component:o.j})]}),(0,u.jsxs)(d.VA,{children:[(0,u.jsxs)(d.BS,{children:[(0,u.jsx)(d.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,u.jsx)(l.Bc,{name:"checkbox",component:o.j}),n("form.checkboxText")]}),!m&&(0,u.jsx)(d.Sn,{type:"submit",children:n("header.buttonText")}),m&&(0,u.jsx)(d.wh,{children:(0,u.jsxs)(d.lo,{children:[(0,u.jsx)(d.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},9175:function(e,n,i){i.d(n,{d:function(){return o}});var c=i(9230),r=i(7543),t=i(6174),l=i(804),s=i(7609),h=i(184),o=function(e){var n=e.h1,i=e.p,o=e.buttonText,a=e.style,d=e.Bg,x=(0,c.$G)().t;return(0,h.jsx)("section",{children:(0,h.jsx)(d,{children:(0,h.jsxs)(r.fM,{children:[(0,h.jsx)(t.XU,{style:{width:"auto"},children:x("".concat(n))}),i?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r._B,{children:x("".concat(i))}),(0,h.jsxs)(l.bj,{style:a,children:[(0,h.jsx)(l.TE,{}),(0,h.jsx)(l.Ld,{width:"18",height:"18",children:(0,h.jsx)("use",{href:"".concat(s.Z,"#icon-car-wash")})}),(0,h.jsx)(l.Oo,{href:"#form",children:x("".concat(o))})]})]}):(0,h.jsxs)(l.bj,{style:a,children:[(0,h.jsx)(l.TE,{}),(0,h.jsx)(l.Ld,{width:"18",height:"18",children:(0,h.jsx)("use",{href:"".concat(s.Z,"#icon-car-wash")})}),(0,h.jsx)(l.Oo,{children:x("".concat(o))})]})]})})})}},4784:function(e,n,i){i.d(n,{j:function(){return r}});var c=i(184),r=function(e){var n=e.children;return(0,c.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,i){i.d(n,{u:function(){return c}});var c=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var i=e.split(" ").slice(1).join("").replace(/\D/g,"");if(i.length<=12){var c="+380 ";return i.length<=3&&(c+=i),i.length>3&&i.length<6&&(c+=i.slice(0,3)+" "+i.slice(3,6)),i.length>=6&&i.length<8&&(c+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)),i.length>=8&&(c+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)+" "+i.slice(7,9)),c}}},4914:function(e,n,i){i.r(n),i.d(n,{default:function(){return k}});var c,r=i(168),t=i(2791),l=i(8547),s=i.p+"static/media/wash-bg@1x-min.b8fecb9ee105d8a6d822.jpg",h=i.p+"static/media/wash-bg@2x-min.ee0cadfe8e09e7465bb0.jpg",o=i(9175),a=i(9230),d=i(6174),x=i(7609),u=i(3225),j=i(184),m=(0,t.lazy)((function(){return i.e(141).then(i.bind(i,9141))})),f=function(){var e=(0,a.$G)().t;return(0,j.jsx)("section",{children:(0,j.jsx)(d.hX,{children:(0,j.jsxs)(d.F8,{children:[(0,j.jsx)(u.D,{}),(0,j.jsxs)(d.Gf,{children:[(0,j.jsxs)(d._B,{children:[e("cleaning.pAbout.0")," ",(0,j.jsx)("br",{}),(0,j.jsx)(d.Fe,{children:e("cleaning.pAbout.1")})]}),(0,j.jsxs)(d.oK,{children:[(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.0")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.1")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.2")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.3")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.4")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.5")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.6")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d.yT,{children:e("cleaning.list.7")})]})})]}),(0,j.jsx)(d._B,{children:e("cleaning.paragraph.0")}),(0,j.jsx)(d._B,{children:e("cleaning.paragraph.1")})]}),(0,j.jsx)(m,{h2:"cleaning.h2",list:"cleaning.serviceList",price:"cleaning.priceList"})]})})})},g=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(503)]).then(i.bind(i,5462))})),b=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(200),i.e(624)]).then(i.bind(i,862))})),p=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(200),i.e(740)]).then(i.bind(i,8556))})),y=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(704)]).then(i.bind(i,6286))})),w=(0,t.lazy)((function(){return i.e(881).then(i.bind(i,2125))})),v=l.ZP.div(c||(c=(0,r.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),s,h),k=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.d,{h1:"footer.carWashServiceList.1",p:"cleaning.p",buttonText:"header.buttonText",style:{margin:0},Bg:v}),(0,j.jsx)(f,{}),(0,j.jsx)(g,{}),(0,j.jsx)(b,{}),(0,j.jsx)(p,{}),(0,j.jsx)(y,{}),(0,j.jsx)(w,{})]})}}}]);
//# sourceMappingURL=150.4c48e258.chunk.js.map