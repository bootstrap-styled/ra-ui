
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
const classnames_1 = __importDefault(require('classnames'));
const react_final_form_1 = require('react-final-form');
const final_form_arrays_1 = __importDefault(require('final-form-arrays'));
const react_router_dom_1 = require('react-router-dom');
const Divider_1 = __importDefault(require('@material-ui/core/Divider'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const get_1 = __importDefault(require('lodash/get'));
const getFormInitialValues_1 = __importDefault(require('./getFormInitialValues'));
const Toolbar_1 = __importDefault(require('./Toolbar'));
const TabbedFormTabs_1 = __importStar(require('./TabbedFormTabs'));
const react_router_dom_2 = require('react-router-dom');
const useStyles = styles_1.makeStyles(theme => ({
  errorTabButton: { color: theme.palette.error.main },
  content: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
const TabbedForm = function (_a) {
  const { initialValues } = _a;
  const { defaultValue } = _a;
  const { saving } = _a;
  const props = __rest(_a, ['initialValues', 'defaultValue', 'saving']);
  const redirect = react_1.useRef(props.redirect);
  // We don't use state here for two reasons:
  // 1. There no way to execute code only after the state has been updated
  // 2. We don't want the form to rerender when redirect is changed
  const setRedirect = function (newRedirect) {
    redirect.current = newRedirect;
  };
  const translate = ra_core_1.useTranslate();
  const classes = useStyles();
  const finalInitialValues = getFormInitialValues_1.default(initialValues, defaultValue, props.record);
  const submit = function (values) {
    const finalRedirect = typeof redirect.current === undefined
      ? props.redirect
      : redirect.current;
    const finalValues = ra_core_1.sanitizeEmptyValues(finalInitialValues, values);
    props.save(finalValues, finalRedirect);
  };
  return (react_1.default.createElement(react_final_form_1.Form, {
    key: props.version,
    initialValues: finalInitialValues,
    onSubmit: submit,
    mutators: { ...final_form_arrays_1.default },
    setRedirect,
    keepDirtyOnReinitialize: true,
    subscription: defaultSubscription,
    ...props,
    render(formProps) {
      return (react_1.default.createElement(exports.TabbedFormView, {
        classes, saving: formProps.submitting || saving, translate, ...props, ...formProps,
      }));
    },
  }));
};
var defaultSubscription = {
  submitting: true,
  pristine: true,
  valid: true,
  invalid: true,
};
exports.default = TabbedForm;
exports.TabbedFormView = function (_a) {
  const { basePath } = _a;
  const { children } = _a;
  const { className } = _a;
  const _b = _a.classes;
  const classes = _b === void 0 ? {} : _b;
  const { form } = _a;
  const { handleSubmit } = _a;
  const { invalid } = _a;
  const { pristine } = _a;
  const { record } = _a;
  const defaultRedirect = _a.redirect;
  const { resource } = _a;
  const { saving } = _a;
  const { setRedirect } = _a;
  const { submitOnEnter } = _a;
  const { tabs } = _a;
  const { toolbar } = _a;
  const { translate } = _a;
  const { undoable } = _a;
  const { value } = _a;
  const { version } = _a;
  const { variant } = _a;
  const { margin } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'className', 'classes', 'form', 'handleSubmit', 'invalid', 'pristine', 'record', 'redirect', 'resource', 'saving', 'setRedirect', 'submitOnEnter', 'tabs', 'toolbar', 'translate', 'undoable', 'value', 'version', 'variant', 'margin']);
  ra_core_1.useInitializeFormWithRecord(record);
  const handleSubmitWithRedirect = react_1.useCallback(redirect => {
    if (redirect === void 0) { redirect = defaultRedirect; }
    setRedirect(redirect);
    handleSubmit();
  }, [setRedirect, defaultRedirect, handleSubmit]);
  const tabsWithErrors = exports.findTabsWithErrors(children, form.getState().errors);
  const match = react_router_dom_2.useRouteMatch();
  const location = react_router_dom_2.useLocation();
  const url = match ? match.url : location.pathname;
  return (react_1.default.createElement('form', { className: classnames_1.default('tabbed-form', className), key: version, ...sanitizeRestProps(rest) },
    react_1.default.cloneElement(tabs, {
      classes,
      url,
      tabsWithErrors,
    }, children),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement('div', { className: classes.content }, react_1.Children.map(children, (tab, index) => tab && (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: ra_core_1.escapePath(TabbedFormTabs_1.getTabFullPath(tab, index, url)) }, routeProps => react_1.isValidElement(tab)
      ? react_1.default.cloneElement(tab, {
        intent: 'content',
        resource,
        record,
        basePath,
        hidden: !routeProps.match,
        variant,
        margin,
      })
      : null)))),
    toolbar
            && react_1.default.cloneElement(toolbar, {
              basePath,
              className: 'toolbar',
              handleSubmitWithRedirect,
              handleSubmit,
              invalid,
              pristine,
              record,
              redirect: defaultRedirect,
              resource,
              saving,
              submitOnEnter,
              undoable,
            })));
};
exports.TabbedFormView.propTypes = {
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
  initialValues: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
  handleSubmit: prop_types_1.default.func,
  invalid: prop_types_1.default.bool,
  location: prop_types_1.default.object,
  match: prop_types_1.default.object,
  pristine: prop_types_1.default.bool,
  record: prop_types_1.default.object,
  redirect: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.bool,
    prop_types_1.default.func,
  ]),
  resource: prop_types_1.default.string,
  save: prop_types_1.default.func,
  saving: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
  submitOnEnter: prop_types_1.default.bool,
  tabs: prop_types_1.default.element.isRequired,
  tabsWithErrors: prop_types_1.default.arrayOf(prop_types_1.default.string),
  toolbar: prop_types_1.default.element,
  translate: prop_types_1.default.func,
  undoable: prop_types_1.default.bool,
  validate: prop_types_1.default.func,
  value: prop_types_1.default.number,
  version: prop_types_1.default.number,
};
exports.TabbedFormView.defaultProps = {
  submitOnEnter: true,
  tabs: react_1.default.createElement(TabbedFormTabs_1.default, null),
  toolbar: react_1.default.createElement(Toolbar_1.default, null),
};
var sanitizeRestProps = function (_a) {
  const { anyTouched } = _a;
  const { array } = _a;
  const { asyncBlurFields } = _a;
  const { asyncValidate } = _a;
  const { asyncValidating } = _a;
  const { autofill } = _a;
  const { blur } = _a;
  const { change } = _a;
  const { clearAsyncError } = _a;
  const { clearFields } = _a;
  const { clearSubmit } = _a;
  const { clearSubmitErrors } = _a;
  const { destroy } = _a;
  const { dirty } = _a;
  const { dirtyFields } = _a;
  const { dirtyFieldsSinceLastSubmit } = _a;
  const { dirtySinceLastSubmit } = _a;
  const { dispatch } = _a;
  const { form } = _a;
  const { handleSubmit } = _a;
  const { hasSubmitErrors } = _a;
  const { hasValidationErrors } = _a;
  const { initialize } = _a;
  const { initialized } = _a;
  const { initialValues } = _a;
  const { pristine } = _a;
  const { pure } = _a;
  const { redirect } = _a;
  const { reset } = _a;
  const { resetSection } = _a;
  const { save } = _a;
  const { staticContext } = _a;
  const { submit } = _a;
  const { submitAsSideEffect } = _a;
  const { submitError } = _a;
  const { submitErrors } = _a;
  const { submitFailed } = _a;
  const { submitSucceeded } = _a;
  const { submitting } = _a;
  const { touch } = _a;
  const { translate } = _a;
  const { triggerSubmit } = _a;
  const { undoable } = _a;
  const { untouch } = _a;
  const { valid } = _a;
  const { validate } = _a;
  const { validating } = _a;
  const { _reduxForm } = _a;
  const props = __rest(_a, ['anyTouched', 'array', 'asyncBlurFields', 'asyncValidate', 'asyncValidating', 'autofill', 'blur', 'change', 'clearAsyncError', 'clearFields', 'clearSubmit', 'clearSubmitErrors', 'destroy', 'dirty', 'dirtyFields', 'dirtyFieldsSinceLastSubmit', 'dirtySinceLastSubmit', 'dispatch', 'form', 'handleSubmit', 'hasSubmitErrors', 'hasValidationErrors', 'initialize', 'initialized', 'initialValues', 'pristine', 'pure', 'redirect', 'reset', 'resetSection', 'save', 'staticContext', 'submit', 'submitAsSideEffect', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'translate', 'triggerSubmit', 'undoable', 'untouch', 'valid', 'validate', 'validating', '_reduxForm']);
  return props;
};
exports.findTabsWithErrors = function (children, errors) {
  return react_1.Children.toArray(children).reduce((acc, child) => {
    if (!react_1.isValidElement(child)) {
      return acc;
    }
    const inputs = react_1.Children.toArray(child.props.children);
    if (inputs.some(input => react_1.isValidElement(input) && get_1.default(errors, input.props.source))) {
      return acc.concat([child.props.label]);
    }
    return acc;
  }, []);
};
