
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const ra_core_1 = require('ra-core');
const InputHelperText = function (_a) {
  const { helperText } = _a;
  const { touched } = _a;
  const { error } = _a;
  const translate = ra_core_1.useTranslate();
  return touched && error ? (react_1.default.createElement(ra_core_1.ValidationError, { error })) : helperText ? (react_1.default.createElement(react_1.default.Fragment, null, translate(helperText, { _: helperText }))) : null;
};
exports.default = InputHelperText;
