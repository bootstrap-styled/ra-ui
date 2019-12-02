
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
const react_router_dom_1 = require('react-router-dom');
const Tab_1 = __importDefault(require('@material-ui/core/Tab'));
const ra_core_1 = require('ra-core');
const classnames_1 = __importDefault(require('classnames'));
const Labeled_1 = __importDefault(require('../input/Labeled'));
const sanitizeRestProps = function (_a) {
  const { contentClassName } = _a;
  const { label } = _a;
  const { icon } = _a;
  const { value } = _a;
  const { translate } = _a;
  const rest = __rest(_a, ['contentClassName', 'label', 'icon', 'value', 'translate']);
  return rest;
};
/**
 * Tab element for the SimpleShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import FavoriteIcon from '@material-ui/icons/Favorite';
 *     import PersonPinIcon from '@material-ui/icons/PersonPin';
 *     import { Show, TabbedShowLayout, Tab, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata" icon={<PersonIcon />}>
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
const Tab = /** @class */ (function (_super) {
  __extends(Tab, _super);
  function Tab() {
    const _this = _super !== null && _super.apply(this, arguments) || this;
    _this.renderHeader = function (_a) {
      const { className } = _a;
      const { label } = _a;
      const { icon } = _a;
      const { value } = _a;
      const { translate } = _a;
      const rest = __rest(_a, ['className', 'label', 'icon', 'value', 'translate']);
      return (react_1.default.createElement(Tab_1.default, {
        key: label, label: translate(label, { _: label }), value, icon, className: classnames_1.default('show-tab', className), component: react_router_dom_1.Link, to: value, ...sanitizeRestProps(rest),
      }));
    };
    _this.renderContent = function (_a) {
      const { contentClassName } = _a;
      const { children } = _a;
      const { basePath } = _a;
      const { record } = _a;
      const { resource } = _a;
      return (react_1.default.createElement('span', { className: contentClassName }, react_1.default.Children.map(children, field => field && react_1.isValidElement(field) ? (react_1.default.createElement('div', { key: field.props.source, className: classnames_1.default('ra-field', `ra-field-${field.props.source}`, field.props.className) }, field.props.addLabel ? (react_1.default.createElement(Labeled_1.default, {
        label: field.props.label, source: field.props.source, basePath, record, resource,
      }, field)) : typeof field.type === 'string' ? (field) : (react_1.default.cloneElement(field, {
        basePath,
        record,
        resource,
      })))) : null)));
    };
    return _this;
  }
  Tab.prototype.render = function () {
    const _a = this.props; const { children } = _a; const { context } = _a; const
      rest = __rest(_a, ['children', 'context']);
    return context === 'header'
      ? this.renderHeader(rest)
      : this.renderContent({ children, ...rest });
  };
  return Tab;
}(react_1.Component));
Tab.propTypes = {
  className: prop_types_1.default.string,
  contentClassName: prop_types_1.default.string,
  children: prop_types_1.default.node,
  context: prop_types_1.default.oneOf(['header', 'content']),
  icon: prop_types_1.default.element,
  label: prop_types_1.default.string.isRequired,
  translate: prop_types_1.default.func.isRequired,
  value: prop_types_1.default.string,
};
exports.default = ra_core_1.translate(Tab);
