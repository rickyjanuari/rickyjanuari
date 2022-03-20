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
  E: () => ExternalLink
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var ExternalLink_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-1mgugza{width:0.5em;height:0.5em;margin-left:5px}path.svelte-1mgugza{stroke:currentColor}",
  map: null
};
const ExternalLink = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 107 107"}" version="${"1.1"}" style="${"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"}" class="${"svelte-1mgugza"}"><g transform="${"matrix(0.392013,0,0,0.392013,-80.5623,-37.5192)"}"><path d="${"M305.124,108.464L218.264,108.464L218.264,355.115L464.915,355.115L464.915,268.254"}" style="${"fill:none;stroke-width:25.51px;"}" class="${"svelte-1mgugza"}"></path></g><g transform="${"matrix(0.296795,0,0,0.296795,0.308514,-63.7938)"}"><path d="${"M341.589,355.115L341.589,231.789L218.264,231.789"}" style="${"fill:none;stroke-width:33.69px;"}" class="${"svelte-1mgugza"}"></path></g><g transform="${"matrix(0.392013,0,0,0.392013,-80.5623,-37.5192)"}"><path d="${"M464.915,108.464L341.589,231.789"}" style="${"fill:none;stroke-width:25.51px;"}" class="${"svelte-1mgugza"}"></path></g></svg>`;
});
