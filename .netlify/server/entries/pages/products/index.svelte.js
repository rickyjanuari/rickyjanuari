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
  default: () => Products,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../../chunks/index-2749e1b7.js");
const load = async ({ fetch }) => {
  const res = await fetch("/api/products/products.json");
  const products = await res.json();
  return { props: { products } };
};
const Products = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${(0, import_index_2749e1b7.b)(products, (product) => {
    return `<h2><!-- HTML_TAG_START -->${product.title.rendered}<!-- HTML_TAG_END --></h2>
    ${product.content.rendered ? `<p><!-- HTML_TAG_START -->${product.content.rendered}<!-- HTML_TAG_END --></p>` : ``}
    <a${(0, import_index_2749e1b7.d)("href", `/products/${product.slug}`, 0)}>Readmore</a>`;
  })}`;
});
