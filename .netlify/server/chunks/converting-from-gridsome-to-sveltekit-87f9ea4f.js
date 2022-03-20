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
  default: () => Converting_from_gridsome_to_sveltekit,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "Converting from Gridsome to SvelteKit",
  "date": "2021-10-04",
  "updated": "2021-10-14",
  "categories": ["javascript", "svelte", "web"],
  "coverImage": "gridsome-to-sveltekit.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "I've been a fan of Svelte for years, but never had the opportunity to use it on a serious project before. So when I found myself looking for a new platform for this site as SvelteKit entered open beta, it seemed like perfect timing."
};
const Converting_from_gridsome_to_sveltekit = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I\u2019ll assume for the sake of this post that you\u2019re at least a little familiar with what Svelte is. If not, I\u2019ve written an <a href="${"/blog/introducing-svelte-comparing-with-react-vue"}">introduction to Svelte</a> that you might enjoy reading first before diving in here.</p>
<p>Otherwise: let\u2019s dive into what <a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a> is, how it works, why I made the choice to switch (other than the obvious fact that I just can\u2019t resist rebuilding my site about once a year), how it\u2019s paid off, and whether I\u2019d make the same decisions again.</p>
<h2 id="${"what-is-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-sveltekit"}"><span class="${"icon icon-link"}"></span></a>What is SvelteKit?</h2>
<p>If you\u2019re familiar with <a href="${"https://nextjs.org/"}" rel="${"nofollow"}">Next</a> or <a href="${"https://nuxtjs.org/"}" rel="${"nofollow"}">Nuxt</a>, it would be fair to think of SvelteKit as the Svelte equivalent.</p>
<p>If not: all three are \u201Cmeta-frameworks,\u201D sometimes also called app frameworks. You could think of meta-frameworks as a large set of add-ons for frontend UI frameworks like React, Vue, and Svelte (in the cases of Next, Nuxt, and SvelteKit, respectively). </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `If a frontend framework is a toolbox, a meta-framework is a complete workshop.
`;
    }
  })}
<p><strong>Why?</strong> Frontend UI frameworks are ideal for\u2026well, frontend UIs. They\u2019re built to handle pieces of an interactive user interface. By nature, being JavaScript-based, they\u2019re limited to the capabilities of the browser page they\u2019re loaded on. (Because of this, sites built just with a frontend framework are sometimes called \u201Csingle-page applications,\u201D or SPAs.)</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `If a frontend framework is a toolbox, a meta-framework is a complete workshop.
`;
    }
  })}
<p>A meta-framework is an enhanced toolset for building full-fledged sites and apps with a specific frontend framework (hence the \u201Cmeta\u201D part of the name; a framework for a framework).</p>
<p>Most meta-frameworks come with all your build tools and routing pre-configured. They also generally include data stores; layouts; image optimization; better SEO and full-page control; data fetching; and/or plugins\u2014usually just about everything except a database to help you build anything you might want.</p>
<h3 id="${"going-static"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#going-static"}"><span class="${"icon icon-link"}"></span></a>Going static</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `This site uses SvelteKit&#39;s static adapter, which means the pages and components are pre-rendered as plain ol&#39; HTML\xA0files.
`;
    }
  })}
<p>Next, Nuxt, and SvelteKit are <em>all</em> capable of building your finished project as a server-side rendered app, as a static site, or as some combination of both.</p>
<p>SvelteKit is even <em>more</em> adaptable than that, thanks to its aptly named <a href="${"https://kit.svelte.dev/docs#adapters"}" rel="${"nofollow"}">adapters</a>, which process your code differently for whatever type of output and hosting you\u2019re targeting.</p>
<p>Currently, SvelteKit offers adapters to run your project as a Node app; as static, pre-generated HTML files; or as serverless functions (there are adapters specifically targeted for Netlify, Vercel, and Cloudflare Workers). There are several <a href="${"https://sveltesociety.dev/components/#category-SvelteKit%20Adapters"}" rel="${"nofollow"}">community-created adapters</a> available as well, or you can even <a href="${"https://kit.svelte.dev/docs#writing-an-adapter"}" rel="${"nofollow"}">write your own</a>.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Thanks to the static adapter, most of this site works just fine even with JavaScript disabled\xA0entirely.
`;
    }
  })}
