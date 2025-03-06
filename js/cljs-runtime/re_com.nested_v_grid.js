goog.provide('re_com.nested_v_grid');
re_com.nested_v_grid.cell_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-path","row-path",-709648669)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-path","column-path",-733367618)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982)], null)], null);
re_com.nested_v_grid.part_structure = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true,new cljs.core.Keyword(null,"args-desc","args-desc",1950738510),re_com.nested_v_grid.cell_args_desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null)], null);
re_com.nested_v_grid.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.nested_v_grid.part_structure):null);
re_com.nested_v_grid.part_names = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.nested_v_grid.parts_desc)):null);
re_com.nested_v_grid.args_desc = (function (){var special_args = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"default","default",-1987822328),"[]",new cljs.core.Keyword(null,"type","type",1174270348),"vector of row-specs or (nested) row-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of column-specs or (nested) column-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. height) of every row. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a row, ","or when the corresponding row-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. width) of every column. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a column, ","or when the corresponding column-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every column-header."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every column-header."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level. ","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"row-header-width"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level.","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"column-header-height"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b :c]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b [:c]]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", hides the root of each header-tree, and excludes that root-header ","from the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null)," props ","which ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":nested-grid"], null),"passes to various parts. ","Each header-tree has a single header at its root ","(its children make up the rest of the tree).","In many cases, this root-header is not interesting to the user, so offer this prop to hide it."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," calls this function once at mount-time, passing it an ","export function. We recommend storing the export function in an r/atom. ","This export function composes your passed-in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export-*"], null)," functions, which are required ","for this export function to work."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Called whenever the export button is clicked. ","Can expect to be passed several keyword arguments. ","Each argument is a 2-dimensional vector of strings.",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":rows"], null)], null),": ","The entire grid laid out in rows."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cells"], null)], null),": ","Just the cells, without any headers."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-headers"], null)], null),": ","Just the spacers in the top-left corner."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-headers"], null)], null),": ","Just the row headers"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-headers"], null)], null),": ","Just the column headers"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps "," this function over the cells, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the row-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the column-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path corner-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the corner-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null),"'s most difficult tasks are deriving paths from header-trees ","and rendering cells at each path intersection. Their complexity is proportional to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(* (size row-tree) (size column-tree))"], null),". ","When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," does all the work on each render. ","As long as nothing triggers a re-render, this is fine. Scrolling does not trigger a re-render. ","That means scrolling is very smooth, but resizing, changing or moving a row or column ","could be painfully slow. When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," relies on a cached traversal. It still traverses both trees at mount time, ","But subsequent traversals are much faster. Rendering is faster as well, only running ","for the cells which appear in the visible scroll area. Scrolling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"does"], null)," trigger a re-render, "," mounting any cells which enter the scroll area, and unmounting those which exit. ","That means scrolling may not be quite as smooth, but overall performance (e.g. resizing) ","can be better, especially for very large trees with millions of paths"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Improves performance by disabling the theme system on the following-parts: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null)], null)], null),"Those parts will not be passed any props other than row-path & column-path.","To style these parts, we recommend using css to target the descendents of container parts, such as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-grid"], null),". This is currently done in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"re-com.css"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the main-axis dimension of row headers. ","NOTE: For a row-header to be resizable, its row-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the cross-axis dimension of column headers."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"default","default",-1987822328),"internal fn",new cljs.core.Keyword(null,"description","description",-1428560544),"TBD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null)], null);
if(re_com.config.include_args_desc_QMARK_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(special_args,re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.nested_v_grid.part_structure)], 0)));
} else {
return null;
}
})();
re_com.nested_v_grid.safe_assoc = (function re_com$nested_v_grid$safe_assoc(v,idx,val){
if((idx < cljs.core.count(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,idx,val);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((idx - cljs.core.count(v)),null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null));
}
});
re_com.nested_v_grid.nested_v_grid = (function re_com$nested_v_grid$nested_v_grid(p__74013){
var map__74014 = p__74013;
var map__74014__$1 = cljs.core.__destructure_map(map__74014);
var row_header_widths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_export_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_init_export_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548));
var column_header_heights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439));
var show_column_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327));
var on_export = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391),(function re_com$nested_v_grid$nested_v_grid_$_on_export(p__74015){
var map__74016 = p__74015;
var map__74016__$1 = cljs.core.__destructure_map(map__74016);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return re_com.util.clipboard_write_BANG_(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.tsv_line,rows)));
}));
var column_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var show_row_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230));
var on_export_column_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var column_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054));
var row_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var on_export_row_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),(20));
var row_header_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),(40));
var virtualize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),true);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),(20));
var row_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766));
var column_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"column-width","column-width",405119380),(40));
var show_root_headers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74014__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var on_export_corner_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74014__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var vec__74021 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}));
var scroll_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(0),null);
var scroll_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(1),null);
var content_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(2),null);
var content_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(3),null);
var _BANG_wrapper_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(4),null);
var scroll_listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(5),null);
var resize_observer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(6),null);
var overlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(7),null);
var hide_resizers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74021,(8),null);
var wrapper_ref_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,_BANG_wrapper_ref);
var on_scroll_BANG_ = (function (p1__73990_SHARP_){
cljs.core.reset_BANG_(scroll_left,p1__73990_SHARP_.target.scrollLeft);

cljs.core.reset_BANG_(scroll_top,p1__73990_SHARP_.target.scrollTop);

var temp__5804__auto___74430 = cljs.core.deref(hide_resizers_QMARK_);
if(cljs.core.truth_(temp__5804__auto___74430)){
var timeout_74431 = temp__5804__auto___74430;
clearTimeout(timeout_74431);
} else {
}

return cljs.core.reset_BANG_(hide_resizers_QMARK_,setTimeout((function (){
return cljs.core.reset_BANG_(hide_resizers_QMARK_,null);
}),(300)));
});
var on_resize_BANG_ = (function (p1__73991_SHARP_){
cljs.core.reset_BANG_(content_height,(p1__73991_SHARP_[(0)]).contentRect.height);

return cljs.core.reset_BANG_(content_width,(p1__73991_SHARP_[(0)]).contentRect.width);
});
var prev_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var prev_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var prev_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_widths));
var prev_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_heights));
var internal_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var internal_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var internal_on_export = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export));
var internal_on_export_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_cell));
var internal_on_export_column_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_column_header));
var internal_on_export_row_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_row_header));
var internal_on_export_corner_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_corner_header));
var row_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var column_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window((function (){var G__74028 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__74028,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5043__auto__ = cljs.core.deref(scroll_top);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),(cljs.core.deref(scroll_top) + cljs.core.deref(content_height))], null)], 0));
} else {
return G__74028;
}
})());
}));
var column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window((function (){var G__74029 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__74029,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5043__auto__ = cljs.core.deref(scroll_left);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),((cljs.core.deref(scroll_left) + cljs.core.deref(content_width)) + (50))], null)], 0));
} else {
return G__74029;
}
})());
}));
var complete_row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var complete_column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var column_depth = reagent.ratom.make_reaction((function (){
var or__5043__auto__ = re_com.util.deref_or_value(column_tree_depth);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__74031 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__74031 - (1));
} else {
return G__74031;
}
}
}));
var row_depth = reagent.ratom.make_reaction((function (){
var or__5043__auto__ = re_com.util.deref_or_value(row_tree_depth);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__74035 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__74035 - (1));
} else {
return G__74035;
}
}
}));
var internal_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = re_com.util.deref_or_value(row_header_widths);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(row_header_width)));
}
})());
var internal_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = re_com.util.deref_or_value(column_header_heights);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(column_header_height)));
}
})());
var safe_column_header_heights = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_depth),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73995_SHARP_){
var or__5043__auto__ = p1__73995_SHARP_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return column_header_height;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_column_header_heights),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_height))))));
}));
var safe_row_header_widths = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73996_SHARP_){
var or__5043__auto__ = p1__73996_SHARP_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return row_header_width;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_row_header_widths),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_width))))));
}));
var column_header_height_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_column_header_heights));
}));
var column_width_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_template(cljs.core.deref(column_traversal));
}));
var column_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_column_header_heights));
}));
var row_header_width_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_row_header_widths));
}));
var row_height_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_template(cljs.core.deref(row_traversal));
}));
var row_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_row_header_widths));
}));
var corner_header_edges = (function (p__74057){
var map__74058 = p__74057;
var map__74058__$1 = cljs.core.__destructure_map(map__74058);
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74058__$1,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth));
var cd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74058__$1,new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74058__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74058__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var G__74060 = cljs.core.PersistentHashSet.EMPTY;
var G__74060__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74060,new cljs.core.Keyword(null,"top","top",-1856271961)):G__74060);
var G__74060__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(cd - (1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74060__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)):G__74060__$1);
var G__74060__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74060__$2,new cljs.core.Keyword(null,"left","left",-399115937)):G__74060__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(rd - (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74060__$3,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return G__74060__$3;
}
});
var export_fn = (function re_com$nested_v_grid$nested_v_grid_$_export_fn(){
var map__74066 = cljs.core.deref(complete_row_traversal);
var map__74066__$1 = cljs.core.__destructure_map(map__74066);
var row_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74066__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var map__74067 = cljs.core.deref(complete_column_traversal);
var map__74067__$1 = cljs.core.__destructure_map(map__74067);
var column_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74067__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var on_export_cell__$1 = cljs.core.deref(internal_on_export_cell);
var on_export_column_header__$1 = cljs.core.deref(internal_on_export_column_header);
var on_export_row_header__$1 = cljs.core.deref(internal_on_export_row_header);
var on_export_corner_header__$1 = cljs.core.deref(internal_on_export_corner_header);
var row_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069(s__74070){
return (new cljs.core.LazySeq(null,(function (){
var s__74070__$1 = s__74070;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74070__$1);
if(temp__5804__auto__){
var s__74070__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74070__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74070__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74072 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74071 = (0);
while(true){
if((i__74071 < size__5519__auto__)){
var showing_row_path = cljs.core._nth(c__5518__auto__,i__74071);
var map__74081 = cljs.core.meta(showing_row_path);
var map__74081__$1 = cljs.core.__destructure_map(map__74081);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74081__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74081__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_row_path__$1 = (function (){var G__74083 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74083,(1));
} else {
return G__74083;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
cljs.core.chunk_append(b__74072,(function (){var iter__5520__auto__ = ((function (i__74071,s__74070__$1,showing_row_path__$1,this_depth,map__74081,map__74081__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5518__auto__,size__5519__auto__,b__74072,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74086(s__74087){
return (new cljs.core.LazySeq(null,((function (i__74071,s__74070__$1,showing_row_path__$1,this_depth,map__74081,map__74081__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5518__auto__,size__5519__auto__,b__74072,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74087__$1 = s__74087;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74087__$1);
if(temp__5804__auto____$1){
var s__74087__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74087__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__74087__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__74089 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__74088 = (0);
while(true){
if((i__74088 < size__5519__auto____$1)){
var i = cljs.core._nth(c__5518__auto____$1,i__74088);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74092 = cljs.core.meta(row_path);
var map__74092__$1 = cljs.core.__destructure_map(map__74092);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74092__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__74089,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__74436 = (i__74088 + (1));
i__74088 = G__74436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74089),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74086(cljs.core.chunk_rest(s__74087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74089),null);
}
} else {
var i = cljs.core.first(s__74087__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74095 = cljs.core.meta(row_path);
var map__74095__$1 = cljs.core.__destructure_map(map__74095);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74095__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74086(cljs.core.rest(s__74087__$2)));
}
} else {
return null;
}
break;
}
});})(i__74071,s__74070__$1,showing_row_path__$1,this_depth,map__74081,map__74081__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5518__auto__,size__5519__auto__,b__74072,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__74071,s__74070__$1,showing_row_path__$1,this_depth,map__74081,map__74081__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5518__auto__,size__5519__auto__,b__74072,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__74437 = (i__74071 + (1));
i__74071 = G__74437;
continue;
} else {
var G__74438 = (i__74071 + (1));
i__74071 = G__74438;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74072),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069(cljs.core.chunk_rest(s__74070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74072),null);
}
} else {
var showing_row_path = cljs.core.first(s__74070__$2);
var map__74102 = cljs.core.meta(showing_row_path);
var map__74102__$1 = cljs.core.__destructure_map(map__74102);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74102__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74102__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_row_path__$1 = (function (){var G__74103 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74103,(1));
} else {
return G__74103;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (s__74070__$1,showing_row_path__$1,this_depth,map__74102,map__74102__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74104(s__74105){
return (new cljs.core.LazySeq(null,((function (s__74070__$1,showing_row_path__$1,this_depth,map__74102,map__74102__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74105__$1 = s__74105;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74105__$1);
if(temp__5804__auto____$1){
var s__74105__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74105__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74105__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74107 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74106 = (0);
while(true){
if((i__74106 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74106);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74111 = cljs.core.meta(row_path);
var map__74111__$1 = cljs.core.__destructure_map(map__74111);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74111__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__74107,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__74444 = (i__74106 + (1));
i__74106 = G__74444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74107),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74104(cljs.core.chunk_rest(s__74105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74107),null);
}
} else {
var i = cljs.core.first(s__74105__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74112 = cljs.core.meta(row_path);
var map__74112__$1 = cljs.core.__destructure_map(map__74112);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74112__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069_$_iter__74104(cljs.core.rest(s__74105__$2)));
}
} else {
return null;
}
break;
}
});})(s__74070__$1,showing_row_path__$1,this_depth,map__74102,map__74102__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__74070__$1,showing_row_path__$1,this_depth,map__74102,map__74102__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__74070__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74069(cljs.core.rest(s__74070__$2)));
} else {
var G__74449 = cljs.core.rest(s__74070__$2);
s__74070__$1 = G__74449;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__((function (){var G__74119 = row_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__74119);
} else {
return G__74119;
}
})());
})();
var column_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120(s__74121){
return (new cljs.core.LazySeq(null,(function (){
var s__74121__$1 = s__74121;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74121__$1);
if(temp__5804__auto__){
var s__74121__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74121__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74121__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74123 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74122 = (0);
while(true){
if((i__74122 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74122);
cljs.core.chunk_append(b__74123,(function (){var iter__5520__auto__ = ((function (i__74122,i,c__5518__auto__,size__5519__auto__,b__74123,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74125(s__74126){
return (new cljs.core.LazySeq(null,((function (i__74122,i,c__5518__auto__,size__5519__auto__,b__74123,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74126__$1 = s__74126;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74126__$1);
if(temp__5804__auto____$1){
var s__74126__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74126__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__74126__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__74128 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__74127 = (0);
while(true){
if((i__74127 < size__5519__auto____$1)){
var showing_column_path = cljs.core._nth(c__5518__auto____$1,i__74127);
var map__74133 = cljs.core.meta(showing_column_path);
var map__74133__$1 = cljs.core.__destructure_map(map__74133);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74133__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74133__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__74137 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74137,(1));
} else {
return G__74137;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74136 = cljs.core.meta(column_path);
var map__74136__$1 = cljs.core.__destructure_map(map__74136);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74136__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__74128,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__74450 = (i__74127 + (1));
i__74127 = G__74450;
continue;
} else {
var G__74451 = (i__74127 + (1));
i__74127 = G__74451;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74128),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74125(cljs.core.chunk_rest(s__74126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74128),null);
}
} else {
var showing_column_path = cljs.core.first(s__74126__$2);
var map__74145 = cljs.core.meta(showing_column_path);
var map__74145__$1 = cljs.core.__destructure_map(map__74145);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__74147 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74147,(1));
} else {
return G__74147;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74146 = cljs.core.meta(column_path);
var map__74146__$1 = cljs.core.__destructure_map(map__74146);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74146__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74125(cljs.core.rest(s__74126__$2)));
} else {
var G__74455 = cljs.core.rest(s__74126__$2);
s__74126__$1 = G__74455;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__74122,i,c__5518__auto__,size__5519__auto__,b__74123,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__74122,i,c__5518__auto__,size__5519__auto__,b__74123,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__((function (){var G__74152 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__74152);
} else {
return G__74152;
}
})());
})());

var G__74456 = (i__74122 + (1));
i__74122 = G__74456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74123),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120(cljs.core.chunk_rest(s__74121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74123),null);
}
} else {
var i = cljs.core.first(s__74121__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (i,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74155(s__74156){
return (new cljs.core.LazySeq(null,(function (){
var s__74156__$1 = s__74156;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74156__$1);
if(temp__5804__auto____$1){
var s__74156__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74156__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74156__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74158 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74157 = (0);
while(true){
if((i__74157 < size__5519__auto__)){
var showing_column_path = cljs.core._nth(c__5518__auto__,i__74157);
var map__74162 = cljs.core.meta(showing_column_path);
var map__74162__$1 = cljs.core.__destructure_map(map__74162);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74162__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74162__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__74165 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74165,(1));
} else {
return G__74165;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74164 = cljs.core.meta(column_path);
var map__74164__$1 = cljs.core.__destructure_map(map__74164);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74164__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__74158,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__74457 = (i__74157 + (1));
i__74157 = G__74457;
continue;
} else {
var G__74458 = (i__74157 + (1));
i__74157 = G__74458;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74158),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74155(cljs.core.chunk_rest(s__74156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74158),null);
}
} else {
var showing_column_path = cljs.core.first(s__74156__$2);
var map__74168 = cljs.core.meta(showing_column_path);
var map__74168__$1 = cljs.core.__destructure_map(map__74168);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74168__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74168__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5043__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__74170 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74170,(1));
} else {
return G__74170;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5131__auto__ = (i + (1));
var y__5132__auto__ = this_depth;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var map__74169 = cljs.core.meta(column_path);
var map__74169__$1 = cljs.core.__destructure_map(map__74169);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74169__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120_$_iter__74155(cljs.core.rest(s__74156__$2)));
} else {
var G__74459 = cljs.core.rest(s__74156__$2);
s__74156__$1 = G__74459;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__74121__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__((function (){var G__74174 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__74174);
} else {
return G__74174;
}
})());
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74120(cljs.core.rest(s__74121__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var corner_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177(s__74178){
return (new cljs.core.LazySeq(null,(function (){
var s__74178__$1 = s__74178;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74178__$1);
if(temp__5804__auto__){
var s__74178__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74178__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74178__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74180 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74179 = (0);
while(true){
if((i__74179 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__74179);
cljs.core.chunk_append(b__74180,(function (){var iter__5520__auto__ = ((function (i__74179,row_index,c__5518__auto__,size__5519__auto__,b__74180,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74184(s__74185){
return (new cljs.core.LazySeq(null,((function (i__74179,row_index,c__5518__auto__,size__5519__auto__,b__74180,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74185__$1 = s__74185;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74185__$1);
if(temp__5804__auto____$1){
var s__74185__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74185__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__74185__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__74187 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__74186 = (0);
while(true){
if((i__74186 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__74186);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__74187,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__74463 = (i__74186 + (1));
i__74186 = G__74463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74187),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74184(cljs.core.chunk_rest(s__74185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74187),null);
}
} else {
var column_index = cljs.core.first(s__74185__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74184(cljs.core.rest(s__74185__$2)));
}
} else {
return null;
}
break;
}
});})(i__74179,row_index,c__5518__auto__,size__5519__auto__,b__74180,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__74179,row_index,c__5518__auto__,size__5519__auto__,b__74180,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__74464 = (i__74179 + (1));
i__74179 = G__74464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74180),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177(cljs.core.chunk_rest(s__74178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74180),null);
}
} else {
var row_index = cljs.core.first(s__74178__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (row_index,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74190(s__74191){
return (new cljs.core.LazySeq(null,(function (){
var s__74191__$1 = s__74191;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74191__$1);
if(temp__5804__auto____$1){
var s__74191__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74191__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74191__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74193 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74192 = (0);
while(true){
if((i__74192 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__74192);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__74193,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__74466 = (i__74192 + (1));
i__74192 = G__74466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74193),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74190(cljs.core.chunk_rest(s__74191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74193),null);
}
} else {
var column_index = cljs.core.first(s__74191__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177_$_iter__74190(cljs.core.rest(s__74191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__74178__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74177(cljs.core.rest(s__74178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var cells = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198(s__74199){
return (new cljs.core.LazySeq(null,(function (){
var s__74199__$1 = s__74199;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74199__$1);
if(temp__5804__auto__){
var s__74199__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74199__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74199__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74201 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74200 = (0);
while(true){
if((i__74200 < size__5519__auto__)){
var row_path = cljs.core._nth(c__5518__auto__,i__74200);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path)))){
var row_path__$1 = (function (){var G__74203 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74203,(1));
} else {
return G__74203;
}
})();
cljs.core.chunk_append(b__74201,(function (){var iter__5520__auto__ = ((function (i__74200,s__74199__$1,row_path__$1,row_path,c__5518__auto__,size__5519__auto__,b__74201,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74204(s__74205){
return (new cljs.core.LazySeq(null,((function (i__74200,s__74199__$1,row_path__$1,row_path,c__5518__auto__,size__5519__auto__,b__74201,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74205__$1 = s__74205;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74205__$1);
if(temp__5804__auto____$1){
var s__74205__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74205__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__74205__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__74207 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__74206 = (0);
while(true){
if((i__74206 < size__5519__auto____$1)){
var column_path = cljs.core._nth(c__5518__auto____$1,i__74206);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__74211 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74211,(1));
} else {
return G__74211;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__74207,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__74467 = (i__74206 + (1));
i__74206 = G__74467;
continue;
} else {
var G__74468 = (i__74206 + (1));
i__74206 = G__74468;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74207),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74204(cljs.core.chunk_rest(s__74205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74207),null);
}
} else {
var column_path = cljs.core.first(s__74205__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__74214 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74214,(1));
} else {
return G__74214;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74204(cljs.core.rest(s__74205__$2)));
} else {
var G__74469 = cljs.core.rest(s__74205__$2);
s__74205__$1 = G__74469;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__74200,s__74199__$1,row_path__$1,row_path,c__5518__auto__,size__5519__auto__,b__74201,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__74200,s__74199__$1,row_path__$1,row_path,c__5518__auto__,size__5519__auto__,b__74201,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(column_paths__$1);
})());

var G__74470 = (i__74200 + (1));
i__74200 = G__74470;
continue;
} else {
var G__74471 = (i__74200 + (1));
i__74200 = G__74471;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74201),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198(cljs.core.chunk_rest(s__74199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74201),null);
}
} else {
var row_path = cljs.core.first(s__74199__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path)))){
var row_path__$1 = (function (){var G__74215 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74215,(1));
} else {
return G__74215;
}
})();
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (s__74199__$1,row_path__$1,row_path,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74216(s__74217){
return (new cljs.core.LazySeq(null,((function (s__74199__$1,row_path__$1,row_path,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74217__$1 = s__74217;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74217__$1);
if(temp__5804__auto____$1){
var s__74217__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74217__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74217__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74219 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74218 = (0);
while(true){
if((i__74218 < size__5519__auto__)){
var column_path = cljs.core._nth(c__5518__auto__,i__74218);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__74220 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74220,(1));
} else {
return G__74220;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__74219,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__74472 = (i__74218 + (1));
i__74218 = G__74472;
continue;
} else {
var G__74473 = (i__74218 + (1));
i__74218 = G__74473;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74219),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74216(cljs.core.chunk_rest(s__74217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74219),null);
}
} else {
var column_path = cljs.core.first(s__74217__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__74221 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74221,(1));
} else {
return G__74221;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198_$_iter__74216(cljs.core.rest(s__74217__$2)));
} else {
var G__74474 = cljs.core.rest(s__74217__$2);
s__74217__$1 = G__74474;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__74199__$1,row_path__$1,row_path,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__74199__$1,row_path__$1,row_path,s__74199__$2,temp__5804__auto__,map__74066,map__74066__$1,row_paths__$1,map__74067,map__74067__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5520__auto__(column_paths__$1);
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__74198(cljs.core.rest(s__74199__$2)));
} else {
var G__74475 = cljs.core.rest(s__74199__$2);
s__74199__$1 = G__74475;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(row_paths__$1);
})();
var G__74222 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"corner-headers","corner-headers",-2127546543),corner_headers,new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),row_headers,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),column_headers,new cljs.core.Keyword(null,"cells","cells",-985166822),cells,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,corner_headers,column_headers),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,row_headers,cells))], null);
return (on_export.cljs$core$IFn$_invoke$arity$1 ? on_export.cljs$core$IFn$_invoke$arity$1(G__74222) : on_export.call(null,G__74222));
});
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto___74476 = on_init_export_fn;
if(cljs.core.truth_(temp__5804__auto___74476)){
var init_74477 = temp__5804__auto___74476;
(init_74477.cljs$core$IFn$_invoke$arity$1 ? init_74477.cljs$core$IFn$_invoke$arity$1(export_fn) : init_74477.call(null,export_fn));
} else {
}

var temp__5804__auto__ = cljs.core.deref(_BANG_wrapper_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var wrapper_ref = temp__5804__auto__;
cljs.core.reset_BANG_(scroll_listener,wrapper_ref.addEventListener("scroll",on_scroll_BANG_));

return cljs.core.reset_BANG_(resize_observer,(new ResizeObserver(on_resize_BANG_)).observe(wrapper_ref));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__74228 = reagent.core.argv(this$);
var seq__74229 = cljs.core.seq(vec__74228);
var first__74230 = cljs.core.first(seq__74229);
var seq__74229__$1 = cljs.core.next(seq__74229);
var _ = first__74230;
var map__74231 = seq__74229__$1;
var map__74231__$1 = cljs.core.__destructure_map(map__74231);
var row_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var column_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var on_export__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391));
var on_export_cell__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_export_row_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var on_export_column_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var on_export_corner_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74231__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var seq__74239_74478 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_tree__$1,prev_row_tree,internal_row_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_tree__$1,prev_column_tree,internal_column_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_header_widths,prev_row_header_widths,internal_row_header_widths], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_header_heights,prev_column_header_heights,internal_column_header_heights], null)], null));
var chunk__74241_74479 = null;
var count__74242_74480 = (0);
var i__74243_74481 = (0);
while(true){
if((i__74243_74481 < count__74242_74480)){
var vec__74261_74482 = chunk__74241_74479.cljs$core$IIndexed$_nth$arity$2(null,i__74243_74481);
var external_prop_74483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74261_74482,(0),null);
var prev_external_prop_74484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74261_74482,(1),null);
var internal_prop_74485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74261_74482,(2),null);
var external_value_74486 = re_com.util.deref_or_value(external_prop_74483);
var prev_external_value_74487 = re_com.util.deref_or_value(prev_external_prop_74484);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value_74487,external_value_74486)){
cljs.core.reset_BANG_(prev_external_prop_74484,external_value_74486);

cljs.core.reset_BANG_(internal_prop_74485,external_value_74486);
} else {
}


var G__74488 = seq__74239_74478;
var G__74489 = chunk__74241_74479;
var G__74490 = count__74242_74480;
var G__74491 = (i__74243_74481 + (1));
seq__74239_74478 = G__74488;
chunk__74241_74479 = G__74489;
count__74242_74480 = G__74490;
i__74243_74481 = G__74491;
continue;
} else {
var temp__5804__auto___74492 = cljs.core.seq(seq__74239_74478);
if(temp__5804__auto___74492){
var seq__74239_74493__$1 = temp__5804__auto___74492;
if(cljs.core.chunked_seq_QMARK_(seq__74239_74493__$1)){
var c__5565__auto___74494 = cljs.core.chunk_first(seq__74239_74493__$1);
var G__74495 = cljs.core.chunk_rest(seq__74239_74493__$1);
var G__74496 = c__5565__auto___74494;
var G__74497 = cljs.core.count(c__5565__auto___74494);
var G__74498 = (0);
seq__74239_74478 = G__74495;
chunk__74241_74479 = G__74496;
count__74242_74480 = G__74497;
i__74243_74481 = G__74498;
continue;
} else {
var vec__74265_74499 = cljs.core.first(seq__74239_74493__$1);
var external_prop_74500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74265_74499,(0),null);
var prev_external_prop_74501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74265_74499,(1),null);
var internal_prop_74502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74265_74499,(2),null);
var external_value_74503 = re_com.util.deref_or_value(external_prop_74500);
var prev_external_value_74504 = re_com.util.deref_or_value(prev_external_prop_74501);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value_74504,external_value_74503)){
cljs.core.reset_BANG_(prev_external_prop_74501,external_value_74503);

cljs.core.reset_BANG_(internal_prop_74502,external_value_74503);
} else {
}


var G__74505 = cljs.core.next(seq__74239_74493__$1);
var G__74506 = null;
var G__74507 = (0);
var G__74508 = (0);
seq__74239_74478 = G__74505;
chunk__74241_74479 = G__74506;
count__74242_74480 = G__74507;
i__74243_74481 = G__74508;
continue;
}
} else {
}
}
break;
}

var seq__74269 = cljs.core.seq(cljs.core.PersistentArrayMap.createAsIfByAssoc([on_export__$1,internal_on_export,on_export_cell__$1,internal_on_export_cell,on_export_row_header__$1,internal_on_export_row_header,on_export_column_header__$1,internal_on_export_column_header,on_export_corner_header__$1,internal_on_export_corner_header]));
var chunk__74271 = null;
var count__74272 = (0);
var i__74273 = (0);
while(true){
if((i__74273 < count__74272)){
var vec__74291 = chunk__74271.cljs$core$IIndexed$_nth$arity$2(null,i__74273);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74291,(0),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74291,(1),null);
var external_value_74509 = re_com.util.deref_or_value(external_prop);
cljs.core.reset_BANG_(internal_prop,external_value_74509);


var G__74510 = seq__74269;
var G__74511 = chunk__74271;
var G__74512 = count__74272;
var G__74513 = (i__74273 + (1));
seq__74269 = G__74510;
chunk__74271 = G__74511;
count__74272 = G__74512;
i__74273 = G__74513;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74269);
if(temp__5804__auto__){
var seq__74269__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74269__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__74269__$1);
var G__74514 = cljs.core.chunk_rest(seq__74269__$1);
var G__74515 = c__5565__auto__;
var G__74516 = cljs.core.count(c__5565__auto__);
var G__74517 = (0);
seq__74269 = G__74514;
chunk__74271 = G__74515;
count__74272 = G__74516;
i__74273 = G__74517;
continue;
} else {
var vec__74294 = cljs.core.first(seq__74269__$1);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74294,(0),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74294,(1),null);
var external_value_74518 = re_com.util.deref_or_value(external_prop);
cljs.core.reset_BANG_(internal_prop,external_value_74518);


var G__74519 = cljs.core.next(seq__74269__$1);
var G__74520 = null;
var G__74521 = (0);
var G__74522 = (0);
seq__74269 = G__74519;
chunk__74271 = G__74520;
count__74272 = G__74521;
i__74273 = G__74522;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__74302){
var map__74303 = p__74302;
var map__74303__$1 = cljs.core.__destructure_map(map__74303);
var props = map__74303__$1;
var theme_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74303__$1,new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611));
var on_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74303__$1,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),(function (p__74315){
var map__74316 = p__74315;
var map__74316__$1 = cljs.core.__destructure_map(map__74316);
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74316__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74316__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74316__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74316__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__74318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__74318)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_column_header_heights,re_com.nested_v_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__74318)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_row_header_widths,re_com.nested_v_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__74318)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_row_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__74318)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_column_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74318)].join('')));

}
}
}
}
}));
var show_root_headers_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74303__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74303__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var resize_row_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74303__$1,new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),true);
var resize_column_header_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74303__$1,new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),true);
var ensure_reactivity_74523 = re_com.util.deref_or_value;
var external_keys_74524 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"on-export-header","on-export-header",1679011768),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368)], null);
var external_props_74525 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(props,external_keys_74524);
var seq__74323_74526 = cljs.core.seq(external_props_74525);
var chunk__74324_74527 = null;
var count__74325_74528 = (0);
var i__74326_74529 = (0);
while(true){
if((i__74326_74529 < count__74325_74528)){
var prop_74530 = chunk__74324_74527.cljs$core$IIndexed$_nth$arity$2(null,i__74326_74529);
(ensure_reactivity_74523.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_74523.cljs$core$IFn$_invoke$arity$1(prop_74530) : ensure_reactivity_74523.call(null,prop_74530));


var G__74531 = seq__74323_74526;
var G__74532 = chunk__74324_74527;
var G__74533 = count__74325_74528;
var G__74534 = (i__74326_74529 + (1));
seq__74323_74526 = G__74531;
chunk__74324_74527 = G__74532;
count__74325_74528 = G__74533;
i__74326_74529 = G__74534;
continue;
} else {
var temp__5804__auto___74535 = cljs.core.seq(seq__74323_74526);
if(temp__5804__auto___74535){
var seq__74323_74536__$1 = temp__5804__auto___74535;
if(cljs.core.chunked_seq_QMARK_(seq__74323_74536__$1)){
var c__5565__auto___74537 = cljs.core.chunk_first(seq__74323_74536__$1);
var G__74538 = cljs.core.chunk_rest(seq__74323_74536__$1);
var G__74539 = c__5565__auto___74537;
var G__74540 = cljs.core.count(c__5565__auto___74537);
var G__74541 = (0);
seq__74323_74526 = G__74538;
chunk__74324_74527 = G__74539;
count__74325_74528 = G__74540;
i__74326_74529 = G__74541;
continue;
} else {
var prop_74542 = cljs.core.first(seq__74323_74536__$1);
(ensure_reactivity_74523.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_74523.cljs$core$IFn$_invoke$arity$1(prop_74542) : ensure_reactivity_74523.call(null,prop_74542));


var G__74543 = cljs.core.next(seq__74323_74536__$1);
var G__74544 = null;
var G__74545 = (0);
var G__74546 = (0);
seq__74323_74526 = G__74543;
chunk__74324_74527 = G__74544;
count__74325_74528 = G__74545;
i__74326_74529 = G__74546;
continue;
}
} else {
}
}
break;
}

