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
  default: () => Announcing_quina_my_first_app,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2749e1b7 = require("./index-2749e1b7.js");
var import_PullQuote_effacfdf = require("./PullQuote-effacfdf.js");
var import_SideNote_5c625ecb = require("./SideNote-5c625ecb.js");
var import_CalloutPlusQuote_8515db1f = require("./CalloutPlusQuote-8515db1f.js");
var import_Callout_7f4de651 = require("./Callout-7f4de651.js");
const metadata = {
  "title": "Announcing Quina (My First App)!",
  "date": "2020-12-10",
  "updated": "2021-02-11",
  "categories": ["javascript", "design", "web", "vue"],
  "coverImage": "social-share-image.png",
  "coverWidth": 120,
  "coverHeight": 63,
  "excerpt": "The story of building Quina, a word game Progressive Web App built with Nuxt, and launched on the Google Play Store."
};
const Announcing_quina_my_first_app = (0, import_index_2749e1b7.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `About six months after I wrote this post, I published <a href="${"https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/"}">a longer, more technically in-depth version of this article on CSS Tricks</a>.
`;
    }
  })}
<p>One of my favorite code hobbies is making games on <a href="${"https://codepen.io"}" rel="${"nofollow"}">CodePen</a>. I\u2019ve got a handful I\u2019ve created in the online sandbox code editor over the years\u2014<a href="${"https://codepen.io/collinsworth/pen/MWwXpLd"}" rel="${"nofollow"}">Connect Four</a>, <a href="${"https://codepen.io/collinsworth/pen/Pymdxo"}" rel="${"nofollow"}">Color Flood</a>, <a href="${"https://codepen.io/collinsworth/pen/oNbavJN"}" rel="${"nofollow"}">Hangman</a> and <a href="${"https://codepen.io/collinsworth/pen/XwPXrM"}" rel="${"nofollow"}">sliding puzzles</a>, to name a few\u2014but I\u2019ve wanted to build a legit, standalone app for a long time now.</p>
<p>As a secondary goal, I wanted to get that app listed in a major app store. There are plenty of hurdles for web devs in this regard; the app stores out there are mostly full of native apps (apps built with native iOS or Andriod code, rather than web languages).</p>
<p>However, at some point, I found out that the Google Play Store allows certain web apps to be listed, which was the breakthrough I was looking for. This past August, I decided it was finally time to start seriously working toward my app goal.</p>
<p>Finally, after four months, dozens of nights and weekends, hundreds of git commits, and more debugging-related curse words than I\u2019d care to try counting, I\u2019m thrilled to introduce my first app ever: <strong><a href="${"https://quina.app/"}" rel="${"nofollow"}">Quina</a></strong>!</p>
<p><img src="${"/images/post_images/tutorial-1-1024x576.png"}" alt="${"A preview of Quina on mobile"}"></p>
<p>Quina is a classic word game where users attempt to guess a secret five-letter word.</p>
<h2 id="${"what-is-quina"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-quina"}"><span class="${"icon icon-link"}"></span></a>What is Quina?</h2>
<p><strong>Quina is a classic word game</strong>. I didn\u2019t invent it by any stretch, but I had a version in mind that I\u2019ve never seen anywhere out there on the web before. (The original iteration is a pen-and-paper game called <a href="${"https://en.wikipedia.org/wiki/Bulls_and_Cows"}" rel="${"nofollow"}">Bulls and Cows</a>, though it\u2019s known by other names, too.)</p>
<p>The idea is pretty straightforward: you have ten chances to guess a secret five-letter code word. After each guess, you get a clue that reveals some info about how close your guess is to that code word. I suppose you\u2019d primarily consider it a word game, but there\u2019s a good amount of strategy and logic involved as well.</p>
<p>If this sounds familiar, it\u2019s probably because you\u2019ve either played the original, or played its most popular variant; <a href="${"https://en.wikipedia.org/wiki/Mastermind_(board_game)"}" rel="${"nofollow"}">Mastermind</a> is another version of the same game.</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Quina is Latin for \u201Cfive at a time,\u201D since the game is played with five-letter\xA0words.
`;
    }
  })}
<p>By the way, \u201CQuina\u201D was chosen for the name since it\u2019s Latin for \u201Cfive at a time\u201D (according to a Google search, at least; I sure don\u2019t speak the language). The original version of the game is played with four letters instead of five, so the name seemed fitting.</p>
<p>I don\u2019t know how that word was <em>meant</em> to be pronounced, but I say it, \u201CQUINN-uh.\u201D (I\u2019m probably wrong, but hey, it\u2019s my game. I can call it whatever I want. Just ask the guy who invented gifs.)</p>
<h2 id="${"how-to-install-quina"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-to-install-quina"}"><span class="${"icon icon-link"}"></span></a>How to install Quina</h2>
<p>There are two ways to install Quina:</p>
<ul><li>You can download the <a href="${"https://play.google.com/store/apps/details?id=app.quina.collinsworth"}" rel="${"nofollow"}">Quina Android App from the Google Play Store</a>. (It\u2019s $2.99, but all content is unlocked by default.)</li>
<li>You can install the freemium version by visiting <a href="${"https://quina.app/"}" rel="${"nofollow"}">quina.app</a>.</li></ul>
<p>When visiting the website, you <em>should</em> see a prompt like this one (though it will depend on your browser; if you don\u2019t see the prompt, you can <a href="${"https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/"}" rel="${"nofollow"}">follow these directions</a>):</p>
<p><img src="${"/images/post_images/image-1024x124.png"}" alt="${"Add Quina to Home Screen? Install!"}"></p>
<p>You should see the \u201CAdd Quina to home screen\u201D prompt when visiting quina.app.</p>
<p>You could also just play the game <em>on</em> the website, in your browser, if you want to. It\u2019s designed to work best as a mobile app, however.</p>
<h2 id="${"game-features"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#game-features"}"><span class="${"icon icon-link"}"></span></a>Game features</h2>
<p>Beyond the core word game, Quina has a number of features to hopefully keep it entertaining and engaging for a good, long while.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `The images below are from the Google Play Store app listing, so they\u2019re a bit more marketing-y than I\u2019d normally choose. Sorry.
`;
    }
  })}
<ul><li>Quina offers three different word sets to help players find the right challenge level: <strong>Basic</strong>, <strong>Tricky</strong>, and <strong>Random</strong>. All told, there are about 1,200 code words between the three.<ul><li>Basic sticks to common, everyday English words; Tricky has some curveballs and harder words; and Random just lets you enjoy the challenge of not knowing.</li></ul></li>
<li>Players also have the option to <strong>start the game with a hint</strong>, if they want (either a small one or a big one), to make the game a bit more accessible.</li>
<li>There\u2019s a quick-start tutorial, as well as a more in-depth explanation of the rules.</li>
<li>As you play, you can mark up your guesses to help you deduce the meaning behind the clues.</li></ul>
<p><img src="${"/images/post_images/tutorial-3-1024x576.png"}" alt="${"A demonstration of guess letters either crossed out or highlighted"}"></p>
<ul><li>Quina tracks your <strong>game history</strong> and shows your <strong>statistics</strong> (data is saved in your device\u2019s local storage; no need to sign in or create an account, and no security risks)!</li></ul>
<p><img src="${"/images/post_images/tutorial-4-1024x576.png"}" alt="${"Quina's stats screen, showing win streaks, win/loss record across game types, and other stats."}"></p>
<ul><li>The game also offers <strong>25 awards</strong> you can unlock for specific achievements, like winning five games in a row, or playing a certain number of games without hints.</li>
<li>There\u2019s a built-in <strong>dark mode</strong> and the option to reduce motion, both of which detect and default to your OS preference.</li>
<li>Finally, just to give it that native feel, the game also uses (sparing) sound effects and device vibration.</li></ul>
<p><img src="${"/images/post_images/02-Google-Pixel-4-Front-1024x923.png"}" alt="${"A demo of how light and dark mode look"}"></p>
<h2 id="${"the-tech-behind-the-app"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-tech-behind-the-app"}"><span class="${"icon icon-link"}"></span></a>The tech behind the app</h2>
<p>For those into such nerdery: Quina is a <a href="${"https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/"}" rel="${"nofollow"}">Progressive Web App</a> (PWA) built with <a href="${"https://nuxtjs.org"}" rel="${"nofollow"}">Nuxt</a>. If you\u2019re not familiar with those terms:</p>
<p>Progressive Web Apps are essentially websites, but with some extra features that make them behave like native apps.</p>
<p>There\u2019s a lot more detail in the link above, but the main features of a PWA include: the ability to actually <em>install</em> the website/web app on your device and launch it fullscreen, just like an ordinary native app; to run offline (thanks to JavaScript service workers); and access to device functionality like push notifications and vibration, via modern browser enhancements.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If you\u2019ve ever visited a website and been prompted to add it to your home screen, that website was probably a progressive web app.
`;
    }
  })}
