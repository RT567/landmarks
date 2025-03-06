goog.provide('re_com.util');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function re_com$util$fmap_$_iter__71185(s__71186){
return (new cljs.core.LazySeq(null,(function (){
var s__71186__$1 = s__71186;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__71186__$1);
if(temp__5804__auto__){
var s__71186__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71186__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__71186__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__71188 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__71187 = (0);
while(true){
if((i__71187 < size__5519__auto__)){
var vec__71189 = cljs.core._nth(c__5518__auto__,i__71187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71189,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71189,(1),null);
cljs.core.chunk_append(b__71188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__71313 = (i__71187 + (1));
i__71187 = G__71313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71188),re_com$util$fmap_$_iter__71185(cljs.core.chunk_rest(s__71186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71188),null);
}
} else {
var vec__71192 = cljs.core.first(s__71186__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71192,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71192,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__71185(cljs.core.rest(s__71186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71317 = arguments.length;
var i__5767__auto___71318 = (0);
while(true){
if((i__5767__auto___71318 < len__5766__auto___71317)){
args__5772__auto__.push((arguments[i__5767__auto___71318]));

var G__71320 = (i__5767__auto___71318 + (1));
i__5767__auto___71318 = G__71320;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq71195){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71195));
}));

/**
 * Only assoc-in if no value exists at ks
 */
re_com.util.assoc_in_if_empty = (function re_com$util$assoc_in_if_empty(m,ks,v){
return cljs.core.assoc_in(m,ks,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,v));
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's an object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71328 = arguments.length;
var i__5767__auto___71329 = (0);
while(true){
if((i__5767__auto___71329 < len__5766__auto___71328)){
args__5772__auto__.push((arguments[i__5767__auto___71329]));

var G__71331 = (i__5767__auto___71329 + (1));
i__5767__auto___71329 = G__71331;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq71214){
var G__71215 = cljs.core.first(seq71214);
var seq71214__$1 = cljs.core.next(seq71214);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71215,seq71214__$1);
}));

/**
 * Takes a string ending with "px" and returns an integer.
 */
re_com.util._LT__px = (function re_com$util$_LT__px(s){
if(cljs.core.seq(s)){
return cljs.core.parse_long(clojure.string.replace(s,"px",""));
} else {
return null;
}
});
/**
 * takes n numbers (could also be strings) and converts them to a space separated px string
 *   e.g. (px-n 10 2 30 4) => '10px 2px 30px 4px' for use in :padding, :margin etc.
 *   Most useful when the args are calculations
 *   e.g. (px-n top-margin (inc h-width) (- top-margin 5) (dec h-width))
 *   Note: Doesn't support :negative like px above but it will work with negative numbers
 */
re_com.util.px_n = (function re_com$util$px_n(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71342 = arguments.length;
var i__5767__auto___71343 = (0);
while(true){
if((i__5767__auto___71343 < len__5766__auto___71342)){
args__5772__auto__.push((arguments[i__5767__auto___71343]));

var G__71344 = (i__5767__auto___71343 + (1));
i__5767__auto___71343 = G__71344;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71222_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71222_SHARP_),"px"].join('');
}),vals));
}));

