(function(e){function t(t){for(var a,u,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b2cf8":"013bf184","chunk-2d0d3e58":"29518f17","chunk-2d0d61fe":"6ffb7228","chunk-2d0e5ed7":"67377617","chunk-2d208bfd":"1c4c2f91","chunk-2d2101d2":"811c2390","chunk-2d21a3d2":"76b3a2bc","chunk-2d226caa":"d7c5123b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Aarna-Hr-Website/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3cc0":function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e._self._c;return t(e.layout,{tag:"component",staticClass:"app-container",attrs:{id:"app"}},[t("router-view")],1)},r=[];n("bc49");const u=new a["a"],c=function(e,t){u.$on(e,t)},i="OPEN_CHAT";var l={name:"App",computed:{layout(){return this.$route.meta.layout}},data(){return{chat:!1}},created(){c(i,()=>{this.$data.chat=!this.$data.chat})}},d=l,s=n("2877"),p=Object(s["a"])(d,o,r,!1,null,null,null),f=p.exports,m=n("8c4f");(new Date).getTime();const h={HOME:"/",ABOUT_US:"/about-us",TRAINING:"/training",SOLUTIONS:"/solutions",CLIENTELE:"/clientele",CONTACT_US:"/contact-us"},b={HOME:"Home"},y={HEADERLAYOUT:"HeaderLayout",EMPTY:"EmptyLayout",BANNER:"BannerLayout"};a["a"].use(m["a"]);const v=[{path:h.HOME,name:b.HOME,component:()=>n.e("chunk-2d21a3d2").then(n.bind(null,"bb51")),meta:{title:"Home Page",layout:y.EMPTY,metaTags:[{name:"description",content:"Content"}]}},{path:h.ABOUT_US,name:"About Us",component:()=>n.e("chunk-2d0b2cf8").then(n.bind(null,"2664")),meta:{title:"About Us - Aarna HR",layout:y.EMPTY}},{path:h.TRAINING,name:"Training",component:()=>n.e("chunk-2d2101d2").then(n.bind(null,"b707")),meta:{title:"Training - Aarna HR",layout:y.EMPTY}},{path:h.SOLUTIONS,name:"Solutions",component:()=>n.e("chunk-2d0d61fe").then(n.bind(null,"70e4")),meta:{title:"Solutions - Aarna HR",layout:y.EMPTY}},{path:h.CLIENTELE,name:"Clientele",component:()=>n.e("chunk-2d0e5ed7").then(n.bind(null,"9725")),meta:{title:"Clientele - Aarna HR",layout:y.EMPTY}},{path:h.CONTACT_US,name:"ContactUs",component:()=>n.e("chunk-2d226caa").then(n.bind(null,"e9bb")),meta:{title:"Contact - Aarna HR",layout:y.EMPTY}},{path:"*",name:"NotFound",component:()=>n.e("chunk-2d208bfd").then(n.bind(null,"a5b5")),meta:{layout:y.EMPTY,title:"Page Not Found | Aarna HR"}}],T=new m["a"]({mode:"history",base:h.HOME,fallback:!0,routes:v,scrollBehavior(e,t,n){return{x:0,y:0}}});var E=T;T.beforeEach((e,t,n)=>{let a=!1;const o=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),r=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);t.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!r)return n();r.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),a?n({path:"NotFound"}):n()});var g=n("1881"),O=n.n(g),A=n("b25f"),k=n.n(A),P=n("3cc0"),w=n.n(P);a["a"].component("EmptyLayout",()=>n.e("chunk-2d0d3e58").then(n.bind(null,"5f5f")));n("6912");a["a"].use(k.a),a["a"].use(O.a),a["a"].use(w.a),a["a"].config.productionTip=!1,new a["a"]({router:E,render:e=>e(f)}).$mount("#app")},6912:function(e,t){},bc49:function(e,t){}});
//# sourceMappingURL=app.ce18dfc1.js.map