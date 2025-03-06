goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_59703 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._header[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._header["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_59703(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_59717 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._has_body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._has_body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_59717(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_59728 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_59728(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59483 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59483["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59484 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59484["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59485 = temp__5802__auto____$2;
return (o59485["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59489 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59489["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59490 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59490["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59491 = temp__5802__auto____$2;
return (o59491["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59497 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59497["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59498 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59498["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59499 = temp__5802__auto____$2;
return (o59499["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59504 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59504["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59505 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59505["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59506 = temp__5802__auto____$2;
return (o59506["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59510 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59510["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59511 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59511["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59512 = temp__5802__auto____$2;
return (o59512["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59516 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59516["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59517 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59517["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59518 = temp__5802__auto____$2;
return (o59518["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o59520 = temp__5802__auto__;
var temp__5802__auto____$1 = (o59520["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o59521 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o59521["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o59522 = temp__5802__auto____$2;
return (o59522["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59752 = arguments.length;
var i__5767__auto___59753 = (0);
while(true){
if((i__5767__auto___59753 < len__5766__auto___59752)){
args__5772__auto__.push((arguments[i__5767__auto___59753]));

var G__59755 = (i__5767__auto___59753 + (1));
i__5767__auto___59753 = G__59755;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq59527){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59527));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59758 = arguments.length;
var i__5767__auto___59759 = (0);
while(true){
if((i__5767__auto___59759 < len__5766__auto___59758)){
args__5772__auto__.push((arguments[i__5767__auto___59759]));

var G__59760 = (i__5767__auto___59759 + (1));
i__5767__auto___59759 = G__59760;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq59547){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59547));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59763 = arguments.length;
var i__5767__auto___59764 = (0);
while(true){
if((i__5767__auto___59764 < len__5766__auto___59763)){
args__5772__auto__.push((arguments[i__5767__auto___59764]));

var G__59767 = (i__5767__auto___59764 + (1));
i__5767__auto___59764 = G__59767;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq59568){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59568));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59769 = arguments.length;
var i__5767__auto___59771 = (0);
while(true){
if((i__5767__auto___59771 < len__5766__auto___59769)){
args__5772__auto__.push((arguments[i__5767__auto___59771]));

var G__59772 = (i__5767__auto___59771 + (1));
i__5767__auto___59771 = G__59772;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq59575){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59575));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59776 = arguments.length;
var i__5767__auto___59777 = (0);
while(true){
if((i__5767__auto___59777 < len__5766__auto___59776)){
args__5772__auto__.push((arguments[i__5767__auto___59777]));

var G__59779 = (i__5767__auto___59777 + (1));
i__5767__auto___59777 = G__59779;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq59582){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59582));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59793 = arguments.length;
var i__5767__auto___59794 = (0);
while(true){
if((i__5767__auto___59794 < len__5766__auto___59793)){
args__5772__auto__.push((arguments[i__5767__auto___59794]));

var G__59795 = (i__5767__auto___59794 + (1));
i__5767__auto___59794 = G__59795;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq59588){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59588));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59800 = arguments.length;
var i__5767__auto___59801 = (0);
while(true){
if((i__5767__auto___59801 < len__5766__auto___59800)){
args__5772__auto__.push((arguments[i__5767__auto___59801]));

var G__59802 = (i__5767__auto___59801 + (1));
i__5767__auto___59801 = G__59802;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq59596){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59596));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59811 = arguments.length;
var i__5767__auto___59812 = (0);
while(true){
if((i__5767__auto___59812 < len__5766__auto___59811)){
args__5772__auto__.push((arguments[i__5767__auto___59812]));

var G__59813 = (i__5767__auto___59812 + (1));
i__5767__auto___59812 = G__59813;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__59621){
var vec__59622 = p__59621;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59622,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__59611_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__59611_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq59612){
var G__59613 = cljs.core.first(seq59612);
var seq59612__$1 = cljs.core.next(seq59612);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59613,seq59612__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__59642 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__59643 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__59644 = (function (){var G__59645 = new cljs.core.Keyword(null,"li","li",723558921);
var G__59646 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__59647 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__59645,G__59646,G__59647) : devtools.format.make_template_fn.call(null,G__59645,G__59646,G__59647));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__59642,G__59643,G__59644) : devtools.format.make_template_fn.call(null,G__59642,G__59643,G__59644));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59819 = arguments.length;
var i__5767__auto___59820 = (0);
while(true){
if((i__5767__auto___59820 < len__5766__auto___59819)){
args__5772__auto__.push((arguments[i__5767__auto___59820]));

var G__59821 = (i__5767__auto___59820 + (1));
i__5767__auto___59820 = G__59821;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq59650){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59650));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59827 = arguments.length;
var i__5767__auto___59828 = (0);
while(true){
if((i__5767__auto___59828 < len__5766__auto___59827)){
args__5772__auto__.push((arguments[i__5767__auto___59828]));

var G__59830 = (i__5767__auto___59828 + (1));
i__5767__auto___59828 = G__59830;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq59667){
var G__59668 = cljs.core.first(seq59667);
var seq59667__$1 = cljs.core.next(seq59667);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59668,seq59667__$1);
}));


//# sourceMappingURL=devtools.format.js.map
