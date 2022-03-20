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
  default: () => Goodbye_wordpress,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "Goodbye, WordPress",
  "date": "2021-02-01",
  "updated": "2021-02-02",
  "categories": ["wordpress", "javascript", "vue"],
  "coverImage": "gw.png",
  "coverWidth": 128,
  "coverHeight": 72,
  "excerpt": "WordPress was potentially the most impactful and empowering technology I've yet encountered. It transformed my career path and enabled me to do anything I wanted at every point in my journey. So why leave it now?"
};
const Goodbye_wordpress = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This post mentions Gridsome frequently, but <a href="${"https://rickyjanuari.com/blog/converting-from-gridsome-to-sveltekit"}">this site is actually built with SvelteKit now</a>. It looks and works mostly the same, but the underlying tech is a bit different.
`;
    }
  })}
<p>I was first introduced to WordPress pretty early in my design career. I was a fledgling professional designer working at a small branding agency when I got my first glimpse of everything WordPress could be via the impressive <a href="${"https://www.elegantthemes.com/gallery/divi/"}" rel="${"nofollow"}">Divi theme</a>.</p>
<p>Though I knew the basics of HTML and CSS at the time (which allowed me to implement some customizations beyond what the theme provided), Divi offered to make previously impossible things achievable. The freedom was intoxicating.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `WordPress empowered me to bring my ideas to life in a way no platform ever had\xA0before.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `WordPress empowered me to bring my ideas to life in a way no platform ever had\xA0before.
`;
    }
  })}
<p>Things like loading and scroll effects, parallax, sliders, contact forms, project galleries, and all kinds of other features that were previously locked doors as a nascent coder suddenly became as easy as configuring some options in a graphical user interface (GUI).</p>
<p>I got a lot of mileage out of my site while it was on WordPress. At first, it was pure Divi, but soon, I expanded into a child theme with custom PHP templates. As time went on and I grew as a developer, I needed to reach for Divi\u2019s features less and less, until eventually I abandoned Divi and build my own WordPress theme from scratch. (It\u2019s no longer live of course, but there\u2019s a <a href="${"/blog/new-site-new-theme-for-2018"}">post about my theme here</a>.)</p>
<p>Finally, last year (2020), I converted to a headless site, with WordPress on the back end and Gridsome on the front. (I wrote about that process in <a href="${"/blog/a-new-headless-site-with-gridsome/"}">this post</a>.)</p>
<p>At the time, I made the decision to go headless because I wanted to keep a foot in the WordPress world, for reasons laid out in previously mentioned post. But to summarize: I wanted the best of both worlds. I didn\u2019t want to go full static, but giving up WordPress entirely wasn\u2019t really a thought for me then, either, because having a database and all my content (especially images) still represented value.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Fast-forward several months, and I&#39;ve come to the inevitable conclusion that, in the case of this, my personal website and (occasional) blog, WordPress does not represent value so much as tech debt.
`;
    }
  })}
<h2 id="${"why-move-why-now"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#why-move-why-now"}"><span class="${"icon icon-link"}"></span></a>Why move? Why now?</h2>
<p>My personal site has been on WordPress for somewhere around the last 6\u20137 years. Toward the beginning of that time, the cost of hosting and maintaining a WordPress site carried enough value that it was a no-brainer; the cost was trivial compared to what WordPress unlocked for me.</p>
<p>Later, as a Flywheel/WP Engine employee and a more seasoned professional developer, I didn\u2019t really <em>need</em> WordPress anymore, but I had the luxury of hosting as an employee perk. WordPress was always the right price because it was free.</p>
<p>But now that I\u2019ve moved on from that job, I\u2019m forced to consider what it actually costs to host WordPress\u2014not just monetarily (although that is a large factor), but in terms of maintenance, overhead, and everything else that goes along with the stack. Headless isn\u2019t simple, after all; it\u2019s a little like having two websites to worry about instead of just one, and while there are definitive advantages to that approach, everything is also a little more complicated in that world.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The answer for me is: no; WordPress isn&#39;t worth it anymore in the case of my specific needs and\xA0wants.
`;
    }
  })}
<p>The real question at the end of that mental calculation is: does WordPress\u2019s value outweigh its cost? Is it worthwhile, just to have a headless back-end for a website that I don\u2019t update with any particular frequency?</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `The answer for me is: no; WordPress isn&#39;t worth it anymore in the case of my specific needs and wants.
`;
    }
  })}
