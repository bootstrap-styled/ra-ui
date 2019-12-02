
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
const react_final_form_1 = require('react-final-form');
const final_form_arrays_1 = __importDefault(require('final-form-arrays'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const getFormInitialValues_1 = __importDefault(require('./getFormInitialValues'));
const FormInput_1 = __importDefault(require('./FormInput'));
const Toolbar_1 = __importDefault(require('./Toolbar'));
const CardContentInner_1 = __importDefault(require('../layout/CardContentInner'));
const SimpleForm = function (_a) {
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
    keepDirtyOnReinitialize: true,
    subscription: defaultSubscription,
    ...props,
    render(formProps) {
      return (react_1.default.createElement(SimpleFormView, {
        saving: formProps.submitting || saving, translate, setRedirect, ...props, ...formProps,
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
exports.default = SimpleForm;
var SimpleFormView = function (_a) {
  const { basePath } = _a;
  const { children } = _a;
  const { className } = _a;
  const { invalid } = _a;
  const { form } = _a;
  const { pristine } = _a;
  const { record } = _a;
  const defaultRedirect = _a.redirect;
  const { resource } = _a;
  const { saving } = _a;
  const { setRedirect } = _a;
  const { submitOnEnter } = _a;
  const { toolbar } = _a;
  const { undoable } = _a;
  const { version } = _a;
  const { handleSubmit } = _a;
  const { variant } = _a;
  const { margin } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'className', 'invalid', 'form', 'pristine', 'record', 'redirect', 'resource', 'saving', 'setRedirect', 'submitOnEnter', 'toolbar', 'undoable', 'version', 'handleSubmit', 'variant', 'margin']);
  ra_core_1.useInitializeFormWithRecord(record);
  const handleSubmitWithRedirect = react_1.useCallback(redirect => {
    if (redirect === void 0) { redirect = defaultRedirect; }
    setRedirect(redirect);
    handleSubmit();
  }, [setRedirect, defaultRedirect, handleSubmit]);
  return (react_1.default.createElement('form', { className: classnames_1.default('simple-form', className), ...sanitizeRestProps(rest) },
    react_1.default.createElement(CardContentInner_1.default, { key: version }, react_1.Children.map(children, input => (react_1.default.createElement(FormInput_1.default, {
      basePath, input, record, resource, variant, margin,
    })))),
    toolbar
            && react_1.default.cloneElement(toolbar, {
              basePath,
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
SimpleFormView.propTypes = {
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
  defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
  initialValues: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
  handleSubmit: prop_types_1.default.func,
  invalid: prop_types_1.default.bool,
  pristine: prop_types_1.default.bool,
  record: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  redirect: prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.bool,
    prop_types_1.default.func,
  ]),
  save: prop_types_1.default.func,
  saving: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]),
  submitOnEnter: prop_types_1.default.bool,
  toolbar: prop_types_1.default.element,
  undoable: prop_types_1.default.bool,
  validate: prop_types_1.default.func,
  version: prop_types_1.default.number,
};
SimpleFormView.defaultProps = {
  submitOnEnter: true,
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
  const { setRedirect } = _a;
  const { submit } = _a;
  const { submitError } = _a;
  const { submitErrors } = _a;
  const { submitAsSideEffect } = _a;
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
  const props = __rest(_a, ['anyTouched', 'array', 'asyncBlurFields', 'asyncValidate', 'asyncValidating', 'autofill', 'blur', 'change', 'clearAsyncError', 'clearFields', 'clearSubmit', 'clearSubmitErrors', 'destroy', 'dirty', 'dirtyFields', 'dirtyFieldsSinceLastSubmit', 'dirtySinceLastSubmit', 'dispatch', 'form', 'handleSubmit', 'hasSubmitErrors', 'hasValidationErrors', 'initialize', 'initialized', 'initialValues', 'pristine', 'pure', 'redirect', 'reset', 'resetSection', 'save', 'setRedirect', 'submit', 'submitError', 'submitErrors', 'submitAsSideEffect', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'translate', 'triggerSubmit', 'undoable', 'untouch', 'valid', 'validate', 'validating', '_reduxForm']);
  return props;
};
