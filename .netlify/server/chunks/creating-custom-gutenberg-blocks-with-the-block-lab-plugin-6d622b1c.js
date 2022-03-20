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
  default: () => Creating_custom_gutenberg_blocks_with_the_block_lab_plugin,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
var import_CalloutPlusQuote_8515db1f = require("./CalloutPlusQuote-8515db1f.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "How to Create Custom Editor Blocks with Block Lab",
  "date": "2020-06-14",
  "updated": "2020-07-02",
  "categories": ["css", "design", "php", "wordpress"],
  "coverImage": "block-lab-banner.png",
  "coverWidth": 386,
  "coverHeight": 125,
  "excerpt": "Block Lab is a WordPress plugin that simplifies the process of creating custom blocks to use in the block editor, AKA Gutenberg, the new content editor in WordPress 5.0. This post explains how to use it, even if you only know basic HTML."
};
const Creating_custom_gutenberg_blocks_with_the_block_lab_plugin = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I wrote briefly about <a href="${"https://wordpress.org/plugins/block-lab/"}" rel="${"nofollow"}">Block Lab</a> in my post on <a href="${"https://api.rickyjanuari.com/a-new-headless-site-with-gridsome/"}" rel="${"nofollow"}">going headless with Gridsome</a>, but I find it to be such a handy plugin that I thought I\u2019d write just a bit more in depth on what it does and how to use it, as well as how I\u2019ve adapted it specifically to my workflow in writing content for a headless WordPress site.</p>
<h2 id="${"what-is-block-lab-and-what-does-it-do"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-block-lab-and-what-does-it-do"}"><span class="${"icon icon-link"}"></span></a>What is Block Lab and what does it do?</h2>
<p>First things first: Block Lab is a WordPress plugin that simplifies the process of creating custom blocks to use in the block editor, AKA Gutenberg, the new content editor in WordPress 5.0.</p>
<p>Ordinarily, you\u2019re restricted to the types of blocks WordPress includes by default\u2014the standard text, headings, dividers, images, quotes, etc.\u2014and if you need something more specialized, you\u2019d either have to install a third-party plugin with the type of block you want, or you\u2019d have to get your hands dirty writing a pretty good deal of custom code. Block Lab is something of a best-of-both hybrid of those two choices.</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Block Lab is a plugin that helps you create your own custom blocks with minimal code required.
`;
    }
  })}
<p>There are three main steps to this process:</p>
<ol><li>Set up the name and type of your block using the WordPress admin interface;</li>
<li>Create a template file in your theme that will render the block\u2019s contents whenever it\u2019s used;</li>
<li>Optionally, add some CSS to style the block.</li></ol>
<p>While there is technically a tiny bit of PHP involved, it\u2019s so little (and in the form of such reusable boilerplate) that I\u2019d say anybody comfortable writing HTML (and maybe a bit of CSS) should be just fine getting started with Block Lab.</p>
<h2 id="${"why-custom-blocks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#why-custom-blocks"}"><span class="${"icon icon-link"}"></span></a>Why custom blocks?</h2>
<p>I always find it\u2019s helpful to start with the <em>why</em> before diving into the <em>how</em>, so let\u2019s take a second to talk about what custom blocks might be used for.</p>
${(0, import_index_2749e1b7.v)(import_Callout_7f4de651.C, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `If you&#39;re familiar with WordPress shortcodes, think of custom blocks as the next evolution of that idea. Custom blocks are the same concept, but much easier to use (since the author just picks a block type, rather than typing a specific key combination).
`;
    }
  })}
<p>Personally, I have a few custom blocks. One I really like\u2014that I\u2019ll use for this example\u2014is my \u201Cside note\u201D block. It renders content like this on the front end of the site:</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `This is just an example of the Side Note block! Nifty, eh.
`;
    }
  })}
<p>I find that block handy for expressing tangential thoughts and info in the middle of some content; it helps tell the reader that they can skip that part if they\u2019re not interested in extra details, while also adding some visual interest.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `If you\u2019re familiar with WordPress shortcodes, think of custom blocks as the next evolution of that idea. Custom blocks are the same concept, but much easier to use (since the author just picks a block type, rather than typing a specific key combination).
`;
    }
  })}
<p>It would certainly be possible to achieve this result without a custom block, but it would be tedious extra work. At minimum, you (or the author) would need to add a class to whatever block you were using each time you wanted to invoke the component. Or, you could use a shortcode, or even use the block editor\u2019s styling controls to change the block\u2019s appearance.</p>
<p>But in any of those cases, it\u2019s a hassle <em>and</em> too much to expect of content authors.</p>
<p>Ideally, authors would just be able to click a button to create a side note block and fill it in instead\u2014and that\u2019s exactly what a custom block allows you to do! No memorization or extra configuration required. Here\u2019s how it works, with the example side note you just saw above:</p>
<p><img src="${"/images/post_images/block-selection.png"}" alt="${"The WordPress block editor's block selection screen, showing a \u201Cside note\u201D block option"}"></p>
<p>Custom blocks can be easily selected from the normal block menu\u2026</p>
<p><img src="${"/images/post_images/side-note-block-backend-1024x405.png"}" alt="${"Filling text content into the side note component with a text box"}"></p>
<p>\u2026then simply filled in with content, with no need to worry about manual styling.</p>
<p>That\u2019s a lot better than styling the block manually or adding classes each time you want to use it, so let\u2019s dive into how to get that custom block set up.</p>
<h2 id="${"creating-your-first-custom-block"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#creating-your-first-custom-block"}"><span class="${"icon icon-link"}"></span></a>Creating your first custom block</h2>
<p>Like I said before: this will require a <em>little</em> bit of editing files and writing code, but as long as you\u2019re comfortable with basic HTML and navigating your WordPress file system, this should be perfectly well within your grasp. Don\u2019t sweat it if you don\u2019t know PHP\u2014there\u2019s so little required for basic blocks, it wouldn\u2019t even help anyway.</p>
<p>The natural first step is to install the Block Lab plugin, which of course you can do right from the WordPress admin like any other plugin, or by downloading the plugin from <a href="${"https://wordpress.org/plugins/block-lab/"}" rel="${"nofollow"}">WordPress.org</a> and uploading the .zip file.</p>
<p>Either way, once it\u2019s installed and activated, you\u2019ll find a new \u201D<strong>Block Lab</strong>\u201D item in the WordPress admin sidebar. Head there, and choose \u201D<strong>New block</strong>.\u201D</p>
<p><img src="${"/images/post_images/add-new-block-1024x687.png"}" alt="${"The \u201Cadd new block\u201D options screen in WordPress"}"></p>
<h3 id="${"block-options"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#block-options"}"><span class="${"icon icon-link"}"></span></a>Block options</h3>
<p>Let\u2019s cover the block options in the screenshot above briefly:</p>
<ul><li><strong>Block name</strong>: naturally enough, this is the name your block will go by; it\u2019s what you\u2019ll search for and choose when using your custom block in the editor, so name it intuitively (and nicely).</li>
<li><strong>Slug</strong>: the code-friendly name for the block, which you\u2019ll use later when creating the template file. You\u2019ll notice that as you type in the block name field, this will auto-populate for you, which is convenient.</li>
<li><strong>Icon</strong>: the icon used for the block\u2019s button. There are a few dozen to choose from. Ideally, pick one relevant to what the block does.</li>
<li><strong>Category</strong>: the group that this block will be associated with. You can choose one of WordPress\u2019s existing block categories, or create your own.</li>
<li><strong>Keywords</strong>: words related to the functionality or type of your block, which will be used to match when searching for blocks. It\u2019s probably a good idea to add some, in case you can\u2019t remember your block\u2019s exact name, or other content authors are just trying to find a block that does what yours does by typing similar words.</li></ul>
<p>At minimum, you\u2019ll need to give your block a name (which will also assign it a slug, which you\u2019ll also need). Icon, category and keyword are all optional, but also all good ideas.</p>
<p>Once you\u2019ve named your block, click the \u201D<strong>add field</strong>\u201D button to start adding some actual customized functionality to your block.</p>
<h3 id="${"field-options"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#field-options"}"><span class="${"icon icon-link"}"></span></a>Field options</h3>
<p>Fields are the things you actually fill in with your content when using the block. You could think of the field(s) as the variable part of the block; the part that the user adds each time the block is used.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Theoretically, you could have a block without fields if it just looked and worked the same each time it was used\u2014a divider or spacer block, for example\u2014but generally, you\u2019ll want at least one field to fill in with some content.
`;
    }
  })}
