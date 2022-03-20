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
  default: () => A_new_headless_site_with_gridsome,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.highlight.svelte-1fn0ddn{font-size:1.3em;line-height:1.5;margin:0 0 var(--halfNote);font-weight:normal;font-style:normal;font-family:var(--headingFont)}',
  map: null
};
const Highlight = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"highlight svelte-1fn0ddn"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const metadata = {
  "title": "A New Headless Site with Gridsome",
  "date": "2020-06-06",
  "updated": "2021-01-19",
  "categories": ["javascript", "web", "vue", "wordpress"],
  "coverImage": "wp-plus-gridsome.png",
  "coverWidth": 160,
  "coverHeight": 89,
  "excerpt": "A lengthy write-up diving into what headless means, its advantages and disadvantages, some of the techniques and gotchas involved, and, finally, the new design of this site specifically."
};
const A_new_headless_site_with_gridsome = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This post is a bit outdated; this website still looks and works mostly the same, but it&#39;s no longer headless WordPress <em>or</em> Gridsome; it&#39;s <a href="${"https://rickyjanuari.com/blog/converting-from-gridsome-to-sveltekit"}">SvelteKit</a>. So a few of the smaller features described here, like the search bar, aren&#39;t in place anymore.
`;
    }
  })}
<p>There\u2019s a joke (the kind that\u2019s made less because it\u2019s funny and more because it\u2019s true) about developers and designers spending more time redesigning their website than actually <em>doing</em> something with it. Right off the bat, I\u2019ll go ahead and admit I fit that clich\xE9; I\u2019ve had some version of this blog live since 2014, and the number of redesigns I\u2019ve done is uncomfortably close to the number of <em>actual blog posts</em> I\u2019ve written in that same time.</p>
<p>In fact, at the time of this writing, the post I wrote about the last redesign\u2014in early 2018\u2014is still in the top 5 most recent posts on the site. (Yikes.)</p>
<p>This one, though, is at least more than a fresh layer of CSS or a new WordPress theme. This one is taking an entirely new approach: going headless with the Jamstack.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This is going to be a long post, since I\u2019ll go into depth on what headless means, its advantages and disadvantages, some of the techniques involved, and, finally, the design of this site specifically.
`;
    }
  })}
