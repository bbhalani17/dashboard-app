(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,6],{313:function(t,e,n){t.exports=n.p+"158a1744d113c3be1bf9d6b7f07f2396.svg"},314:function(t,e,n){t.exports=n.p+"6120f65101a5c87261290d2d452dc806.svg"},315:function(t,e,n){t.exports=n.p+"06bd5e7f1ce2515b102ee909885c2536.svg"},316:function(t,e,n){t.exports=n.p+"cdcc853057ffd1bf5d8eed5dfb006742.svg"},317:function(t,e,n){t.exports=n.p+"2fcd3ac92d2bf8d05c3502f507fc04ea.svg"},318:function(t,e,n){t.exports=n.p+"54764838d5b3a13389ee3ff9a6bb84c6.svg"},319:function(t,e,n){t.exports=n.p+"d14b399169b6c3aa7cfe66d185c8c99d.svg"},320:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("04d11b44",content,!0,{sourceMap:!1})},321:function(t,e,n){t.exports=n.p+"6596a234193fe4f6f88bfcb8d2bfda3f.svg"},322:function(t,e,n){t.exports=n.p+"b0577e9154ef085853ac7b581a93dda5.svg"},323:function(t,e,n){t.exports=n.p+"65d4fc46dd7acbf97c30a9976277e7c4.svg"},324:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("e40dd7a4",content,!0,{sourceMap:!1})},325:function(t,e,n){t.exports=n.p+"0104285d070280af2409797b3043e5f4.svg"},326:function(t,e,n){t.exports=n.p+"ee07a1b54475fadfb52f54fb177b8097.svg"},327:function(t,e,n){t.exports=n.p+"32032391fd996da2defb1413db2ba3b3.svg"},328:function(t,e,n){t.exports=n.p+"d5480cb992892db6a991169abf6d2e54.svg"},329:function(t,e,n){t.exports=n.p+"ca4f3cccb5e75e4d6dcbadbfa9b8f3b9.svg"},330:function(t,e,n){t.exports=n.p+"4d8e68b6266c2c97fb1be149942910bf.svg"},331:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link active"},[r("img",{attrs:{src:n(317),alt:"Set spend limit"}}),t._v("\n        Set spend limit\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link"},[r("img",{attrs:{src:n(318),alt:"Add to GPay"}}),t._v("\n        Add to GPay\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link"},[r("img",{attrs:{src:n(319),alt:"Replace card"}}),t._v("\n        Replace card\n      ")])])}],o=(n(5),n(4),n(2),n(1),n(6),n(3),n(7),n(0)),c=(n(226),n(78));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"CardTransactions",props:{cardIndex:{type:Number,default:function(){return 0}},cardName:{type:String,default:function(){return""}},cardNumber:{type:[String,Number],default:function(){return null}},frozen:{type:Boolean,default:function(){return!1}},transactions:{type:Array,default:function(){return[]}}},methods:l(l({},Object(c.b)(["freezeCard"])),{},{freezeCard:function(){if(void 0!==this.cardIndex&&void 0!==this.frozen){var data={index:this.cardIndex,state:!this.frozen};this.$store.commit("freezeCard",data)}},cancelCard:function(){if(void 0!==this.cardIndex){var data={index:this.cardIndex};this.$store.commit("cancelCard",data)}},showModal:function(){this.$refs["cancel-modal"].show()}})},v=(n(333),n(54)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link",on:{click:t.freezeCard}},[r("img",{attrs:{src:n(315),alt:"Freeze card"}}),t._v("\n        "+t._s(t.frozen?"Unfreeze card":"Freeze card")+"\n      ")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{staticClass:"nav-item"},[r("div",{staticClass:"nav-link",on:{click:t.showModal}},[r("img",{attrs:{src:n(316),alt:"Cancel card"}}),t._v("\n        Cancel card\n      ")])])]),t._v(" "),r("b-modal",{ref:"cancel-modal",attrs:{title:"Are you sure you want to cancel card?"},on:{ok:t.cancelCard}},[r("div",[r("b",[t._v("Name:")]),t._v(" "+t._s(t.cardName))]),t._v(" "),r("div",[r("b",[t._v("Card Number:")]),t._v(" "+t._s(t.cardNumber))])])],1)}),r,!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"refund-icon"},[e("img",{attrs:{src:n(321),alt:"Refund on debit card"}})])}],o={name:"CardTransactions",props:{transactions:{type:Array,default:function(){return[]}}}},c=(n(339),n(54)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.transactions,(function(e){return r("div",{key:e.id,staticClass:"transactions"},[r("div",{staticClass:"logo"},[e.logo?r("img",{attrs:{src:n(335)("./"+e.logo),alt:e.name}}):t._e()]),t._v(" "),r("div",{staticClass:"company-details"},[r("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"date"},[t._v(t._s(e.date))]),t._v(" "),r("div",{staticClass:"message"},[t._m(0,!0),t._v(" "),r("div",{staticClass:"refund-message"},[t._v("\n          "+t._s(e.debit?"Charged to debit card":"Refund on debit card")+"\n        ")])])]),t._v(" "),r("div",{staticClass:"amount-details"},[r("div",{staticClass:"amount",class:{debit:e.debit}},[t._v("\n        "+t._s(e.debit?"-":"+")+" S$ "+t._s(e.amount)+"\n      ")]),t._v(" "),r("img",{attrs:{src:n(322),alt:"Amount details"}})])])})),0)}),r,!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n(320)},334:function(t,e,n){var r=n(65)(!1);r.push([t.i,"ul.navbar-nav{width:100%;height:56px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}ul.navbar-nav li{display:inline-block}.nav-link{text-align:center;color:#0c365a;font-size:13px;display:flex;flex-direction:column;justify-content:center;align-items:center}.nav-link img{width:32px;height:32px}",""]),t.exports=r},335:function(t,e,n){var map={"./Account.svg":231,"./AspireLogo.svg":329,"./BusinessandFinance.svg":321,"./Carddetails.svg":325,"./Credit.svg":230,"./Deactivatecard.svg":316,"./DownArrow.svg":314,"./FileStorage.svg":336,"./Flights.svg":337,"./Freezecard.svg":315,"./GPay.svg":318,"./GreenLogo.svg":327,"./Logo.svg":227,"./Megaphone.svg":338,"./Next.svg":322,"./Payments.svg":229,"./RecentTracks.svg":326,"./Replacecard.svg":319,"./Setspendlimit.svg":317,"./UpArrow.svg":313,"./VisaLogo.svg":330,"./box.svg":323,"./pay.svg":228,"./showcard.svg":328};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=335},336:function(t,e,n){t.exports=n.p+"1ae4a8be282ba3363c6d576bf7d1aa8a.svg"},337:function(t,e,n){t.exports=n.p+"b73ad47f0a8f4ba17804fba1ba30d3db.svg"},338:function(t,e,n){t.exports=n.p+"fcf8bdf3280f45ff506e3f636e398b79.svg"},339:function(t,e,n){"use strict";n(324)},340:function(t,e,n){var r=n(65)(!1);r.push([t.i,".transactions{display:flex;justify-content:space-between;padding:24px}.transactions .logo{background:rgba(0,157,255,.101961);width:48px;height:48px;border-radius:100%;position:relative;z-index:0}.transactions .logo img{position:absolute;z-index:1;top:16px;left:15px;width:16px;height:15px}.transactions .company-details .name{font-size:14px;color:#222;font-weight:400}.transactions .company-details .date{font-size:13px;color:#aaa}.transactions .company-details .message{display:flex;justify-content:space-between;padding-top:12px}.transactions .company-details .message .refund-icon{background:#325baf;border-radius:10px;width:24px;height:20px;position:relative;z-index:0}.transactions .company-details .message .refund-icon img{position:absolute;z-index:1;width:10px;height:7px;top:6px;left:7px}.transactions .company-details .message .refund-message{color:#325baf;font-size:12px;font-weight:400;padding-left:5px}.transactions .amount-details{display:flex;justify-content:space-between}.transactions .amount-details .amount{font-size:14px;color:#01d167;font-weight:600;padding-right:5px}.transactions .amount-details .amount.debit{color:#222}.transactions .amount-details img{width:8px;height:12px;margin-top:5px}",""]),t.exports=r},341:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("8c3fae78",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(341)},344:function(t,e,n){var r=n(65)(!1);r.push([t.i,"section{position:absolute;width:100%;left:0;top:490px;z-index:2;background:#fff;color:#000;padding-bottom:72px}section,section .options{border-top-left-radius:10px;border-top-right-radius:10px}section .options{padding:20px;background-color:#edf3ff}section .transactions-wrapper{padding:24px}section .transactions-wrapper .card{margin:24px auto;border:1px solid #f5f5f5!important;box-shadow:0 0 8px rgba(0,0,0,.0392157);max-width:366px;border-radius:10px!important}section .transactions-wrapper .card header{padding:0 24px!important;font-size:14px;background:#fff;border:0;color:#0c365a;display:flex;justify-content:space-between;align-items:center;background-color:#fafcff;height:72px}",""]),t.exports=r},371:function(t,e,n){"use strict";n.r(e);n(226);var r=n(331),o=n(332),c={name:"CardDetails",components:{CardOptions:r.default,CardTransactions:o.default},props:{cardIndex:{type:Number,default:function(){return 0}},card:{type:Object,default:function(){return null}}},data:function(){return{visible:!1,visible2:!0}}},d=(n(343),n(54)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"options"},[r("card-options",{attrs:{"card-index":t.cardIndex,"card-name":t.card?t.card.name:"","card-number":t.card?t.card.fullNumber:null,frozen:!!t.card&&t.card.frozen}})],1),t._v(" "),r("div",{staticClass:"transactions-wrapper"},[r("div",{staticClass:"accordion",attrs:{role:"tablist"}},[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("div",[r("img",{attrs:{src:n(325),alt:"Card details"}}),t._v("\n            Card details\n          ")]),t._v(" "),t.visible?r("img",{attrs:{src:n(313),alt:"up arrow"}}):r("img",{attrs:{src:n(314),alt:"down arrow"}})]),t._v(" "),r("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1),t._v(" "),r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("div",[r("img",{attrs:{src:n(326),alt:"Recent transactions"}}),t._v("\n            Recent transactions\n          ")]),t._v(" "),t.visible?r("img",{attrs:{src:n(313),alt:"up arrow"}}):r("img",{attrs:{src:n(314),alt:"down arrow"}})]),t._v(" "),r("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[r("card-transactions",{attrs:{transactions:t.card.transactions}})],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardOptions:n(331).default,CardTransactions:n(332).default})},373:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("1b0bd7e4",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);var r={name:"AppCard",components:{CardDetails:n(371).default},props:{cards:{type:Array,default:function(){return[]}}},data:function(){return{slide:0,showCardNumber:!1}},computed:{validCard:function(){return!!this.getActiveCard},getActiveCard:function(){return this.cards.length>0&&void 0!==this.cards[this.slide]?this.cards[this.slide]:null},activeCardState:function(){return!(!this.getActiveCard||void 0===this.getActiveCard.frozen)&&this.getActiveCard.frozen}},methods:{showCard:function(){this.showCardNumber=!this.showCardNumber}}},o=(n(377),n(54)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cards-carousel"},[r("div",{staticClass:"show-card-wrapper"},[r("div",{staticClass:"show-card",class:{frozen:t.activeCardState},on:{click:t.showCard}},[r("img",{attrs:{src:n(328),alt:"Show card number"}}),t._v(" "),t.showCardNumber?r("div",[t._v("Hide card number")]):r("div",[t._v("Show card number")])])]),t._v(" "),r("b-carousel",{attrs:{id:"carousel-1",interval:0,indicators:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.cards,(function(e){return r("b-carousel-slide",{key:e.lastNumber,class:e.type,attrs:{"img-blank":"","img-alt":e.name}},[r("div",{staticClass:"container-fluid card-info",class:{frozen:e.frozen}},[r("div",{staticClass:"row logo"},[r("div",{staticClass:"col"},[r("img",{attrs:{src:n(329),alt:"AspireLogo"}})])]),t._v(" "),r("div",{staticClass:"row name"},[r("div",{staticClass:"col"},[r("h1",[t._v(t._s(e.name))])])]),t._v(" "),r("div",{staticClass:"row card-number"},[t.showCardNumber?e.fullNumber?r("div",{staticClass:"col"},[r("div",{staticClass:"full-number"},[t._v(t._s(e.exactNum[0]))]),t._v(" "),r("div",{staticClass:"full-number"},[t._v(t._s(e.exactNum[1]))]),t._v(" "),r("div",{staticClass:"full-number"},[t._v(t._s(e.exactNum[2]))]),t._v(" "),r("div",{staticClass:"full-number"},[t._v(t._s(e.lastNumber))])]):t._e():r("div",{staticClass:"col"},[t._l(3,(function(i){return r("div",{key:i,staticClass:"four-dots"},t._l(4,(function(t){return r("span",{key:t})})),0)})),t._v(" "),r("div",{staticClass:"last-number"},[t._v(t._s(e.lastNumber))])],2)]),t._v(" "),r("div",{staticClass:"row validity-row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"validity"},[t._v("Thru: "+t._s(e.validity))]),t._v(" "),r("div",{staticClass:"cvv"},[t._v("CVV:")]),t._v(" "),r("div",{staticClass:"stars"},[t._v(" ***")])])]),t._v(" "),r("div",{staticClass:"row logo"},[r("div",{staticClass:"col"},["visa"===e.type?r("img",{attrs:{src:n(330),alt:"VisaLogo"}}):t._e()])])])])})),1),t._v(" "),t.validCard?r("card-details",{attrs:{"card-index":t.slide,card:t.getActiveCard}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardDetails:n(371).default})},377:function(t,e,n){"use strict";n(373)},378:function(t,e,n){var r=n(65)(!1);r.push([t.i,".show-card-wrapper{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;cursor:pointer}.show-card{width:151px;height:40px;font-size:12px;background:#fff;color:#01d167;display:flex;justify-content:center;border-top-left-radius:10px;border-top-right-radius:10px;position:relative;z-index:0;top:10px;line-height:28px;cursor:pointer}.show-card img{width:16px;height:16px;margin-right:5px;margin-top:6px}.carousel-indicators{top:245px;z-index:2}.carousel-indicators li{width:8px;height:8px;border-radius:10px;border:0}.carousel-indicators li.active{width:16px;background:#01d167}.tab-content .tab-pane{margin:0 auto;max-width:360px}.tab-content .carousel-item{border-radius:10px;max-width:360px;height:220px}.tab-content .visa{background:#01d167}.tab-content .master{background:#000}.card-info{text-align:left}.card-info .row{padding-left:10px}.card-info .logo .col{width:100%;display:flex;justify-content:flex-end;padding-right:24px}.card-info .logo img{width:74px;height:21px}.card-info .name{padding-top:10px}.card-info .name h1{font-size:22px;font-weight:400}.card-info .card-number{letter-spacing:3.5px;padding-top:10px}.card-info .card-number .col{display:flex;justify-content:space-between;max-width:90%}.card-info .card-number .four-dots span{height:8px;width:8px;background-color:#fff;border-radius:50%;display:inline-block;margin-left:5px}.card-info .card-number .four-dots span:first-child{margin-left:0}.card-info .card-number .full-number,.card-info .card-number .last-number{font-size:14px;line-height:25px}.card-info .validity-row{padding-top:19px;font-size:13px;font-weight:400}.card-info .validity-row .col{display:flex;justify-content:flex-start}.card-info .validity-row .cvv{padding-left:24px}.card-info .validity-row .stars{font-size:24px;line-height:32px}.carousel-caption{position:absolute;right:0;top:20px;width:100%;height:auto;left:0;z-index:1;padding:0}.frozen{opacity:.4;pointer-events:none}",""]),t.exports=r}}]);