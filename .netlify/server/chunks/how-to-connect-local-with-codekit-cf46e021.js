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
  default: () => How_to_connect_local_with_codekit,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "How to Connect Local with CodeKit",
  "date": "2020-02-21",
  "updated": "2020-07-15",
  "categories": ["css", "javascript", "web", "wordpress"],
  "coverImage": "Untitled.png",
  "coverWidth": 1280,
  "coverHeight": 567,
  "excerpt": "Enjoy all the convenience of easy local WordPress development with Local, plus build tools with CodeKit, without any of the tricky command line setup."
};
const How_to_connect_local_with_codekit = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><a href="${"https://localwp.com/"}" rel="${"nofollow"}">Local</a> (formerly known as Local by Flywheel) is the go-to tool for developing WordPress websites\u2014where else?\u2014locally. It\u2019s fast (especially the new \u201D<a href="${"https://localwp.com/community/t/local-5-2-3/16870"}" rel="${"nofollow"}">lightning</a>\u201D release), incredibly easy to use, cross-platform, and completely free.</p>
<p>Full disclosure: I currently work for <a href="${"https://getflywheel.com/"}" rel="${"nofollow"}">Flywheel</a>, the software company behind Local. But I\u2019m being 100% honest when I say there\u2019s no other tool I\u2019d consider using for building WordPress sites, period. Flywheel could fire me today and I\u2019d still use Local tomorrow.</p>
<p>As amazing as Local is on its own, though, some of the biggest benefits of developing locally (automatic browser refreshing, for example) aren\u2019t built in. That\u2019s where <a href="${"https://codekitapp.com/"}" rel="${"nofollow"}">CodeKit</a> shines!</p>
<p><img src="${"/images/post_images/codekit-window.png"}" alt="${"CodeKit (on a Vue project, and in dark mode)"}"></p>
<h2 id="${"what-is-codekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-codekit"}"><span class="${"icon icon-link"}"></span></a>What is CodeKit?</h2>
<p><strong>CodeKit</strong> is a Mac app that gives you an easy graphical interface to configure the kind of handy dev features that usually require a lot of technical setup. CodeKit makes it super easy to do all the nice things that you\u2019d normally need to use terminal commands, package managers and config files to get otherwise.</p>
<p>Unlike Local, CodeKit is a paid app, but it comes with a free trial if you\u2019d like to check it out. In my opinion and experience, it\u2019s <em>well</em> worth the $~35 price tag if you prefer a nice visual app interface to the command line.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If you\u2019re on Windows, you don\u2019t have access to CodeKit (since it\u2019s Mac only). But while I haven\u2019t tried it myself, Prepros appears to be a equivalent app.
`;
    }
  })}
<p><strong>Some examples of what CodeKit provides:</strong></p>
<ul><li><strong>Automatic browser refreshing</strong>; the window changes each time you save your files as you\u2019re working</li>
<li><strong>Automatic compilation, minification, source maps and cache busting.</strong> Save your sass files, and see your compiled CSS in the browser instantly. (Also works with JavaScript, and plus, CodeKit auto-generates source maps and does cache-busting)</li>
<li><strong>Test your code on other devices.</strong> CodeKit lets you load your local site on your phone, tablet, or wherever, and even make changes one place and see it reflected on every other screen</li>
<li><strong>Image optimization</strong></li>
<li><strong>Build tools</strong> like Autoprefixer, Babel, Libsass, ESlint, and a lot more all built in and easily configurable</li></ul>
<p>If you\u2019re not sure about all of those features or only need a few, that\u2019s ok too! CodeKit makes it easy to use what you need, and ignore what you don\u2019t.</p>
<h2 id="${"local--codekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#local--codekit"}"><span class="${"icon icon-link"}"></span></a>Local + CodeKit</h2>
<p>It\u2019s probably pretty easy to imagine the benefits of getting all that cool stuff within Local, available for your WordPress development needs. <strong>So let\u2019s get it set up!</strong></p>
<h3 id="${"1-create-or-pick-a-site-in-local"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#1-create-or-pick-a-site-in-local"}"><span class="${"icon icon-link"}"></span></a>1. Create (or Pick) a Site in Local</h3>
<p>First step: if you haven\u2019t already, start by creating a site in Local. (If you\u2019ve already got one you want to use, that\u2019s fine too; just skip ahead.) The specific configuration options in Local don\u2019t matter; any Local site will do!</p>
<p><img src="${"/images/post_images/local-new-site-setup.png"}" alt="${"Creating a new site in Local"}"></p>
<p>Create a new site in Local if you don\u2019t have one, or just use one you already have.</p>
<p>(By the way: you\u2019ve probably noticed from my screenshot that I like dark mode. That can be enabled in each app\u2019s Preferences menu.)</p>
<p>You <em>might</em> see a warning about a port conflict in Local. If you do, just go ahead and click the button to fix the issue. You won\u2019t be able to use a custom domain this way, but the CodeKit connection will still work. The site URL in the browser just won\u2019t look as nice.</p>
<p><img src="${"/images/post_images/port-conflict.png"}" alt="${"Port conflict warning"}"></p>
<p>If you see a port conflict, just click the button to proceed. No big deal.</p>
<h3 id="${"2-start-your-local-site-and-note-its-site-host-setting"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#2-start-your-local-site-and-note-its-site-host-setting"}"><span class="${"icon icon-link"}"></span></a>2. Start Your Local Site and Note its Site Host Setting</h3>
<p>Again, the specific setup of the site doesn\u2019t really matter. The only things to be sure of are:</p>
<ol><li>The site is running; and</li>
<li>You note the Site Host (in the case of my screenshot, <code>localhost:10008</code>, but yours might be a custom <code>.local</code> domain instead)</li></ol>
<p><img src="${"/images/post_images/Image-2020-02-20-at-8.47.39-PM-1024x691.png"}" alt="${"Look for 'Site host' in the Overview tab in Local"}"></p>
<h3 id="${"3-add-your-project-to-codekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#3-add-your-project-to-codekit"}"><span class="${"icon icon-link"}"></span></a>3. Add Your Project to CodeKit</h3>
<p>Head over to CodeKit now, and go to <strong>File &gt; Add Project</strong>. Navigate to your Local site\u2019s \u201Cpublic\u201D directory, and choose it.</p>
<p>By default, Local places your sites inside of a \u201CLocal Sites\u201D folder. So the path to your site\u2019s \u201Cpublic\u201D directory will most likely be something like this:</p>
<p><code>~/Local Sites/your-sites-name/app/public</code></p>
<p>The <code>public</code> folder is your Local WordPress site\u2019s root directory. You\u2019ll want to watch that directory so that any time something changes anywhere in the WordPress site, CodeKit will be aware of it and can react by compiling files, refreshing the browser, etc.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If you weren\u2019t actually interested in using CodeKit for its live previews and auto-refreshing, and all you wanted was the code features, you could just add whatever directory you\u2019re working in (the theme, for example) instead of adding the whole site.
`;
    }
  })}
