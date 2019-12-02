
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
const classnames_1 = __importDefault(require('classnames'));
const Toolbar_1 = __importDefault(require('@material-ui/core/Toolbar'));
const Typography_1 = __importDefault(require('@material-ui/core/Typography'));
const styles_1 = require('@material-ui/core/styles');
const colorManipulator_1 = require('@material-ui/core/styles/colorManipulator');
const ra_core_1 = require('ra-core');
const TopToolbar_1 = __importDefault(require('../layout/TopToolbar'));
const useStyles = styles_1.makeStyles(theme => ({
  toolbar: {
    zIndex: 3,
    color: theme.palette.type === 'light'
      ? theme.palette.primary.main
      : theme.palette.text.primary,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.type === 'light'
      ? colorManipulator_1.lighten(theme.palette.primary.light, 0.85)
      : theme.palette.primary.dark,
    minHeight: theme.spacing(8),
    height: theme.spacing(8),
    transition: `${theme.transitions.create('height')}, ${theme.transitions.create('min-height')}`,
  },
  buttons: {},
  collapsed: {
    minHeight: 0,
    height: 0,
    overflowY: 'hidden',
  },
  title: {
    flex: '0 0 auto',
  },
}));
const BulkActionsToolbar = function (_a) {
  let _b;
  const { basePath } = _a;
  const classesOverride = _a.classes;
  const { filterValues } = _a;
  const { label } = _a;
  const { resource } = _a;
  const { selectedIds } = _a;
  const { children } = _a;
  const rest = __rest(_a, ['basePath', 'classes', 'filterValues', 'label', 'resource', 'selectedIds', 'children']);
  const classes = useStyles({ classes: classesOverride });
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(Toolbar_1.default, {
    'data-test': 'bulk-actions-toolbar',
    className: classnames_1.default(classes.toolbar, (_b = {},
    _b[classes.collapsed] = selectedIds.length === 0,
    _b)),
    ...ra_core_1.sanitizeListRestProps(rest),
  },
  react_1.default.createElement('div', { className: classes.title },
    react_1.default.createElement(Typography_1.default, { color: 'inherit', variant: 'subtitle1' }, translate(label, {
      _: label,
      smart_count: selectedIds.length,
    }))),
  react_1.default.createElement(TopToolbar_1.default, null, react_1.Children.map(children, child => react_1.cloneElement(react_1.Children.only(child), {
    basePath,
    filterValues,
    resource,
    selectedIds,
  })))));
};
BulkActionsToolbar.propTypes = {
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  basePath: prop_types_1.default.string,
  filterValues: prop_types_1.default.object,
  label: prop_types_1.default.string,
  resource: prop_types_1.default.string,
  selectedIds: prop_types_1.default.array,
};
BulkActionsToolbar.defaultProps = {
  label: 'ra.action.bulk_actions',
};
exports.default = BulkActionsToolbar;
