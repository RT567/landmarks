goog.provide('re_com.part');
re_com.part.id = cljs.core.first;
re_com.part.children = (function re_com$part$children(p__72262){
var vec__72263 = p__72262;
var seq__72264 = cljs.core.seq(vec__72263);
var first__72265 = cljs.core.first(seq__72264);
var seq__72264__$1 = cljs.core.next(seq__72264);
var a = first__72265;
var vec__72266 = seq__72264__$1;
var seq__72267 = cljs.core.seq(vec__72266);
var first__72268 = cljs.core.first(seq__72267);
var seq__72267__$1 = cljs.core.next(seq__72267);
var b = first__72268;
var rest_children = seq__72267__$1;
var all_children = vec__72266;
if(cljs.core.map_QMARK_(b)){
return rest_children;
} else {
return all_children;
}
});
re_com.part.branch_QMARK_ = cljs.core.sequential_QMARK_;
re_com.part.unqualify = cljs.core.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name));
re_com.part.depth = cljs.core.memoize((function re_com$part$depth(tree,k){
var walk = (function re_com$part$depth_$_walk(node,depth__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify(k),re_com.part.unqualify((re_com.part.id.cljs$core$IFn$_invoke$arity$1 ? re_com.part.id.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.id.call(null,node))))){
return depth__$1;
} else {
if(cljs.core.truth_((re_com.part.branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.part.branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.branch_QMARK_.call(null,node)))){
return cljs.core.some((function (p1__72270_SHARP_){
return re_com$part$depth_$_walk(p1__72270_SHARP_,(depth__$1 + (1)));
}),re_com.part.children(node));
} else {
return null;
}
}
});
return walk(tree,(1));
}));
re_com.part.props = (function re_com$part$props(p__72272){
var vec__72273 = p__72272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72273,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72273,(1),null);
if(cljs.core.map_QMARK_(b)){
return b;
} else {
return null;
}
});
re_com.part.top_level_args = (function re_com$part$top_level_args(structure){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.part.unqualify(k)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),re_com.part.props),cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,structure)))], 0)));
});
re_com.part.css_class = (function re_com$part$css_class(part_id){
return ["rc-",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(part_id),(7)),"-",cljs.core.name(part_id)].join('');
});
re_com.part.describe = cljs.core.memoize((function re_com$part$describe(structure){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
var part_id = (re_com.part.id.cljs$core$IFn$_invoke$arity$1 ? re_com.part.id.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.id.call(null,node));
var part_name = re_com.part.unqualify(part_id);
var map__72292 = re_com.part.props(node);
var map__72292__$1 = cljs.core.__destructure_map(map__72292);
var part_props = map__72292__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72292__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72292__$1,new cljs.core.Keyword(null,"impl","impl",1677848700));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),part_name,new cljs.core.Keyword(null,"class","class",-2030961996),re_com.part.css_class(part_id),new cljs.core.Keyword(null,"level","level",1290497552),re_com.part.depth(structure,part_name),new cljs.core.Keyword(null,"impl","impl",1677848700),(function (){var or__5043__auto__ = (cljs.core.truth_(impl)?clojure.string.replace(clojure.string.replace(cljs.core.ns_name(impl),"$","."),"_","-"):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(tag)?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"]"].join(''):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "[:div]";
}
}
})()], null)], 0));
}),cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,structure));
}));
re_com.part.top_level_arg_QMARK_ = cljs.core.memoize((function (structure,k){
return cljs.core.contains_QMARK_(re_com.part.top_level_args(structure),k);
}));
re_com.part.unqualify_set = (function re_com$part$unqualify_set(s){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify,s));
});
re_com.part.args_valid_QMARK_ = (function re_com$part$args_valid_QMARK_(part_structure,args,problems){
var part_seq = cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,part_structure);
var ks = re_com.part.unqualify_set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.id,part_seq));
var top_ks = re_com.part.unqualify_set(re_com.part.top_level_args(part_structure));
var top_args = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(top_ks,cljs.core.keys(args)));
var part_args = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.keys(new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(args))));
var top_level_collisions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72301_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"part-top-level-collision","part-top-level-collision",-1458465990),new cljs.core.Keyword(null,"arg-name","arg-name",6205923),p1__72301_SHARP_], null);
}),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify_set(part_args),re_com.part.unqualify_set(top_args)));
var top_level_unsupported_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72302_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"part-top-level-unsupported","part-top-level-unsupported",957025165),new cljs.core.Keyword(null,"arg-name","arg-name",6205923),p1__72302_SHARP_], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(top_ks,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.set(cljs.core.keys(args)))));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(problems,top_level_collisions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_unsupported_keys], 0)));
});
re_com.part.part_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map_QMARK_,cljs.core.string_QMARK_,cljs.core.vector_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ifn_QMARK_,cljs.core.nil_QMARK_], 0));
re_com.part.describe_args = (function re_com$part$describe_args(structure){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.part.describe(structure)))),new cljs.core.Keyword(null,"parts-validate-fn","parts-validate-fn",-1083296147),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.part.args_valid_QMARK_,structure),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_com.part.top_level_args(structure),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__72303_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__72303_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.part.part_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"re-com part",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Overrides the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__72303_SHARP_))], null)," key within ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts"], null),"."," See the parts section below for details."], null)], null)], 0));
}))),re_com.part.describe(structure));
});
re_com.part.get = (function re_com$part$get(part_structure,props,k){
var part_name = re_com.part.unqualify(k);
var or__5043__auto__ = (cljs.core.truth_(re_com.part.top_level_arg_QMARK_(part_structure,part_name))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,part_name):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parts","parts",849007691),part_name], null));
}
});
re_com.part.default$ = (function re_com$part$default(p__72305){
var map__72306 = p__72305;
var map__72306__$1 = cljs.core.__destructure_map(map__72306);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72306__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72306__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72306__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72306__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr], 0))], null),children);
});
re_com.part.part = (function re_com$part$part(var_args){
var G__72308 = arguments.length;
switch (G__72308) {
case 4:
return re_com.part.part.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return re_com.part.part.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.part.part.cljs$core$IFn$_invoke$arity$4 = (function (structure,props,k,opts){
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(re_com.part.get(structure,props,k),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"part","part",77757738),k));
}));

