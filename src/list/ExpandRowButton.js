
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
const IconButton_1 = __importDefault(require('@material-ui/core/IconButton'));
const ExpandMore_1 = __importDefault(require('@material-ui/icons/ExpandMore'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const ExpandRowButton = function (_a) {
  let _b;
  const { classes } = _a;
  const { expanded } = _a;
  const { expandContentId } = _a;
  const props = __rest(_a, ['classes', 'expanded', 'expandContentId']);
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(IconButton_1.default, {
    'aria-label': translate(expanded ? 'ra.action.close' : 'ra.action.expand'),
    'aria-expanded': expanded,
    'aria-controls': expandContentId,
    className: classnames_1.default(classes.expandIcon, (_b = {},
    _b[classes.expanded] = expanded,
    _b)),
    component: 'div',
    tabIndex: -1,
    'aria-hidden': 'true',
    ...props,
  },
  react_1.default.createElement(ExpandMore_1.default, null)));
};
exports.default = react_1.memo(ExpandRowButton);
