
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
const Toolbar_1 = __importDefault(require('@material-ui/core/Toolbar'));
const withWidth_1 = __importDefault(require('@material-ui/core/withWidth'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const button_1 = require('../button');
const useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    toolbar: {
      backgroundColor: theme.palette.type === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    },
    desktopToolbar: {
      marginTop: theme.spacing(2),
    },
    mobileToolbar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '16px',
      width: '100%',
      boxSizing: 'border-box',
      flexShrink: 0,
      zIndex: 2,
    },
    defaultToolbar: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
    },
    spacer: (_a = {},
    _a[theme.breakpoints.down('xs')] = {
      height: '5em',
    },
    _a),
  });
});
const valueOrDefault = function (value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
};
const Toolbar = function (_a) {
  let _b;
  const { basePath } = _a;
  const { children } = _a;
  const { className } = _a;
  const classesOverride = _a.classes;
  const { handleSubmit } = _a;
  const { handleSubmitWithRedirect } = _a;
  const { invalid } = _a;
  const { pristine } = _a;
  const { record } = _a;
  const { redirect } = _a;
  const { resource } = _a;
  const { saving } = _a;
  const { submitOnEnter } = _a;
  const { undoable } = _a;
  const { width } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'className', 'classes', 'handleSubmit', 'handleSubmitWithRedirect', 'invalid', 'pristine', 'record', 'redirect', 'resource', 'saving', 'submitOnEnter', 'undoable', 'width']);
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Toolbar_1.default, {
      className: classnames_1.default(classes.toolbar, (_b = {},
      _b[classes.mobileToolbar] = width === 'xs',
      _b[classes.desktopToolbar] = width !== 'xs',
      _b), className),
      role: 'toolbar',
      ...rest,
    }, react_1.Children.count(children) === 0 ? (react_1.default.createElement('div', { className: classes.defaultToolbar },
      react_1.default.createElement(button_1.SaveButton, {
        handleSubmitWithRedirect, invalid, redirect, saving, submitOnEnter,
      }),
      record && typeof record.id !== 'undefined' && (react_1.default.createElement(button_1.DeleteButton, {
        basePath, record, resource, undoable,
      })))) : (react_1.Children.map(children, button => button && react_1.isValidElement(button)
      ? react_1.default.cloneElement(button, {
        basePath,
        handleSubmit: valueOrDefault(button.props.handleSubmit, handleSubmit),
        handleSubmitWithRedirect: valueOrDefault(button.props.handleSubmitWithRedirect, handleSubmitWithRedirect),
        invalid,
        pristine,
        record,
        resource,
        saving,
        submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter),
        undoable: valueOrDefault(button.props.undoable, undoable),
      })
      : null))),
    react_1.default.createElement('div', { className: classes.spacer })));
};
Toolbar.propTypes = {
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  handleSubmit: prop_types_1.default.func,
  handleSubmitWithRedirect: prop_types_1.default.func,
  invalid: prop_types_1.default.bool,
  pristine: prop_types_1.default.bool,
  record: prop_types_1.default.object,
  redirect: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.bool,
    prop_types_1.default.func,
  ]),
  resource: prop_types_1.default.string,
  saving: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
  submitOnEnter: prop_types_1.default.bool,
  undoable: prop_types_1.default.bool,
  width: prop_types_1.default.string,
};
Toolbar.defaultProps = {
  submitOnEnter: true,
};
exports.default = withWidth_1.default({ initialWidth: 'xs' })(Toolbar);