(re_com.util.px_n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.px_n.cljs$lang$applyTo = (function (seq71223){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71223));
}));

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
re_com.util.pluralize = (function re_com$util$pluralize(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71346 = arguments.length;
var i__5767__auto___71347 = (0);
while(true){
if((i__5767__auto___71347 < len__5766__auto___71346)){
args__5772__auto__.push((arguments[i__5767__auto___71347]));

var G__71348 = (i__5767__auto___71347 + (1));
i__5767__auto___71347 = G__71348;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__71231){
var vec__71232 = p__71231;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71232,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(re_com.util.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.pluralize.cljs$lang$applyTo = (function (seq71227){
var G__71228 = cljs.core.first(seq71227);
var seq71227__$1 = cljs.core.next(seq71227);
var G__71229 = cljs.core.first(seq71227__$1);
var seq71227__$2 = cljs.core.next(seq71227__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71228,G__71229,seq71227__$2);
}));

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
re_com.util.__GT_v = (function re_com$util$__GT_v(x){
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
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71351 = arguments.length;
var i__5767__auto___71352 = (0);
while(true){
if((i__5767__auto___71352 < len__5766__auto___71351)){
args__5772__auto__.push((arguments[i__5767__auto___71352]));

var G__71353 = (i__5767__auto___71352 + (1));
i__5767__auto___71352 = G__71353;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__71240){
var map__71241 = p__71240;
var map__71241__$1 = cljs.core.__destructure_map(map__71241);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71241__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq71236){
var G__71237 = cljs.core.first(seq71236);
var seq71236__$1 = cljs.core.next(seq71236);
var G__71238 = cljs.core.first(seq71236__$1);
var seq71236__$2 = cljs.core.next(seq71236__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71237,G__71238,seq71236__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71369 = arguments.length;
var i__5767__auto___71370 = (0);
while(true){
if((i__5767__auto___71370 < len__5766__auto___71369)){
args__5772__auto__.push((arguments[i__5767__auto___71370]));

var G__71374 = (i__5767__auto___71370 + (1));
i__5767__auto___71370 = G__71374;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__71247){
var map__71248 = p__71247;
var map__71248__$1 = cljs.core.__destructure_map(map__71248);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71248__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71242_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__71242_SHARP_) : id_fn.call(null,p1__71242_SHARP_)),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq71243){
var G__71244 = cljs.core.first(seq71243);
var seq71243__$1 = cljs.core.next(seq71243);
var G__71245 = cljs.core.first(seq71243__$1);
var seq71243__$2 = cljs.core.next(seq71243__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71244,G__71245,seq71243__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71380 = arguments.length;
var i__5767__auto___71381 = (0);
while(true){
if((i__5767__auto___71381 < len__5766__auto___71380)){
args__5772__auto__.push((arguments[i__5767__auto___71381]));

var G__71382 = (i__5767__auto___71381 + (1));
i__5767__auto___71381 = G__71382;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__71255){
var map__71256 = p__71255;
var map__71256__$1 = cljs.core.__destructure_map(map__71256);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71256__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv((function (p1__71250_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__71250_SHARP_) : id_fn.call(null,p1__71250_SHARP_)),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq71251){
var G__71252 = cljs.core.first(seq71251);
var seq71251__$1 = cljs.core.next(seq71251);
var G__71253 = cljs.core.first(seq71251__$1);
var seq71251__$2 = cljs.core.next(seq71251__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71252,G__71253,seq71251__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 * Returns a map of id->m for each map 'm' with id 'id' in 'v'.
 */
re_com.util.zip_id = (function re_com$util$zip_id(var_args){
var G__71259 = arguments.length;
switch (G__71259) {
case 1:
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.util.zip_id.cljs$core$IFn$_invoke$arity$1 = (function (v){
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),v);
}));

(re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2 = (function (id_fn,v){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,v),v);
}));

(re_com.util.zip_id.cljs$lang$maxFixedArity = 2);

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__71395 = current_node.parentNode;
var G__71396 = (sum_scroll_left + current_node.scrollLeft);
var G__71397 = (sum_scroll_top + current_node.scrollTop);
current_node = G__71395;
sum_scroll_left = G__71396;
sum_scroll_top = G__71397;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});
re_com.util.clipboard_write_BANG_ = (function re_com$util$clipboard_write_BANG_(s){
return navigator.clipboard.writeText(s);
});
re_com.util.tsv_line = (function re_com$util$tsv_line(row){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("\t",row),"\n"].join('');
});
re_com.util.table__GT_tsv = (function re_com$util$table__GT_tsv(columns,rows){
var header_value_fn = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"export-header-label","export-header-label",-121029282),new cljs.core.Keyword(null,"header-label","header-label",765876429),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"id","id",-1388402092)));
var row_value_fn = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-export-row-label-fn","on-export-row-label-fn",622654867),new cljs.core.Keyword(null,"row-label-fn","row-label-fn",1457434308),new cljs.core.Keyword(null,"id","id",-1388402092));
var row__GT_cells = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(row_value_fn,columns));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.tsv_line,cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(header_value_fn,columns),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row__GT_cells,rows))));
});
re_com.util.hiccup_QMARK_ = cljs.core.vector_QMARK_;
re_com.util.default_part = (function re_com$util$default_part(p__71266){
var map__71267 = p__71266;
var map__71267__$1 = cljs.core.__destructure_map(map__71267);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71267__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71267__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71267__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71267__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr], 0))], null),children);
});
re_com.util.part_name = cljs.core.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name));
re_com.util.part = (function re_com$util$part(var_args){
var G__71271 = arguments.length;
switch (G__71271) {
case 3:
return re_com.util.part.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return re_com.util.part.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.util.part.cljs$core$IFn$_invoke$arity$3 = (function (p__71272,id,opts){
var map__71273 = p__71272;
var map__71273__$1 = cljs.core.__destructure_map(map__71273);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71273__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return re_com.util.part.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(parts,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,re_com.util.part_name(id))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"part","part",77757738),id));
}));

