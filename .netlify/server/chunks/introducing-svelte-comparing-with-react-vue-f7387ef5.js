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
  default: () => Introducing_svelte_comparing_with_react_vue,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const CounterButton = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<div class="${"example-component-wrapper"}"><button>Number of clicks: ${(0, import_index_2749e1b7.e)(count)}</button></div>`;
});
const ToggleButton = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let buttonText;
  buttonText = "Show more";
  return `<div class="${"example-component-wrapper"}"><p>Svelte is a JavaScript framework.
    
    ${``}</p>

  <button>${(0, import_index_2749e1b7.e)(buttonText)}</button></div>`;
});
var VolumeControl_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}input.svelte-12ioyum{padding:0;width:100%;max-width:12rem;display:block;margin:0}label.svelte-12ioyum{font-family:var(--headingFont);font-weight:bold}',
  map: null
};
const VolumeControl = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let volume = 0;
  $$result.css.add(css$1);
  return `<div class="${"example-component-wrapper"}"><label for="${"volume"}" class="${"svelte-12ioyum"}">Volume: ${(0, import_index_2749e1b7.e)(volume)}%
  </label>
  
  <input id="${"volume"}" type="${"range"}" min="${"0"}" max="${"100"}" class="${"svelte-12ioyum"}"${(0, import_index_2749e1b7.d)("value", volume, 0)}>
</div>`;
});
var CodeComparison_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.svelte-code-comparison.svelte-1eou47t.svelte-1eou47t.svelte-1eou47t{margin:var(--halfNote) 0}.svelte-code-comparison__button-bar.svelte-1eou47t.svelte-1eou47t.svelte-1eou47t{display:flex;justify-content:flex-start}.svelte-code-comparison.svelte-1eou47t button.svelte-1eou47t.svelte-1eou47t{padding-left:2vw;padding-right:2vw;border-color:var(--ink);border-bottom:0 !important;border-width:1px}.dark .svelte-code-comparison.svelte-1eou47t button.svelte-1eou47t.svelte-1eou47t{border-color:var(--paper)}@media(min-width: 1440px){.svelte-code-comparison.svelte-1eou47t button.svelte-1eou47t.svelte-1eou47t{padding-left:1em;padding-right:1em}}.svelte-code-comparison.svelte-1eou47t button.svelte-1eou47t+button.svelte-1eou47t{border-left:0}.svelte-code-comparison.svelte-1eou47t .current.svelte-1eou47t.svelte-1eou47t{background:#1d1e26;border:1px solid var(--black);color:#9580ff;font-weight:bold}.svelte-code-comparison.svelte-1eou47t pre[class*="language-"]{margin-top:0 !important;padding-top:1rem}.svelte-code-comparison.svelte-1eou47t pre[class*="language-"]:before{display:none}',
  map: null
};
const CodeComparison = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { includeBothVues = false } = $$props;
  let { dir } = $$props;
  let currentFramework;
  let frameworks = [];
  if ($$props.includeBothVues === void 0 && $$bindings.includeBothVues && includeBothVues !== void 0)
    $$bindings.includeBothVues(includeBothVues);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css);
  return `<div class="${"svelte-code-comparison svelte-1eou47t"}"><div class="${"svelte-code-comparison__button-bar svelte-1eou47t"}" role="${"tablist"}" aria-label="${"Framework"}">${(0, import_index_2749e1b7.b)(frameworks, (framework) => {
    return `<button role="${"tab"}"${(0, import_index_2749e1b7.d)("aria-controls", framework.slug, 0)}${(0, import_index_2749e1b7.d)("aria-selected", currentFramework == framework.component, 0)} class="${["svelte-1eou47t", currentFramework == framework.component ? "current" : ""].join(" ").trim()}">${(0, import_index_2749e1b7.e)(framework.title)}
      </button>`;
  })}</div>

  ${(0, import_index_2749e1b7.b)(frameworks, (framework) => {
    return `<div${(0, import_index_2749e1b7.d)("id", framework.slug, 0)}${(0, import_index_2749e1b7.d)("tabindex", currentFramework == framework.component ? 0 : -1, 0)} ${currentFramework != framework.component ? "hidden" : ""}>${(0, import_index_2749e1b7.v)(framework.component || import_index_2749e1b7.m, "svelte:component").$$render($$result, {}, {}, {})}
    </div>`;
  })}

  <noscript>${(0, import_index_2749e1b7.b)(frameworks, (framework) => {
    return `${(0, import_index_2749e1b7.v)(framework.component || import_index_2749e1b7.m, "svelte:component").$$render($$result, {}, {}, {})}`;
  })}</noscript>
