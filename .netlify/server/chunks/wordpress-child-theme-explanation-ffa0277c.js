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
  default: () => Wordpress_child_theme_explanation,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "WordPress Child Theme Explanation and Walkthrough",
  "date": "2015-12-31",
  "updated": "2020-06-16",
  "categories": ["web", "wordpress"],
  "coverImage": "wordpress-bg-medblue.png",
  "coverWidth": 40,
  "coverHeight": 21,
  "excerpt": "When you\u2019re just starting out with WordPress, it\u2019s easy to think that you can just open up the style.css file included with your theme and begin making alterations. And that will work\u2014at least for a while\u2014but it won\u2019t be a good idea\u2026"
};
const Wordpress_child_theme_explanation = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>One lesson a lot of WordPress novices learn the hard way, just like I did, is that if you want to customize anything about your theme itself\u2014whether that\u2019s editing the CSS styles, adding functionality like a custom post type, changing the header code or creating a custom page template\u2014you <em>need</em> to be using a WordPress child theme.</p>
<p>(There are of course plugins to handle all of the above tasks, and if you want to go that route instead, that\u2019s fine. I personally prefer minimizing plugins since each one active is a slight drain on page load speed and one more thing to worry abut updating, but it\u2019s a matter of personal preference.)</p>
<p>When you\u2019re just starting out with WordPress, it\u2019s easy to think that you can just make edits by opening up the main theme\u2019s included files (like style.css or header.php) and making whatever alterations you see fit. And that will work\u2014at least for a while\u2014but it won\u2019t be a good idea.</p>
<p><strong>Why? Because themes update.</strong> As improvements are made, bugs are fixed and issues are patched, your theme will most likely be altered by its author, who will push an update. At that point, you\u2019ll log in to WordPress and receive a notification that your theme has an update available, and should you click it, any custom changes you may have made to your theme\u2019s code will be overwritten, replaced with the fresh new version.</p>
<p>This leaves you in the unfortunate predicament of choosing between redoing all of your file changes every time an update is issued (which, depending on the theme, could be many times a year) or making sure you (and your clients) never update the theme at all.</p>
<p><strong>Neither of those are good choices, obviously.</strong> You need efficiency, and you need to be updating your theme(s) for optimal security and performance. But fortunately, you have a third option: create a WordPress child theme. Then all your problems are solved and the above issues can be safely and easily sidestepped!</p>
<h3 id="${"so-what-is-a-wordpress-child-theme"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#so-what-is-a-wordpress-child-theme"}"><span class="${"icon icon-link"}"></span></a><strong>So what is a WordPress child theme?</strong></h3>
<p>A WordPress child theme is kind of like an add-on extension of the main theme. A child theme borrows everything it can from its parent theme, but exists independently apart from any files you want it to share. A WordPress child theme allows you to add files to supplement those of the parent theme, taking precedent over the parent\u2019s files without the risk of being overwritten.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `A WordPress child theme is kind of like an add-on extension of the main theme. A child theme borrows everything it can from its parent theme, but exists independently apart from any files you want it to\xA0share.
`;
    }
  })}
<p>To put it in simpler terms: any time WordPress needs a theme file (say, for example, header.php), it will look inside the child theme folder for the named file. If there <em>is</em> a file by that name in the child theme\u2019s folder, it will use that file. But if not, it will look for a file by that name in the <em>parent theme\u2019s</em> folder instead, and will borrow that file from its parent theme.</p>
<p>This works perfectly for any file in the <a href="${"https://developer.wordpress.org/themes/basics/template-hierarchy/"}" rel="${"nofollow"}">WordPress template hierarchy</a>, but you might be wondering: what about my CSS?</p>
<p>In the case of our stylesheets, we can set up a child theme to use all of the parent theme\u2019s styles (because we likely chose our main parent theme in part due to its appearance and don\u2019t want to be forced to start from scratch), but <em>then</em> to load a custom child theme stylesheet <em>afterward</em>, which we can use to override and replace certain existing styles as we choose.</p>
<p>The process of setting up a child theme can seem a little intimidating, particularly if you don\u2019t spend much time in FTP or WordPress\u2019s file structure, but it\u2019s actually pretty simple. Let\u2019s walk through the steps.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `There are plugins to create child themes for you, and that\u2019s generally simpler and easier than this process. But if you\u2019d like to do it manually for full control, or if you\u2019d just like to understand what goes into a child theme better, read on.
`;
    }
  })}
