"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{4672:function(n,r,e){e.d(r,{e:function(){return l}});var t,a=e(2606),o=e(2212),u=e(7689),c=e(168),i=e(1087),s=(0,e(6444).ZP)(i.OL)(t||(t=(0,c.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),p=e(184),l=function(n){var r=n.movies,e=(0,u.TH)();return(0,p.jsx)(a.rj,{children:r.map((function(n){var r=n.id,t=n.title,u=n.poster_path;return(0,p.jsx)(a.P4,{children:(0,p.jsxs)(s,{to:"/movies/".concat(r),state:{from:e},children:[(0,p.jsx)("img",{src:u?(0,o.$o)(200,u):(0,o.MX)(200,300),alt:""}),(0,p.jsx)("h2",{children:t})]})},r)}))})}},5244:function(n,r,e){e.r(r),e.d(r,{default:function(){return C}});var t,a,o,u,c=e(5861),i=e(885),s=e(7757),p=e.n(s),l=e(1413),f=e(168),h=e(6444),d=h.ZP.form(t||(t=(0,f.Z)(["\n  width: 350px;\n  margin: 20px auto;\n\n  position: relative;\n"]))),v=h.ZP.button(a||(a=(0,f.Z)(["\n  width: 48px;\n  height: 48px;\n\n  font-size: 20px;\n  font-weight: bold;\n  color: #2a58b1;\n  position: absolute;\n\n  top: 0;\n  right: 0;\n"]))),x=h.ZP.input(o||(o=(0,f.Z)(["\n  width: 100%;\n  height: 28px;\n\n  border-style: none;\n  border-radius: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  background-color: transparent;\n\n  padding: 10px;\n  font-size: 18px;\n  outline: none;\n  letter-spacing: 0.06em;\n  font-weight: 200;\n\n  transition: all 0.5s ease-in-out;\n\n  cursor: pointer;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=h.ZP.p(u||(u=(0,f.Z)(["\n  color: red;\n  margin: 0;\n  text-align: center;\n"]))),m=e(2134),b=e(887),w=e(2797),Z=e(4695),y=e(184),k=w.Ry().shape({query:w.Z_().max(30,"Try making a shorter query").lowercase().required("You didn't enter anything!")}).required(),P=function(n){var r,e=n.onSubmitForm,t=(0,b.cI)({resolver:(0,Z.X)(k)}),a=t.register,o=t.handleSubmit,u=t.formState.errors;return(0,y.jsxs)(d,{onSubmit:o((function(n){return e(n)})),children:[(0,y.jsx)(x,(0,l.Z)((0,l.Z)({type:"text"},a("query")),{},{placeholder:"Search movies"})),(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(m.RB5,{size:"25px"})}),(0,y.jsx)(g,{children:null===(r=u.query)||void 0===r?void 0:r.message})]})},j=e(2791),S=e(409),_=e(1087),q=e(4672),C=function(){var n,r=(0,j.useState)([]),e=(0,i.Z)(r,2),t=e[0],a=e[1],o=(0,_.lr)(),u=(0,i.Z)(o,2),s=u[0],l=u[1],f=null!==(n=s.get("query"))&&void 0!==n?n:"";(0,j.useEffect)((function(){if(f){var n=new AbortController,r=function(){var r=(0,c.Z)(p().mark((function r(){var e,t;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,S.z1)(f,"1",n.signal);case 3:t=r.sent,0!==(null===(e=t.results)||void 0===e?void 0:e.length)?a(t.results):alert("Sorry, there are no films with this word"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){n.abort()}}}),[f]);return(0,y.jsxs)("section",{children:[(0,y.jsx)(P,{onSubmitForm:function(n){var r=n.query;l(""!==r?{query:r}:{})}}),(null===t||void 0===t?void 0:t.length)>0&&(0,y.jsx)(q.e,{movies:t})]})}},409:function(n,r,e){e.d(r,{Df:function(){return i},TP:function(){return p},tx:function(){return f},z1:function(){return s},zv:function(){return l}});var t=e(5861),a=e(7757),o=e.n(a),u=e(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var c="ce9ff11ff2b61f366eb027812f050c01",i=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("/trending/movie/day?api_key=".concat(c),{signal:r});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:if(n.prev=7,n.t0=n.catch(0),!u.ZP.isCancel){n.next=11;break}return n.abrupt("return",[]);case 11:throw new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(r,e,t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(r,"&page=").concat(e,"&include_adult=false"),{signal:t});case 3:return a=n.sent,n.abrupt("return",a.data);case 7:if(n.prev=7,n.t0=n.catch(0),!u.ZP.isCancel){n.next=11;break}return n.abrupt("return",[]);case 11:throw new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r,e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("/movie/".concat(r,"?api_key=").concat(c,"&language=en-US"),{signal:e});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:if(n.prev=7,n.t0=n.catch(0),!u.ZP.isCancel){n.next=11;break}return n.abrupt("return",[]);case 11:throw new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(r,e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("/movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"),{signal:e});case 3:return t=n.sent,console.log(t.data.cast),n.abrupt("return",t.data.cast);case 8:if(n.prev=8,n.t0=n.catch(0),!u.ZP.isCancel){n.next=12;break}return n.abrupt("return",[]);case 12:throw new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(r,e,t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("/movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US&page=").concat(e),{signal:t});case 3:return a=n.sent,n.abrupt("return",a.data);case 7:if(n.prev=7,n.t0=n.catch(0),!u.ZP.isCancel){n.next=11;break}return n.abrupt("return",[]);case 11:throw new Error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r,e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=244.3c769aa6.chunk.js.map