<h2 id="${"what-do-headless-and-jamstack-mean"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-do-headless-and-jamstack-mean"}"><span class="${"icon icon-link"}"></span></a>What do \u201Cheadless\u201D and \u201CJamstack\u201D mean?</h2>
<p>Let\u2019s take a moment to break down those terms.</p>
<p><strong>\u201CHeadless\u201D</strong> WordPress is a bit of a tricky concept to understand\u2014I think in part because \u201Cheadless\u201D isn\u2019t a particularly good metaphor. But to better understand what I mean, let\u2019s talk about what headless WordPress <em>isn\u2019t</em>.</p>
<p>Ordinarily, WordPress is responsible for both the admin side of the site\u2014where you log in and make changes\u2014as well as displaying the public front-end of the site, i.e., the part that visitors actually see and interact with. It\u2019s a full package; WordPress handles both the <em>creation</em> of your content, and <em>how that content is displayed</em> to users, via the theme generally, and its PHP template files interacting with the MySQL database specifically.</p>
<p>In other words: by default, WordPress just takes care of everything.</p>
<p>If that\u2019s, uh, <em>headful</em> WordPress (see what I mean? It\u2019s a bad term), then <em>headless</em> separates the admin and the front-end, leaving WordPress to handle the back-end content creation and site administration, while freeing the front-end presentation to be handled elsewhere, independently.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Headless separates the admin and the front-end, leaving WordPress to handle the back-end content creation and site administration, while freeing the front-end to be handled elsewhere,\xA0independently.
`;
    }
  })}
<p>So a headless WordPress site will still use the WP backend as usual for all the content management, post creation, data storage, etc. From the admin side of the site, nothing changes, which is probably good news for your clients, as well as anyone who just wants to be able to keep using the admin interface they\u2019re already accustomed to.</p>
<p>But instead of having the site\u2019s theme display your pages, posts, etc., a headless site can use virtually anything, thanks to the WordPress REST API.</p>
<p>If you aren\u2019t particularly familiar with the world of modern front-end development outside WordPress, you might not immediately see the advantages, but there are several to be had. Not being locked into PHP as your templating language means you\u2019re instead able to use powerful, modern frameworks like <a href="${"http://vuejs.org"}" rel="${"nofollow"}">Vue</a>, <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a>, <a href="${"https://www.11ty.dev/"}" rel="${"nofollow"}">Eleventy</a>, or\u2014in the case of this site\u2014<a href="${"http://gridsome.org"}" rel="${"nofollow"}">Gridsome</a>, with all the goodies that come along.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `But instead of having the site\u2019s theme display your pages, posts, etc., a headless site can use virtually anything, thanks to the WordPress REST\xA0API.
`;
    }
  })}
<p>This goes hand-in-hand with <strong>Jamstack</strong>, and is actually a decent example of it. The JAM stands for JavaScript, API and Markup\u2014though it\u2019s more of a loose description of <em>typical</em> features of a site rather than a literal definition or group of technologies, so don\u2019t get too hung up on those three things. Jamstack sites always use JavaScript in some fashion, but they don\u2019t all use APIs, necessarily.</p>
<p>The term \u201CJamstack\u201D was coined by <a href="${"http://netlify.com"}" rel="${"nofollow"}">Netlify</a> (which, by the way, is where the front-end of this site is deployed). When people say they are launching or deploying a site \u201Con the Jamstack,\u201D that usually means they\u2019re using a host like Netlify or <a href="${"https://vercel.com/"}" rel="${"nofollow"}">Vercel</a> to compile or \u201Cbuild\u201D their site directly from a git repo, and then host it on a global CDN.</p>
<p>The advantages provided by a headless approach generally boil down to: speed; security; and developer experience.</p>
<h3 id="${"speed"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#speed"}"><span class="${"icon icon-link"}"></span></a>Speed</h3>
<p>As you may know if you\u2019ve ever worked with a very old and/or large WordPress site, waiting for a large page or list of content to load can be very slow, because you\u2019re relying on PHP to both query the MySQL database for the content, <em>and</em> then run the (in)famous WordPress loop to render it.</p>
<p>Using the WP API is typically faster, because PHP isn\u2019t really rendering anything; the site is just sending text data in the form of JSON. And if you use a JavaScript-powered static site generator like Gridsome or Eleventy or Gatsby, that content can even be pre-rendered\u2014building out a full static HTML site from the result of querying the WordPress database, reducing visitors\u2019 wait time to practically nothing.</p>
<p>Using a static site generator (SSG) also means you can deploy all of your site\u2019s content on a global CDN, so it\u2019s immediately available and speedy anywhere around the globe.</p>
<h3 id="${"security"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#security"}"><span class="${"icon icon-link"}"></span></a>Security</h3>
<p>The security of adding a layer between your front-end and your database (while, in my opinion, not one of the bigger selling points of the Jamstack) is not to be overlooked. When your front-end doesn\u2019t offer any direct access to the database\u2014and instead, is just a collection of immutable files on a CDN server\u2014that means the methods of attacking your site are minimized. No SQL injections, and you offer no immediate benefit if somebody <em>does</em> manage to hack the DB.</p>
<p>With a headless approach, you also have the option of locking down your original WordPress install in ways you might not have been able to when you relied on WP to serve the front-end of your site.</p>
<p>That said, security probably shouldn\u2019t be your biggest reason to move to the Jamstack, since it\u2019s a tangential benefit, and since it won\u2019t solve bad WordPress security to begin with.</p>
<h3 id="${"developer-experience"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#developer-experience"}"><span class="${"icon icon-link"}"></span></a>Developer Experience</h3>
<p>Finally, working with modern frameworks like those mentioned above (though there are many others) is often more enjoyable for developers, as it allows you to introduce more modern tooling into your workflow, both in how the code is built and how it\u2019s deployed. (Typically, Jamstack sites are set up to deploy directly from a git repo, so that every time you push to the repo, the site deploys the code automatically, saving you from ever touching something like FTP.)</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Naturally, developer experience should be the least of our concerns; our users\u2019 experience with the site is more important than ours. But if we\u2019re being responsible with our choices, developer experience should ideally help translate into better user experience, too.
`;
    }
  })}