(re_com.util.part.cljs$core$IFn$_invoke$arity$2 = (function (part_value,p__71274){
var map__71275 = p__71274;
var map__71275__$1 = cljs.core.__destructure_map(map__71275);
var part_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"part","part",77757738));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71275__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.util.default_part);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var post_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"props","props",453281727));
if(cljs.core.truth_((function (){var or__5043__auto__ = (re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1(part_value) : re_com.util.hiccup_QMARK_.call(null,part_value));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return typeof part_value === 'string';
}
})())){
var G__71276 = part_value;
if(cljs.core.truth_(key)){
return cljs.core.with_meta(G__71276,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return G__71276;
}
} else {
var component = ((cljs.core.map_QMARK_(part_value))?impl:((cljs.core.ifn_QMARK_(part_value))?part_value:impl
));
var G__71277 = (cljs.core.truth_((re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.util.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : re_com.util.hiccup_QMARK_.call(null,component)))?component:(function (){var props__$1 = (function (){var G__71278 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),part_id], null);
var G__71278__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__71278,props], 0))
;
var G__71278__$2 = (cljs.core.truth_(theme)?(theme.cljs$core$IFn$_invoke$arity$2 ? theme.cljs$core$IFn$_invoke$arity$2(G__71278__$1,component) : theme.call(null,G__71278__$1,component)):G__71278__$1);
var G__71278__$3 = ((cljs.core.map_QMARK_(part_value))?re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__71278__$2,part_value], 0)):G__71278__$2);
if(cljs.core.truth_(post_props)){
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__71278__$3,post_props], 0));
} else {
return G__71278__$3;
}
})();
var G__71280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,props__$1], null);
if(cljs.core.truth_(key)){
return cljs.core.with_meta(G__71280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return G__71280;
}
})());
return G__71277;
}
}));

(re_com.util.part.cljs$lang$maxFixedArity = 3);

re_com.util.triangle = (function re_com$util$triangle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71415 = arguments.length;
var i__5767__auto___71416 = (0);
while(true){
if((i__5767__auto___71416 < len__5766__auto___71415)){
args__5772__auto__.push((arguments[i__5767__auto___71416]));

var G__71420 = (i__5767__auto___71416 + (1));
i__5767__auto___71416 = G__71420;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.util.triangle.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.util.triangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__71287){
var map__71288 = p__71287;
var map__71288__$1 = cljs.core.__destructure_map(map__71288);
var props = map__71288__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71288__$1,new cljs.core.Keyword(null,"width","width",-384071477),"9px");
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71288__$1,new cljs.core.Keyword(null,"height","height",1025178622),"9px");
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71288__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor");
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71288__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 9 9",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),(function (){var G__71289 = direction;
var G__71289__$1 = (((G__71289 instanceof cljs.core.Keyword))?G__71289.fqn:null);
switch (G__71289__$1) {
case "right":
return "2,2 8,5 2,8";

break;
case "up":
return "4,2 8,7 0,7";

break;
case "down":
return "4,7 8,2 0,2";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71289__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"fill","fill",883462889),fill], null)], null)], null);
}));

(re_com.util.triangle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.triangle.cljs$lang$applyTo = (function (seq71283){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71283));
}));

re_com.util.x_button = (function re_com$util$x_button(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71426 = arguments.length;
var i__5767__auto___71427 = (0);
while(true){
if((i__5767__auto___71427 < len__5766__auto___71426)){
args__5772__auto__.push((arguments[i__5767__auto___71427]));

var G__71429 = (i__5767__auto___71427 + (1));
i__5767__auto___71427 = G__71429;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.util.x_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.util.x_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__71293){
var map__71294 = p__71293;
var map__71294__$1 = cljs.core.__destructure_map(map__71294);
var hover_internal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__71431__delegate = function (p__71296){
var map__71297 = p__71296;
var map__71297__$1 = cljs.core.__destructure_map(map__71297);
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71297__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_internal_QMARK_);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71297__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71297__$1,new cljs.core.Keyword(null,"width","width",-384071477),"9px");
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71297__$1,new cljs.core.Keyword(null,"height","height",1025178622),"9px");
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71297__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1px");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,true),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,false),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util._LT__px(width))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util._LT__px(height))].join(''),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(re_com.util.deref_or_value(hover_QMARK_))?"#767a7c":"currentColor"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),re_com.util._LT__px(width),new cljs.core.Keyword(null,"y2","y2",-718691301),re_com.util._LT__px(height)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),re_com.util._LT__px(height),new cljs.core.Keyword(null,"x2","x2",-1362513475),re_com.util._LT__px(width),new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null)], null)], null)], null);
};
var G__71431 = function (var_args){
var p__71296 = null;
if (arguments.length > 0) {
var G__71442__i = 0, G__71442__a = new Array(arguments.length -  0);
while (G__71442__i < G__71442__a.length) {G__71442__a[G__71442__i] = arguments[G__71442__i + 0]; ++G__71442__i;}
  p__71296 = new cljs.core.IndexedSeq(G__71442__a,0,null);
} 
return G__71431__delegate.call(this,p__71296);};
G__71431.cljs$lang$maxFixedArity = 0;
G__71431.cljs$lang$applyTo = (function (arglist__71443){
var p__71296 = cljs.core.seq(arglist__71443);
return G__71431__delegate(p__71296);
});
G__71431.cljs$core$IFn$_invoke$arity$variadic = G__71431__delegate;
return G__71431;
})()
;
}));

(re_com.util.x_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.x_button.cljs$lang$applyTo = (function (seq71292){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71292));
}));

re_com.util.scrollbar_thickness = (10);
re_com.util.scrollbar_margin = (2);
re_com.util.scrollbar_tot_thick = (re_com.util.scrollbar_thickness + ((2) * re_com.util.scrollbar_margin));

//# sourceMappingURL=re_com.util.js.map
