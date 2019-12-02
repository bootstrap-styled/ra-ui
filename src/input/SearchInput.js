
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
const Search_1 = __importDefault(require('@material-ui/icons/Search'));
const core_1 = require('@material-ui/core');
const ra_core_1 = require('ra-core');
const TextInput_1 = __importDefault(require('./TextInput'));
const useStyles = core_1.makeStyles({
  input: {
    marginTop: 32,
  },
});
const SearchInput = function (_a) {
  const classesOverride = _a.classes; const
    props = __rest(_a, ['classes']);
  const translate = ra_core_1.useTranslate();
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement(TextInput_1.default, {
    hiddenLabel: true,
    label: '',
    placeholder: translate('ra.action.search'),
    InputProps: {
      endAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: 'end' },
        react_1.default.createElement(Search_1.default, { color: 'disabled' }))),
    },
    className: classes.input,
    ...props,
  }));
};
SearchInput.propTypes = {
  classes: prop_types_1.default.object,
};
exports.default = SearchInput;
