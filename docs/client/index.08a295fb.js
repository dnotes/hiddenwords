import{S as t,i as e,s as n,M as l,x as r,z as s,B as a,N as o,O as f,k as c,m as i,C as h,u as m,e as g,y as $,v as u,a as p,b as d,d as v,A as D,f as H,g as P,r as E,E as j,H as k,P as w,D as x}from"./index.5f0ca76d.js";import{l as y}from"./store.a332e827.js";import{H as b,L as B}from"./HiddenWord.5aa7eb60.js";import{H as A}from"./Header.fac01ea5.js";import{h as I}from"./_hw.fe419e96.js";function V(t,e,n){const l=t.slice();return l[3]=e[n],l}function W(t,e,n){const l=t.slice();return l[3]=e[n],l}function z(t){let e;const n=[t[3],{linkDisplay:t[0]}];let m={};for(let t=0;t<n.length;t+=1)m=l(m,n[t]);const g=new B({props:m});return{c(){r(g.$$.fragment)},l(t){s(g.$$.fragment,t)},m(t,n){a(g,t,n),e=!0},p(t,e){const l=3&e?o(n,[2&e&&f(t[3]),1&e&&{linkDisplay:t[0]}]):{};g.$set(l)},i(t){e||(c(g.$$.fragment,t),e=!0)},o(t){i(g.$$.fragment,t),e=!1},d(t){h(g,t)}}}function C(t){let e;const n=[t[3],{linkDisplay:t[0]}];let m={};for(let t=0;t<n.length;t+=1)m=l(m,n[t]);const g=new B({props:m});return{c(){r(g.$$.fragment)},l(t){s(g.$$.fragment,t)},m(t,n){a(g,t,n),e=!0},p(t,e){const l=5&e?o(n,[4&e&&f(t[3]),1&e&&{linkDisplay:t[0]}]):{};g.$set(l)},i(t){e||(c(g.$$.fragment,t),e=!0)},o(t){i(g.$$.fragment,t),e=!1},d(t){h(g,t)}}}function L(t){let e,n,w,y,B,L,M,N,O,S,T,_,q,F;const G=new A({}),J=[I[0]];let K={};for(let t=0;t<J.length;t+=1)K=l(K,J[t]);const Q=new b({props:K});let R=t[1],U=[];for(let e=0;e<R.length;e+=1)U[e]=z(W(t,R,e));const X=t=>i(U[t],1,1,()=>{U[t]=null});let Y=t[2],Z=[];for(let e=0;e<Y.length;e+=1)Z[e]=C(V(t,Y,e));const tt=t=>i(Z[t],1,1,()=>{Z[t]=null});return{c(){e=m(),r(G.$$.fragment),n=m(),w=g("div"),r(Q.$$.fragment),y=m(),B=g("h2"),L=$("Part 1: from the Arabic"),M=m(),N=g("div");for(let t=0;t<U.length;t+=1)U[t].c();O=m(),S=g("h2"),T=$("Part 2: from the Persian"),_=m(),q=g("div");for(let t=0;t<Z.length;t+=1)Z[t].c();this.h()},l(t){e=u(t),s(G.$$.fragment,t),n=u(t),w=p(t,"DIV",{class:!0});var l=d(w);s(Q.$$.fragment,l),l.forEach(v),y=u(t),B=p(t,"H2",{class:!0});var r=d(B);L=D(r,"Part 1: from the Arabic"),r.forEach(v),M=u(t),N=p(t,"DIV",{});var a=d(N);for(let t=0;t<U.length;t+=1)U[t].l(a);a.forEach(v),O=u(t),S=p(t,"H2",{class:!0});var o=d(S);T=D(o,"Part 2: from the Persian"),o.forEach(v),_=u(t),q=p(t,"DIV",{});var f=d(q);for(let t=0;t<Z.length;t+=1)Z[t].l(f);f.forEach(v),this.h()},h(){document.title="The Hidden Words of Bahá’u’lláh",H(w,"class","text-center"),H(B,"class","section"),H(S,"class","section")},m(t,l){P(t,e,l),a(G,t,l),P(t,n,l),P(t,w,l),a(Q,w,null),P(t,y,l),P(t,B,l),E(B,L),P(t,M,l),P(t,N,l);for(let t=0;t<U.length;t+=1)U[t].m(N,null);P(t,O,l),P(t,S,l),E(S,T),P(t,_,l),P(t,q,l);for(let t=0;t<Z.length;t+=1)Z[t].m(q,null);F=!0},p(t,[e]){const n=0&e?o(J,[f(I[0])]):{};if(Q.$set(n),3&e){let n;for(R=t[1],n=0;n<R.length;n+=1){const l=W(t,R,n);U[n]?(U[n].p(l,e),c(U[n],1)):(U[n]=z(l),U[n].c(),c(U[n],1),U[n].m(N,null))}for(x(),n=R.length;n<U.length;n+=1)X(n);j()}if(5&e){let n;for(Y=t[2],n=0;n<Y.length;n+=1){const l=V(t,Y,n);Z[n]?(Z[n].p(l,e),c(Z[n],1)):(Z[n]=C(l),Z[n].c(),c(Z[n],1),Z[n].m(q,null))}for(x(),n=Y.length;n<Z.length;n+=1)tt(n);j()}},i(t){if(!F){c(G.$$.fragment,t),c(Q.$$.fragment,t);for(let t=0;t<R.length;t+=1)c(U[t]);for(let t=0;t<Y.length;t+=1)c(Z[t]);F=!0}},o(t){i(G.$$.fragment,t),i(Q.$$.fragment,t),U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)i(U[t]);Z=Z.filter(Boolean);for(let t=0;t<Z.length;t+=1)i(Z[t]);F=!1},d(t){t&&v(e),h(G,t),t&&v(n),t&&v(w),h(Q),t&&v(y),t&&v(B),t&&v(M),t&&v(N),k(U,t),t&&v(O),t&&v(S),t&&v(_),t&&v(q),k(Z,t)}}}function M(t,e,n){let l;w(t,y,t=>n(0,l=t));let r=I.slice(1,72),s=I.slice(72,155);return[l,r,s]}export default class extends t{constructor(t){super(),e(this,t,M,L,n,{})}}
