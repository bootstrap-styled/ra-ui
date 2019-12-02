
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
const TextField_1 = __importDefault(require('@material-ui/core/TextField'));
const ra_core_1 = require('ra-core');
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const convertStringToNumber = function (value) {
  const float = parseFloat(value);
  return isNaN(float) ? null : float;
};
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
const NumberInput = function (_a) {
  const { format } = _a;
  const { helperText } = _a;
  const { label } = _a;
  const _b = _a.margin;
  const margin = _b === void 0 ? 'dense' : _b;
  const { onBlur } = _a;
  const { onFocus } = _a;
  const { onChange } = _a;
  const { options } = _a;
  const _c = _a.parse;
  const parse = _c === void 0 ? convertStringToNumber : _c;
  const { resource } = _a;
  const { source } = _a;
  const { step } = _a;
  const { validate } = _a;
  const _d = _a.variant;
  const variant = _d === void 0 ? 'filled' : _d;
  const overrideInputProps = _a.inputProps;
  const rest = __rest(_a, ['format', 'helperText', 'label', 'margin', 'onBlur', 'onFocus', 'onChange', 'options', 'parse', 'resource', 'source', 'step', 'validate', 'variant', 'inputProps']);
  const _e = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'number',
    validate,
    ...rest,
  }); const { id } = _e; const { input } = _e; const { isRequired } = _e; const _f = _e.meta; const { error } = _f; const
    { touched } = _f;
  const inputProps = { ...overrideInputProps, step };
  return (react_1.default.createElement(TextField_1.default, {
    id,
    ...input,
    variant,
    error: !!(touched && error),
    helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
    label: react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    }),
    margin,
    inputProps,
    ...options,
    ...sanitizeRestProps_1.default(rest),
  }));
};
NumberInput.propTypes = {
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  step: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
NumberInput.defaultProps = {
  options: {},
  step: 'any',
  textAlign: 'right',
};
exports.default = NumberInput;
