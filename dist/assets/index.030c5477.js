import{o as _,c as m,a as i,b as f,w as v,F as k,r as h,d as y,e as b,f as C,g as $,h as w,t as d,u as a,i as x,v as A,j as L,k as E,l as O,m as V}from"./vendor.bdbab47a.js";const P=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}};P();var R=(c,u)=>{const t=c.__vccOpts||c;for(const[n,e]of u)t[n]=e;return t};const D={},N=y("Home"),T=y("About");function M(c,u){const t=h("RouterLink"),n=h("RouterView");return _(),m(k,null,[i("nav",null,[f(t,{to:"/"},{default:v(()=>[N]),_:1}),f(t,{to:"/about"},{default:v(()=>[T]),_:1})]),f(n)],64)}var S=R(D,[["render",M]]);const j="modulepreload",g={},B="/vue-course/",F=function(u,t){return!t||t.length===0?u():Promise.all(t.map(n=>{if(n=`${B}${n}`,n in g)return;g[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":j,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",l)})})).then(()=>u())},H={mounted:c=>{c.focus()}};const W={class:"home"},q={class:"counter"},I={class:"edit"},K=i("h4",null,"Edit counter title:",-1),U={setup(c){const u="My Ok Counter App";b(()=>{console.log("Do stuff related to App Title")});const t=C({count:0,title:"My Counter"});$(()=>t.count,o=>{o===20&&alert("Way to go! You made it to 20!!")});const n=w(()=>t.count%2==0?"even":"odd"),e=(o,s)=>{t.count+=o},r=o=>{t.count-=o};return b(()=>{console.log("Do stuff related to Counter")}),(o,s)=>(_(),m("div",W,[i("h2",null,d(u)),i("h3",null,d(a(t).title)+":",1),i("div",null,[i("button",{onClick:s[0]||(s[0]=l=>r(2)),class:"btn"},"--"),i("button",{onClick:s[1]||(s[1]=l=>r(1)),class:"btn"},"-"),i("span",q,d(a(t).count),1),i("button",{onClick:s[2]||(s[2]=l=>e(1)),class:"btn"},"+"),i("button",{onClick:s[3]||(s[3]=l=>e(2)),class:"btn"},"++")]),i("p",null,"This counter is "+d(a(n)),1),i("div",I,[K,x(i("input",{"onUpdate:modelValue":s[4]||(s[4]=l=>a(t).title=l),type:"text"},null,512),[[A,a(t).title],[a(H)]])])]))}},Y=L({history:E("/vue-course/"),routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:()=>F(()=>import("./AboutView.ebadf953.js"),["assets/AboutView.ebadf953.js","assets/vendor.bdbab47a.js"])}]}),p=O(S);p.use(V());p.use(Y);p.mount("#app");export{H as v};