goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__64652,res){
var map__64653 = p__64652;
var map__64653__$1 = cljs.core.__destructure_map(map__64653);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64653__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64653__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__64655 = res;
var G__64655__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64655,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__64655);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64655__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__64655__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__64663 = arguments.length;
switch (G__64663) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__64667,msg,handlers,timeout_after_ms){
var map__64668 = p__64667;
var map__64668__$1 = cljs.core.__destructure_map(map__64668);
var runtime = map__64668__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64890 = arguments.length;
var i__5767__auto___64891 = (0);
while(true){
if((i__5767__auto___64891 < len__5766__auto___64890)){
args__5772__auto__.push((arguments[i__5767__auto___64891]));

var G__64892 = (i__5767__auto___64891 + (1));
i__5767__auto___64891 = G__64892;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__64673,ev,args){
var map__64674 = p__64673;
var map__64674__$1 = cljs.core.__destructure_map(map__64674);
var runtime = map__64674__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64674__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__64675 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64678 = null;
var count__64679 = (0);
var i__64680 = (0);
while(true){
if((i__64680 < count__64679)){
var ext = chunk__64678.cljs$core$IIndexed$_nth$arity$2(null,i__64680);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__64896 = seq__64675;
var G__64897 = chunk__64678;
var G__64898 = count__64679;
var G__64899 = (i__64680 + (1));
seq__64675 = G__64896;
chunk__64678 = G__64897;
count__64679 = G__64898;
i__64680 = G__64899;
continue;
} else {
var G__64900 = seq__64675;
var G__64901 = chunk__64678;
var G__64902 = count__64679;
var G__64903 = (i__64680 + (1));
seq__64675 = G__64900;
chunk__64678 = G__64901;
count__64679 = G__64902;
i__64680 = G__64903;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64675);
if(temp__5804__auto__){
var seq__64675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64675__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64675__$1);
var G__64907 = cljs.core.chunk_rest(seq__64675__$1);
var G__64908 = c__5565__auto__;
var G__64909 = cljs.core.count(c__5565__auto__);
var G__64910 = (0);
seq__64675 = G__64907;
chunk__64678 = G__64908;
count__64679 = G__64909;
i__64680 = G__64910;
continue;
} else {
var ext = cljs.core.first(seq__64675__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__64912 = cljs.core.next(seq__64675__$1);
var G__64913 = null;
var G__64914 = (0);
var G__64915 = (0);
seq__64675 = G__64912;
chunk__64678 = G__64913;
count__64679 = G__64914;
i__64680 = G__64915;
continue;
} else {
var G__64916 = cljs.core.next(seq__64675__$1);
var G__64917 = null;
var G__64918 = (0);
var G__64919 = (0);
seq__64675 = G__64916;
chunk__64678 = G__64917;
count__64679 = G__64918;
i__64680 = G__64919;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq64670){
var G__64671 = cljs.core.first(seq64670);
var seq64670__$1 = cljs.core.next(seq64670);
var G__64672 = cljs.core.first(seq64670__$1);
var seq64670__$2 = cljs.core.next(seq64670__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64671,G__64672,seq64670__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__64691,p__64692){
var map__64693 = p__64691;
var map__64693__$1 = cljs.core.__destructure_map(map__64693);
var runtime = map__64693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__64694 = p__64692;
var map__64694__$1 = cljs.core.__destructure_map(map__64694);
var msg = map__64694__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64694__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__64696 = cljs.core.deref(state_ref);
var map__64696__$1 = cljs.core.__destructure_map(map__64696);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__64699){
var map__64700 = p__64699;
var map__64700__$1 = cljs.core.__destructure_map(map__64700);
var runtime = map__64700__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64700__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__64702,msg){
var map__64703 = p__64702;
var map__64703__$1 = cljs.core.__destructure_map(map__64703);
var runtime = map__64703__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__64706,key,p__64707){
var map__64708 = p__64706;
var map__64708__$1 = cljs.core.__destructure_map(map__64708);
var state = map__64708__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__64709 = p__64707;
var map__64709__$1 = cljs.core.__destructure_map(map__64709);
var spec = map__64709__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64709__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__64710,key,spec){
var map__64712 = p__64710;
var map__64712__$1 = cljs.core.__destructure_map(map__64712);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__64713_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__64713_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__64714_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__64714_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__64715_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__64715_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__64717_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__64717_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__64718_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__64718_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__64723,key){
var map__64727 = p__64723;
var map__64727__$1 = cljs.core.__destructure_map(map__64727);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__64749,msg){
var map__64750 = p__64749;
var map__64750__$1 = cljs.core.__destructure_map(map__64750);
var runtime = map__64750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__64753,p__64754){
var map__64755 = p__64753;
var map__64755__$1 = cljs.core.__destructure_map(map__64755);
var runtime = map__64755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__64756 = p__64754;
var map__64756__$1 = cljs.core.__destructure_map(map__64756);
var msg = map__64756__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64756__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64756__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__64761 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64764 = null;
var count__64765 = (0);
var i__64766 = (0);
while(true){
if((i__64766 < count__64765)){
var map__64809 = chunk__64764.cljs$core$IIndexed$_nth$arity$2(null,i__64766);
var map__64809__$1 = cljs.core.__destructure_map(map__64809);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64809__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__64938 = seq__64761;
var G__64939 = chunk__64764;
var G__64940 = count__64765;
var G__64941 = (i__64766 + (1));
seq__64761 = G__64938;
chunk__64764 = G__64939;
count__64765 = G__64940;
i__64766 = G__64941;
continue;
} else {
var G__64942 = seq__64761;
var G__64943 = chunk__64764;
var G__64944 = count__64765;
var G__64945 = (i__64766 + (1));
seq__64761 = G__64942;
chunk__64764 = G__64943;
count__64765 = G__64944;
i__64766 = G__64945;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64761);
if(temp__5804__auto__){
var seq__64761__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64761__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64761__$1);
var G__64946 = cljs.core.chunk_rest(seq__64761__$1);
var G__64947 = c__5565__auto__;
var G__64948 = cljs.core.count(c__5565__auto__);
var G__64949 = (0);
seq__64761 = G__64946;
chunk__64764 = G__64947;
count__64765 = G__64948;
i__64766 = G__64949;
continue;
} else {
var map__64826 = cljs.core.first(seq__64761__$1);
var map__64826__$1 = cljs.core.__destructure_map(map__64826);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64826__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__64950 = cljs.core.next(seq__64761__$1);
var G__64951 = null;
var G__64952 = (0);
var G__64953 = (0);
seq__64761 = G__64950;
chunk__64764 = G__64951;
count__64765 = G__64952;
i__64766 = G__64953;
continue;
} else {
var G__64954 = cljs.core.next(seq__64761__$1);
var G__64955 = null;
var G__64956 = (0);
var G__64957 = (0);
seq__64761 = G__64954;
chunk__64764 = G__64955;
count__64765 = G__64956;
i__64766 = G__64957;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
