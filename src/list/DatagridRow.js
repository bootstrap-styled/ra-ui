
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
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P((resolve => { resolve(result.value); })).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  }));
};
const __generator = (this && this.__generator) || function (thisArg, body) {
  let _ = {
    label: 0, sent() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [],
  }; let f; let y; let t; let
    g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return { value: op[1], done: false };
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
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
const _this = this;
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const classnames_1 = __importDefault(require('classnames'));
const core_1 = require('@material-ui/core');
const ra_core_1 = require('ra-core');
const isEqual_1 = __importDefault(require('lodash/isEqual'));
const DatagridCell_1 = __importDefault(require('./DatagridCell'));
const ExpandRowButton_1 = __importDefault(require('./ExpandRowButton'));
const react_router_dom_1 = require('react-router-dom');
const computeNbColumns = function (expand, children, hasBulkActions) {
  return expand
    ? 1 // show expand button
            + (hasBulkActions ? 1 : 0) // checkbox column
            + react_1.default.Children.toArray(children).filter(child => !!child).length // non-null children
    : 0;
}; // we don't need to compute columns if there is no expand panel;
const defaultClasses = {};
const DatagridRow = function (_a) {
  const { basePath } = _a;
  const { children } = _a;
  const _b = _a.classes;
  const classes = _b === void 0 ? defaultClasses : _b;
  const { className } = _a;
  const { expand } = _a;
  const { hasBulkActions } = _a;
  const { hover } = _a;
  const { id } = _a;
  const { onToggleItem } = _a;
  const { record } = _a;
  const { resource } = _a;
  const { rowClick } = _a;
  const { selected } = _a;
  const { style } = _a;
  const rest = __rest(_a, ['basePath', 'children', 'classes', 'className', 'expand', 'hasBulkActions', 'hover', 'id', 'onToggleItem', 'record', 'resource', 'rowClick', 'selected', 'style']);
  const _c = react_1.useState(false); const expanded = _c[0]; const
    setExpanded = _c[1];
  const _d = react_1.useState(computeNbColumns(expand, children, hasBulkActions)); const nbColumns = _d[0]; const
    setNbColumns = _d[1];
  react_1.useEffect(() => {
    // Fields can be hidden dynamically based on permissions;
    // The expand panel must span over the remaining columns
    // So we must recompute the number of columns to span on
    const newNbColumns = computeNbColumns(expand, children, hasBulkActions);
    if (newNbColumns !== nbColumns) {
      setNbColumns(newNbColumns);
    }
  }, [expand, nbColumns, children, hasBulkActions]);
  const history = react_router_dom_1.useHistory();
  const handleToggleExpand = react_1.useCallback(event => {
    setExpanded(!expanded);
    event.stopPropagation();
  }, [expanded]);
  const handleToggleSelection = react_1.useCallback(event => {
    onToggleItem(id);
    event.stopPropagation();
  }, [id, onToggleItem]);
  const handleClick = react_1.useCallback(event => __awaiter(_this, void 0, void 0, function () {
    let effect; let
      _a;
    return __generator(this, _b => {
      switch (_b.label) {
        case 0:
          if (!rowClick) return [2];
          if (!(typeof rowClick === 'function')) return [3 /* break */, 2];
          return [4 /* yield */, rowClick(id, basePath, record)];
        case 1:
          _a = _b.sent();
          return [3 /* break */, 3];
        case 2:
          _a = rowClick;
          _b.label = 3;
        case 3:
          effect = _a;
          switch (effect) {
            case 'edit':
              history.push(ra_core_1.linkToRecord(basePath, id));
              return [2];
            case 'show':
              history.push(ra_core_1.linkToRecord(basePath, id, 'show'));
              return [2];
            case 'expand':
              handleToggleExpand(event);
              return [2];
            case 'toggleSelection':
              handleToggleSelection(event);
              return [2];
            default:
              if (effect) history.push(effect);
              return [2];
          }
          return [2];
      }
    });
  }), [
    basePath,
    history,
    handleToggleExpand,
    handleToggleSelection,
    id,
    record,
    rowClick,
  ]);
  return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(core_1.TableRow, {
      className, key: id, style, hover, onClick: handleClick, ...rest,
    },
    expand && (react_1.default.createElement(core_1.TableCell, { padding: 'none', className: classes.expandIconCell },
      react_1.default.createElement(ExpandRowButton_1.default, {
        classes, expanded, onClick: handleToggleExpand, expandContentId: `${id}-expand`,
      }))),
    hasBulkActions && (react_1.default.createElement(core_1.TableCell, { padding: 'checkbox' },
      react_1.default.createElement(core_1.Checkbox, {
        color: 'primary', className: `select-item ${classes.checkbox}`, checked: selected, onClick: handleToggleSelection,
      }))),
    react_1.default.Children.map(children, (field, index) => react_1.isValidElement(field) ? (react_1.default.createElement(DatagridCell_1.default, {
      key: `${id}-${field.props.source || index}`, className: classnames_1.default(`column-${field.props.source}`, classes.rowCell), record, field, basePath, resource,
    })) : null)),
    expand && expanded && (react_1.default.createElement(core_1.TableRow, { key: `${id}-expand`, id: `${id}-expand` },
      react_1.default.createElement(core_1.TableCell, { colSpan: nbColumns }, react_1.isValidElement(expand)
        ? react_1.cloneElement(expand, {
          record,
          basePath,
          resource,
          id: String(id),
        })
        : react_1.createElement(expand, {
          record,
          basePath,
          resource,
          id: String(id),
        }))))));
};
DatagridRow.propTypes = {
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
  hasBulkActions: prop_types_1.default.bool.isRequired,
  hover: prop_types_1.default.bool,
  id: prop_types_1.default.any,
  onToggleItem: prop_types_1.default.func,
  record: prop_types_1.default.object.isRequired,
  resource: prop_types_1.default.string,
  rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
  selected: prop_types_1.default.bool,
  style: prop_types_1.default.object,
};
DatagridRow.defaultProps = {
  hasBulkActions: false,
  hover: true,
  record: {},
  selected: false,
};
const areEqual = function (prevProps, nextProps) {
  const _ = prevProps.children; const
    prevPropsWithoutChildren = __rest(prevProps, ['children']);
  const __ = nextProps.children; const
    nextPropsWithoutChildren = __rest(nextProps, ['children']);
  return isEqual_1.default(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
exports.PureDatagridRow = react_1.memo(DatagridRow, areEqual);
exports.PureDatagridRow.displayName = 'PureDatagridRow';
exports.default = DatagridRow;
