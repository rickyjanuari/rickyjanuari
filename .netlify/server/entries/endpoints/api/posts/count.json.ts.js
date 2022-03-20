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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
const get = async () => {
  let posts;
  {
    posts = { "../../blog/_posts/12-things.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/12-things-949a7b41.js"))), "../../blog/_posts/8-student-portfolio-mistakes.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/8-student-portfolio-mistakes-97ac2775.js"))), "../../blog/_posts/a-new-headless-site-with-gridsome.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/a-new-headless-site-with-gridsome-c6997bd9.js"))), "../../blog/_posts/add-blog-comments-static-site.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/add-blog-comments-static-site-7efb9968.js"))), "../../blog/_posts/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme-5d471a4a.js"))), "../../blog/_posts/announcing-quina-my-first-app.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/announcing-quina-my-first-app-2ec1b56e.js"))), "../../blog/_posts/build-static-sveltekit-markdown-blog.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/build-static-sveltekit-markdown-blog-50359119.js"))), "../../blog/_posts/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets-2947b46d.js"))), "../../blog/_posts/converting-from-gridsome-to-sveltekit.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/converting-from-gridsome-to-sveltekit-87f9ea4f.js"))), "../../blog/_posts/creating-custom-gutenberg-blocks-with-the-block-lab-plugin.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/creating-custom-gutenberg-blocks-with-the-block-lab-plugin-6d622b1c.js"))), "../../blog/_posts/essential-tools-wordpress-development.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/essential-tools-wordpress-development-2b28f9a5.js"))), "../../blog/_posts/filetypes.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/filetypes-55ad3bb8.js"))), "../../blog/_posts/five-ways-to-become-a-better-designer-that-arent-design.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/five-ways-to-become-a-better-designer-that-arent-design-bb2117e3.js"))), "../../blog/_posts/goodbye-instagram.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/goodbye-instagram-09f06d13.js"))), "../../blog/_posts/goodbye-wordpress.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/goodbye-wordpress-de96e921.js"))), "../../blog/_posts/how-to-connect-local-with-codekit.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/how-to-connect-local-with-codekit-cf46e021.js"))), "../../blog/_posts/introducing-svelte-comparing-with-react-vue.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/introducing-svelte-comparing-with-react-vue-f7387ef5.js"))), "../../blog/_posts/lets-learn-css-variables.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/lets-learn-css-variables-7d1d9c23.js"))), "../../blog/_posts/new-site-new-theme-for-2018.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/new-site-new-theme-for-2018-dcc2dfe4.js"))), "../../blog/_posts/pantone.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/pantone-40caa47d.js"))), "../../blog/_posts/profit-is-not-a-value.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/profit-is-not-a-value-97b16a49.js"))), "../../blog/_posts/the-five-things-i-wish-somebody-had-told-me-as-a-design-student.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/the-five-things-i-wish-somebody-had-told-me-as-a-design-student-e793bf01.js"))), "../../blog/_posts/why-designers-shouldnt-remake-other-designers-logos.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/why-designers-shouldnt-remake-other-designers-logos-9be49eae.js"))), "../../blog/_posts/wordpress-child-theme-explanation.md": () => Promise.resolve().then(() => __toESM(require("../../../../chunks/wordpress-child-theme-explanation-ffa0277c.js"))) };
  }
  try {
    return {
      status: 200,
      body: {
        total: Object.keys(posts).length
      }
    };
  } catch {
    return {
      status: 500,
      body: {
        error: "Could not retrieve total number of posts."
      }
    };
  }
};
