(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{335:function(e,t,r){"use strict";var n=r(13),o=r(7),c=r(88),l=r(20),d=r(14),f=r(48),h=r(188),v=r(65),N=r(8),x=r(67),I=r(66).f,m=r(34).f,_=r(17).f,k=r(336).trim,w="Number",E=o.Number,y=E.prototype,A=f(x(y))==w,C=function(e){var t,r,n,o,c,l,d,code,f=v(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=k(f)).charCodeAt(0))||45===t){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(w,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var S,F=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof F&&(A?N((function(){y.valueOf.call(r)})):f(r)!=w)?h(new E(C(t)),r,F):C(t)},M=n?I(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;M.length>T;T++)d(E,S=M[T])&&!d(F,S)&&_(F,S,m(E,S));F.prototype=y,y.constructor=F,l(o,w,F)}},336:function(e,t,r){var n=r(16),o="["+r(337)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},337:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},542:function(e,t,r){var content=r(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("fc5ad7dc",content,!0,{sourceMap:!1})},572:function(e,t,r){"use strict";r(542)},573:function(e,t,r){var n=r(4)((function(i){return i[1]}));n.push([e.i,'.switch[data-v-736ee614]{display:inline-block;height:28px;position:relative;width:56px;margin:0!important;padding:0!important}.switch input[data-v-736ee614]{display:none}.slider[data-v-736ee614]{background-color:#ccc;bottom:0;right:0;top:0;left:0;cursor:pointer;position:absolute;transition:.3s}.slider[data-v-736ee614]:before{background-color:#fff;bottom:3px;content:"";height:22px;width:22px;left:4px;position:absolute;transition:.4s}input:checked+.slider[data-v-736ee614]{background-color:var(--success)}input:checked+.slider[data-v-736ee614]:before{transform:translateX(26px)}.slider.round[data-v-736ee614]{border-radius:50px}.slider.round[data-v-736ee614]:before{border-radius:50%}',""]),e.exports=n},590:function(e,t,r){"use strict";r.r(t);r(335);var n={model:{prop:"checked",event:"change"},props:{checked:{type:[Boolean,Number],default:null},label:{type:String,default:""},fullWidth:{type:Boolean,default:!1}}},o=(r(572),r(3)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-row",class:[e.fullWidth?"justify-content-between":"justify-content-start"]},[e.label?r("span",{staticClass:"text-alpha-80 fw-300"},[e._v(e._s(e.label))]):e._e(),e._v(" "),r("span",{class:[""!=e.label?"ml-3":""]},[r("label",{staticClass:"switch"},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("change",t.target.checked)}}}),e._v(" "),r("div",{staticClass:"slider round"})])])])}),[],!1,null,"736ee614",null);t.default=component.exports}}]);