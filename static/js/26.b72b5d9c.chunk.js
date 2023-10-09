"use strict";(self.webpackChunk_571_service=self.webpackChunk_571_service||[]).push([[26],{3225:function(e,n,i){i.d(n,{D:function(){return p},f:function(){return u}});var r=i(9439),t=i(2791),s=i(9230),c=i(5705),a=i(8007),o=i(4254),d=i(4784),l=i(6174),h=i(3689),x=i(7609),m=i(184),u=a.Ry().shape({name:a.Z_().required("Please enter your name"),number:a.Z_().min(10,"Must be more than 10 characters").required("Please enter the phone's number"),checkbox:a.O7().required("Please check the checkbox to continue")}),p=function(){var e=(0,s.$G)(),n=(0,r.Z)(e,1)[0],i=(0,t.useState)(!1),a=(0,r.Z)(i,2),p=a[0],f=a[1];return(0,m.jsxs)(l.qb,{children:[(0,m.jsx)(l.eX,{children:n("form.h3")}),(0,m.jsx)(c.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:u,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;f(!0),i()},children:function(e){var i=e.setFieldValue;return(0,m.jsxs)(c.l0,{children:[(0,m.jsxs)(h.IT,{children:[(0,m.jsxs)(h.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,m.jsx)(h.se,{}),(0,m.jsx)(h.Ld,{width:"22",height:"22",children:(0,m.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,m.jsx)(h.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,m.jsx)(c.Bc,{name:"name",component:d.j})]}),(0,m.jsxs)(h.IT,{children:[(0,m.jsx)(h.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,m.jsx)(h.oB,{}),(0,m.jsx)(h.Ld,{width:"22",height:"22",children:(0,m.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,m.jsx)(h.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,o.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,m.jsx)(c.Bc,{name:"number",component:d.j})]}),(0,m.jsxs)(h.VA,{children:[(0,m.jsxs)(h.BS,{children:[(0,m.jsx)(h.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,m.jsx)(c.Bc,{name:"checkbox",component:d.j}),n("form.checkboxText")]}),!p&&(0,m.jsx)(h.Sn,{type:"submit",children:n("header.buttonText")}),p&&(0,m.jsx)(h.wh,{children:(0,m.jsxs)(h.lo,{children:[(0,m.jsx)(h.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})}},4784:function(e,n,i){i.d(n,{j:function(){return t}});var r=i(184),t=function(e){var n=e.children;return(0,r.jsx)("div",{style:{color:"red",fontSize:14,textAlign:"center",marginTop:"-20px",marginBottom:"10px"},children:n.toLowerCase()})}},8600:function(e,n,i){i.d(n,{FG:function(){return g},Fg:function(){return v},J$:function(){return L},Mh:function(){return b},R5:function(){return w},RH:function(){return j},WE:function(){return y},eX:function(){return p},ry:function(){return C},yi:function(){return f}});var r,t,s,c,a,o,d,l,h,x,m=i(168),u=i(8547),p=u.ZP.h3(r||(r=(0,m.Z)(["\n  max-width: 266px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.2;\n  text-transform: uppercase;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px;\n  @media screen and (min-width: 1512px) {\n    font-size: 38px;\n    max-width: 788px;\n    padding-bottom: 190px;\n  }\n"]))),f=u.ZP.ul(t||(t=(0,m.Z)(["\n  margin-top: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 15px;\n  }\n  @media screen and (min-width: 1512px) {\n    gap: 20px;\n    position: absolute;\n    bottom: -60px;\n    z-index: 10;\n  }\n"]))),j=u.ZP.li(s||(s=(0,m.Z)(["\n  @media screen and (min-width: 1512px) {\n    order: -1;\n  }\n"]))),b=u.ZP.div(c||(c=(0,m.Z)(["\n  min-width: 320px;\n  height: 170px;\n  max-height: 234px;\n  padding-top: 60px;\n  position: relative;\n  text-align: center;\n  border-radius: 8px 8px 0px 0px;\n  background: var(--light-color);\n  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);\n  cursor: pointer;\n  @media screen and (min-width: 390px) {\n    width: 390px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 360px;\n  }\n  @media screen and (min-width: 1512px) {\n    width: 386px;\n    max-height: 100px;\n  }\n"]))),g=u.ZP.div(a||(a=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -100px;\n  margin-bottom: 20px;\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (min-width: 1512px) {\n    transition: scale 250ms var(--animation-cubic);\n    ",":hover & {\n      scale: 1.2;\n    }\n  }\n"])),b),w=u.ZP.p(o||(o=(0,m.Z)(["\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.5;\n  opacity: 0.5;\n"]))),v=u.ZP.a(d||(d=(0,m.Z)(["\n  width: 276px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 1.5;\n  @media screen and (min-width: 1512px) {\n    transition: color 250ms var(--animation-cubic);\n    ",":hover & {\n      color: var(--accent-color);\n    }\n  }\n"])),b),y=u.ZP.iframe(l||(l=(0,m.Z)(["\n  width: 100vw;\n  @media screen and (min-width: 390px) {\n    width: 390px;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),C=u.ZP.iframe(h||(h=(0,m.Z)(["\n  display: none;\n  @media screen and (min-width: 768px) and (max-width: 1511px) {\n    display: block;\n  }\n"]))),L=u.ZP.iframe(x||(x=(0,m.Z)(["\n  display: none;\n  @media screen and (min-width: 1512px) {\n    display: block;\n  }\n"])))},4254:function(e,n,i){i.d(n,{u:function(){return r}});var r=function(e){var n="+380 "+e.replace(/\D/g,"").trim();if("+380"!==e.split(" ")[0])return n;var i=e.split(" ").slice(1).join("").replace(/\D/g,"");if(i.length<=12){var r="+380 ";return i.length<=3&&(r+=i),i.length>3&&i.length<6&&(r+=i.slice(0,3)+" "+i.slice(3,6)),i.length>=6&&i.length<8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)),i.length>=8&&(r+=i.slice(0,3)+" "+i.slice(3,5)+" "+i.slice(5,7)+" "+i.slice(7,9)),r}}},2026:function(e,n,i){i.r(n);var r=i(9439),t=i(2791),s=i(9230),c=i(5705),a=i(4254),o=i(4784),d=i(7543),l=i(4519),h=i(3689),x=i(7609),m=i(3225),u=i(6174),p=i(8600),f=i(184);n.default=function(){var e=(0,s.$G)(),n=(0,r.Z)(e,1)[0],i=(0,t.useState)(!1),j=(0,r.Z)(i,2),b=j[0],g=j[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{children:(0,f.jsx)(d.fM,{children:(0,f.jsxs)(l.fx,{children:[(0,f.jsxs)(l.hd,{children:[(0,f.jsx)(l.CG,{width:"210",height:"155",children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-bg")})}),(0,f.jsxs)(l.XU,{children:[n("contacts.h3.0"),(0,f.jsx)("br",{}),n("contacts.h3.1")]}),(0,f.jsxs)(l.hc,{children:[(0,f.jsx)("li",{children:(0,f.jsxs)(l.lx,{children:[(0,f.jsx)(l.dY,{children:(0,f.jsx)("svg",{width:"20",height:"20",children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-map-pin")})})}),(0,f.jsxs)(l.Fg,{href:"https://maps.app.goo.gl/WCqPA8hvKJcHS3WBA",target:"_blank",children:[(0,f.jsx)(l.Fe,{children:n("contacts.addressSpan.0")}),n("contacts.addressSpan.1")]})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)(l.lx,{children:[(0,f.jsx)(l.dY,{children:(0,f.jsx)("svg",{width:"20",height:"20",children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-email")})})}),(0,f.jsx)(l.Fg,{href:"mailto:sto@571.com.ua",children:"sto@571.com.ua"})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)(l.lx,{children:[(0,f.jsx)(l.dY,{children:(0,f.jsx)("svg",{width:"20",height:"20",children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-call-white-outline")})})}),(0,f.jsxs)(l.KT,{children:[(0,f.jsx)(l.Fg,{href:"tel:050 936 34 00",children:"050 936 34 00"}),(0,f.jsx)(l.Fg,{href:"tel:044 698 98 98",children:"063 527 15 19"})]})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)(l.lx,{children:[(0,f.jsx)(l.dY,{children:(0,f.jsx)("svg",{width:"20",height:"20",children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-time")})})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)(l._B,{children:[(0,f.jsx)(l.R$,{children:"\u041f\u043d- \u041f\u0442"}),"\u0441 09:00-18:00"]}),(0,f.jsxs)(l._B,{children:[(0,f.jsx)(l.R$,{children:"\u0421\u0431-\u0412\u0441"}),"\u0441 09:00-16:00"]})]})]})})]})]}),(0,f.jsxs)(u.A1,{children:[(0,f.jsx)(l.eX,{children:n("form.h3")}),(0,f.jsx)(c.J9,{initialValues:{name:"",number:"",checkbox:!1},validationSchema:m.f,onSubmit:function(e,n){e.name,e.number;var i=n.resetForm;g(!0),i()},children:function(e){var i=e.setFieldValue;return(0,f.jsxs)(c.l0,{children:[(0,f.jsxs)(h.IT,{children:[(0,f.jsxs)(h.ar,{htmlFor:"name",children:[n("form.labels.0")," "]}),(0,f.jsx)(h.se,{}),(0,f.jsx)(h.Ld,{width:"22",height:"22",style:{left:"26px"},children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-address-book")})}),(0,f.jsx)(h.ob,{name:"name",id:"name",placeholder:n("form.placeholderName"),autoComplete:"off"}),(0,f.jsx)(c.Bc,{name:"name",component:o.j})]}),(0,f.jsxs)(h.IT,{children:[(0,f.jsx)(h.ar,{htmlFor:"number",children:n("form.labels.1")}),(0,f.jsx)(h.oB,{}),(0,f.jsx)(h.Ld,{width:"22",height:"22",style:{left:"26px"},children:(0,f.jsx)("use",{href:"".concat(x.Z,"#icon-call-yellow-outline")})}),(0,f.jsx)(h.ob,{name:"number",id:"number",type:"tel",placeholder:"+380 XXX XX XX XX",autoComplete:"off",onChange:function(e){var n=(0,a.u)(e.target.value);i("number",n)},onFocus:function(e){e.target.value||i("number","+380 ")}}),(0,f.jsx)(c.Bc,{name:"number",component:o.j})]}),(0,f.jsxs)(h.VA,{children:[(0,f.jsxs)(h.BS,{children:[(0,f.jsx)(h.XO,{name:"checkbox",type:"checkbox",required:!0}),(0,f.jsx)(c.Bc,{name:"checkbox",component:o.j}),n("form.checkboxText")]}),!b&&(0,f.jsx)(h.Sn,{type:"submit",children:n("header.buttonText")}),b&&(0,f.jsx)(h.wh,{children:(0,f.jsxs)(h.lo,{children:[(0,f.jsx)(h.ow,{children:n("form.buttonSubmittedText.0")}),n("form.buttonSubmittedText.1")]})})]})]})}})]})]})})}),(0,f.jsx)("section",{children:(0,f.jsxs)(d.fM,{style:{padding:0},children:[(0,f.jsx)(p.WE,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua",width:"390",height:"518",style:{border:0},allowFullScreen:"",title:"mobile-map",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,f.jsx)(p.ry,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua",width:"768",height:"518",style:{border:0},allowFullScreen:"",title:"table-map",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,f.jsx)(p.J$,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua",width:"1512",height:"518",style:{border:0},allowFullScreen:"",title:"desktop-map",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})})]})}}}]);
//# sourceMappingURL=26.b72b5d9c.chunk.js.map