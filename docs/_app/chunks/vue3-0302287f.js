import{S as c,i as l,s as u,e as i,c as k,a as r,d as p,b as g,g as m,I as t}from"./vendor-b62d7b9b.js";function h(e){let a,o=`<code class="language-vue"><span class="token comment">&lt;!-- ToggleButton.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span>
  import &#123; ref, computed &#125; from 'vue'

  const isTextShown = ref(0)

  const toggleIsTextShown = () => &#123;
    isTextShown.value = !isTextShown.value
  &#125;

  const buttonText = computed(() => (
    isTextShown.value ? 'Show less' : 'Show more'
  ))
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    Svelte is a JavaScript framework.
  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isTextShown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Though actually, if you want to get technical...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleIsTextShown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    &#123;&#123; buttonText &#125;&#125;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`;return{c(){a=i("pre"),this.h()},l(s){a=k(s,"PRE",{class:!0});var n=r(a);n.forEach(p),this.h()},h(){g(a,"class","language-vue")},m(s,n){m(s,a,n),a.innerHTML=o},p:t,i:t,o:t,d(s){s&&p(a)}}}class f extends c{constructor(a){super();l(this,a,null,h,u,{})}}export{f as default};
