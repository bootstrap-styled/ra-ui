
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
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const classnames_1 = __importDefault(require('classnames'));
const shouldUpdate_1 = __importDefault(require('recompose/shouldUpdate'));
const TableCell_1 = __importDefault(require('@material-ui/core/TableCell'));
const TableSortLabel_1 = __importDefault(require('@material-ui/core/TableSortLabel'));
const Tooltip_1 = __importDefault(require('@material-ui/core/Tooltip'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
// remove the sort icons when not active
const useStyles = styles_1.makeStyles({
  icon: {
    display: 'none',
  },
  active: {
    '& $icon': {
      display: 'inline',
    },
  },
});
exports.DatagridHeaderCell = function (_a) {
  const { className } = _a;
  const classesOverride = _a.classes;
  const { field } = _a;
  const { currentSort } = _a;
  const { updateSort } = _a;
  const { resource } = _a;
  const { isSorting } = _a;
  const rest = __rest(_a, ['className', 'classes', 'field', 'currentSort', 'updateSort', 'resource', 'isSorting']);
  const classes = useStyles({ classes: classesOverride });
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(TableCell_1.default, {
    className: classnames_1.default(className, field.props.headerClassName), align: field.props.textAlign, variant: 'head', ...rest,
  }, field.props.sortable !== false
        && (field.props.sortBy || field.props.source) ? (react_1.default.createElement(Tooltip_1.default, {
      title: translate('ra.action.sort'),
      placement: field.props.textAlign === 'right'
        ? 'bottom-end'
        : 'bottom-start',
      enterDelay: 300,
    },
    react_1.default.createElement(TableSortLabel_1.default, {
      active: currentSort.field
                === (field.props.sortBy || field.props.source),
      direction: currentSort.order === 'ASC' ? 'asc' : 'desc',
      'data-sort': field.props.sortBy || field.props.source,
      onClick: updateSort,
      classes,
    },
    react_1.default.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource })))) : (react_1.default.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource }))));
};
exports.DatagridHeaderCell.propTypes = {
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  field: prop_types_1.default.element,
  currentSort: prop_types_1.default.shape({
    sort: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }).isRequired,
  isSorting: prop_types_1.default.bool,
  sortable: prop_types_1.default.bool,
  resource: prop_types_1.default.string,
  updateSort: prop_types_1.default.func.isRequired,
};
exports.default = shouldUpdate_1.default((props, nextProps) => props.updateSort !== nextProps.updateSort
        || (nextProps.isSorting && props.sortable !== nextProps.sortable))(exports.DatagridHeaderCell);
