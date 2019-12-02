
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
const Toolbar_1 = __importDefault(require('@material-ui/core/Toolbar'));
const styles_1 = require('@material-ui/core/styles');
const useStyles = styles_1.makeStyles(theme => {
  let _a; let
    _b;
  return ({
    toolbar: (_a = {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingRight: 0,
    },
    _a[theme.breakpoints.up('xs')] = {
      paddingLeft: 0,
    },
    _a[theme.breakpoints.down('xs')] = {
      paddingLeft: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
    },
    _a),
    actions: (_b = {
      paddingTop: theme.spacing(3),
      minHeight: theme.spacing(5),
    },
    _b[theme.breakpoints.down('xs')] = {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
    _b),
  });
});
const defaultClasses = {}; // avoid needless updates
const ListToolbar = function (_a) {
  const _b = _a.classes; const classes = _b === void 0 ? defaultClasses : _b; const { filters } = _a; const { filterValues } = _a; // dynamically set via the UI by the user
  const { permanentFilter } = _a; // set in the List component by the developer
  const { actions } = _a; const { exporter } = _a; const
    rest = __rest(_a, ['classes', 'filters', 'filterValues', 'permanentFilter', 'actions', 'exporter']);
  const styles = useStyles({ classes });
  return (react_1.default.createElement(Toolbar_1.default, { className: styles.toolbar },
    filters
            && react_1.default.cloneElement(filters, { ...rest, filterValues, context: 'form' }),
    react_1.default.createElement('span', null),
    actions
            && react_1.default.cloneElement(actions, {
              ...rest,
              className: styles.actions,
              exporter,
              filters,
              filterValues,
              permanentFilter,
              ...actions.props,
            })));
};
ListToolbar.propTypes = {
  classes: prop_types_1.default.object,
  filters: prop_types_1.default.element,
  permanentFilter: prop_types_1.default.object,
  actions: prop_types_1.default.element,
  exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
exports.default = react_1.default.memo(ListToolbar);