</div>`;
});
const metadata = {
  "title": "Introducing Svelte, and Comparing Svelte with React and Vue",
  "date": "2021-10-1",
  "updated": "2022-01-18",
  "categories": ["javascript", "svelte", "web"],
  "coverImage": "introducing_svelte.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Svelte is a new style of framework for building sites and apps. Let's dive into what makes it different, why it's so enjoyable, and how it's able to ship such tiny, fast apps."
};
const Introducing_svelte_comparing_with_react_vue = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Let\u2019s be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.</p>
<p>That\u2019s what makes <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a> seem like such a breath of fresh air.</p>
<h2 id="${"what-is-svelte"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-svelte"}"><span class="${"icon icon-link"}"></span></a>What is Svelte?</h2>
<p>At a basic level, you could think of Svelte as a frontend user interface (UI) framework akin to <a href="${"https://reactjs.org"}" rel="${"nofollow"}">React</a>, <a href="${"https://vuejs.org"}" rel="${"nofollow"}">Vue</a>, etc. Svelte is the newest of the big names in the space, however, and it definitely seems as though it\u2019s learned from the others, in terms of both developer experience and optimization.</p>
<p>As with any frontend framework, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change (for example: a user adding an item to the cart), the components automatically update to reflect those changes in the UI. (More on that in a bit.)</p>
<p>So how is Svelte <em>different</em>? Glad you asked\u2026</p>
<h3 id="${"how-is-svelte-different"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-is-svelte-different"}"><span class="${"icon icon-link"}"></span></a>How is Svelte different?</h3>
<p>Svelte was created by <a href="${"https://twitter.com/rich_harris"}" rel="${"nofollow"}">Rich Harris</a>, a developer and graphics editor for the <a href="${"https://www.nytimes.com/"}" rel="${"nofollow"}">New York Times</a>. (<strong>Edit:</strong> Harris has since been <a href="${"https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte"}" rel="${"nofollow"}">hired by Vercel</a> to work on Svelte full-time!)</p>
<p>The news world moves fast, so the interactive UIs and visualizations Harris was creating for the <em>Times</em> needed to be built as quickly as possible. But since it\u2019s critical for the news to be accessible to <em>everyone</em>, those bits of interactivity <em>also</em> had to be as small and performant as possible.</p>
<p>Harris needed a solution that was extremely quick and easy to build with, yet that would be fast and smooth for any reader on any device or network, no matter how limited. In many cases, the bloated JavaScript bundles that are the byproducts of many other frameworks disqualified them from consideration. So Harris set out to build his own solution, and that\u2019s how Svelte was born.</p>
<p>While relatively new and small compared to the other frameworks on the list, Svelte is uniquely battle-tested: the <a href="${"https://www.nytimes.com/interactive/2021/us/covid-cases.html"}" rel="${"nofollow"}">New York Times Covid map</a> is a Svelte app. (Harris\u2019s former employer is far from the only large company utilizing the tech, however; IBM, Square, Philips, 1Password, and Spotify number among its growing list of adopters.)</p>
<hr>
<p>The attention to developer experience (DX) is obvious in Svelte. I instantly loved how easy it made <em>everything</em> I wanted to do\u2014especially compared to React, as I cheekily tweeted at the time:</p>
<blockquote class="${"twitter-tweet"}"><p lang="${"en"}" dir="${"ltr"}">My elevator pitch for <a href="${"https://twitter.com/sveltejs"}">@sveltejs</a> :<br><br>Svelte is React without all the bullshit.</p>\u2014 Ricky Januari (@rickyjanuari) <a href="${"https://twitter.com/rickyjanuari/status/1155265498675929088"}">July 27, 2019</a></blockquote>
<p>From the start, I was consistently and pleasantly surprised how <em>little</em> code I needed to do things in Svelte\u2014and how close it was to the JavaScript, HTML and CSS I already knew.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Just about everywhere I&#39;d normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
`;
    }
  })}
<p>In fact, I found myself having to <em>unlearn</em> many of the more convoluted solutions common in other frameworks (a common refrain from Svelte adopters).</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Just about everywhere I&#39;d normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
`;
    }
  })}
<p>But instead of me talking about it, let\u2019s get to some comparisons. (Since this isn\u2019t intended to be a code-along, we\u2019ll cover actually <em>installing</em> Svelte at the end.)</p>
<img src="${"/images/post_images/svelte-react-vue.png"}" alt="${""}" class="${"section-heading-image"}">
<h2 id="${"comparing-svelte-to-react-and-vue"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#comparing-svelte-to-react-and-vue"}"><span class="${"icon icon-link"}"></span></a>Comparing Svelte to React and Vue</h2>
<p>As mentioned, at a basic level, Svelte is similar to other frontend frameworks. So let\u2019s look a little closer at the details of how Svelte differs: its focus on build-time over run-time, and the simplicity of its syntax.</p>
<h3 id="${"build-over-browser"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#build-over-browser"}"><span class="${"icon icon-link"}"></span></a>Build over browser</h3>
<p>I already mentioned how performant Svelte apps are. That\u2019s possible because Svelte takes a different approach from other frontend frameworks by doing as much as it can at the <em>build</em> step\u2014when the code is initially compiled\u2014rather than running client-side.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `If you want to get technical, Svelte isn&#39;t really a JavaScript framework at all, as much as it\xA0is\xA0a\xA0compiler.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `If you want to get technical, Svelte isn&#39;t really a JavaScript framework at all, as much as it\xA0is\xA0a\xA0compiler.
`;
    }
  })}
<p>To elaborate: React, Vue, and most other frameworks run <em>in</em> the browser. You load them first, and then <em>use</em> them by calling their methods to execute whatever code you write (not unlike jQuery and countless similar libraries). You can load React, Vue, etc. in a script tag, in a <a href="${"https://codepen.io"}" rel="${"nofollow"}">CodePen</a>, or otherwise drop them into whatever environment you want. Granted, there\u2019s probably a build tool involved to reduce the bundle size when you work with these frameworks in a production environment. But to some extent at least, you\u2019re inevitably shipping the framework itself to the browser, and loading it there.</p>
<p><strong>Svelte doesn\u2019t work like that</strong>; you can\u2019t \u201Cload Svelte\u201D in the browser, or play with it on CodePen (though the <a href="${"https://svelte.dev/repl/hello-world"}" rel="${"nofollow"}">Svelte REPL</a> works well instead). Svelte isn\u2019t a script.</p>
<p>Instead, to create a Svelte app, you <a href="${"https://svelte.dev/blog/the-easiest-way-to-get-started"}" rel="${"nofollow"}">install the Svelte repo</a> on your machine, and write Svelte code\u2014which, technically speaking, is a small superset of HTML. The compiler does the rest:</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the browser.
`;
    }
  })}
