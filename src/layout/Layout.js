
const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());
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
const classnames_1 = __importDefault(require('classnames'));
const react_router_dom_1 = require('react-router-dom');
const styles_1 = require('@material-ui/core/styles');
const styles_2 = require('@material-ui/styles');
const compose_1 = __importDefault(require('recompose/compose'));
const AppBar_1 = __importDefault(require('./AppBar'));
const Sidebar_1 = __importDefault(require('./Sidebar'));
const Menu_1 = __importDefault(require('./Menu'));
const Notification_1 = __importDefault(require('./Notification'));
const Error_1 = __importDefault(require('./Error'));
const defaultTheme_1 = __importDefault(require('../defaultTheme'));
const ra_core_1 = require('ra-core');
const styles = function (theme) {
  let _a; let
    _b;
  return styles_1.createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      minWidth: 'fit-content',
      width: '100%',
    },
    appFrame: (_a = {
      display: 'flex',
      flexDirection: 'column',
    },
    _a[theme.breakpoints.up('xs')] = {
      marginTop: theme.spacing(6),
    },
    _a[theme.breakpoints.down('xs')] = {
      marginTop: theme.spacing(7),
    },
    _a),
    contentWithSidebar: {
      display: 'flex',
      flexGrow: 1,
    },
    content: (_b = {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexBasis: 0,
      padding: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingLeft: 0,
    },
    _b[theme.breakpoints.up('xs')] = {
      paddingLeft: 5,
    },
    _b[theme.breakpoints.down('sm')] = {
      padding: 0,
    },
    _b),
  });
};
const sanitizeRestProps = function (_a) {
  const { staticContext } = _a;
  const { history } = _a;
  const { location } = _a;
  const { match } = _a;
  const props = __rest(_a, ['staticContext', 'history', 'location', 'match']);
  return props;
};
const Layout = /** @class */ (function (_super) {
  __extends(Layout, _super);
  function Layout(props) {
    const _this = _super.call(this, props) || this;
    _this.state = { hasError: false, errorMessage: null, errorInfo: null };
    /**
         * Reset the error state upon navigation
         *
         * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
         */
    props.history.listen(() => {
      if (_this.state.hasError) {
        _this.setState({ hasError: false });
      }
    });
    return _this;
  }
  Layout.prototype.componentDidCatch = function (errorMessage, errorInfo) {
    this.setState({ hasError: true, errorMessage, errorInfo });
  };
  Layout.prototype.render = function () {
    const _a = this.props; const { appBar } = _a; const { children } = _a; const { classes } = _a; const { className } = _a; const { customRoutes } = _a; const { error } = _a; const { dashboard } = _a; const { logout } = _a; const { menu } = _a; const { notification } = _a; const { open } = _a; const { sidebar } = _a; const { title } = _a; const
      props = __rest(_a, ['appBar', 'children', 'classes', 'className', 'customRoutes', 'error', 'dashboard', 'logout', 'menu', 'notification', 'open', 'sidebar', 'title']);
    const _b = this.state; const { hasError } = _b; const { errorMessage } = _b; const
      { errorInfo } = _b;
    return (react_1.default.createElement('div', { className: classnames_1.default('layout', classes.root, className), ...sanitizeRestProps(props) },
      react_1.default.createElement('div', { className: classes.appFrame },
        react_1.createElement(appBar, { title, open, logout }),
        react_1.default.createElement('main', { className: classes.contentWithSidebar },
          react_1.createElement(sidebar, {
            children: react_1.createElement(menu, {
              logout,
              hasDashboard: !!dashboard,
            }),
          }),
          react_1.default.createElement('div', { className: classes.content }, hasError
            ? react_1.createElement(error, {
              error: errorMessage,
              errorInfo,
              title,
            })
            : children)),
        react_1.createElement(notification))));
  };
  return Layout;
}(react_1.Component));
Layout.propTypes = {
  appBar: ra_core_1.ComponentPropType,
  children: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  customRoutes: prop_types_1.default.array,
  dashboard: ra_core_1.ComponentPropType,
  error: ra_core_1.ComponentPropType,
  history: prop_types_1.default.object.isRequired,
  logout: prop_types_1.default.element,
  menu: ra_core_1.ComponentPropType,
  notification: ra_core_1.ComponentPropType,
  open: prop_types_1.default.bool,
  sidebar: ra_core_1.ComponentPropType,
  title: prop_types_1.default.node.isRequired,
};
Layout.defaultProps = {
  appBar: AppBar_1.default,
  error: Error_1.default,
  menu: Menu_1.default,
  notification: Notification_1.default,
  sidebar: Sidebar_1.default,
};
const mapStateToProps = function (state) {
  return ({
    open: state.admin.ui.sidebarOpen,
  });
};
const EnhancedLayout = compose_1.default(react_redux_1.connect(mapStateToProps, {} // Avoid connect passing dispatch in props
), react_router_dom_1.withRouter, styles_1.withStyles(styles))(Layout);
const LayoutWithTheme = function (_a) {
  const themeOverride = _a.theme; const
    props = __rest(_a, ['theme']);
  const themeProp = react_1.useRef(themeOverride);
  const _b = react_1.useState(styles_1.createMuiTheme(themeOverride)); const theme = _b[0]; const
    setTheme = _b[1];
  react_1.useEffect(() => {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(styles_1.createMuiTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  return (react_1.default.createElement(styles_2.ThemeProvider, { theme },
    react_1.default.createElement(EnhancedLayout, { ...props })));
};
LayoutWithTheme.propTypes = {
  theme: prop_types_1.default.object,
};
LayoutWithTheme.defaultProps = {
  theme: defaultTheme_1.default,
};
exports.default = LayoutWithTheme;
