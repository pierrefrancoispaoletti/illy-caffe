(this["webpackJsonpilly-caffe"]=this["webpackJsonpilly-caffe"]||[]).push([[4],{98:function(e,c,n){"use strict";n(0);var i,t,r,s=n(97),o=n(12),l=n(7),j=n(2),d=n(3),b=d.b.div(i||(i=Object(j.a)(["\n  margin: 12px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),u=d.b.div(t||(t=Object(j.a)(["\n  margin: 8px;\n"]))),a=d.b.button(r||(r=Object(j.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 12px;\n  background: white;\n"]))),O=n(42),x=n(14),p=n(15),v=n(1),h=function(e){var c=e._id,n=e.product,i=Object(l.c)(p.a).token,t=Object(l.b)();return Object(v.jsxs)(b,{children:[Object(v.jsx)(u,{children:Object(v.jsx)(a,{type:"button",onClick:function(){t(Object(x.e)("editer")),t(Object(x.d)(n))},children:Object(v.jsx)(o.a,{icon:s.a,size:"2x",color:"purple"})})}),Object(v.jsx)(u,{children:Object(v.jsx)(a,{type:"button",onClick:function(){return Object(O.d)({_id:c,visible:!(null===n||void 0===n?void 0:n.visible)},t,i)},children:Object(v.jsx)(o.a,{icon:(null===n||void 0===n?void 0:n.visible)?s.b:s.c,size:"2x",color:"grey"})})}),Object(v.jsx)(u,{children:Object(v.jsx)(a,{type:"button",onClick:function(){return Object(O.b)(c,t,i)},children:Object(v.jsx)(o.a,{icon:s.d,size:"2x",color:"red"})})})]})},f=n(31),y=function(e){var c=e.couleur;return Object(v.jsx)(f.e,{children:c.map((function(e){return(null===e||void 0===e?void 0:e.isChecked)&&Object(v.jsx)(f.f,{className:"price",color:e.value,children:Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsxs)("span",{children:[Object(v.jsx)(o.a,{icon:s.e,size:"1x"})," :"]}),Object(v.jsxs)("span",{children:[Number(e.price).toFixed(2)," \u20ac"]})]})},e.value)}))})};c.a=function(e){var c=e.product,n=c._id,i=c.price,t=c.description,r=c.title,s=c.visible,o=c.category,j=c.couleur,d=Object(l.c)(p.a);return Object(v.jsxs)(f.b,{visible:"isAdmin"===(null===d||void 0===d?void 0:d.role)||s,children:[d&&"isAdmin"===d.role&&Object(v.jsx)(h,{_id:n,product:c}),Object(v.jsxs)("h3",{className:"title",children:[Object(v.jsx)("span",{children:"".concat(s?"":"CACH\xc9 : "," ").concat(r)}),"le-vin"!==o||j.every((function(e){return!e.isChecked}))?Object(v.jsxs)("span",{className:"price",children:[null===i||void 0===i?void 0:i.toFixed(2)," \u20ac"]}):Object(v.jsx)(y,{couleur:j})]}),Object(v.jsx)("p",{className:"description",children:t})]})}},99:function(e,c,n){"use strict";n.r(c);var i=n(0),t=n(7),r=n(98),s=n(47),o=n(42),l=n(45),j=n(16),d=n(1);c.default=function(){var e=Object(t.c)(l.c),c=Object(t.b)();return Object(i.useEffect)((function(){Object(o.c)(j.b,"today",c)}),[c]),Object(d.jsx)("main",{children:Object(d.jsx)(s.a,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(d.jsx)(r.a,{product:e},e._id)}))})})}}}]);
//# sourceMappingURL=4.f83bcf64.chunk.js.map