!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}({6:function(e,t,o){var n,r;/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */void 0===(r="function"==typeof(n=function(){"use strict";var e={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},t=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),o=document.head||document.getElementsByTagName("head")[0];function n(t){return new RegExp("^(https?:)?//(?:"+e.players.join("|")+").*$","i").test(t)}function r(e){if((n(e.src)||n(e.data))&&!e.getAttribute("data-fluidvids")){var t,o,r=document.createElement("div");e.parentNode.insertBefore(r,e),e.className+=(e.className?" ":"")+"fluidvids-item",e.setAttribute("data-fluidvids","loaded"),r.className+="fluidvids",r.style.paddingTop=(t=e.height,o=e.width,parseInt(t,10)/parseInt(o,10)*100+"%"),r.appendChild(e)}}return e.render=function(){for(var t=document.querySelectorAll(e.selector.join()),o=t.length;o--;)r(t[o])},e.init=function(n){for(var r in n)e[r]=n[r];var i;e.render(),(i=document.createElement("div")).innerHTML="<p>x</p><style>"+t+"</style>",o.appendChild(i.childNodes[1])},e})?n.call(t,o,t,e):n)||(e.exports=r)},9:function(e,t,o){"use strict";o.r(t);
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(e){return"IMG"===e.tagName},i=function(e){return e&&1===e.nodeType},d=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},a=function(e){try{return Array.isArray(e)?e.filter(r):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(r):i(e)?[e].filter(r):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(r):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},c=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},l=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=r+"px",d.style.height=i+"px",d.style.transform="",d},m=function(e,t){var o=n({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),r};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var u=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==k?-1!==H.indexOf(t)&&E({target:t}):w()},s=function(){if(!A&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(O-e)>j.scrollOffset&&setTimeout(w,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||w()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(k.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=n({},j.container,e.container)),e.template){var o=i(e.template)?e.template:document.querySelector(e.template);t.template=o}return j=n({},j,t),H.forEach((function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:N}}))})),N},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(n({},j,t))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,a(t))}),[]);return n.filter((function(e){return-1===H.indexOf(e)})).forEach((function(e){H.push(e),e.classList.add("medium-zoom-image")})),x.forEach((function(e){var t=e.type,o=e.listener,r=e.options;n.forEach((function(e){e.addEventListener(t,o,r)}))})),N},y=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];T.zoomed&&w();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,a(t))}),[]):H;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:N}}))})),H=H.filter((function(e){return-1===n.indexOf(e)})),N},h=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return H.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),x.push({type:"medium-zoom:"+e,listener:t,options:o}),N},b=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return H.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),x=x.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),N},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,o=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(j.container)if(j.container instanceof Object)t=(e=n({},e,j.container)).width-e.left-e.right-2*j.margin,o=e.height-e.top-e.bottom-2*j.margin;else{var r=(i(j.container)?j.container:document.querySelector(j.container)).getBoundingClientRect(),a=r.width,c=r.height,l=r.left,m=r.top;e=n({},e,{width:a,height:c,left:l,top:m})}t=t||e.width-2*j.margin,o=o||e.height-2*j.margin;var u=T.zoomedHd||T.original,s=d(u)?t:u.naturalWidth||t,f=d(u)?o:u.naturalHeight||o,p=u.getBoundingClientRect(),g=p.top,v=p.left,y=p.width,h=p.height,b=Math.min(s,t)/y,z=Math.min(f,o)/h,w=Math.min(b,z),E="scale("+w+") translate3d("+((t-y)/2-v+j.margin+e.left)/w+"px, "+((o-h)/2-g+j.margin+e.top)/w+"px, 0)";T.zoomed.style.transform=E,T.zoomedHd&&(T.zoomedHd.style.transform=E)};return new r((function(e){if(t&&-1===H.indexOf(t))e(N);else{if(T.zoomed)e(N);else{if(t)T.original=t;else{if(!(H.length>0))return void e(N);var n=H;T.original=n[0]}if(T.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:N}})),O=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,T.zoomed=l(T.original),document.body.appendChild(k),j.template){var r=i(j.template)?j.template:document.querySelector(j.template);T.template=document.createElement("div"),T.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",w),T.zoomed.addEventListener("transitionend",(function t(){A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:N}})),e(N)})),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,o()};var d=setInterval((function(){T.zoomedHd.complete&&(clearInterval(d),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",w),document.body.appendChild(T.zoomedHd),o())}),10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.removeAttribute("loading");var a=T.zoomedHd.addEventListener("load",(function(){T.zoomedHd.removeEventListener("load",a),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",w),document.body.appendChild(T.zoomedHd),o()}))}else o()}}}))},w=function(){return new r((function(e){if(!A&&T.original){A=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:N}})),T.zoomed.addEventListener("transitionend",(function t(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(k),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),A=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:N}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,e(N)}))}else e(N)}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return T.original?w():z({target:t})},L=function(){return j},C=function(){return H},S=function(){return T.original},H=[],x=[],A=!1,O=0,j=o,T={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?j=t:(t||"string"==typeof t)&&v(t),j=n({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},j);var k=c(j.background);document.addEventListener("click",u),document.addEventListener("keyup",f),document.addEventListener("scroll",s),window.addEventListener("resize",w);var N={open:z,close:w,toggle:E,update:p,clone:g,attach:v,detach:y,on:h,off:b,getOptions:L,getImages:C,getZoomedImage:S};return N};function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o(6).init({selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]});var p=document.querySelectorAll(".kg-image"),g=document.querySelectorAll(".kg-gallery-image img");u([].concat(s(p),s(g)),{background:"rgba(0,0,0,0.75)"});var v=0,y=!1,h=document.querySelector(".post-reading-progress"),b=document.querySelector(".post-share-bar"),z=document.querySelector(".footer--outer-container"),w=document.querySelector(".post__img")||document.querySelector(".post__no-img"),E=document.querySelector(".post__content");null!==b&&window.addEventListener("scroll",(function(){v=window.scrollY,y||(window.requestAnimationFrame((function(){var e,t;w.getBoundingClientRect().bottom+50<b.getBoundingClientRect().top&&b.getBoundingClientRect().bottom<z.getBoundingClientRect().top-50?window.innerWidth>1024?(b.style.marginLeft="0",b.style.opacity="1"):(b.style.marginBottom="0",b.style.opacity="1"):window.innerWidth>1024?(b.style.marginLeft="-200px",b.style.opacity="0"):(b.style.marginBottom="-100px",b.style.opacity="0"),null!==h&&(e=v,t=Math.ceil(e/E.clientHeight*100),h.style.width="".concat(t,"%")),y=!1})),y=!0)}));var L=document.getElementById("copy-button");L&&L.addEventListener("click",(function(){var e=window.location.href,t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)})),document.querySelectorAll(".post__content > table").forEach((function(e){return function(e){var t=document.createElement("div");t.setAttribute("style","width: 100%; overflow-x: auto; margin: 1em 0;"),e.parentNode.insertBefore(t,e),t.appendChild(e)}(e)}))}});