<p>I thought about taking the WordPress side of the site to some cheap-o $5/month hosting. I tried out <a href="${"https://spinupwp.com/"}" rel="${"nofollow"}">SpinupWP</a>, and liked it a lot, but not enough to justify the cost of one single site. (I\u2019d definitely use it if I had multiple client sites to host, though.)</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Eventually, I came to the conclusion that I just want things simple, and headless WordPress is not simple.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Eventually, I came to the conclusion that I just want things simple, and headless WordPress is not\xA0simple.
`;
    }
  })}
<p>Again: that doesn\u2019t mean WordPress is bad. It\u2019s not. (And while we\u2019re near the topic: neither is PHP. That joke can just die, please.) This just means that of the zillion things WordPress is and is capable of, either I\u2019m not doing them, or doing them WordPress\u2019s way isn\u2019t personally worth the tradeoff to me, and for my unique set of needs and goals.</p>
<h3 id="${"an-aside-on-wordpresss-trajectory-and-future"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#an-aside-on-wordpresss-trajectory-and-future"}"><span class="${"icon icon-link"}"></span></a>An aside on WordPress\u2019s trajectory and future</h3>
<p>There\u2019s an interesting story here about how WordPress, in many ways, made its name\u2014rightfully\u2014as the democratizer of the web. Anybody could get a website and set it up to do pretty much whatever they wanted with WordPress. And if you just wanted that to be a simple blog, hey, even better! You can host it for free on WordPress.com.</p>
<p>But as time goes on, I\u2019ve noticed that it seems like the <em>hosting</em> story of WordPress has evolved a lot\u2014first for the better, and now\u2026maybe not as much.</p>
<p>In the early days (let\u2019s say from WordPress\u2019s origins to around the early 2010s), it could be very difficult to self-host WordPress. Setting up the requisite server software was relegated to relatively few very technical people.</p>
<p>Then, managed WordPress hosting blew up, and companies like WP Engine and Flywheel (RIP) made entering the WordPress space <em>easier</em> than it had ever been before\u2014but also arguably more expensive.</p>
<p>Don\u2019t get me wrong; that\u2019s fair. Managed WordPress hosting exists\u2014and the companies selling it are succeeding despite its price tag\u2014because it\u2019s valuable. They take care of some very difficult things for you, and that\u2019s worth the price in a lot of cases.</p>
<p>But the price tag of WordPress hosting generally assumes that your site is <em>worth</em> that to you. WordPress hosting has become <em>costly</em> because it wants your key, important businesses to run on WordPress, and in that pursuit, I worry that WordPress has begun squeezing the side projects and personal blogs out of the market.</p>
<p>Even GoDaddy starts at $10 per month; most other managed hosts, that would be considered a step above that, aren\u2019t selling it for less than about $15\u201330 per month (even WordPress.com will charge you at least $25 per month if you want SFTP access), and that price tag is <em>not</em> cheap for a simple personal website or side project.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `There&#39;s an argument to be made that Jamstack companies like Netlify and Vercel are succeeding because they&#39;re filling a gap that WordPress just\xA0isn&#39;t. \u2026WordPress, for all its myriad benefits, is definitely <em>not</em> the choice if you just want a random side project to live on the web, forever, for minimal personal\xA0cost.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `There&#39;s an argument to be made that Jamstack companies like Netlify and Vercel are succeeding because they&#39;re filling a gap that WordPress just\xA0isn&#39;t.
`;
    }
  })}
<p>Granted, the tech hurdle is higher\u2014not just anybody can code up a static site, and that\u2019s not to be discounted\u2014but I can have a live Jamstack site on the web for <em>absolutely free</em> any time I want with Netlify, et al. </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `WordPress, for all its myriad benefits, is definitely <em>not</em> the choice if you just want a random side project to live on the web, forever, for minimal personal cost.
`;
    }
  })}
<p>As I write this, WP Engine and, no doubt, many other hosts are working on the headless WordPress story, and figuring out how to empower that tech stack and solve its problems in the same way they solved WordPress\u2019s. I have no doubt they\u2019ll come forward with something very compelling that will meet a great many customers\u2019 needs, but I also have no doubt it won\u2019t be cheap\u2014certainly not as cheap as what the Jamstack is currently offering. And I think that will make many more people ask the same question I asked, and come to the same conclusion; WordPress just won\u2019t continue to be worth it for everyone all the time.</p>
<h2 id="${"so-whats-the-alternative"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#so-whats-the-alternative"}"><span class="${"icon icon-link"}"></span></a>So what\u2019s the alternative?</h2>
<p>When this site was headless WordPress, the front-end was already built in <a href="${"https://gridsome.org/"}" rel="${"nofollow"}">Gridsome</a>, a Vue-based static site generator that could be fairly described as Vue\u2019s equivalent of <a href="${"https://www.gatsbyjs.com/"}" rel="${"nofollow"}">Gatsby</a>.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `A <b>static site generator</b> (or SSG) is a tool that takes input of some kind\u2014maybe Markdown files, maybe JSON from an API, or maybe even a combination of different data sources\u2014and turn it all into a traditional, static HTML website. This allows the site to be hosted cheaply and easily on a CDN-backed host for optimum performance.
`;
    }
  })}
<p>While it would\u2019ve certainly been possible to just abandon the headless formula and go back to good ol\u2019 solo WordPress, that wasn\u2019t really an option to me. I\u2019d lose too much work that had gone into this site already, and honestly, I wasn\u2019t interested in abandoning the modern dev experience that a JavaScript-based framework offers. I\u2019m not making any value statements here, but to me:</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Authoring front-end code in Markdown and Vue just feels nicer than working with the block editor and PHP templates.
`;
    }
  })}
