(this["webpackJsonpilly-caffe"]=this["webpackJsonpilly-caffe"]||[]).push([[0],{11:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return a})),t.d(e,"c",(function(){return i}));var r=t(22),c=function(n){return{type:r.a.SET_USER_MESSAGE,payload:n}},a=function(n){var e=n.token,t=n.role;return{type:r.a.SET_CURRENT_USER,payload:{token:e,role:t}}},i=function(){return{type:r.a.SIGN_OUT}}},13:function(n,e,t){"use strict";e.a={GET_PRODUCTS_BY_LOCATION:"GET_PRODUCTS_BY_LOCATION",DELETE_PRODUCT:"DELETE_PRODUCT",UPDATE_PRODUCT:"UPDATE_PRODUCT",ADD_PRODUCT:"ADD_PRODUCT",TOGGLE_MODAL:"TOGGLE_MODAL",SET_PRODUCT_TO_EDIT:"SET_PRODUCT_TO_EDIT"}},15:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return c}));var r="illy",c="https://young-badlands-89715.herokuapp.com"},17:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i})),t.d(e,"f",(function(){return o})),t.d(e,"e",(function(){return s})),t.d(e,"d",(function(){return d}));var r=t(13),c=function(n){var e=n.products;return{type:r.a.GET_PRODUCTS_BY_LOCATION,payload:e}},a=function(n){return{type:r.a.ADD_PRODUCT,payload:n}},i=function(n){return{type:r.a.DELETE_PRODUCT,payload:n}},o=function(n){return{type:r.a.UPDATE_PRODUCT,payload:n}},s=function(n){return{type:r.a.TOGGLE_MODAL,payload:n}},d=function(n){return{type:r.a.SET_PRODUCT_TO_EDIT,payload:n}}},18:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));var r=t(23),c=function(n){return n.user},a=Object(r.a)([c],(function(n){return n.user})),i=Object(r.a)([c],(function(n){return n.message}))},22:function(n,e,t){"use strict";e.a={SET_USER_MESSAGE:"SET_USER_MESSAGE",SIGN_OUT:"SIGN_OUT",SET_CURRENT_USER:"SET_CURRENT_USER",VALIDATE_TOKEN:"VALIDATE_TOKEN"}},35:function(n,e,t){"use strict";t.d(e,"a",(function(){return h})),t.d(e,"d",(function(){return m})),t.d(e,"c",(function(){return g})),t.d(e,"b",(function(){return v})),t.d(e,"e",(function(){return y})),t.d(e,"f",(function(){return T}));var r,c,a,i,o,s,d,u,l,b,p,j,f=t(2),O=t(3),x=function(n){switch(n.color){case"rouge":return Object(O.a)(c||(c=Object(f.a)(["\n        color: #742f37;\n      "])));case"blanc":return Object(O.a)(a||(a=Object(f.a)(["\n        color: #f1f285;\n      "])));case"ros\xe9":return Object(O.a)(i||(i=Object(f.a)(["\n        color: #ffb9b9;\n      "])))}},h=O.b.div(o||(o=Object(f.a)(["\n  border: 14px solid #deb887;\n  margin: 12px;\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n"]))),m=O.b.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #484b56;\n  min-height: 80vh;\n"]))),g=O.b.h2(d||(d=Object(f.a)(['\n  position: relative;\n  font-family: "crayonHand";\n  font-size: 2.6em;\n  color: #fdfdfd;\n  text-align: center;\n  text-decoration: underline;\n  letter-spacing: 10px;\n  overflow-wrap: anywhere;\n  @media (max-width: 379px) {\n    font-size: 1.9em;\n  }\n']))),v=O.b.div(u||(u=Object(f.a)(['\n  position: relative;\n  font-family: "crayonHand";\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 36px;\n  color: #fdfdfd;\n  margin: 0px 1.5em;\n  text-align: center;\n  font-size: 1.8rem;\n  @media (max-width: 420px) {\n    align-items: center;\n  }\n  ','\n\n  .title {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    color: #fdfdfd;\n    letter-spacing: 2px;\n    font-size: 2rem;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    @media (max-width: 420px) {\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .price {\n    font-family: "ChalkAboutItalic";\n    font-weight: 400;\n    font-size: 2rem;\n    @media (max-width: 370px) {\n      font-size: 1.5rem;\n    }\n  }\n\n  .description {\n    text-align: left;\n  }\n\n  .wine-color {\n    font-size: 1.5em;\n    ',"\n  }\n"])),(function(n){if(!n.visible)return Object(O.a)(r||(r=Object(f.a)(["\n      display: none;\n    "])))}),x),y=(O.b.div(l||(l=Object(f.a)([""]))),O.b.div(b||(b=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: right;\n  justify-content: center;\n  vertical-align: baseline;\n"])))),T=O.b.span(p||(p=Object(f.a)(["\n  background-color: #565a68;\n  margin-bottom: 8px;\n  width: 100%;\n  ",";\n"])),x);O.b.span(j||(j=Object(f.a)(["\n  padding: 6px 8px;\n  border: 3px solid white;\n  border-radius: 50px;\n  display: inline-block;\n  margin-right: 1em;\n  background: grey;\n  font-size: 0.7em;\n  :active {\n    background: white;\n    border: 3px solid black;\n  }\n  ","\n  :last-child {\n    margin-right: 0;\n  }\n  @media (max-width: 420px) {\n    margin-right: 0;\n  }\n"])),x)},38:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(10),c=t(9),a=t(1),i=[{name:"Aujourd'hui",icon:Object(a.jsx)(c.a,{icon:r.e,size:"2x"}),link:"/",slug:"today"},{name:"Burgers",icon:Object(a.jsx)(c.a,{icon:r.a,size:"2x"}),link:"/products/burgers",slug:"burgers"},{name:"Gauffres",icon:Object(a.jsx)(c.a,{icon:r.h,size:"2x"}),link:"/products/gauffres",slug:"gauffres"},{name:"Le Chaud",icon:Object(a.jsx)(c.a,{icon:r.f,size:"2x"}),link:"/products/le-chaud",slug:"le-chaud"},{name:"Le Froid",icon:Object(a.jsx)(c.a,{icon:r.d,size:"2x"}),link:"/products/le-froid",slug:"le-froid"},{name:"Cocktails",icon:Object(a.jsx)(c.a,{icon:r.b,size:"2x"}),link:"/products/cocktails",slug:"cocktail"},{name:"Le Vin",icon:Object(a.jsx)(c.a,{icon:r.k,size:"2x"}),link:"/products/le-vin",slug:"le-vin"}]},40:function(n,e,t){"use strict";var r,c,a,i,o=t(5),s=t(37),d=(t(0),t(2)),u=t(3),l="black",b=Object(u.a)(r||(r=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),l),p=u.b.div(c||(c=Object(d.a)(['\n  position: relative;\n  margin: auto 0;\n\n  input[type="email"] {\n    letter-spacing: 0.3em;\n  }\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n']))),j=u.b.input(a||(a=Object(d.a)(["\n  width: 100%;\n  background: none;\n  background-color: transparent;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"])),l,l,b),f=u.b.label(i||(i=Object(d.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  text-transform: capitalize;\n\n  &.shrink {\n    ","\n  }\n"])),l,b),O=t(1),x=["handleChange","label"];e.a=function(n){var e,t=n.handleChange,r=n.label,c=Object(s.a)(n,x);return Object(O.jsxs)(p,{children:[Object(O.jsx)(j,Object(o.a)({onChange:t},c)),r&&Object(O.jsx)(f,{className:"".concat((null===(e=String(null===c||void 0===c?void 0:c.value))||void 0===e?void 0:e.length)?"shrink":""," form-input-label"),children:r})]})}},44:function(n,e,t){"use strict";t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return b})),t.d(e,"a",(function(){return p})),t.d(e,"d",(function(){return j}));var r=t(21),c=t.n(r),a=t(26),i=t(29),o=t.n(i),s=t(15),d=t(11),u=t(17),l=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),t||(t="today"),n.prev=2,n.next=5,o()({method:"GET",url:"".concat(s.b,"/api/products/").concat(e,"/").concat(t)});case 5:200===(i=n.sent).status?r(Object(u.c)(i.data)):r(Object(d.b)(i.data.message)),a(!1),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),r(Object(d.b)("Il y \xe0 eu un probl\xe8me")),a(!1);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t,r,c){return n.apply(this,arguments)}}(),b=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",!1);case 2:return n.prev=2,n.next=5,o()({method:"DELETE",url:"".concat(s.b,"/api/products/deleteProduct"),data:{_id:e},headers:{Authorization:"Bearer "+r}});case 5:202===(a=n.sent).status&&t(Object(u.b)(a.data.deletedProduct)),t(Object(d.b)(a.data.message)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),t(Object(d.b)("Il y \xe0 eu un probl\xe8me"));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o()({method:"POST",url:"".concat(s.b,"/api/products/addProduct"),data:{product:e},headers:{Authorization:"Bearer "+r}});case 3:201===(a=n.sent).status&&t(Object(u.a)(a.data.newProduct)),t(Object(d.b)(a.data.message)),t(Object(u.e)("")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t(Object(d.b)("Il y \xe0 eu un probl\xe8me"));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t,r){return n.apply(this,arguments)}}(),j=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o()({method:"POST",url:"".concat(s.b,"/api/products/updateProduct"),data:{update:e},headers:{Authorization:"Bearer "+r}});case 3:202===(a=n.sent).status&&t(Object(u.f)(a.data.updatedProduct)),t(Object(d.b)(a.data.message)),t(Object(u.e)("")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t(Object(d.b)("Il y \xe0 eu un probl\xe8me"));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t,r){return n.apply(this,arguments)}}()},45:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));var r=t(23),c=function(n){return n.products},a=Object(r.a)([c],(function(n){return n.products.sort((function(n,e){return e.price>n.price?-1:1}))})),i=Object(r.a)([c],(function(n){return n.modalType})),o=Object(r.a)([c],(function(n){return n.productToEdit}))},47:function(n,e,t){"use strict";t(0);var r,c=t(2),a=t(3).b.div(r||(r=Object(c.a)(['\n  display: flex;\n  align-items: center;\n  width: 80%;\n  justify-content: center;\n  margin: auto;\n  letter-spacing: 8px;\n  span {\n    font-size: 2.5em;\n    color: #fdfdfd;\n    font-family: "ChalkAbout";\n    :nth-child(n) {\n      animation: evenCharacterAnimation 0.7s linear infinite;\n    }\n    :nth-child(2n) {\n      animation: evenCharacterAnimation 0.8s linear infinite;\n    }\n    @keyframes evenCharacterAnimation {\n      0% {\n        transform: translateY(0px);\n      }\n      50% {\n        transform: translateY(10px);\n      }\n      100% {\n        transform: translateY(0px);\n      }\n    }\n    @media (max-width: 500px) {\n      font-size: 2em;\n    }\n    @media (max-width: 420px) {\n      font-size: 1.2em;\n    }\n    @media (max-width: 320px) {\n      font-size: 1em;\n    }\n  }\n']))),i=t(1);e.a=function(){return Object(i.jsxs)(a,{children:[Object(i.jsx)("span",{children:"C"}),Object(i.jsx)("span",{children:"H"}),Object(i.jsx)("span",{children:"A"}),Object(i.jsx)("span",{children:"R"}),Object(i.jsx)("span",{children:"G"}),Object(i.jsx)("span",{children:"E"}),Object(i.jsx)("span",{children:"M"}),Object(i.jsx)("span",{children:"E"}),Object(i.jsx)("span",{children:"N"}),Object(i.jsx)("span",{children:"T"}),Object(i.jsx)("span",{children:"."}),Object(i.jsx)("span",{children:"."}),Object(i.jsx)("span",{children:"."})]})}},56:function(n,e,t){"use strict";var r,c,a,i,o,s,d,u,l,b,p,j=t(0),f=t(35),O=t(4),x=t(38),h=t(2),m=t(3),g=m.b.button(r||(r=Object(h.a)(["\n  background: lightGreen;\n  border: 1px solid black;\n  border-radius: 50%;\n  padding: 9px 12px;\n  transition: all 0.1s ease-in-out;\n  :active {\n    background: green;\n    color: white;\n  }\n"]))),v=t(9),y=t(10),T=t(7),k=t(17),E=t(1),w=function(){var n=Object(T.b)();return Object(E.jsx)(g,{type:"button",onClick:function(){return n(Object(k.e)("ajouter"))},children:Object(E.jsx)(v.a,{icon:y.g,size:"2x"})})},_=t(5),C=t(16),D=t(45),U=t(36),P=t(37),S=t(44),R=t(18),z=t(40),A=m.b.div(d||(d=Object(h.a)(["\n  position: fixed;\n  z-index: 18;\n  top: 10px;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 12px;\n  border: 2px solid #fe0000;\n  align-items: center;\n  ","\n  & > form {\n    width: 80%;\n  }\n  margin: 15px 15px;\n"])),(function(n){if(!n.open)return Object(m.a)(o||(o=Object(h.a)(["\n      display: none;\n    "])))})),L=m.b.button(u||(u=Object(h.a)(["\n  background: white;\n  color: black;\n  font-size: 1.3em;\n  font-weight: bold;\n  border: 1px solid black;\n  border-radius: 50px;\n  padding: 8px 14px;\n  :active {\n    background: black;\n    border: 1px solid white;\n    color: white;\n  }\n"]))),G=m.b.div(l||(l=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n"]))),I=m.b.button(b||(b=Object(h.a)(["\n  float: right;\n  font-size: 1em;\n  margin-bottom: 12px;\n  padding: 12px;\n  border-radius: 50px;\n  font-weight: bold;\n  ","\n  ","\n"])),(function(n){switch(n.modalType.toLowerCase()){case"ajouter":return Object(m.a)(c||(c=Object(h.a)(["\n        border: 3px solid green;\n        background: lightgreen;\n        color: white;\n      "])));case"editer":return Object(m.a)(a||(a=Object(h.a)(["\n        border: 3px solid white;\n        background: purple;\n        color: white;\n      "])));default:return Object(m.a)(i||(i=Object(h.a)(["\n        background: lightgreen;\n      "])))}}),(function(n){if(n.disabled)return Object(m.a)(s||(s=Object(h.a)(["\n      background: #ccc;\n    "])))})),N=m.b.div(p||(p=Object(h.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  vertical-align: middle;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 12px;\n  font-size: 1em;\n  & div {\n    margin-bottom: 3px;\n  }\n  & input[type="checkbox"] {\n    vertical-align: bottom;\n    width: 35px;\n    height: 35px;\n    margin: 0 8px;\n  }\n  & input[type="number"] {\n    outline: none;\n    vertical-align: middle;\n    font-size: 1.2em;\n    width: 35px;\n    height: 35px;\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n']))),M=["children","type","setProduct","initialState","dispatch"],B=function(n){var e,t=n.children,r=n.type,c=n.setProduct,a=n.initialState,i=n.dispatch,o=Object(P.a)(n,M),s=Object(T.c)(R.a).token,d=o._id,u=o.title,l=o.description,b=o.price,p=o.category,j=o.location,f=o.visible,O=o.couleur,x=function(){return c(Object(_.a)({},a))},h=function(n){var e=n.target,t=e.name,r=e.value;c((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(U.a)({},t,r))}))};return Object(E.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={title:u,description:l,price:b,category:p,location:j,visible:f,couleur:O};"ajouter"===r&&Object(S.a)(e,i,s).then((function(){return x()})),"editer"===r&&Object(S.d)(Object(_.a)(Object(_.a)({},e),{},{_id:d}),i,s).then((function(){return x()}))},children:[Object(E.jsx)(z.a,{type:"text",name:"title",label:"Nom du produit",value:u,handleChange:h,required:!0}),Object(E.jsx)(z.a,{type:"text",name:"description",label:"Description",value:l,handleChange:h}),Object(E.jsx)(z.a,{type:"number",name:"price",pattern:"\\\\d*",step:.1,handleChange:h,label:"Prix",value:b,required:!0}),t,Object(E.jsx)(I,{disabled:!u||!b||!p||!j,type:"submit",modalType:r,children:null===(e="".concat(r," un produit"))||void 0===e?void 0:e.toUpperCase()})]})},Y=function(n){var e=n.couleur,t=n.setProduct;return Object(E.jsx)(N,{children:e.map((function(n){return Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{htmlFor:n.value,children:n.value.toUpperCase()}),Object(E.jsx)("input",{name:n.value,type:"checkbox",checked:n.isChecked,value:n.value,onChange:function(){return t((function(e){return Object(_.a)(Object(_.a)({},e),n.isChecked=!n.isChecked)}))}}),Object(E.jsx)("input",{type:"number",pattern:"\\\\d*",step:.1,value:n.price,onChange:function(e){return t((function(t){return Object(_.a)(Object(_.a)({},t),n.price=e.target.value)}))}}),"\u20ac"]},n.value)}))})},F=t(15),H=function(n){var e=n.currentCategory,t=Object(T.c)(D.a),r=t.type,c=t.open,a=Object(T.c)(D.b),i=Object(T.b)(),o={_id:"",title:"",description:"",price:"",location:F.a,category:"",visible:!0,couleur:[{value:"rouge",isChecked:!1,price:""},{value:"blanc",isChecked:!1,price:""},{value:"ros\xe9",isChecked:!1,price:""}]},s=Object(j.useState)(o),d=Object(C.a)(s,2),u=d[0],l=d[1];return Object(j.useEffect)((function(){"ajouter"===r&&l((function(n){return Object(_.a)(Object(_.a)({},n),{},{category:e,location:F.a})})),"editer"===r&&l((function(n){return Object(_.a)(Object(_.a)({},n),a)}))}),[e,a,r,c]),Object(E.jsxs)(A,{open:c,children:[Object(E.jsxs)(G,{children:[Object(E.jsx)("h3",{children:"".concat(null===r||void 0===r?void 0:r.toUpperCase()," dans ").concat(e)}),Object(E.jsx)(L,{type:"button",onClick:function(){return i(Object(k.e)(r))},children:Object(E.jsx)(v.a,{icon:y.i,size:"1x"})})]}),Object(E.jsx)(B,Object(_.a)(Object(_.a)({type:r,setProduct:l,initialState:o,dispatch:i},u),{},{children:"le-vin"===e&&Object(E.jsx)(Y,{couleur:u.couleur,setProduct:l})}))]})};e.a=function(n){var e=n.children,t=Object(O.f)(),r=x.a.find((function(n){return n.link===t.pathname})),c=Object(T.c)(R.a);return Object(E.jsx)(f.a,{children:Object(E.jsxs)(f.d,{children:[Object(E.jsx)(f.c,{children:null===r||void 0===r?void 0:r.name}),c&&"isAdmin"===c.role&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w,{}),Object(E.jsx)(H,{currentCategory:null===r||void 0===r?void 0:r.slug})]}),e]})})}},67:function(n,e,t){},97:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,s,d,u,l,b,p,j,f,O=t(0),x=t(34),h=t.n(x),m=(t(67),t(16)),g=t(7),v=t(4),y=t(18),T=t(38),k=t(2),E=t(19),w=t(3),_=w.b.nav(r||(r=Object(k.a)(["\n  display: flex;\n  padding: 8px 0px;\n  overflow-x: auto;\n  margin-bottom: 25px;\n"]))),C=w.b.ul(c||(c=Object(k.a)(["\n  padding: 0px 8px;\n  margin: auto;\n  display: flex;\n  align-items: flex-start;\n  list-style: none;\n"]))),D=w.b.li(a||(a=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 60px;\n  height: 60px;\n  margin: 0px 8px;\n  background: #fdfdfd;\n  border: 1px solid #fe0000;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n  transition: all 0.5s;\n"]))),U=w.b.div(i||(i=Object(k.a)(["\n  text-align: center;\n  margin-bottom: 6px;\n"]))),P=w.b.span(o||(o=Object(k.a)(["\n  line-height: 1em;\n  font-size: 1em;\n  text-align: center;\n  width: 100%;\n"]))),S=Object(w.b)(E.c)(s||(s=Object(k.a)(["\n  text-decoration: none;\n  color: #fe0000;\n  &.active {\n    text-decoration: underline;\n    & > li {\n      background: #fe0000;\n      border: 1px solid #fdfdfd;\n      color: #fdfdfd;\n    }\n  }\n"]))),R=t(1),z=function(){return Object(R.jsx)(_,{children:Object(R.jsx)(C,{children:T.a.map((function(n){return Object(R.jsx)(S,{to:n.link,children:Object(R.jsxs)(D,{children:[Object(R.jsx)(U,{children:n.icon}),Object(R.jsx)(P,{children:n.name})]})},n.name)}))})})},A=t.p+"static/media/logo.50b20848.jpg",L=t(15),G=function(n){var e=n.width;return Object(R.jsx)("img",{width:e,src:A,alt:"logo ".concat(L.a)})},I=t(10),N=t(9),M=Object(w.b)(E.b)(d||(d=Object(k.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  border: 4px solid white;\n  padding: 10px 12px;\n  border-radius: 50px;\n  color: white;\n  transition: all 0.1s ease-in-out;\n  :active {\n    background: white;\n    color: red;\n    border: 4px solid red;\n  }\n"]))),B=t(11),Y=function(){var n=Object(g.c)(y.a),e=Object(g.b)();return n?Object(R.jsx)(M,{to:"/",onClick:function(){e(Object(B.c)()),e(Object(B.b)("D\xe9conn\xe9ct\xe9"))},children:Object(R.jsx)(N.a,{icon:I.c,size:"3x"})}):Object(R.jsx)(M,{to:"/connexion",children:Object(R.jsx)(N.a,{icon:I.j,size:"3x"})})},F=w.b.header(u||(u=Object(k.a)(["\n  position: relative;\n  margin: 0 0 12px;\n  padding: 12px 12px 36px 12px;\n  display: flex;\n  justify-content: center;\n  border-bottom: 3px solid black;\n  border-radius: 0 0 50px 50px;\n  background: linear-gradient(to right, #fdfdfd, #fe0000);\n  background-size: 400% 400%;\n  animation: backgroundMoving 25s infinite ease;\n  @keyframes backgroundMoving {\n    0% {\n      background-position: 92% 0%;\n    }\n    50% {\n      background-position: 9% 100%;\n    }\n    100% {\n      background-position: 92% 0%;\n    }\n  }\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n"]))),H=w.b.div(l||(l=Object(k.a)(["\n  position: absolute;\n  top: 70%;\n  font-size: 2.5em;\n  color: black;\n  font-weight: bold;\n"]))),V=function(n){n.shop;return Object(R.jsxs)(F,{children:[Object(R.jsx)(E.b,{to:"/",children:Object(R.jsx)(G,{width:"80px"})}),Object(R.jsx)(H,{children:"CAFF\xc8"}),Object(R.jsx)(Y,{})]})},q=t(56),J=t(47),K=function(){return Object(R.jsx)(q.a,{children:Object(R.jsx)(J.a,{})})},Q=w.b.div(j||(j=Object(k.a)(["\n  z-index: 12;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 15px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  visibility: hidden;\n  animation: 1s fadeIn;\n  ","\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.visible?Object(w.a)(b||(b=Object(k.a)(["\n      visibility: visible;\n    "]))):Object(w.a)(p||(p=Object(k.a)(["\n    visibility: hidden;\n  "])))})),W=w.b.div(f||(f=Object(k.a)(["\n  background-color: lightGreen;\n  text-align: center;\n  font-size: 1.5em;\n  padding: 12px;\n  border-radius: 50px;\n  border: 3px solid green;\n  color: black;\n  text-transform: uppercase;\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n"]))),X=function(){var n=Object(g.c)(y.b),e=Object(g.b)(),t=Object(O.useState)(!1),r=Object(m.a)(t,2),c=r[0],a=r[1];return Object(O.useEffect)((function(){var n;return a(!0),c&&(n=setTimeout((function(){a(!1),e(Object(B.b)(""))}),3e3)),function(){return clearTimeout(n)}}),[n,e]),n&&Object(R.jsx)(Q,{visible:!0,children:Object(R.jsx)(W,{children:Object(R.jsx)("span",{children:n})})})},Z=Object(O.lazy)((function(){return t.e(3).then(t.bind(null,100))})),$=Object(O.lazy)((function(){return Promise.all([t.e(5),t.e(4)]).then(t.bind(null,99))})),nn=function(){var n=Object(g.c)(y.a),e=Object(O.useState)(!1),t=Object(m.a)(e,2),r=t[0],c=t[1];return Object(R.jsxs)("div",{children:[Object(R.jsx)(V,{}),Object(R.jsx)(X,{}),Object(R.jsx)(z,{}),Object(R.jsx)(O.Suspense,{fallback:Object(R.jsx)(K,{}),children:Object(R.jsxs)(v.d,{children:[Object(R.jsx)(v.b,{path:"/",element:Object(R.jsx)($,{loading:r,setLoading:c}),children:Object(R.jsx)(v.b,{path:"products/:category",element:Object(R.jsx)($,{loading:r,setLoading:c})})}),Object(R.jsx)(v.b,{path:"connexion",element:n?Object(R.jsx)(v.a,{replace:!0,to:"/"}):Object(R.jsx)(Z,{loading:r,setLoading:c})})]})})]})},en=t(20),tn=t(5),rn=t(22),cn={user:void 0,message:""},an=t(60),on=t.n(an),sn=t(39),dn=t(13),un=t(41),ln=function(n,e,t){switch(n){case"ADD_PRODUCT":return[].concat(Object(un.a)(e.products),[Object(tn.a)({},t)]);case"DELETE_PRODUCT":return e.products.filter((function(n){return n._id!==t._id}));case"UPDATE_PRODUCT":var r=e.products.findIndex((function(n){return n._id===t._id})),c=Object(un.a)(e.products);return c[r]=t,Object(un.a)(c);default:return e.products}},bn={products:[],modalType:{type:"",open:!1},productToEdit:void 0},pn={key:L.a,storage:on.a,whitelist:["user"]},jn=Object(en.b)({user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case rn.a.SET_CURRENT_USER:return Object(tn.a)(Object(tn.a)({},n),{},{user:e.payload});case rn.a.SET_USER_MESSAGE:return Object(tn.a)(Object(tn.a)({},n),{},{message:e.payload});case rn.a.SIGN_OUT:return Object(tn.a)(Object(tn.a)({},n),{},{user:void 0});default:return n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case dn.a.GET_PRODUCTS_BY_LOCATION:return Object(tn.a)(Object(tn.a)({},n),{},{products:e.payload});case dn.a.ADD_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:ln("ADD_PRODUCT",n,e.payload)});case dn.a.DELETE_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:ln("DELETE_PRODUCT",n,e.payload)});case dn.a.UPDATE_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:ln("UPDATE_PRODUCT",n,e.payload)});case dn.a.TOGGLE_MODAL:return Object(tn.a)(Object(tn.a)({},n),{},{modalType:{type:e.payload,open:""!==e.payload&&!n.modalType.open}});case dn.a.SET_PRODUCT_TO_EDIT:return Object(tn.a)(Object(tn.a)({},n),{},{productToEdit:e.payload});default:return n}}}),fn=Object(sn.a)(pn,jn),On=(t(96),[t(61).a]);var xn=Object(en.c)(fn,en.a.apply(void 0,On)),hn=Object(sn.b)(xn),mn=t(62);h.a.render(Object(R.jsx)(g.a,{store:xn,children:Object(R.jsx)(E.a,{basename:"/",children:Object(R.jsx)(mn.a,{persistor:hn,children:Object(R.jsx)(nn,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.3c6395f1.chunk.js.map