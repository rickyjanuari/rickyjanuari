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
  default: () => Build_static_sveltekit_markdown_blog,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var Warning_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";:root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.warning.svelte-43bi7n{margin:var(--halfNote) 0;position:relative;padding:calc(var(--quarterNote) * 1.5);padding-left:var(--dottedHalfNote);font-size:0.8rem;font-style:italic;background:linear-gradient(to right, hsla(var(--redHS), 33%), var(--red));color:var(--white)}.warning.svelte-43bi7n code{background:transparent;font-size:0.9em}.warning.svelte-43bi7n::before{content:"\u26A0\uFE0Fimportant";content:"\u26A0\uFE0F ";font-family:var(--codeFont);font-style:normal;line-height:1;position:absolute;left:var(--quarterNote);top:calc(50% - 0.5em);font-size:1.2rem;height:1em;line-height:1;margin-bottom:var(--quarterNote)}.dark .warning{background:linear-gradient(to right, hsla(var(--redHS), 22%), hsla(var(--redHS), 28%))}',
  map: null
};
const Warning = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"warning svelte-43bi7n"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const metadata = {
  "title": "Let's learn SvelteKit by building a static Markdown blog from scratch",
  "date": "2021-12-27",
  "updated": "2022-01-04",
  "categories": ["svelte", "javascript", "web", "sass"],
  "coverImage": "sveltekit-learn.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed."
};
const Build_static_sveltekit_markdown_blog = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>If you\u2019ve ever recommended a favorite book, movie, or TV show to a friend who didn\u2019t enjoy it at all, you know exactly how I felt when I saw this message from a colleague:</p>
<blockquote><p>man I just tried to hello world SvelteKit and it is NOT for me</p></blockquote>
<p>I love <a href="${"https://svelte.dev"}" rel="${"nofollow"}">Svelte</a>, and I\u2019ve talked plenty about how much I\u2019ve enjoyed <a href="${"/blog/converting-from-gridsome-to-sveltekit"}">rewriting this site</a> using <a href="${"https://kit.svelte.dev"}" rel="${"nofollow"}">SvelteKit</a>. So my first reaction, of course, was disappointment. What went wrong?</p>
<p>But as I considered their reaction, I realized: it was valid.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Amazing though it is, SvelteKit isn&#39;t the simplest thing you could use as a static site\xA0generator.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Amazing though it is, SvelteKit isn&#39;t the simplest thing you could use as a static site\xA0generator.
`;
    }
  })}
<p>Other tools like <a href="${"https://astro.build/"}" rel="${"nofollow"}">Astro</a>, <a href="${"https://www.11ty.dev/"}" rel="${"nofollow"}">Eleventy</a>, or <a href="${"https://www.gatsbyjs.com/"}" rel="${"nofollow"}">Gatsby</a> will likely get you up and running faster, since that\u2019s their sole focus. (<a href="${"https://kit.svelte.dev/docs#appendix-ssg"}" rel="${"nofollow"}">Even the SvelteKit docs make this point</a>.)</p>
<p>However, I still feel SvelteKit is worthy of serious consideration. Its capabilities are much more broad and flexible than SSGs, and there\u2019s plenty unique to love about its both developer and user experiences. So this post will be aimed at smoothing out that initial learning curve, to help you understand and take advantage of SvelteKit\u2019s wide range of possibilities.</p>
<h2 id="${"what-well-cover-and-what-to-know-first"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-well-cover-and-what-to-know-first"}"><span class="${"icon icon-link"}"></span></a>What we\u2019ll cover, and what to know first</h2>
<p><strong>This is a walkthrough of using SvelteKit to set up a prerendered static blog with Markdown, Sass and an API.</strong> (That\u2019s how this site is built, by the way.)</p>
<p>This is <em>also</em> an intro to SvelteKit itself, with a good overview of SvelteKit fundamentals that should be transferable to <em>any</em> project.</p>
<p>Finally, this is <em>fun</em>!* </p>
<p><em>*My opinion; citation needed</em></p>
<h3 id="${"youll-get-the-most-out-of-this-if-you"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#youll-get-the-most-out-of-this-if-you"}"><span class="${"icon icon-link"}"></span></a>You\u2019ll get the most out of this if you:</h3>
<ul><li>Know the fundamentals of front-end development and JavaScript;</li>
<li>Have at least a basic understanding of Svelte already. (You can probably follow along regardless, but I\u2019d recommend the <a href="${"https://svelte.dev/tutorial/basics"}" rel="${"nofollow"}">Svelte tutorial</a> first if you\u2019re brand-new);</li>
<li>Know the basics of both <a href="${"https://www.markdowntutorial.com/"}" rel="${"nofollow"}">Markdown</a> and <a href="${"https://sass-lang.com/"}" rel="${"nofollow"}">Sass</a>;</li>
<li>Understand the basics of fetching JSON from an API; and</li>
<li>Know how to install packages with <a href="${"https://www.npmjs.com/"}" rel="${"nofollow"}">npm</a>, and have npm installed already.</li></ul>
<p>Finally, if you just want to skip ahead and see the finished product, you can <a href="${"https://github.com/rickyjanuari/sveltekit-blog-guide-steps"}" rel="${"nofollow"}">check out this repo</a> or copy it\u2014though I have a proper, more fleshed-out <a href="${"https://github.com/rickyjanuari/sveltekit-blog-starter"}" rel="${"nofollow"}">SvelteKit starter here</a>.</p>
<p><strong>Let\u2019s get started!</strong></p>
<h2 id="${"creating-a-new-sveltekit-app"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#creating-a-new-sveltekit-app"}"><span class="${"icon icon-link"}"></span></a>Creating a new SvelteKit app</h2>
<p>To generate a new SvelteKit project, run this in your terminal (naturally, you can change <code>my-app</code> to whatever other title you prefer):</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> init svelte@next my-app</code>`}<!-- HTML_TAG_END --></pre>
<p>When you run that <code>init</code> command, SvelteKit will ask you some questions about your project and how you want it set up: </p>
<p><img src="${"/images/post_images/sveltekit-init.png"}" alt="${"SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo"}"></p>
<p>We\u2019ll select the \u201CSkeleton project\u201D option.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If this is your very first time using SvelteKit, feel free to choose &quot;SvelteKit demo app,&quot; poke around a bit to get a sense of how things work, then come back. It&#39;s a good intro, but it comes with several files and styles that would be a lot to undo as a starter.
`;
    }
  })}
<p>The setup tool will also ask for your preferences on TypeScript, ESlint, and Prettier. For simplicity\u2019s sake, I won\u2019t use TypeScript, but you\u2019re welcome to if you like. (Svelte works quite well with it.)</p>
<p>Once you\u2019ve made your choices, after a moment of installation, you should see <code>Your project is ready!</code> appear in your terminal, along with next steps and helpful links:</p>
<p><img src="${"/images/post_images/sveltekit-installation-confirmation.png"}" alt="${"'Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started."}"></p>
<p>At this point, let\u2019s open up the project in <a href="${"https://code.visualstudio.com/"}" rel="${"nofollow"}">VS Code</a> (or your text editor of choice). Then in the terminal, install the dependencies, and then run the dev server:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev -- --open</code>`}<!-- HTML_TAG_END --></pre>
<p>Complete those commands, and our new site will be running in a browser window!</p>
<p><img src="${"/images/post_images/welcome-to-sveltekit.png"}" alt="${"The default welcome page for a new SvelteKit project"}"></p>
<p>The skeleton project is definitely unexciting. There isn\u2019t even any CSS yet. But that\u2019s ok; it gives us the freedom to style our app however we like, without the need to remove or work around any existing code.</p>
<p>This is our blank canvas, and we\u2019ll get some paint on it soon enough.</p>
<h2 id="${"routing-in-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#routing-in-sveltekit"}"><span class="${"icon icon-link"}"></span></a>Routing in SvelteKit</h2>
<p>Like many frameworks (and for that matter, PHP), SvelteKit has a directory-based approach to routing and pages.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Any component inside <code>src/routes</code> becomes a page at that same relative\xA0route.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Any component inside <code>src/routes</code> becomes a page at that same relative\xA0route.
`;
    }
  })}
<ul><li><code>index.svelte</code> is the homepage (<code>/</code>)</li>
<li>A file named <code>about.svelte</code> would become the <code>/about</code> page</li>
<li><code>blog/index.svelte</code> would be be the <code>/blog</code> page</li>
<li><code>blog/some-post.svelte</code> becomes <code>/blog/some-post</code></li></ul>
<h3 id="${"adding-pages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-pages"}"><span class="${"icon icon-link"}"></span></a>Adding pages</h3>
<p>For starters, just to get some pages on our site, let\u2019s create <code>about.svelte</code> and <code>contact.svelte</code> files inside of <code>src/routes</code>. (We can always delete or modify them later.) We\u2019ll also create a <code>blog</code> folder, with an <code>index.svelte</code> file inside.</p>
<p>Within each of those files, let\u2019s toss a quick heading, and maybe some text, just so we can see a little content.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Svelte files can just contain plain HTML.
`;
    }
  })}
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- about.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hi, I'm Josh!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is my about page.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- contact.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Get in touch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mailto:me@my.tld<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- blog/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>My blog posts will go here eventually\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Our <code>src/routes</code> folder should now look like this:</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2523 \u{1F4C2} blog
  \u2503 \u2517 \u{1F4DC} index.svelte
  \u2523 \u{1F4DC} about.svelte
  \u2523 \u{1F4DC} contact.svelte
  \u2517 \u{1F4DC} index.svelte</code>`}<!-- HTML_TAG_END --></pre>
<p>At this point, you could visit <code>/contact</code>, <code>/about</code>, and/or <code>/blog</code> to see the pages we just created. There\u2019s not much there yet, of course, but it\u2019s nice to at least see that routing is taken care of for us automatically, just by placing the files in the <code>routes</code> folder.</p>
<h3 id="${"adding-a-layout"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-a-layout"}"><span class="${"icon icon-link"}"></span></a>Adding a layout</h3>
<p>Most sites and apps have some elements that are reused on every page (a <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> being the most common and obvious examples). Since adding those to every page would be tedious and error-prone, SvelteKit (like many other frameworks) conveniently lets us define <a href="${"https://kit.svelte.dev/docs#layouts"}" rel="${"nofollow"}">layouts</a>.</p>
<p>Inside of <code>src/routes</code>, make a new file named <code>__layout.svelte</code>.</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4DC} __layout.svelte</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>This name is a SvelteKit convention.</strong> SvelteKit automatically checks <code>routes</code> (and all its subdirectories) for a <code>__layout.svelte</code> file. That layout will \u201Cwrap\u201D all the content loaded from that route and its sub-routes. </p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `A layout becomes a parent component, and the current page will be slotted in as its child component.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `A layout becomes a parent component, and the current page will be slotted in as its child component.
`;
    }
  })}
