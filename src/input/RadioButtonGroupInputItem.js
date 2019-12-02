
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
const react_final_form_1 = require('react-final-form');
const FormControlLabel_1 = __importDefault(require('@material-ui/core/FormControlLabel'));
const Radio_1 = __importDefault(require('@material-ui/core/Radio'));
const ra_core_1 = require('ra-core');
const RadioButtonGroupInputItem = function (_a) {
  const { choice } = _a;
  const { optionText } = _a;
  const { optionValue } = _a;
  const { source } = _a;
  const { translateChoice } = _a;
  const _b = ra_core_1.useChoices({
    optionText,
    optionValue,
    translateChoice,
  }); const { getChoiceText } = _b; const
    { getChoiceValue } = _b;
  const label = getChoiceText(choice);
  const value = getChoiceValue(choice);
  const _c = react_final_form_1.useField(source, {
    type: 'radio',
    value,
  }).input; const { type } = _c; const
    inputProps = __rest(_c, ['type']);
  const nodeId = `${source}_${label}`;
  return (react_1.default.createElement(FormControlLabel_1.default, { label, htmlFor: nodeId, control: react_1.default.createElement(Radio_1.default, { id: nodeId, color: 'primary', ...inputProps }) }));
};
exports.default = RadioButtonGroupInputItem;
