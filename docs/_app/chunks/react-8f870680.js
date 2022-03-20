import{S as c,i as u,s as l,e as k,c as i,a as r,d as p,b as d,g as m,I as t}from"./vendor-b62d7b9b.js";function f(o){let n,e=`<code class="language-jsx"><span class="token comment">// CounterButton.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">CounterButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleClick<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Number of clicks: </span><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){n=k("pre"),this.h()},l(s){n=i(s,"PRE",{class:!0});var a=r(n);a.forEach(p),this.h()},h(){d(n,"class","language-jsx")},m(s,a){m(s,n,a),n.innerHTML=e},p:t,i:t,o:t,d(s){s&&p(n)}}}class h extends c{constructor(n){super();u(this,n,null,f,l,{})}}export{h as default};
