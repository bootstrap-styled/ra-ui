
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
const classnames_1 = __importDefault(require('classnames'));
const styles_1 = require('@material-ui/core/styles');
const set_1 = __importDefault(require('lodash/set'));
const get_1 = __importDefault(require('lodash/get'));
const FilterFormInput_1 = __importDefault(require('./FilterFormInput'));
const useStyles = styles_1.makeStyles(theme => ({
  form: {
    marginTop: -theme.spacing(2),
    paddingTop: 0,
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    minHeight: theme.spacing(9.5),
  },
  clearFix: { clear: 'right' },
}));
const sanitizeRestProps = function (_a) {
  const { anyTouched } = _a;
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
  const { displayedFilters } = _a;
  const { errors } = _a;
  const { filters } = _a;
  const { filterValues } = _a;
  const { form } = _a;
  const { handleSubmit } = _a;
  const { hasSubmitErrors } = _a;
  const { hasValidationErrors } = _a;
  const { hideFilter } = _a;
  const { initialize } = _a;
  const { initialized } = _a;
  const { initialValues } = _a;
  const { invalid } = _a;
  const { modified } = _a;
  const { pristine } = _a;
  const { pure } = _a;
  const { reset } = _a;
  const { resetSection } = _a;
  const { save } = _a;
  const { setFilter } = _a;
  const { setFilters } = _a;
  const { submit } = _a;
  const { submitAsSideEffect } = _a;
  const { submitError } = _a;
  const { submitErrors } = _a;
  const { submitFailed } = _a;
  const { submitSucceeded } = _a;
  const { submitting } = _a;
  const { touch } = _a;
  const { touched } = _a;
  const { triggerSubmit } = _a;
  const { untouch } = _a;
  const { valid } = _a;
  const { validate } = _a;
  const { validating } = _a;
  const { values } = _a;
  const { visited } = _a;
  const { __versions } = _a;
  const props = __rest(_a, ['anyTouched', 'asyncValidate', 'asyncValidating', 'autofill', 'blur', 'change', 'clearAsyncError', 'clearFields', 'clearSubmit', 'clearSubmitErrors', 'destroy', 'dirty', 'dirtyFields', 'dirtyFieldsSinceLastSubmit', 'dirtySinceLastSubmit', 'dispatch', 'displayedFilters', 'errors', 'filters', 'filterValues', 'form', 'handleSubmit', 'hasSubmitErrors', 'hasValidationErrors', 'hideFilter', 'initialize', 'initialized', 'initialValues', 'invalid', 'modified', 'pristine', 'pure', 'reset', 'resetSection', 'save', 'setFilter', 'setFilters', 'submit', 'submitAsSideEffect', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'touched', 'triggerSubmit', 'untouch', 'valid', 'validate', 'validating', 'values', 'visited', '__versions']);
  return props;
};
exports.FilterForm = function (_a) {
  const _b = _a.classes; const classes = _b === void 0 ? {} : _b; const { className } = _a; const { resource } = _a; const { margin } = _a; const { variant } = _a; const { filters } = _a; const { displayedFilters } = _a; const { hideFilter } = _a; const { initialValues } = _a; const
    rest = __rest(_a, ['classes', 'className', 'resource', 'margin', 'variant', 'filters', 'displayedFilters', 'hideFilter', 'initialValues']);
  react_1.useEffect(() => {
    filters.forEach(filter => {
      if (filter.props.alwaysOn && filter.props.defaultValue) {
        throw new Error('Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.');
      }
    });
  }, [filters]);
  const getShownFilters = function () {
    return filters.filter(filterElement => filterElement.props.alwaysOn
                || displayedFilters[filterElement.props.source]
                || typeof get_1.default(initialValues, filterElement.props.source)
                    !== 'undefined');
  };
  const handleHide = react_1.useCallback(event => hideFilter(event.currentTarget.dataset.key), [hideFilter]);
  return (react_1.default.createElement('form', { className: classnames_1.default(className, classes.form), ...sanitizeRestProps(rest), onSubmit: handleSubmit },
    getShownFilters().map(filterElement => (react_1.default.createElement(FilterFormInput_1.default, {
      key: filterElement.props.source, filterElement, handleHide, resource, margin, variant,
    }))),
    react_1.default.createElement('div', { className: classes.clearFix })));
};
var handleSubmit = function (event) {
  event.preventDefault();
  return false;
};
exports.FilterForm.propTypes = {
  resource: prop_types_1.default.string.isRequired,
  filters: prop_types_1.default.arrayOf(prop_types_1.default.node).isRequired,
  displayedFilters: prop_types_1.default.object.isRequired,
  hideFilter: prop_types_1.default.func.isRequired,
  initialValues: prop_types_1.default.object,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
};
exports.mergeInitialValuesWithDefaultValues = function (_a) {
  const { initialValues } = _a;
  const { filters } = _a;
  return ({
    ...filters
      .filter(filterElement => filterElement.props.alwaysOn && filterElement.props.defaultValue)
      .reduce((acc, filterElement) => set_1.default({ ...acc }, filterElement.props.source, filterElement.props.defaultValue), {}),
    ...initialValues,
  });
};
const EnhancedFilterForm = function (_a) {
  const classesOverride = _a.classes; const
    props = __rest(_a, ['classes']);
  const classes = useStyles({ classes: classesOverride });
  const mergedInitialValuesWithDefaultValues = exports.mergeInitialValuesWithDefaultValues(props);
  const { initialValues } = props;
  const rest = __rest(props, ['initialValues']);
  return (react_1.default.createElement(react_final_form_1.Form, {
    onSubmit: handleFinalFormSubmit,
    initialValues: mergedInitialValuesWithDefaultValues,
    render(formProps) {
      return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_final_form_1.FormSpy, {
          subscription: FormSpySubscription,
          onChange(_a) {
            const { pristine } = _a;
            const { values } = _a;
            if (pristine) {
              return;
            }
            props && props.setFilters(values);
          },
        }),
        react_1.default.createElement(exports.FilterForm, { classes, ...formProps, ...rest })));
    },
  }));
};
var handleFinalFormSubmit = function () { };
// Options to instruct the FormSpy that it should only listen to the values and pristine changes
var FormSpySubscription = { values: true, pristine: true };
exports.default = EnhancedFilterForm;
