goog.provide('re_com.nested_v_grid.util');
re_com.nested_v_grid.util.path__GT_grid_line_name = (function re_com$nested_v_grid$util$path__GT_grid_line_name(path){
return ["rc",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(path))].join('');
});
re_com.nested_v_grid.util.branch_QMARK_ = cljs.core.sequential_QMARK_;
re_com.nested_v_grid.util.children = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.rest);
re_com.nested_v_grid.util.get_header_spec = cljs.core.first;
re_com.nested_v_grid.util.header_size = (function re_com$nested_v_grid$util$header_size(var_args){
var G__73515 = arguments.length;
switch (G__73515) {
case 1:
return re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$1 = (function (header){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"size","size",1098693007));
}));

(re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2 = (function (header,default_size){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(header,new cljs.core.Keyword(null,"size","size",1098693007),default_size);
}));

(re_com.nested_v_grid.util.header_size.cljs$lang$maxFixedArity = 2);

re_com.nested_v_grid.util.remove_size = (function re_com$nested_v_grid$util$remove_size(m){
var G__73521 = m;
if(cljs.core.map_QMARK_(m)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73521,new cljs.core.Keyword(null,"size","size",1098693007));
} else {
return G__73521;
}
});
re_com.nested_v_grid.util.ancestry = (function re_com$nested_v_grid$util$ancestry(path){
var acc = cljs.core.PersistentVector.EMPTY;
var ancestor = path;
while(true){
if(cljs.core.empty_QMARK_(ancestor)){
return acc;
} else {
var G__73814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,ancestor);
var G__73815 = cljs.core.pop(ancestor);
acc = G__73814;
ancestor = G__73815;
continue;
}
break;
}
});
re_com.nested_v_grid.util.intersection_QMARK_ = (function re_com$nested_v_grid$util$intersection_QMARK_(x1,size,window_start,window_end){
return (((x1 <= window_end)) && (((x1 + size) >= window_start)));
});
re_com.nested_v_grid.util.evict_BANG_ = (function re_com$nested_v_grid$util$evict_BANG_(cache,tree,keypath){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cache,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__73527_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,p1__73527_SHARP_);
})),re_com.nested_v_grid.util.ancestry(keypath)));
});
re_com.nested_v_grid.util.window = (function re_com$nested_v_grid$util$window(p__73547){
var map__73549 = p__73547;
var map__73549__$1 = cljs.core.__destructure_map(map__73549);
var default_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73549__$1,new cljs.core.Keyword(null,"default-size","default-size",-56245282),(20));
var lookup_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"lookup-fn","lookup-fn",-862560609));
var show_branch_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992));
var window_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"window-start","window-start",-1535255967));
var hide_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034));
var skip_tail_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73549__$1,new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),true);
var size_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73549__$1,new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY));
var header_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968));
var window_end = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73549__$1,new cljs.core.Keyword(null,"window-end","window-end",-1966160494),Number.POSITIVE_INFINITY);
var cache_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73549__$1,new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939));
var sum_size = cljs.core.volatile_BANG_((0));
var depth = cljs.core.volatile_BANG_((0));
var paths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var keypaths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sizes = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sums = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var nodes_traversed = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var spans = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var cache_BANG_ = (function (){var or__5043__auto__ = cache_fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (p1__73532_SHARP_,p2__73533_SHARP_){
return cljs.core._vreset_BANG_(size_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(size_cache),p1__73532_SHARP_,p2__73533_SHARP_));
});
}
})();
var lookup_BANG_ = (function (){var or__5043__auto__ = lookup_fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (p1__73534_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(size_cache),p1__73534_SHARP_);
});
}
})();
var cached_sum_size = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(header_tree) : lookup_BANG_.call(null,header_tree));
var cached_depth = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"depth","depth",1768663640)) : lookup_BANG_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)));
var walk = (function() { 
var re_com$nested_v_grid$util$window_$_walk__delegate = function (path,node,p__73561){
var map__73562 = p__73561;
var map__73562__$1 = cljs.core.__destructure_map(map__73562);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73562__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.PersistentVector.EMPTY);
var collect_anyway_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73562__$1,new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270));
var is_leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73562__$1,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73562__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var last_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73562__$1,new cljs.core.Keyword(null,"last-child?","last-child?",772928468));
var hide_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73562__$1,new cljs.core.Keyword(null,"hide?","hide?",-988635670));
if(cljs.core.truth_(goog.DEBUG)){
nodes_traversed.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes_traversed.cljs$core$IDeref$_deref$arity$1(null),node));
} else {
}

