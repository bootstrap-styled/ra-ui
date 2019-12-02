
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
const MenuItem_1 = __importDefault(require('@material-ui/core/MenuItem'));
const ra_core_1 = require('ra-core');
const FilterButtonMenuItem = react_1.forwardRef((_a, ref) => {
  const { filter } = _a;
  const { onShow } = _a;
  const { resource } = _a;
  const handleShow = react_1.useCallback(() => {
    onShow({ source: filter.source, defaultValue: filter.defaultValue });
  }, [filter.defaultValue, filter.source, onShow]);
  return (react_1.default.createElement(MenuItem_1.default, {
    className: 'new-filter-item', 'data-key': filter.source, 'data-default-value': filter.defaultValue, key: filter.source, onClick: handleShow, ref,
  },
  react_1.default.createElement(ra_core_1.FieldTitle, { label: filter.label, source: filter.source, resource })));
});
FilterButtonMenuItem.propTypes = {
  filter: prop_types_1.default.object.isRequired,
  onShow: prop_types_1.default.func.isRequired,
  resource: prop_types_1.default.string.isRequired,
};
exports.default = FilterButtonMenuItem;
