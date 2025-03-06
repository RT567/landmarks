goog.provide('re_com.error_modal.theme');
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","modal","re-com.error-modal/modal",-509132541),(function (props){
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(50)], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","inner-wrapper","re-com.error-modal/inner-wrapper",983710789),(function (p__72522){
var map__72523 = p__72522;
var map__72523__$1 = cljs.core.__destructure_map(map__72523);
var props = map__72523__$1;
var map__72524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72523__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72524__$1 = cljs.core.__destructure_map(map__72524);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72524__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2.82843px 2.82843px 4px rgba(1,1,1,0.2)",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("font-size","medium","font-size/medium",-296024665).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"min-width","min-width",1926193728),re_com.util.px((474)),new cljs.core.Keyword(null,"min-height","min-height",398480837),re_com.util.px((300)),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),re_com.util.px((525))], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","top-bar","re-com.error-modal/top-bar",-1123436494),(function (p__72527){
var map__72528 = p__72527;
var map__72528__$1 = cljs.core.__destructure_map(map__72528);
var props = map__72528__$1;
var map__72529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72528__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72529__$1 = cljs.core.__destructure_map(map__72529);
var map__72530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"error-modal","error-modal",214887023));
var map__72530__$1 = cljs.core.__destructure_map(map__72530);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72530__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var map__72531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72529__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__72531__$1 = cljs.core.__destructure_map(map__72531);
var $ = map__72531__$1;
var md_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72531__$1,new cljs.core.Keyword(null,"md-2","md-2",-1635087790));
var sm_6 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72531__$1,new cljs.core.Keyword(null,"sm-6","sm-6",113033042));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var G__72535 = severity;
var G__72535__$1 = (((G__72535 instanceof cljs.core.Keyword))?G__72535.fqn:null);
switch (G__72535__$1) {
case "error":
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1($);

break;
case "warning":
return new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1($);

break;
default:
return "#1e1e1e";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),md_2,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),sm_6], null),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px((50))], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","title-wrapper","re-com.error-modal/title-wrapper",65087224),(function (p__72546){
var map__72547 = p__72546;
var map__72547__$1 = cljs.core.__destructure_map(map__72547);
var props = map__72547__$1;
var map__72548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72547__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72548__$1 = cljs.core.__destructure_map(map__72548);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72548__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","triangle","re-com.error-modal/triangle",1747759430),(function (p__72550){
var map__72554 = p__72550;
var map__72554__$1 = cljs.core.__destructure_map(map__72554);
var props = map__72554__$1;
var map__72555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72554__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72555__$1 = cljs.core.__destructure_map(map__72555);
var map__72556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72555__$1,new cljs.core.Keyword(null,"error-modal","error-modal",214887023));
var map__72556__$1 = cljs.core.__destructure_map(map__72556);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72556__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72555__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var G__72557 = severity;
var G__72557__$1 = (((G__72557 instanceof cljs.core.Keyword))?G__72557.fqn:null);
switch (G__72557__$1) {
case "error":
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1($);

break;
case "warning":
return new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1($);

break;
default:
return "#1e1e1e";

}
})()], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","code","re-com.error-modal/code",-2085263435),(function (p__72558){
var map__72559 = p__72558;
var map__72559__$1 = cljs.core.__destructure_map(map__72559);
var props = map__72559__$1;
var map__72560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72559__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72560__$1 = cljs.core.__destructure_map(map__72560);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72560__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("font-size","xx-small","font-size/xx-small",-1582096184),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"neutral","neutral",-1941956087).cljs$core$IFn$_invoke$arity$1($)], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","body","re-com.error-modal/body",1623923708),(function (p__72564){
var map__72565 = p__72564;
var map__72565__$1 = cljs.core.__destructure_map(map__72565);
var props = map__72565__$1;
var map__72566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72565__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__72566__$1 = cljs.core.__destructure_map(map__72566);
var map__72567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__72567__$1 = cljs.core.__destructure_map(map__72567);
var md_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72567__$1,new cljs.core.Keyword(null,"md-2","md-2",-1635087790));
var sm_4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72567__$1,new cljs.core.Keyword(null,"sm-4","sm-4",-1482733062));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_4)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_2)].join('')], null)], null)], 0));
}));

//# sourceMappingURL=re_com.error_modal.theme.js.map
