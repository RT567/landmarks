goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___70934 = arguments.length;
var i__5767__auto___70935 = (0);
while(true){
if((i__5767__auto___70935 < len__5766__auto___70934)){
args__5772__auto__.push((arguments[i__5767__auto___70935]));

var G__70936 = (i__5767__auto___70935 + (1));
i__5767__auto___70935 = G__70936;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq70756){
var G__70757 = cljs.core.first(seq70756);
var seq70756__$1 = cljs.core.next(seq70756);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70757,seq70756__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__70772 = cljs.core.seq(sources);
var chunk__70773 = null;
var count__70774 = (0);
var i__70775 = (0);
while(true){
if((i__70775 < count__70774)){
var map__70790 = chunk__70773.cljs$core$IIndexed$_nth$arity$2(null,i__70775);
var map__70790__$1 = cljs.core.__destructure_map(map__70790);
var src = map__70790__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70790__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70790__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70790__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70790__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e70792){var e_70937 = e70792;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_70937);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_70937.message)].join('')));
}

var G__70938 = seq__70772;
var G__70939 = chunk__70773;
var G__70940 = count__70774;
var G__70941 = (i__70775 + (1));
seq__70772 = G__70938;
chunk__70773 = G__70939;
count__70774 = G__70940;
i__70775 = G__70941;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70772);
if(temp__5804__auto__){
var seq__70772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70772__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70772__$1);
var G__70942 = cljs.core.chunk_rest(seq__70772__$1);
var G__70943 = c__5565__auto__;
var G__70944 = cljs.core.count(c__5565__auto__);
var G__70945 = (0);
seq__70772 = G__70942;
chunk__70773 = G__70943;
count__70774 = G__70944;
i__70775 = G__70945;
continue;
} else {
var map__70793 = cljs.core.first(seq__70772__$1);
var map__70793__$1 = cljs.core.__destructure_map(map__70793);
var src = map__70793__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70793__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70793__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70793__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70793__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e70794){var e_70946 = e70794;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_70946);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_70946.message)].join('')));
}

var G__70947 = cljs.core.next(seq__70772__$1);
var G__70948 = null;
var G__70949 = (0);
var G__70950 = (0);
seq__70772 = G__70947;
chunk__70773 = G__70948;
count__70774 = G__70949;
i__70775 = G__70950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__70800 = cljs.core.seq(js_requires);
var chunk__70801 = null;
var count__70802 = (0);
var i__70803 = (0);
while(true){
if((i__70803 < count__70802)){
var js_ns = chunk__70801.cljs$core$IIndexed$_nth$arity$2(null,i__70803);
var require_str_70951 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_70951);


var G__70952 = seq__70800;
var G__70953 = chunk__70801;
var G__70954 = count__70802;
var G__70955 = (i__70803 + (1));
seq__70800 = G__70952;
chunk__70801 = G__70953;
count__70802 = G__70954;
i__70803 = G__70955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70800);
if(temp__5804__auto__){
var seq__70800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70800__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70800__$1);
var G__70956 = cljs.core.chunk_rest(seq__70800__$1);
var G__70957 = c__5565__auto__;
var G__70958 = cljs.core.count(c__5565__auto__);
var G__70959 = (0);
seq__70800 = G__70956;
chunk__70801 = G__70957;
count__70802 = G__70958;
i__70803 = G__70959;
continue;
} else {
var js_ns = cljs.core.first(seq__70800__$1);
var require_str_70960 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_70960);


