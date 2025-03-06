goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
re_com.debug.log = (function (){var G__71643 = (function (){var G__71644 = re_com.config.log_format;
if((G__71644 == null)){
return null;
} else {
return cljs.core.name(G__71644);
}
})();
switch (G__71643) {
case "pr-str":
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,cljs.core.pr_str);

break;
case "js":
return console.log;

break;
case "pretty":
return cljs.pprint.pprint;

break;
default:
return console.log;

}
})();
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"edge","edge",919909153)], 0))));
} else {
return args;
}
});
re_com.debug.log_on_alt_click_STAR_ = (function re_com$debug$log_on_alt_click_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71822 = arguments.length;
var i__5767__auto___71823 = (0);
while(true){
if((i__5767__auto___71823 < len__5766__auto___71822)){
args__5772__auto__.push((arguments[i__5767__auto___71823]));

var G__71824 = (i__5767__auto___71823 + (1));
i__5767__auto___71823 = G__71824;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__71650){
var map__71651 = p__71650;
var map__71651__$1 = cljs.core.__destructure_map(map__71651);
var args = map__71651__$1;
if(cljs.core.truth_(event.altKey)){
return (re_com.debug.log.cljs$core$IFn$_invoke$arity$1 ? re_com.debug.log.cljs$core$IFn$_invoke$arity$1(args) : re_com.debug.log.call(null,args));
} else {
return null;
}
}));

(re_com.debug.log_on_alt_click_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click_STAR_.cljs$lang$applyTo = (function (seq71648){
var G__71649 = cljs.core.first(seq71648);
var seq71648__$1 = cljs.core.next(seq71648);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71649,seq71648__$1);
}));

re_com.debug.log_on_alt_click = (function re_com$debug$log_on_alt_click(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71826 = arguments.length;
var i__5767__auto___71828 = (0);
while(true){
if((i__5767__auto___71828 < len__5766__auto___71826)){
args__5772__auto__.push((arguments[i__5767__auto___71828]));

var G__71830 = (i__5767__auto___71828 + (1));
i__5767__auto___71828 = G__71830;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic = (function (p__71659,p__71660){
var map__71661 = p__71659;
var map__71661__$1 = cljs.core.__destructure_map(map__71661);
var args = map__71661__$1;
var map__71662 = p__71660;
var map__71662__$1 = cljs.core.__destructure_map(map__71662);
var show_all_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71662__$1,new cljs.core.Keyword(null,"show-all-args?","show-all-args?",1990461040),false);
if(cljs.core.truth_(re_com.config.debug_QMARK_)){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__71663 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__71663);
} else {
return G__71663;
}
})()], 0));

return null;
});
} else {
if(re_com.config.debug_parts_QMARK_){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__71664 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__71664);
} else {
return G__71664;
}
})()], 0));

return null;
});
} else {
return null;
}
}
}));

(re_com.debug.log_on_alt_click.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click.cljs$lang$applyTo = (function (seq71656){
var G__71657 = cljs.core.first(seq71656);
var seq71656__$1 = cljs.core.next(seq71656);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71657,seq71656__$1);
}));

re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__71672){
var map__71673 = p__71672;
var map__71673__$1 = cljs.core.__destructure_map(map__71673);
var args = map__71673__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71673__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71673__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__71677 = src;
var map__71677__$1 = cljs.core.__destructure_map(map__71677);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71677__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__71684 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71684,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__71684;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__71689 = arguments.length;
switch (G__71689) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__71696_71856 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__71695_SHARP_,p2__71694_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__71694_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__71695_SHARP_ + (1)));
}),stack));
var chunk__71697_71857 = null;
var count__71698_71858 = (0);
var i__71699_71859 = (0);
while(true){
if((i__71699_71859 < count__71698_71858)){
var map__71714_71861 = chunk__71697_71857.cljs$core$IIndexed$_nth$arity$2(null,i__71699_71859);
var map__71714_71862__$1 = cljs.core.__destructure_map(map__71714_71861);
var i_71863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71714_71862__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_71864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71714_71862__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_71865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71714_71862__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_71866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71714_71862__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_71867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71714_71862__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_71865)){
if(cljs.core.truth_(src_71866)){
var vec__71716_71868 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_71866,/:/);
var file_71869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71716_71868,(0),null);
var line_71870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71716_71868,(1),null);
if(cljs.core.truth_(args_71867)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71863),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71865)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71869),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71870),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_71867,el_71864);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71863),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71865)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71869),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71870),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_71864);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71863),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71865)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_71867,el_71864);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71863),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_71864);
}


