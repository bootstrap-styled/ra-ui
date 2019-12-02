
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
const FormControlLabel_1 = __importDefault(require('@material-ui/core/FormControlLabel'));
const Checkbox_1 = __importDefault(require('@material-ui/core/Checkbox'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles({
  checkbox: {
    height: 32,
  },
});
const CheckboxGroupInputItem = function (_a) {
  const { id } = _a;
  const { choice } = _a;
  const { onChange } = _a;
  const { optionText } = _a;
  const { optionValue } = _a;
  const { translateChoice } = _a;
  const { value } = _a;
  const rest = __rest(_a, ['id', 'choice', 'onChange', 'optionText', 'optionValue', 'translateChoice', 'value']);
  const classes = useStyles({});
  const _b = ra_core_1.useChoices({
    optionText,
    optionValue,
    translateChoice,
  }); const { getChoiceText } = _b; const
    { getChoiceValue } = _b;
  const choiceName = getChoiceText(choice);
  return (react_1.default.createElement(FormControlLabel_1.default, {
    htmlFor: `${id}_${getChoiceValue(choice)}`,
    key: getChoiceValue(choice),
    onChange,
    control: react_1.default.createElement(Checkbox_1.default, {
      id: `${id}_${getChoiceValue(choice)}`,
      color: 'primary',
      className: classes.checkbox,
      checked: value
        ? value.find(v => v == getChoiceValue(choice)) // eslint-disable-line eqeqeq
                    !== undefined
        : false,
      value: String(getChoiceValue(choice)),
      ...rest,
    }),
    label: choiceName,
  }));
};
exports.default = CheckboxGroupInputItem;
