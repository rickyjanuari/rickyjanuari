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
  default: () => Add_blog_comments_static_site,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
const metadata = {
  "title": "Adding blog comments to your static site with utterances",
  "date": "2021-11-06",
  "updated": "2021-11-09",
  "categories": ["web", "javascript", "svelte"],
  "coverImage": "utterances.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "The web world is full of tradeoffs. Going from a CMS to a static site keeps things simple\u2014but that simplicity comes with costs. Luckily, giving up comments on your blog doesn't have to be one of them."
};
const Add_blog_comments_static_site = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>The web world is full of tradeoffs. As I wrote in my post about <a href="${"/blog/goodbye-wordpress"}">moving away from WordPress</a>, going from a CMS to a static site keeps things simple. That simplicity, however, comes with costs\u2014one of which is the ability to have comments on blog posts. </p>
<p>I had to throw away all the existing comments on my blog when I moved away from WordPress. (Not that there were a lot; most of them were from ages ago, and on my <a href="${"/blog/pantone"}">Pantone post</a>, which somehow retains considerable SEO juice.) Due to the nature of static sites generally not having a database or a server to process data, there are few good, simple ways to allow user comments.</p>
<p>There are plenty of options out there to solve this problem, of varying degrees of simplicity. But I\u2019ve recently settled on a nifty little GitHub-based library called <a href="${"https://utteranc.es"}" rel="${"nofollow"}">utterances</a>.</p>
<h2 id="${"what-is-utterances-and-what-does-it-do"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-utterances-and-what-does-it-do"}"><span class="${"icon icon-link"}"></span></a>What is utterances, and what does it do?</h2>
<p>Have you ever been on a website and found a Facebook-powered comments section, which allowed you to add your own comments to the content using your own Facebook login?</p>
<p>If so, you\u2019ve got the idea. Utterances is <em>that</em>, just with GitHub instead of Facebook.</p>
<p>The <a href="${"https://utteranc.es/"}" rel="${"nofollow"}">utterances documentation and demo</a> covers the topic pretty well. (In fact, it\u2019s more concise than this post.) But to summarize: utterances is a tiny script that runs on the page to display a comments form, along with any comments that have been made on the page already. Behind the scenes, this is all powered by GitHub\u2014and specifically, by GitHub issues.</p>
<p>When a user creates a new comment (which, it should be noted, they must be logged into GitHub to do), if there are no comments yet, utterances will create a new GitHub issue for the current page, and the user\u2019s comment becomes the first comment on that issue. Any new comments will appear as further comments on the same issue\u2014so that you (eventually/ideally) have one \u201Cissue\u201D per route.</p>
<p>Whenever your page loads, utterance will go fetch the issue matching the current route, and plop all the comments from that issue onto the page, in sequential order.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Utterances adds GitHub-powered comments to your site, simply and easily.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Utterances adds GitHub-powered comments to your site, simply and easily.
`;
    }
  })}
<p>You don\u2019t really need to know anything about GitHub issues, or even that GitHub issues is the engine under the hood. (After all, these comments aren\u2019t really issues at all; they\u2019re just a convenient way to store data associated with your repo and in the same place as your code.)</p>
<p>All you need to know is: utterances adds GitHub-powered comments to your site, simply and easily.</p>
<h2 id="${"how-to-set-up-utterances"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-to-set-up-utterances"}"><span class="${"icon icon-link"}"></span></a>How to set up utterances</h2>
<p>Again, the <a href="${"https://utteranc.es/"}" rel="${"nofollow"}">utterances site</a> covers this nicely, so I\u2019ll just hit the high notes here:</p>
<ol><li><p><strong>Make sure your site\u2019s GitHub repo is public, not private.</strong> If your issues aren\u2019t public (whose aren\u2019t? haha), they can\u2019t be pulled onto the page by utterances.</p></li>
<li><p><strong>Be sure to <a href="${"https://github.com/apps/utterances"}" rel="${"nofollow"}">enable the utterances app</a> in GitHub</strong>. This is the part that gives utterances permission to create new issues. You have the choice of whether to enable it for <em>all</em> of your repos, or to pick and choose.</p>
<p>Note that you may also need to be sure that issues are enabled in the repo\u2019s settings, particularly if the repo in question is a fork of another one. That option can be found on the first page in the repo\u2019s \u201CSettings\u201D tab, near the top.</p></li>
<li><p><strong>Finally, add the utterances script snippet to your site</strong>. We\u2019ll dig into this a bit more next, since\u2014while not too complex\u2014it\u2019s the area that gave me the most trouble.</p></li></ol>
<h3 id="${"adding-utterances-to-the-page"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-utterances-to-the-page"}"><span class="${"icon icon-link"}"></span></a>Adding utterances to the page</h3>
<p>The last step of the process is to add a small script (which, you may be happy to know, includes no tracking) wherever your comments form should appear. That script will look a little something like this:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://utteranc.es/client.js<span class="token punctuation">"</span></span>
  <span class="token attr-name">repo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github-name/repo-name<span class="token punctuation">"</span></span>
  <span class="token attr-name">issue-term</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pathname<span class="token punctuation">"</span></span>
  <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github-light<span class="token punctuation">"</span></span>
  <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span>
  <span class="token attr-name">async</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Some of those attributes are familiar, standard HTML attributes; others are specialized and used only by utterances when it loads. The <code>theme</code> option controls the appearance of the form (there are several options), and the <code>issue-term</code> controls how any new issues will be named in your repo (there are also several options here, though I\u2019ve described the default).</p>
<p>There are other custom attributes available, too, such as a <code>label</code> attribute to auto-add an existing label to utterances-created issues. (This is helpful as a sorting mechanism, so that you can distinguish \u201Creal\u201D issues from comments issues.) Once more, be sure to have a look at the <a href="${"https://utteranc.es"}" rel="${"nofollow"}">utterances site</a> for full details.</p>
<p>But in any case, the idea is: you\u2019ll state your preferred options inline as part of a script tag, and then drop that script into the HTML wherever you want your comments to appear. When the script loads, it\u2019ll parse your preferences from the HTML and make the magic happen.</p>
<p>This is simple enough when actually working with straight HTML, but it poses a small challenge in SvelteKit (and likely in some other frameworks, too), where <code>&lt;script&gt;</code> tags have special meaning. Most frameworks have rules about where you can just sling <code>script</code> tags. In fact, the Svelte compiler will yell at you for it.</p>
<p>The workaround is a <em>little</em> verbose, but simple enough; the more Svelte-y way of handling it (and in fact, utterances itself) was brought to my attention via this tweet from <a href="${"https://twitter.com/sarah11918"}" rel="${"nofollow"}">@sarah11918</a>:</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">Spent my morning with <a href="${"https://twitter.com/rickyjanuari?ref_src=twsrc%5Etfw"}">@rickyjanuari</a> &#39;s <a href="${"https://t.co/DEaQ4JJ79m"}">https://t.co/DEaQ4JJ79m</a> and WHAT a treat! (Appreciated React comps approach.)<br><br>It&#39;s the perfect pairing for trying out <a href="${"https://twitter.com/james_r_perkins?ref_src=twsrc%5Etfw"}">@james_r_perkins</a> &#39;s instructions for adding comments to an <a href="${"https://twitter.com/astrodotbuild?ref_src=twsrc%5Etfw"}">@astrodotbuild</a> blog using <a href="${"https://twitter.com/sveltejs?ref_src=twsrc%5Etfw"}">@sveltejs</a>! <a href="${"https://t.co/xOn3GgUXwR"}">https://t.co/xOn3GgUXwR</a></p>\u2014 Sarah Rainsberger (@sarah11918) <a href="${"https://twitter.com/sarah11918/status/1456636003968561154?ref_src=twsrc%5Etfw"}">November 5, 2021</a></blockquote>
<p>(Fun how a tweet about a post comes full circle and becomes a new post, eh?)</p>
<p>Credit to James Perkins for <a href="${"https://www.jamesperkins.dev/post/supercharge-your-astro-blog"}" rel="${"nofollow"}">that approach from his blog</a>, in which he uses the <code>onMount</code> hook to create a script, set its properties, and inject it just before a target <code>&lt;div&gt;</code>, all inside of a Svelte <code>&lt;Comments /&gt;</code> component. This allows the Svelte component itself to be placed anywhere you\u2019d like the comments form to show up.</p>
<p>I followed the spirit of his example closely, but changed it in a few ways. Here\u2019s my finished comments component (slightly simplified to remove some code irrelevant to this post):</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- Comments.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> prefersDarkMode <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/data/store'</span>

  <span class="token comment">// Translate the user's dark mode preference to a theme</span>
  <span class="token keyword">const</span> siteTheme <span class="token operator">=</span> $prefersDarkMode <span class="token operator">?</span> <span class="token string">'github-dark'</span> <span class="token operator">:</span> <span class="token string">'github-light'</span>

  <span class="token comment">// An object with all the utterances options I want</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">'https://utteranc.es/client.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'rickyjanuari/joco-sveltekit'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'comments'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">'anonymous'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> siteTheme<span class="token punctuation">,</span>
    <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token string-property property">'issue-term'</span><span class="token operator">:</span> <span class="token string">'pathname'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> utteranceScript <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> targetTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'utterances-comments'</span><span class="token punctuation">)</span>
  
    <span class="token comment">// Loop over the options &amp; apply each property as an attribute</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> prop <span class="token keyword">in</span> options<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      utteranceScript<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>prop<span class="token punctuation">,</span> options<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

    targetTag<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>utteranceScript<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utterances-comments<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The main differences are:</p>
<ul><li><p>I prefer to abstract the script attributes to an <code>options</code> object (and also, prefer descriptive variable names). While this makes the code longer, I feel it also makes it more readable (or at least, less repetitive);</p></li>
<li><p>Since my site has two themes, I dynamically set the GitHub theme based on the user\u2019s site-level preference. (This site <em>does</em> detect and respect the user\u2019s dark mode preference by default, but <em>also</em> allows them to override it, just in case they like the opposite version here. So OS preference may or may not be site preference); and</p></li>
<li><p>Finally, I put the script itself <em>inside</em> the target <code>div</code>, rather than before it. This is mostly just to avoid having an empty div lying around, but it could also potentially help with styling. (The comments form itself is in an <code>iframe</code>, so you can\u2019t style it directly regardless, but at least this way you can have control over the wrapping <code>div</code>.)</p></li></ul>
<p>To restate/emphasize, since I\u2019m talking about somebody else\u2019s code here: this is all just personal preference. Both versions have advantages, and either is perfectly fine.</p>
<h2 id="${"pros-and-cons"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#pros-and-cons"}"><span class="${"icon icon-link"}"></span></a>Pros and cons</h2>
<p>I found utterances to be a good fit for me and my site personally, but there are reasons you may or may not come to the same conclusion.</p>
<h3 id="${"utterances-benefits"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#utterances-benefits"}"><span class="${"icon icon-link"}"></span></a>Utterances benefits</h3>
<p>I\u2019ve already mentioned how simple utterances is, and how easy it is to set up. Beyond that, utterances is also free, open-source, and ad-free\u2014all of which are great.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Utterances is a perfect fit for static sites, because it doesn&#39;t require a rebuild to display new content.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Utterances is a perfect fit for static sites, because it doesn&#39;t require a rebuild to display new content.
`;
    }
  })}