<p>You can build a PWA with anything you might use to build a website; plain ol\u2019 HTML, CSS and JavaScript will work just fine, and you definitely don\u2019t <em>need</em> to use a framework (let alone one as robust as Nuxt). As I considered the options, however, it became clear that Nuxt was my #1 choice, and one I\u2019ve never regretted.</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Progressive Web Apps are essentially websites, but with some extra features that make them behave like native\xA0apps.
`;
    }
  })}
<p><strong>Nuxt</strong> is a framework for building apps with Vue (Vue being a JavaScript component framework). As the name implies, Nuxt is the Vue equivalent of React\u2019s Next.js, if that helps.</p>
<p>In any case: Nuxt helps you create web apps by giving you all the things you might want while building with Vue, such as routing and global state management (you create pages just by plopping files in a <code>/pages</code> directory; how novel!), and wraps them all up in one easy-to-use package.</p>
<h3 id="${"why-nuxt"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#why-nuxt"}"><span class="${"icon icon-link"}"></span></a>Why Nuxt?</h3>
<p>The main reason I personally chose Nuxt was familiarity; Vue is my most-used JavaScript framework. It\u2019s conveniently also one of my favorites, and I\u2019d used Nuxt before (albeit in a much more limited context). I also wanted a good excuse to learn more about Vue Router and Vuex (both bundled in Nuxt) than the bits I\u2019d picked up from my day job. (Mission accomplished there.)</p>
<p>That said, however: I considered using <a href="${"https://svelte.dev/"}" rel="${"nofollow"}">Svelte</a> (really the only other contender in the \u201Cfavorites\u201D category), but decided its ecosystem was still a little too young and too small for a project this ambitious and with this many unknowns. I was confident that whatever issues I might have run into with Nuxt, its ecosystem was large enough that I could find a solution. With Svelte, I was concerned that I might have to hand-roll more things than I wanted to (especially with the recent upheaval in its own pre-1.0 app framework, <a href="${"https://sapper.svelte.dev/"}" rel="${"nofollow"}">Sapper</a>). I would still reach for Svelte on a project with smaller scope or fewer unknowns, though, and eagerly look forward to what will come out of it in the next year. I\u2019m sure I\u2019ll use it again.</p>
<p>Back to Nuxt, though: appealingly, Nuxt also has a rich library of optional first-party modules available to make integrations and advanced functionality easier.</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `I was repeatedly amazed while using Nuxt how easy it was to do anything I wanted to do. There was always a way, and most of the time, there was already a module built for\xA0it,\xA0too.
`;
    }
  })}
<p>For example: actually getting all the features of a PWA up and running on your own would be challenging to say the least, but Nuxt has an installable <a href="${"https://pwa.nuxtjs.org/"}" rel="${"nofollow"}">PWA module</a> that handles most of the heavy lifting for you with a few lines of config! There are also plugins for analytics, connecting to third-party services and APIs, and all kinds of other things.</p>
<p>The game actually runs as a static site, however (albeit with a healthy dose of JavaScript); Nuxt can either build out your finished product to run on a Node server, or as a statically generated site. I chose the latter, since there isn\u2019t really anything I need done server-side (thanks mainly to the fact that all of Quina\u2019s data is saved in local storage, rather than in a database).</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `I did have a version of Quina working with Firebase authentication and Firestore for permanent accounts and data storage, but I abandoned that when security became too difficult and I realized it was overkill for what I was trying to do.
`;
    }
  })}
<p><img src="${"/images/post_images/01-Google-Pixel-4-Front-879x1024.jpg"}" alt="${"The Quina home screen"}"></p>
${(0, import_index_2749e1b7.v)(import_PullQuote_effacfdf.P, "PullQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Other than what&#39;s listed here, everything in the app is original and coded from scratch (including the brand and all the\xA0CSS).
`;
    }
  })}
