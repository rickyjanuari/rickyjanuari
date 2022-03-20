import{S as c,i as o,s as u,e as i,c as k,a as r,d as p,b as g,g as m,I as t}from"./vendor-b62d7b9b.js";function d(e){let a,l=`<code class="language-vue"><span class="token comment">&lt;!-- PageHeading.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span>
  const props = defineProps(&#123;
    pageTitle: &#123;
      required: true
    &#125;,
    pageSubtitle: &#123;
      default: ''
    &#125;
  &#125;)
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>
    &#123;&#123; pageTitle &#125;&#125;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageSubtitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      &#123;&#123; pageSubtitle &#125;&#125;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){a=i("pre"),this.h()},l(s){a=k(s,"PRE",{class:!0});var n=r(a);n.forEach(p),this.h()},h(){g(a,"class","language-vue")},m(s,n){m(s,a,n),a.innerHTML=l},p:t,i:t,o:t,d(s){s&&p(a)}}}class f extends c{constructor(a){super();o(this,a,null,d,u,{})}}export{f as default};