<p>Also, because it uses GitHub as the comments engine under the hood, you can do all the same things you can with GitHub comments, like use Markdown; preview your comment before posting; and add reactions to other people\u2019s comments.</p>
<p>Finally: utterances is a perfect fit for static sites, because it doesn\u2019t require a rebuild to display new content; adding and retrieving comments is all handled client-side.</p>
<h3 id="${"utterances-tradeoffs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#utterances-tradeoffs"}"><span class="${"icon icon-link"}"></span></a>Utterances tradeoffs</h3>
<p>It\u2019s hard to complain about such a simple and effective solution, but as with all things, this approach comes with tradeoffs.</p>
<p>Most obviously, there <em>is</em> some vendor lock-in. I don\u2019t mind this too much personally, but if you feel this might not be your ideal long-term comments solution, it\u2019s something to keep in mind.</p>
<p>Another item worth mentioning: since this is all powered by GitHub comments under the hood, a user needs a GitHub login in order to comment. I decided that\u2019s fine in my case, since this blog is increasingly development-focused, but your needs and audience may vary. This probably wouldn\u2019t be a good approach for a non-technical audience.</p>
<p>Also, there\u2019s no commenting on other comments or threading comments, at least not for now\u2014though as mentioned before, there are at least reaction emoji available. But again, this <em>is</em> open-source, so it\u2019s possible we could see that change.</p>
<p>Finally, I suppose you could consider it a drawback that your comments management moves to GitHub. Personally, I like that my comments are now hosted in the same place as the code itself, but I can see where going into GitHub to manage content could be undesirable in some cases. At the very least, it means you have less control over approving and moderating comments that you might with, say, WordPress. (That said, however: GitHub almost certainly has much better control over spam issues and comments than I\u2019d ever be able to devise.) Also, while I haven\u2019t spent much time looking, I\u2019d bet there are VS Code extensions to help you manage issues right in your editor.</p>
<h2 id="${"conclusion"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conclusion"}"><span class="${"icon icon-link"}"></span></a>Conclusion</h2>
<p>As you\u2019ve seen, I\u2019ll be using utterances on this site for at least the time being. I like the idea of having comments here rather than trying to direct users to a contact form. If you also like the idea or found this post useful, consider trying it out yourself. (Or, you know\u2026leave a comment.) \u{1F609}</p>`;
});