<p>This site uses SvelteKit\u2019s static adapter, which means the pages and components are pre-rendered as plain ol\u2019 HTML files. They can still benefit from \u201Chydration\u201D\u2014JavaScript running once the page has loaded\u2014but they don\u2019t have to. </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Thanks to the static adapter (and some strategic <code>&lt;noscript&gt;</code> tags), most of this site works just fine even with JavaScript disabled entirely.
`;
    }
  })}
<p>Worth noting, however: by default, after the first page load, SvelteKit\u2019s router hydrates and takes over page loading, to make transitions as smooth and fast as possible. You can even designate routes to preload in the background, so that by the time the user clicks, the load is nearly instantaneous.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `You don&#39;t have to go entirely one way or the other; even if you&#39;re deploying your project as a Node app or with serverless functions, you can still mark specific pages to be prerendered as static HTML--handy for things like an &quot;about&quot; page that don&#39;t need dynamic content.
`;
    }
  })}
<h3 id="${"sveltekit-layouts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#sveltekit-layouts"}"><span class="${"icon icon-link"}"></span></a>SvelteKit layouts</h3>
<p>SvelteKit follows the convention of <a href="${"https://kit.svelte.dev/docs#layouts"}" rel="${"nofollow"}">layout files</a>, which are: files that \u201Cwrap\u201D the content of any given page in additional markup, such as a header and footer.</p>
<p>Your base layout file renders every route in your site or app, so you\u2019ll most commonly use it as a base template that includes everything that would appear on every page of the site. The layout includes a <code>&lt;slot /&gt;</code> for the page\u2019s main content to go inside, whatever that page or content might be, and SvelteKit renders the content in that slot.</p>
<p>Here\u2019s what this site\u2019s main layout file\u2019s markup looks like (slightly simplified for readability):</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">class:</span>reduce-motion=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>$prefersReducedMotion<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">class:</span>prefers-dark=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>$prefersDarkMode<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">class:</span>sidebar=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>pageHasSidebar<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loader</span> <span class="token attr-name">loading=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>$isLoading<span class="token punctuation">&#125;</span></span><span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/></span></span> 

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#main<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageHeading</span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageTransition</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PageTransition</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> pageHasSidebar<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sidebar</span> <span class="token punctuation">/></span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>That\u2019s pretty much it. This way, every page includes the header and footer, and the sidebar where appropriate. Some states and preferences are passed in from the global store (those prefixed with a <code>$</code>) so that conditional classes can be applied as needed. And the <code>&lt;slot /&gt;</code> where the page content goes is wrapped in a custom <code>&lt;PageTransition&gt;</code> component that (predictably) just adds the fancy transitions between pages.</p>
<p>It <em>is</em> possible to have nested layouts, or layouts that apply on a per-route basis. You can also reset the layout, if you have a deeply nested route that needs its own setup.</p>
<p>And speaking of routing\u2026</p>
<h3 id="${"routing-in-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#routing-in-sveltekit"}"><span class="${"icon icon-link"}"></span></a>Routing in SvelteKit</h3>
<p>By default, a new SvelteKit project has a <code>src/routes</code> directory. Anything inside <code>src/routes</code> compiles to a page at that relative root.</p>
<p>For example:</p>
<table><thead><tr><th>File:</th>
<th>Becomes route:</th></tr></thead>
<tbody><tr><td><code>src/routes/index.svelte</code></td>
<td><code>/</code> (<em>homepage</em>)</td></tr>
<tr><td><code>src/routes/about.svelte</code></td>
<td><code>/about</code></td></tr>
<tr><td><code>src/routes/blog/index.svelte</code></td>
<td><code>/blog</code></td></tr>
<tr><td><code>src/routes/blog/some-post.md</code></td>
<td><code>/blog/some-post</code></td></tr></tbody></table>
<p>And so on. (<em>Markdown files do require a small bit of extra config, but yes, you can have Markdown files as pages, or just import Markdown to inject into pages or components.</em>)</p>
<p>SvelteKit can <em>also</em> have <em>dynamic</em> routes. For example, <code>/blog/[post].svelte</code> would be a single component that would render <em>any</em> <code>/blog/*</code> slug. You can read more about <a href="${"https://kit.svelte.dev/docs#routing-pages"}" rel="${"nofollow"}">SvelteKit Pages here</a>.</p>
<p>The <em>really</em> magical part, though, is that you can have server-side routes, too!</p>
<p>For example: lots of places in a typical blog need access to the list of your posts. You might want to put your most recent posts on your hompage, have some posts in the sidebar, and of course, they should all be listed the <code>/blog</code> page itself. You might even want category or tag pages.</p>
<p>That\u2019s a lot of fetching posts to redo over and over. So it\u2019s a perfect use case for a server-side route!</p>
<p>If you want your app to have a <code>/posts</code> endpoint that returns JSON, you just create <code>src/routes/posts.json.js</code>. This will become a <code>/posts.json</code> route in the finished application.</p>
<p>From there, you just define a <code>get()</code> JavaScript function that retrieves the desired data and returns it (along with a status code). This is made easier by the fact that SvelteKit has top-level <code>await</code> and <code>fetch</code> available by default.</p>
<p>Here\u2019s a somewhat simplified example of how you might create an endpoint to return all your Markdown posts as JSON:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// posts.json.js</span>

<span class="token comment">// The &#96;get&#96; function responds to GET requests; you can have post(), etc. as well</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'/blog/posts/*.md'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>path<span class="token punctuation">,</span> page<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> slug <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>metadata<span class="token punctuation">,</span> slug <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      posts <span class="token comment">//Automatically converted to JSON \u2728</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Once you\u2019ve retrieved the post data as JSON, you can display it in a Svelte page or component; here\u2019s a short example:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">posts </span><span class="token keyword">as</span> <span class="token language-javascript">post<span class="token punctuation">&#125;</span></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src="</span>/<span class="token attr-name">images</span>/<span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>coverImage<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
        <span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>title<span class="token punctuation">&#125;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>excerpt<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>excerpt<span class="token punctuation">&#125;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
        Read more\u2026
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>I won\u2019t get too much into it here, but SvelteKit also offers a way to <a href="${"https://kit.svelte.dev/docs#loading"}" rel="${"nofollow"}">pre-load data server-side</a> from routes like this, or from external sources.</p>
<p><strong>Worth noting:</strong> when using the static adapter, there of course isn\u2019t any server to query at run time. So in that case, any server-side queries or <code>fetch</code> calls will run at build time, and whatever the result at that point, it will be output as plain static files. Any JSON routes you might have will still be query-able on the live site, but they\u2019ll be static. (For example, here\u2019s <a href="${"/api/posts.json"}">this site\u2019s /api/posts.json endpoint</a>.)</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The ability to read Markdown files isn&#39;t included by default in SvelteKit, but it <em>does</em> have the fairly easy-to-install <a href="${"https://mdsvex.com/"}" rel="${"external"}">MDSvex</a> for that (the Svelte version of MDX, if you&#39;re familiar).
`;
    }
  })}