<p>(No knock on PHP. I still enjoy it when I get the chance to dive back into those waters, like playing an old video game I have fond memories of. But it\u2019s not my first choice anymore.)</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Authoring front-end code in Markdown and Vue just feels nicer than working with the block editor and PHP\xA0templates.
`;
    }
  })}
<p>You might ask: <strong>so if you\u2019re cutting out WordPress, where does the content come from?</strong></p>
<p>Gridsome, along with many other static site generators, has the ability to generate content from Markdown files. Markdown is a very nice way to write, and while it certainly misses some of the conveniences of authoring posts in WordPress\u2019s block editor (AKA Gutenberg), it also comes with a lot of upside.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If you&#39;re not familiar with Markdown: it&#39;s a simple way of authoring formatted text that&#39;s much closer to natural typing than HTML. There&#39;s a pretty neat <a rel="${"external"}" href="${"dillinger.io/"}">Markdown playground here</a> that covers the general syntax.
`;
    }
  })}
<p>The front end of this site was already using Markdown to create content with its projects; each project is a Markdown file with the project\u2019s details. Here\u2019s an example project Markdown file, just to get general the idea across on how Gridsome scrapes content from files and converts it into a content type:</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: My Awesome Project
featuredMedia: projects/image.png
category: design + illustration
summary: This project was awesome</span>
<span class="token punctuation">---</span></span>
 
The project content Markdown would go here. Neato!</code>`}<!-- HTML_TAG_END --></pre>
<p>Any Markdown files in the <code>/projects</code> directory are processed into content for the <a href="${"/projects"}">projects page</a>, using just a bit of config setup that directs Gridsome to the folder where it can find project files, and what Vue template(s) to render them with:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token comment">//gridsome.config.js</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'@gridsome/source-filesystem'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// Where Gridsome looks for .md files to convert:</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'./src/projects/*.md'</span><span class="token punctuation">,</span>
      <span class="token comment">// What we'll call this content type:</span>
      <span class="token literal-property property">typeName</span><span class="token operator">:</span> <span class="token string">'project'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">templates</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">project</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token comment">// The dynamic path for each project</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/projects/:title'</span><span class="token punctuation">,</span>
      <span class="token comment">// What Vue component is used to render each project</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">'src/templates/single_project.vue'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><em>The above config code tells Gridsome how to convert Markdown files to HTML content. Other SSGs, like <a rel="${"external"}" href="${"11ty.dev"}">Eleventy</a> or Gatsby, work similarly.</em></p>
<p>Finally, the template file for rendering the data collected from the Markdown files (the <code>single_project.vue</code> file seen above, simplified here just to communicate the general idea):</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- The Vue template --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>\u200Btemplate</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>&#123;&#123; project.title &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>&#123;&#123; project.category &#125;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project.featuredMedia<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>project.content<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><em>(Not pictured: there\u2019s also a GraphQL query to grab the currently viewed project. I just didn\u2019t show that for the sake of simplicity.)</em></p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This site has been updated since that version, and no longer features individual project pages or markdown files.
`;
    }
  })}
