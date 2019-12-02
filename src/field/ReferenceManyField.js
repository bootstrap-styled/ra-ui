
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
/**
 * Render related records to the current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 * @example Display all the books by the current author, only the title
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceManyField perPage={10} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceManyField sort={{ field: 'created_at', order: 'DESC' }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceManyField filter={{ is_published: true }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 */
exports.ReferenceManyField = function (props) {
  const { children } = props;
  const initialSort = props.sort;
  const initialPerPage = props.perPage;
  const { resource } = props;
  const { reference } = props;
  const { record } = props;
  const { target } = props;
  const { filter } = props;
  const { source } = props;
  const { basePath } = props;
  if (react_1.default.Children.count(children) !== 1) {
    throw new Error('<ReferenceManyField> only accepts a single child (like <Datagrid>)');
  }
  const _a = ra_core_1.useSortState(initialSort); const { sort } = _a; const
    { setSortField } = _a;
  const _b = ra_core_1.usePaginationState({
    perPage: initialPerPage,
  }); const { page } = _b; const { perPage } = _b; const { setPage } = _b; const
    { setPerPage } = _b;
  const controllerProps = ra_core_1.useReferenceManyFieldController({
    resource,
    reference,
    record,
    target,
    filter,
    source,
    basePath,
    page,
    perPage,
    sort,
  });
  return (react_1.default.createElement(exports.ReferenceManyFieldView, {
    ...props,
    ...({
      currentSort: sort,
      page,
      perPage,
      setPage,
      setPerPage,
      setSort: setSortField,
      ...controllerProps,
    }),
  }));
};
exports.ReferenceManyField.propTypes = {
  addLabel: prop_types_1.default.bool,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element.isRequired,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  filter: prop_types_1.default.object,
  label: prop_types_1.default.string,
  perPage: prop_types_1.default.number,
  record: prop_types_1.default.object,
  reference: prop_types_1.default.string.isRequired,
  resource: prop_types_1.default.string,
  sortBy: prop_types_1.default.string,
  source: prop_types_1.default.string.isRequired,
  sort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }),
  target: prop_types_1.default.string.isRequired,
};
exports.ReferenceManyField.defaultProps = {
  filter: {},
  perPage: 25,
  sort: { field: 'id', order: 'DESC' },
  source: 'id',
  addLabel: true,
};
exports.ReferenceManyFieldView = function (_a) {
  const { children } = _a;
  const { className } = _a;
  const { currentSort } = _a;
  const { data } = _a;
  const { ids } = _a;
  const { loaded } = _a;
  const { page } = _a;
  const { pagination } = _a;
  const { perPage } = _a;
  const { reference } = _a;
  const { referenceBasePath } = _a;
  const { setPage } = _a;
  const { setPerPage } = _a;
  const { setSort } = _a;
  const { total } = _a;
  return (react_1.default.createElement(react_1.Fragment, null,
    react_1.cloneElement(react_1.Children.only(children), {
      className,
      resource: reference,
      ids,
      loaded,
      data,
      basePath: referenceBasePath,
      currentSort,
      setSort,
      total,
    }),
    pagination
            && total !== undefined
            && react_1.cloneElement(pagination, {
              page,
              perPage,
              setPage,
              setPerPage,
              total,
            })));
};
exports.ReferenceManyFieldView.propTypes = {
  children: prop_types_1.default.element,
  className: prop_types_1.default.string,
  currentSort: prop_types_1.default.shape({
    field: prop_types_1.default.string,
    order: prop_types_1.default.string,
  }),
  data: prop_types_1.default.object,
  ids: prop_types_1.default.array,
  loaded: prop_types_1.default.bool,
  pagination: prop_types_1.default.element,
  reference: prop_types_1.default.string,
  referenceBasePath: prop_types_1.default.string,
  setSort: prop_types_1.default.func,
};
exports.default = exports.ReferenceManyField;
