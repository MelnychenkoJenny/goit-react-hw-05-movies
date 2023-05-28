"use strict";(self.webpackChunkgoit_react=self.webpackChunkgoit_react||[]).push([[766],{9760:function(t,e,n){n.d(e,{j:function(){return r}});n(184);var r=function(t){t.error}},2399:function(t,e,n){n.d(e,{Z:function(){return m}});var r,a,c=n(7689),i=n(1087),o=n(168),u=n(6444),s=u.ZP.li(r||(r=(0,o.Z)(["\nmargin-top: 20px;\nmargin-left: 20px;\n@media screen and (min-width: 760px) {\n    flex-basis: calc(50% - 32px);}\n    @media screen and (min-width: 1280px) {\n        flex-basis: calc(33.3333% - 16px);\n    margin-top: 32px;\n    margin-left: 16px;}\n"]))),l=n(184),p=function(t){var e=t.movie,n=e.title,r=e.poster_path,a=e.id,o=(0,c.TH)(),u=o.pathname.includes("/movies")?"":"movies/",p=r?"https://image.tmdb.org/t/p/w400/".concat(r):"https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg";return(0,l.jsx)(s,{children:(0,l.jsxs)(i.rU,{to:"".concat(u).concat(a),state:{from:o},children:[(0,l.jsx)("img",{src:p,width:"395",alt:n}),(0,l.jsx)("h3",{children:n})]})})},f=u.ZP.ul(a||(a=(0,o.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\n    justify-content: center;\n    margin-top: -20px;\n    margin-left: -20px;\n    @media screen and (min-width: 760px) {\n        margin-top: -32px;\n    margin-left: -32px;}\n\n        @media screen and (min-width: 1200px) {\n            margin-top: -32px;\n            margin-left: -16px;}\n    \n"]))),m=function(t){var e=t.movies;return(0,l.jsx)(f,{children:e.map((function(t){return(0,l.jsx)(p,{movie:t},t.id)}))})}},766:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r=n(4165),a=n(3433),c=n(5861),i=n(9439),o=n(9760),u=n(1959),s=n(2399),l=n(2791),p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(p),m=function(){return m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},m.apply(this,arguments)},d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};function h(t){return t&&t.map((function(t,e){return l.createElement(t.tag,m({key:e},t.attr),h(t.child))}))}function v(t){return function(e){return l.createElement(x,m({attr:m({},t.attr)},e),h(t.child))}}function x(t){var e=function(e){var n,r=t.attr,a=t.size,c=t.title,i=d(t,["attr","size","title"]),o=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),l.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,i,{className:n,style:m(m({color:t.color||e.color},e.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return void 0!==f?l.createElement(f.Consumer,null,(function(t){return e(t)})):e(p)}function g(t){return v({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(t)}var y=n(1087),w=n(7596),Z=n(184),b=function(t){var e,n=t.onSubmit,r=(0,y.lr)(),a=(0,i.Z)(r,1)[0],c=(0,l.useState)(null!==(e=a.get("film"))&&void 0!==e?e:""),o=(0,i.Z)(c,2),u=o[0],s=o[1];return(0,Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==u.trim()?(n(u.trim()),s("")):w.Am.error("The search field cannot be empty. Please enter a search query.")},children:[(0,Z.jsx)("input",{type:"text",value:u,onChange:function(t){s(t.target.value)}}),(0,Z.jsx)("button",{type:"submit",children:(0,Z.jsx)(g,{})})]})},j=n(4390),k=function(){var t,e=(0,l.useState)([]),n=(0,i.Z)(e,2),p=n[0],f=n[1],m=(0,l.useState)(!1),d=(0,i.Z)(m,2),h=d[0],v=d[1],x=(0,l.useState)(null),g=(0,i.Z)(x,2),k=g[0],O=g[1],S=(0,y.lr)(),C=(0,i.Z)(S,2),E=C[0],P=C[1],_=null!==(t=E.get("film"))&&void 0!==t?t:"";(0,l.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,(0,j.Ai)(e);case 4:n=t.sent,0===(c=n.results).length&&(w.Am.error('Sorry, there are no movies matching your query: "'.concat(_,'". Please try to search something else.')),f([]),P({})),f((0,a.Z)(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),O(t.t0.message);case 13:return t.prev=13,v(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}();_&&t(_)}),[_,P]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{children:"Search movie"}),(0,Z.jsx)(b,{onSubmit:function(t){P({film:t})}}),(0,Z.jsx)(s.Z,{movies:p}),h&&(0,Z.jsx)(u.Z,{}),k&&(0,Z.jsx)(o.j,{error:k})]})}},4390:function(t,e,n){n.d(e,{Ai:function(){return l},Hx:function(){return f},Y5:function(){return s},uV:function(){return p},wr:function(){return u}});var r=n(4165),a=n(5861),c=n(1243),i="ef95397de100ad4893946e66bda31619",o="https://api.themoviedb.org/",u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/trending/movie/").concat("week","?api_key=").concat(i,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"/3/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=766.ae465e58.chunk.js.map