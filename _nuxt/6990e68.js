(window.webpackJsonp=window.webpackJsonp||[]).push([[31,24],{347:function(t,e,r){"use strict";var o=r(13),n=r(7),l=r(89),c=r(20),d=r(14),m=r(48),f=r(188),h=r(66),v=r(9),w=r(68),_=r(67).f,I=r(35).f,E=r(16).f,x=r(348).trim,C="Number",S=n.Number,y=S.prototype,k=m(w(y))==C,N=function(t){var e,r,o,n,l,c,d,code,m=h(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=x(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+m}for(c=(l=m.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>n)return NaN;return parseInt(l,o)}return+m};if(l(C,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(k?v((function(){y.valueOf.call(r)})):m(r)!=C)?f(new S(N(e)),r,A):N(e)},F=o?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;F.length>O;O++)d(S,M=F[O])&&!d(A,M)&&E(A,M,I(S,M));A.prototype=y,y.constructor=A,c(n,C,A)}},348:function(t,e,r){var o=r(19),n="["+r(349)+"]",l=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(t){return function(e){var r=String(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},349:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},351:function(t,e,r){var o=r(19),n=/"/g;t.exports=function(t,e,r,l){var c=String(o(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(n,"&quot;")+'"'),d+">"+c+"</"+e+">"}},352:function(t,e,r){var o=r(9);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},372:function(t,e,r){"use strict";var o=r(5),n=r(351);o({target:"String",proto:!0,forced:r(352)("link")},{link:function(t){return n(this,"a","href",t)}})},717:function(t,e,r){var content=r(801);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("465d813e",content,!0,{sourceMap:!1})},800:function(t,e,r){"use strict";r(717)},801:function(t,e,r){var o=r(3)((function(i){return i[1]}));o.push([t.i,".theme-dark .ls-modal-body[data-v-52525bd5],.theme-dark .ls-modal-header[data-v-52525bd5]{background:var(--theme-dark-2)}.theme-light .ls-modal-body[data-v-52525bd5],.theme-light .ls-modal-header[data-v-52525bd5]{background:var(--theme-light-1)}",""]),t.exports=o},906:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(36),r(30),r(11),r(69),r(658)),l=r(365),c={mixins:[n.a,l.a],props:{demoClient:{type:Boolean,default:!1},mobileFullSize:{type:Boolean,default:!0}},data:function(){return{name:"",lastname:"",email:"",password:"",password_confirm:"",modal:!1,submitting:!1,allowSubmit:!1,emailError:"",passwordError:"",passwordConfirmError:"",button:{text:"Nuevo",icon:{icon:"iconly-Plus",type:"icli"}}}},computed:{title:function(){var t="Nuevo cliente";return this.demoClient?"".concat(t," demo"):t},fullSize:function(){return this.mobileFullSize&&window.innerWidth<=991.98}},watch:{email:function(){this.checkAllowSubmit()},password:function(){this.checkAllowSubmit()},password_confirm:function(){this.checkAllowSubmit()}},methods:{resetForm:function(){this.name="",this.lastname="",this.email="",this.password="",this.password_confirm=""},newClient:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.submitting=!0,"client/create",r={name:t.name,lastname:t.lastname,email:t.email,password:t.password,password_confirm:t.password_confirm,is_demo:t.demoClient},o=localStorage.getItem("access_token_bearer").toString(),e.next=6,t.$axios.$post("client/create",r,{headers:{Accept:"application/json",Authorization:o}});case 6:n=e.sent,t.newAlert(n),"success"===n.status&&(t.resetForm(),t.modal=!1),t.submitting=!1;case 10:case"end":return e.stop()}}),e)})))()},checkAllowSubmit:function(){var t=this.password===this.password_confirm,e=this.password.length>7,r=this.validateEmail(this.email);this.emailError=r||""===this.email?"":"Ingresa una dirección de correo válida",this.passwordError=e||""===this.password?"":"La contraseña debe tener al menos 8 dígitos",this.passwordConfirmError=t||""===this.password_confirm?"":"Las contraseñas no coinciden",this.allowSubmit=""!==this.name&&""!==this.lastname&&t&&e&&r}}},d=(r(800),r(2)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-end align-self-baseline",class:{"w-100":t.fullSize}},[r("Button",{attrs:{"icon-right":t.button.icon,text:t.button.text},nativeOn:{click:function(e){t.modal=!0}}}),t._v(" "),r("ModalsModal",{staticClass:"ls-modal",attrs:{show:t.modal,modal:"lg"},on:{close:function(e){t.modal=!1}}},[r("ModalsModalHeader",{staticClass:"ls-modal-header"},[r("ModalsModalTitle",{staticClass:"fw-400"},[t._v(t._s(t.title))])],1),t._v(" "),r("ModalsModalBody",{staticClass:"p-4 text-left ls-modal-body"},[t.submitting?r("LoadingOverlay"):t._e(),t._v(" "),r("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.newClient.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-4 d-flex justify-content-center"},[r("IconFilled",{attrs:{icon:"iconly-Profile"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-lg-6 mb-4"},[r("Input",{attrs:{autocomplete:"off",label:"Nombre",type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-lg-6 mb-4"},[r("Input",{attrs:{autocomplete:"off",label:"Apellido",type:"text",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),t._v(" "),r("div",{staticClass:"col-12 mb-4"},[r("Input",{attrs:{autocomplete:"off",label:"Email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("InputError",{attrs:{error:t.emailError}})],1),t._v(" "),r("div",{staticClass:"col-12 mb-4"},[r("Input",{attrs:{autocomplete:"off",label:"Contraseña",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("InputError",{attrs:{error:t.passwordError}})],1),t._v(" "),r("div",{staticClass:"col-12 mb-4"},[r("Input",{attrs:{label:"Repetir contraseña",autocomplete:"off",type:"password",required:""},model:{value:t.password_confirm,callback:function(e){t.password_confirm=e},expression:"password_confirm"}}),t._v(" "),r("InputError",{attrs:{error:t.passwordConfirmError}})],1),t._v(" "),r("div",{staticClass:"col-12 mt-2"},[r("ButtonSave",{attrs:{disabled:!t.allowSubmit,text:"Guardar",size:"lg","full-width":""}})],1)])])],1)],1)],1)}),[],!1,null,"52525bd5",null);e.default=component.exports;installComponents(component,{Button:r(359).default,ModalsModalTitle:r(433).default,ModalsModalHeader:r(434).default,LoadingOverlay:r(411).default,IconFilled:r(594).default,Input:r(353).default,InputError:r(631).default,ButtonSave:r(412).default,ModalsModalBody:r(435).default,ModalsModal:r(436).default})}}]);