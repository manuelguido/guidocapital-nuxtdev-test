(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{347:function(t,r,e){"use strict";var n=e(13),o=e(7),c=e(89),f=e(20),l=e(14),d=e(48),h=e(188),v=e(66),m=e(9),N=e(68),x=e(67).f,I=e(35).f,_=e(16).f,y=e(348).trim,E="Number",F=o.Number,w=F.prototype,A=d(N(w))==E,C=function(t){var r,e,n,o,c,f,l,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(r=(d=y(d)).charCodeAt(0))||45===r){if(88===(e=d.charCodeAt(2))||120===e)return NaN}else if(48===r){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(E,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var P,S=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof S&&(A?m((function(){w.valueOf.call(e)})):d(e)!=E)?h(new F(C(r)),e,S):C(r)},M=n?x(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;M.length>T;T++)l(F,P=M[T])&&!l(S,P)&&_(S,P,I(F,P));S.prototype=w,w.constructor=S,f(o,E,S)}},348:function(t,r,e){var n=e(19),o="["+e(349)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(f,"")),e}};t.exports={start:l(1),end:l(2),trim:l(3)}},349:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},357:function(t,r,e){"use strict";e(11),e(69),e(361),e(347),e(21),e(54),e(38),e(363);var n={methods:{formatCurrency:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{r=Math.abs(r),r=isNaN(r)?2:r;var o="$ ",i=parseInt(t=Math.abs(Number(t)||0).toFixed(r)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+n:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+n)+(r?e+Math.abs(t-i).toFixed(r).slice(2):"")}catch(t){console.log(t)}},formatCryptocurrency:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=Number.isNaN(parseInt(t))?0:t;return(e/1).toFixed(r)},formatPercentage:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Number.isNaN(parseInt(t))?0:t,n=(e/1).toFixed(2);return r?n:"% "+n}}};r.a=n},361:function(t,r,e){"use strict";var n=e(5),o=e(49),c=e(362),f=e(189),l=e(9),d=1..toFixed,h=Math.floor,v=function(t,r,e){return 0===r?e:r%2==1?v(t,r-1,e*t):v(t*t,r/2,e)},m=function(data,t,r){for(var e=-1,n=r;++e<6;)n+=t*data[e],data[e]=n%1e7,n=h(n/1e7)},N=function(data,t){for(var r=6,e=0;--r>=0;)e+=data[r],data[r]=h(e/t),e=e%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var r=String(data[t]);s=""===s?r:s+f.call("0",7-r.length)+r}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){d.call({})}))},{toFixed:function(t){var r,e,n,l,d=c(this),h=o(t),data=[0,0,0,0,0,0],I="",_="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(I="-",d=-d),d>1e-21)if(e=(r=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}(d*v(2,69,1))-69)<0?d*v(2,-r,1):d/v(2,r,1),e*=4503599627370496,(r=52-r)>0){for(m(data,0,e),n=h;n>=7;)m(data,1e7,0),n-=7;for(m(data,v(10,n,1),0),n=r-1;n>=23;)N(data,1<<23),n-=23;N(data,1<<n),m(data,1,1),N(data,2),_=x(data)}else m(data,0,e),m(data,1<<-r,0),_=x(data)+f.call("0",h);return _=h>0?I+((l=_.length)<=h?"0."+f.call("0",h-l)+_:_.slice(0,l-h)+"."+_.slice(l-h)):I+_}})},362:function(t,r,e){var n=e(48);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},363:function(t,r,e){e(5)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},390:function(t,r,e){"use strict";var n={data:function(){return{dev_path:"http://127.0.0.1:8000/",prod_path:"https://guidocapitalback.com/",prod_asset_path:"https://guidocapitalback.com/public/",img:"img/",cryptos:"img/cryptos/",currencies:"img/currencies/"}},methods:{assetPath:function(){return this.prod_asset_path},imgPath:function(){return this.assetPath()+this.img},cryptosPath:function(){return this.assetPath()+this.cryptos},currenciesPath:function(){return this.assetPath()+this.currencies}}};r.a=n},714:function(t,r,e){var content=e(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("5313d49c",content,!0,{sourceMap:!1})},794:function(t,r,e){"use strict";e(714)},795:function(t,r,e){var n=e(3)((function(i){return i[1]}));n.push([t.i,".amount[data-v-7bac4d1b]{font-size:1.25em}.currency[data-v-7bac4d1b]{color:#ddd;font-size:.9em}.loading[data-v-7bac4d1b]{max-width:50vw!important}.usd-image[data-v-7bac4d1b]{width:30px}",""]),t.exports=n},896:function(t,r,e){"use strict";e.r(r);e(347);var n=e(390),o=e(357),c={mixins:[n.a,o.a],props:{balance:{type:Number,default:0},loading:{type:Boolean,default:!1}}},f=(e(794),e(2)),component=Object(f.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"pt-3"},[e("div",{class:["mb-1 d-flex align-items-center",t.loading?"loading":""]},[e("span",[e("img",{staticClass:"usd-image",attrs:{src:t.currenciesPath()+"usd.svg"}})]),t._v(" "),e("span",{staticClass:"'font-tertiary text-white amount mx-2"},[t._v("\n      "+t._s(t.formatCurrency(t.balance))+"\n    ")]),t._v(" "),e("span",{staticClass:"fw-300 currency"},[t._v("(USD)")])])])}),[],!1,null,"7bac4d1b",null);r.default=component.exports}}]);