<h2 id="${"static-sveltekit-vs-gridsome"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#static-sveltekit-vs-gridsome"}"><span class="${"icon icon-link"}"></span></a>Static SvelteKit vs. Gridsome</h2>
<p>Before we dive into comparisons, it\u2019s worth mentioning that SvelteKit and Gridsome aren\u2019t exactly the same type of thing. SvelteKit is an meta-framework capable of generating many different kinds of sites and apps, where Gridsome is just a fairly straightforward static site generator.</p>
<p>Still, if we\u2019re scoping the discussion to <em>just</em> SvelteKit\u2019s static adapter, I think it\u2019s a fair, if not exact, comparison.</p>
<h3 id="${"comparing-performance"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#comparing-performance"}"><span class="${"icon icon-link"}"></span></a>Comparing performance</h3>
<p>To compare Gridsome with SvelteKit, we need to do a bit of configuration. Gridsome pre-loads all of its routes in the background, so that they\u2019re already loaded up and ready to go instantly the moment the user clicks. So unless we\u2019re doing the same thing with SvelteKit, we\u2019re comparing apples to oranges.</p>
<p>Luckily, SvelteKit <em>does</em> offer <code>prefetch</code> and <code>prefetchRoutes</code> functions (the former to prefetch only specified routes, and the latter to just prefetch <em>all</em> routes). So I threw prefetching on <em>all</em> the routes on the site, just to see how it would stack up against the Gridsome version.</p>
<p><strong>Even when preloading all the site\u2019s content, the SvelteKit build is dramatically smaller.</strong></p>
<table><thead><tr><th>Framework</th>
<th>Full size</th>
<th>Compressed</th></tr></thead>
<tbody><tr><td><strong>Gridsome</strong></td>
<td>3.09 MB</td>
<td>1.74 MB</td></tr>
<tr><td><strong>SvelteKit</strong>, <em>preload all routes</em></td>
<td>1.7 MB</td>
<td>536 kB</td></tr>
<tr><td><strong>SvelteKit</strong>, <em>top-level routes only</em></td>
<td>322 kB</td>
<td>184 kB</td></tr></tbody></table>
<p>As you can see from the table above, the SvelteKit version shaves about 45% off the Gridsome build, and <em>over two thirds</em> when compressed. The SvelteKit site <em>at full size</em> is about the size the Gridsome site was <em>compressed</em>!</p>
<p>Granted, 1.7 MB is not exactly <em>tiny</em>, but bear in mind that\u2019s with the weight of <em>every</em> route on the site preloading.</p>
<p>The preloading strategy I eventually settled on, however, is the <em>last</em> row in the table: here, I preload only top-level routes unless we\u2019re on a blog page, and then I preload all blog routes. This was my biggest savings, but there\u2019s a tiny caveat that I also decided to eliminate Google Analytics in this approach as well, so the reduction is <em>slightly</em> exaggerated. Still, though: the overall load is <em>tiny</em> (and honestly, mostly made up of fonts. There\u2019s a little over 100 kB of fonts to load on any given page).</p>
<p>Scrapping Google Analytics was an easy decision once I realized it blocked the main thread and prevented me from <em>ever</em> getting an optimal performance score\u2014even, ironically, from <a href="${"https://developers.google.com/web/tools/lighthouse/"}" rel="${"nofollow"}">Google Lighthouse</a>. I don\u2019t really <em>need</em> analytics on this site, but I can use Cloudflare or even pay for Netlify Analytics for that.</p>
<p><img src="${"/images/post_images/100s.png"}" alt="${"Perfect 100s across the board from Lighthouse test"}"></p>
<p>By the way: although it isn\u2019t implemented in any form in most browsers yet, I put a <code>prefers-reduced-data</code> media query on the site that will prevent preloading when detected.</p>
<hr>
<p>Builds and dev start times with SvelteKit are also much faster: the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version (about five times faster). The dev startup times have similar gains. But again, this is misleading, for two reasons:</p>
<ol><li><p>Gridsome was doing a lot of image work at build time that SvelteKit isn\u2019t by default; and</p></li>
<li><p>Gridsome uses Webpack under the hood, where SvelteKit utilizes the much faster and more modern <a href="${"https://vitejs.dev/"}" rel="${"nofollow"}">Vite</a> (pronounced \u201Cveet\u201D).</p></li></ol>
<p>One particularly nice thing about Gridsome was its built-in <code>&lt;g-image&gt;</code> component. Just by using it in place of the standard HTML <code>&lt;img&gt;</code> tag, Gridsome would compress your images, generate a resized, responsive source set, use lazy loading, <strong><em>and</em></strong> create blurred placeholder images.</p>
<p>By contrast, out of the box, SvelteKit does\u2026nothing to help with images.</p>
<p>My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading (combined with <code>aspect-ratio</code>) was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future. (And even if not, it\u2019s possible to rig that up directly through Vite, though that\u2019s its own rabbit hole. Or, I could even use a service like <a href="${"https://cloudinary.com/"}" rel="${"nofollow"}">Cloudinary</a> if image size became an issue.) But for now, the few Svelte-focused solutions I tried didn\u2019t work particularly well for my use case, and the tradeoff didn\u2019t seem to be worthwhile.</p>
<h3 id="${"why-move-away-from-gridsome"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#why-move-away-from-gridsome"}"><span class="${"icon icon-link"}"></span></a>Why move away from Gridsome?</h3>
<p>As you can see from just perusing the posts list on this blog, it wasn\u2019t all that long ago that I moved to Gridsome in the first place. I went to a <a href="${"/blog/a-new-headless-site-with-gridsome"}">headless Gridsome frontend</a> just over a year ago, and converted the site to <a href="${"/blog/goodbye-wordpress"}">fully static</a> barely seven months ago. I\u2019ve already talked here about how nice Gridsome\u2019s image handling is, and how fast it makes the site feel.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `This naturally prompts the question: why move in the first place? At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about\xA0it.
`;
    }
  })}
