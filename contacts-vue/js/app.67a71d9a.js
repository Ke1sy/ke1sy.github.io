(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/contacts-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"001f":function(e,t,a){},"2dbe":function(e,t,a){"use strict";var r=a("001f"),s=a.n(r);s.a},"31a5":function(e,t,a){"use strict";var r=a("d109"),s=a.n(r);s.a},"3b84":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAmCAYAAAA1MOAmAAADMUlEQVRYha2WOYxOURiG3/n5xxrLWGKNEEMoNAqxKyhIlCJBNAprJhoFEUIhI0a0CnSECJU1lkIsDQWxi2TEEoYYQ/CLZB7F/a7/c9xVnOTk3Hve9/3es33n3gZAOaWXpMWSFkqaJmmspH6Svkp6KemepMuSzkv6kRkJSKsDgF3AR4qVj8YfkBazIWVmSyQdljQiHpOkW5JuSHom6aekqqRmSbMlzZTUYNy3ktZIOldkZlvdaGtAGzA2YwVkeBvww2m3hrxQtM2R7wCTckzCOsl0cdmWZrbUkS4AfUsaxbUvcNHFWhqaDQLeuRmlGVWBacACa6sZhvEM31n832atBtSA5gRxE3AA6OTP0mn9TSlLWjNea2zWB+iyzr0JoqlAO9ml3Xihts3wLqCPgGXW0Q2MCciDnVEN2AlMACrW7nSjbzd+eEq7DV8m4KC9XE8Y2T5nNCcBFzCP+pHfl4DfMuyggJspxB5Ah2F7Uoziutd4Habz2H7DblYkjbL8fh7k+3hJw+z5ROadJx2zdpjpfInjjqpI6m0vtYA00D2/yTF7m6KTpO/W9q5I+mQvTQGpwz0355h5vCPABlvbVZH02l4mB6SXqi/B+hyzddY+N50vU6x95RP6UcLGt1AvG1IOxybHaUnAnxjWKqKrJy7TA2IVuObws8ByYJa1Zxx2jb+vr+kOny+iBI0T91TCyJqAS2SXKyRfWacNfwFU4s61fgQJogZgBXAV+G68mr2vtAGHmjku5jrcRdyTaM+wtleC2Nf+OXhP4K7Feww0ejMBc91IduQEy6ubXayFcX9IOuSWqOxXOq4jgc8W57jHkg5DfB9eIdqrsmZHTf8FGJ1lJmCVW4LVJY18Gm0J8TTRZRO8B4YUNKoCD013n+iQFDKbSP2jeKSg2RY3q/lJnCzx9jyxq6OJ9giiPUvkZQVodMuSl3snjdcFjPgXM1Es9xY5TtJFXNhMZOdeI9ENAdGN8dehKGuWlXv+dz3th6iUmUjOvXHAN+srdGKLmol67n0AhlL/fHQCw/+3mc+9226mG4vGKGMW7lFsGv4n/jezKvDAjLqBGWX0Zc1kBk+B3WW1vwDgJSaPYb5pvgAAAABJRU5ErkJggg=="},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("top-section"),a("offices"),a("contacts-form")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title title--h1"},[e._v("Contacts")]),a("div",{staticClass:"top-section__content"},[a("div",{staticClass:"top-section__item"},[a("div",{staticClass:"title title--h2"},[e._v("GMS Headquarters")]),a("div",{staticClass:"top-section__contacts contacts"},[a("div",{staticClass:"contacts__item"},[a("p",[e._v("Global Message Services Ukraine LLC")]),a("p",[e._v("Bundesstrasse 5 / 3rd Floor")]),a("p",[e._v("6300 Zug")]),a("p",[e._v("Switzerland")]),a("a",{staticClass:"top-section__phone",attrs:{href:"tel:"+e.phone}},[e._v("\n                            "+e._s(e.decoratedPhone)+"\n                        ")])]),a("div",{staticClass:"contacts__item"},[a("p",[e._v("Email")]),a("a",{staticClass:"contacts__link",attrs:{href:"mailto:INFO@GMS-WORLDWIDE.COM"}},[e._v("\n                            NFO@GMS-WORLDWIDE.COM\n                        ")]),a("p",[e._v("Send Message")]),a("a",{staticClass:"contacts__link",attrs:{href:"viber://chat?number="+e.viberPhone}},[e._v("\n                            VIBER US\n                        ")]),a("p",[e._v("Send form")]),a("a",{staticClass:"contacts__link",attrs:{href:"#contact-us"}},[e._v("\n                        CONTACT US\n                      ")])])])]),a("div",{staticClass:"top-section__item"},[a("div",{staticClass:"title title--h2"},[e._v("Technical support 24/7")]),a("p",[e._v("GMS understand that it can be hard to follow all new technologies. We regularly\n                    provide for all our clients educational training to make your operator’s business\n                    earn more and better though our best practices. ")]),a("a",{staticClass:"top-section__phone",attrs:{href:"tel:"+e.phone}},[e._v("\n                    "+e._s(e.decoratedPhone)+"\n                ")])])])])])},o=[],l={data:function(){return{phone:"+41415446200",email:"INFO@GMS-WORLDWIDE.COM"}},computed:{viberPhone:function(){return this.phone.slice(1)},decoratedPhone:function(){return this.phone.slice(0,3)+" "+this.phone.slice(3,5)+" "+this.phone.slice(5,8)+" "+this.phone.slice(8,10)+" "+this.phone.slice(10)}}},c=l,u=(a("31a5"),a("2877")),m=Object(u["a"])(c,i,o,!1,null,"cba4e784",null),p=m.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"offices"},[a("div",{staticClass:"offices__left"},[a("div",{staticClass:"title title--h2"},[e._v("Our Offices")]),a("div",{staticClass:"tabs"},e._l(e.tabs,(function(t){return a("span",{key:t.id,class:["tabs__item",{active:e.currentTab===t}],on:{click:function(a){return e.changeActive(t)}}},[e._v("\n                "+e._s(t.city)+"\n            ")])})),0),a("div",{staticClass:"title title--h2 offices__company"},[e._v(e._s(e.currentTab.company))]),a("p",[e._v(e._s(e.currentTab.address))]),a("p",[e._v(e._s(e.currentTab.index))]),a("p",[e._v(e._s(e.currentTab.country))])]),a("div",{staticClass:"offices__right"},[a("div",{staticClass:"map"},[a("my-map",{attrs:{settings:e.currentTab}})],1)])])},v=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GmapMap",{staticClass:"map",attrs:{center:e.settings.loc,zoom:12,"map-type-id":"terrain",options:e.mapStyle}},[a("gmap-info-window",{attrs:{options:e.infoOptions,position:e.settings.loc,opened:e.infoWinOpen},on:{closeclick:function(t){e.infoWinOpen=!1}}},[a("div",{staticClass:"map__title"},[e._v(e._s(e.settings.company))]),a("div",{staticClass:"map__address"},[e._v(e._s(e.settings.address))])]),a("GmapMarker",{attrs:{position:e.settings.loc,clickable:!0,icon:e.icon},on:{click:function(t){e.infoWinOpen=!e.infoWinOpen}}})],1)},h=[],_=a("3b84"),y=a.n(_),g=a("755e");r["a"].use(g,{load:{key:"AIzaSyDV57vEPZTMec-stGUthmwwmxuOub9dJhs"}});var b={props:["settings"],data:function(){return{center:this.settings.loc,company:this.settings.company,icon:y.a,infoWinOpen:!0,infoOptions:{pixelOffset:{width:0,height:-36}},mapStyle:{mapTypeControl:!1,streetViewControl:!1,styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]}}}},C=b,$=(a("2dbe"),Object(u["a"])(C,f,h,!1,null,"2f7f70e4",null)),T=$.exports,O={data:function(){return{tabs:[{city:"KYIV",address:"Kyiv, Stepan Bandera, 33",index:"02066",country:"Ukraine",company:"Global Message Services Ukraine LLC",loc:{lat:50.4860824,lng:30.4956593}},{city:"New York",address:"9th street in the East Village",index:"04553",country:"USA",company:"Global Message Services USA LLC",loc:{lat:40.7371253,lng:-73.9841815}},{city:"Barcelona",address:"La Rambla, 13",index:"06482",country:"Spain",company:"Global Message Services Spain LLC",loc:{lat:41.4077594,lng:2.1695999}},{city:"ROME",address:"Via del Corso, 22",index:"01468",country:"Italy",company:"Global Message Services Italy LLC",loc:{lat:41.8910068,lng:12.4539585}}],currentTab:null}},methods:{changeActive:function(e){this.currentTab=e}},components:{myMap:T},beforeMount:function(){this.currentTab=this.tabs[0]}},x=O,A=(a("f649"),Object(u["a"])(x,d,v,!1,null,"58a7d537",null)),k=A.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-us",attrs:{id:"contact-us"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"title title--h2"},[e._v("Contact Us")]),a("div",{staticClass:"contact-us__content"},[a("div",{staticClass:"contact-us__item contact-us__item--left"},[a("contact-form")],1),e._m(0)])])])},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-us__item"},[a("p",[e._v("Please tell us more about your request and give us info about your\n                    comapny and countru")])])}],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form"},[a("div",{staticClass:"form__group",class:{"form__group--error":e.$v.name.$error}},[a("div",{staticClass:"form__wrap"},[a("label",{staticClass:"form__label"},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.$v.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.name,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$v.name.$dirty,expression:"$v.name.$dirty"}]},[e.$v.name.required?e._e():a("div",{staticClass:"error"},[e._v("This field is required!")]),e.$v.name.alphaName?e._e():a("div",{staticClass:"error"},[e._v("Please enter a valid name!")]),e.$v.name.minLength?e._e():a("div",{staticClass:"error"},[e._v("Name must contain at least\n                "+e._s(e.$v.name.$params.minLength.min)+" symbols!\n            ")])])]),a("div",{staticClass:"form__group",class:{"form__group--error":e.$v.phone.$error}},[a("div",{staticClass:"form__wrap"},[a("label",{staticClass:"form__label"},[e._v("Phone")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.phone.$model,expression:"$v.phone.$model",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.$v.phone.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.phone,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$v.phone.$dirty,expression:"$v.phone.$dirty"}]},[e.$v.phone.required?e._e():a("div",{staticClass:"error"},[e._v("This field is required!")]),e.$v.phone.numeric?e._e():a("div",{staticClass:"error"},[e._v("Phone must contain digits only!")]),e.$v.phone.minLength?e._e():a("div",{staticClass:"error"},[e._v("Phone length must contain at least 10 digits!")])])]),a("div",{staticClass:"form__group",class:{"form__group--error":e.$v.email.$error}},[a("div",{staticClass:"form__wrap"},[a("label",{staticClass:"form__label"},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.$v.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.email,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$v.email.$dirty,expression:"$v.email.$dirty"}]},[e.$v.email.required?e._e():a("div",{staticClass:"error"},[e._v("This field is required!")]),e.$v.email.email?e._e():a("div",{staticClass:"error"},[e._v("Please enter a valid email!")])])]),a("div",{staticClass:"form__group form__group--checkbox"},[a("label",{class:["form__check",{checked:e.agree}],attrs:{for:"agreement"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{type:"checkbox",id:"agreement"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);r.checked?i<0&&(e.agree=a.concat([n])):i>-1&&(e.agree=a.slice(0,i).concat(a.slice(i+1)))}else e.agree=s}}}),a("span",[e._v("I agree the processing of personal data")])])]),a("div",{staticClass:"form-group form__submit"},[a("button",{staticClass:"form__btn",attrs:{type:"submit",disabled:!e.agree},on:{click:e.submitForm}},[e._v("Get in touch")])])])},j=[],W=(a("7f7f"),a("1dce")),G=a.n(W),P=a("bc3a"),q=a.n(P),E=a("a7fe"),N=a.n(E),L=a("b5ae"),U=a("73e4"),B=a.n(U);r["a"].use(N.a,q.a),r["a"].use(G.a),r["a"].use(B.a,{timeout:1500,progressBar:!0,layout:"bottomRight"});var F=L["helpers"].regex("alpha",/^[a-zA-Zа-яА-Я\s-]*$/),I={data:function(){return{name:"",email:"",phone:"",agree:!1}},validations:{name:{required:L["required"],alphaName:F,minLength:Object(L["minLength"])(3)},email:{required:L["required"],email:L["email"]},phone:{required:L["required"],numeric:L["numeric"],minLength:Object(L["minLength"])(10)}},methods:{clearForm:function(){var e=this;setTimeout((function(){var t=["","",""];e.name=t[0],e.email=t[1],e.phone=t[2],e.agree=t[3],e.$v.$reset()}),200)},submitForm:function(e){var t=this;this.$v.$touch(),this.$v.$invalid||this.$v.$error?(e.preventDefault(),this.$noty.error("Please enter valid data.")):(this.agree=!1,r["a"].axios.post("https://httpbin.org/post",{name:this.name,email:this.email,phone:this.phone}).then((function(e){console.log(e),200==e.status&&t.$noty.success("Thank you for getting in touch!"),t.clearForm()})).catch((function(e){console.error(e),t.$noty.error("Error! Please try one more time."),t.clearForm()}))),e.preventDefault()}},mounted:function(){this.$v.$reset()}},J=I,R=(a("c4e7"),Object(u["a"])(J,M,j,!1,null,null,null)),D=R.exports,z={components:{ContactForm:D}},V=z,K=(a("72ab"),Object(u["a"])(V,w,S,!1,null,"01a7a8ea",null)),Y=K.exports,Z={data:function(){return{contacts:{}}},components:{TopSection:p,ContactsForm:Y,Offices:k}},H=Z,X=(a("5c0b"),Object(u["a"])(H,s,n,!1,null,null,null)),Q=X.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("e332"),s=a.n(r);s.a},"6a68":function(e,t,a){},"72ab":function(e,t,a){"use strict";var r=a("deca"),s=a.n(r);s.a},c4e7:function(e,t,a){"use strict";var r=a("6a68"),s=a.n(r);s.a},d109:function(e,t,a){},deca:function(e,t,a){},e332:function(e,t,a){},f48e:function(e,t,a){},f649:function(e,t,a){"use strict";var r=a("f48e"),s=a.n(r);s.a}});
//# sourceMappingURL=app.67a71d9a.js.map