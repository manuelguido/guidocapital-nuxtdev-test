(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{335:function(r,t,e){"use strict";var n=e(13),o=e(7),c=e(88),f=e(20),l=e(14),N=e(48),h=e(188),d=e(65),v=e(8),I=e(67),m=e(66).f,x=e(34).f,E=e(17).f,y=e(336).trim,F="Number",_=o.Number,A=_.prototype,w=N(I(A))==F,S=function(r){var t,e,n,o,c,f,l,code,N=d(r,!1);if("string"==typeof N&&N.length>2)if(43===(t=(N=y(N)).charCodeAt(0))||45===t){if(88===(e=N.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(N.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+N}for(f=(c=N.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+N};if(c(F,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,M=function(r){var t=arguments.length<1?0:r,e=this;return e instanceof M&&(w?v((function(){A.valueOf.call(e)})):N(e)!=F)?h(new _(S(t)),e,M):S(t)},T=n?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;T.length>k;k++)l(_,C=T[k])&&!l(M,C)&&E(M,C,x(_,C));M.prototype=A,A.constructor=M,f(o,F,M)}},336:function(r,t,e){var n=e(16),o="["+e(337)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(r){return function(t){var e=String(n(t));return 1&r&&(e=e.replace(c,"")),2&r&&(e=e.replace(f,"")),e}};r.exports={start:l(1),end:l(2),trim:l(3)}},337:function(r,t){r.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},339:function(r,t,e){"use strict";e(11),e(68),e(342),e(335),e(21),e(54),e(37),e(344);var n={methods:{formatCurrency:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{t=Math.abs(t),t=isNaN(t)?2:t;var o="$ ",i=parseInt(r=Math.abs(Number(r)||0).toFixed(t)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+n:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?e+Math.abs(r-i).toFixed(t).slice(2):"")}catch(r){console.log(r)}},formatCryptocurrency:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=Number.isNaN(parseInt(r))?0:r;return(e/1).toFixed(t)},formatPercentage:function(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Number.isNaN(parseInt(r))?0:r,n=(e/1).toFixed(2);return t?n:"% "+n}}};t.a=n},342:function(r,t,e){"use strict";var n=e(2),o=e(49),c=e(343),f=e(189),l=e(8),N=1..toFixed,h=Math.floor,d=function(r,t,e){return 0===t?e:t%2==1?d(r,t-1,e*r):d(r*r,t/2,e)},v=function(data,r,t){for(var e=-1,n=t;++e<6;)n+=r*data[e],data[e]=n%1e7,n=h(n/1e7)},I=function(data,r){for(var t=6,e=0;--t>=0;)e+=data[t],data[t]=h(e/r),e=e%r*1e7},m=function(data){for(var r=6,s="";--r>=0;)if(""!==s||0===r||0!==data[r]){var t=String(data[r]);s=""===s?t:s+f.call("0",7-t.length)+t}return s};n({target:"Number",proto:!0,forced:N&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){N.call({})}))},{toFixed:function(r){var t,e,n,l,N=c(this),h=o(r),data=[0,0,0,0,0,0],x="",E="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(N!=N)return"NaN";if(N<=-1e21||N>=1e21)return String(N);if(N<0&&(x="-",N=-N),N>1e-21)if(e=(t=function(r){for(var t=0,e=r;e>=4096;)t+=12,e/=4096;for(;e>=2;)t+=1,e/=2;return t}(N*d(2,69,1))-69)<0?N*d(2,-t,1):N/d(2,t,1),e*=4503599627370496,(t=52-t)>0){for(v(data,0,e),n=h;n>=7;)v(data,1e7,0),n-=7;for(v(data,d(10,n,1),0),n=t-1;n>=23;)I(data,1<<23),n-=23;I(data,1<<n),v(data,1,1),I(data,2),E=m(data)}else v(data,0,e),v(data,1<<-t,0),E=m(data)+f.call("0",h);return E=h>0?x+((l=E.length)<=h?"0."+f.call("0",h-l)+E:E.slice(0,l-h)+"."+E.slice(l-h)):x+E}})},343:function(r,t,e){var n=e(48);r.exports=function(r){if("number"!=typeof r&&"Number"!=n(r))throw TypeError("Incorrect invocation");return+r}},344:function(r,t,e){e(2)({target:"Number",stat:!0},{isNaN:function(r){return r!=r}})},626:function(r,t,e){"use strict";e.r(t);var n={mixins:[e(339).a],props:{cryptocurrency:{type:Object,default:function(){}}}},o=e(3),component=Object(o.a)(n,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("span",{staticClass:"h5-responsive black-alpha-40"},[e("span",[r._v("\n    "+r._s(r.formatCryptocurrency(r.cryptocurrency.amount))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);