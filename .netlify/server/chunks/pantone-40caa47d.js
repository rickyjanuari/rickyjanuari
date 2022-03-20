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
  default: () => Pantone,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
const metadata = {
  "title": "Pantone, Color, and What I Wish I Had Known Sooner as a Designer",
  "date": "2015-04-01",
  "updated": "2021-01-19",
  "categories": ["design", "opinion"],
  "coverImage": "ColorPost-4.jpg",
  "coverWidth": 35,
  "coverHeight": 22,
  "excerpt": "One of the most difficult things for me to learn in my transition from the classroom to a professional branding agency was how to properly handle color output. So I decided to write this post in the hope of saving you some from some of the pitfalls that I failed to avoid."
};
const Pantone = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>One of the most difficult things for me to learn in my transition from the classroom to a <a href="${"http://dday.com"}" rel="${"nofollow"}">professional branding agency</a> was how to properly handle color output. Sure, I learned in my classes how to open the swatch palette and find the Pantone swatch I wanted, but how to properly utilize that swatch and ensure its consistency across all print and web mediums\u2014this was something new to me.</p>
<p>Don\u2019t get me wrong; I had great teachers. But little in a classroom environment compares with the task of creating a comprehensive logo and stationery package for a real-world client. (Plus, the print overview course at my school was an elective that I didn\u2019t\u2026er, elect.)</p>
<p>Trust me: it\u2019s no fun having to redo 300 logos because you didn\u2019t get the colors exactly right. So I decided to write this post in the hope of saving you some from some of the pitfalls that I failed to avoid.</p>
<h2 id="${"an-explanation-of-spot-colors"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#an-explanation-of-spot-colors"}"><span class="${"icon icon-link"}"></span></a>An explanation of spot colors</h2>
<p>Let\u2019s refresh ourselves on the printing process.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Even the best process printers are mixing inks on the fly to create a limited range of color, and that can often result in\xA0inconsistency.
`;
    }
  })}
<p>As you probably know, most color printers create color by mixing cyan, magenta, yellow and black inks. This is called CMYK, 4-color, or \u201Cprocess\u201D printing (and by the way, the K in CMYK stands for \u201Ckey,\u201D as the black color plate was once referred to as the key plate, in case you were wondering). Cyan plus magenta equals blue, magenta plus yellow equals red, and on and on. CMYK is very popular because it\u2019s cheap, and most colors can be recreated decently within the process printing color range, also known as a \u201Cgamut.\u201D</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `Some printers add extra inks to the standard CMYK\u2014most commonly a light cyan and a light magenta, but sometimes others\u2014for better color reproduction, especially in photos. If you&#39;re serious about home printing, a 6- or 8-color printer can be a very good investment.) But regardless, there is a limit to the color precision of process printing. Even the best process printers are mixing inks on the fly to create a limited range of color, and that can often result in inconsistency.
`;
    }
  })}
<p>That\u2019s where the Pantone Matching System, called just Pantone or PMS for short, comes in.</p>
<p>Pantone inks are special inks that are each created prior to printing.</p>
<p>Inks such as this are called \u201Cspot\u201D colors. They aren\u2019t combinations of cyan, magenta, yellow and/or black created during printing; they\u2019re precisely and individually mixed beforehand, kind of like paint. Spot colors are also like paint in that they are applied by the printer in a flat uniform layer, as opposed to the tiny halftone dots created by more traditional printing methods like CMYK. This makes spot colors much, much more consistent than process color.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Pantone inks are special inks that are each created prior to\xA0printing.
`;
    }
  })}
<p>Think about it this way: if you were going to paint a wall in your house green, which would create a more consistent result\u2014buying a bucket of cyan paint and a bucket of yellow paint and mixing them together as you went, or just buying green paint to begin with?</p>
<p>The latter, obviously. That\u2019s why spot colors are so great.</p>
<p><strong>There are drawbacks to spot color printing, however.</strong></p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `In short, spot color printing is the best way to ensure color accuracy and a high-quality print, but because of its nature, it\u2019s difficult and often\xA0expensive.
`;
    }
  })}
