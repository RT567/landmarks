goog.provide('look_at_landmarks.core');
if((typeof look_at_landmarks !== 'undefined') && (typeof look_at_landmarks.core !== 'undefined') && (typeof look_at_landmarks.core.angle_desk !== 'undefined')){
} else {
look_at_landmarks.core.angle_desk = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof look_at_landmarks !== 'undefined') && (typeof look_at_landmarks.core !== 'undefined') && (typeof look_at_landmarks.core.angle_arrow !== 'undefined')){
} else {
look_at_landmarks.core.angle_arrow = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof look_at_landmarks !== 'undefined') && (typeof look_at_landmarks.core !== 'undefined') && (typeof look_at_landmarks.core.rand_angle !== 'undefined')){
} else {
look_at_landmarks.core.rand_angle = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
look_at_landmarks.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
look_at_landmarks.core.path_for = (function look_at_landmarks$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60440 = arguments.length;
var i__5767__auto___60441 = (0);
while(true){
if((i__5767__auto___60441 < len__5766__auto___60440)){
args__5772__auto__.push((arguments[i__5767__auto___60441]));

var G__60442 = (i__5767__auto___60441 + (1));
i__5767__auto___60441 = G__60442;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return look_at_landmarks.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(look_at_landmarks.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__60423){
var vec__60424 = p__60423;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(look_at_landmarks.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.router,route));
}
}));

(look_at_landmarks.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(look_at_landmarks.core.path_for.cljs$lang$applyTo = (function (seq60421){
var G__60422 = cljs.core.first(seq60421);
var seq60421__$1 = cljs.core.next(seq60421);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60422,seq60421__$1);
}));