var G__70961 = cljs.core.next(seq__70800__$1);
var G__70962 = null;
var G__70963 = (0);
var G__70964 = (0);
seq__70800 = G__70961;
chunk__70801 = G__70962;
count__70802 = G__70963;
i__70803 = G__70964;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__70808){
var map__70809 = p__70808;
var map__70809__$1 = cljs.core.__destructure_map(map__70809);
var msg = map__70809__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70809__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70809__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70810(s__70811){
return (new cljs.core.LazySeq(null,(function (){
var s__70811__$1 = s__70811;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__70811__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__70818 = cljs.core.first(xs__6360__auto__);
var map__70818__$1 = cljs.core.__destructure_map(map__70818);
var src = map__70818__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70818__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__70811__$1,map__70818,map__70818__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70809,map__70809__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70810_$_iter__70812(s__70813){
return (new cljs.core.LazySeq(null,((function (s__70811__$1,map__70818,map__70818__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70809,map__70809__$1,msg,info,reload_info){
return (function (){
var s__70813__$1 = s__70813;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70813__$1);
if(temp__5804__auto____$1){
var s__70813__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70813__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70813__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70815 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70814 = (0);
while(true){
if((i__70814 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__70814);
cljs.core.chunk_append(b__70815,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__70965 = (i__70814 + (1));
i__70814 = G__70965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70815),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70810_$_iter__70812(cljs.core.chunk_rest(s__70813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70815),null);
}
} else {
var warning = cljs.core.first(s__70813__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70810_$_iter__70812(cljs.core.rest(s__70813__$2)));
}
} else {
return null;
}
break;
}
});})(s__70811__$1,map__70818,map__70818__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70809,map__70809__$1,msg,info,reload_info))
,null,null));
});})(s__70811__$1,map__70818,map__70818__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70809,map__70809__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70810(cljs.core.rest(s__70811__$1)));
} else {
var G__70966 = cljs.core.rest(s__70811__$1);
s__70811__$1 = G__70966;
continue;
}
} else {
var G__70967 = cljs.core.rest(s__70811__$1);
s__70811__$1 = G__70967;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__70824_70968 = cljs.core.seq(warnings);
var chunk__70825_70969 = null;
var count__70826_70970 = (0);
var i__70827_70971 = (0);
while(true){
if((i__70827_70971 < count__70826_70970)){
var map__70832_70972 = chunk__70825_70969.cljs$core$IIndexed$_nth$arity$2(null,i__70827_70971);
var map__70832_70973__$1 = cljs.core.__destructure_map(map__70832_70972);
var w_70974 = map__70832_70973__$1;
var msg_70975__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70832_70973__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_70976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70832_70973__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_70977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70832_70973__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_70978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70832_70973__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_70978)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_70976),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_70977),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_70975__$1)].join(''));


var G__70979 = seq__70824_70968;
var G__70980 = chunk__70825_70969;
var G__70981 = count__70826_70970;
var G__70982 = (i__70827_70971 + (1));
seq__70824_70968 = G__70979;
chunk__70825_70969 = G__70980;
count__70826_70970 = G__70981;
i__70827_70971 = G__70982;
continue;
} else {
var temp__5804__auto___70983 = cljs.core.seq(seq__70824_70968);
if(temp__5804__auto___70983){
var seq__70824_70984__$1 = temp__5804__auto___70983;
if(cljs.core.chunked_seq_QMARK_(seq__70824_70984__$1)){
var c__5565__auto___70985 = cljs.core.chunk_first(seq__70824_70984__$1);
var G__70986 = cljs.core.chunk_rest(seq__70824_70984__$1);
var G__70987 = c__5565__auto___70985;
var G__70988 = cljs.core.count(c__5565__auto___70985);
var G__70989 = (0);
seq__70824_70968 = G__70986;
chunk__70825_70969 = G__70987;
count__70826_70970 = G__70988;
i__70827_70971 = G__70989;
continue;
} else {
var map__70834_70990 = cljs.core.first(seq__70824_70984__$1);
var map__70834_70991__$1 = cljs.core.__destructure_map(map__70834_70990);
var w_70992 = map__70834_70991__$1;
var msg_70993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70834_70991__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_70994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70834_70991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_70995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70834_70991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_70996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70834_70991__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_70996)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_70994),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_70995),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_70993__$1)].join(''));


