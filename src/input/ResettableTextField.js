
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
const InputAdornment_1 = __importDefault(require('@material-ui/core/InputAdornment'));
const IconButton_1 = __importDefault(require('@material-ui/core/IconButton'));
const TextField_1 = __importDefault(require('@material-ui/core/TextField'));
const styles_1 = require('@material-ui/core/styles');
const Clear_1 = __importDefault(require('@material-ui/icons/Clear'));
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles({
  clearIcon: {
    height: 16,
    width: 0,
  },
  visibleClearIcon: {
    width: 16,
  },
  clearButton: {
    height: 24,
    padding: 0,
    width: 0,
  },
  visibleClearButton: {
    width: 24,
  },
  selectAdornment: {
    position: 'absolute',
    right: 24,
  },
  inputAdornedEnd: {
    paddingRight: 0,
  },
});
const handleMouseDownClearButton = function (event) {
  event.preventDefault();
};
/**
 * An override of the default Material-UI TextField which is resettable
 */
function ResettableTextField(_a) {
  let _b; let
    _c;
  const classesOverride = _a.classes; const { clearAlwaysVisible } = _a; const { InputProps } = _a; const { value } = _a; const { resettable } = _a; const { disabled } = _a; const _d = _a.variant; const variant = _d === void 0 ? 'filled' : _d; const _e = _a.margin; const margin = _e === void 0 ? 'dense' : _e; const
    props = __rest(_a, ['classes', 'clearAlwaysVisible', 'InputProps', 'value', 'resettable', 'disabled', 'variant', 'margin']);
  const _f = react_1.useState(false); const showClear = _f[0]; const
    setShowClear = _f[1];
  const classes = useStyles({ classes: classesOverride });
  const translate = ra_core_1.useTranslate();
  const { onChange } = props;
  const { onFocus } = props;
  const { onBlur } = props;
  const handleClickClearButton = react_1.useCallback(event => {
    event.preventDefault();
    onChange('');
  }, [onChange]);
  const handleFocus = react_1.useCallback(event => {
    setShowClear(true);
    onFocus && onFocus(event);
  }, [onFocus]);
  const handleBlur = react_1.useCallback(event => {
    setShowClear(false);
    onBlur && onBlur(event);
  }, [onBlur]);
  const { clearButton } = classes;
  const { clearIcon } = classes;
  const { inputAdornedEnd } = classes;
  const { selectAdornment } = classes;
  const { visibleClearButton } = classes;
  const { visibleClearIcon } = classes;
  const restClasses = __rest(classes, ['clearButton', 'clearIcon', 'inputAdornedEnd', 'selectAdornment', 'visibleClearButton', 'visibleClearIcon']);
  return (react_1.default.createElement(TextField_1.default, {
    classes: restClasses,
    value,
    InputProps: {
      classes: props.select && variant === 'filled'
        ? { adornedEnd: inputAdornedEnd }
        : {},
      endAdornment: resettable && value && (react_1.default.createElement(InputAdornment_1.default, {
        position: 'end',
        classes: {
          root: props.select ? selectAdornment : null,
        },
      },
      react_1.default.createElement(IconButton_1.default, {
        className: classnames_1.default(clearButton, (_b = {},
        _b[visibleClearButton] = clearAlwaysVisible || showClear,
        _b)),
        'aria-label': translate('ra.action.clear_input_value'),
        title: translate('ra.action.clear_input_value'),
        disableRipple: true,
        onClick: handleClickClearButton,
        onMouseDown: handleMouseDownClearButton,
        disabled,
      },
      react_1.default.createElement(Clear_1.default, {
        className: classnames_1.default(clearIcon, (_c = {},
        _c[visibleClearIcon] = clearAlwaysVisible || showClear,
        _c)),
      })))),
      ...InputProps,
    },
    disabled,
    variant,
    margin,
    ...props,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }));
}
ResettableTextField.propTypes = {
  classes: prop_types_1.default.object,
  clearAlwaysVisible: prop_types_1.default.bool,
  disabled: prop_types_1.default.bool,
  InputProps: prop_types_1.default.object,
  onBlur: prop_types_1.default.func,
  onChange: prop_types_1.default.func.isRequired,
  onFocus: prop_types_1.default.func,
  resettable: prop_types_1.default.bool,
  value: prop_types_1.default.any.isRequired,
};
exports.default = ResettableTextField;
