(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{390:function(t,c,e){"use strict";var r={data:function(){return{dev_path:"http://127.0.0.1:8000/",prod_path:"https://guidocapitalback.com/",prod_asset_path:"https://guidocapitalback.com/public/",img:"img/",cryptos:"img/cryptos/",currencies:"img/currencies/"}},methods:{assetPath:function(){return this.prod_asset_path},imgPath:function(){return this.assetPath()+this.img},cryptosPath:function(){return this.assetPath()+this.cryptos},currenciesPath:function(){return this.assetPath()+this.currencies}}};c.a=r},597:function(t,c,e){"use strict";e(90);c.a={data:function(){return{cmcApiPath:"https://s2.coinmarketcap.com/static/img/coins/64x64/"}},methods:{cmcImage:function(t){return 0!==t?"".concat(this.cmcApiPath).concat(t,".png"):""}}}},618:function(t,c,e){var content=e(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("5897ea81",content,!0,{sourceMap:!1})},681:function(t,c,e){"use strict";e(618)},682:function(t,c,e){var r=e(3)((function(i){return i[1]}));r.push([t.i,".outer[data-v-866f2fd2]{overflow:hidden;background:#fff;background-position:50%;background-repeat:no-repeat;background-size:100%;border-radius:50px;padding:0;display:flex;align-content:center;justify-items:center}.outer.medium[data-v-866f2fd2]{width:40px;height:40px}.outer.large[data-v-866f2fd2]{width:50px;height:50px}.outer img[data-v-866f2fd2]{margin:0}.outer.medium img[data-v-866f2fd2]{width:40px;height:40px;width:50px;height:50px}",""]),t.exports=r},698:function(t,c,e){"use strict";e.r(c);var r=e(390),n=e(597),o={mixins:[r.a,n.a],props:{cryptocurrency:{type:Object,default:function(){}},medium:{type:Boolean,default:!0},large:{type:Boolean,default:!1}},computed:{image:function(){var main=0!==this.cryptocurrency.cmc_id?this.cmcImage(this.cryptocurrency.cmc_id):this.cryptosPath()+this.cryptocurrency.icon;return'background-image: url("'.concat(main,'")')},imageSrc:function(){return this.cryptocurrency.cmc_id?this.cmcImage(this.cryptocurrency.cmc_id):this.cryptosPath(this.cryptocurrency.icon)},className:function(){return["outer",this.large?"large":"medium"]},imageClassName:function(){return["animated fadeIn"]}}},d=(e(681),e(2)),component=Object(d.a)(o,(function(){var t=this,c=t.$createElement;return(t._self._c||c)("span",{class:t.className,style:t.image})}),[],!1,null,"866f2fd2",null);c.default=component.exports}}]);