<hr>
<p>So moving all my WordPress posts to Markdown files and abandoning the database altogether didn\u2019t seem like that much of a leap; the pieces were all there already. (<em>I was only half-right in that assessment; more on that in a bit</em>.) And I liked the idea of working with a purely file- and code-based site a lot.</p>
<p>Having all your content hosted in the repository along with your files means that search-and-replace is easy, and can be done in your text editor, rather than via MySQL or WP-CLI. It also means anybody can contribute a pull request to correct mistakes or provide context. Plus, previewing posts as they\u2019re being written was always a problem with headless. I\u2019m sure you could do some tricky things to make it possible, but none of them were as easy as simply spinning up a local dev server and writing in a Markdown file, watching your post auto-refresh in the browser every time you save.</p>
<p>But most importantly for me: it means I no longer even need a database. MySQL need not be a part of the stack any longer, because everything I have on the site is in a <code>.md</code> file.</p>
<p>When I was initially converting this site to headless, I didn\u2019t go full static at the time for two reasons:</p>
<ol><li>I liked having WordPress\u2019s REST API to query for searches; and</li>
<li>Exporting WordPress posts as Markdown is somewhere between not easy and painstakingly tedious.</li></ol>
<p>#1 wasn\u2019t really enough value to keep WordPress around, even if there weren\u2019t other alternatives in the Jamstack world. But #2 proved to be the largest stumbling block, so to speak\u2026</p>
<h2 id="${"the-challenges-of-exporting-wordpress-content"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-challenges-of-exporting-wordpress-content"}"><span class="${"icon icon-link"}"></span></a>The challenges of exporting WordPress content</h2>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `This miraculous little CLI tool takes your WordPress export XML file, and not only converts each piece of content to Markdown\u2014complete with frontmatter!\u2014but can also scrape your site for all the images in the content and neatly download\xA0them.
`;
    }
  })}
<p>It turns out that, while WordPress offers a content export tool by default, it\u2019s highly limited in what it can do (i.e., it spits out XML). WordPress, naturally, isn\u2019t strongly incentivized to help you move your content to non-WordPress platforms, so their exporter is only designed to work with WordPress (if at all; it\u2019s not particularly reliable in my experience).</p>
<p>I tried a few tools, including a seemingly abandoned Gatsby plugin, and even considered converting my posts by hand before I came across <a href="${"https://github.com/lonekorean/wordpress-export-to-markdown"}" rel="${"nofollow"}">this GitHub repo</a> with a with a Node CLI tool called <code>wordpress-export-to-markdown</code>. (Thanks to the author for jumping in a Twitter thread where I was griping about how hard this whole thing is!)</p>
<p>This miraculous little CLI tool takes your WordPress export XML file, and not only converts each piece of content to Markdown\u2014complete with frontmatter!\u2014but can also scrape your site for all the images in the content and neatly download them.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Frontmatter is how metadata is handled in Markdown. You might have noticed it in the project file example above. Information such as publish date, post title, categories and tags is all typed out in a comment-like block (technically YAML) at the top of the file. Frontmatter isn&#39;t part of the main post content, but its data is accessible for display or filtering purposes.
`;
    }
  })}
