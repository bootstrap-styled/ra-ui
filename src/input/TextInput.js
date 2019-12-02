
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
const ra_core_1 = require('ra-core');
const ResettableTextField_1 = __importDefault(require('./ResettableTextField'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
exports.TextInput = function (_a) {
  const { label } = _a;
  const { format } = _a;
  const { helperText } = _a;
  const { onBlur } = _a;
  const { onFocus } = _a;
  const { onChange } = _a;
  const { options } = _a;
  const { parse } = _a;
  const { resource } = _a;
  const { source } = _a;
  const { validate } = _a;
  const rest = __rest(_a, ['label', 'format', 'helperText', 'onBlur', 'onFocus', 'onChange', 'options', 'parse', 'resource', 'source', 'validate']);
  const _b = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'text',
    validate,
    ...rest,
  }); const { id } = _b; const { input } = _b; const { isRequired } = _b; const _c = _b.meta; const { error } = _c; const
    { touched } = _c;
  return (react_1.default.createElement(ResettableTextField_1.default, {
    id,
    ...input,
    label: label !== ''
            && label !== false && (react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    })),
    error: !!(touched && error),
    helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
    ...options,
    ...sanitizeRestProps_1.default(rest),
  }));
};
exports.TextInput.propTypes = {
  className: prop_types_1.default.string,
  label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
};
exports.TextInput.defaultProps = {
  options: {},
};
exports.default = exports.TextInput;