var sum = cljs.core.deref(sum_size);
var passed_tail_QMARK_ = (function (){var and__5041__auto__ = skip_tail_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cached_sum_size;
if(cljs.core.truth_(and__5041__auto____$1)){
return (sum > window_end);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(passed_tail_QMARK_)){
return null;
} else {
if(cljs.core.truth_((re_com.nested_v_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.branch_QMARK_.call(null,node)))){
var csize = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(node) : lookup_BANG_.call(null,node));
var skippable_QMARK_ = (function (){var and__5041__auto__ = csize;
if(cljs.core.truth_(and__5041__auto__)){
return (!(re_com.nested_v_grid.util.intersection_QMARK_(sum,csize,window_start,window_end)));
} else {
return and__5041__auto__;
}
})();
var children = re_com.nested_v_grid.util.children(node);
var children_QMARK_ = cljs.core.seq(children);
var cacheable_QMARK_ = ((cljs.core.not(csize)) && (children_QMARK_));
var show_after_QMARK_ = (function (){var or__5043__auto__ = show_branch_cells_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)),new cljs.core.Keyword(null,"show-after?","show-after?",1798005876));
}
})();
var add_after_QMARK_ = ((cljs.core.not(hide_QMARK_)) && (children_QMARK_));
var after_child = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(node)], null);
var children__$1 = cljs.core.vec(children);
var all_children = (function (){var G__73587 = children__$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = show_after_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return add_after_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__73587,after_child);
} else {
return G__73587;
}
})();
if(cljs.core.truth_(skippable_QMARK_)){
sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + csize));

return csize;
} else {
var is_leaf_QMARK___$1 = cljs.core.not(cljs.core.seq(all_children));
var own_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)));
var own_size = re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(path,(re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270),true,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),is_leaf_QMARK___$1,new cljs.core.Keyword(null,"branch-path?","branch-path?",1002922587),(!(is_leaf_QMARK___$1)),new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypath,(0)),new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"last-child?","last-child?",772928468),last_child_QMARK_], null)], 0));
var descend_tx = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,subtree){
return re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(own_path,subtree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keypath","keypath",1965534711),(function (){var G__73610 = keypath;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__73610,(i + (1)));
} else {
return G__73610;
}
})(),new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.count(children__$1) - ((add_after_QMARK_)?(1):null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0))], 0));
}));
var child_sizes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(descend_tx,cljs.core.conj,all_children));
var total_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,own_size,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,child_sizes));
spans.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(spans.cljs$core$IDeref$_deref$arity$1(null),own_path,cljs.core._PLUS_,cljs.core.count(child_sizes)));

if(re_com.nested_v_grid.util.intersection_QMARK_(sum,total_size,window_start,window_end)){
} else {
paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(paths.cljs$core$IDeref$_deref$arity$1(null)));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sums.cljs$core$IDeref$_deref$arity$1(null)));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sizes.cljs$core$IDeref$_deref$arity$1(null)));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(keypaths.cljs$core$IDeref$_deref$arity$1(null)));
}

if(cacheable_QMARK_){
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(node,total_size) : cache_BANG_.call(null,node,total_size));
} else {
}

