
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
const TableCell_1 = __importDefault(require('@material-ui/core/TableCell'));
const classnames_1 = __importDefault(require('classnames'));
const sanitizeRestProps = function (_a) {
  const { cellClassName } = _a;
  const { className } = _a;
  const { field } = _a;
  const { formClassName } = _a;
  const { headerClassName } = _a;
  const { record } = _a;
  const { basePath } = _a;
  const { resource } = _a;
  const rest = __rest(_a, ['cellClassName', 'className', 'field', 'formClassName', 'headerClassName', 'record', 'basePath', 'resource']);
  return rest;
};
exports.DatagridCell = function (_a) {
  const { className } = _a;
  const { field } = _a;
  const { record } = _a;
  const { basePath } = _a;
  const { resource } = _a;
  const rest = __rest(_a, ['className', 'field', 'record', 'basePath', 'resource']);
  return (react_1.default.createElement(TableCell_1.default, { className: classnames_1.default(className, field.props.cellClassName), align: field.props.textAlign, ...sanitizeRestProps(rest) }, react_1.default.cloneElement(field, {
    record,
    basePath: field.props.basePath || basePath,
    resource,
  })));
};
exports.DatagridCell.propTypes = {
  className: prop_types_1.default.string,
  field: prop_types_1.default.element,
  record: prop_types_1.default.object,
  basePath: prop_types_1.default.string,
  resource: prop_types_1.default.string,
};
// wat? TypeScript looses the displayName if we don't set it explicitly
exports.DatagridCell.displayName = 'DatagridCell';
exports.default = exports.DatagridCell;
