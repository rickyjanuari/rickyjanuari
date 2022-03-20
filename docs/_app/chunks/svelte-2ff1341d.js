import{S as c,i as l,s as u,e as k,c as i,a as r,d as p,b as m,g,I as t}from"./vendor-b62d7b9b.js";function v(e){let a,o=`<code class="language-svelte"><span class="token comment">&lt;!-- VolumeControl.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> volume <span class="token operator">=</span> <span class="token number">0</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>volume-control<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Volume: <span class="token language-javascript"><span class="token punctuation">&#123;</span>volume<span class="token punctuation">&#125;</span></span>%
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>volume-control<span class="token punctuation">"</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span>
  <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>volume<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span></code>`;return{c(){a=k("pre"),this.h()},l(n){a=i(n,"PRE",{class:!0});var s=r(a);s.forEach(p),this.h()},h(){m(a,"class","language-svelte")},m(n,s){g(n,a,s),a.innerHTML=o},p:t,i:t,o:t,d(n){n&&p(a)}}}class h extends c{constructor(a){super();l(this,a,null,v,u,{})}}export{h as default};
