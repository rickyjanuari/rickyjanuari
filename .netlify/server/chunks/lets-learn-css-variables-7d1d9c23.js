var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Lets_learn_css_variables,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
const metadata = {
  "title": "Let's Learn CSS Variables!",
  "date": "2018-02-25",
  "updated": "2020-05-19",
  "categories": ["css"],
  "coverImage": "css-variables-1.png",
  "coverWidth": 1096,
  "coverHeight": 734,
  "excerpt": "CSS variables (otherwise known as CSS custom properties) give previously impossible superpowers to CSS developers. This post covers what they are, how they work, and a couple of nifty ways you can implement them on your own website."
};
const Lets_learn_css_variables = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>The usefulness of CSS variables should be fairly apparent if you\u2019ve managed any sizable stylesheet before. If you have, you probably already know how untidy it can be at large scale. In fact, that\u2019s one of the biggest knocks against CSS; it\u2019s very easy for a stylesheet to balloon, making updates difficult as you\u2019re forced to search through hundreds (or thousands) of lines of code to make changes.</p>
<p>Fortunately for us, browsers are always adapting newer and better ways of doing things, and so we get an awesome, fairly new feature called <strong>CSS variables</strong>!</p>
<p>(Pedantic side note: technically, these are called \u201Ccustom properties.\u201D But that\u2019s boring, not as clear, and honestly a less common name than CSS variables. So I\u2019m gonna stick with the latter.)</p>
<h2 id="${"the-old-way"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-old-way"}"><span class="${"icon icon-link"}"></span></a>The Old Way</h2>
<p>To demonstrate what CSS variables are good for, let\u2019s take a common example: you\u2019re managing a robust stylesheet for a client, and their brand color is used all over the place. It\u2019s in buttons, borders, backgrounds, text colors, and all kinds of other places, something like this:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ffd100<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">button</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffd100<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">input</span> <span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #ffd100<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And so on and so on. Eventually, though, your client decides that this is not the proper color, or rebrands, or for whatever other reason, this color needs to change and be updated <em>everywhere</em> it exists on the website.</p>
<p>That\u2019s obviously a huge pain, because you\u2019ve got to do a large-scale find-and-replace now. With some text editor know-how, it\u2019s not too big a deal, but things can be missed or even changed when they weren\u2019t supposed to be if you\u2019re not careful, especially when dealing with multiple stylesheets (or, <em>*shudder*</em>, CSS <em>outside</em> of stylesheets).</p>
<p>Fortunately for us, this is the black-and-white part of the infomercial where the poor, hapless CSS author says \u201Cthere\u2019s got to be a better way,\u201D and the announcer cheerfully replies, \u201Cwell, now there is!\u201D as the world bursts into color. Enter CSS variables!</p>
<h2 id="${"css-variable-basics"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#css-variable-basics"}"><span class="${"icon icon-link"}"></span></a>CSS Variable Basics</h2>
<p>Rather than using the same value over and over again (making it tough to manage and update your stylesheet), a CSS variable allows you to simply set a <em>name</em> for any given value. Then, whenever you want to use that value (in this case, our specific color), you put the <em>name</em> in your stylesheet, rather than the actual hex code. The name is essentially an alias or placeholder for the color; a reference back to the original setting.</p>
<p>Then, if you ever want to change the value, you only need to update it in one location; everywhere else updates automatically!</p>
<p>But instead of talking about it, let me show you how you might use it:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--brand-yellow</span><span class="token punctuation">:</span> #ffd100<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--brand-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">button</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--brand-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">input:focus</span> <span class="token punctuation">&#123;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid <span class="token function">var</span><span class="token punctuation">(</span>--brand-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><img src="${"/images/post_images/changing-css-var-color.gif"}" alt="${"Showing CSS properties changing as CSS variables are altered"}"></p>
<p><strong>Whoa!</strong> That might look like a lot of new syntax, depending on your current familiarity with CSS. And some of it <em>is</em> brand new, so let\u2019s break it down piece by piece, starting at the top.</p>
<h2 id="${"putting-together-the-pieces-of-css-variable-syntax"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#putting-together-the-pieces-of-css-variable-syntax"}"><span class="${"icon icon-link"}"></span></a>Putting Together the Pieces of CSS Variable Syntax</h2>
<h3 id="${"what-is-root"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-root"}"><span class="${"icon icon-link"}"></span></a>What is <code>:root</code>?</h3>
<p>You might not have used the <code>:root</code> CSS pseudo-class before, but it refers to the topmost element in the HTML document. In a webpage, this will always be the <code>&lt;html&gt;</code> element, and in fact, the <code>:root</code> selector is pretty much the exact same as the <code>html</code> selector. (The only difference, for those curious, is that <code>:root</code> is slightly more specific. So if you used both selectors, the styles applied to <code>:root</code> would take precedence.)</p>
<p>That explains <em>what</em> <code>:root</code> is, but not <em>why</em>. Why are we putting variables in a rule targeting the <code>:root</code>? Turns out, there\u2019s a very good reason for this, and it is: the cascade.</p>
<p>Remember, in CSS, everything trickles down the cascade, and elements inherit properties from their parent and ancestor elements. So the reason we define CSS variables inside the :root selector is that we want them to cascade down, and be \u201Cknown\u201D to every other element in the document to use as needed.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Remember, in CSS, everything trickles down the cascade, and elements inherit properties from their parent and ancestor elements. So the reason we define CSS variables inside the :root selector is that we want them to cascade down, and be \u201Cknown\u201D to every other element in the document to use as\xA0needed.
`;
    }
  })}
<p>In other words: applying a style to the <code>:root</code> means it gets \u201Cpassed down\u201D to every other element in the document. This wouldn\u2019t be the case if we applied CSS variables to, say, a random <code>&lt;div&gt;</code>. Elements <em>inside</em> that <code>&lt;div&gt;</code> would know about the variables and could use them, but no elements outside would. So it makes the most sense to apply CSS variables to the <code>:root</code> pseudo-class, since <em>everything</em> is inside of the root tag, which is <code>&lt;html&gt;</code>.</p>
<h3 id="${"what-does---brand-yellow-mean"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-does---brand-yellow-mean"}"><span class="${"icon icon-link"}"></span></a>What does <code>--brand-yellow</code> mean?</h3>
<p>In the example above, I\u2019ve named my CSS variable \u201Cbrand-yellow,\u201D but there\u2019s nothing special about those words. You can actually name your CSS variables anything you want to! (I\u2019d recommend something intuitive, though, so that when you or anybody else comes across the variable in a CSS file, its name will confer its value and purpose. Variable names like <code>--myVariable</code> or <code>--x</code> aren\u2019t very helpful or descriptive.)</p>
<p>The only special part is the double dashes (<code>--</code>) <em>before</em> the variable name. Browsers have decided that these dashes are how we must name our variables, to indicate that they are different than normal CSS properties.</p>
<p>So you could name your variable something like <code>--myYellow</code> or <code>--brand-orange</code> or <code>--em</code> or anything you want!</p>
<p><strong>And by the way: variables can be anything, not just colors!</strong></p>
<p>If you have a particular unit of measurement you\u2019re using over and over again\u2014say, for example, <code>16px</code>\u2014you could set a CSS variable for it, and use it anywhere you need!</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--unit</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">header</span> <span class="token punctuation">&#123;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And so on. <strong>Anything that can be a CSS value can be a CSS variable!</strong> So if you\u2019re repeating it often, it may be worth setting a variable for it. That way, if you decide to change all of those instances\u2014if <code>16px</code> needed to change to <code>18px</code>, for example\u2014you only need to make the change in one place!</p>
<h3 id="${"whats-with-var"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#whats-with-var"}"><span class="${"icon icon-link"}"></span></a>What\u2019s with <code>var()</code>?</h3>
<p>Those of you who have worked in pretty much any common programming language will recognize that <code>var()</code> is a function. (And for those of you who <em>aren\u2019t</em> familiar with functions, don\u2019t worry: this one\u2019s very easy to use.)</p>
<p>As you probably guessed, \u201Cvar\u201D is short for \u201Cvariable,\u201D and the <code>var()</code> function is how you actually <em>use</em> those values you set up in the <code>:root</code> element. Just insert the <code>var()</code> function, and put the name of whichever variable you\u2019d like to use inside the parentheses. Easy as that!</p>
<p>Once more, let\u2019s have a look at the whole thing put all together in a new example:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--base-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">p</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">header</span> <span class="token punctuation">&#123;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In the above example, we\u2019ve got a <code>--base-size</code> variable set to 18px, and our <code>&lt;p&gt;</code> elements will use it as both their font-size and their bottom margin. Plus, it will be the padding measure used by our <code>&lt;header&gt;</code> element. And if we ever decide that\u2019s too much or too little, all we need to do is update the value of the variable where it\u2019s declared in the <code>:root</code>, and all changes will be made together quickly and neatly!</p>
<h2 id="${"a-couple-of-fancy-css-variable-tricks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#a-couple-of-fancy-css-variable-tricks"}"><span class="${"icon icon-link"}"></span></a>A Couple of Fancy CSS Variable Tricks</h2>
<h3 id="${"using-css-variables-with-calc"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-css-variables-with-calc"}"><span class="${"icon icon-link"}"></span></a>Using CSS Variables with <code>calc()</code></h3>
<p>You might be familiar with another of CSS\u2019s (few) functions, <code>calc()</code>. The <code>calc()</code> function (short, fairly obviously, for \u201Ccalculation\u201D) allows you to have CSS do math that would otherwise be impossible in the language. Here\u2019s a basic example of <code>calc()</code> in action:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 32px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That bit of CSS sets elements with the <code>.container</code> class to be 100% wide, but then <em>subtracts</em> 32px from whatever that total may be (probably to account for 16 pixels of padding or margin on each side of the element).</p>
<p>Mixing units of measurement like this\u2014units such as <code>%</code> and <code>px</code> (or even <code>vw</code> or <code>vh</code>)\u2014is one of the things <code>calc()</code> is really useful for.</p>
<p><strong>But what does this have to do with CSS variables?</strong> Get excited: we can do a little CSS function inception to <em>use</em> CSS variables <em>inside</em> of a <code>calc()</code> function!</p>
<p>Feast your eyes on this example CSS:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--base-unit</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-unit<span class="token punctuation">)</span> * 1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-unit<span class="token punctuation">)</span> * 1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>   
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-unit<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Nifty, huh?</strong> By using <code>calc( var(--base-unit) * 1.2)</code>, we\u2019ve had CSS take our <code>--base-unit</code> variable (which, remember, is <code>16px</code>) and multiply it by 1.2\u2014resulting in a font-size of roughly 19px. The padding is 1.5 times our <code>--base-unit</code> variable, resulting in a value of 24px, and the bottom margin is the variable <em>divided</em> by two, thus, 8px.</p>
<p>Another example I really like: resizing CSS grid columns individually. Ordinarily, to redefine one column in your grid, you\u2019d need to rewrite the whole rule, but with CSS variables, you can reach in and adjust at will without touching what you don\u2019t need to:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/* Set the default styling for the .grid class */</span>
<span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--left-column</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--left-column<span class="token punctuation">)</span><span class="token punctuation">,</span> 32rem<span class="token punctuation">,</span> 1fr<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token comment">/* Make the left column wider at certain breakpoints,
   without touching the rest of the grid. /*/</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--left-column</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--left-column</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Are you excited? I\u2019m excited.</p>
<h3 id="${"redefining-css-variables-with-media-queries"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#redefining-css-variables-with-media-queries"}"><span class="${"icon icon-link"}"></span></a>Redefining CSS Variables with Media Queries</h3>
<p>Let\u2019s keep using the example above; 16px might be a suitable unit of measurement for <em>some</em> screens, but we might want it to grow or shrink depending on the screen size. Easy! Just use a media query:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--base-unit</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span><span class="token punctuation">&#123;</span>
  <span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--base-unit</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
    <span class="token property">--base-unit</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><img src="${"/images/post_images/css-variables-media-queries-3.gif"}" alt="${" "}"></p>
<p>You can\u2019t tell me that\u2019s not cool (and <em>much</em> easier than updating each of those values individually at every breakpoint)!</p>
<h2 id="${"browser-support"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#browser-support"}"><span class="${"icon icon-link"}"></span></a>Browser Support</h2>
<p>As with any new feature, browser support is key. Fortunately, as of this writing, there\u2019s very little to be wary about as far as using CSS variables right away; the only major browser without support is Internet Explorer 11 (and lower):</p>
<p><img src="${"/images/post_images/caniuse-css-vars-1-1.png"}" alt="${"CanIUse.com screenshot showing global support for custom CSS properties (CSS variables) at around 90%"}"></p>
<p>Global support is near 90%, with IE11 and Opera Mini (which seems to have many gaps in support) making up the vast majority of the remaining 10%.</p>
<p>But this post will age, so you can check <a href="${"http://caniuse.com"}" rel="${"nofollow"}">caniuse.com</a> for up-to-date stats on <a href="${"https://caniuse.com/#search=css%20variables"}" rel="${"nofollow"}">browser support for custom properties (CSS variables)</a>.</p>
<p>Right now, I personally wouldn\u2019t hesitate to use CSS variables in production; that\u2019s hefty support. But it will depend on your site\u2019s users. If some are likely to be on IE11, I\u2019d definitely recommend using fallback values for custom properties, like so:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #53565a<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--brand-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>But regardless, I hope you\u2019ve enjoyed, and have fun with using CSS variables in your next project!</p>`;
});
