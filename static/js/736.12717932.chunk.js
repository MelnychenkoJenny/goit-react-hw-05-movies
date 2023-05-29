"use strict";(self.webpackChunkgoit_react=self.webpackChunkgoit_react||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i,u=e(4165),o=e(5861),s=e(9439),p=e(9760),f=e(2791),d=e(7689),l=e(4390),h=e(168),x=e(6444),v=x.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 10px;\n  row-gap: 20px;\n  text-align: center;\n"]))),m=x.ZP.li(a||(a=(0,h.Z)(["\n  flex-basis: calc((100% - 10px) / 2);\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: ",";\n\n  @media screen and (min-width: 400px) {\n    flex-basis: calc((100% - 20px) / 3);\n  }\n  @media screen and (min-width: 640px) {\n    flex-basis: calc((100% - 20px) / 5);\n  }\n  @media screen and (min-width: 1270px) {\n    flex-basis: calc((100% - 30px) / 7);\n  }\n"])),(function(n){return n.theme.colors.shadow})),w=x.ZP.div(c||(c=(0,h.Z)(["\n  padding: 5px;\n"]))),Z=x.ZP.p(i||(i=(0,h.Z)(["\n  text-align: center;\n"]))),g=e(184),b=function(){var n=(0,d.UO)().movieId,t=(0,f.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(null),i=(0,s.Z)(c,2),h=i[0],x=i[1];return(0,f.useEffect)((function(){var t=function(){var n=(0,o.Z)((0,u.Z)().mark((function n(t){var e,r;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.uV)(t);case 3:e=n.sent,r=e.cast,a(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();t(n)}),[n]),(0,g.jsxs)(g.Fragment,{children:[r.length?(0,g.jsx)(v,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,g.jsxs)(m,{children:[e?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:"".concat(r),width:"200"}):(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg",alt:"Not found",width:"200"}),(0,g.jsxs)(w,{children:[(0,g.jsx)("h3",{children:r}),a?(0,g.jsxs)("p",{children:["Character: ",a]}):(0,g.jsx)("p",{children:"Character: Unknown"})]})]},t)}))}):(0,g.jsx)(Z,{children:"Unfortunately, we don't have cast information for this movie."}),h&&(0,g.jsx)(p.j,{error:h})]})}},9760:function(n,t,e){e.d(t,{j:function(){return r}});e(184);var r=function(n){n.error}},4390:function(n,t,e){e.d(t,{Ai:function(){return p},Hx:function(){return d},Y5:function(){return s},uV:function(){return f},wr:function(){return o}});var r=e(4165),a=e(5861),c=e(1243),i="ef95397de100ad4893946e66bda31619",u="https://api.themoviedb.org/3/",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"trending/movie/").concat("week","?api_key=").concat(i,"&page=1"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.12717932.chunk.js.map