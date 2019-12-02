
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
const CardContent_1 = __importDefault(require('@material-ui/core/CardContent'));
const styles_1 = require('@material-ui/core/styles');
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const EditActions_1 = __importDefault(require('./EditActions'));
const TitleForRecord_1 = __importDefault(require('../layout/TitleForRecord'));
/**
 * Page component for the Edit view
 *
 * The `<Edit>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes pass the `record` as prop.
 *
 * The `<Edit>` component accepts the following props:
 *
 * - aside
 * - title
 * - actions
 *
 * They all expect an element for value.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Edit, SimpleForm, TextInput } from 'react-admin';
 *
 *     export const PostEdit = (props) => (
 *         <Edit {...props}>
 *             <SimpleForm>
 *                 <TextInput source="title" />
 *             </SimpleForm>
 *         </Edit>
 *     );
 *
 *     // in src/App.js
 *     import React from 'react';
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostEdit } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" edit={PostEdit} />
 *         </Admin>
 *     );
 *     export default App;
 */
const Edit = function (props) { return react_1.default.createElement(exports.EditView, { ...props, ...ra_core_1.useEditController(props) }); };
Edit.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  hasCreate: prop_types_1.default.bool,
  hasEdit: prop_types_1.default.bool,
  hasShow: prop_types_1.default.bool,
  hasList: prop_types_1.default.bool,
  id: prop_types_1.default.any.isRequired,
  resource: prop_types_1.default.string.isRequired,
  title: prop_types_1.default.node,
  successMessage: prop_types_1.default.string,
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
  const { data } = _a;
  const { hasCreate } = _a;
  const { hasEdit } = _a;
  const { hasList } = _a;
  const { hasShow } = _a;
  const { id } = _a;
  const { loading } = _a;
  const { loaded } = _a;
  const { saving } = _a;
  const { resource } = _a;
  const { title } = _a;
  const { version } = _a;
  const { match } = _a;
  const { location } = _a;
  const { history } = _a;
  const { options } = _a;
  const { locale } = _a;
  const { permissions } = _a;
  const { undoable } = _a;
  const { successMessage } = _a;
  const rest = __rest(_a, ['data', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'id', 'loading', 'loaded', 'saving', 'resource', 'title', 'version', 'match', 'location', 'history', 'options', 'locale', 'permissions', 'undoable', 'successMessage']);
  return rest;
};
exports.EditView = function (_a) {
  let _b;
  let { actions } = _a;
  const { aside } = _a;
  const { basePath } = _a;
  const { children } = _a;
  const classesOverride = _a.classes;
  const { className } = _a;
  const { defaultTitle } = _a;
  const { hasList } = _a;
  const { hasShow } = _a;
  const { record } = _a;
  const { redirect } = _a;
  const { resource } = _a;
  const { save } = _a;
  const { saving } = _a;
  const { title } = _a;
  const { undoable } = _a;
  const { version } = _a;
  const rest = __rest(_a, ['actions', 'aside', 'basePath', 'children', 'classes', 'className', 'defaultTitle', 'hasList', 'hasShow', 'record', 'redirect', 'resource', 'save', 'saving', 'title', 'undoable', 'version']);
  const classes = exports.useStyles({ classes: classesOverride });
  if (typeof actions === 'undefined' && hasShow) {
    actions = react_1.default.createElement(EditActions_1.default, null);
  }
  if (!children) {
    return null;
  }
  return (react_1.default.createElement('div', { className: classnames_1.default('edit-page', classes.root, className), ...sanitizeRestProps(rest) },
    react_1.default.createElement(TitleForRecord_1.default, { title, record, defaultTitle }),
    actions
            && react_1.cloneElement(actions, {
              basePath,
              data: record,
              hasShow,
              hasList,
              resource,
              ...actions.props,
            }),
    react_1.default.createElement('div', {
      className: classnames_1.default(classes.main, (_b = {},
      _b[classes.noActions] = !actions,
      _b)),
    },
    react_1.default.createElement(Card_1.default, { className: classes.card }, record ? (react_1.cloneElement(react_1.Children.only(children), {
      basePath,
      record,
      redirect: typeof children.props.redirect === 'undefined'
        ? redirect
        : children.props.redirect,
      resource,
      save,
      saving,
      undoable,
      version,
    })) : (react_1.default.createElement(CardContent_1.default, null, '\u00A0'))),
    aside
                && react_1.default.cloneElement(aside, {
                  basePath,
                  record,
                  resource,
                  version,
                  save,
                  saving,
                }))));
};
exports.EditView.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.element,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  defaultTitle: prop_types_1.default.any,
  hasList: prop_types_1.default.bool,
  hasShow: prop_types_1.default.bool,
  record: prop_types_1.default.object,
  redirect: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
  resource: prop_types_1.default.string,
  save: prop_types_1.default.func,
  title: prop_types_1.default.node,
  version: prop_types_1.default.number,
};
exports.EditView.defaultProps = {
  classes: {},
};
exports.default = Edit;
