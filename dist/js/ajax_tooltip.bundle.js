!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e,t){t.parentNode.insertBefore(e,t.nextSibling)}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));function i(e){let t=[];return e&&(t=Object.getOwnPropertyNames(e)),t}function o(e){return Array.isArray(e)||(e=i(e)),0===e.length}function a(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){a(o,r,i,s,c,"next",e)}function c(e){a(o,r,i,s,c,"throw",e)}s(void 0)}))}}function c(){return u.apply(this,arguments)}function u(){return(u=s((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r={method:n,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},credentials:"same-origin"};"GET"==n||"HEAD"==n||o(t)||(r.body=obj_serialize(t));var i=yield fetch(e,r);return i}))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=s((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r=yield c(e,t,n);return r.text()}))).apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return(l=s((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r=yield c(e,t,n);return r.json()}))).apply(this,arguments)}},function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function o(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof i(e).Element||e instanceof Element}function s(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return(a(e)?e.ownerDocument:e.document).documentElement}function p(e){return r(u(e)).left+o(e).scrollLeft}function f(e){return i(e).getComputedStyle(e)}function d(e){var t=f(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function l(e,t,n){void 0===n&&(n=!1);var a,f,l=u(t),m=r(e),v=s(t),h={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(v||!v&&!n)&&(("body"!==c(t)||d(l))&&(h=(a=t)!==i(a)&&s(a)?{scrollLeft:(f=a).scrollLeft,scrollTop:f.scrollTop}:o(a)),s(t)?((g=r(t)).x+=t.clientLeft,g.y+=t.clientTop):l&&(g.x=p(l))),{x:m.left+h.scrollLeft-g.x,y:m.top+h.scrollTop-g.y,width:m.width,height:m.height}}function m(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||u(e)}function h(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(c(t))>=0?t.ownerDocument.body:s(t)&&d(t)?t:e(v(t))}(e),r="body"===c(n),o=i(n),a=r?[o].concat(o.visualViewport||[],d(n)?n:[]):n,u=t.concat(a);return r?u:u.concat(h(v(a)))}function g(e){return["table","td","th"].indexOf(c(e))>=0}function b(e){if(!s(e)||"fixed"===f(e).position)return null;var t=e.offsetParent;if(t){var n=u(t);if("body"===c(t)&&"static"===f(t).position&&"static"!==f(n).position)return n}return t}function y(e){for(var t=i(e),n=b(e);n&&g(n)&&"static"===f(n).position;)n=b(n);return n&&"body"===c(n)&&"static"===f(n).position?t:n||function(e){for(var t=v(e);s(t)&&["html","body"].indexOf(c(t))<0;){var n=f(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}n.r(t);var w="top",x="bottom",O="right",E="left",j=[w,x,O,E],T=j.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),A=[].concat(j,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),D=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function L(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var i=t.get(r);i&&e(i)}})),r.push(i)}(e)})),r}var M={placement:"bottom",modifiers:[],strategy:"absolute"};function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function C(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?M:i;return function(e,t,n){void 0===n&&(n=o);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},M),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],p=!1,f={state:c,setOptions:function(n){d(),c.options=Object.assign(Object.assign(Object.assign({},o),c.options),n),c.scrollParents={reference:a(e)?h(e):e.contextElement?h(e.contextElement):[],popper:h(t)};var i=function(e){var t=L(e);return D.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=i.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var o=i({state:c,name:t,instance:f,options:r}),a=function(){};u.push(o||a)}})),f.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(k(t,n)){c.rects={reference:l(t,y(n),"fixed"===c.options.strategy),popper:m(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var i=c.orderedModifiers[r],o=i.fn,a=i.options,s=void 0===a?{}:a,u=i.name;"function"==typeof o&&(c=o({state:c,options:s,name:u,instance:f})||c)}else c.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){d(),p=!0}};if(!k(e,t))return f;function d(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var S={passive:!0};function P(e){return e.split("-")[0]}function _(e){return e.split("-")[1]}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function B(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?P(i):null,a=i?_(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case w:t={x:s,y:n.y-r.height};break;case x:t={x:s,y:n.y+n.height};break;case O:t={x:n.x+n.width,y:c};break;case E:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?H(o):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case"start":t[u]=Math.floor(t[u])-Math.floor(n[p]/2-r[p]/2);break;case"end":t[u]=Math.floor(t[u])+Math.ceil(n[p]/2-r[p]/2)}}return t}var V={top:"auto",right:"auto",bottom:"auto",left:"auto"};function W(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,f=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(a),d=f.x,l=f.y,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),h=E,g=w,b=window;if(p){var j=y(n);j===i(n)&&(j=u(n)),o===w&&(g=x,l-=j.clientHeight-r.height,l*=c?1:-1),o===E&&(h=O,d-=j.clientWidth-r.width,d*=c?1:-1)}var T,A=Object.assign({position:s},p&&V);return c?Object.assign(Object.assign({},A),{},((T={})[g]=v?"0":"",T[h]=m?"0":"",T.transform=(b.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",T)):Object.assign(Object.assign({},A),{},((t={})[g]=v?l+"px":"",t[h]=m?d+"px":"",t.transform="",t))}var I={left:"right",right:"left",bottom:"top",top:"bottom"};function N(e){return e.replace(/left|right|bottom|top/g,(function(e){return I[e]}))}var R={start:"end",end:"start"};function q(e){return e.replace(/start|end/g,(function(e){return R[e]}))}function U(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function F(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function z(e,t){return"viewport"===t?F(function(e){var t=i(e),n=u(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,c=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:o,height:a,x:s+p(e),y:c}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):F(function(e){var t=u(e),n=o(e),r=e.ownerDocument.body,i=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+p(e),c=-n.scrollTop;return"rtl"===f(r||t).direction&&(s+=Math.max(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(u(e)))}function $(e,t,n){var r="clippingParents"===t?function(e){var t=h(v(e)),n=["absolute","fixed"].indexOf(f(e).position)>=0&&s(e)?y(e):e;return a(n)?t.filter((function(e){return a(e)&&U(e,n)&&"body"!==c(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),o=i[0],u=i.reduce((function(t,n){var r=z(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),z(e,o));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function X(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function Y(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function G(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,f=void 0===p?"viewport":p,d=n.elementContext,l=void 0===d?"popper":d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=X("number"!=typeof g?g:Y(g,j)),y="popper"===l?"reference":"popper",E=e.elements.reference,T=e.rects.popper,A=e.elements[v?y:l],D=$(a(A)?A:A.contextElement||u(e.elements.popper),c,f),L=r(E),M=B({reference:L,element:T,strategy:"absolute",placement:o}),k=F(Object.assign(Object.assign({},T),M)),C="popper"===l?k:L,S={top:D.top-C.top+b.top,bottom:C.bottom-D.bottom+b.bottom,left:D.left-C.left+b.left,right:C.right-D.right+b.right},P=e.modifiersData.offset;if("popper"===l&&P){var _=P[o];Object.keys(S).forEach((function(e){var t=[O,x].indexOf(e)>=0?1:-1,n=[w,x].indexOf(e)>=0?"y":"x";S[e]+=_[n]*t}))}return S}function J(e,t,n){return Math.max(e,Math.min(t,n))}function K(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Q(e){return[w,O,x,E].some((function(t){return e[t]>=0}))}var Z=C({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,c=void 0===s||s,u=i(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,S)})),c&&u.addEventListener("resize",n.update,S),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,S)})),c&&u.removeEventListener("resize",n.update,S)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=B({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s={placement:P(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),W(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),W(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];s(i)&&c(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=A.reduce((function(e,n){return e[n]=function(e,t,n){var r=P(e),i=[E,w].indexOf(r)>=0?-1:1,o="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[E,O].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=P(h),b=c||(g===h||!m?[N(h)]:function(e){if("auto"===P(e))return[];var t=N(e);return[q(e),t,q(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat("auto"===P(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?A:c,p=_(r),f=p?s?T:T.filter((function(e){return _(e)===p})):j,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var l=d.reduce((function(t,n){return t[n]=G(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[P(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),D=t.rects.reference,L=t.rects.popper,M=new Map,k=!0,C=y[0],S=0;S<y.length;S++){var H=y[S],B=P(H),V="start"===_(H),W=[w,x].indexOf(B)>=0,I=W?"width":"height",R=G(t,{placement:H,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),U=W?V?O:E:V?x:w;D[I]>L[I]&&(U=N(U));var F=N(U),z=[];if(o&&z.push(R[B]<=0),s&&z.push(R[U]<=0,R[F]<=0),z.every((function(e){return e}))){C=H,k=!1;break}M.set(H,z)}if(k)for(var $=function(e){var t=y.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},X=m?3:1;X>0;X--){if("break"===$(X))break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,v=n.tetherOffset,h=void 0===v?0:v,g=G(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),b=P(t.placement),j=_(t.placement),T=!j,A=H(b),D="x"===A?"y":"x",L=t.modifiersData.popperOffsets,M=t.rects.reference,k=t.rects.popper,C="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,S={x:0,y:0};if(L){if(o){var B="y"===A?w:E,V="y"===A?x:O,W="y"===A?"height":"width",I=L[A],N=L[A]+g[B],R=L[A]-g[V],q=l?-k[W]/2:0,U="start"===j?M[W]:k[W],F="start"===j?-k[W]:-M[W],z=t.elements.arrow,$=l&&z?m(z):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[B],K=X[V],Q=J(0,M[W],$[W]),Z=T?M[W]/2-q-Q-Y-C:U-Q-Y-C,ee=T?-M[W]/2+q+Q+K+C:F+Q+K+C,te=t.elements.arrow&&y(t.elements.arrow),ne=te?"y"===A?te.clientTop||0:te.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][A]:0,ie=L[A]+Z-re-ne,oe=L[A]+ee-re,ae=J(l?Math.min(N,ie):N,I,l?Math.max(R,oe):R);L[A]=ae,S[A]=ae-I}if(s){var se="x"===A?w:E,ce="x"===A?x:O,ue=L[D],pe=J(ue+g[se],ue,ue-g[ce]);L[D]=pe,S[D]=pe-ue}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=P(n.placement),s=H(a),c=[E,O].indexOf(a)>=0?"height":"width";if(i&&o){var u=n.modifiersData[r+"#persistent"].padding,p=m(i),f="y"===s?w:E,d="y"===s?x:O,l=n.rects.reference[c]+n.rects.reference[s]-o[s]-n.rects.popper[c],v=o[s]-n.rects.reference[s],h=y(i),g=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,b=l/2-v/2,j=u[f],T=g-p[c]-u[d],A=g/2-p[c]/2+b,D=J(j,A,T),L=s;n.modifiersData[r]=((t={})[L]=D,t.centerOffset=D-A,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,i=n.element,o=void 0===i?"[data-popper-arrow]":i,a=n.padding,s=void 0===a?0:a;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&U(t.elements.popper,o)&&(t.elements.arrow=o,t.modifiersData[r+"#persistent"]={padding:X("number"!=typeof s?s:Y(s,j))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=G(t,{elementContext:"reference"}),s=G(t,{altBoundary:!0}),c=K(a,r),u=K(s,i,o),p=Q(c),f=Q(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),ee={passive:!0,capture:!0};function te(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ne(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function re(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ie(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function oe(e){return[].concat(e)}function ae(e,t){-1===e.indexOf(t)&&e.push(t)}function se(e){return e.split("-")[0]}function ce(e){return[].slice.call(e)}function ue(){return document.createElement("div")}function pe(e){return["Element","Fragment"].some((function(t){return ne(e,t)}))}function fe(e){return ne(e,"MouseEvent")}function de(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function le(e){return pe(e)?[e]:function(e){return ne(e,"NodeList")}(e)?ce(e):Array.isArray(e)?e:ce(document.querySelectorAll(e))}function me(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function ve(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function he(e){var t=oe(e)[0];return t&&t.ownerDocument||document}function ge(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var be={isTouch:!1},ye=0;function we(){be.isTouch||(be.isTouch=!0,window.performance&&document.addEventListener("mousemove",xe))}function xe(){var e=performance.now();e-ye<20&&(be.isTouch=!1,document.removeEventListener("mousemove",xe)),ye=e}function Oe(){var e=document.activeElement;if(de(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var Ee="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",je=/MSIE |Trident\//.test(Ee);var Te={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ae=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Te,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),De=Object.keys(Ae);function Le(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:i),t}),{});return Object.assign({},e,{},t)}function Me(e,t){var n=Object.assign({},t,{content:re(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Le(Object.assign({},Ae,{plugins:t}))):De).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Ae.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function ke(e,t){e.innerHTML=t}function Ce(e){var t=ue();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",pe(e)?t.appendChild(e):ke(t,e)),t}function Se(e,t){pe(t.content)?(ke(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?ke(e,t.content):e.textContent=t.content)}function Pe(e){var t=e.firstElementChild,n=ce(t.children);return{box:t,content:n.find((function(e){return e.classList.contains("tippy-content")})),arrow:n.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function _e(e){var t=ue(),n=ue();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=ue();function i(n,r){var i=Pe(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"==typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Se(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(Ce(r.arrow))):o.appendChild(Ce(r.arrow)):s&&o.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),Se(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}_e.$$tippy=!0;var He=1,Be=[],Ve=[];function We(e,t){var n,r,i,o,a,s,c,u,p,f=Me(e,Object.assign({},Ae,{},Le((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=ie(Y,f.interactiveDebounce),b=he(f.triggerTarget||e),y=He++,w=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),x={id:y,reference:e,popper:ue(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:w,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(i),cancelAnimationFrame(o)},setProps:function(t){0;if(x.state.isDestroyed)return;_("onBeforeUpdate",[x,t]),$();var n=x.props,r=Me(e,Object.assign({},x.props,{},t,{ignoreAttributes:!0}));x.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(V(),g=ie(Y,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?oe(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");B(),P(),j&&j(n,r);x.popperInstance&&(Q(),pe().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));_("onAfterUpdate",[x,t])},setContent:function(e){x.setProps({content:e})},show:function(){0;var e=x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=be.isTouch&&!x.props.touch,i=te(x.props.duration,0,Ae.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(_("onShow",[x],!1),!1===x.props.onShow(x))return;x.state.isVisible=!0,M()&&(E.style.visibility="visible");P(),R(),x.state.isMounted||(E.style.transition="none");if(M()){var o=C(),a=o.box,s=o.content;me([a,s],0)}c=function(){if(x.state.isVisible&&!v){if(v=!0,E.offsetHeight,E.style.transition=x.props.moveTransition,M()&&x.props.animation){var e=C(),t=e.box,n=e.content;me([t,n],i),ve([t,n],"visible")}H(),B(),ae(Ve,x),x.state.isMounted=!0,_("onMount",[x]),x.props.animation&&M()&&function(e,t){U(e,t)}(i,(function(){x.state.isShown=!0,_("onShown",[x])}))}},function(){var e,t=x.props.appendTo,n=k();e=x.props.interactive&&t===Ae.appendTo||"parent"===t?n.parentNode:re(t,[n]);e.contains(E)||e.appendChild(E);Q(),!1}()},hide:function(){0;var e=!x.state.isVisible,t=x.state.isDestroyed,n=!x.state.isEnabled,r=te(x.props.duration,1,Ae.duration);if(e||t||n)return;if(_("onHide",[x],!1),!1===x.props.onHide(x))return;x.state.isVisible=!1,x.state.isShown=!1,v=!1,d=!1,M()&&(E.style.visibility="hidden");if(V(),q(),P(),M()){var i=C(),o=i.box,a=i.content;x.props.animation&&(me([o,a],r),ve([o,a],"hidden"))}H(),B(),x.props.animation?M()&&function(e,t){U(e,(function(){!x.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&t()}))}(r,x.unmount):x.unmount()},hideWithInteractivity:function(e){0;b.addEventListener("mousemove",g),ae(Be,g),g(e)},enable:function(){x.state.isEnabled=!0},disable:function(){x.hide(),x.state.isEnabled=!1},unmount:function(){0;x.state.isVisible&&x.hide();if(!x.state.isMounted)return;ne(),pe().forEach((function(e){e._tippy.unmount()})),E.parentNode&&E.parentNode.removeChild(E);Ve=Ve.filter((function(e){return e!==x})),x.state.isMounted=!1,_("onHidden",[x])},destroy:function(){0;if(x.state.isDestroyed)return;x.clearDelayTimeouts(),x.unmount(),$(),delete e._tippy,x.state.isDestroyed=!0,_("onDestroy",[x])}};if(!f.render)return x;var O=f.render(x),E=O.popper,j=O.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+x.id,x.popper=E,e._tippy=x,E._tippy=x;var T=w.map((function(e){return e.fn(x)})),A=e.hasAttribute("aria-expanded");return z(),B(),P(),_("onCreate",[x]),f.showOnCreate&&de(),E.addEventListener("mouseenter",(function(){x.props.interactive&&x.state.isVisible&&x.clearDelayTimeouts()})),E.addEventListener("mouseleave",(function(e){x.props.interactive&&x.props.trigger.indexOf("mouseenter")>=0&&(b.addEventListener("mousemove",g),g(e))})),x;function D(){var e=x.props.touch;return Array.isArray(e)?e:[e,0]}function L(){return"hold"===D()[0]}function M(){var e;return!!(null==(e=x.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){return Pe(E)}function S(e){return x.state.isMounted&&!x.state.isVisible||be.isTouch||a&&"focus"===a.type?0:te(x.props.delay,e?0:1,Ae.delay)}function P(){E.style.pointerEvents=x.props.interactive&&x.state.isVisible?"":"none",E.style.zIndex=""+x.props.zIndex}function _(e,t,n){var r;(void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=x.props)[e].apply(r,t)}function H(){var t=x.props.aria;if(t.content){var n="aria-"+t.content,r=E.id;oe(x.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(x.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function B(){!A&&x.props.aria.expanded&&oe(x.props.triggerTarget||e).forEach((function(e){x.props.interactive?e.setAttribute("aria-expanded",x.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function V(){b.removeEventListener("mousemove",g),Be=Be.filter((function(e){return e!==g}))}function W(e){if(!(be.isTouch&&(m||"mousedown"===e.type)||x.props.interactive&&E.contains(e.target))){if(k().contains(e.target)){if(be.isTouch)return;if(x.state.isVisible&&x.props.trigger.indexOf("click")>=0)return}else _("onClickOutside",[x,e]);!0===x.props.hideOnClick&&(x.clearDelayTimeouts(),x.hide(),l=!0,setTimeout((function(){l=!1})),x.state.isMounted||q())}}function I(){m=!0}function N(){m=!1}function R(){b.addEventListener("mousedown",W,!0),b.addEventListener("touchend",W,ee),b.addEventListener("touchstart",N,ee),b.addEventListener("touchmove",I,ee)}function q(){b.removeEventListener("mousedown",W,!0),b.removeEventListener("touchend",W,ee),b.removeEventListener("touchstart",N,ee),b.removeEventListener("touchmove",I,ee)}function U(e,t){var n=C().box;function r(e){e.target===n&&(ge(n,"remove",r),t())}if(0===e)return t();ge(n,"remove",s),ge(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),oe(x.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e;L()&&(F("touchstart",X,{passive:!0}),F("touchend",G,{passive:!0})),(e=x.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",G);break;case"focus":F(je?"focusout":"blur",J);break;case"focusin":F("focusout",J)}}))}function $(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),h=[]}function X(e){var t,n=!1;if(x.state.isEnabled&&!K(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,B(),!x.state.isVisible&&fe(e)&&Be.forEach((function(t){return t(e)})),"click"===e.type&&(x.props.trigger.indexOf("mouseenter")<0||d)&&!1!==x.props.hideOnClick&&x.state.isVisible?n=!0:de(e),"click"===e.type&&(d=!n),n&&!r&&le(e)}}function Y(e){var t=e.target,n=k().contains(t)||E.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=se(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+p>o,v=n-t.right-f>o;return d||l||m||v}))}(pe().concat(E).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean),e)&&(V(),le(e))}function G(e){K(e)||x.props.trigger.indexOf("click")>=0&&d||(x.props.interactive?x.hideWithInteractivity(e):le(e))}function J(e){x.props.trigger.indexOf("focusin")<0&&e.target!==k()||x.props.interactive&&e.relatedTarget&&E.contains(e.relatedTarget)||le(e)}function K(e){return!!be.isTouch&&L()!==e.type.indexOf("touch")>=0}function Q(){ne();var t=x.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,s=M()?Pe(E).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||k()}:e,p=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(M()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];M()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),x.popperInstance=Z(u,E,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function ne(){x.popperInstance&&(x.popperInstance.destroy(),x.popperInstance=null)}function pe(){return ce(E.querySelectorAll("[data-tippy-root]"))}function de(e){x.clearDelayTimeouts(),e&&_("onTrigger",[x,e]),R();var t=S(!0),n=D(),i=n[0],o=n[1];be.isTouch&&"hold"===i&&o&&(t=o),t?r=setTimeout((function(){x.show()}),t):x.show()}function le(e){if(x.clearDelayTimeouts(),_("onUntrigger",[x,e]),x.state.isVisible){if(!(x.props.trigger.indexOf("mouseenter")>=0&&x.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=S(!1);t?i=setTimeout((function(){x.state.isVisible&&x.hide()}),t):o=requestAnimationFrame((function(){x.hide()}))}}else q()}}function Ie(e,t){void 0===t&&(t={});var n=Ae.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",we,ee),window.addEventListener("blur",Oe);var r=Object.assign({},t,{plugins:n}),i=le(e).reduce((function(e,t){var n=t&&We(t,r);return n&&e.push(n),e}),[]);return pe(e)?i[0]:i}Ie.defaultProps=Ae,Ie.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Ae[t]=e[t]}))},Ie.currentInput=be;Ie.setDefaultProps({render:_e});var Ne=Ie,Re=n(0);Ne(document.querySelectorAll(".wppedia-crosslink"),{content:'<div class="wppedia-tooltip-loading">Loading&hellip;</div>',theme:"light",maxWidth:320,animation:"shift-toward",interactive:!0,allowHTML:!0,onCreate(e){e._isFetching=!1,e._error=null},onShow(e){if(!e._isFetching&&!e._error){e._isFetching=!0;var t=e.reference;Object(Re.b)(wppedia_tooltip_props.ajaxurl,{action:"wppedia_generate_tooltip",post_id:t.getAttribute("data-post_id")}).then(t=>{e.setContent(t)}).catch(t=>{e._error=t,e.setContent('<div class="wppedia-tooltip-error">Request failed</div>')}).finally(()=>{e._isFetching=!1})}},onHidden(e){e.setContent('<div class="wppedia-tooltip-loading">Loading&hellip;</div>'),e._error=null}})}]);