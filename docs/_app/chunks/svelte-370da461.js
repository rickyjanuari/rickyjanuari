import{S as o,i as l,s as u,e as k,c as i,a as r,d as p,b as g,g as h,I as t}from"./vendor-b62d7b9b.js";function d(e){let a,c=`<code class="language-svelte"><span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">posts </span><span class="token keyword">as</span> <span class="token language-javascript">post<span class="token punctuation">&#125;</span></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>link<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>title<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>excerpt<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`;return{c(){a=k("pre"),this.h()},l(s){a=i(s,"PRE",{class:!0});var n=r(a);n.forEach(p),this.h()},h(){g(a,"class","language-svelte")},m(s,n){h(s,a,n),a.innerHTML=c},p:t,i:t,o:t,d(s){s&&p(a)}}}class m extends o{constructor(a){super();l(this,a,null,d,u,{})}}export{m as default};