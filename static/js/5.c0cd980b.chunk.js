(this.webpackJsonpbookshelf=this.webpackJsonpbookshelf||[]).push([[5],{32:function(t,e,a){"use strict";a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return n})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return b}));var i=a(34),o=a.n(i);function c(t){return o.a.get(t)}function n(t,e){return o.a.patch(t,e)}function l(t,e){return o.a.post(t,e)}function s(t){return o.a.delete(t)}var b=function(t,e){e(t),setTimeout((function(){e("")}),1500)}},33:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i="https://fe-interview-api.unnotech.com/api/book/"},37:function(t,e,a){"use strict";a(0);var i=a(38),o=a.n(i),c=a(1);e.a=function(t){var e=t.title,a=t.editable,i=t.value,n=t.method,l=t.inputValue;return a&&"\u5099\u8a3b"!==e?Object(c.jsx)("input",{className:o.a.inputField,type:"text",placeholder:e,value:l,onChange:function(t){return n(t.target.value)}}):a&&"\u5099\u8a3b"===e?Object(c.jsx)("textarea",{className:o.a.inputArea,placeholder:e,value:l,onChange:function(t){return n(t.target.value)}}):Object(c.jsxs)("div",{className:o.a.fixField,children:[e,": ",i]})}},38:function(t,e,a){t.exports={inputField:"inputField_inputField__2EPd0",inputArea:"inputField_inputArea__3-Nvo",fixField:"inputField_fixField__1Di5r"}},39:function(t,e,a){t.exports={bookDetailHeader:"bookDetail_bookDetailHeader__23FWM",addBookHeader:"bookDetail_addBookHeader__gJXMy",backIcon:"bookDetail_backIcon__3jyie",editIcon:"bookDetail_editIcon__2wigb",back:"bookDetail_back__2kTjm",bookDetailBody:"bookDetail_bookDetailBody__1U9OJ",addBookBody:"bookDetail_addBookBody__25EDa",bookDetailInputAll:"bookDetail_bookDetailInputAll__3NBdv",addBookInputAll:"bookDetail_addBookInputAll__2QrUm",bookDetailEditAll:"bookDetail_bookDetailEditAll__37JSW",addBookEditAll:"bookDetail_addBookEditAll__2Z9Kh",btn:"bookDetail_btn__1YHih",alert:"bookDetail_alert__1Sz69",hide:"bookDetail_hide__HNiz7",alertMsg:"bookDetail_alertMsg__gX7ON","slide-in-top":"bookDetail_slide-in-top__2jcgN",successMsg:"bookDetail_successMsg__1iQQD",failMsg:"bookDetail_failMsg__3Pq_w",noAlertMsg:"bookDetail_noAlertMsg__37Pe4","slide-out-top":"bookDetail_slide-out-top__308hS"}},40:function(t,e,a){"use strict";e.a=a.p+"static/media/success.21820974.jpg"},41:function(t,e,a){"use strict";e.a=a.p+"static/media/fail.30650b10.png"},79:function(t,e,a){"use strict";a.r(e);var i=a(42),o=a(0),c=a.n(o),n=a(37),l=a(2),s=a(10),b=a(32),u=a(33),d=a(39),r=a.n(d),j=a(35),_=a(36),k=a(15),O=a(40),f=a(41),h=a(1),p=function(){var t=Object(l.g)().bookId,e=Object(l.f)(),a=Object(o.useState)(""),c=Object(i.a)(a,2),d=c[0],p=c[1],x=Object(o.useState)(""),D=Object(i.a)(x,2),g=D[0],m=D[1],v=Object(o.useState)(""),A=Object(i.a)(v,2),N=A[0],M=A[1],B=Object(o.useState)(""),F=Object(i.a)(B,2),I=F[0],S=F[1],y=Object(o.useState)(""),E=Object(i.a)(y,2),C=E[0],H=E[1],w=Object(o.useState)(""),J=Object(i.a)(w,2),V=J[0],P=J[1],Q=Object(o.useState)(!1),z=Object(i.a)(Q,2),T=z[0],U=z[1],W=Object(o.useState)(!0),X=Object(i.a)(W,2),q=X[0],K=X[1];Object(o.useEffect)((function(){Object(b.c)(u.a+t).then((function(t){p(t.data),m(t.data.title),K(!1)}))}),[]);var Y=function(){M(""),S(""),H(""),P(""),U((function(t){return!t}))};return Object(h.jsxs)(h.Fragment,{children:[!0===q&&Object(h.jsx)(k.a,{}),Object(h.jsxs)("div",{className:r.a.bookDetailHeader,children:[Object(h.jsx)(s.b,{to:T?"/books/".concat(t):"/books",onClick:T?Y:null,className:r.a.backIcon,children:Object(h.jsx)(j.a,{icon:_.a})}),Object(h.jsx)("h1",{children:g}),Object(h.jsx)("a",{onClick:function(){U((function(t){return!t}))},className:T?r.a.hide:r.a.editIcon,children:Object(h.jsx)(j.a,{icon:_.b})})]}),Object(h.jsxs)("div",{className:r.a.bookDetailBody,children:[Object(h.jsxs)("div",{className:r.a.bookDetailInputAll,children:[Object(h.jsx)(n.a,{title:"\u540d\u7a31",editable:T,value:d.title,method:M,inputValue:N}),Object(h.jsx)(n.a,{title:"\u4f5c\u8005",editable:T,value:d.author,method:S,inputValue:I}),Object(h.jsx)(n.a,{title:"\u5099\u8a3b",editable:T,value:d.description,method:H,inputValue:C})]}),Object(h.jsx)("div",{className:T?r.a.bookDetailEditAll:r.a.hide,children:Object(h.jsxs)("div",{className:r.a.btn,children:[Object(h.jsx)("button",{onClick:Y,children:"\u53d6\u6d88"}),Object(h.jsx)("button",{onClick:function(){Object(b.b)(u.a+t+"/").then((function(){e.push("/books")})).catch((function(){Object(b.d)("\u522a\u9664\u5931\u6557",P)}))},children:"\u522a\u9664"}),Object(h.jsx)("button",{onClick:function(){if(""!==N)if(""!==I)if(""!==C){var e={title:N,author:I,description:C};Object(b.e)(u.a+t+"/",e).then((function(t){p(t.data),m("".concat(N)),M(""),S(""),H(""),P(""),Object(b.d)("\u4fee\u6539\u6210\u529f",P)})).catch((function(){Object(b.d)("\u4fee\u6539\u5931\u6557",P)}))}else Object(b.d)("\u8acb\u586b\u5beb\u5099\u8a3b",P);else Object(b.d)("\u8acb\u586b\u5beb\u4f5c\u8005",P);else Object(b.d)("\u8acb\u586b\u5beb\u540d\u7a31",P)},children:"\u4fee\u6539"})]})})]}),""!==V&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"\u4fee\u6539\u5931\u6557"!==V&&"\u4fee\u6539\u6210\u529f"!==V&&"\u522a\u9664\u5931\u6557"!==V?r.a.alertMsg:r.a.noAlertMsg,children:[Object(h.jsx)("img",{src:f.a,alt:"alert"}),V]}),Object(h.jsxs)("div",{className:"\u4fee\u6539\u6210\u529f"===V?r.a.successMsg:r.a.noAlertMsg,children:[Object(h.jsx)("img",{src:O.a,alt:"success"}),V]}),Object(h.jsxs)("div",{className:"\u4fee\u6539\u5931\u6557"===V||"\u522a\u9664\u5931\u6557"===V?r.a.failMsg:r.a.noAlertMsg,children:[Object(h.jsx)("img",{src:f.a,alt:"fail"}),V]})]})]})};e.default=c.a.memo(p)}}]);
//# sourceMappingURL=5.c0cd980b.chunk.js.map