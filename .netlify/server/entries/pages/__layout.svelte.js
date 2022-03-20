var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../chunks/index-2749e1b7.js");
var import_just_throttle = __toESM(require("just-throttle"));
var import_store_6b7e9707 = require("../../chunks/store-6b7e9707.js");
var import_just_debounce = __toESM(require("just-debounce"));
var global = "";
var LogoSVG_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}#logo-svg.svelte-15bqyto.svelte-15bqyto{width:auto}a:hover #logo-svg.svelte-15bqyto #bracket-left.svelte-15bqyto,a:focus #logo-svg.svelte-15bqyto #bracket-left.svelte-15bqyto{transform:translateX(11%)}a:hover #logo-svg.svelte-15bqyto #bracket-right.svelte-15bqyto,a:focus #logo-svg.svelte-15bqyto #bracket-right.svelte-15bqyto{transform:translateX(-11%)}#logo-svg.svelte-15bqyto #bracket-left.svelte-15bqyto,#logo-svg.svelte-15bqyto #bracket-right.svelte-15bqyto{transform:translateX(0);transition:transform 0.3s cubic-bezier(1, 0, 0, 1)}@media(max-width: 23rem){#logo-svg.svelte-15bqyto #logo-text.svelte-15bqyto{display:none}}',
  map: null
};
const LogoSVG = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { iconOnly = false } = $$props;
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0)
    $$bindings.iconOnly(iconOnly);
  $$result.css.add(css$d);
  return `<svg id="${"logo-svg"}" width="${"100%"}" height="${"100%"}" viewBox="${"0 0 763 178"}" version="${"1.1"}" style="${"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"}" class="${"svelte-15bqyto"}"><g id="${"artboard"}">${!iconOnly ? `<g id="${"logo-text"}" class="${"svelte-15bqyto"}"><path d="${"M180.548,92.393c14.899,-6.183 20.88,-16.623 20.88,-36.794l0,-42.266l6.385,-5.575l0,-0.203l-28.279,0l0,0.203l6.386,5.575l0,49.767c0,12.163 -1.723,21.184 -5.575,29.191l0.203,0.102Zm107.237,-16.623c10.947,0 17.535,-6.082 17.535,-15.204c0,-8.514 -5.575,-12.264 -12.771,-16.724c-7.703,-4.663 -11.656,-7.095 -11.656,-11.555c0,-3.953 2.128,-6.082 5.676,-6.082c3.953,0 7.703,2.534 15.913,17.637l0.203,0l0,-19.968l-5.879,3.649c-2.331,-1.723 -5.879,-3.142 -10.339,-3.142c-10.744,0 -16.724,5.777 -16.724,14.393c0,8.717 5.068,12.67 11.758,16.623c8.21,4.764 12.061,7.399 12.061,11.96c0,4.46 -2.432,6.588 -5.98,6.588c-4.561,0 -8.717,-2.635 -17.332,-19.055l-0.203,0l0,21.387l6.487,-3.649c2.94,2.027 6.893,3.142 11.251,3.142Zm-51.693,0.203c16.42,0 25.745,-9.832 25.745,-26.354c0,-16.927 -7.805,-25.339 -24.123,-25.339c-16.319,0 -25.847,9.426 -25.847,26.251c0,16.927 7.906,25.442 24.225,25.442Zm100.852,-1.724l-5.676,-4.966l0,-33.753c2.432,-2.229 4.966,-3.243 8.108,-3.243c5.474,0 8.21,2.838 8.21,11.555l0,25.441l-5.676,4.966l0,0.203l26.252,0l0,-0.203l-5.676,-4.966l0,-27.367c0,-11.96 -4.46,-17.636 -14.494,-17.636c-7.399,0 -12.771,4.257 -16.724,10.034l0,-34.158l-22.097,6.791l0,0.203l7.197,4.662l0,57.471l-5.575,4.966l0,0.203l26.151,0l0,-0.203Zm-109.772,-24.224c0,-16.826 4.46,-23.82 9.933,-23.82c5.474,0 9.427,6.893 9.427,23.82c0,17.028 -4.46,23.92 -9.832,23.92c-5.473,0 -9.528,-6.791 -9.528,-23.92Z"}" style="${"fill:var(--ink);fill-rule:nonzer;transition:.3s"}"></path><path d="${"M468.71,177.128c10.947,0 17.535,-6.082 17.535,-15.204c0,-8.514 -5.575,-12.264 -12.771,-16.724c-7.704,-4.663 -11.657,-7.095 -11.657,-11.555c0,-3.953 2.129,-6.081 5.677,-6.081c3.953,0 7.703,2.533 15.913,17.636l0.203,0l0,-19.968l-5.879,3.649c-2.331,-1.723 -5.879,-3.142 -10.339,-3.142c-10.744,0 -16.724,5.778 -16.724,14.393c0,8.717 5.068,12.67 11.758,16.623c8.21,4.764 12.061,7.399 12.061,11.96c0,4.46 -2.432,6.588 -5.98,6.588c-4.561,0 -8.717,-2.635 -17.332,-19.055l-0.203,0l0,21.387l6.487,-3.649c2.939,2.027 6.892,3.142 11.251,3.142Zm218.123,0.203c8.616,0 13.582,-3.751 15.001,-12.163l-0.101,-0.203c-1.825,2.027 -4.561,3.547 -7.805,3.547c-4.358,0 -6.081,-2.128 -6.081,-8.919l0,-25.745l12.67,0l0.709,-6.791l-13.379,0l0,-16.724l-0.203,0l-13.481,16.42l-8.615,1.723l-0.71,5.372l8.008,0l0,28.279c0,9.832 4.865,15.204 13.987,15.204Zm-475.067,0c11.656,0 20.475,-6.487 22.907,-16.826l-0.101,-0.101c-4.561,4.155 -10.44,6.284 -17.332,6.284c-13.278,0 -20.576,-8.109 -20.576,-26.049c0,-20.475 7.5,-31.32 16.217,-31.32c5.676,0 9.832,2.433 19.461,23.312l0.203,0l0,-25.947l-7.906,3.851c-2.94,-1.926 -6.893,-3.142 -11.454,-3.142c-20.677,0 -32.536,14.9 -32.536,35.577c0,21.387 10.237,34.361 31.117,34.361Zm52.808,0c16.42,0 25.745,-9.832 25.745,-26.354c0,-16.927 -7.805,-25.339 -24.123,-25.339c-16.319,0 -25.847,9.426 -25.847,26.252c0,16.927 7.906,25.441 24.225,25.441Zm327.185,0c16.42,0 25.745,-9.832 25.745,-26.354c0,-16.927 -7.804,-25.339 -24.123,-25.339c-16.319,0 -25.847,9.426 -25.847,26.252c0,16.927 7.906,25.441 24.225,25.441Zm-45.409,-1.217l13.988,-40.442l6.791,-8.413l0,-0.202l-17.637,0l0,0.202c8.312,8.312 8.312,8.312 7.197,11.555l-7.703,23.009l-11.859,-36.084l-6.893,1.318l-11.453,34.462l-8.92,-29.192l6.487,-5.068l0,-0.202l-26.86,0l0,0.202l4.054,5.068l16.623,44.598l6.386,-0.912l11.656,-34.969l11.859,35.881l6.284,-0.811Zm-163.694,-0.506l-5.575,-4.967l0,-45.611l-21.893,6.588l0,0.203l6.892,4.662l0,34.158l-5.574,4.967l0,0.202l26.15,0l0,-0.202Zm-60.916,0l-5.575,-4.967l0,-69.127l-21.893,6.791l-0.102,0.203l6.994,4.663l0,57.47l-5.575,4.967l0,0.202l26.151,0l0,-0.202Zm30.103,0l-5.574,-4.967l0,-69.127l-21.894,6.791l-0.101,0.203l6.993,4.663l0,57.47l-5.574,4.967l0,0.202l26.15,0l0,-0.202Zm300.528,0l-8.311,-5.372l0,-30.509c1.52,-2.129 3.345,-3.143 5.98,-3.143c3.345,0 5.068,2.636 5.372,7.096l0.101,0c4.967,-1.318 8.109,-5.271 8.109,-10.542c0,-4.966 -2.534,-7.602 -6.892,-7.602c-5.778,0 -9.427,4.764 -13.177,13.582l0.203,-14.393l-21.59,6.69l0,0.203l6.893,4.865l0,34.158l-5.575,4.967l0,0.202l28.887,0l0,-0.202Zm-239.003,0l-5.575,-4.967l0,-33.752c2.332,-2.23 4.967,-3.244 8.109,-3.244c5.474,0 8.109,2.838 8.109,11.555l0,25.441l-5.575,4.967l0,0.202l26.151,0l0,-0.202l-5.575,-4.967l0,-27.367c0,-11.96 -4.46,-17.636 -14.596,-17.636c-7.602,0 -13.176,4.662 -17.129,10.744l0.202,-11.352l-21.285,6.385l-0.101,0.203l6.689,4.865l0,34.158l-5.574,4.967l0,0.202l26.15,0l0,-0.202Zm318.066,0l-5.676,-4.967l0,-33.752c2.432,-2.23 4.966,-3.244 8.108,-3.244c5.474,0 8.21,2.838 8.21,11.555l0,25.441l-5.676,4.967l0,0.202l26.252,0l0,-0.202l-5.676,-4.967l0,-27.367c0,-11.96 -4.46,-17.636 -14.494,-17.636c-7.399,0 -12.772,4.257 -16.724,10.034l0,-34.158l-22.097,6.791l0,0.203l7.197,4.663l0,57.47l-5.575,4.967l0,0.202l26.151,0l0,-0.202Zm-475.78,-24.225c0,-16.826 4.46,-23.819 9.933,-23.819c5.474,0 9.427,6.892 9.427,23.819c0,17.028 -4.46,23.92 -9.832,23.92c-5.473,0 -9.528,-6.791 -9.528,-23.92Zm327.185,0c0,-16.826 4.46,-23.819 9.934,-23.819c5.473,0 9.426,6.892 9.426,23.819c0,17.028 -4.46,23.92 -9.832,23.92c-5.473,0 -9.528,-6.791 -9.528,-23.92Zm-213.765,-31.928c4.359,0 7.906,-3.446 7.906,-7.906c0,-4.561 -3.547,-8.008 -7.906,-8.008c-4.561,0 -8.007,3.447 -8.007,8.008c0,4.46 3.446,7.906 8.007,7.906Z"}" style="${"fill:var(--ink);fill-rule:nonzero;transition:.3s"}"></path></g>` : ``}<path id="${"bracket-left"}" d="${"M24.551,31.574l0,120.094l36.029,0l0,24.019l-60.047,0l0,-168.132l60.047,0l0,24.019l-36.029,0Z"}" style="${"fill:#a7a8aa;"}" class="${"svelte-15bqyto"}"></path><path id="${"bracket-right"}" d="${"M144.646,175.687l-60.048,0l0,-24.019l36.029,0l0,-120.094l-36.029,0l0,-24.019l60.048,0l0,168.132Z"}" style="${"fill:#ffd100;"}" class="${"svelte-15bqyto"}"></path></g></svg>`;
});
var GridCell_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.cell.svelte-1kitaah{opacity:0;mix-blend-mode:overlay;position:absolute;-webkit-animation:svelte-1kitaah-fade_in 0.36s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;animation:svelte-1kitaah-fade_in 0.36s cubic-bezier(0.215, 0.61, 0.355, 1) forwards}.cell.out.svelte-1kitaah{opacity:1;-webkit-animation:svelte-1kitaah-fade_out 0.36s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;animation:svelte-1kitaah-fade_out 0.36s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards}.cell.reduce.svelte-1kitaah{-webkit-animation:none;animation:none;opacity:1}@-webkit-keyframes svelte-1kitaah-fade_in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes svelte-1kitaah-fade_in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes svelte-1kitaah-fade_out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}@keyframes svelte-1kitaah-fade_out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-12px)}}@-webkit-keyframes svelte-1kitaah-reduce_motion_fade{from{opacity:0}to{opacity:1}}@keyframes svelte-1kitaah-reduce_motion_fade{from{opacity:0}to{opacity:1}}@-webkit-keyframes svelte-1kitaah-reduce_motion_fade_reverse{from{opacity:1}to{opacity:0}}@keyframes svelte-1kitaah-reduce_motion_fade_reverse{from{opacity:1}to{opacity:0}}',
  map: null
};
const GridCell = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => $prefersReducedMotion = value);
  let { color = "transparent" } = $$props;
  let { out = false } = $$props;
  let { gridWidth = 0 } = $$props;
  let size = 0.5;
  const randomDelay = () => {
    return Math.random() * 0.5 + "s";
  };
  const randomX = () => {
    const randomLeftValue = Math.floor(Math.random() * gridWidth - 1) - size * 2;
    return `${randomLeftValue / 2}rem`;
  };
  const randomDrop = () => {
    const drop = Math.random() * 100;
    if (drop > 93) {
      return "1rem";
    } else if (drop > 80) {
      return "0.5rem";
    } else if (drop > 60) {
      return "-0.5rem";
    } else if (drop > 40) {
      return "-1rem";
    }
    return "0";
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.out === void 0 && $$bindings.out && out !== void 0)
    $$bindings.out(out);
  if ($$props.gridWidth === void 0 && $$bindings.gridWidth && gridWidth !== void 0)
    $$bindings.gridWidth(gridWidth);
  $$result.css.add(css$c);
  $$unsubscribe_prefersReducedMotion();
  return `<div class="${[
    "cell svelte-1kitaah",
    ($prefersReducedMotion ? "reduce" : "") + " " + (out ? "out" : "")
  ].join(" ").trim()}" style="${"background: " + (0, import_index_2749e1b7.e)(color) + "; width: " + (0, import_index_2749e1b7.e)(size) + "rem; height: " + (0, import_index_2749e1b7.e)(size) + "rem; animation-delay: " + (0, import_index_2749e1b7.e)(randomDelay()) + "; top: " + (0, import_index_2749e1b7.e)(randomDrop()) + "; left: " + (0, import_index_2749e1b7.e)(randomX()) + ";"}"></div>`;
});
var Grid_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.grid-wrapper.svelte-1b0c59v{height:2.5rem;position:relative;contain:layout size style;width:100%;max-width:100vw}.cell-grid.svelte-1b0c59v{height:2.5rem;position:absolute;z-index:2;top:0.5rem;left:0;width:100%;max-width:100vw}.cell-grid.inverted.svelte-1b0c59v{top:2.5rem}.cell-grid.inverted.svelte-1b0c59v:before{--paperHSL:var(--darkBlueHSL);top:0}.cell-grid.svelte-1b0c59v:before{width:100%;content:"";background:linear-gradient(60deg, hsla(var(--paperHSL), 0), hsla(var(--paperHSL), 0.5));height:4rem;position:absolute;top:-1rem;z-index:2;max-width:100vw}',
  map: null
};
const Grid = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { refresh = "" } = $$props;
  let { inverted = false } = $$props;
  let { squareCount = 0 } = $$props;
  let count = 0;
  let gridWidth;
  let out = false;
  let loadedIn = false;
  const gridColors = [
    "var(--lightGray)",
    "var(--ink)",
    "var(--lightBlue)",
    "var(--darkBlue)",
    "var(--yellow)",
    "var(--orange)"
  ];
  (0, import_just_debounce.default)(() => {
    return;
  }, 300);
  const randomColor = () => {
    const color = Math.floor(Math.random() * gridColors.length);
    return gridColors[color];
  };
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.squareCount === void 0 && $$bindings.squareCount && squareCount !== void 0)
    $$bindings.squareCount(squareCount);
  $$result.css.add(css$b);
  {
    if (refresh && loadedIn) {
      out = true;
      setTimeout(() => {
        out = false;
      }, 360);
    } else {
      loadedIn = true;
    }
  }
  return `

<div class="${"grid-wrapper svelte-1b0c59v"}"><div class="${["cell-grid svelte-1b0c59v", inverted ? "inverted" : ""].join(" ").trim()}" aria-hidden="${"true"}">${(0, import_index_2749e1b7.b)(Array(count), (cell) => {
    return `${(0, import_index_2749e1b7.v)(GridCell, "GridCell").$$render($$result, { color: randomColor(), out, gridWidth }, {}, {})}`;
  })}</div>
</div>`;
});
var NavLink_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.nav__item.svelte-1jjgk36.svelte-1jjgk36{margin:0 0 0 1.5em}@media(max-width: 768px){.nav__item.svelte-1jjgk36.svelte-1jjgk36{--itemTransition:.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;opacity:0;margin-bottom:1.5rem;font-size:1.25rem;line-height:1.5em;color:var(--white);width:100%}@-webkit-keyframes svelte-1jjgk36-move_in_left{from{opacity:0;transform:translateX(-3em)}to{transform:translateX(0);opacity:1}}@keyframes svelte-1jjgk36-move_in_left{from{opacity:0;transform:translateX(-3em)}to{transform:translateX(0);opacity:1}}}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36{-webkit-animation:svelte-1jjgk36-move_in_left var(--itemTransition);animation:svelte-1jjgk36-move_in_left var(--itemTransition)}.nav__item.open.no-motion.svelte-1jjgk36.svelte-1jjgk36{-webkit-animation:none;animation:none;opacity:1}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(1){-webkit-animation-delay:0.1s;animation-delay:0.1s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(2){-webkit-animation-delay:0.2s;animation-delay:0.2s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(3){-webkit-animation-delay:0.3s;animation-delay:0.3s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(4){-webkit-animation-delay:0.4s;animation-delay:0.4s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(5){-webkit-animation-delay:0.5s;animation-delay:0.5s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(6){-webkit-animation-delay:0.6s;animation-delay:0.6s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(7){-webkit-animation-delay:0.7s;animation-delay:0.7s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(8){-webkit-animation-delay:0.8s;animation-delay:0.8s}.nav__item.open.svelte-1jjgk36.svelte-1jjgk36:nth-of-type(9){-webkit-animation-delay:0.9s;animation-delay:0.9s}.nav__item.open.svelte-1jjgk36 a.svelte-1jjgk36{color:var(--white)}.nav__item.svelte-1jjgk36 a.svelte-1jjgk36{color:var(--ink);display:block;display:inline-block;font-weight:normal;text-decoration:none;margin:0;position:relative;color:var(--ink);width:-webkit-max-content;width:-moz-max-content;width:max-content}.nav__item.svelte-1jjgk36 a.active.svelte-1jjgk36{font-weight:bold}.nav__item.svelte-1jjgk36 a.active span.svelte-1jjgk36:after{transform:scaleX(1)}.nav__item.svelte-1jjgk36 a span.svelte-1jjgk36{display:inline-block}.nav__item.svelte-1jjgk36 a span.svelte-1jjgk36:after{position:absolute;bottom:0;left:0;content:"";transform:scaleX(0);display:block;width:100%;height:0.1em;background:var(--yellow);transition:transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);transform-origin:right}.nav__item.svelte-1jjgk36 a:hover span.svelte-1jjgk36:after,.nav__item.svelte-1jjgk36 a:focus span.svelte-1jjgk36:after{transform:scaleX(1);transform-origin:left}@media(min-width: 768px){.nav__item.mobile-only.svelte-1jjgk36.svelte-1jjgk36{display:none}}.reduce-motion .nav__item.open{-webkit-animation:none;animation:none;opacity:1}.reduce-motion .nav__item a span::after{transition:none !important}',
  map: null
};
const NavLink = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_isMenuOpen = (0, import_index_2749e1b7.a)(import_store_6b7e9707.i, (value) => $isMenuOpen = value);
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => $prefersReducedMotion = value);
  let { text } = $$props;
  let { to } = $$props;
  let { path } = $$props;
  let { mobileOnly = false } = $$props;
  let isCurrentPage;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.mobileOnly === void 0 && $$bindings.mobileOnly && mobileOnly !== void 0)
    $$bindings.mobileOnly(mobileOnly);
  $$result.css.add(css$a);
  isCurrentPage = path === to;
  $$unsubscribe_isMenuOpen();
  $$unsubscribe_prefersReducedMotion();
  return `<li class="${[
    "nav__item svelte-1jjgk36",
    ($isMenuOpen ? "open" : "") + " " + ($prefersReducedMotion ? "no-motion" : "") + " " + (mobileOnly ? "mobile-only" : "")
  ].join(" ").trim()}"><a sveltekit:prefetch${(0, import_index_2749e1b7.d)("href", to, 0)} class="${["nav__link svelte-1jjgk36", isCurrentPage ? "active" : ""].join(" ").trim()}"${(0, import_index_2749e1b7.d)("aria-current", isCurrentPage ? "page" : false, 0)}><span class="${"svelte-1jjgk36"}">${(0, import_index_2749e1b7.e)(text)}</span></a>  
</li>`;
});
var NavLinks_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}ul.svelte-135787l{display:flex;flex-wrap:wrap;margin:0;width:auto;font-size:0.875rem;list-style-type:none;padding:0}@media(max-width: 768px){ul.svelte-135787l{list-style-type:none;text-align:left;width:100%;display:none;margin:0}ul.open.svelte-135787l{display:block}}',
  map: null
};
const NavLinks = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = (0, import_index_2749e1b7.a)(import_store_6b7e9707.i, (value) => $isMenuOpen = value);
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$9);
  $$unsubscribe_isMenuOpen();
  return `<ul class="${["svelte-135787l", $isMenuOpen ? "open" : ""].join(" ").trim()}">
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, {
    to: "/",
    text: "About me",
    path,
    mobileOnly: true
  }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/blog", text: "Blog", path }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/projects", text: "Projects", path }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, {
    to: "/writing-and-speaking",
    text: "Writing & Speaking",
    path
  }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/contact", text: "Contact", path }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/products", text: "Products", path }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/berita", text: "Berita", path }, {}, {})}
  ${(0, import_index_2749e1b7.v)(NavLink, "NavLink").$$render($$result, { to: "/ukm", text: "Ukm", path }, {}, {})}
</ul>`;
});
var HamburgerButton_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}#hamburger.svelte-lsp1gd.svelte-lsp1gd{display:none;justify-content:space-between;flex-direction:column;align-items:stretch;width:var(--buttonSize);height:var(--buttonSize);padding:0.55rem;margin-left:2rem;background:var(--buttonBackground);position:relative;z-index:11;border:2px solid var(--ink);border-radius:var(--buttonSize);overflow:visible;transition-delay:0.15s}#hamburger.svelte-lsp1gd.svelte-lsp1gd:before{content:"";height:var(--buttonSize);width:1px;background:var(--lightGray);display:block;position:absolute;top:-2px;left:-1.1rem;transition:inherit;transition-delay:0.1s}#hamburger.fixed.svelte-lsp1gd.svelte-lsp1gd{position:relative;top:unset;right:unset;-webkit-animation:none;animation:none}#hamburger.fixed.svelte-lsp1gd .line.svelte-lsp1gd{background:var(--white)}#hamburger.fixed.svelte-lsp1gd .line-top.svelte-lsp1gd{transform:translate(0.025em, -0.1em) rotate(-45deg) scaleX(1.5)}#hamburger.fixed.svelte-lsp1gd .line-middle.svelte-lsp1gd{transform:scaleX(0)}#hamburger.fixed.svelte-lsp1gd .line-bottom.svelte-lsp1gd{transform:translate(0.025em, 0.1em) rotate(45deg) scaleX(1.5)}#hamburger.svelte-lsp1gd .line.svelte-lsp1gd{width:100%;height:2px;background:var(--ink);transition:background 0.2s, transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);transform-origin:right}#hamburger.svelte-lsp1gd .line-middle.svelte-lsp1gd{transform-origin:center}#hamburger.svelte-lsp1gd:hover .line.svelte-lsp1gd,#hamburger.svelte-lsp1gd:focus .line.svelte-lsp1gd{background:var(--yellow)}@media(max-width: 768px){#hamburger.svelte-lsp1gd.svelte-lsp1gd{display:flex}}',
  map: null
};
const HamburgerButton = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = (0, import_index_2749e1b7.a)(import_store_6b7e9707.i, (value) => $isMenuOpen = value);
  let readableMenuStateOpposite;
  $$result.css.add(css$8);
  readableMenuStateOpposite = $isMenuOpen ? "Close" : "Open";
  $$unsubscribe_isMenuOpen();
  return `<button id="${"hamburger"}"${(0, import_index_2749e1b7.d)("aria-pressed", $isMenuOpen, 0)} class="${["settings-toggle svelte-lsp1gd", $isMenuOpen ? "fixed" : ""].join(" ").trim()}"><span class="${"sr"}">${(0, import_index_2749e1b7.e)(readableMenuStateOpposite)} menu</span>
	<div class="${"line line-top svelte-lsp1gd"}" aria-hidden="${"true"}"></div>
	<div class="${"line line-middle svelte-lsp1gd"}" aria-hidden="${"true"}"></div>
	<div class="${"line line-bottom svelte-lsp1gd"}" aria-hidden="${"true"}"></div>
</button>`;
});
var NavMenu_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.main-nav.svelte-1gl5mw3{text-align:right;font-family:var(--headingFont)}@media(max-width: 768px){.main-nav.svelte-1gl5mw3{display:block;position:fixed;transition:transform 0.4s cubic-bezier(1, 0, 0, 1), opacity 0.4s cubic-bezier(1, 0, 0, 1);transform:translateX(0);background:hsla(var(--blackHSL), 0.95);width:100vw;height:100vh;top:0;left:-100vw;display:flex;flex-wrap:wrap;place-content:center;padding:3rem;opacity:0;z-index:10}.main-nav.open.svelte-1gl5mw3,.main-nav.svelte-1gl5mw3:focus-within{transform:translateX(100vw);opacity:1}}@media(min-width: 768px){.main-nav.svelte-1gl5mw3{display:flex;justify-content:flex-end}}',
  map: null
};
const NavMenu = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = (0, import_index_2749e1b7.a)(import_store_6b7e9707.i, (value) => $isMenuOpen = value);
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$7);
  $$unsubscribe_isMenuOpen();
  return `<div>${(0, import_index_2749e1b7.v)(HamburgerButton, "HamburgerButton").$$render($$result, {}, {}, {})}

		<nav class="${["main-nav nav svelte-1gl5mw3", $isMenuOpen ? "open" : ""].join(" ").trim()}" role="${"navigation"}">${(0, import_index_2749e1b7.v)(NavLinks, "NavLinks").$$render($$result, { path }, {}, {})}</nav>
	</div>`;
});
const LightDarkIcon = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 210 419"}" version="${"1.1"}" style="${"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"}"><g id="${"Artboard3"}" transform="${"matrix(1,0,0,1,374.4,-53.7328)"}"><rect x="${"-374.4"}" y="${"53.733"}" width="${"209.435"}" height="${"418.87"}" style="${"fill:none;"}"></rect><g transform="${"matrix(0.232589,0,0,0.232589,-323.649,302.224)"}"><circle cx="${"232.025"}" cy="${"282.304"}" r="${"148.163"}" style="${"fill:none;stroke-width:44.79px;"}"></circle></g><g transform="${"matrix(0.332894,0,0,0.325737,-352.906,286.451)"}"><g><g transform="${"matrix(1,0,0,1,0,4.81304)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.63px;"}"></path></g><g transform="${"matrix(1,0,0,1,0,388.699)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.63px;"}"></path></g></g><g transform="${"matrix(-0.5,-0.866025,0.866025,-0.5,158.494,591.506)"}"><g transform="${"matrix(1,0,0,1,0,4.81304)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.93px;"}"></path></g><g transform="${"matrix(1,0,0,1,0,388.699)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.93px;"}"></path></g></g><g transform="${"matrix(-0.5,0.866025,-0.866025,-0.5,591.506,158.494)"}"><g transform="${"matrix(1,0,0,1,0,4.81304)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.34px;"}"></path></g><g transform="${"matrix(1,0,0,1,0,388.699)"}"><path d="${"M250,82.475L250,24.014"}" style="${"fill:none;stroke-width:31.34px;"}"></path></g></g></g><g transform="${"matrix(0.550187,0,0,0.550187,-373.251,-144.776)"}"><path d="${"M179.963,459.132C173.842,471.079 170.387,484.617 170.387,498.955C170.387,547.265 209.608,586.487 257.918,586.487C264.271,586.487 270.466,585.809 276.438,584.52C261.932,612.833 232.455,632.227 198.483,632.227C150.173,632.227 110.952,593.006 110.952,544.696C110.952,502.739 140.536,467.637 179.963,459.132Z"}" style="${"fill:none;stroke-width:18.93px;"}"></path></g></g></svg>`;
});
var DarkModeToggle_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}#dark-mode-toggle{background:var(--buttonBackground)}#dark-mode-toggle:hover svg path,#dark-mode-toggle:hover svg circle,#dark-mode-toggle:focus svg path,#dark-mode-toggle:focus svg circle{stroke:var(--yellow)}#dark-mode-toggle.dark svg{transform:translateY(0)}#dark-mode-toggle svg{--itemTransition:.4s cubic-bezier(.7,-0.01,0,1.01);width:2rem;height:4rem;transform:translateY(-1.975rem);transition:transform var(--itemTransition), fill var(--itemTransition), stroke var(--itemTransition), background var(--itemTransition)}#dark-mode-toggle svg path,#dark-mode-toggle svg circle{transition:transform var(--itemTransition), fill var(--itemTransition), stroke var(--itemTransition), background var(--itemTransition);stroke:var(--ink)}',
  map: null
};
const DarkModeToggle = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = (0, import_index_2749e1b7.a)(import_store_6b7e9707.t, (value) => $theme = value);
  let isDarkMode;
  let enableOrDisable;
  $$result.css.add(css$6);
  isDarkMode = $theme === import_store_6b7e9707.T.Dark;
  enableOrDisable = isDarkMode ? "Disable" : "Enable";
  $$unsubscribe_theme();
  return `<button id="${"dark-mode-toggle"}" class="${["settings-toggle", isDarkMode ? "dark" : ""].join(" ").trim()}" title="${(0, import_index_2749e1b7.e)(enableOrDisable) + " dark mode"}"${(0, import_index_2749e1b7.d)("aria-pressed", isDarkMode, 0)}><span class="${"sr"}">${(0, import_index_2749e1b7.e)(enableOrDisable)} dark mode</span>
  ${(0, import_index_2749e1b7.v)(LightDarkIcon, "LightDarkIcon").$$render($$result, {}, {}, {})}
