goog.provide('re_com.theme.util');
re_com.theme.util.merge_class = (function re_com$theme$util$merge_class(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71172 = arguments.length;
var i__5767__auto___71173 = (0);
while(true){
if((i__5767__auto___71173 < len__5766__auto___71172)){
args__5772__auto__.push((arguments[i__5767__auto___71173]));

var G__71174 = (i__5767__auto___71173 + (1));
i__5767__auto___71173 = G__71174;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.flatten(classes)));
}));

(re_com.theme.util.merge_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_class.cljs$lang$applyTo = (function (seq71153){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71153));
}));

re_com.theme.util.merge_style = (function re_com$theme$util$merge_style(props,style){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,style);
});
re_com.theme.util.__GT_v = (function re_com$theme$util$__GT_v(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
if((x == null)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
}
});
re_com.theme.util.merge_props_rf = (function re_com$theme$util$merge_props_rf(acc,p__71160){
var map__71161 = p__71160;
var map__71161__$1 = cljs.core.__destructure_map(map__71161);
var m = map__71161__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71161__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71161__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71161__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(function (){var G__71162 = (((!(typeof m === 'string')))?m:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null)], null));
var G__71162__$1 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"class","class",-2030961996)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71162,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.theme.util.__GT_v(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(acc)),re_com.theme.util.__GT_v(class$))):G__71162);
var G__71162__$2 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"attr","attr",-604132353)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71162__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(acc),attr], 0))):G__71162__$1);
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"style","style",-496642736))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71162__$2,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(acc),style], 0)));
} else {
return G__71162__$2;
}
})()], 0));
});
re_com.theme.util.merge_props = (function re_com$theme$util$merge_props(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71177 = arguments.length;
var i__5767__auto___71178 = (0);
while(true){
if((i__5767__auto___71178 < len__5766__auto___71177)){
args__5772__auto__.push((arguments[i__5767__auto___71178]));

var G__71179 = (i__5767__auto___71178 + (1));
i__5767__auto___71178 = G__71179;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_com.theme.util.merge_props_rf,cljs.core.PersistentArrayMap.EMPTY,ms);
}));

(re_com.theme.util.merge_props.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_props.cljs$lang$applyTo = (function (seq71165){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71165));
}));


//# sourceMappingURL=re_com.theme.util.js.map
