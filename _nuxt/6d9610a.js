(window.webpackJsonp=window.webpackJsonp||[]).push([[35,82,83],{347:function(t,e,r){"use strict";var n=r(13),o=r(7),l=r(89),c=r(20),d=r(14),f=r(48),h=r(188),m=r(66),v=r(9),x=r(68),N=r(67).f,y=r(35).f,_=r(16).f,C=r(348).trim,I="Number",w=o.Number,k=w.prototype,S=f(x(k))==I,E=function(t){var e,r,n,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l(I,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var F,T=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof T&&(S?v((function(){k.valueOf.call(r)})):f(r)!=I)?h(new w(E(e)),r,T):E(e)},A=n?N(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;A.length>B;B++)d(w,F=A[B])&&!d(T,F)&&_(T,F,y(w,F));T.prototype=k,k.constructor=T,c(o,I,T)}},348:function(t,e,r){var n=r(19),o="["+r(349)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},349:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},357:function(t,e,r){"use strict";r(11),r(69),r(361),r(347),r(21),r(54),r(38),r(363);var n={methods:{formatCurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var o="$ ",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),l=i.length>3?i.length%3:0;return o+(l?i.substr(0,l)+n:"")+i.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?r+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){console.log(t)}},formatCryptocurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=Number.isNaN(parseInt(t))?0:t;return(r/1).toFixed(e)},formatPercentage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Number.isNaN(parseInt(t))?0:t,n=(r/1).toFixed(2);return e?n:"% "+n}}};e.a=n},361:function(t,e,r){"use strict";var n=r(5),o=r(49),l=r(362),c=r(189),d=r(9),f=1..toFixed,h=Math.floor,m=function(t,e,r){return 0===e?r:e%2==1?m(t,e-1,r*t):m(t*t,e/2,r)},v=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},x=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},N=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,r,n,d,f=l(this),h=o(t),data=[0,0,0,0,0,0],y="",_="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(y="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*m(2,69,1))-69)<0?f*m(2,-e,1):f/m(2,e,1),r*=4503599627370496,(e=52-e)>0){for(v(data,0,r),n=h;n>=7;)v(data,1e7,0),n-=7;for(v(data,m(10,n,1),0),n=e-1;n>=23;)x(data,1<<23),n-=23;x(data,1<<n),v(data,1,1),x(data,2),_=N(data)}else v(data,0,r),v(data,1<<-e,0),_=N(data)+c.call("0",h);return _=h>0?y+((d=_.length)<=h?"0."+c.call("0",h-d)+_:_.slice(0,d-h)+"."+_.slice(d-h)):y+_}})},362:function(t,e,r){var n=r(48);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},363:function(t,e,r){r(5)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},592:function(t,e,r){var content=r(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("358809de",content,!0,{sourceMap:!1})},599:function(t,e,r){var content=r(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("ab6d2320",content,!0,{sourceMap:!1})},622:function(t,e,r){"use strict";r(592)},623:function(t,e,r){var n=r(3)((function(i){return i[1]}));n.push([t.i,".data-card.link[data-v-5bf10248]:hover{background:#fefeff;box-shadow:0 .1em .225em rgba(0,0,0,.25)!important}.card-body[data-v-5bf10248]{padding:0!important}.subtitle[data-v-5bf10248]{font-size:12px}.w-space-normal[data-v-5bf10248]{white-space:normal}",""]),t.exports=n},635:function(t,e,r){"use strict";r.r(e);r(347);var n={mixins:[r(357).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},value:{type:Number,default:0},currency:{type:Boolean,default:!1},percentage:{type:Boolean,default:!1}},computed:{className:function(){return["text-right h6-responsive fw-400",this.value<0?"text-danger":"text-success"]},cardClassName:function(){return"card-body p-0 d-flex justify-content-between align-items-center"},formattedValue:function(){return this.currency?this.formatCurrency(this.value):this.percentage?this.formatPercentage(this.value):this.value}}},o=(r(622),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.cardClassName,staticStyle:{"white-space":"normal !important"}},[r("span",{staticClass:"m-0 d-flex flex-column"},[t.title?r("span",{staticClass:"text-alpha-60"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.subtitle?r("span",{staticClass:"text-alpha-50 fw-400 subtitle"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")]):t._e()]),t._v(" "),r("span",{class:t.className},[r("span",[t._v(t._s(t.formattedValue))])])])}),[],!1,null,"5bf10248",null);e.default=component.exports},639:function(t,e,r){"use strict";r(599)},640:function(t,e,r){var n=r(3)((function(i){return i[1]}));n.push([t.i,".card-data[data-v-76a745fa]{border-radius:var(--rounded-lg);box-shadow:none;transition:all 0s}.theme-light .card-data[data-v-76a745fa]:not(.loading-placeholder){background:var(--theme-light-1)}.theme-dark .card-data[data-v-76a745fa]:not(.loading-placeholder){background:var(--theme-dark-2)}.theme-light .card-data.bordered[data-v-76a745fa]{border:1px solid var(--theme-light-3)!important}.theme-dark .card-data.bordered[data-v-76a745fa]{border:1px solid var(--theme-dark-3)!important}.theme-light .card-data.link[data-v-76a745fa]:hover{background:#fefeff;box-shadow:0 .1em .225em rgba(0,0,0,.25)}.theme-dark .card-data.link[data-v-76a745fa]:hover{background:var(--theme-dark-3)}.card-data.disabled[data-v-76a745fa]{opacity:.5!important;cursor:not-allowed!important}.subtitle[data-v-76a745fa]{font-size:12px}@media screen and (max-width:991px){.mobile-b-0[data-v-76a745fa]{border:none!important}}",""]),t.exports=n},673:function(t,e,r){"use strict";r.r(e);r(347);var n={props:{tag:{type:String,default:"div"},loading:{type:Boolean,default:!1},title:{type:String,default:""},subtitle:{type:String,default:""},value:{type:Number,default:0},currency:{type:Boolean,default:!1},percentage:{type:Boolean,default:!1},to:{type:String,default:""},mobileBorderNone:{type:Boolean,default:!1},small:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},disabled:{type:[Boolean,Number],default:!1}},computed:{isTag:function(){return this.to&&!this.disabled?"nuxt-link":this.tag}}},o=(r(639),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.isTag,{tag:"component",staticClass:"card card-data p-3",class:{"loading-placeholder":t.loading,"mobile-b-0":t.mobileBorderNone,"p-lg-3":!t.small,disabled:t.disabled,link:t.to&&!t.disabled},attrs:{to:t.to}},[r("CardDataContent",{attrs:{title:t.title,subtitle:t.subtitle,currency:t.currency,percentage:t.percentage,value:t.value}})],1)}),[],!1,null,"76a745fa",null);e.default=component.exports;installComponents(component,{CardDataContent:r(635).default})},885:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(36),r(11),r(69),{mixins:[{methods:{errorHandler:function(t){401===t&&this.handle401()},handle404:function(){this.$router.push({path:"/404"})},handle401:function(){this.$router.push({path:"/logout"})}}}],props:{title:{type:String,default:""}},data:function(){return{balanceTitle:"Balance total",incomeTitle:"Total de ingresos",loading:!0,balance:0,income:0}},mounted:function(){this.getReducedReports()},methods:{getReducedReports:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("client/reports/reduced",{headers:{Accept:"application/json",Authorization:localStorage.getItem("access_token_bearer").toString()}});case 3:r=e.sent,t.balance=r.balance,t.income=r.income,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}}),l=r(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-6 mb-3 mb-lg-0"},[r("CardData",{attrs:{title:t.balanceTitle,loading:t.loading,value:t.balance,"no-margin":"",bordered:"",currency:""}})],1),t._v(" "),r("div",{staticClass:"col-12 col-lg-6"},[r("CardData",{attrs:{title:t.incomeTitle,loading:t.loading,value:t.income,"no-margin":"",bordered:"",currency:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardData:r(673).default})}}]);