<p>It\u2019s not unlike how <a href="${"https://sass-lang.com/"}" rel="${"nofollow"}">Sass</a> is compiled to plain CSS. That\u2019s why Svelte has been referred to as \u201Ca framework without the framework.\u201D (The <a href="${"https://svelte.dev/repl/hello-world"}" rel="${"nofollow"}">REPL</a> offers a direct peek into the compiled JavaScript, if you\u2019re interested.)</p>
<p>This approach allows for extremely small bundle sizes, which in turn translates to better loading speed and performance. A smaller bundle can be shipped to the browser faster <em>and</em> parsed by the browser more quickly.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the\xA0browser.
`;
    }
  })}
<p>React and Vue both use a \u201D<a href="${"https://stackoverflow.com/questions/21965738/what-is-virtual-dom"}" rel="${"nofollow"}">virtual DOM</a>,\u201D for rendering, which\u2014while faster than crawling the DOM itself to make changes\u2014still has its own performance implications. Thanks to the Svelte compiler, however, we don\u2019t have to worry about that; components are tied directly to their DOM nodes. You can read more about that in Rich Harris\u2019s <a href="${"https://svelte.dev/blog/virtual-dom-is-pure-overhead"}" rel="${"nofollow"}">Virtual DOM is pure overhead</a>.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `There&#39;s a little more nuance than this when discussing Svelte&#39;s performance relative to the field, but we&#39;ll get into that in the last section.
`;
    }
  })}
<h3 id="${"authoring-svelte-components"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#authoring-svelte-components"}"><span class="${"icon icon-link"}"></span></a>Authoring Svelte components</h3>
<p>One of the things I like most about Svelte is its HTML-first philosophy. With few exceptions, Svelte code is entirely browser-readable HTML and JavaScript. In fact, technically, you could call Svelte a small superset of HTML.</p>
<p>But enough telling; let\u2019s show.</p>
<p>Just as you write <code>.jsx</code> component files in React and <code>.vue</code> files in Vue, Svelte has <code>.svelte</code> component files. A Svelte component might look like this (though you can order the pieces any way you like):</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Component logic goes here</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- HTML goes here --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* CSS goes here (scoped by default!) */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Let\u2019s see a real example.</p>
<p>Maybe the most contrived way to demonstrate a frontend framework is a button component that counts how many times it\u2019s been clicked. It\u2019s the \u201Chello world\u201D of component examples:</p>
${(0, import_index_2749e1b7.v)(CounterButton || import_index_2749e1b7.m, "svelte:component").$$render($$result, {}, {}, {})}
<p>It\u2019s not a particularly practical example, but it <em>is</em> a common one because it\u2019s an effective way to demonstrate the bread and butter of frontend frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).</p>
<p>Click through the examples below to compare this component in different frameworks:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, {
    dir: "counter-button",
    includeBothVues: true
  }, {}, {})}
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `I use arrow functions and omit semicolons in these examples, but that&#39;s just personal stylistic preference.
`;
    }
  })}
<p>There are some key differences I\u2019d like to point out between the Svelte version and the others:</p>
<ul><li><p><strong>Svelte is reactive by default</strong>. This means when a variable is reassigned, every place it\u2019s used or referenced also updates automatically. (<em>React and Vue both require you to explicitly initialize reactive variables</em>.)</p>
<ul><li><p>React in particular does this because of an insistence on \u201Cimmutability.\u201D Its philosophy dictates that you <em>shouldn\u2019t</em> be able to change a variable\u2019s value without calling a function that\u2019s \u201Cauthorized\u201D to do so.</p>
<p>In theory this prevents unwanted mutations (changes), but in practice, 99% of the time it\u2019s unnecessary boilerplate.</p></li></ul></li>
<li><p><strong>The Svelte version is the shortest</strong>, both in terms of line count and character count. While this isn\u2019t necessarily meaningful on its own, shorter code <em>does</em> tend to be less error-prone, as long as it\u2019s readable (which I would argue it definitely is).</p></li>
<li><p><strong>Svelte isn\u2019t picky about HTML.</strong> React needs a <code>return</code> with a single element, and Vue needs a single <code>&lt;template&gt;</code> tag wrapping all the markup. (Vue 2 <em>also</em> requires a single element inside <em>that</em>.) Svelte can have whatever HTML, wherever\u2014and with all its attributes intact, unlike in JSX, React\u2019s de facto templating language.</p></li></ul>
<h4 id="${"a-more-practical-toggle-button-example"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#a-more-practical-toggle-button-example"}"><span class="${"icon icon-link"}"></span></a>A more practical toggle button example</h4>
<p>Showing the user how many times they\u2019ve clicked on a button isn\u2019t particularly practical, so let\u2019s look at something <em>slightly</em> more realistic; a button that toggles some hidden content:</p>
${(0, import_index_2749e1b7.v)(ToggleButton, "ToggleButton").$$render($$result, {}, {}, {})}
<p>This example is at least <em>close</em> to real-world functionality; it\u2019s hopefully not too hard to imagine how something similar to this would be useful in a production scenario.</p>
<p>I like this example because it introduces two key framework concepts:</p>
<ol><li><strong>Conditional rendering</strong> \u2013 <code>if</code> statements inside the markup; and</li>
<li><strong>Computed values</strong> \u2013 dynamic variables that change depending on the situation (in this case, the button text).</li></ol>
<p>Let\u2019s compare how Svelte, React, and Vue each handle these concepts:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, {
    dir: "toggle-button",
    includeBothVues: true
  }, {}, {})}
<p>Svelte\u2019s way of handling computed values is that <code>$:</code> operator you see above; prepend any variable name with that, and it will be reevaluated every time anything it depends on changes. (In this case, <code>buttonText</code> is reevaluated each time <code>isTextShown</code> changes.)</p>
<p>React lets you do something similar, but Vue moves these to <code>computed</code> functions.</p>
<p>Other differences worth noting:</p>
<ul><li><p>Svelte and Vue 3 do not require you to \u201Cwrap\u201D your markup in a single element. React and Vue 2 do. (I wouldn\u2019t be surprised if React figures out a way to do away with this requirement soon, however.)</p></li>
<li><p>In React and Vue, you need to wrap conditional elements in HTML and/or stringify them. Svelte lets you put whatever otherwise valid markup you want inside of <code>#if</code> blocks, and doesn\u2019t require you to tie them to an element, either.</p></li></ul>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The accessibility of this toggle button example is questionable, for the sake of brevity. I recommend Heydon Pickering&#39;s <a href="${"https://inclusive-components.design/toggle-button/"}" rel="${"external"}">Building Inclusive Toggle Buttons</a> for more info.
`;
    }
  })}