var G__71875 = seq__71696_71856;
var G__71876 = chunk__71697_71857;
var G__71877 = count__71698_71858;
var G__71878 = (i__71699_71859 + (1));
seq__71696_71856 = G__71875;
chunk__71697_71857 = G__71876;
count__71698_71858 = G__71877;
i__71699_71859 = G__71878;
continue;
} else {
var temp__5804__auto___71879 = cljs.core.seq(seq__71696_71856);
if(temp__5804__auto___71879){
var seq__71696_71880__$1 = temp__5804__auto___71879;
if(cljs.core.chunked_seq_QMARK_(seq__71696_71880__$1)){
var c__5565__auto___71881 = cljs.core.chunk_first(seq__71696_71880__$1);
var G__71882 = cljs.core.chunk_rest(seq__71696_71880__$1);
var G__71883 = c__5565__auto___71881;
var G__71884 = cljs.core.count(c__5565__auto___71881);
var G__71885 = (0);
seq__71696_71856 = G__71882;
chunk__71697_71857 = G__71883;
count__71698_71858 = G__71884;
i__71699_71859 = G__71885;
continue;
} else {
var map__71720_71886 = cljs.core.first(seq__71696_71880__$1);
var map__71720_71887__$1 = cljs.core.__destructure_map(map__71720_71886);
var i_71888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71720_71887__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_71889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71720_71887__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_71890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71720_71887__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_71891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71720_71887__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_71892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71720_71887__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_71890)){
if(cljs.core.truth_(src_71891)){
var vec__71724_71893 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_71891,/:/);
var file_71894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71724_71893,(0),null);
var line_71895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71724_71893,(1),null);
if(cljs.core.truth_(args_71892)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71888),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71890)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71894),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71895),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_71892,el_71889);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71888),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71890)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71894),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71895),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_71889);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71888),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71890)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_71892,el_71889);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71888),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_71889);
}


