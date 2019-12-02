
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
const Table_1 = __importDefault(require('@material-ui/core/Table'));
const TableCell_1 = __importDefault(require('@material-ui/core/TableCell'));
const TableHead_1 = __importDefault(require('@material-ui/core/TableHead'));
const TableRow_1 = __importDefault(require('@material-ui/core/TableRow'));
const TableBody_1 = __importDefault(require('@material-ui/core/TableBody'));
const ExpandMore_1 = __importDefault(require('@material-ui/icons/ExpandMore'));
const IconButton_1 = __importDefault(require('@material-ui/core/IconButton'));
const Checkbox_1 = __importDefault(require('@material-ui/core/Checkbox'));
const classnames_1 = __importDefault(require('classnames'));
const styles_1 = require('@material-ui/core/styles');
const useStyles = styles_1.makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    display: 'flex',
  },
}));
const Placeholder = function (_a) {
  const classesOverride = _a.classes;
  const classes = useStyles({ classes: classesOverride });
  return react_1.default.createElement('div', { className: classes.root }, '\u00A0');
};
const times = function (nbChildren, fn) {
  return Array.from({ length: nbChildren }, (_, key) => fn(key));
};
const DatagridLoading = function (_a) {
  const { classes } = _a;
  const { className } = _a;
  const { expand } = _a;
  const { hasBulkActions } = _a;
  const { nbChildren } = _a;
  const _b = _a.nbFakeLines;
  const nbFakeLines = _b === void 0 ? 5 : _b;
  const { size } = _a;
  return (react_1.default.createElement(Table_1.default, { className: classnames_1.default(classes.table, className), size },
    react_1.default.createElement(TableHead_1.default, null,
      react_1.default.createElement(TableRow_1.default, { className: classes.row },
        expand && (react_1.default.createElement(TableCell_1.default, { padding: 'none', className: classes.expandHeader })),
        hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: 'checkbox', className: classes.expandIconCell },
          react_1.default.createElement(Checkbox_1.default, { className: 'select-all', color: 'primary', checked: false }))),
        times(nbChildren, key => (react_1.default.createElement(TableCell_1.default, { variant: 'head', className: classes.headerCell, key },
          react_1.default.createElement(Placeholder, null)))))),
    react_1.default.createElement(TableBody_1.default, null, times(nbFakeLines, key1 => (react_1.default.createElement(TableRow_1.default, { key: key1, style: { opacity: 1 / (key1 + 1) } },
      expand && (react_1.default.createElement(TableCell_1.default, { padding: 'none', className: classes.expandIconCell },
        react_1.default.createElement(IconButton_1.default, { className: classes.expandIcon, component: 'div', 'aria-hidden': 'true' },
          react_1.default.createElement(ExpandMore_1.default, null)))),
      hasBulkActions && (react_1.default.createElement(TableCell_1.default, { padding: 'checkbox', className: classes.expandIconCell },
        react_1.default.createElement(Checkbox_1.default, { className: 'select-all', color: 'primary', checked: false }))),
      times(nbChildren, key2 => (react_1.default.createElement(TableCell_1.default, { className: classes.rowCell, key: key2 },
        react_1.default.createElement(Placeholder, null))))))))));
};
exports.default = react_1.memo(DatagridLoading);