<p>The app is deployed on <a href="${"https://www.netlify.com/"}" rel="${"nofollow"}">Netlify</a>, by the way, in case you were curious. (That part was never a question; Netlify is amazing.)</p>
<p>Other than the previously mentioned Nuxt PWA module, the only additional tech/package things I used were:</p>
<ul><li>A web audio library called <a href="${"https://howlerjs.com"}" rel="${"nofollow"}">HowlerJS</a> (mostly to handle sound latency on iOS, which, it turns out, is a real problem, especially when working with synchronous sound);</li>
<li>An NPM package called <a href="${"https://github.com/catdad/canvas-confetti"}" rel="${"nofollow"}">Canvas Confetti</a> (to generate the fireworks on the win screen);</li>
<li>The <a href="${"https://github.com/Akryum/vue-observe-visibility"}" rel="${"nofollow"}">vue-observe-visibility</a> library for some nice scroll effects; and</li>
<li>Some free third-party sound effects, mentioned more specifically in the app\u2019s <a href="${"https://quina.app/faq/"}" rel="${"nofollow"}">FAQ</a> page.</li></ul>
<p>Other than what\u2019s listed here, everything in the app is original and coded from scratch (including the brand and all the CSS).</p>
<h2 id="${"building-an-android-app-from-a-pwa"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#building-an-android-app-from-a-pwa"}"><span class="${"icon icon-link"}"></span></a>Building an Android App from a PWA</h2>
<p>At the outset, I knew it was <em>possible</em> to list a PWA in the Google Play Store. (Not Apple\u2019s, though; Apple is much more restrictive\u2014some might say antagonistic\u2014when it comes to the web these days.) I didn\u2019t know how much work it would be to get Quina listed in the Play Store, but I quickly found out.</p>
<p>Before going too far, though: I should mention that turning a web app into a proper Android app is possible because of a thing called Trusted Web Activity (or TWA).</p>
<p>TWA is a technical term, but what it means is: you have the ability to create an Android app that doesn\u2019t have any real code or content of its own; it\u2019s just a shell, built to load one specific web app using your device\u2019s browser, and display it like a native app.</p>
<p>That\u2019s what Quina and any other TWA app is; effectively, a browser that auto-loads a specific web URL, disguised as an app.</p>
<p>It\u2019s called Trusted Web Activity because in order to make it work right, you need to bundle your app with a secret key that matches a key that lives on your website. (More on that in a bit.)</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `That\u2019s what Quina and any other TWA app is; effectively, a browser that auto-loads a specific web URL, disguised as an\xA0app.
`;
    }
  })}
