var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var import_index_2749e1b7 = require("../../../../chunks/index-2749e1b7.js");
var import_RenderedPost_f392cafd = require("../../../../chunks/RenderedPost-f392cafd.js");
var import_TagList_0e1f394c = require("../../../../chunks/TagList-0e1f394c.js");
var import_store_6b7e9707 = require("../../../../chunks/store-6b7e9707.js");
var import_Main_5d179e14 = require("../../../../chunks/Main-5d179e14.js");
const dev = false;
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const load = async ({ params }) => {
  try {
    if (!dev) {
      return {
        status: 404,
        error: "No posts to preview."
      };
    }
    const { slug } = params;
    const post = await __variableDynamicImportRuntime0__(`../_posts/drafts/${slug}.md`);
    return {
      props: {
        PostContent: post.default,
        meta: __spreadProps(__spreadValues({}, post.metadata), { slug: params.post })
      }
    };
  } catch (error) {
    return { status: 404, error: error.message };
  }
};
const U5Bslugu5D = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { PostContent } = $$props;
  let { meta } = $$props;
  if ($$props.PostContent === void 0 && $$bindings.PostContent && PostContent !== void 0)
    $$bindings.PostContent(PostContent);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  return `${(0, import_index_2749e1b7.v)(import_RenderedPost_f392cafd.R, "RenderedPost").$$render($$result, { PostContent, meta }, {}, {})}`;
});
