
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
const classnames_1 = __importDefault(require('classnames'));
const useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    root: (_a = {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      minHeight: theme.spacing(5),
    },
    _a[theme.breakpoints.up('xs')] = {
      paddingLeft: 0,
      paddingRight: 0,
    },
    _a[theme.breakpoints.down('sm')] = {
      paddingRight: theme.spacing(2),
    },
    _a[theme.breakpoints.down('xs')] = {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
    _a),
  });
});
const TopToolbar = function (_a) {
  const { className } = _a;
  const { children } = _a;
  const rest = __rest(_a, ['className', 'children']);
  const classes = useStyles();
  return (react_1.default.createElement(Toolbar_1.default, { className: classnames_1.default(classes.root, className), ...rest }, children));
};
TopToolbar.propTypes = {
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
};
exports.default = TopToolbar;
