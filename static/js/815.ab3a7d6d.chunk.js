"use strict";(self.webpackChunkgoit_react=self.webpackChunkgoit_react||[]).push([[815],{9760:function(n,t,e){e.d(t,{j:function(){return r}});e(184);var r=function(n){n.error}},2399:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,c,i=e(7689),u=e(1087),o=e(168),s=e(6444),p=s.ZP.li(r||(r=(0,o.Z)(["\n  flex-basis: calc((100% - 10px) / 2);\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: ",";\n  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    scale: 1.06;\n  }\n  @media screen and (min-width: 760px) {\n    flex-basis: calc((100% - 20px) / 4);\n  }\n  @media screen and (min-width: 1300px) {\n    flex-basis: calc((100% - 30px) / 5);\n  }\n"])),(function(n){return n.theme.colors.shadow})),f=s.ZP.h3(a||(a=(0,o.Z)(["\n  padding: 10px;\n  font-size: 12px;\n"]))),d=e(184),x=function(n){var t=n.movie,e=t.title,r=t.poster_path,a=t.id,c=(0,i.TH)(),o=c.pathname.includes("/movies")?"":"movies/",s=r?"https://image.tmdb.org/t/p/w400/".concat(r):"https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg";return(0,d.jsx)(p,{children:(0,d.jsxs)(u.rU,{to:"".concat(o).concat(a),state:{from:c},children:[(0,d.jsx)("img",{src:s,width:"395",alt:e}),(0,d.jsx)(f,{children:e})]})})},h=s.ZP.ul(c||(c=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 10px;\n  row-gap: 20px;\n  text-align: center;\n"]))),m=function(n){var t=n.movies;return(0,d.jsx)(h,{children:t.map((function(n){return(0,d.jsx)(x,{movie:n},n.id)}))})}},5815:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(4165),i=e(3433),u=e(5861),o=e(9439),s=e(9760),p=e(1959),f=e(2399),d=e(2791),x=e(4390),h=e(168),m=e(6444),l=m.ZP.h1(r||(r=(0,h.Z)(["\n  font-size: 26px;\n  margin-bottom: 35px;\n  text-align: center;\n"]))),v=m.ZP.div(a||(a=(0,h.Z)(["\n  max-width: 345px;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 760px) {\n    max-width: 760px;\n  }\n\n  @media screen and (min-width: 1300px) {\n    max-width: 1300px;\n  }\n"]))),Z=e(184),w=function(){var n=(0,d.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!1),h=(0,o.Z)(a,2),m=h[0],w=h[1],g=(0,d.useState)(null),b=(0,o.Z)(g,2),k=b[0],j=b[1];return(0,d.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,c.Z)().mark((function n(){var t,e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,(0,x.wr)();case 4:t=n.sent,e=t.results,r((0,i.Z)(e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),j(n.t0.message);case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l,{children:"The most popular movies today"}),(0,Z.jsx)(v,{children:(0,Z.jsx)(f.Z,{movies:e})}),m&&(0,Z.jsx)(p.Z,{}),k&&(0,Z.jsx)(s.j,{error:k})]})}},4390:function(n,t,e){e.d(t,{Ai:function(){return p},Hx:function(){return d},Y5:function(){return s},uV:function(){return f},wr:function(){return o}});var r=e(4165),a=e(5861),c=e(1243),i="ef95397de100ad4893946e66bda31619",u="https://api.themoviedb.org/3/",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"trending/movie/").concat("week","?api_key=").concat(i,"&page=1"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=815.ab3a7d6d.chunk.js.map