(re_com.part.part.cljs$core$IFn$_invoke$arity$2 = (function (part_value,p__72309){
var map__72310 = p__72309;
var map__72310__$1 = cljs.core.__destructure_map(map__72310);
var part_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72310__$1,new cljs.core.Keyword(null,"part","part",77757738));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72310__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.part.default$);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72310__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72310__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var post_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72310__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72310__$1,new cljs.core.Keyword(null,"props","props",453281727));
var G__72311 = (cljs.core.truth_((re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1(part_value) : re_com.util.hiccup_QMARK_.call(null,part_value)))?part_value:((typeof part_value === 'string')?part_value:(function (){var component = ((cljs.core.map_QMARK_(part_value))?impl:((cljs.core.ifn_QMARK_(part_value))?part_value:impl
));
var props__$1 = (function (){var G__72312 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),part_id], null);
var G__72312__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__72312,props], 0))
;
var G__72312__$2 = (cljs.core.truth_(theme)?(theme.cljs$core$IFn$_invoke$arity$2 ? theme.cljs$core$IFn$_invoke$arity$2(G__72312__$1,component) : theme.call(null,G__72312__$1,component)):G__72312__$1);
var G__72312__$3 = ((cljs.core.map_QMARK_(part_value))?re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__72312__$2,part_value], 0)):G__72312__$2);
if(cljs.core.truth_(post_props)){
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__72312__$3,post_props], 0));
} else {
return G__72312__$3;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,props__$1], null);
})()
));
if(cljs.core.truth_(key)){
return cljs.core.with_meta(G__72311,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return G__72311;
}
}));

(re_com.part.part.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=re_com.part.js.map
