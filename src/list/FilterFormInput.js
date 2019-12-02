
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
const react_final_form_1 = require('react-final-form');
const IconButton_1 = __importDefault(require('@material-ui/core/IconButton'));
const HighlightOff_1 = __importDefault(require('@material-ui/icons/HighlightOff'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const emptyRecord = {};
const sanitizeRestProps = function (_a) {
  const { alwaysOn } = _a;
  const props = __rest(_a, ['alwaysOn']);
  return props;
};
const useStyles = styles_1.makeStyles(theme => ({
  body: { display: 'flex', alignItems: 'flex-end' },
  spacer: { width: theme.spacing(2) },
  hideButton: {},
}));
const FilterFormInput = function (_a) {
  const { filterElement } = _a;
  const { handleHide } = _a;
  const classesOverride = _a.classes;
  const { resource } = _a;
  const { variant } = _a;
  const { margin } = _a;
  const translate = ra_core_1.useTranslate();
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement('div', { 'data-source': filterElement.props.source, className: classnames_1.default('filter-field', classes.body) },
    !filterElement.props.alwaysOn && (react_1.default.createElement(IconButton_1.default, {
      className: classnames_1.default('hide-filter', classes.hideButton), onClick: handleHide, 'data-key': filterElement.props.source, title: translate('ra.action.remove_filter'),
    },
    react_1.default.createElement(HighlightOff_1.default, null))),
    react_1.default.createElement(react_final_form_1.Field, {
      allowEmpty: true, ...sanitizeRestProps(filterElement.props), name: filterElement.props.source, component: filterElement.type, resource, record: emptyRecord, variant, margin,
    }),
    react_1.default.createElement('div', { className: classes.spacer }, '\u00A0')));
};
FilterFormInput.propTypes = {
  filterElement: prop_types_1.default.node,
  handleHide: prop_types_1.default.func,
  classes: prop_types_1.default.object,
  resource: prop_types_1.default.string,
};
exports.default = FilterFormInput;
