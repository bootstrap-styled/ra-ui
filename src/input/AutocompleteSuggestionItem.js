
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
const parse_1 = __importDefault(require('autosuggest-highlight/parse'));
const match_1 = __importDefault(require('autosuggest-highlight/match'));
const core_1 = require('@material-ui/core');
const classnames_1 = __importDefault(require('classnames'));
const useStyles = core_1.makeStyles(theme => ({
  root: {
    fontWeight: 400,
  },
  selected: {
    fontWeight: 500,
  },
  suggestion: {
    display: 'block',
    fontFamily: theme.typography.fontFamily,
  },
  suggestionText: { fontWeight: 300 },
  highlightedSuggestionText: { fontWeight: 500 },
}));
const AutocompleteSuggestionItem = function (_a) {
  let _b;
  const { suggestion } = _a;
  const { index } = _a;
  const { highlightedIndex } = _a;
  const { isSelected } = _a;
  const { filterValue } = _a;
  const classesOverride = _a.classes;
  const { getSuggestionText } = _a;
  const rest = __rest(_a, ['suggestion', 'index', 'highlightedIndex', 'isSelected', 'filterValue', 'classes', 'getSuggestionText']);
  const classes = useStyles({ classes: classesOverride });
  const isHighlighted = highlightedIndex === index;
  const suggestionText = getSuggestionText(suggestion);
  let matches;
  let parts;
  if (!react_1.isValidElement(suggestionText)) {
    matches = match_1.default(suggestionText, filterValue);
    parts = parse_1.default(suggestionText, matches);
  }
  return (react_1.default.createElement(core_1.MenuItem, {
    key: suggestionText,
    selected: isHighlighted,
    className: classnames_1.default(classes.root, (_b = {},
    _b[classes.selected] = isSelected,
    _b)),
    ...rest,
  }, react_1.isValidElement(suggestionText) ? (react_1.cloneElement(suggestionText, { filterValue })) : (react_1.default.createElement('div', { className: classes.suggestion }, parts.map((part, index) => part.highlight ? (react_1.default.createElement('span', { key: index, className: classes.highlightedSuggestionText }, part.text)) : (react_1.default.createElement('strong', { key: index, className: classes.suggestionText }, part.text)))))));
};
exports.default = AutocompleteSuggestionItem;
