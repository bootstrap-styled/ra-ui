
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
const react_dom_1 = require('react-dom');
const prop_types_1 = __importDefault(require('prop-types'));
const ra_core_1 = require('ra-core');
const Title = function (_a) {
  const { className } = _a;
  const { defaultTitle } = _a;
  const { locale } = _a;
  const { record } = _a;
  const { title } = _a;
  const rest = __rest(_a, ['className', 'defaultTitle', 'locale', 'record', 'title']);
  const translate = ra_core_1.useTranslate();
  const container = document.getElementById('react-admin-title');
  if (!container) return null;
  ra_core_1.warning(!defaultTitle && !title, 'Missing title prop in <Title> element');
  const titleElement = !title ? (react_1.default.createElement('span', { className, ...rest }, defaultTitle)) : typeof title === 'string' ? (react_1.default.createElement('span', { className, ...rest }, translate(title, { _: title }))) : (react_1.cloneElement(title, { className, record, ...rest }));
  return react_dom_1.createPortal(titleElement, container);
};
exports.TitlePropType = prop_types_1.default.oneOfType([
  prop_types_1.default.string,
  prop_types_1.default.element,
]);
Title.propTypes = {
  defaultTitle: prop_types_1.default.string,
  className: prop_types_1.default.string,
  locale: prop_types_1.default.string,
  record: prop_types_1.default.object,
  title: exports.TitlePropType,
};
exports.default = Title;
