"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{2718:function(r,e,n){n.r(e),n.d(e,{default:function(){return d}});var t,a=n(5861),c=n(885),u=n(7757),s=n.n(u),o=n(168),i=n(6444).ZP.li(t||(t=(0,o.Z)(["\n  box-shadow: 0px 0.1px 5px 1px #0b2336;\n  padding: 20px;\n  margin: 10px auto;\n"]))),p=n(184),f=function(r){var e=r.reviews;return(0,p.jsx)("ul",{children:e.map((function(r){var e=r.id,n=r.author,t=r.content;return(0,p.jsxs)(i,{children:[(0,p.jsx)("h5",{children:n}),(0,p.jsx)("p",{children:t})]},e)}))})},l=n(2791),v=n(7689),h=n(409),d=function(){var r=(0,l.useState)([]),e=(0,c.Z)(r,2),n=e[0],t=e[1],u=(0,v.UO)().movieId;return(0,l.useEffect)((function(){var r=new AbortController,e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.tx)(u,"1",r.signal);case 3:n=e.sent,console.log(n.results),n.results&&t(n.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){r.abort()}}),[u]),(0,p.jsx)(p.Fragment,{children:0!==n.length?(0,p.jsx)(f,{reviews:n}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})}},409:function(r,e,n){n.d(e,{Df:function(){return o},TP:function(){return p},tx:function(){return l},z1:function(){return i},zv:function(){return f}});var t=n(5861),a=n(7757),c=n.n(a),u=n(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="ce9ff11ff2b61f366eb027812f050c01",o=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.ZP.get("/trending/movie/day?api_key=".concat(s),{signal:e});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 7:if(r.prev=7,r.t0=r.catch(0),!u.ZP.isCancel){r.next=11;break}return r.abrupt("return",[]);case 11:throw new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(c().mark((function r(e,n,t){var a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.ZP.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"),{signal:t});case 3:return a=r.sent,r.abrupt("return",a.data);case 7:if(r.prev=7,r.t0=r.catch(0),!u.ZP.isCancel){r.next=11;break}return r.abrupt("return",[]);case 11:throw new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,n,t){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e,n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.ZP.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),{signal:n});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:if(r.prev=7,r.t0=r.catch(0),!u.ZP.isCancel){r.next=11;break}return r.abrupt("return",[]);case 11:throw new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e,n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),{signal:n});case 3:return t=r.sent,console.log(t.data.cast),r.abrupt("return",t.data.cast);case 8:if(r.prev=8,r.t0=r.catch(0),!u.ZP.isCancel){r.next=12;break}return r.abrupt("return",[]);case 12:throw new Error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e,n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(c().mark((function r(e,n,t){var a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=").concat(n),{signal:t});case 3:return a=r.sent,r.abrupt("return",a.data);case 7:if(r.prev=7,r.t0=r.catch(0),!u.ZP.isCancel){r.next=11;break}return r.abrupt("return",[]);case 11:throw new Error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,n,t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=718.0fe9ef7b.chunk.js.map