<p>It\u2019s also <em>required</em> that the URL you\u2019re linking to qualifies as a progressive web app; <a href="${"https://web.dev/"}" rel="${"nofollow"}">web.dev</a> offers tests to certify that. Mostly it\u2019s making sure you have the proper PWA manifest, a service worker (to make the app available offline, like a native app), and that your site loads over HTTPS. I won\u2019t go into any of those here, since there are better resources already out there on the ins and outs of PWAs.</p>
<h3 id="${"generating-an-app-from-web-content"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#generating-an-app-from-web-content"}"><span class="${"icon icon-link"}"></span></a>Generating an app from web content</h3>
<p>There are at least a dozen ways you can go about generating a native app from web content. There are apps and frameworks like NativeScript, Cordova, React Native, Ionic, and others that all promise the ability to build a native iOS and/or Android app in the web languages you already know (HTML, CSS, and JavaScript).</p>
<p>I found each of those to have a steep learning curve, however, and I wasn\u2019t ready to invest the time into learning one just for this project. It seemed to me that each one came with a promise of \u201Cbuild for the web!\u201D with the strong hidden fine print of \u201Cbut not really; you gotta learn this thing first.\u201D So while they\u2019re certainly much better than sitting down to learn Android development, they didn\u2019t really live up to the promise as much as I would\u2019ve hoped.</p>
<p>There are also blog posts online that walk you through the steps to generate an Android app using Android Studio, that you can theoretically follow along with even without knowing what you\u2019re doing, and I tried some of those. But (as with most things Google-related), either the tech had already changed too much in the time since the post was written to follow along smoothly, or it just wasn\u2019t well-explained.</p>
<p>Each dead end was deflating, but each one also helped me get a glimpse of the bigger picture and move closer to the end goal.</p>
<p>It was when I finally stumbled upon a marvelous little CLI tool called <a href="${"https://developers.google.com/web/android/trusted-web-activity/quick-start"}" rel="${"nofollow"}">Bubblewrap</a> that I knew I could finally stop looking.</p>
<h3 id="${"bubblewrap-at-a-glance"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#bubblewrap-at-a-glance"}"><span class="${"icon icon-link"}"></span></a>Bubblewrap at a glance</h3>
<p>The topic of using Bubblewrap to generate an Android app could easily take up its own 5,000-word blog post, but in short: </p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Bubblewrap is a command line interface (CLI) tool that asks you to install some dependencies, then simply generates an Android app for you based on your progressive web app&#39;s URL.
`;
    }
  })}
<p>I don\u2019t want to short-change Bubblewrap, because it\u2019s undeniably amazing, and odds are good that my app wouldn\u2019t be in the store without it. But again, as with anything related to Google tech: <em>it\u2019s not quite that simple</em>.</p>
<p>The first hurdle is getting all the dependencies installed in the proper location. Bubblewrap is really explicit about where it wants to find its dependencies, and each one is pretty chonky. The documentation I followed was already outdated, but fortunately, I was able to Google for some updated answers (as I recall, I needed to download an older version of one of the dependencies).</p>
<p>After that, the main issue is getting your app\u2019s key synced up with Google Play.</p>
<p>Again, I won\u2019t go too far into detail here (maybe I\u2019ll write a separate post one day), but as mentioned before: TWA apps check your URL for the app\u2019s encrypted key, and if found, the app knows it can trust the website and load it as the app\u2019s contents.</p>
<p>This was the most challenging part, honestly. Google Play offers a feature where <em>they</em> generate a key, and you just copy and upload it to your site. That probably would\u2019ve been the easier way to go, but Bubblewrap requires you to <em>provide</em> a key when it generates your app, and that\u2019s not as simple as just pointing it to a file; there\u2019s passwords, encryption, and specific naming conventions involved. Plus, since everything is happening on the command line, you need to be <em>really</em> careful about special characters in passwords.</p>
<p>So regardless of what you do here, you\u2019ll need to jump through some hoops. (I wound up using <code>keytool</code> to generate a key and used that, because I\u2019d already taken that approach in a failed tutorial.)</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `If the key hosted on your site doesn\u2019t match the key in your Play Store app, the app will still work, but it will just function like an ordinary browser window, rather than looking like a native app.
`;
    }
  })}
<p>The other really tricky part was that both Google and Bubblewrap ask you for an app name in a format like <code>app.builder.build</code>. It was frustratingly impossible to figure out what was <em>expected</em> to provide in that format\u2014some I saw started with <code>app</code>, others with <code>com</code>; some had three parts, others two. It seemed like there must be some proper protocol to follow here, and I didn\u2019t know what it was.</p>
<p>Turns out, there\u2019s no real rule that I can find here, other than: make it unique. The format is apparently a Java convention. (Android apps are often built with Java, it would seem.) Typically, it appears most apps are named such as <code>tld.developerName.appName</code>, but again, the only real important thing is uniqueness.</p>
${(0, import_index_2749e1b7.v)(import_SideNote_5c625ecb.S, "SideNote").$$render($$result, {}, {}, {
    default: () => {
      return `By default, Bubblewrap validates that your live web app meets all PWA criteria. Quina was failing the offline test for some reason even though I knew it was valid, but helpfully, there is a flag to skip the check.
