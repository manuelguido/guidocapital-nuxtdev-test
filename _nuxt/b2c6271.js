(window.webpackJsonp=window.webpackJsonp||[]).push([[239,164,233],{364:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TextSpan",props:{text:{type:String,default:""},textAlpha:{type:String,default:""},size:{type:String,default:"6"},mb:{type:String,default:""}},computed:{classList(){const t=this.mb?`mb-${this.mb}`:"",e=this.textAlpha?`text-alpha-${this.textAlpha}`:"";return[`h${this.size}-responsive`,e,t]}}}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.classList},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("62f5bd6c",content,!0,{sourceMap:!1})},594:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{icon:{type:String,default:"iconly-Profile"},type:{type:String,default:"icbo"},size:{type:String,default:"md"},tag:{type:String,default:"span"}},computed:{classList(){return["icon-outer",this.size]}}}),l=(n(608),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.classList},[n("Icon",{attrs:{icon:t.icon,size:t.size,type:t.type}})],1)}),[],!1,null,"3fbd8685",null);e.default=component.exports;installComponents(component,{Icon:n(65).default})},608:function(t,e,n){"use strict";n(445)},609:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".icon-outer[data-v-3fbd8685]{border-radius:100px;display:flex;justify-content:center;align-content:center}.theme-light .icon-outer[data-v-3fbd8685]{background:var(--theme-light-2)}.theme-dark .icon-outer[data-v-3fbd8685]{background:var(--theme-dark-3)}.icon-outer.sm[data-v-3fbd8685]{padding:.95rem}.icon-outer.md[data-v-3fbd8685]{padding:1rem}.icon-outer.lg[data-v-3fbd8685]{padding:1.25rem}",""]),t.exports=r},763:function(t,e,n){"use strict";n.r(e);n(90),n(30);var r={data:function(){return{icon:"iconly-Profile",outerClassList:"d-flex flew-row align-items-stretch mb-4"}},computed:{userdata:function(){return JSON.parse(this.$store.getters["user/user"])},user:function(){return this.userdata.user},username:function(){return"".concat(this.user.name," ").concat(this.user.lastname)}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.outerClassList},[n("div",{staticClass:"mr-3"},[n("IconFilled",{attrs:{icon:t.icon,size:"md"}})],1),t._v(" "),n("span",{staticClass:"d-flex flex-column ml-2"},[n("TextSpan",{attrs:{text:t.username,size:"h5","text-alpha":"80"}}),t._v(" "),n("TextSpan",{attrs:{text:t.user.email,size:"h6","text-alpha":"60"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconFilled:n(594).default,TextSpan:n(364).default})}}]);