return total_size;
}
} else {
var leaf_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108));
var show_QMARK_ = (function (){var or__5043__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_above_QMARK_;
}
})();
var leaf_size = ((cljs.core.not((function (){var or__5043__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_above_QMARK_;
}
})()))?(0):re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2(node,default_size));
if(cljs.core.truth_((function (){var or__5043__auto__ = re_com.nested_v_grid.util.intersection_QMARK_(sum,leaf_size,window_start,window_end);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return collect_anyway_QMARK_;
}
})())){
var new_path_73848 = (function (){var G__73650 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_com.nested_v_grid.util.remove_size,leaf_path);
if(cljs.core.truth_((function (){var or__5043__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_above_QMARK_;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(G__73650,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(is_leaf_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaf?","leaf?",445442965),true], null):null),(cljs.core.truth_(is_leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),true], null)),(cljs.core.truth_(branch_end_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),true], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(show_above_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),true], null):null),(cljs.core.truth_(last_child_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0));
} else {
return G__73650;
}
})();
depth.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var x__5128__auto__ = (function (){var x__5128__auto__ = depth.cljs$core$IDeref$_deref$arity$1(null);
var y__5129__auto__ = cached_depth;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var y__5129__auto__ = cljs.core.count(new_path_73848);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());

paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths.cljs$core$IDeref$_deref$arity$1(null),new_path_73848));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sums.cljs$core$IDeref$_deref$arity$1(null),sum));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sizes.cljs$core$IDeref$_deref$arity$1(null),leaf_size));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypaths.cljs$core$IDeref$_deref$arity$1(null),keypath));
} else {
}

sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + leaf_size));

