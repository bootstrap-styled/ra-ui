
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
const classnames_1 = __importDefault(require('classnames'));
const styles_1 = require('@material-ui/core/styles');
const Labeled_1 = __importDefault(require('../input/Labeled'));
const sanitizeRestProps = function (_a) {
  const { basePath } = _a;
  const { record } = _a;
  const rest = __rest(_a, ['basePath', 'record']);
  return rest;
};
const useStyles = styles_1.makeStyles(theme => ({
  input: { width: theme.spacing(32) },
}));
exports.FormInput = function (_a) {
  let _b; let
    _c;
  const { input } = _a;
  const classesOverride = _a.classes;
  const rest = __rest(_a, ['input', 'classes']);
  const classes = useStyles({ classes: classesOverride });
  return input ? (react_1.default.createElement('div', { className: classnames_1.default('ra-input', `ra-input-${input.props.source}`, input.props.formClassName) }, input.props.addLabel ? (react_1.default.createElement(Labeled_1.default, { id: input.props.id || input.props.source, ...input.props, ...sanitizeRestProps(rest) }, react_1.default.cloneElement(input, {
    className: classnames_1.default((_b = {},
    _b[classes.input] = !input.props.fullWidth,
    _b), input.props.className),
    id: input.props.id || input.props.source,
    ...rest,
  }))) : (react_1.default.cloneElement(input, {
    className: classnames_1.default((_c = {},
    _c[classes.input] = !input.props.fullWidth,
    _c), input.props.className),
    id: input.props.id || input.props.source,
    ...rest,
  })))) : null;
};
exports.FormInput.propTypes = {
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  input: prop_types_1.default.object,
};
// wat? TypeScript looses the displayName if we don't set it explicitly
exports.FormInput.displayName = 'FormInput';
exports.default = exports.FormInput;
