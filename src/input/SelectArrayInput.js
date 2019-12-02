
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
const core_1 = require('@material-ui/core');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const sanitizeRestProps = function (_a) {
  const { addLabel } = _a;
  const { allowEmpty } = _a;
  const { basePath } = _a;
  const { choices } = _a;
  const { classNamInputWithOptionsPropse } = _a;
  const { componenInputWithOptionsPropst } = _a;
  const { crudGetMInputWithOptionsPropsatching } = _a;
  const { crudGetOInputWithOptionsPropsne } = _a;
  const { defaultValue } = _a;
  const { filter } = _a;
  const { filterToQuery } = _a;
  const { formClassName } = _a;
  const { initializeForm } = _a;
  const { input } = _a;
  const { isRequired } = _a;
  const { label } = _a;
  const { limitChoicesToValue } = _a;
  const { loaded } = _a;
  const { locale } = _a;
  const { meta } = _a;
  const { onChange } = _a;
  const { options } = _a;
  const { optionValue } = _a;
  const { optionText } = _a;
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
  const rest = __rest(_a, ['addLabel', 'allowEmpty', 'basePath', 'choices', 'classNamInputWithOptionsPropse', 'componenInputWithOptionsPropst', 'crudGetMInputWithOptionsPropsatching', 'crudGetOInputWithOptionsPropsne', 'defaultValue', 'filter', 'filterToQuery', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'limitChoicesToValue', 'loaded', 'locale', 'meta', 'onChange', 'options', 'optionValue', 'optionText', 'perPage', 'record', 'reference', 'resource', 'setFilter', 'setPagination', 'setSort', 'sort', 'source', 'textAlign', 'translate', 'translateChoice', 'validation']);
  return rest;
};
const useStyles = core_1.makeStyles(theme => ({
  root: {},
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1 / 4),
  },
  select: {
    height: 'auto',
    overflow: 'auto',
  },
}));
/**
 * An Input component for a select box allowing multiple selections, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'programming', name: 'Programming' },
 *    { id: 'lifestyle', name: 'Lifestyle' },
 *    { id: 'photography', name: 'Photography' },
 * ];
 * <SelectArrayInput source="tags" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectArrayInput source="authors" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectArrayInput source="authors" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectArrayInput source="authors" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.tags.programming' },
 *    { id: 'lifestyle', name: 'myroot.tags.lifestyle' },
 *    { id: 'photography', name: 'myroot.tags.photography' },
 * ];
 */
const SelectArrayInput = function (_a) {
  const _b = _a.choices; const choices = _b === void 0 ? [] : _b; const classesOverride = _a.classes; const { className } = _a; const { format } = _a; const { helperText } = _a; const { label } = _a; const _c = _a.margin; const margin = _c === void 0 ? 'dense' : _c; const { onBlur } = _a; const { onChange } = _a; const { onFocus } = _a; const { options } = _a; const { optionText } = _a; const { optionValue } = _a; const { parse } = _a; const { resource } = _a; const { source } = _a; const { translateChoice } = _a; const { validate } = _a; const _d = _a.variant; const variant = _d === void 0 ? 'filled' : _d; const
    rest = __rest(_a, ['choices', 'classes', 'className', 'format', 'helperText', 'label', 'margin', 'onBlur', 'onChange', 'onFocus', 'options', 'optionText', 'optionValue', 'parse', 'resource', 'source', 'translateChoice', 'validate', 'variant']);
  const classes = useStyles({ classes: classesOverride });
  const _e = ra_core_1.useChoices({
    optionText,
    optionValue,
    translateChoice,
  }); const { getChoiceText } = _e; const
    { getChoiceValue } = _e;
  const _f = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    validate,
    ...rest,
  }); const { id } = _f; const { input } = _f; const { isRequired } = _f; const _g = _f.meta; const { error } = _g; const
    { touched } = _g;
  const renderMenuItemOption = react_1.useCallback(choice => getChoiceText(choice), [
    getChoiceText,
  ]);
  const renderMenuItem = react_1.useCallback(choice => choice ? (react_1.default.createElement(core_1.MenuItem, { key: getChoiceValue(choice), value: getChoiceValue(choice) }, renderMenuItemOption(choice))) : null, [getChoiceValue, renderMenuItemOption]);
  return (react_1.default.createElement(core_1.FormControl, {
    margin, className: classnames_1.default(classes.root, className), error: touched && !!error, variant, ...sanitizeRestProps(rest),
  },
  react_1.default.createElement(core_1.InputLabel, { htmlFor: id, shrink: true, variant },
    react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    })),
  react_1.default.createElement(core_1.Select, {
    autoWidth: true,
    multiple: true,
    input: variant === 'standard' ? (react_1.default.createElement(core_1.Input, { id })) : (react_1.default.createElement(core_1.FilledInput, { id })),
    error: !!(touched && error),
    renderValue(selected) {
      return (react_1.default.createElement('div', { className: classes.chips }, selected
        .map(item => choices.find(choice => getChoiceValue(choice) === item))
        .map(item => (react_1.default.createElement(core_1.Chip, { key: getChoiceValue(item), label: renderMenuItemOption(item), className: classes.chip })))));
    },
    'data-testid': 'selectArray',
    variant,
    ...input,
    value: input.value || [],
    ...options,
  }, choices.map(renderMenuItem)),
  (touched && error) || helperText ? (react_1.default.createElement(core_1.FormHelperText, null,
    react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText }))) : null));
};
SelectArrayInput.propTypes = {
  choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  children: prop_types_1.default.node,
  label: prop_types_1.default.string,
  options: prop_types_1.default.object,
  optionText: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.func,
    prop_types_1.default.element,
  ]).isRequired,
  optionValue: prop_types_1.default.string.isRequired,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  translateChoice: prop_types_1.default.bool,
};
SelectArrayInput.defaultProps = {
  options: {},
  optionText: 'name',
  optionValue: 'id',
  translateChoice: true,
};
exports.default = SelectArrayInput;
