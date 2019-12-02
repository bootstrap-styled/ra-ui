
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
const LinearProgress_1 = __importDefault(require('../layout/LinearProgress'));
const Labeled_1 = __importDefault(require('./Labeled'));
const ReferenceError_1 = __importDefault(require('./ReferenceError'));
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getMatching()`), then delegates rendering
 * to a subcomponent, to which it passes the possible choices
 * as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<AutocompleteInput>`,
 * `<SelectInput>`, or `<RadioButtonGroupInput>`.
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <AutocompleteInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      perPage={100}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * The enclosed component may filter results. ReferenceInput passes a `setFilter`
 * function as prop to its child component. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function prop:
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filterToQuery={searchText => ({ title: searchText })}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 */
exports.ReferenceInput = function (_a) {
  const { format } = _a;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const { parse } = _a;
  const { validate } = _a;
  const props = __rest(_a, ['format', 'onBlur', 'onChange', 'onFocus', 'parse', 'validate']);
  const inputProps = ra_core_1.useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    validate,
    ...props,
  });
  return (react_1.default.createElement(exports.ReferenceInputView, { ...inputProps, ...props, ...ra_core_1.useReferenceInputController({ ...props, ...inputProps }) }));
};
exports.ReferenceInput.propTypes = {
  allowEmpty: prop_types_1.default.bool.isRequired,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element.isRequired,
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  filter: prop_types_1.default.object,
  filterToQuery: prop_types_1.default.func.isRequired,
  label: prop_types_1.default.string,
  onChange: prop_types_1.default.func,
  perPage: prop_types_1.default.number,
  record: prop_types_1.default.object,
  reference: prop_types_1.default.string.isRequired,
  resource: prop_types_1.default.string,
  sort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.oneOf(['ASC', 'DESC']),
  }),
  source: prop_types_1.default.string,
};
exports.ReferenceInput.defaultProps = {
  allowEmpty: false,
  filter: {},
  filterToQuery(searchText) { return (searchText ? { q: searchText } : {}); },
  perPage: 25,
  sort: { field: 'id', order: 'DESC' },
};
const sanitizeRestProps = function (_a) {
  const { allowEmpty } = _a;
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
  const { optionValue } = _a;
  const { optionText } = _a;
  const { perPage } = _a;
  const { record } = _a;
  const { reference } = _a;
  const { referenceSource } = _a;
  const { resource } = _a;
  const { setFilter } = _a;
  const { setPagination } = _a;
  const { setSort } = _a;
  const { sort } = _a;
  const { source } = _a;
  const { textAlign } = _a;
  const { translateChoice } = _a;
  const { validation } = _a;
  const rest = __rest(_a, ['allowEmpty', 'basePath', 'choices', 'className', 'component', 'crudGetMatching', 'crudGetOne', 'defaultValue', 'filter', 'filterToQuery', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'locale', 'meta', 'onChange', 'optionValue', 'optionText', 'perPage', 'record', 'reference', 'referenceSource', 'resource', 'setFilter', 'setPagination', 'setSort', 'sort', 'source', 'textAlign', 'translateChoice', 'validation']);
  return rest;
};
exports.ReferenceInputView = function (_a) {
  const { allowEmpty } = _a;
  const { basePath } = _a;
  const { children } = _a;
  const { choices } = _a;
  const { classes } = _a;
  const { className } = _a;
  const { error } = _a;
  const { helperText } = _a;
  const { id } = _a;
  const { input } = _a;
  const { isRequired } = _a;
  const { loading } = _a;
  const { label } = _a;
  const { meta } = _a;
  const { resource } = _a;
  const { setFilter } = _a;
  const { setPagination } = _a;
  const { setSort } = _a;
  const { source } = _a;
  const { warning } = _a;
  const rest = __rest(_a, ['allowEmpty', 'basePath', 'children', 'choices', 'classes', 'className', 'error', 'helperText', 'id', 'input', 'isRequired', 'loading', 'label', 'meta', 'resource', 'setFilter', 'setPagination', 'setSort', 'source', 'warning']);
  if (react_1.Children.count(children) !== 1) {
    throw new Error('<ReferenceInput> only accepts a single child');
  }
  if (loading) {
    return (react_1.default.createElement(Labeled_1.default, {
      id, label, source, resource, className, isRequired, meta, input,
    },
    react_1.default.createElement(LinearProgress_1.default, null)));
  }
  // This is not a final-form error but an unrecoverable error from the
  // useReferenceInputController hook
  if (error) {
    return react_1.default.createElement(ReferenceError_1.default, { label, error });
  }
  // When the useReferenceInputController returns a warning, it means there it
  // had an issue trying to load the referenced record
  // We display it by overriding the final-form meta
  const finalMeta = warning
    ? ({ ...meta, error: warning }) : meta;
  return react_1.cloneElement(children, {
    allowEmpty,
    classes,
    className,
    input,
    isRequired,
    label,
    resource,
    meta: finalMeta,
    source,
    choices,
    basePath,
    setFilter,
    setPagination,
    setSort,
    translateChoice: false,
    ...sanitizeRestProps(rest),
  });
};
exports.default = exports.ReferenceInput;
