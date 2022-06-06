(window.webpackJsonp=window.webpackJsonp||[]).push([[178,179,180,181],{1066:function(t,e,n){"use strict";n.r(e);var r={name:"BannerB",components:{PlanCard:n(829).default},data:function(){return{title:"¿Qué servicios ofrecemos?",plans:[{id:1,icon:"fad fa-chart-pie",title:"Fondos de criptomonedas",content:[{id:1,text:"Fondos que se ajustan al perfil de cada inversor."},{id:2,text:"Contamos con tres fondos con distintos niveles de riesgo / rentabilidad."}],light:!1,subitems:[{id:1,name:"Agresivo",performance:38,backgroundColor:"rgba(38, 222, 129, .5);"},{id:2,name:"Moderado",performance:25,backgroundColor:"rgba(38, 222, 129, .3);"},{id:3,name:"Conservador",performance:20,backgroundColor:"rgba(38, 222, 129, .1);"}]},{id:2,icon:"fab fa-bitcoin",title:"Criptomonedas individuales",content:[{id:1,text:"Comprar criptomonedas como Bitcoin, Ethereum, Dash, EOS, XRP, BNB, XLM."},{id:2,text:"Podes comprar fracciones de criptomonedas, como 3% de BTC o un 35% de Ethereum."}],light:!0},{id:3,icon:"fad fa-hdd",title:"Almacenamiento en frío",content:[{id:1,text:"Ofrecemos la custodia de Bitcoin y criptomonedas más segura que existe."},{id:2,text:"Contratá el servicio de alamacenamiento en frío (o cold storage)."}],light:!1},{id:4,icon:"fad fa-lock",title:"Stacking",content:[{id:1,text:"El stacking consiste en comprar y dejar bloqueadas tus criptomonedas en depósitos para recibir una renta por prestar liquidez."},{id:2,text:"Las rentas del stacking varían entre el 8% y 18% anual en dólares."},{id:3,text:"Obtené ingresos pasivos y seguros con tus criptomonedas."}],light:!0},{id:5,icon:"fad fa-desktop",title:"Minado de criptomonedas",content:[{id:1,text:"Ofrecemos distintos paquetes de minería para Bitcoin y Ethereum."},{id:2,text:"Consultá por minería GPU y Cloud Mining."}],light:!1}]}}},o=(n(954),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner-b row uns py-5"},[n("div",{staticClass:"container-fluid d-flex align-items-center px-5"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-xl-9 mb-4 mb-lg-5"},[n("h3",{staticClass:"h3-responsive text-dark fw-400 font-primary animated fadeInLeft"},[t._v("\n          "+t._s(t.title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"col-12 col-xl-9"},[n("div",{staticClass:"row justify-content-center row-eq-height"},t._l(t.plans,(function(p){return n("plan-card",{key:p.id,attrs:{plan:p}})})),1)])])])])}),[],!1,null,"609334d4",null);e.default=component.exports},335:function(t,e,n){"use strict";var r=n(13),o=n(7),c=n(88),f=n(20),d=n(14),l=n(48),m=n(188),v=n(65),h=n(8),x=n(67),y=n(66).f,_=n(34).f,C=n(17).f,N=n(336).trim,k="Number",w=o.Number,I=w.prototype,E=l(x(I))==k,M=function(t){var e,n,r,o,c,f,d,code,l=v(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=N(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(f=(c=l.slice(2)).length,d=0;d<f;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+l};if(c(k,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var F,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(E?h((function(){I.valueOf.call(n)})):l(n)!=k)?m(new w(M(e)),n,A):M(e)},j=r?y(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;j.length>O;O++)d(w,F=j[O])&&!d(A,F)&&C(A,F,_(w,F));A.prototype=I,I.constructor=A,f(o,k,A)}},336:function(t,e,n){var r=n(16),o="["+n(337)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},337:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},339:function(t,e,n){"use strict";n(11),n(68),n(342),n(335),n(21),n(54),n(37),n(344);var r={methods:{formatCurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var o="$ ",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+r:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){console.log(t)}},formatCryptocurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=Number.isNaN(parseInt(t))?0:t;return(n/1).toFixed(e)},formatPercentage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Number.isNaN(parseInt(t))?0:t,r=(n/1).toFixed(2);return e?r:"% "+r}}};e.a=r},342:function(t,e,n){"use strict";var r=n(2),o=n(49),c=n(343),f=n(189),d=n(8),l=1..toFixed,m=Math.floor,v=function(t,e,n){return 0===e?n:e%2==1?v(t,e-1,n*t):v(t*t,e/2,n)},h=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},x=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+f.call("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){l.call({})}))},{toFixed:function(t){var e,n,r,d,l=c(this),m=o(t),data=[0,0,0,0,0,0],_="",C="0";if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(_="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*v(2,69,1))-69)<0?l*v(2,-e,1):l/v(2,e,1),n*=4503599627370496,(e=52-e)>0){for(h(data,0,n),r=m;r>=7;)h(data,1e7,0),r-=7;for(h(data,v(10,r,1),0),r=e-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),h(data,1,1),x(data,2),C=y(data)}else h(data,0,n),h(data,1<<-e,0),C=y(data)+f.call("0",m);return C=m>0?_+((d=C.length)<=m?"0."+f.call("0",m-d)+C:C.slice(0,d-m)+"."+C.slice(d-m)):_+C}})},343:function(t,e,n){var r=n(48);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},344:function(t,e,n){n(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},586:function(t,e,n){var content=n(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("a0ff8474",content,!0,{sourceMap:!1})},623:function(t,e,n){"use strict";n(586)},624:function(t,e,n){var r=n(4)((function(i){return i[1]}));r.push([t.i,".item[data-v-ffc0bfe6]{border-radius:5px;display:flex;justify-content:space-between}",""]),t.exports=r},631:function(t,e,n){"use strict";n.r(e);var r=n(339),o={props:{item:{type:Object},light:{type:Boolean}},mixins:[r.a],computed:{backgroundColor:function(){return"background-color: "+this.item.backgroundColor+";"},performance:function(){return"Rend. "+this.formatPercentage(this.item.performance)}}},c=(n(623),n(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:["item fw-600 p-4 mb-3",t.light?"light":"dark"],style:t.backgroundColor},[n("span",[t._v(t._s(t.item.name))]),t._v(" "),n("span",[t._v(t._s(t.performance))])])}),[],!1,null,"ffc0bfe6",null);e.default=component.exports},673:function(t,e,n){var content=n(733);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("c9432896",content,!0,{sourceMap:!1})},691:function(t,e,n){"use strict";n.r(e);var r=n(631),o={props:{items:{type:Array},light:{type:Boolean}},components:{item:r.default}},c=n(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column"},t._l(t.items,(function(t){return n("item",{key:t.id,attrs:{item:t}})})),1)}),[],!1,null,null,null);e.default=component.exports},732:function(t,e,n){"use strict";n(673)},733:function(t,e,n){var r=n(4)((function(i){return i[1]}));r.push([t.i,".plan-card[data-v-6285a137]{border-radius:0;transition:all .1s;cursor:default}@media (min-width:992px){.plan-card[data-v-6285a137]{min-height:60vh!important}}.light-card[data-v-6285a137]{background:#fff!important}.light-card *[data-v-6285a137]{color:#857d7d!important}.dark-card[data-v-6285a137]{background:#374248!important}.dark-card *[data-v-6285a137]{color:#fff!important}.icon-container[data-v-6285a137]{border-radius:100px;display:flex;align-items:center;justify-content:center;width:100%}",""]),t.exports=r},791:function(t,e,n){var content=n(955);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("714a77a6",content,!0,{sourceMap:!1})},829:function(t,e,n){"use strict";n.r(e);var r=n(691),o={props:{plan:{type:Object}},components:{itemList:r.default}},c=(n(732),n(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-lg-6 col-xl-4 mb-5 uns"},[n("div",{staticClass:"card plan-card h-100 shadow",class:[t.plan.light?"light-card":"dark-card"]},[n("div",{staticClass:"card-header bg-none b-0 p-3 p-md-4 d-flex flex-column justify-content-center"},[n("span",{staticClass:"icon-container p-5"},[n("i",{class:[t.plan.icon,"fa-3x"]})]),t._v(" "),n("h2",{staticClass:"h4-responsive font-primary fw-600 my-0 text-center"},[t._v("\n        "+t._s(t.plan.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"card-body p-3 p-md-4"},[t._l(t.plan.content,(function(e){return n("p",{key:e.id,staticClass:"h5-responsive fw-300 mb-3 font-secondary"},[t._v("\n        "+t._s(e.text)+"\n      ")])})),t._v(" "),t.plan.subitems?n("item-list",{attrs:{items:t.plan.subitems}}):t._e()],2)])])}),[],!1,null,"6285a137",null);e.default=component.exports},954:function(t,e,n){"use strict";n(791)},955:function(t,e,n){var r=n(4)((function(i){return i[1]}));r.push([t.i,'.banner-b[data-v-609334d4]{min-height:100vh}@media (min-width:992px){.banner-b[data-v-609334d4]{background:#fff;background:-moz-linear-gradient(180deg,#fff 40%,#f9f9f9 40%,#f9f9f9 60%,#fff 60%);background:-webkit-linear-gradient(180deg,#fff 40%,#f9f9f9 0,#f9f9f9 60%,#fff 0);background:linear-gradient(180deg,#fff 40%,#f9f9f9 0,#f9f9f9 60%,#fff 0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1)}.side[data-v-609334d4]{width:50vw;height:100vh}}@media (max-width:991.98px){.banner-b[data-v-609334d4]{background:#fff}.side[data-v-609334d4]{width:100vw}}',""]),t.exports=r}}]);