<h2 id="${"headless-wordpress-drawbacks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#headless-wordpress-drawbacks"}"><span class="${"icon icon-link"}"></span></a>Headless WordPress drawbacks</h2>
<p>You might be wondering at this point if there are disadvantages to going headless. And the answer, in a word, is: yes. There are distinct and often significant tradeoffs for the speed, security and dev ergonomics that come with headless architecture.</p>
<h3 id="${"less-control-over-appearance-from-wordpress"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#less-control-over-appearance-from-wordpress"}"><span class="${"icon icon-link"}"></span></a>Less control over appearance from WordPress</h3>
<p>By far the biggest drawback, in the case of WordPress, is that your site\u2019s theme\u2014as well as pretty much any plugin that does anything on the front-end of the site\u2014will be rendered effectively useless, at least as far as its user-facing functionality. With headless, since your front-end isn\u2019t rendered by your theme\u2019s PHP template files anymore, plugins that change the appearance or layout of the site will lose their effect.</p>
<p>Actually, the drawback isn\u2019t limited to plugins and themes; core WordPress features, like the customizer, widgets, and nav menus (basically, the whole Appearance tab in admin) will be rendered powerless by a headless setup.</p>
<h3 id="${"greater-hosting-needs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#greater-hosting-needs"}"><span class="${"icon icon-link"}"></span></a>Greater hosting needs</h3>
<p>Another drawback is that you\u2019re essentially hosting the site twice. Like I mentioned, I have the front-end of this site on Netlify, which has a free tier, so I\u2019m at liberty to continue using whatever WordPress hosting I want without it costing me any more. (At least, not unless this blog really blows up for some reason, which seems very unlikely.) But that might not be the case for you, depending on your site\u2019s traffic and needs. And then again, hosting isn\u2019t costing me any <em>less</em>, either.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `With headless, since your front-end isn\u2019t rendered by your theme\u2019s PHP template files anymore, plugins that change the appearance or layout of the site will lose their\xA0effect.
`;
    }
  })}
