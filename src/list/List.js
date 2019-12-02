
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]; }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
const __rest = (this && this.__rest) || function (s, e) {
  const t = {};
  for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]; }
  if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
  }
  return t;
};
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const Card_1 = __importDefault(require('@material-ui/core/Card'));
const classnames_1 = __importDefault(require('classnames'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const Title_1 = __importStar(require('../layout/Title'));
const ListToolbar_1 = __importDefault(require('./ListToolbar'));
const Pagination_1 = __importDefault(require('./Pagination'));
const BulkDeleteButton_1 = __importDefault(require('../button/BulkDeleteButton'));
const BulkActionsToolbar_1 = __importDefault(require('./BulkActionsToolbar'));
const ListActions_1 = __importDefault(require('./ListActions'));
const DefaultBulkActionButtons = function (props) { return react_1.default.createElement(BulkDeleteButton_1.default, { ...props }); };
exports.useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    root: {},
    main: {
      display: 'flex',
    },
    content: (_a = {
      marginTop: 0,
      transition: theme.transitions.create('margin-top'),
      position: 'relative',
      flex: '1 1 auto',
    },
    _a[theme.breakpoints.down('xs')] = {
      boxShadow: 'none',
    },
    _a),
    bulkActionsDisplayed: {
      marginTop: -theme.spacing(8),
      transition: theme.transitions.create('margin-top'),
    },
    actions: {
      zIndex: 2,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
    },
    noResults: { padding: 20 },
  });
});
const sanitizeRestProps = function (_a) {
  const { actions } = _a;
  const { basePath } = _a;
  const { changeListParams } = _a;
  const { children } = _a;
  const { classes } = _a;
  const { className } = _a;
  const { crudGetList } = _a;
  const { currentSort } = _a;
  const { data } = _a;
  const { defaultTitle } = _a;
  const { displayedFilters } = _a;
  const { exporter } = _a;
  const { filter } = _a;
  const { filterDefaultValues } = _a;
  const { filters } = _a;
  const { filterValues } = _a;
  const { hasCreate } = _a;
  const { hasEdit } = _a;
  const { hasList } = _a;
  const { hasShow } = _a;
  const { hideFilter } = _a;
  const { history } = _a;
  const { ids } = _a;
  const { loading } = _a;
  const { loaded } = _a;
  const { locale } = _a;
  const { location } = _a;
  const { match } = _a;
  const { onSelect } = _a;
  const { onToggleItem } = _a;
  const { onUnselectItems } = _a;
  const { options } = _a;
  const { page } = _a;
  const { pagination } = _a;
  const { params } = _a;
  const { permissions } = _a;
  const { perPage } = _a;
  const { push } = _a;
  const { query } = _a;
  const { refresh } = _a;
  const { resource } = _a;
  const { selectedIds } = _a;
  const { setFilters } = _a;
  const { setPage } = _a;
  const { setPerPage } = _a;
  const { setSelectedIds } = _a;
  const { setSort } = _a;
  const { showFilter } = _a;
  const { sort } = _a;
  const { title } = _a;
  const { toggleItem } = _a;
  const { total } = _a;
  const { version } = _a;
  const rest = __rest(_a, ['actions', 'basePath', 'changeListParams', 'children', 'classes', 'className', 'crudGetList', 'currentSort', 'data', 'defaultTitle', 'displayedFilters', 'exporter', 'filter', 'filterDefaultValues', 'filters', 'filterValues', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'hideFilter', 'history', 'ids', 'loading', 'loaded', 'locale', 'location', 'match', 'onSelect', 'onToggleItem', 'onUnselectItems', 'options', 'page', 'pagination', 'params', 'permissions', 'perPage', 'push', 'query', 'refresh', 'resource', 'selectedIds', 'setFilters', 'setPage', 'setPerPage', 'setSelectedIds', 'setSort', 'showFilter', 'sort', 'title', 'toggleItem', 'total', 'version']);
  return rest;
};
exports.ListView = function (props) {
  let _a;
  const { actions } = props;
  const { aside } = props;
  const { filter } = props;
  const { filters } = props;
  const { bulkActionButtons } = props;
  const { pagination } = props;
  const { children } = props;
  const { className } = props;
  const classesOverride = props.classes;
  const Content = props.component;
  const { exporter } = props;
  const { title } = props;
  const rest = __rest(props, ['actions', 'aside', 'filter', 'filters', 'bulkActionButtons', 'pagination', 'children', 'className', 'classes', 'component', 'exporter', 'title']);
  ra_core_1.useCheckMinimumRequiredProps('List', ['children'], props);
  const classes = exports.useStyles({ classes: classesOverride });
  const { defaultTitle } = rest;
  const { version } = rest;
  const controllerProps = ra_core_1.getListControllerProps(rest);
  return (react_1.default.createElement('div', { className: classnames_1.default('list-page', classes.root, className), ...sanitizeRestProps(rest) },
    react_1.default.createElement(Title_1.default, { title, defaultTitle }),
    (filters || actions) && (react_1.default.createElement(ListToolbar_1.default, {
      filters, ...controllerProps, actions, exporter, permanentFilter: filter,
    })),
    react_1.default.createElement('div', { className: classes.main },
      react_1.default.createElement(Content, {
        className: classnames_1.default(classes.content, (_a = {},
        _a[classes.bulkActionsDisplayed] = controllerProps.selectedIds.length > 0,
        _a)),
        key: version,
      },
      bulkActionButtons !== false && bulkActionButtons && (react_1.default.createElement(BulkActionsToolbar_1.default, { ...controllerProps }, bulkActionButtons)),
      children
                    && react_1.cloneElement(react_1.Children.only(children), { ...controllerProps, hasBulkActions: bulkActionButtons !== false }),
      pagination && react_1.cloneElement(pagination, controllerProps)),
      aside && react_1.cloneElement(aside, controllerProps))));
};
exports.ListView.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  basePath: prop_types_1.default.string,
  bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
  children: prop_types_1.default.element,
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  component: ra_core_1.ComponentPropType,
  currentSort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }),
  data: prop_types_1.default.object,
  defaultTitle: prop_types_1.default.string,
  displayedFilters: prop_types_1.default.object,
  exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
  filterDefaultValues: prop_types_1.default.object,
  filters: prop_types_1.default.element,
  filterValues: prop_types_1.default.object,
  hasCreate: prop_types_1.default.bool,
  hideFilter: prop_types_1.default.func,
  ids: prop_types_1.default.array,
  loading: prop_types_1.default.bool,
  onSelect: prop_types_1.default.func,
  onToggleItem: prop_types_1.default.func,
  onUnselectItems: prop_types_1.default.func,
  page: prop_types_1.default.number,
  pagination: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
  perPage: prop_types_1.default.number,
  refresh: prop_types_1.default.func,
  resource: prop_types_1.default.string,
  selectedIds: prop_types_1.default.array,
  setFilters: prop_types_1.default.func,
  setPage: prop_types_1.default.func,
  setPerPage: prop_types_1.default.func,
  setSort: prop_types_1.default.func,
  showFilter: prop_types_1.default.func,
  title: Title_1.TitlePropType,
  total: prop_types_1.default.number,
  version: prop_types_1.default.number,
};
exports.ListView.defaultProps = {
  actions: react_1.default.createElement(ListActions_1.default, null),
  classes: {},
  component: Card_1.default,
  bulkActionButtons: react_1.default.createElement(DefaultBulkActionButtons, null),
  pagination: react_1.default.createElement(Pagination_1.default, null),
};
/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * In Redux terms, <List> is a connected component, and <Datagrid> is a dumb component.
 *
 * Props:
 *   - title
 *   - perPage
 *   - sort
 *   - filter (the permanent filter to apply to the query)
 *   - actions
 *   - filters (a React component used to display the filter form)
 *   - pagination
 *
 * @example
 *     const PostFilter = (props) => (
 *         <Filter {...props}>
 *             <TextInput label="Search" source="q" alwaysOn />
 *             <TextInput label="Title" source="title" />
 *         </Filter>
 *     );
 *     export const PostList = (props) => (
 *         <List {...props}
 *             title="List of posts"
 *             sort={{ field: 'published_at' }}
 *             filter={{ is_published: true }}
 *             filters={PostFilter}
 *         >
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="title" />
 *                 <EditButton />
 *             </Datagrid>
 *         </List>
 *     );
 */
const List = function (props) { return react_1.default.createElement(exports.ListView, { ...props, ...ra_core_1.useListController(props) }); };
List.propTypes = {
  // the props you can change
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  filter: prop_types_1.default.object,
  filterDefaultValues: prop_types_1.default.object,
  filters: prop_types_1.default.element,
  pagination: prop_types_1.default.element,
  perPage: prop_types_1.default.number.isRequired,
  sort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }),
  title: Title_1.TitlePropType,
  // the props managed by react-admin
  authProvider: prop_types_1.default.func,
  hasCreate: prop_types_1.default.bool.isRequired,
  hasEdit: prop_types_1.default.bool.isRequired,
  hasList: prop_types_1.default.bool.isRequired,
  hasShow: prop_types_1.default.bool.isRequired,
  location: prop_types_1.default.object.isRequired,
  match: prop_types_1.default.object.isRequired,
  path: prop_types_1.default.string,
  resource: prop_types_1.default.string.isRequired,
};
List.defaultProps = {
  filter: {},
  perPage: 10,
};
exports.default = List;