<p>I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it\u2019s been almost exactly two years since the last minor version update of Gridsome (<a href="${"https://gridsome.org/blog/2019/09/17/gridsome-v07/"}" rel="${"nofollow"}">0.7</a>), and at this point, it doesn\u2019t seem like it\u2019s an actively maintained project any longer. It\u2019s been all but silent since then.</p>
<p>Gridsome didn\u2019t ever really feel <em>complete</em> to me, and that was fine when updates were still rolling out. I knew what I was in for going with a pre-1.0 technology, and it was really good at what it did well\u2014namely, generating a speedy static site with Vue and GraphQL\u2014but the more you wanted to tweak things or leave the happy path, the more you ran into its rough edges.</p>
<p>More than once, I spent a day or two fighting with NPM, unable to even <em>run</em> Gridsome on my machine. (That\u2019s more to do with the packages Gridsome relies on than Gridsome itself, but still; the frustration is the same.) The last two times I\u2019ve set up new machines, I\u2019ve had to spend significant time trying to get Gridsome running on them. I had to explicitly set Netlify to an older version of Node to even get it to deploy.</p>
<p>But moreover: SvelteKit sparks joy in a way that Gridsome doesn\u2019t anymore. It was exciting to be a part of something new and actively progressing with Gridsome, but now it just feels like being part of something forgotten and stagnant. SvelteKit replaces that feeling; the community is vibrant and the project has an electric momentum to it.</p>
<p>You might ask why, then, I didn\u2019t move over to Nuxt, given that it\u2019s a larger and energetic community. Plus, it\u2019s still in Vue, which would seem less disruptive.</p>
<p>When I was writing this site in Gridsome, my list of Vue projects was fairly small, which made the appeal of having a Vue outlet more appealing. Now, though, it doesn\u2019t feel like I <em>need</em> a site in Vue anymore\u2014especially since my day job isn\u2019t Vue-focused anymore.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit sparks joy in a way that Gridsome doesn&#39;t anymore.
`;
    }
  })}
<p>Maybe the fact that I\u2019ve been working professionally with Vue for the last two years (and released <a href="${"https://quina.app"}" rel="${"nofollow"}">Quina</a> late last year) is part of it, too. I still love Vue dearly, and will almost certainly pick it back up to write a project in Vue 3 one day in the near future. But silly as it sounds, for right now: that itch is scratched, and I want a different thing to play with.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `This site, like any side project, is at least partially for me to enjoy. This is the one little corner of the internet that&#39;s 100% mine, where I can do anything I want for whatever reason. And that thing, right now, is SvelteKit.
`;
    }
  })}
<p>Finally, <a href="${"https://www.typescriptlang.org/"}" rel="${"nofollow"}">TypeScript</a> has first-class support in SvelteKit. I\u2019m relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I\u2019ve been working on involving it more in my workflows to get better at it. At this point, close to 100% of this site\u2019s JS is typed, so I\u2019ve given it a good shot at least.</p>
<h4 id="${"what-other-options-were-considered"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-other-options-were-considered"}"><span class="${"icon icon-link"}"></span></a>What other options were considered?</h4>
<p>To some degree, I considered both <a href="${"https://astro.build/"}" rel="${"nofollow"}">Astro</a> and <a href="${"https://www.11ty.dev/"}" rel="${"nofollow"}">Eleventy</a> for this overhaul, and you could make reasonable arguments that either one would\u2019ve been better suited for the task. If my primary goal had been to build the fastest statically generated site possible with absolutely minimal JavaScript client-side, I no doubt would\u2019ve gravitated towards one of these tools.</p>
<p>In the end, however, Eleventy is still too unopinionated for my personal tastes, and Astro is still a bit too new. (Yes, SvelteKit is new, too, but it seems to have much more of a foundation beneath it.)</p>
<p>And again: this is my personal site, and so the tool I <em>like</em> the most is an important factor. So while SvelteKit might arguably be a little overkill, personally, I think it\u2019s the most fun.</p>
<h3 id="${"how-does-the-code-compare"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-does-the-code-compare"}"><span class="${"icon icon-link"}"></span></a>How does the code compare?</h3>
<p>You might wonder: how does the old Vue code compare to the newer Svelte code? Is it shorter, better, and/or more readable?</p>
<p>Turns out: that\u2019s actually a really tricky question to answer.</p>
<p>I originally thought I\u2019d show side-by-side comparisons to demonstrate Vue vs. Svelte, but there\u2019s been enough change at this point that most of the differences are either trivial, or so far apart they don\u2019t even make sense to compare anymore.</p>
<p>The site\u2019s changed quite a bit, even if it doesn\u2019t necessarily look like it.</p>
<p>The one non-trivial component that\u2019s mostly the same between the two versions is the font tester (seen on the <a href="${"/uses"}"><code>/uses</code> page</a>). But it\u2019s actually about the same size, both in terms of line count and disk size. The Svelte version is negligibly larger (only by a fraction of a kB), and almost certainly just because of the addition of TypeScript.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `\u201CIs it better?\u201D is a really hard question to answer, even without getting into the highly subjective topic of what &quot;better&quot; even means. But I like\xA0it\xA0better.
`;
    }
  })}
<p>Most of the rest just isn\u2019t comparable anymore. The colorful square grid in the header and footer has been completely refactored for better performance. TypeScript is everywhere; layouts have changed; new pieces have been added and old removed. MDSvex came with PrismJS built in, which let me delete both the a full component and an external library. <a href="${"https://storybook.js.org/"}" rel="${"nofollow"}">Storybook</a> and my tests are both removed for now. Lots was refactored. I relied more on global CSS previously, and have moved more towards component-based CSS this time around.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `&quot;Is it better?&quot; is a really hard question to answer, even without getting into the highly subjective topic of what &quot;better&quot; even means. But I like it better (even the parts that are more verbose), and I think that&#39;s the most important part. I even enjoyed the relatively rote process of moving Vue components over to Svelte.
`;
    }
  })}
<p>By the way: I kept an <a href="${"https://joco-gridsome-archive.netlify.app/"}" rel="${"nofollow"}">archival copy of the old site</a> live for myself to look back on, just in case you\u2019d like to compare the two for yourself.</p>
<p>And while we\u2019re on the topic: here\u2019s the link to <a href="${"https://github.com/rickyjanuari/joco-sveltekit"}" rel="${"nofollow"}">my site\u2019s new SvelteKit repo</a>, if you\u2019d like to take a firsthand look behind the scenes. A lot still needs to be refactored and cleaned up (I keep a list), but you\u2019re welcome to poke around, or even clone the repo as a starter for your own blog if you like.</p>
<h3 id="${"the-redesign"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-redesign"}"><span class="${"icon icon-link"}"></span></a>The redesign</h3>
<p>I didn\u2019t set out to make any design changes when moving this site over to SvelteKit, but after a while, I got tired of staring at the old design and started the dangerous journey of playing with new fonts.</p>
<p>In the end, the old body font (Averta Std) got promoted to the heading font, and I added a nice serif (Alkes) for the body copy. More of a small refresh than an overhaul, but the pairing and tweaked styles give the site a fresh new look that I very much like.</p>
<h2 id="${"what-to-know-about-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-to-know-about-sveltekit"}"><span class="${"icon icon-link"}"></span></a>What to know about SvelteKit</h2>
<p>As of this writing, SvelteKit is still in pre-1.0 status. It seems very stable to me\u2014I don\u2019t think anything is going to be changing\u2014and Svelte itself is definitely solid. But there are still some portions of the Kit that aren\u2019t fleshed out yet.</p>
<p>I found the static rendering to be extremely good, but as mentioned, SvelteKit can do a <em>lot</em> more than that. Depending on what you\u2019re building and what features you\u2019re most interested in, it may be worth spending some time to make sure SvelteKit is in good shape to handle your task, and works as expected with your deploy target.</p>
<p>Also worth knowing: Svelte itself doesn\u2019t support IE11 by default. There <em>are</em> some workarounds, but hopefully that\u2019s not anything that matters to you in the first place\u2014especially since not only has IE11 support been dropped by a slew of major companies at this point, but it\u2019s due to be killed by Microsoft itself in a matter of months at the time of writing.</p>
<h3 id="${"dont-listen-to-the-haters"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dont-listen-to-the-haters"}"><span class="${"icon icon-link"}"></span></a>Don\u2019t listen to the haters</h3>
<p>Arguments against Svelte(Kit) tend to focus on how it theoretically scales (emphasis on <em>theoretically</em>), and the relative size of its community and ecosystem compared to other frameworks.</p>
<p>I won\u2019t go into either of those here, but I <em>do</em> address them both in detail in my <a href="${"/blog/introducing-svelte-comparing-with-react-vue"}">introduction to Svelte post</a>.</p>
<h3 id="${"dont-get-confused-by-sapper"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dont-get-confused-by-sapper"}"><span class="${"icon icon-link"}"></span></a>Don\u2019t get confused by Sapper</h3>
<p>One other thing to know at this point in SvelteKit\u2019s existence is that it\u2019s actually the <em>second</em> stab at a Svelte meta-framework; <a href="${"https://sapper.svelte.dev/"}" rel="${"nofollow"}">Sapper</a> was the first.</p>
<p>Sapper never seemed as big as SvelteKit does now, but it\u2019s been deprecated in favor of SvelteKit, and there\u2019s still some confusion that arises when searching online for code solutions in the space.</p>
<p>SvelteKit doesn\u2019t always work exactly the same as Svelte <em>or</em> Sapper by default (largely because Svelte and Sapper both have a Rollup config\u2014Rollup being the bundler that powers Svelte\u2014where SvelteKit has its own config file). So a lot of the examples and answers you come across related to setting up configuration are likely to either need some syntax adjustment, or just not work exactly as expected. (This doesn\u2019t apply to Svelte itself so much as to SvelteKit and its unique configurations.)</p>
<h2 id="${"wrapup-would-i-use-sveltekit-again"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#wrapup-would-i-use-sveltekit-again"}"><span class="${"icon icon-link"}"></span></a>Wrapup: would I use SvelteKit again?</h2>
<p>For just about any project, <strong>yes</strong>, I would use SvelteKit again in a heartbeat.</p>
<p>Even though it\u2019s still technically pre-1.0, SvelteKit feels very solid\u2014much more so than other pre-1.0 frameworks I\u2019ve tried\u2014<em>and</em> it\u2019s a delight to work with. The adapters allow you to tailor your input to any output you like, and the scope of things you can build with it is impressively vast. Plus, it\u2019s likely to be smaller and faster than whatever else you might have chosen, and with even better developer experience.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The Svelte rocketship is a wonderful place to be. I encourage you to step aboard.
`;
    }
  })}
<p>As mentioned, it\u2019s still early days for SvelteKit, so there are still some areas where its established solutions may not be as robust as with other frameworks. I can understand hesitance to bet the farm on something a little newer, but I don\u2019t think I\u2019d have any real hesitation at this point. An established solution with a rich ecosystem like Nuxt might have more to offer in this moment, but I\u2019m confident both that I could do anything I needed to do in SvelteKit, and that it won\u2019t be long before SvelteKit fills the gaps. It\u2019s hard to imagine SvelteKit <em>not</em> becoming the #1 go-to in all cases in the near future\u2014especially knowing it only came out of closed beta a matter of months ago.</p>
<p>The Svelte rocketship is a wonderful place to be. I encourage you to step aboard.</p>`;
});
