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
  default: () => Blog,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../../chunks/index-2749e1b7.js");
var import_Main_5d179e14 = require("../../../chunks/Main-5d179e14.js");
var import_Pagination_3adfb506 = require("../../../chunks/Pagination-3adfb506.js");
var import_PostList_093c74fc = require("../../../chunks/PostList-093c74fc.js");
var import_TagList_0e1f394c = require("../../../chunks/TagList-0e1f394c.js");
var import_ExternalLink_29dd7148 = require("../../../chunks/ExternalLink-29dd7148.js");
const load = async ({ fetch }) => {
  const res = await fetch(`/api/posts.json`);
  const { posts } = await res.json();
  const count = await fetch(`/api/posts/count.json`);
  const { total } = await count.json();
  return { props: { posts, totalPosts: total } };
};
const Blog = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  let { totalPosts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.totalPosts === void 0 && $$bindings.totalPosts && totalPosts !== void 0)
    $$bindings.totalPosts(totalPosts);
  return `${$$result.head += `${$$result.title = `<title>Ricky Januari | Blog</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"Writings on development, design, and random thoughts."}" data-svelte="svelte-185rn41"><meta property="${"og:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-185rn41"><meta name="${"twitter:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-185rn41">`, ""}


${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"compressed-content double-wide"}">${(0, import_index_2749e1b7.v)(import_PostList_093c74fc.P, "PostList").$$render($$result, { posts }, {}, {})}

		${(0, import_index_2749e1b7.v)(import_Pagination_3adfb506.P, "Pagination").$$render($$result, { currentPage: 1, totalPosts }, {}, {})}</div>`;
    }
  })}`;
});
