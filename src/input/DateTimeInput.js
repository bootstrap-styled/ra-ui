
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
const leftPad = function (nb) {
  if (nb === void 0) { nb = 2; }
  return function (value) { return ('0'.repeat(nb) + value).slice(-nb); };
};
const leftPad4 = leftPad(4);
const leftPad2 = leftPad(2);
/**
 * @param {Date} value value to convert
 * @returns {String} A standardized datetime (yyyy-MM-ddThh:mm), to be passed to an <input type="datetime-local" />
 */
const convertDateToString = function (value) {
  if (!(value instanceof Date) || isNaN(value.getDate())) return '';
  const yyyy = leftPad4(value.getFullYear());
  const MM = leftPad2(value.getMonth() + 1);
  const dd = leftPad2(value.getDate());
  const hh = leftPad2(value.getHours());
  const mm = leftPad2(value.getMinutes());
  return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
};
// yyyy-MM-ddThh:mm
const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
/**
 * Converts a date from the Redux store, with timezone, to a date string
 * without timezone for use in an <input type="datetime-local" />.
 *
 * @param {Date | String} value date string or object
 */
const format = function (value) {
  // null, undefined and empty string values should not go through convertDateToString
  // otherwise, it returns undefined and will make the input an uncontrolled one.
  if (value == null || value === '') {
    return '';
  }
  if (value instanceof Date) {
    return convertDateToString(value);
  }
  // valid dates should not be converted
  if (dateTimeRegex.test(value)) {
    return value;
  }
  return convertDateToString(new Date(value));
};
/**
 * Converts a datetime string without timezone to a date object
 * with timezone, using the browser timezone.
 *
 * @param {String} value Date string, formatted as yyyy-MM-ddThh:mm
 * @return {Date}
 */
const parse = function (value) { return new Date(value); };
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
exports.DateTimeInput = function (_a) {
  const { label } = _a;
  const { helperText } = _a;
  const _b = _a.margin;
  const margin = _b === void 0 ? 'dense' : _b;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { options } = _a;
  const { source } = _a;
  const { resource } = _a;
  const { validate } = _a;
  const _c = _a.variant;
  const variant = _c === void 0 ? 'filled' : _c;
  const rest = __rest(_a, ['label', 'helperText', 'margin', 'onBlur', 'onChange', 'onFocus', 'options', 'source', 'resource', 'validate', 'variant']);
  const _d = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'datetime-local',
    validate,
    ...rest,
  }); const { id } = _d; const { input } = _d; const { isRequired } = _d; const _e = _d.meta; const { error } = _e; const
    { touched } = _e;
  return (react_1.default.createElement(TextField_1.default, {
    id,
    ...input,
    variant,
    margin,
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
exports.DateTimeInput.propTypes = {
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
};
exports.DateTimeInput.defaultProps = {
  options: {},
};
exports.default = exports.DateTimeInput;
