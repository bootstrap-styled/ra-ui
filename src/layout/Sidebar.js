
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
const core_1 = require('@material-ui/core');
const get_1 = __importDefault(require('lodash/get'));
const ra_core_1 = require('ra-core');
exports.DRAWER_WIDTH = 240;
exports.CLOSED_DRAWER_WIDTH = 55;
const useStyles = core_1.makeStyles(theme => {
  let _a;
  return ({
    drawerPaper: (_a = {
      position: 'relative',
      height: 'auto',
      overflowX: 'hidden',
      width(props) {
        return props.open
          ? get_1.default(theme, 'sidebar.width', exports.DRAWER_WIDTH)
          : get_1.default(theme, 'sidebar.closedWidth', exports.CLOSED_DRAWER_WIDTH);
      },
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: 'transparent',
      marginTop: '0.5em',
      borderRight: 'none',
    },
    _a[theme.breakpoints.only('xs')] = {
      marginTop: 0,
      height: '100vh',
      position: 'inherit',
      backgroundColor: theme.palette.background.default,
    },
    _a[theme.breakpoints.up('md')] = {
      border: 'none',
      marginTop: '1.5em',
    },
    _a),
  });
});
const Sidebar = function (_a) {
  const { children } = _a;
  const { closedSize } = _a;
  const { size } = _a;
  const classesOverride = _a.classes;
  const rest = __rest(_a, ['children', 'closedSize', 'size', 'classes']);
  const dispatch = react_redux_1.useDispatch();
  const isXSmall = core_1.useMediaQuery(theme => theme.breakpoints.down('xs'));
  const isSmall = core_1.useMediaQuery(theme => theme.breakpoints.down('sm'));
  // FIXME negating isXSmall and isSmall should be enough, but unfortunately
  // mui media queries use a two pass system and are always false at first
  // see https://github.com/mui-org/material-ui/issues/14336
  const isDesktop = core_1.useMediaQuery(theme => theme.breakpoints.up('md'));
  react_1.useEffect(() => {
    if (isDesktop) {
      dispatch(ra_core_1.setSidebarVisibility(true)); // FIXME renders with a closed sidebar at first
    }
  }, [isDesktop, dispatch]);
  const open = react_redux_1.useSelector(state => state.admin.ui.sidebarOpen);
  react_redux_1.useSelector(state => state.locale); // force redraw on locale change
  const handleClose = function () { return dispatch(ra_core_1.setSidebarVisibility(false)); };
  const toggleSidebar = function () { return dispatch(ra_core_1.setSidebarVisibility(!open)); };
  const classes = useStyles({ classes: classesOverride, open });
  return isXSmall ? (react_1.default.createElement(core_1.Drawer, {
    variant: 'temporary',
    open,
    PaperProps: {
      className: classes.drawerPaper,
    },
    onClose: toggleSidebar,
    ...rest,
  }, react_1.cloneElement(react_1.Children.only(children), {
    onMenuClick: handleClose,
  }))) : isSmall ? (react_1.default.createElement(core_1.Drawer, {
    variant: 'permanent',
    open,
    PaperProps: {
      className: classes.drawerPaper,
    },
    onClose: toggleSidebar,
    ...rest,
  }, react_1.cloneElement(react_1.Children.only(children), {
    dense: true,
    onMenuClick: handleClose,
  }))) : (react_1.default.createElement(core_1.Drawer, {
    variant: 'permanent',
    open,
    PaperProps: {
      className: classes.drawerPaper,
    },
    onClose: toggleSidebar,
    ...rest,
  }, react_1.cloneElement(react_1.Children.only(children), { dense: true })));
};
Sidebar.propTypes = {
  children: prop_types_1.default.node.isRequired,
};
exports.default = Sidebar;
