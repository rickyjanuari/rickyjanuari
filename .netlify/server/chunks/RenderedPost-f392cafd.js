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
  R: () => RenderedPost
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_TagList_0e1f394c = require("./TagList-0e1f394c.js");
var import_store_6b7e9707 = require("./store-6b7e9707.js");
var import_Main_5d179e14 = require("./Main-5d179e14.js");
const months = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const readableDate = (date) => {
  if (!date)
    return date;
  const splitDate = date.split("-");
  const month = months[parseInt(splitDate[1])];
  const day = parseInt(splitDate[2]);
  const year = splitDate[0];
  return `${month} ${day}, ${year}`;
};
var Bio_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@charset "UTF-8";:root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.post-bio-hr.svelte-14cxfmg.svelte-14cxfmg{background:linear-gradient(to left, var(--blueToYellow))}.bio.svelte-14cxfmg.svelte-14cxfmg{font-size:0.85rem;overflow:auto;display:flex;align-items:center;align-content:center;flex-wrap:wrap}@media(min-width: 600px){.bio.svelte-14cxfmg.svelte-14cxfmg{flex-wrap:nowrap}}.bio.svelte-14cxfmg .about.svelte-14cxfmg{font-style:italic;font-family:var(--bodyFont)}.bio.svelte-14cxfmg .link-list.svelte-14cxfmg{font-family:var(--headingFont);margin:var(--quarterNote) 0 0;padding-left:1.1rem}.bio.svelte-14cxfmg .link-list li.svelte-14cxfmg{margin:0 0 0.25rem}.bio.svelte-14cxfmg .link-list li a.svelte-14cxfmg{-webkit-text-decoration-color:var(--lightGray);text-decoration-color:var(--lightGray)}.bio.svelte-14cxfmg .link-list__kofi.svelte-14cxfmg::marker{content:"\u2615 "}.bio.svelte-14cxfmg .link-list__contact.svelte-14cxfmg::marker{content:"\u{1F4E9} "}.bio.svelte-14cxfmg .link-list__more.svelte-14cxfmg::marker{content:"\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F "}.bio.svelte-14cxfmg .thumbnail.svelte-14cxfmg{width:6rem;border-radius:3rem;margin:0 auto var(--quarterNote)}@media(min-width: 600px){.bio.svelte-14cxfmg .thumbnail.svelte-14cxfmg{margin:0 var(--quarterNote) 0 0}}.bio.svelte-14cxfmg p.svelte-14cxfmg{margin:0}',
  map: null
};
const Bio = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css$1);
  return `<div class="${"bio-wrapper"}"><hr>
  <div class="${"bio svelte-14cxfmg"}"><img src="${"/images/bio-photo.jpg"}" alt="${""}" class="${"thumbnail svelte-14cxfmg"}" width="${"1"}" height="${"1"}">
    <div><p class="${"about svelte-14cxfmg"}">I&#39;m Ricky Januari, a frontend developer, designer, teacher, and writer. I currently live in Omaha, Nebraska, and work for Shopify as a senior frontend developer. 
      </p>
      <ul class="${"link-list svelte-14cxfmg"}"><li class="${"link-list__kofi svelte-14cxfmg"}"><a href="${"https://ko-fi.com/collinsworth"}" rel="${"external"}" class="${"svelte-14cxfmg"}">Buy me a coffee
          </a></li>
        <li class="${"link-list__contact svelte-14cxfmg"}"><a href="${"/contact?from_page=" + (0, import_index_2749e1b7.e)(currentPage)}" class="${"svelte-14cxfmg"}">Send me a note about this post
          </a></li>
        <li class="${"link-list__more svelte-14cxfmg"}"><a href="${"/"}" class="${"svelte-14cxfmg"}">More about me</a></li></ul></div></div>
  <hr class="${"post-bio-hr svelte-14cxfmg"}">
</div>`;
});
const Comments = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = (0, import_index_2749e1b7.a)(import_store_6b7e9707.t, (value) => $theme = value);
  $theme === import_store_6b7e9707.T.Dark ? "github-dark" : "github-light";
  $$unsubscribe_theme();
  return `<noscript>JavaScript must be enabled to leave comments.</noscript>
<div id="${"utterances-comments"}"></div>`;
});
var RenderedPost_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";:root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.post .cover-image{margin:0;border:1px solid hsla(var(--darkGrayHSL), 1)}.post .meta+p::first-letter,.post .toc-wrap+p::first-letter,.post .meta+.side-note+p::first-letter,.post .toc-wrap+.side-note+p::first-letter{font-size:3.6em;float:left;line-height:0.7em;margin:0.45rem 0.4rem 0 0;color:inherit;font-weight:bold}.post .meta{font-size:0.8rem;line-height:1.6;margin:var(--halfNote) 0 var(--wholeNote);width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:0.5em 0;font-family:var(--headingFont);border-top:2px solid var(--lightGray)}.post .meta b{text-transform:uppercase;font-style:normal;font-size:0.7rem}.post .post-footer{margin:0 0 var(--halfNote)}.post .post-footer .h4{margin:0 0 calc(var(--quarterNote) / 2)}.post .post-footer .h4::before{display:none}.post .post-links{margin:var(--halfNote) 0;font-family:var(--headingFont)}.post .post-links a{margin-left:1ch}.post .post-links__contact::marker{content:"\u{1F4E9}"}.post .post-links__blog::marker{content:"\u{1F519}"}.post .section-heading-image{margin-top:var(--dottedWholeNote)}.post .section-heading-image+*{margin-top:var(--quarterNote)}.post .cp_embed_wrapper{width:calc(100% + var(--margin) + var(--margin));max-width:unset;margin-left:calc(var(--margin) * -1)}@media(max-width: 1680px) and (min-width: 1440px){.post .cp_embed_wrapper{margin-left:0}}@media(min-width: 1440px){.post h1{width:calc(100% + 15vw);max-width:unset;font-size:calc(1.8rem + 1.5vw)}}.sidebar{margin-inline:auto !important}',
  map: null
};
const RenderedPost = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { PostContent } = $$props;
  let { meta } = $$props;
  let imagePath;
  if ($$props.PostContent === void 0 && $$bindings.PostContent && PostContent !== void 0)
    $$bindings.PostContent(PostContent);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  $$result.css.add(css);
  imagePath = `/images/post_images/${meta.coverImage}`;
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_2749e1b7.e)(meta.title)} - Ricky Januari blog</title>`, ""}<meta data-key="${"description"}" name="${"description"}"${(0, import_index_2749e1b7.d)("content", meta.excerpt, 0)} data-svelte="svelte-a11lak"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-a11lak"><meta property="${"og:title"}"${(0, import_index_2749e1b7.d)("content", meta.title, 0)} data-svelte="svelte-a11lak"><meta name="${"twitter:title"}"${(0, import_index_2749e1b7.d)("content", meta.title, 0)} data-svelte="svelte-a11lak"><meta property="${"og:description"}"${(0, import_index_2749e1b7.d)("content", meta.excerpt, 0)} data-svelte="svelte-a11lak"><meta name="${"twitter:description"}"${(0, import_index_2749e1b7.d)("content", meta.excerpt, 0)} data-svelte="svelte-a11lak"><meta property="${"og:image"}" content="${"https://rickyjanuari.com" + (0, import_index_2749e1b7.e)(imagePath)}" data-svelte="svelte-a11lak"><meta property="${"og:image:width"}"${(0, import_index_2749e1b7.d)("content", meta.coverWidth, 0)} data-svelte="svelte-a11lak"><meta property="${"og:image:height"}"${(0, import_index_2749e1b7.d)("content", meta.coverHeight, 0)} data-svelte="svelte-a11lak"><meta name="${"twitter:image"}" content="${"https://rickyjanuari.com" + (0, import_index_2749e1b7.e)(imagePath)}" data-svelte="svelte-a11lak"><meta property="${"og:url"}" content="${"https://rickyjanuari.com/blog/" + (0, import_index_2749e1b7.e)(meta.slug) + "/"}" data-svelte="svelte-a11lak">`, ""}


