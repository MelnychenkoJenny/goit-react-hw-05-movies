"use strict";(self.webpackChunkgoit_react=self.webpackChunkgoit_react||[]).push([[766],{9760:function(t,e,r){r.d(e,{j:function(){return n}});r(184);var n=function(t){t.error}},3431:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(7689),a=r(1087),c=r(184),i=function(t){var e=t.movie,r=e.title,i=e.poster_path,o=e.id,u=(0,n.TH)(),s=u.pathname.includes("/movies")?"":"movies/",l=i?"https://image.tmdb.org/t/p/w400/".concat(i):"https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg";return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"".concat(s).concat(o),state:{from:u},children:[(0,c.jsx)("img",{src:l,width:"80",alt:r}),(0,c.jsx)("h3",{children:r})]})})},o=function(t){var e=t.movies;return(0,c.jsx)("ul",{children:e.map((function(t){return(0,c.jsx)(i,{movie:t},t.id)}))})}},766:function(t,e,r){r.r(e),r.d(e,{default:function(){return k}});var n=r(4165),a=r(3433),c=r(5861),i=r(9439),o=r(9760),u=r(1959),s=r(3431),l=r(2791),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=l.createContext&&l.createContext(f),v=function(){return v=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},v.apply(this,arguments)},h=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function m(t){return t&&t.map((function(t,e){return l.createElement(t.tag,v({key:e},t.attr),m(t.child))}))}function d(t){return function(e){return l.createElement(g,v({attr:v({},t.attr)},e),m(t.child))}}function g(t){var e=function(e){var r,n=t.attr,a=t.size,c=t.title,i=h(t,["attr","size","title"]),o=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),l.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,i,{className:r,style:v(v({color:t.color||e.color},e.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return void 0!==p?l.createElement(p.Consumer,null,(function(t){return e(t)})):e(f)}function x(t){return d({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(t)}var y=r(1087),w=r(7596),Z=r(184),b=function(t){var e,r=t.onSubmit,n=(0,y.lr)(),a=(0,i.Z)(n,1)[0],c=(0,l.useState)(null!==(e=a.get("film"))&&void 0!==e?e:""),o=(0,i.Z)(c,2),u=o[0],s=o[1];return(0,Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==u.trim()?(r(u.trim()),s("")):w.Am.error("The search field cannot be empty. Please enter a search query.")},children:[(0,Z.jsx)("input",{type:"text",value:u,onChange:function(t){s(t.target.value)}}),(0,Z.jsx)("button",{type:"submit",children:(0,Z.jsx)(x,{})})]})},j=r(4390),k=function(){var t,e=(0,l.useState)([]),r=(0,i.Z)(e,2),f=r[0],p=r[1],v=(0,l.useState)(!1),h=(0,i.Z)(v,2),m=h[0],d=h[1],g=(0,l.useState)(null),x=(0,i.Z)(g,2),k=x[0],O=x[1],S=(0,y.lr)(),C=(0,i.Z)(S,2),E=C[0],_=C[1],P=null!==(t=E.get("film"))&&void 0!==t?t:"";(0,l.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,n.Z)().mark((function t(e){var r,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,j.Ai)(e);case 4:r=t.sent,0===(c=r.results).length&&(w.Am.error('Sorry, there are no movies matching your query: "'.concat(P,'". Please try to search something else.')),p([]),_({})),p((0,a.Z)(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),O(t.t0.message);case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}();P&&t(P)}),[P,_]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{children:"Search movie"}),(0,Z.jsx)(b,{onSubmit:function(t){_({film:t})}}),(0,Z.jsx)(s.Z,{movies:f}),m&&(0,Z.jsx)(u.Z,{}),k&&(0,Z.jsx)(o.j,{error:k})]})}},4390:function(t,e,r){r.d(e,{Ai:function(){return l},Hx:function(){return p},Y5:function(){return s},uV:function(){return f},wr:function(){return u}});var n=r(4165),a=r(5861),c=r(1243),i="ef95397de100ad4893946e66bda31619",o="https://api.themoviedb.org/",u=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/trending/movie/").concat("week","?api_key=").concat(i,"&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(i));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"/3/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=766.a308b08f.chunk.js.map