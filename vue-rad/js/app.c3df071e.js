(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f617b414"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-rad/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18d0":function(t,e,n){"use strict";n.r(e),e["default"]={id:"twitter-usage",viewBox:"0 0 273.4 222.2",url:"/vue-rad/assets/images/sprites/icons.svg#twitter",toString:function(){return this.url}}},"53d7":function(t,e,n){"use strict";var r=n("700b"),o=n.n(r);o.a},5452:function(t,e,n){"use strict";var r=n("b1f6"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"section wrapper__content"},[n("Header"),n("router-view")],1),n("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header _def-show "},[n("div",{staticClass:"container header__container"},[n("div",{staticClass:"header__logo js-logo"},[t.isIndexPage?[n("span",{staticClass:"logo"},[n("img",{staticClass:"logo__img",attrs:{src:t.logo,alt:"logo",height:"66",width:"212"}})])]:[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"logo"},[n("img",{staticClass:"logo__img",attrs:{src:t.logo,alt:"logo",height:"66",width:"212"}})])])]],2),n("nav",{staticClass:"header__nav"},[n("ul",{staticClass:"menu"},t._l(t.headerMenu,function(e){return n("li",{key:e.id,staticClass:"menu__item"},[n("router-link",{staticClass:"menu__link",attrs:{to:e.url,"active-class":"active"}},[n("span",{staticClass:"menu__text"},[t._v(t._s(e.name))])])],1)}),0)]),n("div",{staticClass:"callback header__callback"},[n("a",{staticClass:"callback__link text--size-xl",attrs:{href:"tel:"+t.fomattedPhone}},[t._v("\n\t\t\t\t"+t._s(t.decoratedPhone(t.fomattedPhone))+"\n\t\t\t")]),t._m(0)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button js-init callback__btn",attrs:{"data-mfp":"ajax","data-mfp-src":"hidden/callback.php","data-param":'{"key":"value"}'}},[n("span",[t._v("Обратный звонок")])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("7f7f"),n("bd86")),l=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var d={data:function(){return{phone:"+38 (067) 233-68-75",headerMenu:[{name:"О нас",url:"/about"},{name:"Каталог объектов",url:"/catalog"},{name:"Контакты",url:"/contacts"}]}},methods:{decoratedPhone:function(t){return t.slice(0,3)+" ("+t.slice(3,6)+") "+t.slice(6,9)+"-"+t.slice(9,11)+"-"+t.slice(11)}},computed:f({isIndexPage:function(){return"home"===this.$route.name},fomattedPhone:function(){return this.phone.replace(/[-()\s]/g,"")}},Object(l["b"])(["logo"])),watch:{}},p=d,g=(n("5452"),n("2877")),m=Object(g["a"])(p,s,i,!1,null,null,null),v=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section _mt-auto"},[n("div",{staticClass:"footer"},[n("div",{staticClass:"container footer__container"},[n("div",{staticClass:"grid footer__grid"},[n("div",{staticClass:"gcell gcell--12 gcell--md-4 gcell--lg-4 _sm-justify-center"},[n("div",{staticClass:"footer__text footer__column"},[n("div",{staticClass:"footer__logo"},[n("span",{staticClass:"logo"},[n("img",{staticClass:"logo__img",attrs:{src:t.logo,alt:"logo",height:"66",width:"212"}})])]),n("div",{staticClass:"footer__info"},[n("div",{staticClass:"wysiwyg"},[n("p",[t._v(t._s(t.logoText))])])])])]),n("div",{staticClass:"gcell gcell--6 gcell--sm-4 gcell--ms-4 gcell--md-3 gcell--lg-3"},[n("div",{staticClass:"footer__menu footer__column"},[t._m(0),n("ul",{staticClass:"footer__list footer__list--menu"},t._l(t.footerMenu,function(e){return n("li",{key:e.id,staticClass:"footer__list-item"},[n("router-link",{staticClass:"footer__list-link",attrs:{to:e.url,"active-class":"active"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")])],1)}),0)])]),n("svg",[n("use",{attrs:{"xlink:href":"#twitter"}})])]),n("div",{staticClass:"footer__copyright"},[n("svg-icon",{attrs:{name:"twitter"}})],1)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__title"},[n("p",{staticClass:"text--size-xl title--medium"},[t._v("МЕНЮ")])])}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.className,attrs:{xmlns:"http://www.w3.org/2000/svg"}},[t.title?n("title",[t._v(t._s(t.title))]):t._e(),n("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])},w=[],y={name:"svg-icon",props:{name:{type:String,required:!0},title:{type:String,default:null}},computed:{iconPath:function(){var t=n("8dff")("./".concat(this.name,".svg"));return Object.prototype.hasOwnProperty.call(t,"default")&&(t=t.default),t.url},className:function(){return"svg-icon svg-icon--"+this.name}}},O=y,j=(n("a4aa"),Object(g["a"])(O,b,w,!1,null,null,null)),C=j.exports;function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var k={data:function(){return{logoText:"Rad - компания по строительству таунхаусов премиум-класса.",footerMenu:[{name:"О нас",url:"/about"},{name:"Каталог объектов",url:"/catalog"},{name:"Контакты",url:"/contacts"},{name:"Карта сайта",url:"/sitemap"}]}},components:{SvgIcon:C},computed:x({},Object(l["b"])(["logo"]))},E=k,S=(n("53d7"),Object(g["a"])(E,_,h,!1,null,null,null)),D=S.exports,$={data:function(){return{}},components:{Header:v,Footer:D}},M=$,T=Object(g["a"])(M,o,a,!1,null,null,null),N=T.exports,B=n("8c4f"),F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"_text-center"},[t._v("Home Page")])])])}],I={components:{}},L=I,q=Object(g["a"])(L,F,H,!1,null,null,null),z=q.exports;r["a"].use(B["a"]);var J=new B["a"]({mode:"history",base:"/vue-rad/",routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/catalog",name:"catalog",component:function(){return n.e("about").then(n.bind(null,"247d"))}},{path:"/contacts",name:"contacts",component:function(){return n.e("about").then(n.bind(null,"c93c"))}}]});r["a"].use(l["a"]);var U=new l["a"].Store({state:{logo:"/assets/images/home/logo.png"},mutations:{},actions:{}});n("18d0");r["a"].config.productionTip=!1,new r["a"]({router:J,store:U,render:function(t){return t(N)}}).$mount("#app")},"700b":function(t,e,n){},"8dff":function(t,e,n){var r={"./back.svg":"9bff","./bus.svg":"d936","./twitter.svg":"18d0"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="8dff"},"9bff":function(t,e,n){"use strict";n.r(e),e["default"]={id:"back-usage",viewBox:"0 0 477.175 477.175",url:"/assets/images/sprites/icons.svg#back",toString:function(){return this.url}}},a4aa:function(t,e,n){"use strict";var r=n("c2ee"),o=n.n(r);o.a},b1f6:function(t,e,n){},c2ee:function(t,e,n){},d936:function(t,e,n){"use strict";n.r(e),e["default"]={id:"bus-usage",viewBox:"0 0 45.437 45.437",url:"/assets/images/sprites/icons.svg#bus",toString:function(){return this.url}}}});
//# sourceMappingURL=app.c3df071e.js.map