</button>`;
});
var ReduceMotionToggle_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}#motion-toggle.svelte-1fjs0iv{background:var(--buttonBackground);font-weight:bold;font-size:0.6rem;text-transform:uppercase;color:var(--ink);font-family:var(--headingFont)}#motion-toggle[aria-pressed=true].svelte-1fjs0iv::before{content:"";width:calc(100% + 0.1rem);height:0.1rem;background:var(--ink);display:block;position:absolute;transform-origin:center;top:calc(50% - 0.05rem);left:-0.05rem;z-index:11;border:0;transform:rotate(45deg)}#motion-toggle.svelte-1fjs0iv:hover,#motion-toggle.svelte-1fjs0iv:focus{color:var(--yellow)}',
  map: null
};
const ReduceMotionToggle = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => $prefersReducedMotion = value);
  let enableOrDisable;
  $$result.css.add(css$5);
  enableOrDisable = $prefersReducedMotion ? "Disable" : "Enable";
  $$unsubscribe_prefersReducedMotion();
  return `<button id="${"motion-toggle"}" class="${"settings-toggle svelte-1fjs0iv"}" title="${(0, import_index_2749e1b7.e)(enableOrDisable) + " reduced motion"}"${(0, import_index_2749e1b7.d)("aria-pressed", $prefersReducedMotion, 0)}><span class="${"sr"}">${(0, import_index_2749e1b7.e)(enableOrDisable)} reduced motion</span>
  Move
