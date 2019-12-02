
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
const core_1 = require('@material-ui/core');
const useStyles = core_1.makeStyles({
  suggestionsContainer: {
    zIndex: 2,
  },
  suggestionsPaper: {
    maxHeight: '50vh',
    overflowY: 'auto',
  },
});
const AutocompleteSuggestionList = function (_a) {
  const { children } = _a;
  const { isOpen } = _a;
  const { menuProps } = _a;
  const { inputEl } = _a;
  const _b = _a.classes;
  const classesOverride = _b === void 0 ? undefined : _b;
  const { suggestionsContainerProps } = _a;
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement(core_1.Popper, {
    open: isOpen, anchorEl: inputEl, className: classes.suggestionsContainer, modifiers: {}, ...suggestionsContainerProps,
  },
  react_1.default.createElement('div', { ...(isOpen ? menuProps : {}) },
    react_1.default.createElement(core_1.Paper, {
      square: true,
      style: {
        marginTop: 8,
        minWidth: inputEl ? inputEl.clientWidth : null,
      },
      className: classes.suggestionsPaper,
    }, children))));
};
exports.default = AutocompleteSuggestionList;
