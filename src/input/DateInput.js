
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
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */
const convertDateToString = function (value) {
  if (!(value instanceof Date) || isNaN(value.getDate())) return;
  const pad = '00';
  const yyyy = value.getFullYear().toString();
  const MM = (value.getMonth() + 1).toString();
  const dd = value.getDate().toString();
  return `${yyyy}-${(pad + MM).slice(-2)}-${(pad + dd).slice(-2)}`;
};
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const getStringFromDate = function (value) {
  // null, undefined and empty string values should not go through dateFormatter
  // otherwise, it returns undefined and will make the input an uncontrolled one.
  if (value == null || value === '') {
    return '';
  }
  if (value instanceof Date) {
    return convertDateToString(value);
  }
  // valid dates should not be converted
  if (dateRegex.test(value)) {
    return value;
  }
  return convertDateToString(new Date(value));
};
exports.DateInput = function (_a) {
  const _b = _a.format; const format = _b === void 0 ? getStringFromDate : _b; const { label } = _a; const { options } = _a; const { source } = _a; const { resource } = _a; const { helperText } = _a; const _c = _a.margin; const margin = _c === void 0 ? 'dense' : _c; const { onBlur } = _a; const { onChange } = _a; const { onFocus } = _a; const { parse } = _a; const { validate } = _a; const _d = _a.variant; const variant = _d === void 0 ? 'filled' : _d; const
    rest = __rest(_a, ['format', 'label', 'options', 'source', 'resource', 'helperText', 'margin', 'onBlur', 'onChange', 'onFocus', 'parse', 'validate', 'variant']);
  const _e = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    validate,
    ...rest,
  }); const { id } = _e; const { input } = _e; const { isRequired } = _e; const _f = _e.meta; const { error } = _f; const
    { touched } = _f;
  return (react_1.default.createElement(TextField_1.default, {
    id,
    ...input,
    variant,
    margin,
    type: 'date',
    error: !!(touched && error),
    helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
    label: react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    }),
    InputLabelProps: {
      shrink: true,
    },
    ...options,
    ...sanitizeRestProps_1.default(rest),
  }));
};
exports.DateInput.propTypes = {
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
};
exports.DateInput.defaultProps = {
  options: {},
};
exports.default = exports.DateInput;
