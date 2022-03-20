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
  default: () => Projects
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../chunks/index-2749e1b7.js");
var import_Main_5d179e14 = require("../../chunks/Main-5d179e14.js");
const CodePenLink = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { hash } = $$props;
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0)
    $$bindings.hash(hash);
  return `<a href="${"https://codepen.io/collinsworth/pen/" + (0, import_index_2749e1b7.e)(hash)}" rel="${"external"}">${slots.default ? slots.default({}) : ``}</a>`;
});
var projects_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.projects.svelte-phc9ii p.svelte-phc9ii.svelte-phc9ii{max-width:var(--maxWidth)}.projects.svelte-phc9ii article.svelte-phc9ii.svelte-phc9ii{display:grid;grid-template-columns:1fr;gap:var(--halfNote);align-items:start}@media(min-width: 1024px){.projects.svelte-phc9ii article.svelte-phc9ii.svelte-phc9ii{grid-template-columns:2fr 3fr}.projects.svelte-phc9ii article .sticky.svelte-phc9ii.svelte-phc9ii{position:-webkit-sticky;position:sticky;top:var(--halfNote)}}@media(min-width: 1440px){.projects.svelte-phc9ii article.svelte-phc9ii.svelte-phc9ii{grid-template-columns:2fr 3fr}}.projects.svelte-phc9ii article.svelte-phc9ii+article.svelte-phc9ii{margin-top:6rem}.projects.svelte-phc9ii .image-gallery img.svelte-phc9ii.svelte-phc9ii{margin:0 auto var(--halfNote);display:block;max-width:unset;width:calc(100% + var(--margin) * 2);margin-left:calc(var(--margin) * -1)}@media(min-width: 1024px){.projects.svelte-phc9ii .image-gallery img.svelte-phc9ii.svelte-phc9ii{max-width:calc(100% + var(--margin));width:auto;margin-left:0}}',
  map: null
};
const Projects = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ricky Januari | Projects</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"A sampling of apps and code projects."}" data-svelte="svelte-x0cj59"><meta property="${"og:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-x0cj59"><meta name="${"twitter:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-x0cj59">`, ""}


${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"projects compressed-content double-wide svelte-phc9ii"}"><article class="${"svelte-phc9ii"}"><div class="${"sticky svelte-phc9ii"}"><h2>Featured project: Quina</h2>
        
        <p class="${"svelte-phc9ii"}">Quina is a strategic, logical word game available on 
          <a href="${"https://play.google.com/store/apps/details?id=app.quina.collinsworth&hl=en_US\u2277=US"}" rel="${"external"}">Google Play</a>
          and as a <a href="${"https://quina.app"}" rel="${"external"}">Progressive Web App</a>. 
          I wrote about the process of building the app and the tech behind it both 
          <a href="${"/blog/announcing-quina-my-first-app"}">on this blog</a> and 
          <a rel="${"external"}" href="${"https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/"}">CSS Tricks</a>.
        </p></div>
      
      <div class="${"image-gallery"}"><img src="${"/images/post_images/01-Google-Pixel-4-Front.jpg"}" alt="${"The main menu of Quina, with options for 'New Game', 'How to Play', 'Preferences,' Stats & Awards', 'About/FAQ', and 'Support Quina.'"}" loading="${"lazy"}" width="${"1030"}" height="${"1200"}" style="${"aspect-ratio: 103 / 120"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/quina-mockup1.png"}" alt="${""}" loading="${"lazy"}" width="${"1200"}" height="${"1697"}" style="${"aspect-ratio: 1200 / 1697"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/post_images/tutorial-1.png"}" alt="${"Guess the secred five-letter code word in ten guesses or fewer."}" loading="${"lazy"}" width="${"1600"}" height="${"900"}" style="${"aspect-ratio: 16 / 9"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/quina-clues.png"}" alt="${"Use clues to refine your guesses. A clue of '3/2' means three letters in your guess are also in the code word, and two are in the same position in both words."}" loading="${"lazy"}" width="${"1600"}" height="${"900"}" style="${"aspect-ratio: 16 / 9"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/post_images/tutorial-3.png"}" alt="${"You can tap or long-press letters in your guesses to cross them out or highlight them"}" loading="${"lazy"}" width="${"1600"}" height="${"900"}" style="${"aspect-ratio: 16 / 9"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/post_images/tutorial-4.png"}" alt="${"Quina tracks your stats, such as how many games you've played on each difficulty, longest win streak, and many more!"}" loading="${"lazy"}" width="${"1600"}" height="${"900"}" style="${"aspect-ratio: 16 / 9"}" class="${"svelte-phc9ii"}">
        <img src="${"/images/post_images/02-Google-Pixel-4-Front.png"}" alt="${"Quina features both light and dark mode."}" loading="${"lazy"}" width="${"1600"}" height="${"1442"}" class="${"svelte-phc9ii"}"></div></article>

    <article class="${"svelte-phc9ii"}"><div class="${"sticky svelte-phc9ii"}"><h2>SvelteKit static blog starter</h2>
        
        <p class="${"svelte-phc9ii"}">A fully open-source, pre-configured starter for a SvelteKit blog. Includes Markdown and Sass preprocessing; has mdsvex with rehype plugins pre-installed; and includes automatic prefetching of top-level routes, an RSS feed, and a JSON API.</p>
        <ul><li><a href="${"https://sveltekit-static-starter.netlify.app"}">Live demo</a></li>
          <li><a href="${"https://github.com/rickyjanuari/sveltekit-blog-starter"}">GitHub repo</a></li></ul></div>
      
      <div class="${"image-gallery"}"><figure><iframe src="${"https://sveltekit-static-starter.netlify.app"}" frameborder="${"0"}" title="${"Live demo of the starter, from sveltekit-static-starter.netlify.app"}" width="${"100%"}" height="${"800"}"></iframe>
          <figcaption><a href="${"https://sveltekit-static-starter.netlify.app"}">sveltekit-static-starter.netlify.app</a></figcaption></figure></div></article>
      
    <article class="${"svelte-phc9ii"}"><div class="${"sticky svelte-phc9ii"}"><h2>CodePen Projects</h2>
        <p class="${"svelte-phc9ii"}">A sampling of some games and experiments I&#39;ve built on <a href="${"https://codepen.io/collinsworth"}" rel="${"external"}">CodePen</a>, mostly in Vue, but some in React or vanilla JS as well.</p></div>
      <ul class="${"codepens"}"><li>A ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "XwPXrM" }, {}, {
        default: () => {
          return `Sliding Puzzle in Vue`;
        }
      })} (with an ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "MMagLb" }, {}, {
        default: () => {
          return `alternate version`;
        }
      })} that converts images to sliding puzzles)
        </li>
        <li>A fun ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "OYgGNK" }, {}, {
        default: () => {
          return `Emoji Slider`;
        }
      })} made with Vue
        </li>
        <li>An ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "MLjVrQ" }, {}, {
        default: () => {
          return `interactive Vue tutorial`;
        }
      })} blog post
        </li>
        <li>The game of ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "oNbavJN" }, {}, {
        default: () => {
          return `Hangman`;
        }
      })} in Vue, using a quotes API
        </li>
        <li>An ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "bKXoRN" }, {}, {
        default: () => {
          return `Interactive CSS Filter React Component`;
        }
      })}</li>
        <li>The classic ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "Pymdxo" }, {}, {
        default: () => {
          return `Color Flood Game`;
        }
      })} build with React
        </li>
        <li>The game of ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "MWwXpLd" }, {}, {
        default: () => {
          return `Connect Four`;
        }
      })} in Vue
        </li>
        <li>A silly &quot;${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "vYOPKqx" }, {}, {
        default: () => {
          return `Pick Two`;
        }
      })} of three&quot; checklist
        </li>
        <li>Some pure CSS illustrations, like this ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "vdGYpo" }, {}, {
        default: () => {
          return `Raccoon Mario sprite`;
        }
      })} and this ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "LVMRwQ" }, {}, {
        default: () => {
          return `Pure CSS Game Boy Advance SP`;
        }
      })}</li>
        <li>A silly ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "ExjZexY" }, {}, {
        default: () => {
          return `game of cat and mouse`;
        }
      })}</li>
        <li>A small but handy ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "bGdmmrY" }, {}, {
        default: () => {
          return `liquid measurement converter`;
        }
      })} app
        </li>
        <li>A ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "WNrpGJX" }, {}, {
        default: () => {
          return `dramatic d20 roller`;
        }
      })}</li>
        <li>${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "ZEGrMRQ" }, {}, {
        default: () => {
          return `Generative typographic art grid`;
        }
      })} in Vue
        </li>
        <li>A ${(0, import_index_2749e1b7.v)(CodePenLink, "CodePenLink").$$render($$result, { hash: "mdJmBQz" }, {}, {
        default: () => {
          return `Hex/RGB(a)`;
        }
      })} color converter in Vue
        </li></ul></article>


    <article class="${"svelte-phc9ii"}"><div class="${"sticky svelte-phc9ii"}"><h2>Other projects and\xA0apps</h2>
        <p class="${"svelte-phc9ii"}">You can also find my work on <a href="${"https://github.com/rickyjanuari"}">GitHub</a> (although truth be told I don&#39;t really bother curating it there at all.)</p></div>
      <ul><li>Website for <a href="${"https://rise.getflywheel.com"}" rel="${"external"}">Rise</a>, Flywheel/WP Engine&#39;s BIPOC employee resource group
        </li>
        <li><a href="${"https://passthepigs.vercel.app/"}" rel="${"external"}">Pass the Pigs scorekeeper app</a> built in React
        </li>
        <li>A handy <a href="${"https://vlmc.netlify.app/"}" rel="${"external"}">liquid measurement converter</a> progressive web app, built with Vue
        </li>
        <li>A Svelte <a href="${"https://dadjokefinder.netlify.app/"}" rel="${"external"}">Dad Joke randomizer and searcher app</a></li>
        <li><a href="${"https://smitty.netlify.app"}" rel="${"external"}">&quot;Smitty&quot;</a>, the Super Metroid Item Tracker app built in Svelte
        </li>
        <li><a href="${"https://wpmultisitedomainreplace.com"}" rel="${"external"}">WPMultisiteDomainReplace.com</a>, a Nuxt app to update your WordPress multisite&#39;s database when switching main domains
        </li>
        <li><a href="${"https://qvicklist.vercel.app/"}" rel="${"external"}">Qvick List</a>, an on-demand Vue to-do list app that saves to local storage. (Needs some updating.)
        </li>
        <li>Flywheel retreat websites for <a href="${"https://fest2019.getflywheel.com/"}" rel="${"external"}">2019</a> and <a href="${"https://fest.getflywheel.com/"}" rel="${"external"}">2020</a>.
        </li>
        <li>A <a href="${"https://github.com/rickyjanuari/flywheel-cloud-wp-load-fix"}">WordPress plugin</a> to help make various other plugins and theme compatible with <a href="${"https://getflywheel.com/cloud-platform/"}">Flywheel&#39;s cloud platform</a></li>
        <li>A Chrome extension, an internal knowledge base, various WordPress themes, a couple of Node CLI tools, and a handful of trainings and presentations (none of which I can show here because employer privacy and such)
        </li></ul></article></div>`;
    }
  })}`;
});
