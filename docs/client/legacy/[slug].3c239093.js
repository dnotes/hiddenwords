import{a as t,b as n,c as e,d as a,i as r,s,e as o,S as i,R as c,z as u,C as f,A as h,E as p,m as d,n as m,G as w,T as l,U as v,r as g,u as $,k as x,H as b}from"./index.bedc7149.js";import{_ as j}from"./slicedToArray.f13a096f.js";import{_ as k,a as y}from"./asyncToGenerator.a01952a5.js";import{g as H}from"./app.960e609b.js";import"./store.52846353.js";import{H as T}from"./HiddenWord.b104629e.js";function A(t){var n,e,a,r;document.title=n="The Hidden Words"+(t[0].title?" : ".concat(t[0].title," "):"");for(var s=[t[0],{page:!0}],o={},i=0;i<s.length;i+=1)o=c(o,s[i]);var k=new T({props:o});return{c:function(){e=u(),f(k.$$.fragment),this.h()},l:function(t){e=h(t),p(k.$$.fragment,t),this.h()},h:function(){r=d(window,"keydown",t[1])},m:function(t,n){m(t,e,n),w(k,t,n),a=!0},p:function(t,e){var r=j(e,1)[0];(!a||1&r)&&n!==(n="The Hidden Words"+(t[0].title?" : ".concat(t[0].title," "):""))&&(document.title=n);var o=1&r?l(s,[v(t[0]),s[1]]):{};k.$set(o)},i:function(t){a||(g(k.$$.fragment,t),a=!0)},o:function(t){$(k.$$.fragment,t),a=!1},d:function(t){t&&x(e),b(k,t),r()}}}function E(t){return W.apply(this,arguments)}function W(){return(W=k(y.mark(function t(n){var e,a,r;return y.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,n.query,t.next=3,this.fetch("hw/".concat(e.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{hw:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function G(t,n,e){var a=n.hw;return t.$set=function(t){"hw"in t&&e(0,a=t.hw)},[a,function(t){switch(t.key){case"ArrowRight":case" ":case"Enter":a.next&&H("/hw/".concat(a.next.id));break;case"ArrowLeft":a.prev&&H("/hw/".concat(a.prev.id));break;case"Escape":H("/")}}]}export default(function(c){function u(t){var i;return n(this,u),i=e(this,a(u).call(this)),r(o(i),t,G,A,s,{hw:0}),i}return t(u,i),u}());export{E as preload};
