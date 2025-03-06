goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__65067 = arguments.length;
switch (G__65067) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65069 = (function (f,blockable,meta65070){
this.f = f;
this.blockable = blockable;
this.meta65070 = meta65070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65071,meta65070__$1){
var self__ = this;
var _65071__$1 = this;
return (new cljs.core.async.t_cljs$core$async65069(self__.f,self__.blockable,meta65070__$1));
}));

(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65071){
var self__ = this;
var _65071__$1 = this;
return self__.meta65070;
}));

(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async65069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async65069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta65070","meta65070",-2053321234,null)], null);
}));

(cljs.core.async.t_cljs$core$async65069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65069");

(cljs.core.async.t_cljs$core$async65069.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65069.
 */
cljs.core.async.__GT_t_cljs$core$async65069 = (function cljs$core$async$__GT_t_cljs$core$async65069(f__$1,blockable__$1,meta65070){
return (new cljs.core.async.t_cljs$core$async65069(f__$1,blockable__$1,meta65070));
});

}

return (new cljs.core.async.t_cljs$core$async65069(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__65076 = arguments.length;
switch (G__65076) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__65080 = arguments.length;
switch (G__65080) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__65083 = arguments.length;
switch (G__65083) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_67620 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_67620) : fn1.call(null,val_67620));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_67620) : fn1.call(null,val_67620));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__65092 = arguments.length;
switch (G__65092) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___67641 = n;
var x_67642 = (0);
while(true){
if((x_67642 < n__5633__auto___67641)){
(a[x_67642] = (0));

var G__67644 = (x_67642 + (1));
x_67642 = G__67644;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__67646 = (i + (1));
i = G__67646;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65106 = (function (flag,meta65107){
this.flag = flag;
this.meta65107 = meta65107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65108,meta65107__$1){
var self__ = this;
var _65108__$1 = this;
return (new cljs.core.async.t_cljs$core$async65106(self__.flag,meta65107__$1));
}));

(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65108){
var self__ = this;
var _65108__$1 = this;
return self__.meta65107;
}));

(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async65106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta65107","meta65107",-790537589,null)], null);
}));

(cljs.core.async.t_cljs$core$async65106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65106");

(cljs.core.async.t_cljs$core$async65106.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65106.
 */
cljs.core.async.__GT_t_cljs$core$async65106 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async65106(flag__$1,meta65107){
return (new cljs.core.async.t_cljs$core$async65106(flag__$1,meta65107));
});

}

return (new cljs.core.async.t_cljs$core$async65106(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65124 = (function (flag,cb,meta65125){
this.flag = flag;
this.cb = cb;
this.meta65125 = meta65125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65126,meta65125__$1){
var self__ = this;
var _65126__$1 = this;
return (new cljs.core.async.t_cljs$core$async65124(self__.flag,self__.cb,meta65125__$1));
}));

(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65126){
var self__ = this;
var _65126__$1 = this;
return self__.meta65125;
}));

(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async65124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta65125","meta65125",1512749724,null)], null);
}));

(cljs.core.async.t_cljs$core$async65124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65124");

(cljs.core.async.t_cljs$core$async65124.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65124.
 */
cljs.core.async.__GT_t_cljs$core$async65124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async65124(flag__$1,cb__$1,meta65125){
return (new cljs.core.async.t_cljs$core$async65124(flag__$1,cb__$1,meta65125));
});

}