return leaf_size;

}
}
};
var re_com$nested_v_grid$util$window_$_walk = function (path,node,var_args){
var p__73561 = null;
if (arguments.length > 2) {
var G__73855__i = 0, G__73855__a = new Array(arguments.length -  2);
while (G__73855__i < G__73855__a.length) {G__73855__a[G__73855__i] = arguments[G__73855__i + 2]; ++G__73855__i;}
  p__73561 = new cljs.core.IndexedSeq(G__73855__a,0,null);
} 
return re_com$nested_v_grid$util$window_$_walk__delegate.call(this,path,node,p__73561);};
re_com$nested_v_grid$util$window_$_walk.cljs$lang$maxFixedArity = 2;
re_com$nested_v_grid$util$window_$_walk.cljs$lang$applyTo = (function (arglist__73856){
var path = cljs.core.first(arglist__73856);
arglist__73856 = cljs.core.next(arglist__73856);
var node = cljs.core.first(arglist__73856);
var p__73561 = cljs.core.rest(arglist__73856);
return re_com$nested_v_grid$util$window_$_walk__delegate(path,node,p__73561);
});
re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic = re_com$nested_v_grid$util$window_$_walk__delegate;
return re_com$nested_v_grid$util$window_$_walk;
})()
;
walk(cljs.core.PersistentVector.EMPTY,header_tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide?","hide?",-988635670),hide_root_QMARK_], null));

var G__73666_73867 = new cljs.core.Keyword(null,"depth","depth",1768663640);
var G__73667_73868 = cljs.core.deref(depth);
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(G__73666_73867,G__73667_73868) : cache_BANG_.call(null,G__73666_73867,G__73667_73868));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"window-start","window-start",-1535255967),new cljs.core.Keyword(null,"sizes","sizes",-273528126),new cljs.core.Keyword(null,"spans","spans",-1512938203),new cljs.core.Keyword(null,"keypaths","keypaths",1637512847),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),new cljs.core.Keyword(null,"sum-size","sum-size",1340005431),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"header-paths","header-paths",1334163001),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"nodes-traversed","nodes-traversed",683030719)],[window_start,cljs.core.deref(sizes),cljs.core.deref(spans),cljs.core.deref(keypaths),window_end,(function (){var or__5043__auto__ = cached_sum_size;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.deref(sum_size);
}
})(),cljs.core.deref(depth),cljs.core.deref(paths),cljs.core.deref(sums),cljs.core.deref(nodes_traversed)]);
});
re_com.nested_v_grid.util.grid_tokens = (function re_com$nested_v_grid$util$grid_tokens(p__73671){
var map__73672 = p__73671;
var map__73672__$1 = cljs.core.__destructure_map(map__73672);
var header_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73672__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var sizes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73672__$1,new cljs.core.Keyword(null,"sizes","sizes",-273528126));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73672__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var sum_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73672__$1,new cljs.core.Keyword(null,"sum-size","sum-size",1340005431));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[start]"], null),(function (){var G__73685 = header_paths;
var vec__73690 = G__73685;
var seq__73691 = cljs.core.seq(vec__73690);
var first__73692 = cljs.core.first(seq__73691);
var seq__73691__$1 = cljs.core.next(seq__73691);
var path = first__73692;
var rest_paths = seq__73691__$1;
var G__73686 = sizes;
var vec__73693 = G__73686;
var seq__73694 = cljs.core.seq(vec__73693);
var first__73695 = cljs.core.first(seq__73694);
var seq__73694__$1 = cljs.core.next(seq__73694);
var size = first__73695;
var rest_sizes = seq__73694__$1;
var G__73687 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(positions,sum_size);
var vec__73696 = G__73687;
var seq__73697 = cljs.core.seq(vec__73696);
var first__73698 = cljs.core.first(seq__73697);
var seq__73697__$1 = cljs.core.next(seq__73697);
var position = first__73698;
var vec__73699 = seq__73697__$1;
var next_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73699,(0),null);
var rest_positions = vec__73699;
var result = cljs.core.PersistentVector.EMPTY;
var G__73685__$1 = G__73685;
var G__73686__$1 = G__73686;
var G__73687__$1 = G__73687;
var result__$1 = result;
while(true){
var vec__73732 = G__73685__$1;
var seq__73733 = cljs.core.seq(vec__73732);
var first__73734 = cljs.core.first(seq__73733);
var seq__73733__$1 = cljs.core.next(seq__73733);
var path__$1 = first__73734;
var rest_paths__$1 = seq__73733__$1;
var vec__73735 = G__73686__$1;
var seq__73736 = cljs.core.seq(vec__73735);
var first__73737 = cljs.core.first(seq__73736);
var seq__73736__$1 = cljs.core.next(seq__73736);
var size__$1 = first__73737;
var rest_sizes__$1 = seq__73736__$1;
var vec__73738 = G__73687__$1;
var seq__73739 = cljs.core.seq(vec__73738);
var first__73740 = cljs.core.first(seq__73739);
var seq__73739__$1 = cljs.core.next(seq__73739);
var position__$1 = first__73740;
var vec__73741 = seq__73739__$1;
var next_position__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73741,(0),null);
var rest_positions__$1 = vec__73741;
var result__$2 = result__$1;
var map__73745 = cljs.core.peek(path__$1);
var map__73745__$1 = cljs.core.__destructure_map(map__73745);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73745__$1,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(path__$1)));
var spacer_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_position__$1,(position__$1 + size__$1));
var next_result = (function (){var G__73748 = result__$2;
var G__73748__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__73748,path__$1)
;
var G__73748__$2 = (cljs.core.truth_(show_above_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__73748__$1,(function (){var or__5043__auto__ = size__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})()):G__73748__$1);
if(spacer_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__73748__$2,"[spacer]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((next_position__$1 - size__$1) - position__$1)], 0));
} else {
return G__73748__$2;
}
})();
if(cljs.core.empty_QMARK_(rest_sizes__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_result,"[end]");
} else {
var G__73888 = rest_paths__$1;
var G__73889 = rest_sizes__$1;
var G__73890 = rest_positions__$1;
var G__73891 = next_result;
G__73685__$1 = G__73888;
G__73686__$1 = G__73889;
G__73687__$1 = G__73890;
result__$1 = G__73891;
continue;
}
break;
}
})());
});
re_com.nested_v_grid.util.grid_template = (function re_com$nested_v_grid$util$grid_template(header_traversal){
return clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73749_SHARP_){
if(typeof p1__73749_SHARP_ === 'string'){
return p1__73749_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__73749_SHARP_)){
return ["[",re_com.nested_v_grid.util.path__GT_grid_line_name(p1__73749_SHARP_),"]"].join('');
} else {
if(typeof p1__73749_SHARP_ === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73749_SHARP_),"px"].join('');
} else {
return null;
}
}
}
}),re_com.nested_v_grid.util.grid_tokens(header_traversal))),"] ["," ");
});
re_com.nested_v_grid.util.grid_cross_template = (function re_com$nested_v_grid$util$grid_cross_template(var_args){
var G__73754 = arguments.length;
switch (G__73754) {
case 1:
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___73900 = arguments.length;
var i__5767__auto___73901 = (0);
while(true){
if((i__5767__auto___73901 < len__5766__auto___73900)){
args_arr__5791__auto__.push((arguments[i__5767__auto___73901]));

var G__73903 = (i__5767__auto___73901 + (1));
i__5767__auto___73901 = G__73903;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((1)),(0),null));
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5792__auto__);

}
});