<p>And if you <em>are</em> pre-rendering content with an SSG (as opposed to querying data from your WP site\u2019s API on the fly), you\u2019ll need to redeploy the site each time content changes. (There are <a href="${"https://wordpress.org/plugins/search/Netlify/"}" rel="${"nofollow"}">plugins</a> to solve that particular pain point, though.)</p>
<h3 id="${"tricky-dns-setup"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#tricky-dns-setup"}"><span class="${"icon icon-link"}"></span></a>Tricky DNS setup</h3>
<p>Something else to keep in mind: DNS is going to require some careful, likely much more complex setup with headless (more on that later), and unless you do some fancy stuff with your theme and DNS, post previews won\u2019t really work anymore.</p>
<h3 id="${"fewer-hosting-features-are-relevant"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#fewer-hosting-features-are-relevant"}"><span class="${"icon icon-link"}"></span></a>Fewer hosting features are relevant</h3>
<p>You might also be giving up some luxuries provided by your host, such as staging sites, for example. (You can still use staging, of course, but what you see there won\u2019t match what you\u2019ll see on the live headless site unless you do a lot of extra config.)</p>
<p>Those tradeoffs probably sound very scary, and for a lot of WordPress users, they make moving to headless a non-starter. That\u2019s ok. Every site has different needs, and if sticking with the WordPress you\u2019ve come to know and love sounds like your best path forward, rest assured you\u2019re not alone and you will not be unsupported in that choice.</p>
<h2 id="${"why-i-chose-headless"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#why-i-chose-headless"}"><span class="${"icon icon-link"}"></span></a>Why I chose headless</h2>
<p>I\u2019ll be honest: this is my personal site, and as such, I treat it a bit like a playground to try new things and generally do whatever I feel like, development-wise.</p>
<p>I really enjoyed this post from Ethan Marcotte, \u201D<a href="${"https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/"}" rel="${"nofollow"}">Let a website be a worry stone</a>,\u201D which (to crudely summarize) advocates for developers to spend less time chasing perfection in their sites, and instead, treat them like a \u201Cworry stone,\u201D i.e., as something to rub the rough edges off of bit by bit over time (and as a necessary and healthy distraction when one is needed).</p>
<p>That\u2019s part of what made me go all-in on Gridsome. I\u2019d been messing around with it (and its <a href="${"https://gridsome.org/starters/default-word-press-starter/"}" rel="${"nofollow"}">WordPress starter</a>) for close to a year when I read that post and made the decision to dive in.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Gridsome\u2019s blazing speed and powerful, straightforward features sold me. It makes building fast sites both easy and\xA0enjoyable.
`;
    }
  })}
<p>I\u2019m a huge fan of Vue, so Gridsome being a Vue-based framework was a big selling point for me, even though Gridsome itself is relatively immature, at only version 0.7 at the time of writing (which I\u2019ll admit led to some frustrations in the development process). I\u2019ve seen enough sites powered by Gridsome, and enough interest in the community, to abandon worry, however, and jump in anyway. But originally, Gridsome\u2019s blazing speed and powerful, straightforward features sold me. It makes building fast sites both easy and enjoyable.</p>
<p>Gridsome doesn\u2019t <em>need</em> a back-end like WordPress, though, and I toyed with the idea of moving away from WP altogether and making my site fully static, writing new posts in Markdown rather than in the WordPress editor (particularly given my recent frustrations with WordPress\u2019s Gutenberg editor). There\u2019s a strong appeal to just having <em>everything</em> live together in the same repo, and giving up on a database altogether. (Wes Bos and Scott Tolinski have some good podcast content on this in the episodes of <a href="${"https://syntax.fm/"}" rel="${"nofollow"}">Syntax FM</a> covering their personal blogs.)</p>
<p>Eventually, however, I decided it was worth keeping WordPress around for a while, for a few reasons.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The block editor, it turns out, is also the best link between a headless back-end and its decoupled front-end.
`;
    }
  })}
<p>One is: <strong>I still want to see where Gutenberg goes</strong>. The block editor is still a <em>long</em> way from where it needs to be (and I still tweet out my frustrations with it from time to time), but it\u2019s also very exciting.</p>
<p>The block editor, it turns out, is also the best link between a headless back-end and its decoupled front-end.</p>
<p>I came across a plugin called <a href="${"https://wordpress.org/plugins/block-lab/"}" rel="${"nofollow"}">Block Lab</a>, which I highly recommend whether you\u2019re using headless or not. Block Lab beautifully simplifies the process of creating basic custom blocks for use in the Gutenberg editor, and the accompanying PHP mini-template files (component files, I suppose you might call them) which render the content of those custom blocks.</p>
<p>I thought this was amazingly handy given the editor\u2019s lack of some types of blocks that I wanted to create, and it was when I began putting this plugin to use I realized that <em>custom blocks will be custom on the headless front-end, too</em>.</p>
<p>That is: when custom Block Lab blocks are used in page or post content, all of their custom template code comes with them, even through the WordPress API.</p>
<p>That\u2019s very cool, because it means I can still create custom blocks without really needing to build them twice; all I do is put a class in the PHP template file for the block, and target that class with CSS on my headless front-end.</p>
<p>And as a <em>really</em> cool feature: Block Lab checks your theme for a <code>blocks.css</code> file which, if present, loads in the editor, too! So you can style your editing experience as easily as the front-end experience, if you so choose. Realizing that going headless didn\u2019t mean giving up the power of a fully customizable block editor was a big persuasion in sticking with WordPress.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Realizing that going headless didn\u2019t mean giving up the power of a fully customizable block editor was a big persuasion in sticking with\xA0WordPress.
`;
    }
  })}
<p>I also mentioned earlier that there are plugins available to rebuild your site on Netlify every time your WordPress content changes (I\u2019m personally using <a href="${"https://wordpress.org/plugins/deploy-netlifypress/"}" rel="${"nofollow"}">NetlifyPress</a> at the moment), which makes the transition easier, too. Knowing that I can keep my editing process fully in WordPress, without the need to open a completely separate dashboard any time I want to publish or update content, makes things a lot easier.</p>
<p>Another reason, though, is that even though the site is headless, the WordPress REST API can still be live and fully available.</p>
<p>With a typical Jamstack site, dynamic things such as search forms\u2014any type of form, really\u2014can be problematic, as you don\u2019t typically have a database to query (though you could). Typically, when using a static site generator, the best you could do would be to pre-generate category or tag pages, or try to filter content client-side. But either of those approaches still fall short of a genuine search experience.</p>
<p>Keeping my WordPress site live means that I can have the best of both worlds in this regard; I can pre-generate all my content, and I can also allow custom on-the-fly searches that\u2019ll be backed by the WordPress API.</p>
<p>In addition, I don\u2019t need to worry about porting my WordPress site\u2019s RSS feed; I can just point the <code>/feed</code> URL back to the original WordPress site and keep using the same one I always have.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Keeping my WordPress site live means that I can have the best of both worlds in this regard; I can pre-generate all my content, and I can also allow custom on-the-fly searches that\u2019ll be backed by the WordPress\xA0API.
`;
    }
  })}
