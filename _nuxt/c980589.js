(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1041:function(t,d,e){"use strict";e.r(d);var o=e(38),l={components:{mdbModal:o.mdbModal,mdbModalHeader:o.mdbModalHeader,mdbModalTitle:o.mdbModalTitle,mdbModalBody:o.mdbModalBody,mdbBtn:o.mdbBtn},props:{buttonText:{type:String,default:"md"},center:{type:Boolean,default:!1},size:{type:String,default:"md"},title:{type:String,default:"Nuevo modal"},closeModal:{type:Boolean}},data:function(){return{modal:!1}},watch:{closeModal:{deep:!0,handler:function(){this.modal=!1}}}},n=e(3),component=Object(n.a)(l,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[e("mdb-btn",{staticClass:"mx-0 py-1 px-3",attrs:{outline:"primary"},nativeOn:{click:function(d){t.modal=!0}}},[t._v("\n    "+t._s(t.buttonText)+"\n  ")]),t._v(" "),e("mdb-modal",{attrs:{show:t.modal,size:"md"},on:{close:function(d){t.modal=!1}}},[e("mdb-modal-header",[e("mdb-modal-title",[e("span",{staticClass:"font-secondary"},[t._v(t._s(t.title))])])],1),t._v(" "),e("mdb-modal-body",{staticClass:"p-5"},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);d.default=component.exports}}]);