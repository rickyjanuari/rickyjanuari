import{S as c,i as l,s as u,e as i,c as r,a as k,d as e,b as m,g,I as t}from"./vendor-b62d7b9b.js";function f(p){let a,o=`<code class="language-vue"><span class="token comment">&lt;!-- CounterButton.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span>
  import &#123; ref &#125; from 'vue'

  const count = ref(0)

  const incrementCount = () => &#123;
    count.value++
  &#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementCount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Number of clicks: &#123;&#123; count &#125;&#125;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){a=i("pre"),this.h()},l(n){a=r(n,"PRE",{class:!0});var s=k(a);s.forEach(e),this.h()},h(){m(a,"class","language-vue")},m(n,s){g(n,a,s),a.innerHTML=o},p:t,i:t,o:t,d(n){n&&e(a)}}}class h extends c{constructor(a){super();l(this,a,null,f,u,{})}}export{h as default};