<p>Most pertinently, spot colors each require their own ink well during printing. Let\u2019s say you have a project that you want to print in standard CMYK, except that your client wants their two-color logo printed with the two appropriate spot colors. That would make this a six-color job; cyan, magenta, yellow and black plus the two specified spot colors equals six. So unless your printer has two extra spots for ink (and it almost certainly doesn\u2019t), this unfortunately means that the job will need to be handled by a professional print shop\u2014and for that matter, will probably not be cheap.</p>
<p>In short, spot color printing is the best way to ensure color accuracy and a high-quality print, but because of its nature, it\u2019s difficult and often expensive. Even large companies usually reserve spot color printing only for the most important printed materials, or those that only require one or maybe two colors.</p>
<h2 id="${"pantone-is-more-than-spot-inks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#pantone-is-more-than-spot-inks"}"><span class="${"icon icon-link"}"></span></a>Pantone is more than spot inks</h2>
<p>So you probably can\u2019t print actual Pantone <em>inks</em> on your own, but there\u2019s good news:</p>
<p>Each Pantone swatch in the book includes CMYK, RGB and HTML values to reproduce that swatch color as accurately as possible in standard print and onscreen applications.</p>
<p><img src="${"/images/post_images/ColorPost-2.jpg"}" alt="${"Pantone swatches include recommended CMYK, RGB and HTML values"}"></p>
<p>Always be sure to use the CMYK, RGB and/or HTML values recommended here on the Pantone swatch. Avoid converting by any other method.</p>
<h3 id="${"getting-consistent-color-without-using-pantone-inks"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#getting-consistent-color-without-using-pantone-inks"}"><span class="${"icon icon-link"}"></span></a>Getting consistent color without using Pantone inks</h3>
<p>Unless you or your client are actually shelling out the money to print spot inks, the best way to reproduce those glorious Pantone swatches as accurately as possible is to replace every spot color swatch in your document with its appropriate, Pantone-recommended CMYK swatch, found in the Pantone swatch books. (There are online resources to locate these values as well, but they may not always be 100% accurate.)</p>
<p>Why must you do this? Because spot color swatches in a design program aren\u2019t meant to be printed correctly by a process printer; they\u2019re meant to register with the printer as the proper spot color.</p>
<p>In other words, because the input doesn\u2019t match the output.</p>
<p><img src="${"/images/post_images/Swatch-Panel.jpg"}" alt="${"InDesign's swatch panel"}"></p>
<p>As shown in the image above, standard color swatches (such as the \u201CDark Red\u201D swatch) are indicated in the InDesign swatch panel by a checkered box icon to the right of the swatch name. Spot color swatches (like Pantone swatches) are indicated with a small dot icon in the same position. If you are using any spot color swatches in your document and you are not going to be printing those with true spot color inks, you <em>must</em> convert those spot color swatches and all instances of those colors in your document to standard CMYK values for best results.</p>
<p><strong>Here\u2019s what happens otherwise:</strong></p>
<p>If you send a document with spot colors to a process printer, the machine will check to see if it has spot color inks loaded up. When that check comes back negative, rather than just ignoring those colors in your document, it will automatically attempt to translate your spot colors into some combination of cyan, magenta, yellow and black ink.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Color conversion is not like converting celsius to fahrenheit or liters to gallons; it\u2019s not mathematical, and there is no perfect formula for converting any given color into a new color\xA0space.
`;
    }
  })}
<p>This is where problems arise, as whatever method seems right to the computer will often not be correct to the eye. Color conversion is not like converting celsius to fahrenheit or liters to gallons; it\u2019s not mathematical, and there is no perfect formula for converting any given color into a new color space.</p>
<p>Put another, less technical way: sending a document with spot colors through a standard 4-color process print is a little like translating the same sentence into a new language over and over. The end result might look passable, but it will almost certainly be missing the finer nuances of the original source material.</p>
<p><img src="${"/images/post_images/Screen-Shot-2015-04-01-at-11.59.07-AM.png"}" alt="${"The 'print' modal window in InDesign"}"></p>
<p>In the print popup window, select \u201Coutput\u201D on the left and see how many inks are in the ink section. If it\u2019s more than the basic four process inks, you\u2019ll want to convert your spot colors to process colors for optimal print results.</p>
<h2 id="${"if-you-want-something-done-right-youve-got-to-do-it-yourself"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#if-you-want-something-done-right-youve-got-to-do-it-yourself"}"><span class="${"icon icon-link"}"></span></a>If you want something done right, you\u2019ve got to do it yourself.</h2>
<p>This is where I went wrong as a student and as a rookie professional.</p>
<p>So we\u2019ve established that we need to change our spot colors to process colors before we send our document to print. But that\u2019s easy, right? Just switch the color panel to CMYK sliders and copy whatever values are there. They should be the same values as what\u2019s listed in the Pantone swatch book, right?</p>
<p>That\u2019s what I thought, too, but I was very wrong.</p>
<p><img src="${"/images/post_images/Screen-Shot-2015-04-01-at-12.02.15-PM.png"}" alt="${"The InDesign color panel, showing Pantone 132 C"}"></p>
<p>Here\u2019s the color panel with a Pantone swatch selected.</p>
<p><img src="${"/images/post_images/Screen-Shot-2015-04-01-at-12.02.28-PM.png"}" alt="${"The InDesign color panel, showing the color conversion menu options"}"></p>
<p>If you open the panel menu and change the color to CMYK\u2026</p>
<p><img src="${"/images/post_images/Screen-Shot-2015-04-01-at-12.02.37-PM.png"}" alt="${"The InDesign color panel, showing the newly converted and incorrect CMYK values"}"></p>
<p>\u2026you will not end up with the correct CMYK values for your Pantone swatch.</p>
<p>Changing the document color mode and/or the color mode in the color panel of a design program will <em>NOT</em> change a spot color to the appropriate CMYK, RGB or HTML value. <em>You must get those from the Pantone swatch book and enter them manually.</em> (There are easy ways to do this using the tools in the swatch panel, but I won\u2019t go into that here.)</p>
<p><img src="${"/images/post_images/20150401_142813-300x206.jpg"}" alt="${"A Pantone book swatch, detailing RGB, CMYK, and HTML values"}"></p>
<p>Take the example in the above image: the recommended CMYK formula for Pantone 132 C is 9/38/100/32. That\u2019s <em>very</em> far from the values that InDesign dialed up for me in the color panel in the screenshot before that. (A telltale sign of improperly converted CMYK swatches is that they involve decimal points, e.g., the 13.04% black shown in the color panel screenshot above. No Pantone swatch\u2019s recommended CMYK value ever calls for decimals.)</p>
<h2 id="${"coated-or-uncoated"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#coated-or-uncoated"}"><span class="${"icon icon-link"}"></span></a>Coated or Uncoated?</h2>
<p>You may have noticed every Pantone swatch has a suffix, usually either \u201CC\u201D or \u201CU\u201D (though there are others). These two initials stand for coated and uncoated, respectively, and indicate the type of paper for which the swatch is best suited.</p>
<p>You may have also noticed that in general, when you print something on uncoated paper\u2014say for example cheap office copy paper, or that nifty artsy craft paper\u2014your colors and images tend to come out darker than they do when you use a smooth or glossy stock.</p>
<p>That smoother paper is \u201Ccoated\u201D stock, and its smoothness allows ink to sit neatly on the surface of the paper. This helps the ink display its hue and brightness better than uncoated paper. (This is why photos are usually printed on high gloss paper.)</p>
<p><em>Uncoated</em> stock, on the other hand, absorbs ink. No matter how white the actual paper is, things printed on uncoated stock tend to darken as the ink sinks below the surface.</p>
<p><strong>So how can you ensure that the same base color printed to both stocks will still be consistent?</strong></p>
<p>Compare the coated and uncoated versions of the same Pantone swatch, such as Pantone 186 C and Pantone 186 U below. (Fun fact: that\u2019s official Husker red. Know your audience.) You\u2019ll notice that the uncoated swatch is a bit lighter. This is because of the darkening that occurs when printing on uncoated stock. The same Pantone spot color will look a bit different on coated and on uncoated stock.</p>
<p><img src="${"/images/post_images/ColorPost-1-1024x316.jpg"}" alt="${"Pantone swatches of 186 C and 186 U, showing the uncoated version is noticeably lighter than the coated version."}"></p>
<p>Uncoated swatches (such as the right swatch in the image above) tend to be slightly lighter than coated (left) to offset the natural darkening effect that uncoated paper has. Notice that the CMYK values are all lower.</p>
<p>So if, for example, your brand color is Pantone 109 (bonus factoid: that\u2019s the yellow I\u2019m using on this site), and you\u2019re trying to mimic the look of the Pantone 109 spot color on coated stock, use the values from the Pantone 109 C swatch. Likewise, if you want to mimic how Pantone 109 looks when uncoated stock is the final destination, use the CMYK (or RGB/HEX) value from the Pantone 109 U swatch.</p>
<p>[<strong>EDIT: It\u2019s worth noting, as I left out of the original version of this post:</strong> the actual Pantone ink formula for a coated swatch will be exactly the same as the ink formula for an uncoated swatch. The CMYK, RGB and all previews will be different between the two, because they\u2019ll be designed to match the <em>result</em> of printing that specific spot color formula on the given paper type, but the actual spot colors are identical. They will, however, inevitably vary; you can\u2019t expect to print one ink on two different kinds of paper and have them look identical. Therefore, if you\u2019re looking for the same literal color to be printed on both coated and uncoated stocks identically, it may be best to try to manually match swatches, not rely on the same Pantone number for both applications. Thanks to Dave for mentioning this to me in the comments below!]</p>
<p>[Additional edit: this site has been moved off WordPress, so there are no longer comments. You live on in infamy, Dave.]</p>
<h2 id="${"dammit-gamut"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dammit-gamut"}"><span class="${"icon icon-link"}"></span></a>Dammit, gamut</h2>
<p>Have a look through a Pantone swatch book and you\u2019ll notice each individual swatch has two side-by-side samples. The left sample is printed with true Pantone ink (which, by the way, is why Pantone books are so expensive; printing hundreds of spot colors is no cheap or simple task). The right sample, meanwhile, is appended with a \u201CP,\u201D indicating it\u2019s printed with process color.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `CMYK has a limited gamut (color range) and simply cannot reproduce all colors with 100%\xA0accuracy
`;
    }
  })}
<p>You\u2019ll see that these side-by-side samples of spot color and process color are not always an exact match, with the degree of discrepancy varying from swatch to swatch. This is mostly because CMYK has a limited gamut (color range) and simply cannot reproduce all colors with 100% accuracy, so this is not a foolproof system. Also, as mentioned earlier, spot colors print a solid layer of ink, while process printing creates color with halftone dots. Still, the values listed on these Pantone swatches are generally your best bet for at least getting as close as possible.</p>
<p><img src="${"/images/post_images/ColorPost-3-1024x611.jpg"}" alt="${"The same swatch in PMS and CMYK can come out very different due to gamut restrictions"}"></p>
<p>Due to the limitations of the CMYK gamut and halftone printing, some colors will be more consistent than others when translated from Pantone.</p>
<p>When choosing colors for a client, I often try to find Pantone swatches with as little discernible difference between the spot and process sample as possible, since most clients will rarely (if ever) be printing with a true Pantone spot color ink.</p>
<p>One tip worth noting: a CMYK value that has at least one ink at or near 100% will usually give you a richer and more consistent process color output than a swatch with process colors all at low or mid values.</p>
<h2 id="${"ok-so-what-about-rgb-and-html-color"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ok-so-what-about-rgb-and-html-color"}"><span class="${"icon icon-link"}"></span></a>OK, so what about RGB and HTML color?</h2>
<p>The RGB and HTML values accompanying each Pantone swatch are the values you should use for digital media\u2014for example, using a Pantone color in an onscreen presentation or as a color for a website.</p>
<p><strong>A quick refresher on RGB vs. CMYK</strong></p>
<p>RGB is the color mode of virtually every electronic display, from your phone to your computer monitor and probably your TV, and it is effectively the opposite of CMYK. In process print, the paper starts white and brightness is subtracted with colored ink until eventually you reach black; conversely, in RGB, the background of a display is black by default, and colored light is added until eventually white is created.</p>
<p>HTML (also called HEX) is exactly the same as RGB. They\u2019re the same thing; HTML/HEX just uses a different method of entering the color values. (Hex is short for hexadecimal, a digital numbering system that includes 16 basic single-digit numbers rather than 10.)</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `\u2026deep, dark colors can be an issue in RGB since by default there\u2019s always at least a little bit of light creating and illuminating the colors your eye perceives on a backlit screen. Conversely, bright whites and neons tend to be problematic in the world of paper and ink, where adding color necessarily means darkening to a certain\xA0degree.
`;
    }
  })}
<p>RGB/HTML/HEX has a different gamut from CMYK/4-color/process, and while the two mostly overlap, there is still a narrow range of specific colors that can be printed but which cannot displayed accurately onscreen and vice versa. For example, very deep, dark colors can be an issue in RGB since by default there\u2019s always at least a little bit of light creating and illuminating the colors your eye perceives on a backlit screen. Conversely, bright whites and neons tend to be problematic in the world of paper and ink, where adding color necessarily means darkening to a certain degree. Also, this is a good point to mention that you cannot actually print white using a standard printer, since there\u2019s no way to mix colored inks together and create white. Anything you designate as white in your document will just be the plain paper color.</p>
<p>(Print and screen also have different resolutions, with print generally being much higher, but that\u2019s another topic altogether.)</p>
<p><strong>What this all means</strong></p>
<p>If you want to mimic, for example, Pantone 109 C onscreen, you should input the RGB or HTML value from the Pantone 109 C swatch. What you <em>shouldn\u2019t</em> do is pick a Pantone spot color swatch and then export that in a jpeg, or use the eyedropper tool or something like that. Again, this takes precise color control out of your hands and leaves it to the assumptions of a computer algorithm. <em>Always</em> use the values on the Pantone swatch.</p>
<p>Note that just because you manually set your swatch\u2019s CMYK value to what\u2019s on the Pantone swatch doesn\u2019t mean the RGB is correct, too. To the contrary; as I mentioned earlier, there\u2019s no precise way to convert colors from one color space to another, so if your color is correct in one color space, it\u2019s wrong in the other. Calibrate for your intended purpose. And remember that to properly output RGB color, your entire document should be set to RGB color mode.</p>
<h2 id="${"what-to-provide-to-your-clients"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-to-provide-to-your-clients"}"><span class="${"icon icon-link"}"></span></a>What to provide to your clients</h2>
<p>This depends somewhat on the client and the intended use, but in general, if you and/or your client are serious about accurate and consistent color reproduction, you should be providing your client with a suite which includes every permutation of their logo dialed up in each of these color modes (and with multiple file types for each):</p>
<ul><li>Pantone Coated</li>
<li>Pantone Uncoated</li>
<li>CMYK with values from the coated swatch</li>
<li>CMYK with values from the uncoated swatch</li>
<li>RGB (I recommend the value from the coated swatch)</li>
<li>White/reversed</li>
<li>Black</li></ul>
<p><strong>A note about black and white</strong></p>
<p>White is easy. It\u2019s all colors at max in RGB, and all colors at zero in CMYK. Even the computer won\u2019t mess that up. But black, on the other hand, works a little differently.</p>
<p>If you dial up black in RGB mode, you\u2019ll get a slightly different black than you would if you hit the black swatch while in CMYK color mode. RGB black is 0/0/0; that\u2019s simple. No light = black. But in CMYK, if you try to do the opposite and crank up all four process inks to 100% each, you <em>will</em> get a very rich black (the one called \u201CRegistration\u201D in InDesign\u2019s swatch panel), but you\u2019ll also waste a <em>ton</em> of ink if you max out every color in your printer to create black.</p>
<p>I could go further into this, but for now, just know that standard CMYK black is dialed in as 0/0/0/100, and you should generally just go with that for things like black body copy. You can make your blacks darker and richer by mixing the four process colors if you so choose, but at the expense of more inks being used on every single instance of black coloring.</p>
<p><strong>So does this mean that I should give my client two sets of black files?</strong></p>
<p>If you want to be incredibly picky, you can. But it\u2019s generally safe to assume that a client\u2019s only use for a black logo is in print. There isn\u2019t any restriction on color in onscreen media\u2014no cheap print jobs, no costly ink, no black-and-white newspaper ads\u2014so it\u2019s probably ok to only make black logos using whatever CMYK black formula you settle on.</p>
<h2 id="${"great-i-read-this-whole-thing-so-now-my-colors-will-always-match-perfectly-right"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#great-i-read-this-whole-thing-so-now-my-colors-will-always-match-perfectly-right"}"><span class="${"icon icon-link"}"></span></a>Great! I read this whole thing, so now my colors will always match perfectly, right?</h2>
<p>Well\u2026in a word, no.</p>
<p>Properly utilizing Pantone colors is your best chance at fighting color discrepancy, yes. But this should be considered more of a loose guide to a journey with many variables than any guarantee of success.</p>
<p>The fact is, every printer is different. You could send the same file to ten different printers and get ten slightly different results\u2014or even use the same printer all ten times and wind up with variances.</p>
<p>All paper is different, too, and paper and ink are both sensitive; conditions like temperature, humidity, light, and even the mere weight of the paper can affect printing results. But even a perfect process printer in perfect conditions couldn\u2019t replicate every single color the eye can perceive with 100% accuracy; that\u2019s impossible. And even if it weren\u2019t and all your print materials <em>were</em> perfectly matched, every screen in the world would still be different, capable of being modified to display color differently and to be brighter or dimmer than the one you\u2019re looking at.</p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Color isn\u2019t a precise studio recording you can play back at will; it\u2019s an ongoing live\xA0concert.
`;
    }
  })}
<p>Put bluntly, there is no true perfection in color reproduction. You won\u2019t achieve it. Color isn\u2019t a precise studio recording you can play back at will; it\u2019s an ongoing live concert. The same notes may be played on the same instruments night after night, but the production is always unique to some varying degree.</p>
<p>If color is extremely important to you, your only solution may be testing and tinkering over and over and over until you finally get acceptably close to the results you desire. But hopefully, now you have the tools to avoid some of the pitfalls along that journey, to get as close as you can, and to explain to clients, when necessary, how that whole process works.</p>`;
});
