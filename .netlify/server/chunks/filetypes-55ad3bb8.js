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
  default: () => Filetypes,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
const metadata = {
  "title": "Understanding the Difference Between Image and Vector File Types",
  "date": "2015-06-11",
  "updated": "2021-01-19",
  "categories": ["design", "web"],
  "coverImage": "File-Types-Prev.png",
  "coverAlt": "135 / 89",
  "excerpt": "If you\u2019re like me, you\u2019ve probably spent some time wondering (and Googling) about the differences between various popular format types commonly used for graphic design applications. So I decided I\u2019d create a resource that\u2019s hopefully a handy reference on the matter of discerning file type supports and behavior."
};
const Filetypes = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>If you\u2019re like me, you\u2019ve probably spent some time wondering (and Googling) about the differences between various popular format types commonly used for graphic design applications. I\u2019ve found out I used or exported the wrong kind more times than I care to admit, and\xA0I\u2019ve asked or been asked the difference between a jpeg and a tiff on countless occasions. Even now it\u2019s difficult sometimes to remember whether certain file types support things like CMYK color or transparency, and\xA0so I decided I\u2019d create a resource that\u2019s hopefully a handy reference on the matter of discerning file type supports and behavior.</p>
<table><thead><tr><th>Format</th>
<th>Spot</th>
<th>CMYK</th>
<th>RGB</th>
<th>Vector</th>
<th>Transparency</th>
<th>Compression</th>
<th>Max Colors</th></tr></thead>
<tbody><tr><td>.eps</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>None</td>
<td>N/A</td></tr>
<tr><td>.gif</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>None</td>
<td>256</td></tr>
<tr><td>.jpg</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Lossy</td>
<td>Millions</td></tr>
<tr><td>.pdf</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Optional</td>
<td>N/A</td></tr>
<tr><td>.png</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>Lossless</td>
<td>256 or milliions</td></tr>
<tr><td>.svg</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Optional</td>
<td>N/A</td></tr>
<tr><td>.tif</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>Lossy or Lossless</td>
<td>Millions</td></tr>
<tr><td>.wmf</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
<td>Yes</td>
<td>Optional</td>
<td>Millions</td></tr></tbody></table>
<p><strong>A few notes\xA0about the chart and its summary:</strong></p>
<ul><li><strong>.jpg</strong> tends to be the best format\xA0for a photo or image with many colors where image size is a concern (especially on the web).</li>
<li><strong>.tiff</strong> is the ideal format for photo and raster applications\xA0where quality is the priority.</li>
<li><strong>.tiffs</strong> and <strong>.jpgs</strong> each support both RGB and CMYK, but this does not mean that a single tiff or jpeg file can be used for either application. In other words, .tiffs and .jpgs can exist as\xA0<em>either</em> CMYK or RGB files, but not both at the same time.</li>
<li><strong>.png</strong> is ideal for transparent raster images on the web\xA0<em>or</em> for web images with a low number of colors where compression may degrade quality (e.g., logos at fixed sizes or illustrations with large areas of flat color).</li>
<li><strong>.svg</strong>\xA0files\xA0(as their name implies) are designed for getting vectors to function and render on the web, as well as dynamic web animation. Ideal for logos on the web and other images that may need to display well at multiple sizes.</li>
<li><strong>.eps</strong> and <strong>.pdf</strong> have mostly the same functionality, and if you have the right software at your disposal they\u2019re largely interchangeable. However, .pdf is much more universal. This makes .eps a\xA0great choice for embedding or editing individual\xA0images (though .pdf also works for this purpose)\xA0and\xA0pdf better for outputting content for the end user to view or read. Regardless,\xA0they\u2019re both pretty much your only option for Pantone/spot colors, outside of Adobe\u2019s native file formats (.ai, .indd, etcetera). For more on that topic, see my post\xA0<a href="${"https://api.rickyjanuari.com/pantone/"}" rel="${"nofollow"}">Pantone\xAE, Color, and What I Wish I Had Known</a>.</li>
<li><strong>.gifs</strong> are still out there, but aside from animation, there\u2019s nothing a .gif can do that a .png can\u2019t do as well or better.</li>
<li>If you don\u2019t know this already, if there\u2019s an X in the CMYK column above, don\u2019t use that format for print (unless you\u2019re printing a screenshot for some reason).</li>
<li>You may have noticed that .jpg is the only format above not capable of supporting transparency.\xA0Don\u2019t waste your time trying to create a clear .jpg (or exporting an all-white Photoshop document as a .jpg without inserting a dark\xA0background first).</li>
<li>Not shown in the chart but important: <em>screens have a native resolution of 72 dpi, while print has a native resolution of 300 dpi.</em> Thus, an image that\u2019s 1800\xA0pixels wide in web resolution will likely be larger\xA0than your screen can display at full size, but will only be\xA0five\xA0inches wide at print resolution. Keep this in mind when working with raster files.</li>
<li>It\u2019s increasingly\xA0rare (thankfully) that a client would request a .wmf; I just included it on this chart in case it happens.</li></ul>
<p>If you have any questions or comments, please let me know!</p>`;
});