<p>While I had a few small hiccups with it (mostly not really the tool\u2019s fault), the biggest was my custom blocks. The info on what a custom block should look like is <em>not</em> stored in the database; instead, there\u2019s just some text like this:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;!-- wp:block-lab/block_name_here --&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p>WordPress apparently matches that line from the database to the PHP file that renders its contents at run time, rather than having the HTML for the block stored in the database as it would with typical blocks, like headings and text. (As you can infer, I\u2019m using the Block Lab plugin for my custom blocks here. I\u2019m not sure if this is a Block Lab-specific problem, or if this is the case for <em>any</em> custom block.)</p>
<p>So long story short: <code>wordpress-export-to-markdown</code> is a phenomenal tool that I\u2019d highly recommend to anybody looking to export WordPress content as Markdown. But WordPress doesn\u2019t provide enough info in its XML export to know how to render a custom block, so the comment (and block, and its contents) are simply omitted from the output.</p>
<p>That meant I had to go through each of my posts, and manually insert every single custom block that was missing, along with its contents.</p>
<p>Fortunately, I only have like 20 posts on this site (over the course of like seven years\u2014oof), so the process, while tedious, only took me an evening or two.</p>
<p>Also fortunately: I like my current solution to custom blocks better anyway.</p>
<h2 id="${"handling-images-without-wordpress"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#handling-images-without-wordpress"}"><span class="${"icon icon-link"}"></span></a>Handling images without WordPress</h2>
<p>One of the amazing things that WordPress does for you, for free and out of the box, is generate multiple image sizes and serve your content images with responsive source sets. This means users always load the appropriate image size for their device, which is a big benefit to both user experience and performance. If you\u2019re using Jetpack, you also get your images (optionally) loaded from WordPress.com\u2019s global CDN servers for faster load times.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Gridsome ships with a <code>g-image</code> component that handles loading appropriately sized images, <em>and</em> goes a step further with automatic lazy\xA0loading.
`;
    }
  })}
<p>Moving away from WordPress means those benefits are gone. Fortunately, Gridsome ships with a <code>&lt;g-image&gt;</code> component that handles loading appropriately sized images, <em>and</em> goes a step further with automatic lazy loading. And when you\u2019re deploying on Netlify, you have a CDN already, so that\u2019s all sorted.</p>
<p>There <em>is</em> the matter of getting the images you need without the ones you don\u2019t (since your <code>wp-content</code> folder will be full of extraneous resized images alongside the originals). Scraping all the original images from the WordPress site was fairly easy thanks to the <code>wordpress-export-to-markdown</code> tool mentioned above (although it <em>did</em> miss a few for some reason. No big deal, but something to watch out for). Beyond that, a bit of RegEx in a search-and-replace over the Markdown files, and I was in business.</p>
<p>A couple of other considerations around images, though:</p>
<ul><li><p><strong>All your images need to live in your repo with this approach.</strong> I don\u2019t have enough (and they aren\u2019t large enough) that it\u2019s a problem, but that might be an issue for some sites.</p></li>
<li><p><strong>Build times balloon with lots of images.</strong> Netlify is free to use up to a certain number of build minutes, and the only times I\u2019ve gotten close were when I was doing regular updates on this site. (Thankfully, there\u2019s a <a href="${"https://github.com/edm00se/netlify-plugin-gridsome-cache"}" rel="${"nofollow"}">Gridsome Cache Netlify plugin</a> to prevent unnecessary duplicate image processing.</p></li></ul>
<h2 id="${"building-with-vue-components-in-markdown"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#building-with-vue-components-in-markdown"}"><span class="${"icon icon-link"}"></span></a>Building with Vue components in Markdown</h2>
<p>Among Gridsome\u2019s library of plugins is a particularly delightful one called <a href="${"https://gridsome.org/plugins/@gridsome/vue-remark"}" rel="${"nofollow"}">Vue Remark</a>. </p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Vue Remark allows you to simply drop Vue components into Markdown files anywhere they&#39;re\xA0needed.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Vue Remark allows you to simply drop Vue components into Markdown files anywhere they&#39;re\xA0needed.
`;
    }
  })}
<p>This means I can still have the functionality of all my custom blocks even while I\u2019m writing posts in Markdown!</p>
<p>Vue Remark allows you to simply drop Vue components into Markdown files anywhere they\u2019re needed.</p>
<p>Here\u2019s an example:</p>
<pre class="${"language-markdown"}"><!-- HTML_TAG_START -->${`<code class="language-markdown">
<span class="token title important"><span class="token punctuation">#</span> Some generic Markdown</span>
 
A paragraph <span class="token italic"><span class="token punctuation">_</span><span class="token content">also</span><span class="token punctuation">_</span></span> using <span class="token italic"><span class="token punctuation">_</span><span class="token content">Markdown</span><span class="token punctuation">_</span></span>.
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SomeVueComponent</span> <span class="token attr-name">props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>whatever<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Use components where needed!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SomeVueComponent</span><span class="token punctuation">></span></span>
 

<span class="token title important"><span class="token punctuation">##</span> Back to Markdown!</span>
 
<span class="token italic"><span class="token punctuation">_</span><span class="token content">Neat, huh?</span><span class="token punctuation">_</span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>All the custom blocks I had on WordPress have now been faithfully recreated in simple Vue single-file components, available to import and use at will in these posts.</p>
<p>The authoring experience is incredibly nice, too; since Gridsome runs on a local Node dev server with auto-refresh, I can simply start the server, navigate to the post, and go to work. Every time I hit <code>\u2318 + s</code> I see my updates in the browser, fully styled, in a matter of milliseconds.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Nuxt has a similar feature available via installable module, but even goes so far as to allow you to edit the Markdown file by editing the text in the browser, which is a type of dark witchcraft I&#39;m not even sure I can handle.
`;
    }
  })}