<p>Most of the time, I find just one field per block is what I want, but you can get creative do more than one. Either way, you have several options for field type. Let\u2019s get a quick overview of the main options:</p>
<p><img src="${"/images/post_images/Image-2020-06-13-at-9.57.00-PM-1024x976.png"}" alt="${"All the options for fields in a Block Lab block, explained in greater detail below.\n"}"></p>
<p>If you\u2019re familiar with Advanced Custom Fields (ACF), then this part will be very familiar to you. In fact, as I understand it, Block Lab is actually built on top of Advanced Custom Fields under the hood, so all the power of that excellent plugin comes standard.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Block Lab is actually built on top of Advanced Custom Fields under the hood, so all the power of that excellent plugin comes\xA0standard.
`;
    }
  })}
<p>In any case, though, working with fields in Block Lab is pretty much identical to working with fields in ACF.</p>
<ul><li><strong>Field label</strong>: intuitively enough, how the field will be labeled when this block is used.</li>
<li><strong>Field name</strong>: the sluggified version of the label; you\u2019ll use this later in your code to actually pull the contents out of the field and display it in the template file. Also auto-fills when you create the label.</li>
<li><strong>Field type</strong>: this is the most important part; there are several options like text (short), textarea (long), image, toggle, multi-select, and many others. Again, if you\u2019re familiar with ACF, you won\u2019t find anything surprising here. For most straightforward content block use cases, a text or textarea type will do just fine.</li>
<li><strong>Field location</strong>: whether this field appears directly in the content area (editor), or in the sidebar (inspector). I\u2019d stick with \u201CEditor\u201D unless you have a good reason to move the field out of the main content flow.</li></ul>
<p>I\u2019m not going to go into the other options here since they\u2019re, well, optional, but they\u2019re fairly straightforward, and you can read about them in the <a href="${"https://getblocklab.com/docs/fields/"}" rel="${"nofollow"}">Block Lab documentation</a> if you\u2019re so inclined.</p>
<p>If it helps, this is how my example \u201CSide Note\u201D block from above is set up:</p>
<p><img src="${"/images/post_images/side-note-options-1024x694.png"}" alt="${"The config options for my example \u201CSide Note\u201D block from this site; as a textarea field type with field location set to \u201CEditor.\u201D"}"></p>
<p>I don\u2019t fill in the help text since I\u2019m the only editor on this site, but it\u2019s a good idea if your block(s) will be used by others.</p>
<p>In any case, once you\u2019re happy with the setup of your block, hit the <strong>Publish</strong> button, and you\u2019ll be done here!</p>
<p>Helpfully, Block Lab gives you a popup detailing your next step, which is: creating a template file for your block, which you\u2019ll place inside your theme.</p>
<p><img src="${"/images/post_images/next-step-1024x381.png"}" alt="${"Instructions to place a PHP template file in the active theme, in a \u201Cblocks\u201D directory"}"></p>
<p>As you can see, Block Lab helpfully lets you know what to do next once you\u2019ve published your block.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Technically, your block is available to choose in the block editor at this point, but it won\u2019t work right until you take the next step and add a template file.
`;
    }
  })}