<p>So a layout at the top level of the <code>routes</code> folder will apply globally, on every page.</p>
<p>It\u2019s easier to show than tell, so open up our new <code>__layout.svelte</code> file, and let\u2019s add a placeholder header and footer:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- __layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>Hi, I'm a header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>Hello, I'm the footer.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Save that, and you should now see that header text above the page\u2019s contents, and the footer text below.</p>
<p><img src="${"/images/post_images/sveltekit-layout-shown.png"}" alt="${"The header text appears above the contents of the index.svelte file, and the footer text below."}"></p>
<h2 id="${"creating-components"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#creating-components"}"><span class="${"icon icon-link"}"></span></a>Creating components</h2>
<p>Manually typing routes in the browser isn\u2019t great, so let\u2019s add some navigation. In the process, we\u2019ll create our first component.</p>
<p>First, create a new folder called <code>lib</code> inside of <code>src</code>. (<code>lib</code> is another SvelteKit convention; more on that in a moment.)</p>
<p>Inside <code>src/lib</code>, we\u2019ll create a folder named <code>components</code>, just for organizational purposes. And inside of <em>that</em>, we\u2019ll create a new component named <code>Header.svelte</code>:</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2523 \u{1F4C1} routes
\u2517 \u{1F4C2} lib
  \u2517 \u{1F4C2} components
    \u2517 \u{1F4DC} Header.svelte</code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `You don&#39;t have to capitalize component names, or keep components in their own folder, but both are generally preferred conventions.
`;
    }
  })}
<p>Inside our new <code>Header</code> component, let\u2019s place some proper (albeit basic) navigation:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- Header.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/contact<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Save that, and let\u2019s go back to <code>__layout.svelte</code> to use it!</p>
<p>To use a component, we first need to <code>import</code> it, which means we\u2019ll need to add a <code>&lt;script&gt;</code> tag to our layout. (I personally prefer it at the top of the file, but Svelte gives you the freedom to arrange components however you like.) Once imported, we can replace our placeholder header with the component:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- __layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">'$lib/components/Header.svelte'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!-- The rest of the HTML here --></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Notice the import path.</strong> <code>$lib</code> is a handy alias that goes directly to <code>src/lib</code>, saving you from typing tedious relative paths. (<code>$lib</code> is the only alias SvelteKit ships with, but you can add your own, from <code>jsconfig.json</code>.)</p>
<p>Anyway, now we should see something <em>slightly</em> more user-friendly in our browser:</p>
<p><img src="${"/images/post_images/sveltekit-header-component.png"}" alt="${"Our new header shows up now in the site"}"></p>
<p>The styling still isn\u2019t great, but it\u2019s usable. We can click between pages now, which will make testing things out a lot easier.</p>
<h3 id="${"component-styling"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#component-styling"}"><span class="${"icon icon-link"}"></span></a>Component styling</h3>
<p><strong>Svelte component styles are scoped by default.</strong> That makes it easy to write CSS without fear of it bleeding out and having side effects anywhere outside the component.</p>
<p>To try it out, in <code>Header.svelte</code>, add a <code>&lt;style&gt;</code> tag. (It could go anywhere, but I prefer to put it at the end.)</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- Header.svelte --></span>

<span class="token comment">&lt;!-- ... The rest of the file's contents here --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">header</span> <span class="token punctuation">&#123;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">ul</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">a</span> <span class="token punctuation">&#123;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you save and take a look at the site now, you should see your Header component looking a little more header-like. You might <em>also</em> notice that the styling doesn\u2019t affect anything in our main page content. That\u2019s the power of scoping!</p>
<p><img src="${"/images/post_images/sveltekit-scoped.png"}" alt="${"The links in our Header component are not underlined or blue, but links outside the component remain with the default styling."}"></p>
<p>If you want to, you could repeat this process with a <code>&lt;Footer /&gt;</code> component now, too. I\u2019ll skip over it, since it\u2019s just the same thing over again, but it\u2019s a good thing to do at some point.</p>
<h3 id="${"the-difference-between-components-and-pages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-difference-between-components-and-pages"}"><span class="${"icon icon-link"}"></span></a>The difference between components and pages</h3>
<p>It might be a little confusing that we\u2019re jumping in and out of several <code>.svelte</code> files now, each with a different role. So just to clarify before moving on:</p>
<ul><li><p>Any component inside of <code>src/routes</code> becomes its own page (unless its name starts with an underscore);</p></li>
<li><p>Otherwise, we\u2019re putting them in  <code>src/lib/components</code>. They can be used independently, and don\u2019t get routes of their own.</p></li></ul>
<h2 id="${"stylesheets-in-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#stylesheets-in-sveltekit"}"><span class="${"icon icon-link"}"></span></a>Stylesheets in SvelteKit</h2>
<p>Svelte lets you import stylesheets directly into components\u2014including pages and layouts. There are other ways to load stylesheets, but I find that\u2019s the best. It\u2019s easy, for one thing, but more importantly, it <em>also</em> preprocesses them automatically, which we\u2019ll want when we add Sass shortly.</p>
<p>Create a new folder inside of <code>src/lib</code> for your styles, and add a <code>style.css</code> file inside it. </p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2523 \u{1F4C1} routes
\u2517 \u{1F4C2} lib
  \u2523 \u{1F4C1} components
  \u2517 \u{1F4C2} styles
    \u2517 \u{1F4DC} style.css </code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `There are no rules about how you structure things inside of <code>src/lib</code>. Feel free to organize your folders however you like.
`;
    }
  })}
<p>You can add whatever CSS you prefer, but if you need a suggestion, here\u2019s a little bit of boilerplate that should begin to get things looking <em>slightly</em> better:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/* style.css */</span>
<span class="token selector">body</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">main</span> <span class="token punctuation">&#123;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 2rem auto<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 40rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Once we\u2019ve got a stylesheet with some CSS in it, loading it globally is as easy as importing the file in our layout:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- __layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">'$lib/components/Header.svelte'</span>
  <span class="token keyword">import</span> <span class="token string">'$lib/styles/style.css'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- ...HTML here --></span></code>`}<!-- HTML_TAG_END --></pre>
<p><img src="${"/images/post_images/sveltekit-css.png"}" alt="${"Our CSS is now showing on the site and making it look (slightly) less ugly."}"></p>
<p>Since SvelteKit is server-rendered, if you view the page source, you\u2019ll even see our style has been added to the HTML, rather than being client-rendered. Neat!</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Importing stylesheets in JavaScript files is not a web standard; it&#39;s just supported by some bundlers and build tools, popularized by React and Webpack.
`;
    }
  })}
