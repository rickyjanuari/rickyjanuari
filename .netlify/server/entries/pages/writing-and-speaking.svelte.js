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
  default: () => Writing_and_speaking
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("../../chunks/index-2749e1b7.js");
var import_PostList_093c74fc = require("../../chunks/PostList-093c74fc.js");
var import_Main_5d179e14 = require("../../chunks/Main-5d179e14.js");
var import_TagList_0e1f394c = require("../../chunks/TagList-0e1f394c.js");
var import_ExternalLink_29dd7148 = require("../../chunks/ExternalLink-29dd7148.js");
const EXTERNAL_POSTS = [
  {
    title: `Create better CSS forms with these design principles`,
    subtitle: `LogRocket Blog`,
    slug: `https://blog.logrocket.com/create-better-css-forms-design-principles/`,
    coverImage: `build-better-css-forms-design-principles.png`,
    coverWidth: 730,
    coverHeight: 487,
    date: `2022-02-23`,
    excerpt: `Many developers, even among the most seasoned senior engineers, balk at the idea of laying out and styling pages on their own. I don\u2019t believe developers need to be designers. But I believe developers can learn to build functional, quality layouts with knowledge of design principles. And, just as a little primer, when I say \u201Cdesign,\u201D I mean both visual and structural.`
  },
  {
    title: `A Complete Beginner's guide to NPM`,
    subtitle: `CSS Tricks`,
    slug: `https://css-tricks.com/a-complete-beginners-guide-to-npm/`,
    coverImage: `npm.webp`,
    coverWidth: 2,
    coverHeight: 1,
    date: `2022-01-20`,
    excerpt: `Whatever npm was\u2014whatever those commands did and wherever you were supposed to type them\u2014nobody had ever taken the time to explain it to me. And the more I read guides written by people who took that knowledge for granted, the more I felt isolated.`
  },
  {
    title: `Building a PWA with Vue.js`,
    subtitle: `LogRocket Blog`,
    slug: `https://blog.logrocket.com/building-pwa-vue/`,
    coverImage: `building-pwa-vue-js.webp`,
    coverWidth: 730,
    coverHeight: 487,
    date: `2021-12-30`,
    excerpt: `When it comes to PWAs, there\u2019s nothing special about Vue specifically, or even frameworks in general. To put it simply: if it loads in a browser, it can be a progressive web app. That groundwork laid, let\u2019s talk specifically about how to build a PWA with Vue, one of my personal favorite tools for web development.`
  },
  {
    title: `Using SVG and Vue.js: A complete guide`,
    subtitle: `LogRocket Blog`,
    slug: `https://blog.logrocket.com/using-svg-and-vue-js-a-complete-guide/`,
    coverImage: `ultimate-guide-SVGs-vue-js.webp`,
    coverWidth: 730,
    coverHeight: 487,
    date: `2021-09-07`,
    excerpt: `From the simple question of how best to load SVG files into your templates, to handling animations and accessibility, there are plenty of pitfalls to avoid. I\u2019ve been working with Vue and SVG for the last few years, and I\u2019ve developed (pun intended) a few tricks and recommendations I\u2019d like to share.`
  },
  {
    title: `What I Learned Building a Word Game App With Nuxt on Google Play`,
    subtitle: `CSS Tricks`,
    slug: `https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/`,
    coverImage: `quina-post-hero.jpg`,
    coverWidth: 120,
    coverHeight: 63,
    date: `2021-05-21`,
    excerpt: `I fell in love with coding the moment I created my first CSS :hover effect. Years later, that initial bite into interactivity on the web led me to a new goal: making a game.`
  },
  {
    title: `Leveling up Flywheel's retreat website: A developer's tale`,
    subtitle: `The Layout`,
    slug: `https://getflywheel.com/layout/leveling-up-flywheels-retreat-website/`,
    coverImage: `FlyFest_site_Flywheel-1800x620.jpeg`,
    coverWidth: 90,
    coverHeight: 31,
    date: `2019-11-13`,
    excerpt: `A post about Flywheel's internal retreat website; how and why it was created, the tech behind it, and all the fun we had making it. (Note: misattributed to Morgan Smith.)`
  },
  {
    title: `Understanding WordPress Shortcodes`,
    subtitle: `The Layout`,
    slug: `https://getflywheel.com/layout/understanding-wordpress-shortcodes/`,
    coverImage: `Dark_Grey_Shortcode-icon.jpeg`,
    coverWidth: 84,
    coverHeight: 51,
    date: `2019-11-13`,
    excerpt: `The first of a planned series on WordPress shortcodes that never quite got finished (and probably isn't very useful in a post-Gutenberg world anyway), but offers a nice intro to the concept, at least. (Note: misattributed to Morgan Smith.)`
  }
];
const talks = [
  {
    title: "Be Classless \u2013 Optimizing Your CSS for WordPress",
    link: "https://wordpress.tv/2015/11/17/rickyjanuari-be-classless-optimizing-your-css/",
    event: "WordCamp Omaha 2015",
    year: 2015
  },
  {
    title: "Easy WordPress Security for Everyone",
    link: "https://wordpress.tv/2017/03/05/rickyjanuari-easy-wordpress-security-for-everyone/",
    event: "WordCamp Omaha 2016",
    year: 2016
  },
  {
    title: "A RESTed Development: Understanding the WP REST API Once and For All",
    link: "",
    event: "WordCamp Omaha 2017",
    year: 2017
  },
  {
    title: "CSS Variables (lightning talk)",
    link: "https://techomaha.com/2018/11/rickyjanuari-css-variables/",
    event: "BarCamp Omaha 2018",
    year: 2018
  },
  {
    title: "Getting the Most Out of Local by Flywheel",
    link: "",
    event: "WordCamp Omaha 2018",
    year: 2018
  },
  {
    title: "How Not to Make a Crappy-Looking Site: a Crash Course on (Web) Design",
    link: "",
    event: "WordCamp Omaha 2019",
    year: 2019
  },
  {
    title: "What is Managed WordPress Hosting?",
    link: "https://www.youtube.com/watch?v=eBS6UBcDI9k",
    event: "Video voiceover",
    year: 2019
  },
  {
    title: "Intro to Accessibility",
    link: "",
    event: "aware3 internal training",
    year: 2021
  },
  {
    title: "Views on Svelte With Ricky Januari",
    link: "https://viewsonvue.com/views-on-svelte-with-rickyjanuari-vue-177",
    event: "Views on Vue podcast",
    year: 2022
  }
];
talks.sort((a, b) => b.year - a.year);
var writingAndSpeaking_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--lightBlueHS:199, 33%;--yellowHS:49, 100%;--redHS:349, 100%;--yellowHSL:49, 100%, 50%;--lightGrayHSL:220, 2%, 66%;--lightBlueHSL:199, 33%, 61%;--darkBlueHSL:201, 42%, 35%;--orangeHSL:22, 100%, 54%;--redHSL:349, 100%, 45%;--midGrayHSL:204, 2%, 54%;--darkGrayHSL:210, 4%, 27%;--darkerGrayHSL:349, 25%, 16%;--whiteHSL:0, 0%, 99%;--trueWhiteHSL:0, 0%, 100%;--blackHSL:210, 33%, 9%;--trueBlackHSL:0, 0%, 0%;--white:hsl(var(--whiteHSL));--trueWhite:hsl(var(--trueWhiteHSL));--black:hsl(var(--blackHSL));--trueBlack:hsl(var(--trueBlackHSL));--headingFont:"Averta-Std", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,\n  "Helvetica Neue", Arial, sans-serif;--bodyFont:"Alkes", Georgia, serif;--codeFont:"MonoLisa", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;--bodyFontWeight:normal;--bodyLineHeight:1.6;--bodyFontSize:1.125rem;--yellow:hsl(var(--yellowHSL));--orange:hsl(var(--orangeHSL));--red:hsl(var(--redHSL));--lightGray:hsl(var(--lightGrayHSL));--midGray:hsl(var(--midGrayHSL));--darkGray:hsl(var(--darkGrayHSL));--darkerGray:hsl(var(--darkerGrayHSL));--lightBlue:hsl(var(--lightBlueHSL));--lighterBlue:hsl(var(--lightBlueHS), 90%);--lightestBlue:hsl(var(--lightBlueHS), 95%);--darkBlue:hsl(var(--darkBlueHSL));--darkerBlue:hsl(var(--darkBlueHSL), 20%);--blueToYellow:#7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100;--ink:var(--darkGray);--paper:var(--white);--paperHSL:var(--whiteHSL);--headingColor:var(--darkerGray);--accentColor:var(--darkBlue);--linkColor:var(--darkBlue);--highlightColor:var(--darkGray);--maxWidth:34rem;--sidebarWidth:15rem;--margin:var(--quarterNote);--eighthNote:calc(var(--quarterNote) / 2);--quarterNote:1.25rem;--halfNote:calc(var(--quarterNote) * 2);--dottedHalfNote:calc(var(--quarterNote) * 3);--wholeNote:calc(var(--quarterNote) * 4);--dottedWholeNote:calc(var(--quarterNote) * 6);--buttonSize:2.2rem;--buttonBackground:var(--paper);font-size:var(--bodyFontSize)}@media(min-width: 768px){:root{--bodyFontSize:1.1875rem}}@media(min-width: 1440px){:root{--bodyFontSize:1.25rem}}@media(min-width: 768px){:root{--margin:var(--halfNote)}}@media(min-width: 1024px){:root{--margin:var(--dottedHalfNote)}}@media(min-width: 1960px){:root{--margin:var(--wholeNote)}}@media(min-width: 2200px){:root{--margin:var(--dottedWholeNote)}}:root.dark{--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}@media(prefers-color-scheme: dark){:root:not(.light){--paper:var(--black);--paperHSL:var(--blackHSL);--ink:var(--white);--headingColor:var(--white);--accentColor:var(--lightBlue);--linkColor:var(--lightBlue);--highlightColor:var(--darkerGray)}}.writing.svelte-178pgh1 h2.svelte-178pgh1{margin-bottom:var(--quarterNote)}.writing.svelte-178pgh1 hr.svelte-178pgh1{margin:var(--quarterNote) 0 var(--dottedHalfNote)}.writing.svelte-178pgh1 .subhead.svelte-178pgh1{font-size:1.1rem;font-style:italic;margin:0}',
  map: null
};
const Writing_and_speaking = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_2749e1b7.v)(import_Main_5d179e14.M, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"compressed-content wider writing svelte-178pgh1"}"><h2 class="${"svelte-178pgh1"}">Writing</h2>
    <p class="${"subhead svelte-178pgh1"}">Articles written for other publications.</p>
    <hr class="${"svelte-178pgh1"}">
    ${(0, import_index_2749e1b7.v)(import_PostList_093c74fc.P, "PostList").$$render($$result, { posts: EXTERNAL_POSTS, external: true }, {}, {})}
    
    <h2 class="${"svelte-178pgh1"}">Speaking, etc.</h2>
    <p class="${"subhead svelte-178pgh1"}">To do: add slide decks where possible.</p>
    <hr class="${"svelte-178pgh1"}">
    <ul>${(0, import_index_2749e1b7.b)(talks, (talk) => {
        return `<li><b>${talk.link ? `<a${(0, import_index_2749e1b7.d)("href", talk.link, 0)} rel="${"external"}">${(0, import_index_2749e1b7.e)(talk.title)}
          </a>` : `${(0, import_index_2749e1b7.e)(talk.title)}`}</b>
        <br>
        <i>${(0, import_index_2749e1b7.e)(talk.event)}</i>
      </li>`;
      })}</ul></div>`;
    }
  })}`;
});
