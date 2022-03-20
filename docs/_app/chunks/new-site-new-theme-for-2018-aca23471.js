import{S as Ho,i as No,s as qo,w as Lo,k as d,e as l,t as n,x as Bo,m,c as i,a as f,h,d as t,b as s,a1 as Ve,y as Go,g as r,H as o,q as Do,o as Mo,B as Ro}from"./vendor-b62d7b9b.js";/* empty css                                               */import{S as zo}from"./SideNote-4caa8e18.js";function Ko(Xe){let p;return{c(){p=n("This site is no longer on WordPress, so the theme described here can't actually be seen anywhere, and the features described mostly aren't on this website any longer.")},l(u){p=h(u,"This site is no longer on WordPress, so the theme described here can't actually be seen anywhere, and the features described mostly aren't on this website any longer.")},m(u,v){r(u,p,v)},d(u){u&&t(p)}}}function Oo(Xe){let p,u,v,Ze,ve,b,et,j,tt,ot,be,Y,at,ge,g,lt,$,it,st,Ie,I,_,ue,rt,_e,k,nt,H,ht,ft,ke,c,dt,N,mt,pt,q,ut,ct,Pe,y,yt,L,wt,vt,B,bt,gt,Ee,Q,It,Se,V,X,Z,eo,xe,P,_t,G,kt,Pt,Ae,E,Et,D,St,xt,Ce,S,At,M,Ct,Tt,Te,ee,Ft,Fe,x,A,ce,Wt,We,w,jt,R,$t,Ht,z,Nt,qt,je,te,oe,ae,to,$e,le,Lt,He,ie,se,oo,Ne,re,Bt,qe,ne,he,ao,Le,fe,Gt,Be,C,T,ye,Dt,Ge,F,Mt,K,Rt,zt,De,W,Kt,O,Ot,Jt,Me,J,we,Ut,Yt,Re;return p=new zo({props:{$$slots:{default:[Ko]},$$scope:{ctx:Xe}}}),{c(){Lo(p.$$.fragment),u=d(),v=l("p"),Ze=n("It\u2019s been a goal of mine for a very long time to completely redesign my\xA0WordPress theme from scratch. Finally, that goal is a reality!"),ve=d(),b=l("p"),et=n("The first time I built my own site, back in (I\u2019d guess) 2013, I used "),j=l("a"),tt=n("Adobe Muse"),ot=n(", which was a good fit for my lack of skill at the time, but a tool that lost relevance as I learned to code."),be=d(),Y=l("p"),at=n("In 2014, I launched a portfolio site that I coded (mostly) from scratch. Looking back at it now makes me cringe a bit; knowing how to make something work and how to build it correctly are two very different things."),ge=d(),g=l("p"),lt=n("I built a\xA0WordPress site on the "),$=l("a"),it=n("Divi"),st=n("\xA0theme roughly three years ago. At first, it was built entirely on Divi\u2019s visual page builder, and that was handy for creating new layouts quickly. But the more I learned about\xA0WordPress (and child themes in particular), the less necessary it was to have the parent theme around. It was extra bloat for mostly features I didn\u2019t use at all. So for a very long time, starting over with my own theme, built from scratch and completely personalized just for this site, has been a goal\u2014and now I finally get to check it off."),Ie=d(),I=l("h2"),_=l("a"),ue=l("span"),rt=n("About the theme"),_e=d(),k=l("p"),nt=n("Rather than beginning with a parent theme or a starter theme like "),H=l("a"),ht=n("Underscores"),ft=n(", I wanted this theme to be built completely from scratch. No borrowed or pre-written code at all; 100% original."),ke=d(),c=l("p"),dt=n("For building, I began with "),N=l("a"),mt=n("Local by Flywheel"),pt=n(". Yes, I work for "),q=l("a"),ut=n("Flywheel"),ct=n(", but I honestly don\u2019t believe there\u2019s a better tool for running\xA0WordPress sites locally\u2014particularly given that my live site is hosted on Flywheel already, which means that pulling a copy of my live site to my local machine for development (and then pushing it back live when ready) was all as easy as a click of a button, thanks to the Push to Flywheel feature."),Pe=d(),y=l("p"),yt=n("I also implemented "),L=l("a"),wt=n("CodeKit"),vt=n(", for minification, auto browser refreshing, and "),B=l("a"),bt=n("Sass"),gt=n(" compilation. Bonus: CodeKit works with Local seamlessly."),Ee=d(),Q=l("p"),It=n("Speaking of Sass: it\u2019s invaluable. During theme development, I set up variables for breakpoint widths, colors, some font families, and created a mixin for flexbox settings."),Se=d(),V=l("p"),X=l("a"),Z=l("img"),xe=d(),P=l("p"),_t=n("(That\u2019s the "),G=l("a"),kt=n("ColorHelper"),Pt=n(" Sublime extension creating the color boxes, by the way.)"),Ae=d(),E=l("p"),Et=n("I also got to take the opportunity to finally learn and implement "),D=l("a"),St=n("Timber"),xt=n(". I\u2019d been hearing too many good things for too long to ignore it any more."),Ce=d(),S=l("p"),At=n("I love the way Timber makes template files so much cleaner, abstracting output code to bare minimums and eliminating the need to deal with the loop directly. Like any framework, though, there\u2019s a little bit of a learning curve, particularly for some of WordPress\u2019s more complex functionality, like comments and pagination. It\u2019s very well documented, though. I would recommend it, and look forward to using it again. I\u2019ll have to add it to my "),M=l("a"),Ct=n("essential tools"),Tt=n("\xA0for\xA0WordPress development."),Te=d(),ee=l("p"),Ft=n("The theme runs mostly off a single index.php file which dynamically pulls in the appropriate Timber .twig files based on context. In fact, aside from the index file, the theme\u2019s only PHP template files are the footer and header, the functions file, and a sidebar file."),Fe=d(),x=l("h2"),A=l("a"),ce=l("span"),Wt=n("Advanced Custom Fields + CSS Grid"),We=d(),w=l("p"),jt=n("I also took this opportunity to use CSS grid on a project for the first time\u2014specifically, on the "),R=l("a"),$t=n("design"),Ht=n(" page. It turns out, CSS grid mixes really well with "),z=l("a"),Nt=n("Advanced Custom Fields"),qt=n(", particularly the Pro Repeater field. I set up fields for images, height and width, to control the size of images in the grid:"),je=d(),te=l("p"),oe=l("a"),ae=l("img"),$e=d(),le=l("p"),Lt=n("The width and height have max values, and a Sass loop (and a media query) sets CSS for those values with classes:"),He=d(),ie=l("p"),se=l("img"),Ne=d(),re=l("p"),Bt=n("I\u2019ve been using the same logo for myself since I was in school. On a whim, I decided to create a new one that more closely matches where I am now; more focused on development and applying design principles to the web."),qe=d(),ne=l("p"),he=l("img"),Le=d(),fe=l("p"),Gt=n("As in the header, the logo\u2019s \u201Cicon\u201D form simply removes the lettering, leaving only two sets of brackets, implying code (particularly delving into objects or arrays), with the middle two characters highlighted and in the vague shape of a \u201CJ\u201D and a \u201CC\u201D (my initials, of course). I like to think it also hints at my own duality of designer/developer."),Be=d(),C=l("h2"),T=l("a"),ye=l("span"),Dt=n("The fonts"),Ge=d(),F=l("p"),Mt=n("I\u2019ve owned "),K=l("a"),Rt=n("AmsiPro"),zt=n("\xA0for years, and I\u2019ve been waiting to use it on a project since I first saw it. I finally decided its personality was right for this project. It\u2019s bold and friendly (particularly the ultra weight used for this site\u2019s headers), but completely utilitarian and readable at lighter weights, as body copy."),De=d(),W=l("p"),Kt=n("I wanted to keep the font load fairly light, so only occasional splashes of "),O=l("a"),Ot=n("Sagona"),Jt=n("\xA0Book Italic are used in places to highlight text. I\u2019ve liked Sagona for a long time. I appreciate the hints of happiness in this Clarendon-esque serif, and I feel that makes it pair well with Amsi Pro."),Me=d(),J=l("p"),we=l("strong"),Ut=n("Thanks for reading!"),Yt=n(" It\u2019s a personal goal to blog more this year and share some of the things I\u2019ve learned over the past few, so this should just be the first of many new posts in the new year. Happy 2018!"),this.h()},l(e){Bo(p.$$.fragment,e),u=m(e),v=i(e,"P",{});var a=f(v);Ze=h(a,"It\u2019s been a goal of mine for a very long time to completely redesign my\xA0WordPress theme from scratch. Finally, that goal is a reality!"),a.forEach(t),ve=m(e),b=i(e,"P",{});var U=f(b);et=h(U,"The first time I built my own site, back in (I\u2019d guess) 2013, I used "),j=i(U,"A",{href:!0,rel:!0});var lo=f(j);tt=h(lo,"Adobe Muse"),lo.forEach(t),ot=h(U,", which was a good fit for my lack of skill at the time, but a tool that lost relevance as I learned to code."),U.forEach(t),be=m(e),Y=i(e,"P",{});var io=f(Y);at=h(io,"In 2014, I launched a portfolio site that I coded (mostly) from scratch. Looking back at it now makes me cringe a bit; knowing how to make something work and how to build it correctly are two very different things."),io.forEach(t),ge=m(e),g=i(e,"P",{});var ze=f(g);lt=h(ze,"I built a\xA0WordPress site on the "),$=i(ze,"A",{href:!0,rel:!0});var so=f($);it=h(so,"Divi"),so.forEach(t),st=h(ze,"\xA0theme roughly three years ago. At first, it was built entirely on Divi\u2019s visual page builder, and that was handy for creating new layouts quickly. But the more I learned about\xA0WordPress (and child themes in particular), the less necessary it was to have the parent theme around. It was extra bloat for mostly features I didn\u2019t use at all. So for a very long time, starting over with my own theme, built from scratch and completely personalized just for this site, has been a goal\u2014and now I finally get to check it off."),ze.forEach(t),Ie=m(e),I=i(e,"H2",{id:!0});var Qt=f(I);_=i(Qt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ro=f(_);ue=i(ro,"SPAN",{class:!0}),f(ue).forEach(t),ro.forEach(t),rt=h(Qt,"About the theme"),Qt.forEach(t),_e=m(e),k=i(e,"P",{});var Ke=f(k);nt=h(Ke,"Rather than beginning with a parent theme or a starter theme like "),H=i(Ke,"A",{href:!0,rel:!0});var no=f(H);ht=h(no,"Underscores"),no.forEach(t),ft=h(Ke,", I wanted this theme to be built completely from scratch. No borrowed or pre-written code at all; 100% original."),Ke.forEach(t),ke=m(e),c=i(e,"P",{});var de=f(c);dt=h(de,"For building, I began with "),N=i(de,"A",{href:!0,rel:!0});var ho=f(N);mt=h(ho,"Local by Flywheel"),ho.forEach(t),pt=h(de,". Yes, I work for "),q=i(de,"A",{href:!0,rel:!0});var fo=f(q);ut=h(fo,"Flywheel"),fo.forEach(t),ct=h(de,", but I honestly don\u2019t believe there\u2019s a better tool for running\xA0WordPress sites locally\u2014particularly given that my live site is hosted on Flywheel already, which means that pulling a copy of my live site to my local machine for development (and then pushing it back live when ready) was all as easy as a click of a button, thanks to the Push to Flywheel feature."),de.forEach(t),Pe=m(e),y=i(e,"P",{});var me=f(y);yt=h(me,"I also implemented "),L=i(me,"A",{href:!0,rel:!0});var mo=f(L);wt=h(mo,"CodeKit"),mo.forEach(t),vt=h(me,", for minification, auto browser refreshing, and "),B=i(me,"A",{href:!0,rel:!0});var po=f(B);bt=h(po,"Sass"),po.forEach(t),gt=h(me," compilation. Bonus: CodeKit works with Local seamlessly."),me.forEach(t),Ee=m(e),Q=i(e,"P",{});var uo=f(Q);It=h(uo,"Speaking of Sass: it\u2019s invaluable. During theme development, I set up variables for breakpoint widths, colors, some font families, and created a mixin for flexbox settings."),uo.forEach(t),Se=m(e),V=i(e,"P",{});var co=f(V);X=i(co,"A",{href:!0});var yo=f(X);Z=i(yo,"IMG",{src:!0,alt:!0}),yo.forEach(t),co.forEach(t),xe=m(e),P=i(e,"P",{});var Oe=f(P);_t=h(Oe,"(That\u2019s the "),G=i(Oe,"A",{href:!0,rel:!0});var wo=f(G);kt=h(wo,"ColorHelper"),wo.forEach(t),Pt=h(Oe," Sublime extension creating the color boxes, by the way.)"),Oe.forEach(t),Ae=m(e),E=i(e,"P",{});var Je=f(E);Et=h(Je,"I also got to take the opportunity to finally learn and implement "),D=i(Je,"A",{href:!0,rel:!0});var vo=f(D);St=h(vo,"Timber"),vo.forEach(t),xt=h(Je,". I\u2019d been hearing too many good things for too long to ignore it any more."),Je.forEach(t),Ce=m(e),S=i(e,"P",{});var Ue=f(S);At=h(Ue,"I love the way Timber makes template files so much cleaner, abstracting output code to bare minimums and eliminating the need to deal with the loop directly. Like any framework, though, there\u2019s a little bit of a learning curve, particularly for some of WordPress\u2019s more complex functionality, like comments and pagination. It\u2019s very well documented, though. I would recommend it, and look forward to using it again. I\u2019ll have to add it to my "),M=i(Ue,"A",{href:!0,rel:!0});var bo=f(M);Ct=h(bo,"essential tools"),bo.forEach(t),Tt=h(Ue,"\xA0for\xA0WordPress development."),Ue.forEach(t),Te=m(e),ee=i(e,"P",{});var go=f(ee);Ft=h(go,"The theme runs mostly off a single index.php file which dynamically pulls in the appropriate Timber .twig files based on context. In fact, aside from the index file, the theme\u2019s only PHP template files are the footer and header, the functions file, and a sidebar file."),go.forEach(t),Fe=m(e),x=i(e,"H2",{id:!0});var Vt=f(x);A=i(Vt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Io=f(A);ce=i(Io,"SPAN",{class:!0}),f(ce).forEach(t),Io.forEach(t),Wt=h(Vt,"Advanced Custom Fields + CSS Grid"),Vt.forEach(t),We=m(e),w=i(e,"P",{});var pe=f(w);jt=h(pe,"I also took this opportunity to use CSS grid on a project for the first time\u2014specifically, on the "),R=i(pe,"A",{href:!0,rel:!0});var _o=f(R);$t=h(_o,"design"),_o.forEach(t),Ht=h(pe," page. It turns out, CSS grid mixes really well with "),z=i(pe,"A",{href:!0,rel:!0});var ko=f(z);Nt=h(ko,"Advanced Custom Fields"),ko.forEach(t),qt=h(pe,", particularly the Pro Repeater field. I set up fields for images, height and width, to control the size of images in the grid:"),pe.forEach(t),je=m(e),te=i(e,"P",{});var Po=f(te);oe=i(Po,"A",{href:!0});var Eo=f(oe);ae=i(Eo,"IMG",{src:!0,alt:!0}),Eo.forEach(t),Po.forEach(t),$e=m(e),le=i(e,"P",{});var So=f(le);Lt=h(So,"The width and height have max values, and a Sass loop (and a media query) sets CSS for those values with classes:"),So.forEach(t),He=m(e),ie=i(e,"P",{});var xo=f(ie);se=i(xo,"IMG",{src:!0,alt:!0}),xo.forEach(t),Ne=m(e),re=i(e,"P",{});var Ao=f(re);Bt=h(Ao,"I\u2019ve been using the same logo for myself since I was in school. On a whim, I decided to create a new one that more closely matches where I am now; more focused on development and applying design principles to the web."),Ao.forEach(t),qe=m(e),ne=i(e,"P",{});var Co=f(ne);he=i(Co,"IMG",{src:!0,alt:!0}),Co.forEach(t),Le=m(e),fe=i(e,"P",{});var To=f(fe);Gt=h(To,"As in the header, the logo\u2019s \u201Cicon\u201D form simply removes the lettering, leaving only two sets of brackets, implying code (particularly delving into objects or arrays), with the middle two characters highlighted and in the vague shape of a \u201CJ\u201D and a \u201CC\u201D (my initials, of course). I like to think it also hints at my own duality of designer/developer."),To.forEach(t),Be=m(e),C=i(e,"H2",{id:!0});var Xt=f(C);T=i(Xt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Fo=f(T);ye=i(Fo,"SPAN",{class:!0}),f(ye).forEach(t),Fo.forEach(t),Dt=h(Xt,"The fonts"),Xt.forEach(t),Ge=m(e),F=i(e,"P",{});var Ye=f(F);Mt=h(Ye,"I\u2019ve owned "),K=i(Ye,"A",{href:!0,rel:!0});var Wo=f(K);Rt=h(Wo,"AmsiPro"),Wo.forEach(t),zt=h(Ye,"\xA0for years, and I\u2019ve been waiting to use it on a project since I first saw it. I finally decided its personality was right for this project. It\u2019s bold and friendly (particularly the ultra weight used for this site\u2019s headers), but completely utilitarian and readable at lighter weights, as body copy."),Ye.forEach(t),De=m(e),W=i(e,"P",{});var Qe=f(W);Kt=h(Qe,"I wanted to keep the font load fairly light, so only occasional splashes of "),O=i(Qe,"A",{href:!0,rel:!0});var jo=f(O);Ot=h(jo,"Sagona"),jo.forEach(t),Jt=h(Qe,"\xA0Book Italic are used in places to highlight text. I\u2019ve liked Sagona for a long time. I appreciate the hints of happiness in this Clarendon-esque serif, and I feel that makes it pair well with Amsi Pro."),Qe.forEach(t),Me=m(e),J=i(e,"P",{});var Zt=f(J);we=i(Zt,"STRONG",{});var $o=f(we);Ut=h($o,"Thanks for reading!"),$o.forEach(t),Yt=h(Zt," It\u2019s a personal goal to blog more this year and share some of the things I\u2019ve learned over the past few, so this should just be the first of many new posts in the new year. Happy 2018!"),Zt.forEach(t),this.h()},h(){s(j,"href","http://www.adobe.com/products/muse.html"),s(j,"rel","nofollow"),s($,"href","https://www.elegantthemes.com/gallery/divi/"),s($,"rel","nofollow"),s(ue,"class","icon icon-link"),s(_,"aria-hidden","true"),s(_,"tabindex","-1"),s(_,"href","#about-the-theme"),s(I,"id","about-the-theme"),s(H,"href","http://underscores.me"),s(H,"rel","nofollow"),s(N,"href","https://local.getflywheel.com"),s(N,"rel","nofollow"),s(q,"href","https://getflywheel.com"),s(q,"rel","nofollow"),s(L,"href","https://codekitapp.com/"),s(L,"rel","nofollow"),s(B,"href","http://sass-lang.com/"),s(B,"rel","nofollow"),Ve(Z.src,eo="/images/post_images/sass-variables.png")||s(Z,"src",eo),s(Z,"alt","A list of Sass variables used for colors, breakpoints, fonts and Flexbox settings"),s(X,"href","/images/post_images/sass-variables.png"),s(G,"href","https://packagecontrol.io/packages/ColorHelper"),s(G,"rel","nofollow"),s(D,"href","https://wordpress.org/plugins/timber-library/"),s(D,"rel","nofollow"),s(M,"href","https://api.rickyjanuari.com/essential-tools-wordpress-development/"),s(M,"rel","nofollow"),s(ce,"class","icon icon-link"),s(A,"aria-hidden","true"),s(A,"tabindex","-1"),s(A,"href","#advanced-custom-fields--css-grid"),s(x,"id","advanced-custom-fields--css-grid"),s(R,"href","https://api.rickyjanuari.com/design/"),s(R,"rel","nofollow"),s(z,"href","https://www.advancedcustomfields.com/"),s(z,"rel","nofollow"),Ve(ae.src,to="/images/post_images/acf-fields-1-1024x797.png")||s(ae,"src",to),s(ae,"alt","Custom fields that allow for a width and height property to use in the image grid"),s(oe,"href","/images/post_images/acf-fields-1.png"),Ve(se.src,oo="/images/post_images/sass-grid.png")||s(se,"src",oo),s(se,"alt","A Sass @for loop to set classes for each possible width and height, and add CSS accordingly."),Ve(he.src,ao="/images/post_images/Full-Logo-2018.svg")||s(he,"src",ao),s(he,"alt","2018 logo"),s(ye,"class","icon icon-link"),s(T,"aria-hidden","true"),s(T,"tabindex","-1"),s(T,"href","#the-fonts"),s(C,"id","the-fonts"),s(K,"href","https://www.myfonts.com/fonts/stawix/amsi-pro/"),s(K,"rel","nofollow"),s(O,"href","https://www.myfonts.com/fonts/rene-bieder/sagona/"),s(O,"rel","nofollow")},m(e,a){Go(p,e,a),r(e,u,a),r(e,v,a),o(v,Ze),r(e,ve,a),r(e,b,a),o(b,et),o(b,j),o(j,tt),o(b,ot),r(e,be,a),r(e,Y,a),o(Y,at),r(e,ge,a),r(e,g,a),o(g,lt),o(g,$),o($,it),o(g,st),r(e,Ie,a),r(e,I,a),o(I,_),o(_,ue),o(I,rt),r(e,_e,a),r(e,k,a),o(k,nt),o(k,H),o(H,ht),o(k,ft),r(e,ke,a),r(e,c,a),o(c,dt),o(c,N),o(N,mt),o(c,pt),o(c,q),o(q,ut),o(c,ct),r(e,Pe,a),r(e,y,a),o(y,yt),o(y,L),o(L,wt),o(y,vt),o(y,B),o(B,bt),o(y,gt),r(e,Ee,a),r(e,Q,a),o(Q,It),r(e,Se,a),r(e,V,a),o(V,X),o(X,Z),r(e,xe,a),r(e,P,a),o(P,_t),o(P,G),o(G,kt),o(P,Pt),r(e,Ae,a),r(e,E,a),o(E,Et),o(E,D),o(D,St),o(E,xt),r(e,Ce,a),r(e,S,a),o(S,At),o(S,M),o(M,Ct),o(S,Tt),r(e,Te,a),r(e,ee,a),o(ee,Ft),r(e,Fe,a),r(e,x,a),o(x,A),o(A,ce),o(x,Wt),r(e,We,a),r(e,w,a),o(w,jt),o(w,R),o(R,$t),o(w,Ht),o(w,z),o(z,Nt),o(w,qt),r(e,je,a),r(e,te,a),o(te,oe),o(oe,ae),r(e,$e,a),r(e,le,a),o(le,Lt),r(e,He,a),r(e,ie,a),o(ie,se),r(e,Ne,a),r(e,re,a),o(re,Bt),r(e,qe,a),r(e,ne,a),o(ne,he),r(e,Le,a),r(e,fe,a),o(fe,Gt),r(e,Be,a),r(e,C,a),o(C,T),o(T,ye),o(C,Dt),r(e,Ge,a),r(e,F,a),o(F,Mt),o(F,K),o(K,Rt),o(F,zt),r(e,De,a),r(e,W,a),o(W,Kt),o(W,O),o(O,Ot),o(W,Jt),r(e,Me,a),r(e,J,a),o(J,we),o(we,Ut),o(J,Yt),Re=!0},p(e,[a]){const U={};a&1&&(U.$$scope={dirty:a,ctx:e}),p.$set(U)},i(e){Re||(Do(p.$$.fragment,e),Re=!0)},o(e){Mo(p.$$.fragment,e),Re=!1},d(e){Ro(p,e),e&&t(u),e&&t(v),e&&t(ve),e&&t(b),e&&t(be),e&&t(Y),e&&t(ge),e&&t(g),e&&t(Ie),e&&t(I),e&&t(_e),e&&t(k),e&&t(ke),e&&t(c),e&&t(Pe),e&&t(y),e&&t(Ee),e&&t(Q),e&&t(Se),e&&t(V),e&&t(xe),e&&t(P),e&&t(Ae),e&&t(E),e&&t(Ce),e&&t(S),e&&t(Te),e&&t(ee),e&&t(Fe),e&&t(x),e&&t(We),e&&t(w),e&&t(je),e&&t(te),e&&t($e),e&&t(le),e&&t(He),e&&t(ie),e&&t(Ne),e&&t(re),e&&t(qe),e&&t(ne),e&&t(Le),e&&t(fe),e&&t(Be),e&&t(C),e&&t(Ge),e&&t(F),e&&t(De),e&&t(W),e&&t(Me),e&&t(J)}}}const Qo={title:"New Site, New Theme for 2018",date:"2018-01-02",updated:"2020-05-18",categories:["design","web","php","wordpress"],coverImage:"2018-logo.jpg",coverWidth:16,coverHeight:9,excerpt:"Building a WordPress theme (and a new brand) from scratch."};class Vo extends Ho{constructor(p){super();No(this,p,null,Oo,qo,{})}}export{Vo as default,Qo as metadata};