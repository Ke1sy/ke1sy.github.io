(function(t){function e(e){for(var n,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({Catalog:"Catalog",Favourites:"Favourites",Posts:"Posts",Product:"Product","tab-archive":"tab-archive","tab-posts":"tab-posts"}[t]||t)+"."+{Catalog:"a6be99b4",Favourites:"7eb527f6",Posts:"54b9da3e",Product:"01ca8656","tab-archive":"f1bfe05a","tab-posts":"95be6912"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={Catalog:1,Favourites:1,Posts:1,Product:1,"tab-posts":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({Catalog:"Catalog",Favourites:"Favourites",Posts:"Posts",Product:"Product","tab-archive":"tab-archive","tab-posts":"tab-posts"}[t]||t)+"."+{Catalog:"6c2ef2ad",Favourites:"eb55775b",Posts:"72cc05b2",Product:"bf1bbc17","tab-archive":"31d6cfe0","tab-posts":"7f39c6b5"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],v.parentNode.removeChild(v),a(o)},v.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(v)}).then(function(){r[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-learn/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0318":function(t,e,a){"use strict";var n=a("1e72"),r=a.n(n);r.a},"1e72":function(t,e,a){},"39a0":function(t,e,a){},"3f22":function(t,e,a){"use strict";var n=a("fbc8"),r=a.n(n);r.a},4973:function(t,e,a){"use strict";var n=a("39a0"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("1157"),r=a.n(n),i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("headerPart"),a("main",[a("router-view")],1),a("app-cart"),a("footer")],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"cart"},[a("h3",[t._v("Корзина")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.cartLength,expression:"cartLength"}],staticClass:"cart-content"},[t._m(0),t._l(t.cartItems,function(e){return a("div",{staticClass:"cart-item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-3"},[t._v(t._s(t.getFromCart(e.id).title))]),a("div",{staticClass:"col col-3"},[a("button",{staticClass:"btn btn-danger",attrs:{disabled:1===e.count},on:{click:function(a){return t.changeCount(-1,e.id)}}},[t._v("-")]),a("span",{staticClass:"amount"},[t._v(t._s(e.count))]),a("button",{staticClass:"btn btn-success",attrs:{disabled:e.count>=t.$store.getters.getById(e.id,"products").inventory},on:{click:function(a){return t.changeCount(1,e.id)}}},[t._v("+")])]),a("div",{staticClass:"col col-2"},[t._v(t._s(t._f("fixed")(t.getFromCart(e.id).price)))]),a("div",{staticClass:"col col-2"},[t._v(t._s(t._f("fixed")(e.count*t.getFromCart(e.id).price)))]),a("div",{staticClass:"col col-2"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.deleteFromCart(e.id)}}},[t._v("\n                      Удалить\n                    ")])])])])}),a("div",{staticClass:"row head-row"},[a("div",{staticClass:"col col-3"}),a("div",{staticClass:"col col-3"}),a("div",{staticClass:"col col-2"}),a("div",{staticClass:"col col-2"},[t._v(t._s(t.totalSum))]),a("div",{staticClass:"col col-2"})]),a("br"),a("p",[t._v("Товаров в корзине: "+t._s(t.cartLength))])],2),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.cartLength,expression:"!cartLength"}],staticClass:"cart-content"},[a("p",[t._v("В корзине нет товаров!")])])])]),t._m(1)])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row head-row"},[a("div",{staticClass:"col col-3"},[t._v("Название:")]),a("div",{staticClass:"col col-3"},[t._v("Количество:")]),a("div",{staticClass:"col col-2"},[t._v("Цена:")]),a("div",{staticClass:"col col-2"},[t._v("Сумма:")]),a("div",{staticClass:"col col-2"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Закрыть")])])}],l=(a("ac6a"),{data:function(){return{cartItems:this.$store.state.inCart}},computed:{cartLength:function(){var t=this.$store.state.inCart,e=0;return t.forEach(function(t,a){e+=t.count}),e},totalSum:function(){return this.$store.getters.getTotalSum}},methods:{changeCount:function(t,e){this.$store.commit("changeInCart",{id:e,val:t})},getFromCart:function(t){return this.$store.getters.getById(t,"products")},deleteFromCart:function(t){var e=this.$store.commit("deleteFromCart",t);console.log(e)}},filters:{fixed:function(t){return t.toFixed(2)}}}),d=l,v=(a("3f22"),a("2877")),f=Object(v["a"])(d,c,u,!1,null,"f41f7d24",null),p=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/","active-class":"active",exact:""}},[t._v("Posts")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item",attrs:{"active-class":"active",to:"/",tag:"li",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("Home")])]),a("router-link",{staticClass:"nav-item",attrs:{"active-class":"active",to:"/posts",tag:"li",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("Posts")])]),a("router-link",{staticClass:"nav-item",attrs:{"active-class":"active",to:"/catalog",tag:"li",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("Catalog")])]),a("router-link",{staticClass:"nav-item",attrs:{"active-class":"active",to:"/favourites",tag:"li",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("Favourites")])])],1)]),a("router-link",{staticClass:"nav-link",attrs:{to:"/favourites","active-class":"active",exact:""}},[a("span",{staticClass:"like",attrs:{title:"Liked posts"}},[a("span",{staticClass:"like-count"},[t._v(t._s(t.findFavourites.length))])])]),a("span",{attrs:{title:"Cart"},on:{click:function(e){return t.openCart()}}},[a("span",{staticClass:"cart-icon"},[a("span",{staticClass:"like-count"},[t._v(t._s(t.inCartLength))])])])],1)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],b=a("cebc"),g=a("2f62"),C={data:function(){return{}},methods:{openCart:function(){r()("#exampleModal").modal("show")}},computed:Object(b["a"])({},Object(g["b"])(["inCartLength","findFavourites"]))},_=C,y=(a("0318"),Object(v["a"])(_,h,m,!1,null,"577c5d67",null)),P=y.exports,k={data:function(){return{}},methods:{},computed:{},components:{headerPart:P,"app-cart":p},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.$store.dispatch("getPosts")},3e3)})}},x=k,w=(a("5c0b"),Object(v["a"])(x,o,s,!1,null,null,null)),j=w.exports,F=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("tabs"),a("br")],1)},S=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"head"},t._l(t.tabs,function(e){return a("span",{key:e.id,class:["head__item",{active:t.currentTab===e}],on:{click:function(a){t.currentTab=e}}},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")])}),0),a("div",{staticClass:"body"},[a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("keep-alive",[a(t.getCurrentTab,{tag:"component"})],1)],1)],1)])},O=[],$={data:function(){return{currentTab:"Posts",tabs:["Posts","Archive"]}},computed:{getCurrentTab:function(){return"tab-"+this.currentTab.toLowerCase()}},components:{tabPosts:function(){return a.e("tab-posts").then(a.bind(null,"d04e"))},tabArchive:function(){return a.e("tab-archive").then(a.bind(null,"9f2d"))}}},L=$,I=(a("4973"),Object(v["a"])(L,E,O,!1,null,"617d70ab",null)),M=I.exports,N={name:"home",data:function(){return{}},components:{tabs:M},provide:function(){return{}}},A=N,B=(a("f228"),Object(v["a"])(A,T,S,!1,null,"abbb03b4",null)),H=B.exports;i["a"].use(F["a"]);var D=new F["a"]({mode:"history",base:"/vue-learn/",routes:[{path:"/",name:"home",component:H},{path:"/posts",name:"posts",component:function(){return a.e("Posts").then(a.bind(null,"17c3"))}},{path:"/favourites",name:"favourites",component:function(){return a.e("Favourites").then(a.bind(null,"0e0d"))}},{path:"/catalog/",name:"catalog",component:function(){return a.e("Catalog").then(a.bind(null,"247d"))},children:[]},{path:"/product/:id",name:"product",component:function(){return a.e("Product").then(a.bind(null,"d2f1"))}}]}),X=(a("7514"),a("bc3a")),q=a.n(X),J=a("a7fe"),W=a.n(J);i["a"].use(g["a"]),i["a"].use(W.a,q.a);var K="https://jsonplaceholder.typicode.com/posts",R=new g["a"].Store({state:{posts:[],removePreload:!1,inCart:[],products:[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2,img:"1.jpg"},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10,img:"2.jpg"},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5,img:"3.jpg"},{id:4,title:"iPad 3",price:500.01,inventory:7,img:"4.jpg"},{id:5,title:"H&M T-Shirt Red",price:10.99,inventory:6,img:"5.jpg"},{id:6,title:"Asus g546",price:19.99,inventory:12,img:"6.jpg"},{id:7,title:"iPhone 10",price:500.01,inventory:17,img:"7.jpg"},{id:8,title:"H&M T-Shirt White",price:10.99,inventory:3,img:"2.jpg"},{id:9,title:"Charli XCX - Sucker CD",price:19.99,inventory:1,img:"3.jpg"}]},getters:{getById:function(t){return function(e,a){return t[a].find(function(t){return t.id===e})}},findFavourites:function(t){return t.posts.filter(function(t){return t.liked})},findBySearch:function(t){return function(e){return t.posts.filter(function(t){return t.title.indexOf(e)>=0})}},getImg:function(t){return function(e){return t.products.find(function(t){return t.id===e}).img}},inCartLength:function(t){return t.inCart.length},getFromCart:function(t){return function(e){return t.inCart.find(function(t){return t.id===e})}},getTotalSum:function(t){var e=0;return t.inCart.forEach(function(a){var n=t.products.find(function(t){return t.id===a.id}).price;e+=n*a.count}),e}},mutations:{changePosts:function(t,e){for(var a=e.data,n=0;n<10;n++)a[n].liked=!1,a[n].likeCount=0,this.state.posts.push(a[n])},changePreloaderState:function(){this.state.removePreload=!0},removePost:function(t,e){var a=this.getters.getById(e.id,"posts");this.state.posts.splice(a,1)},addLike:function(t,e){var a=this.getters.getById(e,"posts");a.liked?a.likeCount--:a.likeCount++,a.liked=!a.liked},addToCart:function(t,e){t.inCart.push(e)},updateCart:function(t,e){var a=t.inCart.find(function(t){return t.id===e.id});a.count+=e.count},changeInCart:function(t,e){var a=t.inCart.find(function(t){return t.id===e.id});a.count+=e.val},deleteFromCart:function(t,e){t.inCart.forEach(function(a,n){if(a.id===e)return t.inCart.splice(n,1),!1})}},actions:{getPosts:function(){var t=this;i["a"].axios.get(K).then(function(e){t.commit({type:"changePosts",data:e.data}),t.state.removePreload=!0},function(e){console.warn(e),t.state.removePreload=!0})}}});a("f0bd"),a("4989");i["a"].config.productionTip=!1,new i["a"]({router:D,store:R,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},c8eb:function(t,e,a){},f228:function(t,e,a){"use strict";var n=a("c8eb"),r=a.n(n);r.a},fbc8:function(t,e,a){}});
//# sourceMappingURL=app.93d0c040.js.map