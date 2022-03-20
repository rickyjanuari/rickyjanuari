import{S as c,i as l,s as u,e as r,c as i,a as k,d as p,b as g,g as m,I as t}from"./vendor-b62d7b9b.js";function d(e){let n,o=`<code class="language-svelte"><span class="token comment">&lt;!-- CounterButton.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

	<span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		count<span class="token operator">++</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>incrementCount<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  Number of clicks: <span class="token language-javascript"><span class="token punctuation">&#123;</span>count<span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`;return{c(){n=r("pre"),this.h()},l(s){n=i(s,"PRE",{class:!0});var a=k(n);a.forEach(p),this.h()},h(){g(n,"class","language-svelte")},m(s,a){m(s,n,a),n.innerHTML=o},p:t,i:t,o:t,d(s){s&&p(n)}}}class f extends c{constructor(n){super();l(this,n,null,d,u,{})}}export{f as default};
