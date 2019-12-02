
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
const react_router_dom_1 = require('react-router-dom');
const MenuItem_1 = __importDefault(require('@material-ui/core/MenuItem'));
const ListItemIcon_1 = __importDefault(require('@material-ui/core/ListItemIcon'));
const Tooltip_1 = __importDefault(require('@material-ui/core/Tooltip'));
const styles_1 = require('@material-ui/core/styles');
const NavLinkRef = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(react_router_dom_1.NavLink, { innerRef: ref, ...props })));
const useStyles = styles_1.makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
  },
  active: {
    color: theme.palette.text.primary,
  },
  icon: { minWidth: theme.spacing(5) },
}));
const MenuItemLink = react_1.forwardRef((_a, ref) => {
  const classesOverride = _a.classes; const { className } = _a; const { primaryText } = _a; const { leftIcon } = _a; const { onClick } = _a; const { sidebarIsOpen } = _a; const
    props = __rest(_a, ['classes', 'className', 'primaryText', 'leftIcon', 'onClick', 'sidebarIsOpen']);
  const classes = useStyles({ classes: classesOverride });
  const handleMenuTap = react_1.useCallback(e => {
    onClick && onClick(e);
  }, [onClick]);
  const renderMenuItem = function () {
    return (react_1.default.createElement(MenuItem_1.default, {
      className: classnames_1.default(classes.root, className), activeClassName: classes.active, component: NavLinkRef, ref, ...props, onClick: handleMenuTap,
    },
    leftIcon && (react_1.default.createElement(ListItemIcon_1.default, { className: classes.icon }, react_1.cloneElement(leftIcon, {
      titleAccess: primaryText,
    }))),
    primaryText));
  };
  if (sidebarIsOpen) {
    return renderMenuItem();
  }
  return (react_1.default.createElement(Tooltip_1.default, { title: primaryText, placement: 'right' }, renderMenuItem()));
});
MenuItemLink.propTypes = {
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  leftIcon: prop_types_1.default.element,
  onClick: prop_types_1.default.func,
  primaryText: prop_types_1.default.node,
  staticContext: prop_types_1.default.object,
  to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
};
exports.default = MenuItemLink;
