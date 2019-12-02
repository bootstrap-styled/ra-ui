
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
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const styles_1 = require('@material-ui/core/styles');
const FileInput_1 = __importDefault(require('./FileInput'));
const useStyles = styles_1.makeStyles(theme => ({
  root: { width: '100%' },
  dropZone: {
    background: theme.palette.background.default,
    cursor: 'pointer',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
  preview: {
    display: 'inline-block',
  },
  removeButton: {
    display: 'inline-block',
    position: 'relative',
    float: 'left',
    '& button': {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      minWidth: theme.spacing(2),
      opacity: 0,
    },
    '&:hover button': {
      opacity: 1,
    },
  },
}));
const ImageInput = function (props) {
  const classes = useStyles(props);
  return (react_1.default.createElement(FileInput_1.default, {
    labelMultiple: 'ra.input.image.upload_several', labelSingle: 'ra.input.image.upload_single', classes, ...props,
  }));
};
exports.default = ImageInput;