`;
    }
  })}
<h3 id="${"the-google-play-store-is-awful-to-use"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-google-play-store-is-awful-to-use"}"><span class="${"icon icon-link"}"></span></a>The Google Play Store (is awful to use)</h3>
<p>This section is mainly just going to be me griping, but if you\u2019re gonna go down this route, you should be warned about this stuff. Some of my least favorite hurdles:</p>
<ul><li>You have to pay Google $25 and apply for a developer account just to start (probably reasonable, but still feels kinda steep).</li>
<li>Starting January 2021, Google will not allow any payment providers other than Google Pay, which charges a 30% (<em>thirty percent!</em>) fee\u2014ten times what similar payment providers like Stripe charge. (And yes, this applies to app purchases, too\u2014which means Google gets almost $1 of every $2.99 download).<ul><li><strong>EDIT:</strong> apparently this change may be legally contested by some US states.</li></ul></li>
<li>You cannot delete an app you\u2019ve created in the Google Play developer console, ever. Even if you just typed a few things into a text box and never did anything with it, you still can\u2019t delete that.</li>
<li>This means if you mess something up and need to start over, you can never use that same app ID again. You just gotta pick another one, create a new app, and upload a new package.</li>
<li>If you make your app free, you can never make it paid again, even if it hasn\u2019t actually launched yet. So you\u2019ll have to just start over with a whole new app, which means filling out <em>allllll</em> the fields all over again. (And again: it\u2019ll need a new unique app ID.)</li>
<li>If you let Google handle signing your encrypted key, you can never opt out of that choice. You just have to create a new app and generate a new bundle.</li>
<li>You can\u2019t even launch a <em>test</em> app without providing several different images for the store page and filling out all the required text fields.</li>
<li>Reviews are said to take 1\u20132 days in most cases; I found it was actually <em>much</em> longer than that (though updates once the app was initially approved typically take about a day).</li>
<li>Once, Google blocked my release for violating a policy that hadn\u2019t even gone into effect yet, and wouldn\u2019t for another two months. I never heard back on that dispute, either, so I just worked around it. (<strong>Edit</strong>: they got back to me eight days later, but by then the workaround was already in place.)</li>
<li>Things are buried in hard-to-find locations.</li></ul>
<p><strong>tl;dr: Google sucks</strong>. But hey, at least they let you list PWAs in their store, which is more than I can say for Apple.</p>
<p><strong>The upside of all of this</strong>, however, is that with a TWA app, unless you\u2019re changing a fundamental detail of the package itself (like the app ID or PWA URL), <em>you never need to upload a new package to the app store</em>; you can just update your actual PWA running on the web, and the Android app will pick up the changes when it launches.</p>
<p>As a side note, however: I <em>did</em> find some unexpected drawbacks to the \u201Cbuild once, run everywhere\u201D approach\u2014namely, that your interactive elements have to be able to handle clicks, right-clicks, touches, long-presses, swipes, and all types of key presses (pun intended) without those events doubling up or conflicting with each other. Something to keep in mind with this approach to development.</p>
<h3 id="${"monetization"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#monetization"}"><span class="${"icon icon-link"}"></span></a>Monetization</h3>
<p>While making money on Quina was never a primary goal, I put a lot of time and effort into the game, and I did hope that by getting it into a major app store, it might generate some revenue (though my expectations were never high; just hoping for some beer money here, maybe).</p>
${(0, import_index_2749e1b7.v)(import_CalloutPlusQuote_8515db1f.C, "CalloutPlusQuote").$$render($$result, {}, {}, {
    default: () => {
      return `Initially, I wanted to do a free app, with occasional (not-too-frequent) requests to support the app with a donation, and an incentive to do so in order to unlock new features. However, the previously mentioned Google payment restriction made this complicated.
