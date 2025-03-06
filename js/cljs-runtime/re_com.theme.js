goog.provide('re_com.theme');
re_com.theme.variables = re_com.theme.default$.variables;
re_com.theme.base = re_com.theme.default$.base;
re_com.theme.main = re_com.theme.default$.main;
re_com.theme.user = null;
re_com.theme.args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See the theme section of re-com docs (TBD). ","This argument is not reactive."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See the theme section of re-com docs (TBD). ","This argument is not reactive."], null)], null)], null);
re_com.theme.merge_class = re_com.theme.util.merge_class;
re_com.theme.merge_style = re_com.theme.util.merge_style;
re_com.theme.merge_props = re_com.theme.util.merge_props;
re_com.theme.part_class = (function re_com$theme$part_class(p__72314){
var map__72315 = p__72314;
var map__72315__$1 = cljs.core.__destructure_map(map__72315);
var props = map__72315__$1;
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72315__$1,new cljs.core.Keyword(null,"part","part",77757738));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"class","class",-2030961996),re_com.theme.merge_class,re_com.part.css_class(part));
});
re_com.theme.part_class_STAR_ = cljs.core.memoize(re_com.theme.part_class);
re_com.theme.comp = (function re_com$theme$comp(component_local_pre_theme,component_local_theme){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_local_theme,re_com.theme.part_class_STAR_,re_com.theme.user,re_com.theme.main,re_com.theme.base,component_local_pre_theme,re_com.theme.variables], null)));
});

//# sourceMappingURL=re_com.theme.js.map
