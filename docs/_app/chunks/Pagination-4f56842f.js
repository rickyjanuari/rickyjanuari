import{S as H,i as I,s as j,e as m,k as y,t as k,c as P,a as b,m as C,h as A,d as p,b as _,g as E,H as d,j as q,I as G,L as M}from"./vendor-b62d7b9b.js";function S(i,e,t){const l=i.slice();return l[4]=e[t],l}function U(i){let e,t;return{c(){e=m("span"),t=k("Go to page"),this.h()},l(l){e=P(l,"SPAN",{class:!0});var r=b(e);t=A(r,"Go to page"),r.forEach(p),this.h()},h(){_(e,"class","sr")},m(l,r){E(l,e,r),d(e,t)},d(l){l&&p(e)}}}function V(i){let e,t;return{c(){e=m("span"),t=k("Current page"),this.h()},l(l){e=P(l,"SPAN",{class:!0});var r=b(e);t=A(r,"Current page"),r.forEach(p),this.h()},h(){_(e,"class","sr")},m(l,r){E(l,e,r),d(e,t)},d(l){l&&p(e)}}}function L(i){let e,t,l,r,o=i[4]+"",h,a,s,u;function n(c,g){return g&1&&(l=null),l==null&&(l=!!c[1](c[4])),l?V:U}let v=n(i,-1),f=v(i);return{c(){e=m("li"),t=m("a"),f.c(),r=y(),h=k(o),u=y(),this.h()},l(c){e=P(c,"LI",{class:!0});var g=b(e);t=P(g,"A",{href:!0,"aria-current":!0,class:!0});var w=b(t);f.l(w),r=C(w),h=A(w,o),w.forEach(p),u=C(g),g.forEach(p),this.h()},h(){_(t,"href",a="/blog/page/"+i[4]),_(t,"aria-current",s=i[1](i[4])),_(t,"class","svelte-6wwia"),_(e,"class","svelte-6wwia")},m(c,g){E(c,e,g),d(e,t),f.m(t,null),d(t,r),d(t,h),d(e,u)},p(c,g){v!==(v=n(c,g))&&(f.d(1),f=v(c),f&&(f.c(),f.m(t,r))),g&1&&o!==(o=c[4]+"")&&q(h,o),g&1&&a!==(a="/blog/page/"+c[4])&&_(t,"href",a),g&1&&s!==(s=c[1](c[4]))&&_(t,"aria-current",s)},d(c){c&&p(e),f.d()}}}function z(i){let e,t,l,r,o,h=Array.from({length:i[0]},N),a=[];for(let s=0;s<h.length;s+=1)a[s]=L(S(i,h,s));return{c(){e=m("nav"),t=m("h2"),l=k("Go to page:"),r=y(),o=m("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=P(s,"NAV",{role:!0,"aria-label":!0,class:!0});var u=b(e);t=P(u,"H2",{class:!0});var n=b(t);l=A(n,"Go to page:"),n.forEach(p),r=C(u),o=P(u,"UL",{class:!0});var v=b(o);for(let f=0;f<a.length;f+=1)a[f].l(v);v.forEach(p),u.forEach(p),this.h()},h(){_(t,"class","svelte-6wwia"),_(o,"class","svelte-6wwia"),_(e,"role","navigation"),_(e,"aria-label","Pagination navigation"),_(e,"class","pagination svelte-6wwia")},m(s,u){E(s,e,u),d(e,t),d(t,l),d(e,r),d(e,o);for(let n=0;n<a.length;n+=1)a[n].m(o,null)},p(s,[u]){if(u&3){h=Array.from({length:s[0]},N);let n;for(n=0;n<h.length;n+=1){const v=S(s,h,n);a[n]?a[n].p(v,u):(a[n]=L(v),a[n].c(),a[n].m(o,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=h.length}},i:G,o:G,d(s){s&&p(e),M(a,s)}}}const N=(i,e)=>e+1;function B(i,e,t){let{currentPage:l}=e,{totalPosts:r}=e,o;const h=a=>a==l;return i.$$set=a=>{"currentPage"in a&&t(2,l=a.currentPage),"totalPosts"in a&&t(3,r=a.totalPosts)},i.$$.update=()=>{i.$$.dirty&8&&t(0,o=Math.ceil(r/10))},[o,h,l,r]}class F extends H{constructor(e){super();I(this,e,B,z,j,{currentPage:2,totalPosts:3})}}export{F as P};