<h4 id="${"comparing-form-bindings"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#comparing-form-bindings"}"><span class="${"icon icon-link"}"></span></a>Comparing form bindings</h4>
<p>Here\u2019s one last quick <em>and</em> practical example, to compare form bindings between frameworks: a volume slider. Try it out:</p>
${(0, import_index_2749e1b7.v)(VolumeControl, "VolumeControl").$$render($$result, {}, {}, {})}
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, {
    dir: "volume-control",
    includeBothVues: true
  }, {}, {})}
<p>Notice especially how React\u2019s data flow is one-way; it needs you to explicitly update the <code>volume</code> variable any time its corresponding input changes. In other words: you need to make the input both <em>read</em> the volume setting <em>and update</em> the volume setting, as two different steps.</p>
<p>By contrast, both Svelte and Vue offer two-way data binding; you just tell the framework that whenever either the input <em>or</em> the value changes, the other should update to reflect that.</p>
<p>It should also be noted that you can add two-way data binding to component props in Svelte as well:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name"><span class="token namespace">bind:</span>someProp=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>someValue<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>This would allow the <code>ChildComponent</code> to pass changes to the parent component and vice versa. React is firmly against this idea because, again, it highly values immutability and one-way data flow. In practice, I personally find that dogma more inhibiting than helpful.</p>
<h4 id="${"comparing-logic"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#comparing-logic"}"><span class="${"icon icon-link"}"></span></a>Comparing logic</h4>
<p>Though we\u2019ve seen it already, I think it\u2019s worth glancing once more at how each of the three frameworks handles conditional rendering. Here\u2019s how you\u2019d show a <code>&lt;Hello /&gt;</code> component conditionally:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, { dir: "conditionals" }, {}, {})}
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `I&#39;m not distinguishing between Vue 2 and 3 in these examples because their templating syntax is identical.
`;
    }
  })}
