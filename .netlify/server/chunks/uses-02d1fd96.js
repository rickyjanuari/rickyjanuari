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
  default: () => Uses
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_ExternalLink_29dd7148 = require("./ExternalLink-29dd7148.js");
var FontTester_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.tester-form.svelte-l7gktv.svelte-l7gktv{overflow:visible;margin:4rem 0 0;position:relative;font-family:var(--headingFont)}.tester-form.svelte-l7gktv label.svelte-l7gktv{font-size:0.8rem;flex:1 1 14em;margin-top:0.5rem}.tester-form.svelte-l7gktv input[type=range].svelte-l7gktv{flex:1 1 70%;padding:0;margin:0.5rem 0 0;max-width:12rem;outline:none;border:none}.tester-form.svelte-l7gktv input[type=text].svelte-l7gktv{border:none;margin:0;padding:0.6em 0;width:100vw;max-width:calc(100vw - (var(--margin) + 1rem));line-height:1em;height:1em;overflow:visible;position:absolute}.tester-form.svelte-l7gktv input[type=text].svelte-l7gktv:hover{cursor:text}.tester-form.svelte-l7gktv .flex-container.svelte-l7gktv{padding-top:var(--halfNote);display:flex;align-items:flex-end;align-content:flex-end;position:relative}.tester-form.svelte-l7gktv .details.svelte-l7gktv{margin-top:1rem;font-style:normal}',
  map: null
};
const FontTester = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { font } = $$props;
  let { label = "" } = $$props;
  let { fontStyle = "normal" } = $$props;
  let { fontWeight = "normal" } = $$props;
  let { placeholder = "" } = $$props;
  let { link = "" } = $$props;
  let { bold = false } = $$props;
  let { italic = false } = $$props;
  let size = 42;
  let text = "";
  let displayBold = false;
  let displayItalic = false;
  let sizeInPx;
  let fontName;
  let computedFontWeight;
  let computedFontStyle;
  if ($$props.font === void 0 && $$bindings.font && font !== void 0)
    $$bindings.font(font);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.fontStyle === void 0 && $$bindings.fontStyle && fontStyle !== void 0)
    $$bindings.fontStyle(fontStyle);
  if ($$props.fontWeight === void 0 && $$bindings.fontWeight && fontWeight !== void 0)
    $$bindings.fontWeight(fontWeight);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0)
    $$bindings.bold(bold);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  $$result.css.add(css$1);
  sizeInPx = size + "px";
  fontName = label || font;
  computedFontWeight = fontWeight || "normal";
  computedFontStyle = fontStyle || "normal";
  return `<form class="${"tester-form svelte-l7gktv"}"><div class="${"flex-container svelte-l7gktv"}"><label${(0, import_index_2749e1b7.d)("for", fontName, 0)} class="${"sr svelte-l7gktv"}">${(0, import_index_2749e1b7.e)(fontName)}</label>
			<input${(0, import_index_2749e1b7.d)("id", fontName, 0)} type="${"text"}"${(0, import_index_2749e1b7.d)("placeholder", placeholder, 0)} style="${"font-family: " + (0, import_index_2749e1b7.e)(font) + "; font-size: " + (0, import_index_2749e1b7.e)(sizeInPx) + "; font-style: " + (0, import_index_2749e1b7.e)(computedFontStyle) + "; font-weight: " + (0, import_index_2749e1b7.e)(computedFontWeight) + ";"}" class="${"svelte-l7gktv"}"${(0, import_index_2749e1b7.d)("value", text, 0)}></div>

		<div><label for="${(0, import_index_2749e1b7.e)(fontName) + "-size"}" class="${"sr svelte-l7gktv"}">Font size:</label>
			<input id="${(0, import_index_2749e1b7.e)(fontName) + "-size"}" type="${"range"}" min="${"8"}" max="${"127"}" class="${"svelte-l7gktv"}"${(0, import_index_2749e1b7.d)("value", size, 0)}></div>

		${bold ? `<input id="${(0, import_index_2749e1b7.e)(fontName) + "-bold"}" type="${"checkbox"}"${(0, import_index_2749e1b7.d)("checked", displayBold, 1)}>
      <label for="${(0, import_index_2749e1b7.e)(fontName) + "-bold"}" class="${"svelte-l7gktv"}">Bold</label>` : ``}

		${italic ? `<input id="${(0, import_index_2749e1b7.e)(fontName) + "-italic"}" type="${"checkbox"}"${(0, import_index_2749e1b7.d)("checked", displayItalic, 1)}>
      <label for="${(0, import_index_2749e1b7.e)(fontName) + "-italic"}" class="${"svelte-l7gktv"}">Italic</label>` : ``}

		${link ? `<p class="${"details svelte-l7gktv"}"><a rel="${"external"}"${(0, import_index_2749e1b7.d)("href", link, 0)}>${(0, import_index_2749e1b7.e)(fontName)} family${(0, import_index_2749e1b7.v)(import_ExternalLink_29dd7148.E, "ExternalLink").$$render($$result, {}, {}, {})}</a></p>` : ``}
	</form>`;
});
var SiteColors_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.brand-colors.svelte-12pid1j.svelte-12pid1j{display:grid;grid-template-columns:repeat(auto-fit, minmax(8.5rem, 1fr));padding:0}.brand-colors.svelte-12pid1j .color.svelte-12pid1j{list-style-type:none;display:flex;align-items:center;font-size:0.9rem;font-family:var(--codeFont);text-shadow:0 0 1px var(--trueWhite)}.brand-colors.svelte-12pid1j .color .swatch.svelte-12pid1j{width:3.5em;height:3.5em;margin-right:0.5rem}',
  map: null
};
const SiteColors = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  const colors = [
    "#ffd100",
    "#34657f",
    "#7ba7bc",
    "#ff6a13",
    "#e4002b",
    "#a7a8aa",
    "#888b8d",
    "#53565a",
    "#341F23",
    "#101820"
  ];
  $$result.css.add(css);
  return `<ul class="${"brand-colors no-bullets svelte-12pid1j"}">${(0, import_index_2749e1b7.b)(colors, (color) => {
    return `<li class="${"color svelte-12pid1j"}"><div class="${"swatch svelte-12pid1j"}" style="${"background-color: " + (0, import_index_2749e1b7.e)(color)}"></div>
      <span>${(0, import_index_2749e1b7.e)(color)}</span>
    </li>`;
  })}
</ul>`;
});
const Uses = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"development"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#development"}"><span class="${"icon icon-link"}"></span></a>Development</h2>
<h3 id="${"languages-and-frameworks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#languages-and-frameworks"}"><span class="${"icon icon-link"}"></span></a>Languages and frameworks</h3>
<ul><li><p>ES6+ JavaScript is my main language these days. I\u2019ve spent the last few years building in
<a href="${"https://vuejs.org/"}" rel="${"nofollow"}">Vue</a> (I\u2019m unsurprisingly, therefore, a huge fan of
<a href="${"https://nuxtjs.org"}" rel="${"nofollow"}">Nuxt</a> and
<a href="${"https://gridsome.org/"}" rel="${"nofollow"}">Gridsome</a>).</p></li>
<li><p>Recently, however, I\u2019ve been moving most new projects over to
<a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a>
(including this website!), and loving both the dev experience and reduced bundle size.
I\u2019ve also been working on implmenting <a href="${"https://www.typescriptlang.org/"}" rel="${"nofollow"}">TypeScript</a> in all new projects.
Professionally, I work in <a href="${"https://reactjs.org/"}" rel="${"nofollow"}">React</a>,
and have built several personal projects with it as well.
I\u2019ve also got working experience with jQuery and Knockout.</p></li>
<li><p>I love CSS passionately, but I don\u2019t use any libraries or frameworks; all my CSS is from-scratch, responsive, and custom (usually written in
<a href="${"https://sass-lang.com/"}" rel="${"nofollow"}">SCSS</a>). I love authoring smooth, fluid transitions and animations.</p></li>
<li><p>I\u2019m a strong proponent of well-architected, accessible, and semantic <b>HTML</b>. (I create and use SVG often.)</p></li>
<li><p>I\u2019m a <a href="${"https://wordpress.org/"}" rel="${"nofollow"}">WordPress</a> expert and generally prefer to build themes from scratch. I\u2019m capable with PHP and MySQL.</p></li>
<li><p>I wouldn\u2019t call myself a full-stack developer, but I know my way around Ruby on Rails and have dabbled in some Node and Laravel.</p></li></ul>
<h3 id="${"code-tools"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#code-tools"}"><span class="${"icon icon-link"}"></span></a>Code tools</h3>
<ul><li><p><a href="${"https://code.visualstudio.com/"}" rel="${"nofollow"}">Visual Studio Code</a>: my favorite editor ever. I was a reluctant Sublime Text convert, but the switch was more than worth it.</p>
<ul><li><p><strong>Theme</strong>: I love <a href="${"https://draculatheme.com/pro"}" rel="${"nofollow"}">Dracula Pro</a>; it strikes the perfect balance of contrast and color to my eye. I also appreciate that it comes with identical themes for other apps, like Slack, iTerm, and others. It <em>is</em> expensive, however, so for a free option, I\u2019d go with go with good ol\u2019 <a href="${"https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula"}" rel="${"nofollow"}">Dracula Official</a>.</p></li>
<li><p><strong>Font</strong>: <a href="${"https://www.monolisa.dev/"}" rel="${"nofollow"}">MonoLisa</a>.
I\u2019m a code nerd and a font nerd, so I don\u2019t take this choice lightly, but this is my favorite dev font. I love its combination of legibility and subtle personality, and plus, the code ligatures are great. (If you\u2019re not willing to spend the money, though\u2014and I definitely understand if that\u2019s the case\u2014
<a href="${"https://github.com/tonsky/FiraCode"}" rel="${"nofollow"}">Fira Code</a> is my runner-up.)</p></li>
<li><p><strong>Extensions</strong>: I don\u2019t have too many global recommendations here (it depends a lot on what you\u2019re working with), but I\u2019ll mention:</p>
<ul><li><p><a href="${"https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html"}" rel="${"nofollow"}">es6-string-html</a>:
treats HTML inside template literal strings like actual HTML code, for the purposes of highlighting, code completion, Emmett, etc.</p></li>
<li><p><a href="${"https://marketplace.visualstudio.com/items?itemName=pnp.polacode"}" rel="${"nofollow"}">Polacode</a>:
a nifty, pretty way to take code screenshots</p></li>
<li><p><a href="${"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"}" rel="${"nofollow"}">GitLens</a>:
less indispensable now that VS Code has the <a href="${"https://scotch.io/bar-talk/vs-code-v144-adds-a-git-timeline-view"}" rel="${"nofollow"}">Timeline view</a>, but still amazingly handy for viewing git status and history in projects.</p></li>
<li><p><a href="${"https://marketplace.visualstudio.com/items?itemName=Compulim.compulim-vscode-closetag"}" rel="${"nofollow"}">Close HTML/XML Tag</a>:
the only keyboard shortcut I miss from Sublime Text is easily replicated with this extension. Gives you a key command to auto-close whatever HTML tag your cursor is inside of.</p></li></ul></li></ul></li></ul>
<ul><li><p><a href="${"https://www.mozilla.org/en-US/firefox/new/"}" rel="${"nofollow"}">Firefox</a>:
took some getting used to, but it\u2019s a great browser with some awesome tools. It may not be as performant as Chromium browsers in some regards, but I personally view that as feature, not a bug; if I can make a transition or animation smooth in Firefox, I know it\u2019s buttery everywhere else, too.</p></li>
<li><p><a href="${"https://localwp.com/"}" rel="${"nofollow"}">Local</a>:
hands-down the best way to develop WordPress sites. Fast and easy (especially if you host with Flywheel or WP Engine; you can push and pull sites directly).</p></li>
<li><p><a href="${"https://codekitapp.com/"}" rel="${"nofollow"}">CodeKit</a>:
there\u2019s nothing CodeKit does that I couldn\u2019t accomplish by fiddling with NPM scripts, but why bother? It\u2019s smooth and easy to use, and as a bonus, it works great with Local.</p></li>
<li><p><a href="${"https://www.iterm2.com/"}" rel="${"nofollow"}">iTerm2</a>:
I\u2019ve tried other terminals, but none seem to run as well, and with the recent update, arguably, none look better, either.</p></li>
<li><p><a href="${"https://www.netlify.com/"}" rel="${"nofollow"}">Netlify</a>:
I\u2019m also a fan of
<a href="${"https://vercel.com/home"}" rel="${"nofollow"}">Now</a>, but Netlify has taken over my Jamstack hosting #1 spot. It\u2019s free to start and unbelievably easy. Netlify makes the painfully difficult effortlessly simple.</p></li></ul>
<h2 id="${"hardware"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#hardware"}"><span class="${"icon icon-link"}"></span></a>Hardware</h2>
<ul><li><p><a href="${"https://www.anker.com/products/variant/xanker-24g-wireless-vertical-ergonomic-optical-mouse/xa7852011"}" rel="${"nofollow"}">Anker 2.4G Wireless Vertical Ergonomic Optical Mouse</a>:
I could feel my wrist straining using both a magic mouse and a touchpad. I switched to this mouse years ago. It took some adjustment, but I don\u2019t ever want to use another mouse again, and I don\u2019t even use the extra buttons.</p></li>
<li><p><a href="${"https://kinesis-ergo.com/shop/freestyle2-mac/"}" rel="${"nofollow"}">Kinesis Freestyle2 for Mac</a> keyboard:
I paid for months of sitting-on-the-couch laptop time with a repetitive stress injury on my right wrist. This keyboard is a bit of an adjustment, but it has helped a lot with the wrist pain by keeping my wrists from going to outward angles.</p></li>
<li><p><a href="${"https://www.hermanmiller.com/products/seating/office-chairs/sayl-chairs/"}" rel="${"nofollow"}">Herman Miller Sayl Chair</a>:
I made it about two months as a full-time work-from-home employee before I went and bought one of these chairs. It\u2019s the most comfortable and easily adjustable office chair I\u2019ve ever sat in (and it looks really nice, too).</p></li>
<li><p><a href="${"https://www.upliftdesk.com/uplift-v2-standing-desk-frame/"}" rel="${"nofollow"}">Uplift V2 C-Frame</a> standing desk:
Not a lot of purchases I\u2019ve been happier with than this one. It works incredibly well and is surprisingly sturdy, even without springing for the commercial version. (I have the 27.5\u201D feet for my larger Ikea desktop, and the Advanced Digital Memory Keypad.)</p></li></ul>
<h2 id="${"productivity--utility"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#productivity--utility"}"><span class="${"icon icon-link"}"></span></a>Productivity &amp; Utility</h2>
<ul><li><p><a href="${"https://1password.com"}" rel="${"nofollow"}">1Password</a>:
The first thing I instal on every new device. I\u2019ve tried and liked other password software, but 1Password is just the most reliable cross-platform and -device in my experience.</p></li>
<li><p><a href="${"https://http://xalfredapp.com"}" rel="${"nofollow"}">Alfred</a>:
the <em>second</em> thing I install on every new Mac. (I use the <a href="${"https://www.alfredapp.com/powerpack/"}" rel="${"nofollow"}">powerpack</a> for added features, which is worth every penny.) The main features I love are clipboard history, snippet expansion, global search (never touch Finder again!), and workflows to automate repetitive or tedious tasks. Wouldn\u2019t ever want to work without it.</p></li>
<li><p><a href="${"https://www.getcloudapp.com/"}" rel="${"nofollow"}">CloudApp</a>:
taking screenshots and videos is a many-times-daily activity for me, and CloudApp makes it as seamless as possible.</p></li>
<li><p><a href="${"https://rightfontapp.com/"}" rel="${"nofollow"}">RightFont</a>:
a simple, minimalist app for managing your computer\u2019s fonts that looks and works better than Mac\u2019s built-in FontBook.</p></li>
<li><p><a href="${"https://rectangleapp.com/"}" rel="${"nofollow"}">Rectangle</a>:
never drag or resize another window again. Keyboard shortcuts to put everything right where you need it.</p></li>
<li><p><a href="${"https://www.macbartender.com/"}" rel="${"nofollow"}">Bartender</a>:
helps wrangle all those app icons in your taskbar if you\u2019re a minimalist like me.</p></li>
<li><p><a href="${"https://matthewpalmer.net/rocket/"}" rel="${"nofollow"}">Rocket</a>:
lends you Slack-like ability to use emoji anywhere. Way better than the OSX default emoji picker.</p></li>
<li><p><a href="${"https://notion.so"}" rel="${"nofollow"}">Notion</a>:
my current favorite notes app. Can grow and get as complex as you need it to be, but for simple notes, the markdown and code highlight support is fantastic.</p></li></ul>
<h2 id="${"design-and-illustration"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#design-and-illustration"}"><span class="${"icon icon-link"}"></span></a>Design and Illustration</h2>
<ul><li><p><a href="${"https://xaffinity.serif.com"}" rel="${"nofollow"}">Affinity Photo, Designer and Publisher</a>:
you can have software mostly as good as Photoshop, Illustrator and InDesign <em>forever</em> for the cost of three months of Creative Cloud.</p></li>
<li><p><a href="${"https://www.wacom.com/en-us/products/pen-tablets/intuos-pro-small"}" rel="${"nofollow"}">Wacom Intuos Pro PTH-451</a> (small):
I don\u2019t often illustrate these days, but when I do, I\u2019m always glad I have this fantastic pad. Wireless is a big plus.</p></li></ul>
<h2 id="${"this-site"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#this-site"}"><span class="${"icon icon-link"}"></span></a>This site</h2>
<p class="${"details"}">This is about the fifth iteration of my personal brand. The colors haven&#39;t changed, but I rotate fonts and layout once every year or two.</p>
<h3 id="${"colors"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#colors"}"><span class="${"icon icon-link"}"></span></a>Colors</h3>
${(0, import_index_2749e1b7.v)(SiteColors, "SiteColors").$$render($$result, {}, {}, {})}
<h3 id="${"fonts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#fonts"}"><span class="${"icon icon-link"}"></span></a>Fonts</h3>
${(0, import_index_2749e1b7.v)(FontTester, "FontTester").$$render($$result, {
    font: "Alkes",
    label: "Alkes",
    link: "https://www.myfonts.com/fonts/font-fabric/alkes/",
    italic: true,
    bold: true
  }, {}, {})}
