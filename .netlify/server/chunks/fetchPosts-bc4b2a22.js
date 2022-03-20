var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  f: () => fetchPosts
});
module.exports = __toCommonJS(stdin_exports);
const fetchPosts = async ({ offset = 0, limit = 10, category = "" } = {}) => {
  let posts;
  {
    posts = await Promise.all(Object.entries({ "../../../../routes/blog/_posts/12-things.md": () => Promise.resolve().then(() => __toESM(require("./12-things-949a7b41.js"))), "../../../../routes/blog/_posts/8-student-portfolio-mistakes.md": () => Promise.resolve().then(() => __toESM(require("./8-student-portfolio-mistakes-97ac2775.js"))), "../../../../routes/blog/_posts/a-new-headless-site-with-gridsome.md": () => Promise.resolve().then(() => __toESM(require("./a-new-headless-site-with-gridsome-c6997bd9.js"))), "../../../../routes/blog/_posts/add-blog-comments-static-site.md": () => Promise.resolve().then(() => __toESM(require("./add-blog-comments-static-site-7efb9968.js"))), "../../../../routes/blog/_posts/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme.md": () => Promise.resolve().then(() => __toESM(require("./adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme-5d471a4a.js"))), "../../../../routes/blog/_posts/announcing-quina-my-first-app.md": () => Promise.resolve().then(() => __toESM(require("./announcing-quina-my-first-app-2ec1b56e.js"))), "../../../../routes/blog/_posts/build-static-sveltekit-markdown-blog.md": () => Promise.resolve().then(() => __toESM(require("./build-static-sveltekit-markdown-blog-50359119.js"))), "../../../../routes/blog/_posts/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.md": () => Promise.resolve().then(() => __toESM(require("./confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets-2947b46d.js"))), "../../../../routes/blog/_posts/converting-from-gridsome-to-sveltekit.md": () => Promise.resolve().then(() => __toESM(require("./converting-from-gridsome-to-sveltekit-87f9ea4f.js"))), "../../../../routes/blog/_posts/creating-custom-gutenberg-blocks-with-the-block-lab-plugin.md": () => Promise.resolve().then(() => __toESM(require("./creating-custom-gutenberg-blocks-with-the-block-lab-plugin-6d622b1c.js"))), "../../../../routes/blog/_posts/essential-tools-wordpress-development.md": () => Promise.resolve().then(() => __toESM(require("./essential-tools-wordpress-development-2b28f9a5.js"))), "../../../../routes/blog/_posts/filetypes.md": () => Promise.resolve().then(() => __toESM(require("./filetypes-55ad3bb8.js"))), "../../../../routes/blog/_posts/five-ways-to-become-a-better-designer-that-arent-design.md": () => Promise.resolve().then(() => __toESM(require("./five-ways-to-become-a-better-designer-that-arent-design-bb2117e3.js"))), "../../../../routes/blog/_posts/goodbye-instagram.md": () => Promise.resolve().then(() => __toESM(require("./goodbye-instagram-09f06d13.js"))), "../../../../routes/blog/_posts/goodbye-wordpress.md": () => Promise.resolve().then(() => __toESM(require("./goodbye-wordpress-de96e921.js"))), "../../../../routes/blog/_posts/how-to-connect-local-with-codekit.md": () => Promise.resolve().then(() => __toESM(require("./how-to-connect-local-with-codekit-cf46e021.js"))), "../../../../routes/blog/_posts/introducing-svelte-comparing-with-react-vue.md": () => Promise.resolve().then(() => __toESM(require("./introducing-svelte-comparing-with-react-vue-f7387ef5.js"))), "../../../../routes/blog/_posts/lets-learn-css-variables.md": () => Promise.resolve().then(() => __toESM(require("./lets-learn-css-variables-7d1d9c23.js"))), "../../../../routes/blog/_posts/new-site-new-theme-for-2018.md": () => Promise.resolve().then(() => __toESM(require("./new-site-new-theme-for-2018-dcc2dfe4.js"))), "../../../../routes/blog/_posts/pantone.md": () => Promise.resolve().then(() => __toESM(require("./pantone-40caa47d.js"))), "../../../../routes/blog/_posts/profit-is-not-a-value.md": () => Promise.resolve().then(() => __toESM(require("./profit-is-not-a-value-97b16a49.js"))), "../../../../routes/blog/_posts/the-five-things-i-wish-somebody-had-told-me-as-a-design-student.md": () => Promise.resolve().then(() => __toESM(require("./the-five-things-i-wish-somebody-had-told-me-as-a-design-student-e793bf01.js"))), "../../../../routes/blog/_posts/why-designers-shouldnt-remake-other-designers-logos.md": () => Promise.resolve().then(() => __toESM(require("./why-designers-shouldnt-remake-other-designers-logos-9be49eae.js"))), "../../../../routes/blog/_posts/wordpress-child-theme-explanation.md": () => Promise.resolve().then(() => __toESM(require("./wordpress-child-theme-explanation-ffa0277c.js"))) }).map(async ([path, page]) => {
      const { metadata } = await page();
      const slug = path.split("/").pop().split(".").shift();
      return __spreadProps(__spreadValues({}, metadata), { slug });
    }));
  }
  let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  if (category) {
    sortedPosts = posts.filter((post) => post.categories.includes(category));
  }
  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }
  if (limit && limit < sortedPosts.length) {
    sortedPosts = sortedPosts.slice(0, limit);
  }
  const finalPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    categories: post.categories
  }));
  return finalPosts;
};