<h3 id="${"adding-sass-to-sveltekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-sass-to-sveltekit"}"><span class="${"icon icon-link"}"></span></a>Adding Sass to SvelteKit</h3>
<p>One of the great things about Svelte is how comparatively easy it is to add external processors, thanks to <a href="${"https://github.com/sveltejs/svelte-preprocess"}" rel="${"nofollow"}"><code>svelte-preprocess</code></a>.</p>
<blockquote><p><code>svelte-preprocess</code> automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.</p></blockquote>
<p>Our next step is to install both <code>svelte-preprocess</code> and <code>sass</code>, which we may as well do at the same time:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i -D svelte-preprocess sass</code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This command installs the most modern version of Sass, which isn&#39;t compatible with all versions of Node. If you hit errors, you may need to upgrade your Node version, or install the older <code>node-sass</code> instead.
`;
    }
  })}
<h4 id="${"modifying-the-svelte-config"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#modifying-the-svelte-config"}"><span class="${"icon icon-link"}"></span></a>Modifying the Svelte config</h4>
<p>Next, open the <code>svelte.config.js</code> file, found in the project root.</p>
<p>As the name implies, <code>svelte.config.js</code> is the home for, well, configuration. It\u2019s where we\u2019ll make any needed changes to SvelteKit\u2019s options and compiler.</p>
<p>This change is minimal; we just need to import <code>svelte-preprocess</code>, and then add it to SvelteKit\u2019s list of preprocessors.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// svelte.config.js</span>
<span class="token keyword">import</span> sveltePreprocess <span class="token keyword">from</span> <span class="token string">'svelte-preprocess'</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token comment">/* ...other kit options here already */</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Note that you\u2019ll need to create the <code>preprocess</code> option; it\u2019s not there by default. (We\u2019ll add Markdown processing here later, too.)</p>
<p>Also note that you <em>can</em> pass an object with more granular options into the <code>sveltePreprocess()</code> function, but we won\u2019t for now. It knows what to do with Sass by default, so no further customization is needed.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `It&#39;s worth mentioning the <code>scss.prependData</code> option, which allows you to automatically inject code at the start of any Sass processing (such as Sass variables or an <code>@import</code>). You can read more in the <a href="${"https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content"}"><code>svelte-preprocess</code> docs</a>; I just wanted to mention it since it&#39;s quite handy. 
`;
    }
  })}
<p><strong>One more quick, important thing to know:</strong> you\u2019ll want to stop and restart your dev server any time you make a config change.</p>
<h3 id="${"adding-scss-to-component-styles"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-scss-to-component-styles"}"><span class="${"icon icon-link"}"></span></a>Adding SCSS to component styles</h3>
<p>Now that we\u2019ve got both Sass and our preprocessor installed, you can use Sass inside any component\u2019s <code>&lt;style&gt;</code> block just by adding a <code>lang</code> attribute, like so:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  // We can write SCSS here!
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"using-global-scss-files"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-global-scss-files"}"><span class="${"icon icon-link"}"></span></a>Using global SCSS files</h3>
<p>Linking to Sass files is actually exactly the same as linking to CSS files, like we\u2019ve already covered. In fact, at this point, you could just rename the existing <code>style.css</code> file to <code>style.scss</code>. (You\u2019ll need to update the <code>import</code> in our layout, too, but that\u2019s it.)</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- __layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">'$lib/styles/style.scss'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Ok, we\u2019ve gotten a pretty good idea of project structure and styling at this point. Let\u2019s move on to the last big missing piece: support for Markdown.</p>
<h2 id="${"adding-markdown-to-sveltekit-with-mdsvex"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-markdown-to-sveltekit-with-mdsvex"}"><span class="${"icon icon-link"}"></span></a>Adding Markdown to SvelteKit with mdsvex</h2>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The word &quot;svelte&quot; does not make for smooth portmanteaus, but that doesn&#39;t slow the Svelte community down much.
`;
    }
  })}
<p>If you\u2019ve heard of MDX (generally used in React-based projects), you could think of the curiously named <a href="${"https://mdsvex.pngwn.io/"}" rel="${"nofollow"}">mdsvex</a> as the Svelte equivalent. </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `The word &quot;svelte&quot; does not make for smooth portmanteaus, but that doesn&#39;t slow the Svelte community down much.
`;
    }
  })}
<p>Anyway, mdsvex powers everything we might want to do with Markdown:</p>
<ul><li>mdsvex handles converting Markdown to HTML;</li>
<li>It also allows Markdown files to be used as components; and</li>
<li>Finally, mdsvex lets us use Svelte components <em>inside</em> Markdown.</li></ul>
<p>First, install mdsvex:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i -D mdsvex</code>`}<!-- HTML_TAG_END --></pre>
<p>Next, we\u2019ll need to add mdsvex to our config. Open <code>svelte.config.js</code>, and modify the code like so:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// svelte.config.js</span>
<span class="token comment">/* Other imports here */</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> mdsvex <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'mdsvex'</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token comment">/* Kit options here */</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.svelte'</span><span class="token punctuation">,</span> <span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.md'</span><span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you\u2019d like to get into the details of that config:</p>
<ul><li>The <code>extensions</code> config property tells Svelte what types of files to treat as components (allowing them to be imported and used in the same way Svelte components are);</li>
<li>The <code>mdsvex()</code> function preprocesses Markdown to HTML\u2014but it only targets <code>.svx</code> files by default, so we modify that as an argument.</li></ul>
<p><strong>Reminder:</strong> be sure to restart your dev server after making config changes. </p>
<p><em>If you\u2019re running into errors, double-check that everything installed properly, all the necessary imports are present in your config file, and there are no syntax errors in the config file.</em></p>
<h3 id="${"markdown-pages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#markdown-pages"}"><span class="${"icon icon-link"}"></span></a>Markdown pages</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Thanks to mdsvex, we can now use Markdown files as pages.
`;
    }
  })}
<p>Because of the config changes we just made, Markdown files can now be imported and used just like Svelte components.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Thanks to mdsvex, we can now use Markdown files as pages.
`;
    }
  })}
<p>Just to try it out, create <code>src/routes/uses.md</code> and throw some Markdown into it. You\u2019ll be able to see your content by visiting <code>/uses</code>:</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517  \u{1F4DC} uses.md</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token title important"><span class="token punctuation">#</span> Uses</span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Here's some stuff I use</span><span class="token punctuation">**</span></span>

<span class="token list punctuation">-</span> SvelteKit
<span class="token list punctuation">-</span> VS Code
<span class="token list punctuation">-</span> Emojis \u{1F60E}</code>`}<!-- HTML_TAG_END --></pre>
<p><img src="${"/images/post_images/sveltekit-uses-rendered.png"}" alt="${"Our markdown file rendered out as a page on our website"}"></p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Markdown pages are a handy option for text-based content, since Markdown is generally easier to author than HTML.
`;
    }
  })}
<p>You can even import and use Markdown content <em>inside of</em> other files, if you want to\u2014for example, if part of the page needed state or interactivity, but part could just be Markdown text.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Markdown pages are a handy option for text-based content, since Markdown is generally easier to author than HTML.
`;
    }
  })}
<p>This <code>/uses</code> page doesn\u2019t have to be permanent, but keep it around for now; we\u2019ll reference it again in a little bit. But first, let\u2019s cover a couple other nice features of mdsvex.</p>
<h3 id="${"code-blocks-in-markdown"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#code-blocks-in-markdown"}"><span class="${"icon icon-link"}"></span></a>Code blocks in markdown</h3>
<p>Handily, mdsvex comes with <a href="${"https://prismjs.com/"}" rel="${"nofollow"}">prism.js</a> pre-installed for code syntax highlighting. All you need to do is note the language (by adding it to the opening triple backticks), and mdsvex will process it appropriately.</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown">&#96;&#96;&#96;js
// JavaScript goes here,
// And will be syntax-highlighted!
&#96;&#96;&#96;</code>`}<!-- HTML_TAG_END --></pre>
<p>All the code blocks on this website are made using this technique. And as a bonus: mdsvex even has <code>svelte</code> available as a language option!</p>
<p>Just note that you\u2019ll need some CSS to handle the coloring, but <a href="${"https://github.com/PrismJS/prism-themes"}" rel="${"nofollow"}">many themes are available</a> to either use as-is, or as a base for your own styles.</p>
<h3 id="${"using-svelte-components-in-markdown"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-svelte-components-in-markdown"}"><span class="${"icon icon-link"}"></span></a>Using Svelte components in Markdown</h3>
<p>As mentioned before: mdsvex allows you to use Svelte components <em>inside</em> of Markdown!</p>
<p>To do so, just drop in a <code>script</code> tag at the start of the content (after the frontmatter), and import the component within. You can then add the component to your Markdown just like you would anywhere else:</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"># frontmatter goes here</span>
<span class="token punctuation">---</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>
  import SomeComponent from '$lib/components/SomeComponent.svelte'
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token title important"><span class="token punctuation">#</span> Markdown content here</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SomeComponent</span> <span class="token punctuation">/></span></span>

