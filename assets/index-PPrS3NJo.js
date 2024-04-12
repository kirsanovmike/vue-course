(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const G_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q_=fl(G_);function vd(t){return!!t||t===""}function dl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?J_(r):dl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Be(t))return t;if(Le(t))return t}}const Y_=/;(?![^(]*\))/g,X_=/:(.+)/;function J_(t){const e={};return t.split(Y_).forEach(n=>{if(n){const r=n.split(X_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cn(t){let e="";if(Be(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=Cn(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const En=t=>Be(t)?t:t==null?"":X(t)||Le(t)&&(t.toString===wd||!te(t.toString))?JSON.stringify(t,Ed,2):String(t),Ed=(t,e)=>e&&e.__v_isRef?Ed(t,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Id(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!X(e)&&!Ad(e)?String(e):e,ge={},Mr=[],jt=()=>{},Z_=()=>!1,ey=/^on[^a-z]/,Ko=t=>ey.test(t),pl=t=>t.startsWith("onUpdate:"),ot=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ty=Object.prototype.hasOwnProperty,ae=(t,e)=>ty.call(t,e),X=Array.isArray,xr=t=>Go(t)==="[object Map]",Id=t=>Go(t)==="[object Set]",te=t=>typeof t=="function",Be=t=>typeof t=="string",gl=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Td=t=>Le(t)&&te(t.then)&&te(t.catch),wd=Object.prototype.toString,Go=t=>wd.call(t),ny=t=>Go(t).slice(8,-1),Ad=t=>Go(t)==="[object Object]",_l=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,eo=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ry=/-(\w)/g,Kt=Qo(t=>t.replace(ry,(e,n)=>n?n.toUpperCase():"")),sy=/\B([A-Z])/g,dr=Qo(t=>t.replace(sy,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=Qo(t=>t?`on${Yo(t)}`:""),js=(t,e)=>!Object.is(t,e),to=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nh;const iy=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class Rd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&It&&(this.parent=It,this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active)try{return It=this,e()}finally{It=this.parent}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Pd(t){return new Rd(t)}function oy(t,e=It){e&&e.active&&e.effects.push(t)}function ay(){return It}function cy(t){It&&It.cleanups.push(t)}const yl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sd=t=>(t.w&kn)>0,bd=t=>(t.n&kn)>0,ly=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kn},uy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sd(s)&&!bd(s)?s.delete(t):e[n++]=s,s.w&=~kn,s.n&=~kn}e.length=n}},fc=new WeakMap;let Es=0,kn=1;const dc=30;let Ut;const Xn=Symbol(""),pc=Symbol("");class vl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,oy(this,r)}run(){if(!this.active)return this.fn();let e=Ut,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ut,Ut=this,In=!0,kn=1<<++Es,Es<=dc?ly(this):rh(this),this.fn()}finally{Es<=dc&&uy(this),kn=1<<--Es,Ut=this.parent,In=n,this.parent=void 0}}stop(){this.active&&(rh(this),this.onStop&&this.onStop(),this.active=!1)}}function rh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const Cd=[];function ns(){Cd.push(In),In=!1}function rs(){const t=Cd.pop();In=t===void 0?!0:t}function gt(t,e,n){if(In&&Ut){let r=fc.get(t);r||fc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yl()),kd(s)}}function kd(t,e){let n=!1;Es<=dc?bd(t)||(t.n|=kn,n=!Sd(t)):n=!t.has(Ut),n&&(t.add(Ut),Ut.deps.push(t))}function tn(t,e,n,r,s,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?_l(n)&&a.push(o.get("length")):(a.push(o.get(Xn)),xr(t)&&a.push(o.get(pc)));break;case"delete":X(t)||(a.push(o.get(Xn)),xr(t)&&a.push(o.get(pc)));break;case"set":xr(t)&&a.push(o.get(Xn));break}if(a.length===1)a[0]&&mc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);mc(yl(c))}}function mc(t,e){for(const n of X(t)?t:[...t])(n!==Ut||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const hy=fl("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(gl)),fy=El(),dy=El(!1,!0),py=El(!0),sh=my();function my(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ns();const r=le(this)[e].apply(this,n);return rs(),r}}),t}function El(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ny:xd:e?Md:Vd).get(r))return r;const o=X(r);if(!t&&o&&ae(sh,s))return Reflect.get(sh,s,i);const a=Reflect.get(r,s,i);return(gl(s)?Nd.has(s):hy(s))||(t||gt(r,"get",s),e)?a:Ae(a)?!o||!_l(s)?a.value:a:Le(a)?t?Ld(a):pr(a):a}}const gy=Dd(),_y=Dd(!0);function Dd(t=!1){return function(n,r,s,i){let o=n[r];if(qs(o)&&Ae(o)&&!Ae(s))return!1;if(!t&&!qs(s)&&(Fd(s)||(s=le(s),o=le(o)),!X(n)&&Ae(o)&&!Ae(s)))return o.value=s,!0;const a=X(n)&&_l(r)?Number(r)<n.length:ae(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?js(s,o)&&tn(n,"set",r,s):tn(n,"add",r,s)),c}}function yy(t,e){const n=ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tn(t,"delete",e,void 0),r}function vy(t,e){const n=Reflect.has(t,e);return(!gl(e)||!Nd.has(e))&&gt(t,"has",e),n}function Ey(t){return gt(t,"iterate",X(t)?"length":Xn),Reflect.ownKeys(t)}const Od={get:fy,set:gy,deleteProperty:yy,has:vy,ownKeys:Ey},Iy={get:py,set(t,e){return!0},deleteProperty(t,e){return!0}},Ty=ot({},Od,{get:dy,set:_y}),Il=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function Ui(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);e!==i&&!n&&gt(s,"get",e),!n&&gt(s,"get",i);const{has:o}=Xo(s),a=r?Il:n?Al:Hs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return t!==s&&!e&&gt(r,"has",t),!e&&gt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Bi(t,e=!1){return t=t.__v_raw,!e&&gt(le(t),"iterate",Xn),Reflect.get(t,"size",t)}function ih(t){t=le(t);const e=le(this);return Xo(e).has.call(e,t)||(e.add(t),tn(e,"add",t,t)),this}function oh(t,e){e=le(e);const n=le(this),{has:r,get:s}=Xo(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?js(e,o)&&tn(n,"set",t,e):tn(n,"add",t,e),this}function ah(t){const e=le(this),{has:n,get:r}=Xo(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tn(e,"delete",t,void 0),i}function ch(){const t=le(this),e=t.size!==0,n=t.clear();return e&&tn(t,"clear",void 0,void 0),n}function ji(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?Il:t?Al:Hs;return!t&&gt(a,"iterate",Xn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function qi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=xr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Il:e?Al:Hs;return!e&&gt(i,"iterate",c?pc:Xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function wy(){const t={get(i){return Ui(this,i)},get size(){return Bi(this)},has:$i,add:ih,set:oh,delete:ah,clear:ch,forEach:ji(!1,!1)},e={get(i){return Ui(this,i,!1,!0)},get size(){return Bi(this)},has:$i,add:ih,set:oh,delete:ah,clear:ch,forEach:ji(!1,!0)},n={get(i){return Ui(this,i,!0)},get size(){return Bi(this,!0)},has(i){return $i.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:ji(!0,!1)},r={get(i){return Ui(this,i,!0,!0)},get size(){return Bi(this,!0)},has(i){return $i.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qi(i,!1,!1),n[i]=qi(i,!0,!1),e[i]=qi(i,!1,!0),r[i]=qi(i,!0,!0)}),[t,n,e,r]}const[Ay,Ry,Py,Sy]=wy();function Tl(t,e){const n=e?t?Sy:Py:t?Ry:Ay;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const by={get:Tl(!1,!1)},Cy={get:Tl(!1,!0)},ky={get:Tl(!0,!1)},Vd=new WeakMap,Md=new WeakMap,xd=new WeakMap,Ny=new WeakMap;function Dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:Dy(ny(t))}function pr(t){return qs(t)?t:wl(t,!1,Od,by,Vd)}function Vy(t){return wl(t,!1,Ty,Cy,Md)}function Ld(t){return wl(t,!0,Iy,ky,xd)}function wl(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Oy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tn(t){return qs(t)?Tn(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function Fd(t){return!!(t&&t.__v_isShallow)}function Ud(t){return Tn(t)||qs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function ir(t){return mo(t,"__v_skip",!0),t}const Hs=t=>Le(t)?pr(t):t,Al=t=>Le(t)?Ld(t):t;function $d(t){In&&Ut&&(t=le(t),kd(t.dep||(t.dep=yl())))}function Bd(t,e){t=le(t),t.dep&&mc(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Pt(t){return jd(t,!1)}function My(t){return jd(t,!0)}function jd(t,e){return Ae(t)?t:new xy(t,e)}class xy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Hs(e)}get value(){return $d(this),this._value}set value(e){e=this.__v_isShallow?e:le(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Hs(e),Bd(this))}}function Se(t){return Ae(t)?t.value:t}const Ly={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qd(t){return Tn(t)?t:new Proxy(t,Ly)}function Fy(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=$y(t,n);return e}class Uy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function $y(t,e,n){const r=t[e];return Ae(r)?r:new Uy(t,e,n)}class By{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new vl(e,()=>{this._dirty||(this._dirty=!0,Bd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return $d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jy(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new By(r,s,i||!s,n)}Promise.resolve();function wn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jo(i,e,n)}return s}function St(t,e,n,r){if(te(t)){const i=wn(t,e,n,r);return i&&Td(i)&&i.catch(o=>{Jo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(St(t[i],e,n,r));return s}function Jo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wn(c,null,10,[t,o,a]);return}}qy(t,n,s,r)}function qy(t,e,n,r=!0){console.error(t)}let go=!1,gc=!1;const ft=[];let Xt=0;const ks=[];let Is=null,Pr=0;const Ns=[];let fn=null,Sr=0;const Hd=Promise.resolve();let Rl=null,_c=null;function Pl(t){const e=Rl||Hd;return t?e.then(this?t.bind(this):t):e}function Hy(t){let e=Xt+1,n=ft.length;for(;e<n;){const r=e+n>>>1;zs(ft[r])<t?e=r+1:n=r}return e}function zd(t){(!ft.length||!ft.includes(t,go&&t.allowRecurse?Xt+1:Xt))&&t!==_c&&(t.id==null?ft.push(t):ft.splice(Hy(t.id),0,t),Wd())}function Wd(){!go&&!gc&&(gc=!0,Rl=Hd.then(Qd))}function zy(t){const e=ft.indexOf(t);e>Xt&&ft.splice(e,1)}function Kd(t,e,n,r){X(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Wd()}function Wy(t){Kd(t,Is,ks,Pr)}function Ky(t){Kd(t,fn,Ns,Sr)}function Sl(t,e=null){if(ks.length){for(_c=e,Is=[...new Set(ks)],ks.length=0,Pr=0;Pr<Is.length;Pr++)Is[Pr]();Is=null,Pr=0,_c=null,Sl(t,e)}}function Gd(t){if(Ns.length){const e=[...new Set(Ns)];if(Ns.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((n,r)=>zs(n)-zs(r)),Sr=0;Sr<fn.length;Sr++)fn[Sr]();fn=null,Sr=0}}const zs=t=>t.id==null?1/0:t.id;function Qd(t){gc=!1,go=!0,Sl(t),ft.sort((e,n)=>zs(e)-zs(n));try{for(Xt=0;Xt<ft.length;Xt++){const e=ft[Xt];e&&e.active!==!1&&wn(e,null,14)}}finally{Xt=0,ft.length=0,Gd(),go=!1,Rl=null,(ft.length||ks.length||Ns.length)&&Qd(t)}}function Gy(t,e,...n){const r=t.vnode.props||ge;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ge;f?s=n.map(p=>p.trim()):h&&(s=n.map(hc))}let a,c=r[a=La(e)]||r[a=La(Kt(e))];!c&&i&&(c=r[a=La(dr(e))]),c&&St(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,s)}}function Yd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=Yd(l,e,!0);u&&(a=!0,ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):ot(o,i),r.set(t,o),o)}function bl(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,dr(e))||ae(t,e))}let pt=null,Xd=null;function _o(t){const e=pt;return pt=t,Xd=t&&t.type.__scopeId||null,e}function jr(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yh(-1);const i=_o(e),o=t(...s);return _o(i),r._d&&yh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Fa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:R}=t;let y,P;const V=_o(t);try{if(n.shapeFlag&4){const q=s||r;y=Lt(u.call(q,q,h,i,p,f,g)),P=c}else{const q=e;y=Lt(q.length>1?q(i,{attrs:c,slots:a,emit:l}):q(i,null)),P=e.props?c:Qy(c)}}catch(q){Ds.length=0,Jo(q,t,1),y=Me(Nn)}let H=y;if(P&&R!==!1){const q=Object.keys(P),{shapeFlag:he}=H;q.length&&he&7&&(o&&q.some(pl)&&(P=Yy(P,o)),H=Ks(H,P))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),y=H,_o(V),y}const Qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},Yy=(t,e)=>{const n={};for(const r in t)(!pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!bl(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lh(r,o,l):!0:!!o;return!1}function lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!bl(n,i))return!0}return!1}function Jy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Zy=t=>t.__isSuspense;function ev(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Ky(t)}function no(t,e){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[t]=e}}function bt(t,e,n=!1){const r=$e||pt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r.proxy):e}}const uh={};function Jn(t,e,n){return Jd(t,e,n)}function Jd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ge){const a=$e;let c,l=!1,u=!1;if(Ae(t)?(c=()=>t.value,l=Fd(t)):Tn(t)?(c=()=>t,r=!0):X(t)?(u=!0,l=t.some(Tn),c=()=>t.map(P=>{if(Ae(P))return P.value;if(Tn(P))return Kn(P);if(te(P))return wn(P,a,2)})):te(t)?e?c=()=>wn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[f])}:c=jt,e&&r){const P=c;c=()=>Kn(P())}let h,f=P=>{h=y.onStop=()=>{wn(P,a,4)}};if(Gs)return f=jt,e?n&&St(e,a,3,[c(),u?[]:void 0,f]):c(),jt;let p=u?[]:uh;const g=()=>{if(y.active)if(e){const P=y.run();(r||l||(u?P.some((V,H)=>js(V,p[H])):js(P,p)))&&(h&&h(),St(e,a,3,[P,p===uh?void 0:p,f]),p=P)}else y.run()};g.allowRecurse=!!e;let R;s==="sync"?R=g:s==="post"?R=()=>at(g,a&&a.suspense):R=()=>{!a||a.isMounted?Wy(g):g()};const y=new vl(c,R);return e?n?g():p=y.run():s==="post"?at(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&ml(a.scope.effects,y)}}function tv(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Zd(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=$e;qr(this);const a=Jd(s,i.bind(r),n);return o?qr(o):er(),a}function Zd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kn(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))Kn(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Kn(t[n],e);else if(Id(t)||xr(t))t.forEach(n=>{Kn(n,e)});else if(Ad(t))for(const n in t)Kn(t[n],e);return t}function ep(t){return te(t)?{setup:t,name:t.name}:t}const yc=t=>!!t.type.__asyncLoader,tp=t=>t.type.__isKeepAlive;function nv(t,e){np(t,"a",e)}function rv(t,e){np(t,"da",e)}function np(t,e,n=$e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)tp(s.parent.vnode)&&sv(r,e,n,s),s=s.parent}}function sv(t,e,n,r){const s=Zo(e,t,r,!0);Cl(()=>{ml(r[e],s)},n)}function Zo(t,e,n=$e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ns(),qr(n);const a=St(e,n,t,o);return er(),rs(),a});return r?s.unshift(i):s.push(i),i}}const an=t=>(e,n=$e)=>(!Gs||t==="sp")&&Zo(t,e,n),iv=an("bm"),rp=an("m"),ov=an("bu"),av=an("u"),cv=an("bum"),Cl=an("um"),lv=an("sp"),uv=an("rtg"),hv=an("rtc");function fv(t,e=$e){Zo("ec",t,e)}let vc=!0;function dv(t){const e=ip(t),n=t.proxy,r=t.ctx;vc=!1,e.beforeCreate&&hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:R,deactivated:y,beforeDestroy:P,beforeUnmount:V,destroyed:H,unmounted:q,render:he,renderTracked:z,renderTriggered:Z,errorCaptured:Qe,serverPrefetch:Pe,expose:De,inheritAttrs:wt,components:At,directives:yt,filters:Oe}=e;if(l&&pv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const _e in o){const fe=o[_e];te(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);Le(_e)&&(t.data=pr(_e))}if(vc=!0,i)for(const _e in i){const fe=i[_e],vt=te(fe)?fe.bind(n,n):te(fe.get)?fe.get.bind(n,n):jt,Ir=!te(fe)&&te(fe.set)?fe.set.bind(n):jt,Qt=dt({get:vt,set:Ir});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Vt=>Qt.value=Vt})}if(a)for(const _e in a)sp(a[_e],r,n,_e);if(c){const _e=te(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{no(fe,_e[fe])})}u&&hh(u,t,"c");function Ve(_e,fe){X(fe)?fe.forEach(vt=>_e(vt.bind(n))):fe&&_e(fe.bind(n))}if(Ve(iv,h),Ve(rp,f),Ve(ov,p),Ve(av,g),Ve(nv,R),Ve(rv,y),Ve(fv,Qe),Ve(hv,z),Ve(uv,Z),Ve(cv,V),Ve(Cl,q),Ve(lv,Pe),X(De))if(De.length){const _e=t.exposed||(t.exposed={});De.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:vt=>n[fe]=vt})})}else t.exposed||(t.exposed={});he&&t.render===jt&&(t.render=he),wt!=null&&(t.inheritAttrs=wt),At&&(t.components=At),yt&&(t.directives=yt)}function pv(t,e,n=jt,r=!1){X(t)&&(t=Ec(t));for(const s in t){const i=t[s];let o;Le(i)?"default"in i?o=bt(i.from||s,i.default,!0):o=bt(i.from||s):o=bt(i),Ae(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function hh(t,e,n){St(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,r){const s=r.includes(".")?Zd(n,r):()=>n[r];if(Be(t)){const i=e[t];te(i)&&Jn(s,i)}else if(te(t))Jn(s,t.bind(n));else if(Le(t))if(X(t))t.forEach(i=>sp(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Jn(s,i,t)}}function ip(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>yo(c,l,o,!0)),yo(c,e,o)),i.set(e,c),c}function yo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&yo(t,i,n,!0),s&&s.forEach(o=>yo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mv={data:fh,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Hn,directives:Hn,watch:_v,provide:fh,inject:gv};function fh(t,e){return e?t?function(){return ot(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function gv(t,e){return Hn(Ec(t),Ec(e))}function Ec(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?ot(ot(Object.create(null),t),e):e}function _v(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function yv(t,e,n,r=!1){const s={},i={};mo(i,ea,1),t.propsDefaults=Object.create(null),op(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function vv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const p=e[f];if(c)if(ae(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const g=Kt(f);s[g]=Ic(c,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{op(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=dr(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ic(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&tn(t,"set","$attrs")}function op(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(eo(c))continue;const l=e[c];let u;s&&ae(s,u=Kt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:bl(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||ge;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ic(s,c,h,l[h],t,!ae(l,h))}}return o}function Ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(qr(s),r=l[n]=c.call(null,e),er())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dr(n))&&(r=!0))}return r}function ap(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,p]=ap(h,e,!0);ot(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Mr),Mr;if(X(i))for(let u=0;u<i.length;u++){const h=Kt(i[u]);dh(h)&&(o[h]=ge)}else if(i)for(const u in i){const h=Kt(u);if(dh(h)){const f=i[u],p=o[h]=X(f)||te(f)?{type:f}:f;if(p){const g=gh(Boolean,p.type),R=gh(String,p.type);p[0]=g>-1,p[1]=R<0||g<R,(g>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function dh(t){return t[0]!=="$"}function ph(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function mh(t,e){return ph(t)===ph(e)}function gh(t,e){return X(e)?e.findIndex(n=>mh(n,t)):te(e)&&mh(e,t)?0:-1}const cp=t=>t[0]==="_"||t==="$stable",kl=t=>X(t)?t.map(Lt):[Lt(t)],Ev=(t,e,n)=>{const r=jr((...s)=>kl(e(...s)),n);return r._c=!1,r},lp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cp(s))continue;const i=t[s];if(te(i))e[s]=Ev(s,i,r);else if(i!=null){const o=kl(i);e[s]=()=>o}}},up=(t,e)=>{const n=kl(e);t.slots.default=()=>n},Iv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),mo(e,"_",n)):lp(e,t.slots={})}else t.slots={},e&&up(t,e);mo(t.slots,ea,1)},Tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ge;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ot(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lp(e,s)),o=e}else e&&(up(t,e),o={default:1});if(i)for(const a in s)!cp(a)&&!(a in o)&&delete s[a]};function vo(t,e){const n=pt;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ge]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&Kn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ns(),St(c,n,8,[t.el,a,t,e]),rs())}}function hp(){return{app:null,config:{isNativeTag:Z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wv=0;function Av(t,e){return function(r,s=null){s!=null&&!Le(s)&&(s=null);const i=hp(),o=new Set;let a=!1;const c=i.app={_uid:wv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Me(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Vl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Tc(t,e,n,r,s=!1){if(X(t)){t.forEach((f,p)=>Tc(f,e&&(X(e)?e[p]:e),n,r,s));return}if(yc(r)&&!s)return;const i=r.shapeFlag&4?Vl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Be(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ae(l)&&(l.value=null)),te(c))wn(c,a,12,[o,u]);else{const f=Be(c),p=Ae(c);if(f||p){const g=()=>{if(t.f){const R=f?u[c]:c.value;s?X(R)&&ml(R,i):X(R)?R.includes(i)||R.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):Ae(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,at(g,n)):g()}}}const at=ev;function Rv(t){return Pv(t)}function Pv(t,e){const n=iy();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=jt,cloneNode:g,insertStaticContent:R}=t,y=(d,m,_,T=null,I=null,b=null,D=!1,S=null,C=!!m.dynamicChildren)=>{if(d===m)return;d&&!ps(d,m)&&(T=U(d),Et(d,I,b,!0),d=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:A,ref:B,shapeFlag:L}=m;switch(A){case Dl:P(d,m,_,T);break;case Nn:V(d,m,_,T);break;case Ua:d==null&&H(m,_,T,D);break;case ht:yt(d,m,_,T,I,b,D,S,C);break;default:L&1?z(d,m,_,T,I,b,D,S,C):L&6?Oe(d,m,_,T,I,b,D,S,C):(L&64||L&128)&&A.process(d,m,_,T,I,b,D,S,C,ye)}B!=null&&I&&Tc(B,d&&d.ref,b,m||d,!m)},P=(d,m,_,T)=>{if(d==null)r(m.el=a(m.children),_,T);else{const I=m.el=d.el;m.children!==d.children&&l(I,m.children)}},V=(d,m,_,T)=>{d==null?r(m.el=c(m.children||""),_,T):m.el=d.el},H=(d,m,_,T)=>{[d.el,d.anchor]=R(d.children,m,_,T,d.el,d.anchor)},q=({el:d,anchor:m},_,T)=>{let I;for(;d&&d!==m;)I=f(d),r(d,_,T),d=I;r(m,_,T)},he=({el:d,anchor:m})=>{let _;for(;d&&d!==m;)_=f(d),s(d),d=_;s(m)},z=(d,m,_,T,I,b,D,S,C)=>{D=D||m.type==="svg",d==null?Z(m,_,T,I,b,D,S,C):De(d,m,I,b,D,S,C)},Z=(d,m,_,T,I,b,D,S)=>{let C,A;const{type:B,props:L,shapeFlag:j,transition:Q,patchFlag:oe,dirs:we}=d;if(d.el&&g!==void 0&&oe===-1)C=d.el=g(d.el);else{if(C=d.el=o(d.type,b,L&&L.is,L),j&8?u(C,d.children):j&16&&Pe(d.children,C,null,T,I,b&&B!=="foreignObject",D,S),we&&$n(d,null,T,"created"),L){for(const Ee in L)Ee!=="value"&&!eo(Ee)&&i(C,Ee,null,L[Ee],b,d.children,T,I,k);"value"in L&&i(C,"value",null,L.value),(A=L.onVnodeBeforeMount)&&xt(A,T,d)}Qe(C,d,d.scopeId,D,T)}we&&$n(d,null,T,"beforeMount");const pe=(!I||I&&!I.pendingBranch)&&Q&&!Q.persisted;pe&&Q.beforeEnter(C),r(C,m,_),((A=L&&L.onVnodeMounted)||pe||we)&&at(()=>{A&&xt(A,T,d),pe&&Q.enter(C),we&&$n(d,null,T,"mounted")},I)},Qe=(d,m,_,T,I)=>{if(_&&p(d,_),T)for(let b=0;b<T.length;b++)p(d,T[b]);if(I){let b=I.subTree;if(m===b){const D=I.vnode;Qe(d,D,D.scopeId,D.slotScopeIds,I.parent)}}},Pe=(d,m,_,T,I,b,D,S,C=0)=>{for(let A=C;A<d.length;A++){const B=d[A]=S?dn(d[A]):Lt(d[A]);y(null,B,m,_,T,I,b,D,S)}},De=(d,m,_,T,I,b,D)=>{const S=m.el=d.el;let{patchFlag:C,dynamicChildren:A,dirs:B}=m;C|=d.patchFlag&16;const L=d.props||ge,j=m.props||ge;let Q;_&&Bn(_,!1),(Q=j.onVnodeBeforeUpdate)&&xt(Q,_,m,d),B&&$n(m,d,_,"beforeUpdate"),_&&Bn(_,!0);const oe=I&&m.type!=="foreignObject";if(A?wt(d.dynamicChildren,A,S,_,T,oe,b):D||vt(d,m,S,null,_,T,oe,b,!1),C>0){if(C&16)At(S,m,L,j,_,T,I);else if(C&2&&L.class!==j.class&&i(S,"class",null,j.class,I),C&4&&i(S,"style",L.style,j.style,I),C&8){const we=m.dynamicProps;for(let pe=0;pe<we.length;pe++){const Ee=we[pe],Rt=L[Ee],Tr=j[Ee];(Tr!==Rt||Ee==="value")&&i(S,Ee,Rt,Tr,I,d.children,_,T,k)}}C&1&&d.children!==m.children&&u(S,m.children)}else!D&&A==null&&At(S,m,L,j,_,T,I);((Q=j.onVnodeUpdated)||B)&&at(()=>{Q&&xt(Q,_,m,d),B&&$n(m,d,_,"updated")},T)},wt=(d,m,_,T,I,b,D)=>{for(let S=0;S<m.length;S++){const C=d[S],A=m[S],B=C.el&&(C.type===ht||!ps(C,A)||C.shapeFlag&70)?h(C.el):_;y(C,A,B,null,T,I,b,D,!0)}},At=(d,m,_,T,I,b,D)=>{if(_!==T){for(const S in T){if(eo(S))continue;const C=T[S],A=_[S];C!==A&&S!=="value"&&i(d,S,A,C,D,m.children,I,b,k)}if(_!==ge)for(const S in _)!eo(S)&&!(S in T)&&i(d,S,_[S],null,D,m.children,I,b,k);"value"in T&&i(d,"value",_.value,T.value)}},yt=(d,m,_,T,I,b,D,S,C)=>{const A=m.el=d?d.el:a(""),B=m.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:Q}=m;Q&&(S=S?S.concat(Q):Q),d==null?(r(A,_,T),r(B,_,T),Pe(m.children,_,B,I,b,D,S,C)):L>0&&L&64&&j&&d.dynamicChildren?(wt(d.dynamicChildren,j,_,I,b,D,S),(m.key!=null||I&&m===I.subTree)&&fp(d,m,!0)):vt(d,m,_,B,I,b,D,S,C)},Oe=(d,m,_,T,I,b,D,S,C)=>{m.slotScopeIds=S,d==null?m.shapeFlag&512?I.ctx.activate(m,_,T,D,C):Er(m,_,T,I,b,D,C):Ve(d,m,C)},Er=(d,m,_,T,I,b,D)=>{const S=d.component=$v(d,T,I);if(tp(d)&&(S.ctx.renderer=ye),Bv(S),S.asyncDep){if(I&&I.registerDep(S,_e),!d.el){const C=S.subTree=Me(Nn);V(null,C,m,_)}return}_e(S,d,m,_,I,b,D)},Ve=(d,m,_)=>{const T=m.component=d.component;if(Xy(d,m,_))if(T.asyncDep&&!T.asyncResolved){fe(T,m,_);return}else T.next=m,zy(T.update),T.update();else m.component=d.component,m.el=d.el,T.vnode=m},_e=(d,m,_,T,I,b,D)=>{const S=()=>{if(d.isMounted){let{next:B,bu:L,u:j,parent:Q,vnode:oe}=d,we=B,pe;Bn(d,!1),B?(B.el=oe.el,fe(d,B,D)):B=oe,L&&to(L),(pe=B.props&&B.props.onVnodeBeforeUpdate)&&xt(pe,Q,B,oe),Bn(d,!0);const Ee=Fa(d),Rt=d.subTree;d.subTree=Ee,y(Rt,Ee,h(Rt.el),U(Rt),d,I,b),B.el=Ee.el,we===null&&Jy(d,Ee.el),j&&at(j,I),(pe=B.props&&B.props.onVnodeUpdated)&&at(()=>xt(pe,Q,B,oe),I)}else{let B;const{el:L,props:j}=m,{bm:Q,m:oe,parent:we}=d,pe=yc(m);if(Bn(d,!1),Q&&to(Q),!pe&&(B=j&&j.onVnodeBeforeMount)&&xt(B,we,m),Bn(d,!0),L&&ee){const Ee=()=>{d.subTree=Fa(d),ee(L,d.subTree,d,I,null)};pe?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Ee()):Ee()}else{const Ee=d.subTree=Fa(d);y(null,Ee,_,T,d,I,b),m.el=Ee.el}if(oe&&at(oe,I),!pe&&(B=j&&j.onVnodeMounted)){const Ee=m;at(()=>xt(B,we,Ee),I)}m.shapeFlag&256&&d.a&&at(d.a,I),d.isMounted=!0,m=_=T=null}},C=d.effect=new vl(S,()=>zd(d.update),d.scope),A=d.update=C.run.bind(C);A.id=d.uid,Bn(d,!0),A()},fe=(d,m,_)=>{m.component=d;const T=d.vnode.props;d.vnode=m,d.next=null,vv(d,m.props,T,_),Tv(d,m.children,_),ns(),Sl(void 0,d.update),rs()},vt=(d,m,_,T,I,b,D,S,C=!1)=>{const A=d&&d.children,B=d?d.shapeFlag:0,L=m.children,{patchFlag:j,shapeFlag:Q}=m;if(j>0){if(j&128){Qt(A,L,_,T,I,b,D,S,C);return}else if(j&256){Ir(A,L,_,T,I,b,D,S,C);return}}Q&8?(B&16&&k(A,I,b),L!==A&&u(_,L)):B&16?Q&16?Qt(A,L,_,T,I,b,D,S,C):k(A,I,b,!0):(B&8&&u(_,""),Q&16&&Pe(L,_,T,I,b,D,S,C))},Ir=(d,m,_,T,I,b,D,S,C)=>{d=d||Mr,m=m||Mr;const A=d.length,B=m.length,L=Math.min(A,B);let j;for(j=0;j<L;j++){const Q=m[j]=C?dn(m[j]):Lt(m[j]);y(d[j],Q,_,null,I,b,D,S,C)}A>B?k(d,I,b,!0,!1,L):Pe(m,_,T,I,b,D,S,C,L)},Qt=(d,m,_,T,I,b,D,S,C)=>{let A=0;const B=m.length;let L=d.length-1,j=B-1;for(;A<=L&&A<=j;){const Q=d[A],oe=m[A]=C?dn(m[A]):Lt(m[A]);if(ps(Q,oe))y(Q,oe,_,null,I,b,D,S,C);else break;A++}for(;A<=L&&A<=j;){const Q=d[L],oe=m[j]=C?dn(m[j]):Lt(m[j]);if(ps(Q,oe))y(Q,oe,_,null,I,b,D,S,C);else break;L--,j--}if(A>L){if(A<=j){const Q=j+1,oe=Q<B?m[Q].el:T;for(;A<=j;)y(null,m[A]=C?dn(m[A]):Lt(m[A]),_,oe,I,b,D,S,C),A++}}else if(A>j)for(;A<=L;)Et(d[A],I,b,!0),A++;else{const Q=A,oe=A,we=new Map;for(A=oe;A<=j;A++){const ut=m[A]=C?dn(m[A]):Lt(m[A]);ut.key!=null&&we.set(ut.key,A)}let pe,Ee=0;const Rt=j-oe+1;let Tr=!1,Zu=0;const ds=new Array(Rt);for(A=0;A<Rt;A++)ds[A]=0;for(A=Q;A<=L;A++){const ut=d[A];if(Ee>=Rt){Et(ut,I,b,!0);continue}let Mt;if(ut.key!=null)Mt=we.get(ut.key);else for(pe=oe;pe<=j;pe++)if(ds[pe-oe]===0&&ps(ut,m[pe])){Mt=pe;break}Mt===void 0?Et(ut,I,b,!0):(ds[Mt-oe]=A+1,Mt>=Zu?Zu=Mt:Tr=!0,y(ut,m[Mt],_,null,I,b,D,S,C),Ee++)}const eh=Tr?Sv(ds):Mr;for(pe=eh.length-1,A=Rt-1;A>=0;A--){const ut=oe+A,Mt=m[ut],th=ut+1<B?m[ut+1].el:T;ds[A]===0?y(null,Mt,_,th,I,b,D,S,C):Tr&&(pe<0||A!==eh[pe]?Vt(Mt,_,th,2):pe--)}}},Vt=(d,m,_,T,I=null)=>{const{el:b,type:D,transition:S,children:C,shapeFlag:A}=d;if(A&6){Vt(d.component.subTree,m,_,T);return}if(A&128){d.suspense.move(m,_,T);return}if(A&64){D.move(d,m,_,ye);return}if(D===ht){r(b,m,_);for(let L=0;L<C.length;L++)Vt(C[L],m,_,T);r(d.anchor,m,_);return}if(D===Ua){q(d,m,_);return}if(T!==2&&A&1&&S)if(T===0)S.beforeEnter(b),r(b,m,_),at(()=>S.enter(b),I);else{const{leave:L,delayLeave:j,afterLeave:Q}=S,oe=()=>r(b,m,_),we=()=>{L(b,()=>{oe(),Q&&Q()})};j?j(b,oe,we):we()}else r(b,m,_)},Et=(d,m,_,T=!1,I=!1)=>{const{type:b,props:D,ref:S,children:C,dynamicChildren:A,shapeFlag:B,patchFlag:L,dirs:j}=d;if(S!=null&&Tc(S,null,_,d,!0),B&256){m.ctx.deactivate(d);return}const Q=B&1&&j,oe=!yc(d);let we;if(oe&&(we=D&&D.onVnodeBeforeUnmount)&&xt(we,m,d),B&6)F(d.component,_,T);else{if(B&128){d.suspense.unmount(_,T);return}Q&&$n(d,null,m,"beforeUnmount"),B&64?d.type.remove(d,m,_,I,ye,T):A&&(b!==ht||L>0&&L&64)?k(A,m,_,!1,!0):(b===ht&&L&384||!I&&B&16)&&k(C,m,_),T&&xa(d)}(oe&&(we=D&&D.onVnodeUnmounted)||Q)&&at(()=>{we&&xt(we,m,d),Q&&$n(d,null,m,"unmounted")},_)},xa=d=>{const{type:m,el:_,anchor:T,transition:I}=d;if(m===ht){E(_,T);return}if(m===Ua){he(d);return}const b=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:S}=I,C=()=>D(_,b);S?S(d.el,b,C):C()}else b()},E=(d,m)=>{let _;for(;d!==m;)_=f(d),s(d),d=_;s(m)},F=(d,m,_)=>{const{bum:T,scope:I,update:b,subTree:D,um:S}=d;T&&to(T),I.stop(),b&&(b.active=!1,Et(D,d,m,_)),S&&at(S,m),at(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},k=(d,m,_,T=!1,I=!1,b=0)=>{for(let D=b;D<d.length;D++)Et(d[D],m,_,T,I)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),de=(d,m,_)=>{d==null?m._vnode&&Et(m._vnode,null,null,!0):y(m._vnode||null,d,m,null,null,null,_),Gd(),m._vnode=d},ye={p:y,um:Et,m:Vt,r:xa,mt:Er,mc:Pe,pc:vt,pbc:wt,n:U,o:t};let ne,ee;return e&&([ne,ee]=e(ye)),{render:de,hydrate:ne,createApp:Av(de,ne)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fp(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||fp(o,a))}}function Sv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const bv=t=>t.__isTeleport,dp="components";function Nl(t,e){return kv(dp,t,!0,e)||t}const Cv=Symbol();function kv(t,e,n=!0,r=!1){const s=pt||$e;if(s){const i=s.type;if(t===dp){const a=zv(i);if(a&&(a===e||a===Kt(e)||a===Yo(Kt(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[Kt(e)]||t[Yo(Kt(e))])}const ht=Symbol(void 0),Dl=Symbol(void 0),Nn=Symbol(void 0),Ua=Symbol(void 0),Ds=[];let Zn=null;function Ze(t=!1){Ds.push(Zn=t?null:[])}function Nv(){Ds.pop(),Zn=Ds[Ds.length-1]||null}let Eo=1;function yh(t){Eo+=t}function pp(t){return t.dynamicChildren=Eo>0?Zn||Mr:null,Nv(),Eo>0&&Zn&&Zn.push(t),t}function kt(t,e,n,r,s,i){return pp(x(t,e,n,r,s,i,!0))}function Ws(t,e,n,r,s){return pp(Me(t,e,n,r,s,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const ea="__vInternal",mp=({key:t})=>t??null,ro=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Ae(t)||te(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function x(t,e=null,n=null,r=0,s=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mp(e),ref:e&&ro(e),scopeId:Xd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ol(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),Eo>0&&!o&&Zn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Zn.push(c),c}const Me=Dv;function Dv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Cv)&&(t=Nn),Io(t)){const a=Ks(t,e,!0);return n&&Ol(a,n),a}if(Wv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=Cn(a)),Le(c)&&(Ud(c)&&!X(c)&&(c=ot({},c)),e.style=dl(c))}const o=Be(t)?1:Zy(t)?128:bv(t)?64:Le(t)?4:te(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function Ov(t){return t?Ud(t)||ea in t?ot({},t):t:null}function Ks(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Vv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mp(a),ref:e&&e.ref?n&&s?X(s)?s.concat(ro(e)):[s,ro(e)]:ro(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ks(t.ssContent),ssFallback:t.ssFallback&&Ks(t.ssFallback),el:t.el,anchor:t.anchor}}function mi(t=" ",e=0){return Me(Dl,null,t,e)}function so(t="",e=!1){return e?(Ze(),Ws(Nn,null,t)):Me(Nn,null,t)}function Lt(t){return t==null||typeof t=="boolean"?Me(Nn):X(t)?Me(ht,null,t.slice()):typeof t=="object"?dn(t):Me(Dl,null,String(t))}function dn(t){return t.el===null||t.memo?t:Ks(t)}function Ol(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ol(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ea in e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[mi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cn([e.class,r.class]));else if(s==="style")e.style=dl([e.style,r.style]);else if(Ko(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xt(t,e,n,r=null){St(t,e,7,[n,r])}function Mv(t,e,n,r){let s;const i=n&&n[r];if(X(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function xv(t,e,n={},r,s){if(pt.isCE)return Me("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ze();const o=i&&gp(i(n)),a=Ws(ht,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function gp(t){return t.some(e=>Io(e)?!(e.type===Nn||e.type===ht&&!gp(e.children)):!0)?t:null}const wc=t=>t?yp(t)?Vl(t)||t.proxy:wc(t.parent):null,To=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wc(t.parent),$root:t=>wc(t.root),$emit:t=>t.emit,$options:t=>ip(t),$forceUpdate:t=>()=>zd(t.update),$nextTick:t=>Pl.bind(t.proxy),$watch:t=>tv.bind(t)}),Lv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ge&&ae(r,e))return o[e]=1,r[e];if(s!==ge&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==ge&&ae(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const u=To[e];let h,f;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ge&&ae(s,e))s[e]=n;else if(r!==ge&&ae(r,e))r[e]=n;else if(ae(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&ae(t,o)||e!==ge&&ae(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(To,o)||ae(s.config.globalProperties,o)}},Fv=hp();let Uv=0;function $v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fv,i={uid:Uv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:Yd(r,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gy.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const _p=()=>$e||pt,qr=t=>{$e=t,t.scope.on()},er=()=>{$e&&$e.scope.off(),$e=null};function yp(t){return t.vnode.shapeFlag&4}let Gs=!1;function Bv(t,e=!1){Gs=e;const{props:n,children:r}=t.vnode,s=yp(t);yv(t,n,s,e),Iv(t,r);const i=s?jv(t,e):void 0;return Gs=!1,i}function jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ir(new Proxy(t.ctx,Lv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Hv(t):null;qr(t),ns();const i=wn(r,t,0,[t.props,s]);if(rs(),er(),Td(i)){if(i.then(er,er),e)return i.then(o=>{vh(t,o,e)}).catch(o=>{Jo(o,t,0)});t.asyncDep=i}else vh(t,i,e)}else vp(t,e)}function vh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=qd(e)),vp(t,n)}let Eh;function vp(t,e,n){const r=t.type;if(!t.render){if(!e&&Eh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ot(ot({isCustomElement:i,delimiters:a},o),c);r.render=Eh(s,l)}}t.render=r.render||jt}qr(t),ns(),dv(t),rs(),er()}function qv(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function Hv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=qv(t))},slots:t.slots,emit:t.emit,expose:e}}function Vl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qd(ir(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in To)return To[n](t)}}))}function zv(t){return te(t)&&t.displayName||t.name}function Wv(t){return te(t)&&"__vccOpts"in t}const dt=(t,e)=>jy(t,e,Gs);function Ep(t,e,n){const r=arguments.length;return r===2?Le(e)&&!X(e)?Io(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Me(t,e,n))}const Kv="3.2.30",Gv="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,Ih=Wn&&Wn.createElement("template"),Qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(Gv,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ih.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ih.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Yv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xv(t,e,n){const r=t.style,s=Be(n);if(n&&!s){for(const i in n)Ac(r,i,n[i]);if(e&&!Be(e))for(const i in e)n[i]==null&&Ac(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Th=/\s*!important$/;function Ac(t,e,n){if(X(n))n.forEach(r=>Ac(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Jv(t,e);Th.test(n)?t.setProperty(dr(r),n.replace(Th,""),"important"):t[r]=n}}const wh=["Webkit","Moz","ms"],$a={};function Jv(t,e){const n=$a[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return $a[e]=r;r=Yo(r);for(let s=0;s<wh.length;s++){const i=wh[s]+r;if(i in t)return $a[e]=i}return e}const Ah="http://www.w3.org/1999/xlink";function Zv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ah,e.slice(6,e.length)):t.setAttributeNS(Ah,e,n);else{const i=Q_(e);n==null||i&&!vd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=vd(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let wo=Date.now,Ip=!1;if(typeof window<"u"){wo()>document.createEvent("Event").timeStamp&&(wo=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ip=!!(t&&Number(t[1])<=53)}let Rc=0;const tE=Promise.resolve(),nE=()=>{Rc=0},rE=()=>Rc||(tE.then(nE),Rc=wo());function br(t,e,n,r){t.addEventListener(e,n,r)}function sE(t,e,n,r){t.removeEventListener(e,n,r)}function iE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=oE(e);if(r){const l=i[e]=aE(r,s);br(t,a,l,c)}else o&&(sE(t,a,o,c),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function oE(t){let e;if(Rh.test(t)){e={};let n;for(;n=t.match(Rh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[dr(t.slice(2)),e]}function aE(t,e){const n=r=>{const s=r.timeStamp||wo();(Ip||s>=n.attached-1)&&St(cE(r,n.value),e,5,[r])};return n.value=t,n.attached=rE(),n}function cE(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ph=/^on[a-z]/,lE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Yv(t,r,s):e==="style"?Xv(t,n,r):Ko(e)?pl(e)||iE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uE(t,e,r,s))?eE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zv(t,e,r,s))};function uE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ph.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ph.test(e)&&Be(n)?!1:e in t}const Sh=t=>{const e=t.props["onUpdate:modelValue"];return X(e)?n=>to(e,n):e};function hE(t){t.target.composing=!0}function bh(t){const e=t.target;e.composing&&(e.composing=!1,fE(e,"input"))}function fE(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Pc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Sh(s);const i=r||s.props&&s.props.type==="number";br(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=hc(a)),t._assign(a)}),n&&br(t,"change",()=>{t.value=t.value.trim()}),e||(br(t,"compositionstart",hE),br(t,"compositionend",bh),br(t,"change",bh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Sh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},dE=["ctrl","shift","alt","meta"],pE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dE.some(n=>t[`${n}Key`]&&!e.includes(n))},tr=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=pE[e[s]];if(i&&i(n,e))return}return t(n,...r)},mE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gE=(t,e)=>n=>{if(!("key"in n))return;const r=dr(n.key);if(e.some(s=>s===r||mE[s]===r))return t(n)},_E=ot({patchProp:lE},Qv);let Ch;function yE(){return Ch||(Ch=Rv(_E))}const vE=(...t)=>{const e=yE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=EE(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function EE(t){return Be(t)?document.querySelector(t):t}var IE=!1;/*!
  * pinia v2.0.11
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Tp;const ta=t=>Tp=t,wp=Symbol();function Sc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Os;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Os||(Os={}));function TE(){const t=Pd(!0),e=t.run(()=>Pt({}));let n=[],r=[];const s=ir({install(i){ta(s),s._a=i,i.provide(wp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!IE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ap=()=>{};function kh(t,e,n,r=Ap){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&_p()&&Cl(s),s}function wr(t,...e){t.slice().forEach(n=>{n(...e)})}function bc(t,e){for(const n in e){const r=e[n],s=t[n];Sc(s)&&Sc(r)&&!Ae(r)&&!Tn(r)?t[n]=bc(s,r):t[n]=r}return t}const wE=Symbol();function AE(t){return!Sc(t)||!t.hasOwnProperty(wE)}const{assign:Yt}=Object;function RE(t){return!!(Ae(t)&&t.effect)}function PE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Fy(n.state.value[t]);return Yt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=ir(dt(()=>{ta(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Rp(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(f=>{Yt(f,h)})},c}function Rp(t,e,n={},r,s){let i;const o=n.state,a=Yt({actions:{}},n),c={deep:!0};let l,u,h=ir([]),f=ir([]),p;const g=r.state.value[t];!o&&!g&&(r.state.value[t]={}),Pt({});function R(z){let Z;l=u=!1,typeof z=="function"?(z(r.state.value[t]),Z={type:Os.patchFunction,storeId:t,events:p}):(bc(r.state.value[t],z),Z={type:Os.patchObject,payload:z,storeId:t,events:p}),Pl().then(()=>{l=!0}),u=!0,wr(h,Z,r.state.value[t])}const y=Ap;function P(){i.stop(),h=[],f=[],r._s.delete(t)}function V(z,Z){return function(){ta(r);const Qe=Array.from(arguments),Pe=[],De=[];function wt(Oe){Pe.push(Oe)}function At(Oe){De.push(Oe)}wr(f,{args:Qe,name:z,store:q,after:wt,onError:At});let yt;try{yt=Z.apply(this&&this.$id===t?this:q,Qe)}catch(Oe){throw wr(De,Oe),Oe}return yt instanceof Promise?yt.then(Oe=>(wr(Pe,Oe),Oe)).catch(Oe=>(wr(De,Oe),Promise.reject(Oe))):(wr(Pe,yt),yt)}}const H={_p:r,$id:t,$onAction:kh.bind(null,f),$patch:R,$reset:y,$subscribe(z,Z={}){const Qe=kh(h,z,Z.detached,()=>Pe()),Pe=i.run(()=>Jn(()=>r.state.value[t],De=>{(Z.flush==="sync"?u:l)&&z({storeId:t,type:Os.direct,events:p},De)},Yt({},c,Z)));return Qe},$dispose:P},q=pr(Yt({},H));r._s.set(t,q);const he=r._e.run(()=>(i=Pd(),i.run(()=>e())));for(const z in he){const Z=he[z];if(Ae(Z)&&!RE(Z)||Tn(Z))o||(g&&AE(Z)&&(Ae(Z)?Z.value=g[z]:bc(Z,g[z])),r.state.value[t][z]=Z);else if(typeof Z=="function"){const Qe=V(z,Z);he[z]=Qe,a.actions[z]=Z}}return Yt(q,he),Yt(le(q),he),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:z=>{R(Z=>{Yt(Z,z)})}}),r._p.forEach(z=>{Yt(q,i.run(()=>z({store:q,app:r._a,pinia:r,options:a})))}),g&&o&&n.hydrate&&n.hydrate(q.$state,g),l=!0,u=!0,q}function Pp(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=_p();return a=a||l&&bt(wp),a&&ta(a),a=Tp,a._s.has(r)||(i?Rp(r,e,s,a):PE(r,s,a)),a._s.get(r)}return o.$id=r,o}function SE(t){return ay()?(cy(t),!0):!1}function Ao(t){return typeof t=="function"?t():Se(t)}const Sp=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const bE=Object.prototype.toString,CE=t=>bE.call(t)==="[object Object]",io=()=>{},kE=NE();function NE(){var t,e;return Sp&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const DE=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,OE=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function VE(t,e,n,r){let s=t<12?"AM":"PM";return r&&(s=s.split("").reduce((i,o)=>i+=`${o}.`,"")),n?s.toLowerCase():s}function jn(t){const e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}function ME(t,e,n={}){var r;const s=t.getFullYear(),i=t.getMonth(),o=t.getDate(),a=t.getHours(),c=t.getMinutes(),l=t.getSeconds(),u=t.getMilliseconds(),h=t.getDay(),f=(r=n.customMeridiem)!=null?r:VE,p={Yo:()=>jn(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>i+1,Mo:()=>jn(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(o),Do:()=>jn(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(a),Ho:()=>jn(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),ho:()=>jn(a%12||12),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(c),mo:()=>jn(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(l),so:()=>jn(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>h,dd:()=>t.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>f(a,c),AA:()=>f(a,c,!1,!0),a:()=>f(a,c,!0),aa:()=>f(a,c,!0,!0)};return e.replace(OE,(g,R)=>{var y,P;return(P=R??((y=p[g])==null?void 0:y.call(p)))!=null?P:g})}function xE(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(DE);if(e){const n=e[2]-1||0,r=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,r)}}return new Date(t)}function LE(t,e="HH:mm:ss",n={}){return dt(()=>ME(xE(Ao(t)),Ao(e),n))}function Ts(t){var e;const n=Ao(t);return(e=n==null?void 0:n.$el)!=null?e:n}const bp=Sp?window:void 0;function Ba(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=bp):[e,n,r,s]=t,!e)return io;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,f,p)=>(u.addEventListener(h,f,p),()=>u.removeEventListener(h,f,p)),c=Jn(()=>[Ts(e),Ao(s)],([u,h])=>{if(o(),!u)return;const f=CE(h)?{...h}:h;i.push(...n.flatMap(p=>r.map(g=>a(u,p,g,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return SE(l),l}let Nh=!1;function FE(t,e,n={}){const{window:r=bp,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return io;kE&&!Nh&&(Nh=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",io)),r.document.documentElement.addEventListener("click",io));let a=!0;const c=f=>s.some(p=>{if(typeof p=="string")return Array.from(r.document.querySelectorAll(p)).some(g=>g===f.target||f.composedPath().includes(g));{const g=Ts(p);return g&&(f.target===g||f.composedPath().includes(g))}}),u=[Ba(r,"click",f=>{const p=Ts(t);if(!(!p||p===f.target||f.composedPath().includes(p))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}e(f)}},{passive:!0,capture:i}),Ba(r,"pointerdown",f=>{const p=Ts(t);a=!c(f)&&!!(p&&!f.composedPath().includes(p))},{passive:!0}),o&&Ba(r,"blur",f=>{setTimeout(()=>{var p;const g=Ts(t);((p=r.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(g!=null&&g.contains(r.document.activeElement))&&e(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}var Dh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new $E;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(t){const e=Cp(t);return kp.encodeByteArray(e,!0)},Ro=function(t){return BE(t).replace(/\./g,"")},Np=function(t){try{return kp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=()=>jE().__FIREBASE_DEFAULTS__,HE=()=>{if(typeof process>"u"||typeof Dh>"u")return;const t=Dh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return qE()||HE()||zE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dp=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WE=t=>{const e=Dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Op=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},Vp=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ro(JSON.stringify(n)),Ro(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function YE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZE(){try{return typeof indexedDB=="object"}catch{return!1}}function eI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tI,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function nI(t,e){return t.replace(rI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rI=/\{\$([^}]+)}/g;function sI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Oh(i)&&Oh(o)){if(!Po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iI(t,e){const n=new oI(t,e);return n.subscribe.bind(n)}class oI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ja),s.error===void 0&&(s.error=ja),s.complete===void 0&&(s.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uI(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lI(t){return t===zn?void 0:t}function uI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const fI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},dI=se.INFO,pI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},mI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=dI,this._logHandler=mI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const gI=(t,e)=>e.some(n=>t instanceof n);let Vh,Mh;function _I(){return Vh||(Vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yI(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Cc=new WeakMap,xp=new WeakMap,qa=new WeakMap,Ll=new WeakMap;function vI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(An(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),Ll.set(e,t),e}function EI(t){if(Cc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function II(t){kc=t(kc)}function TI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ha(this),e,...n);return xp.set(r,e.sort?e.sort():[e]),An(r)}:yI().includes(t)?function(...e){return t.apply(Ha(this),e),An(Mp.get(this))}:function(...e){return An(t.apply(Ha(this),e))}}function wI(t){return typeof t=="function"?TI(t):(t instanceof IDBTransaction&&EI(t),gI(t,_I())?new Proxy(t,kc):t)}function An(t){if(t instanceof IDBRequest)return vI(t);if(qa.has(t))return qa.get(t);const e=wI(t);return e!==t&&(qa.set(t,e),Ll.set(e,t)),e}const Ha=t=>Ll.get(t);function AI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=An(o);return r&&o.addEventListener("upgradeneeded",c=>{r(An(o.result),c.oldVersion,c.newVersion,An(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const RI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],za=new Map;function xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return za.set(e,i),i}II(t=>({...t,get:(e,n,r)=>xh(e,n)||t.get(e,n,r),has:(e,n)=>!!xh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Lh="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new xl("@firebase/app"),CI="@firebase/app-compat",kI="@firebase/analytics-compat",NI="@firebase/analytics",DI="@firebase/app-check-compat",OI="@firebase/app-check",VI="@firebase/auth",MI="@firebase/auth-compat",xI="@firebase/database",LI="@firebase/database-compat",FI="@firebase/functions",UI="@firebase/functions-compat",$I="@firebase/installations",BI="@firebase/installations-compat",jI="@firebase/messaging",qI="@firebase/messaging-compat",HI="@firebase/performance",zI="@firebase/performance-compat",WI="@firebase/remote-config",KI="@firebase/remote-config-compat",GI="@firebase/storage",QI="@firebase/storage-compat",YI="@firebase/firestore",XI="@firebase/firestore-compat",JI="firebase",ZI="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",eT={[Nc]:"fire-core",[CI]:"fire-core-compat",[NI]:"fire-analytics",[kI]:"fire-analytics-compat",[OI]:"fire-app-check",[DI]:"fire-app-check-compat",[VI]:"fire-auth",[MI]:"fire-auth-compat",[xI]:"fire-rtdb",[LI]:"fire-rtdb-compat",[FI]:"fire-fn",[UI]:"fire-fn-compat",[$I]:"fire-iid",[BI]:"fire-iid-compat",[jI]:"fire-fcm",[qI]:"fire-fcm-compat",[HI]:"fire-perf",[zI]:"fire-perf-compat",[WI]:"fire-rc",[KI]:"fire-rc-compat",[GI]:"fire-gcs",[QI]:"fire-gcs-compat",[YI]:"fire-fst",[XI]:"fire-fst-compat","fire-js":"fire-js",[JI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,Oc=new Map;function tT(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(Oc.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of So.values())tT(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new gi("app","Firebase",nT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=ZI;function Lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rn.create("bad-app-name",{appName:String(s)});if(n||(n=Op()),!n)throw Rn.create("no-options");const i=So.get(s);if(i){if(Po(n,i.options)&&Po(r,i.config))return i;throw Rn.create("duplicate-app",{appName:s})}const o=new hI(s);for(const c of Oc.values())o.addComponent(c);const a=new rT(n,r,o);return So.set(s,a),a}function Fp(t=Dc){const e=So.get(t);if(!e&&t===Dc&&Op())return Lp();if(!e)throw Rn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=eT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Hr(new or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="firebase-heartbeat-database",iT=1,Qs="firebase-heartbeat-store";let Wa=null;function Up(){return Wa||(Wa=AI(sT,iT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),Wa}async function oT(t){try{return await(await Up()).transaction(Qs).objectStore(Qs).get($p(t))}catch(e){if(e instanceof cn)ar.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Fh(t,e){try{const r=(await Up()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,$p(t)),await r.done}catch(n){if(n instanceof cn)ar.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function $p(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=1024,cT=30*24*60*60*1e3;class lT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uh(),{heartbeatsToSend:r,unsentEntries:s}=uT(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uh(){return new Date().toISOString().substring(0,10)}function uT(t,e=aT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$h(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$h(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZE()?eI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $h(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){Hr(new or("platform-logger",e=>new SI(e),"PRIVATE")),Hr(new or("heartbeat",e=>new lT(e),"PRIVATE")),Pn(Nc,Lh,t),Pn(Nc,Lh,"esm2017"),Pn("fire-js","")}fT("");var dT="firebase",pT="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(dT,pT,"app");var mT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Ul=Ul||{},G=mT||self;function na(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gT(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++_T)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),_T=0;function yT(t,e,n){return t.call.apply(t.bind,arguments)}function vT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=yT:et=vT,et.apply(null,arguments)}function Hi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Mn(){this.s=this.s,this.o=this.o}var ET=0;Mn.prototype.s=!1;Mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ET!=0)&&gT(this)};Mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $l(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Bh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(na(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var IT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function Ys(t){return/^[\s\xa0]*$/.test(t)}function ra(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return ra().indexOf(t)!=-1}function Bl(t){return Bl[" "](t),t}Bl[" "]=function(){};function TT(t,e){var n=pw;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var wT=Ft("Opera"),zr=Ft("Trident")||Ft("MSIE"),jp=Ft("Edge"),Vc=jp||zr,qp=Ft("Gecko")&&!(ra().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),AT=ra().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Hp(){var t=G.document;return t?t.documentMode:void 0}var Mc;e:{var Ga="",Qa=function(){var t=ra();if(qp)return/rv:([^\);]+)(\)|;)/.exec(t);if(jp)return/Edge\/([\d\.]+)/.exec(t);if(zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AT)return/WebKit\/(\S+)/.exec(t);if(wT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Ga=Qa?Qa[1]:""),zr){var Ya=Hp();if(Ya!=null&&Ya>parseFloat(Ga)){Mc=String(Ya);break e}}Mc=Ga}var xc;if(G.document&&zr){var jh=Hp();xc=jh||parseInt(Mc,10)||void 0}else xc=void 0;var RT=xc;function Xs(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qp){e:{try{Bl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xs.$.h.call(this)}}qe(Xs,tt);var PT={2:"touch",3:"pen",4:"mouse"};Xs.prototype.h=function(){Xs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vi="closure_listenable_"+(1e6*Math.random()|0),ST=0;function bT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++ST,this.fa=this.ia=!1}function sa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zp(t){const e={};for(const n in t)e[n]=t[n];return e}const qh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<qh.length;i++)n=qh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ia(t){this.src=t,this.g={},this.h=0}ia.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Fc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bT(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Bp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(sa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ql="closure_lm_"+(1e6*Math.random()|0),Xa={};function Kp(t,e,n,r,s){if(r&&r.once)return Qp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kp(t,e[i],n,r,s);return null}return n=Wl(n),t&&t[vi]?t.O(e,n,yi(r)?!!r.capture:!!r,s):Gp(t,e,n,!1,r,s)}function Gp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=yi(s)?!!s.capture:!!s,a=zl(t);if(a||(t[ql]=a=new ia(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=kT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Xp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kT(){function t(n){return e.call(t.src,t.listener,n)}const e=NT;return t}function Qp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qp(t,e[i],n,r,s);return null}return n=Wl(n),t&&t[vi]?t.P(e,n,yi(r)?!!r.capture:!!r,s):Gp(t,e,n,!0,r,s)}function Yp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Yp(t,e[i],n,r,s);else r=yi(r)?!!r.capture:!!r,n=Wl(n),t&&t[vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Fc(i,n,r,s),-1<n&&(sa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fc(e,n,r,s)),(n=-1<t?e[t]:null)&&Hl(n))}function Hl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vi])Lc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zl(e))?(Lc(n,t),n.h==0&&(n.src=null,e[ql]=null)):sa(t)}}}function Xp(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function NT(t,e){if(t.fa)t=!0;else{e=new Xs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Hl(t),t=n.call(r,e)}return t}function zl(t){return t=t[ql],t instanceof ia?t:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(t){return typeof t=="function"?t:(t[Ja]||(t[Ja]=function(e){return t.handleEvent(e)}),t[Ja])}function je(){Mn.call(this),this.i=new ia(this),this.S=this,this.J=null}qe(je,Mn);je.prototype[vi]=!0;je.prototype.removeEventListener=function(t,e,n,r){Yp(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),Wp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=zi(o,r,!0,e)&&s}if(o=e.g=t,s=zi(o,r,!0,e)&&s,s=zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=zi(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sa(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Lc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kl=G.JSON.stringify;class DT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OT(){var t=Gl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VT{constructor(){this.h=this.g=null}add(e,n){const r=Jp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Jp=new DT(()=>new MT,t=>t.reset());class MT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LT(t){G.setTimeout(()=>{throw t},0)}let Js,Zs=!1,Gl=new VT,Zp=()=>{const t=G.Promise.resolve(void 0);Js=()=>{t.then(FT)}};var FT=()=>{for(var t;t=OT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Jp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zs=!1};function oa(t,e){je.call(this),this.h=t||1,this.g=e||G,this.j=et(this.qb,this),this.l=Date.now()}qe(oa,je);N=oa.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Ql(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ql(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){oa.$.N.call(this),Ql(this),delete this.g};function Yl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function em(t){t.g=Yl(()=>{t.g=null,t.i&&(t.i=!1,em(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UT extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:em(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(t){Mn.call(this),this.h=t,this.g={}}qe(ei,Mn);var Hh=[];function tm(t,e,n,r){Array.isArray(n)||(n&&(Hh[0]=n.toString()),n=Hh);for(var s=0;s<n.length;s++){var i=Kp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function nm(t){jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hl(e)},t),t.g={}}ei.prototype.N=function(){ei.$.N.call(this),nm(this)};ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function aa(){this.g=!0}aa.prototype.Ea=function(){this.g=!1};function $T(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function BT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Or(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qT(t,n)+(r?" "+r:"")})}function jT(t,e){t.info(function(){return"TIMEOUT: "+e})}aa.prototype.info=function(){};function qT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kl(n)}catch{return e}}var mr={},zh=null;function ca(){return zh=zh||new je}mr.Ta="serverreachability";function rm(t){tt.call(this,mr.Ta,t)}qe(rm,tt);function ti(t){const e=ca();Ke(e,new rm(e))}mr.STAT_EVENT="statevent";function sm(t,e){tt.call(this,mr.STAT_EVENT,t),this.stat=e}qe(sm,tt);function it(t){const e=ca();Ke(e,new sm(e,t))}mr.Ua="timingevent";function im(t,e){tt.call(this,mr.Ua,t),this.size=e}qe(im,tt);function Ei(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var la={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},om={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xl(){}Xl.prototype.h=null;function Wh(t){return t.h||(t.h=t.i())}function am(){}var Ii={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jl(){tt.call(this,"d")}qe(Jl,tt);function Zl(){tt.call(this,"c")}qe(Zl,tt);var Uc;function ua(){}qe(ua,Xl);ua.prototype.g=function(){return new XMLHttpRequest};ua.prototype.i=function(){return{}};Uc=new ua;function Ti(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ei(this),this.P=HT,t=Vc?125:void 0,this.V=new oa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cm}function cm(){this.i=null,this.g="",this.h=!1}var HT=45e3,lm={},$c={};N=Ti.prototype;N.setTimeout=function(t){this.P=t};function Bc(t,e,n){t.L=1,t.A=fa(nn(e)),t.u=n,t.S=!0,um(t,null)}function um(t,e){t.G=Date.now(),wi(t),t.B=nn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),ym(n.i,"t",r),t.o=0,n=t.l.J,t.h=new cm,t.g=Um(t.l,n?e:null,!t.u),0<t.O&&(t.M=new UT(et(t.Pa,t,t.g),t.O)),tm(t.U,t.g,"readystatechange",t.nb),e=t.I?zp(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ti(),$T(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Vc||this.g&&(this.h.h||this.g.ja()||Yh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ti(3):ti(2)),ha(this);var n=this.g.da();this.ca=n;t:if(hm(this)){var r=Yh(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),Vs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BT(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ys(a)){var l=a;break t}}l=null}if(n=l)Or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jc(this,n);else{this.i=!1,this.s=3,it(12),Gn(this),Vs(this);break e}}this.S?(fm(this,u,o),Vc&&this.i&&u==3&&(tm(this.U,this.V,"tick",this.mb),this.V.start())):(Or(this.j,this.m,o,null),jc(this,o)),u==4&&Gn(this),this.i&&!this.J&&(u==4?Mm(this.l,this):(this.i=!1,wi(this)))}else hw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Gn(this),Vs(this)}}}catch{}finally{}};function hm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function fm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=zT(t,n),s==$c){e==4&&(t.s=4,it(14),r=!1),Or(t.j,t.m,null,"[Incomplete Response]");break}else if(s==lm){t.s=4,it(15),Or(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Or(t.j,t.m,s,null),jc(t,s);hm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iu(e),e.M=!0,it(11))):(Or(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),Vs(t))}N.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.o<e.length&&(ha(this),fm(this,t,e),this.i&&t!=4&&wi(this))}};function zT(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?$c:(n=Number(e.substring(n,r)),isNaN(n)?lm:(r+=1,r+n>e.length?$c:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,Gn(this)};function wi(t){t.Y=Date.now()+t.P,dm(t,t.P)}function dm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ei(et(t.lb,t),e)}function ha(t){t.C&&(G.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(jT(this.j,this.B),this.L!=2&&(ti(),it(17)),Gn(this),this.s=2,Vs(this)):dm(this,this.Y-t)};function Vs(t){t.l.H==0||t.J||Mm(t.l,t)}function Gn(t){ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ql(t.V),nm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function jc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qc(n.i,t))){if(!t.K&&qc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ko(n),ga(n);else break e;su(n),it(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ei(et(n.ib,n),6e3));if(1>=Im(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qn(n,11)}else if((t.K||n.g==t)&&ko(n),!Ys(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(eu(i,i.h),i.h=null))}if(r.F){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,Ie(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Fm(r,r.J?r.pa:null,r.Y),o.K){Tm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ha(a),wi(a)),r.g=o}else Om(r);0<n.j.length&&_a(n)}else l[0]!="stop"&&l[0]!="close"||Qn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qn(n,7):ru(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ti(4)}catch{}}function WT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(na(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KT(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(na(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(na(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KT(t),r=WT(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nr){this.h=t.h,bo(this,t.j),this.s=t.s,this.g=t.g,Co(this,t.m),this.l=t.l;var e=t.i,n=new ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kh(this,n),this.o=t.o}else t&&(e=String(t).match(mm))?(this.h=!1,bo(this,e[1]||"",!0),this.s=Rs(e[2]||""),this.g=Rs(e[3]||"",!0),Co(this,e[4]),this.l=Rs(e[5]||"",!0),Kh(this,e[6]||"",!0),this.o=Rs(e[7]||"")):(this.h=!1,this.i=new ni(null,this.h))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,Gh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,Gh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?XT:YT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,ZT)),t.join("")};function nn(t){return new nr(t)}function bo(t,e,n){t.j=n?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kh(t,e,n){e instanceof ni?(t.i=e,ew(t.i,t.h)):(n||(e=Ps(e,JT)),t.i=new ni(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function fa(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gh=/[#\/\?@]/g,YT=/[#\?:]/g,XT=/[#\?]/g,JT=/[#\?@]/g,ZT=/#/g;function ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Map,t.h=0,t.i&&GT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=ni.prototype;N.add=function(t,e){xn(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gm(t,e){xn(t),e=is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _m(t,e){return xn(t),e=is(t,e),t.g.has(e)}N.forEach=function(t,e){xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){xn(this);let e=[];if(typeof t=="string")_m(this,t)&&(e=e.concat(this.g.get(is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return xn(this),this.i=null,t=is(this,t),_m(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ym(t,e,n){gm(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),$l(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ew(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(gm(this,r),ym(this,s,n))},t)),t.j=e}var tw=class{constructor(t,e){this.g=t,this.map=e}};function vm(t){this.l=t||nw,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nw=10;function Em(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Im(t){return t.h?1:t.g?t.g.size:0}function qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function eu(t,e){t.g?t.g.add(e):t.h=e}function Tm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $l(t.i)}var rw=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function sw(){this.g=new rw}function iw(t,e,n){const r=n||"";try{pm(t,function(s,i){let o=s;yi(s)&&(o=Kl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ow(t,e){const n=new aa;if(G.Image){const r=new Image;r.onload=Hi(Wi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Hi(Wi,n,r,"TestLoadImage: error",!1,e),r.onabort=Hi(Wi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Hi(Wi,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function da(t){this.l=t.ec||null,this.j=t.ob||!1}qe(da,Xl);da.prototype.g=function(){return new pa(this.l,this.j)};da.prototype.i=function(t){return function(){return t}}({});function pa(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(pa,je);var tu=0;N=pa.prototype;N.open=function(t,e){if(this.readyState!=tu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ri(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=tu};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Am(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Am(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ai(this):ri(this),this.readyState==3&&Am(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Ai(this))};N.Ya=function(t){this.g&&(this.response=t,Ai(this))};N.ka=function(){this.g&&Ai(this)};function Ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ri(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ri(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aw=G.JSON.parse;function be(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rm,this.L=this.M=!1}qe(be,je);var Rm="",cw=/^https?$/i,lw=["POST","PUT"];N=be.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?Wh(this.u):Wh(Uc),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qh(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=Bp(lw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bm(this),0<this.B&&((this.L=uw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Yl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qh(this,i)}};function uw(t){return zr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Qh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pm(t),ma(t)}function Pm(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),ma(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ma(this,!0)),be.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Sm(this):this.kb())};N.kb=function(){Sm(this)};function Sm(t){if(t.h&&typeof Ul<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Yl(t.La,0,t);else if(Ke(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(mm)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!cw.test(s?s.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Pm(t)}}finally{ma(t)}}}}function ma(t,e){if(t.g){bm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function bm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aw(e)}};function Yh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hw(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ys(t[r]))continue;var n=xT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}CT(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cm(t){let e="";return jl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Cm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function km(t){this.Ga=0,this.j=[],this.l=new aa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ms("baseRetryDelayMs",5e3,t),this.hb=ms("retryDelaySeedMs",1e4,t),this.eb=ms("forwardChannelMaxRetries",2,t),this.xa=ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vm(t&&t.concurrentRequestLimit),this.Ja=new sw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=km.prototype;N.ra=8;N.H=1;function ru(t){if(Nm(t),t.H==3){var e=t.W++,n=nn(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Ri(t,n),e=new Ti(t,t.l,e),e.L=2,e.A=fa(nn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=Um(e.l,null),e.g.ha(e.A)),e.G=Date.now(),wi(e)}Lm(t)}function ga(t){t.g&&(iu(t),t.g.cancel(),t.g=null)}function Nm(t){ga(t),t.u&&(G.clearTimeout(t.u),t.u=null),ko(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function _a(t){if(!Em(t.i)&&!t.m){t.m=!0;var e=t.Na;Js||Zp(),Zs||(Js(),Zs=!0),Gl.add(e,t),t.C=0}}function fw(t,e){return Im(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ei(et(t.Na,t,e),xm(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ti(this,this.l,t);let i=this.s;if(this.U&&(i?(i=zp(i),Wp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dm(this,s,e),n=nn(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Ri(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Cm(i)))+"&"+e:this.o&&nu(n,this.o,i)),eu(this.i,s),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),s.aa=!0,Bc(s,n,null)):Bc(s,n,e),this.H=2}}else this.H==3&&(t?Xh(this,t):this.j.length==0||Em(this.i)||Xh(this))};function Xh(t,e){var n;e?n=e.m:n=t.W++;const r=nn(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),Ri(t,r),t.o&&t.s&&nu(r,t.o,t.s),n=new Ti(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Dm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),eu(t.i,n),Bc(n,r,e)}function Ri(t,e){t.na&&jl(t.na,function(n,r){Ie(e,r,n)}),t.h&&pm({},function(n,r){Ie(e,r,n)})}function Dm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{iw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Om(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Js||Zp(),Zs||(Js(),Zs=!0),Gl.add(e,t),t.A=0}}function su(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ei(et(t.Ma,t),xm(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Vm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ei(et(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),ga(this),Vm(this))};function iu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Vm(t){t.g=new Ti(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nn(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Ri(t,e),t.o&&t.s&&nu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=fa(nn(e)),n.u=null,n.S=!0,um(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ga(this),su(this),it(19))};function ko(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Mm(t,e){var n=null;if(t.g==e){ko(t),iu(t),t.g=null;var r=2}else if(qc(t.i,e))n=e.F,Tm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ca(),Ke(r,new im(r,n)),_a(t)}else Om(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&fw(t,e)||r==2&&su(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function xm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||bo(n,"https"),fa(n)),ow(n.toString(),r)}else it(2);t.H=0,t.h&&t.h.za(e),Lm(t),Nm(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Lm(t){if(t.H=0,t.ma=[],t.h){const e=wm(t.i);(e.length!=0||t.j.length!=0)&&(Bh(t.ma,e),Bh(t.ma,t.j),t.i.i.length=0,$l(t.j),t.j.length=0),t.h.ya()}}function Fm(t,e,n){var r=n instanceof nr?nn(n):new nr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Co(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new nr(null);r&&bo(i,r),e&&(i.g=e),s&&Co(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),Ri(t,r),r}function Um(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new be(new da({ob:n})):new be(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function $m(){}N=$m.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function No(){if(zr&&!(10<=Number(RT)))throw Error("Environmental error: no available transport.")}No.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){je.call(this),this.g=new km(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ys(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ys(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new os(this)}qe(_t,je);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fm(t,null,t.Y),_a(t)};_t.prototype.close=function(){ru(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kl(t),t=n);e.j.push(new tw(e.fb++,t)),e.H==3&&_a(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,ru(this.g),delete this.g,_t.$.N.call(this)};function Bm(t){Jl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(Bm,Jl);function jm(){Zl.call(this),this.status=1}qe(jm,Zl);function os(t){this.g=t}qe(os,$m);os.prototype.Ba=function(){Ke(this.g,"a")};os.prototype.Aa=function(t){Ke(this.g,new Bm(t))};os.prototype.za=function(t){Ke(this.g,new jm)};os.prototype.ya=function(){Ke(this.g,"b")};function dw(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Nt,dw);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Za(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Za(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Za(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Za(this,r),s=0;break}}this.h=s,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var pw={};function ou(t){return-128<=t&&128>t?TT(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Lr;if(0>t)return ze(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Hc;return new ue(e,0)}function qm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(qm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Lr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Hc=4294967296,Lr=ou(0),zc=ou(1),Jh=ou(16777216);N=ue.prototype;N.ea=function(){if(Tt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Hc+r)*e,e*=Hc}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(Tt(this))return"-"+ze(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=Oo(n,e).g;n=Do(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Jt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}N.X=function(t){return t=Do(this,t),Tt(t)?-1:Jt(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(zc)}N.abs=function(){return Tt(this)?ze(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function Do(t,e){return t.add(ze(e))}N.R=function(t){if(Jt(this)||Jt(t))return Lr;if(Tt(this))return Tt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Tt(t))return ze(this.R(ze(t)));if(0>this.X(Jh)&&0>t.X(Jh))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ki(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ki(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ki(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ki(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function Ki(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gs(t,e){this.g=t,this.h=e}function Oo(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new gs(Lr,Lr);if(Tt(t))return e=Oo(ze(t),e),new gs(ze(e.g),ze(e.h));if(Tt(e))return e=Oo(t,ze(e)),new gs(ze(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zc,r=e;0>=r.X(t);)n=Zh(n),r=Zh(r);var s=Ar(n,1),i=Ar(r,1);for(r=Ar(r,2),n=Ar(n,2);!Jt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ar(r,1),n=Ar(n,1)}return e=Do(t,s.R(e)),new gs(s,e)}for(s=Lr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);Jt(i)&&(i=zc),s=s.add(i),t=Do(t,o)}return new gs(s,t)}N.gb=function(t){return Oo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function Zh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Ar(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ue(s,t.h)}No.prototype.createWebChannel=No.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;la.NO_ERROR=0;la.TIMEOUT=8;la.HTTP_ERROR=6;om.COMPLETE="complete";am.EventType=Ii;Ii.OPEN="a";Ii.CLOSE="b";Ii.ERROR="c";Ii.MESSAGE="d";je.prototype.listen=je.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Bt;ue.fromString=qm;var mw=function(){return new No},gw=function(){return ca()},ec=la,_w=om,yw=mr,ef={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Gi=am,vw=be,Ew=Nt,Fr=ue;const tf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new xl("@firebase/firestore");function _s(){return cr.logLevel}function M(t,...e){if(cr.logLevel<=se.DEBUG){const n=e.map(au);cr.debug(`Firestore (${as}): ${t}`,...n)}}function rn(t,...e){if(cr.logLevel<=se.ERROR){const n=e.map(au);cr.error(`Firestore (${as}): ${t}`,...n)}}function Wr(t,...e){if(cr.logLevel<=se.WARN){const n=e.map(au);cr.warn(`Firestore (${as}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function ve(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Tw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ww{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new Hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Xe(e)}}class Aw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Aw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new Pw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Kr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends si{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Cw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends si{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return Cw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new O(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new O(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Te.fromString(e))}static fromName(e){return new $(Te.fromString(e).popFirst(5))}static empty(){return new $(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Te(e.slice()))}}function kw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Dn(s,$.empty(),e)}function Nw(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(Y.min(),$.empty(),-1)}static max(){return new Dn(Y.max(),$.empty(),-1)}}function Dw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==Ow)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(s=>s?w.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new w((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new w((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}cu._e=-1;function ya(t){return t==null}function Vo(t){return t===0&&1/t==-1/0}function Mw(t){return typeof t=="number"&&Number.isInteger(t)&&!Vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rf(this.data.getIterator())}getIteratorFrom(e){return new rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new mt([])}unionWith(e){let n=new Ge(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Km("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(ve(!!t),typeof t=="string"){let e=0;const n=xw.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function lr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uu(t){const e=t.mapValue.fields.__previous_value__;return lu(e)?uu(e):e}function ii(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lu(t)?4:Fw(t)?9007199254740991:10:K()}function Gt(t,e){if(t===e)return!0;const n=ur(t);if(n!==ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ii(t).isEqual(ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),a=On(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return lr(s.bytesValue).isEqual(lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),a=ke(i.doubleValue);return o===a?Vo(o)===Vo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Kr(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(nf(o)!==nf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function ai(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Gr(t,e){if(t===e)return 0;const n=ur(t),r=ur(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return sf(t.timestampValue,e.timestampValue);case 4:return sf(ii(t),ii(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=lr(i),c=lr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ce(a[l],c[l]);if(u!==0)return u}return ce(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ce(ke(i.latitude),ke(o.latitude));return a!==0?a:ce(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Gr(a[l],c[l]);if(u)return u}return ce(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Yi.mapValue&&o===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ce(c[h],u[h]);if(f!==0)return f;const p=Gr(a[c[h]],l[u[h]]);if(p!==0)return p}return ce(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function sf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=On(t),r=On(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Qr(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wc(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function of(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function af(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oo(t){return!!t&&"mapValue"in t}function Ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ms(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ct(Ms(this.value))}}function Gm(t){const e=[];return gr(t.fields,(n,r)=>{const s=new We([n]);if(oo(r)){const i=Gm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.position=e,this.inclusive=n}}function lf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Gr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{}class Ne extends Qm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bw(e,n,r):n==="array-contains"?new Hw(e,r):n==="in"?new zw(e,r):n==="not-in"?new Ww(e,r):n==="array-contains-any"?new Kw(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jw(e,r):new qw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gr(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Qm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Dt(e,n)}matches(e){return Ym(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ym(t){return t.op==="and"}function Xm(t){return $w(t)&&Ym(t)}function $w(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function Gc(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Qr(t.value);if(Xm(t))return t.filters.map(e=>Gc(e)).join(",");{const e=t.filters.map(n=>Gc(n)).join(",");return`${t.op}(${e})`}}function Jm(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Jm(o,s.filters[a]),!0):!1}(t,e):void K()}function Zm(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Qr(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(Zm).join(" ,")+"}"}(t):"Filter"}class Bw extends Ne{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class jw extends Ne{constructor(e,n){super(e,"in",n),this.keys=eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qw extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Hw extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&ai(n.arrayValue,this.value)}}class zw extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class Ww extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class Kw extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gw(t,e,n,r,s,i,o)}function fu(t){const e=J(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qr(r)).join(",")),e.ce=n}return e.ce}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uf(t.startAt,e.startAt)&&uf(t.endAt,e.endAt)}function Qc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qw(t,e,n,r,s,i,o,a){return new cs(t,e,n,r,s,i,o,a)}function pu(t){return new cs(t)}function ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tg(t){return t.collectionGroup!==null}function xs(t){const e=J(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(We.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ci(i,r))}),n.has(We.keyField().canonicalString())||e.le.push(new ci(We.keyField(),r))}return e.le}function qt(t){const e=J(t);return e.he||(e.he=Yw(e,xs(t))),e.he}function Yw(t,e){if(t.limitType==="F")return hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ci(s.field,i)});const n=t.endAt?new Mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mo(t.startAt.position,t.startAt.inclusive):null;return hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yc(t,e){const n=t.filters.concat([e]);return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return du(qt(t),qt(e))&&t.limitType===e.limitType}function ng(t){return`${fu(qt(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zm(s)).join(", ")}]`),ya(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qr(s)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,xs(r),s)||r.endAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,xs(r),s))}(t,e)}function Xw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rg(t){return(e,n)=>{let r=!1;for(const s of xs(t)){const i=Jw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jw(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Gr(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Wm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Re($.comparator);function sn(){return Zw}const sg=new Re($.comparator);function Ss(...t){let e=sg;for(const n of t)e=e.insert(n.key,n);return e}function ig(t){let e=sg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yn(){return Ls()}function og(){return Ls()}function Ls(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const eA=new Re($.comparator),tA=new Ge($.comparator);function re(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new Ge(ce);function rA(){return nA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function cg(t){return{integerValue:""+t}}function sA(t,e){return Mw(e)?cg(e):ag(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof xo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lu(i)&&(i=uu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof li?ug(t,e):t instanceof ui?hg(t,e):function(s,i){const o=lg(s,i),a=df(o)+df(s.Ie);return Kc(o)&&Kc(s.Ie)?cg(a):ag(s.serializer,a)}(t,e)}function oA(t,e,n){return t instanceof li?ug(t,e):t instanceof ui?hg(t,e):n}function lg(t,e){return t instanceof Lo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xo extends Ia{}class li extends Ia{constructor(e){super(),this.elements=e}}function ug(t,e){const n=fg(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends Ia{constructor(e){super(),this.elements=e}}function hg(t,e){let n=fg(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class Lo extends Ia{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function df(t){return ke(t.integerValue||t.doubleValue)}function fg(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof li&&s instanceof li||r instanceof ui&&s instanceof ui?Kr(r.elements,s.elements,Gt):r instanceof Lo&&s instanceof Lo?Gt(r.Ie,s.Ie):r instanceof xo&&s instanceof xo}(t.transform,e.transform)}class cA{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function dg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mu(t.key,Ct.none()):new bi(t.key,t.data,Ct.none());{const n=t.data,r=ct.empty();let s=new Ge(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(t.key,r,new mt(s.toArray()),Ct.none())}}function lA(t,e,n){t instanceof bi?function(s,i,o){const a=s.value.clone(),c=mf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ln?function(s,i,o){if(!ao(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=mf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fs(t,e,n,r){return t instanceof bi?function(i,o,a,c){if(!ao(i.precondition,o))return a;const l=i.value.clone(),u=gf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ln?function(i,o,a,c){if(!ao(i.precondition,o))return a;const l=gf(i.fieldTransforms,c,o),u=o.data;return u.setAll(pg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ao(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lg(r.transform,s||null);i!=null&&(n===null&&(n=ct.empty()),n.set(r.field,i))}return n||null}function pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kr(r,s,(i,o)=>aA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bi extends Ta{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Ta{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,oA(o,a,n[s]))}return r}function gf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iA(i,o,e))}return r}class mu extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=og();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=dg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(n,r)=>pf(n,r))&&Kr(this.baseMutations,e.baseMutations,(n,r)=>pf(n,r))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return eA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ie;function mA(t){switch(t){default:return K();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function mg(t){if(t===void 0)return rn("GRPC error has no .code"),v.UNKNOWN;switch(t){case Ce.OK:return v.OK;case Ce.CANCELLED:return v.CANCELLED;case Ce.UNKNOWN:return v.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return v.INTERNAL;case Ce.UNAVAILABLE:return v.UNAVAILABLE;case Ce.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ce.NOT_FOUND:return v.NOT_FOUND;case Ce.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ce.ABORTED:return v.ABORTED;case Ce.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ce.DATA_LOSS:return v.DATA_LOSS;default:return K()}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Fr([4294967295,4294967295],0);function _f(t){const e=gA().encode(t),n=new Ew;return n.update(e),new Uint8Array(n.digest())}function yf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([s,i],0)]}class _u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bs(`Invalid padding: ${n}`);if(r<0)throw new bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Fr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Fr.fromNumber(r)));return s.compare(_A)===1&&(s=new Fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=_f(e),[r,s]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _u(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=_f(e),[r,s]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(Y.min(),s,new Re(ce),sn(),re())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class gg{constructor(e,n){this.targetId=e,this.fe=n}}class _g{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vf{constructor(){this.ge=0,this.pe=If(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Ci(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=If()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ve(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class yA{constructor(e){this.Le=e,this.ke=new Map,this.qe=sn(),this.Qe=Ef(),this.Ke=new Re(ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Qc(i))if(r===0){const o=new $(i.path);this.We(n,o,Je.newNoDocument(o,Y.min()))}else ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=lr(r).toUint8Array()}catch(c){if(c instanceof Km)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _u(o,s,i)}catch(c){return Wr(c instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Qc(a.target)){const c=new $(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Je.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Ke,this.qe,r);return this.qe=sn(),this.Qe=Ef(),this.Ke=new Re(ce),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new vf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ef(){return new Re($.comparator)}function If(){return new Re($.comparator)}const vA={asc:"ASCENDING",desc:"DESCENDING"},EA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class TA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jc(t,e){return t.useProto3Json||ya(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wA(t,e){return Fo(t,e.toTimestamp())}function Ht(t){return ve(!!t),Y.fromTimestamp(function(n){const r=On(n);return new xe(r.seconds,r.nanos)}(t))}function yu(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function vg(t){const e=Te.fromString(t);return ve(wg(e)),e}function Zc(t,e){return yu(t.databaseId,e.path)}function tc(t,e){const n=vg(e);if(n.get(1)!==t.databaseId.projectId)throw new O(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Eg(n))}function el(t,e){return yu(t.databaseId,e)}function AA(t){const e=vg(t);return e.length===4?Te.emptyPath():Eg(e)}function tl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Eg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tf(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function RA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?v.UNKNOWN:mg(l.code);return new O(u,l.message||"")}(o);n=new _g(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tc(t,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):Y.min(),a=new ct({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new co(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tc(t,r.document),i=r.readTime?Ht(r.readTime):Y.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tc(t,r.document),i=r.removedTargetIds||[];n=new co([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pA(s,i),a=r.targetId;n=new gg(a,o)}}return n}function PA(t,e){let n;if(e instanceof bi)n={update:Tf(t,e.key,e.value)};else if(e instanceof mu)n={delete:Zc(t,e.key)};else if(e instanceof Ln)n={update:Tf(t,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof hA))return K();n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function SA(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(Y.min())&&(o=Ht(i)),new cA(o,s.transformResults||[])}(n,e))):[]}function bA(t,e){return{documents:[el(t,e.path)]}}function CA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=el(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=el(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Tg(Dt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:kr(h.field),direction:DA(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Jc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function kA(t){let e=AA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Ig(h);return f instanceof Dt&&Xm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(g){return new ci(Nr(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ya(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new Mo(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new Mo(p,f)}(n.endAt)),Qw(e,s,o,i,a,"F",c,l)}function NA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ig(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nr(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>Ig(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function DA(t){return vA[t]}function OA(t){return EA[t]}function VA(t){return IA[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Nr(t){return We.fromServerFormat(t.fieldPath)}function Tg(t){return t instanceof Ne?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(af(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(af(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:OA(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>Tg(s));return r.length===1?r[0]:{compositeFilter:{op:VA(n.op),filters:r}}}(t):K()}function MA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.ut=e}}function LA(t){const e=kA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.on=new UA}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Dn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class UA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Yr(0)}static Nn(){return new Yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fs(r.mutation,s,mt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ss();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=sn();const o=Ls(),a=function(){return Ls()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Ln)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fs(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new BA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ls();let s=new Re((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||mt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=og();u.forEach(f=>{if(!i.has(f)){const p=dg(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):w.resolve(Yn());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:ig(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,i).next(a=>w.forEach(a,c=>{const l=function(h,f){return new cs(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Je.newInvalidDocument(u)))});let a=Ss();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Fs(u.mutation,l,mt.empty(),xe.now()),Ea(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:LA(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.overlays=new Re($.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yn();return w.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const s=Yn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.hr=new Ge(Ue.Pr),this.Ir=new Ge(Ue.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ue(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new $(new Te([])),r=new Ue(n,e),s=new Ue(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new $(new Te([])),r=new Ue(n,e),s=new Ue(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return $.comparator(e.key,n.key)||ce(e.gr,n.gr)}static Tr(e,n){return ce(e.gr,n.gr)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(Ue.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),s=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ce);return n.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),w.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new $(i),0);let a=new Ge(ce);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return w.forEach(n.mutations,s=>{const i=new Ue(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ue(n,0),s=this.yr.firstAfterOrEqual(r);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.Cr=e,this.docs=function(){return new Re($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sn();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Dw(Nw(u),r)<=0||(s.has(u.key)||Ea(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KA(this)}getSize(e){return w.resolve(this.size)}}class KA extends $A{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.persistence=e,this.Fr=new ls(n=>fu(n),du),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vu,this.targetCount=0,this.Nr=Yr.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.Br={},this.overlays={},this.Lr=new cu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new GA(this),this.indexManager=new FA,this.remoteDocumentCache=function(s){return new WA(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new xA(n),this.Kr=new qA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new zA(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const s=new YA(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class YA extends Vw{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.Gr=new vu,this.zr=null}static jr(e){return new Eu(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,r=>{const s=$.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XA;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(_s()<=se.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(_s()<=se.DEBUG&&M("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(_s()<=se.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):w.resolve())}zi(e,n){if(ff(n))return w.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xc(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Xc(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return ff(n)||s.isEqual(Y.min())?w.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?w.resolve(null):(_s()<=se.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.Xi(e,o,n,kw(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(rg(e));return n.forEach((s,i)=>{Ea(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return _s()<=se.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Dn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Re(ce),this.ns=new ls(i=>fu(i),du),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jA(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function e0(t,e,n,r){return new ZA(t,e,n,r)}async function Ag(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function t0(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=w.resolve();return f.forEach(g=>{p=p.next(()=>u.getEntry(c,g)).next(R=>{const y=l.docVersions.get(g);ve(y!==null),R.version.compareTo(y)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Rg(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function n0(t,e){const n=J(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(R,y,P){return R.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=sn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(r0(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(Y.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function r0(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function s0(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function i0(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,w.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function nl(t,e,n){const r=J(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Si(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function wf(t,e,n){const r=J(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=J(c),f=h.ns.get(u);return f!==void 0?w.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(a=>(o0(r,Xw(e),a),{documents:a,ls:i})))}function o0(t,e,n){let r=t.rs.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Af{constructor(){this.activeTargetIds=rA()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a0{constructor(){this.eo=new Af,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Af,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=null;function nc(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class h0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=nc(),c=this.So(n,r);M("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Wr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=l0[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=nc();return new Promise((o,a)=>{const c=new vw;c.setWithCredentials(!0),c.listenOnce(_w.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ec.NO_ERROR:const u=c.getResponseJson();M(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ec.TIMEOUT:M(Ye,`RPC '${e}' ${i} timed out`),a(new O(v.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const h=c.getStatus();if(M(Ye,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(y){const P=y.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(P)>=0?P:v.UNKNOWN}(p.status);a(new O(g,p.message))}else a(new O(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new O(v.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{M(Ye,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);M(Ye,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=nc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mw(),a=gw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");M(Ye,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const g=new u0({co:y=>{p?M(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(f||(M(Ye,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),M(Ye,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),R=(y,P,V)=>{y.listen(P,H=>{try{V(H)}catch(q){setTimeout(()=>{throw q},0)}})};return R(h,Gi.EventType.OPEN,()=>{p||M(Ye,`RPC '${e}' stream ${s} transport opened.`)}),R(h,Gi.EventType.CLOSE,()=>{p||(p=!0,M(Ye,`RPC '${e}' stream ${s} transport closed`),g.Ro())}),R(h,Gi.EventType.ERROR,y=>{p||(p=!0,Wr(Ye,`RPC '${e}' stream ${s} transport errored:`,y),g.Ro(new O(v.UNAVAILABLE,"The operation could not be completed")))}),R(h,Gi.EventType.MESSAGE,y=>{var P;if(!p){const V=y.data[0];ve(!!V);const H=V,q=H.error||((P=H[0])===null||P===void 0?void 0:P.error);if(q){M(Ye,`RPC '${e}' stream ${s} received error:`,q);const he=q.status;let z=function(Pe){const De=Ce[Pe];if(De!==void 0)return mg(De)}(he),Z=q.message;z===void 0&&(z=v.INTERNAL,Z="Unknown error status: "+he+" with message "+q.message),p=!0,g.Ro(new O(z,Z)),h.close()}else M(Ye,`RPC '${e}' stream ${s} received:`,V),g.Vo(V)}}),R(a,yw.STAT_EVENT,y=>{y.stat===ef.PROXY?M(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===ef.NOPROXY&&M(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){return new TA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Pg(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new O(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f0 extends Sg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=RA(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Ht(o.readTime):Y.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=tl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Qc(c)?{documents:bA(i,c)}:{query:CA(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yg(i,o.resumeToken);const l=Jc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Fo(i,o.snapshotVersion.toTimestamp());const l=Jc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=NA(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=tl(this.serializer),n.removeTarget=e,this.e_(n)}}class d0 extends Sg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=SA(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.I_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=tl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PA(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new O(v.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(v.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(v.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class m0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(rn(n),this.f_=!1):M("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{_r(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.C_.add(4),await ki(l),l.M_.set("Unknown"),l.C_.delete(4),await Ra(l)}(this))})}),this.M_=new m0(r,s)}}async function Ra(t){if(_r(t))for(const e of t.v_)await e(!0)}async function ki(t){for(const e of t.v_)await e(!1)}function bg(t,e){const n=J(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Au(n)?wu(n):us(n).Ho()&&Tu(n,e))}function Cg(t,e){const n=J(t),r=us(n);n.D_.delete(e),r.Ho()&&kg(n,e),n.D_.size===0&&(r.Ho()?r.Zo():_r(n)&&n.M_.set("Unknown"))}function Tu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).u_(e)}function kg(t,e){t.x_.Oe(e),us(t).c_(e)}function wu(t){t.x_=new yA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.M_.g_()}function Au(t){return _r(t)&&!us(t).jo()&&t.D_.size>0}function _r(t){return J(t).C_.size===0}function Ng(t){t.x_=void 0}async function _0(t){t.D_.forEach((e,n)=>{Tu(t,e)})}async function y0(t,e){Ng(t),Au(t)?(t.M_.w_(e),wu(t)):t.M_.set("Unknown")}async function v0(t,e,n){if(t.M_.set("Online"),e instanceof _g&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(t,r)}else if(e instanceof co?t.x_.$e(e):e instanceof gg?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Y.min()))try{const r=await Rg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),kg(i,c);const h=new vn(u.target,c,l,u.sequenceNumber);Tu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Uo(t,r)}}async function Uo(t,e,n){if(!Si(e))throw e;t.C_.add(1),await ki(t),t.M_.set("Offline"),n||(n=()=>Rg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ra(t)})}function Dg(t,e){return e().catch(n=>Uo(t,n,e))}async function Pa(t){const e=J(t),n=Vn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;E0(e);)try{const s=await s0(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,I0(e,s)}catch(s){await Uo(e,s)}Og(e)&&Vg(e)}function E0(t){return _r(t)&&t.b_.length<10}function I0(t,e){t.b_.push(e);const n=Vn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Og(t){return _r(t)&&!Vn(t).jo()&&t.b_.length>0}function Vg(t){Vn(t).start()}async function T0(t){Vn(t).E_()}async function w0(t){const e=Vn(t);for(const n of t.b_)e.P_(n.mutations)}async function A0(t,e,n){const r=t.b_.shift(),s=gu.from(r,e,n);await Dg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pa(t)}async function R0(t,e){e&&Vn(t).h_&&await async function(r,s){if(function(o){return mA(o)&&o!==v.ABORTED}(s.code)){const i=r.b_.shift();Vn(r).Yo(),await Dg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pa(r)}}(t,e),Og(t)&&Vg(t)}async function Pf(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=_r(n);n.C_.add(3),await ki(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ra(n)}async function P0(t,e){const n=J(t);e?(n.C_.delete(2),await Ra(n)):e||(n.C_.add(2),await ki(n),n.M_.set("Unknown"))}function us(t){return t.O_||(t.O_=function(n,r,s){const i=J(n);return i.A_(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:_0.bind(null,t),Io:y0.bind(null,t),a_:v0.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Au(t)?wu(t):t.M_.set("Unknown")):(await t.O_.stop(),Ng(t))})),t.O_}function Vn(t){return t.N_||(t.N_=function(n,r,s){const i=J(n);return i.A_(),new d0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:T0.bind(null,t),Io:R0.bind(null,t),T_:w0.bind(null,t),I_:A0.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Pa(t)):(await t.N_.stop(),t.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ru(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(t,e){if(rn("AsyncQueue",`${e}: ${t}`),Si(t))return new O(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.B_=new Re($.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xr(e,n,Ur.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.k_=void 0,this.listeners=[]}}class b0{constructor(){this.queries=new ls(e=>ng(e),va),this.onlineState="Unknown",this.q_=new Set}}async function C0(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new S0),s)try{i.k_=await n.onListen(r)}catch(o){const a=Pu(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Su(n)}async function k0(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function N0(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Su(n)}function D0(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Su(t){t.q_.forEach(e=>{e.next()})}class O0{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.key=e}}class xg{constructor(e){this.key=e}}class V0{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=rg(e),this.aa=new Ur(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Sf,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Ea(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?g!==R&&(r.track({type:3,doc:p}),y=!0):this.ha(f,p)||(r.track({type:2,doc:p}),y=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),y=!0):f&&!p&&(r.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(p?(o=o.add(p),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,g){const R=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return R(p)-R(g)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Xr(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Sf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new xg(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Mg(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Xr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class M0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class x0{constructor(e){this.key=e,this.Ra=!1}}class L0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ls(a=>ng(a),va),this.fa=new Map,this.ga=new Set,this.pa=new Re($.comparator),this.ya=new Map,this.wa=new vu,this.Sa={},this.ba=new Map,this.Da=Yr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function F0(t,e){const n=G0(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await i0(n.localStore,qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await U0(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&bg(n.remoteStore,o)}return s}async function U0(t,e,n,r,s){t.va=(h,f,p)=>async function(R,y,P,V){let H=y.view.ca(P);H.Zi&&(H=await wf(R.localStore,y.query,!1).then(({documents:Z})=>y.view.ca(Z,H)));const q=V&&V.targetChanges.get(y.targetId),he=V&&V.targetMismatches.get(y.targetId)!=null,z=y.view.applyChanges(H,R.isPrimaryClient,q,he);return Cf(R,y.targetId,z.Ta),z.snapshot}(t,h,f,p);const i=await wf(t.localStore,e,!0),o=new V0(e,i.ls),a=o.ca(i.documents),c=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Cf(t,n,l.Ta);const u=new M0(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function $0(t,e){const n=J(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!va(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cg(n.remoteStore,r.targetId),rl(n,r.targetId)}).catch(Pi)):(rl(n,r.targetId),await nl(n.localStore,r.targetId,!0))}async function B0(t,e,n){const r=Q0(t);try{const s=await function(o,a){const c=J(o),l=xe.now(),u=a.reduce((p,g)=>p.add(g.key),re());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=sn(),R=re();return c.ss.getEntries(p,u).next(y=>{g=y,g.forEach((P,V)=>{V.isValidDocument()||(R=R.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,g)).next(y=>{h=y;const P=[];for(const V of a){const H=uA(V,h.get(V.key).overlayedDocument);H!=null&&P.push(new Ln(V.key,H,Gm(H.value.mapValue),Ct.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(y=>{f=y;const P=y.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(p,y.batchId,P)})}).then(()=>({batchId:f.batchId,changes:ig(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Re(ce)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ni(r,s.changes),await Pa(r.remoteStore)}catch(s){const i=Pu(s,"Failed to persist write");n.reject(i)}}async function Lg(t,e){const n=J(t);try{const r=await n0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?ve(o.Ra):s.removedDocuments.size>0&&(ve(o.Ra),o.Ra=!1))}),await Ni(n,r,e)}catch(r){await Pi(r)}}function bf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&Su(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function j0(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Re($.comparator);o=o.insert(i,Je.newNoDocument(i,Y.min()));const a=re().add(i),c=new wa(Y.min(),new Map,new Re(ce),o,a);await Lg(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),bu(r)}else await nl(r.localStore,e,!1).then(()=>rl(r,e,n)).catch(Pi)}async function q0(t,e){const n=J(t),r=e.batch.batchId;try{const s=await t0(n.localStore,e);Ug(n,r,null),Fg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ni(n,s)}catch(s){await Pi(s)}}async function H0(t,e,n){const r=J(t);try{const s=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ve(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ug(r,e,n),Fg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ni(r,s)}catch(s){await Pi(s)}}function Fg(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Ug(t,e,n){const r=J(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||$g(t,r)})}function $g(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Cg(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),bu(t))}function Cf(t,e,n){for(const r of n)r instanceof Mg?(t.wa.addReference(r.key,e),z0(t,r)):r instanceof xg?(M("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||$g(t,r.key)):K()}function z0(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(M("SyncEngine","New document in limbo: "+n),t.ga.add(r),bu(t))}function bu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new $(Te.fromString(e)),r=t.Da.next();t.ya.set(r,new x0(n)),t.pa=t.pa.insert(n,r),bg(t.remoteStore,new vn(qt(pu(n.path)),r,"TargetPurposeLimboResolution",cu._e))}}async function Ni(t,e,n){const r=J(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Iu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,f=>w.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>w.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Si(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),g=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(f,R)}}}(r.localStore,i))}async function W0(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Ag(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new O(v.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ni(n,r._s)}}function K0(t,e){const n=J(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function G0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=j0.bind(null,e),e.Va.a_=N0.bind(null,e.eventManager),e.Va.Fa=D0.bind(null,e.eventManager),e}function Q0(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=q0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H0.bind(null,e),e}class kf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return e0(this.persistence,new JA,e.initialUser,this.serializer)}createPersistence(e){return new QA(Eu.jr,this.serializer)}createSharedClientState(e){return new a0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Y0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=W0.bind(null,this.syncEngine),await P0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new b0}()}createDatastore(e){const n=Aa(e.databaseInfo.databaseId),r=function(i){return new h0(i)}(e.databaseInfo);return function(i,o,a,c){return new p0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new g0(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bf(this.syncEngine,n,0),function(){return Rf.D()?new Rf:new c0}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new L0(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);M("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ki(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sc(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ag(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eR(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Pf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Pf(e.remoteStore,i)),t._onlineComponents=e}function Z0(t){return t.name==="FirebaseError"?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Z0(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await sc(t,new kf)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await sc(t,new kf);return t._offlineComponents}async function Bg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Nf(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Nf(t,new Y0))),t._onlineComponents}function tR(t){return Bg(t).then(e=>e.syncEngine)}async function Df(t){const e=await Bg(t),n=e.eventManager;return n.onListen=F0.bind(null,e.syncEngine),n.onUnlisten=$0.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e,n){if(!n)throw new O(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,r){if(e===!0&&r===!0)throw new O(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!$.isDocumentKey(t))throw new O(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if($.isDocumentKey(t))throw new O(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sa(t);throw new O(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Iw;switch(r.type){case"firstParty":return new Rw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Of.get(n);r&&(M("ComponentProvider","Removing Datastore"),Of.delete(n),r.terminate())}(this),Promise.resolve()}}function rR(t,e,n,r={}){var s;const i=(t=Sn(t,ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xe.MOCK_USER;else{a=GE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xe(l)}t._authCredentials=new Tw(new Hm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class bn extends yr{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new $(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function sR(t,e,...n){if(t=Fe(t),qg("collection","path",e),t instanceof ba){const r=Te.fromString(e,...n);return Mf(r),new bn(t,null,r)}{if(!(t instanceof lt||t instanceof bn))throw new O(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Mf(r),new bn(t.firestore,null,r)}}function sl(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=zm.newId()),qg("doc","path",e),t instanceof ba){const r=Te.fromString(e,...n);return Vf(r),new lt(t,null,new $(r))}{if(!(t instanceof lt||t instanceof bn))throw new O(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Vf(r),new lt(t.firestore,t instanceof bn?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Pg(this,"async_queue_retry"),this.iu=()=>{const n=rc();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new rr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Si(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw rn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Lf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Jr extends ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new iR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zg(this),this._firestoreClient.terminate()}}function oR(t,e){const n=typeof t=="object"?t:Fp(),r=typeof t=="string"?t:e||"(default)",s=Fl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=WE("firestore");i&&rR(s,...i)}return s}function Hg(t){return t._firestoreClient||zg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zg(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Lw(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,jg(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new J0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(rt.fromBase64String(e))}catch(n){throw new O(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^__.*__$/;class cR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new bi(e,this.data,n,this.fieldTransforms)}}class Wg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ln(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return $o(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Kg(this.Iu)&&aR.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class lR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Aa(e)}pu(e,n,r,s=!1){return new Nu({Iu:e,methodName:n,gu:r,path:We.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Du(t){const e=t._freezeSettings(),n=Aa(t._databaseId);return new lR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uR(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Ou("Data must be an object, but it was:",o,r);const a=Gg(r,o);let c,l;if(i.merge)c=new mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=il(e,h,n);if(!o.contains(f))throw new O(v.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Yg(u,f)||u.push(f)}c=new mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cR(new ct(a),c,l)}class ka extends Cu{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ka}}function hR(t,e,n,r){const s=t.pu(1,e,n);Ou("Data must be an object, but it was:",s,r);const i=[],o=ct.empty();gr(r,(c,l)=>{const u=Vu(e,c,n);l=Fe(l);const h=s.Ru(u);if(l instanceof ka)i.push(u);else{const f=Di(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new mt(i);return new Wg(o,a,s.fieldTransforms)}function fR(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[il(e,r,n)],c=[s];if(i.length%2!=0)throw new O(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(il(e,i[f])),c.push(i[f+1]);const l=[],u=ct.empty();for(let f=a.length-1;f>=0;--f)if(!Yg(l,a[f])){const p=a[f];let g=c[f];g=Fe(g);const R=o.Ru(p);if(g instanceof ka)l.push(p);else{const y=Di(g,R);y!=null&&(l.push(p),u.set(p,y))}}const h=new mt(l);return new Wg(u,h,o.fieldTransforms)}function dR(t,e,n,r=!1){return Di(n,t.pu(r?4:3,e))}function Di(t,e){if(Qg(t=Fe(t)))return Ou("Unsupported field value:",e,t),Gg(t,e);if(t instanceof Cu)return function(r,s){if(!Kg(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Di(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Fo(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(s.serializer,i)}}if(r instanceof ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:yg(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Sa(r)}`)}(t,e)}function Gg(t,e){const n={};return Wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(t,(r,s)=>{const i=Di(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof ku||t instanceof Zr||t instanceof lt||t instanceof Cu)}function Ou(t,e,n){if(!Qg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Sa(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function il(t,e,n){if((e=Fe(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return Vu(t,e);throw $o("Field path arguments must be of type string or ",t,!1,void 0,n)}const pR=new RegExp("[~\\*/\\[\\]]");function Vu(t,e,n){if(e.search(pR)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ca(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $o(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new O(v.INVALID_ARGUMENT,a+t+c)}function Yg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mR extends Xg{data(){return super.data()}}function Mu(t,e){return typeof e=="string"?Vu(t,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class Jg extends xu{}function _R(t,e,...n){let r=[];e instanceof xu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Fu).length,a=i.filter(c=>c instanceof Lu).length;if(o>1||o>0&&a>0)throw new O(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lu extends Jg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lu(e,n,r)}_apply(e){const n=this._parse(e);return Zg(e._query,n),new yr(e.firestore,e.converter,Yc(e._query,n))}_parse(e){const n=Du(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Uf(h,u);const p=[];for(const g of h)p.push(Ff(c,i,g));f={arrayValue:{values:p}}}else f=Ff(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Uf(h,u),f=dR(a,o,h,u==="in"||u==="not-in");return Ne.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Fu extends xu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Zg(o,c),o=Yc(o,c)}(e._query,n),new yr(e.firestore,e.converter,Yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uu extends Jg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new O(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ci(i,o)}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new cs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function yR(t,e="asc"){const n=e,r=Mu("orderBy",t);return Uu._create(r,n)}function Ff(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new O(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tg(e)&&n.indexOf("/")!==-1)throw new O(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!$.isDocumentKey(r))throw new O(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return of(t,new $(r))}if(n instanceof lt)return of(t,n._key);throw new O(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(n)}.`)}function Uf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zg(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class vR{convertValue(e,n="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ku(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const n=On(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(wg(r));const s=new oi(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e_ extends Xg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lo extends e_{data(e={}){return super.data(e)}}class IR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lo(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new lo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Cs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new lo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Cs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:TR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class t_ extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function wR(t,e,n,...r){t=Sn(t,lt);const s=Sn(t.firestore,Jr),i=Du(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof Ca?fR(i,"updateDoc",t._key,e,n,r):hR(i,"updateDoc",t._key,e),$u(s,[o.toMutation(t._key,Ct.exists(!0))])}function AR(t){return $u(Sn(t.firestore,Jr),[new mu(t._key,Ct.none())])}function RR(t,e){const n=Sn(t.firestore,Jr),r=sl(t),s=ER(t.converter,e);return $u(n,[uR(Du(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function PR(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Lf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof lt)l=Sn(t.firestore,Jr),u=pu(t._key.path),c={next:h=>{e[o]&&e[o](SR(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Sn(t,yr);l=Sn(h.firestore,Jr),u=h._query;const f=new t_(l);c={next:p=>{e[o]&&e[o](new IR(l,f,h,p))},error:e[o+1],complete:e[o+2]},gR(t._query)}return function(f,p,g,R){const y=new X0(R),P=new O0(p,y,g);return f.asyncQueue.enqueueAndForget(async()=>C0(await Df(f),P)),()=>{y.Na(),f.asyncQueue.enqueueAndForget(async()=>k0(await Df(f),P))}}(Hg(l),u,a,c)}function $u(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>B0(await tR(r),s,i)),i.promise}(Hg(t),e)}function SR(t,e,n){const r=n.docs.get(e._key),s=new t_(t);return new e_(t,s,e._key,r,new Cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){as=s})(ss),Hr(new or("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Jr(new ww(r.getProvider("auth-internal")),new Sw(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new O(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(tf,"4.4.0",e),Pn(tf,"4.4.0","esm2017")})();function Bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function n_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bR=n_,r_=new gi("auth","Firebase",n_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new xl("@firebase/auth");function CR(t,...e){Bo.logLevel<=se.WARN&&Bo.warn(`Auth (${ss}): ${t}`,...e)}function uo(t,...e){Bo.logLevel<=se.ERROR&&Bo.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw ju(t,...e)}function zt(t,...e){return ju(t,...e)}function kR(t,e,n){const r=Object.assign(Object.assign({},bR()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function ju(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r_.create(t,...e)}function W(t,e,...n){if(!t)throw ju(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function on(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NR(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NR()||YE()||"connection"in navigator)?navigator.onLine:!0}function OR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=QE()||XE()}get(){return DR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Oi(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,s={}){return i_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=_i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),s_.fetch()(o_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function i_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VR),e);try{const s=new LR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ji(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ji(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kR(t,u,l);Ot(t,u)}}catch(s){if(s instanceof cn)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function Vi(t,e,n,r,s={}){const i=await Un(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function o_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qu(t.config,s):`${t.config.apiScheme}://${s}`}function xR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),MR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}function Bf(t){return t!==void 0&&t.enterprise!==void 0}class FR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function UR(t,e){return Un(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function BR(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jR(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Hu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Us(ic(s.auth_time)),issuedAtTime:Us(ic(s.iat)),expirationTime:Us(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function Hu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Np(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qR(t){const e=Hu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&HR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,BR(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?GR(i.providerUserInfo):[],a=KR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new a_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WR(t){const e=Fe(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function GR(t){return t.map(e=>{var{providerId:n}=e,r=Bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){const n=await i_(t,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=o_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",s_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YR(t,e){return Un(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new a_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jR(this,e)}reload(){return WR(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hi(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:q,isAnonymous:he,providerData:z,stsTokenManager:Z}=n;W(H&&Z,e,"internal-error");const Qe=fi.fromJSON(this.name,Z);W(typeof H=="string",e,"internal-error"),un(h,e.name),un(f,e.name),W(typeof q=="boolean",e,"internal-error"),W(typeof he=="boolean",e,"internal-error"),un(p,e.name),un(g,e.name),un(R,e.name),un(y,e.name),un(P,e.name),un(V,e.name);const Pe=new sr({uid:H,auth:e,email:f,emailVerified:q,displayName:h,isAnonymous:he,photoURL:g,phoneNumber:p,tenantId:R,stsTokenManager:Qe,createdAt:P,lastLoginAt:V});return z&&Array.isArray(z)&&(Pe.providerData=z.map(De=>Object.assign({},De))),y&&(Pe._redirectEventId=y),Pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function en(t){on(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c_.type="NONE";const qf=c_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $r(en(qf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||en(qf);const o=ho(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=sr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $r(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new $r(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(p_(e))return"Webos";if(zu(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l_(t=nt()){return/firefox\//i.test(t)}function zu(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=nt()){return/crios\//i.test(t)}function h_(t=nt()){return/iemobile/i.test(t)}function f_(t=nt()){return/android/i.test(t)}function d_(t=nt()){return/blackberry/i.test(t)}function p_(t=nt()){return/webos/i.test(t)}function Na(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XR(t=nt()){var e;return Na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return JE()&&document.documentMode===10}function m_(t=nt()){return Na(t)||f_(t)||p_(t)||d_(t)||/windows phone/i.test(t)||h_(t)}function ZR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e=[]){let n;switch(t){case"Browser":n=Hf(nt());break;case"Worker":n=`${Hf(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e={}){return Un(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=6;class rP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zf(this),this.idTokenSubscription=new zf(this),this.beforeStateQueue=new eP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tP(this),n=new rP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vr(t){return Fe(t)}class zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=iI(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function __(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iP().appendChild(r)})}function oP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aP="https://www.google.com/recaptcha/enterprise.js?render=",cP="recaptcha-enterprise",lP="NO_RECAPTCHA";class uP{constructor(e){this.type=cP,this.auth=vr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{UR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new FR(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Bf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(lP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}__(aP+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wf(t,e,n,r=!1){const s=new uP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function al(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Po(i,e??{}))return s;Ot(s,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dP(t,e,n){const r=vr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=y_(e),{host:o,port:a}=pP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mP()}function y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pP(t){const e=y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kf(o)}}}function Kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function gP(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){return Vi(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function vP(t,e){return Vi(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Wu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(e,n,"signInWithPassword",_P);case"emailLink":return yP(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(e,r,"signUpPassword",gP);case"emailLink":return vP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e){return Vi(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="http://localhost";class hr extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:EP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TP(t){const e=ws(As(t)).link,n=e?ws(As(e)).deep_link_id:null,r=ws(As(t)).deep_link_id;return(r?ws(As(r)).link:null)||r||n||e||t}class Ku{constructor(e){var n,r,s,i,o,a;const c=ws(As(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=IP((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TP(e);try{return new Ku(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ku.parseLink(n);return W(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Mi{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Mi{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return Vi(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sr._fromIdTokenResponse(e,r,s),o=Gf(r);return new fr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gf(r);return new fr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qo(e,n,r,s)}}function E_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,i,e,r):i})}async function AP(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await hi(t,E_(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Hu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),fr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e,n=!1){const r="signIn",s=await E_(t,r,e),i=await fr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PP(t,e){return I_(vr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t){const e=vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SP(t,e,n){const r=vr(t),o=await al(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&T_(t),c}),a=await fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bP(t,e,n){return PP(Fe(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T_(t),r})}function CP(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function kP(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function NP(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function DP(t){return Fe(t).signOut()}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){const t=nt();return zu(t)||Na(t)}const VP=1e3,MP=10;class A_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OP()&&ZR(),this.fallbackToPolling=m_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,MP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const xP=A_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const P_=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await LP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function UP(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jP(){return S_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="firebaseLocalStorageDb",qP=1,zo="firebaseLocalStorage",C_="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function HP(){const t=indexedDB.deleteDatabase(b_);return new xi(t).toPromise()}function cl(){const t=indexedDB.open(b_,qP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:C_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await HP(),e(await cl()))})})}async function Qf(t,e,n){const r=Oa(t,!0).put({[C_]:e,value:n});return new xi(r).toPromise()}async function zP(t,e){const n=Oa(t,!1).get(e),r=await new xi(n).toPromise();return r===void 0?null:r.value}function Yf(t,e){const n=Oa(t,!0).delete(e);return new xi(n).toPromise()}const WP=800,KP=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(jP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new FP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await Qf(e,Ho,"1"),await Yf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oa(s,!1).getAll();return new xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const GP=k_;new Oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){return e?en(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YP(t){return I_(t.auth,new Qu(t),t.bypassAuthState)}function XP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),RP(n,new Qu(t),t.bypassAuthState)}async function JP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),AP(n,new Qu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YP;case"linkViaPopup":case"linkViaRedirect":return JP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:Ot(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=new Oi(2e3,1e4);class Vr extends N_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZP.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="pendingRedirect",fo=new Map;class tS extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await nS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nS(t,e){const n=iS(e),r=sS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rS(t,e){fo.set(t._key(),e)}function sS(t){return en(t._redirectPersistence)}function iS(t){return ho(eS,t.config.apiKey,t.name)}async function oS(t,e,n=!1){const r=vr(t),s=QP(r,e),o=await new tS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=10*60*1e3;class cS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!D_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(e))}saveEventToCache(e){this.cachedEventUids.add(Xf(e)),this.lastProcessedEventTime=Date.now()}}function Xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function dS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uS(t);for(const n of e)try{if(pS(n))return}catch{}Ot(t,"unauthorized-domain")}function pS(t){const e=ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fS.test(n))return!1;if(hS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new Oi(3e4,6e4);function Jf(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gS(t){return new Promise((e,n)=>{var r,s,i;function o(){Jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(zt(t,"network-request-failed"))},timeout:mS.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=oP("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},__(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw po=null,e})}let po=null;function _S(t){return po=po||gS(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Oi(5e3,15e3),vS="__/auth/iframe",ES="emulator/auth/iframe",IS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wS(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qu(e,ES):`https://${t.config.authDomain}/${vS}`,r={apiKey:e.apiKey,appName:t.name,v:ss},s=TS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_i(r).slice(1)}`}async function AS(t){const e=await _S(t),n=Wt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:wS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},yS.get());function c(){Wt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PS=500,SS=600,bS="_blank",CS="http://localhost";class Zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kS(t,e,n,r=PS,s=SS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=u_(l)?bS:n),l_(l)&&(e=e||CS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(XR(l)&&a!=="_self")return NS(e||"",a),new Zf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Zf(h)}function NS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="__/auth/handler",OS="emulator/auth/handler",VS=encodeURIComponent("fac");async function ed(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:s};if(e instanceof v_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${VS}=${encodeURIComponent(c)}`:"";return`${MS(t)}?${_i(a).slice(1)}${l}`}function MS({config:t}){return t.emulator?qu(t,OS):`https://${t.authDomain}/${DS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class xS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=oS,this._overrideRedirectResult=rS}async _openPopup(e,n,r,s){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ed(e,n,r,ol(),s);return kS(e,o,Gu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ed(e,n,r,ol(),s);return UP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AS(e),r=new cS(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m_()||zu()||Na()}}const LS=xS;var td="@firebase/auth",nd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $S(t){Hr(new or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(t)},l=new sP(r,s,i,c);return fP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new or("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(r=>new FS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(td,nd,US(t)),Pn(td,nd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=5*60,jS=Vp("authIdTokenMaxAge")||BS;let rd=null;const qS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jS)return;const s=n==null?void 0:n.token;rd!==s&&(rd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HS(t=Fp()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:LS,persistence:[GP,xP,P_]}),r=Vp("authTokenSyncURL");if(r){const i=qS(r);kP(n,i,()=>i(n.currentUser)),CP(n,o=>i(o))}const s=Dp("auth");return s&&dP(n,`http://${s}`),n}$S("Browser");const zS={apiKey:"AIzaSyAratVSSTqOUOp5KKIgn4eK1W2abM17Fq0",authDomain:"noteballs-996a7.firebaseapp.com",projectId:"noteballs-996a7",storageBucket:"noteballs-996a7.appspot.com",messagingSenderId:"320251490867",appId:"1:320251490867:web:3daab6282d194e4ad32946",measurementId:"G-YXV68W5YVT"},O_=Lp(zS),WS=oR(O_),Zi=HS(O_);let ys,sd,ac=null;const Li=Pp("storeNotes",{state:()=>({notes:[],notesLoaded:!1}),actions:{init(){const t=Fi();ys=sR(WS,"users",t.user.id,"notes"),sd=_R(ys,yR("date","desc")),this.getNotes()},async getNotes(){this.notesLoaded=!1,ac=PR(sd,t=>{let e=[];t.forEach(n=>{let r={id:n.id,content:n.data().content,date:n.data().date};e.push(r)}),this.notes=e,this.notesLoaded=!0})},async addNote(t){let e=new Date().getTime(),n=e.toString();await RR(ys,{content:t,date:n})},async deleteNote(t){await AR(sl(ys,t))},async updateNote(t,e){await wR(sl(ys,t),{content:e})},clearNotes(){this.notes=[],ac&&ac()}},getters:{getNoteContent:t=>e=>t.notes.filter(n=>n.id===e)[0].content,totalNotesCount:t=>t.notes.length,totalCharactersCount:t=>{let e=0;return t.notes.forEach(n=>{e+=n.content.length}),e}}}),Fi=Pp("storeAuth",{state:()=>({user:{}}),getters:{getUserId:t=>{var e;return(e=t==null?void 0:t.user)==null?void 0:e.id}},actions:{init(){NP(Zi,t=>{const e=Li();t?(this.user.id=t.uid,this.user.email=t.email,this.router.push("/"),e.init()):(this.user={},this.router.replace("/auth"),e.clearNotes())})},registerUser({email:t,password:e}){SP(Zi,t,e).catch(n=>{console.error(n)})},logInUser({email:t,password:e}){bP(Zi,t,e).catch(n=>{console.error(n)})},logOutUser(){DP(Zi).then(()=>{}).catch(t=>{console.error(t)})}}}),KS={"aria-label":"main navigation",class:"navbar is-success",role:"navigation"},GS={class:"container is-max-desktop px-2"},QS=x("div",{class:"navbar-item is-size-4 is-family-monospace"}," Noteballs ",-1),YS=x("span",{"aria-hidden":"true"},null,-1),XS=x("span",{"aria-hidden":"true"},null,-1),JS=x("span",{"aria-hidden":"true"},null,-1),ZS=[YS,XS,JS],eb=["onClick"],tb={class:"navbar-end"},nb=mi(" Notes "),rb=mi(" Stats "),sb={setup(t){const e=Fi(),n=Pt(!1),r=Pt(null),s=Pt(null);FE(r,o=>n.value=!1,{ignore:[s]});const i=()=>{n.value=!1,e.logOutUser()};return(o,a)=>{const c=Nl("RouterLink");return Ze(),kt("nav",KS,[x("div",GS,[x("div",{ref_key:"navTitleRef",ref:s,class:"navbar-brand"},[QS,x("a",{class:Cn([{"is-active":n.value},"navbar-burger"]),"aria-expanded":"false","aria-label":"menu","data-target":"navbarBasicExample",role:"button",onClick:a[0]||(a[0]=tr(l=>n.value=!n.value,["prevent"]))},ZS,2),Se(e).user.id?(Ze(),kt("button",{key:0,class:"button is-primary",onClick:tr(i,["prevent"])},"Log out "+En(Se(e).user.email),9,eb)):so("",!0)],512),x("div",{id:"navbarBasicExample",ref_key:"navbarRef",ref:r,class:Cn([{"is-active":n.value},"navbar-menu"])},[x("div",tb,[Se(e).user.id?(Ze(),Ws(c,{key:0,"active-class":"is-active",class:"navbar-item",to:"/",onClick:a[1]||(a[1]=l=>n.value=!1)},{default:jr(()=>[nb]),_:1})):so("",!0),Se(e).user.id?(Ze(),Ws(c,{key:1,"active-class":"is-active",class:"navbar-item",to:"/stats",onClick:a[2]||(a[2]=l=>n.value=!1)},{default:jr(()=>[rb]),_:1})):so("",!0)])],2)])])}}},ib={class:"container is-max-desktop px-2 py-4"},ob={setup(t){const e=Fi();return rp(()=>{e.init()}),(n,r)=>{const s=Nl("RouterView");return Ze(),kt(ht,null,[Me(sb),x("div",ib,[Me(s)])],64)}}};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const V_=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fs=t=>V_?Symbol(t):"_vr_"+t,ab=fs("rvlm"),id=fs("rvd"),Va=fs("r"),Yu=fs("rl"),ll=fs("rvl"),Dr=typeof window<"u";function cb(t){return t.__esModule||V_&&t[Symbol.toStringTag]==="Module"}const me=Object.assign;function cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const $s=()=>{},lb=/\/$/,ub=t=>t.replace(lb,"");function lc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=pb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function hb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&es(e.matched[r],n.matched[s])&&M_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!db(t[n],e[n]))return!1;return!0}function db(t,e){return Array.isArray(t)?ad(t,e):Array.isArray(e)?ad(e,t):t===e}function ad(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function mb(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ub(t)}const gb=/^[^#]+#/;function _b(t,e){return t.replace(gb,"#")+e}function yb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function Eb(t,e){ul.set(t,e)}function Ib(t){const e=ul.get(t);return ul.delete(t),e}let Tb=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),od(c,"")}return od(n,t)+r+s}function wb(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=x_(t,location),g=n.value,R=e.value;let y=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}y=R?f.position-R.position:0}else r(p);s.forEach(P=>{P(n.value,g,{delta:y,type:pi.pop,direction:y?y>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:Ma()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ld(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function Ab(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tb()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=me({},e.state,ld(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:Ma()});i(u.current,u,!0);const h=me({},ld(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Rb(t){t=mb(t);const e=Ab(t),n=wb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:_b.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Rb(t)}function Sb(t){return typeof t=="string"||t&&typeof t=="object"}function L_(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F_=fs("nf");var ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ud||(ud={}));function ts(t,e){return me(new Error,{type:t,[F_]:!0},e)}function qn(t,e){return t instanceof Error&&F_ in t&&(e==null||!!(t.type&e))}const hd="[^/]+?",bb={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function kb(t,e){const n=me({},bb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Cb,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:R,optional:y,regexp:P}=f;i.push({name:g,repeatable:R,optional:y});const V=P||hd;if(V!==hd){p+=10;try{new RegExp(`(${V})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${g}" (${V}): `+q.message)}}let H=R?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(H=y&&l.length<2?`(?:/${H})`:"/"+H),y&&(H+="?"),s+=H,p+=20,y&&(p+=-8),R&&(p+=-20),V===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=i[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:R,optional:y}=p,P=g in l?l[g]:"";if(Array.isArray(P)&&!R)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const V=Array.isArray(P)?P.join("/"):P;if(!V)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=V}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Nb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Db(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Nb(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Ob={type:0,value:""},Vb=/[a-zA-Z0-9_]/;function Mb(t){if(!t)return[[]];if(t==="/")return[[Ob]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Vb.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function xb(t,e,n){const r=kb(Mb(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lb(t,e){const n=[],r=new Map;e=dd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,g=Ub(u);g.aliasOf=f&&f.record;const R=dd(e,u),y=[g];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of H)y.push(me({},g,{components:f?f.record.components:g.components,path:q,aliasOf:f?f.record:g}))}let P,V;for(const H of y){const{path:q}=H;if(h&&q[0]!=="/"){const he=h.record.path,z=he[he.length-1]==="/"?"":"/";H.path=h.record.path+(q&&z+q)}if(P=xb(H,h,R),f?f.alias.push(P):(V=V||P,V!==P&&V.alias.push(P),p&&u.name&&!fd(P)&&o(u.name)),"children"in g){const he=g.children;for(let z=0;z<he.length;z++)i(he[z],P,f&&f.children[z])}f=f||P,c(P)}return V?()=>{o(V)}:$s}function o(u){if(L_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Db(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!fd(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},g,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ts(1,{location:u});R=f.record.name,p=me(Fb(h.params,f.keys.filter(V=>!V.optional).map(V=>V.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(V=>V.re.test(g)),f&&(p=f.parse(g),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!f)throw ts(1,{location:u,currentLocation:h});R=f.record.name,p=me({},h.params,u.params),g=f.stringify(p)}const y=[];let P=f;for(;P;)y.unshift(P.record),P=P.parent;return{name:R,path:g,params:p,matched:y,meta:Bb(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fb(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ub(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$b(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function $b(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function fd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bb(t){return t.reduce((e,n)=>me(e,n.meta),{})}function dd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const U_=/#/g,jb=/&/g,qb=/\//g,Hb=/=/g,zb=/\?/g,$_=/\+/g,Wb=/%5B/g,Kb=/%5D/g,B_=/%5E/g,Gb=/%60/g,j_=/%7B/g,Qb=/%7C/g,q_=/%7D/g,Yb=/%20/g;function Xu(t){return encodeURI(""+t).replace(Qb,"|").replace(Wb,"[").replace(Kb,"]")}function Xb(t){return Xu(t).replace(j_,"{").replace(q_,"}").replace(B_,"^")}function hl(t){return Xu(t).replace($_,"%2B").replace(Yb,"+").replace(U_,"%23").replace(jb,"%26").replace(Gb,"`").replace(j_,"{").replace(q_,"}").replace(B_,"^")}function Jb(t){return hl(t).replace(Hb,"%3D")}function Zb(t){return Xu(t).replace(U_,"%23").replace(zb,"%3F")}function eC(t){return t==null?"":Zb(t).replace(qb,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($_," "),o=i.indexOf("="),a=Wo(o<0?i:i.slice(0,o)),c=o<0?null:Wo(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function pd(t){let e="";for(let n in t){const r=t[n];if(n=Jb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ts(4,{from:n,to:e})):h instanceof Error?a(h):Sb(h)?a(ts(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function uc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rC(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=cb(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&pn(f,n,r,i,o)()}))}}return s}function rC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function md(t){const e=bt(Va),n=bt(Yu),r=dt(()=>e.resolve(Se(t.to))),s=dt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(es.bind(null,u));if(f>-1)return f;const p=gd(c[l-2]);return l>1&&gd(u)===p&&h[h.length-1].path!==p?h.findIndex(es.bind(null,c[l-2])):f}),i=dt(()=>s.value>-1&&aC(n.params,r.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&M_(n.params,r.value.params));function a(c={}){return oC(c)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch($s):Promise.resolve()}return{route:r,href:dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sC=ep({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:md,setup(t,{slots:e}){const n=pr(md(t)),{options:r}=bt(Va),s=dt(()=>({[_d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ep("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iC=sC;function oC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function gd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _d=(t,e,n)=>t??e??n,cC=ep({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=bt(ll),s=dt(()=>t.route||r.value),i=bt(id,0),o=dt(()=>s.value.matched[i]);no(id,i+1),no(ab,o),no(ll,s);const a=Pt();return Jn(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!es(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return yd(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,R=Ep(u,me({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return yd(n.default,{Component:R,route:c})||R}}});function yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lC=cC;function uC(t){const e=Lb(t.routes,t),n=t.parseQuery||tC,r=t.stringifyQuery||pd,s=t.history,i=vs(),o=vs(),a=vs(),c=My(hn);let l=hn;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cc.bind(null,E=>""+E),h=cc.bind(null,eC),f=cc.bind(null,Wo);function p(E,F){let k,U;return L_(E)?(k=e.getRecordMatcher(E),U=F):U=E,e.addRoute(U,k)}function g(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function R(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function P(E,F){if(F=me({},F||c.value),typeof E=="string"){const ee=lc(n,E,F.path),d=e.resolve({path:ee.path},F),m=s.createHref(ee.fullPath);return me(ee,d,{params:f(d.params),hash:Wo(ee.hash),redirectedFrom:void 0,href:m})}let k;if("path"in E)k=me({},E,{path:lc(n,E.path,F.path).path});else{const ee=me({},E.params);for(const d in ee)ee[d]==null&&delete ee[d];k=me({},E,{params:h(E.params)}),F.params=h(F.params)}const U=e.resolve(k,F),de=E.hash||"";U.params=u(f(U.params));const ye=hb(r,me({},E,{hash:Xb(de),path:U.path})),ne=s.createHref(ye);return me({fullPath:ye,hash:de,query:r===pd?nC(E.query):E.query||{}},U,{redirectedFrom:void 0,href:ne})}function V(E){return typeof E=="string"?lc(n,E,c.value.path):me({},E)}function H(E,F){if(l!==E)return ts(8,{from:F,to:E})}function q(E){return Z(E)}function he(E){return q(me(V(E),{replace:!0}))}function z(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:k}=F;let U=typeof k=="function"?k(E):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=V(U):{path:U},U.params={}),me({query:E.query,hash:E.hash,params:E.params},U)}}function Z(E,F){const k=l=P(E),U=c.value,de=E.state,ye=E.force,ne=E.replace===!0,ee=z(k);if(ee)return Z(me(V(ee),{state:de,force:ye,replace:ne}),F||k);const d=k;d.redirectedFrom=F;let m;return!ye&&fb(r,U,k)&&(m=ts(16,{to:d,from:U}),Ir(U,U,!0,!1)),(m?Promise.resolve(m):Pe(d,U)).catch(_=>qn(_)?_:_e(_,d,U)).then(_=>{if(_){if(qn(_,2))return Z(me(V(_.to),{state:de,force:ye,replace:ne}),F||d)}else _=wt(d,U,!0,ne,de);return De(d,U,_),_})}function Qe(E,F){const k=H(E,F);return k?Promise.reject(k):Promise.resolve()}function Pe(E,F){let k;const[U,de,ye]=hC(E,F);k=uc(U.reverse(),"beforeRouteLeave",E,F);for(const ee of U)ee.leaveGuards.forEach(d=>{k.push(pn(d,E,F))});const ne=Qe.bind(null,E,F);return k.push(ne),Rr(k).then(()=>{k=[];for(const ee of i.list())k.push(pn(ee,E,F));return k.push(ne),Rr(k)}).then(()=>{k=uc(de,"beforeRouteUpdate",E,F);for(const ee of de)ee.updateGuards.forEach(d=>{k.push(pn(d,E,F))});return k.push(ne),Rr(k)}).then(()=>{k=[];for(const ee of E.matched)if(ee.beforeEnter&&!F.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const d of ee.beforeEnter)k.push(pn(d,E,F));else k.push(pn(ee.beforeEnter,E,F));return k.push(ne),Rr(k)}).then(()=>(E.matched.forEach(ee=>ee.enterCallbacks={}),k=uc(ye,"beforeRouteEnter",E,F),k.push(ne),Rr(k))).then(()=>{k=[];for(const ee of o.list())k.push(pn(ee,E,F));return k.push(ne),Rr(k)}).catch(ee=>qn(ee,8)?ee:Promise.reject(ee))}function De(E,F,k){for(const U of a.list())U(E,F,k)}function wt(E,F,k,U,de){const ye=H(E,F);if(ye)return ye;const ne=F===hn,ee=Dr?history.state:{};k&&(U||ne?s.replace(E.fullPath,me({scroll:ne&&ee&&ee.scroll},de)):s.push(E.fullPath,de)),c.value=E,Ir(E,F,k,ne),vt()}let At;function yt(){At=s.listen((E,F,k)=>{const U=P(E),de=z(U);if(de){Z(me(de,{replace:!0}),U).catch($s);return}l=U;const ye=c.value;Dr&&Eb(cd(ye.fullPath,k.delta),Ma()),Pe(U,ye).catch(ne=>qn(ne,12)?ne:qn(ne,2)?(Z(ne.to,U).then(ee=>{qn(ee,20)&&!k.delta&&k.type===pi.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(k.delta&&s.go(-k.delta,!1),_e(ne,U,ye))).then(ne=>{ne=ne||wt(U,ye,!1),ne&&(k.delta?s.go(-k.delta,!1):k.type===pi.pop&&qn(ne,20)&&s.go(-1,!1)),De(U,ye,ne)}).catch($s)})}let Oe=vs(),Er=vs(),Ve;function _e(E,F,k){vt(E);const U=Er.list();return U.length?U.forEach(de=>de(E,F,k)):console.error(E),Promise.reject(E)}function fe(){return Ve&&c.value!==hn?Promise.resolve():new Promise((E,F)=>{Oe.add([E,F])})}function vt(E){Ve||(Ve=!0,yt(),Oe.list().forEach(([F,k])=>E?k(E):F()),Oe.reset())}function Ir(E,F,k,U){const{scrollBehavior:de}=t;if(!Dr||!de)return Promise.resolve();const ye=!k&&Ib(cd(E.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return Pl().then(()=>de(E,F,ye)).then(ne=>ne&&vb(ne)).catch(ne=>_e(ne,E,F))}const Qt=E=>s.go(E);let Vt;const Et=new Set;return{currentRoute:c,addRoute:p,removeRoute:g,hasRoute:y,getRoutes:R,resolve:P,options:t,push:q,replace:he,go:Qt,back:()=>Qt(-1),forward:()=>Qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Er.add,isReady:fe,install(E){const F=this;E.component("RouterLink",iC),E.component("RouterView",lC),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(c)}),Dr&&!Vt&&c.value===hn&&(Vt=!0,q(s.location).catch(de=>{}));const k={};for(const de in hn)k[de]=dt(()=>c.value[de]);E.provide(Va,F),E.provide(Yu,pr(k)),E.provide(ll,c);const U=E.unmount;Et.add(E),E.unmount=function(){Et.delete(E),Et.size<1&&(l=hn,At&&At(),c.value=hn,Vt=!1,Ve=!1),U()}}}}function Rr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>es(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>es(l,c))||s.push(c))}return[n,r,s]}function fC(){return bt(Va)}function dC(){return bt(Yu)}const pC={class:"card mb-4"},mC={class:"card-content"},gC={class:"content"},_C={class:"has-text-left has-text-grey-light mt-2"},yC={class:"has-text-right has-text-grey-light mt-2"},vC={class:"card-footer"},EC=mi(" Edit "),IC={props:{note:{type:Object,required:!0}},setup(t){const e=t,n=Li(),r=dt(()=>{let i=e.note.content.length,o=i>1?"characters":"character";return`${i} ${o}`}),s=i=>LE(new Date(+i),"DD.MM.YYYY HH:mm:ss").value;return(i,o)=>{const a=Nl("RouterLink");return Ze(),kt("div",pC,[x("div",mC,[x("div",gC,[mi(En(t.note.content)+" ",1),x("div",_C,[x("small",null,En(s(t.note.date)),1)]),x("div",yC,[x("small",null,En(Se(r)),1)])])]),x("footer",vC,[Me(a,{to:`/editNote/${t.note.id}`,class:"card-footer-item",href:"#"},{default:jr(()=>[EC]),_:1},8,["to"]),x("a",{class:"card-footer-item",href:"#",onClick:o[0]||(o[0]=tr(c=>Se(n).deleteNote(t.note.id),["prevent"]))}," Delete ")])])}}},H_={mounted:t=>{t.focus()}},TC={key:0,class:"label has-text-white"},wC={class:"field"},AC={class:"control"},RC=["placeholder","value"],PC={class:"field is-grouped is-grouped-right"},SC={class:"control"},z_={props:{modelValue:{type:String,required:!0},bgColor:{type:String,default:"success"},placeholder:{type:String,default:"Type something..."},label:{type:String}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t;return(r,s)=>(Ze(),kt("div",{class:Cn([`has-background-${t.bgColor}-dark`,"card p-4 mb-5"])},[t.label?(Ze(),kt("label",TC,En(t.label),1)):so("",!0),x("div",wC,[x("div",AC,[vo(x("textarea",{placeholder:t.placeholder,value:n.modelValue,class:"textarea",onInput:s[0]||(s[0]=i=>r.$emit("update:modelValue",i.target.value))},null,40,RC),[[Se(H_)]])])]),x("div",PC,[x("div",SC,[xv(r.$slots,"buttons")])])],2))}};function W_(t,e){Jn(t,n=>{n.length>e&&alert(`Max only ${e} length note!!!`)},{immediate:!0})}const bC={class:"notes"},CC=["disabled"],kC={setup(t){const e=Li(),n=Pt(""),r=Pt(null),s=()=>{n.value!==""&&n.value!=null&&(e.addNote(n.value),n.value="")};return W_(n,30),(i,o)=>(Ze(),kt("div",bC,[Me(z_,{ref_key:"addEditNoteRef",ref:r,modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),placeholder:"Add a new note",onKeydown:gE(tr(s,["exact","prevent"]),["enter"])},{buttons:jr(()=>[x("button",{disabled:n.value==="",class:"button is-link has-background-success",onClick:s}," Add New Note ",8,CC)]),_:1},8,["modelValue","onKeydown"]),(Ze(!0),kt(ht,null,Mv(Se(e).notes,a=>(Ze(),Ws(IC,{key:a.id,note:a},null,8,["note"]))),128))]))}},NC={class:"edit-note"},DC=["disabled"],OC={setup(t){const e=dC(),n=fC(),r=Li(),s=Pt("");s.value=r.getNoteContent(e.params.id);const i=()=>{r.updateNote(e.params.id,s.value),n.replace("/")};return(o,a)=>(Ze(),kt("div",NC,[Me(z_,{ref:"addEditNoteRef",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=c=>s.value=c),bgColor:"link",label:"Edit Note",placeholder:"Edit note"},{buttons:jr(()=>[x("button",{class:"button is-link is-light mr-2",onClick:a[0]||(a[0]=c=>o.$router.back())}," Cancel "),x("button",{disabled:!s.value,class:"button is-link has-background-link",onClick:i}," Save Note ",8,DC)]),_:1},8,["modelValue"])]))}},VC={class:"stats"},MC={class:"table is-fullwidth"},xC=x("thead",null,[x("tr",null,[x("th",null,"Stat"),x("th",null,"Value")])],-1),LC=x("td",null,"Number of Notes",-1),FC=x("td",null,"Number of Characters (of all notes)",-1),UC={setup(t){const e=Li();let n=Pt("");return W_(n,20),(r,s)=>(Ze(),kt("div",VC,[x("table",MC,[xC,x("tbody",null,[x("tr",null,[LC,x("td",null,En(Se(e).totalNotesCount),1)]),x("tr",null,[FC,x("td",null,En(Se(e).totalCharactersCount),1)])])]),vo(x("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>Ae(n)?n.value=i:n=i),class:"input",placeholder:"Insert value",type:"text"},null,512),[[Pc,Se(n)],[Se(H_)]])]))}},$C={class:"auth"},BC={class:"tabs is-centered"},jC=x("a",null,"Login",-1),qC=[jC],HC=x("a",null,"Register",-1),zC=[HC],WC={class:"card"},KC={class:"card-content"},GC={class:"content"},QC=["onSubmit"],YC={class:"field"},XC=x("label",{class:"label"},"Email",-1),JC={class:"control"},ZC={class:"field"},ek=x("label",{class:"label"},"Password",-1),tk={class:"control"},nk=x("button",{class:"button is-primary"},"Submit",-1),rk={setup(t){const e=Pt(!0),n=Fi(),r=pr({email:"",password:""}),s=()=>{!r.password||!r.email?alert("Fill the field!s"):e.value?n.logInUser(r):n.registerUser(r)};return(i,o)=>(Ze(),kt("div",$C,[x("div",BC,[x("ul",null,[x("li",{class:Cn({"is-active":e.value}),onClick:o[0]||(o[0]=tr(a=>e.value=!0,["prevent"]))},qC,2),x("li",{class:Cn({"is-active":!e.value}),onClick:o[1]||(o[1]=tr(a=>e.value=!1,["prevent"]))},zC,2)])]),x("div",WC,[x("div",KC,[x("div",GC,[x("h2",null,En(e.value?"Login":"Register"),1),x("form",{onSubmit:tr(s,["prevent"])},[x("div",YC,[XC,x("div",JC,[vo(x("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>Se(r).email=a),class:"input",placeholder:"e.g. alexsmith@gmail.com",type:"email"},null,512),[[Pc,Se(r).email]])])]),x("div",ZC,[ek,x("div",tk,[vo(x("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>Se(r).password=a),class:"input",placeholder:"...",type:"password"},null,512),[[Pc,Se(r).password]])])]),nk],40,QC)])])])]))}},sk=[{path:"/",name:"notes",component:kC},{path:"/editNote/:id",name:"edit-note",component:OC},{path:"/stats",name:"stats",component:UC},{path:"/auth",name:"auth",component:rk}],Ju=uC({history:Pb(),routes:sk});Ju.beforeEach(async t=>{var n;const e=Fi();if(!((n=e.user)!=null&&n.id)&&t.name!=="auth")return{name:"auth"};if(e.user.id&&t.name==="auth")return!1});const K_=TE();K_.use(({store:t})=>{t.router=ir(Ju)});vE(ob).use(K_).use(Ju).mount("#app");
