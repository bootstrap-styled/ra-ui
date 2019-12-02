
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
const Dashboard_1 = __importDefault(require('@material-ui/icons/Dashboard'));
const ra_core_1 = require('ra-core');
const MenuItemLink_1 = __importDefault(require('./MenuItemLink'));
const DashboardMenuItem = function (_a) {
  const { locale } = _a;
  const { onClick } = _a;
  const props = __rest(_a, ['locale', 'onClick']);
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(MenuItemLink_1.default, {
    onClick, to: '/', primaryText: translate('ra.page.dashboard'), leftIcon: react_1.default.createElement(Dashboard_1.default, null), exact: true, dense: true, ...props,
  }));
};
DashboardMenuItem.propTypes = {
  classes: prop_types_1.default.object,
  locale: prop_types_1.default.string,
  onClick: prop_types_1.default.func,
};
exports.default = DashboardMenuItem;
