(this["webpackJsonppwa-react-init"]=this["webpackJsonppwa-react-init"]||[]).push([[0],{16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),i=t.n(r),c=t(7),o=t.n(c),s=(t(16),t(2)),u=t(9),l=function(e){var n=e.setCategories,t=Object(r.useState)(""),i=Object(s.a)(t,2),c=i[0],o=i[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(n((function(e){return[c].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})},d=t(10),f=t(6),h=t.n(f),j=t(8),p=function(){var e=Object(j.a)(h.a.mark((function e(n){var t,a,r,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(n),"&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,i=r.data,c=i.map((function(e){var n;return{id:e.id,title:e.title,url:null===(n=e.images)||void 0===n?void 0:n.downsized_medium.url}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(e){var n=e.title,t=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:t,alt:n}),Object(a.jsxs)("p",{children:[" ",n," "]})]})},g=function(e){var n=e.category,t=function(e){var n=Object(r.useState)({data:[],loading:!0}),t=Object(s.a)(n,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){p(e).then((function(e){i({data:e,loading:!1})}))}),[e]),a}(n),i=t.data,c=t.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",n," "]}),c&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(a.jsx)(v,Object(d.a)({},e),e.id)}))})]})},b=function(){var e=Object(r.useState)(["One Punch"]),n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(l,{setCategories:i}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:t.map((function(e){return Object(a.jsx)(g,{category:e},e)}))})]})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(b,{}),","]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(n,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.ff9180f7.chunk.js.map