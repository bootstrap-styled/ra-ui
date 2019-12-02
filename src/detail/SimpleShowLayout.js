
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
const CardContentInner_1 = __importDefault(require('../layout/CardContentInner'));
const Labeled_1 = __importDefault(require('../input/Labeled'));
const sanitizeRestProps = function (_a) {
  const { children } = _a;
  const { className } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { basePath } = _a;
  const { version } = _a;
  const { initialValues } = _a;
  const { translate } = _a;
  const rest = __rest(_a, ['children', 'className', 'record', 'resource', 'basePath', 'version', 'initialValues', 'translate']);
  return rest;
};
/**
 * Simple Layout for a Show view, showing fields in one column.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its childen. Children should be Field-like components.
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
exports.SimpleShowLayout = function (_a) {
  const { basePath } = _a;
  const { className } = _a;
  const { children } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { version } = _a;
  const rest = __rest(_a, ['basePath', 'className', 'children', 'record', 'resource', 'version']);
  return (react_1.default.createElement(CardContentInner_1.default, { className, key: version, ...sanitizeRestProps(rest) }, react_1.Children.map(children, field => field && react_1.isValidElement(field) ? (react_1.default.createElement('div', { key: field.props.source, className: classnames_1.default(`ra-field ra-field-${field.props.source}`, field.props.className) }, field.props.addLabel ? (react_1.default.createElement(Labeled_1.default, {
    record, resource, basePath, label: field.props.label, source: field.props.source, disabled: false,
  }, field)) : typeof field.type === 'string' ? (field) : (react_1.cloneElement(field, {
    record,
    resource,
    basePath,
  })))) : null)));
};
exports.SimpleShowLayout.propTypes = {
  basePath: prop_types_1.default.string,
  className: prop_types_1.default.string,
  children: prop_types_1.default.node,
  record: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  version: prop_types_1.default.number,
};
exports.default = exports.SimpleShowLayout;