<p>All of this flexibility is actually what sold me on sticking with a WordPress back-end, rather than going fully static. I knew that if I couldn\u2019t get a good form solution going on the Jamstack, I could always just use DNS to point a page back to WordPress and slap a <a href="${"https://ninjaforms.com/"}" rel="${"nofollow"}">Ninja Form</a> on it, the user being none the wiser. (As it turns out, Netlify <em>does</em> have a rather nifty forms solution, but I like knowing that I can fall back to WordPress for anything I\u2019m not finding or not comfortable with on the Jamstack.)</p>
<h2 id="${"the-new-site"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-new-site"}"><span class="${"icon icon-link"}"></span></a>The new site</h2>
<p>I\u2019ve done <em>so</em> much talking about the tech behind the site I haven\u2019t even mentioned the site itself!</p>
<p>Obviously, I liked my old brand (I designed it, after all), but I felt it was maybe aging a little\u2014not necessarily in appearance (though that, too), but more just in terms of reflecting and expressing who and where I am.</p>
<p>It sounds silly, but in late 2017/early 2018 when I was launching the last site, I was in a very, very different place in my life and in my career. (I was neither a dad nor a full-time developer at the time, as the main examples.) The old look was fine, but it didn\u2019t feel like it represented who I am as well as it could anymore.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The old look was fine, but it didn\u2019t feel like it represented who I am as well as it could\xA0anymore.
`;
    }
  })}
<p>Naturally, being a designer and a font hoarder, I spent days scouring my library, comparing typefaces and pairings before eventually settling on <em>Pensum Display Basic</em> and <em>Averta Standard</em> as the new typefaces of choice (along with <em>MonoLisa</em> as the font used for code). You can see them all and try them out on the <a href="${"/uses"}">/uses</a> page.</p>
<p>One of the uses for (at least some of) those fonts: code and preformatted code blocks. I anticipate including blocks of code in more of my blog posts going forward, so I thought I should style those blocks up appropriately. This is done with <a href="${"https://prismjs.com/#supported-languages"}" rel="${"nofollow"}">Prism</a>, a lightweight and customizable JavaScript library for code highlighting. I\u2019ve set it up to mirror my <em>actual</em> VS Code preferences.</p>
<p>Want to get super meta? Here\u2019s what a code block looks like on this new site, along with some of the CSS rendering it:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">pre[class*='language-']</span> <span class="token punctuation">&#123;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 4rem 1rem 1.5rem<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--halfNote<span class="token punctuation">)</span> 0<span class="token punctuation">;</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 0.3em<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">pre.language-css:before</span> <span class="token punctuation">&#123;</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'CSS:'</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This site may load up to six fonts on a page, which is admittedly quite a few by web standards. I didn\u2019t want to compromise on the design, though, so I used other means to mitigate the performance impact, including subsetting each font, conditional loading, and setting font-display: swap to avoid invisible text.
`;
    }
  })}
