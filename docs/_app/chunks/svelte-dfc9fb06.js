import{S as c,i as l,s as u,e as k,c as r,a as i,d as p,b as g,g as h,I as t}from"./vendor-b62d7b9b.js";function w(o){let s,e=`<code class="language-svelte"><span class="token comment">&lt;!-- ToggleButton.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> isTextShown <span class="token operator">=</span> <span class="token boolean">false</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">toggleIsTextShown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    isTextShown <span class="token operator">=</span> <span class="token operator">!</span>isTextShown
  <span class="token punctuation">&#125;</span>

  <span class="token literal-property property">$</span><span class="token operator">:</span> buttonText <span class="token operator">=</span> isTextShown <span class="token operator">?</span> <span class="token string">'Show less'</span> <span class="token operator">:</span> <span class="token string">'Show more'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  Svelte is a JavaScript framework.
  
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> isTextShown<span class="token punctuation">&#125;</span></span>
    Though actually, if you want to get technical...
  <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggleIsTextShown<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>buttonText<span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`;return{c(){s=k("pre"),this.h()},l(a){s=r(a,"PRE",{class:!0});var n=i(s);n.forEach(p),this.h()},h(){g(s,"class","language-svelte")},m(a,n){h(a,s,n),s.innerHTML=e},p:t,i:t,o:t,d(a){a&&p(s)}}}class d extends c{constructor(s){super();l(this,s,null,w,u,{})}}export{d as default};
