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
  S: () => Sidebar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_TagList_0e1f394c = require("./TagList-0e1f394c.js");
var Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.sidebar.svelte-1ozvtc2.svelte-1ozvtc2{font-size:0.85rem;max-width:var(--maxWidth);font-family:var(--headingFont);margin:var(--dottedHalfNote) 0 0}@media(min-width: 1440px){.sidebar.svelte-1ozvtc2.svelte-1ozvtc2{margin:0}}.sidebar.svelte-1ozvtc2 h2{font-size:0.8em;font-weight:bold;text-transform:uppercase;margin:3em 0 1em;padding:0 0 0.1em 0;border:none;border-bottom:0.15em solid;width:-webkit-max-content;width:-moz-max-content;width:max-content;text-align:inherit;color:var(--headingColor)}.sidebar.svelte-1ozvtc2 h2::before{display:none}.sidebar.svelte-1ozvtc2 h2.svelte-1ozvtc2:first-child{margin-top:0}.sidebar.svelte-1ozvtc2 ul.svelte-1ozvtc2{margin:0;list-style-type:none;padding:0;line-height:1.2}.sidebar.svelte-1ozvtc2 ul.tag-list li.svelte-1ozvtc2{margin:0;font-size:inherit}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li.svelte-1ozvtc2{font-size:inherit}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a.svelte-1ozvtc2{font-size:inerit;color:inherit;text-decoration:none;position:relative;display:inline-block}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a:hover span.svelte-1ozvtc2,.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a:focus span.svelte-1ozvtc2{position:relative;outline:none}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a:hover span.svelte-1ozvtc2:before,.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a:focus span.svelte-1ozvtc2:before{position:absolute;content:"[";left:-0.35em}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a.svelte-1ozvtc2:hover,.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a.svelte-1ozvtc2:focus{outline:none}.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a.svelte-1ozvtc2:hover:after,.sidebar.svelte-1ozvtc2 ul.sidebar__posts-list li a.svelte-1ozvtc2:focus:after{position:absolute;content:"]"}',
  map: null
};
const Sidebar = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { recentPosts } = $$props;
  let { allCategories } = $$props;
  if ($$props.recentPosts === void 0 && $$bindings.recentPosts && recentPosts !== void 0)
    $$bindings.recentPosts(recentPosts);
  if ($$props.allCategories === void 0 && $$bindings.allCategories && allCategories !== void 0)
    $$bindings.allCategories(allCategories);
  $$result.css.add(css);
  return `<aside class="${"sidebar svelte-1ozvtc2"}">

  <h2 class="${"svelte-1ozvtc2"}">Recent blog posts</h2>

  <ul class="${"sidebar__posts-list svelte-1ozvtc2"}">${(0, import_index_2749e1b7.b)(recentPosts, (post) => {
    return `<li class="${"svelte-1ozvtc2"}"><a href="${"/blog/" + (0, import_index_2749e1b7.e)(post.slug)}" sveltekit:prefetch class="${"svelte-1ozvtc2"}"><span class="${"svelte-1ozvtc2"}">${(0, import_index_2749e1b7.e)(post.title)}</span></a>
      </li>`;
  })}</ul>

  <h2 class="${"svelte-1ozvtc2"}">Categories</h2>

  ${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.T, "TagList").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_2749e1b7.b)(allCategories, (category) => {
        return `${(0, import_index_2749e1b7.v)(import_TagList_0e1f394c.a, "Tag").$$render($$result, { to: "/blog/category/" + category }, {}, {
          default: () => {
            return `${(0, import_index_2749e1b7.e)(category)}
      `;
          }
        })}`;
      })}`;
    }
  })}
  
  <h2 class="${"svelte-1ozvtc2"}">More links</h2>

  <ul class="${"svelte-1ozvtc2"}"><li class="${"svelte-1ozvtc2"}"><a href="${"/blog"}" class="${"svelte-1ozvtc2"}">All blog posts</a></li>
    <li class="${"svelte-1ozvtc2"}"><a href="${"/writing-and-speaking"}" class="${"svelte-1ozvtc2"}">Other writing &amp; speaking</a></li>
    <li class="${"svelte-1ozvtc2"}"><a href="${"/"}" class="${"svelte-1ozvtc2"}">Home</a></li></ul>
</aside>`;
});
