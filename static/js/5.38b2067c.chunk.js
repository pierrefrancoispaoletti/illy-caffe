(this["webpackJsonpilly-caffe"]=this["webpackJsonpilly-caffe"]||[]).push([[5],{100:function(e,c,n){"use strict";n(0);var t,i,r,s=n(47),o=n(98),j=n(9),l=n(7),d=n(2),b=n(3),a=b.b.div(t||(t=Object(d.a)(["\n  margin: 12px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),u=b.b.div(i||(i=Object(d.a)(["\n  margin: 8px;\n"]))),O=b.b.button(r||(r=Object(d.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 12px;\n  background: white;\n  :active {\n    background: black;\n  }\n"]))),x=n(42),p=n(15),v=n(17),f=n(1),h=function(e){var c=e._id,n=e.product,t=Object(l.c)(v.a).token,i=Object(l.b)();return Object(f.jsxs)(a,{children:[Object(f.jsx)(u,{children:Object(f.jsx)(O,{type:"button",onClick:function(){i(Object(p.e)("editer")),i(Object(p.d)(n))},children:Object(f.jsx)(j.a,{icon:o.a,size:"2x",color:"purple"})})}),Object(f.jsx)(u,{children:Object(f.jsx)(O,{type:"button",onClick:function(){return Object(x.d)({_id:c,visible:!(null===n||void 0===n?void 0:n.visible)},i,t)},children:Object(f.jsx)(j.a,{icon:(null===n||void 0===n?void 0:n.visible)?o.b:o.c,size:"2x",color:"grey"})})}),Object(f.jsx)(u,{children:Object(f.jsx)(O,{type:"button",onClick:function(){return Object(x.b)(c,i,t)},children:Object(f.jsx)(j.a,{icon:o.d,size:"2x",color:"red"})})})]})},y=n(31),g=function(e){var c=e.couleur;return Object(f.jsx)(y.e,{children:c.map((function(e){return(null===e||void 0===e?void 0:e.isChecked)&&Object(f.jsx)(y.f,{className:"price",color:e.value,children:Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("span",{children:[Object(f.jsx)(j.a,{icon:o.e,size:"1x"})," :"]}),Object(f.jsxs)("span",{children:[Number(e.price).toFixed(2)," \u20ac"]})]})},e.value)}))})},m=function(e){var c=e.product,n=c._id,t=c.price,i=c.description,r=c.title,s=c.visible,o=c.category,j=c.couleur,d=Object(l.c)(v.a);return Object(f.jsxs)(y.b,{visible:"isAdmin"===(null===d||void 0===d?void 0:d.role)||s,children:[d&&"isAdmin"===d.role&&Object(f.jsx)(h,{_id:n,product:c}),Object(f.jsxs)("h3",{className:"title",children:[Object(f.jsx)("span",{children:"".concat(s?"":"CACH\xc9 : "," ").concat(r)}),"le-vin"!==o||j.every((function(e){return!e.isChecked}))?Object(f.jsxs)("span",{className:"price",children:[null===t||void 0===t?void 0:t.toFixed(2)," \u20ac"]}):Object(f.jsx)(g,{couleur:j})]}),Object(f.jsx)("p",{className:"description",children:i})]})},k=n(48);c.a=function(e){var c=e.loading,n=e.products;return Object(f.jsx)(k.a,{children:c?Object(f.jsx)(s.a,{}):null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(m,{product:e},e._id)}))})}},102:function(e,c,n){"use strict";n.r(c);n(0);var t=n(100),i=n(99),r=n(1);c.default=function(e){var c=e.loading,n=e.setLoading,s=Object(i.a)(n);return Object(r.jsx)("main",{children:Object(r.jsx)(t.a,{products:s,loading:c})})}},99:function(e,c,n){"use strict";var t=n(0),i=n(7),r=n(4),s=n(42),o=n(45),j=n(18);c.a=function(e){var c=Object(i.c)(o.c),n=Object(r.h)().category,l=Object(i.b)();return Object(t.useEffect)((function(){Object(s.c)(j.b,n,l,e)}),[l,e,n]),c}}}]);
//# sourceMappingURL=5.38b2067c.chunk.js.map