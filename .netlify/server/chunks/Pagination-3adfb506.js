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
  P: () => Pagination
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var Pagination_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.pagination.svelte-6wwia.svelte-6wwia{margin:0 0 var(--quarterNote)}.pagination.svelte-6wwia h2.svelte-6wwia{font-size:1rem;padding:0;margin:0 0 var(--eighthNote)}.pagination.svelte-6wwia h2.svelte-6wwia::before{display:none}.pagination.svelte-6wwia ul.svelte-6wwia{display:flex;flex-wrap:wrap;justify-content:start;list-style-type:none;gap:var(--eighthNote);margin:0;padding:0}.pagination.svelte-6wwia ul li.svelte-6wwia{margin:0}.pagination.svelte-6wwia ul a.svelte-6wwia{background:var(--lighterBlue);text-decoration:none;line-height:1;display:flex;align-items:center;justify-content:center;width:2em;height:2em;font-family:var(--headingFont);font-weight:bold;transition:background 0.1s}.pagination.svelte-6wwia ul a.svelte-6wwia:hover{background:var(--yellow)}.pagination.svelte-6wwia ul a[aria-current=true].svelte-6wwia{background:var(--yellow);color:var(--black);border:1px solid currentColor}.dark .pagination ul a{background:var(--darkBlue) !important}.dark .pagination ul a[aria-current=true].svelte-6wwia.svelte-6wwia{background:var(--yellow) !important}',
  map: null
};
const Pagination = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { totalPosts } = $$props;
  let pagesAvailable;
  const isCurrentPage = (page) => page == currentPage;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPosts === void 0 && $$bindings.totalPosts && totalPosts !== void 0)
    $$bindings.totalPosts(totalPosts);
  $$result.css.add(css);
  pagesAvailable = Math.ceil(totalPosts / 10);
  return `<nav role="${"navigation"}" aria-label="${"Pagination navigation"}" class="${"pagination svelte-6wwia"}"><h2 class="${"svelte-6wwia"}">Go to page:</h2>
  <ul class="${"svelte-6wwia"}">${(0, import_index_2749e1b7.b)(Array.from({ length: pagesAvailable }, (_, i) => i + 1), (page) => {
    return `<li class="${"svelte-6wwia"}"><a href="${"/blog/page/" + (0, import_index_2749e1b7.e)(page)}"${(0, import_index_2749e1b7.d)("aria-current", isCurrentPage(page), 0)} class="${"svelte-6wwia"}">${isCurrentPage(page) ? `<span class="${"sr"}">Current page
            </span>` : `<span class="${"sr"}">Go to page
            </span>`}
          ${(0, import_index_2749e1b7.e)(page)}</a>
      </li>`;
  })}</ul>
</nav>`;
});