${(0, import_index_2749e1b7.v)(FontTester, "FontTester").$$render($$result, {
    font: "Averta-Std",
    label: "Averta Std",
    link: "https://www.myfonts.com/fonts/intelligent-foundry/averta-standard/",
    bold: true
  }, {}, {})}
${(0, import_index_2749e1b7.v)(FontTester, "FontTester").$$render($$result, {
    font: "MonoLisa",
    label: "MonoLisa\n  Regular",
    link: "https://www.monolisa.dev/"
  }, {}, {})}
<p class="${"details"}">Other fonts I&#39;ve used previously:
  <a href="${"https://www.myfonts.com/fonts/jcfonts/korb/"}" rel="${"external"}">Korb</a>
  (both on its own and paired with <a href="${"https://fonts.google.com/specimen/Bitter/"}" rel="${"external"}">Bitter</a>);
  <a href="${"https://www.myfonts.com/fonts/bitstream/clarendon/"}" rel="${"external"}">Clarendon BT Pro</a> +
  <a href="${"https://www.myfonts.com/fonts/latinotype/texta/"}" rel="${"external"}">Texta</a>; and
  <a href="${"https://www.myfonts.com/fonts/stawix/amsi-pro/"}" rel="${"external"}">Amsi Pro</a> +
  <a href="${"https://www.myfonts.com/search/sagona/"}" rel="${"external"}">Sagona</a>;
  <a href="${"https://www.myfonts.com/fonts/typemates/pensum-display/"}" rel="${"external"}">Pensum Display.</a>
  (I know you do not care, but this is here mostly just for my own memory.)
</p>`;
});