look_at_landmarks.core.desk_image = (function look_at_landmarks$core$desk_image(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"desk.png",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.angle_desk)),"deg)"].join('')], null)], null)], null)], null)], null);
});
look_at_landmarks.core.arrow_img = (function look_at_landmarks$core$arrow_img(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"arrow.png",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.angle_arrow)),"deg)"].join('')], null)], null)], null)], null)], null);
});
look_at_landmarks.core.layered_images = (function look_at_landmarks$core$layered_images(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"height","height",1025178622),"450px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"desk.png",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.angle_desk)),"deg)"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"arrow.png",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.angle_arrow)),"deg)"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"look.png",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.rand_angle)),"deg)"].join('')], null)], null)], null)], null);
});
look_at_landmarks.core.desk_rotator = (function look_at_landmarks$core$desk_rotator(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(look_at_landmarks.core.angle_desk),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60427_SHARP_){
return cljs.core.reset_BANG_(look_at_landmarks.core.angle_desk,p1__60427_SHARP_);
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(360),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null);
});
look_at_landmarks.core.arrow_rotator = (function look_at_landmarks$core$arrow_rotator(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(look_at_landmarks.core.angle_arrow),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60428_SHARP_){
return cljs.core.reset_BANG_(look_at_landmarks.core.angle_arrow,p1__60428_SHARP_);
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(360),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null);
});
look_at_landmarks.core.landmarks = new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Eiffel Tower","Great Wall of China","Statue of Liberty","Taj Mahal","Colosseum","Sydney Opera House","Pyramids of Giza","Big Ben","Christ the Redeemer","Machu Picchu","Golden Gate Bridge","Mount Fuji","Stonehenge","Burj Khalifa","Leaning Tower of Pisa","Empire State Building","Niagara Falls","The Louvre","Petra","Angkor Wat","Mount Everest","Santorini","Grand Canyon","Acropolis of Athens","Neuschwanstein Castle"], null);
if((typeof look_at_landmarks !== 'undefined') && (typeof look_at_landmarks.core !== 'undefined') && (typeof look_at_landmarks.core.spin_position !== 'undefined')){
} else {
look_at_landmarks.core.spin_position = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof look_at_landmarks !== 'undefined') && (typeof look_at_landmarks.core !== 'undefined') && (typeof look_at_landmarks.core.selected_item !== 'undefined')){
} else {
look_at_landmarks.core.selected_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
look_at_landmarks.core.spin_case = (function look_at_landmarks$core$spin_case(){
var item_width = (150);
var total_items = cljs.core.count(look_at_landmarks.core.landmarks);
var random_spins = ((total_items * (5)) + cljs.core.rand_int(((100) + total_items)));
var final_pos = (random_spins * item_width);
var selected_idx = cljs.core.mod((random_spins + (2)),total_items);
cljs.core.reset_BANG_(look_at_landmarks.core.spin_position,(0));

cljs.core.reset_BANG_(look_at_landmarks.core.selected_item,null);

cljs.core.reset_BANG_(look_at_landmarks.core.rand_angle,cljs.core.rand_int((360)));

setTimeout((function (){
return cljs.core.reset_BANG_(look_at_landmarks.core.spin_position,final_pos);
}),(100));

return setTimeout((function (){
return cljs.core.reset_BANG_(look_at_landmarks.core.selected_item,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.landmarks,selected_idx));
}),(7100));
});
look_at_landmarks.core.case_opening_component = (function look_at_landmarks$core$case_opening_component(){
var G__60429 = new cljs.core.Keyword(null,"justify","justify",-722524056);
var G__60430 = new cljs.core.Keyword(null,"center","center",-748944368);
var G__60431 = new cljs.core.Keyword(null,"align","align",1964212802);
var G__60432 = new cljs.core.Keyword(null,"center","center",-748944368);
var G__60433 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__60434 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"margin","margin",-995903681),"40px auto",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border","border",1444987323),"3px solid #ddd"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.spin_position)),"px)"].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"transform 7s cubic-bezier(0.1, 0.7, 0.2, 1)"], null)], null),(function (){var iter__5520__auto__ = (function look_at_landmarks$core$case_opening_component_$_iter__60435(s__60436){
return (new cljs.core.LazySeq(null,(function (){
var s__60436__$1 = s__60436;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60436__$1);
if(temp__5804__auto__){
var s__60436__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60436__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60436__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60438 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60437 = (0);
while(true){
if((i__60437 < size__5519__auto__)){
var idx = cljs.core._nth(c__5518__auto__,i__60437);
cljs.core.chunk_append(b__60438,(function (){var landmark = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.landmarks,cljs.core.mod(idx,cljs.core.count(look_at_landmarks.core.landmarks)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),landmark], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})());

var G__60443 = (i__60437 + (1));
i__60437 = G__60443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60438),look_at_landmarks$core$case_opening_component_$_iter__60435(cljs.core.chunk_rest(s__60436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60438),null);
}
} else {
var idx = cljs.core.first(s__60436__$2);
return cljs.core.cons((function (){var landmark = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.landmarks,cljs.core.mod(idx,cljs.core.count(look_at_landmarks.core.landmarks)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),landmark], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})(),look_at_landmarks$core$case_opening_component_$_iter__60435(cljs.core.rest(s__60436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),((10) * cljs.core.count(look_at_landmarks.core.landmarks))));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["border-box","translateX(-50%)",(0),"150px","absolute","3px solid red","none","100%","62.5%"])], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"\uD83C\uDFB2 Travel the world!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),look_at_landmarks.core.spin_case], null),(cljs.core.truth_(cljs.core.deref(look_at_landmarks.core.selected_item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),["\uD83C\uDF89 You got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(look_at_landmarks.core.selected_item))," \uD83C\uDF89"].join('')], null):null)], null);
return (re_com.core.v_box.cljs$core$IFn$_invoke$arity$6 ? re_com.core.v_box.cljs$core$IFn$_invoke$arity$6(G__60429,G__60430,G__60431,G__60432,G__60433,G__60434) : re_com.core.v_box.call(null,G__60429,G__60430,G__60431,G__60432,G__60433,G__60434));
});
look_at_landmarks.core.home_page = (function look_at_landmarks$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"adjust person and arrows for your setup (tip: the sun rises in the east), then scroll down to travel the world"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"140px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_landmarks.core.layered_images], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"120px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"person rotator"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_landmarks.core.desk_rotator], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"arrow rotator"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_landmarks.core.arrow_rotator], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_landmarks.core.case_opening_component], null)], null)], null);
});
look_at_landmarks.core.items_page = (function look_at_landmarks$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of look-at-landmarks, wowzer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),look_at_landmarks.core.path_for.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"item","item",249373802),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null)], 0))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(60)))], null)], null);
});
});
look_at_landmarks.core.item_page = (function look_at_landmarks$core$item_page(){
return (function (){
var routing_data = reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of look-at-landmarks"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),look_at_landmarks.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
look_at_landmarks.core.about_page = (function look_at_landmarks$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About look-at-landmarks"], null)], null);
});
});
look_at_landmarks.core.page_for = (function look_at_landmarks$core$page_for(route){
var G__60439 = route;
var G__60439__$1 = (((G__60439 instanceof cljs.core.Keyword))?G__60439.fqn:null);
switch (G__60439__$1) {
case "index":
return new cljs.core.Var(function(){return look_at_landmarks.core.home_page;},new cljs.core.Symbol("look-at-landmarks.core","home-page","look-at-landmarks.core/home-page",506173575,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"look-at-landmarks.core","look-at-landmarks.core",-1782561066,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"look_at_landmarks/core.cljs",16,1,155,155,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(look_at_landmarks.core.home_page)?look_at_landmarks.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return look_at_landmarks.core.about_page;},new cljs.core.Symbol("look-at-landmarks.core","about-page","look-at-landmarks.core/about-page",866022795,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"look-at-landmarks.core","look-at-landmarks.core",-1782561066,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"look_at_landmarks/core.cljs",17,1,191,191,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(look_at_landmarks.core.about_page)?look_at_landmarks.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return look_at_landmarks.core.items_page;},new cljs.core.Symbol("look-at-landmarks.core","items-page","look-at-landmarks.core/items-page",-256518816,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"look-at-landmarks.core","look-at-landmarks.core",-1782561066,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"look_at_landmarks/core.cljs",17,1,172,172,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(look_at_landmarks.core.items_page)?look_at_landmarks.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return look_at_landmarks.core.item_page;},new cljs.core.Symbol("look-at-landmarks.core","item-page","look-at-landmarks.core/item-page",-2137680866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"look-at-landmarks.core","look-at-landmarks.core",-1782561066,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"look_at_landmarks/core.cljs",16,1,182,182,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(look_at_landmarks.core.item_page)?look_at_landmarks.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60439__$1)].join('')));

}
});
look_at_landmarks.core.current_page = (function look_at_landmarks$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
look_at_landmarks.core.mount_root = (function look_at_landmarks$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_landmarks.core.current_page], null),document.getElementById("app"));
});
look_at_landmarks.core.init_BANG_ = (function look_at_landmarks$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),look_at_landmarks.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(look_at_landmarks.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return look_at_landmarks.core.mount_root();
});
look_at_landmarks.core.reload_BANG_ = (function look_at_landmarks$core$reload_BANG_(){
return look_at_landmarks.core.mount_root();
});

//# sourceMappingURL=look_at_landmarks.core.js.map