<p>This change in fonts also necessitated a redesign of my personal logo, since the old one wouldn\u2019t have fit with the new look and feel.</p>
<p>I\u2019ll be honest: every time I create a new version of my logo, I feel less and less pressure to make it \u201Csomething,\u201D and instead just go with what feels right to me. I suppose you could view this either as atrophy or maturation of my design skills; I\u2019ll let you be the judge of that. But in any case, this logo is a little bit of a remix of the last one, but doesn\u2019t try quite so hard to wink at you (at least, not until you hover on it in the site header).</p>
<div style="${"padding: 2.5rem; background: var(--white)"}"><img src="${"/images/post_images/Full-Logo-2018.svg"}" alt="${"The 2018 version of the logo, in Amsi Pro Ultra"}" style="${"margin-bottom: 4rem"}">
  <img src="${"/images/post_images/2020-logo-final.svg"}" alt="${"The newer 2020 version of the logo, in Pensum Display Basic Bold"}"></div>
<p>As a nice side effect, the old favicon uses two pairs of brackets, where the new one uses only one, which makes it easy to distinguish between the secondary back-end (where I didn\u2019t bother updating the favicon) and the primary front-end at a glance in my browser tabs.</p>
<p>For the projects, I actually <em>did</em> decide to use Markdown files. Each project, on the \u201Cback end,\u201D is a <code>.md</code> file in my repo, with frontmatter for the title, category, etc., and the content in the form of Markdown. This lets me do some fun things with filtering, sorting, and templates to view the projects, and also allows me to play around with more of Gridsome\u2019s features, dipping my toes in the water of what moving to a fully static site might look like.</p>
<p>Speaking of fun things: I tried to put something interesting (interesting for me to build, at least, if not for visitors to look at) throughout the site. There\u2019s the aforementioned font tester on the <a href="${"/uses"}">/uses</a> page, the search feature on the <a href="${"/blog"}">/blog</a> page, and also, a very pointless and highly subjective chart of my professional skills on the about page. (There\u2019s also a bit of cheekiness to be found in the footer.)</p>
<p>On the topic of visual interest: the new site generates a bit extra using a couple of custom editor blocks; <strong>Callouts</strong> (which work a lot like pull quotes from a print publication), and <strong>Highlights</strong> (which serve to enlarge key pieces of text). Both make the posts a bit more skimmable (not a word; I\u2019m ok with it), and help convey its main points at a glance.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `When you\u2019re on a wide enough screen, the callouts appear with the article text conventionally wrapping around them (and hidden using ARIA to prevent screen readers repeating the text).
`;
    }
  })}
