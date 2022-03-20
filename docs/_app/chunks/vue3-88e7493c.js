import{S as c,i as l,s as u,e as k,c as i,a as r,d as p,b as g,g as m,I as t}from"./vendor-b62d7b9b.js";function d(e){let n,o=`<code class="language-vue"><span class="token comment">&lt;!-- CounterButton.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementCount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Number of clicks: &#123;&#123; count &#125;&#125;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){n=k("pre"),this.h()},l(s){n=i(s,"PRE",{class:!0});var a=r(n);a.forEach(p),this.h()},h(){g(n,"class","language-vue")},m(s,a){m(s,n,a),n.innerHTML=o},p:t,i:t,o:t,d(s){s&&p(n)}}}class v extends c{constructor(n){super();l(this,n,null,d,u,{})}}export{v as default};
