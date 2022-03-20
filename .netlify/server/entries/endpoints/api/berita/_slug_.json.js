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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_variables_cfcab96a = require("../../../../chunks/variables-cfcab96a.js");
const get = async (request) => {
  const slug = request.params.slug;
  const res = await fetch(`${import_variables_cfcab96a.B}${import_variables_cfcab96a.P}?slug=${slug}&_embed`);
  const posts = await res.json();
  const post = posts[0];
  post.image = post._embedded["wp:featuredmedia"][0].source_url;
  return {
    status: 200,
    body: post
  };
};
