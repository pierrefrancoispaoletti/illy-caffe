(this["webpackJsonpilly-caffe"]=this["webpackJsonpilly-caffe"]||[]).push([[0],{12:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return i})),t.d(e,"c",(function(){return c}));var a=t(23),r=function(n){return{type:a.a.SET_USER_MESSAGE,payload:n}},i=function(n){var e=n.token,t=n.role;return{type:a.a.SET_CURRENT_USER,payload:{token:e,role:t}}},c=function(){return{type:a.a.SIGN_OUT}}},14:function(n,e,t){"use strict";e.a={GET_PRODUCTS_BY_LOCATION:"GET_PRODUCTS_BY_LOCATION",DELETE_PRODUCT:"DELETE_PRODUCT",UPDATE_PRODUCT:"UPDATE_PRODUCT",ADD_PRODUCT:"ADD_PRODUCT",TOGGLE_MODAL:"TOGGLE_MODAL",SET_PRODUCT_TO_EDIT:"SET_PRODUCT_TO_EDIT"}},17:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return c})),t.d(e,"f",(function(){return o})),t.d(e,"e",(function(){return s})),t.d(e,"d",(function(){return l}));var a=t(14),r=function(n){var e=n.products;return{type:a.a.GET_PRODUCTS_BY_LOCATION,payload:e}},i=function(n){return{type:a.a.ADD_PRODUCT,payload:n}},c=function(n){return{type:a.a.DELETE_PRODUCT,payload:n}},o=function(n){return{type:a.a.UPDATE_PRODUCT,payload:n}},s=function(n){return{type:a.a.TOGGLE_MODAL,payload:n}},l=function(n){return{type:a.a.SET_PRODUCT_TO_EDIT,payload:n}}},18:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return c}));var a=t(24),r=function(n){return n.user},i=Object(a.a)([r],(function(n){return n.user})),c=Object(a.a)([r],(function(n){return n.message}))},2:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var a="illy",r="https://young-badlands-89715.herokuapp.com",i={main:"#fdfdfd",secondary:"#fe0000"}},22:function(n,e,t){"use strict";e.a=t.p+"static/media/logo.50b20848.jpg"},23:function(n,e,t){"use strict";e.a={SET_USER_MESSAGE:"SET_USER_MESSAGE",SIGN_OUT:"SIGN_OUT",SET_CURRENT_USER:"SET_CURRENT_USER",VALIDATE_TOKEN:"VALIDATE_TOKEN"}},27:function(n,e,t){"use strict";t.d(e,"b",(function(){return E})),t.d(e,"f",(function(){return _})),t.d(e,"e",(function(){return D})),t.d(e,"d",(function(){return U})),t.d(e,"c",(function(){return S})),t.d(e,"g",(function(){return P})),t.d(e,"h",(function(){return A})),t.d(e,"a",(function(){return L}));var a,r,i,c,o,s,l,u,d,b,p,j,f,x,O,m,g,h,v=t(3),y=t(4),w=t(2),T=function(n){if(n.illy)return Object(y.a)(a||(a=Object(v.a)(["\n      div {\n        background: ",";\n        color: black;\n        font-family: unset;\n        & > .title {\n          color: ",";\n          font-family: unset;\n          & > .price {\n            color: black;\n            font-family: unset;\n            border-bottom: 1px solid ",";\n          }\n        }\n        & > .description {\n          text-align: left;\n        }\n        & > .menu {\n          color: ",";\n        }\n        & > .selected {\n          background: ",";\n          color: ",";\n          padding: 5px;\n          border-radius: 50px;\n        }\n      }\n      h2 {\n        color: ",";\n        font-family: unset;\n        font-weight: 200;\n      }\n    "])),w.a.main,w.a.secondary,w.a.secondary,w.a.secondary,w.a.secondary,w.a.main,w.a.secondary)},k=function(n){if(n.transition)return"runing"},C=function(n){switch(n.color){case"rouge":return Object(y.a)(s||(s=Object(v.a)(["\n        color: #742f37;\n      "])));case"blanc":return Object(y.a)(l||(l=Object(v.a)(["\n        color: #f1f285;\n      "])));case"ros\xe9":return Object(y.a)(u||(u=Object(v.a)(["\n        color: #ffb9b9;\n      "])))}},E=y.b.div(d||(d=Object(v.a)(["\n  border: ",";\n  margin: 0px 8px;\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n  perspective: 1500px;\n  background: #484b56;\n  ","\n"])),(function(n){return n.illy?"14px solid ".concat(w.a.secondary):"14px solid #deb887"}),T),_=y.b.div(b||(b=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #484b56;\n  min-height: 80vh;\n  ","\n  ","\n"])),(function(n){switch(n.transitionType){case"blur":return Object(y.a)(i||(i=Object(v.a)(["\n        animation: blurArray 0.5s ease-in-out ",";\n        @keyframes blurArray {\n          0% {\n            filter: blur(10px);\n          }\n          100% {\n            filter: blur(0);\n          }\n        }\n      "])),k);case"scale":return Object(y.a)(c||(c=Object(v.a)(["\n        animation: scaleArray 0.2s ease ",";\n        @keyframes scaleArray {\n          0% {\n            transform: scale(100%);\n          }\n          100% {\n            transform: scale(0%);\n          }\n        }\n      "])),k);case"scale reverse":return Object(y.a)(o||(o=Object(v.a)(["\n        animation: scaleArray 1.5s linear "," reverse;\n        @keyframes scaleArray {\n          0% {\n            transform: scale(100%);\n          }\n          50% {\n            transform: scale(50%);\n          }\n          75% {\n            transform: scale(25%);\n          }\n          100% {\n            transform: scale(0%);\n          }\n        }\n      "])),k)}}),T),D=y.b.h2(p||(p=Object(v.a)(['\n  position: relative;\n  font-family: "crayonHand";\n  font-size: 2.6em;\n  margin-bottom: 12px;\n  color: ',";\n  text-align: center;\n  letter-spacing: 10px;\n  overflow-wrap: anywhere;\n  @media (max-width: 379px) {\n    font-size: 1.9em;\n  }\n"])),w.a.main),U=y.b.p(j||(j=Object(v.a)(["\n  margin: 8px 12px;\n  text-align: center;\n  line-height: 1.6;\n  color: ",";\n"])),w.a.secondary),S=y.b.div(f||(f=Object(v.a)(['\n  position: relative;\n  font-family: "crayonHand";\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 36px;\n  color: ',";\n  margin: 0px 1.5em;\n  text-align: center;\n  font-size: 1.8rem;\n  @media (max-width: 420px) {\n    align-items: center;\n  }\n  ","\n\n  .title {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    color: ",';\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    & > span {\n      max-width: 50%;\n      text-align: left;\n    }\n    @media (max-width: 420px) {\n      & > span {\n        max-width: 100%;\n        text-align: center;\n      }\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .price {\n    font-family: "ChalkAboutItalic";\n    font-weight: 400;\n    :not(.wineprice) {\n      border-bottom: 3px solid ',";\n    }\n    font-size: 1.2rem;\n    @media (max-width: 370px) {\n      font-size: 1.5rem;\n    }\n  }\n\n  .description {\n    text-align: center;\n    margin: 0;\n  }\n\n  .wine-color {\n    font-size: 1.5em;\n    ","\n  }\n"])),w.a.main,(function(n){if(!n.visible)return Object(y.a)(r||(r=Object(v.a)(["\n      display: none;\n    "])))}),w.a.main,w.a.main,C),P=(y.b.div(x||(x=Object(v.a)([""]))),y.b.div(O||(O=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: right;\n  justify-content: center;\n  vertical-align: baseline;\n"])))),A=y.b.span(m||(m=Object(v.a)(["\n  background-color: #565a68;\n  margin-bottom: 8px;\n  width: 100%;\n  ",";\n"])),C),L=(y.b.span(g||(g=Object(v.a)(["\n  padding: 6px 8px;\n  border: 3px solid ",";\n  border-radius: 50px;\n  display: inline-block;\n  margin-right: 1em;\n  background: grey;\n  font-size: 0.7em;\n  :active {\n    background: ",";\n    border: 3px solid black;\n  }\n  ","\n  :last-child {\n    margin-right: 0;\n  }\n  @media (max-width: 420px) {\n    margin-right: 0;\n  }\n"])),w.a.main,w.a.main,C),y.b.div(h||(h=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  color: ",';\n  font-family: "crayonHand";\n  font-size: 1em;\n  transition: all 0.5s ease;\n  margin: 12px;\n  .selected {\n    text-decoration: underline;\n    transition: all 0.2s ease-in-out;\n  }\n  .menu {\n    margin: 6px;\n    cursor: pointer;\n    align-self: center;\n    vertical-align: bottom;\n    display: flex;\n    align-items: center;\n  }\n'])),w.a.main))},28:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t(11),r=t(10),i=t(22),c=t.p+"static/media/domori.8a45a947.jpg",o=t.p+"static/media/damman.e51c3790.png",s=t(1),l="20px",u=[{name:"Aujourd'hui",icon:Object(s.jsx)(r.a,{icon:a.d,size:"2x"}),link:"/",slug:"today"},{name:"Le Froid",icon:Object(s.jsx)(r.a,{icon:a.c,size:"2x"}),link:"/products/le-froid",slug:"le-froid",subCategory:[{name:"Eaux",slug:"eaux"},{name:"Softs",slug:"softs"},{name:"Granita",slug:"granita"},{name:"Bi\xe8res",slug:"bieres"}]},{name:"Le Vin",icon:Object(s.jsx)(r.a,{icon:a.j,size:"2x"}),link:"/products/le-vin",slug:"le-vin"},{name:"Le Caf\xe9",icon:Object(s.jsx)(r.a,{icon:a.a,size:"2x"}),link:"/products/le-cafe",logo:i.a,alt:"Logo Illy",width:"50px",slug:"le-cafe",subCategory:[{name:"Les Classiques",slug:"classiques",logo:i.a,alt:"Logo Illy",width:l},{name:"Les Sp\xe9ciaux",slug:"sp\xe9ciaux",logo:i.a,alt:"Logo Illy",width:l},{name:"Les Monoarabica",slug:"monoarabica",logo:i.a,alt:"Logo Illy",width:l},{name:"Les Recettes Froides",slug:"recettes-froides",logo:i.a,alt:"Logo Illy",width:l},{name:"IllyCrema",slug:"illy-crema",logo:i.a,alt:"Logo Illy",width:l}]},{name:"Le Chocolat",icon:Object(s.jsx)(r.a,{icon:a.e,size:"2x"}),logo:c,alt:"Logo Domori",width:"60px",link:"/products/le-chocolat",slug:"le-chocolat",subCategory:[{name:"Les Classiques",slug:"classiques"},{name:"Les Domori",slug:"domori",logo:c,alt:"Logo Illy",width:l}]},{name:"Th\xe9s et Infusions",logo:o,alt:"Logo Damman",width:"100px",legend:"Illy \xe0 une fa\xe7on nouvelle et originale de vous surprendre, illy Caff\xe8 propose les th\xe9s Damann Fr\xe8res.Importateur europ\xe9es des meilleurs th\xe9s depuis 1692",icon:Object(s.jsx)(r.a,{icon:a.f,size:"2x"}),link:"/products/le-the",slug:"le-the"}]},29:function(n,e,t){"use strict";var a,r,i,c,o=t(5),s=t(41),l=(t(0),t(3)),u=t(4),d="black",b=Object(u.a)(a||(a=Object(l.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),d),p=u.b.div(r||(r=Object(l.a)(['\n  position: relative;\n  margin: auto 0;\n\n  input[type="email"] {\n    letter-spacing: 0.3em;\n  }\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n']))),j=u.b.input(i||(i=Object(l.a)(["\n  width: 100%;\n  background: none;\n  background-color: transparent;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"])),d,d,b),f=u.b.label(c||(c=Object(l.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  text-transform: capitalize;\n\n  &.shrink {\n    ","\n  }\n"])),d,b),x=t(1),O=["handleChange","label"];e.a=function(n){var e,t=n.handleChange,a=n.label,r=Object(s.a)(n,O);return Object(x.jsxs)(p,{children:[Object(x.jsx)(j,Object(o.a)({onChange:t},r)),a&&Object(x.jsx)(f,{className:"".concat((null===(e=String(null===r||void 0===r?void 0:r.value))||void 0===e?void 0:e.length)?"shrink":""," form-input-label"),children:a})]})}},45:function(n,e,t){"use strict";t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return o})),t.d(e,"d",(function(){return s}));var a=t(24),r=function(n){return n.products},i=Object(a.a)([r],(function(n){return n.products.sort((function(n,e){return e.price>n.price?-1:1}))})),c=Object(a.a)([r],(function(n){return n.modalType})),o=Object(a.a)([r],(function(n){return n.productToEdit})),s=function(n){return Object(a.a)([i],(function(e){return n?e.filter((function(e){return e.subCategory?e.subCategory===n:e})):e}))}},46:function(n,e,t){"use strict";t.d(e,"c",(function(){return d})),t.d(e,"b",(function(){return b})),t.d(e,"a",(function(){return p})),t.d(e,"d",(function(){return j}));var a=t(21),r=t.n(a),i=t(31),c=t(34),o=t.n(c),s=t(2),l=t(12),u=t(17),d=function(){var n=Object(i.a)(r.a.mark((function n(e,t,a,i){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),t||(t="today"),n.prev=2,n.next=5,o()({method:"GET",url:"".concat(s.c,"/api/products/").concat(e,"/").concat(t)});case 5:200===(c=n.sent).status?a(Object(u.c)(c.data)):a(Object(l.b)(c.data.message)),i(!1),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),a(Object(l.b)("Il y \xe0 eu un probl\xe8me")),i(!1);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t,a,r){return n.apply(this,arguments)}}(),b=function(){var n=Object(i.a)(r.a.mark((function n(e,t,a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",!1);case 2:return n.prev=2,n.next=5,o()({method:"DELETE",url:"".concat(s.c,"/api/products/deleteProduct"),data:{_id:e},headers:{Authorization:"Bearer "+a}});case 5:202===(i=n.sent).status&&t(Object(u.b)(i.data.deletedProduct)),t(Object(l.b)(i.data.message)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),t(Object(l.b)("Il y \xe0 eu un probl\xe8me"));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t,a){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(r.a.mark((function n(e,t,a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o()({method:"POST",url:"".concat(s.c,"/api/products/addProduct"),data:{product:e},headers:{Authorization:"Bearer "+a}});case 3:201===(i=n.sent).status&&t(Object(u.a)(i.data.newProduct)),t(Object(l.b)(i.data.message)),t(Object(u.e)("")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t(Object(l.b)("Il y \xe0 eu un probl\xe8me"));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t,a){return n.apply(this,arguments)}}(),j=function(){var n=Object(i.a)(r.a.mark((function n(e,t,a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o()({method:"POST",url:"".concat(s.c,"/api/products/updateProduct"),data:{update:e},headers:{Authorization:"Bearer "+a}});case 3:202===(i=n.sent).status&&t(Object(u.f)(i.data.updatedProduct)),t(Object(l.b)(i.data.message)),t(Object(u.e)("")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t(Object(l.b)("Il y \xe0 eu un probl\xe8me"));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t,a){return n.apply(this,arguments)}}()},48:function(n,e,t){"use strict";t(0);var a,r=t(3),i=t(4),c=t(2),o=i.b.div(a||(a=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  width: 80%;\n  justify-content: center;\n  margin: auto;\n  letter-spacing: 8px;\n  span {\n    font-size: 2.5em;\n    color: ",';\n    font-family: "ChalkAbout";\n    :nth-child(n) {\n      animation: evenCharacterAnimation 0.7s linear infinite;\n    }\n    :nth-child(2n) {\n      animation: evenCharacterAnimation 0.8s linear infinite;\n    }\n    @keyframes evenCharacterAnimation {\n      0% {\n        transform: translateY(0px);\n      }\n      50% {\n        transform: translateY(10px);\n      }\n      100% {\n        transform: translateY(0px);\n      }\n    }\n    @media (max-width: 500px) {\n      font-size: 2em;\n    }\n    @media (max-width: 420px) {\n      font-size: 1.2em;\n    }\n    @media (max-width: 320px) {\n      font-size: 1em;\n    }\n  }\n'])),c.a.main),s=t(1);e.a=function(){return Object(s.jsxs)(o,{children:[Object(s.jsx)("span",{children:"C"}),Object(s.jsx)("span",{children:"H"}),Object(s.jsx)("span",{children:"A"}),Object(s.jsx)("span",{children:"R"}),Object(s.jsx)("span",{children:"G"}),Object(s.jsx)("span",{children:"E"}),Object(s.jsx)("span",{children:"M"}),Object(s.jsx)("span",{children:"E"}),Object(s.jsx)("span",{children:"N"}),Object(s.jsx)("span",{children:"T"}),Object(s.jsx)("span",{children:"."}),Object(s.jsx)("span",{children:"."}),Object(s.jsx)("span",{children:"."})]})}},57:function(n,e,t){"use strict";var a,r,i,c,o,s,l,u,d,b,p,j=t(0),f=t(27),x=t(6),O=t(28),m=t(3),g=t(4),h=t(2),v=g.b.button(a||(a=Object(m.a)(["\n  background: lightGreen;\n  border: 1px solid black;\n  border-radius: 50%;\n  padding: 9px 12px;\n  transition: all 0.1s ease-in-out;\n  :active {\n    background: green;\n    color: ",";\n  }\n"])),h.a.secondary),y=t(10),w=t(11),T=t(8),k=t(17),C=t(1),E=function(){var n=Object(T.b)();return Object(C.jsx)(v,{type:"button",onClick:function(){return n(Object(k.e)("ajouter"))},children:Object(C.jsx)(y.a,{icon:w.g,size:"2x"})})},_=t(5),D=t(16),U=t(45),S=t(25),P=t(41),A=t(46),L=t(18),R=t(29),z=g.b.div(l||(l=Object(m.a)(["\n  position: fixed;\n  z-index: 18;\n  top: 10px;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 12px;\n  border: 2px solid ",";\n  align-items: center;\n  ","\n  & > form {\n    width: 80%;\n  }\n  margin: 15px 15px;\n"])),h.a.main,(function(n){if(!n.open)return Object(g.a)(o||(o=Object(m.a)(["\n      display: none;\n    "])))})),I=g.b.button(u||(u=Object(m.a)(["\n  background: ",";\n  color: black;\n  font-size: 1.3em;\n  font-weight: bold;\n  border: 1px solid black;\n  border-radius: 50px;\n  padding: 8px 14px;\n  :active {\n    background: black;\n    border: 1px solid ",";\n    color: ",";\n  }\n"])),h.a.main,h.a.secondary,h.a.secondary),G=g.b.div(d||(d=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n"]))),N=g.b.button(b||(b=Object(m.a)(["\n  float: right;\n  font-size: 1em;\n  margin-bottom: 12px;\n  padding: 12px;\n  border-radius: 50px;\n  font-weight: bold;\n  ","\n  ","\n"])),(function(n){switch(n.modalType.toLowerCase()){case"ajouter":return Object(g.a)(r||(r=Object(m.a)(["\n        border: 3px solid green;\n        background: lightgreen;\n        color: ",";\n      "])),h.a.main);case"editer":return Object(g.a)(i||(i=Object(m.a)(["\n        border: 3px solid ",";\n        background: purple;\n        color: ",";\n      "])),h.a.main,h.a.main);default:return Object(g.a)(c||(c=Object(m.a)(["\n        background: lightgreen;\n      "])))}}),(function(n){if(n.disabled)return Object(g.a)(s||(s=Object(m.a)(["\n      background: #ccc;\n    "])))})),M=g.b.div(p||(p=Object(m.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  vertical-align: middle;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 12px;\n  font-size: 1em;\n  & div {\n    margin-bottom: 3px;\n  }\n  & input[type="checkbox"] {\n    vertical-align: bottom;\n    width: 35px;\n    height: 35px;\n    margin: 0 8px;\n  }\n  & input[type="number"] {\n    outline: none;\n    vertical-align: middle;\n    font-size: 1.2em;\n    width: 35px;\n    height: 35px;\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n']))),B=["children","type","setProduct","initialState","dispatch"],W=function(n){var e,t=n.children,a=n.type,r=n.setProduct,i=n.initialState,c=n.dispatch,o=Object(P.a)(n,B),s=Object(T.c)(L.a).token,l=o._id,u=o.title,d=o.description,b=o.price,p=o.category,j=o.location,f=o.visible,x=o.couleur,O=o.subCategory,m=function(){return r(Object(_.a)({},i))},g=function(n){var e=n.target,t=e.name,a=e.value;r((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(S.a)({},t,a))}))};return Object(C.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={title:u,description:d,price:b,category:p,location:j,visible:f,couleur:x,subCategory:O};"ajouter"===a&&Object(A.a)(e,c,s).then((function(){return m()})),"editer"===a&&Object(A.d)(Object(_.a)(Object(_.a)({},e),{},{_id:l}),c,s).then((function(){return m()}))},children:[Object(C.jsx)(R.a,{type:"text",name:"title",label:"Nom du produit",value:u,handleChange:g,required:!0}),Object(C.jsx)(R.a,{type:"text",name:"description",label:"Description",value:d,handleChange:g}),Object(C.jsx)(R.a,{type:"number",name:"price",pattern:"\\\\d*",step:.1,handleChange:g,label:"Prix",value:b,required:!0}),t,Object(C.jsx)(N,{disabled:!u||!b||!p||!j,type:"submit",modalType:a,children:null===(e="".concat(a," un produit"))||void 0===e?void 0:e.toUpperCase()})]})},q=function(n){var e=n.couleur,t=n.setProduct;return Object(C.jsx)(M,{children:e.map((function(n){return Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:n.value,children:n.value.toUpperCase()}),Object(C.jsx)("input",{name:n.value,type:"checkbox",checked:n.isChecked,value:n.value,onChange:function(){return t((function(e){return Object(_.a)(Object(_.a)({},e),n.isChecked=!n.isChecked)}))}}),Object(C.jsx)("input",{type:"number",pattern:"\\\\d*",step:.1,value:n.price,onChange:function(e){return t((function(t){return Object(_.a)(Object(_.a)({},t),n.price=e.target.value)}))}}),"\u20ac"]},n.value)}))})},F=function(n){var e=n.setProduct,t=n.subCategories,a=n.subCategory,r=function(n){var t=n.target,a=t.name,r=t.value;e((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(S.a)({},a,r))}))};return Object(C.jsx)("div",{children:t.map((function(n){return Object(C.jsx)(R.a,{type:"radio",name:"subCategory",checked:a===n.slug,handleChange:r,label:n.name,value:n.slug,required:!0},n.slug)}))})},Y=function(n){var e=n.currentCategory,t=Object(T.c)(U.a),a=t.type,r=t.open,i=Object(T.c)(U.b),c=Object(T.b)(),o={_id:"",title:"",description:"",price:"",location:h.b,category:"",visible:!0,couleur:[{value:"rouge",isChecked:!1,price:""},{value:"blanc",isChecked:!1,price:""},{value:"ros\xe9",isChecked:!1,price:""}],subCategory:""},s=Object(j.useState)(o),l=Object(D.a)(s,2),u=l[0],d=l[1];Object(j.useEffect)((function(){"ajouter"===a&&d((function(n){return Object(_.a)(Object(_.a)({},n),{},{category:e,location:h.b})})),"editer"===a&&d((function(n){return Object(_.a)(Object(_.a)({},n),i)}))}),[e,i,a,r]);var b=O.a.find((function(n){return n.slug===e}));return Object(C.jsxs)(z,{open:r,children:[Object(C.jsxs)(G,{children:[Object(C.jsx)("h3",{children:"".concat(null===a||void 0===a?void 0:a.toUpperCase()," dans ").concat(e)}),Object(C.jsx)(I,{type:"button",onClick:function(){return c(Object(k.e)(a))},children:Object(C.jsx)(y.a,{icon:w.h,size:"1x"})})]}),Object(C.jsxs)(W,Object(_.a)(Object(_.a)({type:a,setProduct:d,initialState:o,dispatch:c},u),{},{children:["le-vin"===e&&Object(C.jsx)(q,{couleur:u.couleur,setProduct:d}),b.subCategory&&Object(C.jsx)(F,{subCategories:b.subCategory,setProduct:d,subCategory:u.subCategory})]}))]})};e.a=function(n){var e,t=n.setFilter,a=n.children,r=n.filter,i=Object(x.f)(),c=O.a.find((function(n){return n.link===i.pathname})),o=Object(T.c)(L.a),s=Object(j.useRef)(null);Object(j.useEffect)((function(){s.current=i.pathname}));var l=s.current;return Object(C.jsx)(f.b,{className:"tableau-homepage",illy:"le-cafe"===(null===c||void 0===c?void 0:c.slug)||"le-chocolat"===(null===c||void 0===c?void 0:c.slug)||"le-the"===(null===c||void 0===c?void 0:c.slug),children:Object(C.jsxs)(f.f,{transition:l!==i.pathname,transitionType:"blur",children:[Object(C.jsx)(f.e,{children:null===c||void 0===c?void 0:c.name}),Object(C.jsx)("img",{width:null===c||void 0===c?void 0:c.width,src:null===c||void 0===c?void 0:c.logo,alt:null===c||void 0===c?void 0:c.alt}),Object(C.jsx)(f.d,{children:null===c||void 0===c?void 0:c.legend}),(null===c||void 0===c?void 0:c.subCategory)&&Object(C.jsxs)(f.a,{children:[Object(C.jsx)("span",{className:"".concat(""===r?" menu selected":"menu"),onClick:function(){return t("")},children:"Tous"}),null===c||void 0===c||null===(e=c.subCategory)||void 0===e?void 0:e.map((function(n){return Object(C.jsxs)("div",{className:"".concat(r===n.slug?"menu selected":"menu"),onClick:function(){return t(n.slug)},children:[Object(C.jsx)("span",{className:"subcategory-name",children:n.name})," ",n.logo&&Object(C.jsx)("img",{width:null===n||void 0===n?void 0:n.width,src:null===n||void 0===n?void 0:n.logo,alt:null===n||void 0===n?void 0:n.alt})]},n.name)}))]}),o&&"isAdmin"===o.role&&Object(C.jsxs)("div",{style:{position:"relative"},children:[Object(C.jsx)(E,{}),Object(C.jsx)(Y,{style:{position:"fixed"},currentCategory:null===c||void 0===c?void 0:c.slug})]}),a]})})}},68:function(n,e,t){},98:function(n,e,t){"use strict";t.r(e);var a,r,i,c,o,s,l,u,d,b,p,j,f,x=t(0),O=t(39),m=t.n(O),g=(t(68),t(16)),h=t(8),v=t(6),y=t(18),w=t(28),T=t(3),k=t(19),C=t(4),E=t(2),_=C.b.nav(a||(a=Object(T.a)(["\n  display: flex;\n  padding: 8px 0px;\n  overflow-x: auto;\n"]))),D=C.b.ul(r||(r=Object(T.a)(["\n  padding: 0px 8px;\n  margin: auto;\n  display: flex;\n  align-items: flex-start;\n  list-style: none;\n"]))),U=C.b.li(i||(i=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 60px;\n  height: 60px;\n  margin: 0px 8px;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.58);\n  transition: all 0.5s;\n"])),E.a.main,E.a.secondary),S=C.b.div(c||(c=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 6px;\n"]))),P=C.b.span(o||(o=Object(T.a)(["\n  line-height: 1em;\n  font-size: 1em;\n  text-align: center;\n  width: 100%;\n"]))),A=Object(C.b)(k.c)(s||(s=Object(T.a)(["\n  text-decoration: none;\n  color: ",";\n  &.active {\n    text-decoration: underline ",";\n    & > li {\n      background: ",";\n      border: 3px solid ",";\n      color: ",";\n    }\n  }\n"])),E.a.secondary,E.a.main,E.a.secondary,E.a.main,E.a.main),L=t(1),R=function(){return Object(L.jsx)(_,{children:Object(L.jsx)(D,{children:w.a.map((function(n){return Object(L.jsx)(A,{to:n.link,children:Object(L.jsxs)(U,{children:[Object(L.jsx)(S,{children:n.icon}),Object(L.jsx)(P,{children:n.name})]})},n.name)}))})})},z=t(22),I=function(n){var e=n.width;return Object(L.jsx)("img",{width:e,src:z.a,alt:"logo ".concat(E.b)})},G=t(11),N=t(10),M=Object(C.b)(k.b)(l||(l=Object(T.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  border: 4px solid ",";\n  padding: 10px 12px;\n  border-radius: 50px;\n  color: ",";\n  transition: all 0.1s ease-in-out;\n  :active {\n    background: ",";\n    color: red;\n    border: 4px solid red;\n  }\n"])),E.a.main,E.a.main,E.a.main),B=t(12),W=function(){var n=Object(h.c)(y.a),e=Object(h.b)();return n?Object(L.jsx)(M,{to:"/",onClick:function(){e(Object(B.c)()),e(Object(B.b)("D\xe9conn\xe9ct\xe9"))},children:Object(L.jsx)(N.a,{icon:G.b,size:"3x"})}):Object(L.jsx)(M,{to:"/connexion",children:Object(L.jsx)(N.a,{icon:G.i,size:"3x"})})},q=C.b.header(u||(u=Object(T.a)(["\n  position: relative;\n  margin: 0 0 12px;\n  padding: 12px 12px 36px 12px;\n  display: flex;\n  justify-content: center;\n  /* border-bottom: 3px solid black; */\n  border-radius: 0 0 50px 50px;\n  background: linear-gradient(to right, ",", ",");\n  background-size: 400% 400%;\n  animation: backgroundMoving 25s infinite ease;\n  @keyframes backgroundMoving {\n    0% {\n      background-position: 92% 0%;\n    }\n    50% {\n      background-position: 9% 100%;\n    }\n    100% {\n      background-position: 92% 0%;\n    }\n  }\n  /* box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58); */\n"])),E.a.main,E.a.secondary),F=C.b.div(d||(d=Object(T.a)(["\n  position: absolute;\n  top: 70%;\n  font-size: 2.5em;\n  color: ",";\n  font-weight: 200;\n"])),E.a.main),Y=function(n){n.shop;return Object(L.jsxs)(q,{children:[Object(L.jsx)(k.b,{to:"/",children:Object(L.jsx)(I,{width:"80px"})}),Object(L.jsx)(F,{children:"CAFF\xc8"}),Object(L.jsx)(W,{})]})},H=t(57),V=t(48),J=function(){return Object(L.jsx)(H.a,{children:Object(L.jsx)(V.a,{})})},K=C.b.div(j||(j=Object(T.a)(["\n  z-index: 12;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 15px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  visibility: hidden;\n  animation: 1s fadeIn;\n  ","\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.visible?Object(C.a)(b||(b=Object(T.a)(["\n      visibility: visible;\n    "]))):Object(C.a)(p||(p=Object(T.a)(["\n    visibility: hidden;\n  "])))})),$=C.b.div(f||(f=Object(T.a)(["\n  background-color: lightGreen;\n  text-align: center;\n  font-size: 1em;\n  padding: 12px;\n  border-radius: 50px;\n  border: 3px solid green;\n  color: black;\n  text-transform: uppercase;\n  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);\n"]))),Q=function(){var n=Object(h.c)(y.b),e=Object(h.b)(),t=Object(x.useState)(!1),a=Object(g.a)(t,2),r=a[0],i=a[1];return Object(x.useEffect)((function(){var n;return i(!0),r&&(n=setTimeout((function(){i(!1),e(Object(B.b)(""))}),3e3)),function(){return clearTimeout(n)}}),[n,e]),n&&Object(L.jsx)(K,{visible:!0,children:Object(L.jsx)($,{children:Object(L.jsx)("span",{children:n})})})},X=Object(x.lazy)((function(){return t.e(3).then(t.bind(null,101))})),Z=Object(x.lazy)((function(){return Promise.all([t.e(5),t.e(4)]).then(t.bind(null,100))})),nn=function(){var n=Object(h.c)(y.a),e=Object(x.useState)(!1),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(L.jsxs)("div",{children:[Object(L.jsx)(Y,{}),Object(L.jsx)(Q,{}),Object(L.jsx)(R,{}),Object(L.jsx)(x.Suspense,{fallback:Object(L.jsx)(J,{}),children:Object(L.jsxs)(v.d,{children:[Object(L.jsx)(v.b,{path:"/",element:Object(L.jsx)(Z,{loading:a,setLoading:r}),children:Object(L.jsx)(v.b,{path:"products/:category",element:Object(L.jsx)(Z,{loading:a,setLoading:r})})}),Object(L.jsx)(v.b,{path:"connexion",element:n?Object(L.jsx)(v.a,{replace:!0,to:"/"}):Object(L.jsx)(X,{loading:a,setLoading:r})})]})})]})},en=t(20),tn=t(5),an=t(23),rn={user:void 0,message:""},cn=t(61),on=t.n(cn),sn=t(40),ln=t(14),un=t(42),dn=function(n,e,t){switch(n){case"ADD_PRODUCT":return[].concat(Object(un.a)(e.products),[Object(tn.a)({},t)]);case"DELETE_PRODUCT":return e.products.filter((function(n){return n._id!==t._id}));case"UPDATE_PRODUCT":var a=e.products.findIndex((function(n){return n._id===t._id})),r=Object(un.a)(e.products);return r[a]=t,Object(un.a)(r);default:return e.products}},bn={products:[],modalType:{type:"",open:!1},productToEdit:void 0},pn={key:E.b,storage:on.a,whitelist:["user"]},jn=Object(en.b)({user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case an.a.SET_CURRENT_USER:return Object(tn.a)(Object(tn.a)({},n),{},{user:e.payload});case an.a.SET_USER_MESSAGE:return Object(tn.a)(Object(tn.a)({},n),{},{message:e.payload});case an.a.SIGN_OUT:return Object(tn.a)(Object(tn.a)({},n),{},{user:void 0});default:return n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ln.a.GET_PRODUCTS_BY_LOCATION:return Object(tn.a)(Object(tn.a)({},n),{},{products:e.payload});case ln.a.ADD_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:dn("ADD_PRODUCT",n,e.payload)});case ln.a.DELETE_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:dn("DELETE_PRODUCT",n,e.payload)});case ln.a.UPDATE_PRODUCT:return Object(tn.a)(Object(tn.a)({},n),{},{products:dn("UPDATE_PRODUCT",n,e.payload)});case ln.a.TOGGLE_MODAL:return Object(tn.a)(Object(tn.a)({},n),{},{modalType:{type:e.payload,open:""!==e.payload&&!n.modalType.open}});case ln.a.SET_PRODUCT_TO_EDIT:return Object(tn.a)(Object(tn.a)({},n),{},{productToEdit:e.payload});default:return n}}}),fn=Object(sn.a)(pn,jn),xn=(t(97),[t(62).a]);var On=Object(en.c)(fn,en.a.apply(void 0,xn)),mn=Object(sn.b)(On),gn=t(63),hn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function vn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}m.a.render(Object(L.jsx)(h.a,{store:On,children:Object(L.jsx)(k.a,{basename:"/",children:Object(L.jsx)(gn.a,{persistor:mn,children:Object(L.jsx)(nn,{})})})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/illy-caffe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/illy-caffe","/service-worker.js");hn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):vn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):vn(e,n)}))}}()}},[[98,1,2]]]);
//# sourceMappingURL=main.a5884533.chunk.js.map