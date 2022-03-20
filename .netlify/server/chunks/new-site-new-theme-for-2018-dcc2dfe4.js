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
  default: () => New_site_new_theme_for_2018,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "New Site, New Theme for 2018",
  "date": "2018-01-02",
  "updated": "2020-05-18",
  "categories": ["design", "web", "php", "wordpress"],
  "coverImage": "2018-logo.jpg",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Building a WordPress theme (and a new brand) from scratch."
};
const New_site_new_theme_for_2018 = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This site is no longer on WordPress, so the theme described here can&#39;t actually be seen anywhere, and the features described mostly aren&#39;t on this website any longer.
`;
    }
  })}
<p>It\u2019s been a goal of mine for a very long time to completely redesign my\xA0WordPress theme from scratch. Finally, that goal is a reality!</p>
<p>The first time I built my own site, back in (I\u2019d guess) 2013, I used <a href="${"http://www.adobe.com/products/muse.html"}" rel="${"nofollow"}">Adobe Muse</a>, which was a good fit for my lack of skill at the time, but a tool that lost relevance as I learned to code.</p>
<p>In 2014, I launched a portfolio site that I coded (mostly) from scratch. Looking back at it now makes me cringe a bit; knowing how to make something work and how to build it correctly are two very different things.</p>
<p>I built a\xA0WordPress site on the <a href="${"https://www.elegantthemes.com/gallery/divi/"}" rel="${"nofollow"}">Divi</a>\xA0theme roughly three years ago. At first, it was built entirely on Divi\u2019s visual page builder, and that was handy for creating new layouts quickly. But the more I learned about\xA0WordPress (and child themes in particular), the less necessary it was to have the parent theme around. It was extra bloat for mostly features I didn\u2019t use at all. So for a very long time, starting over with my own theme, built from scratch and completely personalized just for this site, has been a goal\u2014and now I finally get to check it off.</p>
<h2 id="${"about-the-theme"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#about-the-theme"}"><span class="${"icon icon-link"}"></span></a>About the theme</h2>
<p>Rather than beginning with a parent theme or a starter theme like <a href="${"http://underscores.me"}" rel="${"nofollow"}">Underscores</a>, I wanted this theme to be built completely from scratch. No borrowed or pre-written code at all; 100% original.</p>
<p>For building, I began with <a href="${"https://local.getflywheel.com"}" rel="${"nofollow"}">Local by Flywheel</a>. Yes, I work for <a href="${"https://getflywheel.com"}" rel="${"nofollow"}">Flywheel</a>, but I honestly don\u2019t believe there\u2019s a better tool for running\xA0WordPress sites locally\u2014particularly given that my live site is hosted on Flywheel already, which means that pulling a copy of my live site to my local machine for development (and then pushing it back live when ready) was all as easy as a click of a button, thanks to the Push to Flywheel feature.</p>
<p>I also implemented <a href="${"https://codekitapp.com/"}" rel="${"nofollow"}">CodeKit</a>, for minification, auto browser refreshing, and <a href="${"http://sass-lang.com/"}" rel="${"nofollow"}">Sass</a> compilation. Bonus: CodeKit works with Local seamlessly.</p>
<p>Speaking of Sass: it\u2019s invaluable. During theme development, I set up variables for breakpoint widths, colors, some font families, and created a mixin for flexbox settings.</p>
<p><a href="${"/images/post_images/sass-variables.png"}"><img src="${"/images/post_images/sass-variables.png"}" alt="${"A list of Sass variables used for colors, breakpoints, fonts and Flexbox settings"}"></a></p>
<p>(That\u2019s the <a href="${"https://packagecontrol.io/packages/ColorHelper"}" rel="${"nofollow"}">ColorHelper</a> Sublime extension creating the color boxes, by the way.)</p>
<p>I also got to take the opportunity to finally learn and implement <a href="${"https://wordpress.org/plugins/timber-library/"}" rel="${"nofollow"}">Timber</a>. I\u2019d been hearing too many good things for too long to ignore it any more.</p>
<p>I love the way Timber makes template files so much cleaner, abstracting output code to bare minimums and eliminating the need to deal with the loop directly. Like any framework, though, there\u2019s a little bit of a learning curve, particularly for some of WordPress\u2019s more complex functionality, like comments and pagination. It\u2019s very well documented, though. I would recommend it, and look forward to using it again. I\u2019ll have to add it to my <a href="${"https://api.rickyjanuari.com/essential-tools-wordpress-development/"}" rel="${"nofollow"}">essential tools</a>\xA0for\xA0WordPress development.</p>
<p>The theme runs mostly off a single index.php file which dynamically pulls in the appropriate Timber .twig files based on context. In fact, aside from the index file, the theme\u2019s only PHP template files are the footer and header, the functions file, and a sidebar file.</p>
<h2 id="${"advanced-custom-fields--css-grid"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#advanced-custom-fields--css-grid"}"><span class="${"icon icon-link"}"></span></a>Advanced Custom Fields + CSS Grid</h2>
<p>I also took this opportunity to use CSS grid on a project for the first time\u2014specifically, on the <a href="${"https://api.rickyjanuari.com/design/"}" rel="${"nofollow"}">design</a> page. It turns out, CSS grid mixes really well with <a href="${"https://www.advancedcustomfields.com/"}" rel="${"nofollow"}">Advanced Custom Fields</a>, particularly the Pro Repeater field. I set up fields for images, height and width, to control the size of images in the grid:</p>

<p><a href="${"/images/post_images/acf-fields-1.png"}"><img src="${"/images/post_images/acf-fields-1-1024x797.png"}" alt="${"Custom fields that allow for a width and height property to use in the image grid"}"></a></p>
<p>The width and height have max values, and a Sass loop (and a media query) sets CSS for those values with classes:</p>
<p><img src="${"/images/post_images/sass-grid.png"}" alt="${"A Sass @for loop to set classes for each possible width and height, and add CSS accordingly."}"></p>
<p>I\u2019ve been using the same logo for myself since I was in school. On a whim, I decided to create a new one that more closely matches where I am now; more focused on development and applying design principles to the web.</p>
<p><img src="${"/images/post_images/Full-Logo-2018.svg"}" alt="${"2018 logo"}"></p>
<p>As in the header, the logo\u2019s \u201Cicon\u201D form simply removes the lettering, leaving only two sets of brackets, implying code (particularly delving into objects or arrays), with the middle two characters highlighted and in the vague shape of a \u201CJ\u201D and a \u201CC\u201D (my initials, of course). I like to think it also hints at my own duality of designer/developer.</p>
<h2 id="${"the-fonts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-fonts"}"><span class="${"icon icon-link"}"></span></a>The fonts</h2>
<p>I\u2019ve owned <a href="${"https://www.myfonts.com/fonts/stawix/amsi-pro/"}" rel="${"nofollow"}">AmsiPro</a>\xA0for years, and I\u2019ve been waiting to use it on a project since I first saw it. I finally decided its personality was right for this project. It\u2019s bold and friendly (particularly the ultra weight used for this site\u2019s headers), but completely utilitarian and readable at lighter weights, as body copy.</p>
<p>I wanted to keep the font load fairly light, so only occasional splashes of <a href="${"https://www.myfonts.com/fonts/rene-bieder/sagona/"}" rel="${"nofollow"}">Sagona</a>\xA0Book Italic are used in places to highlight text. I\u2019ve liked Sagona for a long time. I appreciate the hints of happiness in this Clarendon-esque serif, and I feel that makes it pair well with Amsi Pro.</p>
<p><strong>Thanks for reading!</strong> It\u2019s a personal goal to blog more this year and share some of the things I\u2019ve learned over the past few, so this should just be the first of many new posts in the new year. Happy 2018!</p>`;
});
