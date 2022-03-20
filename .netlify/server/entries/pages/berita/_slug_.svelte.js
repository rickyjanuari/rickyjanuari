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
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../../chunks/index-2749e1b7.js");
const load = async ({ params, fetch }) => {
  const slug = params.slug;
  const res = await fetch(`/api/berita/${slug}.json`);
  const post = await res.json();
  return { props: { post } };
};
const U5Bslugu5D = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<h1><!-- HTML_TAG_START -->${post.title.rendered}<!-- HTML_TAG_END --></h1>
${post.image ? `<img${(0, import_index_2749e1b7.d)("src", post.image, 0)} alt="${""}">` : ``}
<p><!-- HTML_TAG_START -->${post.excerpt.rendered}<!-- HTML_TAG_END --></p>`;
});
