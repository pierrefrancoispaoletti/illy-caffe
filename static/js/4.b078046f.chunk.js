(this["webpackJsonpilly-caffe"]=this["webpackJsonpilly-caffe"]||[]).push([[4],{101:function(e,c,t){"use strict";t.r(c);var n,i,r,o=t(12),s=t(0),l=t(8),a=t(6),d=t(41),b=t(50),j=t(31),u=t(9),O=t(3),x=t(4),p=t(2),v=x.b.div(n||(n=Object(O.a)(["\n  position: relative;\n  margin: 12px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),f=x.b.div(i||(i=Object(O.a)(["\n  margin: 8px;\n"]))),h=x.b.button(r||(r=Object(O.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 12px;\n  background: ",";\n  :active {\n    background: black;\n  }\n"])),p.a.main),y=t(48),m=t(17),g=t(18),k=t(1),C=function(e){var c=e._id,t=e.product,n=Object(l.c)(g.a).token,i=Object(l.b)();return Object(k.jsxs)(v,{children:[Object(k.jsx)(f,{children:Object(k.jsx)(h,{type:"button",onClick:function(){i(Object(m.e)("editer")),i(Object(m.d)(t))},children:Object(k.jsx)(u.a,{icon:j.c,size:"2x",color:"purple"})})}),Object(k.jsx)(f,{children:Object(k.jsx)(h,{type:"button",onClick:function(){return Object(y.d)({_id:c,visible:!(null===t||void 0===t?void 0:t.visible)},i,n)},children:Object(k.jsx)(u.a,{icon:(null===t||void 0===t?void 0:t.visible)?j.d:j.e,size:"2x",color:"grey"})})}),Object(k.jsx)(f,{children:Object(k.jsx)(h,{type:"button",onClick:function(){return Object(y.b)(c,i,n)},children:Object(k.jsx)(u.a,{icon:j.g,size:"2x",color:"red"})})})]})},w=t(24),E=function(e){var c=e.couleur;return Object(k.jsx)(w.h,{children:c.map((function(e){return(null===e||void 0===e?void 0:e.isChecked)&&Object(k.jsx)(w.i,{className:"price wineprice",color:e.value,children:Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(k.jsxs)("span",{children:[Object(k.jsx)(u.a,{icon:j.h,size:"1x"})," :"]}),Object(k.jsxs)("span",{children:[Number(e.price).toFixed(2)," \u20ac"]})]})},e.value)}))})},F=function(e){var c=e.product,t=c._id,n=c.price,i=c.description,r=c.title,o=c.visible,s=c.category,a=c.couleur,d=Object(l.c)(g.a);return Object(k.jsxs)(w.d,{visible:"isAdmin"===(null===d||void 0===d?void 0:d.role)||o,children:[d&&"isAdmin"===d.role&&Object(k.jsx)(C,{_id:t,product:c}),Object(k.jsxs)("h3",{className:"title",children:[Object(k.jsx)("span",{children:"".concat(o?"":"CACH\xc9 : "," ").concat(r)}),"le-vin"!==s||a.every((function(e){return!e.isChecked}))?Object(k.jsxs)("span",{className:"price",children:[null===n||void 0===n?void 0:n.toFixed(2)," \u20ac"]}):Object(k.jsx)(E,{couleur:a})]}),Object(k.jsx)("p",{className:"description",children:i})]})},N=t(59),_=function(e){var c=e.loading,t=e.products,n=e.setFilter,i=e.filter;return Object(k.jsx)(N.a,{setFilter:n,filter:i,children:c?Object(k.jsx)(b.a,{}):null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsxs)("div",{style:{width:"100%"},children:[(null===e||void 0===e?void 0:e.subCategory)&&Object(d.b)(e),Object(k.jsx)(F,{product:e})]},e._id)}))})},z=t(47);var A=function(e,c){var t=Object(l.c)(Object(z.c)(c)),n=Object(l.b)();return Object(s.useEffect)((function(){Object(y.c)(p.b,n,e)}),[n,e,c]),t},q=function(){Object(s.useLayoutEffect)((function(){["classiques","monoarabica","sp\xe9ciaux","illy-crema","domori","recettes-froides","sodas","eaux","softs","granita","bieres","salades","bruschette","pates","viande","panini","croques","hotdog","bagels"].forEach((function(e){return c=e,void document.querySelectorAll(".".concat(c)).forEach((function(e,c){c>0&&(null===e||void 0===e||e.remove())}));var c}))}))};c.default=function(e){var c=e.loading,t=e.setLoading,n=Object(a.h)().category||"today";A(t,n),q();var i=Object(s.useState)(""),r=Object(o.a)(i,2),d=r[0],b=r[1],j=Object(l.c)(Object(z.d)(d,n));return Object(s.useEffect)((function(){b("")}),[c,n]),Object(k.jsx)("main",{children:Object(k.jsx)(_,{products:j,loading:c,setFilter:b,filter:d})})}}}]);
//# sourceMappingURL=4.b078046f.chunk.js.map