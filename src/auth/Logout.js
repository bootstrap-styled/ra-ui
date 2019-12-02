
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
const core_1 = require('@material-ui/core');
const PowerSettingsNew_1 = __importDefault(require('@material-ui/icons/PowerSettingsNew'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const useStyles = core_1.makeStyles(theme => ({
  menuItem: {
    color: theme.palette.text.secondary,
  },
  icon: { minWidth: theme.spacing(5) },
}));
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
const LogoutWithRef = react_1.default.forwardRef((props, ref) => {
  const { className } = props;
  const { redirectTo } = props;
  const rest = __rest(props, ['className', 'redirectTo']);
  const classes = useStyles({}); // the empty {} is a temp fix for https://github.com/mui-org/material-ui/issues/15942
  const translate = ra_core_1.useTranslate();
  const logout = ra_core_1.useLogout();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = react_1.useCallback(() => logout(redirectTo), [
    redirectTo,
    logout,
  ]);
  return (react_1.default.createElement(core_1.MenuItem, {
    className: classnames_1.default('logout', classes.menuItem, className), onClick: handleClick, ref, ...rest,
  },
  react_1.default.createElement(core_1.ListItemIcon, { className: classes.icon },
    react_1.default.createElement(PowerSettingsNew_1.default, null)),
  translate('ra.auth.logout')));
});
LogoutWithRef.propTypes = {
  className: prop_types_1.default.string,
  redirectTo: prop_types_1.default.string,
};
exports.default = LogoutWithRef;
