goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__65213__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__65213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65214__i = 0, G__65214__a = new Array(arguments.length -  0);
while (G__65214__i < G__65214__a.length) {G__65214__a[G__65214__i] = arguments[G__65214__i + 0]; ++G__65214__i;}
  args = new cljs.core.IndexedSeq(G__65214__a,0,null);
} 
return G__65213__delegate.call(this,args);};
G__65213.cljs$lang$maxFixedArity = 0;
G__65213.cljs$lang$applyTo = (function (arglist__65215){
var args = cljs.core.seq(arglist__65215);
return G__65213__delegate(args);
});
G__65213.cljs$core$IFn$_invoke$arity$variadic = G__65213__delegate;
return G__65213;
})()
);

(o.error = (function() { 
var G__65217__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__65217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65218__i = 0, G__65218__a = new Array(arguments.length -  0);
while (G__65218__i < G__65218__a.length) {G__65218__a[G__65218__i] = arguments[G__65218__i + 0]; ++G__65218__i;}
  args = new cljs.core.IndexedSeq(G__65218__a,0,null);
} 
return G__65217__delegate.call(this,args);};
G__65217.cljs$lang$maxFixedArity = 0;
G__65217.cljs$lang$applyTo = (function (arglist__65219){
var args = cljs.core.seq(arglist__65219);
return G__65217__delegate(args);
});
G__65217.cljs$core$IFn$_invoke$arity$variadic = G__65217__delegate;
return G__65217;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
