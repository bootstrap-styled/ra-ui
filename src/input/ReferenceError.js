
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const TextField_1 = __importDefault(require('@material-ui/core/TextField'));
const ReferenceError = function (_a) {
  const { label } = _a;
  const { error } = _a;
  return (react_1.default.createElement(TextField_1.default, {
    error: true, disabled: true, label, value: error, margin: 'normal',
  }));
};
ReferenceError.propTypes = {
  error: prop_types_1.default.string.isRequired,
  label: prop_types_1.default.string.isRequired,
};
exports.default = ReferenceError;