<h2 id="${"other-considerations"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#other-considerations"}"><span class="${"icon icon-link"}"></span></a>Other considerations</h2>
<p>Remember that authoring content via Markdown means that handling drafts is something you need to do on your own; there isn\u2019t a \u201Cpublish\u201D button anymore. (Though you won\u2019t lose revisions as long as you keep a tidy git history.)</p>
<p>There are a few ways to go about drafts. The simplest is probably to add a <code>published</code> or <code>status</code> key to the frontmatter of each post, and add a conditional to your code to filter out unpublished content.</p>
<p>Personally, I created a <code>drafts</code> folder inside my <code>posts</code> folder, and then added it to the project\u2019s <code>.gitignore</code> file to ensure that any time I push to the main branch, the drafts stay behind. That way, nobody can snoop on my drafts in GitHub before they\u2019re actually published, either. (Not that anybody cares that much, or that it would really matter even if they did, but at least if I delete a post before I publish it, it\u2019s not anywhere in my GitHub history.)</p>
<p>Also note that generating taxonomy pages (categories, tags, etc.) will likely be an extra manual challenge with any static site generator. In the case of Gridsome, you can modify the <code>gridsome.server.js</code> file to add new collections. Here\u2019s how I achieved mine:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  api<span class="token punctuation">.</span><span class="token function">loadSource</span><span class="token punctuation">(</span><span class="token parameter">actions</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
 
    <span class="token comment">//Create a new "categories" collection</span>
    <span class="token keyword">const</span> categories <span class="token operator">=</span> actions<span class="token punctuation">.</span><span class="token function">addCollection</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">typeName</span><span class="token operator">:</span> <span class="token string">'category'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
 
    <span class="token comment">//Get all the posts (which already exist from the vue-remark plugin)</span>
    <span class="token keyword">const</span> allPosts <span class="token operator">=</span> actions<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_collection<span class="token punctuation">.</span>data
 
    <span class="token comment">//Loop over the posts and add their categories to an array</span>
    <span class="token keyword">let</span> allPostsCategories <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    allPosts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=></span> allPostsCategories<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>post<span class="token punctuation">.</span>categories<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
    <span class="token comment">//Filter out duplicates</span>
    <span class="token keyword">const</span> uniqueCategories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>allPostsCategories<span class="token punctuation">)</span>
 
    <span class="token comment">//Finally, add each category as a data node, with an array of the matching posts</span>
    uniqueCategories<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">category</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      categories<span class="token punctuation">.</span><span class="token function">addNode</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> category<span class="token punctuation">,</span>
        <span class="token literal-property property">posts</span><span class="token operator">:</span> allPosts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=></span> post<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>category<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `There are more efficient ways to achieve the above; my first try used <code>flatMap</code>. But turns out: Node doesn&#39;t have the <code>flatMap</code> array method, so it wouldn&#39;t compile on Netlify&#39;s servers. So this was my slightly longer workaround.
`;
    }
  })}
<h2 id="${"final-thoughts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#final-thoughts"}"><span class="${"icon icon-link"}"></span></a>Final thoughts</h2>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `I still love WordPress. But I found myself wanting a site I could tinker with in my editor, all together in one place. No database; no SQL dumps; no live server at all. Just content files compiled to beautifully uncomplicated HTML.
`;
    }
  })}
<p>This approach certainly isn\u2019t right for everyone. It works great for me because I\u2019m the only one working on this site. But if I had co-authors, or users, or collaborators, the whole calculation might be drastically different.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `I still love WordPress. But I found myself wanting a site I could tinker with in my editor, all together in one place. No database; no SQL dumps; no live server at all. Just content files compiled to beautifully uncomplicated\xA0HTML.
`;
    }
  })}
<p>And of course, what <em>I</em> find to be simple may be very different from what <em>you</em> find to be simple. I love living in my code editor. You might find a visual interface easier to use. Both are just fine. It\u2019s just a matter of personal preference.</p>
<p>WordPress just didn\u2019t quite fit my wants and needs for this project. It might still be a great fit for you and yours. And I\u2019m sure it will be again for me for a future project.</p>
<p>But right now, I like things being back together, all in one place.</p>`;
});
