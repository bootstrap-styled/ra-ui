
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
const CardActions_1 = __importDefault(require('@material-ui/core/CardActions'));
const Button_1 = __importDefault(require('@material-ui/core/Button'));
const TextField_1 = __importDefault(require('@material-ui/core/TextField'));
const CircularProgress_1 = __importDefault(require('@material-ui/core/CircularProgress'));
const styles_1 = require('@material-ui/core/styles');
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles(theme => ({
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    marginTop: '1em',
  },
  button: {
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));
const Input = function (_a) {
  const _b = _a.meta; const { touched } = _b; const { error } = _b; // eslint-disable-line react/prop-types
  const inputProps = _a.input; // eslint-disable-line react/prop-types
  const props = __rest(_a, ['meta', 'input']);
  return (react_1.default.createElement(TextField_1.default, {
    error: !!(touched && error), helperText: touched && error, ...inputProps, ...props, fullWidth: true,
  }));
};
const LoginForm = function (_a) {
  const { redirectTo } = _a;
  const _b = ra_core_1.useSafeSetState(false); const loading = _b[0]; const
    setLoading = _b[1];
  const login = ra_core_1.useLogin();
  const translate = ra_core_1.useTranslate();
  const notify = ra_core_1.useNotify();
  const classes = useStyles({});
  const validate = function (values) {
    const errors = { username: undefined, password: undefined };
    if (!values.username) {
      errors.username = translate('ra.validation.required');
    }
    if (!values.password) {
      errors.password = translate('ra.validation.required');
    }
    return errors;
  };
  const submit = function (values) {
    setLoading(true);
    login(values, redirectTo)
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        notify(typeof error === 'string'
          ? error
          : typeof error === 'undefined' || !error.message
            ? 'ra.auth.sign_in_error'
            : error.message, 'warning');
      });
  };
  return (react_1.default.createElement(react_final_form_1.Form, {
    onSubmit: submit,
    validate,
    render(_a) {
      const { handleSubmit } = _a;
      return (react_1.default.createElement('form', { onSubmit: handleSubmit, noValidate: true },
        react_1.default.createElement('div', { className: classes.form },
          react_1.default.createElement('div', { className: classes.input },
            react_1.default.createElement(react_final_form_1.Field, {
              autoFocus: true, id: 'username', name: 'username', component: Input, label: translate('ra.auth.username'), disabled: loading,
            })),
          react_1.default.createElement('div', { className: classes.input },
            react_1.default.createElement(react_final_form_1.Field, {
              id: 'password', name: 'password', component: Input, label: translate('ra.auth.password'), type: 'password', disabled: loading, autoComplete: 'current-password',
            }))),
        react_1.default.createElement(CardActions_1.default, null,
          react_1.default.createElement(Button_1.default, {
            variant: 'contained', type: 'submit', color: 'primary', disabled: loading, className: classes.button,
          },
          loading && (react_1.default.createElement(CircularProgress_1.default, { className: classes.icon, size: 18, thickness: 2 })),
          translate('ra.auth.sign_in')))));
    },
  }));
};
LoginForm.propTypes = {
  redirectTo: prop_types_1.default.string,
};
exports.default = LoginForm;
