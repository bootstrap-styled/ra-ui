
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
const get_1 = __importDefault(require('lodash/get'));
const FormLabel_1 = __importDefault(require('@material-ui/core/FormLabel'));
const FormControl_1 = __importDefault(require('@material-ui/core/FormControl'));
const FormGroup_1 = __importDefault(require('@material-ui/core/FormGroup'));
const FormHelperText_1 = __importDefault(require('@material-ui/core/FormHelperText'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const CheckboxGroupInputItem_1 = __importDefault(require('./CheckboxGroupInputItem'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const sanitizeRestProps = function (_a) {
  const { setFilter } = _a;
  const { setPagination } = _a;
  const { setSort } = _a;
  const rest = __rest(_a, ['setFilter', 'setPagination', 'setSort']);
  return sanitizeRestProps_1.default(rest);
};
const useStyles = styles_1.makeStyles(theme => ({
  root: {},
  label: {
    transform: 'translate(0, 8px) scale(0.75)',
    transformOrigin: `top ${theme.direction === 'ltr' ? 'left' : 'right'}`,
  },
}));
/**
 * An Input component for a checkbox group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * The expected input must be an array of identifiers (e.g. [12, 31]) which correspond to
 * the 'optionValue' of 'choices' attribute objects.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *     { id: 12, name: 'Ray Hakt' },
 *     { id: 31, name: 'Ann Gullar' },
 *     { id: 42, name: 'Sean Phonee' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi' },
 *    { _id: 456, full_name: 'Jane Austen' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} optionText="full_name" optionValue="_id" />
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
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.category.programming' },
 *    { id: 'lifestyle', name: 'myroot.category.lifestyle' },
 *    { id: 'photography', name: 'myroot.category.photography' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <CheckboxGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Checkbox> components
 */
const CheckboxGroupInput = function (_a) {
  const _b = _a.choices; const choices = _b === void 0 ? [] : _b; const { format } = _a; const { helperText } = _a; const { label } = _a; const _c = _a.margin; const margin = _c === void 0 ? 'dense' : _c; const { onBlur } = _a; const { onChange } = _a; const { onFocus } = _a; const { optionText } = _a; const { optionValue } = _a; const { options } = _a; const { parse } = _a; const { resource } = _a; const { row } = _a; const { source } = _a; const { translate } = _a; const { translateChoice } = _a; const { validate } = _a; const
    rest = __rest(_a, ['choices', 'format', 'helperText', 'label', 'margin', 'onBlur', 'onChange', 'onFocus', 'optionText', 'optionValue', 'options', 'parse', 'resource', 'row', 'source', 'translate', 'translateChoice', 'validate']);
  const classes = useStyles({});
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
  }); const { id } = _d; const _e = _d.input; const finalFormOnChange = _e.onChange; const finalFormOnBlur = _e.onBlur; const { value } = _e; const { isRequired } = _d; const _f = _d.meta; const { error } = _f; const
    { touched } = _f;
  const handleCheck = react_1.useCallback((event, isChecked) => {
    let newValue;
    try {
      // try to convert string value to number, e.g. '123'
      newValue = JSON.parse(event.target.value);
    } catch (e) {
      // impossible to convert value, e.g. 'abc'
      newValue = event.target.value;
    }
    if (isChecked) {
      finalFormOnChange((value || []).concat([newValue]));
    } else {
      finalFormOnChange(value.filter(v => v != newValue)); // eslint-disable-line eqeqeq
    }
    finalFormOnBlur(); // HACK: See https://github.com/final-form/react-final-form/issues/365#issuecomment-515045503
  }, [finalFormOnChange, finalFormOnBlur, value]);
  return (react_1.default.createElement(FormControl_1.default, {
    component: 'fieldset', margin, error: touched && !!error, ...sanitizeRestProps(rest),
  },
  react_1.default.createElement(FormLabel_1.default, { component: 'legend', className: classes.label },
    react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    })),
  react_1.default.createElement(FormGroup_1.default, { row }, choices.map(choice => (react_1.default.createElement(CheckboxGroupInputItem_1.default, {
    key: get_1.default(choice, optionValue), choice, id, onChange: handleCheck, options, optionText, optionValue, translateChoice, value,
  })))),
  (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, null,
    react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText }))) : null));
};
CheckboxGroupInput.propTypes = {
  choices: prop_types_1.default.arrayOf(prop_types_1.default.object).isRequired,
  className: prop_types_1.default.string,
  label: prop_types_1.default.string,
  source: prop_types_1.default.string,
  options: prop_types_1.default.object,
  optionText: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.func,
    prop_types_1.default.element,
  ]),
  optionValue: prop_types_1.default.string,
  row: prop_types_1.default.bool,
  resource: prop_types_1.default.string,
  translateChoice: prop_types_1.default.bool,
};
CheckboxGroupInput.defaultProps = {
  options: {},
  optionText: 'name',
  optionValue: 'id',
  translateChoice: true,
  fullWidth: true,
  row: true,
};
exports.default = CheckboxGroupInput;
