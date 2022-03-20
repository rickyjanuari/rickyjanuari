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
  default: () => Adding_gutenberg_full_and_wide_width_image_support_to_your_wordpress_theme,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
const metadata = {
  "title": "Adding Gutenberg Full- and Wide-Width Image Support to Your WordPress Theme",
  "date": "2019-03-16",
  "updated": "2020-05-13",
  "categories": ["css", "web", "wordpress"],
  "coverImage": "gutenberg-wide-illustration.png",
  "coverWidth": 32,
  "coverHeight": 29,
  "excerpt": "Gutenberg brings with it the ability to set image blocks as full-width or wide-width. This article talks about how to enable support for that feature in your theme, and one way to write the CSS that makes it work."
};
const Adding_gutenberg_full_and_wide_width_image_support_to_your_wordpress_theme = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Recently, I\u2019ve been using (and loving) the new <a href="${"https://wordpress.org/gutenberg/"}" rel="${"nofollow"}">Gutenberg editor</a> in WordPress 5.0+. It\u2019s a huge step forward in both what developers can offer, and what users can expect out of their content creation experience.</p>
<p>One of the new features of Gutenberg that I particularly enjoy is the ability to set an image as either \u201Cwide width\u201D or \u201Cfull width,\u201D to allow it to break out of its container element in order to span a greater width of the screen.</p>
<p>Here\u2019s a visual example of what I mean:</p>
<p><img src="${"/images/post_images/Untitled-1024x928.png"}" alt="${"Most of the content is constrained to a fixed-width container, but wide-width and full-width elements may expand outside that container's boundaries."}"></p>
<p><strong>Ordinarily, an image would be constrained to the content width</strong> (visualized by the dotted lines in the image above). Being able to allow images to break out of those confines is a powerful layout tool, though, as it allows content authors to add a great deal of visual interest and hierarchy to any page, post, or content supported by the new Gutenberg editor!</p>
<h2 id="${"adding-theme-support"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#adding-theme-support"}"><span class="${"icon icon-link"}"></span></a>Adding Theme Support</h2>
<p>Adding support for wide- and full-width images is up to the theme developer. Fortunately, from the backend, it\u2019s dead simple; just add this line to the theme\u2019s <code>functions.php</code> file (please be sure to use a <a href="${"https://api.rickyjanuari.com/wordpress-child-theme-explanation/"}" rel="${"nofollow"}">child theme</a> as appropriate):</p>
<pre class="${"language-php"}"><!-- HTML_TAG_START -->${`<code class="language-php"><span class="token comment">//functions.php </span>
 
<span class="token function">add_theme_support</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'align-wide'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>That tidy little snippet will make two new options available for image blocks in the Gutenberg editor, in addition to the usual options: \u201Cwide width\u201D and \u201Cfull width,\u201D highlighted in the image below:</p>
<p><img src="${"/images/post_images/gutenberg-image-toolbar-with-wide.png"}" alt="${"'Wide width' and 'full width' options, highlighted, appear in the Gutenberg editor if the active theme supports them."}"></p>
<p>When the user chooses either of these options, the <code>&lt;figure&gt;</code> element that appears on the front-end of the site (oh yeah\u2014by default, Gutenberg puts images inside <code>&lt;figure&gt;</code> elements, so that captions can be added easily. Anyway, that element, i.e., the image\u2019s container) will have either an <code>alignwide</code> or <code>alignfull</code> class applied to it (depending, of course, on which was selected by the content author).</p>
<p><strong>That\u2019s it for the PHP/back-end setup.</strong> Other than the snippet above, everything we\u2019ve covered so far is fully automatic and just handled by WordPress for us.</p>
<p>However, we still need to actually <em>implement</em> these layout techniques on the front-end of the site, using our theme\u2019s CSS. Otherwise, nothing will happen visually when a content author chooses the full-width or wide-with image option.</p>
<h2 id="${"front-end-css-for-full-width-images"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#front-end-css-for-full-width-images"}"><span class="${"icon icon-link"}"></span></a>Front-End CSS for Full-Width Images</h2>
<p>I wanted to write this post mainly to share one technique that I came across online, which I feel is particularly clever in this situation (and which is not at all exclusive to Gutenberg or WordPress):</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/* style.css */</span>
 
<span class="token selector">.alignfull</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Even though that bit of CSS above is very brief (only two properties!), I still want to be sure we cover what it\u2019s doing, because it\u2019s a pretty elegant solution for our needs.</p>
<p>The <code>width</code> property is pretty straightforward: a value of <code>100vw</code> ensures that the image is always exactly as wide as the viewport, no matter what size that might be. (Remember, <code>width: 100%</code> might not work here, because percentages are based on the width of the <em>parent element</em>, not the screen, and our image\u2019s parent element may or may not be as wide as the viewport.)</p>
<p>However, making the image <code>100vw</code> wide on its own doesn\u2019t do us much good on its own, because it would overflow the screen, as shown in this image:</p>
<p><img src="${"/images/post_images/fullwidth-overflow-1024x600.png"}" alt="${"Setting the width is only part of the solution, since it will overflow the screen unless it's repositioned."}"></p>
<p>That brings us to the <code>margin</code> property, which is the clever part. This is where the real CSS magic happens:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50vw<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In case you\u2019re new to the <code>calc</code> function, in essence, it lets you do math to set CSS values. It\u2019s most commonly used in responsive design to, say, let your image take up a quarter of the available space, minus an 8px margin (which would be <code>width: calc(25% - 8px);</code>).</p>
<p>But <code>calc</code> has many other uses, and can crunch numbers on any dynamic or static values, even between two different units of measurement (as in the previous example, to subtract <em>pixels</em> from a <em>percentage</em>).</p>
<p>Back to our fullwidth image: in order to make the image the full width of the screen and position it properly, we want to set a <em>negative margin.</em> And as you\u2019ve probably guessed, we\u2019ll need <code>calc</code> to help us, because the distance between the side of our container and the left edge of the screen is responsive, and always changing.</p>
<p><strong>So how do we determine how far the image needs to shift to the left?</strong> Answer: we don\u2019t. \u{1F60E}</p>
<p>Instead, we\u2019re going to send our image <em>halfway to the right.</em> That\u2019s the <code>50%</code> portion of our <code>calc</code> formula:</p>
<p><img src="${"/images/post_images/fullwidth-left.png"}" alt="${"Setting a side margin of 50% on the element puts its left side directly in the center of its parent element."}"></p>
<p>Now we can begin to see the full picture (no pun intended)!</p>
<p>Since percentage values are calculated based on the parent element\u2019s width, a <code>margin</code> of <code>50%</code> sends the image exactly halfway across the parent element. And since our parent element is already centered on the screen, that means <strong>our image is now exactly halfway across the viewport, no matter how wide the viewport is!</strong></p>
<p>Now that our image\u2019s left side is directly in the center of the screen, the rest is just <em>subtracting</em> <code>50vw</code> from the left margin\u2014which is the other half of our calculation. Thus, <code>calc(50% - 50vw)</code> gives us exactly the full-width image we\u2019re looking for!</p>
<p><img src="${"/images/post_images/fullwidth-achieved.png"}" alt="${"A left margin of 50% - 50vw gives us the perfectly centered, fullwidth element we're looking for."}"></p>
<h3 id="${"some-extra-notes-about-the-above-full-width-css"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#some-extra-notes-about-the-above-full-width-css"}"><span class="${"icon icon-link"}"></span></a>Some Extra Notes About the Above Full-Width CSS</h3>
<p>Once more, here\u2019s the CSS from above:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.alignfull</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>There\u2019s one small issue here, which is: we don\u2019t take into account the possibility that our <code>.alignfull</code> element might already have a right margin. If it does, it will actually be taking up <em>more than</em> the full width of the screen, and that\u2019s no good.</p>
<p>Plus, we probably want space above and below our fullwidth image, just to make it stand out a little more. So really, instead of setting just a <code>margin-left</code> property, we\u2019d most likely be better off setting all four sides at once:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token property">margin</span><span class="token punctuation">:</span> 2rem <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50vw<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This way, we\u2019ve made sure all four sides of our image are accounted for while also giving the image a little breathing room.</p>
<p>And if you\u2019re wondering (or just wanting to get super technical): yes, this <em>does</em> mean that <em>both</em> sides of the image get brought in by <code>50%</code>, then are each pulled back out <code>50vw</code>. If you didn\u2019t have the <code>- 50vw</code> part of the CSS above, the image would effectively be 0% wide (since it would have a margin of <code>50%</code> on both sides). Interesting! \u{1F913}</p>
<p>Lastly, as you probably realized: <strong>this post assumes the content container is already centered on the screen</strong>. If your content is <em>not</em> already centered in the viewport, this specific CSS won\u2019t work for you, and you\u2019ll need to do something a little more creative to get your images full-width.</p>
<h2 id="${"front-end-css-for-wide-width-images"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#front-end-css-for-wide-width-images"}"><span class="${"icon icon-link"}"></span></a>Front-End CSS for Wide-Width Images</h2>
<p>Wide-width images work similarly to the above, but naturally, we don\u2019t want to make them the <em>full</em> width of the screen; otherwise, there would be no difference between wide-width and full-width (and that, of course, would just be silly).</p>
<p>How wide the image should be, exactly, as well as how to achieve the effect, is ultimately up to the theme author. However, I find something like this bit of CSS works quite well:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.alignwide</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 20vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -10vw<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><img src="${"/images/post_images/wide-width-only-1024x713.png"}" alt="${"A wide-width element, breaking outside its content container by an additional 20 VW"}"></p>
<p>Our wide width image spans the 100% of its parent container, plus an extra 20 viewport width units.</p>
<p>You might notice that in this case, I chose <em>not</em> to use negative margin, and instead, opted for a negative value on the <code>left</code> property (paired with relative positioning). Why\u2019s that, and what\u2019s the difference?</p>
<p>For the \u201Cwhy,\u201D it\u2019s mainly because: I wanted to illustrate that <strong>there\u2019s more than one technique available here.</strong></p>
<p>As for the difference\u2026well, to be honest, which works better will probably depend on your use case, and the environment you\u2019re working in. None of this CSS exists in a vacuum (hopefully).</p>
<p>If your images already have a side margin, then overriding that with a negative margin will probably work better (or, alternatively, you could just be aware that you may need to remove the side margin if you\u2019re utilizing relative positioning).</p>
<p>There are undoubtedly posts written on the advantages and disadvantages of both techniques, and I don\u2019t feel the need to retread that ground here. Some developers avoid negative margins like the plague; I think they\u2019re fine in a situation like this, and as long as you\u2019re not just using them to avoid changing a different part of the CSS, or as a hacky way to get around something that should just be fixed on its own.</p>
<p>Another note here: unless you\u2019re ok with your wide-width images bleeding off the page at smaller screen sizes, you\u2019ll need to either use a media query, and/or replace the <code>10vw</code> with a value that doesn\u2019t exceed the side padding/margin around your main content container.</p>
<p>(For example: if your main content container element, whatever that may be, has a padding or margin of <code>32px</code> on each side, you\u2019d want to make sure your <code>.alignwide</code> class had a width of no greater than <code>calc(100% + 64px)</code>).</p>
<p>I eventually landed on something like this for my personal use on wide-width images; they\u2019re fullscreen up to a certain screen size (since they may as well be on mobile), then differentiate themselves starting at a certain <code>@media</code> breakpoint (likely the same one, or just above, where your content container element stops expanding and centers itself at a static width instead):</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token comment">/* style.css */</span>
 
<span class="token selector">.alignwide</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 2rem <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.alignwide</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 20vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 2rem -10vw<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>That\u2019s it!</strong> I hope this was helpful in getting your theme\u2019s images set up for Gutenberg support. Enjoy your new content editing experience!</p>`;
});
