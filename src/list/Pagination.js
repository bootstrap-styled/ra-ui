
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
const core_1 = require('@material-ui/core');
const ra_core_1 = require('ra-core');
const PaginationActions_1 = __importDefault(require('./PaginationActions'));
const PaginationLimit_1 = __importDefault(require('./PaginationLimit'));
const emptyArray = [];
const Pagination = function (_a) {
  const { loading } = _a;
  const { page } = _a;
  const { perPage } = _a;
  const { rowsPerPageOptions } = _a;
  const { total } = _a;
  const { setPage } = _a;
  const { setPerPage } = _a;
  const rest = __rest(_a, ['loading', 'page', 'perPage', 'rowsPerPageOptions', 'total', 'setPage', 'setPerPage']);
  react_1.useEffect(() => {
    if (page < 1 || isNaN(page)) {
      setPage(1);
    }
  }, [page, setPage]);
  const translate = ra_core_1.useTranslate();
  const isSmall = core_1.useMediaQuery(theme => theme.breakpoints.down('sm'));
  const getNbPages = function () { return Math.ceil(total / perPage) || 1; };
  /**
     * Warning: material-ui's page is 0-based
     */
  const handlePageChange = react_1.useCallback((event, page) => {
    event && event.stopPropagation();
    if (page < 0 || page > getNbPages() - 1) {
      throw new Error(translate('ra.navigation.page_out_of_boundaries', {
        page: page + 1,
      }));
    }
    setPage(page + 1);
  }, [total, perPage, setPage, translate] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const handlePerPageChange = react_1.useCallback(event => {
    setPerPage(event.target.value);
  }, [setPerPage]);
  const labelDisplayedRows = react_1.useCallback(_a => {
    const { from } = _a;
    const { to } = _a;
    const { count } = _a;
    return translate('ra.navigation.page_range_info', {
      offsetBegin: from,
      offsetEnd: to,
      total: count,
    });
  }, [translate]);
  if (total === 0) {
    return loading ? react_1.default.createElement(core_1.Toolbar, { variant: 'dense' }) : react_1.default.createElement(PaginationLimit_1.default, null);
  }
  if (isSmall) {
    return (react_1.default.createElement(core_1.TablePagination, {
      count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, rowsPerPageOptions: emptyArray, component: 'span', labelDisplayedRows, ...ra_core_1.sanitizeListRestProps(rest),
    }));
  }
  return (react_1.default.createElement(core_1.TablePagination, {
    count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, onChangeRowsPerPage: handlePerPageChange, ActionsComponent: PaginationActions_1.default, component: 'span', labelRowsPerPage: translate('ra.navigation.page_rows_per_page'), labelDisplayedRows, rowsPerPageOptions, ...ra_core_1.sanitizeListRestProps(rest),
  }));
};
Pagination.propTypes = {
  ids: prop_types_1.default.array,
  loading: prop_types_1.default.bool,
  page: prop_types_1.default.number,
  perPage: prop_types_1.default.number,
  rowsPerPageOptions: prop_types_1.default.arrayOf(prop_types_1.default.number),
  setPage: prop_types_1.default.func,
  setPerPage: prop_types_1.default.func,
  total: prop_types_1.default.number,
};
Pagination.defaultProps = {
  rowsPerPageOptions: [5, 10, 25],
};
exports.default = react_1.default.memo(Pagination);
