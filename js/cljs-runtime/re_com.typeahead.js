goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__72852){
var map__72853 = p__72852;
var map__72853__$1 = cljs.core.__destructure_map(map__72853);
var args = map__72853__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72853__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__72855 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5043__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__72855,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__72855,external_model_value));
} else {
return G__72855;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__72862,event){
var map__72863 = p__72862;
var map__72863__$1 = cljs.core.__destructure_map(map__72863);
var state = map__72863__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72863__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72863__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72863__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__72865 = event;
var G__72865__$1 = (((G__72865 instanceof cljs.core.Keyword))?G__72865.fqn:null);
switch (G__72865__$1) {
case "input-text-blurred":
var and__5041__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__5041__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__5041__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__5041__auto__){
var or__5043__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__5041__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__72876,event){
var map__72877 = p__72876;
var map__72877__$1 = cljs.core.__destructure_map(map__72877);
var state = map__72877__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72877__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__72884 = event;
var G__72884__$1 = (((G__72884 instanceof cljs.core.Keyword))?G__72884.fqn:null);
switch (G__72884__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__72891,new_value){
var map__72892 = p__72891;
var map__72892__$1 = cljs.core.__destructure_map(map__72892);
var state = map__72892__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72892__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__72903,suggestion){
var map__72904 = p__72903;
var map__72904__$1 = cljs.core.__destructure_map(map__72904);
var state = map__72904__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72904__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__72905 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72905,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__72905;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__72918,index){
var map__72919 = p__72918;
var map__72919__$1 = cljs.core.__destructure_map(map__72919);
var state = map__72919__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72919__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__72921 = state;
var G__72921__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72921,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__72921__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__72921__$1,suggestion):G__72921__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__72921__$2,suggestion);
} else {
return G__72921__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__72930,index){
var map__72931 = p__72930;
var map__72931__$1 = cljs.core.__destructure_map(map__72931);
var state = map__72931__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72931__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__72935){
var map__72936 = p__72935;
var map__72936__$1 = cljs.core.__destructure_map(map__72936);
var state = map__72936__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72936__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__72937 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__72937,suggestion_active_index);
} else {
return G__72937;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__72941){
var map__72943 = p__72941;
var map__72943__$1 = cljs.core.__destructure_map(map__72943);
var state = map__72943__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72943__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72943__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__72944 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__72944,re_com.typeahead.wrap(((function (){var or__5043__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__72944;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__72948){
var map__72949 = p__72948;
var map__72949__$1 = cljs.core.__destructure_map(map__72949);
var state = map__72949__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72949__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72949__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__72950 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__72950,re_com.typeahead.wrap(((function (){var or__5043__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__72950;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__72951 = state;
var G__72951__$1 = re_com.typeahead.clear_suggestions(G__72951)
;
var G__72951__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72951__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__72951__$2,null);
} else {
return G__72951__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__72968){
var map__72969 = p__72968;
var map__72969__$1 = cljs.core.__destructure_map(map__72969);
var state = map__72969__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72969__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72969__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72969__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__5041__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5041__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5802__auto__ = (function (){var G__72984 = text;
var G__72985 = (function (p1__72979_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__72979_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__72984,G__72985) : data_source.call(null,G__72984,G__72985));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var return_value = temp__5802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__65003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_73013){
var state_val_73014 = (state_73013[(1)]);
if((state_val_73014 === (1))){
var state_73013__$1 = state_73013;
var statearr_73016_73456 = state_73013__$1;
(statearr_73016_73456[(2)] = null);

(statearr_73016_73456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73014 === (2))){
var state_73013__$1 = state_73013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73013__$1,(4),c_search);
} else {
if((state_val_73014 === (3))){
var inst_73011 = (state_73013[(2)]);
var state_73013__$1 = state_73013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73013__$1,inst_73011);
} else {
if((state_val_73014 === (4))){
var inst_72995 = (state_73013[(7)]);
var inst_72995__$1 = (state_73013[(2)]);
var inst_72997 = cljs.core.deref(state_atom);
var inst_72998 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_72997);
var inst_72999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_72995__$1);
var state_73013__$1 = (function (){var statearr_73020 = state_73013;
(statearr_73020[(7)] = inst_72995__$1);

(statearr_73020[(8)] = inst_72998);

return statearr_73020;
})();
if(inst_72999){
var statearr_73022_73457 = state_73013__$1;
(statearr_73022_73457[(1)] = (5));

} else {
var statearr_73024_73458 = state_73013__$1;
(statearr_73024_73458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73014 === (5))){
var inst_72998 = (state_73013[(8)]);
var inst_73001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_73002 = re_com.typeahead.search_data_source_BANG_(inst_72998,state_atom,"");
var state_73013__$1 = (function (){var statearr_73026 = state_73013;
(statearr_73026[(9)] = inst_73001);

return statearr_73026;
})();
var statearr_73027_73460 = state_73013__$1;
(statearr_73027_73460[(2)] = inst_73002);

(statearr_73027_73460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73014 === (6))){
var inst_72995 = (state_73013[(7)]);
var inst_72998 = (state_73013[(8)]);
var inst_73004 = re_com.typeahead.search_data_source_BANG_(inst_72998,state_atom,inst_72995);
var state_73013__$1 = state_73013;
var statearr_73029_73461 = state_73013__$1;
(statearr_73029_73461[(2)] = inst_73004);

(statearr_73029_73461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73014 === (7))){
var inst_73007 = (state_73013[(2)]);
var state_73013__$1 = (function (){var statearr_73039 = state_73013;
(statearr_73039[(10)] = inst_73007);

return statearr_73039;
})();
var statearr_73041_73468 = state_73013__$1;
(statearr_73041_73468[(2)] = null);

(statearr_73041_73468[(1)] = (2));


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
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____0 = (function (){
var statearr_73050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73050[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__);

(statearr_73050[(1)] = (1));

return statearr_73050;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____1 = (function (state_73013){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_73013);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e73054){if((e73054 instanceof Object)){
var ex__64465__auto__ = e73054;
var statearr_73055_73470 = state_73013;
(statearr_73055_73470[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73471 = state_73013;
state_73013 = G__73471;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__ = function(state_73013){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____1.call(this,state_73013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_73063 = f__65004__auto__();
(statearr_73063[(6)] = c__65003__auto__);

return statearr_73063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));

return c__65003__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__73074 = cljs.core.deref(state_atom);
var map__73074__$1 = cljs.core.__destructure_map(map__73074);
var state = map__73074__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73074__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73074__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__73072_SHARP_){
var G__73075 = p1__73072_SHARP_;
var G__73075__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__73075,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__73075__$1,new_text);
} else {
return G__73075__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__73077 = cljs.core._EQ_;
var expr__73078 = event.key;
if(cljs.core.truth_((pred__73077.cljs$core$IFn$_invoke$arity$2 ? pred__73077.cljs$core$IFn$_invoke$arity$2("ArrowUp",expr__73078) : pred__73077.call(null,"ArrowUp",expr__73078)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__73077.cljs$core$IFn$_invoke$arity$2 ? pred__73077.cljs$core$IFn$_invoke$arity$2("ArrowDown",expr__73078) : pred__73077.call(null,"ArrowDown",expr__73078)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__73077.cljs$core$IFn$_invoke$arity$2 ? pred__73077.cljs$core$IFn$_invoke$arity$2("Enter",expr__73078) : pred__73077.call(null,"Enter",expr__73078)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__73077.cljs$core$IFn$_invoke$arity$2 ? pred__73077.cljs$core$IFn$_invoke$arity$2("Escape",expr__73078) : pred__73077.call(null,"Escape",expr__73078)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__73077.cljs$core$IFn$_invoke$arity$2 ? pred__73077.cljs$core$IFn$_invoke$arity$2("Tab",expr__73078) : pred__73077.call(null,"Tab",expr__73078)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),null,new cljs.core.Keyword(null,"throbber","throbber",-1896677161),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73498 = arguments.length;
var i__5767__auto___73503 = (0);
while(true){
if((i__5767__auto___73503 < len__5766__auto___73498)){
args__5772__auto__.push((arguments[i__5767__auto___73503]));

var G__73504 = (i__5767__auto___73503 + (1));
i__5767__auto___73503 = G__73504;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__73117){
var map__73118 = p__73117;
var map__73118__$1 = cljs.core.__destructure_map(map__73118);
var args = map__73118__$1;
var or__5043__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var map__73120 = re_com.typeahead.make_typeahead_state(args);
var map__73120__$1 = cljs.core.__destructure_map(map__73120);
var state = map__73120__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73120__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73120__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__73124){
var map__73125 = p__73124;
var map__73125__$1 = cljs.core.__destructure_map(map__73125);
var args__$1 = map__73125__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5043__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var map__73167 = cljs.core.deref(state_atom);
var map__73167__$1 = cljs.core.__destructure_map(map__73167);
var state__$1 = map__73167__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73167__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73167__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73167__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73167__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__5043__auto____$2 = width;
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5043__auto____$2 = debug_as;
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),293], null)),new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__5043__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),312], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__73184 = "rc-typeahead-throbber";
var G__73185 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throbber","throbber",-1896677161),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__73184,G__73185) : re_com.theme.merge_class.call(null,G__73184,G__73185));
})()], null)], null):null),(function (){var iter__5520__auto__ = (function re_com$typeahead$typeahead_render_$_iter__73195(s__73196){
return (new cljs.core.LazySeq(null,(function (){
var s__73196__$1 = s__73196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__73196__$1);
if(temp__5804__auto__){
var s__73196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73196__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__73196__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__73198 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__73197 = (0);
while(true){
if((i__73197 < size__5519__auto__)){
var vec__73209 = cljs.core._nth(c__5518__auto__,i__73197);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73209,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__73198,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),330], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__73217 = "rc-typeahead-suggestion";
var G__73218 = ((selected_QMARK_)?" active":null);
var G__73219 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__73217,G__73218,G__73219) : re_com.theme.merge_class.call(null,G__73217,G__73218,G__73219));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__73197,selected_QMARK_,vec__73209,i,s,c__5518__auto__,size__5519__auto__,b__73198,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__73197,selected_QMARK_,vec__73209,i,s,c__5518__auto__,size__5519__auto__,b__73198,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__73197,selected_QMARK_,vec__73209,i,s,c__5518__auto__,size__5519__auto__,b__73198,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args){
return (function (p1__73097_SHARP_){
p1__73097_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__73197,selected_QMARK_,vec__73209,i,s,c__5518__auto__,size__5519__auto__,b__73198,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__73578 = (i__73197 + (1));
i__73197 = G__73578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73198),re_com$typeahead$typeahead_render_$_iter__73195(cljs.core.chunk_rest(s__73196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73198),null);
}
} else {
var vec__73225 = cljs.core.first(s__73196__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73225,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73225,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),330], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__73228 = "rc-typeahead-suggestion";
var G__73229 = ((selected_QMARK_)?" active":null);
var G__73230 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__73228,G__73229,G__73230) : re_com.theme.merge_class.call(null,G__73228,G__73229,G__73230));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__73225,i,s,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__73225,i,s,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__73225,i,s,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args){
return (function (p1__73097_SHARP_){
p1__73097_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__73225,i,s,s__73196__$2,temp__5804__auto__,map__73167,map__73167__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5043__auto____$1,map__73125,map__73125__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__73120,map__73120__$1,state,c_search,c_input,state_atom,input_text_model,or__5043__auto__,map__73118,map__73118__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$typeahead_render_$_iter__73195(cljs.core.rest(s__73196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__73124 = null;
if (arguments.length > 0) {
var G__73596__i = 0, G__73596__a = new Array(arguments.length -  0);
while (G__73596__i < G__73596__a.length) {G__73596__a[G__73596__i] = arguments[G__73596__i + 0]; ++G__73596__i;}
  p__73124 = new cljs.core.IndexedSeq(G__73596__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__73124);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__73597){
var p__73124 = cljs.core.seq(arglist__73597);
return re_com$typeahead$typeahead_render__delegate(p__73124);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq73100){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73100));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__65003__auto___73600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__65004__auto__ = (function (){var switch__64461__auto__ = (function (state_73306){
var state_val_73307 = (state_73306[(1)]);
if((state_val_73307 === (7))){
var inst_73252 = (state_73306[(2)]);
var state_73306__$1 = state_73306;
var statearr_73317_73605 = state_73306__$1;
(statearr_73317_73605[(2)] = inst_73252);

(statearr_73317_73605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (1))){
var inst_73247 = null;
var state_73306__$1 = (function (){var statearr_73321 = state_73306;
(statearr_73321[(7)] = inst_73247);

return statearr_73321;
})();
var statearr_73322_73609 = state_73306__$1;
(statearr_73322_73609[(2)] = null);

(statearr_73322_73609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (4))){
var state_73306__$1 = state_73306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73306__$1,(7),in$);
} else {
if((state_val_73307 === (15))){
var inst_73291 = (state_73306[(2)]);
var state_73306__$1 = (function (){var statearr_73323 = state_73306;
(statearr_73323[(8)] = inst_73291);

return statearr_73323;
})();
var statearr_73326_73612 = state_73306__$1;
(statearr_73326_73612[(2)] = null);

(statearr_73326_73612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (13))){
var inst_73278 = (state_73306[(9)]);
var inst_73293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73278,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_73306__$1 = state_73306;
if(inst_73293){
var statearr_73329_73616 = state_73306__$1;
(statearr_73329_73616[(1)] = (16));

} else {
var statearr_73330_73617 = state_73306__$1;
(statearr_73330_73617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (6))){
var inst_73256 = (state_73306[(10)]);
var inst_73255 = (state_73306[(2)]);
var inst_73256__$1 = cljs.core.async.timeout(ms);
var inst_73272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73273 = [in$,inst_73256__$1];
var inst_73274 = (new cljs.core.PersistentVector(null,2,(5),inst_73272,inst_73273,null));
var state_73306__$1 = (function (){var statearr_73335 = state_73306;
(statearr_73335[(10)] = inst_73256__$1);

(statearr_73335[(11)] = inst_73255);

return statearr_73335;
})();
return cljs.core.async.ioc_alts_BANG_(state_73306__$1,(8),inst_73274);
} else {
if((state_val_73307 === (17))){
var state_73306__$1 = state_73306;
var statearr_73341_73623 = state_73306__$1;
(statearr_73341_73623[(2)] = null);

(statearr_73341_73623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (3))){
var inst_73304 = (state_73306[(2)]);
var state_73306__$1 = state_73306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73306__$1,inst_73304);
} else {
if((state_val_73307 === (12))){
var inst_73255 = (state_73306[(11)]);
var state_73306__$1 = state_73306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73306__$1,(15),out,inst_73255);
} else {
if((state_val_73307 === (2))){
var inst_73247 = (state_73306[(7)]);
var inst_73249 = (inst_73247 == null);
var state_73306__$1 = state_73306;
if(cljs.core.truth_(inst_73249)){
var statearr_73346_73627 = state_73306__$1;
(statearr_73346_73627[(1)] = (4));

} else {
var statearr_73347_73629 = state_73306__$1;
(statearr_73347_73629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (11))){
var inst_73301 = (state_73306[(2)]);
var inst_73247 = inst_73301;
var state_73306__$1 = (function (){var statearr_73348 = state_73306;
(statearr_73348[(7)] = inst_73247);

return statearr_73348;
})();
var statearr_73349_73638 = state_73306__$1;
(statearr_73349_73638[(2)] = null);

(statearr_73349_73638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (9))){
var inst_73276 = (state_73306[(12)]);
var inst_73284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73276,(0),null);
var inst_73285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73276,(1),null);
var state_73306__$1 = (function (){var statearr_73351 = state_73306;
(statearr_73351[(13)] = inst_73285);

return statearr_73351;
})();
var statearr_73355_73643 = state_73306__$1;
(statearr_73355_73643[(2)] = inst_73284);

(statearr_73355_73643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (5))){
var inst_73247 = (state_73306[(7)]);
var state_73306__$1 = state_73306;
var statearr_73356_73644 = state_73306__$1;
(statearr_73356_73644[(2)] = inst_73247);

(statearr_73356_73644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (14))){
var inst_73299 = (state_73306[(2)]);
var state_73306__$1 = state_73306;
var statearr_73357_73645 = state_73306__$1;
(statearr_73357_73645[(2)] = inst_73299);

(statearr_73357_73645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (16))){
var inst_73277 = (state_73306[(14)]);
var state_73306__$1 = state_73306;
var statearr_73360_73649 = state_73306__$1;
(statearr_73360_73649[(2)] = inst_73277);

(statearr_73360_73649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (10))){
var inst_73256 = (state_73306[(10)]);
var inst_73278 = (state_73306[(9)]);
var inst_73287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73278,inst_73256);
var state_73306__$1 = state_73306;
if(inst_73287){
var statearr_73365_73651 = state_73306__$1;
(statearr_73365_73651[(1)] = (12));

} else {
var statearr_73368_73652 = state_73306__$1;
(statearr_73368_73652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (18))){
var inst_73297 = (state_73306[(2)]);
var state_73306__$1 = state_73306;
var statearr_73375_73653 = state_73306__$1;
(statearr_73375_73653[(2)] = inst_73297);

(statearr_73375_73653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73307 === (8))){
var inst_73276 = (state_73306[(12)]);
var inst_73278 = (state_73306[(9)]);
var inst_73276__$1 = (state_73306[(2)]);
var inst_73277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73276__$1,(0),null);
var inst_73278__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73276__$1,(1),null);
var inst_73279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73278__$1,in$);
var state_73306__$1 = (function (){var statearr_73378 = state_73306;
(statearr_73378[(14)] = inst_73277);

(statearr_73378[(12)] = inst_73276__$1);

(statearr_73378[(9)] = inst_73278__$1);

return statearr_73378;
})();
if(inst_73279){
var statearr_73383_73654 = state_73306__$1;
(statearr_73383_73654[(1)] = (9));

} else {
var statearr_73385_73655 = state_73306__$1;
(statearr_73385_73655[(1)] = (10));

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
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__64462__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__64462__auto____0 = (function (){
var statearr_73388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73388[(0)] = re_com$typeahead$debounce_$_state_machine__64462__auto__);

(statearr_73388[(1)] = (1));

return statearr_73388;
});
var re_com$typeahead$debounce_$_state_machine__64462__auto____1 = (function (state_73306){
while(true){
var ret_value__64463__auto__ = (function (){try{while(true){
var result__64464__auto__ = switch__64461__auto__(state_73306);
if(cljs.core.keyword_identical_QMARK_(result__64464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64464__auto__;
}
break;
}
}catch (e73390){if((e73390 instanceof Object)){
var ex__64465__auto__ = e73390;
var statearr_73391_73660 = state_73306;
(statearr_73391_73660[(5)] = ex__64465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73661 = state_73306;
state_73306 = G__73661;
continue;
} else {
return ret_value__64463__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__64462__auto__ = function(state_73306){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__64462__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__64462__auto____1.call(this,state_73306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__64462__auto____0;
re_com$typeahead$debounce_$_state_machine__64462__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__64462__auto____1;
return re_com$typeahead$debounce_$_state_machine__64462__auto__;
})()
})();
var state__65005__auto__ = (function (){var statearr_73396 = f__65004__auto__();
(statearr_73396[(6)] = c__65003__auto___73600);

return statearr_73396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__65005__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