More markdown <span class="token italic"><span class="token punctuation">_</span><span class="token content">here</span><span class="token punctuation">_</span></span>!</code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `As you might have already realized: this means you can even import Markdown files into <em>other</em> Markdown files!
`;
    }
  })}
<h2 id="${"setting-up-the-blog"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#setting-up-the-blog"}"><span class="${"icon icon-link"}"></span></a>Setting up the blog</h2>
<p>Now that we have Markdown processing all set up, it\u2019s time to get into the real meat of this tutorial, and begin setting up the blog.</p>
<p>Thanks to SvelteKit\u2019s flexibility, there are actually a few ways to do this, each with their own tradeoffs. But ultimately, they all work well (especially when pre-rendering), so I\u2019ve chosen the simplest.</p>
<h3 id="${"adding-some-markdown-posts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-some-markdown-posts"}"><span class="${"icon icon-link"}"></span></a>Adding some Markdown posts</h3>
<p>Going forward, it will be handy to have at least a couple of posts to work with, so let\u2019s create some inside of <code>src/routes/blog</code>. (If you already have some Markdown post files, feel free to just copy those over instead.)</p>
<p>No need for anything fancy; just at least a couple of <code>.md</code> files, with a tiny bit of Markdown in them for us to see. Something like this will work just fine:</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4C2} blog
    \u2523 \u{1F4DC} 1.md
    \u2517 \u{1F4DC} 2.md</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: Post One
date: "2021-12-14"</span>
<span class="token punctuation">---</span></span>

Hello, I am <span class="token italic"><span class="token punctuation">_</span><span class="token content">Post One.</span><span class="token punctuation">_</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Nice to meet you!</span><span class="token punctuation">**</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The names and content aren\u2019t important, but we <em>will</em> be using the <code>title</code> and <code>date</code> frontmatter properties later, so be prepared.</p>
<p>You can now visit <code>/blog/x</code> (where <code>x</code> is the slug of a blog post file) to see the post content live on the site:</p>
<p><img src="${"/images/post_images/sveltekit-min-blog-post-render.png"}" alt="${"The content of the markdown file rendered inside the blog layout"}"></p>
<p>Well that was easy!</p>
<p>However, what we\u2019re seeing above is only the content. We <em>also</em> want to display the post\u2019s frontmatter properties. And for that, we\u2019ll need an <a href="${"https://mdsvex.pngwn.io/docs#layouts"}" rel="${"nofollow"}">mdsvex layout</a>.</p>
<h3 id="${"adding-a-mdsvex-layout"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-a-mdsvex-layout"}"><span class="${"icon icon-link"}"></span></a>Adding a mdsvex layout</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `If a named layout shares the name of the current directory, mdsvex will use it automatically.
`;
    }
  })}
<p>mdsvex lets us designate a layout\u2014that is, a Svelte component\u2014to render Markdown files, much the same way that SvelteKit layouts render pages.</p>
<p>The two are similar, but not to be confused. Unlike SvelteKit layouts, there\u2019s no convention to follow with the naming or placement of mdsvex layouts; it\u2019s all explicit config.</p>
<p>So since it\u2019s our choice, we\u2019ll name our layout <code>_post.svelte</code>, and put it in <code>src/routes/blog</code> (just to keep related things close together).</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4C2} blog
    \u2517 \u{1F4DC} _post.svelte</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Why the underscore?</strong> Any route that begins with an underscore is private, i.e., excluded from the site\u2019s routes. Since this layout file will just serve as a template and won\u2019t have content of its own, we don\u2019t want it to have its own route or be directly visited.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Any route that begins with an underscore is private, i.e., excluded from the site&#39;s routes.
`;
    }
  })}
<p>Once the file is created, head back to <code>svelte.config.js</code> and add a <code>layout</code> property to the <code>mdsvex</code> function options. </p>
<p>There are a few ways to designate mdsvex layouts, but I find <a href="${"https://mdsvex.pngwn.io/docs#named-layouts"}" rel="${"nofollow"}">named layouts</a> handiest. </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `If a named layout shares the name of the current directory, mdsvex will use it automatically.
`;
    }
  })}
<p>Here\u2019s how to create one (named \u201Cblog\u201D in this case, since we want this layout to apply inside the <code>blog</code> folder):</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// svelte.config.js</span>

<span class="token comment">/* Imports here */</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* ...Other config properties here */</span>

  <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">blog</span><span class="token operator">:</span> <span class="token string">'src/routes/blog/_post.svelte'</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>(<em>Note that the file path must be relative</em>.) And as always, be sure to restart the dev server after making the change.</p>
<p>Now, inside the file we designated as our mdsvex layout, all frontmatter properties are available as component props. We just need to name and call them, like so:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- _post.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> title
  <span class="token keyword">export</span> <span class="token keyword">let</span> date
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Published: <span class="token language-javascript"><span class="token punctuation">&#123;</span>date<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `It might be a good idea to set defaults for each prop, in case it&#39;s missing from the frontmatter. Also, be sure the layout has a <code>&lt;slot /&gt;</code>, or the file&#39;s contents won&#39;t be shown. And finally, dates are tricky. If your dates aren&#39;t strings in the Markdown, you might need to add some formatting and manipulation.
`;
    }
  })}
<p>That in place, now when we load a blog post, we should see the layout pulling the frontmatter properties in:</p>
<p><img src="${"/images/post_images/sveltekit-rendered-md-post-with-meta.png"}" alt="${"Our blog post page is now rendering with a title and a date."}"></p>
<p>However, thanks to our named layout matching <em>only</em> <code>blog</code> routes, if we load the <code>/uses</code> page, we\u2019ll see the same layout does <em>not</em> apply there. Pretty awesome! (<em>Yes, that\u2019s all I wanted us to save it for. You can delete it now if you want</em>.)</p>
<p>Worth knowing: you can opt a Markdown file out of any mdsvex layout by adding <code>layout: false</code> to the frontmatter. You can <em>also</em> set up a fallback, in case no route matches; <a href="${"https://mdsvex.pngwn.io/docs/#named-layouts"}" rel="${"nofollow"}">see the mdsvex layout docs</a> for details.</p>
<h4 id="${"tradeoffs-and-other-options"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#tradeoffs-and-other-options"}"><span class="${"icon icon-link"}"></span></a>Tradeoffs and other options</h4>
<p>Using mdsvex layouts and dropping Markdown files directly into <code>src/routes/blog</code> is the simplest way to render individual posts. The main <em>drawback</em> is: unfortunately, as of this writing, mdsvex layouts can\u2019t use Sass or TypeScript (as nearly as I can tell, at least). The compiler seems to break when I try.</p>
<p>That might just be my config setup, but even aside from that, you\u2019re still a little more bought in to mdsvex with this approach. (Not that you wouldn\u2019t be otherwise, but it\u2019s one more feature you\u2019re relying on.) Neither of those tradeoffs may be deal-breakers for you, but they\u2019re still tradeoffs.</p>
<p>The other possible good approach would be to use a dynamic <code>[post].svelte</code> route, and tuck all your posts away in a hidden folder. That\u2019s a little more complex, but also perhaps a bit more flexible. We\u2019ll cover dynamic routes more later, and the same approach can easily be adapted for all blog posts, if you want. For now, I just wanted to mention the tradeoffs.</p>
<p>You could also use a nested SvelteKit layout, but I don\u2019t like that option because it will try to work on both our individual post pages <em>and</em> our blog index page, and we don\u2019t want that.</p>
<hr>
<p>All right, at this point, we\u2019ve got a good handle on individual posts. Now, it\u2019s time to build out the blog index page, where we\u2019ll list <em>all</em> our posts. To do that\u2014because we\u2019ll likely want to list posts in multiple ways in various places\u2014we\u2019ll build out an API endpoint for posts.</p>
<h2 id="${"sveltekit-endpoints"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#sveltekit-endpoints"}"><span class="${"icon icon-link"}"></span></a>SvelteKit endpoints</h2>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Endpoints work the same way as pages, as far as routing. But where pages return HTML, an endpoint returns data.
`;
    }
  })}
