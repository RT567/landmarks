goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68548,p__68549){
var map__68550 = p__68548;
var map__68550__$1 = cljs.core.__destructure_map(map__68550);
var svc = map__68550__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68551 = p__68549;
var map__68551__$1 = cljs.core.__destructure_map(map__68551);
var msg = map__68551__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68551__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68551__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68551__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68551__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68571,p__68572){
var map__68573 = p__68571;
var map__68573__$1 = cljs.core.__destructure_map(map__68573);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68573__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68574 = p__68572;
var map__68574__$1 = cljs.core.__destructure_map(map__68574);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68574__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68585,p__68586){
var map__68588 = p__68585;
var map__68588__$1 = cljs.core.__destructure_map(map__68588);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68588__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68589 = p__68586;
var map__68589__$1 = cljs.core.__destructure_map(map__68589);
var msg = map__68589__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68589__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68599,tid){
var map__68601 = p__68599;
var map__68601__$1 = cljs.core.__destructure_map(map__68601);
var svc = map__68601__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68601__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68624 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68625 = null;
var count__68626 = (0);
var i__68627 = (0);
while(true){
if((i__68627 < count__68626)){
var vec__68656 = chunk__68625.cljs$core$IIndexed$_nth$arity$2(null,i__68627);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68656,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68656,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68742 = seq__68624;
var G__68743 = chunk__68625;
var G__68744 = count__68626;
var G__68745 = (i__68627 + (1));
seq__68624 = G__68742;
chunk__68625 = G__68743;
count__68626 = G__68744;
i__68627 = G__68745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68624);
if(temp__5804__auto__){
var seq__68624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68624__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68624__$1);
var G__68746 = cljs.core.chunk_rest(seq__68624__$1);
var G__68747 = c__5565__auto__;
var G__68748 = cljs.core.count(c__5565__auto__);
var G__68749 = (0);
seq__68624 = G__68746;
chunk__68625 = G__68747;
count__68626 = G__68748;
i__68627 = G__68749;
continue;
} else {
var vec__68673 = cljs.core.first(seq__68624__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68673,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68673,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68754 = cljs.core.next(seq__68624__$1);
var G__68755 = null;
var G__68756 = (0);
var G__68757 = (0);
seq__68624 = G__68754;
chunk__68625 = G__68755;
count__68626 = G__68756;
i__68627 = G__68757;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68607_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68607_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68608_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68608_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68609_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68609_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68611_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68611_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68687){
var map__68688 = p__68687;
var map__68688__$1 = cljs.core.__destructure_map(map__68688);
var svc = map__68688__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68688__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68688__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
