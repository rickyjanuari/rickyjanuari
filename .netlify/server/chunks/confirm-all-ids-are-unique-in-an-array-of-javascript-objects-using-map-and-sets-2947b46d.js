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
  default: () => Confirm_all_ids_are_unique_in_an_array_of_javascript_objects_using_map_and_sets,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
const metadata = {
  "title": "How to Check Uniqueness in an Array of Objects in JavaScript",
  "date": "2020-02-17",
  "updated": "2020-05-19",
  "categories": ["javascript", "web"],
  "coverImage": "EQ0-F2nXUAEpgCx.jpeg",
  "coverWidth": 5,
  "coverHeight": 3,
  "excerpt": "Working with arrays of objects in JavaScript can be difficult. This post covers how to ensure all object keys (IDs) are unique, and how to find non-unique values."
};
const Confirm_all_ids_are_unique_in_an_array_of_javascript_objects_using_map_and_sets = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Recently, working on my <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a> side project (<a href="${"https://smitty.netlify.com"}" rel="${"nofollow"}">smitty.netlify.com</a>), I came across the need to verify that all object properties in an array of objects were unique.</p>
<p>That\u2019s a little tough to explain in writing, so here\u2019s an example:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span> 
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'The first object'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span> 
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Another object'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">42</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Here is a third object'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Oops! This one is a duplicate'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">42</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...etc.</span>
<span class="token punctuation">]</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In my case, the IDs were hard-coded (rather than generated programmatically). As such, they were subject to human error, and I discovered that some IDs were duplicated.</p>
<p>This was an issue because the ID numbers were being used for setting the HTML <code>id</code>s in a form; that meant some of the <code>&lt;label&gt;</code> elements were being associated with the wrong input, which is pretty disastrous in a production app!</p>
<h2 id="${"the-solution"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-solution"}"><span class="${"icon icon-link"}"></span></a>The solution:</h2>
<p><strong>How to find the duplicates though?</strong> In my case there were 100 unique objects in the array, so while combing through them manually certainly wasn\u2019t impossible, it was going to be a tedious task. The solution was to use JavaScript\u2019s <code>map</code> method and <code>Set</code> functionality.</p>
<ul><li><strong><code>map</code></strong> takes an array, and <em>maps</em> each thing in that array to a new array. (Here, we use it to create a new array with <em>just</em> the original IDs.)</li>
<li><strong><code>Set</code></strong>s in JavaScript create new arrays (technically, sets) with only <em>unique</em> values. (For example, the <code>Set</code> of <code>[0, 0, 1, 1, 2]</code> is <code>[0, 1, 2]</code></li></ul>
<p>To extract only the IDs of the original array, the code looks like this (where the original array is named <code>items</code>):</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> IDs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now we\u2019ve got an array of only unique IDs. What next?</p>
<p>Well, if we <em>did</em> have duplicate IDs in our original <code>items</code> array, then the length of <code>IDs</code> will be <em>different</em> than the length of the original array. So it\u2019s a quick conditional check, which would <em>seem</em> like this, but beware! We\u2019re missing a step:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">IDs<span class="token punctuation">.</span>length <span class="token operator">===</span> items<span class="token punctuation">.</span>length
<span class="token comment">// Always returns false \u{1F914}</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Heads up!</strong> That won\u2019t <em>quite</em> work, because <code>Set</code>s and arrays in JavaScript are <em><strong>not</strong></em> the same thing! The above comparison will always return <code>false</code> because, if you check, <code>IDs.length</code> is <code>undefined</code>. (That\u2019s because <code>.length</code> is a method on arrays, not sets.)</p>
<p>To fix the issue, we can just add a bit of ES6 destructuring to convert the set into an array:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token punctuation">[</span><span class="token operator">...</span>IDs<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">===</span> items<span class="token punctuation">.</span>length
<span class="token comment">// Now it works!</span>
<span class="token comment">// true if all IDs were unique, false if not</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you prefer, this is a little more explicit and works the same way; I just prefer the above shorthand, personally:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token comment">// Another way to do the same thing:</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>IDs<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> items<span class="token punctuation">.</span>length</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"make-it-reusable"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#make-it-reusable"}"><span class="${"icon icon-link"}"></span></a>Make it reusable</h2>
<p>If this is an issue you might run into frequently, you can abstract it to a function like so:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token comment">// Reusable function to check uniqueness of keys in an array of objects </span>
<span class="token keyword">const</span> <span class="token function-variable function">isEverythingUnique</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>   
    <span class="token keyword">const</span> uniques <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>uniques<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">===</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> 
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>And call it with, e.g., <code>isEverythingUnique(items, &#39;id&#39;);</code> (which would return <code>false</code> in our case, because there are two objects each with <code>id: 42</code>).</p>
<p>If the function returns <code>true</code>, then you know all the keys are unique. Otherwise, you have non-unique keys (IDs).</p>
<p>To find out <em>which</em> ones are duplicates, you can use this handy function which I developed from <a href="${"https://hackernoon.com/finding-non-unique-elements-in-javascript-d934e6fd6260"}" rel="${"nofollow"}">this Hacker Noon post</a>:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token comment">// Reusable function to show the duplicate keys in an array of objects</span>
<span class="token keyword">const</span> <span class="token function-variable function">getDuplicates</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> keys<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> keys<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">!==</span> keys<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Call this function just like the one above, e.g., <code>getDuplicates(items, &#39;id&#39;)</code>, which in our case, would get you an array that contains the non-unique IDs, like this:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token function">getDuplicates</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">)</span>
 
<span class="token comment">// [42, 42]</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Hope you enjoyed!</strong> <strong>Thanks for reading.</strong></p>`;
});
