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
  default: () => Ukm,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../../chunks/index-2749e1b7.js");
const load = async ({ fetch }) => {
  const res = await fetch("/api/ukm/ukm.json");
  const ukms = await res.json();
  return { props: { ukms } };
};
const Ukm = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { ukms } = $$props;
  if ($$props.ukms === void 0 && $$bindings.ukms && ukms !== void 0)
    $$bindings.ukms(ukms);
  return `${(0, import_index_2749e1b7.b)(ukms, (ukm) => {
    return `<h2><!-- HTML_TAG_START -->${ukm.title.rendered}<!-- HTML_TAG_END --></h2>
    ${ukm.content.rendered ? `<p><!-- HTML_TAG_START -->${ukm.content.rendered}<!-- HTML_TAG_END --></p>` : ``}
    <a${(0, import_index_2749e1b7.d)("href", `/ukm/${ukm.slug}`, 0)}>Readmore</a>`;
  })}`;
});
