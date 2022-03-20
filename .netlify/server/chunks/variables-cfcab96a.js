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
  B: () => BASE_URL,
  P: () => POSTS_API_URL,
  U: () => UKM_API_URL,
  a: () => PRODUCTS_API_URL
});
module.exports = __toCommonJS(stdin_exports);
const BASE_URL = "https://citapen.com";
const POSTS_API_URL = "/wp-json/wp/v2/posts/";
const UKM_API_URL = "/wp-json/wp/v2/ukm/";
const PRODUCTS_API_URL = "/wp-json/wp/v2/product/";
