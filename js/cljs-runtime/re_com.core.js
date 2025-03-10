goog.provide('re_com.core');
re_com.core.alert_box = re_com.alert.alert_box;
re_com.core.alert_list = re_com.alert.alert_list;
re_com.core.flex_child_style = re_com.box.flex_child_style;
re_com.core.flex_flow_style = re_com.box.flex_flow_style;
re_com.core.justify_style = re_com.box.justify_style;
re_com.core.align_style = re_com.box.align_style;
re_com.core.scroll_style = re_com.box.scroll_style;
re_com.core.h_box = re_com.box.h_box;
re_com.core.v_box = re_com.box.v_box;
re_com.core.box = re_com.box.box;
re_com.core.line = re_com.box.line;
re_com.core.gap = re_com.box.gap;
re_com.core.scroller = re_com.box.scroller;
re_com.core.border = re_com.box.border;
re_com.core.v_table = re_com.v_table.v_table;
re_com.core.show_row_data_on_alt_click = re_com.v_table.show_row_data_on_alt_click;
re_com.core.simple_v_table = re_com.simple_v_table.simple_v_table;
re_com.core.nested_grid = re_com.nested_grid.nested_grid;
re_com.core.nested_v_grid = re_com.nested_v_grid.nested_v_grid;
re_com.core.button = re_com.buttons.button;
re_com.core.md_circle_icon_button = re_com.buttons.md_circle_icon_button;
re_com.core.md_icon_button = re_com.buttons.md_icon_button;
re_com.core.info_button = re_com.buttons.info_button;
re_com.core.row_button = re_com.buttons.row_button;
re_com.core.hyperlink = re_com.buttons.hyperlink;
re_com.core.hyperlink_href = re_com.buttons.hyperlink_href;
re_com.core.close_button = re_com.close_button.close_button;
re_com.core.datepicker = re_com.datepicker.datepicker;
re_com.core.datepicker_dropdown = re_com.datepicker.datepicker_dropdown;
re_com.core.single_dropdown = re_com.dropdown.single_dropdown;
re_com.core.dropdown = re_com.dropdown.dropdown;
re_com.core.typeahead = re_com.typeahead.typeahead;
re_com.core.input_time = re_com.input_time.input_time;
re_com.core.h_split = re_com.splits.h_split;
re_com.core.v_split = re_com.splits.v_split;
re_com.core.input_text = re_com.input_text.input_text;
re_com.core.input_password = re_com.input_text.input_password;
re_com.core.input_textarea = re_com.input_text.input_textarea;
re_com.core.checkbox = re_com.checkbox.checkbox;
re_com.core.radio_button = re_com.radio_button.radio_button;
re_com.core.slider = re_com.slider.slider;
re_com.core.progress_bar = re_com.progress_bar.progress_bar;
re_com.core.throbber = re_com.throbber.throbber;
re_com.core.modal_panel = re_com.modal_panel.modal_panel;
re_com.core.error_modal = re_com.error_modal.error_modal;
re_com.core.popover_content_wrapper = re_com.popover.popover_content_wrapper;
re_com.core.popover_anchor_wrapper = re_com.popover.popover_anchor_wrapper;
re_com.core.popover_border = re_com.popover.popover_border;
re_com.core.popover_tooltip = re_com.popover.popover_tooltip;
re_com.core.selection_list = re_com.selection_list.selection_list;
re_com.core.multi_select = re_com.multi_select.multi_select;
re_com.core.tree_select = re_com.tree_select.tree_select;
re_com.core.tree_select_dropdown = re_com.tree_select.tree_select_dropdown;
re_com.core.tag_dropdown = re_com.tag_dropdown.tag_dropdown;
re_com.core.text_tag = re_com.tag_dropdown.text_tag;
re_com.core.horizontal_tabs = re_com.tabs.horizontal_tabs;
re_com.core.horizontal_bar_tabs = re_com.tabs.horizontal_bar_tabs;
re_com.core.vertical_bar_tabs = re_com.tabs.vertical_bar_tabs;
re_com.core.horizontal_pill_tabs = re_com.tabs.horizontal_pill_tabs;
re_com.core.vertical_pill_tabs = re_com.tabs.vertical_pill_tabs;
re_com.core.label = re_com.text.label;
re_com.core.p = re_com.text.p;
re_com.core.p_span = re_com.text.p_span;
re_com.core.title = re_com.text.title;
re_com.core.make_tour = re_com.tour.make_tour;
re_com.core.start_tour = re_com.tour.start_tour;
re_com.core.make_tour_nav = re_com.tour.make_tour_nav;
re_com.core.stack_spy = re_com.debug.stack_spy;
re_com.core.reg_theme = (function re_com$core$reg_theme(layer_id,f){
var G__74434 = layer_id;
var G__74434__$1 = (((G__74434 instanceof cljs.core.Keyword))?G__74434.fqn:null);
switch (G__74434__$1) {
case "variables":
return (re_com.theme.variables = f);

break;
case "base":
return (re_com.theme.base = f);

break;
case "main":
return (re_com.theme.main = f);

break;
case "user":
return (re_com.theme.user = f);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74434__$1)].join('')));

}
});

//# sourceMappingURL=re_com.core.js.map
