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
  default: () => Category,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../../../chunks/index-2749e1b7.js");
var import_Main_5d179e14 = require("../../../../chunks/Main-5d179e14.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}h1.h2.svelte-g8rxtn.svelte-g8rxtn{margin:0 0 var(--wholeNote)}li.svelte-g8rxtn.svelte-g8rxtn{text-transform:uppercase;margin-bottom:var(--quarterNote);font-style:italic}li.svelte-g8rxtn a.svelte-g8rxtn{font-family:var(--headingFont);font-weight:bold;font-size:0.85em;font-style:normal}',
  map: null
};
const load = async ({ fetch }) => {
  const res = await fetch(`/api/posts.json`);
  let { posts } = await res.json();
  let uniqueCategories = {};
  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (uniqueCategories.hasOwnProperty(category)) {
        uniqueCategories[category].count += 1;
      } else {
        uniqueCategories[category] = { title: category, count: 1 };
      }
    });
  });
  const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title > b.title);
  return {
    props: { uniqueCategories: sortedUniqueCategories }
  };
};
const Category = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { uniqueCategories } = $$props;
  if ($$props.uniqueCategories === void 0 && $$bindings.uniqueCategories && uniqueCategories !== void 0)
    $$bindings.uniqueCategories(uniqueCategories);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Blog | Categories</title>`, ""}<meta property="${"og:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-hwc2yh"><meta name="${"twitter:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-hwc2yh">`, ""}


${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"compressed-content"}"><h1 class="${"h2 svelte-g8rxtn"}">All blog categories</h1>
    
    <ul>${(0, import_index_2749e1b7.b)(uniqueCategories, (category) => {
        return `<li class="${"svelte-g8rxtn"}"><a href="${"/blog/category/" + (0, import_index_2749e1b7.e)(category.title)}" class="${"svelte-g8rxtn"}">${(0, import_index_2749e1b7.e)(category.title)}</a>
        (${(0, import_index_2749e1b7.e)(category.count)})
      </li>`;
      })}</ul></div>`;
    }
  })}`;
});
