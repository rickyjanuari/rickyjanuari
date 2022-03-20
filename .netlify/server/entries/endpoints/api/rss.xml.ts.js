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
var import_fetchPosts_bc4b2a22 = require("../../../chunks/fetchPosts-bc4b2a22.js");
const get = async () => {
  const data = await (0, import_fetchPosts_bc4b2a22.f)();
  const body = render(data);
  const headers = {
    "Cache-Control": `max-age=0, s-maxage=3600`,
    "Content-Type": "application/xml"
  };
  return {
    status: 200,
    body,
    headers
  };
};
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Ricky Januari</title>
<description>Ricky Januari</description>
<link>https://rickyjanuari.com</link>
<atom:link href="https://rickyjanuari.com/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map((post) => `<item>
<guid isPermaLink="true">https://rickyjanuari.com/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://rickyjanuari.com/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`).join("")}
</channel>
</rss>
`;
