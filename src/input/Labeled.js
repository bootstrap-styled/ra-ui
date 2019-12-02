
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
const InputLabel_1 = __importDefault(require('@material-ui/core/InputLabel'));
const FormControl_1 = __importDefault(require('@material-ui/core/FormControl'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles(theme => ({
  label: {
    position: 'relative',
  },
  value: {
    fontFamily: theme.typography.fontFamily,
    color: 'currentColor',
    padding: `${theme.spacing(1)}px 0 ${theme.spacing(1) / 2}px`,
    border: 0,
    boxSizing: 'content-box',
    verticalAlign: 'middle',
    background: 'none',
    margin: 0,
    display: 'block',
    width: '100%',
  },
}));
/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
exports.Labeled = function (_a) {
  const { children } = _a;
  const { className } = _a;
  const classesOverride = _a.classes;
  const { fullWidth } = _a;
  const { id } = _a;
  const { input } = _a;
  const { isRequired } = _a;
  const { label } = _a;
  const _b = _a.margin;
  const margin = _b === void 0 ? 'dense' : _b;
  const { meta } = _a;
  const { resource } = _a;
  const { source } = _a;
  const rest = __rest(_a, ['children', 'className', 'classes', 'fullWidth', 'id', 'input', 'isRequired', 'label', 'margin', 'meta', 'resource', 'source']);
  const classes = useStyles({ classes: classesOverride });
  if (!label && !source) {
    // @ts-ignore
    const name_1 = children && children.type && children.type.name;
    throw new Error(`Cannot create label for component <${name_1}>: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props`);
  }
  const restProps = fullWidth ? ({ ...rest, fullWidth }) : rest;
  return (react_1.default.createElement(FormControl_1.default, {
    className, fullWidth, error: meta && meta.touched && !!meta.error, margin,
  },
  react_1.default.createElement(InputLabel_1.default, { htmlFor: id, shrink: true, className: classes.label },
    react_1.default.createElement(ra_core_1.FieldTitle, {
      label, source, resource, isRequired,
    })),
  react_1.default.createElement('div', { className: classes.value }, children && typeof children.type !== 'string'
    ? react_1.default.cloneElement(children, {
      input,
      resource,
      ...restProps,
    })
    : children)));
};
exports.Labeled.propTypes = {
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element,
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  fullWidth: prop_types_1.default.bool,
  id: prop_types_1.default.string,
  input: prop_types_1.default.object,
  isRequired: prop_types_1.default.bool,
  label: prop_types_1.default.string,
  meta: prop_types_1.default.object,
  onChange: prop_types_1.default.func,
  record: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  labelStyle: prop_types_1.default.object,
};
exports.default = exports.Labeled;