</button>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.logo.svelte-1x3mjbx{width:auto;height:2rem;display:block}@media(min-width: 1960px) and (min-height: 1200px){.logo.svelte-1x3mjbx{height:3rem}}.icon-container.svelte-1x3mjbx{display:flex;align-items:center;position:fixed;right:1rem;top:calc(1rem - 2px);transition:opacity 0.2s}@media(min-width: 768px){.icon-container.svelte-1x3mjbx{position:static}}.sticky.svelte-1x3mjbx{--ink:var(--white);--buttonBackground:transparent}.header.svelte-1x3mjbx{display:flex;justify-content:space-between;align-items:center;width:100%;position:relative;z-index:3;padding:var(--quarterNote) var(--margin) var(--halfNote)}@media(min-width: 768px){.header.svelte-1x3mjbx{padding:var(--halfNote) var(--margin)}}.skip-to-content-link.svelte-1x3mjbx{--itemTransition:.15s cubic-bezier(0.86, 0, 0.07, 1);transition:transform var(--itemTransition), opacity var(--itemTransition);position:absolute;top:-6rem;left:1rem;padding:0.5em;opacity:0;display:flex;justify-content:center;align-items:center;height:3rem;background:var(--darkBlue);color:var(--white);font-family:var(--headingFont)}.skip-to-content-link.svelte-1x3mjbx:focus{transform:translateY(7rem);opacity:1;z-index:11}',
  map: null
};
const Header = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  let $isScrollingDown, $$unsubscribe_isScrollingDown;
  $$unsubscribe_isMenuOpen = (0, import_index_2749e1b7.a)(import_store_6b7e9707.i, (value) => $isMenuOpen = value);
  $$unsubscribe_isScrollingDown = (0, import_index_2749e1b7.a)(import_store_6b7e9707.a, (value) => $isScrollingDown = value);
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$4);
  $$unsubscribe_isMenuOpen();
  $$unsubscribe_isScrollingDown();
  return `<div><header class="${"header svelte-1x3mjbx"}"><a class="${"skip-to-content-link svelte-1x3mjbx"}" href="${"#main"}">Skip to main content
    </a>

		<a href="${"/"}" class="${"logo svelte-1x3mjbx"}">${(0, import_index_2749e1b7.v)(LogoSVG, "LogoSVG").$$render($$result, {}, {}, {})}
			<span class="${"sr"}">Home</span></a>
		
		<div class="${[
    "icon-container svelte-1x3mjbx",
    ($isMenuOpen ? "sticky" : "") + " " + ($isScrollingDown && !$isMenuOpen ? "ghosty" : "")
  ].join(" ").trim()}">${(0, import_index_2749e1b7.v)(ReduceMotionToggle, "ReduceMotionToggle").$$render($$result, {}, {}, {})}
			${(0, import_index_2749e1b7.v)(DarkModeToggle, "DarkModeToggle").$$render($$result, {}, {}, {})}
			${(0, import_index_2749e1b7.v)(NavMenu, "NavMenu").$$render($$result, { path }, {}, {})}</div></header>

  ${(0, import_index_2749e1b7.v)(Grid, "Grid").$$render($$result, { refresh: path }, {}, {})}

	<noscript><style>#dark-mode-toggle, 
			#motion-toggle,
			#contact-form {
				display: none;
			}

			.page-head .heading-wrapper .brace.closing-brace {
        transform: translateX(0);
      }</style></noscript>
</div>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.footer.svelte-ly5ub.svelte-ly5ub{width:100%;background:var(--darkBlue);color:var(--white);line-height:1.6em;padding:2.5rem var(--margin) 2rem}@media(min-width: 1024px){.footer.svelte-ly5ub.svelte-ly5ub{display:grid;grid-template-columns:1fr 1fr 2fr;align-items:stretch}}@media(min-width: 1024px){.footer.svelte-ly5ub.svelte-ly5ub{font-size:0.8rem}}.footer.svelte-ly5ub h2.svelte-ly5ub{color:inherit;font-size:0.7rem;margin:0 0 var(--quarterNote);width:-webkit-max-content;width:-moz-max-content;width:max-content}.footer.svelte-ly5ub a.svelte-ly5ub{color:inherit;-webkit-text-decoration-color:var(--yellow);text-decoration-color:var(--yellow)}.footer-wrapper.svelte-ly5ub.svelte-ly5ub{overflow:hidden;max-width:100vw}.footer__links.svelte-ly5ub.svelte-ly5ub{padding:0 var(--quarterNote) var(--quarterNote);margin:2rem 2rem 2rem 1rem;border-bottom:1px solid var(--lightBlue)}.footer__links.svelte-ly5ub .svelte-ly5ub::marker{color:var(--lightBlue)}@media(min-width: 1024px){.footer__links.svelte-ly5ub.svelte-ly5ub{border-bottom:0;border-right:1px solid var(--lightBlue);padding:1rem;margin-left:0}}.footer__links.svelte-ly5ub ul.svelte-ly5ub{list-style-type:square;margin:var(--quarterNote) 0}.footer__links.svelte-ly5ub li.svelte-ly5ub{margin:0.5rem 0 0;font-family:var(--headingFont)}.footer.svelte-ly5ub .fine-print.svelte-ly5ub{font-style:italic;margin-left:1rem;align-self:center}@media(min-width: 1024px){.footer.svelte-ly5ub .fine-print.svelte-ly5ub{margin-left:0}}.footer.svelte-ly5ub .fine-print p.svelte-ly5ub{margin:0.5rem 0;max-width:44em}',
  map: null
};
const Footer = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  const currentYear = new Date().getFullYear();
  $$result.css.add(css$3);
  return `<div class="${"footer-wrapper svelte-ly5ub"}">${(0, import_index_2749e1b7.v)(Grid, "Grid").$$render($$result, { inverted: true }, {}, {})}
  <footer class="${"footer svelte-ly5ub"}"><div class="${"footer__links svelte-ly5ub"}"><h2 class="${"h4 svelte-ly5ub"}" id="${"footer-pages"}">Pages</h2>
      <nav class="${"svelte-ly5ub"}"><ul aria-labelledby="${"footer-pages"}" class="${"svelte-ly5ub"}"><li class="${"svelte-ly5ub"}"><a href="${"/"}" class="${"svelte-ly5ub"}">Home/About</a></li>
          <li class="${"svelte-ly5ub"}"><a href="${"/blog"}" class="${"svelte-ly5ub"}">Blog</a></li>
          <li class="${"svelte-ly5ub"}"><a href="${"/projects"}" class="${"svelte-ly5ub"}">Projects</a></li>
          <li class="${"svelte-ly5ub"}"><a href="${"/writing-and-speaking"}" class="${"svelte-ly5ub"}">Writing &amp; Speaking</a></li>
          <li class="${"svelte-ly5ub"}"><a href="${"/contact"}" class="${"svelte-ly5ub"}">Contact</a></li></ul></nav></div>
    <div class="${"footer__links svelte-ly5ub"}"><h2 class="${"h4 svelte-ly5ub"}" id="${"footer-links"}">Links</h2>
      <ul aria-labelledby="${"footer-links"}" class="${"svelte-ly5ub"}"><li class="${"svelte-ly5ub"}"><a href="${"/api/rss.xml"}" rel="${"external"}" class="${"svelte-ly5ub"}">RSS</a></li>
        <li class="${"svelte-ly5ub"}"><a href="${"https://ko-fi.com/collinsworth"}" class="${"svelte-ly5ub"}">Ko-Fi</a></li>
        <li class="${"svelte-ly5ub"}"><a href="${"https://github.com/rickyjanuari"}" class="${"svelte-ly5ub"}">GitHub</a></li>
        <li class="${"svelte-ly5ub"}"><a href="${"https://codepen.io/collinsworth"}" class="${"svelte-ly5ub"}">CodePen</a></li>
        <li class="${"svelte-ly5ub"}"><a href="${"https://twitter.com/rickyjanuari"}" class="${"svelte-ly5ub"}">Twitter</a></li></ul></div>

    <div class="${"fine-print svelte-ly5ub"}"><p class="${"svelte-ly5ub"}">\xA92015\u2013${(0, import_index_2749e1b7.e)(currentYear)} Ricky Januari.</p>

      <p class="${"svelte-ly5ub"}">Made with 
        <del>WordPress</del>
        <del>Gridsome</del>
        <a rel="${"external"}" href="${"https://kit.svelte.dev/"}" class="${"svelte-ly5ub"}">SvelteKit</a>; hosted\xA0on\xA0<a rel="${"external"}" href="${"https://netlify.com"}" class="${"svelte-ly5ub"}">Netlify</a>.
      </p></div></footer>
