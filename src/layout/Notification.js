
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
const react_redux_1 = require('react-redux');
const Snackbar_1 = __importDefault(require('@material-ui/core/Snackbar'));
const Button_1 = __importDefault(require('@material-ui/core/Button'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  },
  warning: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
  undo: {
    color: theme.palette.primary.light,
  },
}));
const Notification = function (_a) {
  const { type } = _a;
  const { className } = _a;
  const { autoHideDuration } = _a;
  const rest = __rest(_a, ['type', 'className', 'autoHideDuration']);
  const _b = react_1.useState(false); const open = _b[0]; const
    setOpen = _b[1];
  const notification = react_redux_1.useSelector(ra_core_1.getNotification);
  const dispatch = react_redux_1.useDispatch();
  const translate = ra_core_1.useTranslate();
  const styles = useStyles({});
  react_1.useEffect(() => {
    setOpen(!!notification);
  }, [notification]);
  const handleRequestClose = react_1.useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const handleExited = react_1.useCallback(() => {
    if (notification && notification.undoable) {
      dispatch(ra_core_1.complete());
      ra_core_1.undoableEventEmitter.emit('end', { isUndo: false });
    }
    dispatch(ra_core_1.hideNotification());
  }, [dispatch, notification]);
  const handleUndo = react_1.useCallback(() => {
    dispatch(ra_core_1.undo());
    ra_core_1.undoableEventEmitter.emit('end', { isUndo: true });
  }, [dispatch]);
  return (react_1.default.createElement(Snackbar_1.default, {
    open,
    message: notification
            && notification.message
            && translate(notification.message, notification.messageArgs),
    autoHideDuration: (notification && notification.autoHideDuration)
            || autoHideDuration,
    disableWindowBlurListener: notification && notification.undoable,
    onExited: handleExited,
    onClose: handleRequestClose,
    ContentProps: {
      className: classnames_1.default(styles[(notification && notification.type) || type], className),
    },
    action: notification && notification.undoable ? (react_1.default.createElement(Button_1.default, {
      color: 'primary', className: styles.undo, size: 'small', onClick: handleUndo,
    }, translate('ra.action.undo'))) : null,
    ...rest,
  }));
};
Notification.propTypes = {
  type: prop_types_1.default.string,
};
Notification.defaultProps = {
  type: 'info',
  autoHideDuration: 4000,
};
exports.default = Notification;
