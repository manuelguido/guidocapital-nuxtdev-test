(window.webpackJsonp=window.webpackJsonp||[]).push([[253,63,75,79,81,86,87,88,154,155,156,157,158,232,235],{1077:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(36),n(11),n(69),{layout:"dashboard",middleware:["client"],data:function(){return{title:"Tenencias",layoutIcon:"iconly-Graph",userCryptocurrencies:null,loadingData:!0,holdingsTitle:"Composición de cartera"}},head:function(){return{title:this.title}},computed:{user:function(){return JSON.parse(this.$store.getters["user/user"])}},mounted:function(){this.loadUserCryptocurrencies()},methods:{fetchCryptocurrencies:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"client/cryptocurrencies",n=localStorage.getItem("access_token_bearer").toString(),e.next=4,t.$axios.$get("client/cryptocurrencies",{headers:{Accept:"application/json",Authorization:n}});case 4:r=e.sent,t.userCryptocurrencies=r,r.lenght>0&&localStorage.setItem("userCryptocurrencies",JSON.stringify(r.userCryptocurrencies)),t.loadingData=!1;case 8:case"end":return e.stop()}}),e)})))()},loadUserCryptocurrencies:function(){if(null!==localStorage.userCryptocurrencies){var t=localStorage.getItem("userCryptocurrencies");this.userCryptocurrencies=JSON.parse(t),this.loadingData=!1}this.fetchCryptocurrencies()}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DualLayout",{attrs:{icon:t.layoutIcon,title:t.title}},[n("div",{staticClass:"row justify-content-center"},[n("TextSiteTitle",{attrs:{text:t.title}}),t._v(" "),n("div",{staticClass:"col-12 col-lg-9 col-xl-6"},[n("Card",[n("CardHead",{attrs:{title:t.holdingsTitle}}),t._v(" "),n("CardBody",[n("ClientCryptocurrencyList",{attrs:{cryptocurrencies:t.userCryptocurrencies,loading:t.loadingData}})],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextSiteTitle:n(449).default,CardHead:n(410).default,ClientCryptocurrencyList:n(1056).default,CardBody:n(398).default,Card:n(399).default,DualLayout:n(439).default})},378:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("079549ba",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("048f019e",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("c4b226e2",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("e59d002a",content,!0,{sourceMap:!1})},383:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("5ceef1d6",content,!0,{sourceMap:!1})},384:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("34fd0378",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("225ef42b",content,!0,{sourceMap:!1})},386:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("030802f2",content,!0,{sourceMap:!1})},389:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("4e72bae6",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("1612ebac",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";n(378)},397:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card-title[data-v-ccf41d7a]{text-transform:uppercase;font-size:1rem;font-weight:600}.theme-light .ls-card-title[data-v-ccf41d7a]{color:var(--theme-dark-3)}",""]),t.exports=r},398:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CardBody",props:{align:{type:String,default:"left"},tag:{type:String,default:"div"},title:{type:String,default:""}},computed:{classList(){return["ls-card-body",this.alignClass,this.dualScreenClassList]},alignClass(){return`text-${this.align}`},dualScreenClassList(){return this.dualScreen?"dual-screen":""}}}),l=(n(406),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.classList},[t.title?n("CardBodyTitle",{attrs:{title:t.title}}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"79c99cf2",null);e.default=component.exports;installComponents(component,{CardBodyTitle:n(400).default})},399:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"Card",props:{dualScreen:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},tag:{type:String,default:"div"}},computed:{classList(){return["ls-card",this.shadowClass,this.dualScreenClassList,this.fullHeightClassList,this.loadingPlaceholderClassList]},dualScreenClassList(){return this.dualScreen?"dual-screen":""},fullHeightClassList(){return this.fullHeight?"full-height":""},loadingPlaceholderClassList(){return this.loading?"loading-placeholder":""},shadowClass(){return this.shadow?"sdow-soft":""}}}),l=(n(408),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._t("default")],2)}),[],!1,null,"4f55e776",null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CardBodyTitle",props:{align:{type:String,default:"left"},tag:{type:String,default:"h1"},title:{type:String,default:"h1"}},computed:{classList(){return["ls-card-title",this.alignClass]},alignClass(){return`text-${this.align}`}}}),l=(n(396),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"ccf41d7a",null);e.default=component.exports},402:function(t,e,n){"use strict";n(380)},403:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card-title[data-v-38607937]{font-size:1rem;font-weight:500;letter-spacing:.05rem;margin:0}.theme-light .ls-card-title[data-v-38607937]{color:var(--theme-dark-3)}.theme-dark .ls-card-title[data-v-38607937]{color:var(--theme-light-3)}",""]),t.exports=r},404:function(t,e,n){"use strict";n(381)},405:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card-subtitle[data-v-1b83d6f4]{font-size:1rem;font-weight:500;letter-spacing:.05rem;margin:0}",""]),t.exports=r},406:function(t,e,n){"use strict";n(382)},407:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card-body[data-v-79c99cf2]{border-bottom-left-radius:var(--rounded-lg);border-bottom-right-radius:var(--rounded-lg)}.ls-card:not(.dual-sceen) .ls-card-body[data-v-79c99cf2]{padding:0 1.5rem 1.5rem}@media screen and (max-width:992px){.ls-card.dual-screen .ls-card-body[data-v-79c99cf2]{padding:0}}",""]),t.exports=r},408:function(t,e,n){"use strict";n(383)},409:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card.full-height[data-v-4f55e776]{height:100%}.ls-card[data-v-4f55e776]:not(.loading-placeholder){border:0;border-radius:var(--rounded-lg);font-weight:400}.ls-card[data-v-4f55e776]:not(.loading-placeholder),.theme-light .ls-card[data-v-4f55e776]:not(.loading-placeholder){background-color:var(--theme-light-1)}.theme-dark .ls-card[data-v-4f55e776]:not(.loading-placeholder){background-color:var(--theme-dark-2)}",""]),t.exports=r},410:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CardHead",props:{align:{type:String,default:"left"},subtitle:{type:String,default:""},tag:{type:String,default:"div"},title:{type:String,default:""}},computed:{classList(){return["ls-card-head",this.borderClass,this.alignClass,this.colorClass]},borderClass(){return this.border?"bordered":""},alignClass(){return`text-${this.align}`},colorClass(){return`text-color-${this.color}`}}}),l=(n(420),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.classList},[n("span",{staticClass:"d-flex justify-content-start"},[t.title?n("CardHeadTitle",{attrs:{title:t.title,align:t.align}}):t._e(),t._v(" "),n("span",{staticClass:"ml-2"},[t.subtitle?n("CardHeadSubtitle",{attrs:{subtitle:t.subtitle,align:t.align}}):t._e()],1)],1),t._v(" "),n("span",[t._t("option")],2)])}),[],!1,null,"3ae5f701",null);e.default=component.exports;installComponents(component,{CardHeadTitle:n(414).default,CardHeadSubtitle:n(415).default})},413:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TextTitle",props:{tag:{type:String,default:"h1"},text:{type:String,default:""}},data:()=>({classList:"h4-responsive text-alpha-80"})}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},414:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CardHeadTitle",props:{align:{type:String,default:"left"},tag:{type:String,default:"h1"},title:{type:String,default:"h1"}},computed:{classList(){return["ls-card-title",this.alignClass]},alignClass(){return`text-${this.align}`}}}),l=(n(402),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"38607937",null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CardHeadTitle",props:{align:{type:String,default:"left"},tag:{type:String,default:"h6"},subtitle:{type:String,default:""}},computed:{classList(){return["ls-card-title","text-alpha-40",this.alignClass]},alignClass(){return`text-${this.align}`}}}),l=(n(404),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v("\n  "+t._s(t.subtitle)+"\n")])}),[],!1,null,"1b83d6f4",null);e.default=component.exports},416:function(t,e,n){"use strict";n(384)},417:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".backlink[data-v-43045a57]{align-items:center;background:hsla(0,0%,100%,.2);border-radius:16px;color:#fff;display:flex;height:45px;justify-content:center;left:0;margin:1em 0 0 2em;position:absolute!important;transition:all .05s;top:0;width:45px;cursor:pointer}.backlink span[data-v-43045a57]{font-size:1.25em}.backlink[data-v-43045a57]:active{opacity:.5}",""]),t.exports=r},418:function(t,e,n){"use strict";n(385)},419:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".icon-container[data-v-4f87c43d]{align-items:center;border-radius:100px;color:#fff;display:flex;height:50px;justify-content:center;width:50px;background:hsla(0,0%,100%,.2)}",""]),t.exports=r},420:function(t,e,n){"use strict";n(386)},421:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".ls-card-head[data-v-3ae5f701]{align-items:center;border-top-left-radius:var(--rounded-lg);border-top-right-radius:var(--rounded-lg);display:flex;height:4rem;justify-content:space-between;padding:0 1.5rem}.theme-light .ls-card-head.bordered[data-v-3ae5f701]{border-bottom:1px solid var(--black-alpha-30)}.theme-dark .ls-card-head.bordered[data-v-3ae5f701]{border-bottom:1px solid var(--white-alpha-30)}",""]),t.exports=r},423:function(t,e,n){"use strict";n.r(e);var r={name:"Backlink",data:function(){return{icon:"iconly-Arrow-Left-2 icli"}},computed:{iconClassList:function(){return this.icon}},methods:{goBack:function(){this.$router.go(-1)}}},l=(n(416),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backlink",on:{click:function(e){return t.goBack()}}},[n("span",{class:t.iconClassList})])}),[],!1,null,"43045a57",null);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{type:String,default:""}}},l=(n(418),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon-container mb-3"},[n("Icon",{attrs:{icon:t.icon,type:"icli",size:"lg"}})],1)}),[],!1,null,"4f87c43d",null);e.default=component.exports;installComponents(component,{Icon:n(65).default})},425:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"DualLayoutBannerTitle",props:{tag:{type:String,default:"h1"},text:{type:String,default:""}},data:()=>({classList:"h4-responsive white-alpha-80"})}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},426:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"DualLayoutBannerTitle",props:{tag:{type:String,default:"h2"},text:{type:String,default:""}},data:()=>({classList:"h5-responsive white-alpha-60"})}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.classList},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},428:function(t,e,n){"use strict";n(389)},429:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".banner[data-v-562f593b]{align-items:center;background:var(--color-a);border-bottom-left-radius:24px!important;border-bottom-right-radius:24px!important;display:flex;flex-direction:column;justify-content:center;margin:0;min-height:16vh;width:100vw}.subtitle[data-v-562f593b]{color:#fff;font-size:1em;font-weight:400}",""]),t.exports=r},432:function(t,e,n){"use strict";n.r(e);var r={props:{icon:{type:String,default:""},mobile:{type:Boolean,default:!0},title:{type:String,default:""},subtitle:{type:String,default:""},backlink:{type:Boolean,default:!1},tag:{type:String,default:"div"}},computed:{bannerClassName:function(){return["banner shadow-sm text-center",this.mobile?"web-hide":""]}}},l=(n(428),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.bannerClassName},[t.backlink?n("Backlink"):t._e(),t._v(" "),t.icon?n("DualLayoutBannerIcon",{attrs:{icon:t.icon}}):t._e(),t._v(" "),t.title?n("DualLayoutBannerTitle",{attrs:{text:t.title}}):t._e(),t._v(" "),t.subtitle?n("DualLayoutBannerSubtitle",{attrs:{text:t.subtitle}}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"562f593b",null);e.default=component.exports;installComponents(component,{Backlink:n(423).default,DualLayoutBannerIcon:n(424).default,DualLayoutBannerTitle:n(425).default,DualLayoutBannerSubtitle:n(426).default})},439:function(t,e,n){"use strict";n.r(e);var r={props:{backlink:{type:Boolean,default:!1},icon:{type:String,default:""},subtitle:{type:String,default:""},title:{type:String,default:""}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dual-layout row justify-content-center"},[n("div",{staticClass:"col-12"},[n("DualLayoutBanner",{attrs:{icon:t.icon,title:t.title,subtitle:t.subtitle,backlink:t.backlink}},[t._t("banner")],2)],1),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"container-fluid py-4 px-3"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DualLayoutBanner:n(432).default})},442:function(t,e,n){"use strict";n(395)},443:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".theme-dark .hr[data-v-06cb8450]{border-color:var(--theme-dark-2)}",""]),t.exports=r},449:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TextSiteTitle",props:{noColumn:{type:Boolean,default:!1},tag:{type:String,default:"h1"},text:{type:String,default:""}}}),l=(n(442),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.noColumn?n("span",[n("TextTitle",{attrs:{tag:t.tag,text:t.text}}),t._v(" "),n("hr",{staticClass:"hr"})],1):n("div",{staticClass:"col-12 mb-4 mobile-hide"},[n("span",[n("TextTitle",{attrs:{tag:t.tag,text:t.text}}),t._v(" "),n("hr",{staticClass:"hr"})],1)])}),[],!1,null,"06cb8450",null);e.default=component.exports;installComponents(component,{TextTitle:n(413).default})}}]);