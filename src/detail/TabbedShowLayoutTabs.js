
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
const TabbedShowLayoutTabs = function (_a) {
  const { children } = _a;
  const rest = __rest(_a, ['children']);
  const location = react_router_dom_1.useLocation();
  const match = react_router_dom_1.useRouteMatch();
  // The location pathname will contain the page path including the current tab path
  // so we can use it as a way to determine the current tab
  const value = location.pathname;
  return (react_1.default.createElement(Tabs_1.default, { indicatorColor: 'primary', value, ...rest }, react_1.Children.map(children, (tab, index) => {
    if (!tab || !react_1.isValidElement(tab)) return null;
    // Builds the full tab tab which is the concatenation of the last matched route in the
    // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
    // and the tab path.
    // This will be used as the Tab's value
    const tabPath = exports.getTabFullPath(tab, index, match.url);
    return react_1.cloneElement(tab, {
      context: 'header',
      value: tabPath,
    });
  })));
};
TabbedShowLayoutTabs.propTypes = {
  children: prop_types_1.default.node,
};
exports.default = TabbedShowLayoutTabs;