<h3 id="${"step-1-create-a-new-theme-folder"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-1-create-a-new-theme-folder"}"><span class="${"icon icon-link"}"></span></a>Step 1: Create a New Theme Folder</h3>
<p>If your site is already up on a live server, you\u2019ll need to connect to your site via FTP in order to do this. (If you\u2019re not sure how to do that, check with your host, and if you need an FTP client, I consider <a href="${"https://panic.com/transmit/"}" rel="${"nofollow"}">Transmit</a> to be well-worth the price, though there are free options available.) In any case, you\u2019ll head to the wp-content/themes/ folder.</p>
<p>Inside that folder, you\u2019ll see a list of themes on your site, probably similar to this:</p>
<p><a href="${"/images/post_images/Screenshot-2015-12-31-11.26.45.png"}"><img src="${"/images/post_images/Screenshot-2015-12-31-11.26.45.png"}" alt="${"A WordPress child theme will most likely look like the last folder in this screenshot."}"></a></p>
<p>Here, you\u2019ll simply create a new folder and name it whatever you want your child theme to be named. Usually, this is a hyphenated version of the parent theme name, such as with \u201Cenfold\u201D and \u201Cenfold-child\u201D in the screenshot above. This naming convention exists so that anybody looking at the list of themes can immediately tell which themes rely on others, but if you\u2019d rather, the name can be whatever you want.</p>
<h3 id="${"step-2-create-a-stylecss-file"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-2-create-a-stylecss-file"}"><span class="${"icon icon-link"}"></span></a>Step 2: Create a style.css File</h3>
<p>Open the child theme folder you just created. Inside it, make a new file and name it \u201Cstyle.css\u201D.</p>
<p><strong>It\u2019s important that you give the file this exact name.</strong> If you\u2019re not familiar with the inner workings of WordPress: it looks for files based on their name. WordPress expects to find a style.css file in the active theme\u2019s root folder; it\u2019s programmed to know that\u2019s where to find info about a theme. So it won\u2019t automatically find and load it if it\u2019s not specifically named \u201Cstyle.css\u201D and placed inside the theme folder. (You could load it other ways, but that\u2019s just making extra work for yourself.)</p>
<p>As far as the file itself, you can either create it in your FTP client and then open it in a text editor to make changes; or you can use a text editor to create and save a style.css file locally, and then upload it afterward. It\u2019s up to you; just as long as the style.css file gets in the child theme folder, you\u2019re good.</p>
<h3 id="${"step-3-add-the-following-to-stylecss"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-3-add-the-following-to-stylecss"}"><span class="${"icon icon-link"}"></span></a>Step 3: Add the Following to style.css</h3>
<p>If you look at the <a href="${"https://codex.wordpress.org/Child_Themes"}" rel="${"nofollow"}">Codex entry for child themes</a>, you\u2019ll find the following snippet of code to copy and paste into your child theme\u2019s style.css file. Don\u2019t copy and paste this just yet, though; I\u2019m only giving you the full list of things you might see at the top of a theme\u2019s style.css file:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/*
 Theme Name: Twenty Fifteen Child
 Theme URI: http://example.com/twenty-fifteen-child/
 Description: Twenty Fifteen Child Theme
 Author: John Doe
 Author URI: http://example.com
 Template: twentyfifteen
 Version: 1.0.0
 License: GNU General Public License v2 or later
 License URI: http://www.gnu.org/licenses/gpl-2.0.html
 Tags: light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
 Text Domain: twenty-fifteen-child