(re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,more_tokens){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,tokens,more_tokens));
}));

/** @this {Function} */
(re_com.nested_v_grid.util.grid_cross_template.cljs$lang$applyTo = (function (seq73752){
var G__73753 = cljs.core.first(seq73752);
var seq73752__$1 = cljs.core.next(seq73752);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73753,seq73752__$1);
}));

(re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
var rf = (function (s,group){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," ",((typeof cljs.core.first(group) === 'number')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.px,group)):((typeof cljs.core.first(group) === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",group):["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.nested_v_grid.util.path__GT_grid_line_name,group)),"]"].join('')
))].join('');
});
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,"",cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.string_QMARK_),tokens)));
}));

(re_com.nested_v_grid.util.grid_cross_template.cljs$lang$maxFixedArity = (1));

re_com.nested_v_grid.util.grid_spans = (function re_com$nested_v_grid$util$grid_spans(grid_tokens){
var results = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (path){
var seq__73771 = cljs.core.seq(re_com.nested_v_grid.util.ancestry(path));
var chunk__73772 = null;
var count__73773 = (0);
var i__73774 = (0);
while(true){
if((i__73774 < count__73773)){
var p = chunk__73772.cljs$core$IIndexed$_nth$arity$2(null,i__73774);
results.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(results.cljs$core$IDeref$_deref$arity$1(null),p,cljs.core.inc));


var G__73910 = seq__73771;
var G__73911 = chunk__73772;
var G__73912 = count__73773;
var G__73913 = (i__73774 + (1));
seq__73771 = G__73910;
chunk__73772 = G__73911;
count__73773 = G__73912;
i__73774 = G__73913;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73771);
if(temp__5804__auto__){
var seq__73771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73771__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__73771__$1);
var G__73919 = cljs.core.chunk_rest(seq__73771__$1);
var G__73920 = c__5565__auto__;
var G__73921 = cljs.core.count(c__5565__auto__);
var G__73922 = (0);
seq__73771 = G__73919;
chunk__73772 = G__73920;
count__73773 = G__73921;
i__73774 = G__73922;
continue;
} else {
var p = cljs.core.first(seq__73771__$1);
results.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(results.cljs$core$IDeref$_deref$arity$1(null),p,cljs.core.inc));


var G__73923 = cljs.core.next(seq__73771__$1);
var G__73924 = null;
var G__73925 = (0);
var G__73926 = (0);
seq__73771 = G__73923;
chunk__73772 = G__73924;
count__73773 = G__73925;
i__73774 = G__73926;
continue;
}
} else {
return null;
}
}
break;
}
}),grid_tokens);

return cljs.core.deref(results);
});
re_com.nested_v_grid.util.upgrade_header_tree_schema = (function re_com$nested_v_grid$util$upgrade_header_tree_schema(var_args){
var G__73783 = arguments.length;
switch (G__73783) {
case 1:
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),tree);
}));

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2 = (function (acc,tree){
while(true){
if((!(cljs.core.vector_QMARK_(tree)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null);
} else {
var vec__73794 = tree;
var seq__73795 = cljs.core.seq(vec__73794);
var first__73796 = cljs.core.first(seq__73795);
var seq__73795__$1 = cljs.core.next(seq__73795);
var l = first__73796;
var vec__73797 = seq__73795__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73797,(0),null);
var remainder = vec__73797;
if(cljs.core.not(l)){
return acc;
} else {
if(cljs.core.vector_QMARK_(l)){
var G__73929 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,l));
var G__73930 = cljs.core.vec(remainder);
acc = G__73929;
tree = G__73930;
continue;
} else {
if((!(cljs.core.vector_QMARK_(r)))){
var G__73931 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null));
var G__73932 = cljs.core.vec(remainder);
acc = G__73931;
tree = G__73932;
continue;
} else {
var children = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,remainder);
var new_remainder = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children),remainder));
var G__73933 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.nested_v_grid.util.upgrade_header_tree_schema,cljs.core.PersistentVector.EMPTY),children)));
var G__73934 = new_remainder;
acc = G__73933;
tree = G__73934;
continue;

}
}
}
}
break;
}
}));

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_com.nested_v_grid.util.js.map
