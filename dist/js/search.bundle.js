!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function r(e,t,n,r){var i,o=document.createElement(t);o.setAttribute("id",n),(i=r)instanceof Element||i instanceof HTMLDocument?o.appendChild(r):o.innerHTML=r,e.appendChild(o)}function i(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function o(e){e.parentNode.removeChild(e)}n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p}));var s=(e,t)=>{var n,r=[];for(n in e)if(e.hasOwnProperty(n)){var i=t?t+"["+n+"]":n,o=e[n];r.push(null!==o&&"object"==typeof o?serialize(o,i):encodeURIComponent(i)+"="+encodeURIComponent(o))}return r.join("&")},c=n(1);function a(e,t,n,r,i,o,s){try{var c=e[o](s),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){a(o,r,i,s,c,"next",e)}function c(e){a(o,r,i,s,c,"throw",e)}s(void 0)}))}}function u(){return l.apply(this,arguments)}function l(){return(l=h((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r={method:n,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},credentials:"same-origin"};"GET"==n||"HEAD"==n||Object(c.a)(t)||(r.body=s(t));var i=yield fetch(e,r);return i}))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=h((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r=yield u(e,t,n);return r.text()}))).apply(this,arguments)}function p(){return g.apply(this,arguments)}function g(){return(g=h((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r=yield u(e,t,n);return r.json()}))).apply(this,arguments)}},function(e,t,n){"use strict";function r(e){let t=[];return e&&(t=Object.getOwnPropertyNames(e)),t}function i(e){return Array.isArray(e)||(e=r(e)),0===e.length}n.d(t,"a",(function(){return i}))},,function(e,t,n){"use strict";function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===u(e)}n.r(t);function i(e){return"string"==typeof e}function o(e){return"number"==typeof e}function s(e){return!0===e||!1===e||function(e){return c(e)&&null!==e}(e)&&"[object Boolean]"==u(e)}function c(e){return"object"==typeof e}function a(e){return null!=e}function h(e){return!e.trim().length}function u(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const l=Object.prototype.hasOwnProperty;class d{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=f(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function f(e){let t=null,n=null,o=null,s=1;if(i(e)||r(e))o=e,t=p(e),n=g(e);else{if(!l.call(e,"name"))throw new Error((e=>`Missing ${e} property in key`)("name"));const r=e.name;if(o=r,l.call(e,"weight")&&(s=e.weight,s<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(r));t=p(r),n=g(r)}return{path:t,id:n,weight:s,src:o}}function p(e){return r(e)?e:e.split(".")}function g(e){return r(e)?e.join("."):e}var y={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],c=!1;const h=(e,t,u)=>{if(t[u]){const l=e[t[u]];if(!a(l))return;if(u===t.length-1&&(i(l)||o(l)||s(l)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(l));else if(r(l)){c=!0;for(let e=0,n=l.length;e<n;e+=1)h(l[e],t,u+1)}else t.length&&h(l,t,u+1)}else n.push(e)};return h(e,i(t)?t.split("."):t,0),c?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1}};const m=/[^ ]+/g;class v{constructor({getFn:e=y.getFn}={}){this.norm=function(e=3){const t=new Map;return{get(n){const r=n.match(m).length;if(t.has(r))return t.get(r);const i=parseFloat((1/Math.sqrt(r)).toFixed(e));return t.set(r,i),i},clear(){t.clear()}}}(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,i(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();i(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||h(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((t,o)=>{let s=this.getFn(e,t.path);if(a(s))if(r(s)){let e=[];const t=[{nestedArrIndex:-1,value:s}];for(;t.length;){const{nestedArrIndex:n,value:o}=t.pop();if(a(o))if(i(o)&&!h(o)){let t={v:o,i:n,n:this.norm.get(o)};e.push(t)}else r(o)&&o.forEach((e,n)=>{t.push({nestedArrIndex:n,value:e})})}n.$[o]=e}else if(!h(s)){let e={v:s,n:this.norm.get(s)};n.$[o]=e}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function M(e,t,{getFn:n=y.getFn}={}){const r=new v({getFn:n});return r.setKeys(e.map(f)),r.setSources(t),r.create(),r}function _(e,t){const n=e.matches;t.matches=[],a(n)&&n.forEach(e=>{if(!a(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let i={indices:n,value:r};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)})}function x(e,t){t.score=e.score}function b(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=y.distance,ignoreLocation:o=y.ignoreLocation}={}){const s=t/e.length;if(o)return s;const c=Math.abs(r-n);return i?s+c/i:c?1:s}function L(e,t,n,{location:r=y.location,distance:i=y.distance,threshold:o=y.threshold,findAllMatches:s=y.findAllMatches,minMatchCharLength:c=y.minMatchCharLength,includeMatches:a=y.includeMatches,ignoreLocation:h=y.ignoreLocation}={}){if(t.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const u=t.length,l=e.length,d=Math.max(0,Math.min(r,l));let f=o,p=d;const g=c>1||a,m=g?Array(l):[];let v;for(;(v=e.indexOf(t,p))>-1;){let e=b(t,{currentLocation:v,expectedLocation:d,distance:i,ignoreLocation:h});if(f=Math.min(e,f),p=v+u,g){let e=0;for(;e<u;)m[v+e]=1,e+=1}}p=-1;let M=[],_=1,x=u+l;const L=1<<u-1;for(let r=0;r<u;r+=1){let o=0,c=x;for(;o<c;){b(t,{errors:r,currentLocation:d+c,expectedLocation:d,distance:i,ignoreLocation:h})<=f?o=c:x=c,c=Math.floor((x-o)/2+o)}x=c;let a=Math.max(1,d-c+1),y=s?l:Math.min(d+c,l)+u,v=Array(y+2);v[y+1]=(1<<r)-1;for(let o=y;o>=a;o-=1){let s=o-1,c=n[e.charAt(s)];if(g&&(m[s]=+!!c),v[o]=(v[o+1]<<1|1)&c,r&&(v[o]|=(M[o+1]|M[o])<<1|1|M[o+1]),v[o]&L&&(_=b(t,{errors:r,currentLocation:s,expectedLocation:d,distance:i,ignoreLocation:h}),_<=f)){if(f=_,p=s,p<=d)break;a=Math.max(1,2*d-p)}}if(b(t,{errors:r+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:h})>f)break;M=v}const w={isMatch:p>=0,score:Math.max(.001,_)};if(g){const e=function(e=[],t=y.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=e.length;o<s;o+=1){let s=e[o];s&&-1===r?r=o:s||-1===r||(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}(m,c);e.length?a&&(w.indices=e):w.isMatch=!1}return w}function w(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class k{constructor(e,{location:t=y.location,threshold:n=y.threshold,distance:r=y.distance,includeMatches:i=y.includeMatches,findAllMatches:o=y.findAllMatches,minMatchCharLength:s=y.minMatchCharLength,isCaseSensitive:c=y.isCaseSensitive,ignoreLocation:a=y.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(e,t)=>{this.chunks.push({pattern:e,alphabet:w(e),startIndex:t})},u=this.pattern.length;if(u>32){let e=0;const t=u%32,n=u-t;for(;e<n;)h(this.pattern.substr(e,32),e),e+=32;if(t){const e=u-32;h(this.pattern.substr(e),e)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:a}=this.options;let h=[],u=0,l=!1;this.chunks.forEach(({pattern:t,alphabet:d,startIndex:f})=>{const{isMatch:p,score:g,indices:y}=L(e,t,d,{location:r+f,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});p&&(l=!0),u+=g,p&&y&&(h=[...h,...y])});let d={isMatch:l,score:l?u/this.chunks.length:1};return l&&n&&(d.indices=h),d}}const E=[];function S(e,t){for(let n=0,r=E.length;n<r;n+=1){let r=E[n];if(r.condition(e,t))return new r(e,t)}return new k(e,t)}const I="$and",O="$or",j="$path",A="$val",C=e=>!(!e[I]&&!e[O]),F=e=>({[I]:Object.keys(e).map(t=>({[t]:e[t]}))});class P{constructor(e,t={},n){if(this.options={...y,...t},this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new d(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof v))throw new Error("Incorrect 'index' type");this._myIndex=t||M(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:s,sortFn:c,ignoreFieldNorm:a}=this.options;let h=i(e)?i(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=y.ignoreFieldNorm}){e.forEach(e=>{let n=1;e.matches.forEach(({key:e,norm:r,score:i})=>{const o=e?e.weight:null;n*=Math.pow(0===i&&o?Number.EPSILON:i,(o||1)*(t?1:r))}),e.score=n})}(h,{ignoreFieldNorm:a}),s&&h.sort(c),o(t)&&t>-1&&(h=h.slice(0,t)),function(e,t,{includeMatches:n=y.includeMatches,includeScore:r=y.includeScore}={}){const i=[];n&&i.push(_);r&&i.push(x);return e.map(e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return i.length&&i.forEach(t=>{t(e,r)}),r})}(h,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=S(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:e,i:n,n:i})=>{if(!a(e))return;const{isMatch:o,score:s,indices:c}=t.searchIn(e);o&&r.push({item:e,idx:n,matches:[{score:s,value:e,norm:i,indices:c}]})}),r}_searchLogical(e){throw new Error("Logical search is not available")}_searchObjectList(e){const t=S(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:e,i:r})=>{if(!a(e))return;let o=[];n.forEach((n,r)=>{o.push(...this._findMatches({key:n,value:e[r],searcher:t}))}),o.length&&i.push({idx:r,item:e,matches:o})}),i}_findMatches({key:e,value:t,searcher:n}){if(!a(t))return[];let i=[];if(r(t))t.forEach(({v:t,i:r,n:o})=>{if(!a(t))return;const{isMatch:s,score:c,indices:h}=n.searchIn(t);s&&i.push({score:c,key:e,value:t,idx:r,norm:o,indices:h})});else{const{v:r,n:o}=t,{isMatch:s,score:c,indices:a}=n.searchIn(r);s&&i.push({score:c,key:e,value:r,norm:o,indices:a})}return i}}P.version="6.4.1",P.createIndex=M,P.parseIndex=function(e,{getFn:t=y.getFn}={}){const{keys:n,records:r}=e,i=new v({getFn:t});return i.setKeys(n),i.setIndexRecords(r),i},P.config=y,P.parseQuery=function(e,t,{auto:n=!0}={}){const o=e=>{let s=Object.keys(e);const a=(e=>!!e[j])(e);if(!a&&s.length>1&&!C(e))return o(F(e));if((e=>!r(e)&&c(e)&&!C(e))(e)){const r=a?e[j]:s[0],o=a?e[A]:e[r];if(!i(o))throw new Error((e=>"Invalid value for key "+e)(r));const c={keyId:g(r),pattern:o};return n&&(c.searcher=S(o,t)),c}let h={children:[],operator:s[0]};return s.forEach(t=>{const n=e[t];r(n)&&n.forEach(e=>{h.children.push(o(e))})}),h};return C(e)||(e=F(e)),o(e)};var N,T=P,$=n(1),B=n(0);function H(e,t){var n=function(){var e;return document.getElementById("wppedia_results_rendered")?e=document.getElementById("wppedia_results_rendered"):(e=document.createElement("ul")).id="wppedia_results_rendered",e}();Object(B.d)(n,t),n.innerHTML="",!1!==e?Array.prototype.forEach.call(e,e=>{var t=e.item,r=document.createElement("a");r.href=t.url,r.tabIndex=0,r.innerHTML=t.post_title,Object(B.a)(n,"li","res_id_"+t.post_id,r)}):Object(B.e)(n)}Object(B.b)(wppedia_search_props.postlist_url,{},"GET").then(e=>{N=e});var R=document.getElementById(wppedia_search_props.searchinput_id);if(R){["keyup","focus","click","search"].forEach(e=>{R.addEventListener(e,e=>{var t=e.target;H(function(e,t){if(void 0===e||""==e||void 0===N)return!1;var n=JSON.parse(t),r=T.createIndex(n.keys,N),i=new T(N,n,r).search(e,{limit:15});return!Object($.a)(i)&&i}(t.value,wppedia_search_props.search_options),t)})}),document.addEventListener("click",(function(e){R.parentElement.contains(e.target)||H(!1,document.body)}))}}]);