!function(e){function n(n){for(var t,o,i=n[0],c=n[1],a=n[2],d=n[3]||[],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(H,o)&&H[o]&&u.push(H[o][0]),H[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(C&&C(n),I.push.apply(I,d);u.length;)u.shift()();return M.push.apply(M,a||[]),r()}function r(){for(var e,n=0;n<M.length;n++){for(var r=M[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==H[i]&&(t=!1)}t&&(M.splice(n--,1),e=S(S.s=r[0]))}return 0===M.length&&(I.forEach(function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",S.nc&&n.setAttribute("nonce",S.nc),n.rel="prefetch",n.as="script",n.href=A(e),document.head.appendChild(n)}}),I.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--b&&0===g&&D()}(e,n),t&&t(e,n)};var o,i=!0,c="6fe6214da1f89f76cc42",a=1e4,d={},s=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:d[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,y,b=0,g=0,w={},O={},x={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=a,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},x=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},H)E(r);return"prepare"===f&&0===g&&0===b&&D(),n});var n}function E(e){x[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function D(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(j(r));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,a;function u(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,a=o.chain;if((i=k[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],u=k[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),l(r[s],[c])):(delete r[s],n.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;a=j(w);var _=!1,E=!1,D=!1,P="";switch((O=v[w]?u(a):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(_=new Error("Aborted because "+a+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(a in b[a]=v[a],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,a)&&(p[a]||(p[a]=[]),l(p[a],O.outdatedDependencies[a]));D&&(l(m,[O.moduleId]),b[a]=g)}var M,I=[];for(t=0;t<m.length;t++)a=m[t],k[a]&&k[a].hot._selfAccepted&&b[a]!==g&&I.push({module:a,errorHandler:k[a].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete H[e]}(e)});for(var A,q,z=m.slice();z.length>0;)if(a=z.pop(),i=k[a]){var U={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(r=C[o])(U);for(d[a]=U,i.hot.active=!1,delete k[a],delete p[a],o=0;o<i.children.length;o++){var R=k[i.children[o]];R&&((M=R.parents.indexOf(a))>=0&&R.parents.splice(M,1))}}for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(i=k[a]))for(q=p[a],o=0;o<q.length;o++)A=q[o],(M=i.children.indexOf(A))>=0&&i.children.splice(M,1);for(a in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);var T=null;for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(i=k[a])){q=p[a];var L=[];for(t=0;t<q.length;t++)if(A=q[t],r=i.hot._acceptedDependencies[A]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(q)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:a,dependencyId:q[t],error:N}),n.ignoreErrored||T||(T=N)}}}for(t=0;t<I.length;t++){var J=I[t];a=J.module,s=[a];try{S(a)}catch(N){if("function"===typeof J.errorHandler)try{J.errorHandler(N)}catch(X){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:X,originalError:N}),n.ignoreErrored||T||(T=X),T||(T=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:a,error:N}),n.ignoreErrored||T||(T=N)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise(function(e){e(m)}))}var k={},H={1:0},M=[],I=[];function A(e){return S.p+"static/js/"+({2:"src-brand-manage-index"}[e]||e)+"."+{2:"cafc9c7c"}[e]+".js"}function S(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=s,s=[],u),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return S;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),g++,S.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||E(e),0===g&&0===b&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.e=function(e){var n=[],r=H[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=H[e]=[n,t]});n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.src=A(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(a);var r=H[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,r[1](c)}H[e]=void 0}};var a=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},S.m=e,S.c=k,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="/",S.oe=function(e){throw console.error(e),e},S.h=function(){return c};var q=window.webpackJsonp=window.webpackJsonp||[],z=q.push.bind(q);q.push=n,q=q.slice();for(var U=0;U<q.length;U++)n(q[U]);var C=z,R=(M.push([0,0]),r());n([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Item Admin Lib","description":"My awesome app using docz","menu":[],"version":"0.0.1","repository":false,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":true,"theme":"/Users/mengro/workspace/\u57fa\u7840\u8bbe\u65bd/item-admin-lib/node_modules/docz-theme-umi/es/index.js","plugins":[{},{},{},{},{}]},"props":[],"entries":[{"key":"src/brandManage/index.mdx","value":{"id":"b0c3a8e7c93036c0d9b44378ce46cf4c","filepath":"src/brandManage/index.mdx","link":"","slug":"src-brand-manage-index","route":"/src-brand-manage-index","name":"Index","menu":"","headings":[]}}]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),i=r("react-dom"),c=r.n(i),a=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-umi/es/index.js"),s={"src/brandManage/index.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/brandManage/index.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return o.a.createElement(d.a,{linkComponent:a.b,db:u},o.a.createElement(a.c,{imports:s}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),c.a.render(o.a.createElement(e,null),v,m)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});