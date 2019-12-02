
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
const FormControlLabel_1 = __importDefault(require('@material-ui/core/FormControlLabel'));
const FormHelperText_1 = __importDefault(require('@material-ui/core/FormHelperText'));
const FormGroup_1 = __importDefault(require('@material-ui/core/FormGroup'));
const Switch_1 = __importDefault(require('@material-ui/core/Switch'));
const ra_core_1 = require('ra-core');
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const InputPropTypes_1 = __importDefault(require('./InputPropTypes'));
const BooleanInput = function (_a) {
  const { format } = _a;
  const { label } = _a;
  const { fullWidth } = _a;
  const { helperText } = _a;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { options } = _a;
  const { parse } = _a;
  const { resource } = _a;
  const { source } = _a;
  const { validate } = _a;
  const rest = __rest(_a, ['format', 'label', 'fullWidth', 'helperText', 'onBlur', 'onChange', 'onFocus', 'options', 'parse', 'resource', 'source', 'validate']);
  const _b = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'checkbox',
    validate,
    ...rest,
  }); const { id } = _b; const _c = _b.input; const finalFormOnChange = _c.onChange; const { type } = _c; const { value } = _c; const inputProps = __rest(_c, ['onChange', 'type', 'value']); const { isRequired } = _b; const _d = _b.meta; const { error } = _d; const
    { touched } = _d;
  const handleChange = react_1.useCallback((event, value) => {
    finalFormOnChange(value);
  }, [finalFormOnChange]);
  return (react_1.default.createElement(FormGroup_1.default, { ...sanitizeRestProps_1.default(rest) },
    react_1.default.createElement(FormControlLabel_1.default, {
      control: react_1.default.createElement(Switch_1.default, {
        id, color: 'primary', checked: !!value, onChange: handleChange, ...inputProps, ...options,
      }),
      label: react_1.default.createElement(ra_core_1.FieldTitle, {
        label, source, resource, isRequired,
      }),
    }),
    (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, { error: !!error },
      react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText }))) : null));
};
BooleanInput.propTypes = { ...InputPropTypes_1.default, options: prop_types_1.default.shape(Switch_1.default.propTypes) };
BooleanInput.defaultProps = {
  options: {},
};
exports.default = BooleanInput;
