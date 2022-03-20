import{S as c,i as l,s as u,e as i,c as k,a as g,d as p,b as r,g as h,I as t}from"./vendor-b62d7b9b.js";function m(e){let a,o=`<code class="language-vue"><span class="token comment">&lt;!-- ToggleButton.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>
  export default &#123;
    data: () => (&#123;
      isTextShown: false
    &#125;),

    methods: &#123;
      toggleIsTextShown() &#123;
        this.isTextShown = !this.isTextShown
      &#125;
    &#125;,

    computed: &#123;
      buttonText() &#123;
        return this.isTextShown ? 'Show less' : 'Show more'
      &#125;
    &#125;
  &#125;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
      Svelte is a JavaScript framework.
    
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isTextShown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Though actually, if you want to get technical...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleIsTextShown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      &#123;&#123; buttonText &#125;&#125;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){a=i("pre"),this.h()},l(s){a=k(s,"PRE",{class:!0});var n=g(a);n.forEach(p),this.h()},h(){r(a,"class","language-vue")},m(s,n){h(s,a,n),a.innerHTML=o},p:t,i:t,o:t,d(s){s&&p(a)}}}class v extends c{constructor(a){super();l(this,a,null,m,u,{})}}export{v as default};
