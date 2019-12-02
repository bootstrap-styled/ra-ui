
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
const core_1 = require('@material-ui/core');
const get_1 = __importDefault(require('lodash/get'));
const ra_core_1 = require('ra-core');
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const RadioButtonGroupInputItem_1 = __importDefault(require('./RadioButtonGroupInputItem'));
const useStyles = core_1.makeStyles(theme => ({
  label: {
    transform: 'translate(0, 5px) scale(0.75)',
    transformOrigin: `top ${theme.direction === 'ltr' ? 'left' : 'right'}`,
  },
}));
/**
 * An Input component for a radio button group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <RadioButtonGroupInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <RadioButtonGroupInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <RadioButtonGroupInput source="gender" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <RadioButtonGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <RadioButtonGroup> component
 */
exports.RadioButtonGroupInput = function (_a) {
  const _b = _a.choices; const choices = _b === void 0 ? [] : _b; const classesOverride = _a.classes; const { format } = _a; const { helperText } = _a; const { label } = _a; const _c = _a.margin; const margin = _c === void 0 ? 'dense' : _c; const { onBlur } = _a; const { onChange } = _a; const { onFocus } = _a; const { options } = _a; const { optionText } = _a; const { optionValue } = _a; const { parse } = _a; const { resource } = _a; const { row } = _a; const { source } = _a; const { translateChoice } = _a; const { validate } = _a; const
    rest = __rest(_a, ['choices', 'classes', 'format', 'helperText', 'label', 'margin', 'onBlur', 'onChange', 'onFocus', 'options', 'optionText', 'optionValue', 'parse', 'resource', 'row', 'source', 'translateChoice', 'validate']);
  const classes = useStyles(classesOverride);
  const _d = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    validate,
    ...rest,
  }); const { id } = _d; const { isRequired } = _d; const _e = _d.meta; const { error } = _e; const
    { touched } = _e;
  return (react_1.default.createElement(core_1.FormControl, {
    component: 'fieldset', margin, error: touched && !!error, ...sanitizeRestProps_1.default(rest),
  },
  react_1.default.createElement(core_1.FormLabel, { component: 'legend', className: classes.label },
    react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    })),
  react_1.default.createElement(core_1.RadioGroup, { id, row, ...options }, choices.map(choice => (react_1.default.createElement(RadioButtonGroupInputItem_1.default, {
    key: get_1.default(choice, optionValue), choice, optionText, optionValue, source, translateChoice,
  })))),
  (touched && error) || helperText ? (react_1.default.createElement(core_1.FormHelperText, null,
    react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText }))) : null));
};
exports.RadioButtonGroupInput.propTypes = {
  choices: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  optionText: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.func,
    prop_types_1.default.element,
  ]),
  optionValue: prop_types_1.default.string,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  translateChoice: prop_types_1.default.bool,
};
exports.RadioButtonGroupInput.defaultProps = {
  options: {},
  optionText: 'name',
  optionValue: 'id',
  row: true,
  translateChoice: true,
};
exports.default = exports.RadioButtonGroupInput;
