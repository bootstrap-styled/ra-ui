
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
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const FilterForm_1 = __importDefault(require('./FilterForm'));
const FilterButton_1 = __importDefault(require('./FilterButton'));
const useStyles = styles_1.makeStyles({
  button: {},
  form: {},
});
const Filter = function (props) {
  const classes = useStyles({ classes: props.classes });
  const renderButton = function () {
    const classesOverride = props.classes; const { context } = props; const { resource } = props; const { children } = props; const { showFilter } = props; const { hideFilter } = props; const { displayedFilters } = props; const { filterValues } = props; const { variant } = props; const
      rest = __rest(props, ['classes', 'context', 'resource', 'children', 'showFilter', 'hideFilter', 'displayedFilters', 'filterValues', 'variant']);
    return (react_1.default.createElement(FilterButton_1.default, {
      className: classes.button, resource, filters: react_1.default.Children.toArray(children), showFilter, displayedFilters, filterValues, ...ra_core_1.sanitizeListRestProps(rest),
    }));
  };
  const renderForm = function () {
    const classesOverride = props.classes; const { context } = props; const { resource } = props; const { children } = props; const { hideFilter } = props; const { displayedFilters } = props; const { showFilter } = props; const { filterValues } = props; const { setFilters } = props; const
      rest = __rest(props, ['classes', 'context', 'resource', 'children', 'hideFilter', 'displayedFilters', 'showFilter', 'filterValues', 'setFilters']);
    return (react_1.default.createElement(FilterForm_1.default, {
      className: classes.form, resource, filters: react_1.default.Children.toArray(children), hideFilter, displayedFilters, initialValues: filterValues, setFilters, ...ra_core_1.sanitizeListRestProps(rest),
    }));
  };
  return props.context === 'button' ? renderButton() : renderForm();
};
Filter.propTypes = {
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  context: prop_types_1.default.oneOf(['form', 'button']),
  displayedFilters: prop_types_1.default.object,
  filterValues: prop_types_1.default.object,
  hideFilter: prop_types_1.default.func,
  setFilters: prop_types_1.default.func,
  showFilter: prop_types_1.default.func,
  resource: prop_types_1.default.string.isRequired,
};
exports.default = Filter;