var or__5043__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.nested_v_grid.args_desc),props));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.nested_v_grid.part_structure,props);
var resize_BANG_ = (function (p__74328){
var map__74329 = p__74328;
var map__74329__$1 = cljs.core.__destructure_map(map__74329);
var props__$1 = map__74329__$1;
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74329__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74329__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74329__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var temp__5804__auto___74547 = (function (){var G__74330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__74330)){
return cljs.core.deref(internal_row_tree);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__74330)){
return cljs.core.deref(internal_column_tree);
} else {
return null;

}
}
})();
if(cljs.core.truth_(temp__5804__auto___74547)){
var tree_74548 = temp__5804__auto___74547;
cljs.core._vreset_BANG_((function (){var G__74331 = header_dimension;
var G__74331__$1 = (((G__74331 instanceof cljs.core.Keyword))?G__74331.fqn:null);
switch (G__74331__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74331__$1)].join('')));

}
})(),re_com.nested_v_grid.util.evict_BANG_(cljs.core._deref((function (){var G__74332 = header_dimension;
var G__74332__$1 = (((G__74332 instanceof cljs.core.Keyword))?G__74332.fqn:null);
switch (G__74332__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74332__$1)].join('')));

}
})()),tree_74548,keypath));
} else {
}

return (on_resize.cljs$core$IFn$_invoke$arity$1 ? on_resize.cljs$core$IFn$_invoke$arity$1(props__$1) : on_resize.call(null,props__$1));
});
var row_width_resizers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74336(s__74337){
return (new cljs.core.LazySeq(null,(function (){
var s__74337__$1 = s__74337;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74337__$1);
if(temp__5804__auto__){
var s__74337__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74337__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74337__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74339 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74338 = (0);
while(true){
if((i__74338 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74338);
cljs.core.chunk_append(b__74339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-width-resizer","re-com.nested-v-grid/row-width-resizer",691550326),i], null)], null)));

var G__74551 = (i__74338 + (1));
i__74338 = G__74551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74339),re_com$nested_v_grid$nested_v_grid_$_iter__74336(cljs.core.chunk_rest(s__74337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74339),null);
}
} else {
var i = cljs.core.first(s__74337__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-width-resizer","re-com.nested-v-grid/row-width-resizer",691550326),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74336(cljs.core.rest(s__74337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var column_height_resizers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74343(s__74344){
return (new cljs.core.LazySeq(null,(function (){
var s__74344__$1 = s__74344;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74344__$1);
if(temp__5804__auto__){
var s__74344__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74344__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74344__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74346 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74345 = (0);
while(true){
if((i__74345 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74345);
cljs.core.chunk_append(b__74346,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-height-resizer","re-com.nested-v-grid/column-height-resizer",1099383675),i], null)], null)));

var G__74552 = (i__74345 + (1));
i__74345 = G__74552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74346),re_com$nested_v_grid$nested_v_grid_$_iter__74343(cljs.core.chunk_rest(s__74344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74346),null);
}
} else {
var i = cljs.core.first(s__74344__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-height-resizer","re-com.nested-v-grid/column-height-resizer",1099383675),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74343(cljs.core.rest(s__74344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var row_height_resizers = (function() { 
var G__74553__delegate = function (p__74357){
var map__74359 = p__74357;
var map__74359__$1 = cljs.core.__destructure_map(map__74359);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74359__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74361(s__74362){
return (new cljs.core.LazySeq(null,(function (){
var s__74362__$1 = s__74362;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74362__$1);
if(temp__5804__auto__){
var s__74362__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74362__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74362__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74364 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74363 = (0);
while(true){
if((i__74363 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74363);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5041__auto__;
}
})())){
cljs.core.chunk_append(b__74364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-height-resizer","re-com.nested-v-grid/row-height-resizer",319915223),i], null)], null)));

var G__74554 = (i__74363 + (1));
i__74363 = G__74554;
continue;
} else {
var G__74555 = (i__74363 + (1));
i__74363 = G__74555;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74364),re_com$nested_v_grid$nested_v_grid_$_iter__74361(cljs.core.chunk_rest(s__74362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74364),null);
}
} else {
var i = cljs.core.first(s__74362__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-height-resizer","re-com.nested-v-grid/row-height-resizer",319915223),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74361(cljs.core.rest(s__74362__$2)));
} else {
var G__74556 = cljs.core.rest(s__74362__$2);
s__74362__$1 = G__74556;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
};
var G__74553 = function (var_args){
var p__74357 = null;
if (arguments.length > 0) {
var G__74557__i = 0, G__74557__a = new Array(arguments.length -  0);
while (G__74557__i < G__74557__a.length) {G__74557__a[G__74557__i] = arguments[G__74557__i + 0]; ++G__74557__i;}
  p__74357 = new cljs.core.IndexedSeq(G__74557__a,0,null);
} 
return G__74553__delegate.call(this,p__74357);};
G__74553.cljs$lang$maxFixedArity = 0;
G__74553.cljs$lang$applyTo = (function (arglist__74558){
var p__74357 = cljs.core.seq(arglist__74558);
return G__74553__delegate(p__74357);
});
G__74553.cljs$core$IFn$_invoke$arity$variadic = G__74553__delegate;
return G__74553;
})()
;
var column_width_resizers = (function() { 
var G__74559__delegate = function (p__74365){
var map__74366 = p__74365;
var map__74366__$1 = cljs.core.__destructure_map(map__74366);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74366__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74366__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74368(s__74369){
return (new cljs.core.LazySeq(null,(function (){
var s__74369__$1 = s__74369;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74369__$1);
if(temp__5804__auto__){
var s__74369__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74369__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74369__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74371 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74370 = (0);
while(true){
if((i__74370 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74370);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5041__auto__;
}
})())){
cljs.core.chunk_append(b__74371,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-width-resizer","re-com.nested-v-grid/column-width-resizer",-1509219442),i], null)], null)));

var G__74560 = (i__74370 + (1));
i__74370 = G__74560;
continue;
} else {
var G__74561 = (i__74370 + (1));
i__74370 = G__74561;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74371),re_com$nested_v_grid$nested_v_grid_$_iter__74368(cljs.core.chunk_rest(s__74369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74371),null);
}
} else {
var i = cljs.core.first(s__74369__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-width-resizer","re-com.nested-v-grid/column-width-resizer",-1509219442),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74368(cljs.core.rest(s__74369__$2)));
} else {
var G__74562 = cljs.core.rest(s__74369__$2);
s__74369__$1 = G__74562;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
};
var G__74559 = function (var_args){
var p__74365 = null;
if (arguments.length > 0) {
var G__74563__i = 0, G__74563__a = new Array(arguments.length -  0);
while (G__74563__i < G__74563__a.length) {G__74563__a[G__74563__i] = arguments[G__74563__i + 0]; ++G__74563__i;}
  p__74365 = new cljs.core.IndexedSeq(G__74563__a,0,null);
} 
return G__74559__delegate.call(this,p__74365);};
G__74559.cljs$lang$maxFixedArity = 0;
G__74559.cljs$lang$applyTo = (function (arglist__74564){
var p__74365 = cljs.core.seq(arglist__74564);
return G__74559__delegate(p__74365);
});
G__74559.cljs$core$IFn$_invoke$arity$variadic = G__74559__delegate;
return G__74559;
})()
;
var row_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74373(s__74374){
return (new cljs.core.LazySeq(null,(function (){
var s__74374__$1 = s__74374;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74374__$1);
if(temp__5804__auto__){
var s__74374__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74374__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74374__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74376 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74375 = (0);
while(true){
if((i__74375 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74375);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_path = cljs.core.some(((function (i__74375,row_path,path_ct,i,c__5518__auto__,size__5519__auto__,b__74376,s__74374__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__74001_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__74001_SHARP_),path_ct)){
return p1__74001_SHARP_;
} else {
return null;
}
});})(i__74375,row_path,path_ct,i,c__5518__auto__,size__5519__auto__,b__74376,s__74374__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths)));
var map__74377 = cljs.core.meta(row_path);
var map__74377__$1 = cljs.core.__destructure_map(map__74377);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74377__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74377__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__74378 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74378,(1));
} else {
return G__74378;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__74379 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74379 - (1));
} else {
return G__74379;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.path__GT_grid_line_name(row_path),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_v_grid.util.path__GT_grid_line_name(end_path)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__74380 = cljs.core.count(row_path);
var G__74380__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__74380 - (1)):G__74380);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74380__$1 - (1));
} else {
return G__74380__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null))], null));
cljs.core.chunk_append(b__74376,part(new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),row_path,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)));

var G__74565 = (i__74375 + (1));
i__74375 = G__74565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74376),re_com$nested_v_grid$nested_v_grid_$_iter__74373(cljs.core.chunk_rest(s__74374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74376),null);
}
} else {
var i = cljs.core.first(s__74374__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_path = cljs.core.some(((function (row_path,path_ct,i,s__74374__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__74001_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__74001_SHARP_),path_ct)){
return p1__74001_SHARP_;
} else {
return null;
}
});})(row_path,path_ct,i,s__74374__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths)));
var map__74384 = cljs.core.meta(row_path);
var map__74384__$1 = cljs.core.__destructure_map(map__74384);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74384__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74384__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__74385 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74385,(1));
} else {
return G__74385;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__74386 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74386 - (1));
} else {
return G__74386;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.path__GT_grid_line_name(row_path),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_v_grid.util.path__GT_grid_line_name(end_path)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__74387 = cljs.core.count(row_path);
var G__74387__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__74387 - (1)):G__74387);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74387__$1 - (1));
} else {
return G__74387__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),row_path,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74373(cljs.core.rest(s__74374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
})();
var column_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74388(s__74389){
return (new cljs.core.LazySeq(null,(function (){
var s__74389__$1 = s__74389;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74389__$1);
if(temp__5804__auto__){
var s__74389__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74389__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74389__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74391 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74390 = (0);
while(true){
if((i__74390 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__74390);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_path = cljs.core.some(((function (i__74390,column_path,path_ct,i,c__5518__auto__,size__5519__auto__,b__74391,s__74389__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__74004_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__74004_SHARP_),path_ct)){
return p1__74004_SHARP_;
} else {
return null;
}
});})(i__74390,column_path,path_ct,i,c__5518__auto__,size__5519__auto__,b__74391,s__74389__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths)));
var map__74392 = cljs.core.meta(column_path);
var map__74392__$1 = cljs.core.__destructure_map(map__74392);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__74393 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74393,(1));
} else {
return G__74393;
}
})();
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.path__GT_grid_line_name(column_path),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_path)?re_com.nested_v_grid.util.path__GT_grid_line_name(end_path):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__74396 = cljs.core.count(column_path);
var G__74396__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__74396 - (1)):G__74396);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74396__$1 - (1));
} else {
return G__74396__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null))], null));
cljs.core.chunk_append(b__74391,part(new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),column_path], null)));

