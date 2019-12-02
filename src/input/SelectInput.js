
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
const MenuItem_1 = __importDefault(require('@material-ui/core/MenuItem'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const ResettableTextField_1 = __importDefault(require('./ResettableTextField'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const sanitizeRestProps = function (_a) {
  const { addLabel } = _a;
  const { allowEmpty } = _a;
  const { emptyValue } = _a;
  const { basePath } = _a;
  const { choices } = _a;
  const { className } = _a;
  const { component } = _a;
  const { crudGetMatching } = _a;
  const { crudGetOne } = _a;
  const { defaultValue } = _a;
  const { filter } = _a;
  const { filterToQuery } = _a;
  const { formClassName } = _a;
  const { initializeForm } = _a;
  const { input } = _a;
  const { isRequired } = _a;
  const { label } = _a;
  const { locale } = _a;
  const { meta } = _a;
  const { onChange } = _a;
  const { options } = _a;
  const { optionValue } = _a;
  const { optionText } = _a;
  const { disableValue } = _a;
  const { perPage } = _a;
  const { record } = _a;
  const { reference } = _a;
  const { resource } = _a;
  const { setFilter } = _a;
  const { setPagination } = _a;
  const { setSort } = _a;
  const { sort } = _a;
  const { source } = _a;
  const { textAlign } = _a;
  const { translate } = _a;
  const { translateChoice } = _a;
  const { validation } = _a;
  const rest = __rest(_a, ['addLabel', 'allowEmpty', 'emptyValue', 'basePath', 'choices', 'className', 'component', 'crudGetMatching', 'crudGetOne', 'defaultValue', 'filter', 'filterToQuery', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'locale', 'meta', 'onChange', 'options', 'optionValue', 'optionText', 'disableValue', 'perPage', 'record', 'reference', 'resource', 'setFilter', 'setPagination', 'setSort', 'sort', 'source', 'textAlign', 'translate', 'translateChoice', 'validation']);
  return rest;
};
const useStyles = styles_1.makeStyles(theme => ({
  input: {
    minWidth: theme.spacing(20),
  },
}));
/**
 * An Input component for a select box, using an array of objects for the options
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
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />}/>
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
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Select> component
 *
 * You can disable some choices by providing a `disableValue` field which name is `disabled` by default
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', disabled: true },
 * ];
 *
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', not_available: true },
 * ];
 * <SelectInput source="gender" choices={choices} disableValue="not_available" />
 *
 */
const SelectInput = function (_a) {
  const { allowEmpty } = _a;
  const _b = _a.choices;
  const choices = _b === void 0 ? [] : _b;
  const { className } = _a;
  const { disableValue } = _a;
  const { emptyText } = _a;
  const { emptyValue } = _a;
  const { format } = _a;
  const { helperText } = _a;
  const { label } = _a;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { options } = _a;
  const { optionText } = _a;
  const { optionValue } = _a;
  const { parse } = _a;
  const { resource } = _a;
  const { source } = _a;
  const { translateChoice } = _a;
  const { validate } = _a;
  const rest = __rest(_a, ['allowEmpty', 'choices', 'className', 'disableValue', 'emptyText', 'emptyValue', 'format', 'helperText', 'label', 'onBlur', 'onChange', 'onFocus', 'options', 'optionText', 'optionValue', 'parse', 'resource', 'source', 'translateChoice', 'validate']);
  const translate = ra_core_1.useTranslate();
  const classes = useStyles({});
  const _c = ra_core_1.useChoices({
    optionText,
    optionValue,
    translateChoice,
  }); const { getChoiceText } = _c; const
    { getChoiceValue } = _c;
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
  }); const { id } = _d; const { input } = _d; const { isRequired } = _d; const _e = _d.meta; const { error } = _e; const
    { touched } = _e;
  const renderEmptyItemOption = react_1.useCallback(() => react_1.default.isValidElement(emptyText)
    ? react_1.default.cloneElement(emptyText)
    : translate(emptyText, { _: emptyText }), [emptyText, translate]);
  const renderMenuItemOption = react_1.useCallback(choice => getChoiceText(choice), [
    getChoiceText,
  ]);
  return (react_1.default.createElement(ResettableTextField_1.default, {
    id,
    ...input,
    select: true,
    label: react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    }),
    className: `${classes.input} ${className}`,
    clearAlwaysVisible: true,
    error: !!(touched && error),
    helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
    ...options,
    ...sanitizeRestProps(rest),
  },
  allowEmpty ? (react_1.default.createElement(MenuItem_1.default, {
    value: emptyValue, key: 'null', 'aria-label': translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'),
  }, renderEmptyItemOption())) : null,
  choices.map(choice => (react_1.default.createElement(MenuItem_1.default, { key: getChoiceValue(choice), value: getChoiceValue(choice), disabled: get_1.default(choice, disableValue) }, renderMenuItemOption(choice))))));
};
SelectInput.propTypes = {
  allowEmpty: prop_types_1.default.bool.isRequired,
  emptyText: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
  emptyValue: prop_types_1.default.any,
  choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  optionText: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.func,
    prop_types_1.default.element,
  ]).isRequired,
  optionValue: prop_types_1.default.string.isRequired,
  disableValue: prop_types_1.default.string,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  translateChoice: prop_types_1.default.bool,
};
SelectInput.defaultProps = {
  allowEmpty: false,
  emptyText: '',
  emptyValue: '',
  options: {},
  optionText: 'name',
  optionValue: 'id',
  translateChoice: true,
  disableValue: 'disabled',
};
exports.default = SelectInput;
