import{S as g,i as E,s as j,e as _,k,t as y,c as h,a as d,d as c,m as v,h as N,b as H,g as m,H as R,l as b,I as L,L as S}from"../../chunks/vendor-b62d7b9b.js";function w(i,n,a){const e=i.slice();return e[1]=n[a],e}function M(i){let n,a=i[1].content.rendered+"";return{c(){n=_("p")},l(e){n=h(e,"P",{});var t=d(n);t.forEach(c)},m(e,t){m(e,n,t),n.innerHTML=a},p(e,t){t&1&&a!==(a=e[1].content.rendered+"")&&(n.innerHTML=a)},d(e){e&&c(n)}}}function T(i){let n,a=i[1].title.rendered+"",e,t,s,r,u,o=i[1].content.rendered&&M(i);return{c(){n=_("h2"),e=k(),o&&o.c(),t=k(),s=_("a"),r=y("Readmore"),this.h()},l(l){n=h(l,"H2",{});var f=d(n);f.forEach(c),e=v(l),o&&o.l(l),t=v(l),s=h(l,"A",{href:!0});var p=d(s);r=N(p,"Readmore"),p.forEach(c),this.h()},h(){H(s,"href",u=`/ukm/${i[1].slug}`)},m(l,f){m(l,n,f),n.innerHTML=a,m(l,e,f),o&&o.m(l,f),m(l,t,f),m(l,s,f),R(s,r)},p(l,f){f&1&&a!==(a=l[1].title.rendered+"")&&(n.innerHTML=a),l[1].content.rendered?o?o.p(l,f):(o=M(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),f&1&&u!==(u=`/ukm/${l[1].slug}`)&&H(s,"href",u)},d(l){l&&c(n),l&&c(e),o&&o.d(l),l&&c(t),l&&c(s)}}}function $(i){let n,a=i[0],e=[];for(let t=0;t<a.length;t+=1)e[t]=T(w(i,a,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=b()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);n=b()},m(t,s){for(let r=0;r<e.length;r+=1)e[r].m(t,s);m(t,n,s)},p(t,[s]){if(s&1){a=t[0];let r;for(r=0;r<a.length;r+=1){const u=w(t,a,r);e[r]?e[r].p(u,s):(e[r]=T(u),e[r].c(),e[r].m(n.parentNode,n))}for(;r<e.length;r+=1)e[r].d(1);e.length=a.length}},i:L,o:L,d(t){S(e,t),t&&c(n)}}}const C=async({fetch:i})=>({props:{ukms:await(await i("/api/ukm/ukm.json")).json()}});function q(i,n,a){let{ukms:e}=n;return i.$$set=t=>{"ukms"in t&&a(0,e=t.ukms)},[e]}class I extends g{constructor(n){super();E(this,n,q,$,j,{ukms:0})}}export{I as default,C as load};