<p>Up until now, every route we\u2019ve created has been a page. But SvelteKit offers <em>another</em> type of route, too: <a href="${"https://kit.svelte.dev/docs#routing-endpoints"}" rel="${"nofollow"}">endpoints</a>.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Endpoints work the same way as pages, as far as routing. But where pages return HTML, an endpoint returns data.
`;
    }
  })}
<p>There are just three important conventions to follow when creating an endpoint with SvelteKit:</p>
<ol><li><strong>An endpoint\u2019s route should include the data type it returns.</strong> For example, <code>/api/posts.json</code>. (Endpoint data is usually JSON, but it doesn\u2019t have to be.)</li>
<li><strong>An endpoint should export a function for each <a href="${"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}" rel="${"nofollow"}">HTTP verb</a> it accepts.</strong> This will often just be a <code>get</code> function, but you can also use <code>post</code>, etc.</li>
<li><strong>Endpoint functions should return an object with <code>status</code> and <code>body</code>.</strong> (Returning nothing is a 404 by default.)</li></ol>
<p><strong>Why an endpoint?</strong> Because we might have other places in our app we want to access these posts, too.</p>
<p>We <em>could</em> just put the necessary code straight in where we need it instead of going to the trouble of making an API endpoint. But unless your blog is extremely simple, odds are, you\u2019ll want to grab posts in more than one place. Having an endpoint reduces the overhead of rewriting that code to go grab our posts all over the place.</p>
<p>Anyway, there\u2019s more detail in the <a href="${"https://kit.svelte.dev/docs#routing-endpoints"}" rel="${"nofollow"}">endpoint docs</a>, but it\u2019s less complicated than it sounds, so let\u2019s dive in.</p>
<h3 id="${"creating-an-endpoint-for-our-posts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#creating-an-endpoint-for-our-posts"}"><span class="${"icon icon-link"}"></span></a>Creating an endpoint for our posts</h3>
<p>Since we might decide to add more endpoints later, let\u2019s create a <code>src/routes/api</code> folder, and inside it, a new file named <code>posts.json.js</code>.</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4C2} api
    \u2517 \u{1F4DC} posts.json.js</code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The file extension is removed from the end of all routes, so this endpoint will just be <code>/api/posts.json</code>.
`;
    }
  })}
<p>Inside this new file, we\u2019ll need to export a <code>get</code> method (since \u201Cget\u201D is the HTTP verb we\u2019ll accept; this endpoint will only return data, not accept it).</p>
<p>Let\u2019s do a quick test, just to see it in action:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// posts.json.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"Welcome to my API"</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>With that in place, we should be able to visit <code>/api/posts.json</code> and see the following (unimpressive, but neat!) JSON loaded in the browser:</p>
<p><img src="${"/images/post_images/sveltekit-dummy-json.png"}" alt="${"'We got here!'"}"></p>
<p>How <em>cool</em> is it that!? Our API route doesn\u2019t return anything useful just yet, obviously, but it\u2019s still pretty awesome to have it up and running that easily!</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `While we won&#39;t add it here, you can add an argument to <code>get</code>, which will pass in all the headers, query parameters, and lots of other info about the request.
`;
    }
  })}
<h3 id="${"returning-posts-from-an-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#returning-posts-from-an-endpoint"}"><span class="${"icon icon-link"}"></span></a>Returning posts from an endpoint</h3>
<p>The next step is to actually get data from Markdown files, and return it in the API endpoint. We\u2019ll be leaning directly on <a href="${"https://vitejs.dev/"}" rel="${"nofollow"}">Vite</a> for that (the build tool that powers SvelteKit under the hood).</p>
<p>This is going to be a lot, but we\u2019ll break it down in a second.</p>
<p>Inside our <code>posts.json.js</code> file, we\u2019ll put the following code:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// posts.json.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> allPostFiles <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'../blog/*.md'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> iterablePostFiles <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>allPostFiles<span class="token punctuation">)</span>

  <span class="token keyword">const</span> allPosts <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    iterablePostFiles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>path<span class="token punctuation">,</span> resolver<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> postPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> metadata<span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> postPath<span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> sortedPosts <span class="token operator">=</span> allPosts<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>date<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>date<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> sortedPosts
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Whoa!</strong> Again, that might look like a lot, but when you consider it\u2019s actually <em>everything</em> we need to create an API endpoint to return <em>all</em> our site\u2019s posts, it\u2019s kind of remarkable how few lines that is.</p>
<p><strong>Let\u2019s go over what\u2019s happening in that code:</strong></p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit handles converting the response to JSON and setting the proper headers automatically.
`;
    }
  })}
<ul><li><code>import.meta.glob</code> is a Vite function. It imports any files that match the glob (wildcard string) provided\u2014in this case, all <code>.md</code> files inside <code>src/routes/blog</code>.<ul><li>That function returns an object where each file\u2019s relative path is the key, and the value is a \u201Cresolver\u201D function (my term; not official) that loads the file contents as a JavaScript promise. </li></ul></li>
<li>The <code>map</code> method is there to shape each file\u2019s data, so it\u2019s easier to work with on the front end. And since each item waits for a promise, we wrap it in an <code>await Promise.all</code>.<ul><li>Since we know the path will begin with <code>..</code> and end with <code>.md</code>, we can safely use <code>.slice(2, -3)</code> to remove those characters and end up with the route.</li></ul></li>
<li>Next, we sort the posts by descending date (since this is a blog, of course, and we\u2019ll want our newest posts showing first).<ul><li>Note that your posts will need a validly formatted <code>date</code> frontmatter property for the sorting to work\u2014i.e., something  <code>new Date()</code> can understand.</li></ul></li>
<li>Finally, we <code>return</code> the finished product as the <code>body</code> of our API response. (The 200 status code is implicit here, since we\u2019re successfully returning a <code>body</code>.) SvelteKit handles the conversion to JSON.</li></ul>
<p><strong>Let\u2019s try it out!</strong> Refresh your <code>/api/posts.json</code> path now, and you should see some <em>real</em> data!</p>
<p><img src="${"/images/post_images/sveltekit-posts-json.png"}" alt="${"The data from our posts is now coming through as JSON!"}"></p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit handles converting the response to JSON and setting the proper headers automatically.
`;
    }
  })}
<p>Even cooler: this endpoint will update automatically with each Markdown post we add!</p>
<h2 id="${"finishing-the-blog-index-page"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#finishing-the-blog-index-page"}"><span class="${"icon icon-link"}"></span></a>Finishing the blog index page</h2>
<p>Now that we have an endpoint for all our posts, building out our blog index page will be a piece of cake!</p>
<p>We <em>could</em> do the loading client-side, with a <code>fetch</code> call in an <code>onMount</code> function. That would work. But it would <em>also</em> result in a loading state with no visible content, which isn\u2019t a great user experience. So instead, let\u2019s use SvelteKit\u2019s built-in server-side rendering.</p>
<h3 id="${"server-side-rendering-with-load"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#server-side-rendering-with-load"}"><span class="${"icon icon-link"}"></span></a>Server-side rendering with <code>load</code></h3>
<p>Page and layout components can have a <a href="${"https://kit.svelte.dev/docs#loading"}" rel="${"nofollow"}"><code>load</code> function</a>, which runs <em>before</em> the component is created\u2014making it perfect for fetching API data, such as our blog posts.</p>
<p>Because it runs on the server, the <code>load</code> function is called from its own distinct <code>&lt;script&gt;</code> tag, differentiated with a <code>context=&quot;module&quot;</code> attribute:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// Runs before the component is created</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// This is the "normal" client-side script</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Other important things to know about the <code>load</code> function:</p>
<ul><li><strong>It has access to a few special arguments</strong> (including <code>url</code> and <code>params</code>, which contain contextual info about the request).</li>
<li><strong>It should return an object</strong>. Among other things, this can include a status code, and props for the  component to use.</li>
<li><strong>It runs both server- and client-side.</strong> That\u2019s mostly unimportant when prerendering to static files, as we are. Still, <code>load</code> shouldn\u2019t reference environment-specific things, like <code>window</code> or <code>process</code>.</li></ul>
<p>I already mentioned <code>url</code> and <code>params</code>, but one other argument the <code>load</code> function has access to is <code>fetch</code>, which allows the browser\u2019s <code>fetch</code> function to be used on the server. (Ordinarily, <code>fetch</code> is browser-only.)</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- src/routes/blog/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> fetch <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/posts.json'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> allPosts <span class="token operator">=</span> <span class="token keyword">await</span> posts<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">posts</span><span class="token operator">:</span> allPosts
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>That bit of server-side loading handles everything we need! Now we\u2019ve got a <code>posts</code> prop being passed to the component, and we can use it to loop over and render posts on our blog index page.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- src/routes/blog/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Our &#96;load&#96; function here</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> posts
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">posts </span><span class="token keyword">as</span> <span class="token language-javascript">post<span class="token punctuation">&#125;</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>path<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
          <span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">&#125;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      Published <span class="token language-javascript"><span class="token punctuation">&#123;</span>post<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>date<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The HTML in the above example is a bit simple (and doesn\u2019t properly account for a scenario in which there are no posts to display), but hopefully you get the gist. You may want to add other code, based on the frontmatter in your own blog posts. (One thing definitely missing is a featured image/image URL, but you could also have excerpts or other content as well.)</p>