<p>Once you\u2019ve added your project, you\u2019ll see CodeKit look something like this:</p>
<p><img src="${"/images/post_images/codekit-public-folder.png"}" alt="${"A Local CodeKit project"}"></p>
<h3 id="${"4-configure-the-codekit-projects-settings"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#4-configure-the-codekit-projects-settings"}"><span class="${"icon icon-link"}"></span></a>4. Configure the CodeKit Project\u2019s Settings</h3>
<p>Now that your project (site) has been added in CodeKit, head into Project Settings, either from <strong>View &gt; Project Settings</strong> or from the gear icon on the left sidebar.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `You can rename the project from here if you want\u2014which you might want to do to make things easier if you\u2019re working on multiple Local WordPress projects at once.
`;
    }
  })}
<p>In Project Settings, head to <strong>Browser-Refreshing</strong> and scroll down to the External Server Options section.</p>
<p><img src="${"/images/post_images/Image-2020-02-20-at-9.10.43-PM-1024x699.png"}" alt="${"CodeKit's Project Settings > Browser-Refreshing area"}"></p>
<p>Here, you\u2019ll take the two steps necessary to connect CodeKit with Local:</p>
<ol><li>Toggle on the <strong>Use An External Server</strong> button;</li>
<li>Copy your Local site\u2019s <strong>Site Host</strong> setting, and paste it into the <strong>External Server Address</strong> box in Codekit</li></ol>
<p><img src="${"/images/post_images/image-1024x557.png"}" alt="${"Toggle External Server on, and enter your Local site's Site Host URL as the address"}"></p>
<h3 id="${"5-click-the-codekit-preview-link"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#5-click-the-codekit-preview-link"}"><span class="${"icon icon-link"}"></span></a>5. Click the CodeKit Preview Link</h3>
<p><strong>That\u2019s it! You\u2019re connected!</strong> Now all you need to do is preview in CodeKit to see changes live in real time. You can either go to <strong>File &gt; Preview</strong> <strong>in Browser\u2026</strong>, or hit the preview button at the top of the CodeKit window:</p>
<p><img src="${"/images/post_images/image-1-1024x155.png"}" alt="${"The Browser Preview button"}"></p>
<p>(Note that the URL you see in your browser window may not match what you just entered from Local. That\u2019s ok, as long as the page works.)</p>
<p>Now as you make changes in your code\u2014for example, changing CSS files or editing the HTML on a page\u2014your browser will just automatically refresh like magic! \u2728</p>
<p><img src="${"/images/post_images/codekit-magic.gif"}" alt="${"Now as you save your code changes, the page will automatically update and refresh!"}"></p>
<p><strong>If you\u2019re having issues</strong>: be sure that the site is running in Local, and that the protocol matches between the two (http or https; it should be the same both places. You might need to check or un-check the TLS box under Security Options and/or restart the server):</p>
<p><img src="${"/images/post_images/codekit-preview-window.png"}" alt="${"Make sure the TLS setting in CodeKit matches your Local site's protocol"}"></p>
<p>The Preview Server URLs box (shown above) is also where you\u2019ll find the URLs you can use to view your Local site on other devices! Want to check out your site on your phone? It\u2019s as simple as heading to the Bonjour URL (iPhone) or Non-Bonjour URL (anything else) in your device\u2019s browser!</p>
<h2 id="${"bonus-setting-up-sass-in-codekit"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#bonus-setting-up-sass-in-codekit"}"><span class="${"icon icon-link"}"></span></a>Bonus: Setting Up Sass in CodeKit</h2>
<p>Just to provide an example of how easy CodeKit makes it to get set up with things like Sass, let\u2019s explore CodeKit a little now that we have everything set up.</p>
<p>If you have a Sass file that you\u2019d like to compile into CSS on the fly, find that file in Codekit and click to select it. You\u2019ll immediately see a suite of options in the right sidebar:</p>
<p><img src="${"/images/post_images/image-2-1024x865.png"}" alt="${"Select a file to see the compilation options"}"></p>
<p>Making CodeKit compile your Sass is as simple as choosing the options you want, and the path where you want CodeKit to output the compiled CSS file!</p>
<p>As a bonus, if you have any errors in your Sass syntax (like here, where I forgot a semicolon at the end of a line), CodeKit will highlight those and let you know right away as soon as you save the file:</p>
<p><img src="${"/images/post_images/image-3-1024x449.png"}" alt="${"Errors shown in CodeKit"}"></p>
<p>A similar set of options (minify, compile, generate source maps, etc.) is available with JavaScript files, plus many other file types.</p>
<h2 id="${"final-step-enjoy"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#final-step-enjoy"}"><span class="${"icon icon-link"}"></span></a>Final Step: Enjoy!</h2>
<p><strong>That\u2019s it!</strong> Enjoy all the convenience of easy local WordPress development with Local, plus build tools with CodeKit, without any of the tricky command line setup. \u{1F389}</p>`;
});
