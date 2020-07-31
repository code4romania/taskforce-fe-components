import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: {
    index: "src/index.js",
    Accordion: "src/components/accordion/accordion",
    Button: "src/components/button/button",
    Checkbox: "src/components/checkbox/checkbox",
    Input: "src/components/input/input",
    Label: "src/components/label/label",
    DevelopedBy: "src/components/developed-by/developed-by",
    FooterLinks: "src/components/footer/footer-links",
    FooterLinkHeader: "src/components/footer/footer-links",
    FooterLinkItem: "src/components/footer/footer-links",
    Footer: "src/components/footer/footer",
    Header: "src/components/header/header",
    Hero: "src/components/hero/hero",
    IncubatedBy: "src/components/incubated-by/incubated-by",
    Banner: "src/components/banner/banner",
    Instruments: "src/components/instruments/instruments",
    InstrumentsItem: "src/components/instruments-item/instruments-item",
    Select: "src/components/select/select",
    RadioList: "src/components/radio-list/radio-list",
    LoginForm: "src/components/login-form/login-form",
    List: "src/components/list/list",
    ListHeader: "src/components/list-header/list-header",
    ListItem: "src/components/list-item/list-item",
    SearchResultListItem:
      "src/components/search-result-list-item/search-result-list-item",
    Logo: "src/components/logo/logo",
    SearchInput: "src/components/search-input/search-input",
    SocialsShare: "src/components/social-share/social-share",
    CompletedFormTable:
      "src/components/completed-form-table/completed-form-table",
    TemperatureChart: "src/components/temperature-chart/temperature-chart",
    PersonalDataTable: "src/components/personal-data-table/personal-data-table",
    MailchimpSubscribe: "src/components/subscribe/mailchimp-subscribe",
    SubscribeForm: "src/components/subscribe/subscribe-form",
    Form: "src/components/form/form",
    SidebarMenu: "src/components/sidebar-menu/sidebar-menu",
    SidebarMenuItem: "src/components/sidebar-menu-item/sidebar-menu-item",
    BackToTop: "src/components/back-to-top/back-to-top",
    DataTable: "src/components/data-table/data-table",
    DataTableItem: "src/components/data-table-item/data-table-item",
    DataTableRow: "src/components/data-table-row/data-table-row",
    FilterModal: "src/components/filter-modal/filter-modal",
    DropdownSearch: "src/components/dropdown-search/dropdown-search",
    HeaderFilter: "src/components/header-filter/header-filter",
  },
  output: [
    {
      dir: "dist",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    image(),
    postcss({
      extract: true,
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
  external: ["react", "react-dom", "prop-types"],
};
