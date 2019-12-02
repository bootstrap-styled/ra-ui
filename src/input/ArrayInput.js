
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
const ra_core_1 = require('ra-core');
const react_final_form_arrays_1 = require('react-final-form-arrays');
const core_1 = require('@material-ui/core');
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
/**
 * To edit arrays of data embedded inside a record, <ArrayInput> creates a list of sub-forms.
 *
 *  @example
 *
 *      import { ArrayInput, SimpleFormIterator, DateInput, UrlInput } from 'react-admin';
 *
 *      <ArrayInput source="backlinks">
 *          <SimpleFormIterator>
 *              <DateInput source="date" />
 *              <UrlInput source="url" />
 *          </SimpleFormIterator>
 *      </ArrayInput>
 *
 * <ArrayInput> allows the edition of embedded arrays, like the backlinks field
 * in the following post record:
 *
 * {
 *   id: 123
 *   backlinks: [
 *         {
 *             date: '2012-08-10T00:00:00.000Z',
 *             url: 'http://example.com/foo/bar.html',
 *         },
 *         {
 *             date: '2012-08-14T00:00:00.000Z',
 *             url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 *         }
 *    ]
 * }
 *
 * <ArrayInput> expects a single child, which must be a *form iterator* component.
 * A form iterator is a component accepting a fields object as passed by
 * react-final-form-arrays's useFieldArray() hook, and defining a layout for
 * an array of fields. For instance, the <SimpleFormIterator> component
 * displays an array of fields in an unordered list (<ul>), one sub-form by
 * list item (<li>). It also provides controls for adding and removing
 * a sub-record (a backlink in this example).
 *
 * @see https://github.com/final-form/react-final-form-arrays
 */
exports.ArrayInput = function (_a) {
  const { className } = _a;
  const { defaultValue } = _a;
  const { label } = _a;
  const { children } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { source } = _a;
  const { validate } = _a;
  const { variant } = _a;
  const _b = _a.margin;
  const margin = _b === void 0 ? 'dense' : _b;
  const rest = __rest(_a, ['className', 'defaultValue', 'label', 'children', 'record', 'resource', 'source', 'validate', 'variant', 'margin']);
  const fieldProps = react_final_form_arrays_1.useFieldArray(source, { initialValue: defaultValue, validate, ...rest });
  return (react_1.default.createElement(core_1.FormControl, {
    fullWidth: true, margin: 'normal', className, ...sanitizeRestProps_1.default(rest),
  },
  react_1.default.createElement(core_1.InputLabel, { htmlFor: source, shrink: true },
    react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired: ra_core_1.isRequired(validate),
    })),
  react_1.cloneElement(react_1.Children.only(children), {
    ...fieldProps,
    record,
    resource,
    source,
    variant,
    margin,
  })));
};
exports.ArrayInput.propTypes = {
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
  defaultValue: prop_types_1.default.any,
  isRequired: prop_types_1.default.bool,
  label: prop_types_1.default.string,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  record: prop_types_1.default.object,
  options: prop_types_1.default.object,
  validate: prop_types_1.default.oneOfType([
    prop_types_1.default.func,
    prop_types_1.default.arrayOf(prop_types_1.default.func),
  ]),
};
exports.ArrayInput.defaultProps = {
  options: {},
  fullWidth: true,
};
exports.default = exports.ArrayInput;
