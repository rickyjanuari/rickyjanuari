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
  P: () => PostList
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_TagList_0e1f394c = require("./TagList-0e1f394c.js");
var import_ExternalLink_29dd7148 = require("./ExternalLink-29dd7148.js");
var PostPreview_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}li.svelte-61bt7k.svelte-61bt7k{margin:0 0 var(--halfNote)}@media(min-width: 1200px){li.svelte-61bt7k.svelte-61bt7k{margin:0}}.post-preview.svelte-61bt7k.svelte-61bt7k{transition:0.2s;transform-origin:bottom left;display:block}@media(min-width: 1200px){.post-preview.svelte-61bt7k.svelte-61bt7k{display:grid;grid-template-columns:1fr 1fr;grid-gap:var(--halfNote);margin-bottom:var(--wholeNote)}}.post-preview.svelte-61bt7k .article-info.svelte-61bt7k{padding:1.5rem 0;max-width:32rem}@media(min-width: 1200px){.post-preview.svelte-61bt7k .article-info.svelte-61bt7k{padding:0}}.post-preview.svelte-61bt7k h2.h3.svelte-61bt7k{margin:0;line-height:1.2;border:0;padding:0;font-size:1.5rem;font-weight:normal}.post-preview.svelte-61bt7k h2.h3.svelte-61bt7k::before{display:none}.post-preview.svelte-61bt7k .image-link.svelte-61bt7k{display:block;width:100%;line-height:1}.post-preview.svelte-61bt7k .image-link img.svelte-61bt7k{margin:0;width:auto;max-width:100%;border:1px solid hsla(var(--darkGrayHSL), 1)}.post-preview.svelte-61bt7k .subtitle.svelte-61bt7k,.post-preview.svelte-61bt7k .excerpt a.svelte-61bt7k{font-weight:bold;text-transform:uppercase;font-family:var(--headingFont);font-style:normal;font-size:0.65rem;margin:0.5rem 0 0}.post-preview.svelte-61bt7k .excerpt.svelte-61bt7k{font-style:italic;margin:var(--quarterNote) 0 1.5rem;font-size:0.8rem;line-height:1.5}.post-preview.svelte-61bt7k .excerpt.svelte-61bt7k:last-child{margin-bottom:0}.post-preview.svelte-61bt7k .excerpt a.svelte-61bt7k{display:block;margin-top:var(--quarterNote)}',
  map: null
};
const PostPreview = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { external = false } = $$props;
  let { post } = $$props;
  let slugPath;
  let computedURL;
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  slugPath = external ? "" : "/blog/";
  computedURL = slugPath + post.slug;
  return `<li class="${"svelte-61bt7k"}"><article class="${"post-preview svelte-61bt7k"}"><a${(0, import_index_2749e1b7.d)("href", computedURL, 0)} sveltekit:prefetch class="${"image-link svelte-61bt7k"}"><img src="${"/images/post_images/" + (0, import_index_2749e1b7.e)(post.coverImage)}" style="${"aspect-ratio: " + (0, import_index_2749e1b7.e)(post.coverWidth) + " / " + (0, import_index_2749e1b7.e)(post.coverHeight) + "; width: " + (0, import_index_2749e1b7.e)(post.coverWidth) + "; height: " + (0, import_index_2749e1b7.e)(post.coverHeight)}" alt="${"Preview image for " + (0, import_index_2749e1b7.e)(post.title)}" loading="${"lazy"}" class="${"svelte-61bt7k"}"></a>

    <div class="${"article-info svelte-61bt7k"}"><h2 class="${"h3 svelte-61bt7k"}"><a${(0, import_index_2749e1b7.d)("href", computedURL, 0)} sveltekit:prefetch class="${"svelte-61bt7k"}">${external ? `${(0, import_index_2749e1b7.e)(post.title)} ${(0, import_index_2749e1b7.v)(import_ExternalLink_29dd7148.E, "ExternalLink").$$render($$result, {}, {}, {})}` : `${(0, import_index_2749e1b7.e)(post.title)}`}</a></h2>
      
      ${post.subtitle ? `<p class="${"subtitle svelte-61bt7k"}">${(0, import_index_2749e1b7.e)(post.subtitle)}</p>` : ``}
      
      <p class="${"excerpt svelte-61bt7k"}">${(0, import_index_2749e1b7.e)(post.excerpt)}
        <a${(0, import_index_2749e1b7.d)("href", computedURL, 0)} sveltekit:prefetch class="${"svelte-61bt7k"}">${external ? `Read more on ${(0, import_index_2749e1b7.e)(post.subtitle)}
            ${(0, import_index_2749e1b7.v)(import_ExternalLink_29dd7148.E, "ExternalLink").$$render($$result, {}, {}, {})}` : `Read\xA0more\u2026`}</a></p>
      
      ${post.categories ? `${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.T, "TagList").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_2749e1b7.b)(post.categories, (category) => {
        return `${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.a, "Tag").$$render($$result, { to: "/blog/category/" + category + "/" }, {}, {
          default: () => {
            return `${(0, import_index_2749e1b7.e)(category)}
          `;
          }
        })}`;
      })}`;
    }
  })}` : ``}</div></article>
</li>`;
});
var PostList_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.post-list.svelte-nkhb48{padding:0;list-style-type:none;margin:0 0 var(--wholeNote);max-width:var(--maxWidth)}@media(min-width: 1200px){.post-list.svelte-nkhb48{max-width:60rem}}',
  map: null
};
const PostList = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let { external = false } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  $$result.css.add(css);
  return `<ul class="${"no-bullets post-list svelte-nkhb48"}">${(0, import_index_2749e1b7.b)(posts, (post) => {
    return `${(0, import_index_2749e1b7.v)(PostPreview, "PostPreview").$$render($$result, { post, external }, {}, {})}`;
  })}
</ul>`;
});
