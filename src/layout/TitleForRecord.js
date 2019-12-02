
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const Title_1 = __importStar(require('./Title'));
const TitleForRecord = function (_a) {
  const { defaultTitle } = _a;
  const { record } = _a;
  const { title } = _a;
  return record ? (react_1.default.createElement(Title_1.default, { title, record, defaultTitle })) : ('');
};
TitleForRecord.propTypes = {
  defaultTitle: prop_types_1.default.any,
  record: prop_types_1.default.object,
  title: Title_1.TitlePropType,
};
exports.default = TitleForRecord;