var G__74566 = (i__74390 + (1));
i__74390 = G__74566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74391),re_com$nested_v_grid$nested_v_grid_$_iter__74388(cljs.core.chunk_rest(s__74389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74391),null);
}
} else {
var i = cljs.core.first(s__74389__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_path = cljs.core.some(((function (column_path,path_ct,i,s__74389__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__74004_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__74004_SHARP_),path_ct)){
return p1__74004_SHARP_;
} else {
return null;
}
});})(column_path,path_ct,i,s__74389__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths)));
var map__74400 = cljs.core.meta(column_path);
var map__74400__$1 = cljs.core.__destructure_map(map__74400);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74400__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74400__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74400__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__74401 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74401,(1));
} else {
return G__74401;
}
})();
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.path__GT_grid_line_name(column_path),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_path)?re_com.nested_v_grid.util.path__GT_grid_line_name(end_path):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__74402 = cljs.core.count(column_path);
var G__74402__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__74402 - (1)):G__74402);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__74402__$1 - (1));
} else {
return G__74402__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),column_path], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74388(cljs.core.rest(s__74389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
})();
var corner_headers = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74403(s__74404){
return (new cljs.core.LazySeq(null,(function (){
var s__74404__$1 = s__74404;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74404__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var column_index = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__74404__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_iter__74403_$_iter__74405(s__74406){
return (new cljs.core.LazySeq(null,((function (s__74404__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74406__$1 = s__74406;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74406__$1);
if(temp__5804__auto____$1){
var s__74406__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74406__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74406__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74408 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74407 = (0);
while(true){
if((i__74407 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__74407);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
cljs.core.chunk_append(b__74408,part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__74411 = props__$3;
var G__74411__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74411,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__74411__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__74411__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),row_index,column_index], null)], null)));

var G__74567 = (i__74407 + (1));
i__74407 = G__74567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74408),re_com$nested_v_grid$nested_v_grid_$_iter__74403_$_iter__74405(cljs.core.chunk_rest(s__74406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74408),null);
}
} else {
var row_index = cljs.core.first(s__74406__$2);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__74412 = props__$3;
var G__74412__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74412,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__74412__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__74412__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),row_index,column_index], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74403_$_iter__74405(cljs.core.rest(s__74406__$2)));
}
} else {
return null;
}
break;
}
});})(s__74404__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__74404__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth))));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,re_com$nested_v_grid$nested_v_grid_$_iter__74403(cljs.core.rest(s__74404__$1)));
} else {
var G__74568 = cljs.core.rest(s__74404__$1);
s__74404__$1 = G__74568;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var cells = (function (){var iter__5520__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__74413(s__74414){
return (new cljs.core.LazySeq(null,(function (){
var s__74414__$1 = s__74414;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74414__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var row_path = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__74414__$1,row_path,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_iter__74413_$_iter__74415(s__74416){
return (new cljs.core.LazySeq(null,((function (s__74414__$1,row_path,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__74416__$1 = s__74416;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74416__$1);
if(temp__5804__auto____$1){
var s__74416__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74416__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74416__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74418 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74417 = (0);
while(true){
if((i__74417 < size__5519__auto__)){
var column_path = cljs.core._nth(c__5518__auto__,i__74417);
var row_meta = cljs.core.meta(row_path);
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(row_meta);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(column_meta);
} else {
return and__5041__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__74419 = row_path;
var G__74419__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74419,(1)):G__74419);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__74419__$1);
} else {
return G__74419__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__74420 = column_path;
var G__74420__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74420,(1)):G__74420);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__74420__$1);
} else {
return G__74420__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.path__GT_grid_line_name(row_path),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.path__GT_grid_line_name(column_path)], null)], null);
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0));
cljs.core.chunk_append(b__74418,part(new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)));

var G__74569 = (i__74417 + (1));
i__74417 = G__74569;
continue;
} else {
var G__74570 = (i__74417 + (1));
i__74417 = G__74570;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74418),re_com$nested_v_grid$nested_v_grid_$_iter__74413_$_iter__74415(cljs.core.chunk_rest(s__74416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74418),null);
}
} else {
var column_path = cljs.core.first(s__74416__$2);
var row_meta = cljs.core.meta(row_path);
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(row_meta);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(column_meta);
} else {
return and__5041__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__74421 = row_path;
var G__74421__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74421,(1)):G__74421);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__74421__$1);
} else {
return G__74421__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__74422 = column_path;
var G__74422__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__74422,(1)):G__74422);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__74422__$1);
} else {
return G__74422__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.path__GT_grid_line_name(row_path),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.path__GT_grid_line_name(column_path)], null)], null);
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__74413_$_iter__74415(cljs.core.rest(s__74416__$2)));
} else {
var G__74571 = cljs.core.rest(s__74416__$2);
s__74416__$1 = G__74571;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__74414__$1,row_path,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__74414__$1,row_path,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5043__auto__,map__74303,map__74303__$1,props,theme_cells_QMARK_,on_resize,show_root_headers_QMARK___$1,style,class$,resize_row_height_QMARK_,resize_column_header_height_QMARK_,vec__74021,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__74014,map__74014__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.deref(column_paths)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,re_com$nested_v_grid$nested_v_grid_$_iter__74413(cljs.core.rest(s__74414__$1)));
} else {
var G__74572 = cljs.core.rest(s__74414__$1);
s__74414__$1 = G__74572;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.deref(row_paths));
})();
return part(new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"after-props","after-props",1914108332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(column_header_height_total),cljs.core.deref(row_height_total)], null)),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(row_header_width_total),cljs.core.deref(column_width_total)], null))], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),wrapper_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__74424 = cells;
if(cljs.core.not(cljs.core.deref(hide_resizers_QMARK_))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__74424,(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_width_resizers(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null),new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null))], 0));
} else {
return G__74424;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__74425 = column_headers;
if(cljs.core.not(cljs.core.deref(hide_resizers_QMARK_))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__74425,(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_width_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null))], 0));
} else {
return G__74425;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__74426 = row_headers;
if(cljs.core.not(cljs.core.deref(hide_resizers_QMARK_))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__74426,row_width_resizers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__74426;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__74427 = corner_headers;
if(cljs.core.not(cljs.core.deref(hide_resizers_QMARK_))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__74427,row_width_resizers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null)], 0));
} else {
return G__74427;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),re_com.util.deref_or_value(overlay)], null)], null)], null));
}
})], null));
});

//# sourceMappingURL=re_com.nested_v_grid.js.map