<p><img src="${"/images/post_images/sveltekit-posts-list.png"}" alt="${"A list of our posts, each linked, on our /blog route."}"></p>
<h2 id="${"prerendering-with-the-static-adapter"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#prerendering-with-the-static-adapter"}"><span class="${"icon icon-link"}"></span></a>Prerendering with the static adapter</h2>
<p><strong>SvelteKit is server-rendered by default.</strong> That\u2019s great, because server-side rendering is generally better for performance, accessibility, and SEO. However, that also means static file prerendering (which is what we want) is opt-in.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit has a number of available adapters, which shape our project&#39;s build output based on how we&#39;d like to\xA0deploy. 
`;
    }
  })}
<p>You <em>can</em> <a href="${"https://kit.svelte.dev/docs#ssr-and-javascript-prerender"}" rel="${"nofollow"}">manually make any page prerendered</a>\u2014handy for things like an \u201Cabout\u201D or \u201Cfaq\u201D page that won\u2019t have any dynamic content. However, if we want our <em>entire</em> site to be statically pre-rendered, marking each and every page by hand would be an error-prone chore. So instead, we\u2019ll reach for SvelteKit\u2019s <a href="${"https://github.com/sveltejs/kit/tree/master/packages/adapter-static"}" rel="${"nofollow"}">static adapter</a>.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit has a number of available adapters, which shape our project&#39;s build output based on how we&#39;d like to deploy. 
`;
    }
  })}
<p>SvelteKit has many <a href="${"https://kit.svelte.dev/docs#adapters"}" rel="${"nofollow"}">adapters</a>, and comes pre-installed with one that will automatically detect and build properly for Netlify, Vercel, or Cloudflare Pages\u2014which is both handy and impressive! But for static pre-rendering, we want <code>adapter-static</code>.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i -D @sveltejs/adapter-static@next</code>`}<!-- HTML_TAG_END --></pre>
<p>Once installed, we have to make a very small change to our <code>svelte.config.js</code> file to use the static adapter. In fact, the only thing we actually have to do is change <code>adapter-auto</code> to <code>adapter-static</code>.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Replace the original &#96;adapter-auto&#96; line with this.</span>
<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">'@sveltejs/adapter-static'</span></code>`}<!-- HTML_TAG_END --></pre>
<p>You <em>can</em> supply further customization options if you want to (as an object passed to the <code>adapter()</code> function further down in the file), but the defaults are great for us, so there\u2019s no need. You can check out the <a href="${"https://github.com/sveltejs/kit/tree/master/packages/adapter-static"}" rel="${"nofollow"}">adapter-static readme</a> for more if you like.</p>
<hr>
<p>With our adapter installed and in use in our config file, every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that the site is now served as pre-rendered HTML.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `One of the great things about SvelteKit&#39;s static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
`;
    }
  })}
<p>One final note: <strong>you wouldn\u2019t <em>have</em> to use the static adapter at this point.</strong> You could just skip that part and go with the default adapter. That would allow you to deploy the site to Netlify, Vercel, or Cloudflare Pages, and the site would be server-rendered using serverless functions, instead of statically pre-generated.</p>
<p>Both would work great, and which to go with depends mainly on your site and its needs. I just bring it up because it\u2019s awesome that SvelteKit can completely transform from one thing to another simply by swapping out the adapter.</p>
<h2 id="${"optional-finishing-touches-and-extra-features"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#optional-finishing-touches-and-extra-features"}"><span class="${"icon icon-link"}"></span></a>Optional finishing touches and extra features</h2>
<p>At this point, our blog is up and running. You could take it and run with it in its current shape, and begin adding your own styling and customizations.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `The rest of this post will focus on possible enhancements and diving a little deeper into some aspects of SvelteKit.
`;
    }
  })}
<p>However, what we have is basic and there some extra enhancements we may want to make.</p>
<h3 id="${"add-dynamic-post-category-pages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-dynamic-post-category-pages"}"><span class="${"icon icon-link"}"></span></a>Add dynamic post category pages</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `You could think of a dynamic page as a wildcard route. Essentially, it&#39;s a template that processes a route as an\xA0argument.
`;
    }
  })}
<p>Many blogs use taxonomies like categories and tags to let the user sort and view posts. SvelteKit lets us accomplish this with dynamic pages.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `You could think of a dynamic page as a wildcard route. Essentially, it&#39;s a template that processes a route as an argument.
`;
    }
  })}