var G__71908 = cljs.core.next(seq__71696_71880__$1);
var G__71909 = null;
var G__71910 = (0);
var G__71911 = (0);
seq__71696_71856 = G__71908;
chunk__71697_71857 = G__71909;
count__71698_71858 = G__71910;
i__71699_71859 = G__71911;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__71737 = cljs.core.seq(problems);
var chunk__71738 = null;
var count__71739 = (0);
var i__71740 = (0);
while(true){
if((i__71740 < count__71739)){
var map__71760 = chunk__71738.cljs$core$IIndexed$_nth$arity$2(null,i__71740);
var map__71760__$1 = cljs.core.__destructure_map(map__71760);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71760__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__71762_71918 = problem;
var G__71762_71919__$1 = (((G__71762_71918 instanceof cljs.core.Keyword))?G__71762_71918.fqn:null);
switch (G__71762_71919__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected a reactive atom but got a %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed both as a top-level argument and within %c:props%c","\n  - Re-com doesn't know which value to use for configuring the %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c part. \n  - Please delete one or the other."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed as a top-level argument.","\n  - This is unsupported. ","However, it is supported within %c:props%c \n  - Please declare %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c within the %c:props%c map."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__71927 = seq__71737;
var G__71928 = chunk__71738;
var G__71929 = count__71739;
var G__71930 = (i__71740 + (1));
seq__71737 = G__71927;
chunk__71738 = G__71928;
count__71739 = G__71929;
i__71740 = G__71930;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71737);
if(temp__5804__auto__){
var seq__71737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71737__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__71737__$1);
var G__71931 = cljs.core.chunk_rest(seq__71737__$1);
var G__71932 = c__5565__auto__;
var G__71933 = cljs.core.count(c__5565__auto__);
var G__71934 = (0);
seq__71737 = G__71931;
chunk__71738 = G__71932;
count__71739 = G__71933;
i__71740 = G__71934;
continue;
} else {
var map__71764 = cljs.core.first(seq__71737__$1);
var map__71764__$1 = cljs.core.__destructure_map(map__71764);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__71766_71935 = problem;
var G__71766_71936__$1 = (((G__71766_71935 instanceof cljs.core.Keyword))?G__71766_71935.fqn:null);
switch (G__71766_71936__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected a reactive atom but got a %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed both as a top-level argument and within %c:props%c","\n  - Re-com doesn't know which value to use for configuring the %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c part. \n  - Please delete one or the other."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed as a top-level argument.","\n  - This is unsupported. ","However, it is supported within %c:props%c \n  - Please declare %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c within the %c:props%c map."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__71938 = cljs.core.next(seq__71737__$1);
var G__71939 = null;
var G__71940 = (0);
var G__71941 = (0);
seq__71737 = G__71938;
chunk__71738 = G__71939;
count__71739 = G__71940;
i__71740 = G__71941;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__71774){
var map__71775 = p__71774;
var map__71775__$1 = cljs.core.__destructure_map(map__71775);
var src = map__71775__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71775__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log("\u2022 To enable clickable source urls, add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c. See https://re-com.day8.com.au/#/config",re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log("\u2022 Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug");
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71948 = arguments.length;
var i__5767__auto___71949 = (0);
while(true){
if((i__5767__auto___71949 < len__5766__auto___71948)){
args__5772__auto__.push((arguments[i__5767__auto___71949]));

var G__71950 = (i__5767__auto___71949 + (1));
i__5767__auto___71949 = G__71950;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__71781){
var map__71783 = p__71781;
var map__71783__$1 = cljs.core.__destructure_map(map__71783);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71783__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71783__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71783__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__71956__delegate = function (p__71788){
var map__71789 = p__71788;
var map__71789__$1 = cljs.core.__destructure_map(map__71789);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71789__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__71956 = function (var_args){
var p__71788 = null;
if (arguments.length > 0) {
var G__71958__i = 0, G__71958__a = new Array(arguments.length -  0);
while (G__71958__i < G__71958__a.length) {G__71958__a[G__71958__i] = arguments[G__71958__i + 0]; ++G__71958__i;}
  p__71788 = new cljs.core.IndexedSeq(G__71958__a,0,null);
} 
return G__71956__delegate.call(this,p__71788);};
G__71956.cljs$lang$maxFixedArity = 0;
G__71956.cljs$lang$applyTo = (function (arglist__71959){
var p__71788 = cljs.core.seq(arglist__71959);
return G__71956__delegate(p__71788);
});
G__71956.cljs$core$IFn$_invoke$arity$variadic = G__71956__delegate;
return G__71956;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq71780){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71780));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71961 = arguments.length;
var i__5767__auto___71962 = (0);
while(true){
if((i__5767__auto___71962 < len__5766__auto___71961)){
args__5772__auto__.push((arguments[i__5767__auto___71962]));

var G__71963 = (i__5767__auto___71962 + (1));
i__5767__auto___71962 = G__71963;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__71801){
var map__71802 = p__71801;
var map__71802__$1 = cljs.core.__destructure_map(map__71802);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71802__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71802__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__71965__delegate = function (p__71805){
var map__71806 = p__71805;
var map__71806__$1 = cljs.core.__destructure_map(map__71806);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71806__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71806__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__71965 = function (var_args){
var p__71805 = null;
if (arguments.length > 0) {
var G__71966__i = 0, G__71966__a = new Array(arguments.length -  0);
while (G__71966__i < G__71966__a.length) {G__71966__a[G__71966__i] = arguments[G__71966__i + 0]; ++G__71966__i;}
  p__71805 = new cljs.core.IndexedSeq(G__71966__a,0,null);
} 
return G__71965__delegate.call(this,p__71805);};
G__71965.cljs$lang$maxFixedArity = 0;
G__71965.cljs$lang$applyTo = (function (arglist__71967){
var p__71805 = cljs.core.seq(arglist__71967);
return G__71965__delegate(p__71805);
});
G__71965.cljs$core$IFn$_invoke$arity$variadic = G__71965__delegate;
return G__71965;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq71791){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71791));
}));


//# sourceMappingURL=re_com.debug.js.map