<h3 id="${"create-a-template-file-for-your-custom-block"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#create-a-template-file-for-your-custom-block"}"><span class="${"icon icon-link"}"></span></a>Create a template file for your custom block</h3>
<p>In order to display your custom block (either in the block editor or on the front end of the site), you\u2019ll need to create a PHP template file for it. Don\u2019t panic, though. As I\u2019ve already mentioned: the beautiful thing about Block Lab is that you don\u2019t need to know anything about PHP to create custom blocks. Just a little HTML and CSS is enough. All you\u2019ll need to know is where to find your theme\u2019s folder, and how to add files to it. (And it may go without saying, but be sure you\u2019re using a <a href="${"https://api.rickyjanuari.com/wordpress-child-theme-explanation/"}" rel="${"nofollow"}">child theme</a> or your own custom theme before you attempt this, or your work will probably be overwritten next time your theme updates.)</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The beautiful thing about Block Lab is that you don\u2019t need to know anything about PHP to create custom blocks. Just a little HTML and CSS is\xA0enough.
`;
    }
  })}
<p>Again, Block Lab lets you know exactly what you should name your template file and where to place it. There are a few ways to go about this part, depending on your needs (you can <a href="${"https://getblocklab.com/docs/get-started/add-a-block-lab-block-to-your-website-content/"}" rel="${"nofollow"}">read more in the documentation</a> if interested), but we\u2019ll stick with the simplest:</p>
<ol><li>Create a folder named <code>blocks</code> inside your theme\u2019s folder;</li>
<li>Create a file for your custom block, with the name that Block Lab gives you, inside that folder.</li></ol>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Obviously, you\u2019ll need to be able to access your site\u2019s files in order to complete this step. That means either using FTP, or a plugin that gives you access to the file system from the WordPress admin.
`;
    }
  })}