return (new cljs.core.async.t_cljs$core$async65124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65141_SHARP_){
var G__65147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65141_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__65147) : fret.call(null,G__65147));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__65142_SHARP_){
var G__65149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__65142_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__65149) : fret.call(null,G__65149));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__67711 = (i + (1));
i = G__67711;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___67722 = arguments.length;
var i__5767__auto___67723 = (0);
while(true){
if((i__5767__auto___67723 < len__5766__auto___67722)){
args__5772__auto__.push((arguments[i__5767__auto___67723]));

var G__67729 = (i__5767__auto___67723 + (1));
i__5767__auto___67723 = G__67729;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__65161){
var map__65162 = p__65161;
var map__65162__$1 = cljs.core.__destructure_map(map__65162);
var opts = map__65162__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq65157){
var G__65158 = cljs.core.first(seq65157);
var seq65157__$1 = cljs.core.next(seq65157);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65158,seq65157__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__65174 = arguments.length;
switch (G__65174) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__65003__auto___67749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65260){
var state_val_65264 = (state_65260[(1)]);
if((state_val_65264 === (7))){
var inst_65247 = (state_65260[(2)]);
var state_65260__$1 = state_65260;
var statearr_65278_67750 = state_65260__$1;
(statearr_65278_67750[(2)] = inst_65247);

(statearr_65278_67750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (1))){
var state_65260__$1 = state_65260;
var statearr_65282_67752 = state_65260__$1;
(statearr_65282_67752[(2)] = null);

(statearr_65282_67752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (4))){
var inst_65212 = (state_65260[(7)]);
var inst_65212__$1 = (state_65260[(2)]);
var inst_65223 = (inst_65212__$1 == null);
var state_65260__$1 = (function (){var statearr_65287 = state_65260;
(statearr_65287[(7)] = inst_65212__$1);

return statearr_65287;
})();
if(cljs.core.truth_(inst_65223)){
var statearr_65288_67754 = state_65260__$1;
(statearr_65288_67754[(1)] = (5));

} else {
var statearr_65290_67755 = state_65260__$1;
(statearr_65290_67755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (13))){
var state_65260__$1 = state_65260;
var statearr_65294_67756 = state_65260__$1;
(statearr_65294_67756[(2)] = null);

(statearr_65294_67756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (6))){
var inst_65212 = (state_65260[(7)]);
var state_65260__$1 = state_65260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65260__$1,(11),to,inst_65212);
} else {
if((state_val_65264 === (3))){
var inst_65253 = (state_65260[(2)]);
var state_65260__$1 = state_65260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65260__$1,inst_65253);
} else {
if((state_val_65264 === (12))){
var state_65260__$1 = state_65260;
var statearr_65306_67758 = state_65260__$1;
(statearr_65306_67758[(2)] = null);

(statearr_65306_67758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (2))){
var state_65260__$1 = state_65260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65260__$1,(4),from);
} else {
if((state_val_65264 === (11))){
var inst_65237 = (state_65260[(2)]);
var state_65260__$1 = state_65260;
if(cljs.core.truth_(inst_65237)){
var statearr_65310_67759 = state_65260__$1;
(statearr_65310_67759[(1)] = (12));

} else {
var statearr_65312_67760 = state_65260__$1;
(statearr_65312_67760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (9))){
var state_65260__$1 = state_65260;
var statearr_65314_67762 = state_65260__$1;
(statearr_65314_67762[(2)] = null);

(statearr_65314_67762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (5))){
var state_65260__$1 = state_65260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65319_67763 = state_65260__$1;
(statearr_65319_67763[(1)] = (8));

} else {
var statearr_65320_67764 = state_65260__$1;
(statearr_65320_67764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (14))){
var inst_65245 = (state_65260[(2)]);
var state_65260__$1 = state_65260;
var statearr_65322_67765 = state_65260__$1;
(statearr_65322_67765[(2)] = inst_65245);

(statearr_65322_67765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (10))){
var inst_65234 = (state_65260[(2)]);
var state_65260__$1 = state_65260;
var statearr_65326_67766 = state_65260__$1;
(statearr_65326_67766[(2)] = inst_65234);

(statearr_65326_67766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65264 === (8))){
var inst_65227 = cljs.core.async.close_BANG_(to);
var state_65260__$1 = state_65260;
var statearr_65327_67767 = state_65260__$1;
(statearr_65327_67767[(2)] = inst_65227);

(statearr_65327_67767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_65329 = [null,null,null,null,null,null,null,null];
(statearr_65329[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_65329[(1)] = (1));

return statearr_65329;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_65260){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65260);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65334){if((e65334 instanceof Object)){
var ex__64465__auto__ = e65334;
var statearr_65335_67769 = state_65260;
(statearr_65335_67769[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67770 = state_65260;
state_65260 = G__67770;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_65260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_65260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65340 = f__65004__auto__();
(statearr_65340[(6)] = c__65003__auto___67749);

return statearr_65340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__65353){
var vec__65354 = p__65353;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65354,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65354,(1),null);
var job = vec__65354;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__65003__auto___67774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65364){
var state_val_65366 = (state_65364[(1)]);
if((state_val_65366 === (1))){
var state_65364__$1 = state_65364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65364__$1,(2),res,v);
} else {
if((state_val_65366 === (2))){
var inst_65361 = (state_65364[(2)]);
var inst_65362 = cljs.core.async.close_BANG_(res);
var state_65364__$1 = (function (){var statearr_65371 = state_65364;
(statearr_65371[(7)] = inst_65361);

return statearr_65371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65364__$1,inst_65362);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_65374 = [null,null,null,null,null,null,null,null];
(statearr_65374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__);

(statearr_65374[(1)] = (1));

return statearr_65374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1 = (function (state_65364){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65364);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65377){if((e65377 instanceof Object)){
var ex__64465__auto__ = e65377;
var statearr_65378_67780 = state_65364;
(statearr_65378_67780[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67781 = state_65364;
state_65364 = G__67781;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = function(state_65364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1.call(this,state_65364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65386 = f__65004__auto__();
(statearr_65386[(6)] = c__65003__auto___67774);

return statearr_65386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__65390){
var vec__65392 = p__65390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65392,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65392,(1),null);
var job = vec__65392;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___67786 = n;
var __67787 = (0);
while(true){
if((__67787 < n__5633__auto___67786)){
var G__65399_67788 = type;
var G__65399_67789__$1 = (((G__65399_67788 instanceof cljs.core.Keyword))?G__65399_67788.fqn:null);
switch (G__65399_67789__$1) {
case "compute":
var c__65003__auto___67795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67787,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = ((function (__67787,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function (state_65420){
var state_val_65421 = (state_65420[(1)]);
if((state_val_65421 === (1))){
var state_65420__$1 = state_65420;
var statearr_65428_67800 = state_65420__$1;
(statearr_65428_67800[(2)] = null);

(statearr_65428_67800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65421 === (2))){
var state_65420__$1 = state_65420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65420__$1,(4),jobs);
} else {
if((state_val_65421 === (3))){
var inst_65416 = (state_65420[(2)]);
var state_65420__$1 = state_65420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65420__$1,inst_65416);
} else {
if((state_val_65421 === (4))){
var inst_65407 = (state_65420[(2)]);
var inst_65408 = process__$1(inst_65407);
var state_65420__$1 = state_65420;
if(cljs.core.truth_(inst_65408)){
var statearr_65434_67803 = state_65420__$1;
(statearr_65434_67803[(1)] = (5));

} else {
var statearr_65435_67804 = state_65420__$1;
(statearr_65435_67804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65421 === (5))){
var state_65420__$1 = state_65420;
var statearr_65439_67811 = state_65420__$1;
(statearr_65439_67811[(2)] = null);

(statearr_65439_67811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65421 === (6))){
var state_65420__$1 = state_65420;
var statearr_65441_67812 = state_65420__$1;
(statearr_65441_67812[(2)] = null);

(statearr_65441_67812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65421 === (7))){
var inst_65414 = (state_65420[(2)]);
var state_65420__$1 = state_65420;
var statearr_65445_67820 = state_65420__$1;
(statearr_65445_67820[(2)] = inst_65414);

(statearr_65445_67820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__67787,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
;
return ((function (__67787,switch__64461__auto__,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_65449 = [null,null,null,null,null,null,null];
(statearr_65449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__);

(statearr_65449[(1)] = (1));

return statearr_65449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1 = (function (state_65420){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65420);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65451){if((e65451 instanceof Object)){
var ex__64465__auto__ = e65451;
var statearr_65453_67830 = state_65420;
(statearr_65453_67830[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67831 = state_65420;
state_65420 = G__67831;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = function(state_65420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1.call(this,state_65420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__;
})()
;})(__67787,switch__64461__auto__,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
})();
var state__65005__auto__ = (function (){var statearr_65457 = f__65004__auto__();
(statearr_65457[(6)] = c__65003__auto___67795);

return statearr_65457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
});})(__67787,c__65003__auto___67795,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
);


break;
case "async":
var c__65003__auto___67836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67787,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = ((function (__67787,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function (state_65474){
var state_val_65475 = (state_65474[(1)]);
if((state_val_65475 === (1))){
var state_65474__$1 = state_65474;
var statearr_65480_67837 = state_65474__$1;
(statearr_65480_67837[(2)] = null);

(statearr_65480_67837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65475 === (2))){
var state_65474__$1 = state_65474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65474__$1,(4),jobs);
} else {
if((state_val_65475 === (3))){
var inst_65472 = (state_65474[(2)]);
var state_65474__$1 = state_65474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65474__$1,inst_65472);
} else {
if((state_val_65475 === (4))){
var inst_65463 = (state_65474[(2)]);
var inst_65465 = async(inst_65463);
var state_65474__$1 = state_65474;
if(cljs.core.truth_(inst_65465)){
var statearr_65485_67840 = state_65474__$1;
(statearr_65485_67840[(1)] = (5));

} else {
var statearr_65487_67841 = state_65474__$1;
(statearr_65487_67841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65475 === (5))){
var state_65474__$1 = state_65474;
var statearr_65491_67844 = state_65474__$1;
(statearr_65491_67844[(2)] = null);

(statearr_65491_67844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65475 === (6))){
var state_65474__$1 = state_65474;
var statearr_65494_67852 = state_65474__$1;
(statearr_65494_67852[(2)] = null);

(statearr_65494_67852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65475 === (7))){
var inst_65470 = (state_65474[(2)]);
var state_65474__$1 = state_65474;
var statearr_65496_67853 = state_65474__$1;
(statearr_65496_67853[(2)] = inst_65470);

(statearr_65496_67853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__67787,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
;
return ((function (__67787,switch__64461__auto__,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_65501 = [null,null,null,null,null,null,null];
(statearr_65501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__);

(statearr_65501[(1)] = (1));

return statearr_65501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1 = (function (state_65474){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65474);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65505){if((e65505 instanceof Object)){
var ex__64465__auto__ = e65505;
var statearr_65506_67858 = state_65474;
(statearr_65506_67858[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67859 = state_65474;
state_65474 = G__67859;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = function(state_65474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1.call(this,state_65474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__;
})()
;})(__67787,switch__64461__auto__,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
})();
var state__65005__auto__ = (function (){var statearr_65511 = f__65004__auto__();
(statearr_65511[(6)] = c__65003__auto___67836);

return statearr_65511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
});})(__67787,c__65003__auto___67836,G__65399_67788,G__65399_67789__$1,n__5633__auto___67786,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65399_67789__$1)].join('')));

}

var G__67860 = (__67787 + (1));
__67787 = G__67860;
continue;
} else {
}
break;
}

var c__65003__auto___67861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65536){
var state_val_65537 = (state_65536[(1)]);
if((state_val_65537 === (7))){
var inst_65532 = (state_65536[(2)]);
var state_65536__$1 = state_65536;
var statearr_65538_67862 = state_65536__$1;
(statearr_65538_67862[(2)] = inst_65532);

(statearr_65538_67862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65537 === (1))){
var state_65536__$1 = state_65536;
var statearr_65539_67863 = state_65536__$1;
(statearr_65539_67863[(2)] = null);

(statearr_65539_67863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65537 === (4))){
var inst_65517 = (state_65536[(7)]);
var inst_65517__$1 = (state_65536[(2)]);
var inst_65518 = (inst_65517__$1 == null);
var state_65536__$1 = (function (){var statearr_65540 = state_65536;
(statearr_65540[(7)] = inst_65517__$1);

return statearr_65540;
})();
if(cljs.core.truth_(inst_65518)){
var statearr_65541_67864 = state_65536__$1;
(statearr_65541_67864[(1)] = (5));

} else {
var statearr_65542_67865 = state_65536__$1;
(statearr_65542_67865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65537 === (6))){
var inst_65522 = (state_65536[(8)]);
var inst_65517 = (state_65536[(7)]);
var inst_65522__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_65523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65524 = [inst_65517,inst_65522__$1];
var inst_65525 = (new cljs.core.PersistentVector(null,2,(5),inst_65523,inst_65524,null));
var state_65536__$1 = (function (){var statearr_65543 = state_65536;
(statearr_65543[(8)] = inst_65522__$1);

return statearr_65543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65536__$1,(8),jobs,inst_65525);
} else {
if((state_val_65537 === (3))){
var inst_65534 = (state_65536[(2)]);
var state_65536__$1 = state_65536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65536__$1,inst_65534);
} else {
if((state_val_65537 === (2))){
var state_65536__$1 = state_65536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65536__$1,(4),from);
} else {
if((state_val_65537 === (9))){
var inst_65529 = (state_65536[(2)]);
var state_65536__$1 = (function (){var statearr_65544 = state_65536;
(statearr_65544[(9)] = inst_65529);

return statearr_65544;
})();
var statearr_65549_67869 = state_65536__$1;
(statearr_65549_67869[(2)] = null);

(statearr_65549_67869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65537 === (5))){
var inst_65520 = cljs.core.async.close_BANG_(jobs);
var state_65536__$1 = state_65536;
var statearr_65551_67870 = state_65536__$1;
(statearr_65551_67870[(2)] = inst_65520);

(statearr_65551_67870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65537 === (8))){
var inst_65522 = (state_65536[(8)]);
var inst_65527 = (state_65536[(2)]);
var state_65536__$1 = (function (){var statearr_65552 = state_65536;
(statearr_65552[(10)] = inst_65527);

return statearr_65552;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65536__$1,(9),results,inst_65522);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_65555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__);

(statearr_65555[(1)] = (1));

return statearr_65555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1 = (function (state_65536){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65536);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65556){if((e65556 instanceof Object)){
var ex__64465__auto__ = e65556;
var statearr_65557_67875 = state_65536;
(statearr_65557_67875[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67881 = state_65536;
state_65536 = G__67881;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = function(state_65536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1.call(this,state_65536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65562 = f__65004__auto__();
(statearr_65562[(6)] = c__65003__auto___67861);

return statearr_65562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65605){
var state_val_65606 = (state_65605[(1)]);
if((state_val_65606 === (7))){
var inst_65601 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
var statearr_65615_67890 = state_65605__$1;
(statearr_65615_67890[(2)] = inst_65601);

(statearr_65615_67890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (20))){
var state_65605__$1 = state_65605;
var statearr_65616_67896 = state_65605__$1;
(statearr_65616_67896[(2)] = null);

(statearr_65616_67896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (1))){
var state_65605__$1 = state_65605;
var statearr_65617_67897 = state_65605__$1;
(statearr_65617_67897[(2)] = null);

(statearr_65617_67897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (4))){
var inst_65569 = (state_65605[(7)]);
var inst_65569__$1 = (state_65605[(2)]);
var inst_65570 = (inst_65569__$1 == null);
var state_65605__$1 = (function (){var statearr_65621 = state_65605;
(statearr_65621[(7)] = inst_65569__$1);

return statearr_65621;
})();
if(cljs.core.truth_(inst_65570)){
var statearr_65625_67898 = state_65605__$1;
(statearr_65625_67898[(1)] = (5));

} else {
var statearr_65628_67899 = state_65605__$1;
(statearr_65628_67899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (15))){
var inst_65583 = (state_65605[(8)]);
var state_65605__$1 = state_65605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65605__$1,(18),to,inst_65583);
} else {
if((state_val_65606 === (21))){
var inst_65596 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
var statearr_65633_67900 = state_65605__$1;
(statearr_65633_67900[(2)] = inst_65596);

(statearr_65633_67900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (13))){
var inst_65598 = (state_65605[(2)]);
var state_65605__$1 = (function (){var statearr_65635 = state_65605;
(statearr_65635[(9)] = inst_65598);

return statearr_65635;
})();
var statearr_65636_67902 = state_65605__$1;
(statearr_65636_67902[(2)] = null);

(statearr_65636_67902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (6))){
var inst_65569 = (state_65605[(7)]);
var state_65605__$1 = state_65605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65605__$1,(11),inst_65569);
} else {
if((state_val_65606 === (17))){
var inst_65591 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
if(cljs.core.truth_(inst_65591)){
var statearr_65637_67914 = state_65605__$1;
(statearr_65637_67914[(1)] = (19));

} else {
var statearr_65638_67915 = state_65605__$1;
(statearr_65638_67915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (3))){
var inst_65603 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65605__$1,inst_65603);
} else {
if((state_val_65606 === (12))){
var inst_65580 = (state_65605[(10)]);
var state_65605__$1 = state_65605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65605__$1,(14),inst_65580);
} else {
if((state_val_65606 === (2))){
var state_65605__$1 = state_65605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65605__$1,(4),results);
} else {
if((state_val_65606 === (19))){
var state_65605__$1 = state_65605;
var statearr_65643_67928 = state_65605__$1;
(statearr_65643_67928[(2)] = null);

(statearr_65643_67928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (11))){
var inst_65580 = (state_65605[(2)]);
var state_65605__$1 = (function (){var statearr_65644 = state_65605;
(statearr_65644[(10)] = inst_65580);

return statearr_65644;
})();
var statearr_65645_67935 = state_65605__$1;
(statearr_65645_67935[(2)] = null);

(statearr_65645_67935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (9))){
var state_65605__$1 = state_65605;
var statearr_65646_67937 = state_65605__$1;
(statearr_65646_67937[(2)] = null);

(statearr_65646_67937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (5))){
var state_65605__$1 = state_65605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65647_67942 = state_65605__$1;
(statearr_65647_67942[(1)] = (8));

} else {
var statearr_65648_67943 = state_65605__$1;
(statearr_65648_67943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (14))){
var inst_65583 = (state_65605[(8)]);
var inst_65585 = (state_65605[(11)]);
var inst_65583__$1 = (state_65605[(2)]);
var inst_65584 = (inst_65583__$1 == null);
var inst_65585__$1 = cljs.core.not(inst_65584);
var state_65605__$1 = (function (){var statearr_65650 = state_65605;
(statearr_65650[(8)] = inst_65583__$1);

(statearr_65650[(11)] = inst_65585__$1);

return statearr_65650;
})();
if(inst_65585__$1){
var statearr_65651_67944 = state_65605__$1;
(statearr_65651_67944[(1)] = (15));

} else {
var statearr_65652_67946 = state_65605__$1;
(statearr_65652_67946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (16))){
var inst_65585 = (state_65605[(11)]);
var state_65605__$1 = state_65605;
var statearr_65653_67948 = state_65605__$1;
(statearr_65653_67948[(2)] = inst_65585);

(statearr_65653_67948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (10))){
var inst_65577 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
var statearr_65656_67953 = state_65605__$1;
(statearr_65656_67953[(2)] = inst_65577);

(statearr_65656_67953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (18))){
var inst_65588 = (state_65605[(2)]);
var state_65605__$1 = state_65605;
var statearr_65657_67958 = state_65605__$1;
(statearr_65657_67958[(2)] = inst_65588);

(statearr_65657_67958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65606 === (8))){
var inst_65574 = cljs.core.async.close_BANG_(to);
var state_65605__$1 = state_65605;
var statearr_65662_67961 = state_65605__$1;
(statearr_65662_67961[(2)] = inst_65574);

(statearr_65662_67961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_65667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__);

(statearr_65667[(1)] = (1));

return statearr_65667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1 = (function (state_65605){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65605);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65668){if((e65668 instanceof Object)){
var ex__64465__auto__ = e65668;
var statearr_65669_67967 = state_65605;
(statearr_65669_67967[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67968 = state_65605;
state_65605 = G__67968;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__ = function(state_65605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1.call(this,state_65605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65670 = f__65004__auto__();
(statearr_65670[(6)] = c__65003__auto__);

return statearr_65670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__65677 = arguments.length;
switch (G__65677) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__65689 = arguments.length;
switch (G__65689) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__65705 = arguments.length;
switch (G__65705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__65003__auto___67985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65739){
var state_val_65740 = (state_65739[(1)]);
if((state_val_65740 === (7))){
var inst_65735 = (state_65739[(2)]);
var state_65739__$1 = state_65739;
var statearr_65745_67986 = state_65739__$1;
(statearr_65745_67986[(2)] = inst_65735);

(statearr_65745_67986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (1))){
var state_65739__$1 = state_65739;
var statearr_65746_67987 = state_65739__$1;
(statearr_65746_67987[(2)] = null);

(statearr_65746_67987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (4))){
var inst_65712 = (state_65739[(7)]);
var inst_65712__$1 = (state_65739[(2)]);
var inst_65716 = (inst_65712__$1 == null);
var state_65739__$1 = (function (){var statearr_65747 = state_65739;
(statearr_65747[(7)] = inst_65712__$1);

return statearr_65747;
})();
if(cljs.core.truth_(inst_65716)){
var statearr_65748_67988 = state_65739__$1;
(statearr_65748_67988[(1)] = (5));

} else {
var statearr_65749_67990 = state_65739__$1;
(statearr_65749_67990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (13))){
var state_65739__$1 = state_65739;
var statearr_65751_67991 = state_65739__$1;
(statearr_65751_67991[(2)] = null);

(statearr_65751_67991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (6))){
var inst_65712 = (state_65739[(7)]);
var inst_65722 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65712) : p.call(null,inst_65712));
var state_65739__$1 = state_65739;
if(cljs.core.truth_(inst_65722)){
var statearr_65752_67992 = state_65739__$1;
(statearr_65752_67992[(1)] = (9));

} else {
var statearr_65753_67994 = state_65739__$1;
(statearr_65753_67994[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (3))){
var inst_65737 = (state_65739[(2)]);
var state_65739__$1 = state_65739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65739__$1,inst_65737);
} else {
if((state_val_65740 === (12))){
var state_65739__$1 = state_65739;
var statearr_65754_67995 = state_65739__$1;
(statearr_65754_67995[(2)] = null);

(statearr_65754_67995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (2))){
var state_65739__$1 = state_65739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65739__$1,(4),ch);
} else {
if((state_val_65740 === (11))){
var inst_65712 = (state_65739[(7)]);
var inst_65726 = (state_65739[(2)]);
var state_65739__$1 = state_65739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65739__$1,(8),inst_65726,inst_65712);
} else {
if((state_val_65740 === (9))){
var state_65739__$1 = state_65739;
var statearr_65763_68000 = state_65739__$1;
(statearr_65763_68000[(2)] = tc);

(statearr_65763_68000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (5))){
var inst_65718 = cljs.core.async.close_BANG_(tc);
var inst_65719 = cljs.core.async.close_BANG_(fc);
var state_65739__$1 = (function (){var statearr_65765 = state_65739;
(statearr_65765[(8)] = inst_65718);

return statearr_65765;
})();
var statearr_65766_68001 = state_65739__$1;
(statearr_65766_68001[(2)] = inst_65719);

(statearr_65766_68001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (14))){
var inst_65733 = (state_65739[(2)]);
var state_65739__$1 = state_65739;
var statearr_65770_68002 = state_65739__$1;
(statearr_65770_68002[(2)] = inst_65733);

(statearr_65770_68002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (10))){
var state_65739__$1 = state_65739;
var statearr_65772_68003 = state_65739__$1;
(statearr_65772_68003[(2)] = fc);

(statearr_65772_68003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65740 === (8))){
var inst_65728 = (state_65739[(2)]);
var state_65739__$1 = state_65739;
if(cljs.core.truth_(inst_65728)){
var statearr_65773_68004 = state_65739__$1;
(statearr_65773_68004[(1)] = (12));

} else {
var statearr_65777_68005 = state_65739__$1;
(statearr_65777_68005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_65779 = [null,null,null,null,null,null,null,null,null];
(statearr_65779[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_65779[(1)] = (1));

return statearr_65779;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_65739){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65739);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65780){if((e65780 instanceof Object)){
var ex__64465__auto__ = e65780;
var statearr_65781_68006 = state_65739;
(statearr_65781_68006[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68007 = state_65739;
state_65739 = G__68007;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_65739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_65739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65786 = f__65004__auto__();
(statearr_65786[(6)] = c__65003__auto___67985);

return statearr_65786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65811){
var state_val_65812 = (state_65811[(1)]);
if((state_val_65812 === (7))){
var inst_65807 = (state_65811[(2)]);
var state_65811__$1 = state_65811;
var statearr_65815_68009 = state_65811__$1;
(statearr_65815_68009[(2)] = inst_65807);

(statearr_65815_68009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (1))){
var inst_65787 = init;
var state_65811__$1 = (function (){var statearr_65816 = state_65811;
(statearr_65816[(7)] = inst_65787);

return statearr_65816;
})();
var statearr_65817_68011 = state_65811__$1;
(statearr_65817_68011[(2)] = null);

(statearr_65817_68011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (4))){
var inst_65790 = (state_65811[(8)]);
var inst_65790__$1 = (state_65811[(2)]);
var inst_65791 = (inst_65790__$1 == null);
var state_65811__$1 = (function (){var statearr_65818 = state_65811;
(statearr_65818[(8)] = inst_65790__$1);

return statearr_65818;
})();
if(cljs.core.truth_(inst_65791)){
var statearr_65819_68012 = state_65811__$1;
(statearr_65819_68012[(1)] = (5));

} else {
var statearr_65820_68013 = state_65811__$1;
(statearr_65820_68013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (6))){
var inst_65787 = (state_65811[(7)]);
var inst_65798 = (state_65811[(9)]);
var inst_65790 = (state_65811[(8)]);
var inst_65798__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_65787,inst_65790) : f.call(null,inst_65787,inst_65790));
var inst_65799 = cljs.core.reduced_QMARK_(inst_65798__$1);
var state_65811__$1 = (function (){var statearr_65821 = state_65811;
(statearr_65821[(9)] = inst_65798__$1);

return statearr_65821;
})();
if(inst_65799){
var statearr_65822_68014 = state_65811__$1;
(statearr_65822_68014[(1)] = (8));

} else {
var statearr_65823_68015 = state_65811__$1;
(statearr_65823_68015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (3))){
var inst_65809 = (state_65811[(2)]);
var state_65811__$1 = state_65811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65811__$1,inst_65809);
} else {
if((state_val_65812 === (2))){
var state_65811__$1 = state_65811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65811__$1,(4),ch);
} else {
if((state_val_65812 === (9))){
var inst_65798 = (state_65811[(9)]);
var inst_65787 = inst_65798;
var state_65811__$1 = (function (){var statearr_65827 = state_65811;
(statearr_65827[(7)] = inst_65787);

return statearr_65827;
})();
var statearr_65828_68016 = state_65811__$1;
(statearr_65828_68016[(2)] = null);

(statearr_65828_68016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (5))){
var inst_65787 = (state_65811[(7)]);
var state_65811__$1 = state_65811;
var statearr_65829_68018 = state_65811__$1;
(statearr_65829_68018[(2)] = inst_65787);

(statearr_65829_68018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (10))){
var inst_65805 = (state_65811[(2)]);
var state_65811__$1 = state_65811;
var statearr_65830_68023 = state_65811__$1;
(statearr_65830_68023[(2)] = inst_65805);

(statearr_65830_68023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65812 === (8))){
var inst_65798 = (state_65811[(9)]);
var inst_65801 = cljs.core.deref(inst_65798);
var state_65811__$1 = state_65811;
var statearr_65831_68024 = state_65811__$1;
(statearr_65831_68024[(2)] = inst_65801);

(statearr_65831_68024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__64462__auto__ = null;
var cljs$core$async$reduce_$_state_machine__64462__auto____0 = (function (){
var statearr_65832 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65832[(0)] = cljs$core$async$reduce_$_state_machine__64462__auto__);

(statearr_65832[(1)] = (1));

return statearr_65832;
});
var cljs$core$async$reduce_$_state_machine__64462__auto____1 = (function (state_65811){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65811);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65833){if((e65833 instanceof Object)){
var ex__64465__auto__ = e65833;
var statearr_65834_68025 = state_65811;
(statearr_65834_68025[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68026 = state_65811;
state_65811 = G__68026;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__64462__auto__ = function(state_65811){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__64462__auto____1.call(this,state_65811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__64462__auto____0;
cljs$core$async$reduce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__64462__auto____1;
return cljs$core$async$reduce_$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65835 = f__65004__auto__();
(statearr_65835[(6)] = c__65003__auto__);

return statearr_65835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65845){
var state_val_65846 = (state_65845[(1)]);
if((state_val_65846 === (1))){
var inst_65840 = cljs.core.async.reduce(f__$1,init,ch);
var state_65845__$1 = state_65845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65845__$1,(2),inst_65840);
} else {
if((state_val_65846 === (2))){
var inst_65842 = (state_65845[(2)]);
var inst_65843 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_65842) : f__$1.call(null,inst_65842));
var state_65845__$1 = state_65845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65845__$1,inst_65843);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__64462__auto__ = null;
var cljs$core$async$transduce_$_state_machine__64462__auto____0 = (function (){
var statearr_65850 = [null,null,null,null,null,null,null];
(statearr_65850[(0)] = cljs$core$async$transduce_$_state_machine__64462__auto__);

(statearr_65850[(1)] = (1));

return statearr_65850;
});
var cljs$core$async$transduce_$_state_machine__64462__auto____1 = (function (state_65845){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65845);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65852){if((e65852 instanceof Object)){
var ex__64465__auto__ = e65852;
var statearr_65853_68039 = state_65845;
(statearr_65853_68039[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68040 = state_65845;
state_65845 = G__68040;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__64462__auto__ = function(state_65845){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__64462__auto____1.call(this,state_65845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__64462__auto____0;
cljs$core$async$transduce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__64462__auto____1;
return cljs$core$async$transduce_$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65854 = f__65004__auto__();
(statearr_65854[(6)] = c__65003__auto__);

return statearr_65854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__65858 = arguments.length;
switch (G__65858) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_65891){
var state_val_65892 = (state_65891[(1)]);
if((state_val_65892 === (7))){
var inst_65871 = (state_65891[(2)]);
var state_65891__$1 = state_65891;
var statearr_65895_68048 = state_65891__$1;
(statearr_65895_68048[(2)] = inst_65871);

(statearr_65895_68048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (1))){
var inst_65863 = cljs.core.seq(coll);
var inst_65864 = inst_65863;
var state_65891__$1 = (function (){var statearr_65896 = state_65891;
(statearr_65896[(7)] = inst_65864);

return statearr_65896;
})();
var statearr_65897_68049 = state_65891__$1;
(statearr_65897_68049[(2)] = null);

(statearr_65897_68049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (4))){
var inst_65864 = (state_65891[(7)]);
var inst_65869 = cljs.core.first(inst_65864);
var state_65891__$1 = state_65891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65891__$1,(7),ch,inst_65869);
} else {
if((state_val_65892 === (13))){
var inst_65885 = (state_65891[(2)]);
var state_65891__$1 = state_65891;
var statearr_65898_68054 = state_65891__$1;
(statearr_65898_68054[(2)] = inst_65885);

(statearr_65898_68054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (6))){
var inst_65874 = (state_65891[(2)]);
var state_65891__$1 = state_65891;
if(cljs.core.truth_(inst_65874)){
var statearr_65899_68055 = state_65891__$1;
(statearr_65899_68055[(1)] = (8));

} else {
var statearr_65900_68056 = state_65891__$1;
(statearr_65900_68056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (3))){
var inst_65889 = (state_65891[(2)]);
var state_65891__$1 = state_65891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65891__$1,inst_65889);
} else {
if((state_val_65892 === (12))){
var state_65891__$1 = state_65891;
var statearr_65901_68060 = state_65891__$1;
(statearr_65901_68060[(2)] = null);

(statearr_65901_68060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (2))){
var inst_65864 = (state_65891[(7)]);
var state_65891__$1 = state_65891;
if(cljs.core.truth_(inst_65864)){
var statearr_65902_68061 = state_65891__$1;
(statearr_65902_68061[(1)] = (4));

} else {
var statearr_65903_68062 = state_65891__$1;
(statearr_65903_68062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (11))){
var inst_65882 = cljs.core.async.close_BANG_(ch);
var state_65891__$1 = state_65891;
var statearr_65904_68063 = state_65891__$1;
(statearr_65904_68063[(2)] = inst_65882);

(statearr_65904_68063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (9))){
var state_65891__$1 = state_65891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65905_68064 = state_65891__$1;
(statearr_65905_68064[(1)] = (11));

} else {
var statearr_65906_68065 = state_65891__$1;
(statearr_65906_68065[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (5))){
var inst_65864 = (state_65891[(7)]);
var state_65891__$1 = state_65891;
var statearr_65907_68066 = state_65891__$1;
(statearr_65907_68066[(2)] = inst_65864);

(statearr_65907_68066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (10))){
var inst_65887 = (state_65891[(2)]);
var state_65891__$1 = state_65891;
var statearr_65910_68067 = state_65891__$1;
(statearr_65910_68067[(2)] = inst_65887);

(statearr_65910_68067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65892 === (8))){
var inst_65864 = (state_65891[(7)]);
var inst_65876 = cljs.core.next(inst_65864);
var inst_65864__$1 = inst_65876;
var state_65891__$1 = (function (){var statearr_65911 = state_65891;
(statearr_65911[(7)] = inst_65864__$1);

return statearr_65911;
})();
var statearr_65912_68074 = state_65891__$1;
(statearr_65912_68074[(2)] = null);

(statearr_65912_68074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_65913 = [null,null,null,null,null,null,null,null];
(statearr_65913[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_65913[(1)] = (1));

return statearr_65913;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_65891){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_65891);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e65914){if((e65914 instanceof Object)){
var ex__64465__auto__ = e65914;
var statearr_65915_68078 = state_65891;
(statearr_65915_68078[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68080 = state_65891;
state_65891 = G__68080;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_65891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_65891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_65917 = f__65004__auto__();
(statearr_65917[(6)] = c__65003__auto__);

return statearr_65917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_68083 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_68083(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_68087 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_68087(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_68091 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_68091(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_68092 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_68092(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65933 = (function (ch,cs,meta65934){
this.ch = ch;
this.cs = cs;
this.meta65934 = meta65934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65935,meta65934__$1){
var self__ = this;
var _65935__$1 = this;
return (new cljs.core.async.t_cljs$core$async65933(self__.ch,self__.cs,meta65934__$1));
}));

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65935){
var self__ = this;
var _65935__$1 = this;
return self__.meta65934;
}));

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async65933.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async65933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65934","meta65934",2111792659,null)], null);
}));

(cljs.core.async.t_cljs$core$async65933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65933");

(cljs.core.async.t_cljs$core$async65933.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65933.
 */
cljs.core.async.__GT_t_cljs$core$async65933 = (function cljs$core$async$mult_$___GT_t_cljs$core$async65933(ch__$1,cs__$1,meta65934){
return (new cljs.core.async.t_cljs$core$async65933(ch__$1,cs__$1,meta65934));
});

}

return (new cljs.core.async.t_cljs$core$async65933(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__65003__auto___68099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66110){
var state_val_66111 = (state_66110[(1)]);
if((state_val_66111 === (7))){
var inst_66106 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66118_68102 = state_66110__$1;
(statearr_66118_68102[(2)] = inst_66106);

(statearr_66118_68102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (20))){
var inst_66002 = (state_66110[(7)]);
var inst_66015 = cljs.core.first(inst_66002);
var inst_66016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66015,(0),null);
var inst_66017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66015,(1),null);
var state_66110__$1 = (function (){var statearr_66119 = state_66110;
(statearr_66119[(8)] = inst_66016);

return statearr_66119;
})();
if(cljs.core.truth_(inst_66017)){
var statearr_66121_68105 = state_66110__$1;
(statearr_66121_68105[(1)] = (22));

} else {
var statearr_66122_68106 = state_66110__$1;
(statearr_66122_68106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (27))){
var inst_66058 = (state_66110[(9)]);
var inst_66052 = (state_66110[(10)]);
var inst_65970 = (state_66110[(11)]);
var inst_66050 = (state_66110[(12)]);
var inst_66058__$1 = cljs.core._nth(inst_66050,inst_66052);
var inst_66059 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_66058__$1,inst_65970,done);
var state_66110__$1 = (function (){var statearr_66124 = state_66110;
(statearr_66124[(9)] = inst_66058__$1);

return statearr_66124;
})();
if(cljs.core.truth_(inst_66059)){
var statearr_66125_68107 = state_66110__$1;
(statearr_66125_68107[(1)] = (30));

} else {
var statearr_66126_68108 = state_66110__$1;
(statearr_66126_68108[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (1))){
var state_66110__$1 = state_66110;
var statearr_66128_68110 = state_66110__$1;
(statearr_66128_68110[(2)] = null);

(statearr_66128_68110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (24))){
var inst_66002 = (state_66110[(7)]);
var inst_66022 = (state_66110[(2)]);
var inst_66023 = cljs.core.next(inst_66002);
var inst_65979 = inst_66023;
var inst_65980 = null;
var inst_65981 = (0);
var inst_65982 = (0);
var state_66110__$1 = (function (){var statearr_66130 = state_66110;
(statearr_66130[(13)] = inst_65980);

(statearr_66130[(14)] = inst_65981);

(statearr_66130[(15)] = inst_65979);

(statearr_66130[(16)] = inst_65982);

(statearr_66130[(17)] = inst_66022);

return statearr_66130;
})();
var statearr_66131_68112 = state_66110__$1;
(statearr_66131_68112[(2)] = null);

(statearr_66131_68112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (39))){
var state_66110__$1 = state_66110;
var statearr_66138_68113 = state_66110__$1;
(statearr_66138_68113[(2)] = null);

(statearr_66138_68113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (4))){
var inst_65970 = (state_66110[(11)]);
var inst_65970__$1 = (state_66110[(2)]);
var inst_65971 = (inst_65970__$1 == null);
var state_66110__$1 = (function (){var statearr_66141 = state_66110;
(statearr_66141[(11)] = inst_65970__$1);

return statearr_66141;
})();
if(cljs.core.truth_(inst_65971)){
var statearr_66142_68116 = state_66110__$1;
(statearr_66142_68116[(1)] = (5));

} else {
var statearr_66144_68117 = state_66110__$1;
(statearr_66144_68117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (15))){
var inst_65980 = (state_66110[(13)]);
var inst_65981 = (state_66110[(14)]);
var inst_65979 = (state_66110[(15)]);
var inst_65982 = (state_66110[(16)]);
var inst_65998 = (state_66110[(2)]);
var inst_65999 = (inst_65982 + (1));
var tmp66133 = inst_65980;
var tmp66135 = inst_65981;
var tmp66136 = inst_65979;
var inst_65979__$1 = tmp66136;
var inst_65980__$1 = tmp66133;
var inst_65981__$1 = tmp66135;
var inst_65982__$1 = inst_65999;
var state_66110__$1 = (function (){var statearr_66145 = state_66110;
(statearr_66145[(13)] = inst_65980__$1);

(statearr_66145[(14)] = inst_65981__$1);

(statearr_66145[(18)] = inst_65998);

(statearr_66145[(15)] = inst_65979__$1);

(statearr_66145[(16)] = inst_65982__$1);

return statearr_66145;
})();
var statearr_66146_68120 = state_66110__$1;
(statearr_66146_68120[(2)] = null);

(statearr_66146_68120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (21))){
var inst_66026 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66150_68121 = state_66110__$1;
(statearr_66150_68121[(2)] = inst_66026);

(statearr_66150_68121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (31))){
var inst_66058 = (state_66110[(9)]);
var inst_66062 = done(null);
var inst_66063 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_66058);
var state_66110__$1 = (function (){var statearr_66151 = state_66110;
(statearr_66151[(19)] = inst_66062);

return statearr_66151;
})();
var statearr_66153_68123 = state_66110__$1;
(statearr_66153_68123[(2)] = inst_66063);

(statearr_66153_68123[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (32))){
var inst_66052 = (state_66110[(10)]);
var inst_66051 = (state_66110[(20)]);
var inst_66050 = (state_66110[(12)]);
var inst_66049 = (state_66110[(21)]);
var inst_66065 = (state_66110[(2)]);
var inst_66066 = (inst_66052 + (1));
var tmp66147 = inst_66051;
var tmp66148 = inst_66050;
var tmp66149 = inst_66049;
var inst_66049__$1 = tmp66149;
var inst_66050__$1 = tmp66148;
var inst_66051__$1 = tmp66147;
var inst_66052__$1 = inst_66066;
var state_66110__$1 = (function (){var statearr_66158 = state_66110;
(statearr_66158[(10)] = inst_66052__$1);

(statearr_66158[(22)] = inst_66065);

(statearr_66158[(20)] = inst_66051__$1);

(statearr_66158[(12)] = inst_66050__$1);

(statearr_66158[(21)] = inst_66049__$1);

return statearr_66158;
})();
var statearr_66159_68124 = state_66110__$1;
(statearr_66159_68124[(2)] = null);

(statearr_66159_68124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (40))){
var inst_66078 = (state_66110[(23)]);
var inst_66082 = done(null);
var inst_66083 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_66078);
var state_66110__$1 = (function (){var statearr_66162 = state_66110;
(statearr_66162[(24)] = inst_66082);

return statearr_66162;
})();
var statearr_66163_68125 = state_66110__$1;
(statearr_66163_68125[(2)] = inst_66083);

(statearr_66163_68125[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (33))){
var inst_66069 = (state_66110[(25)]);
var inst_66071 = cljs.core.chunked_seq_QMARK_(inst_66069);
var state_66110__$1 = state_66110;
if(inst_66071){
var statearr_66166_68126 = state_66110__$1;
(statearr_66166_68126[(1)] = (36));

} else {
var statearr_66168_68127 = state_66110__$1;
(statearr_66168_68127[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (13))){
var inst_65991 = (state_66110[(26)]);
var inst_65995 = cljs.core.async.close_BANG_(inst_65991);
var state_66110__$1 = state_66110;
var statearr_66170_68128 = state_66110__$1;
(statearr_66170_68128[(2)] = inst_65995);

(statearr_66170_68128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (22))){
var inst_66016 = (state_66110[(8)]);
var inst_66019 = cljs.core.async.close_BANG_(inst_66016);
var state_66110__$1 = state_66110;
var statearr_66171_68129 = state_66110__$1;
(statearr_66171_68129[(2)] = inst_66019);

(statearr_66171_68129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (36))){
var inst_66069 = (state_66110[(25)]);
var inst_66073 = cljs.core.chunk_first(inst_66069);
var inst_66074 = cljs.core.chunk_rest(inst_66069);
var inst_66075 = cljs.core.count(inst_66073);
var inst_66049 = inst_66074;
var inst_66050 = inst_66073;
var inst_66051 = inst_66075;
var inst_66052 = (0);
var state_66110__$1 = (function (){var statearr_66172 = state_66110;
(statearr_66172[(10)] = inst_66052);

(statearr_66172[(20)] = inst_66051);

(statearr_66172[(12)] = inst_66050);

(statearr_66172[(21)] = inst_66049);

return statearr_66172;
})();
var statearr_66173_68133 = state_66110__$1;
(statearr_66173_68133[(2)] = null);

(statearr_66173_68133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (41))){
var inst_66069 = (state_66110[(25)]);
var inst_66085 = (state_66110[(2)]);
var inst_66086 = cljs.core.next(inst_66069);
var inst_66049 = inst_66086;
var inst_66050 = null;
var inst_66051 = (0);
var inst_66052 = (0);
var state_66110__$1 = (function (){var statearr_66177 = state_66110;
(statearr_66177[(10)] = inst_66052);

(statearr_66177[(27)] = inst_66085);

(statearr_66177[(20)] = inst_66051);

(statearr_66177[(12)] = inst_66050);

(statearr_66177[(21)] = inst_66049);

return statearr_66177;
})();
var statearr_66178_68134 = state_66110__$1;
(statearr_66178_68134[(2)] = null);

(statearr_66178_68134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (43))){
var state_66110__$1 = state_66110;
var statearr_66180_68137 = state_66110__$1;
(statearr_66180_68137[(2)] = null);

(statearr_66180_68137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (29))){
var inst_66094 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66181_68138 = state_66110__$1;
(statearr_66181_68138[(2)] = inst_66094);

(statearr_66181_68138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (44))){
var inst_66103 = (state_66110[(2)]);
var state_66110__$1 = (function (){var statearr_66182 = state_66110;
(statearr_66182[(28)] = inst_66103);

return statearr_66182;
})();
var statearr_66183_68141 = state_66110__$1;
(statearr_66183_68141[(2)] = null);

(statearr_66183_68141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (6))){
var inst_66038 = (state_66110[(29)]);
var inst_66037 = cljs.core.deref(cs);
var inst_66038__$1 = cljs.core.keys(inst_66037);
var inst_66042 = cljs.core.count(inst_66038__$1);
var inst_66043 = cljs.core.reset_BANG_(dctr,inst_66042);
var inst_66048 = cljs.core.seq(inst_66038__$1);
var inst_66049 = inst_66048;
var inst_66050 = null;
var inst_66051 = (0);
var inst_66052 = (0);
var state_66110__$1 = (function (){var statearr_66184 = state_66110;
(statearr_66184[(10)] = inst_66052);

(statearr_66184[(30)] = inst_66043);

(statearr_66184[(29)] = inst_66038__$1);

(statearr_66184[(20)] = inst_66051);

(statearr_66184[(12)] = inst_66050);

(statearr_66184[(21)] = inst_66049);

return statearr_66184;
})();
var statearr_66185_68150 = state_66110__$1;
(statearr_66185_68150[(2)] = null);

(statearr_66185_68150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (28))){
var inst_66049 = (state_66110[(21)]);
var inst_66069 = (state_66110[(25)]);
var inst_66069__$1 = cljs.core.seq(inst_66049);
var state_66110__$1 = (function (){var statearr_66186 = state_66110;
(statearr_66186[(25)] = inst_66069__$1);

return statearr_66186;
})();
if(inst_66069__$1){
var statearr_66188_68152 = state_66110__$1;
(statearr_66188_68152[(1)] = (33));

} else {
var statearr_66189_68153 = state_66110__$1;
(statearr_66189_68153[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (25))){
var inst_66052 = (state_66110[(10)]);
var inst_66051 = (state_66110[(20)]);
var inst_66055 = (inst_66052 < inst_66051);
var inst_66056 = inst_66055;
var state_66110__$1 = state_66110;
if(cljs.core.truth_(inst_66056)){
var statearr_66194_68155 = state_66110__$1;
(statearr_66194_68155[(1)] = (27));

} else {
var statearr_66195_68156 = state_66110__$1;
(statearr_66195_68156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (34))){
var state_66110__$1 = state_66110;
var statearr_66197_68157 = state_66110__$1;
(statearr_66197_68157[(2)] = null);

(statearr_66197_68157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (17))){
var state_66110__$1 = state_66110;
var statearr_66200_68158 = state_66110__$1;
(statearr_66200_68158[(2)] = null);

(statearr_66200_68158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (3))){
var inst_66108 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66110__$1,inst_66108);
} else {
if((state_val_66111 === (12))){
var inst_66031 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66203_68160 = state_66110__$1;
(statearr_66203_68160[(2)] = inst_66031);

(statearr_66203_68160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (2))){
var state_66110__$1 = state_66110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66110__$1,(4),ch);
} else {
if((state_val_66111 === (23))){
var state_66110__$1 = state_66110;
var statearr_66206_68164 = state_66110__$1;
(statearr_66206_68164[(2)] = null);

(statearr_66206_68164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (35))){
var inst_66092 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66207_68167 = state_66110__$1;
(statearr_66207_68167[(2)] = inst_66092);

(statearr_66207_68167[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (19))){
var inst_66002 = (state_66110[(7)]);
var inst_66006 = cljs.core.chunk_first(inst_66002);
var inst_66007 = cljs.core.chunk_rest(inst_66002);
var inst_66008 = cljs.core.count(inst_66006);
var inst_65979 = inst_66007;
var inst_65980 = inst_66006;
var inst_65981 = inst_66008;
var inst_65982 = (0);
var state_66110__$1 = (function (){var statearr_66209 = state_66110;
(statearr_66209[(13)] = inst_65980);

(statearr_66209[(14)] = inst_65981);

(statearr_66209[(15)] = inst_65979);

(statearr_66209[(16)] = inst_65982);

return statearr_66209;
})();
var statearr_66210_68171 = state_66110__$1;
(statearr_66210_68171[(2)] = null);

(statearr_66210_68171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (11))){
var inst_66002 = (state_66110[(7)]);
var inst_65979 = (state_66110[(15)]);
var inst_66002__$1 = cljs.core.seq(inst_65979);
var state_66110__$1 = (function (){var statearr_66212 = state_66110;
(statearr_66212[(7)] = inst_66002__$1);

return statearr_66212;
})();
if(inst_66002__$1){
var statearr_66214_68172 = state_66110__$1;
(statearr_66214_68172[(1)] = (16));

} else {
var statearr_66215_68173 = state_66110__$1;
(statearr_66215_68173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (9))){
var inst_66033 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66218_68175 = state_66110__$1;
(statearr_66218_68175[(2)] = inst_66033);

(statearr_66218_68175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (5))){
var inst_65977 = cljs.core.deref(cs);
var inst_65978 = cljs.core.seq(inst_65977);
var inst_65979 = inst_65978;
var inst_65980 = null;
var inst_65981 = (0);
var inst_65982 = (0);
var state_66110__$1 = (function (){var statearr_66222 = state_66110;
(statearr_66222[(13)] = inst_65980);

(statearr_66222[(14)] = inst_65981);

(statearr_66222[(15)] = inst_65979);

(statearr_66222[(16)] = inst_65982);

return statearr_66222;
})();
var statearr_66225_68177 = state_66110__$1;
(statearr_66225_68177[(2)] = null);

(statearr_66225_68177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (14))){
var state_66110__$1 = state_66110;
var statearr_66226_68178 = state_66110__$1;
(statearr_66226_68178[(2)] = null);

(statearr_66226_68178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (45))){
var inst_66100 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66228_68179 = state_66110__$1;
(statearr_66228_68179[(2)] = inst_66100);

(statearr_66228_68179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (26))){
var inst_66038 = (state_66110[(29)]);
var inst_66096 = (state_66110[(2)]);
var inst_66097 = cljs.core.seq(inst_66038);
var state_66110__$1 = (function (){var statearr_66231 = state_66110;
(statearr_66231[(31)] = inst_66096);

return statearr_66231;
})();
if(inst_66097){
var statearr_66232_68181 = state_66110__$1;
(statearr_66232_68181[(1)] = (42));

} else {
var statearr_66234_68182 = state_66110__$1;
(statearr_66234_68182[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (16))){
var inst_66002 = (state_66110[(7)]);
var inst_66004 = cljs.core.chunked_seq_QMARK_(inst_66002);
var state_66110__$1 = state_66110;
if(inst_66004){
var statearr_66235_68185 = state_66110__$1;
(statearr_66235_68185[(1)] = (19));

} else {
var statearr_66236_68186 = state_66110__$1;
(statearr_66236_68186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (38))){
var inst_66089 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66237_68190 = state_66110__$1;
(statearr_66237_68190[(2)] = inst_66089);

(statearr_66237_68190[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (30))){
var state_66110__$1 = state_66110;
var statearr_66238_68191 = state_66110__$1;
(statearr_66238_68191[(2)] = null);

(statearr_66238_68191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (10))){
var inst_65980 = (state_66110[(13)]);
var inst_65982 = (state_66110[(16)]);
var inst_65990 = cljs.core._nth(inst_65980,inst_65982);
var inst_65991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65990,(0),null);
var inst_65992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65990,(1),null);
var state_66110__$1 = (function (){var statearr_66239 = state_66110;
(statearr_66239[(26)] = inst_65991);

return statearr_66239;
})();
if(cljs.core.truth_(inst_65992)){
var statearr_66241_68194 = state_66110__$1;
(statearr_66241_68194[(1)] = (13));

} else {
var statearr_66242_68197 = state_66110__$1;
(statearr_66242_68197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (18))){
var inst_66029 = (state_66110[(2)]);
var state_66110__$1 = state_66110;
var statearr_66245_68201 = state_66110__$1;
(statearr_66245_68201[(2)] = inst_66029);

(statearr_66245_68201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (42))){
var state_66110__$1 = state_66110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66110__$1,(45),dchan);
} else {
if((state_val_66111 === (37))){
var inst_65970 = (state_66110[(11)]);
var inst_66078 = (state_66110[(23)]);
var inst_66069 = (state_66110[(25)]);
var inst_66078__$1 = cljs.core.first(inst_66069);
var inst_66079 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_66078__$1,inst_65970,done);
var state_66110__$1 = (function (){var statearr_66248 = state_66110;
(statearr_66248[(23)] = inst_66078__$1);

return statearr_66248;
})();
if(cljs.core.truth_(inst_66079)){
var statearr_66249_68206 = state_66110__$1;
(statearr_66249_68206[(1)] = (39));

} else {
var statearr_66250_68207 = state_66110__$1;
(statearr_66250_68207[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66111 === (8))){
var inst_65981 = (state_66110[(14)]);
var inst_65982 = (state_66110[(16)]);
var inst_65984 = (inst_65982 < inst_65981);
var inst_65985 = inst_65984;
var state_66110__$1 = state_66110;
if(cljs.core.truth_(inst_65985)){
var statearr_66253_68208 = state_66110__$1;
(statearr_66253_68208[(1)] = (10));

} else {
var statearr_66257_68209 = state_66110__$1;
(statearr_66257_68209[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__64462__auto__ = null;
var cljs$core$async$mult_$_state_machine__64462__auto____0 = (function (){
var statearr_66259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66259[(0)] = cljs$core$async$mult_$_state_machine__64462__auto__);

(statearr_66259[(1)] = (1));

return statearr_66259;
});
var cljs$core$async$mult_$_state_machine__64462__auto____1 = (function (state_66110){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66110);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66260){if((e66260 instanceof Object)){
var ex__64465__auto__ = e66260;
var statearr_66262_68219 = state_66110;
(statearr_66262_68219[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68226 = state_66110;
state_66110 = G__68226;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__64462__auto__ = function(state_66110){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__64462__auto____1.call(this,state_66110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__64462__auto____0;
cljs$core$async$mult_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__64462__auto____1;
return cljs$core$async$mult_$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66268 = f__65004__auto__();
(statearr_66268[(6)] = c__65003__auto___68099);

return statearr_66268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__66274 = arguments.length;
switch (G__66274) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_68230 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_68230(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_68233 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_68233(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_68237 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_68237(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_68238 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_68238(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_68239 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_68239(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___68246 = arguments.length;
var i__5767__auto___68247 = (0);
while(true){
if((i__5767__auto___68247 < len__5766__auto___68246)){
args__5772__auto__.push((arguments[i__5767__auto___68247]));

var G__68248 = (i__5767__auto___68247 + (1));
i__5767__auto___68247 = G__68248;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__66297){
var map__66298 = p__66297;
var map__66298__$1 = cljs.core.__destructure_map(map__66298);
var opts = map__66298__$1;
var statearr_66299_68249 = state;
(statearr_66299_68249[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_66300_68250 = state;
(statearr_66300_68250[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_66301_68251 = state;
(statearr_66301_68251[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq66291){
var G__66292 = cljs.core.first(seq66291);
var seq66291__$1 = cljs.core.next(seq66291);
var G__66293 = cljs.core.first(seq66291__$1);
var seq66291__$2 = cljs.core.next(seq66291__$1);
var G__66294 = cljs.core.first(seq66291__$2);
var seq66291__$3 = cljs.core.next(seq66291__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66292,G__66293,G__66294,seq66291__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66307 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta66308){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta66308 = meta66308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66309,meta66308__$1){
var self__ = this;
var _66309__$1 = this;
return (new cljs.core.async.t_cljs$core$async66307(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta66308__$1));
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66309){
var self__ = this;
var _66309__$1 = this;
return self__.meta66308;
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async66307.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async66307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta66308","meta66308",-1729752553,null)], null);
}));

(cljs.core.async.t_cljs$core$async66307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66307");

(cljs.core.async.t_cljs$core$async66307.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66307.
 */
cljs.core.async.__GT_t_cljs$core$async66307 = (function cljs$core$async$mix_$___GT_t_cljs$core$async66307(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66308){
return (new cljs.core.async.t_cljs$core$async66307(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66308));
});

}

return (new cljs.core.async.t_cljs$core$async66307(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__65003__auto___68274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66394){
var state_val_66401 = (state_66394[(1)]);
if((state_val_66401 === (7))){
var inst_66346 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
if(cljs.core.truth_(inst_66346)){
var statearr_66408_68275 = state_66394__$1;
(statearr_66408_68275[(1)] = (8));

} else {
var statearr_66409_68276 = state_66394__$1;
(statearr_66409_68276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (20))){
var inst_66339 = (state_66394[(7)]);
var state_66394__$1 = state_66394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66394__$1,(23),out,inst_66339);
} else {
if((state_val_66401 === (1))){
var inst_66322 = calc_state();
var inst_66323 = cljs.core.__destructure_map(inst_66322);
var inst_66324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66323,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66323,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66323,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_66327 = inst_66322;
var state_66394__$1 = (function (){var statearr_66427 = state_66394;
(statearr_66427[(8)] = inst_66327);

(statearr_66427[(9)] = inst_66324);

(statearr_66427[(10)] = inst_66326);

(statearr_66427[(11)] = inst_66325);

return statearr_66427;
})();
var statearr_66429_68277 = state_66394__$1;
(statearr_66429_68277[(2)] = null);

(statearr_66429_68277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (24))){
var inst_66330 = (state_66394[(12)]);
var inst_66327 = inst_66330;
var state_66394__$1 = (function (){var statearr_66436 = state_66394;
(statearr_66436[(8)] = inst_66327);

return statearr_66436;
})();
var statearr_66437_68281 = state_66394__$1;
(statearr_66437_68281[(2)] = null);

(statearr_66437_68281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (4))){
var inst_66341 = (state_66394[(13)]);
var inst_66339 = (state_66394[(7)]);
var inst_66338 = (state_66394[(2)]);
var inst_66339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66338,(0),null);
var inst_66340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66338,(1),null);
var inst_66341__$1 = (inst_66339__$1 == null);
var state_66394__$1 = (function (){var statearr_66438 = state_66394;
(statearr_66438[(13)] = inst_66341__$1);

(statearr_66438[(14)] = inst_66340);

(statearr_66438[(7)] = inst_66339__$1);

return statearr_66438;
})();
if(cljs.core.truth_(inst_66341__$1)){
var statearr_66443_68282 = state_66394__$1;
(statearr_66443_68282[(1)] = (5));

} else {
var statearr_66444_68283 = state_66394__$1;
(statearr_66444_68283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (15))){
var inst_66360 = (state_66394[(15)]);
var inst_66331 = (state_66394[(16)]);
var inst_66360__$1 = cljs.core.empty_QMARK_(inst_66331);
var state_66394__$1 = (function (){var statearr_66445 = state_66394;
(statearr_66445[(15)] = inst_66360__$1);

return statearr_66445;
})();
if(inst_66360__$1){
var statearr_66447_68284 = state_66394__$1;
(statearr_66447_68284[(1)] = (17));

} else {
var statearr_66448_68285 = state_66394__$1;
(statearr_66448_68285[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (21))){
var inst_66330 = (state_66394[(12)]);
var inst_66327 = inst_66330;
var state_66394__$1 = (function (){var statearr_66449 = state_66394;
(statearr_66449[(8)] = inst_66327);

return statearr_66449;
})();
var statearr_66450_68286 = state_66394__$1;
(statearr_66450_68286[(2)] = null);

(statearr_66450_68286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (13))){
var inst_66353 = (state_66394[(2)]);
var inst_66354 = calc_state();
var inst_66327 = inst_66354;
var state_66394__$1 = (function (){var statearr_66451 = state_66394;
(statearr_66451[(8)] = inst_66327);

(statearr_66451[(17)] = inst_66353);

return statearr_66451;
})();
var statearr_66452_68287 = state_66394__$1;
(statearr_66452_68287[(2)] = null);

(statearr_66452_68287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (22))){
var inst_66380 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66456_68288 = state_66394__$1;
(statearr_66456_68288[(2)] = inst_66380);

(statearr_66456_68288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (6))){
var inst_66340 = (state_66394[(14)]);
var inst_66344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66340,change);
var state_66394__$1 = state_66394;
var statearr_66460_68290 = state_66394__$1;
(statearr_66460_68290[(2)] = inst_66344);

(statearr_66460_68290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (25))){
var state_66394__$1 = state_66394;
var statearr_66461_68297 = state_66394__$1;
(statearr_66461_68297[(2)] = null);

(statearr_66461_68297[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (17))){
var inst_66332 = (state_66394[(18)]);
var inst_66340 = (state_66394[(14)]);
var inst_66362 = (inst_66332.cljs$core$IFn$_invoke$arity$1 ? inst_66332.cljs$core$IFn$_invoke$arity$1(inst_66340) : inst_66332.call(null,inst_66340));
var inst_66363 = cljs.core.not(inst_66362);
var state_66394__$1 = state_66394;
var statearr_66462_68298 = state_66394__$1;
(statearr_66462_68298[(2)] = inst_66363);

(statearr_66462_68298[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (3))){
var inst_66384 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66394__$1,inst_66384);
} else {
if((state_val_66401 === (12))){
var state_66394__$1 = state_66394;
var statearr_66463_68300 = state_66394__$1;
(statearr_66463_68300[(2)] = null);

(statearr_66463_68300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (2))){
var inst_66327 = (state_66394[(8)]);
var inst_66330 = (state_66394[(12)]);
var inst_66330__$1 = cljs.core.__destructure_map(inst_66327);
var inst_66331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66330__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66330__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66330__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_66394__$1 = (function (){var statearr_66464 = state_66394;
(statearr_66464[(18)] = inst_66332);

(statearr_66464[(16)] = inst_66331);

(statearr_66464[(12)] = inst_66330__$1);

return statearr_66464;
})();
return cljs.core.async.ioc_alts_BANG_(state_66394__$1,(4),inst_66333);
} else {
if((state_val_66401 === (23))){
var inst_66371 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
if(cljs.core.truth_(inst_66371)){
var statearr_66465_68303 = state_66394__$1;
(statearr_66465_68303[(1)] = (24));

} else {
var statearr_66466_68304 = state_66394__$1;
(statearr_66466_68304[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (19))){
var inst_66366 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66467_68305 = state_66394__$1;
(statearr_66467_68305[(2)] = inst_66366);

(statearr_66467_68305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (11))){
var inst_66340 = (state_66394[(14)]);
var inst_66350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_66340);
var state_66394__$1 = state_66394;
var statearr_66468_68306 = state_66394__$1;
(statearr_66468_68306[(2)] = inst_66350);

(statearr_66468_68306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (9))){
var inst_66340 = (state_66394[(14)]);
var inst_66331 = (state_66394[(16)]);
var inst_66357 = (state_66394[(19)]);
var inst_66357__$1 = (inst_66331.cljs$core$IFn$_invoke$arity$1 ? inst_66331.cljs$core$IFn$_invoke$arity$1(inst_66340) : inst_66331.call(null,inst_66340));
var state_66394__$1 = (function (){var statearr_66469 = state_66394;
(statearr_66469[(19)] = inst_66357__$1);

return statearr_66469;
})();
if(cljs.core.truth_(inst_66357__$1)){
var statearr_66470_68307 = state_66394__$1;
(statearr_66470_68307[(1)] = (14));

} else {
var statearr_66471_68308 = state_66394__$1;
(statearr_66471_68308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (5))){
var inst_66341 = (state_66394[(13)]);
var state_66394__$1 = state_66394;
var statearr_66472_68309 = state_66394__$1;
(statearr_66472_68309[(2)] = inst_66341);

(statearr_66472_68309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (14))){
var inst_66357 = (state_66394[(19)]);
var state_66394__$1 = state_66394;
var statearr_66473_68310 = state_66394__$1;
(statearr_66473_68310[(2)] = inst_66357);

(statearr_66473_68310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (26))){
var inst_66376 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66474_68311 = state_66394__$1;
(statearr_66474_68311[(2)] = inst_66376);

(statearr_66474_68311[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (16))){
var inst_66368 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
if(cljs.core.truth_(inst_66368)){
var statearr_66475_68312 = state_66394__$1;
(statearr_66475_68312[(1)] = (20));

} else {
var statearr_66476_68313 = state_66394__$1;
(statearr_66476_68313[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (10))){
var inst_66382 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66480_68314 = state_66394__$1;
(statearr_66480_68314[(2)] = inst_66382);

(statearr_66480_68314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (18))){
var inst_66360 = (state_66394[(15)]);
var state_66394__$1 = state_66394;
var statearr_66481_68315 = state_66394__$1;
(statearr_66481_68315[(2)] = inst_66360);

(statearr_66481_68315[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66401 === (8))){
var inst_66339 = (state_66394[(7)]);
var inst_66348 = (inst_66339 == null);
var state_66394__$1 = state_66394;
if(cljs.core.truth_(inst_66348)){
var statearr_66483_68316 = state_66394__$1;
(statearr_66483_68316[(1)] = (11));

} else {
var statearr_66485_68317 = state_66394__$1;
(statearr_66485_68317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__64462__auto__ = null;
var cljs$core$async$mix_$_state_machine__64462__auto____0 = (function (){
var statearr_66486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66486[(0)] = cljs$core$async$mix_$_state_machine__64462__auto__);

(statearr_66486[(1)] = (1));

return statearr_66486;
});
var cljs$core$async$mix_$_state_machine__64462__auto____1 = (function (state_66394){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66394);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66487){if((e66487 instanceof Object)){
var ex__64465__auto__ = e66487;
var statearr_66488_68318 = state_66394;
(statearr_66488_68318[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68322 = state_66394;
state_66394 = G__68322;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__64462__auto__ = function(state_66394){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__64462__auto____1.call(this,state_66394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__64462__auto____0;
cljs$core$async$mix_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__64462__auto____1;
return cljs$core$async$mix_$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66489 = f__65004__auto__();
(statearr_66489[(6)] = c__65003__auto___68274);

return statearr_66489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_68323 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_68323(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_68324 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_68324(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_68325 = (function() {
var G__68326 = null;
var G__68326__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__68326__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__68326 = function(p,v){
switch(arguments.length){
case 1:
return G__68326__1.call(this,p);
case 2:
return G__68326__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68326.cljs$core$IFn$_invoke$arity$1 = G__68326__1;
G__68326.cljs$core$IFn$_invoke$arity$2 = G__68326__2;
return G__68326;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__66508 = arguments.length;
switch (G__66508) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_68325(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_68325(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__66518 = arguments.length;
switch (G__66518) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__66515_SHARP_){
if(cljs.core.truth_((p1__66515_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__66515_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__66515_SHARP_.call(null,topic)))){
return p1__66515_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66515_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66524 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta66525){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta66525 = meta66525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66526,meta66525__$1){
var self__ = this;
var _66526__$1 = this;
return (new cljs.core.async.t_cljs$core$async66524(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta66525__$1));
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66526){
var self__ = this;
var _66526__$1 = this;
return self__.meta66525;
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async66524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async66524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta66525","meta66525",-1831084345,null)], null);
}));

(cljs.core.async.t_cljs$core$async66524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66524");

(cljs.core.async.t_cljs$core$async66524.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66524.
 */
cljs.core.async.__GT_t_cljs$core$async66524 = (function cljs$core$async$__GT_t_cljs$core$async66524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66525){
return (new cljs.core.async.t_cljs$core$async66524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66525));
});

}

return (new cljs.core.async.t_cljs$core$async66524(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__65003__auto___68347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66604){
var state_val_66605 = (state_66604[(1)]);
if((state_val_66605 === (7))){
var inst_66600 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66609_68348 = state_66604__$1;
(statearr_66609_68348[(2)] = inst_66600);

(statearr_66609_68348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (20))){
var state_66604__$1 = state_66604;
var statearr_66614_68349 = state_66604__$1;
(statearr_66614_68349[(2)] = null);

(statearr_66614_68349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (1))){
var state_66604__$1 = state_66604;
var statearr_66618_68350 = state_66604__$1;
(statearr_66618_68350[(2)] = null);

(statearr_66618_68350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (24))){
var inst_66583 = (state_66604[(7)]);
var inst_66592 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_66583);
var state_66604__$1 = state_66604;
var statearr_66622_68351 = state_66604__$1;
(statearr_66622_68351[(2)] = inst_66592);

(statearr_66622_68351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (4))){
var inst_66532 = (state_66604[(8)]);
var inst_66532__$1 = (state_66604[(2)]);
var inst_66533 = (inst_66532__$1 == null);
var state_66604__$1 = (function (){var statearr_66623 = state_66604;
(statearr_66623[(8)] = inst_66532__$1);

return statearr_66623;
})();
if(cljs.core.truth_(inst_66533)){
var statearr_66624_68352 = state_66604__$1;
(statearr_66624_68352[(1)] = (5));

} else {
var statearr_66625_68353 = state_66604__$1;
(statearr_66625_68353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (15))){
var inst_66577 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66626_68354 = state_66604__$1;
(statearr_66626_68354[(2)] = inst_66577);

(statearr_66626_68354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (21))){
var inst_66597 = (state_66604[(2)]);
var state_66604__$1 = (function (){var statearr_66634 = state_66604;
(statearr_66634[(9)] = inst_66597);

return statearr_66634;
})();
var statearr_66635_68355 = state_66604__$1;
(statearr_66635_68355[(2)] = null);

(statearr_66635_68355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (13))){
var inst_66559 = (state_66604[(10)]);
var inst_66561 = cljs.core.chunked_seq_QMARK_(inst_66559);
var state_66604__$1 = state_66604;
if(inst_66561){
var statearr_66639_68356 = state_66604__$1;
(statearr_66639_68356[(1)] = (16));

} else {
var statearr_66640_68357 = state_66604__$1;
(statearr_66640_68357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (22))){
var inst_66589 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
if(cljs.core.truth_(inst_66589)){
var statearr_66641_68359 = state_66604__$1;
(statearr_66641_68359[(1)] = (23));

} else {
var statearr_66642_68360 = state_66604__$1;
(statearr_66642_68360[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (6))){
var inst_66585 = (state_66604[(11)]);
var inst_66532 = (state_66604[(8)]);
var inst_66583 = (state_66604[(7)]);
var inst_66583__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_66532) : topic_fn.call(null,inst_66532));
var inst_66584 = cljs.core.deref(mults);
var inst_66585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66584,inst_66583__$1);
var state_66604__$1 = (function (){var statearr_66648 = state_66604;
(statearr_66648[(11)] = inst_66585__$1);

(statearr_66648[(7)] = inst_66583__$1);

return statearr_66648;
})();
if(cljs.core.truth_(inst_66585__$1)){
var statearr_66653_68362 = state_66604__$1;
(statearr_66653_68362[(1)] = (19));

} else {
var statearr_66657_68364 = state_66604__$1;
(statearr_66657_68364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (25))){
var inst_66594 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66658_68365 = state_66604__$1;
(statearr_66658_68365[(2)] = inst_66594);

(statearr_66658_68365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (17))){
var inst_66559 = (state_66604[(10)]);
var inst_66568 = cljs.core.first(inst_66559);
var inst_66569 = cljs.core.async.muxch_STAR_(inst_66568);
var inst_66570 = cljs.core.async.close_BANG_(inst_66569);
var inst_66571 = cljs.core.next(inst_66559);
var inst_66542 = inst_66571;
var inst_66543 = null;
var inst_66544 = (0);
var inst_66545 = (0);
var state_66604__$1 = (function (){var statearr_66666 = state_66604;
(statearr_66666[(12)] = inst_66542);

(statearr_66666[(13)] = inst_66544);

(statearr_66666[(14)] = inst_66570);

(statearr_66666[(15)] = inst_66543);

(statearr_66666[(16)] = inst_66545);

return statearr_66666;
})();
var statearr_66671_68368 = state_66604__$1;
(statearr_66671_68368[(2)] = null);

(statearr_66671_68368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (3))){
var inst_66602 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66604__$1,inst_66602);
} else {
if((state_val_66605 === (12))){
var inst_66579 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66672_68371 = state_66604__$1;
(statearr_66672_68371[(2)] = inst_66579);

(statearr_66672_68371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (2))){
var state_66604__$1 = state_66604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66604__$1,(4),ch);
} else {
if((state_val_66605 === (23))){
var state_66604__$1 = state_66604;
var statearr_66675_68375 = state_66604__$1;
(statearr_66675_68375[(2)] = null);

(statearr_66675_68375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (19))){
var inst_66585 = (state_66604[(11)]);
var inst_66532 = (state_66604[(8)]);
var inst_66587 = cljs.core.async.muxch_STAR_(inst_66585);
var state_66604__$1 = state_66604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66604__$1,(22),inst_66587,inst_66532);
} else {
if((state_val_66605 === (11))){
var inst_66542 = (state_66604[(12)]);
var inst_66559 = (state_66604[(10)]);
var inst_66559__$1 = cljs.core.seq(inst_66542);
var state_66604__$1 = (function (){var statearr_66676 = state_66604;
(statearr_66676[(10)] = inst_66559__$1);

return statearr_66676;
})();
if(inst_66559__$1){
var statearr_66677_68382 = state_66604__$1;
(statearr_66677_68382[(1)] = (13));

} else {
var statearr_66678_68385 = state_66604__$1;
(statearr_66678_68385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (9))){
var inst_66581 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66679_68386 = state_66604__$1;
(statearr_66679_68386[(2)] = inst_66581);

(statearr_66679_68386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (5))){
var inst_66539 = cljs.core.deref(mults);
var inst_66540 = cljs.core.vals(inst_66539);
var inst_66541 = cljs.core.seq(inst_66540);
var inst_66542 = inst_66541;
var inst_66543 = null;
var inst_66544 = (0);
var inst_66545 = (0);
var state_66604__$1 = (function (){var statearr_66684 = state_66604;
(statearr_66684[(12)] = inst_66542);

(statearr_66684[(13)] = inst_66544);

(statearr_66684[(15)] = inst_66543);

(statearr_66684[(16)] = inst_66545);

return statearr_66684;
})();
var statearr_66685_68388 = state_66604__$1;
(statearr_66685_68388[(2)] = null);

(statearr_66685_68388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (14))){
var state_66604__$1 = state_66604;
var statearr_66689_68389 = state_66604__$1;
(statearr_66689_68389[(2)] = null);

(statearr_66689_68389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (16))){
var inst_66559 = (state_66604[(10)]);
var inst_66563 = cljs.core.chunk_first(inst_66559);
var inst_66564 = cljs.core.chunk_rest(inst_66559);
var inst_66565 = cljs.core.count(inst_66563);
var inst_66542 = inst_66564;
var inst_66543 = inst_66563;
var inst_66544 = inst_66565;
var inst_66545 = (0);
var state_66604__$1 = (function (){var statearr_66690 = state_66604;
(statearr_66690[(12)] = inst_66542);

(statearr_66690[(13)] = inst_66544);

(statearr_66690[(15)] = inst_66543);

(statearr_66690[(16)] = inst_66545);

return statearr_66690;
})();
var statearr_66691_68390 = state_66604__$1;
(statearr_66691_68390[(2)] = null);

(statearr_66691_68390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (10))){
var inst_66542 = (state_66604[(12)]);
var inst_66544 = (state_66604[(13)]);
var inst_66543 = (state_66604[(15)]);
var inst_66545 = (state_66604[(16)]);
var inst_66553 = cljs.core._nth(inst_66543,inst_66545);
var inst_66554 = cljs.core.async.muxch_STAR_(inst_66553);
var inst_66555 = cljs.core.async.close_BANG_(inst_66554);
var inst_66556 = (inst_66545 + (1));
var tmp66686 = inst_66542;
var tmp66687 = inst_66544;
var tmp66688 = inst_66543;
var inst_66542__$1 = tmp66686;
var inst_66543__$1 = tmp66688;
var inst_66544__$1 = tmp66687;
var inst_66545__$1 = inst_66556;
var state_66604__$1 = (function (){var statearr_66692 = state_66604;
(statearr_66692[(12)] = inst_66542__$1);

(statearr_66692[(13)] = inst_66544__$1);

(statearr_66692[(15)] = inst_66543__$1);

(statearr_66692[(17)] = inst_66555);

(statearr_66692[(16)] = inst_66545__$1);

return statearr_66692;
})();
var statearr_66693_68393 = state_66604__$1;
(statearr_66693_68393[(2)] = null);

(statearr_66693_68393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (18))){
var inst_66574 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66694_68394 = state_66604__$1;
(statearr_66694_68394[(2)] = inst_66574);

(statearr_66694_68394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (8))){
var inst_66544 = (state_66604[(13)]);
var inst_66545 = (state_66604[(16)]);
var inst_66550 = (inst_66545 < inst_66544);
var inst_66551 = inst_66550;
var state_66604__$1 = state_66604;
if(cljs.core.truth_(inst_66551)){
var statearr_66695_68395 = state_66604__$1;
(statearr_66695_68395[(1)] = (10));

} else {
var statearr_66696_68396 = state_66604__$1;
(statearr_66696_68396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_66698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66698[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_66698[(1)] = (1));

return statearr_66698;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_66604){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66604);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66699){if((e66699 instanceof Object)){
var ex__64465__auto__ = e66699;
var statearr_66700_68401 = state_66604;
(statearr_66700_68401[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68402 = state_66604;
state_66604 = G__68402;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_66604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_66604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66703 = f__65004__auto__();
(statearr_66703[(6)] = c__65003__auto___68347);

return statearr_66703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__66705 = arguments.length;
switch (G__66705) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__66711 = arguments.length;
switch (G__66711) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__66715 = arguments.length;
switch (G__66715) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__65003__auto___68412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66774){
var state_val_66775 = (state_66774[(1)]);
if((state_val_66775 === (7))){
var state_66774__$1 = state_66774;
var statearr_66776_68413 = state_66774__$1;
(statearr_66776_68413[(2)] = null);

(statearr_66776_68413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (1))){
var state_66774__$1 = state_66774;
var statearr_66777_68414 = state_66774__$1;
(statearr_66777_68414[(2)] = null);

(statearr_66777_68414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (4))){
var inst_66738 = (state_66774[(7)]);
var inst_66740 = (inst_66738 < cnt);
var state_66774__$1 = state_66774;
if(cljs.core.truth_(inst_66740)){
var statearr_66778_68416 = state_66774__$1;
(statearr_66778_68416[(1)] = (6));

} else {
var statearr_66779_68417 = state_66774__$1;
(statearr_66779_68417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (15))){
var inst_66770 = (state_66774[(2)]);
var state_66774__$1 = state_66774;
var statearr_66782_68418 = state_66774__$1;
(statearr_66782_68418[(2)] = inst_66770);

(statearr_66782_68418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (13))){
var inst_66763 = cljs.core.async.close_BANG_(out);
var state_66774__$1 = state_66774;
var statearr_66783_68422 = state_66774__$1;
(statearr_66783_68422[(2)] = inst_66763);

(statearr_66783_68422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (6))){
var state_66774__$1 = state_66774;
var statearr_66784_68423 = state_66774__$1;
(statearr_66784_68423[(2)] = null);

(statearr_66784_68423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (3))){
var inst_66772 = (state_66774[(2)]);
var state_66774__$1 = state_66774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66774__$1,inst_66772);
} else {
if((state_val_66775 === (12))){
var inst_66760 = (state_66774[(8)]);
var inst_66760__$1 = (state_66774[(2)]);
var inst_66761 = cljs.core.some(cljs.core.nil_QMARK_,inst_66760__$1);
var state_66774__$1 = (function (){var statearr_66799 = state_66774;
(statearr_66799[(8)] = inst_66760__$1);

return statearr_66799;
})();
if(cljs.core.truth_(inst_66761)){
var statearr_66800_68427 = state_66774__$1;
(statearr_66800_68427[(1)] = (13));

} else {
var statearr_66801_68428 = state_66774__$1;
(statearr_66801_68428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (2))){
var inst_66737 = cljs.core.reset_BANG_(dctr,cnt);
var inst_66738 = (0);
var state_66774__$1 = (function (){var statearr_66802 = state_66774;
(statearr_66802[(9)] = inst_66737);

(statearr_66802[(7)] = inst_66738);

return statearr_66802;
})();
var statearr_66803_68430 = state_66774__$1;
(statearr_66803_68430[(2)] = null);

(statearr_66803_68430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (11))){
var inst_66738 = (state_66774[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66774,(10),Object,null,(9));
var inst_66747 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_66738) : chs__$1.call(null,inst_66738));
var inst_66748 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_66738) : done.call(null,inst_66738));
var inst_66749 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_66747,inst_66748);
var state_66774__$1 = state_66774;
var statearr_66805_68431 = state_66774__$1;
(statearr_66805_68431[(2)] = inst_66749);


cljs.core.async.impl.ioc_helpers.process_exception(state_66774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (9))){
var inst_66738 = (state_66774[(7)]);
var inst_66751 = (state_66774[(2)]);
var inst_66752 = (inst_66738 + (1));
var inst_66738__$1 = inst_66752;
var state_66774__$1 = (function (){var statearr_66806 = state_66774;
(statearr_66806[(10)] = inst_66751);

(statearr_66806[(7)] = inst_66738__$1);

return statearr_66806;
})();
var statearr_66807_68437 = state_66774__$1;
(statearr_66807_68437[(2)] = null);

(statearr_66807_68437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (5))){
var inst_66758 = (state_66774[(2)]);
var state_66774__$1 = (function (){var statearr_66810 = state_66774;
(statearr_66810[(11)] = inst_66758);

return statearr_66810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66774__$1,(12),dchan);
} else {
if((state_val_66775 === (14))){
var inst_66760 = (state_66774[(8)]);
var inst_66765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_66760);
var state_66774__$1 = state_66774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66774__$1,(16),out,inst_66765);
} else {
if((state_val_66775 === (16))){
var inst_66767 = (state_66774[(2)]);
var state_66774__$1 = (function (){var statearr_66811 = state_66774;
(statearr_66811[(12)] = inst_66767);

return statearr_66811;
})();
var statearr_66812_68441 = state_66774__$1;
(statearr_66812_68441[(2)] = null);

(statearr_66812_68441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (10))){
var inst_66742 = (state_66774[(2)]);
var inst_66743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_66774__$1 = (function (){var statearr_66813 = state_66774;
(statearr_66813[(13)] = inst_66742);

return statearr_66813;
})();
var statearr_66814_68443 = state_66774__$1;
(statearr_66814_68443[(2)] = inst_66743);


cljs.core.async.impl.ioc_helpers.process_exception(state_66774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66775 === (8))){
var inst_66756 = (state_66774[(2)]);
var state_66774__$1 = state_66774;
var statearr_66815_68445 = state_66774__$1;
(statearr_66815_68445[(2)] = inst_66756);

(statearr_66815_68445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_66816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66816[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_66816[(1)] = (1));

return statearr_66816;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_66774){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66774);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66817){if((e66817 instanceof Object)){
var ex__64465__auto__ = e66817;
var statearr_66818_68451 = state_66774;
(statearr_66818_68451[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68452 = state_66774;
state_66774 = G__68452;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_66774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_66774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66819 = f__65004__auto__();
(statearr_66819[(6)] = c__65003__auto___68412);

return statearr_66819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__66824 = arguments.length;
switch (G__66824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66865){
var state_val_66866 = (state_66865[(1)]);
if((state_val_66866 === (7))){
var inst_66838 = (state_66865[(7)]);
var inst_66837 = (state_66865[(8)]);
var inst_66837__$1 = (state_66865[(2)]);
var inst_66838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66837__$1,(0),null);
var inst_66839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66837__$1,(1),null);
var inst_66840 = (inst_66838__$1 == null);
var state_66865__$1 = (function (){var statearr_66868 = state_66865;
(statearr_66868[(7)] = inst_66838__$1);

(statearr_66868[(8)] = inst_66837__$1);

(statearr_66868[(9)] = inst_66839);

return statearr_66868;
})();
if(cljs.core.truth_(inst_66840)){
var statearr_66878_68460 = state_66865__$1;
(statearr_66878_68460[(1)] = (8));

} else {
var statearr_66879_68462 = state_66865__$1;
(statearr_66879_68462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (1))){
var inst_66827 = cljs.core.vec(chs);
var inst_66828 = inst_66827;
var state_66865__$1 = (function (){var statearr_66880 = state_66865;
(statearr_66880[(10)] = inst_66828);

return statearr_66880;
})();
var statearr_66881_68464 = state_66865__$1;
(statearr_66881_68464[(2)] = null);

(statearr_66881_68464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (4))){
var inst_66828 = (state_66865[(10)]);
var state_66865__$1 = state_66865;
return cljs.core.async.ioc_alts_BANG_(state_66865__$1,(7),inst_66828);
} else {
if((state_val_66866 === (6))){
var inst_66854 = (state_66865[(2)]);
var state_66865__$1 = state_66865;
var statearr_66886_68467 = state_66865__$1;
(statearr_66886_68467[(2)] = inst_66854);

(statearr_66886_68467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (3))){
var inst_66856 = (state_66865[(2)]);
var state_66865__$1 = state_66865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66865__$1,inst_66856);
} else {
if((state_val_66866 === (2))){
var inst_66828 = (state_66865[(10)]);
var inst_66830 = cljs.core.count(inst_66828);
var inst_66831 = (inst_66830 > (0));
var state_66865__$1 = state_66865;
if(cljs.core.truth_(inst_66831)){
var statearr_66895_68470 = state_66865__$1;
(statearr_66895_68470[(1)] = (4));

} else {
var statearr_66896_68472 = state_66865__$1;
(statearr_66896_68472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (11))){
var inst_66828 = (state_66865[(10)]);
var inst_66847 = (state_66865[(2)]);
var tmp66887 = inst_66828;
var inst_66828__$1 = tmp66887;
var state_66865__$1 = (function (){var statearr_66898 = state_66865;
(statearr_66898[(11)] = inst_66847);

(statearr_66898[(10)] = inst_66828__$1);

return statearr_66898;
})();
var statearr_66899_68477 = state_66865__$1;
(statearr_66899_68477[(2)] = null);

(statearr_66899_68477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (9))){
var inst_66838 = (state_66865[(7)]);
var state_66865__$1 = state_66865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66865__$1,(11),out,inst_66838);
} else {
if((state_val_66866 === (5))){
var inst_66852 = cljs.core.async.close_BANG_(out);
var state_66865__$1 = state_66865;
var statearr_66902_68482 = state_66865__$1;
(statearr_66902_68482[(2)] = inst_66852);

(statearr_66902_68482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (10))){
var inst_66850 = (state_66865[(2)]);
var state_66865__$1 = state_66865;
var statearr_66904_68483 = state_66865__$1;
(statearr_66904_68483[(2)] = inst_66850);

(statearr_66904_68483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66866 === (8))){
var inst_66838 = (state_66865[(7)]);
var inst_66837 = (state_66865[(8)]);
var inst_66839 = (state_66865[(9)]);
var inst_66828 = (state_66865[(10)]);
var inst_66842 = (function (){var cs = inst_66828;
var vec__66833 = inst_66837;
var v = inst_66838;
var c = inst_66839;
return (function (p1__66822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__66822_SHARP_);
});
})();
var inst_66843 = cljs.core.filterv(inst_66842,inst_66828);
var inst_66828__$1 = inst_66843;
var state_66865__$1 = (function (){var statearr_66910 = state_66865;
(statearr_66910[(10)] = inst_66828__$1);

return statearr_66910;
})();
var statearr_66911_68487 = state_66865__$1;
(statearr_66911_68487[(2)] = null);

(statearr_66911_68487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_66912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66912[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_66912[(1)] = (1));

return statearr_66912;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_66865){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66865);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66913){if((e66913 instanceof Object)){
var ex__64465__auto__ = e66913;
var statearr_66918_68496 = state_66865;
(statearr_66918_68496[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68497 = state_66865;
state_66865 = G__68497;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_66865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_66865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66922 = f__65004__auto__();
(statearr_66922[(6)] = c__65003__auto___68456);

return statearr_66922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__66925 = arguments.length;
switch (G__66925) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_66961){
var state_val_66962 = (state_66961[(1)]);
if((state_val_66962 === (7))){
var inst_66943 = (state_66961[(7)]);
var inst_66943__$1 = (state_66961[(2)]);
var inst_66944 = (inst_66943__$1 == null);
var inst_66945 = cljs.core.not(inst_66944);
var state_66961__$1 = (function (){var statearr_66966 = state_66961;
(statearr_66966[(7)] = inst_66943__$1);

return statearr_66966;
})();
if(inst_66945){
var statearr_66967_68511 = state_66961__$1;
(statearr_66967_68511[(1)] = (8));

} else {
var statearr_66968_68512 = state_66961__$1;
(statearr_66968_68512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (1))){
var inst_66930 = (0);
var state_66961__$1 = (function (){var statearr_66969 = state_66961;
(statearr_66969[(8)] = inst_66930);

return statearr_66969;
})();
var statearr_66970_68513 = state_66961__$1;
(statearr_66970_68513[(2)] = null);

(statearr_66970_68513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (4))){
var state_66961__$1 = state_66961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66961__$1,(7),ch);
} else {
if((state_val_66962 === (6))){
var inst_66956 = (state_66961[(2)]);
var state_66961__$1 = state_66961;
var statearr_66973_68518 = state_66961__$1;
(statearr_66973_68518[(2)] = inst_66956);

(statearr_66973_68518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (3))){
var inst_66958 = (state_66961[(2)]);
var inst_66959 = cljs.core.async.close_BANG_(out);
var state_66961__$1 = (function (){var statearr_66974 = state_66961;
(statearr_66974[(9)] = inst_66958);

return statearr_66974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66961__$1,inst_66959);
} else {
if((state_val_66962 === (2))){
var inst_66930 = (state_66961[(8)]);
var inst_66933 = (inst_66930 < n);
var state_66961__$1 = state_66961;
if(cljs.core.truth_(inst_66933)){
var statearr_66977_68525 = state_66961__$1;
(statearr_66977_68525[(1)] = (4));

} else {
var statearr_66978_68526 = state_66961__$1;
(statearr_66978_68526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (11))){
var inst_66930 = (state_66961[(8)]);
var inst_66948 = (state_66961[(2)]);
var inst_66949 = (inst_66930 + (1));
var inst_66930__$1 = inst_66949;
var state_66961__$1 = (function (){var statearr_66982 = state_66961;
(statearr_66982[(10)] = inst_66948);

(statearr_66982[(8)] = inst_66930__$1);

return statearr_66982;
})();
var statearr_66984_68527 = state_66961__$1;
(statearr_66984_68527[(2)] = null);

(statearr_66984_68527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (9))){
var state_66961__$1 = state_66961;
var statearr_66985_68528 = state_66961__$1;
(statearr_66985_68528[(2)] = null);

(statearr_66985_68528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (5))){
var state_66961__$1 = state_66961;
var statearr_66990_68530 = state_66961__$1;
(statearr_66990_68530[(2)] = null);

(statearr_66990_68530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (10))){
var inst_66953 = (state_66961[(2)]);
var state_66961__$1 = state_66961;
var statearr_66992_68534 = state_66961__$1;
(statearr_66992_68534[(2)] = inst_66953);

(statearr_66992_68534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66962 === (8))){
var inst_66943 = (state_66961[(7)]);
var state_66961__$1 = state_66961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66961__$1,(11),out,inst_66943);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_66994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66994[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_66994[(1)] = (1));

return statearr_66994;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_66961){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_66961);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e66995){if((e66995 instanceof Object)){
var ex__64465__auto__ = e66995;
var statearr_66996_68538 = state_66961;
(statearr_66996_68538[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68539 = state_66961;
state_66961 = G__68539;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_66961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_66961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_66997 = f__65004__auto__();
(statearr_66997[(6)] = c__65003__auto___68507);

return statearr_66997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66999 = (function (f,ch,meta67000){
this.f = f;
this.ch = ch;
this.meta67000 = meta67000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67001,meta67000__$1){
var self__ = this;
var _67001__$1 = this;
return (new cljs.core.async.t_cljs$core$async66999(self__.f,self__.ch,meta67000__$1));
}));

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67001){
var self__ = this;
var _67001__$1 = this;
return self__.meta67000;
}));

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67009 = (function (f,ch,meta67000,_,fn1,meta67010){
this.f = f;
this.ch = ch;
this.meta67000 = meta67000;
this._ = _;
this.fn1 = fn1;
this.meta67010 = meta67010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67011,meta67010__$1){
var self__ = this;
var _67011__$1 = this;
return (new cljs.core.async.t_cljs$core$async67009(self__.f,self__.ch,self__.meta67000,self__._,self__.fn1,meta67010__$1));
}));

(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67011){
var self__ = this;
var _67011__$1 = this;
return self__.meta67010;
}));

(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async67009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__66998_SHARP_){
var G__67025 = (((p1__66998_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__66998_SHARP_) : self__.f.call(null,p1__66998_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__67025) : f1.call(null,G__67025));
});
}));

(cljs.core.async.t_cljs$core$async67009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67000","meta67000",-1136300514,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66999","cljs.core.async/t_cljs$core$async66999",-405235112,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta67010","meta67010",500730853,null)], null);
}));

(cljs.core.async.t_cljs$core$async67009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67009");

(cljs.core.async.t_cljs$core$async67009.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async67009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67009.
 */
cljs.core.async.__GT_t_cljs$core$async67009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async67009(f__$1,ch__$1,meta67000__$1,___$2,fn1__$1,meta67010){
return (new cljs.core.async.t_cljs$core$async67009(f__$1,ch__$1,meta67000__$1,___$2,fn1__$1,meta67010));
});

}

return (new cljs.core.async.t_cljs$core$async67009(self__.f,self__.ch,self__.meta67000,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__67057 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67057) : self__.f.call(null,G__67057));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async66999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67000","meta67000",-1136300514,null)], null);
}));

(cljs.core.async.t_cljs$core$async66999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66999");

(cljs.core.async.t_cljs$core$async66999.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66999.
 */
cljs.core.async.__GT_t_cljs$core$async66999 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66999(f__$1,ch__$1,meta67000){
return (new cljs.core.async.t_cljs$core$async66999(f__$1,ch__$1,meta67000));
});

}

return (new cljs.core.async.t_cljs$core$async66999(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67085 = (function (f,ch,meta67086){
this.f = f;
this.ch = ch;
this.meta67086 = meta67086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67087,meta67086__$1){
var self__ = this;
var _67087__$1 = this;
return (new cljs.core.async.t_cljs$core$async67085(self__.f,self__.ch,meta67086__$1));
}));

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67087){
var self__ = this;
var _67087__$1 = this;
return self__.meta67086;
}));

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async67085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67086","meta67086",-721453375,null)], null);
}));

(cljs.core.async.t_cljs$core$async67085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67085");

(cljs.core.async.t_cljs$core$async67085.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async67085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67085.
 */
cljs.core.async.__GT_t_cljs$core$async67085 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async67085(f__$1,ch__$1,meta67086){
return (new cljs.core.async.t_cljs$core$async67085(f__$1,ch__$1,meta67086));
});

}

return (new cljs.core.async.t_cljs$core$async67085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67122 = (function (p,ch,meta67123){
this.p = p;
this.ch = ch;
this.meta67123 = meta67123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67124,meta67123__$1){
var self__ = this;
var _67124__$1 = this;
return (new cljs.core.async.t_cljs$core$async67122(self__.p,self__.ch,meta67123__$1));
}));

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67124){
var self__ = this;
var _67124__$1 = this;
return self__.meta67123;
}));

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async67122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta67123","meta67123",1816742206,null)], null);
}));

(cljs.core.async.t_cljs$core$async67122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67122");

(cljs.core.async.t_cljs$core$async67122.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async67122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67122.
 */
cljs.core.async.__GT_t_cljs$core$async67122 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async67122(p__$1,ch__$1,meta67123){
return (new cljs.core.async.t_cljs$core$async67122(p__$1,ch__$1,meta67123));
});

}

return (new cljs.core.async.t_cljs$core$async67122(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__67145 = arguments.length;
switch (G__67145) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_67176){
var state_val_67177 = (state_67176[(1)]);
if((state_val_67177 === (7))){
var inst_67172 = (state_67176[(2)]);
var state_67176__$1 = state_67176;
var statearr_67178_68592 = state_67176__$1;
(statearr_67178_68592[(2)] = inst_67172);

(statearr_67178_68592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (1))){
var state_67176__$1 = state_67176;
var statearr_67179_68595 = state_67176__$1;
(statearr_67179_68595[(2)] = null);

(statearr_67179_68595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (4))){
var inst_67155 = (state_67176[(7)]);
var inst_67155__$1 = (state_67176[(2)]);
var inst_67156 = (inst_67155__$1 == null);
var state_67176__$1 = (function (){var statearr_67180 = state_67176;
(statearr_67180[(7)] = inst_67155__$1);

return statearr_67180;
})();
if(cljs.core.truth_(inst_67156)){
var statearr_67182_68597 = state_67176__$1;
(statearr_67182_68597[(1)] = (5));

} else {
var statearr_67183_68598 = state_67176__$1;
(statearr_67183_68598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (6))){
var inst_67155 = (state_67176[(7)]);
var inst_67160 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_67155) : p.call(null,inst_67155));
var state_67176__$1 = state_67176;
if(cljs.core.truth_(inst_67160)){
var statearr_67184_68600 = state_67176__$1;
(statearr_67184_68600[(1)] = (8));

} else {
var statearr_67185_68602 = state_67176__$1;
(statearr_67185_68602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (3))){
var inst_67174 = (state_67176[(2)]);
var state_67176__$1 = state_67176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67176__$1,inst_67174);
} else {
if((state_val_67177 === (2))){
var state_67176__$1 = state_67176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67176__$1,(4),ch);
} else {
if((state_val_67177 === (11))){
var inst_67163 = (state_67176[(2)]);
var state_67176__$1 = state_67176;
var statearr_67189_68606 = state_67176__$1;
(statearr_67189_68606[(2)] = inst_67163);

(statearr_67189_68606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (9))){
var state_67176__$1 = state_67176;
var statearr_67190_68610 = state_67176__$1;
(statearr_67190_68610[(2)] = null);

(statearr_67190_68610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (5))){
var inst_67158 = cljs.core.async.close_BANG_(out);
var state_67176__$1 = state_67176;
var statearr_67191_68616 = state_67176__$1;
(statearr_67191_68616[(2)] = inst_67158);

(statearr_67191_68616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (10))){
var inst_67166 = (state_67176[(2)]);
var state_67176__$1 = (function (){var statearr_67192 = state_67176;
(statearr_67192[(8)] = inst_67166);

return statearr_67192;
})();
var statearr_67193_68619 = state_67176__$1;
(statearr_67193_68619[(2)] = null);

(statearr_67193_68619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67177 === (8))){
var inst_67155 = (state_67176[(7)]);
var state_67176__$1 = state_67176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67176__$1,(11),out,inst_67155);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_67194 = [null,null,null,null,null,null,null,null,null];
(statearr_67194[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_67194[(1)] = (1));

return statearr_67194;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_67176){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_67176);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e67195){if((e67195 instanceof Object)){
var ex__64465__auto__ = e67195;
var statearr_67196_68630 = state_67176;
(statearr_67196_68630[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68634 = state_67176;
state_67176 = G__68634;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_67176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_67176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_67197 = f__65004__auto__();
(statearr_67197[(6)] = c__65003__auto___68590);

return statearr_67197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__67199 = arguments.length;
switch (G__67199) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_67262){
var state_val_67263 = (state_67262[(1)]);
if((state_val_67263 === (7))){
var inst_67257 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
var statearr_67264_68649 = state_67262__$1;
(statearr_67264_68649[(2)] = inst_67257);

(statearr_67264_68649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (20))){
var inst_67227 = (state_67262[(7)]);
var inst_67238 = (state_67262[(2)]);
var inst_67239 = cljs.core.next(inst_67227);
var inst_67213 = inst_67239;
var inst_67214 = null;
var inst_67215 = (0);
var inst_67216 = (0);
var state_67262__$1 = (function (){var statearr_67268 = state_67262;
(statearr_67268[(8)] = inst_67214);

(statearr_67268[(9)] = inst_67238);

(statearr_67268[(10)] = inst_67216);

(statearr_67268[(11)] = inst_67213);

(statearr_67268[(12)] = inst_67215);

return statearr_67268;
})();
var statearr_67269_68650 = state_67262__$1;
(statearr_67269_68650[(2)] = null);

(statearr_67269_68650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (1))){
var state_67262__$1 = state_67262;
var statearr_67270_68654 = state_67262__$1;
(statearr_67270_68654[(2)] = null);

(statearr_67270_68654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (4))){
var inst_67202 = (state_67262[(13)]);
var inst_67202__$1 = (state_67262[(2)]);
var inst_67203 = (inst_67202__$1 == null);
var state_67262__$1 = (function (){var statearr_67271 = state_67262;
(statearr_67271[(13)] = inst_67202__$1);

return statearr_67271;
})();
if(cljs.core.truth_(inst_67203)){
var statearr_67272_68663 = state_67262__$1;
(statearr_67272_68663[(1)] = (5));

} else {
var statearr_67273_68664 = state_67262__$1;
(statearr_67273_68664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (15))){
var state_67262__$1 = state_67262;
var statearr_67280_68668 = state_67262__$1;
(statearr_67280_68668[(2)] = null);

(statearr_67280_68668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (21))){
var state_67262__$1 = state_67262;
var statearr_67281_68672 = state_67262__$1;
(statearr_67281_68672[(2)] = null);

(statearr_67281_68672[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (13))){
var inst_67214 = (state_67262[(8)]);
var inst_67216 = (state_67262[(10)]);
var inst_67213 = (state_67262[(11)]);
var inst_67215 = (state_67262[(12)]);
var inst_67223 = (state_67262[(2)]);
var inst_67224 = (inst_67216 + (1));
var tmp67274 = inst_67214;
var tmp67275 = inst_67213;
var tmp67276 = inst_67215;
var inst_67213__$1 = tmp67275;
var inst_67214__$1 = tmp67274;
var inst_67215__$1 = tmp67276;
var inst_67216__$1 = inst_67224;
var state_67262__$1 = (function (){var statearr_67284 = state_67262;
(statearr_67284[(8)] = inst_67214__$1);

(statearr_67284[(14)] = inst_67223);

(statearr_67284[(10)] = inst_67216__$1);

(statearr_67284[(11)] = inst_67213__$1);

(statearr_67284[(12)] = inst_67215__$1);

return statearr_67284;
})();
var statearr_67285_68676 = state_67262__$1;
(statearr_67285_68676[(2)] = null);

(statearr_67285_68676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (22))){
var state_67262__$1 = state_67262;
var statearr_67286_68677 = state_67262__$1;
(statearr_67286_68677[(2)] = null);

(statearr_67286_68677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (6))){
var inst_67202 = (state_67262[(13)]);
var inst_67211 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_67202) : f.call(null,inst_67202));
var inst_67212 = cljs.core.seq(inst_67211);
var inst_67213 = inst_67212;
var inst_67214 = null;
var inst_67215 = (0);
var inst_67216 = (0);
var state_67262__$1 = (function (){var statearr_67287 = state_67262;
(statearr_67287[(8)] = inst_67214);

(statearr_67287[(10)] = inst_67216);

(statearr_67287[(11)] = inst_67213);

(statearr_67287[(12)] = inst_67215);

return statearr_67287;
})();
var statearr_67288_68683 = state_67262__$1;
(statearr_67288_68683[(2)] = null);

(statearr_67288_68683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (17))){
var inst_67227 = (state_67262[(7)]);
var inst_67231 = cljs.core.chunk_first(inst_67227);
var inst_67232 = cljs.core.chunk_rest(inst_67227);
var inst_67233 = cljs.core.count(inst_67231);
var inst_67213 = inst_67232;
var inst_67214 = inst_67231;
var inst_67215 = inst_67233;
var inst_67216 = (0);
var state_67262__$1 = (function (){var statearr_67292 = state_67262;
(statearr_67292[(8)] = inst_67214);

(statearr_67292[(10)] = inst_67216);

(statearr_67292[(11)] = inst_67213);

(statearr_67292[(12)] = inst_67215);

return statearr_67292;
})();
var statearr_67293_68685 = state_67262__$1;
(statearr_67293_68685[(2)] = null);

(statearr_67293_68685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (3))){
var inst_67259 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67262__$1,inst_67259);
} else {
if((state_val_67263 === (12))){
var inst_67247 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
var statearr_67295_68686 = state_67262__$1;
(statearr_67295_68686[(2)] = inst_67247);

(statearr_67295_68686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (2))){
var state_67262__$1 = state_67262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67262__$1,(4),in$);
} else {
if((state_val_67263 === (23))){
var inst_67255 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
var statearr_67298_68689 = state_67262__$1;
(statearr_67298_68689[(2)] = inst_67255);

(statearr_67298_68689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (19))){
var inst_67242 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
var statearr_67299_68690 = state_67262__$1;
(statearr_67299_68690[(2)] = inst_67242);

(statearr_67299_68690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (11))){
var inst_67227 = (state_67262[(7)]);
var inst_67213 = (state_67262[(11)]);
var inst_67227__$1 = cljs.core.seq(inst_67213);
var state_67262__$1 = (function (){var statearr_67304 = state_67262;
(statearr_67304[(7)] = inst_67227__$1);

return statearr_67304;
})();
if(inst_67227__$1){
var statearr_67305_68691 = state_67262__$1;
(statearr_67305_68691[(1)] = (14));

} else {
var statearr_67306_68692 = state_67262__$1;
(statearr_67306_68692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (9))){
var inst_67249 = (state_67262[(2)]);
var inst_67250 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_67262__$1 = (function (){var statearr_67311 = state_67262;
(statearr_67311[(15)] = inst_67249);

return statearr_67311;
})();
if(cljs.core.truth_(inst_67250)){
var statearr_67312_68695 = state_67262__$1;
(statearr_67312_68695[(1)] = (21));

} else {
var statearr_67313_68700 = state_67262__$1;
(statearr_67313_68700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (5))){
var inst_67205 = cljs.core.async.close_BANG_(out);
var state_67262__$1 = state_67262;
var statearr_67314_68701 = state_67262__$1;
(statearr_67314_68701[(2)] = inst_67205);

(statearr_67314_68701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (14))){
var inst_67227 = (state_67262[(7)]);
var inst_67229 = cljs.core.chunked_seq_QMARK_(inst_67227);
var state_67262__$1 = state_67262;
if(inst_67229){
var statearr_67315_68704 = state_67262__$1;
(statearr_67315_68704[(1)] = (17));

} else {
var statearr_67316_68705 = state_67262__$1;
(statearr_67316_68705[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (16))){
var inst_67245 = (state_67262[(2)]);
var state_67262__$1 = state_67262;
var statearr_67317_68710 = state_67262__$1;
(statearr_67317_68710[(2)] = inst_67245);

(statearr_67317_68710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67263 === (10))){
var inst_67214 = (state_67262[(8)]);
var inst_67216 = (state_67262[(10)]);
var inst_67221 = cljs.core._nth(inst_67214,inst_67216);
var state_67262__$1 = state_67262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67262__$1,(13),out,inst_67221);
} else {
if((state_val_67263 === (18))){
var inst_67227 = (state_67262[(7)]);
var inst_67236 = cljs.core.first(inst_67227);
var state_67262__$1 = state_67262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67262__$1,(20),out,inst_67236);
} else {
if((state_val_67263 === (8))){
var inst_67216 = (state_67262[(10)]);
var inst_67215 = (state_67262[(12)]);
var inst_67218 = (inst_67216 < inst_67215);
var inst_67219 = inst_67218;
var state_67262__$1 = state_67262;
if(cljs.core.truth_(inst_67219)){
var statearr_67318_68731 = state_67262__$1;
(statearr_67318_68731[(1)] = (10));

} else {
var statearr_67319_68732 = state_67262__$1;
(statearr_67319_68732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____0 = (function (){
var statearr_67322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67322[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__);

(statearr_67322[(1)] = (1));

return statearr_67322;
});
var cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____1 = (function (state_67262){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_67262);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e67323){if((e67323 instanceof Object)){
var ex__64465__auto__ = e67323;
var statearr_67324_68737 = state_67262;
(statearr_67324_68737[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68738 = state_67262;
state_67262 = G__68738;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__ = function(state_67262){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____1.call(this,state_67262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__64462__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_67325 = f__65004__auto__();
(statearr_67325[(6)] = c__65003__auto__);

return statearr_67325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__67333 = arguments.length;
switch (G__67333) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__67336 = arguments.length;
switch (G__67336) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__67339 = arguments.length;
switch (G__67339) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_67365){
var state_val_67366 = (state_67365[(1)]);
if((state_val_67366 === (7))){
var inst_67360 = (state_67365[(2)]);
var state_67365__$1 = state_67365;
var statearr_67367_68759 = state_67365__$1;
(statearr_67367_68759[(2)] = inst_67360);

(statearr_67367_68759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (1))){
var inst_67342 = null;
var state_67365__$1 = (function (){var statearr_67372 = state_67365;
(statearr_67372[(7)] = inst_67342);

return statearr_67372;
})();
var statearr_67373_68760 = state_67365__$1;
(statearr_67373_68760[(2)] = null);

(statearr_67373_68760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (4))){
var inst_67345 = (state_67365[(8)]);
var inst_67345__$1 = (state_67365[(2)]);
var inst_67346 = (inst_67345__$1 == null);
var inst_67347 = cljs.core.not(inst_67346);
var state_67365__$1 = (function (){var statearr_67374 = state_67365;
(statearr_67374[(8)] = inst_67345__$1);

return statearr_67374;
})();
if(inst_67347){
var statearr_67375_68761 = state_67365__$1;
(statearr_67375_68761[(1)] = (5));

} else {
var statearr_67376_68762 = state_67365__$1;
(statearr_67376_68762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (6))){
var state_67365__$1 = state_67365;
var statearr_67377_68763 = state_67365__$1;
(statearr_67377_68763[(2)] = null);

(statearr_67377_68763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (3))){
var inst_67362 = (state_67365[(2)]);
var inst_67363 = cljs.core.async.close_BANG_(out);
var state_67365__$1 = (function (){var statearr_67386 = state_67365;
(statearr_67386[(9)] = inst_67362);

return statearr_67386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67365__$1,inst_67363);
} else {
if((state_val_67366 === (2))){
var state_67365__$1 = state_67365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67365__$1,(4),ch);
} else {
if((state_val_67366 === (11))){
var inst_67345 = (state_67365[(8)]);
var inst_67354 = (state_67365[(2)]);
var inst_67342 = inst_67345;
var state_67365__$1 = (function (){var statearr_67387 = state_67365;
(statearr_67387[(7)] = inst_67342);

(statearr_67387[(10)] = inst_67354);

return statearr_67387;
})();
var statearr_67388_68765 = state_67365__$1;
(statearr_67388_68765[(2)] = null);

(statearr_67388_68765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (9))){
var inst_67345 = (state_67365[(8)]);
var state_67365__$1 = state_67365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67365__$1,(11),out,inst_67345);
} else {
if((state_val_67366 === (5))){
var inst_67342 = (state_67365[(7)]);
var inst_67345 = (state_67365[(8)]);
var inst_67349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67345,inst_67342);
var state_67365__$1 = state_67365;
if(inst_67349){
var statearr_67390_68767 = state_67365__$1;
(statearr_67390_68767[(1)] = (8));

} else {
var statearr_67391_68768 = state_67365__$1;
(statearr_67391_68768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (10))){
var inst_67357 = (state_67365[(2)]);
var state_67365__$1 = state_67365;
var statearr_67392_68769 = state_67365__$1;
(statearr_67392_68769[(2)] = inst_67357);

(statearr_67392_68769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67366 === (8))){
var inst_67342 = (state_67365[(7)]);
var tmp67389 = inst_67342;
var inst_67342__$1 = tmp67389;
var state_67365__$1 = (function (){var statearr_67393 = state_67365;
(statearr_67393[(7)] = inst_67342__$1);

return statearr_67393;
})();
var statearr_67394_68770 = state_67365__$1;
(statearr_67394_68770[(2)] = null);

(statearr_67394_68770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_67395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67395[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_67395[(1)] = (1));

return statearr_67395;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_67365){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_67365);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e67396){if((e67396 instanceof Object)){
var ex__64465__auto__ = e67396;
var statearr_67397_68772 = state_67365;
(statearr_67397_68772[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68773 = state_67365;
state_67365 = G__68773;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_67365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_67365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_67399 = f__65004__auto__();
(statearr_67399[(6)] = c__65003__auto___68758);

return statearr_67399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__67401 = arguments.length;
switch (G__67401) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_67442){
var state_val_67443 = (state_67442[(1)]);
if((state_val_67443 === (7))){
var inst_67438 = (state_67442[(2)]);
var state_67442__$1 = state_67442;
var statearr_67444_68776 = state_67442__$1;
(statearr_67444_68776[(2)] = inst_67438);

(statearr_67444_68776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (1))){
var inst_67402 = (new Array(n));
var inst_67403 = inst_67402;
var inst_67404 = (0);
var state_67442__$1 = (function (){var statearr_67445 = state_67442;
(statearr_67445[(7)] = inst_67403);

(statearr_67445[(8)] = inst_67404);

return statearr_67445;
})();
var statearr_67446_68777 = state_67442__$1;
(statearr_67446_68777[(2)] = null);

(statearr_67446_68777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (4))){
var inst_67407 = (state_67442[(9)]);
var inst_67407__$1 = (state_67442[(2)]);
var inst_67408 = (inst_67407__$1 == null);
var inst_67409 = cljs.core.not(inst_67408);
var state_67442__$1 = (function (){var statearr_67447 = state_67442;
(statearr_67447[(9)] = inst_67407__$1);

return statearr_67447;
})();
if(inst_67409){
var statearr_67448_68779 = state_67442__$1;
(statearr_67448_68779[(1)] = (5));

} else {
var statearr_67449_68780 = state_67442__$1;
(statearr_67449_68780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (15))){
var inst_67432 = (state_67442[(2)]);
var state_67442__$1 = state_67442;
var statearr_67450_68781 = state_67442__$1;
(statearr_67450_68781[(2)] = inst_67432);

(statearr_67450_68781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (13))){
var state_67442__$1 = state_67442;
var statearr_67451_68782 = state_67442__$1;
(statearr_67451_68782[(2)] = null);

(statearr_67451_68782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (6))){
var inst_67404 = (state_67442[(8)]);
var inst_67428 = (inst_67404 > (0));
var state_67442__$1 = state_67442;
if(cljs.core.truth_(inst_67428)){
var statearr_67452_68787 = state_67442__$1;
(statearr_67452_68787[(1)] = (12));

} else {
var statearr_67453_68788 = state_67442__$1;
(statearr_67453_68788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (3))){
var inst_67440 = (state_67442[(2)]);
var state_67442__$1 = state_67442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67442__$1,inst_67440);
} else {
if((state_val_67443 === (12))){
var inst_67403 = (state_67442[(7)]);
var inst_67430 = cljs.core.vec(inst_67403);
var state_67442__$1 = state_67442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67442__$1,(15),out,inst_67430);
} else {
if((state_val_67443 === (2))){
var state_67442__$1 = state_67442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67442__$1,(4),ch);
} else {
if((state_val_67443 === (11))){
var inst_67422 = (state_67442[(2)]);
var inst_67423 = (new Array(n));
var inst_67403 = inst_67423;
var inst_67404 = (0);
var state_67442__$1 = (function (){var statearr_67454 = state_67442;
(statearr_67454[(7)] = inst_67403);

(statearr_67454[(10)] = inst_67422);

(statearr_67454[(8)] = inst_67404);

return statearr_67454;
})();
var statearr_67455_68795 = state_67442__$1;
(statearr_67455_68795[(2)] = null);

(statearr_67455_68795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (9))){
var inst_67403 = (state_67442[(7)]);
var inst_67420 = cljs.core.vec(inst_67403);
var state_67442__$1 = state_67442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67442__$1,(11),out,inst_67420);
} else {
if((state_val_67443 === (5))){
var inst_67403 = (state_67442[(7)]);
var inst_67407 = (state_67442[(9)]);
var inst_67404 = (state_67442[(8)]);
var inst_67415 = (state_67442[(11)]);
var inst_67411 = (inst_67403[inst_67404] = inst_67407);
var inst_67415__$1 = (inst_67404 + (1));
var inst_67416 = (inst_67415__$1 < n);
var state_67442__$1 = (function (){var statearr_67456 = state_67442;
(statearr_67456[(12)] = inst_67411);

(statearr_67456[(11)] = inst_67415__$1);

return statearr_67456;
})();
if(cljs.core.truth_(inst_67416)){
var statearr_67457_68800 = state_67442__$1;
(statearr_67457_68800[(1)] = (8));

} else {
var statearr_67458_68801 = state_67442__$1;
(statearr_67458_68801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (14))){
var inst_67435 = (state_67442[(2)]);
var inst_67436 = cljs.core.async.close_BANG_(out);
var state_67442__$1 = (function (){var statearr_67460 = state_67442;
(statearr_67460[(13)] = inst_67435);

return statearr_67460;
})();
var statearr_67461_68802 = state_67442__$1;
(statearr_67461_68802[(2)] = inst_67436);

(statearr_67461_68802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (10))){
var inst_67426 = (state_67442[(2)]);
var state_67442__$1 = state_67442;
var statearr_67462_68803 = state_67442__$1;
(statearr_67462_68803[(2)] = inst_67426);

(statearr_67462_68803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67443 === (8))){
var inst_67403 = (state_67442[(7)]);
var inst_67415 = (state_67442[(11)]);
var tmp67459 = inst_67403;
var inst_67403__$1 = tmp67459;
var inst_67404 = inst_67415;
var state_67442__$1 = (function (){var statearr_67464 = state_67442;
(statearr_67464[(7)] = inst_67403__$1);

(statearr_67464[(8)] = inst_67404);

return statearr_67464;
})();
var statearr_67465_68805 = state_67442__$1;
(statearr_67465_68805[(2)] = null);

(statearr_67465_68805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_67467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67467[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_67467[(1)] = (1));

return statearr_67467;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_67442){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_67442);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e67469){if((e67469 instanceof Object)){
var ex__64465__auto__ = e67469;
var statearr_67470_68806 = state_67442;
(statearr_67470_68806[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68808 = state_67442;
state_67442 = G__68808;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_67442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_67442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_67471 = f__65004__auto__();
(statearr_67471[(6)] = c__65003__auto___68775);

return statearr_67471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__67473 = arguments.length;
switch (G__67473) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__65003__auto___68817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_67518){
var state_val_67519 = (state_67518[(1)]);
if((state_val_67519 === (7))){
var inst_67514 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67520_68819 = state_67518__$1;
(statearr_67520_68819[(2)] = inst_67514);

(statearr_67520_68819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (1))){
var inst_67474 = [];
var inst_67475 = inst_67474;
var inst_67476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_67518__$1 = (function (){var statearr_67521 = state_67518;
(statearr_67521[(7)] = inst_67475);

(statearr_67521[(8)] = inst_67476);

return statearr_67521;
})();
var statearr_67522_68820 = state_67518__$1;
(statearr_67522_68820[(2)] = null);

(statearr_67522_68820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (4))){
var inst_67479 = (state_67518[(9)]);
var inst_67479__$1 = (state_67518[(2)]);
var inst_67480 = (inst_67479__$1 == null);
var inst_67481 = cljs.core.not(inst_67480);
var state_67518__$1 = (function (){var statearr_67523 = state_67518;
(statearr_67523[(9)] = inst_67479__$1);

return statearr_67523;
})();
if(inst_67481){
var statearr_67524_68821 = state_67518__$1;
(statearr_67524_68821[(1)] = (5));

} else {
var statearr_67525_68822 = state_67518__$1;
(statearr_67525_68822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (15))){
var inst_67475 = (state_67518[(7)]);
var inst_67506 = cljs.core.vec(inst_67475);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67518__$1,(18),out,inst_67506);
} else {
if((state_val_67519 === (13))){
var inst_67501 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67526_68823 = state_67518__$1;
(statearr_67526_68823[(2)] = inst_67501);

(statearr_67526_68823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (6))){
var inst_67475 = (state_67518[(7)]);
var inst_67503 = inst_67475.length;
var inst_67504 = (inst_67503 > (0));
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67504)){
var statearr_67527_68824 = state_67518__$1;
(statearr_67527_68824[(1)] = (15));

} else {
var statearr_67528_68825 = state_67518__$1;
(statearr_67528_68825[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (17))){
var inst_67511 = (state_67518[(2)]);
var inst_67512 = cljs.core.async.close_BANG_(out);
var state_67518__$1 = (function (){var statearr_67533 = state_67518;
(statearr_67533[(10)] = inst_67511);

return statearr_67533;
})();
var statearr_67534_68826 = state_67518__$1;
(statearr_67534_68826[(2)] = inst_67512);

(statearr_67534_68826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (3))){
var inst_67516 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67518__$1,inst_67516);
} else {
if((state_val_67519 === (12))){
var inst_67475 = (state_67518[(7)]);
var inst_67494 = cljs.core.vec(inst_67475);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67518__$1,(14),out,inst_67494);
} else {
if((state_val_67519 === (2))){
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67518__$1,(4),ch);
} else {
if((state_val_67519 === (11))){
var inst_67475 = (state_67518[(7)]);
var inst_67479 = (state_67518[(9)]);
var inst_67483 = (state_67518[(11)]);
var inst_67491 = inst_67475.push(inst_67479);
var tmp67539 = inst_67475;
var inst_67475__$1 = tmp67539;
var inst_67476 = inst_67483;
var state_67518__$1 = (function (){var statearr_67540 = state_67518;
(statearr_67540[(7)] = inst_67475__$1);

(statearr_67540[(8)] = inst_67476);

(statearr_67540[(12)] = inst_67491);

return statearr_67540;
})();
var statearr_67541_68827 = state_67518__$1;
(statearr_67541_68827[(2)] = null);

(statearr_67541_68827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (9))){
var inst_67476 = (state_67518[(8)]);
var inst_67487 = cljs.core.keyword_identical_QMARK_(inst_67476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_67518__$1 = state_67518;
var statearr_67542_68828 = state_67518__$1;
(statearr_67542_68828[(2)] = inst_67487);

(statearr_67542_68828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (5))){
var inst_67476 = (state_67518[(8)]);
var inst_67484 = (state_67518[(13)]);
var inst_67479 = (state_67518[(9)]);
var inst_67483 = (state_67518[(11)]);
var inst_67483__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_67479) : f.call(null,inst_67479));
var inst_67484__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67483__$1,inst_67476);
var state_67518__$1 = (function (){var statearr_67543 = state_67518;
(statearr_67543[(13)] = inst_67484__$1);

(statearr_67543[(11)] = inst_67483__$1);

return statearr_67543;
})();
if(inst_67484__$1){
var statearr_67544_68829 = state_67518__$1;
(statearr_67544_68829[(1)] = (8));

} else {
var statearr_67545_68830 = state_67518__$1;
(statearr_67545_68830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (14))){
var inst_67479 = (state_67518[(9)]);
var inst_67483 = (state_67518[(11)]);
var inst_67496 = (state_67518[(2)]);
var inst_67497 = [];
var inst_67498 = inst_67497.push(inst_67479);
var inst_67475 = inst_67497;
var inst_67476 = inst_67483;
var state_67518__$1 = (function (){var statearr_67546 = state_67518;
(statearr_67546[(7)] = inst_67475);

(statearr_67546[(8)] = inst_67476);

(statearr_67546[(14)] = inst_67498);

(statearr_67546[(15)] = inst_67496);

return statearr_67546;
})();
var statearr_67547_68831 = state_67518__$1;
(statearr_67547_68831[(2)] = null);

(statearr_67547_68831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (16))){
var state_67518__$1 = state_67518;
var statearr_67548_68832 = state_67518__$1;
(statearr_67548_68832[(2)] = null);

(statearr_67548_68832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (10))){
var inst_67489 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67489)){
var statearr_67549_68833 = state_67518__$1;
(statearr_67549_68833[(1)] = (11));

} else {
var statearr_67550_68834 = state_67518__$1;
(statearr_67550_68834[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (18))){
var inst_67508 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67551_68835 = state_67518__$1;
(statearr_67551_68835[(2)] = inst_67508);

(statearr_67551_68835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (8))){
var inst_67484 = (state_67518[(13)]);
var state_67518__$1 = state_67518;
var statearr_67552_68836 = state_67518__$1;
(statearr_67552_68836[(2)] = inst_67484);

(statearr_67552_68836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64462__auto__ = null;
var cljs$core$async$state_machine__64462__auto____0 = (function (){
var statearr_67555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67555[(0)] = cljs$core$async$state_machine__64462__auto__);

(statearr_67555[(1)] = (1));

return statearr_67555;
});
var cljs$core$async$state_machine__64462__auto____1 = (function (state_67518){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_67518);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e67556){if((e67556 instanceof Object)){
var ex__64465__auto__ = e67556;
var statearr_67557_68837 = state_67518;
(statearr_67557_68837[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68838 = state_67518;
state_67518 = G__68838;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
cljs$core$async$state_machine__64462__auto__ = function(state_67518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64462__auto____1.call(this,state_67518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64462__auto____0;
cljs$core$async$state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64462__auto____1;
return cljs$core$async$state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_67562 = f__65004__auto__();
(statearr_67562[(6)] = c__65003__auto___68817);

return statearr_67562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
