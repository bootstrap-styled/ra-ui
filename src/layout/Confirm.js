
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
const Dialog_1 = __importDefault(require('@material-ui/core/Dialog'));
const DialogActions_1 = __importDefault(require('@material-ui/core/DialogActions'));
const DialogContent_1 = __importDefault(require('@material-ui/core/DialogContent'));
const DialogContentText_1 = __importDefault(require('@material-ui/core/DialogContentText'));
const DialogTitle_1 = __importDefault(require('@material-ui/core/DialogTitle'));
const Button_1 = __importDefault(require('@material-ui/core/Button'));
const styles_1 = require('@material-ui/core/styles');
const colorManipulator_1 = require('@material-ui/core/styles/colorManipulator');
const CheckCircle_1 = __importDefault(require('@material-ui/icons/CheckCircle'));
const ErrorOutline_1 = __importDefault(require('@material-ui/icons/ErrorOutline'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles(theme => ({
  contentText: {
    minWidth: 400,
  },
  confirmPrimary: {
    color: theme.palette.primary.main,
  },
  confirmWarning: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: colorManipulator_1.fade(theme.palette.error.main, 0.12),
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  iconPaddingStyle: {
    paddingRight: '0.5em',
  },
}));
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
const Confirm = function (_a) {
  let _b;
  const { isOpen } = _a;
  const { loading } = _a;
  const { title } = _a;
  const { content } = _a;
  const { confirm } = _a;
  const { cancel } = _a;
  const { confirmColor } = _a;
  const { onClose } = _a;
  const { onConfirm } = _a;
  const classesOverride = _a.classes;
  const _c = _a.translateOptions;
  const translateOptions = _c === void 0 ? {} : _c;
  const classes = useStyles({ classes: classesOverride });
  const translate = ra_core_1.useTranslate();
  const handleConfirm = react_1.useCallback(e => {
    e.stopPropagation();
    onConfirm();
  }, [onConfirm]);
  const handleClick = react_1.useCallback(e => {
    e.stopPropagation();
  }, []);
  return (react_1.default.createElement(Dialog_1.default, {
    open: isOpen, onClose, onClick: handleClick, 'aria-labelledby': 'alert-dialog-title',
  },
  react_1.default.createElement(DialogTitle_1.default, { id: 'alert-dialog-title' }, translate(title, { _: title, ...translateOptions })),
  react_1.default.createElement(DialogContent_1.default, null,
    react_1.default.createElement(DialogContentText_1.default, { className: classes.contentText }, translate(content, { _: content, ...translateOptions }))),
  react_1.default.createElement(DialogActions_1.default, null,
    react_1.default.createElement(Button_1.default, { disabled: loading, onClick: onClose },
      react_1.default.createElement(ErrorOutline_1.default, { className: classes.iconPaddingStyle }),
      translate(cancel, { _: cancel })),
    react_1.default.createElement(Button_1.default, {
      disabled: loading,
      onClick: handleConfirm,
      className: classnames_1.default('ra-confirm', (_b = {},
      _b[classes.confirmWarning] = confirmColor === 'warning',
      _b[classes.confirmPrimary] = confirmColor === 'primary',
      _b)),
      autoFocus: true,
    },
    react_1.default.createElement(CheckCircle_1.default, { className: classes.iconPaddingStyle }),
    translate(confirm, { _: confirm })))));
};
Confirm.propTypes = {
  cancel: prop_types_1.default.string.isRequired,
  classes: prop_types_1.default.object,
  confirm: prop_types_1.default.string.isRequired,
  confirmColor: prop_types_1.default.string.isRequired,
  content: prop_types_1.default.string.isRequired,
  isOpen: prop_types_1.default.bool,
  loading: prop_types_1.default.bool,
  onClose: prop_types_1.default.func.isRequired,
  onConfirm: prop_types_1.default.func.isRequired,
  title: prop_types_1.default.string.isRequired,
};
Confirm.defaultProps = {
  cancel: 'ra.action.cancel',
  classes: {},
  confirm: 'ra.action.confirm',
  confirmColor: 'primary',
  isOpen: false,
};
exports.default = Confirm;
