(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{999:function(e,l,t){"use strict";t.r(l),t.d(l,"mdbScrollbar",(function(){return o}));t(335);var r=t(872),o=(t(873),{components:{PerfectScrollbar:r.PerfectScrollbar},props:{wheelSpeed:{type:Number,default:1},wheelPropagation:{type:Boolean,default:!1},swipeEasing:{type:Boolean,default:!0},minScrollbarLength:{type:Number,default:null},maxScrollbarLength:{type:Number,default:null},scrollingThreshold:{type:Number,default:1e3},useBothWheelAxes:{type:Boolean,default:!1},suppressScrollX:{type:Boolean,default:!1},suppressScrollY:{type:Boolean,default:!1},scrollXMarginOffset:{type:Number,default:0},scrollYMarginOffset:{type:Number,default:0},scrollClass:{type:String},scrollStyle:{type:String},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{name:"Scrollbar",yRail:null,settings:{wheelSpeed:this.wheelSpeed,wheelPropagation:this.wheelPropagation,swipeEasing:this.swipeEasing,minScrollbarLength:this.minScrollbarLength,maxScrollbarLength:this.maxScrollbarLength,scrollingThreshold:this.scrollingThreshold,useBothWheelAxes:this.useBothWheelAxes,suppressScrollX:this.suppressScrollX,suppressScrollY:this.suppressScrollY,scrollXMarginOffset:this.scrollXMarginOffset,scrollYMarginOffset:this.scrollYMarginOffset}}},computed:{className:function(){return[this.scrollClass]},scrollStyles:function(){return this.scrollStyle}},mounted:function(){this.setStyle("width",this.width),this.setStyle("height",this.height)},methods:{setStyle:function(e,l){this.$el.style[e]=l}}}),n=o,c=t(3),component=Object(c.a)(n,(function(){var e=this,l=e.$createElement;return(e._self._c||l)("perfect-scrollbar",{class:e.className,style:e.scrollStyles,attrs:{options:e.settings}},[e._t("default")],2)}),[],!1,null,null,null);l.default=component.exports}}]);