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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../chunks/index-2749e1b7.js");
var import_Main_5d179e14 = require("../../chunks/Main-5d179e14.js");
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}h2.svelte-e108qu.svelte-e108qu{margin-bottom:var(--eighthNote)}#contact-form.svelte-e108qu.svelte-e108qu{width:100%;margin-top:4rem}#contact-form.svelte-e108qu label.svelte-e108qu{font-family:var(--headingFont);font-weight:bold}#contact-form.svelte-e108qu .error.svelte-e108qu{background-color:var(--red);color:var(--white);padding:calc(var(--quarterNote) * 0.5) var(--quarterNote);margin:var(--quarterNote) 0;font-style:italic}',
  map: null
};
const Contact = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  let formData = {
    from_page: "",
    name: "",
    email: "",
    message: ""
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ricky Januari | Contact</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"If you fill out this form, I'll probably send you an email. What a bargain!"}" data-svelte="svelte-1p1z7eq"><meta property="${"og:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-1p1z7eq"><meta name="${"twitter:image"}" content="${"https://rickyjanuari.com/images/site-image.png"}" data-svelte="svelte-1p1z7eq">`, ""}


${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"compressed-content"}"><h2 class="${"svelte-e108qu"}">Get in touch</h2>

		${`<noscript><h3>Sorry, this contact form won&#39;t work without JavaScript enabled.</h3>
				<p>I don&#39;t do any tracking or anything like that though (except some <a href="${"https://plausible.io"}">privacy-respecting analytics</a>), if that&#39;s your concern.</p></noscript>

			<p><i>Happy to chat! I try to respond to everything that isn&#39;t spam.
				</i></p>

			<form id="${"contact-form"}" name="${"contact"}" method="${"post"}" action="${"/success/"}" data-netlify="${"true"}" data-netlify-honeypot="${"bot-field"}" class="${"svelte-e108qu"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contact"}">
				<p hidden><label class="${"svelte-e108qu"}">Don\u2019t fill this out: <input name="${"bot-field"}"></label></p>
				<input type="${"hidden"}" name="${"from_page"}"${(0, import_index_2749e1b7.d)("value", formData.from_page, 0)}>
				<div class="${"sender-info"}"><div><label for="${"name"}" class="${"label svelte-e108qu"}">Your name</label>
						<input type="${"text"}" name="${"name"}" placeholder="${"What should I call you?"}"${(0, import_index_2749e1b7.d)("value", formData.name, 0)}></div>
					<div><label for="${"email"}" class="${"svelte-e108qu"}">Your email address
						</label>
						<input type="${"email"}" name="${"email"}" placeholder="${"Where can I send my response?"}"${(0, import_index_2749e1b7.d)("value", formData.email, 0)}></div></div>

				<div class="${"message-wrapper"}"><label for="${"message"}" class="${"svelte-e108qu"}">What&#39;s on your mind?</label>
					<textarea name="${"message"}" rows="${"6"}" placeholder="${"What would you like to talk about?"}">${""}</textarea></div>

				${``}

				<button type="${"submit"}">Send
				</button></form>`}</div>`;
    }
  })}`;
});
