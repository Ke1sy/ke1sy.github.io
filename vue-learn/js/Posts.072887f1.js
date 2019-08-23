(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Posts"],{"17c3":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h1",{staticClass:"text-center mb-4"},[t._v("Our Posts")]),e("search",{attrs:{count:t.filteredPostsCount},on:{initSearch:t.initSearch}}),e("div",{staticClass:"row posts"},[e("preloader",{attrs:{removePreloader:t.removePreloader}}),t._l(t.getItems,function(s){return e("post",{key:s.id,attrs:{post:s,"show-remove":!0},on:{removePost:t.removePost}})}),e("button",{directives:[{name:"show",rawName:"v-show",value:t.showAmount<=t.filteredPosts.length,expression:"showAmount <= filteredPosts.length"}],staticClass:"btn btn-info m-auto",on:{click:function(s){t.showAmount+=t.showStep}}},[t._v(" Show more")])],2)],1)},i=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("div",{staticClass:"search__form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"search__input",attrs:{type:"text",value:"",placeholder:"Поиск по заголовку..."},domProps:{value:t.searchVal},on:{keyup:function(s){return t.initSearch()},input:function(s){s.target.composing||(t.searchVal=s.target.value)}}}),e("button",{staticClass:"remove-btn",on:{click:function(s){return t.resetSearch()}}},[t._v("x")])]),e("div",{staticClass:"search__text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.searchVal.length>0,expression:"searchVal.length > 0"}]},[t._v('\n\t\t\tНайдено по запросу "'+t._s(t.searchVal)+'":\n\t\t\t'),e("br"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.count<=0,expression:"count <= 0"}],staticClass:"no-results"},[t._v(t._s(t.count.length)+"Результатов по данному запросу не найдено")])])])])},n=[],a={props:["count"],data:function(){return{searchVal:""}},methods:{initSearch:function(){this.$emit("initSearch",this.searchVal)},resetSearch:function(){this.searchVal="",this.initSearch()}},computed:{}},c=a,l=(e("fe2b"),e("2877")),u=Object(l["a"])(c,r,n,!1,null,"64cfac3a",null),h=u.exports,d=e("b998"),v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"preloader",class:{"preloader--show":!t.removePreloader}},[t._m(0)])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sk-wave"},[e("div",{staticClass:"sk-rect sk-rect-1"}),e("div",{staticClass:"sk-rect sk-rect-2"}),e("div",{staticClass:"sk-rect sk-rect-3"}),e("div",{staticClass:"sk-rect sk-rect-4"}),e("div",{staticClass:"sk-rect sk-rect-5"})])}],m={computed:{removePreloader:function(){return this.$store.state.removePreload}}},p=m,_=(e("f073"),Object(l["a"])(p,v,f,!1,null,"6d5d3502",null)),w=_.exports,k={data:function(){return{posts:this.$store.state.posts,filteredPosts:this.$store.state.posts,filteredPostsCount:0,showStep:4,showAmount:4}},methods:{removePost:function(t){this.$store.commit("removePost",t)},initSearch:function(t){t.length>=1?(this.filteredPosts=[],this.filteredPosts=this.$store.getters.findBySearch(t),this.filteredPostsCount=this.filteredPosts.length):this.filteredPosts=this.posts}},computed:{removePreloader:function(){return this.$store.state.removePreload},getItems:function(){return this.filteredPosts.slice(0,this.showAmount)}},components:{post:d["a"],preloader:w,search:h},watch:{posts:function(t){this.filteredPosts=t}}},C=k,P=(e("407f"),Object(l["a"])(C,o,i,!1,null,"259d7cd2",null));s["default"]=P.exports},"407f":function(t,s,e){"use strict";var o=e("516a"),i=e.n(o);i.a},"516a":function(t,s,e){},"8fe3":function(t,s,e){"use strict";var o=e("9f95"),i=e.n(o);i.a},"9f95":function(t,s,e){},ab11:function(t,s,e){},b998:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col col-12 col-sm-6 mb-4",attrs:{id:t.post.id}},[e("div",{staticClass:"posts__item"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.showRemove,expression:"showRemove"}],staticClass:"remove-btn",on:{click:function(s){return t.removePost(t.post.id)}}},[t._v("X")]),e("div",{staticClass:"posts__info"},[e("h5",{staticClass:"posts__name"},[t._v(t._s(t.post.title)+" "+t._s(t.post.id)+" ")]),e("p",{staticClass:"posts__text"},[t._v(t._s(t.post.body))])]),e("div",{staticClass:"posts__foot"},[e("like-counter",{attrs:{id:t.post.id}})],1)])])},i=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"like-counter"},[e("span",{staticClass:"like-text"},[t._v("Likes: "+t._s(t.countLikes))]),e("button",{staticClass:"btn like like--btn",class:{active:t.isLiked},on:{click:function(s){return t.$store.commit("addLike",t.id)}}})])},n=[],a={props:["id"],computed:{countLikes:function(){return this.$store.getters.getById(this.id,"posts").likeCount},isLiked:function(){return this.$store.getters.getById(this.id,"posts").liked}}},c=a,l=(e("8fe3"),e("2877")),u=Object(l["a"])(c,r,n,!1,null,"3a56c24c",null),h=u.exports,d={components:{LikeCounter:h},props:["post","showRemove"],data:function(){return{}},methods:{removePost:function(t){this.$emit("removePost",{id:t})}},computed:{}},v=d,f=Object(l["a"])(v,o,i,!1,null,"41e5487a",null);s["a"]=f.exports},d4ef:function(t,s,e){},f073:function(t,s,e){"use strict";var o=e("ab11"),i=e.n(o);i.a},fe2b:function(t,s,e){"use strict";var o=e("d4ef"),i=e.n(o);i.a}}]);
//# sourceMappingURL=Posts.072887f1.js.map