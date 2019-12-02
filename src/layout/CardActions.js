
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
const ra_core_1 = require('ra-core');
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const useStyles = styles_1.makeStyles({
  cardActions: {
    zIndex: 2,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    padding: 0,
  },
});
const CardActions = function (_a) {
  const { className } = _a;
  const { children } = _a;
  const rest = __rest(_a, ['className', 'children']);
  ra_core_1.warning(true, '<CardActions> is deprecated. Please use the <TopToolbar> component instead to wrap your action buttons');
  const classes = useStyles({}); // the empty {} is a temp fix for https://github.com/mui-org/material-ui/issues/15942
  return (react_1.default.createElement('div', { className: classnames_1.default(classes.cardActions, className), ...rest }, children));
};
CardActions.propTypes = {
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
};
exports.default = CardActions;
