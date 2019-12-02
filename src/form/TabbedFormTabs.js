
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
const Tabs_1 = __importDefault(require('@material-ui/core/Tabs'));
const react_router_dom_1 = require('react-router-dom');
exports.getTabFullPath = function (tab, index, baseUrl) {
  return `${baseUrl}${tab.props.path ? `/${tab.props.path}` : index > 0 ? `/${index}` : ''}`;
};
const TabbedFormTabs = function (_a) {
  const { children } = _a;
  const { classes } = _a;
  const { url } = _a;
  const { tabsWithErrors } = _a;
  const rest = __rest(_a, ['children', 'classes', 'url', 'tabsWithErrors']);
  const location = react_router_dom_1.useLocation();
  const validTabPaths = react_1.Children.map(children, (tab, index) => {
    if (!react_1.isValidElement(tab)) return undefined;
    return exports.getTabFullPath(tab, index, url);
  });
    // This ensure we don't get warnings from material-ui Tabs component when
    // the current location pathname targets a dynamically added Tab
    // In the case the targeted Tab is not present at first render (when
    // using permissions for example) we temporarily switch to the first
    // available tab. The current location will be applied again on the
    // first render containing the targeted tab. This is almost transparent
    // for the user who may just see an short tab selection animation
  const tabValue = validTabPaths.includes(location.pathname)
    ? location.pathname
    : validTabPaths[0];
  return (react_1.default.createElement(Tabs_1.default, { value: tabValue, indicatorColor: 'primary', ...rest }, react_1.Children.map(children, (tab, index) => {
    if (!react_1.isValidElement(tab)) return null;
    // Builds the full tab tab which is the concatenation of the last matched route in the
    // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
    // and the tab path.
    // This will be used as the Tab's value
    const tabPath = exports.getTabFullPath(tab, index, url);
    return react_1.cloneElement(tab, {
      intent: 'header',
      value: tabPath,
      className: tabsWithErrors.includes(tab.props.label)
                && location.pathname !== tabPath
        ? classes.errorTabButton
        : null,
    });
  })));
};
TabbedFormTabs.propTypes = {
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  url: prop_types_1.default.string,
  tabsWithErrors: prop_types_1.default.arrayOf(prop_types_1.default.string),
};
exports.default = TabbedFormTabs;
