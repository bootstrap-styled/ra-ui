
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
const MenuItem_1 = __importDefault(require('@material-ui/core/MenuItem'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const useStyles = styles_1.makeStyles(theme => ({
  input: { width: theme.spacing(16) },
}));
const getBooleanFromString = function (value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return null;
};
const getStringFromBoolean = function (value) {
  if (value === true) return 'true';
  if (value === false) return 'false';
  return '';
};
const NullableBooleanInput = function (_a) {
  const { className } = _a;
  const _b = _a.format;
  const format = _b === void 0 ? getStringFromBoolean : _b;
  const { helperText } = _a;
  const { label } = _a;
  const _c = _a.margin;
  const margin = _c === void 0 ? 'dense' : _c;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { options } = _a;
  const _d = _a.parse;
  const parse = _d === void 0 ? getBooleanFromString : _d;
  const { resource } = _a;
  const { source } = _a;
  const { validate } = _a;
  const _e = _a.variant;
  const variant = _e === void 0 ? 'filled' : _e;
  const rest = __rest(_a, ['className', 'format', 'helperText', 'label', 'margin', 'onBlur', 'onChange', 'onFocus', 'options', 'parse', 'resource', 'source', 'validate', 'variant']);
  const classes = useStyles({});
  const translate = ra_core_1.useTranslate();
  const _f = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'checkbox',
    validate,
  }); const { id } = _f; const { input } = _f; const { isRequired } = _f; const _g = _f.meta; const { error } = _g; const
    { touched } = _g;
  return (react_1.default.createElement(TextField_1.default, {
    id,
    ...input,
    select: true,
    margin,
    label: react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    }),
    error: !!(touched && error),
    helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
    className: classnames_1.default(classes.input, className),
    variant,
    ...options,
    ...sanitizeRestProps_1.default(rest),
  },
  react_1.default.createElement(MenuItem_1.default, { value: '' }, translate('ra.boolean.null')),
  react_1.default.createElement(MenuItem_1.default, { value: 'false' }, translate('ra.boolean.false')),
  react_1.default.createElement(MenuItem_1.default, { value: 'true' }, translate('ra.boolean.true'))));
};
NullableBooleanInput.propTypes = {
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
};
exports.default = NullableBooleanInput;
