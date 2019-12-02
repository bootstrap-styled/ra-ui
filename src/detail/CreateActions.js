
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
const TopToolbar_1 = __importDefault(require('../layout/TopToolbar'));
const button_1 = require('../button');
const sanitizeRestProps = function (_a) {
  const { basePath } = _a;
  const { className } = _a;
  const { hasList } = _a;
  const { resource } = _a;
  const rest = __rest(_a, ['basePath', 'className', 'hasList', 'resource']);
  return rest;
};
/**
 * Action Toolbar for the Create view
 *
 * Internal component. If you want to add or remove actions for a Create view,
 * write your own CreateActions Component. Then, in the <Create> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@material-ui/core/Button';
 *     import { TopToolbar, Create, ListButton } from 'react-admin';
 *
 *     const PostCreateActions = ({ basePath }) => (
 *         <TopToolbar>
 *             <ListButton basePath={basePath} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostCreate = (props) => (
 *         <Create actions={<PostCreateActions />} {...props}>
 *             ...
 *         </Create>
 *     );
 */
const CreateActions = function (_a) {
  const { basePath } = _a;
  const { className } = _a;
  const { hasList } = _a;
  const rest = __rest(_a, ['basePath', 'className', 'hasList']);
  return (react_1.default.createElement(TopToolbar_1.default, { className, ...sanitizeRestProps(rest) }, hasList && react_1.default.createElement(button_1.ListButton, { basePath })));
};
CreateActions.propTypes = {
  basePath: prop_types_1.default.string,
  className: prop_types_1.default.string,
  hasList: prop_types_1.default.bool,
};
exports.default = CreateActions;