<p>Dynamic pages are useful because we might want one template file to handle any number of potential routes. In our case, we\u2019ll have one file to handle <em>any</em> <code>/blog/category/*</code> route, no matter what the <code>*</code> might be.</p>
<p>To start, if you don\u2019t already have some categories in your posts\u2019 frontmatter, it\u2019s a good idea to add some now. I did this, just for the sake of example:</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token comment">&lt;!--- 1.md --></span>
<span class="token hr punctuation">---</span>
categories: 
  <span class="token list punctuation">-</span> "numbers"
  <span class="token title important">- "odd"
<span class="token punctuation">---</span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token comment">&lt;!--- 2.md --></span>
<span class="token hr punctuation">---</span>
categories: 
  <span class="token list punctuation">-</span> "numbers"
  <span class="token title important">- "even"
<span class="token punctuation">---</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>To make a page dynamic, all we have to do is wrap its title in brackets</strong>. So, for categories, we\u2019ll add a <code>categories/[category].svelte</code> route in <code>src/routes/blog</code>.</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4C2} blog
    \u2517 \u{1F4C2} categories
      \u2517 \u{1F4DC} [category].svelte</code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The word <code>category</code> isn&#39;t special; it&#39;s just a variable. But as with any variable, it&#39;s good to name it semantically.
`;
    }
  })}
<p>Once you\u2019ve created that file, you may notice you can actually visit <code>/blog/category/</code> followed by anything, and you won\u2019t get a 404. The dynamic page handles <em>all</em> unmatched <code>/blog/category/</code> routes. The trick now is just to load the right content based on the route.</p>
<p>Just to get an idea of what we\u2019re working with, let\u2019s start with any JavaScript developer\u2019s best friend: <code>console.log</code>.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- [category].svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> params <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(Warning, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `The <code>params</code> and <code>url</code> arguments are brand-new to SvelteKit (they replace <code>page</code>). If you hit errors with them, run <code>npm update</code> to update SvelteKit.
`;
    }
  })}
<p>Notice if you load a blog category page now, you can see <code>params</code> in the browser console, as well as in the terminal where your local dev server is running:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token punctuation">&#123;</span> category: <span class="token string">'numbers'</span> <span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This confirms our <code>load</code> function is running both server- and client-side. The current route is called <code>params.category</code>, because <code>category</code> is what we named our dynamic page, and whatever category route we\u2019re visiting will be its value.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Also note that you won&#39;t see what you logged in the browser console if you hit an error; that&#39;s why we added the explicit 200 status, just for demo purposes.
`;
    }
  })}
<p>Knowing that the current <code>/blog/categories/*</code> route will be available as <code>params.category</code>, we can get to work. We\u2019ll use that, and our existing API endpoint, to filter posts:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- [category].svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> params<span class="token punctuation">,</span> fetch <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> currentCategory <span class="token operator">=</span> params<span class="token punctuation">.</span>category
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/posts.json'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> matchingPosts <span class="token operator">=</span> posts
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=></span> post<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>currentCategory<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">posts</span><span class="token operator">:</span> matchingPosts
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>I won\u2019t go into how to render the matching content, but it\u2019s pretty much the same as our blog index page. (In fact, you could easily create a component to handle listing posts, and reuse it in both places!)</p>
<p>It\u2019s probably a good idea to wrap that code in a <code>try</code>/<code>catch</code> block\u2014and for that matter, to anticipate situations where no posts will match the given category, and handle that properly in the UI. (An <code>{#if posts.length}</code> block with an <code>{:else}</code> should do the trick.)</p>
<p>Inside the <code>_post</code> template, listing a post\u2019s categories just requires grabbing the prop and looping over it:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- _post.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ... Other props here</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> categories<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- ...Post HTML here --></span>

<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> categories<span class="token punctuation">.</span>length<span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Posted in:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">categories </span><span class="token keyword">as</span> <span class="token language-javascript">category<span class="token punctuation">&#125;</span></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href="</span>/<span class="token attr-name">blog</span>/<span class="token attr-name">categories</span>/<span class="token language-javascript"><span class="token punctuation">&#123;</span>category<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>
            <span class="token language-javascript"><span class="token punctuation">&#123;</span>category<span class="token punctuation">&#125;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Finally, if you <em>really</em> wanted to go the extra mile, you could add an <code>index.svelte</code> file to <code>src/routes/blog/categories/</code>, to display <em>all</em> categories. I won\u2019t go into that here, since it\u2019s an additional feature that won\u2019t benefit all blogs, however.</p>
<h3 id="${"implement-page-transitions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#implement-page-transitions"}"><span class="${"icon icon-link"}"></span></a>Implement page transitions</h3>
<p>If you want to get fancy, adding a page transition in SvelteKit is pretty simple! Let\u2019s look at the code, then we\u2019ll go over each part of it.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- __layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> url <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> currentRoute <span class="token operator">=</span> url<span class="token punctuation">.</span>pathname

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        currentRoute
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ...Other imports here</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fade <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/transition'</span>

  <span class="token keyword">export</span> <span class="token keyword">let</span> currentRoute
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Other HTML here --></span>

<span class="token language-javascript"><span class="token punctuation">&#123;</span>#key currentRoute<span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name"><span class="token namespace">in:</span>fade=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">150</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">out:</span>fade=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">150</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span>key<span class="token punctuation">&#125;</span></span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(Warning, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `Again, the <code>url</code> argument is new to SvelteKit. Run <code>npm update</code> if you hit errors with it.
`;
    }
  })}
<ul><li>To start, in our layout, we\u2019ll need  <code>load</code> to grab the current route. We\u2019ll pass that as a prop named <code>currentRoute</code>, to be used by the component.</li>
<li>We\u2019ll use <code>fade</code> from the <a href="${"https://svelte.dev/tutorial/transition"}" rel="${"nofollow"}">Svelte transition</a> library as our transition, though you could choose another if you like. The main thing is just to add <code>delay</code> to the <code>in</code> transition, so it doesn\u2019t start before the old page is done transitioning out.</li>
<li>Finally, we\u2019ll wrap the page contents in a <a href="${"https://svelte.dev/tutorial/key-blocks"}" rel="${"nofollow"}"><code>#key</code> block</a>.</li></ul>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `A <code>#key</code> block takes an expression, and automatically re-renders its contents whenever that expression changes.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `A <code>#key</code> block takes an expression, and automatically re-renders its contents whenever that expression changes.
`;
    }
  })}
<p>In this case, that will be the current page route, so that we can re-render the page itself every time the route changes.</p>
<p><strong>That\u2019s all it takes!</strong> Transitions are an incredibly powerful part of Svelte, and the <code>svelte/transition</code> library offers several options besides <code>fade</code>. Feel free to play around with them.</p>
<h3 id="${"add-an-rss-feed"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-an-rss-feed"}"><span class="${"icon icon-link"}"></span></a>Add an RSS feed</h3>
<p>Remember, endpoints don\u2019t have to return JSON; they can return XML, too. This handy fact makes it dead simple to implement an RSS feed on our blog!</p>
<p>To start, create an <code>rss.xml.js</code> file in your <code>routes</code> folder, to make the RSS feed available at the route <code>/rss.xml</code>.</p>
<pre class="${"language-fs"}"><!-- HTML_TAG_START -->${`<code class="language-fs">\u{1F4C2} src
\u2517 \u{1F4C2} routes
  \u2517 \u{1F4DC} rss.xml.js</code>`}<!-- HTML_TAG_END --></pre>
<p>Inside that file, we\u2019ll use <code>import.meta.glob</code> again, and convert the result to XML.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Sadly, we can&#39;t use <code>fetch</code> in an endpoint, but now that we&#39;re using <code>import.meta.glob</code> in two places, we <em>could</em> abstract it to a helper function to cut down on repeated code.
`;
    }
  })}
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> siteURL <span class="token operator">=</span> <span class="token string">'https://your-domain.tld'</span>
<span class="token keyword">const</span> siteTitle <span class="token operator">=</span> <span class="token string">'Your site title here'</span>
<span class="token keyword">const</span> siteDescription <span class="token operator">=</span> <span class="token string">'Your site description here'</span>
  
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./blog/*.md'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>path<span class="token punctuation">,</span> resolver<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> slug <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>metadata<span class="token punctuation">,</span> slug <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">posts</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> posts<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>date<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span>
  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token string-property property">'Cache-Control'</span><span class="token operator">:</span> <span class="token string">'max-age=0, s-maxage=3600'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/xml'</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    body<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">posts</span><span class="token punctuation">)</span> <span class="token operator">=></span>
<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;?xml version="1.0" encoding="UTF-8" ?>
&lt;rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
&lt;channel>
&lt;title></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteTitle<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/title>
&lt;description></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteDescription<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/description>
&lt;link></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteURL<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/link>
&lt;atom:link href="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteURL<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/rss.xml" rel="self" type="application/rss+xml"/>
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>posts
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;item>
&lt;guid isPermaLink="true"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteURL<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>post<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/guid>
&lt;title></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>post<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/title>
&lt;link></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>siteURL<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>post<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/link>
&lt;description></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>post<span class="token punctuation">.</span>excerpt<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/description>
&lt;pubDate></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&lt;/pubDate>
&lt;/item></span><span class="token template-punctuation string">&#96;</span></span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">
&lt;/channel>
&lt;/rss>
</span><span class="token template-punctuation string">&#96;</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Please note that the above code block will need some modification!</strong> The example above is more or less straight from this site, and may not be the right shape for your needs. At the very least, you\u2019ll need to replace the URL and text placeholders, but you may also need to update the routes and the post frontmatter properties being referenced.</p>
<p>I pulled my example from <a href="${"https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"}" rel="${"nofollow"}">this guide</a> and <a href="${"https://scottspence.com/posts/make-an-rss-feed-with-sveltekit"}" rel="${"nofollow"}">this one</a>, for reference. And if you want to make sure you\u2019ve done it correctly, here\u2019s an <a href="${"https://codebeautify.org/xmlviewer"}" rel="${"nofollow"}">online XML validator</a>.</p>
<h3 id="${"add-heading-links-with-rehype"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-heading-links-with-rehype"}"><span class="${"icon icon-link"}"></span></a>Add heading links with rehype</h3>
<p>It\u2019s nice to let users link directly to a section of a post. Manually adding links to all our headings would be tedious, however, and goes against the point of writing in Markdown.</p>
<p>Luckily, mdsvex allows us to use many <a href="${"https://github.com/rehypejs/rehype"}" rel="${"nofollow"}">rehype</a> plugins to add extra features to markdown processing, and so we can make this all happen automatically with just a bit of config adjustment.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Rehype is an HTML parser, and not specific to Svelte or mdsvex; it&#39;s commonly used in a wide range of projects.
`;
    }
  })}
<p>There are two rehype plugins we\u2019ll want specifically:</p>
<ul><li><code>rehype-slug</code>, which automatically adds IDs to headings;</li>
<li><code>rehype-autolink-headings</code>, which (as you can guess from the name), automatically adds links to our headings.</li></ul>
<p>Install them both like so:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i rehype-slug rehype-autolink-headings</code>`}<!-- HTML_TAG_END --></pre>
<p>Then we\u2019ll pop open our <code>svelte.config.js</code> file, import our two new rehype plugins, and add them to the <code>mdsvex</code> config options object, like so:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// svelte.config.js</span>
<span class="token comment">/* Other imports here */</span>
<span class="token keyword">import</span> rehypeSlug <span class="token keyword">from</span> <span class="token string">'rehype-slug'</span>
<span class="token keyword">import</span> rehypeAutolinkHeadings <span class="token keyword">from</span> <span class="token string">'rehype-autolink-headings'</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Other config properties here */</span>

  <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">mdsvex</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        rehypeSlug<span class="token punctuation">,</span>
        rehypeAutolinkHeadings<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Note that the plugins <strong>must</strong> go in that order! <code>rehypeSlug</code> adds IDs to our headings, and <code>rehypeAutolinkHeadings</code> only works on headings that have IDs.</p>
<p>(<em>Fun fact: I discovered these two were in the wrong order on <em>this</em> site while writing this, when I suddenly realized it was only half working. Writing technical posts is a great way to find out how much you missed.</em>)</p>
<p>With that in place, restart the dev server. Now pop open the inspector and check out an <code>h2</code> through <code>h6</code> generated from Markdown, and we\u2019ll see some additions:</p>
<p><img src="${"/images/post_images/sveltekit-rehype.png"}" alt="${"The headings in our blog posts now have links to them, with icon elements inside."}"></p>
<p>However, we\u2019ll need to add a bit of styling to make the links show up properly.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The <code>.icon.icon-link</code> class is a <a href="${"https://fontawesome.com/"}">Font Awesome</a> convention, so it doesn&#39;t mean or do anything in our project by default.
`;
    }
  })}
<p>How you choose to handle this is personal preference, but this block of Sass should basically do the trick:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token punctuation">:</span><span class="token function">where</span><span class="token punctuation">(</span>h2<span class="token punctuation">,</span> h3<span class="token punctuation">,</span> h4<span class="token punctuation">,</span> h5<span class="token punctuation">,</span> h6<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.icon-link </span><span class="token punctuation">&#123;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    
    <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">&#123;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'#'</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> -1ch<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover .icon-link::before </span><span class="token punctuation">&#123;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That CSS will make a pound sign (or hash, or \u201Coctothorpe,\u201D if you\u2019re fancy) appear whenever the user hovers on a heading with a <code>.icon-link</code> in it:</p>
<p><img src="${"/images/post_images/sveltekit-rehype-css.png"}" alt="${"A pound symbol appears to the left of a hovered heading."}"></p>
<p>Thanks to how CSS treats pseudo elements, that icon is fully clickable as part of the link, to navigate directly to the heading in question.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Please be aware that while this example is ok, hovering is not an intuitive gesture on touchscreen devices. It&#39;s probably better to <em>always</em> show some indication of the link.
`;
    }
  })}
