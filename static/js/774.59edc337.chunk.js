"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[774],{3225:function(e,n,i){i.d(n,{D:function(){return p},f:function(){return j}});var r=i(9439),s=i(2791),c=i(9230),t=i(5705),h=i(8007),l=i(4254),a=i(4784),o=i(6174),d=i(3689),x=i(7609),u=i(184),j=h.Ry().shape({name:h.Z_().required("Please enter your name"),number:h.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:h.O7().required("Please check the checkbox to continue")}),p=function(){var e=(0,c.$G)(),n=(0,r.Z)(e,1)[0],i=(0,s.useState)(!1),h=(0,r.Z)(i,2),p=h[0],m=h[1];return(0,u.jsxs)(o.qb,{children:[(0,u.jsx)(o.eX,{children:n("form.h3")}),(0,u.jsx)(t.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:j,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;m(!0),i()},children:function(e){var i=e.setFieldValue;return(0,u.jsxs)(t.l0,{children:[(0,u.jsxs)(d.IT,{children:[(0,u.jsxs)(d.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,u.jsx)(d.se,{}),(0,u.jsx)(d.Ld,{width:"22",height:"22",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,u.jsx)(d.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,u.jsx)(t.Bc,{name:"name",component:a.j})]}),(0,u.jsxs)(d.IT,{children:[(0,u.jsx)(d.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,u.jsx)(d.oB,{}),(0,u.jsx)(d.Ld,{width:"22",height:"22",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,u.jsx)(d.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,l.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,u.jsx)(t.Bc,{name:"number",component:a.j})]}),(0,u.jsxs)(d.VA,{children:[(0,u.jsxs)(d.BS,{children:[(0,u.jsx)(d.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,u.jsx)(t.Bc,{name:"checkbox",component:a.j}),n("form.checkboxText")]}),!p&&(0,u.jsx)(d.Sn,{type:"submit",children:n("header.buttonText")}),p&&(0,u.jsx)(d.wh,{children:(0,u.jsxs)(d.lo,{children:[(0,u.jsx)(d.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},191:function(e,n,i){i.d(n,{k:function(){return a}});var r=i(9230),s=i(7543),c=i(804),t=i(7609),h=i(6174),l=i(184),a=function(e){var n=e.h1,i=e.p,a=e.style,o=e.Bg,d=e.maxWidth,x=(0,r.$G)().t;return(0,l.jsx)("section",{children:(0,l.jsx)(o,{children:(0,l.jsxs)(s.fM,{children:[(0,l.jsx)(h.XU,{style:{width:"auto",maxWidth:d},children:x("".concat(n))}),i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s._B,{children:x("".concat(i))}),(0,l.jsxs)(c.bj,{style:{margin:0,justifyContent:"normal",gap:"40px"},children:[(0,l.jsx)(c.TE,{}),(0,l.jsx)(c.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(t.Z,"#icon-tools")})}),(0,l.jsx)(c.Oo,{href:"#form",children:x("carService.buttonText")})]})]}):(0,l.jsxs)(c.bj,{style:a,children:[(0,l.jsx)(c.TE,{}),(0,l.jsx)(c.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(t.Z,"#icon-tools")})}),(0,l.jsx)(c.Oo,{children:x("carService.buttonText")})]})]})})})}},4784:function(e,n,i){i.d(n,{j:function(){return s}});var r=i(184),s=function(e){var n=e.children;return(0,r.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,i){i.d(n,{u:function(){return r}});var r=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var i=e.split(" ").slice(1).join("").replace(/\D/g,"");if(i.length<=12){var r="+380 ";return i.length<=3&&(r+=i),i.length>3&&i.length<6&&(r+=i.slice(0,3)+" "+i.slice(3,6)),i.length>=6&&i.length<8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)),i.length>=8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)+" "+i.slice(7,9)),r}}},3774:function(e,n,i){i.r(n),i.d(n,{default:function(){return B}});var r,s=i(168),c=i(2791),t=i(8547),h=i(4766),l=i(7180),a=i(191),o=i(9230),d=i(6174),x=i(7609),u=i(3225),j=i(184),p=(0,c.lazy)((function(){return i.e(141).then(i.bind(i,9141))})),m=function(){var e=(0,o.$G)().t;return(0,j.jsx)("section",{children:(0,j.jsx)(d.F2,{children:(0,j.jsxs)(d.F8,{children:[(0,j.jsx)(u.D,{}),(0,j.jsxs)(d.Gf,{children:[(0,j.jsxs)(d._B,{children:[e("chassisRepair.p.0")," ",(0,j.jsx)("br",{}),(0,j.jsx)(d.Fe,{children:e("chassisRepair.p.1")})]}),(0,j.jsxs)(d.oK,{children:[(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.0")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.1")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.2")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.3")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.4")})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.lx,{children:[(0,j.jsx)(d.Ld,{width:"30",height:"30",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,j.jsx)(d._B,{children:e("chassisRepair.list.5")})]})})]}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.0")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.1")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.2")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.3")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.4")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.5")}),(0,j.jsx)(d._B,{children:e("chassisRepair.paragraph.6")})]}),(0,j.jsx)(p,{h2:"chassisRepair.h2",list:"chassisRepair.serviceList",price:"chassisRepair.priceList"})]})})})},f=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(503)]).then(i.bind(i,5462))})),g=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(200),i.e(624)]).then(i.bind(i,862))})),b=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(200),i.e(740)]).then(i.bind(i,8556))})),v=(0,c.lazy)((function(){return Promise.all([i.e(271),i.e(704)]).then(i.bind(i,6286))})),y=(0,c.lazy)((function(){return i.e(881).then(i.bind(i,2125))})),k={margin:0,justifyContent:"normal",gap:"40px",marginTop:"40px"},w=t.ZP.div(r||(r=(0,s.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),h,l),B=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.k,{h1:"footer.carServiceList.2",style:k,Bg:w}),(0,j.jsx)(m,{}),(0,j.jsx)(f,{}),(0,j.jsx)(g,{}),(0,j.jsx)(b,{}),(0,j.jsx)(v,{}),(0,j.jsx)(y,{})]})}},4766:function(e,n,i){e.exports=i.p+"static/media/chassis-bg@1x-min.ccfea1c4a1fd7133b30e.jpg"},7180:function(e,n,i){e.exports=i.p+"static/media/chassis-bg@2x-min.a1ac102210cdf616de55.jpg"}}]);
//# sourceMappingURL=774.59edc337.chunk.js.map