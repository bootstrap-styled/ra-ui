
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
const LinearProgress_1 = __importDefault(require('../layout/LinearProgress'));
const Labeled_1 = __importDefault(require('../input/Labeled'));
const ReferenceError_1 = __importDefault(require('./ReferenceError'));
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getMatching()`) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */
exports.ReferenceArrayInput = function (_a) {
  const { children } = _a;
  const idOverride = _a.id;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { validate } = _a;
  const props = __rest(_a, ['children', 'id', 'onBlur', 'onChange', 'onFocus', 'validate']);
  if (react_1.default.Children.count(children) !== 1) {
    throw new Error('<ReferenceArrayInput> only accepts a single child (like <Datagrid>)');
  }
  const _b = ra_core_1.useInput({
    id: idOverride,
    onBlur,
    onChange,
    onFocus,
    source: props.source,
    validate,
  }); const { id } = _b; const { input } = _b; const { isRequired } = _b; const
    { meta } = _b;
  const controllerProps = ra_core_1.useReferenceArrayInputController({ ...props, input });
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(exports.ReferenceArrayInputView, {
    id, input, isRequired, meta, translate, children, ...props, ...controllerProps,
  }));
};
exports.ReferenceArrayInput.propTypes = {
  allowEmpty: prop_types_1.default.bool.isRequired,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element.isRequired,
  className: prop_types_1.default.string,
  filter: prop_types_1.default.object,
  filterToQuery: prop_types_1.default.func.isRequired,
  label: prop_types_1.default.string,
  perPage: prop_types_1.default.number,
  reference: prop_types_1.default.string.isRequired,
  resource: prop_types_1.default.string,
  sort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.oneOf(['ASC', 'DESC']),
  }),
  source: prop_types_1.default.string,
};
exports.ReferenceArrayInput.defaultProps = {
  allowEmpty: false,
  filter: {},
  filterToQuery(searchText) { return (searchText ? { q: searchText } : {}); },
  perPage: 25,
  sort: { field: 'id', order: 'DESC' },
};
const sanitizeRestProps = function (_a) {
  const { alwaysOn } = _a;
  const { basePath } = _a;
  const { component } = _a;
  const { crudGetMany } = _a;
  const { crudGetMatching } = _a;
  const { defaultValue } = _a;
  const { filterToQuery } = _a;
  const { formClassName } = _a;
  const { initializeForm } = _a;
  const { input } = _a;
  const { isRequired } = _a;
  const { label } = _a;
  const { locale } = _a;
  const { meta } = _a;
  const { optionText } = _a;
  const { optionValue } = _a;
  const { perPage } = _a;
  const { record } = _a;
  const { referenceSource } = _a;
  const { resource } = _a;
  const { allowEmpty } = _a;
  const { source } = _a;
  const { textAlign } = _a;
  const { translate } = _a;
  const { translateChoice } = _a;
  const rest = __rest(_a, ['alwaysOn', 'basePath', 'component', 'crudGetMany', 'crudGetMatching', 'defaultValue', 'filterToQuery', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'locale', 'meta', 'optionText', 'optionValue', 'perPage', 'record', 'referenceSource', 'resource', 'allowEmpty', 'source', 'textAlign', 'translate', 'translateChoice']);
  return rest;
};
exports.ReferenceArrayInputView = function (_a) {
  const { allowEmpty } = _a;
  const { basePath } = _a;
  const { children } = _a;
  const { choices } = _a;
  const { className } = _a;
  const { error } = _a;
  const { input } = _a;
  const { loading } = _a;
  const { isRequired } = _a;
  const { label } = _a;
  const { meta } = _a;
  const { onChange } = _a;
  const { options } = _a;
  const { resource } = _a;
  const { setFilter } = _a;
  const { setPagination } = _a;
  const { setSort } = _a;
  const { source } = _a;
  const { translate } = _a;
  const { warning } = _a;
  const rest = __rest(_a, ['allowEmpty', 'basePath', 'children', 'choices', 'className', 'error', 'input', 'loading', 'isRequired', 'label', 'meta', 'onChange', 'options', 'resource', 'setFilter', 'setPagination', 'setSort', 'source', 'translate', 'warning']);
  const translatedLabel = translate(label || `resources.${resource}.fields.${source}`, { _: label });
  if (loading) {
    return (react_1.default.createElement(Labeled_1.default, {
      label: translatedLabel, source, resource, className, isRequired,
    },
    react_1.default.createElement(LinearProgress_1.default, null)));
  }
  if (error) {
    return react_1.default.createElement(ReferenceError_1.default, { label: translatedLabel, error });
  }
  return react_1.default.cloneElement(children, {
    allowEmpty,
    basePath,
    choices,
    className,
    error,
    input,
    isRequired,
    label: translatedLabel,
    meta: { ...meta, helperText: warning || false },
    onChange,
    options,
    resource,
    setFilter,
    setPagination,
    setSort,
    source,
    translateChoice: false,
    limitChoicesToValue: true,
    ...sanitizeRestProps(rest),
    ...children.props,
  });
};
exports.ReferenceArrayInputView.propTypes = {
  allowEmpty: prop_types_1.default.bool,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element,
  choices: prop_types_1.default.array,
  className: prop_types_1.default.string,
  error: prop_types_1.default.string,
  loading: prop_types_1.default.bool,
  input: prop_types_1.default.object.isRequired,
  label: prop_types_1.default.string,
  meta: prop_types_1.default.object,
  onChange: prop_types_1.default.func,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string.isRequired,
  setFilter: prop_types_1.default.func,
  setPagination: prop_types_1.default.func,
  setSort: prop_types_1.default.func,
  source: prop_types_1.default.string,
  translate: prop_types_1.default.func.isRequired,
  warning: prop_types_1.default.string,
};
exports.default = exports.ReferenceArrayInput;