<p>You can of course do <code>else</code> as well (and <code>else if</code> for that matter, though I won\u2019t demo that just because writing the React expression would be a little bit of a nightmare).</p>
<p>Here\u2019s an example where we show a <code>&lt;WelcomeBanner /&gt;</code> component if the user is logged in, and a login form component otherwise:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, { dir: "complex-conditionals" }, {}, {})}
<h4 id="${"loops"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#loops"}"><span class="${"icon icon-link"}"></span></a>Loops</h4>
<p>I appreciate how Svelte allows loops inside of markup, without requiring you to tie the loop to any elements or map over an array (and in most cases, without requiring you to <code>key</code> each item, either).</p>
<p>Here, assume we have an array called <code>posts</code>, full of objects containing post info:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, { dir: "loops" }, {}, {})}
<p>It\u2019s also nice that you can put any markup you like inside Svelte\u2019s <code>each</code> block; it doesn\u2019t need to be a single element.</p>
<h3 id="${"other-reasons-to-love-svelte"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#other-reasons-to-love-svelte"}"><span class="${"icon icon-link"}"></span></a>Other reasons to love Svelte</h3>
<p>While the above examples don\u2019t cover them, some other features of Svelte that I love include:</p>
<ul><li><p><strong>Everything lives together in one file</strong>. Similar to single-file <code>.vue</code> components, <code>.svelte</code> files keep your component\u2019s logic, markup <em>and</em> styles all together. (More on that in the next section.)</p></li>
<li><p><strong>Scoped CSS by default</strong>. (More on Svelte CSS in the next section, too).</p></li>
<li><p><strong><a href="${"https://svelte.dev/tutorial/transition"}" rel="${"nofollow"}">Transitions and animations baked-in</a></strong>. A robust built-in API means there\u2019s no need to reach for an external library or hand-code visual transformations.</p></li>
<li><p><strong>Built-in <a href="${"https://svelte.dev/tutorial/writable-stores"}" rel="${"nofollow"}">reusable data stores</a></strong> (think: a very light, simple version of Redux or Vuex)</p></li>
<li><p><strong>Easy shorthands</strong> for class binding, prop passing, and event modifiers (that I miss now when working with other frameworks)</p></li></ul>
<p>I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. Even <a href="${"https://svelte.dev/tutorial/basics"}" rel="${"nofollow"}">Svelte\u2019s docs and tutorial site</a> is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!</p>
<h3 id="${"css-in-svelte"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#css-in-svelte"}"><span class="${"icon icon-link"}"></span></a>CSS in Svelte</h3>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `One of my favorite parts about Svelte is how fun and easy it makes styling.
`;
    }
  })}
<p>To add styles to a component in Svelte, you simply create a <code>&lt;style&gt;</code> tag in the component\u2019s <code>.svelte</code> file. Any CSS inside it will be scoped to the component by default.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `One of my favorite parts about Svelte is how fun and easy it makes styling.
`;
    }
  })}
<p>If you prefer, you can use Sass in your components with minimal modification, and by adding <code>lang=&quot;scss&quot;</code> to the <code>&lt;style&gt;</code> tag. This is possible thanks to <a href="${"https://github.com/sveltejs/svelte-preprocess"}" rel="${"nofollow"}">Svelte Preprocess</a>.</p>
<p>Svelte Preprocess is an Svelte add-on, with support for several \u201Clanguages\u201D (incluing Sass, PostCSS and TypeScript) built-in. On top of that, Svelte Preprocess adds an extremely nice Sass feature: you can <a href="${"https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content"}" rel="${"nofollow"}">specify content to prepend when loading your component\u2019s Sass</a>.</p>
<p>This way, if you have all of your Sass variables in an external <code>_vars.scss</code> file like me, you can just have the processer auto-import that into every component. This saves you the trouble of manually <code>@import</code>ing the SCSS file with a bunch of <code>../../../</code> file system traversal every time you want to use a variable in a component.</p>
<h5 id="${"conditional-styling"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conditional-styling"}"><span class="${"icon icon-link"}"></span></a>Conditional styling</h5>
<p>Conditional styling is a <em>breeze</em> in Svelte thanks to its simple shorthands. Let\u2019s look a little closer at how you might apply a <code>.enabled</code> class to a component, based on a boolean value:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> enabled <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>enabled <span class="token operator">?</span> <span class="token string">'enabled'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>That works, and if you\u2019ve used conditional styling in other frameworks, you might have resorted to something similar. But ternaries can be a little wordy and tough to read, especially when one side isn\u2019t even doing anything.</p>
<p>Like in React, you <em>could</em> shorten this to a \u201Cshort-circuit\u201D conditional:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> enabled <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>enabled <span class="token operator">&amp;&amp;</span> <span class="token string">'enabled'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>This also works, but isn\u2019t quite as idiomatic as I\u2019d like, personally; unless you\u2019re already familiar with React, you might not realize what the <code>&amp;&amp;</code> operator is doing in this situation.</p>
<p>As an alternative, in Svelte, we can just do this instead:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> enabled <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">class:</span>enabled=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>enabled<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>That\u2019s pretty cool! It\u2019s easier to read, too; you can simply see what class will apply, based on what JS value.</p>
<p><strong>We can go one step further, though</strong>: if the class name and property name are identical, you can just do this:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> enabled <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">class:</span>enabled</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Whoa!</strong> That\u2019s rad. It\u2019s basically <a href="${"https://alligator.io/js/object-property-shorthand-es6/"}" rel="${"nofollow"}">ES6 object property value shorthand</a> for conditional classes.</p>
<p>Also worth mentioning: you can have as many <code>class</code> attributes as you want (dynamic or otherwise) on a single element:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">class:</span>logged-in=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>isLoggedIn<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">class:</span>darkMode</span>
  <span class="token attr-name"><span class="token namespace">class:</span>reduceMotion</span>
<span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ...Content here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h5 id="${"scoped-vs-global-styling"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#scoped-vs-global-styling"}"><span class="${"icon icon-link"}"></span></a>Scoped vs. global styling</h5>
<p>If you\u2019d like to make a component\u2019s CSS global, you can do that on a per-rule basis with the <code>:global()</code> function:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">ul</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">/* This CSS applies ONLY to the component */</span>

    <span class="token selector">:global(li)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">/* These styles are global */</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong><em>Or</em></strong> if you prefer, you can make the entire tag global with the <code>global</code> attribute:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">global</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* All CSS here is global */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>One word of warning there, however:</strong> global styles can persist once loaded on the page, since Svelte outputs your component\u2019s styles as a standalone CSS file. So if you have a <code>global</code> style tag in a component that only loads conditionally, its styles can stick around even after that component is removed from that page, potentially applying to elements on new pages as well.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `I&#39;ve found it&#39;s a good idea to always use a wrapping parent class selector, even when dealing with scoped styles.
`;
    }
  })}
<p>This could lead to some confusion, since \u201Cglobal\u201D only means global <em>once loaded</em>; the component has to be mounted once first before those styles are actually available.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Because of this, I&#39;ve found it&#39;s a good idea to always use a wrapping parent class selector, even when dealing with scoped styles.
`;
    }
  })}
<p>At worst, it\u2019s redundant, and at best you\u2019ve saved yourself from unintentional style leakage (either now or if you decide to un-scope the styles in the future).</p>
<p>If you\u2019d like to read more about styling in Svelte, be sure to read <a href="${"https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/"}" rel="${"nofollow"}">What I Like About Writing Styles with Svelte</a> on CSS Tricks. </p>
<h3 id="${"props-and-component-communication"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#props-and-component-communication"}"><span class="${"icon icon-link"}"></span></a>Props and component communication</h3>
<p>I appreciate the flexibility that\u2019s baked into Svelte. This is evident in the way it allows you to pass data and events between components.</p>
<p>If you like the way React handles things, you can pass methods to your child components, and keep the one-way flow intact.</p>
<p>If you like Vue\u2019s <code>$emit</code>, you can <a href="${"https://svelte.dev/tutorial/component-events"}" rel="${"nofollow"}">dispatch custom events</a> from child components and listen for them on the parent.</p>
<p>As mentioned above, you can also <code>bind</code> props to enable two-way data flow, or just have both components subscribed to the same Svelte store\u2014or even mix and match. The choice is yours.</p>
<hr>
<p>To create a prop in a Svelte component, you simply create a variable using the <code>export</code> keyword:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> propToBePassedIn
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The above indicates a <em>required</em> prop; if you want to create an optional prop, just give it a default:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> propToBePassedIn <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>This syntax may seem a little odd at first, since we\u2019re generally used to exports as a way to pass things <em>out</em>. It\u2019s admittedly one of Svelte\u2019s quirks, but it becomes familiar fairly quickly. Think of it as a component <em>exporting</em> the responsibility for a value to a parent component.</p>
<p>Let\u2019s have one last comparison, just to look at how it\u2019s done in other frameworks:</p>
${(0, import_index_2749e1b7.v)(CodeComparison, "CodeComparison").$$render($$result, { dir: "props", includeBothVues: true }, {}, {})}
<p>In any of the above cases (since both props are just strings), you\u2019d use the component just like so:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageHeading</span>
  <span class="token attr-name">pageTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The big page title text\u2026<span class="token punctuation">"</span></span>
  <span class="token attr-name">pageSubtitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\u2026and a little subheading<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>A couple of things to point out:</p>