</div>`;
});
var PageTransition_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.transition-wrapper.span.svelte-1lfrk4m{grid-column:1/-1;grid-row:1/2}',
  map: null
};
const PageTransition = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => value);
  let { refresh = "" } = $$props;
  let { span = false } = $$props;
  let { transitionIn = true } = $$props;
  let { transitionOut = true } = $$props;
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0)
    $$bindings.refresh(refresh);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0)
    $$bindings.span(span);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  $$result.css.add(css$2);
  $$unsubscribe_prefersReducedMotion();
  return `<div class="${["transition-wrapper svelte-1lfrk4m", span ? "span" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
var PageHeading_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.page-head.svelte-o53j9t.svelte-o53j9t{--transition:transform .24s cubic-bezier(0.165, 0.84, 0.44, 1);margin-bottom:var(--halfNote);display:flex;align-items:center;flex-wrap:wrap;contain:layout;overflow:hidden;position:relative;z-index:0;font-size:1.1rem;min-height:2.2rem}.page-head.svelte-o53j9t .heading-wrapper.svelte-o53j9t{display:flex;position:relative;width:auto}.page-head.svelte-o53j9t .heading-wrapper .brace.svelte-o53j9t{font-family:var(--headingFont);font-weight:normal;font-size:1.25em;color:var(--lightGray);margin:0 0.1em 0 0;z-index:2;position:relative;left:-1px}.page-head.svelte-o53j9t .heading-wrapper .brace.closing-brace.svelte-o53j9t{color:var(--yellow);margin:0;transition:var(--transition);transform:translateX(calc(-100% + 0.3em));position:absolute;left:100%;width:100%;background:var(--paper);box-shadow:3rem 0 0 1rem var(--paper);overflow:visible}.page-head.svelte-o53j9t .heading-wrapper.in .closing-brace.svelte-o53j9t{transform:translateX(0)}.page-head.svelte-o53j9t .heading-wrapper.no-motion .closing-brace.svelte-o53j9t{transform:translateX(0)}.page-head.svelte-o53j9t h1.svelte-o53j9t{font-size:inherit;margin:0 0.25rem 0 0;padding:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-weight:normal;display:flex;align-items:center}.page-head.svelte-o53j9t h1 .title-wrap.svelte-o53j9t{position:relative;z-index:1;background:linear-gradient(90deg, #a7a8aa, #92abb2, #5eca78, #b6ec1f, #ffd100);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;font-family:var(--headingFont);text-transform:lowercase;flex:0 1 auto;white-space:nowrap;line-height:1.2}',
  map: null
};
const PageHeading = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => $prefersReducedMotion = value);
  let { title } = $$props;
  let { isSinglePost = false } = $$props;
  let computedTitle = "";
  let isWorking = false;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isSinglePost === void 0 && $$bindings.isSinglePost && isSinglePost !== void 0)
    $$bindings.isSinglePost(isSinglePost);
  $$result.css.add(css$1);
  {
    if (title) {
      if (title === "/") {
        title = `about me`;
      } else if (title[0] === "/") {
        title = title.slice(1);
      }
      title = title.split("/").join(" / ").replace(/-/g, " ");
      isWorking = false;
      setTimeout(() => {
        isWorking = true;
        computedTitle = title;
      }, 420);
    }
  }
  $$unsubscribe_prefersReducedMotion();
  return `${(0, import_index_2749e1b7.v)(PageTransition, "PageTransition").$$render($$result, { refresh: isSinglePost, span: true }, {}, {
    default: () => {
      return `${!isSinglePost ? `<div class="${"page-head svelte-o53j9t"}"><div class="${[
        "heading-wrapper svelte-o53j9t",
        (isWorking ? "in" : "") + " " + ($prefersReducedMotion ? "no-motion" : "")
      ].join(" ").trim()}"><span class="${"brace svelte-o53j9t"}" aria-hidden="${"true"}">[</span>
        <h1 class="${"svelte-o53j9t"}"><div class="${"title-wrap svelte-o53j9t"}">${(0, import_index_2749e1b7.e)(computedTitle)}
            <noscript>${(0, import_index_2749e1b7.e)(title)}</noscript></div></h1>
        <span class="${"brace closing-brace svelte-o53j9t"}" aria-hidden="${"true"}">]</span>
        
        <noscript>
          <style>.closing-brace {
              transform: none !important;
            }</style></noscript></div></div>` : `<div class="${"page-head svelte-o53j9t"}"></div>`}`;
    }
  })}`;
});
var Loader_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.loader.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{background:hsla(var(--paperHSL), 0.7);position:fixed;z-index:3;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;transition:opacity 0.1s}.loader.loading.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{opacity:1;pointer-events:unset}.loading-wrapper.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{--unit:2.5rem;--easing:cubic-bezier(0.08, 0.82, 0.17, 1);display:grid;grid-template-columns:1fr repeat(3, var(--unit)) 1fr;grid-gap:1rem}.loading-wrapper.svelte-1ahh2zx .dot.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{width:var(--unit);height:var(--unit);border-radius:var(--unit);grid-row:1/2;transform:scale(0)}.loading-wrapper.svelte-1ahh2zx .dot.outer.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{-webkit-animation:svelte-1ahh2zx-outer_pop 1000ms infinite var(--easing);animation:svelte-1ahh2zx-outer_pop 1000ms infinite var(--easing);background:var(--yellow)}.loading-wrapper.svelte-1ahh2zx .dot.outer.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx:nth-of-type(2){-webkit-animation-delay:100ms;animation-delay:100ms;background:var(--lightBlue)}.loading-wrapper.svelte-1ahh2zx .dot.outer.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx:nth-of-type(3){-webkit-animation-delay:200ms;animation-delay:200ms;background:var(--lightGray)}.loading-wrapper.svelte-1ahh2zx .dot.inner.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{background:var(--paper);-webkit-animation:svelte-1ahh2zx-inner_pop 1000ms infinite var(--easing);animation:svelte-1ahh2zx-inner_pop 1000ms infinite var(--easing)}.loading-wrapper.svelte-1ahh2zx .dot.inner.svelte-1ahh2zx+.inner.svelte-1ahh2zx.svelte-1ahh2zx{-webkit-animation-delay:100ms;animation-delay:100ms}.loading-wrapper.svelte-1ahh2zx .dot.inner.svelte-1ahh2zx+.inner.svelte-1ahh2zx+.inner.svelte-1ahh2zx{-webkit-animation-delay:200ms;animation-delay:200ms}.loading-wrapper.svelte-1ahh2zx .first.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{grid-column:2/3}.loading-wrapper.svelte-1ahh2zx .second.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{grid-column:3/4}.loading-wrapper.svelte-1ahh2zx .third.svelte-1ahh2zx.svelte-1ahh2zx.svelte-1ahh2zx{grid-column:4/5}@-webkit-keyframes svelte-1ahh2zx-outer_pop{0%{transform:scale(0)}50%{transform:scale(1)}75%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-1ahh2zx-outer_pop{0%{transform:scale(0)}50%{transform:scale(1)}75%{transform:scale(1)}100%{transform:scale(0)}}@-webkit-keyframes svelte-1ahh2zx-inner_pop{0%{transform:scale(0)}35%{transform:scale(0)}60%{transform:scale(1)}95%{transform:scale(1)}96%{transform:scale(0)}100%{transform:scale(0)}}@keyframes svelte-1ahh2zx-inner_pop{0%{transform:scale(0)}35%{transform:scale(0)}60%{transform:scale(1)}95%{transform:scale(1)}96%{transform:scale(0)}100%{transform:scale(0)}}',
  map: null
};
const Loader = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let { loading } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  $$result.css.add(css);
  return `<div class="${["loader svelte-1ahh2zx", loading ? "loading" : ""].join(" ").trim()}"><div class="${"loading-wrapper svelte-1ahh2zx"}"><div class="${"dot outer first svelte-1ahh2zx"}"></div>
    <div class="${"dot outer second svelte-1ahh2zx"}"></div>
    <div class="${"dot outer third svelte-1ahh2zx"}"></div>

    <div class="${"dot inner first svelte-1ahh2zx"}"></div>
    <div class="${"dot inner second svelte-1ahh2zx"}"></div>
    <div class="${"dot inner third svelte-1ahh2zx"}"></div></div>
</div>`;
});
const load = async ({ url }) => {
  const path = url.pathname;
  return { props: { path } };
};
const _layout = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let $isScrollingDown, $$unsubscribe_isScrollingDown;
  let $prefersReducedMotion, $$unsubscribe_prefersReducedMotion;
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_isScrollingDown = (0, import_index_2749e1b7.a)(import_store_6b7e9707.a, (value) => $isScrollingDown = value);
  $$unsubscribe_prefersReducedMotion = (0, import_index_2749e1b7.a)(import_store_6b7e9707.p, (value) => $prefersReducedMotion = value);
  $$unsubscribe_isLoading = (0, import_index_2749e1b7.a)(import_store_6b7e9707.b, (value) => $isLoading = value);
  let { path } = $$props;
  let lastScrollPosition = 0;
  const isSinglePostCheck = new RegExp(/\/blog\/[A-z0-9\-_]+\/?$/);
  let isSinglePost;
  (0, import_just_throttle.default)(() => {
    if (window.outerWidth >= 768) {
      if ($isScrollingDown)
        import_store_6b7e9707.a.set(false);
      return;
    }
    const currentScrollPosition = window.scrollY;
    const delta = lastScrollPosition - currentScrollPosition;
    if (delta > 0 && delta < 10) {
      return;
    }
    if (lastScrollPosition > currentScrollPosition) {
      import_store_6b7e9707.a.set(false);
    } else if (currentScrollPosition > 240) {
      import_store_6b7e9707.a.set(true);
    }
    lastScrollPosition = currentScrollPosition;
  }, 100);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  isSinglePost = isSinglePostCheck.test(path);
  $$unsubscribe_isScrollingDown();
  $$unsubscribe_prefersReducedMotion();
  $$unsubscribe_isLoading();
  return `

${$$result.head += `<meta property="${"og:site_name"}" content="${"Ricky Januari"}" data-svelte="svelte-1b4bhzt"><meta property="${"og:locale"}" content="${"en_US"}" data-svelte="svelte-1b4bhzt"><meta name="${"twitter:creator"}" content="${"@rickyjanuari"}" data-svelte="svelte-1b4bhzt"><meta name="${"twitter:site"}" content="${"@rickyjanuari"}" data-svelte="svelte-1b4bhzt"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1b4bhzt">${`<script defer data-domain="${"rickyjanuari.com"}" src="${"https://plausible.io/js/plausible.js"}" data-svelte="svelte-1b4bhzt"><\/script>`}`, ""}

<div id="${"app"}"${(0, import_index_2749e1b7.f)(($prefersReducedMotion ? "reduce-motion" : "").trim())}>${(0, import_index_2749e1b7.v)(Loader, "Loader").$$render($$result, { loading: $isLoading }, {}, {})}

	${(0, import_index_2749e1b7.v)(Header, "Header").$$render($$result, { path }, {}, {})} 

	<div class="${["layout", !isSinglePost ? "subpage" : ""].join(" ").trim()}">${(0, import_index_2749e1b7.v)(PageHeading, "PageHeading").$$render($$result, { title: path, isSinglePost }, {}, {})}

		${(0, import_index_2749e1b7.v)(PageTransition, "PageTransition").$$render($$result, { refresh: path }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>

	${(0, import_index_2749e1b7.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