${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<article class="${"post compressed-content"}"><img class="${"cover-image"}"${(0, import_index_2749e1b7.d)("src", imagePath, 0)} alt="${""}" style="${"aspect-ratio: " + (0, import_index_2749e1b7.e)(meta.coverWidth) + " / " + (0, import_index_2749e1b7.e)(meta.coverHeight)}"${(0, import_index_2749e1b7.d)("width", meta.coverWidth, 0)}${(0, import_index_2749e1b7.d)("height", meta.coverHeight, 0)}>

    <h1>${(0, import_index_2749e1b7.e)(meta.title)}</h1>

    
    <div class="${"meta"}"><b>Published:</b> ${(0, import_index_2749e1b7.e)(readableDate(meta.date))}
      <br>
      <b>Updated:</b> ${(0, import_index_2749e1b7.e)(readableDate(meta.updated))}</div>
    
    ${(0, import_index_2749e1b7.v)(PostContent || import_index_2749e1b7.m, "svelte:component").$$render($$result, {}, {}, {})}

    <aside class="${"post-footer"}">${(0, import_index_2749e1b7.v)(Bio, "Bio").$$render($$result, { currentPage: meta.slug }, {}, {})}

      ${meta.categories ? `<h2 class="${"h4"}">Posted in: </h2>
        ${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.T, "TagList").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_2749e1b7.b)(meta.categories, (category) => {
            return `${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.a, "Tag").$$render($$result, { to: "/blog/category/" + category + "/" }, {}, {
              default: () => {
                return `${(0, import_index_2749e1b7.e)(category)}
            `;
              }
            })}`;
          })}`;
        }
      })}` : ``}</aside>

    ${(0, import_index_2749e1b7.v)(Comments, "Comments").$$render($$result, {}, {}, {})}</article>`;
    }
  })}`;
});
