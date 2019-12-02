
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
const core_1 = require('@material-ui/core');
const styles_1 = require('@material-ui/styles');
const Lock_1 = __importDefault(require('@material-ui/icons/Lock'));
const react_router_dom_1 = require('react-router-dom');
const ra_core_1 = require('ra-core');
const defaultTheme_1 = __importDefault(require('../defaultTheme'));
const Notification_1 = __importDefault(require('../layout/Notification'));
const LoginForm_1 = __importDefault(require('./LoginForm'));
const useStyles = core_1.makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  card: {
    minWidth: 300,
    marginTop: '6em',
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: theme.palette.secondary[500],
  },
}));
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
const Login = function (_a) {
  const { theme } = _a;
  const classesOverride = _a.classes;
  const { className } = _a;
  const { children } = _a;
  const { staticContext } = _a;
  const { backgroundImage } = _a;
  const rest = __rest(_a, ['theme', 'classes', 'className', 'children', 'staticContext', 'backgroundImage']);
  const containerRef = react_1.useRef();
  const classes = useStyles({ classes: classesOverride });
  const muiTheme = react_1.useMemo(() => core_1.createMuiTheme(theme), [theme]);
  let backgroundImageLoaded = false;
  const checkAuth = ra_core_1.useCheckAuth();
  const history = react_router_dom_1.useHistory();
  react_1.useEffect(() => {
    checkAuth({}, false)
      .then(() => {
        // already authenticated, redirect to the home page
        history.push('/');
      })
      .catch(() => {
        // not authenticated, stay on the login page
      });
  }, [checkAuth, history]);
  const updateBackgroundImage = function () {
    if (!backgroundImageLoaded && containerRef.current) {
      containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
      backgroundImageLoaded = true;
    }
  };
    // Load background image asynchronously to speed up time to interactive
  const lazyLoadBackgroundImage = function () {
    if (backgroundImage) {
      const img = new Image();
      img.onload = updateBackgroundImage;
      img.src = backgroundImage;
    }
  };
  react_1.useEffect(() => {
    if (!backgroundImageLoaded) {
      lazyLoadBackgroundImage();
    }
  });
  return (react_1.default.createElement(styles_1.ThemeProvider, { theme: muiTheme },
    react_1.default.createElement('div', { className: classnames_1.default(classes.main, className), ...rest, ref: containerRef },
      react_1.default.createElement(core_1.Card, { className: classes.card },
        react_1.default.createElement('div', { className: classes.avatar },
          react_1.default.createElement(core_1.Avatar, { className: classes.icon },
            react_1.default.createElement(Lock_1.default, null))),
        children),
      react_1.default.createElement(Notification_1.default, null))));
};
Login.propTypes = {
  backgroundImage: prop_types_1.default.string,
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  theme: prop_types_1.default.object,
  staticContext: prop_types_1.default.object,
};
Login.defaultProps = {
  backgroundImage: 'https://source.unsplash.com/random/1600x900/daily',
  theme: defaultTheme_1.default,
  children: react_1.default.createElement(LoginForm_1.default, null),
};
exports.default = Login;
