(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{347:function(t,e,r){"use strict";var n=r(13),c=r(7),o=r(89),f=r(20),l=r(14),d=r(48),h=r(188),m=r(66),v=r(9),y=r(68),N=r(67).f,x=r(35).f,_=r(16).f,I=r(348).trim,C="Number",w=c.Number,E=w.prototype,F=d(y(E))==C,A=function(t){var e,r,n,c,o,f,l,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=I(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(f=(o=d.slice(2)).length,l=0;l<f;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(o(C,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var P,M=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof M&&(F?v((function(){E.valueOf.call(r)})):d(r)!=C)?h(new w(A(e)),r,M):A(e)},S=n?N(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;S.length>k;k++)l(w,P=S[k])&&!l(M,P)&&_(M,P,x(w,P));M.prototype=E,E.constructor=M,f(c,C,M)}},348:function(t,e,r){var n=r(19),c="["+r(349)+"]",o=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},349:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},357:function(t,e,r){"use strict";r(11),r(69),r(361),r(347),r(21),r(54),r(38),r(363);var n={methods:{formatCurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var c="$ ",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),o=i.length>3?i.length%3:0;return c+(o?i.substr(0,o)+n:"")+i.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?r+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){console.log(t)}},formatCryptocurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=Number.isNaN(parseInt(t))?0:t;return(r/1).toFixed(e)},formatPercentage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Number.isNaN(parseInt(t))?0:t,n=(r/1).toFixed(2);return e?n:"% "+n}}};e.a=n},361:function(t,e,r){"use strict";var n=r(5),c=r(49),o=r(362),f=r(189),l=r(9),d=1..toFixed,h=Math.floor,m=function(t,e,r){return 0===e?r:e%2==1?m(t,e-1,r*t):m(t*t,e/2,r)},v=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},y=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},N=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+f.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){d.call({})}))},{toFixed:function(t){var e,r,n,l,d=o(this),h=c(t),data=[0,0,0,0,0,0],x="",_="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(x="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*m(2,69,1))-69)<0?d*m(2,-e,1):d/m(2,e,1),r*=4503599627370496,(e=52-e)>0){for(v(data,0,r),n=h;n>=7;)v(data,1e7,0),n-=7;for(v(data,m(10,n,1),0),n=e-1;n>=23;)y(data,1<<23),n-=23;y(data,1<<n),v(data,1,1),y(data,2),_=N(data)}else v(data,0,r),v(data,1<<-e,0),_=N(data)+f.call("0",h);return _=h>0?x+((l=_.length)<=h?"0."+f.call("0",h-l)+_:_.slice(0,l-h)+"."+_.slice(l-h)):x+_}})},362:function(t,e,r){var n=r(48);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},363:function(t,e,r){r(5)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},390:function(t,e,r){"use strict";var n={data:function(){return{dev_path:"http://127.0.0.1:8000/",prod_path:"https://guidocapitalback.com/",prod_asset_path:"https://guidocapitalback.com/public/",img:"img/",cryptos:"img/cryptos/",currencies:"img/currencies/"}},methods:{assetPath:function(){return this.prod_asset_path},imgPath:function(){return this.assetPath()+this.img},cryptosPath:function(){return this.assetPath()+this.cryptos},currenciesPath:function(){return this.assetPath()+this.currencies}}};e.a=n},749:function(t,e,r){var content=r(823);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("5dd3d8a8",content,!0,{sourceMap:!1})},822:function(t,e,r){"use strict";r(749)},823:function(t,e,r){var n=r(3)((function(i){return i[1]}));n.push([t.i,"img[data-v-5515db4f]{height:45px}.symbol[data-v-5515db4f]{font-size:1.1em}.name[data-v-5515db4f]{font-size:.85em}.card-body[data-v-5515db4f]{flex-wrap:wrap}",""]),t.exports=n},929:function(t,e,r){"use strict";r.r(e);var n=r(390),c=r(357),o={name:"CryptoCard",mixins:[n.a,c.a],props:{cryptocurrency:{type:Object,default:function(){}},loading:{type:Boolean,default:!1}},computed:{percentageChange:function(){return 1}}},f=(r(822),r(2)),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-6 col-lg-6 col-xl-3"},[r("div",{class:[t.loading?"loading":"","card shadow-sm my-2"]},[t.loading?r("div",{staticClass:"card-body p-5"}):r("div",{staticClass:"card-body d-flex justify-content-between align-items-baseline"},[r("span",{staticClass:"d-flex"},[r("span",{staticClass:"pr-3"},[r("img",{staticClass:"animated fadeIn",attrs:{src:t.cryptosPath()+t.cryptocurrency.icon,alt:t.cryptocurrency.cryptocurrency}})]),t._v(" "),r("span",{staticClass:"d-flex flex-column"},[r("span",{staticClass:"black-alpha-60 fw-400 symbol"},[t._v(t._s(t.cryptocurrency.symbol))]),t._v(" "),r("span",{staticClass:"black-alpha-30 fw-400 font-secondary name"},[t._v(t._s(t.cryptocurrency.cryptocurrency))])])]),t._v(" "),r("span",{class:["price fw-600 d-flex justify-content-between align-items-center",t.percentageChange?"text-success":"text-danger"]},[r("i",{class:["mr-2 fad",t.percentageChange?"fa-sort-up":"fa-sort-down"]}),t._v("\n        "+t._s(t.formatCurrency(t.cryptocurrency.quote.price))+"\n      ")])])])])}),[],!1,null,"5515db4f",null);e.default=component.exports}}]);