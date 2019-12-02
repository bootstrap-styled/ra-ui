
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
const Avatar_1 = __importDefault(require('@material-ui/core/Avatar'));
const List_1 = __importDefault(require('@material-ui/core/List'));
const ListItem_1 = __importDefault(require('@material-ui/core/ListItem'));
const ListItemAvatar_1 = __importDefault(require('@material-ui/core/ListItemAvatar'));
const ListItemIcon_1 = __importDefault(require('@material-ui/core/ListItemIcon'));
const ListItemSecondaryAction_1 = __importDefault(require('@material-ui/core/ListItemSecondaryAction'));
const ListItemText_1 = __importDefault(require('@material-ui/core/ListItemText'));
const styles_1 = require('@material-ui/core/styles');
const react_router_dom_1 = require('react-router-dom');
const ra_core_1 = require('ra-core');
const useStyles = styles_1.makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  tertiary: { float: 'right', opacity: 0.541176 },
});
const LinkOrNot = function (_a) {
  const classesOverride = _a.classes; const { linkType } = _a; const { basePath } = _a; const { id } = _a; const
    { children } = _a;
  const classes = useStyles({ classes: classesOverride });
  return linkType === 'edit' || linkType === true ? (react_1.default.createElement(react_router_dom_1.Link, { to: ra_core_1.linkToRecord(basePath, id), className: classes.link }, children)) : linkType === 'show' ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${ra_core_1.linkToRecord(basePath, id)}/show`, className: classes.link }, children)) : (react_1.default.createElement('span', null, children));
};
const SimpleList = function (_a) {
  const { basePath } = _a;
  const { className } = _a;
  const classesOverride = _a.classes;
  const { data } = _a;
  const { hasBulkActions } = _a;
  const { ids } = _a;
  const { loading } = _a;
  const { leftAvatar } = _a;
  const { leftIcon } = _a;
  const { linkType } = _a;
  const { onToggleItem } = _a;
  const { primaryText } = _a;
  const { rightAvatar } = _a;
  const { rightIcon } = _a;
  const { secondaryText } = _a;
  const { selectedIds } = _a;
  const { tertiaryText } = _a;
  const { total } = _a;
  const rest = __rest(_a, ['basePath', 'className', 'classes', 'data', 'hasBulkActions', 'ids', 'loading', 'leftAvatar', 'leftIcon', 'linkType', 'onToggleItem', 'primaryText', 'rightAvatar', 'rightIcon', 'secondaryText', 'selectedIds', 'tertiaryText', 'total']);
  const classes = useStyles({ classes: classesOverride });
  return ((loading || total > 0) && (react_1.default.createElement(List_1.default, { className, ...ra_core_1.sanitizeListRestProps(rest) }, ids.map(id => (react_1.default.createElement(LinkOrNot, {
    linkType, basePath, id, key: id,
  },
  react_1.default.createElement(ListItem_1.default, { button: !!linkType },
    leftIcon && (react_1.default.createElement(ListItemIcon_1.default, null, leftIcon(data[id], id))),
    leftAvatar && (react_1.default.createElement(ListItemAvatar_1.default, null,
      react_1.default.createElement(Avatar_1.default, null, leftAvatar(data[id], id)))),
    react_1.default.createElement(ListItemText_1.default, {
      primary: react_1.default.createElement('div', null,
        primaryText(data[id], id),
        tertiaryText && (react_1.default.createElement('span', { className: classes.tertiary }, tertiaryText(data[id], id)))),
      secondary: secondaryText && secondaryText(data[id], id),
    }),
    (rightAvatar || rightIcon) && (react_1.default.createElement(ListItemSecondaryAction_1.default, null,
      rightAvatar && (react_1.default.createElement(Avatar_1.default, null, rightAvatar(data[id], id))),
      rightIcon && (react_1.default.createElement(ListItemIcon_1.default, null, rightIcon(data[id], id))))))))))));
};
SimpleList.propTypes = {
  basePath: prop_types_1.default.string,
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  data: prop_types_1.default.object,
  hasBulkActions: prop_types_1.default.bool.isRequired,
  ids: prop_types_1.default.array,
  leftAvatar: prop_types_1.default.func,
  leftIcon: prop_types_1.default.func,
  linkType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool])
    .isRequired,
  onToggleItem: prop_types_1.default.func,
  primaryText: prop_types_1.default.func,
  rightAvatar: prop_types_1.default.func,
  rightIcon: prop_types_1.default.func,
  secondaryText: prop_types_1.default.func,
  selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
  tertiaryText: prop_types_1.default.func,
};
SimpleList.defaultProps = {
  linkType: 'edit',
  hasBulkActions: false,
  selectedIds: [],
};
exports.default = SimpleList;
