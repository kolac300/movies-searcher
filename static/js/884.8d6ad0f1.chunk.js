"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{197:function(e,t,r){r.d(t,{I5:function(){return u},Jh:function(){return d},R8:function(){return s},_r:function(){return p},s_:function(){return o}});var n=r(5861),a=r(7757),c=r.n(a),i=r(1912),u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2884:function(e,t,r){r.r(t);var n=r(9439),a=r(2791),c=r(197),i=r(7689),u=r(1087),s=r(9014),o=r(184);t.default=function(){var e,t,r=(0,a.useState)(),d=(0,n.Z)(r,2),p=d[0],f=d[1],h=(0,a.useState)(),v=(0,n.Z)(h,2),l=v[0],g=v[1],b=(0,a.useState)(!1),m=(0,n.Z)(b,2),x=m[0],w=m[1],k=(0,i.UO)().id;(0,a.useEffect)((function(){w(!0),(0,c.s_)(k).then((function(e){f(e.overview),g(e.poster_path)})).catch((function(e){return s.Am.error("something is wrong, try again")})).finally((function(){return w(!1)}))}),[k]);var j=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,o.jsxs)("div",{children:[" ",x?(0,o.jsx)("div",{children:"Loading..."}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.OL,{to:j,children:"Go back"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300".concat(l||"/uqqgAdPfi1TmG3tfKfhsf20fHE6.jpg"),alt:"img"}),(0,o.jsx)("h1",{children:"overwiev"}),(0,o.jsx)("p",{children:p})]}),(0,o.jsx)("div",{children:(0,o.jsx)(u.OL,{to:"cast",state:{from:j},children:"cast"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.OL,{to:"reviews",state:{from:j},children:"reviews"})}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(i.j3,{})})]})]})}}}]);
//# sourceMappingURL=884.8d6ad0f1.chunk.js.map