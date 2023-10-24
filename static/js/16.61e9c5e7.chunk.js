"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[16],{3225:function(e,n,r){r.d(n,{D:function(){return b},f:function(){return f}});var t=r(4165),i=r(5861),c=r(9439),o=r(2791),s=r(9230),a=r(5705),l=r(8007),u=r(4254),h=r(4784),d=r(6174),x=r(3689),m=r(1240),p=r(7609),j=r(184),f=l.Ry().shape({name:l.Z_().required("Please enter your name"),number:l.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:l.O7().required("Please check the checkbox to continue")}),b=function(){var e=(0,s.$G)(),n=(0,c.Z)(e,1)[0],r=(0,o.useState)(!1),l=(0,c.Z)(r,2),b=l[0],g=l[1],v=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,r){var i,c,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.name,c=n.number,o=r.resetForm,g(!0),e.prev=3,e.next=6,(0,m.C)({name:i,number:c});case 6:g(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:o();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,j.jsxs)(d.qb,{children:[(0,j.jsx)(d.eX,{children:n("form.h3")}),(0,j.jsx)(a.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:f,onSubmit:v,children:(0,j.jsxs)(a.l0,{children:[(0,j.jsxs)(x.IT,{children:[(0,j.jsxs)(x.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,j.jsx)(x.se,{}),(0,j.jsx)(x.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-address-book")})}),(0,j.jsx)(x.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,j.jsx)(a.Bc,{name:"name",component:h.j})]}),(0,j.jsxs)(x.IT,{children:[(0,j.jsx)(x.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,j.jsx)(x.oB,{}),(0,j.jsx)(x.Ld,{width:"22",height:"22",children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-call-yellow-outline")})}),(0,j.jsx)(x.ob,{name:"number",id:"number",type:"tel",placeholder:"+38 XXX \u0425XX XX XX",autoComplete:"off",onClick:u.w}),(0,j.jsx)(a.Bc,{name:"number",component:h.j})]}),(0,j.jsxs)(x.VA,{children:[(0,j.jsxs)(x.BS,{children:[(0,j.jsx)(x.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,j.jsx)(a.Bc,{name:"checkbox",component:h.j}),n("form.checkboxText")]}),!b&&(0,j.jsx)(x.Sn,{type:"submit",children:n("header.buttonText")}),b&&(0,j.jsx)(x.wh,{children:(0,j.jsxs)(x.lo,{children:[(0,j.jsx)(x.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})})]})}},5434:function(e,n,r){r.d(n,{m:function(){return u}});var t=r(9230),i=r(7543),c=r(804),o=r(7609),s=r(6174),a=r(1578),l=r(184),u=function(e){var n=e.h1,r=e.p,u=e.style,h=e.Bg,d=e.maxWidth,x=(0,t.$G)().t;return(0,l.jsx)("section",{children:(0,l.jsx)(h,{children:(0,l.jsxs)(i.fM,{children:[(0,l.jsx)(s.XU,{style:{width:"auto",maxWidth:d},children:x("".concat(n))}),r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i._B,{children:x("".concat(r))}),(0,l.jsxs)(c.bj,{style:u,onClick:a.A,children:[(0,l.jsx)(c.TE,{}),(0,l.jsx)(c.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(o.Z,"#icon-tire")})}),(0,l.jsx)(c.Oo,{children:x("carTire.buttonText")})]})]}):(0,l.jsxs)(c.bj,{onClick:a.A,style:u,children:[(0,l.jsx)(c.TE,{}),(0,l.jsx)(c.Ld,{width:"18",height:"18",children:(0,l.jsx)("use",{href:"".concat(o.Z,"#icon-tire")})}),(0,l.jsx)(c.Oo,{children:x("carTire.buttonText")})]})]})})})}},4784:function(e,n,r){r.d(n,{j:function(){return i}});var t=r(184),i=function(e){var n=e.children;return(0,t.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},4254:function(e,n,r){r.d(n,{w:function(){return i}});var t=r(4110),i=function(){var e=document.querySelector("#number");new t.ZP(e,{mask:"+{38} 000 000 00 00"})}},1240:function(e,n,r){r.d(n,{C:function(){return t}});var t=function(e){var n=e.name,r=e.number,t=e.form,i=void 0===t?"feedback":t,c=new XMLHttpRequest;c.open("POST","../../send.php",!0),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.onreadystatechange=function(){4===c.readyState&&200===c.status?console.log("Success:",c.responseText):console.log("Error")},c.send(JSON.stringify({name:n,number:r,form:i}))}},4419:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,i=r(168),c=r(2791),o=r(8547),s=r.p+"static/media/tire-rpr-bg@1x-min.9084c800feecaeb2108c.jpg",a=r.p+"static/media/tire-rpr-bg@2x-min.5c1ceb3ab4ca5a835720.jpg",l=r(5434),u=r(9230),h=r(6174),d=r(3225),x=r(184),m=(0,c.lazy)((function(){return r.e(493).then(r.bind(r,6493))})),p=function(){var e=(0,u.$G)().t;return(0,x.jsxs)("section",{children:[(0,x.jsx)("h2",{hidden:!0,children:"tireRepair"}),(0,x.jsx)(h.hX,{children:(0,x.jsxs)(h.F8,{children:[(0,x.jsx)(d.D,{}),(0,x.jsxs)(h.Gf,{children:[(0,x.jsx)(h._B,{children:e("tireRepair.paragraph.0")}),(0,x.jsx)(h._B,{children:e("tireRepair.paragraph.1")})]}),(0,x.jsx)(m,{h2:"tireRepair.h2",price:"tireRepair.priceList",list:"tireRepair.serviceList"})]})})]})},j=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(503)]).then(r.bind(r,5462))})),f=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(691)]).then(r.bind(r,862))})),b=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(741),r.e(418)]).then(r.bind(r,8556))})),g=(0,c.lazy)((function(){return Promise.all([r.e(271),r.e(704)]).then(r.bind(r,6286))})),v=(0,c.lazy)((function(){return r.e(881).then(r.bind(r,2125))})),y={margin:0,justifyContent:"normal",gap:"10px",paddingRight:"10px",maxWidth:"max-content"},k=o.ZP.div(t||(t=(0,i.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 470px;\n  position: relative;\n  top: -60px;\n  left: 0;\n  right: 0;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1512px) {\n    top: -80px;\n    left: 0;\n    right: 0;\n  }\n"])),s,a),w=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.m,{h1:"footer.tireServiceList.1",p:"tireRepair.p",style:y,Bg:k,maxWidth:672}),(0,x.jsx)(p,{}),(0,x.jsx)(j,{}),(0,x.jsx)(f,{}),(0,x.jsx)(b,{}),(0,x.jsx)(g,{}),(0,x.jsx)(v,{})]})}}}]);
//# sourceMappingURL=16.61e9c5e7.chunk.js.map