var G__70997 = cljs.core.next(seq__70824_70984__$1);
var G__70998 = null;
var G__70999 = (0);
var G__71000 = (0);
seq__70824_70968 = G__70997;
chunk__70825_70969 = G__70998;
count__70826_70970 = G__70999;
i__70827_70971 = G__71000;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__70806_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__70806_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__70836){
var map__70837 = p__70836;
var map__70837__$1 = cljs.core.__destructure_map(map__70837);
var msg = map__70837__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70837__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__70838 = cljs.core.seq(updates);
var chunk__70840 = null;
var count__70841 = (0);
var i__70842 = (0);
while(true){
if((i__70842 < count__70841)){
var path = chunk__70840.cljs$core$IIndexed$_nth$arity$2(null,i__70842);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__70884_71001 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__70888_71002 = null;
var count__70889_71003 = (0);
var i__70890_71004 = (0);
while(true){
if((i__70890_71004 < count__70889_71003)){
var node_71005 = chunk__70888_71002.cljs$core$IIndexed$_nth$arity$2(null,i__70890_71004);
if(cljs.core.not(node_71005.shadow$old)){
var path_match_71006 = shadow.cljs.devtools.client.browser.match_paths(node_71005.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71006)){
var new_link_71007 = (function (){var G__70896 = node_71005.cloneNode(true);
G__70896.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71006),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70896;
})();
(node_71005.shadow$old = true);

(new_link_71007.onload = ((function (seq__70884_71001,chunk__70888_71002,count__70889_71003,i__70890_71004,seq__70838,chunk__70840,count__70841,i__70842,new_link_71007,path_match_71006,node_71005,path,map__70837,map__70837__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71005);
});})(seq__70884_71001,chunk__70888_71002,count__70889_71003,i__70890_71004,seq__70838,chunk__70840,count__70841,i__70842,new_link_71007,path_match_71006,node_71005,path,map__70837,map__70837__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71006], 0));

goog.dom.insertSiblingAfter(new_link_71007,node_71005);


var G__71008 = seq__70884_71001;
var G__71009 = chunk__70888_71002;
var G__71010 = count__70889_71003;
var G__71011 = (i__70890_71004 + (1));
seq__70884_71001 = G__71008;
chunk__70888_71002 = G__71009;
count__70889_71003 = G__71010;
i__70890_71004 = G__71011;
continue;
} else {
var G__71012 = seq__70884_71001;
var G__71013 = chunk__70888_71002;
var G__71014 = count__70889_71003;
var G__71015 = (i__70890_71004 + (1));
seq__70884_71001 = G__71012;
chunk__70888_71002 = G__71013;
count__70889_71003 = G__71014;
i__70890_71004 = G__71015;
continue;
}
} else {
var G__71016 = seq__70884_71001;
var G__71017 = chunk__70888_71002;
var G__71018 = count__70889_71003;
var G__71019 = (i__70890_71004 + (1));
seq__70884_71001 = G__71016;
chunk__70888_71002 = G__71017;
count__70889_71003 = G__71018;
i__70890_71004 = G__71019;
continue;
}
} else {
var temp__5804__auto___71020 = cljs.core.seq(seq__70884_71001);
if(temp__5804__auto___71020){
var seq__70884_71021__$1 = temp__5804__auto___71020;
if(cljs.core.chunked_seq_QMARK_(seq__70884_71021__$1)){
var c__5565__auto___71022 = cljs.core.chunk_first(seq__70884_71021__$1);
var G__71023 = cljs.core.chunk_rest(seq__70884_71021__$1);
var G__71024 = c__5565__auto___71022;
var G__71025 = cljs.core.count(c__5565__auto___71022);
var G__71026 = (0);
seq__70884_71001 = G__71023;
chunk__70888_71002 = G__71024;
count__70889_71003 = G__71025;
i__70890_71004 = G__71026;
continue;
} else {
var node_71027 = cljs.core.first(seq__70884_71021__$1);
if(cljs.core.not(node_71027.shadow$old)){
var path_match_71028 = shadow.cljs.devtools.client.browser.match_paths(node_71027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71028)){
var new_link_71029 = (function (){var G__70897 = node_71027.cloneNode(true);
G__70897.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70897;
})();
(node_71027.shadow$old = true);

(new_link_71029.onload = ((function (seq__70884_71001,chunk__70888_71002,count__70889_71003,i__70890_71004,seq__70838,chunk__70840,count__70841,i__70842,new_link_71029,path_match_71028,node_71027,seq__70884_71021__$1,temp__5804__auto___71020,path,map__70837,map__70837__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71027);
});})(seq__70884_71001,chunk__70888_71002,count__70889_71003,i__70890_71004,seq__70838,chunk__70840,count__70841,i__70842,new_link_71029,path_match_71028,node_71027,seq__70884_71021__$1,temp__5804__auto___71020,path,map__70837,map__70837__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71028], 0));

goog.dom.insertSiblingAfter(new_link_71029,node_71027);


var G__71030 = cljs.core.next(seq__70884_71021__$1);
var G__71031 = null;
var G__71032 = (0);
var G__71033 = (0);
seq__70884_71001 = G__71030;
chunk__70888_71002 = G__71031;
count__70889_71003 = G__71032;
i__70890_71004 = G__71033;
continue;
} else {
var G__71034 = cljs.core.next(seq__70884_71021__$1);
var G__71035 = null;
var G__71036 = (0);
var G__71037 = (0);
seq__70884_71001 = G__71034;
chunk__70888_71002 = G__71035;
count__70889_71003 = G__71036;
i__70890_71004 = G__71037;
continue;
}
} else {
var G__71038 = cljs.core.next(seq__70884_71021__$1);
var G__71039 = null;
var G__71040 = (0);
var G__71041 = (0);
seq__70884_71001 = G__71038;
chunk__70888_71002 = G__71039;
count__70889_71003 = G__71040;
i__70890_71004 = G__71041;
continue;
}
}
} else {
}
}
break;
}


