(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{351:function(t,e,o){"use strict";o(21),o(123),o(11),o(35),o(89);e.a={props:{m:String,p:String,noMdbClass:Boolean},computed:{mdbClass:function(){if(!this.noMdbClass){var t=[],e=[];return this.m&&this.m.split(" ").length>1&&this.m.split(" ").forEach((function(e){t.push("m".concat(e.split("")[0],"-").concat(e.split("")[1]))})),this.p&&this.p.split(" ").length>1&&this.p.split(" ").forEach((function(t){e.push("p".concat(t.split("")[0],"-").concat(t.split("")[1]))})),[!!this.m&&(this.m.split(" ").length>1?t:this.m.split("").length>1?"m".concat(this.m.split("")[0],"-").concat(this.m.split("")[1]):"m-".concat(this.m)),!!this.p&&(this.p.split(" ").length>1?e:this.p.split("").length>1?"p".concat(this.p.split("")[0],"-").concat(this.p.split("")[1]):"p-".concat(this.p))]}}}}},821:function(t,e,o){"use strict";o.r(e),o.d(e,"mdbCard",(function(){return n}));var c=o(351),n={props:{tag:{type:String,default:"div"},cascade:{type:Boolean,default:!1},wide:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},testimonial:{type:Boolean,default:!1},personal:{type:Boolean,default:!1},news:{type:Boolean,default:!1},ecommerce:{type:Boolean,default:!1},collection:{type:Boolean,default:!1},pricing:{type:Boolean,default:!1},color:{type:String},textColor:{type:String},border:{type:String}},computed:{className:function(){return["card",this.cascade?"card-cascade":"",this.wide?"card-cascade wider":"",this.narrow?"card-cascade narrower":"",this.reverse?"card-cascade wider reverse":"",this.dark?"card-dark":"",this.testimonial?"testimonial-card":"",this.personal?"card-personal":"",this.news?"news-card":"",this.ecommerce&&"card-ecommerce",this.collection&&"collection-card",this.pricing&&"pricing-card",this.color&&!this.textColor?this.color+" white-text":!!this.textColor&&this.color+" "+this.textColor+"-text",this.border&&"border-"+this.border,this.mdbClass]}},mixins:[c.a]},l=n,r=o(3),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:t.className},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);