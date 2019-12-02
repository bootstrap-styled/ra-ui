
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
const react_redux_1 = require('react-redux');
const inflection_1 = __importDefault(require('inflection'));
const core_1 = require('@material-ui/core');
const ViewList_1 = __importDefault(require('@material-ui/icons/ViewList'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const DashboardMenuItem_1 = __importDefault(require('./DashboardMenuItem'));
const MenuItemLink_1 = __importDefault(require('./MenuItemLink'));
const useStyles = core_1.makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
const translatedResourceName = function (resource, translate) {
  return translate(`resources.${resource.name}.name`, {
    smart_count: 2,
    _: resource.options && resource.options.label
      ? translate(resource.options.label, {
        smart_count: 2,
        _: resource.options.label,
      })
      : inflection_1.default.humanize(inflection_1.default.pluralize(resource.name)),
  });
};
const Menu = function (_a) {
  const classesOverride = _a.classes; const { className } = _a; const { dense } = _a; const { hasDashboard } = _a; const { onMenuClick } = _a; const { logout } = _a; const
    rest = __rest(_a, ['classes', 'className', 'dense', 'hasDashboard', 'onMenuClick', 'logout']);
  const translate = ra_core_1.useTranslate();
  const classes = useStyles({ classes: classesOverride });
  const isXSmall = core_1.useMediaQuery(theme => theme.breakpoints.down('xs'));
  const open = react_redux_1.useSelector(state => state.admin.ui.sidebarOpen);
  const resources = react_redux_1.useSelector(ra_core_1.getResources, react_redux_1.shallowEqual);
  react_redux_1.useSelector(state => state.router.location.pathname); // used to force redraw on navigation
  return (react_1.default.createElement('div', { className: classnames_1.default(classes.main, className), ...rest },
    hasDashboard && (react_1.default.createElement(DashboardMenuItem_1.default, { onClick: onMenuClick, sidebarIsOpen: open })),
    resources
      .filter(r => r.hasList)
      .map(resource => (react_1.default.createElement(MenuItemLink_1.default, {
        key: resource.name, to: `/${resource.name}`, primaryText: translatedResourceName(resource, translate), leftIcon: resource.icon ? react_1.default.createElement(resource.icon, null) : react_1.default.createElement(ViewList_1.default, null), onClick: onMenuClick, dense, sidebarIsOpen: open,
      }))),
    isXSmall && logout));
};
Menu.propTypes = {
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  dense: prop_types_1.default.bool,
  hasDashboard: prop_types_1.default.bool,
  logout: prop_types_1.default.element,
  onMenuClick: prop_types_1.default.func,
};
Menu.defaultProps = {
  onMenuClick() { return null; },
};
exports.default = Menu;