*/</span></code>`}<!-- HTML_TAG_END --></pre>
<p>It looks scary, but I\u2019ll let you in on a little secret: almost none of the above is actually required for your child theme to work properly. In fact, most of it is there for people who intend build a new theme and distribute it.</p>
<p><strong>If you\u2019re creating a theme to distribute publicly, you\u2019ll want to fill out every line of the above snippet as accurately as possible.</strong> But if not\u2014if this is a child theme that\u2019s only going to be used by you or your client on your site alone\u2014you can safely skip most of the above (though you should still include some of it).</p>
<p>At this point you might be wondering: isn\u2019t this just a comment? Why do I need to include it? Aren\u2019t comments supposed to be read by humans and ignored by computers?</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `WordPress finds, reads, and understands what to do with a file based on its specific name and the comments at the top of the\xA0file.
`;
    }
  })}
<p>You\u2019d be mostly right, but actually, browsers and servers <em>do</em> read comments. (Otherwise, how would they know when the comment was over?)</p>
<p><strong>In the case of WordPress files, comments are frequently used to pass WordPress information about themes and plugins.</strong> Just like the file\u2019s name is important, having the above comment snippet at the top of your style.css file is also important; it\u2019s how we can pass certain important pieces of information on to WordPress about our theme! But from a purely functional standpoint, most of that info up there is actually not crucial at all for a WordPress child theme to function.</p>
<p>In fact, if you want to save yourself the hassle, here\u2019s all you\u2019ll really need to worry about:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/*
 Theme Name: Your Theme Name
 Template: parent-theme-name
 Text Domain: your-theme-name
*/</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Even of the above three lines, the Template line is the only one that\u2019s strictly necessary for the child theme to function, but you\u2019ll want to fill out the others too. Here\u2019s what each one does:</p>
<ul><li><strong>Theme Name:</strong> <em>The human-readable version of your child theme\u2019s name. This is what will appear in your themes list within WordPress itself. Can be anything you want, and can include capital letters and spaces. Doesn\u2019t have to be named something relative to the parent theme, but probably should be just for clarity.</em></li>
<li><strong>Template:</strong> <em>As mentioned, the only mandatory line. This should be the name of the parent theme, written exactly as its folder name is written within the themes directory. This tells WordPress where to find the parent theme files when it needs to.</em></li>
<li><strong>Text Domain:</strong> <em>The \u201Csluggified\u201D version of your theme name (in other words, your theme name without capital letters or spaces). This is how WordPress refers to your theme in code. It has to do with localization.</em></li></ul>
<p>Though the above three are the main functional pieces of the puzzle, it\u2019s still good practice to include at least the <strong>Author</strong> and <strong>Author URI</strong> lines as well, so that anybody who might be working on the site after you\u2019ve done your work can figure out where this child theme came from and whom to contact if they have any questions. <strong>Description</strong> is always nice too\u2014it\u2019s the paragraph that shows up on the Theme Details page in WordPress, so it allows you to share some added info with any admin who might be using the site. But those are optional and not related to the actual functionality of the WordPress child theme. The rest of the lines we haven\u2019t talked about hold info that\u2019s shared by theme developers when they release their themes publicly.</p>
<p>All of that is a long way to say: it\u2019s just a simple process of copying and pasting the above snippet of code to the top of your WordPress child theme\u2019s style.css file, and replacing the pertinent details with your own (and optionally deleting anything you don\u2019t need). It looks a bit complex, particularly if you aren\u2019t familiar with WordPress file comments, but it\u2019s actually very simple: just replace the part after the colon on each line with your own info!</p>
<p><strong>Now that you have a properly commented style.css file in your WordPress child theme, you can add all your CSS to it, below the opening comment!</strong></p>
<p>You should know that the CSS won\u2019t actually take effect yet, however. Later, in step 3, we\u2019re going to tell WordPress to load the parent theme\u2019s stylesheet first and our child theme\u2019s stylesheet second. This way, because of the way that CSS works, any styles that you add to your child theme\u2019s style.css file will load last, and will therefore override the parent theme\u2019s CSS so that you won\u2019t need to delete or alter anything in the parent theme\u2019s stylesheet. Huzzah! (This is assuming, of course, that the child theme\u2019s styles are of equal or greater specificity. If you\u2019re not sure what that means or if you could use a refresher on CSS specificity, <a href="${"https://css-tricks.com/specifics-on-css-specificity/"}" rel="${"nofollow"}">check this article out</a>.)</p>
<p><strong>But until we do that, our CSS in this file won\u2019t actually work.</strong> WordPress assumes we\u2019ve put our theme info at the top of our style.css file, but it <em>won\u2019t</em> assume we want to actually use it as a file for our actual CSS styling. That will come shortly, when we use functions.php to enqueue our parent theme\u2019s stylesheet, and then our child theme\u2019s.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `\u2026any styles that you add to your child theme\u2019s style.css file will load last, and will therefore override the parent theme\u2019s CSS so that you won\u2019t need to delete or alter anything in the parent theme\u2019s\xA0stylesheet.
`;
    }
  })}
<p>This way, the parent theme is free to update all it wants, but your styles remain intact and unaffected. Your site stays up-to-date and secure, while your styles stay safe from unintended alterations.</p>
<p>(Side note: if you want to create and use other stylesheets, too, you can do that; you don\u2019t necessarily need to put <em>all</em> your styles in this style.css file. But since every stylesheet has to load separately, it\u2019s generally best to use just the one CSS file unless you have a good reason not to.)</p>
<h3 id="${"optional-step-add-a-screenshot"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#optional-step-add-a-screenshot"}"><span class="${"icon icon-link"}"></span></a>Optional Step: Add a Screenshot</h3>
<p>While this step is completely optional, it\u2019s fun, and it helps your child theme feel a little more professional.</p>
<p>To give your theme an image that will appear on the theme selection screen, just save a .png inside your child theme\u2019s folder (the same place you saved the style.css file above) and name it \u201Cscreenshot.png\u201D. WordPress will try to work with pretty much any size, but an image with a 4:3 ratio works best, with the recommended resolution being 880px by 660px.</p>
<p>While this feature exists so that you can show potential theme users what their site will look like if they activate this theme, if you\u2019re working on a child theme, you can add that extra little something special by making screenshot.png your logo or your client\u2019s logo.</p>
<p><img src="${"/images/post_images/Screenshot-2016-01-17-20.11.39.png"}" alt="${"Demonstration of how a screenshot.png will look in the theme selection screen"}"></p>
<h3 id="${"step-3-create-a-functionsphp-file"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-3-create-a-functionsphp-file"}"><span class="${"icon icon-link"}"></span></a>Step 3: Create a functions.php File</h3>
<p>In the last couple of steps we created the style.css file for our child theme, but we still need to tell WordPress to include (or \u201Cenqueue\u201D) the parent theme\u2019s stylesheet as well as our new child theme\u2019s stylesheet, in that order.</p>
<p>In just the same way that you created a new style.css file inside your child theme\u2019s folder, you\u2019ll now create a new file named \u201Cfunctions.php\u201D in the same place, i.e., your child theme\u2019s folder. (You can create it with your FTP client and then edit it, or make it on your local machine and then upload it. Up to you.)</p>
<p>Again, however, it\u2019s critical that this file is named \u201Cfunctions.php\u201D <em>exactly</em> (mind the plural); otherwise, WordPress won\u2019t know that it\u2019s the file containing our child theme\u2019s unique functionality and won\u2019t find and run it automatically.</p>
<h4 id="${"what-is-functionsphp"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-functionsphp"}"><span class="${"icon icon-link"}"></span></a><strong>What is functions.php?</strong></h4>
<p>When any given WordPress theme is active, any code in that theme\u2019s functions.php file will run every time a page on that site is loaded (as will its parent theme\u2019s). So our child theme\u2019s functions.php file (<em>and</em> its parent theme\u2019s functions.php file) will load and run every time a new page loads, as long as our child theme is the active theme.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `You can think of functions.php a little like a custom plugin specially made for your\xA0theme.
`;
    }
  })}
<p><strong>This is true in both the WordPress admin area and the front-facing portion of the site.</strong> That\u2019s why things like styles, custom post types, navigation menus, theme features, and other \u201Calways-on\u201D bits of functionality are generally added to functions.php. You can think of functions.php a little like a custom plugin specially made for your theme.</p>
<h3 id="${"step-4-copy-the-enqueuing-function-to-functionsphp"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-4-copy-the-enqueuing-function-to-functionsphp"}"><span class="${"icon icon-link"}"></span></a>Step 4: Copy the Enqueuing Function to functions.php</h3>
<pre class="${"language-php"}"><!-- HTML_TAG_START -->${`<code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">function</span> <span class="token function-definition function">theme_enqueue_styles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
 
    <span class="token variable">$parent_style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'parent-style'</span><span class="token punctuation">;</span>
 
    <span class="token function">wp_enqueue_style</span><span class="token punctuation">(</span> <span class="token variable">$parent_style</span><span class="token punctuation">,</span> <span class="token function">get_template_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'/style.css'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">wp_enqueue_style</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'child-style'</span><span class="token punctuation">,</span>
      <span class="token function">get_stylesheet_directory_uri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'/style.css'</span><span class="token punctuation">,</span>
      <span class="token keyword">array</span><span class="token punctuation">(</span> <span class="token variable">$parent_style</span> <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
 
  <span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'wp_enqueue_scripts'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'theme_enqueue_styles'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>If you\u2019re not familiar with (or intimidated by) PHP, don\u2019t worry\u2014you don\u2019t have to make any changes to the above code, or even understand it, really.</strong> You just need to copy and paste it into your WordPress child theme\u2019s new, blank functions.php file. (Technically, it would be best practice to change the two instances of \u201Ctheme_enqueue_styles\u201D to reflect your custom theme name in order to avoid any potential conflicts, but it\u2019s not strictly mandatory.)</p>
<p>There are other ways to code the enqueueing of parent and child stylesheets, but this way is straight from the <a href="${"https://codex.wordpress.org"}" rel="${"nofollow"}">Codex</a>, and ensures that the child theme\u2019s stylesheet loads <em>after</em> the parent theme\u2019s (which is what we want).</p>
<p>By the way: you\u2019ll want to be sure you have the opening php tag (the first line in the snippet above) at the beginning of your functions.php file, but the closing tag at the end isn\u2019t strictly necessary, especially if you plan on adding more code later on.</p>
<p>Just make sure your style.css and functions.php files are both saved inside your child theme\u2019s main folder, then there\u2019s only one more simple step!</p>
<h3 id="${"step-5-activate-the-child-theme"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#step-5-activate-the-child-theme"}"><span class="${"icon icon-link"}"></span></a>Step 5: Activate the Child Theme</h3>
<p>You\u2019re done with file editing now. All you need to do is sign into WordPress on your site and head to Appearance &gt; Themes from the admin sidebar. You should now see the child theme you created in the list of available themes for your WordPress site (with the screenshot image showing if you took on the optional step above). Just click the \u201CActivate\u201D button and you\u2019re good to go!</p>
<p>If you previously had the parent theme active, you probably won\u2019t see any visible changes on your site. You\u2019ll notice a difference, though, when you start populating your child theme\u2019s style.css file, adding to functions.php, and/or adding custom <a href="${"https://codex.wordpress.org/Templates"}" rel="${"nofollow"}">page templates</a> to your child theme (though that\u2019s a topic for another time).</p>
<h3 id="${"thats-it"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#thats-it"}"><span class="${"icon icon-link"}"></span></a>That\u2019s it!</h3>
<p>You\u2019re done! You\u2019ve created a WordPress child theme, and can make all the changes you want to your site\u2019s appearance and functionality\u2014through style.css and functions.php, respectively\u2014without any worry of your code being overwritten when the parent theme updates. Go, you!</p>
<p>Have anything to add? Did I miss anything? Feel free to let me know.</p>`;
});
