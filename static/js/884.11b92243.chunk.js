"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{2884:function(e,r,n){n.r(r);var t=n(5861),a=n(885),c=n(7757),s=n.n(c),u=n(7689),i=n(1087),o=n(2791),l=n(409),p=n(2606),f=n(2212),v=n(804),h=n(184);r.default=function(){var e,r,n,c=(0,o.useState)([]),d=(0,a.Z)(c,2),x=d[0],w=d[1],g=(0,u.UO)().movieId,m=(0,u.TH)(),b=null===(e=m.state)||void 0===e?void 0:e.from,k=null!==(r=null===(n=m.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/movies";(0,o.useEffect)((function(){var e=new AbortController,r=function(){var r=(0,t.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.TP)(g,e.signal);case 3:n=r.sent,console.log(n),w(n),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){e.abort()}}),[g]);return(0,h.jsxs)("main",{children:[(0,h.jsx)(v.gM,{children:(0,h.jsx)(i.rU,{to:b,children:"Go back"})}),(0,h.jsxs)(p.PO,{children:[(0,h.jsx)("img",{src:x.poster_path?(0,f.$o)(300,x.poster_path):(0,f.MX)(300,500),alt:""}),(0,h.jsxs)(p.dk,{children:[(0,h.jsx)("h2",{children:x.title}),(0,h.jsxs)("p",{children:["User score: ",Math.round(10*x.vote_average),"%"]}),(0,h.jsxs)("section",{children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview})]}),(0,h.jsxs)("section",{children:[(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:function(){var e,r;return null!==(e=null===(r=x.genres)||void 0===r?void 0:r.map((function(e){return e.name})).join(", "))&&void 0!==e?e:null}()})]})]})]}),(0,h.jsxs)(p.Ff,{children:[(0,h.jsx)("h4",{children:"Additional information"}),(0,h.jsxs)(v.gM,{children:[(0,h.jsx)(v.w2,{to:"cast",state:{from:k},children:"Cast"}),(0,h.jsx)(v.w2,{to:"Reviews",state:{from:k},children:"Reviews"})]})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(u.j3,{})})]})}},409:function(e,r,n){n.d(r,{Df:function(){return i},TP:function(){return l},tx:function(){return f},z1:function(){return o},zv:function(){return p}});var t=n(5861),a=n(7757),c=n.n(a),s=n(1044);s.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="ce9ff11ff2b61f366eb027812f050c01",i=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/trending/movie/day?api_key=".concat(u),{signal:r});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),!s.ZP.isCancel){e.next=11;break}return e.abrupt("return",[]);case 11:throw new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r,n,t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(r,"&page=").concat(n,"&include_adult=false"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!s.ZP.isCancel){e.next=11;break}return e.abrupt("return",[]);case 11:throw new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r,n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/movie/".concat(r,"?api_key=").concat(u,"&language=en-US"),{signal:n});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:if(e.prev=7,e.t0=e.catch(0),!s.ZP.isCancel){e.next=11;break}return e.abrupt("return",[]);case 11:throw new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r,n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"),{signal:n});case 3:return t=e.sent,console.log(t.data.cast),e.abrupt("return",t.data.cast);case 8:if(e.prev=8,e.t0=e.catch(0),!s.ZP.isCancel){e.next=12;break}return e.abrupt("return",[]);case 12:throw new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r,n,t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("/movie/".concat(r,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(n),{signal:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!s.ZP.isCancel){e.next=11;break}return e.abrupt("return",[]);case 11:throw new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.11b92243.chunk.js.map