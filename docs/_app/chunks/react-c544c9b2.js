import{S as c,i as l,s as u,e as k,c as i,a as r,d as p,b as g,g as h,I as t}from"./vendor-b62d7b9b.js";function d(o){let n,e=`<code class="language-jsx"><span class="token comment">// ToggleButton.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ToggleButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isTextShown<span class="token punctuation">,</span> setIsTextShown<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">setIsTextShown</span><span class="token punctuation">(</span><span class="token operator">!</span>isTextShown<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> buttonText <span class="token operator">=</span> isTextShown <span class="token operator">?</span> <span class="token string">'Show less'</span> <span class="token operator">:</span> <span class="token string">'Show more'</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        Svelte is a JavaScript framework.
        
        </span><span class="token punctuation">&#123;</span>isTextShown <span class="token operator">&amp;&amp;</span> 
          <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Though actually, if you want to get technical...</span><span class="token template-punctuation string">&#96;</span></span>
        <span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>handleClick<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">&#123;</span>buttonText<span class="token punctuation">&#125;</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){n=k("pre"),this.h()},l(s){n=i(s,"PRE",{class:!0});var a=r(n);a.forEach(p),this.h()},h(){g(n,"class","language-jsx")},m(s,a){h(s,n,a),n.innerHTML=e},p:t,i:t,o:t,d(s){s&&p(n)}}}class m extends c{constructor(n){super();l(this,n,null,d,u,{})}}export{m as default};
