"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[5885],{3225:function(e,n,i){i.d(n,{D:function(){return p},f:function(){return u}});var r=i(9439),c=i(2791),t=i(9230),s=i(5705),l=i(8007),h=i(4254),a=i(4784),o=i(6174),d=i(3689),x=i(7609),j=i(184),u=l.Ry().shape({name:l.Z_().required("Please enter your name"),number:l.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:l.O7().required("Please check the checkbox to continue")}),p=function(){var e=(0,t.$G)(),n=(0,r.Z)(e,1)[0],i=(0,c.useState)(!1),l=(0,r.Z)(i,2),p=l[0],g=l[1];return(0,j.jsxs)(o.qb,{children:[(0,j.jsx)(o.eX,{children:n("form.h3")}),(0,j.jsx)(s.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:u,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;g(!0),i()},children:function(e){var i=e.setFieldValue;return(0,j.jsxs)(s.l0,{children:[(0,j.jsxs)(d.IT,{children:[(0,j.jsxs)(d.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,j.jsx)(d.se,{}),(0,j.jsx)(d.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,j.jsx)(d.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,j.jsx)(s.Bc,{name:"name",component:a.j})]}),(0,j.jsxs)(d.IT,{children:[(0,j.jsx)(d.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,j.jsx)(d.oB,{}),(0,j.jsx)(d.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,j.jsx)(d.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,h.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,j.jsx)(s.Bc,{name:"number",component:a.j})]}),(0,j.jsxs)(d.VA,{children:[(0,j.jsxs)(d.BS,{children:[(0,j.jsx)(d.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,j.jsx)(s.Bc,{name:"checkbox",component:a.j}),n("form.checkboxText")]}),!p&&(0,j.jsx)(d.Sn,{type:"submit",children:n("header.buttonText")}),p&&(0,j.jsx)(d.wh,{children:(0,j.jsxs)(d.lo,{children:[(0,j.jsx)(d.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},191:function(e,n,i){i.d(n,{k:function(){return o}});var r=i(9230),c=i(7543),t=i(804),s=i(7609),l=i(6174),h=i(1578),a=i(184),o=function(e){var n=e.h1,i=e.p,o=e.style,d=e.Bg,x=e.maxWidth,j=(0,r.$G)().t;return(0,a.jsx)("section",{children:(0,a.jsx)(d,{children:(0,a.jsxs)(c.fM,{children:[(0,a.jsx)(l.XU,{style:{width:"auto",maxWidth:x},children:j("".concat(n))}),i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c._B,{children:j("".concat(i))}),(0,a.jsxs)(t.bj,{style:{margin:0,justifyContent:"normal",gap:"40px"},onClick:h.A,children:[(0,a.jsx)(t.TE,{}),(0,a.jsx)(t.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(s.Z,"#icon-tools")})}),(0,a.jsx)(t.Oo,{children:j("carService.buttonText")})]})]}):(0,a.jsxs)(t.bj,{style:o,onClick:h.A,children:[(0,a.jsx)(t.TE,{}),(0,a.jsx)(t.Ld,{width:"18",height:"18",children:(0,a.jsx)("use",{href:"".concat(s.Z,"#icon-tools")})}),(0,a.jsx)(t.Oo,{children:j("carService.buttonText")})]})]})})})}},4784:function(e,n,i){i.d(n,{j:function(){return c}});var r=i(184),c=function(e){var n=e.children;return(0,r.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,i){i.d(n,{u:function(){return r}});var r=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var i=e.split(" ").slice(1).join("").replace(/\D/g,"");if(i.length<=12){var r="+380 ";return i.length<=3&&(r+=i),i.length>3&&i.length<6&&(r+=i.slice(0,3)+" "+i.slice(3,6)),i.length>=6&&i.length<8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)),i.length>=8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)+" "+i.slice(7,9)),r}}},1503:function(e,n,i){i.r(n),i.d(n,{default:function(){return y}});var r,c=i(168),t=i(2791),s=i(8547),l=i.p+"static/media/engine-bg@1x-min.bf9e6a105481d62743fb.jpg",h=i.p+"static/media/engine-bg@2x-min.e462ba309ad629468333.jpg",a=i(191),o=i(9230),d=i(6174),x=i(7609),j=i(3225),u=i(184),p=(0,t.lazy)((function(){return i.e(9141).then(i.bind(i,9141))})),g=function(){var e=(0,o.$G)().t;return(0,u.jsx)("section",{children:(0,u.jsx)(d.hX,{children:(0,u.jsxs)(d.F8,{children:[(0,u.jsx)(j.D,{}),(0,u.jsxs)(d.Gf,{children:[(0,u.jsx)(d._B,{children:e("engineRepair.paragraph.0")}),(0,u.jsx)(d._B,{children:e("engineRepair.paragraph.1")}),(0,u.jsxs)(d._B,{children:[(0,u.jsx)(d.Fe,{children:e("engineRepair.paragraph.2")}),e("engineRepair.paragraph.3")]}),(0,u.jsxs)(d.oK,{children:[(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.0")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.1")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.2")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.3")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.4")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.5")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.6")})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(d.lx,{children:[(0,u.jsx)(d.Ld,{width:"30",height:"30",children:(0,u.jsx)("use",{href:"".concat(x.Z,"#icon-check-yellow")})}),(0,u.jsx)(d._B,{children:e("engineRepair.list.7")})]})})]}),(0,u.jsx)(d._B,{children:e("engineRepair.paragraph2.0")}),(0,u.jsx)(d._B,{children:e("engineRepair.paragraph2.1")}),(0,u.jsx)(d._B,{children:e("engineRepair.paragraph2.2")})]}),(0,u.jsx)(p,{h2:"engineRepair.h2",list:"engineRepair.serviceList",price:"engineRepair.priceList"})]})})})},m=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(8503)]).then(i.bind(i,5462))})),f=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(6691)]).then(i.bind(i,862))})),b=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(322),i.e(2649)]).then(i.bind(i,8556))})),k=(0,t.lazy)((function(){return Promise.all([i.e(271),i.e(5704)]).then(i.bind(i,6286))})),v=(0,t.lazy)((function(){return i.e(3881).then(i.bind(i,2125))})),w=s.ZP.div(r||(r=(0,c.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),l,h),y=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.k,{h1:"footer.carServiceList.0",p:"engineRepair.p",Bg:w}),(0,u.jsx)(g,{}),(0,u.jsx)(m,{}),(0,u.jsx)(f,{}),(0,u.jsx)(b,{}),(0,u.jsx)(k,{}),(0,u.jsx)(v,{})]})}}}]);
//# sourceMappingURL=5885.a367694c.chunk.js.map