<p>The naming convention is: <code>block-slug.php</code>, where <code>slug</code> becomes the actual \u201Cslug\u201D field you used above when the block was created. In the case of the example \u201Cside note\u201D block, the file that Block Lab will look for to render the block is <code>block-side-note.php</code>.</p>
<p>What you actually want inside your template depends on how you\u2019d like it to look and what content it will hold, but let\u2019s assume we just want a basic <code>div</code> wrapping the content with a special class. In that case, here\u2019s what our <code>block-side-note.php</code> might look like:</p>
<pre class="${"language-php"}"><!-- HTML_TAG_START -->${`<code class="language-php"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>side-note<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token function">block_field</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'note-text'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Remember how I said you wouldn\u2019t need to know any PHP? That\u2019s because for basic blocks, the above is all you need, and you can easily just copy, paste, and adapt that code for whatever fields you have.</p>
<p>The important thing is just to make sure that the string inside the parentheses (<code>&#39;note-text&#39;</code> in the example code block above) matches the field\u2019s name.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `The important thing is just to make sure that the string inside the parentheses (<code>&#39;note-text&#39;</code> in the example code block above) matches the field\u2019s\xA0name.
`;
    }
  })}
<p>What this all means is: every time you use this block, it\u2019ll be dynamically rendered wrapped in a <code>div</code> with the <code>side-note</code> class. And the cool thing is: that applies both in the editor, and on the front end!</p>
<h3 id="${"adding-css"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-css"}"><span class="${"icon icon-link"}"></span></a>Adding CSS</h3>
<p>Obviously, a <code>div</code> doesn\u2019t do us much good on its own; we need to use some CSS to style our content, too. That code <em>could</em> go in your theme\u2019s stylesheet if you only care about styling the block on the front end and not in the editor. However, if you want to use the same styles both places (which I personally feel is nice, since it\u2019ll help the editing experience mirror the finished look), you\u2019ll want to add a new stylesheet just for blocks.</p>
<p>To do this, create a <code>blocks.css</code> file, also in the <code>blocks</code> folder in your active theme. Block Lab will automatically read this stylesheet and apply its styles on both the front and back end of the site.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `You could also have <a href="${"https://getblocklab.com/docs/get-started/style-block-lab-custom-blocks/"}" target="${"_blank"}" rel="${"noreferrer noopener"}">a separate CSS file for each block</a>, but unless a block gets pretty complex, I personally prefer just having all block styling together in one place.
`;
    }
  })}
<p>Here\u2019s the actual CSS code I use on this site to create that Side Note component, if you\u2019re interested or want to try this block out on your site:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.side-note</span> <span class="token punctuation">&#123;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> .5rem 1.5rem<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 3rem 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .9rem<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--lightBlue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token selector">.side-note:before</span> <span class="token punctuation">&#123;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'Side Note'</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -.5em<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--paper<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 1rem<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .7rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--lightBlue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"recap"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#recap"}"><span class="${"icon icon-link"}"></span></a>Recap</h2>
<p><strong>That\u2019s all it takes!</strong> Creating a custom block to use in the block editor is as simple as:</p>
<ol><li>Using Block Lab to create a block and pick its options;</li>
<li>Adding a block template file to your theme;</li>
<li>Optionally, adding CSS for the block.</li></ol>
<h2 id="${"notes-on-block-labs-future-and-unlocking-block-lab-pro"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#notes-on-block-labs-future-and-unlocking-block-lab-pro"}"><span class="${"icon icon-link"}"></span></a>Notes on Block Lab\u2019s future, and unlocking Block Lab Pro</h2>
<p><strong>Of note</strong>: <strong>Block Lab was recently acquired by <a href="${"https://wpengine.com/"}" rel="${"nofollow"}">WP Engine</a></strong>. You can <a href="${"https://getblocklab.com/the-block-lab-team-are-joining-wp-engine/"}" rel="${"nofollow"}">read about the acquisition on their blog</a>, but the summary is: Block Lab itself is not going to live on in its current form. However, the team is building something similar and new with WP Engine, and they\u2019ve committed to offering a seamless migration path when that product comes out, whatever it looks like.</p>
<p>In the meantime, the plugin will continue working for the foreseeable future. And as a bonus, the Block Lab team has publicly revealed that the Pro tier of the plugin\u2014a paid offering, which is now obviously an unappealing investment\u2014is easily unlocked by modifying a single line of code within the plugin.</p>
<p>That needs to be done manually, of course, and will need to be re-done any time the plugin updates (if it does). But to do this: you can simply go into the plugin\u2019s folder, open <code>php/class-util.php</code>, and change the <code>is_pro()</code> function (on line 31, as of this writing) to return <code>true</code>, like so:</p>
<pre class="${"language-php"}"><!-- HTML_TAG_START -->${`<code class="language-php"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">is_pro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//This line is edited</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That will open up a handful of additional extremely handy fields for you to use in your blocks, including the all-powerful repeater field, and the ever-useful rich text field.</p>
<p>Again, though, just remember to modify the line again if the plugin ever updates; you\u2019re playing with fire a little bit by going this route, and bad things will probably happen to your pro feature blocks if the plugin updates and your modification is lost. This is definitely not WordPress best practice by any means, but it <em>is</em> a viable path to unlocking some powerful features in an already exceptionally useful plugin.</p>`;
});