<p>You\u2019ve probably seen both of them in this article already, but not if you\u2019re reading this on mobile. Callouts <em>repeat</em> text, which is confusing when you\u2019ve only got a single column on a mobile screen, so I hide those at mobile widths. When you\u2019re on a wide enough screen, the callouts appear with the article text conventionally wrapping around them (and hidden using ARIA to prevent screen readers repeating the text).</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Highlight blocks aren&#39;t present on the site any longer (save for this page) since it didn&#39;t seem to make sense to have two different ways to call out text, and the styling conflicted a bit with headings. Instead I settled on a different solution to the &quot;repeat reading&quot; problem described above (I stopped caring), and combined both blocks into one.
`;
    }
  })}
<p>Highlights, in either case, only appear as larger text (no different to screen readers, since it didn\u2019t feel like emphasizing entire sentences or paragraphs was probably the right thing to do), though they\u2019re styled a bit differently on mobile, just to fit their surroundings better.</p>
${(0, import_index_2749e1b7.v)(Highlight, "Highlight").$$render($$result, {}, {}, {
    default: () => {
      return `Highlights take the text of the paragraph and\u2014what else\u2014highlight it, just like so. (How meta!)`;
    }
  })}
<p>The colorful square grid on the header and footer were really the heart of the visual aspect of the design, and they grew out of a <a href="${"https://codepen.io/collinsworth/pen/ZEGrMRQ"}" rel="${"nofollow"}">typographic experiment I made on CodePen</a>. I realized early on that the site was pretty stark and needed just a pop of color and interest, so I plagiarized myself and reused that colorful grid, and just for fun, made it re-render itself into a new random shape on every new page load.</p>
<p>Speaking of page loads: I experimented with many, many different animations and transitions on the site before finally settling on the advantages of the current setup. There was a time I had full in <em>and</em> out transitions for the pages, but that required some custom setup that eventually I decided was too much of a burden\u2014especially because the \u201Cout\u201D transition effectively slowed down the site.</p>
<p>The old sidebar is gone, but there\u2019s room to bring it back. I liked the offset layout.</p>
<p>Meanwhile, I enjoyed adding some new accessibility features. The \u201Cskip to main content\u201D link isn\u2019t new, but it\u2019s something I had to recreate, moving away from WordPress.</p>
<p>The site also features a settings menu (which you\u2019ll notice sticking around, pun intended, in the bottom left of the window). This allows you to toggle dark mode and reduced motion on the site. Both of these options detect and default to your own user preference if set (in the case of dark mode, using a CSS media query to avoid a flash of white), but both will override your OS/browser default if you manually toggle them, and store your preferred value in the browser\u2019s local storage. (Which, incidentally, is the full extent of the data this site collects and special permissions it might need.)</p>
<p>And finally, as far as benefits, I think the results speak for themselves. Here\u2019s the <strong>Lighthouse mobile test result</strong>:</p>
<p><img src="${"/images/post_images/Image-2020-06-05-at-11.47.11-AM-1024x391.png"}" alt="${"The mobile results for this site's homepage in a Lighthouse test, with perfect 100 scores in performance, accessibility, best practices and SEO."}"></p>
<p>And here\u2019s the <strong>GTMetrix</strong> score:</p>
<p><img src="${"/images/post_images/gtmetrix-1024x330.png"}" alt="${"GTMetrix gives this site a 100% on PageSpeed and a 98% from YSlow."}"></p>
<p>Incidentally, the 98% is because YSlow wants me to compress <em>everything</em>, but Netlify doesn\u2019t compress components that are already less than 1kb to begin with. So I\u2019d be trying to bloat a component just to make a speed test happy in order to get that last two percent, ironically.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `It may seem like my home page isn\u2019t a good benchmark, since it has virtually no content, and that\u2019s definitely fair. However, note that Gridsome does some front-loading behind the scenes, pre-loading data for all the routes linked on the homepage, so that they can be rendered as quickly as possible once the user clicks one.
`;
    }
  })}
<h2 id="${"what-to-watch-out-for-when-going-headless"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-to-watch-out-for-when-going-headless"}"><span class="${"icon icon-link"}"></span></a>What to watch out for when going headless</h2>
<p>If you decide to go headless with your own WordPress site, I have a few warnings to consider from my recent experience.</p>
<h3 id="${"dns-is-going-to-be-a-complex-challenge"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dns-is-going-to-be-a-complex-challenge"}"><span class="${"icon icon-link"}"></span></a><strong>DNS is going to be a complex challenge.</strong></h3>
<p>With headless WordPress, you\u2019re effectively coordinating communication between two codependent sites; the WordPress back-end and the decoupled front-end. That requires a cautious and capable understanding of both DNS and WordPress\u2014specifically, the WordPress database.</p>
<p>In my case, there was a pretty considerable slew of DNS changes to be considered, and a search-and-replace of the original site\u2019s database.</p>
<p>Bear in mind also that <strong>the original site will need to remain at least partially available</strong> (at least, if you plan on deploying more than once), even if you point your main domain to the headless front-end, and crucially, even if you don\u2019t need API access on the original site.</p>
<p>In my case, I pointed <code>rickyjanuari.com</code> away from the WordPress site and to the headless front-end, but created a separate A record for <code>api.rickyjanuari.com</code>, and used that subdomain as the access point for the original site.</p>
<p>That gets things working; however, you\u2019ll probably want to make sure WordPress also redirects all traffic that would normally hit the front-end (regardless of domain) back to your live headless front end; otherwise, people will still be able to see the old version of the site <em>and</em> the new one, one on each domain. (This could probably be done with a redirection plugin, but you may want to use your web server\u2019s config directly instead. Either way, it\u2019s going to require a knowledgeable and delicate touch.)</p>
<p>Another DNS warning: <strong>you <em>don\u2019t</em> want to redirect any wp-* path</strong>. That includes <code>wp-admin</code> and <code>wp-login</code> (so you can still access the original WP site), as well as <code>wp-json</code> for the API, and <code>wp-content</code> to load any images and other assets that may still come from the original site. (At least, not unless you\u2019re planning on downloading all your images and serving them from the same relative path on the headless front end; I decided not to do that in my case, since I already get good image handling from <a href="${"https://wordpress.org/plugins/jetpack/"}" rel="${"nofollow"}">Jetpack</a>.)</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Ordinarily, WordPress handles creating responsive images for you with source sets; that\u2019s another thing you\u2019ll lose going headless. Gridsome and other SSGs can help make that up if you serve images from the headless front end, though.
`;
    }
  })}
