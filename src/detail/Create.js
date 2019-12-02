
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
const TitleForRecord_1 = __importDefault(require('../layout/TitleForRecord'));
/**
 * Page component for the Create view
 *
 * The `<Create>` component renders the page title and actions.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes pass the `record` as prop.
 *
 * The `<Create>` component accepts the following props:
 *
 * - title
 * - actions
 *
 * Both expect an element for value.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Create, SimpleForm, TextInput } from 'react-admin';
 *
 *     export const PostCreate = (props) => (
 *         <Create {...props}>
 *             <SimpleForm>
 *                 <TextInput source="title" />
 *             </SimpleForm>
 *         </Create>
 *     );
 *
 *     // in src/App.js
 *     import React from 'react';
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostCreate } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" create={PostCreate} />
 *         </Admin>
 *     );
 *     export default App;
 */
const Create = function (props) { return (react_1.default.createElement(exports.CreateView, { ...props, ...ra_core_1.useCreateController(props) })); };
Create.propTypes = {
  actions: prop_types_1.default.element,
  aside: prop_types_1.default.element,
  children: prop_types_1.default.element,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  hasCreate: prop_types_1.default.bool,
  hasEdit: prop_types_1.default.bool,
  hasShow: prop_types_1.default.bool,
  resource: prop_types_1.default.string.isRequired,
  title: prop_types_1.default.node,
  record: prop_types_1.default.object,
  hasList: prop_types_1.default.bool,
  successMessage: prop_types_1.default.string,
};
const useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    root: {},
    main: {
      display: 'flex',
    },
    noActions: (_a = {},
    _a[theme.breakpoints.up('sm')] = {
      marginTop: '1em',
    },
    _a),
    card: {
      flex: '1 1 auto',
    },
  });
});
const sanitizeRestProps = function (_a) {
  const { actions } = _a;
  const { children } = _a;
  const { className } = _a;
  const { crudCreate } = _a;
  const { loading } = _a;
  const { loaded } = _a;
  const { saving } = _a;
  const { resource } = _a;
  const { title } = _a;
  const { hasCreate } = _a;
  const { hasEdit } = _a;
  const { hasList } = _a;
  const { hasShow } = _a;
  const { match } = _a;
  const { location } = _a;
  const { history } = _a;
  const { options } = _a;
  const { locale } = _a;
  const { permissions } = _a;
  const { successMessage } = _a;
  const rest = __rest(_a, ['actions', 'children', 'className', 'crudCreate', 'loading', 'loaded', 'saving', 'resource', 'title', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'match', 'location', 'history', 'options', 'locale', 'permissions', 'successMessage']);
  return rest;
};
exports.CreateView = function (props) {
  let _a;
  const { actions } = props;
  const { aside } = props;
  const { basePath } = props;
  const { children } = props;
  const classesOverride = props.classes;
  const { className } = props;
  const { defaultTitle } = props;
  const { hasList } = props;
  const { hasShow } = props;
  const _b = props.record;
  const record = _b === void 0 ? {} : _b;
  const { redirect } = props;
  const { resource } = props;
  const { save } = props;
  const { saving } = props;
  const { title } = props;
  const { version } = props;
  const rest = __rest(props, ['actions', 'aside', 'basePath', 'children', 'classes', 'className', 'defaultTitle', 'hasList', 'hasShow', 'record', 'redirect', 'resource', 'save', 'saving', 'title', 'version']);
  ra_core_1.useCheckMinimumRequiredProps('Create', ['children'], props);
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement('div', { className: classnames_1.default('create-page', classes.root, className), ...sanitizeRestProps(rest) },
    react_1.default.createElement(TitleForRecord_1.default, { title, record, defaultTitle }),
    actions
            && react_1.cloneElement(actions, {
              basePath,
              resource,
              hasList,
              ...actions.props,
            }),
    react_1.default.createElement('div', {
      className: classnames_1.default(classes.main, (_a = {},
      _a[classes.noActions] = !actions,
      _a)),
    },
    react_1.default.createElement(Card_1.default, { className: classes.card }, react_1.cloneElement(react_1.Children.only(children), {
      basePath,
      record,
      redirect: typeof children.props.redirect === 'undefined'
        ? redirect
        : children.props.redirect,
      resource,
      save,
      saving,
      version,
    })),
    aside
                && react_1.cloneElement(aside, {
                  basePath,
                  record,
                  resource,
                  save,
                  saving,
                  version,
                }))));
};
exports.CreateView.propTypes = {
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
};
exports.CreateView.defaultProps = {
  classes: {},
};
exports.default = Create;
