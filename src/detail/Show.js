
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
const Card_1 = __importDefault(require('@material-ui/core/Card'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const ShowActions_1 = __importDefault(require('./ShowActions'));
const TitleForRecord_1 = __importDefault(require('../layout/TitleForRecord'));
/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes pass the `record` as prop.
 *
 * The `<Show>` component accepts the following props:
 *
 * - title
 * - actions
 *
 * Both expect an element for value.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Show, SimpleShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <SimpleShowLayout>
 *                 <TextField source="title" />
 *             </SimpleShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import React from 'react';
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
const Show = function (props) { return react_1.default.createElement(exports.ShowView, { ...props, ...ra_core_1.useShowController(props) }); };
Show.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  children: prop_types_1.default.element,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  hasCreate: prop_types_1.default.bool,
  hasEdit: prop_types_1.default.bool,
  hasList: prop_types_1.default.bool,
  hasShow: prop_types_1.default.bool,
  id: prop_types_1.default.any.isRequired,
  resource: prop_types_1.default.string.isRequired,
  title: prop_types_1.default.node,
};
exports.useStyles = styles_1.makeStyles({
  root: {},
  main: {
    display: 'flex',
  },
  noActions: {
    marginTop: '1em',
  },
  card: {
    flex: '1 1 auto',
  },
});
const sanitizeRestProps = function (_a) {
  const { actions } = _a;
  const { aside } = _a;
  const { title } = _a;
  const { children } = _a;
  const { className } = _a;
  const { id } = _a;
  const { data } = _a;
  const { loading } = _a;
  const { loaded } = _a;
  const { resource } = _a;
  const { hasCreate } = _a;
  const { hasEdit } = _a;
  const { hasList } = _a;
  const { hasShow } = _a;
  const { version } = _a;
  const { match } = _a;
  const { location } = _a;
  const { history } = _a;
  const { options } = _a;
  const { locale } = _a;
  const { permissions } = _a;
  const rest = __rest(_a, ['actions', 'aside', 'title', 'children', 'className', 'id', 'data', 'loading', 'loaded', 'resource', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'version', 'match', 'location', 'history', 'options', 'locale', 'permissions']);
  return rest;
};
exports.ShowView = function (_a) {
  let _b;
  let { actions } = _a;
  const { aside } = _a;
  const { basePath } = _a;
  const { children } = _a;
  const classesOverride = _a.classes;
  const { className } = _a;
  const { defaultTitle } = _a;
  const { hasEdit } = _a;
  const { hasList } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { title } = _a;
  const { version } = _a;
  const rest = __rest(_a, ['actions', 'aside', 'basePath', 'children', 'classes', 'className', 'defaultTitle', 'hasEdit', 'hasList', 'record', 'resource', 'title', 'version']);
  const classes = exports.useStyles({ classes: classesOverride });
  if (typeof actions === 'undefined' && hasEdit) {
    actions = react_1.default.createElement(ShowActions_1.default, null);
  }
  if (!children) {
    return null;
  }
  return (react_1.default.createElement('div', { className: classnames_1.default('show-page', classes.root, className), ...sanitizeRestProps(rest) },
    react_1.default.createElement(TitleForRecord_1.default, { title, record, defaultTitle }),
    actions
            && react_1.cloneElement(actions, {
              basePath,
              data: record,
              hasList,
              hasEdit,
              resource,
              ...actions.props,
            }),
    react_1.default.createElement('div', {
      className: classnames_1.default(classes.main, (_b = {},
      _b[classes.noActions] = !actions,
      _b)),
    },
    react_1.default.createElement(Card_1.default, { className: classes.card }, record
                && react_1.cloneElement(react_1.Children.only(children), {
                  resource,
                  basePath,
                  record,
                  version,
                })),
    aside
                && react_1.cloneElement(aside, {
                  resource,
                  basePath,
                  record,
                  version,
                }))));
};
exports.ShowView.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  defaultTitle: prop_types_1.default.any,
  hasEdit: prop_types_1.default.bool,
  hasList: prop_types_1.default.bool,
  loading: prop_types_1.default.bool,
  loaded: prop_types_1.default.bool,
  record: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  title: prop_types_1.default.any,
  version: prop_types_1.default.node,
};
exports.ShowView.defaultProps = {
  classes: {},
};
exports.default = Show;