var G__71042 = seq__70838;
var G__71043 = chunk__70840;
var G__71044 = count__70841;
var G__71045 = (i__70842 + (1));
seq__70838 = G__71042;
chunk__70840 = G__71043;
count__70841 = G__71044;
i__70842 = G__71045;
continue;
} else {
var G__71046 = seq__70838;
var G__71047 = chunk__70840;
var G__71048 = count__70841;
var G__71049 = (i__70842 + (1));
seq__70838 = G__71046;
chunk__70840 = G__71047;
count__70841 = G__71048;
i__70842 = G__71049;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70838);
if(temp__5804__auto__){
var seq__70838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70838__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70838__$1);
var G__71050 = cljs.core.chunk_rest(seq__70838__$1);
var G__71051 = c__5565__auto__;
var G__71052 = cljs.core.count(c__5565__auto__);
var G__71053 = (0);
seq__70838 = G__71050;
chunk__70840 = G__71051;
count__70841 = G__71052;
i__70842 = G__71053;
continue;
} else {
var path = cljs.core.first(seq__70838__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__70898_71054 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__70902_71055 = null;
var count__70903_71056 = (0);
var i__70904_71057 = (0);
while(true){
if((i__70904_71057 < count__70903_71056)){
var node_71058 = chunk__70902_71055.cljs$core$IIndexed$_nth$arity$2(null,i__70904_71057);
if(cljs.core.not(node_71058.shadow$old)){
var path_match_71059 = shadow.cljs.devtools.client.browser.match_paths(node_71058.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71059)){
var new_link_71060 = (function (){var G__70910 = node_71058.cloneNode(true);
G__70910.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71059),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70910;
})();
(node_71058.shadow$old = true);

(new_link_71060.onload = ((function (seq__70898_71054,chunk__70902_71055,count__70903_71056,i__70904_71057,seq__70838,chunk__70840,count__70841,i__70842,new_link_71060,path_match_71059,node_71058,path,seq__70838__$1,temp__5804__auto__,map__70837,map__70837__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71058);
});})(seq__70898_71054,chunk__70902_71055,count__70903_71056,i__70904_71057,seq__70838,chunk__70840,count__70841,i__70842,new_link_71060,path_match_71059,node_71058,path,seq__70838__$1,temp__5804__auto__,map__70837,map__70837__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71059], 0));

goog.dom.insertSiblingAfter(new_link_71060,node_71058);


var G__71061 = seq__70898_71054;
var G__71062 = chunk__70902_71055;
var G__71063 = count__70903_71056;
var G__71064 = (i__70904_71057 + (1));
seq__70898_71054 = G__71061;
chunk__70902_71055 = G__71062;
count__70903_71056 = G__71063;
i__70904_71057 = G__71064;
continue;
} else {
var G__71065 = seq__70898_71054;
var G__71066 = chunk__70902_71055;
var G__71067 = count__70903_71056;
var G__71068 = (i__70904_71057 + (1));
seq__70898_71054 = G__71065;
chunk__70902_71055 = G__71066;
count__70903_71056 = G__71067;
i__70904_71057 = G__71068;
continue;
}
} else {
var G__71069 = seq__70898_71054;
var G__71070 = chunk__70902_71055;
var G__71071 = count__70903_71056;
var G__71072 = (i__70904_71057 + (1));
seq__70898_71054 = G__71069;
chunk__70902_71055 = G__71070;
count__70903_71056 = G__71071;
i__70904_71057 = G__71072;
continue;
}
} else {
var temp__5804__auto___71073__$1 = cljs.core.seq(seq__70898_71054);
if(temp__5804__auto___71073__$1){
var seq__70898_71074__$1 = temp__5804__auto___71073__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70898_71074__$1)){
var c__5565__auto___71075 = cljs.core.chunk_first(seq__70898_71074__$1);
var G__71076 = cljs.core.chunk_rest(seq__70898_71074__$1);
var G__71077 = c__5565__auto___71075;
var G__71078 = cljs.core.count(c__5565__auto___71075);
var G__71079 = (0);
seq__70898_71054 = G__71076;
chunk__70902_71055 = G__71077;
count__70903_71056 = G__71078;
i__70904_71057 = G__71079;
continue;
} else {
var node_71080 = cljs.core.first(seq__70898_71074__$1);
if(cljs.core.not(node_71080.shadow$old)){
var path_match_71081 = shadow.cljs.devtools.client.browser.match_paths(node_71080.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71081)){
var new_link_71082 = (function (){var G__70911 = node_71080.cloneNode(true);
G__70911.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71081),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70911;
})();
(node_71080.shadow$old = true);

(new_link_71082.onload = ((function (seq__70898_71054,chunk__70902_71055,count__70903_71056,i__70904_71057,seq__70838,chunk__70840,count__70841,i__70842,new_link_71082,path_match_71081,node_71080,seq__70898_71074__$1,temp__5804__auto___71073__$1,path,seq__70838__$1,temp__5804__auto__,map__70837,map__70837__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71080);
});})(seq__70898_71054,chunk__70902_71055,count__70903_71056,i__70904_71057,seq__70838,chunk__70840,count__70841,i__70842,new_link_71082,path_match_71081,node_71080,seq__70898_71074__$1,temp__5804__auto___71073__$1,path,seq__70838__$1,temp__5804__auto__,map__70837,map__70837__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71081], 0));

