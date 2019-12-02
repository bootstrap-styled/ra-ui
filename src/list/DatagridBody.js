
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
const TableBody_1 = __importDefault(require('@material-ui/core/TableBody'));
const classnames_1 = __importDefault(require('classnames'));
const isEqual_1 = __importDefault(require('lodash/isEqual'));
const DatagridRow_1 = __importStar(require('./DatagridRow'));
const DatagridBody = function (_a) {
  const { basePath } = _a;
  const { children } = _a;
  const { classes } = _a;
  const { className } = _a;
  const { data } = _a;
  const { expand } = _a;
  const { hasBulkActions } = _a;
  const { hover } = _a;
  const { ids } = _a;
  const { onToggleItem } = _a;
  const { resource } = _a;
  const { row } = _a;
  const { rowClick } = _a;
  const { rowStyle } = _a;
  const { selectedIds } = _a;
  const { styles } = _a;
  const { version } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'classes', 'className', 'data', 'expand', 'hasBulkActions', 'hover', 'ids', 'onToggleItem', 'resource', 'row', 'rowClick', 'rowStyle', 'selectedIds', 'styles', 'version']);
  return (react_1.default.createElement(TableBody_1.default, { className: classnames_1.default('datagrid-body', className), ...rest }, ids.map((id, rowIndex) => {
    let _a;
    return react_1.cloneElement(row, {
      basePath,
      classes,
      className: classnames_1.default(classes.row, (_a = {},
      _a[classes.rowEven] = rowIndex % 2 === 0,
      _a[classes.rowOdd] = rowIndex % 2 !== 0,
      _a[classes.clickableRow] = rowClick,
      _a)),
      expand,
      hasBulkActions,
      hover,
      id,
      key: id,
      onToggleItem,
      record: data[id],
      resource,
      rowClick,
      selected: selectedIds.includes(id),
      style: rowStyle ? rowStyle(data[id], rowIndex) : null,
    }, children);
  })));
};
DatagridBody.propTypes = {
  basePath: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  children: prop_types_1.default.node,
  data: prop_types_1.default.object.isRequired,
  expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
  hasBulkActions: prop_types_1.default.bool.isRequired,
  hover: prop_types_1.default.bool,
  ids: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
  onToggleItem: prop_types_1.default.func,
  resource: prop_types_1.default.string,
  row: prop_types_1.default.element,
  rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
  rowStyle: prop_types_1.default.func,
  selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
  styles: prop_types_1.default.object,
  version: prop_types_1.default.number,
};
DatagridBody.defaultProps = {
  data: {},
  hasBulkActions: false,
  ids: [],
  row: react_1.default.createElement(DatagridRow_1.default, null),
};
// trick material-ui Table into thinking this is one of the child type it supports
DatagridBody.muiName = 'TableBody';
const areEqual = function (prevProps, nextProps) {
  const _ = prevProps.children; const
    prevPropsWithoutChildren = __rest(prevProps, ['children']);
  const __ = nextProps.children; const
    nextPropsWithoutChildren = __rest(nextProps, ['children']);
  return isEqual_1.default(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
exports.PureDatagridBody = react_1.memo(DatagridBody, areEqual);
// trick material-ui Table into thinking this is one of the child type it supports
exports.PureDatagridBody.muiName = 'TableBody';
exports.PureDatagridBody.defaultProps = {
  row: react_1.default.createElement(DatagridRow_1.PureDatagridRow, null),
};
exports.default = DatagridBody;
