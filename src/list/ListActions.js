
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
const TopToolbar_1 = __importDefault(require('../layout/TopToolbar'));
const button_1 = require('../button');
const ListActions = function (_a) {
  const { currentSort } = _a;
  const { className } = _a;
  const { resource } = _a;
  const { filters } = _a;
  const { displayedFilters } = _a;
  const { exporter } = _a;
  const { filterValues } = _a;
  const { permanentFilter } = _a;
  const { hasCreate } = _a;
  const { basePath } = _a;
  const { selectedIds } = _a;
  const { onUnselectItems } = _a;
  const { showFilter } = _a;
  const { total } = _a;
  const rest = __rest(_a, ['currentSort', 'className', 'resource', 'filters', 'displayedFilters', 'exporter', 'filterValues', 'permanentFilter', 'hasCreate', 'basePath', 'selectedIds', 'onUnselectItems', 'showFilter', 'total']);
  return react_1.useMemo(() => (react_1.default.createElement(TopToolbar_1.default, { className, ...ra_core_1.sanitizeListRestProps(rest) },
    filters
            && react_1.cloneElement(filters, {
              resource,
              showFilter,
              displayedFilters,
              filterValues,
              context: 'button',
            }),
    hasCreate && react_1.default.createElement(button_1.CreateButton, { basePath }),
    exporter !== false && (react_1.default.createElement(button_1.ExportButton, {
      disabled: total === 0, resource, sort: currentSort, filter: { ...filterValues, ...permanentFilter }, exporter,
    })))), [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
  );
};
ListActions.propTypes = {
  basePath: prop_types_1.default.string,
  className: prop_types_1.default.string,
  currentSort: prop_types_1.default.object,
  displayedFilters: prop_types_1.default.object,
  exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
  filters: prop_types_1.default.element,
  filterValues: prop_types_1.default.object,
  hasCreate: prop_types_1.default.bool,
  resource: prop_types_1.default.string,
  onUnselectItems: prop_types_1.default.func.isRequired,
  selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
  showFilter: prop_types_1.default.func,
  total: prop_types_1.default.number,
};
ListActions.defaultProps = {
  selectedIds: [],
  onUnselectItems() { return null; },
};
exports.default = ListActions;
