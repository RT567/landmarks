goog.provide('re_com.text');
re_com.text.label_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-label-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[label]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the label."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-label",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:span]"], null)], null):null);
re_com.text.label_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.text.label_parts_desc)):null);
re_com.text.label_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),"text or hiccup or whatever to display"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the label is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the label, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"additional CSS styles (applies to the label, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the label, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.text.label_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Returns markup for a basic label
 */
re_com.text.label = (function re_com$text$label(var_args){
var args__5772__auto__ = [];
var len__5766__auto___72444 = arguments.length;
var i__5767__auto___72445 = (0);
while(true){
if((i__5767__auto___72445 < len__5766__auto___72444)){
args__5772__auto__.push((arguments[i__5767__auto___72445]));

var G__72446 = (i__5767__auto___72445 + (1));
i__5767__auto___72445 = G__72446;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.text.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.text.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__72364){
var map__72366 = p__72364;
var map__72366__$1 = cljs.core.__destructure_map(map__72366);
var args = map__72366__$1;
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72366__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5043__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.text.label_args_desc),args));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5043__auto____$1 = debug_as;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),["display-inline-flex rc-label-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2("rc-label",class$) : re_com.theme.merge_class.call(null,"rc-label",class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0))], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
})], null):null),attr], 0)),label], null)], null);
}
}));

(re_com.text.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.label.cljs$lang$applyTo = (function (seq72361){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72361));
}));

re_com.text.title_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-title-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[title]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the title."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-title",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:span]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-title-underline",new cljs.core.Keyword(null,"impl","impl",1677848700),"[line]"], null)], null):null);
re_com.text.title_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.text.title_parts_desc)):null);
re_com.text.title_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),"title or hiccup or anything to display"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.title_level_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.title_levels_list,". If not provided then style the title using ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"underline?","underline?",-1123247603),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the title is underlined"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.4em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space above the title"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.1em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space below the title"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the title, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the title, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the title, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.text.title_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"description","description",-1428560544),"alpha"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"description","description",-1428560544),"alpha"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * A title with four preset levels
 */
re_com.text.title = (function re_com$text$title(var_args){
var args__5772__auto__ = [];
var len__5766__auto___72467 = arguments.length;
var i__5767__auto___72468 = (0);
while(true){
if((i__5767__auto___72468 < len__5766__auto___72467)){
args__5772__auto__.push((arguments[i__5767__auto___72468]));

var G__72469 = (i__5767__auto___72468 + (1));
i__5767__auto___72468 = G__72469;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.text.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.text.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__72394){
var map__72395 = p__72394;
var map__72395__$1 = cljs.core.__destructure_map(map__72395);
var args = map__72395__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var margin_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72395__$1,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.3em");
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72395__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.6em");
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var underline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"underline?","underline?",-1123247603));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72395__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5043__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.text.title_args_desc),args));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var preset_class = (((level == null))?"":cljs.core.name(level));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,(function (){var G__72400 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.text","title-wrapper","re-com.text/title-wrapper",-2139740765),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5043__auto____$1 = debug_as;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-title-wrapper ",preset_class," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.part.cljs$core$IFn$_invoke$arity$2(re_com.util.default_part,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.text","title-label","re-com.text/title-label",382549246),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4("display-flex","rc-title",preset_class,class$) : re_com.theme.merge_class.call(null,"display-flex","rc-title",preset_class,class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1)], null),(cljs.core.truth_(underline_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null)),style], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null),attr], 0))], null)),(cljs.core.truth_(underline_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),125], null)),new cljs.core.Keyword(null,"size","size",1098693007),"1px",new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__72407 = "rc-title-underline";
var G__72408 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__72407,G__72408) : re_com.theme.merge_class.call(null,G__72407,G__72408));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null):null)], null)], null);
return (theme__$1.cljs$core$IFn$_invoke$arity$1 ? theme__$1.cljs$core$IFn$_invoke$arity$1(G__72400) : theme__$1.call(null,G__72400));
})()], null);
}
}));

(re_com.text.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.title.cljs$lang$applyTo = (function (seq72390){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72390));
}));

/**
 * acts like [:p ] but uses a [:span] in place of the [:p] and adds bottom margin of 0.7ems which
 *   produces the same visual result.
 * 
 *   Creates a paragraph of body text, expected to have a font-size of 14px or 15px,
 *   which should have limited width.
 * 
 *   Why limited text width?  See http://baymard.com/blog/line-length-readability
 * 
 *   The actual font-size is inherited.
 * 
 *   At 14px, 450px will yield between 69 and 73 chars.
 *   At 15px, 450px will yield about 66 to 70 chars.
 *   So we're at the upper end of the preferred 50 to 75 char range.
 * 
 *   If the first child is a map, it is interpreted as a map of styles / attributes.
 * 
 *   The map can include a :children key. If you pass a sequence of hiccups for :children,
 *   its items will appear before the rest of the arguments. For instance:
 * 
 *   [rc/p {:children ["Hello"]} " World"]
 * 
 *   This will show a "Hello World" paragraph on the page.
 * 
 *   This component uses [:span] because React has become more unforgiving about nesting [:div]s under [:p]s and dumps
 *   a big red warning message in DevTools.
 * 
 *   By adding, for example, a [hyperlink] component within your `[:p]` (which contains a [:div]), you can get this warning message
 */
re_com.text.p = (function re_com$text$p(var_args){
var args__5772__auto__ = [];
var len__5766__auto___72485 = arguments.length;
var i__5767__auto___72486 = (0);
while(true){
if((i__5767__auto___72486 < len__5766__auto___72485)){
args__5772__auto__.push((arguments[i__5767__auto___72486]));

var G__72487 = (i__5767__auto___72486 + (1));
i__5767__auto___72486 = G__72487;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.text.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.text.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var arg1 = cljs.core.first(args);
var vec__72421 = ((cljs.core.map_QMARK_(arg1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg1,cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72421,(0),null);
var hiccup_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72421,(1),null);
var map__72424 = re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"450px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.7em"], null)], null),m], 0));
var map__72424__$1 = cljs.core.__destructure_map(map__72424);
var m__$1 = map__72424__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rc-p","span.rc-p",1027752538),m__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children,hiccup_children))], null);
}));

(re_com.text.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.p.cljs$lang$applyTo = (function (seq72414){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72414));
}));

re_com.text.p_span = re_com.text.p;

//# sourceMappingURL=re_com.text.js.map
