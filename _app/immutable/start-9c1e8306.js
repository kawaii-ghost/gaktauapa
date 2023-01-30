import{S as rt,i as ot,s as it,a as st,e as F,c as lt,b as J,g as pe,t as M,d as he,f as B,h as G,j as ct,o as Ae,k as ft,l as ut,m as dt,n as Ee,p as q,q as pt,r as ht,u as mt,v as Y,w as X,x as Ne,y as x,z as Z,A as fe}from"./chunks/index-935fee70.js";import{S as et,I as V,g as Ke,f as ze,a as ke,b as ue,s as C,i as We,c as ne,P as Ye,d as _t,e as gt,h as wt}from"./chunks/singletons-9728eba3.js";import{_ as de}from"./chunks/preload-helper-41c905a7.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function bt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const l of Et){let i=n[l];Object.defineProperty(n,l,{get(){return e(),i},enumerable:!0,configurable:!0})}return St(n),n}function St(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(a){return a.replace(/\/$/,"")+Rt}function It(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let l=n.length;for(;l;)e=e*33^n[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Ue(a)),me(a,e));const ae=new Map;function At(a,e){const n=Ue(a,e),l=document.querySelector(n);if(l!=null&&l.textContent){const{body:i,...m}=JSON.parse(l.textContent),t=l.getAttribute("data-ttl");return t&&ae.set(n,{body:i,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,m))}return me(a,e)}function Ot(a,e,n){if(ae.size>0){const l=Ue(a,n),i=ae.get(l);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);ae.delete(l)}}return me(e,n)}function Ue(a,e){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(l+=`[data-hash="${It(e.body)}"]`),l}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(l=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const t=l.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return Se(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Se(String.fromCharCode(...h.slice(2).split("-").map(I=>parseInt(I,16))));const w=Pt.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,R,j,D]=w;return e.push({name:j,matcher:D,optional:!!v,rest:!!R,chained:R?_===1&&t[0]==="":!1}),R?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Se(h)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ut)}function jt(a,e,n){const l={},i=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const u=e[t];let h=i[t];if(u.chained&&u.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)u.rest&&(l[u.name]="");else{if(u.matcher&&!n[u.matcher](h)){if(u.optional&&u.chained){let _=i.indexOf(void 0,t);if(_===-1){const w=e[t+1];if(w!=null&&w.rest&&w.chained)m=h;else return}for(;_>=t;)i[_]=i[_-1],_-=1;continue}return}l[u.name]=h}}if(!m)return l}function Se(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(a,e,n,l){const i=new Set(e);return Object.entries(n).map(([u,[h,_,w]])=>{const{pattern:v,params:R}=Nt(u),j={id:u,exec:D=>{const I=v.exec(D);if(I)return jt(I,R,l)},errors:[1,...w||[]].map(D=>a[D]),layouts:[0,..._||[]].map(t),leaf:m(h)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function m(u){const h=u<0;return h&&(u=~u),[h,a[u]]}function t(u){return u===void 0?u:[i.has(u),a[u]]}}function Dt(a){let e,n,l;var i=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=Y(i,m(a))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),J(t,n,u),l=!0},p(t,u){const h={};if(u&4&&(h.data=t[2]),u&2&&(h.form=t[1]),i!==(i=t[0][0])){if(e){pe();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),he()}i?(e=Y(i,m(t)),X(e.$$.fragment),B(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Vt(a){let e,n,l;var i=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return i&&(e=Y(i,m(a))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),J(t,n,u),l=!0},p(t,u){const h={};if(u&4&&(h.data=t[2]),u&523&&(h.$$scope={dirty:u,ctx:t}),i!==(i=t[0][0])){if(e){pe();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),he()}i?(e=Y(i,m(t)),X(e.$$.fragment),B(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function qt(a){let e,n,l;var i=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=Y(i,m(a))),{c(){e&&X(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,u){e&&x(e,t,u),J(t,n,u),l=!0},p(t,u){const h={};if(u&8&&(h.data=t[3]),u&2&&(h.form=t[1]),i!==(i=t[0][1])){if(e){pe();const _=e;M(_.$$.fragment,1,0,()=>{Z(_,1)}),he()}i?(e=Y(i,m(t)),X(e.$$.fragment),B(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&xe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(l){e=ut(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=dt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(l,i){J(l,e,i),n&&n.m(e,null)},p(l,i){l[5]?n?n.p(l,i):(n=xe(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&G(e),n&&n.d()}}}function xe(a){let e;return{c(){e=pt(a[6])},l(n){e=ht(n,a[6])},m(n,l){J(n,e,l)},p(n,l){l&64&&mt(e,n[6])},d(n){n&&G(e)}}}function Ct(a){let e,n,l,i,m;const t=[Vt,Dt],u=[];function h(w,v){return w[0][1]?0:1}e=h(a),n=u[e]=t[e](a);let _=a[4]&&Xe(a);return{c(){n.c(),l=st(),_&&_.c(),i=F()},l(w){n.l(w),l=lt(w),_&&_.l(w),i=F()},m(w,v){u[e].m(w,v),J(w,l,v),_&&_.m(w,v),J(w,i,v),m=!0},p(w,[v]){let R=e;e=h(w),e===R?u[e].p(w,v):(pe(),M(u[R],1,1,()=>{u[R]=null}),he(),n=u[e],n?n.p(w,v):(n=u[e]=t[e](w),n.c()),B(n,1),n.m(l.parentNode,l)),w[4]?_?_.p(w,v):(_=Xe(w),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(w){m||(B(n),m=!0)},o(w){M(n),m=!1},d(w){u[e].d(w),w&&G(l),_&&_.d(w),w&&G(i)}}}function Ft(a,e,n){let{stores:l}=e,{page:i}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:h=null}=e;ct(l.page.notify);let _=!1,w=!1,v=null;return Ae(()=>{const R=l.page.subscribe(()=>{_&&(n(5,w=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),R}),a.$$set=R=>{"stores"in R&&n(7,l=R.stores),"page"in R&&n(8,i=R.page),"components"in R&&n(0,m=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,u=R.data_0),"data_1"in R&&n(3,h=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(i)},[m,t,u,h,_,w,v,l,i]}class Mt extends rt{constructor(e){super(),ot(this,e,Ft,Ct,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Bt={},_e=[()=>de(()=>import("./chunks/0-f9a60cb9.js"),["./chunks/0-f9a60cb9.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-fb7ed2b7.js","./chunks/index-935fee70.js","./chunks/preload-helper-41c905a7.js","./chunks/stores-96295cf5.js","./chunks/singletons-9728eba3.js","./assets/_layout-13322ba5.css"],import.meta.url),()=>de(()=>import("./chunks/1-2b28992c.js"),["./chunks/1-2b28992c.js","./components/error.svelte-1c0cc245.js","./chunks/index-935fee70.js","./chunks/stores-96295cf5.js","./chunks/singletons-9728eba3.js"],import.meta.url),()=>de(()=>import("./chunks/2-81d1f572.js"),["./chunks/2-81d1f572.js","./components/pages/_page.svelte-5f88decf.js","./chunks/index-935fee70.js"],import.meta.url),()=>de(()=>import("./chunks/3-4b9cd91e.js"),["./chunks/3-4b9cd91e.js","./components/pages/x/_...path_/_page.svelte-5b40cd58.js","./chunks/index-935fee70.js","./chunks/stores-96295cf5.js","./chunks/singletons-9728eba3.js"],import.meta.url)],tt=[],Gt={"/":[2],"/x/[...path]":[3]},Ht={handleError:({error:a})=>{console.error(a)}};let Oe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Ze=class{constructor(e,n){this.status=e,this.location=n}};async function Jt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([l,i])=>[l,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Wt=-3,Yt=-4,Xt=-5,xt=-6;function Zt(a){if(typeof a=="number")return l(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function l(i,m=!1){if(i===Kt)return;if(i===Wt)return NaN;if(i===Yt)return 1/0;if(i===Xt)return-1/0;if(i===xt)return-0;if(m)throw new Error("Invalid input");if(i in n)return n[i];const t=e[i];if(!t||typeof t!="object")n[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[i]=new Date(t[1]);break;case"Set":const h=new Set;n[i]=h;for(let v=1;v<t.length;v+=1)h.add(l(t[v]));break;case"Map":const _=new Map;n[i]=_;for(let v=1;v<t.length;v+=2)_.set(l(t[v]),l(t[v+1]));break;case"RegExp":n[i]=new RegExp(t[1],t[2]);break;case"Object":n[i]=Object(t[1]);break;case"BigInt":n[i]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[i]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=l(t[v+1]);break}else{const u=new Array(t.length);n[i]=u;for(let h=0;h<t.length;h+=1){const _=t[h];_!==zt&&(u[h]=l(_))}}else{const u={};n[i]=u;for(const h in t){const _=t[h];u[h]=l(_)}}return n[i]}return l(0)}function Qt(a){return a.filter(e=>e!=null)}const Re=Tt(_e,tt,Gt,Bt),nt=_e[0],Pe=_e[1];nt();Pe();let W={};try{W=JSON.parse(sessionStorage[et])}catch{}function Le(a){W[a]=ne()}function en({target:a,base:e}){var Ge;const n=document.documentElement,l=[];let i=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,h=!1,_=!0,w=!1,v=!1,R=!1,j=!1,D,I=(Ge=history.state)==null?void 0:Ge[V];I||(I=Date.now(),history.replaceState({...history.state,[V]:I},"",location.href));const ge=W[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let H,$e,re;async function je(){re=re||Promise.resolve(),await re,re=null;const r=new URL(location.href),o=se(r,!0);i=null,await De(o,r,[])}async function we(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:s=!1,state:d={},invalidateAll:f=!1},p,b){return typeof r=="string"&&(r=new URL(r,Ke(document))),ce({url:r,scroll:o?ne():null,keepfocus:s,redirect_chain:p,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{f&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=se(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function oe(...r){const c=Re.filter(s=>r.some(d=>s.exec(d))).map(s=>Promise.all([...s.layouts,s.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function De(r,o,c,s,d={},f){var b,y;$e=d;let p=r&&await Ce(r);if(p||(p=await Be(o,{id:null},await te(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,$e!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(o.pathname))p=await ie({status:500,error:await te(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(p.location,o).href,{},[...c,o.pathname],d),!1;else((y=(b=p.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await C.updated.check()&&await ee(o);if(l.length=0,j=!1,w=!0,s&&s.details){const{details:g}=s,k=g.replaceState?0:1;g.state[V]=I+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(i=null,h?(t=p.state,p.props.page&&(p.props.page.url=o),D.$set(p.props)):Ve(p),s){const{scroll:g,keepfocus:k}=s,{activeElement:P}=document;await fe();const T=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!T&&await Ie(),_){const L=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await fe();_=!0,p.props.page&&(H=p.props.page),f&&f(),w=!1}function Ve(r){var s;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),H=r.props.page,D=new Mt({target:a,props:{...r.props,stores:C},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(d=>d(c)),h=!0}async function Q({url:r,params:o,branch:c,status:s,error:d,route:f,form:p}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);r.pathname=yt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:o,branch:c,error:d,route:f},props:{components:Qt(c).map(L=>L.node.component)}};p!==void 0&&(y.props.form=p);let g={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],N=t.branch[L];(E==null?void 0:E.data)!==(N==null?void 0:N.data)&&(k=!0),E&&(g={...g,...E.data},k&&(y.props[`data_${P}`]=g),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==d||p!==void 0&&p!==H.form||k)&&(y.props.page={error:d,params:o,route:{id:(f==null?void 0:f.id)??null},status:s,url:new URL(r),form:p??null,data:k?g:H.data}),y}async function ye({loader:r,parent:o,url:c,params:s,route:d,server_data_node:f}){var g,k,P;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((g=y.universal)!=null&&g.load){let T=function(...E){for(const N of E){const{href:$}=new URL(N,c);b.dependencies.add($)}};const L={route:{get id(){return b.route=!0,d.id}},params:new Proxy(s,{get:(E,N)=>(b.params.add(N),E[N])}),data:(f==null?void 0:f.data)??null,url:kt(c,()=>{b.url=!0}),async fetch(E,N){let $;E instanceof Request?($=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):$=E;const S=new URL($,c).href;return T(S),h?Ot($,S,N):At($,N)},setHeaders:()=>{},depends:T,parent(){return b.parent=!0,o()}};p=await y.universal.load.call(null,L)??null,p=p?await Jt(p):null}return{node:y,loader:r,server:f,universal:(k=y.universal)!=null&&k.load?{type:"data",data:p,uses:b}:null,data:p??(f==null?void 0:f.data)??null,slash:((P=y.universal)==null?void 0:P.trailingSlash)??(f==null?void 0:f.slash)}}function qe(r,o,c,s,d){if(j)return!0;if(!s)return!1;if(s.parent&&r||s.route&&o||s.url&&c)return!0;for(const f of s.params)if(d[f]!==t.params[f])return!0;for(const f of s.dependencies)if(l.some(p=>p(new URL(f))))return!0;return!1}function be(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:s,route:d}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:f,layouts:p,leaf:b}=d,y=[...p,b];f.forEach(S=>S==null?void 0:S().catch(()=>{})),y.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?d.id!==t.route.id:!1,T=y.reduce((S,O,U)=>{var z;const A=t.branch[U],K=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||qe(S.some(Boolean),P,k,(z=A.server)==null?void 0:z.uses,s));return S.push(K),S},[]);if(T.some(Boolean)){try{g=await Qe(c,T)}catch(S){return ie({status:500,error:await te(S,{url:c,params:s,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const L=g==null?void 0:g.nodes;let E=!1;const N=y.map(async(S,O)=>{var z;if(!S)return;const U=t.branch[O],A=L==null?void 0:L[O];if((!A||A.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!qe(E,P,k,(z=U.universal)==null?void 0:z.uses,s))return U;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:S[1],url:c,params:s,route:d,parent:async()=>{var Je;const He={};for(let ve=0;ve<O;ve+=1)Object.assign(He,(Je=await N[ve])==null?void 0:Je.data);return He},server_data_node:be(A===void 0&&S[0]?{type:"skip"}:A??null,U==null?void 0:U.server)})});for(const S of N)S.catch(()=>{});const $=[];for(let S=0;S<y.length;S+=1)if(y[S])try{$.push(await N[S])}catch(O){if(O instanceof Ze)return{type:"redirect",location:O.location};let U=500,A;if(L!=null&&L.includes(O))U=O.status??U,A=O.error;else if(O instanceof Oe)U=O.status,A=O.body;else{if(await C.updated.check())return await ee(c);A=await te(O,{params:s,url:c,route:{id:d.id}})}const K=await Fe(S,$,f);return K?await Q({url:c,params:s,branch:$.slice(0,K.idx).concat(K.node),status:U,error:A,route:d}):await Be(c,{id:d.id},A,U)}else $.push(void 0);return await Q({url:c,params:s,branch:$,status:200,error:null,route:d,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let s=r;for(;!o[s];)s-=1;try{return{idx:s+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:r,error:o,url:c,route:s}){const d={};let f=null;if(tt[0]===0)try{const g=await Qe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;f=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await ee(c)}const b=await ye({loader:nt,url:c,params:d,route:s,parent:()=>Promise.resolve({}),server_data_node:be(f)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:d,branch:[b,y],status:r,error:o,route:null})}function se(r,o){if(We(r,e))return;const c=le(r);for(const s of Re){const d=s.exec(c);if(d)return{id:r.pathname+r.search,invalidating:o,route:s,params:vt(d),url:r}}}function le(r){return bt(r.pathname.slice(e.length)||"/")}function Me({url:r,type:o,intent:c,delta:s}){var b,y;let d=!1;const f={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:o};s!==void 0&&(f.delta=s);const p={...f,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(g=>g(p)),d?null:f}async function ce({url:r,scroll:o,keepfocus:c,redirect_chain:s,details:d,type:f,delta:p,nav_token:b,accepted:y,blocked:g}){const k=se(r,!1),P=Me({url:r,type:f,delta:p,intent:k});if(!P){g();return}Le(I),y(),v=!0,h&&C.navigating.set(P),await De(k,r,s,{scroll:o,keepfocus:c,details:d},b,()=>{v=!1,m.after_navigate.forEach(T=>T(P)),C.navigating.set(null)})}async function Be(r,o,c,s){return r.origin===location.origin&&r.pathname===location.pathname&&!u?await ie({status:s,error:c,url:r,route:o}):await ee(r)}function ee(r){return location.href=r.href,new Promise(()=>{})}function at(){let r;n.addEventListener("mousemove",f=>{const p=f.target;clearTimeout(r),r=setTimeout(()=>{s(p,2)},20)});function o(f){s(f.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(f=>{for(const p of f)p.isIntersecting&&(oe(le(new URL(p.target.href))),c.unobserve(p.target))},{threshold:0});function s(f,p){const b=ze(f,n);if(!b)return;const{url:y,external:g}=ke(b,e);if(g)return;const k=ue(b);k.reload||(p<=k.preload_data?Te(y):p<=k.preload_code&&oe(le(y)))}function d(){c.disconnect();for(const f of n.querySelectorAll("a")){const{url:p,external:b}=ke(f,e);if(b)continue;const y=ue(f);y.reload||(y.preload_code===Ye.viewport&&c.observe(f),y.preload_code===Ye.eager&&oe(le(p)))}}m.after_navigate.push(d),d()}return{after_navigate:r=>{Ae(()=>(m.after_navigate.push(r),()=>{const o=m.after_navigate.indexOf(r);m.after_navigate.splice(o,1)}))},before_navigate:r=>{Ae(()=>(m.before_navigate.push(r),()=>{const o=m.before_navigate.indexOf(r);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(w||!h)&&(_=!1)},goto:(r,o={})=>we(r,o,[]),invalidate:r=>{if(typeof r=="function")l.push(r);else{const{href:o}=new URL(r,location.href);l.push(c=>c.href===o)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async r=>{const o=new URL(r,Ke(document));await Te(o)},preload_code:oe,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:s}=t;if(!s)return;const d=await Fe(t.branch.length,c,s.errors);if(d){const f=await Q({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:s});t=f.state,D.$set(f.props),fe().then(Ie)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(o),r.type==="success"&&fe().then(Ie)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var s;let c=!1;if(!v){const d={from:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(f=>f(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(I);try{sessionStorage[et]=JSON.stringify(W)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=ze(o.composedPath()[0],n);if(!c)return;const{url:s,external:d,target:f}=ke(c,e);if(!s)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const p=ue(c);if(!(c instanceof SVGAElement)&&s.protocol!==location.protocol&&!(s.protocol==="https:"||s.protocol==="http:"))return;if(d||p.reload){Me({url:s,type:"link"})||o.preventDefault(),v=!0;return}const[y,g]=s.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){R=!0,Le(I),t.url=s,C.page.set({...H,url:s}),C.page.notify();return}ce({url:s,scroll:p.noscroll?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:s.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),s=o.submitter;if(((s==null?void 0:s.formMethod)||c.method)!=="get")return;const f=new URL((s==null?void 0:s.hasAttribute("formaction"))&&(s==null?void 0:s.formAction)||c.action);if(We(f,e))return;const p=o.target,{noscroll:b,reload:y}=ue(p);if(y)return;o.preventDefault(),o.stopPropagation();const g=new FormData(p),k=s==null?void 0:s.getAttribute("name");k&&g.append(k,(s==null?void 0:s.getAttribute("value"))??""),f.search=new URLSearchParams(g).toString(),ce({url:f,scroll:b?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[V]){if(o.state[V]===I)return;const s=W[o.state[V]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[I]=ne(),I=o.state[V],scrollTo(s.x,s.y);return}const d=o.state[V]-I;ce({url:new URL(location.href),scroll:s,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[V]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[V]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&C.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:s,route:d,data:f,form:p})=>{u=!0;const b=new URL(location.href);({params:s={},route:d={id:null}}=se(b,!1)||{});let y;try{const g=c.map(async(k,P)=>{const T=f[P];return ye({loader:_e[k],url:b,params:s,route:d,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:be(T)})});y=await Q({url:b,params:s,branch:await Promise.all(g),status:r,error:o,form:p,route:Re.find(({id:k})=>k===d.id)??null})}catch(g){if(g instanceof Ze){await ee(new URL(g.location,location.href));return}y=await ie({status:g instanceof Oe?g.status:500,error:await te(g,{url:b,params:s,route:d}),url:b,route:d})}Ve(y)}}}async function Qe(a,e){var m;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const l=await me(n.href),i=await l.json();if(!l.ok)throw new Error(i);return(m=i.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function te(a,e){return a instanceof Oe?a.body:Ht.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(l=>{setTimeout(()=>{var i;l((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function sn({env:a,hydrate:e,paths:n,target:l,version:i}){_t(n),wt(i);const m=en({target:l,base:n.base});gt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{sn as start};
