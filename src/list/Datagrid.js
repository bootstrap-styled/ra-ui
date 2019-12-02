
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
const ra_core_1 = require('ra-core');
const styles_1 = require('@material-ui/core/styles');
const Table_1 = __importDefault(require('@material-ui/core/Table'));
const TableCell_1 = __importDefault(require('@material-ui/core/TableCell'));
const TableHead_1 = __importDefault(require('@material-ui/core/TableHead'));
const TableRow_1 = __importDefault(require('@material-ui/core/TableRow'));
const Checkbox_1 = __importDefault(require('@material-ui/core/Checkbox'));
const classnames_1 = __importDefault(require('classnames'));
const DatagridHeaderCell_1 = __importDefault(require('./DatagridHeaderCell'));
const DatagridLoading_1 = __importDefault(require('./DatagridLoading'));
const DatagridBody_1 = __importStar(require('./DatagridBody'));
const useStyles = styles_1.makeStyles(theme => ({
  table: {
    tableLayout: 'auto',
  },
  thead: {},
  tbody: {},
  headerRow: {},
  headerCell: {},
  checkbox: {},
  row: {},
  clickableRow: {
    cursor: 'pointer',
  },
  rowEven: {},
  rowOdd: {},
  rowCell: {},
  expandHeader: {
    padding: 0,
    width: theme.spacing(6),
  },
  expandIconCell: {
    width: theme.spacing(6),
  },
  expandIcon: {
    padding: theme.spacing(1),
    transform: 'rotate(-90deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expanded: {
    transform: 'rotate(0deg)',
  },
}));
/**
 * The Datagrid component renders a list of records as a table.
 * It is usually used as a child of the <List> and <ReferenceManyField> components.
 *
 * Props:
 *  - rowStyle
 *
 * @example Display all posts as a datagrid
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <Datagrid rowStyle={postRowStyle}>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="body" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 */
function Datagrid(_a) {
  const classesOverride = _a.classes; const
    props = __rest(_a, ['classes']);
  const classes = useStyles({ classes: classesOverride });
  const { basePath } = props;
  const _b = props.optimized;
  const optimized = _b === void 0 ? false : _b;
  const _c = props.body;
  const body = _c === void 0 ? optimized ? react_1.default.createElement(DatagridBody_1.PureDatagridBody, null) : react_1.default.createElement(DatagridBody_1.default, null) : _c;
  const { children } = props;
  const { className } = props;
  const { currentSort } = props;
  const { data } = props;
  const { expand } = props;
  const { hasBulkActions } = props;
  const { hover } = props;
  const { ids } = props;
  const { loading } = props;
  const { loaded } = props;
  const { onSelect } = props;
  const { onToggleItem } = props;
  const { resource } = props;
  const { rowClick } = props;
  const { rowStyle } = props;
  const { selectedIds } = props;
  const { setSort } = props;
  const _d = props.size;
  const size = _d === void 0 ? 'small' : _d;
  const { total } = props;
  const { version } = props;
  const rest = __rest(props, ['basePath', 'optimized', 'body', 'children', 'className', 'currentSort', 'data', 'expand', 'hasBulkActions', 'hover', 'ids', 'loading', 'loaded', 'onSelect', 'onToggleItem', 'resource', 'rowClick', 'rowStyle', 'selectedIds', 'setSort', 'size', 'total', 'version']);
  const updateSort = react_1.useCallback(event => {
    event.stopPropagation();
    setSort(event.currentTarget.dataset.sort);
  }, [setSort]);
  const handleSelectAll = react_1.useCallback(event => {
    if (event.target.checked) {
      onSelect(ids.concat(selectedIds.filter(id => !ids.includes(id))));
    } else {
      onSelect([]);
    }
  }, [ids, onSelect, selectedIds]);
    /**
     * if loaded is false, the list displays for the first time, and the dataProvider hasn't answered yet
     * if loaded is true, the data for the list has at least been returned once by the dataProvider
     * if loaded is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
     */
  if (loaded === false) {
    return (react_1.default.createElement(DatagridLoading_1.default, {
      classes, className, expand, hasBulkActions, nbChildren: react_1.default.Children.count(children), size,
    }));
  }
  /**
     * Once loaded, the data for the list may be empty. Instead of
     * displaying the table header with zero data rows,
     * the datagrid displays nothing in this case.
     */
  if (loaded && (ids.length === 0 || total === 0)) {
    return null;
  }
  /**
     * After the initial load, if the data for the list isn't empty,
     * and even if the data is refreshing (e.g. after a filter change),
     * the datagrid displays the current data.
     */
  return (react_1.default.createElement(Table_1.default, { className: classnames_1.default(classes.table, className), size, ...ra_core_1.sanitizeListRestProps(rest) },
    react_1.default.createElement(TableHead_1.default, { className: classes.thead },
      react_1.default.createElement(TableRow_1.default, { className: classnames_1.default(classes.row, classes.headerRow) },
        expand && (react_1.default.createElement(TableCell_1.default, { padding: 'none', className: classes.expandHeader })),
        hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: 'checkbox' },
          react_1.default.createElement(Checkbox_1.default, {
            className: 'select-all',
            color: 'primary',
            checked: selectedIds.length > 0
                            && ids.length > 0
                            && ids.every(id => selectedIds.includes(id)),
            onChange: handleSelectAll,
          }))),
        react_1.Children.map(children, (field, index) => react_1.isValidElement(field) ? (react_1.default.createElement(DatagridHeaderCell_1.default, {
          className: classes.headerCell,
          currentSort,
          field,
          isSorting: currentSort.field
                            === (field.props.sortBy || field.props.source),
          key: field.props.source || index,
          resource,
          updateSort,
        })) : null))),
    react_1.cloneElement(body, {
      basePath,
      className: classes.tbody,
      classes,
      expand,
      rowClick,
      data,
      hasBulkActions,
      hover,
      ids,
      onToggleItem,
      resource,
      rowStyle,
      selectedIds,
      version,
    }, children)));
}
Datagrid.propTypes = {
  basePath: prop_types_1.default.string,
  body: prop_types_1.default.element,
  children: prop_types_1.default.node.isRequired,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  currentSort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }),
  data: prop_types_1.default.object.isRequired,
  expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
  hasBulkActions: prop_types_1.default.bool.isRequired,
  hover: prop_types_1.default.bool,
  ids: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
  loading: prop_types_1.default.bool,
  onSelect: prop_types_1.default.func,
  onToggleItem: prop_types_1.default.func,
  resource: prop_types_1.default.string,
  rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
  rowStyle: prop_types_1.default.func,
  selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
  setSort: prop_types_1.default.func,
  total: prop_types_1.default.number,
  version: prop_types_1.default.number,
};
Datagrid.defaultProps = {
  data: {},
  hasBulkActions: false,
  ids: [],
  selectedIds: [],
};
exports.default = Datagrid;
