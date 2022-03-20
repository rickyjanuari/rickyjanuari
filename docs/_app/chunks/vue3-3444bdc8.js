import{S as l,i as c,s as u,e as k,c as i,a as r,d as p,b as m,g,I as t}from"./vendor-b62d7b9b.js";function v(e){let a,o=`<code class="language-vue"><span class="token comment">&lt;!-- VolumeControl.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span>
  import &#123; ref &#125; from 'vue'

  const volume = ref(0)
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>volume-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Volume: &#123;&#123; volume &#125;&#125;%
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>volume-control<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span>
    <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
    <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>volume<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){a=k("pre"),this.h()},l(n){a=i(n,"PRE",{class:!0});var s=r(a);s.forEach(p),this.h()},h(){m(a,"class","language-vue")},m(n,s){g(n,a,s),a.innerHTML=o},p:t,i:t,o:t,d(n){n&&p(a)}}}class f extends l{constructor(a){super();c(this,a,null,v,u,{})}}export{f as default};
