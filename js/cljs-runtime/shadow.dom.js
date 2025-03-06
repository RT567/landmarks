goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_69186 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_69186(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_69190 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_69190(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67709 = coll;
var G__67710 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67709,G__67710) : shadow.dom.lazy_native_coll_seq.call(null,G__67709,G__67710));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__67778 = arguments.length;
switch (G__67778) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__67784 = arguments.length;
switch (G__67784) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__67810 = arguments.length;
switch (G__67810) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__67839 = arguments.length;
switch (G__67839) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__67868 = arguments.length;
switch (G__67868) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__67907 = arguments.length;
switch (G__67907) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e67959){if((e67959 instanceof Object)){
var e = e67959;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67959;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__67978 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67979 = null;
var count__67980 = (0);
var i__67981 = (0);
while(true){
if((i__67981 < count__67980)){
var el = chunk__67979.cljs$core$IIndexed$_nth$arity$2(null,i__67981);
var handler_69219__$1 = ((function (seq__67978,chunk__67979,count__67980,i__67981,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67978,chunk__67979,count__67980,i__67981,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69219__$1);


var G__69221 = seq__67978;
var G__69222 = chunk__67979;
var G__69223 = count__67980;
var G__69224 = (i__67981 + (1));
seq__67978 = G__69221;
chunk__67979 = G__69222;
count__67980 = G__69223;
i__67981 = G__69224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67978);
if(temp__5804__auto__){
var seq__67978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67978__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67978__$1);
var G__69225 = cljs.core.chunk_rest(seq__67978__$1);
var G__69226 = c__5565__auto__;
var G__69227 = cljs.core.count(c__5565__auto__);
var G__69228 = (0);
seq__67978 = G__69225;
chunk__67979 = G__69226;
count__67980 = G__69227;
i__67981 = G__69228;
continue;
} else {
var el = cljs.core.first(seq__67978__$1);
var handler_69230__$1 = ((function (seq__67978,chunk__67979,count__67980,i__67981,el,seq__67978__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67978,chunk__67979,count__67980,i__67981,el,seq__67978__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69230__$1);


var G__69234 = cljs.core.next(seq__67978__$1);
var G__69235 = null;
var G__69236 = (0);
var G__69237 = (0);
seq__67978 = G__69234;
chunk__67979 = G__69235;
count__67980 = G__69236;
i__67981 = G__69237;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__68010 = arguments.length;
switch (G__68010) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__68027 = cljs.core.seq(events);
var chunk__68028 = null;
var count__68029 = (0);
var i__68030 = (0);
while(true){
if((i__68030 < count__68029)){
var vec__68050 = chunk__68028.cljs$core$IIndexed$_nth$arity$2(null,i__68030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68050,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69239 = seq__68027;
var G__69240 = chunk__68028;
var G__69241 = count__68029;
var G__69242 = (i__68030 + (1));
seq__68027 = G__69239;
chunk__68028 = G__69240;
count__68029 = G__69241;
i__68030 = G__69242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68027);
if(temp__5804__auto__){
var seq__68027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68027__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68027__$1);
var G__69243 = cljs.core.chunk_rest(seq__68027__$1);
var G__69244 = c__5565__auto__;
var G__69245 = cljs.core.count(c__5565__auto__);
var G__69246 = (0);
seq__68027 = G__69243;
chunk__68028 = G__69244;
count__68029 = G__69245;
i__68030 = G__69246;
continue;
} else {
var vec__68057 = cljs.core.first(seq__68027__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68057,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69248 = cljs.core.next(seq__68027__$1);
var G__69249 = null;
var G__69250 = (0);
var G__69251 = (0);
seq__68027 = G__69248;
chunk__68028 = G__69249;
count__68029 = G__69250;
i__68030 = G__69251;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__68068 = cljs.core.seq(styles);
var chunk__68069 = null;
var count__68070 = (0);
var i__68071 = (0);
while(true){
if((i__68071 < count__68070)){
var vec__68088 = chunk__68069.cljs$core$IIndexed$_nth$arity$2(null,i__68071);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68088,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69252 = seq__68068;
var G__69253 = chunk__68069;
var G__69254 = count__68070;
var G__69255 = (i__68071 + (1));
seq__68068 = G__69252;
chunk__68069 = G__69253;
count__68070 = G__69254;
i__68071 = G__69255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68068);
if(temp__5804__auto__){
var seq__68068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68068__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68068__$1);
var G__69256 = cljs.core.chunk_rest(seq__68068__$1);
var G__69257 = c__5565__auto__;
var G__69258 = cljs.core.count(c__5565__auto__);
var G__69259 = (0);
seq__68068 = G__69256;
chunk__68069 = G__69257;
count__68070 = G__69258;
i__68071 = G__69259;
continue;
} else {
var vec__68093 = cljs.core.first(seq__68068__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69261 = cljs.core.next(seq__68068__$1);
var G__69262 = null;
var G__69263 = (0);
var G__69264 = (0);
seq__68068 = G__69261;
chunk__68069 = G__69262;
count__68070 = G__69263;
i__68071 = G__69264;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__68097_69265 = key;
var G__68097_69266__$1 = (((G__68097_69265 instanceof cljs.core.Keyword))?G__68097_69265.fqn:null);
switch (G__68097_69266__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_69268 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_69268,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_69268,"aria-");
}
})())){
el.setAttribute(ks_69268,value);
} else {
(el[ks_69268] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__68139){
var map__68140 = p__68139;
var map__68140__$1 = cljs.core.__destructure_map(map__68140);
var props = map__68140__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68140__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__68145 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68145,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68145,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68145,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__68151 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__68151,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__68151;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__68165 = arguments.length;
switch (G__68165) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__68184){
var vec__68187 = p__68184;
var seq__68188 = cljs.core.seq(vec__68187);
var first__68189 = cljs.core.first(seq__68188);
var seq__68188__$1 = cljs.core.next(seq__68188);
var nn = first__68189;
var first__68189__$1 = cljs.core.first(seq__68188__$1);
var seq__68188__$2 = cljs.core.next(seq__68188__$1);
var np = first__68189__$1;
var nc = seq__68188__$2;
var node = vec__68187;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68195 = nn;
var G__68196 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68195,G__68196) : create_fn.call(null,G__68195,G__68196));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68202 = nn;
var G__68203 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68202,G__68203) : create_fn.call(null,G__68202,G__68203));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__68212 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68212,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68212,(1),null);
var seq__68215_69277 = cljs.core.seq(node_children);
var chunk__68216_69278 = null;
var count__68217_69279 = (0);
var i__68218_69280 = (0);
while(true){
if((i__68218_69280 < count__68217_69279)){
var child_struct_69281 = chunk__68216_69278.cljs$core$IIndexed$_nth$arity$2(null,i__68218_69280);
var children_69282 = shadow.dom.dom_node(child_struct_69281);
if(cljs.core.seq_QMARK_(children_69282)){
var seq__68261_69283 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69282));
var chunk__68263_69284 = null;
var count__68264_69285 = (0);
var i__68265_69286 = (0);
while(true){
if((i__68265_69286 < count__68264_69285)){
var child_69288 = chunk__68263_69284.cljs$core$IIndexed$_nth$arity$2(null,i__68265_69286);
if(cljs.core.truth_(child_69288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69288);


var G__69289 = seq__68261_69283;
var G__69290 = chunk__68263_69284;
var G__69291 = count__68264_69285;
var G__69292 = (i__68265_69286 + (1));
seq__68261_69283 = G__69289;
chunk__68263_69284 = G__69290;
count__68264_69285 = G__69291;
i__68265_69286 = G__69292;
continue;
} else {
var G__69293 = seq__68261_69283;
var G__69294 = chunk__68263_69284;
var G__69295 = count__68264_69285;
var G__69296 = (i__68265_69286 + (1));
seq__68261_69283 = G__69293;
chunk__68263_69284 = G__69294;
count__68264_69285 = G__69295;
i__68265_69286 = G__69296;
continue;
}
} else {
var temp__5804__auto___69297 = cljs.core.seq(seq__68261_69283);
if(temp__5804__auto___69297){
var seq__68261_69298__$1 = temp__5804__auto___69297;
if(cljs.core.chunked_seq_QMARK_(seq__68261_69298__$1)){
var c__5565__auto___69299 = cljs.core.chunk_first(seq__68261_69298__$1);
var G__69300 = cljs.core.chunk_rest(seq__68261_69298__$1);
var G__69301 = c__5565__auto___69299;
var G__69302 = cljs.core.count(c__5565__auto___69299);
var G__69303 = (0);
seq__68261_69283 = G__69300;
chunk__68263_69284 = G__69301;
count__68264_69285 = G__69302;
i__68265_69286 = G__69303;
continue;
} else {
var child_69304 = cljs.core.first(seq__68261_69298__$1);
if(cljs.core.truth_(child_69304)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69304);


var G__69305 = cljs.core.next(seq__68261_69298__$1);
var G__69306 = null;
var G__69307 = (0);
var G__69308 = (0);
seq__68261_69283 = G__69305;
chunk__68263_69284 = G__69306;
count__68264_69285 = G__69307;
i__68265_69286 = G__69308;
continue;
} else {
var G__69309 = cljs.core.next(seq__68261_69298__$1);
var G__69310 = null;
var G__69311 = (0);
var G__69312 = (0);
seq__68261_69283 = G__69309;
chunk__68263_69284 = G__69310;
count__68264_69285 = G__69311;
i__68265_69286 = G__69312;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69282);
}


var G__69314 = seq__68215_69277;
var G__69315 = chunk__68216_69278;
var G__69316 = count__68217_69279;
var G__69317 = (i__68218_69280 + (1));
seq__68215_69277 = G__69314;
chunk__68216_69278 = G__69315;
count__68217_69279 = G__69316;
i__68218_69280 = G__69317;
continue;
} else {
var temp__5804__auto___69318 = cljs.core.seq(seq__68215_69277);
if(temp__5804__auto___69318){
var seq__68215_69319__$1 = temp__5804__auto___69318;
if(cljs.core.chunked_seq_QMARK_(seq__68215_69319__$1)){
var c__5565__auto___69320 = cljs.core.chunk_first(seq__68215_69319__$1);
var G__69321 = cljs.core.chunk_rest(seq__68215_69319__$1);
var G__69322 = c__5565__auto___69320;
var G__69323 = cljs.core.count(c__5565__auto___69320);
var G__69324 = (0);
seq__68215_69277 = G__69321;
chunk__68216_69278 = G__69322;
count__68217_69279 = G__69323;
i__68218_69280 = G__69324;
continue;
} else {
var child_struct_69325 = cljs.core.first(seq__68215_69319__$1);
var children_69326 = shadow.dom.dom_node(child_struct_69325);
if(cljs.core.seq_QMARK_(children_69326)){
var seq__68291_69327 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69326));
var chunk__68293_69328 = null;
var count__68294_69329 = (0);
var i__68295_69330 = (0);
while(true){
if((i__68295_69330 < count__68294_69329)){
var child_69332 = chunk__68293_69328.cljs$core$IIndexed$_nth$arity$2(null,i__68295_69330);
if(cljs.core.truth_(child_69332)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69332);


var G__69333 = seq__68291_69327;
var G__69334 = chunk__68293_69328;
var G__69335 = count__68294_69329;
var G__69336 = (i__68295_69330 + (1));
seq__68291_69327 = G__69333;
chunk__68293_69328 = G__69334;
count__68294_69329 = G__69335;
i__68295_69330 = G__69336;
continue;
} else {
var G__69337 = seq__68291_69327;
var G__69338 = chunk__68293_69328;
var G__69339 = count__68294_69329;
var G__69340 = (i__68295_69330 + (1));
seq__68291_69327 = G__69337;
chunk__68293_69328 = G__69338;
count__68294_69329 = G__69339;
i__68295_69330 = G__69340;
continue;
}
} else {
var temp__5804__auto___69341__$1 = cljs.core.seq(seq__68291_69327);
if(temp__5804__auto___69341__$1){
var seq__68291_69342__$1 = temp__5804__auto___69341__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68291_69342__$1)){
var c__5565__auto___69343 = cljs.core.chunk_first(seq__68291_69342__$1);
var G__69344 = cljs.core.chunk_rest(seq__68291_69342__$1);
var G__69345 = c__5565__auto___69343;
var G__69346 = cljs.core.count(c__5565__auto___69343);
var G__69347 = (0);
seq__68291_69327 = G__69344;
chunk__68293_69328 = G__69345;
count__68294_69329 = G__69346;
i__68295_69330 = G__69347;
continue;
} else {
var child_69348 = cljs.core.first(seq__68291_69342__$1);
if(cljs.core.truth_(child_69348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69348);


var G__69349 = cljs.core.next(seq__68291_69342__$1);
var G__69350 = null;
var G__69351 = (0);
var G__69352 = (0);
seq__68291_69327 = G__69349;
chunk__68293_69328 = G__69350;
count__68294_69329 = G__69351;
i__68295_69330 = G__69352;
continue;
} else {
var G__69353 = cljs.core.next(seq__68291_69342__$1);
var G__69354 = null;
var G__69355 = (0);
var G__69356 = (0);
seq__68291_69327 = G__69353;
chunk__68293_69328 = G__69354;
count__68294_69329 = G__69355;
i__68295_69330 = G__69356;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69326);
}


var G__69358 = cljs.core.next(seq__68215_69319__$1);
var G__69359 = null;
var G__69360 = (0);
var G__69361 = (0);
seq__68215_69277 = G__69358;
chunk__68216_69278 = G__69359;
count__68217_69279 = G__69360;
i__68218_69280 = G__69361;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__68341 = cljs.core.seq(node);
var chunk__68342 = null;
var count__68343 = (0);
var i__68344 = (0);
while(true){
if((i__68344 < count__68343)){
var n = chunk__68342.cljs$core$IIndexed$_nth$arity$2(null,i__68344);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69364 = seq__68341;
var G__69365 = chunk__68342;
var G__69366 = count__68343;
var G__69367 = (i__68344 + (1));
seq__68341 = G__69364;
chunk__68342 = G__69365;
count__68343 = G__69366;
i__68344 = G__69367;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68341);
if(temp__5804__auto__){
var seq__68341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68341__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68341__$1);
var G__69368 = cljs.core.chunk_rest(seq__68341__$1);
var G__69369 = c__5565__auto__;
var G__69370 = cljs.core.count(c__5565__auto__);
var G__69371 = (0);
seq__68341 = G__69368;
chunk__68342 = G__69369;
count__68343 = G__69370;
i__68344 = G__69371;
continue;
} else {
var n = cljs.core.first(seq__68341__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69373 = cljs.core.next(seq__68341__$1);
var G__69374 = null;
var G__69375 = (0);
var G__69376 = (0);
seq__68341 = G__69373;
chunk__68342 = G__69374;
count__68343 = G__69375;
i__68344 = G__69376;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__68367 = arguments.length;
switch (G__68367) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__68387 = arguments.length;
switch (G__68387) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__68405 = arguments.length;
switch (G__68405) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69387 = arguments.length;
var i__5767__auto___69388 = (0);
while(true){
if((i__5767__auto___69388 < len__5766__auto___69387)){
args__5772__auto__.push((arguments[i__5767__auto___69388]));

var G__69389 = (i__5767__auto___69388 + (1));
i__5767__auto___69388 = G__69389;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__68446_69390 = cljs.core.seq(nodes);
var chunk__68448_69391 = null;
var count__68449_69392 = (0);
var i__68450_69393 = (0);
while(true){
if((i__68450_69393 < count__68449_69392)){
var node_69394 = chunk__68448_69391.cljs$core$IIndexed$_nth$arity$2(null,i__68450_69393);
fragment.appendChild(shadow.dom._to_dom(node_69394));


var G__69395 = seq__68446_69390;
var G__69396 = chunk__68448_69391;
var G__69397 = count__68449_69392;
var G__69398 = (i__68450_69393 + (1));
seq__68446_69390 = G__69395;
chunk__68448_69391 = G__69396;
count__68449_69392 = G__69397;
i__68450_69393 = G__69398;
continue;
} else {
var temp__5804__auto___69399 = cljs.core.seq(seq__68446_69390);
if(temp__5804__auto___69399){
var seq__68446_69400__$1 = temp__5804__auto___69399;
if(cljs.core.chunked_seq_QMARK_(seq__68446_69400__$1)){
var c__5565__auto___69401 = cljs.core.chunk_first(seq__68446_69400__$1);
var G__69402 = cljs.core.chunk_rest(seq__68446_69400__$1);
var G__69403 = c__5565__auto___69401;
var G__69404 = cljs.core.count(c__5565__auto___69401);
var G__69405 = (0);
seq__68446_69390 = G__69402;
chunk__68448_69391 = G__69403;
count__68449_69392 = G__69404;
i__68450_69393 = G__69405;
continue;
} else {
var node_69406 = cljs.core.first(seq__68446_69400__$1);
fragment.appendChild(shadow.dom._to_dom(node_69406));


var G__69407 = cljs.core.next(seq__68446_69400__$1);
var G__69408 = null;
var G__69409 = (0);
var G__69410 = (0);
seq__68446_69390 = G__69407;
chunk__68448_69391 = G__69408;
count__68449_69392 = G__69409;
i__68450_69393 = G__69410;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq68440){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68440));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__68478_69411 = cljs.core.seq(scripts);
var chunk__68479_69412 = null;
var count__68480_69413 = (0);
var i__68481_69414 = (0);
while(true){
if((i__68481_69414 < count__68480_69413)){
var vec__68500_69415 = chunk__68479_69412.cljs$core$IIndexed$_nth$arity$2(null,i__68481_69414);
var script_tag_69416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68500_69415,(0),null);
var script_body_69417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68500_69415,(1),null);
eval(script_body_69417);


var G__69418 = seq__68478_69411;
var G__69419 = chunk__68479_69412;
var G__69420 = count__68480_69413;
var G__69421 = (i__68481_69414 + (1));
seq__68478_69411 = G__69418;
chunk__68479_69412 = G__69419;
count__68480_69413 = G__69420;
i__68481_69414 = G__69421;
continue;
} else {
var temp__5804__auto___69422 = cljs.core.seq(seq__68478_69411);
if(temp__5804__auto___69422){
var seq__68478_69423__$1 = temp__5804__auto___69422;
if(cljs.core.chunked_seq_QMARK_(seq__68478_69423__$1)){
var c__5565__auto___69424 = cljs.core.chunk_first(seq__68478_69423__$1);
var G__69425 = cljs.core.chunk_rest(seq__68478_69423__$1);
var G__69426 = c__5565__auto___69424;
var G__69427 = cljs.core.count(c__5565__auto___69424);
var G__69428 = (0);
seq__68478_69411 = G__69425;
chunk__68479_69412 = G__69426;
count__68480_69413 = G__69427;
i__68481_69414 = G__69428;
continue;
} else {
var vec__68508_69429 = cljs.core.first(seq__68478_69423__$1);
var script_tag_69430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68508_69429,(0),null);
var script_body_69431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68508_69429,(1),null);
eval(script_body_69431);


var G__69432 = cljs.core.next(seq__68478_69423__$1);
var G__69433 = null;
var G__69434 = (0);
var G__69435 = (0);
seq__68478_69411 = G__69432;
chunk__68479_69412 = G__69433;
count__68480_69413 = G__69434;
i__68481_69414 = G__69435;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__68514){
var vec__68515 = p__68514;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68515,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68515,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__68542 = arguments.length;
switch (G__68542) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__68576 = cljs.core.seq(style_keys);
var chunk__68577 = null;
var count__68578 = (0);
var i__68579 = (0);
while(true){
if((i__68579 < count__68578)){
var it = chunk__68577.cljs$core$IIndexed$_nth$arity$2(null,i__68579);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69446 = seq__68576;
var G__69447 = chunk__68577;
var G__69448 = count__68578;
var G__69449 = (i__68579 + (1));
seq__68576 = G__69446;
chunk__68577 = G__69447;
count__68578 = G__69448;
i__68579 = G__69449;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68576);
if(temp__5804__auto__){
var seq__68576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68576__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68576__$1);
var G__69450 = cljs.core.chunk_rest(seq__68576__$1);
var G__69451 = c__5565__auto__;
var G__69452 = cljs.core.count(c__5565__auto__);
var G__69453 = (0);
seq__68576 = G__69450;
chunk__68577 = G__69451;
count__68578 = G__69452;
i__68579 = G__69453;
continue;
} else {
var it = cljs.core.first(seq__68576__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69454 = cljs.core.next(seq__68576__$1);
var G__69455 = null;
var G__69456 = (0);
var G__69457 = (0);
seq__68576 = G__69454;
chunk__68577 = G__69455;
count__68578 = G__69456;
i__68579 = G__69457;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k68613,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__68646 = k68613;
var G__68646__$1 = (((G__68646 instanceof cljs.core.Keyword))?G__68646.fqn:null);
switch (G__68646__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68613,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__68662){
var vec__68665 = p__68662;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68665,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68665,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68612){
var self__ = this;
var G__68612__$1 = this;
return (new cljs.core.RecordIter((0),G__68612__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68614,other68615){
var self__ = this;
var this68614__$1 = this;
return (((!((other68615 == null)))) && ((((this68614__$1.constructor === other68615.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68614__$1.x,other68615.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68614__$1.y,other68615.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68614__$1.__extmap,other68615.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k68613){
var self__ = this;
var this__5347__auto____$1 = this;
var G__68740 = k68613;
var G__68740__$1 = (((G__68740 instanceof cljs.core.Keyword))?G__68740.fqn:null);
switch (G__68740__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68613);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__68612){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__68751 = cljs.core.keyword_identical_QMARK_;
var expr__68752 = k__5349__auto__;
if(cljs.core.truth_((pred__68751.cljs$core$IFn$_invoke$arity$2 ? pred__68751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__68752) : pred__68751.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__68752)))){
return (new shadow.dom.Coordinate(G__68612,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68751.cljs$core$IFn$_invoke$arity$2 ? pred__68751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__68752) : pred__68751.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__68752)))){
return (new shadow.dom.Coordinate(self__.x,G__68612,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__68612),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__68612){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__68612,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__68622){
var extmap__5382__auto__ = (function (){var G__68771 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68622,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__68622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68771);
} else {
return G__68771;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__68622),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__68622),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k68784,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__68804 = k68784;
var G__68804__$1 = (((G__68804 instanceof cljs.core.Keyword))?G__68804.fqn:null);
switch (G__68804__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68784,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__68807){
var vec__68809 = p__68807;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68809,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68809,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68783){
var self__ = this;
var G__68783__$1 = this;
return (new cljs.core.RecordIter((0),G__68783__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68785,other68786){
var self__ = this;
var this68785__$1 = this;
return (((!((other68786 == null)))) && ((((this68785__$1.constructor === other68786.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68785__$1.w,other68786.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68785__$1.h,other68786.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68785__$1.__extmap,other68786.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k68784){
var self__ = this;
var this__5347__auto____$1 = this;
var G__68839 = k68784;
var G__68839__$1 = (((G__68839 instanceof cljs.core.Keyword))?G__68839.fqn:null);
switch (G__68839__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68784);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__68783){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__68840 = cljs.core.keyword_identical_QMARK_;
var expr__68841 = k__5349__auto__;
if(cljs.core.truth_((pred__68840.cljs$core$IFn$_invoke$arity$2 ? pred__68840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__68841) : pred__68840.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__68841)))){
return (new shadow.dom.Size(G__68783,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68840.cljs$core$IFn$_invoke$arity$2 ? pred__68840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__68841) : pred__68840.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__68841)))){
return (new shadow.dom.Size(self__.w,G__68783,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__68783),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__68783){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__68783,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__68794){
var extmap__5382__auto__ = (function (){var G__68862 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68794,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__68794)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68862);
} else {
return G__68862;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__68794),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__68794),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__69490 = (i + (1));
var G__69491 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__69490;
ret = G__69491;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68877){
var vec__68882 = p__68877;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68882,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__68892 = arguments.length;
switch (G__68892) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__69496 = ps;
var G__69497 = (i + (1));
el__$1 = G__69496;
i = G__69497;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__68944 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68944,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68944,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68944,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__68947_69502 = cljs.core.seq(props);
var chunk__68948_69503 = null;
var count__68949_69504 = (0);
var i__68950_69505 = (0);
while(true){
if((i__68950_69505 < count__68949_69504)){
var vec__68966_69506 = chunk__68948_69503.cljs$core$IIndexed$_nth$arity$2(null,i__68950_69505);
var k_69507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68966_69506,(0),null);
var v_69508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68966_69506,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_69507);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69507),v_69508);


var G__69515 = seq__68947_69502;
var G__69516 = chunk__68948_69503;
var G__69517 = count__68949_69504;
var G__69518 = (i__68950_69505 + (1));
seq__68947_69502 = G__69515;
chunk__68948_69503 = G__69516;
count__68949_69504 = G__69517;
i__68950_69505 = G__69518;
continue;
} else {
var temp__5804__auto___69519 = cljs.core.seq(seq__68947_69502);
if(temp__5804__auto___69519){
var seq__68947_69520__$1 = temp__5804__auto___69519;
if(cljs.core.chunked_seq_QMARK_(seq__68947_69520__$1)){
var c__5565__auto___69521 = cljs.core.chunk_first(seq__68947_69520__$1);
var G__69522 = cljs.core.chunk_rest(seq__68947_69520__$1);
var G__69523 = c__5565__auto___69521;
var G__69524 = cljs.core.count(c__5565__auto___69521);
var G__69525 = (0);
seq__68947_69502 = G__69522;
chunk__68948_69503 = G__69523;
count__68949_69504 = G__69524;
i__68950_69505 = G__69525;
continue;
} else {
var vec__68976_69528 = cljs.core.first(seq__68947_69520__$1);
var k_69529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68976_69528,(0),null);
var v_69530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68976_69528,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_69529);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69529),v_69530);


var G__69531 = cljs.core.next(seq__68947_69520__$1);
var G__69532 = null;
var G__69533 = (0);
var G__69534 = (0);
seq__68947_69502 = G__69531;
chunk__68948_69503 = G__69532;
count__68949_69504 = G__69533;
i__68950_69505 = G__69534;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__68989 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68989,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68989,(1),null);
var seq__68993_69539 = cljs.core.seq(node_children);
var chunk__68995_69540 = null;
var count__68996_69541 = (0);
var i__68997_69542 = (0);
while(true){
if((i__68997_69542 < count__68996_69541)){
var child_struct_69543 = chunk__68995_69540.cljs$core$IIndexed$_nth$arity$2(null,i__68997_69542);
if((!((child_struct_69543 == null)))){
if(typeof child_struct_69543 === 'string'){
var text_69544 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69544),child_struct_69543].join(''));
} else {
var children_69545 = shadow.dom.svg_node(child_struct_69543);
if(cljs.core.seq_QMARK_(children_69545)){
var seq__69049_69546 = cljs.core.seq(children_69545);
var chunk__69051_69547 = null;
var count__69052_69548 = (0);
var i__69053_69549 = (0);
while(true){
if((i__69053_69549 < count__69052_69548)){
var child_69550 = chunk__69051_69547.cljs$core$IIndexed$_nth$arity$2(null,i__69053_69549);
if(cljs.core.truth_(child_69550)){
node.appendChild(child_69550);


var G__69551 = seq__69049_69546;
var G__69552 = chunk__69051_69547;
var G__69553 = count__69052_69548;
var G__69554 = (i__69053_69549 + (1));
seq__69049_69546 = G__69551;
chunk__69051_69547 = G__69552;
count__69052_69548 = G__69553;
i__69053_69549 = G__69554;
continue;
} else {
var G__69555 = seq__69049_69546;
var G__69556 = chunk__69051_69547;
var G__69557 = count__69052_69548;
var G__69558 = (i__69053_69549 + (1));
seq__69049_69546 = G__69555;
chunk__69051_69547 = G__69556;
count__69052_69548 = G__69557;
i__69053_69549 = G__69558;
continue;
}
} else {
var temp__5804__auto___69559 = cljs.core.seq(seq__69049_69546);
if(temp__5804__auto___69559){
var seq__69049_69560__$1 = temp__5804__auto___69559;
if(cljs.core.chunked_seq_QMARK_(seq__69049_69560__$1)){
var c__5565__auto___69561 = cljs.core.chunk_first(seq__69049_69560__$1);
var G__69566 = cljs.core.chunk_rest(seq__69049_69560__$1);
var G__69567 = c__5565__auto___69561;
var G__69568 = cljs.core.count(c__5565__auto___69561);
var G__69569 = (0);
seq__69049_69546 = G__69566;
chunk__69051_69547 = G__69567;
count__69052_69548 = G__69568;
i__69053_69549 = G__69569;
continue;
} else {
var child_69570 = cljs.core.first(seq__69049_69560__$1);
if(cljs.core.truth_(child_69570)){
node.appendChild(child_69570);


var G__69571 = cljs.core.next(seq__69049_69560__$1);
var G__69572 = null;
var G__69573 = (0);
var G__69574 = (0);
seq__69049_69546 = G__69571;
chunk__69051_69547 = G__69572;
count__69052_69548 = G__69573;
i__69053_69549 = G__69574;
continue;
} else {
var G__69575 = cljs.core.next(seq__69049_69560__$1);
var G__69576 = null;
var G__69577 = (0);
var G__69578 = (0);
seq__69049_69546 = G__69575;
chunk__69051_69547 = G__69576;
count__69052_69548 = G__69577;
i__69053_69549 = G__69578;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69545);
}
}


var G__69582 = seq__68993_69539;
var G__69583 = chunk__68995_69540;
var G__69584 = count__68996_69541;
var G__69585 = (i__68997_69542 + (1));
seq__68993_69539 = G__69582;
chunk__68995_69540 = G__69583;
count__68996_69541 = G__69584;
i__68997_69542 = G__69585;
continue;
} else {
var G__69586 = seq__68993_69539;
var G__69587 = chunk__68995_69540;
var G__69588 = count__68996_69541;
var G__69589 = (i__68997_69542 + (1));
seq__68993_69539 = G__69586;
chunk__68995_69540 = G__69587;
count__68996_69541 = G__69588;
i__68997_69542 = G__69589;
continue;
}
} else {
var temp__5804__auto___69590 = cljs.core.seq(seq__68993_69539);
if(temp__5804__auto___69590){
var seq__68993_69591__$1 = temp__5804__auto___69590;
if(cljs.core.chunked_seq_QMARK_(seq__68993_69591__$1)){
var c__5565__auto___69593 = cljs.core.chunk_first(seq__68993_69591__$1);
var G__69594 = cljs.core.chunk_rest(seq__68993_69591__$1);
var G__69595 = c__5565__auto___69593;
var G__69596 = cljs.core.count(c__5565__auto___69593);
var G__69597 = (0);
seq__68993_69539 = G__69594;
chunk__68995_69540 = G__69595;
count__68996_69541 = G__69596;
i__68997_69542 = G__69597;
continue;
} else {
var child_struct_69598 = cljs.core.first(seq__68993_69591__$1);
if((!((child_struct_69598 == null)))){
if(typeof child_struct_69598 === 'string'){
var text_69599 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69599),child_struct_69598].join(''));
} else {
var children_69600 = shadow.dom.svg_node(child_struct_69598);
if(cljs.core.seq_QMARK_(children_69600)){
var seq__69088_69601 = cljs.core.seq(children_69600);
var chunk__69090_69602 = null;
var count__69091_69603 = (0);
var i__69092_69604 = (0);
while(true){
if((i__69092_69604 < count__69091_69603)){
var child_69605 = chunk__69090_69602.cljs$core$IIndexed$_nth$arity$2(null,i__69092_69604);
if(cljs.core.truth_(child_69605)){
node.appendChild(child_69605);


var G__69606 = seq__69088_69601;
var G__69607 = chunk__69090_69602;
var G__69608 = count__69091_69603;
var G__69609 = (i__69092_69604 + (1));
seq__69088_69601 = G__69606;
chunk__69090_69602 = G__69607;
count__69091_69603 = G__69608;
i__69092_69604 = G__69609;
continue;
} else {
var G__69610 = seq__69088_69601;
var G__69611 = chunk__69090_69602;
var G__69612 = count__69091_69603;
var G__69613 = (i__69092_69604 + (1));
seq__69088_69601 = G__69610;
chunk__69090_69602 = G__69611;
count__69091_69603 = G__69612;
i__69092_69604 = G__69613;
continue;
}
} else {
var temp__5804__auto___69614__$1 = cljs.core.seq(seq__69088_69601);
if(temp__5804__auto___69614__$1){
var seq__69088_69615__$1 = temp__5804__auto___69614__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69088_69615__$1)){
var c__5565__auto___69616 = cljs.core.chunk_first(seq__69088_69615__$1);
var G__69617 = cljs.core.chunk_rest(seq__69088_69615__$1);
var G__69618 = c__5565__auto___69616;
var G__69619 = cljs.core.count(c__5565__auto___69616);
var G__69620 = (0);
seq__69088_69601 = G__69617;
chunk__69090_69602 = G__69618;
count__69091_69603 = G__69619;
i__69092_69604 = G__69620;
continue;
} else {
var child_69621 = cljs.core.first(seq__69088_69615__$1);
if(cljs.core.truth_(child_69621)){
node.appendChild(child_69621);


var G__69622 = cljs.core.next(seq__69088_69615__$1);
var G__69623 = null;
var G__69624 = (0);
var G__69625 = (0);
seq__69088_69601 = G__69622;
chunk__69090_69602 = G__69623;
count__69091_69603 = G__69624;
i__69092_69604 = G__69625;
continue;
} else {
var G__69626 = cljs.core.next(seq__69088_69615__$1);
var G__69627 = null;
var G__69628 = (0);
var G__69629 = (0);
seq__69088_69601 = G__69626;
chunk__69090_69602 = G__69627;
count__69091_69603 = G__69628;
i__69092_69604 = G__69629;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69600);
}
}


var G__69630 = cljs.core.next(seq__68993_69591__$1);
var G__69631 = null;
var G__69632 = (0);
var G__69633 = (0);
seq__68993_69539 = G__69630;
chunk__68995_69540 = G__69631;
count__68996_69541 = G__69632;
i__68997_69542 = G__69633;
continue;
} else {
var G__69634 = cljs.core.next(seq__68993_69591__$1);
var G__69635 = null;
var G__69636 = (0);
var G__69637 = (0);
seq__68993_69539 = G__69634;
chunk__68995_69540 = G__69635;
count__68996_69541 = G__69636;
i__68997_69542 = G__69637;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69649 = arguments.length;
var i__5767__auto___69650 = (0);
while(true){
if((i__5767__auto___69650 < len__5766__auto___69649)){
args__5772__auto__.push((arguments[i__5767__auto___69650]));

var G__69651 = (i__5767__auto___69650 + (1));
i__5767__auto___69650 = G__69651;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq69122){
var G__69124 = cljs.core.first(seq69122);
var seq69122__$1 = cljs.core.next(seq69122);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69124,seq69122__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__69137 = arguments.length;
switch (G__69137) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__65003__auto___69672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_69155){
var state_val_69156 = (state_69155[(1)]);
if((state_val_69156 === (1))){
var state_69155__$1 = state_69155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69155__$1,(2),once_or_cleanup);
} else {
if((state_val_69156 === (2))){
var inst_69152 = (state_69155[(2)]);
var inst_69153 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_69155__$1 = (function (){var statearr_69159 = state_69155;
(statearr_69159[(7)] = inst_69152);

return statearr_69159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69155__$1,inst_69153);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__64462__auto__ = null;
var shadow$dom$state_machine__64462__auto____0 = (function (){
var statearr_69166 = [null,null,null,null,null,null,null,null];
(statearr_69166[(0)] = shadow$dom$state_machine__64462__auto__);

(statearr_69166[(1)] = (1));

return statearr_69166;
});
var shadow$dom$state_machine__64462__auto____1 = (function (state_69155){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_69155);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e69167){if((e69167 instanceof Object)){
var ex__64465__auto__ = e69167;
var statearr_69171_69678 = state_69155;
(statearr_69171_69678[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69679 = state_69155;
state_69155 = G__69679;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
shadow$dom$state_machine__64462__auto__ = function(state_69155){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__64462__auto____0.call(this);
case 1:
return shadow$dom$state_machine__64462__auto____1.call(this,state_69155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__64462__auto____0;
shadow$dom$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__64462__auto____1;
return shadow$dom$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_69174 = f__65004__auto__();
(statearr_69174[(6)] = c__65003__auto___69672);

return statearr_69174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