<p>You could <em>also</em> add some JavaScript to handle automatically copying the link to the clipboard (probably with some JavaScript inside a Svelte component\u2019s <code>onMount</code> function), but I\u2019ll leave that detail up to you. For now, our links are at least present and working, even if they might not be ideal yet.</p>
<h3 id="${"add-autoprefixer-with-postcss"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-autoprefixer-with-postcss"}"><span class="${"icon icon-link"}"></span></a>Add autoprefixer with PostCSS</h3>
<p>Since we\u2019re already using <code>svelte-preprocess</code>, adding <a href="${"https://www.npmjs.com/package/autoprefixer"}" rel="${"nofollow"}">autoprefixer</a> to our toolchain is as simple as installing it, and adding it in our config file:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">npm</span> i -D autoprefixer</code>`}<!-- HTML_TAG_END --></pre>
<p>Then add it in the <code>sveltePreprocess()</code> function arguments:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// svelte.config.js</span>

<span class="token comment">/* Other imports here */</span>
<span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">'autoprefixer'</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Other config options here */</span>
  <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">sveltePreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>autoprefixer<span class="token punctuation">]</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token comment">/* Other sveltePreprocess options here, like SCSS */</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/* Other preprocessors here, like mdsvex */</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That\u2019s all we need to do! Autoprefixer is now working automatically to prefix any CSS properties that might need it for maximum backwards compatibility with other browsers.</p>
<p>As an added bonus, if you want to add any <em>other</em> PostCSS plugins, you can now do so in just the same way.</p>
<h3 id="${"add-page-head-meta-tags"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-page-head-meta-tags"}"><span class="${"icon icon-link"}"></span></a>Add page head meta tags</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Svelte has a <code>&lt;svelte:head&gt;</code> component for adding HTML to the page head from anywhere.
`;
    }
  })}
<p>Ideally, we\u2019ll probably want to set up some stuff for the <code>&lt;head&gt;</code> on our various pages. For pages in general, but posts especially, it\u2019s important to have the right <code>title</code> attributes, Open Graph info, share images, etc.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Svelte has a <code>&lt;svelte:head&gt;</code> component for adding HTML to the page head from anywhere.
`;
    }
  })}
<p>Add one somewhere in <code>_post.svelte</code> (I like to put it just before the HTML, personally), and let\u2019s add a title inside.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- _post.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>My blog - <span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>You should now see the title showing up properly in the browser bar.</p>
<p><strong>There are many other properties you might want to add here</strong>, <em>especially</em> if you\u2019re trying to optimize your posts for share-ability. I won\u2019t go into any more detail here, but it\u2019s worth verifying all your pages and posts look good when shared with Open Graph checker tools (many are available online).</p>
<p>At this point, we should probably go through our pages and add <code>&lt;title&gt;</code> tags, etc. to them as well. For example:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token comment">&lt;!-- about.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>About - Ricky Januari<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- ...HTML here --></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Note also that SvelteKit offers several other similar elements, like <code>&lt;svelte:window&gt;</code> and <code>&lt;svelte:body&gt;</code>, where we need to tap into parts of our site or app normally outside the boundaries of our components.</p>
<h3 id="${"improve-the-posts-api-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#improve-the-posts-api-endpoint"}"><span class="${"icon icon-link"}"></span></a>Improve the posts API endpoint</h3>
<p>The posts API is functional, but it can be improved in several ways.</p>
<p>For starters, we\u2019ll definitely want to put the code we just wrote into a <code>try</code>/<code>catch</code> block that returns the proper status code when things go wrong. Some refactoring might also be in order. We\u2019ll also probably want to add some other extra features to this API route eventually. </p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Our API is currently missing pagination options, which could be very needed depending on the number of\xA0posts.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Our API is currently missing pagination options, which could be very needed depending on the number of\xA0posts.
`;
    }
  })}
<p>Another possible future enhancement would be adding the post\u2019s content to the returned JSON, which we don\u2019t do currently. The \u201Cresolver\u201D function offers a <code>default.render</code> method for that, if you so choose.</p>
<p>Finally, you could build in some post filtering, but it might be better to build out a dynamic endpoint for that. The <a href="${"https://kit.svelte.dev/docs#routing-advanced-rest-parameters"}" rel="${"nofollow"}">SvelteKit docs section on Rest parameters</a> is worth a look as far as that goes.</p>
<h3 id="${"customize-the-error-page"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#customize-the-error-page"}"><span class="${"icon icon-link"}"></span></a>Customize the error page</h3>
<p>What you\u2019re looking at when you hit an error is SvelteKit\u2019s built-in error component. </p>
<p>However, just like we can provide our own <code>__layout.svelte</code> file, we can <em>also</em> provide an <code>__error.svelte</code> file, to template and format any errors our users might run into. </p>
<p>I won\u2019t go into detail here, but you can check the official <a href="${"https://kit.svelte.dev/docs#layouts-error-pages"}" rel="${"nofollow"}">Svelte docs error pages entry</a> for more info.</p>
<h3 id="${"preload-routes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#preload-routes"}"><span class="${"icon icon-link"}"></span></a>Preload routes</h3>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit ships with two functions for preloading data in the background: <code>prefetch</code>, and <code>prefetchRoutes</code>.
`;
    }
  })}
<p>SvelteKit is already fast, and when we pre-render our HTML like we are via the static adapter, it\u2019s going to be blazing. But we can actually push the performance <em>even further</em> with SvelteKit\u2019s built-in preloading.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `SvelteKit ships with two functions for preloading data in the background: <code>prefetch</code>, and <code>prefetchRoutes</code>.
`;
    }
  })}
<p>To use them, just import them in a page or layout (our global layout file might be a good choice):</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> prefetch<span class="token punctuation">,</span> prefetchRoutes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `<code>$app</code> contains several modules available in SvelteKit for things you might need in an app, like <code>env</code> and <code>paths</code>, along with <code>navigation</code>. See the <a href="${"https://kit.svelte.dev/docs#modules"}">modules docs</a> for full details.
`;
    }
  })}
<p>The difference between the two is:</p>
<ul><li><code>prefetch</code> preloads a single route;</li>
<li><code>prefetchRoutes</code> preloads <em>all</em> routes.</li></ul>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> prefetch<span class="token punctuation">,</span> prefetchRoutes <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span>

  <span class="token function">prefetch</span><span class="token punctuation">(</span><span class="token string">'/blog'</span><span class="token punctuation">)</span> <span class="token comment">// Loads the blog page in the background</span>

  <span class="token function">prefetchRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Loads ALL routes in the background</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Because <code>prefetchRoutes</code> grabs <em>all</em> the site\u2019s data behind the scenes, we should use it cautiously and judiciously. We don\u2019t want to force users to download megabytes of data presumptively. That could very well cost them real money, for pages they might not even look at.</p>
<h3 id="${"add-anchor-options"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#add-anchor-options"}"><span class="${"icon icon-link"}"></span></a>Add anchor options</h3>
<p>Speaking of preloading: SvelteKit offers a slightly less greedy version of it, as one of its <a href="${"https://kit.svelte.dev/docs#anchor-options"}" rel="${"nofollow"}">anchor options</a>.</p>
<p>Anchor options are special, SvelteKit-specific attributes you can add to <code>&lt;a&gt;</code> anchor tags. There are three:</p>
<ul><li><code>&lt;a sveltekit:prefetch&gt;</code> causes the link to begin preloading as soon as the user <em>hovers</em>, rather than waiting for a click, saving some milliseconds.</li>
<li><code>&lt;a rel=&quot;external&quot;&gt;</code> signals to SvelteKit that the link in question is <em>not</em> part of our SvelteKit app, and the router shouldn\u2019t try to handle it.</li>
<li><code>&lt;a sveltekit:noscroll</code>&gt; prevents SvelteKit from resetting the scroll position to the top of the new page. This is usually undesirable on websites, but may be more intuitive in some app situations.</li></ul>
<h2 id="${"conclusion"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conclusion"}"><span class="${"icon icon-link"}"></span></a>Conclusion</h2>
<p>This has been a long post, and we\u2019ve covered a lot. I hope this has been a valuable resource. Even if you <em>still</em> aren\u2019t sold on SvelteKit (or at least, not as a static site generator), hopefully this post has given you an idea of the broad capabilities of SvelteKit, and maybe even given you some ideas of how you might use it yourself.</p>`;
});
