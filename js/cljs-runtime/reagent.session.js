goog.provide('reagent.session');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69114 = arguments.length;
var i__5767__auto___69115 = (0);
while(true){
if((i__5767__auto___69115 < len__5766__auto___69114)){
args__5772__auto__.push((arguments[i__5767__auto___69115]));

var G__69116 = (i__5767__auto___69115 + (1));
i__5767__auto___69115 = G__69116;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__68971){
var vec__68973 = p__68971;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68973,(0),null);
var temp_a = cljs.core.deref(reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq68969){
var G__68970 = cljs.core.first(seq68969);
var seq68969__$1 = cljs.core.next(seq68969);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68970,seq68969__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69117 = arguments.length;
var i__5767__auto___69118 = (0);
while(true){
if((i__5767__auto___69118 < len__5766__auto___69117)){
args__5772__auto__.push((arguments[i__5767__auto___69118]));

var G__69119 = (i__5767__auto___69118 + (1));
i__5767__auto___69118 = G__69119;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__68999){
var vec__69000 = p__68999;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69000,(0),null);
var result = cljs.core.deref(reagent.session.cursor(ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq68986){
var G__68987 = cljs.core.first(seq68986);
var seq68986__$1 = cljs.core.next(seq68986);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68987,seq68986__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69121 = arguments.length;
var i__5767__auto___69123 = (0);
while(true){
if((i__5767__auto___69123 < len__5766__auto___69121)){
args__5772__auto__.push((arguments[i__5767__auto___69123]));

var G__69126 = (i__5767__auto___69123 + (1));
i__5767__auto___69123 = G__69126;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq69015){
var G__69016 = cljs.core.first(seq69015);
var seq69015__$1 = cljs.core.next(seq69015);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69016,seq69015__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69127 = arguments.length;
var i__5767__auto___69128 = (0);
while(true){
if((i__5767__auto___69128 < len__5766__auto___69127)){
args__5772__auto__.push((arguments[i__5767__auto___69128]));

var G__69129 = (i__5767__auto___69128 + (1));
i__5767__auto___69128 = G__69129;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__69039){
var vec__69040 = p__69039;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69040,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq69033){
var G__69034 = cljs.core.first(seq69033);
var seq69033__$1 = cljs.core.next(seq69033);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69034,seq69033__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69130 = arguments.length;
var i__5767__auto___69131 = (0);
while(true){
if((i__5767__auto___69131 < len__5766__auto___69130)){
args__5772__auto__.push((arguments[i__5767__auto___69131]));

var G__69132 = (i__5767__auto___69131 + (1));
i__5767__auto___69131 = G__69132;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__69065){
var vec__69068 = p__69065;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69068,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq69060){
var G__69061 = cljs.core.first(seq69060);
var seq69060__$1 = cljs.core.next(seq69060);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69061,seq69060__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69140 = arguments.length;
var i__5767__auto___69141 = (0);
while(true){
if((i__5767__auto___69141 < len__5766__auto___69140)){
args__5772__auto__.push((arguments[i__5767__auto___69141]));

var G__69142 = (i__5767__auto___69141 + (1));
i__5767__auto___69141 = G__69142;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__69075_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__69075_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq69077){
var G__69078 = cljs.core.first(seq69077);
var seq69077__$1 = cljs.core.next(seq69077);
var G__69079 = cljs.core.first(seq69077__$1);
var seq69077__$2 = cljs.core.next(seq69077__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69078,G__69079,seq69077__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69147 = arguments.length;
var i__5767__auto___69148 = (0);
while(true){
if((i__5767__auto___69148 < len__5766__auto___69147)){
args__5772__auto__.push((arguments[i__5767__auto___69148]));

var G__69149 = (i__5767__auto___69148 + (1));
i__5767__auto___69148 = G__69149;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__69097_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__69097_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq69098){
var G__69099 = cljs.core.first(seq69098);
var seq69098__$1 = cljs.core.next(seq69098);
var G__69100 = cljs.core.first(seq69098__$1);
var seq69098__$2 = cljs.core.next(seq69098__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69099,G__69100,seq69098__$2);
}));


//# sourceMappingURL=reagent.session.js.map