goog.dom.insertSiblingAfter(new_link_71082,node_71080);


var G__71083 = cljs.core.next(seq__70898_71074__$1);
var G__71084 = null;
var G__71085 = (0);
var G__71086 = (0);
seq__70898_71054 = G__71083;
chunk__70902_71055 = G__71084;
count__70903_71056 = G__71085;
i__70904_71057 = G__71086;
continue;
} else {
var G__71087 = cljs.core.next(seq__70898_71074__$1);
var G__71088 = null;
var G__71089 = (0);
var G__71090 = (0);
seq__70898_71054 = G__71087;
chunk__70902_71055 = G__71088;
count__70903_71056 = G__71089;
i__70904_71057 = G__71090;
continue;
}
} else {
var G__71091 = cljs.core.next(seq__70898_71074__$1);
var G__71092 = null;
var G__71093 = (0);
var G__71094 = (0);
seq__70898_71054 = G__71091;
chunk__70902_71055 = G__71092;
count__70903_71056 = G__71093;
i__70904_71057 = G__71094;
continue;
}
}
} else {
}
}
break;
}


var G__71095 = cljs.core.next(seq__70838__$1);
var G__71096 = null;
var G__71097 = (0);
var G__71098 = (0);
seq__70838 = G__71095;
chunk__70840 = G__71096;
count__70841 = G__71097;
i__70842 = G__71098;
continue;
} else {
var G__71099 = cljs.core.next(seq__70838__$1);
var G__71100 = null;
var G__71101 = (0);
var G__71102 = (0);
seq__70838 = G__71099;
chunk__70840 = G__71100;
count__70841 = G__71101;
i__70842 = G__71102;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__70912){
var map__70913 = p__70912;
var map__70913__$1 = cljs.core.__destructure_map(map__70913);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70913__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__70914){
var map__70915 = p__70914;
var map__70915__$1 = cljs.core.__destructure_map(map__70915);
var _ = map__70915__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70915__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__70916,done,error){
var map__70917 = p__70916;
var map__70917__$1 = cljs.core.__destructure_map(map__70917);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70917__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__70918,done,error){
var map__70919 = p__70918;
var map__70919__$1 = cljs.core.__destructure_map(map__70919);
var msg = map__70919__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70919__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70919__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70919__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__70920){
var map__70921 = p__70920;
var map__70921__$1 = cljs.core.__destructure_map(map__70921);
var src = map__70921__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70921__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__70922 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__70922) : done.call(null,G__70922));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__70923){
var map__70924 = p__70923;
var map__70924__$1 = cljs.core.__destructure_map(map__70924);
var msg__$1 = map__70924__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70924__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e70925){var ex = e70925;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__70926){
var map__70927 = p__70926;
var map__70927__$1 = cljs.core.__destructure_map(map__70927);
var env = map__70927__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70927__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__70928){
var map__70929 = p__70928;
var map__70929__$1 = cljs.core.__destructure_map(map__70929);
var msg = map__70929__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70929__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__70930){
var map__70931 = p__70930;
var map__70931__$1 = cljs.core.__destructure_map(map__70931);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70931__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70931__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__70932){
var map__70933 = p__70932;
var map__70933__$1 = cljs.core.__destructure_map(map__70933);
var svc = map__70933__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70933__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
