import{S as L,i as T,s as b,e as m,c as d,a1 as _,b as p,g as u,d as o,k as h,a as v,m as H,I as M}from"../../chunks/vendor-b62d7b9b.js";function g(l){let e,a;return{c(){e=m("img"),this.h()},l(s){e=d(s,"IMG",{src:!0,alt:!0}),this.h()},h(){_(e.src,a=l[0].image)||p(e,"src",a),p(e,"alt","")},m(s,i){u(s,e,i)},p(s,i){i&1&&!_(e.src,a=s[0].image)&&p(e,"src",a)},d(s){s&&o(e)}}}function k(l){let e,a=l[0].title.rendered+"",s,i,c,f=l[0].content.rendered+"",t=l[0].image&&g(l);return{c(){e=m("h1"),s=h(),t&&t.c(),i=h(),c=m("p")},l(r){e=d(r,"H1",{});var n=v(e);n.forEach(o),s=H(r),t&&t.l(r),i=H(r),c=d(r,"P",{});var w=v(c);w.forEach(o)},m(r,n){u(r,e,n),e.innerHTML=a,u(r,s,n),t&&t.m(r,n),u(r,i,n),u(r,c,n),c.innerHTML=f},p(r,[n]){n&1&&a!==(a=r[0].title.rendered+"")&&(e.innerHTML=a),r[0].image?t?t.p(r,n):(t=g(r),t.c(),t.m(i.parentNode,i)):t&&(t.d(1),t=null),n&1&&f!==(f=r[0].content.rendered+"")&&(c.innerHTML=f)},i:M,o:M,d(r){r&&o(e),r&&o(s),t&&t.d(r),r&&o(i),r&&o(c)}}}const E=async({params:l,fetch:e})=>{const a=l.slug;return{props:{product:await(await e(`/api/products/${a}.json`)).json()}}};function j(l,e,a){let{product:s}=e;return l.$$set=i=>{"product"in i&&a(0,s=i.product)},[s]}class I extends L{constructor(e){super();T(this,e,j,k,b,{product:0})}}export{I as default,E as load};