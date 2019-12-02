
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const pure_1 = __importDefault(require('recompose/pure'));
const CardContent_1 = __importDefault(require('@material-ui/core/CardContent'));
const Typography_1 = __importDefault(require('@material-ui/core/Typography'));
const ra_core_1 = require('ra-core');
const PaginationLimit = function () {
  const translate = ra_core_1.useTranslate();
  return (react_1.default.createElement(CardContent_1.default, null,
    react_1.default.createElement(Typography_1.default, { variant: 'body2' }, translate('ra.navigation.no_results'))));
};
exports.default = pure_1.default(PaginationLimit);
