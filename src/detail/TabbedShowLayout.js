
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
const Divider_1 = __importDefault(require('@material-ui/core/Divider'));
const react_router_dom_1 = require('react-router-dom');
const styles_1 = require('@material-ui/core/styles');
const react_router_dom_2 = require('react-router-dom');
const ra_core_1 = require('ra-core');
const TabbedShowLayoutTabs_1 = __importStar(require('./TabbedShowLayoutTabs'));
const sanitizeRestProps = function (_a) {
  const { children } = _a;
  const { className } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { basePath } = _a;
  const { version } = _a;
  const { initialValues } = _a;
  const { staticContext } = _a;
  const { translate } = _a;
  const { tabs } = _a;
  const rest = __rest(_a, ['children', 'className', 'record', 'resource', 'basePath', 'version', 'initialValues', 'staticContext', 'translate', 'tabs']);
  return rest;
};
const useStyles = styles_1.makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
/**
 * Tabbed Layout for a Show view, showing fields grouped in tabs.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its childen. Children should be Tab components.
 * The component passed as `tabs` props replaces the default material-ui's <Tabs> component.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Show, TabbedShowLayout, Tab, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content">
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
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
const TabbedShowLayout = function (_a) {
  const { basePath } = _a;
  const { children } = _a;
  const classesOverride = _a.classes;
  const { className } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { version } = _a;
  const { value } = _a;
  const { tabs } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'classes', 'className', 'record', 'resource', 'version', 'value', 'tabs']);
  const match = react_router_dom_2.useRouteMatch();
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement('div', { className, key: version, ...sanitizeRestProps(rest) },
    react_1.cloneElement(tabs, {}, children),
    react_1.default.createElement(Divider_1.default, null),
    react_1.default.createElement('div', { className: classes.content }, react_1.Children.map(children, (tab, index) => tab && react_1.isValidElement(tab) ? (react_1.default.createElement(react_router_dom_1.Route, {
      exact: true,
      path: ra_core_1.escapePath(TabbedShowLayoutTabs_1.getTabFullPath(tab, index, match.url)),
      render() {
        return react_1.cloneElement(tab, {
          context: 'content',
          resource,
          record,
          basePath,
        });
      },
    })) : null))));
};
TabbedShowLayout.propTypes = {
  children: prop_types_1.default.node,
  className: prop_types_1.default.string,
  location: prop_types_1.default.object,
  match: prop_types_1.default.object,
  record: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  basePath: prop_types_1.default.string,
  value: prop_types_1.default.number,
  version: prop_types_1.default.number,
  tabs: prop_types_1.default.element,
};
TabbedShowLayout.defaultProps = {
  tabs: react_1.default.createElement(TabbedShowLayoutTabs_1.default, null),
};
exports.default = TabbedShowLayout;