<ul><li><p>Note that React does <em>not</em> have any prop typing, or any way to require a prop. You\u2019d need to import a library for that, probably <a href="${"https://reactjs.org/docs/typechecking-with-proptypes.html"}" rel="${"nofollow"}">PropTypes</a>. (You could of course hand-write the logic in the component, but that doesn\u2019t scale well.)</p></li>
<li><p>While Svelte <em>does</em> allow you to set required props, it doesn\u2019t have prop typing built-in, as Vue does. That\u2019s largely because Svelte is fully TypeScript compatible, however. The expectation seems to be: if you want prop typing, you can just go with TypeScript for that.</p></li></ul>
<h2 id="${"what-to-know-about-svelte"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-to-know-about-svelte"}"><span class="${"icon icon-link"}"></span></a>What to know about Svelte</h2>
<p>I\u2019ll be honest: to me, any arguments against adopting Svelte grow fewer and thinner all the time. But I\u2019ll mention some things you should know and some of the arguments for and against Svelte here, just for perspective if nothing else.</p>
<h3 id="${"debunking-the-small-community-argument"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#debunking-the-small-community-argument"}"><span class="${"icon icon-link"}"></span></a>Debunking the \u201Csmall community\u201D argument</h3>
<p>When comparing Svelte (or any newer technology, for that matter) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems full of resources for you to take advantage of, Svelte can seem comparatively small.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `When you&#39;ve been living in framework land long enough, it&#39;s easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself.
`;
    }
  })}
<p>The fear, then, is that when or if you need to reach for additional packages to handle things beyond the main framework\u2019s capabilities, you may be left in the lurch.</p>
<p>I\u2019d like to put some context around that argument:</p>
<ol><li><p><strong>You don\u2019t often <em>need</em> packages with Svelte.</strong> When you\u2019ve been living in framework land long enough, it\u2019s easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself. </p>
<p>Svelte is much closer to the HTML, CSS and JavaScript of the web, which means you don\u2019t often <em>need</em> to go looking for a package that, say, plays nice with your framework\u2019s hooks or lifecycle methods. Plus, many of the features you\u2019d need a package for in other frameworks come baked in with Svelte (motion, scoped CSS, and state management being the biggest examples).</p></li>
<li><p><strong>Svelte is extremely compatible with vanilla JavaScript packages.</strong> This means that while, yes, the ecosystem of <em>dedicated</em> Svelte packages and plugins is comparatively small, it can often benefit from and easily use <em>any</em> framework-agnostic package\u2014which is a pretty massive portion of the packages out there.</p></li>
<li><p><strong>Even when you <em>do</em> need to build something yourself, SvelteKit makes it comparatively simple.</strong> One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.</p>
<p>A quick web search, however, was all it took to find a very easy way to <a href="${"https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"}" rel="${"nofollow"}">Create an RSS feed in SvelteKit</a>, with no dependencies, in under 40 lines of code.</p></li></ol>
<h3 id="${"yes-svelte-scales"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#yes-svelte-scales"}"><span class="${"icon icon-link"}"></span></a>Yes, Svelte scales</h3>
<p>We\u2019ve talked about how SvelteKit\u2019s components compile and ship as minimal, self-contained JavaScript, which means there\u2019s no overhead of a framework. This approach leads to smaller bundles, but the downside is: there\u2019s also less shared code, so each individual component will inevitably contain repeated code.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The scale at which Svelte&#39;s advantages disappear is actually unrealistically high for just about any\xA0application.
`;
    }
  })}
<p>Loading a framework script upfront adds to the <em>initial</em> load, but the more its code is reused, the the more it pays off\u2014which means that above a certain scale, the advantage of Svelte\u2019s approach is neutralized, and it\u2019s actually <em>more</em> efficient to build with another framework.</p>
<p>This causes some people to claim that Svelte doesn\u2019t scale, but that\u2019s premature.</p>
<p>The <em>real</em> question that matters is: <em>where is that point</em>? Clearly, nobody\u2019s worried about whether React scales, so when does Svelte lose its advantage over React?</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Turns out: the scale at which Svelte&#39;s advantages disappear is actually unrealistically high for just about any application.
`;
    }
  })}
