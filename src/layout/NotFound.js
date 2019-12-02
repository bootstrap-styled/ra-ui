
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
const Button_1 = __importDefault(require('@material-ui/core/Button'));
const styles_1 = require('@material-ui/core/styles');
const HotTub_1 = __importDefault(require('@material-ui/icons/HotTub'));
const History_1 = __importDefault(require('@material-ui/icons/History'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const Title_1 = __importDefault(require('./Title'));
const useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    container: (_a = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    _a[theme.breakpoints.up('md')] = {
      height: '100%',
    },
    _a[theme.breakpoints.down('sm')] = {
      height: '100vh',
      marginTop: '-3em',
    },
    _a),
    icon: {
      width: '9em',
      height: '9em',
    },
    message: {
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif',
      opacity: 0.5,
      margin: '0 1em',
    },
    toolbar: {
      textAlign: 'center',
      marginTop: '2em',
    },
  });
});
function goBack() {
  window.history.go(-1);
}
const NotFound = function (_a) {
  const { className } = _a;
  const classesOverride = _a.classes;
  const { title } = _a;
  const { location } = _a;
  const rest = __rest(_a, ['className', 'classes', 'title', 'location']);
  const classes = useStyles({ classes: classesOverride });
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(ra_core_1.Authenticated, { location },
    react_1.default.createElement('div', { className: classnames_1.default(classes.container, className), ...rest },
      react_1.default.createElement(Title_1.default, { defaultTitle: title }),
      react_1.default.createElement('div', { className: classes.message },
        react_1.default.createElement(HotTub_1.default, { className: classes.icon }),
        react_1.default.createElement('h1', null, translate('ra.page.not_found')),
        react_1.default.createElement('div', null,
          translate('ra.message.not_found'),
          '.')),
      react_1.default.createElement('div', { className: classes.toolbar },
        react_1.default.createElement(Button_1.default, { variant: 'contained', icon: react_1.default.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
};
NotFound.propTypes = {
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  title: prop_types_1.default.string,
  location: prop_types_1.default.object,
};
exports.default = NotFound;