`;
    }
  })}
<p>If I went down that road, I would be locked into Google Pay (and its extortive fees) for support donations, which I wasn\u2019t even sure I could implement in a web app in the first place. Certainly not as easily as, say, Stripe.</p>
<p>What I eventually settled on was:</p>
<ul><li>Making the web version free, but with some content unlocked with a supporting donation;</li>
<li>Making the Android app paid, but with all content unlocked by default.</li></ul>
<p>You might be wondering how I achieved that, since it\u2019s all the same web app under the hood in both situations. Turns out, all Android apps send a unique header with their requests, so it was easy enough to tell which traffic was coming from my Android app, and set up conditional checks for content based on that header. (I even created custom <code>&lt;WebOnly&gt;</code> and <code>&lt;AndroidOnly&gt;</code> Vue components for content relevant only to one of the two.)</p>
<p>Incidentally, there\u2019s also a free option on the web version, just because I wanted the content to be accessible for anyone and everyone.</p>
<h2 id="${"final-thoughts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#final-thoughts"}"><span class="${"icon icon-link"}"></span></a>Final thoughts</h2>
<p>I would consider Quina my biggest achievement as a developer so far. Though I\u2019ve made websites, small web apps, little PWAs and novel browser games as side projects before, none has ever had this breadth of scope, and an actual Android app is brand-new territory for me!</p>
<p>I\u2019m proud of the work I\u2019ve done here, even if nobody plays it. But I hope you\u2019ll give it a shot, and that you enjoy it if you do. (And if so, I\u2019d love it if you\u2019d <a href="${"https://play.google.com/store/apps/details?id=app.quina.collinsworth"}" rel="${"nofollow"}">leave a review on the Google Play Store</a>.)</p>
<p>Thanks for reading! Feel free to <a href="${"https://rickyjanuari.com/contact?from_page=announcing_quina"}" rel="${"nofollow"}">reach out</a> if you have any questions or comments.</p>`;
});
