(window.webpackJsonp=window.webpackJsonp||[]).push([[171,177,183],{1058:function(t,e,n){"use strict";n.r(e);var c=n(122),r=n(825),o=n(826),l={name:"BannerC",components:{verticalBar:r.default,leftTextBar:o.default},mixins:[c.a],data:function(){return{title:"¿Invertir solo en una criptomoneda?",coins:[{id:1,name:"Bitcoin",icon:"32x2/btc@2x.png",data_2018:100,data_2021:150},{id:2,name:"Ethereum",icon:"32x2/eth@2x.png",data_2018:80,data_2021:150},{id:3,name:"Eos",icon:"32x2/eos@2x.png",data_2018:90,data_2021:150}],capitalization_text:"Capitalización de las cryptodivisas entre los perídos de tiempo 2018 - 2021.<br> La capitalización de una criptomoneda es la multiplicación del número de monedas en circulación por el precio.",founds_text:"Tenemos más de 15 fondos puros.",options_text:"Podés elegir invertir 100% en Bitcoin, Ethereum, Polkadot, y más.",cryptos_image:"cryptos.png"}}},d=(n(938),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-c row uns"},[n("div",{staticClass:"container-fluid d-flex align-items-center p-5"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-xl-10 mb-4 mb-lg-5 pb-lg-5"},[n("h3",{staticClass:"h3-responsive text-dark fw-400 animated fadeInLeft"},[t._v("\n          "+t._s(t.title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"col-12 col-xl-10"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 col-xl-5 mb-5"},[n("div",{staticClass:"row justify-content-start"},[t._l(t.coins,(function(t){return n("vertical-bar",{key:t.id,attrs:{coin:t}})})),t._v(" "),n("left-text-bar",{attrs:{text:t.capitalization_text}})],2)]),t._v(" "),n("div",{staticClass:"col-12 col-md-6 offset-xl-1 mb-5 pt-5 pt-md-0"},[n("div",{staticClass:"row"},[n("img",{staticClass:"cryptos-image animated fadeIn mb-5",attrs:{src:t.imgPath()+t.cryptos_image,alt:"Cryptocurrencies"}}),t._v(" "),n("p",{staticClass:"h4-responsive fw-400 text-tertiary text-black-b"},[t._v("\n                "+t._s(t.founds_text)+"\n              ")]),t._v(" "),n("p",{staticClass:"h5-responsive fw-400 text-tertiary text-black-b mb-0"},[t._v("\n                "+t._s(t.options_text)+"\n              ")])])])])])])])])}),[],!1,null,"fb03e0d6",null);e.default=component.exports},669:function(t,e,n){var content=n(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("03a7c89c",content,!0,{sourceMap:!1})},670:function(t,e,n){var content=n(727);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("a098972c",content,!0,{sourceMap:!1})},724:function(t,e,n){"use strict";n(669)},725:function(t,e,n){var c=n(4)((function(i){return i[1]}));c.push([t.i,".icon[data-v-50126b88]{height:60px;width:60px}.bar-left[data-v-50126b88]{background:#7dc2bf;width:30px}.bar-right[data-v-50126b88]{background:#374248;width:30px}@media (max-width:991.98px){.years[data-v-50126b88]{font-size:14px}}",""]),t.exports=c},726:function(t,e,n){"use strict";n(670)},727:function(t,e,n){var c=n(4)((function(i){return i[1]}));c.push([t.i,".textbar[data-v-44ddc41b]{background-color:#f9f9f9;margin-left:-30vw}.inner[data-v-44ddc41b]{margin-left:30vw!important;font-size:1.1em}",""]),t.exports=c},783:function(t,e,n){var content=n(939);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("48c8c16a",content,!0,{sourceMap:!1})},825:function(t,e,n){"use strict";n.r(e);var c={mixins:[n(122).a],props:{coin:{type:Object,default:function(){}}}},r=(n(724),n(3)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-4 col-lg-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center mb-4"},[n("img",{staticClass:"icon",attrs:{src:t.cryptosPath()+t.coin.icon,alt:t.coin.name}})]),t._v(" "),n("div",{staticClass:"col-12 d-flex justify-content-center align-items-end"},[n("div",{staticClass:"bar-left mr-2",style:"height: "+t.coin.data_2018+"px;"}),t._v(" "),n("div",{staticClass:"bar-right ml-2",style:"height: "+t.coin.data_2021+"px;"})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 text-center"},[n("p",{staticClass:"my-2 text-dark w-600 years"},[t._v("2018 - 2021")])])}],!1,null,"50126b88",null);e.default=component.exports},826:function(t,e,n){"use strict";n.r(e);var c={props:{text:{type:String,default:""}}},r=(n(726),n(3)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-4 my-lg-5 p-4 textbar"},[n("div",{staticClass:"inner font-tertiary"},[n("p",[t._v(t._s(t.text))])])])}),[],!1,null,"44ddc41b",null);e.default=component.exports},938:function(t,e,n){"use strict";n(783)},939:function(t,e,n){var c=n(4)((function(i){return i[1]}));c.push([t.i,".banner-c[data-v-fb03e0d6]{min-height:80vh;background:#fcfcfc}@media (min-width:992px){.side[data-v-fb03e0d6]{width:50vw;height:100vh}}@media (max-width:992px){.side[data-v-fb03e0d6]{width:100vw}}.cryptos-image[data-v-fb03e0d6]{max-width:90vw}",""]),t.exports=c}}]);