<p>If you\u2019d like more detail, you can read this <a href="${"https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md"}" rel="${"nofollow"}">comparison of React and Svelte bundle scaling</a>, or <a href="${"https://svelte-scaling.acmion.com/"}" rel="${"nofollow"}">this similar comparison</a>. But to summarize both: Svelte\u2019s advantage disappears somewhere around 150 kB of components loaded onto the page. That doesn\u2019t <em>sound</em> like a lot, but components are tiny; it would actually take a pretty massive number (or extremely high complexity) to get to that point. Many components aren\u2019t even 1 kB. (In fact, speed tests have dinged me for not g-zipping components, since Netlify doesn\u2019t automatically gzip any components that are less than 1 kB in size, as the gains are too tiny to bother with.)</p>
<p>For comparison\u2019s sake: <a href="${"/blog/converting-from-gridsome-to-sveltekit/"}">I recently rewrote this site in SvelteKit</a>. Granted, it\u2019s still a small personal site and not a production app, but I\u2019m <em>barely</em> 20% of the way to that scale at any given route. My largest and most complex component\u2014the <code>__layout.svelte</code> file, which has 17 imports\u2014is only 12 kB. None of my other components are even 3 kB. So it\u2019s tough to fathom how I\u2019d make a page large and complex enough to approach the ~150 kB vertex, given I\u2019m orders of magnitude below that right now. (And just to emphasize/clarify: this is <em>per route</em>, not the app as a whole.)</p>
<p>Plus let\u2019s not forget: that\u2019s the scale at which you\u2019re on <em>even ground</em> with React. You\u2019d <em>still</em> have to go significantly larger than <em>that</em> before there would be any meaningful difference between the two.</p>
<p><em>Plus</em>, this whole discussion focuses on how things are right now, in this moment, and not on future upside. Will React get smaller and faster in the future? Probably; it\u2019s supported by a large and talented team. But it\u2019s also benefitted from nearly a decade of optimization already; there may not be a lot left to squeeze out of it at this point.</p>
<p>On the other hand, Svelte is comparably young. If I\u2019m betting on which framework will improve more in the future <em>relative to its current position</em>, I\u2019m backing Svelte, no question.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `It&#39;s worth mentioning that since Svelte started becoming popular, other frameworks have learned from it and closed the performance gap a bit. React is still generally significantly heavier, but Vue 3 is fairly comparable to Svelte performance-wise in many cases.
`;
    }
  })}
<h3 id="${"svelte-doesnt-support-internet-explorer-by-default"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#svelte-doesnt-support-internet-explorer-by-default"}"><span class="${"icon icon-link"}"></span></a>Svelte doesn\u2019t support Internet Explorer by default</h3>
<p>Svelte requires polyfills to run properly in Internet Explorer (and even then, support for any version of IE below 11 is not guaranteed).</p>
<p>If you need to support IE 11, you can read the <a href="${"https://github.com/Shopify/payment-service/issues/6667"}" rel="${"nofollow"}">Svelte/IE11 GitHub issue</a>, which lists some possible workarounds and polyfills. Or, this may be one case where a choice of another framework is necessitated.</p>
<p>However, if you\u2019re starting a new project today: note that Internet Explorer is not long for this world. <a href="${"https://www.searchenginejournal.com/google-search-ends-support-for-internet-explorer-11/421726/"}" rel="${"nofollow"}">Google search recently dropped support for IE 11</a>, citing its tiny and shrinking market share (only around 1% of all browsers). WordPress, which powers about 40% of the web at this point, dropped support for IE 11 in <a href="${"https://wordpress.org/news/2021/05/dropping-support-for-internet-explorer-11/"}" rel="${"nofollow"}">WordPress version 5.8 earlier this year</a>. And even <a href="${"https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/"}" rel="${"nofollow"}">Microsoft itself will be putting the final nail in IE 11\u2019s coffin in July 2022</a>.</p>
<h3 id="${"what-are-your-goals"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-are-your-goals"}"><span class="${"icon icon-link"}"></span></a>What are your goals?</h3>
<p>The answer to the question of whether you should use Svelte <em>right now</em> is a classic: \u201Cit depends.\u201D</p>
<p>Are you learning your <em>first</em> framework? If so, what\u2019s your goal? If you\u2019re looking for an easy tool to learn, for something that will empower you to build interactive UIs, or just for some additional knowledge and experience, I\u2019d recommend Svelte wholeheartedly. </p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `There&#39;s no wrong choice when it comes to developing your own skills\u2014particularly because having one framework down makes it much easier to learn a new one, like moving from instrument to\xA0instrument.
`;
    }
  })}
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `There&#39;s no wrong choice when it comes to developing your own skills and knowledge.
`;
    }
  })}
<p>On the other hand, if you\u2019re learning in the hopes of getting a job with your newfound skills, it would be hard to recommend anything other than React for that pursuit\u2014simply because it\u2019s the <em>largest</em> framework by far in terms of market share and jobs available. I wish that weren\u2019t the case, but tech as a whole (in the U.S., at least), went in heavily on React and I don\u2019t see that changing any time soon. Still, though: if you already know React, I think it\u2019s still worth learning Svelte just for the perspective, if nothing else.</p>
<p>Alternately: are you choosing a technology for a relatively new startup or project? Svelte will likely enable you to move more quickly and build something that\u2019s more performant, but hiring or collaborating may be a challenge, given the relatively small pool of Svelte devs. That said, though: knowing one JS framework tends to make learning a new one easier, and Svelte is in my opinion the easiest to start with. I think any developer who\u2019s already familiar with another frontend framework should be able to pick up Svelte pretty quickly (and vice versa).</p>
<h3 id="${"svelte-shines-in-limited-environments"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#svelte-shines-in-limited-environments"}"><span class="${"icon icon-link"}"></span></a>Svelte shines in limited environments</h3>
<p>I touched on this in the intro, but one of Svelte\u2019s biggest strengths is its minimal JavaScript bundle sizes. This makes it ideal for any code that will be executed by low-power devices that can\u2019t parse JavaScript quickly (smart TVs, watches, and other IoT devices for example, or older smartphones that might be more common in less economically advantaged markets). It <em>also</em> means Svelte shines where bandwidth is limited, which again makes it a perfect fit for older devices and users who might be on poor internet connections.</p>
<h3 id="${"reactivity-with-arrays-and-objects"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#reactivity-with-arrays-and-objects"}"><span class="${"icon icon-link"}"></span></a>Reactivity with arrays and objects</h3>
<p>Svelte\u2019s one notable \u201Cgotcha\u201D is in how it handles automatic reactivity with arrays and objects. You can read more about it in the <a href="${"https://svelte.dev/tutorial/updating-arrays-and-objects"}" rel="${"nofollow"}">Svelte tutorial on arrays and objects</a>, but to summarize: <em>modifying</em> an array or object won\u2019t register with Svelte as an update, and therefore, won\u2019t cause a re-render. You need to <em>re-assign</em> the variable to force Svelte to recognize the change.</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'yellow'</span><span class="token punctuation">]</span>

colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'green'</span><span class="token punctuation">)</span>
<span class="token comment">// \u274C Updates the array, but doesn't cause a re-render</span>

colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>colors<span class="token punctuation">,</span> <span class="token string">'blue'</span><span class="token punctuation">]</span>
<span class="token comment">// \u2705 Reassigning causes a re-render</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The same principle works with objects, as well:</p>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> me <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Josh'</span>
<span class="token punctuation">&#125;</span>

me<span class="token punctuation">.</span>lastName <span class="token operator">=</span> <span class="token string">'Collinsworth'</span>
<span class="token comment">// \u274C Updates the object, but doesn't cause a re-render</span>

me <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token operator">...</span>me<span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Collinsworth'</span> <span class="token punctuation">&#125;</span>
<span class="token comment">// \u2705 Reassigning causes a re-render</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>If for some reason you <em>had</em> to use <code>.push()</code>, you could just assign the array to itself afterwards. This would work:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">myArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newThing<span class="token punctuation">)</span>
myArray <span class="token operator">=</span> myArray</code>`}<!-- HTML_TAG_END --></pre>
<p>But I think this is a little nicer (and works the exact same way):</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>myArray<span class="token punctuation">,</span> newThing<span class="token punctuation">]</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you want to get nerdy for a second: <strong>this is actually a quirk of JavaScript itself</strong>, rather than of Svelte. JavaScript still considers the array or object as the same unique thing until and unless it\u2019s reassigned. (This is why you can use <code>const</code> to declare an array or object and still modify its properties; the variable itself hasn\u2019t been mutated, even though its contents have.)</p>
<h2 id="${"how-to-get-started-with-svelte"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-to-get-started-with-svelte"}"><span class="${"icon icon-link"}"></span></a>How to get started with Svelte</h2>
<p>If you\u2019d like to dive in and get some hands-on experience with Svelte (and I recommend you do!), there are two main ways forward at this point.</p>
<h3 id="${"the-svelte-repl"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-svelte-repl"}"><span class="${"icon icon-link"}"></span></a>The Svelte REPL</h3>
<p>Clearly I\u2019m a big fan, so I could be biased, but I honestly think Svelte might have the best tutorial and documentation of any framework out there.</p>
<p>There\u2019s a wonderful introduction in the <a href="${"https://svelte.dev/tutorial/basics"}" rel="${"nofollow"}">Svelte Tutorial</a>, which functions as a live coding environment where you\u2019re taught Svelte bit by bit, and try to finish incomplete Svelte code challenges along the way. (Or, if you like, you can just click \u201Cshow me\u201D to see the complete lesson.) It\u2019s fun and engaging, and covers all of Svelte\u2019s concepts from simple to complex extremely well. In fact, I find myself going back to it over and over. I highly recommend it both for learning and for reference.</p>
<h3 id="${"starting-your-own-svelte-project"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#starting-your-own-svelte-project"}"><span class="${"icon icon-link"}"></span></a>Starting your own Svelte project</h3>
<p>Alternatively, there\u2019s a <a href="${"https://svelte.dev/blog/the-easiest-way-to-get-started"}" rel="${"nofollow"}">Svelte quickstart guide</a> that walks you through installing Svelte on your machine. I\u2019ll post the directions here, too; it\u2019s suprisingly quick, assuming you already have NPM installed:</p>
<blockquote><pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">npx degit sveltejs/template my-svelte-project
<span class="token builtin class-name">cd</span> my-svelte-project
<span class="token comment"># to use TypeScript run:</span>
<span class="token comment"># node scripts/setupTypeScript.js</span>

<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev</code>`}<!-- HTML_TAG_END --></pre></blockquote>
<p>If you\u2019re not familiar with those commands:</p>
<ul><li><p><code>npx</code> allows you to run something from NPM, but <em>without actually installing it on your machine</em>. In this case, we just want to run <code>degit</code> once; we don\u2019t need to keep it around for anything afterward.</p></li>
<li><p><code>degit</code> clones a repo (in this case, the <code>template</code> project from <code>sveltejs</code>), but <em>without</em> its git history; it\u2019ll be as though you\u2019re starting up a fresh new project.</p></li></ul>
<p>Naturally, you can replace <code>my-svelte-project</code> with whatever name you\u2019d like for your local project. Once you <code>npm install</code>, <code>npm run dev</code> will start a dev server that will show you your project and automatically refresh as you save your changes.</p>
<h2 id="${"conclusion"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conclusion"}"><span class="${"icon icon-link"}"></span></a>Conclusion</h2>
<p>I hope you\u2019re now as excited about Svelte as I am! I encourage you to try it out on your own, even if it\u2019s just playing around in the <a href="${"https://svelte.dev/tutorial/basics"}" rel="${"nofollow"}">Svelte tutorial</a>. If you haven\u2019t tried it before, I think you\u2019ll be pleasantly surprised how comparatively straightforward it is.</p>
<p>And if you\u2019re looking to dive deeper, there\u2019s also SvelteKit, a Svelte app framework for larger/more complex projects. I\u2019ve written a post on <a href="${"/blog/converting-from-gridsome-to-sveltekit"}">converting this site to SvelteKit from Gridsome</a>, if you\u2019d like to check it out as well.</p>
<p>In any case, thanks for reading, and if you have any questions or thoughts, <a href="${"/contact?from_page=svelte_comparison"}">reach out</a> or leave a comment below!</p>`;
});