<p>Which reminds me: keep in mind that you\u2019ll be changing things, DNS-wise, to go live with the headless front-end. Odds are, you\u2019ll have at least a few places in your headless site\u2019s configuration that will still be referencing the \u201Clive\u201D URL, and you\u2019ll need to deftly handle that during the go-live process.</p>
<p>And it goes without saying, but: if you have email on your domain, make sure you don\u2019t break it with DNS changes. (As long as you don\u2019t change name servers or MX records, you should be safe.)</p>
<h2 id="${"seo-and-redirects"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#seo-and-redirects"}"><span class="${"icon icon-link"}"></span></a>SEO and redirects</h2>
<p>Also: be sure all of your 301 redirects are in place and handled properly, and that you\u2019ve taken care of any other SEO considerations (like adding meta descriptions, for example) before going live with a headless site. WordPress takes care of a <em>lot</em> of things for you in this area (especially if you\u2019re using an SEO plugin), and you\u2019ll need to make sure you\u2019re not shooting yourself in the foot when you go live.</p>
<p>Also, if you have Google Analytics or similar tracking codes or JavaScript loading in the <code>&lt;head&gt;</code> of your site, you\u2019ll need to be sure those get moved over to the new front-end as well.</p>
<h3 id="${"deploys-are-only-free-to-a-point"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#deploys-are-only-free-to-a-point"}"><span class="${"icon icon-link"}"></span></a>Deploys are only free to a point</h3>
<p>And finally: if you have automatic deploys enabled in WordPress, remember that static hosts tend to charge by the build minute, and that most likely, your <em>whole</em> site will be rebuilt every time you update a post.</p>
<p>Watch those minutes, especially if you (like me) enjoy tweaking posts after they\u2019re published. While some hosts have incremental builds (mostly for Gatsby at this point, as far as I know, since it\u2019s the biggest fish in that particular pond), typically every page and\u2014crucially\u2014each <em>image</em> will be built each time the site is deployed.</p>
<p>The images step is easily the most time-consuming part of this site\u2019s build (Gridsome does some nice things in the build step to minimize image sizes), so keep that all in mind. When your site is static, you need to re-deploy each time you edit content, and there\u2019s a point where that\u2019s going to start costing you.</p>
<hr>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `In the end, I had a lot of fun building this site, and I\u2019m excited for it to be live in the world, and to continue smoothing out its rough\xA0edges.
`;
    }
  })}
<p>Thanks for taking the time to read about my headless WordPress site. And by the way, <a href="${"https://github.com/rickyjanuari/joco-gridsome"}" rel="${"nofollow"}">here\u2019s a link to the GitHub repo</a>, if you\u2019re the sort of person who enjoys checking out that sort of thing. (It\u2019s still a little bit of a mess.)</p>
<p>In the end, I had a lot of fun building this site, and I\u2019m excited for it to be live in the world, and to continue smoothing out its rough edges.</p>`;
});
