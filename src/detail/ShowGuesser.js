
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
const inflection_1 = __importDefault(require('inflection'));
const ra_core_1 = require('ra-core');
const Show_1 = require('./Show');
const showFieldTypes_1 = __importDefault(require('./showFieldTypes'));
const ShowViewGuesser = function (props) {
  const { record } = props;
  const { resource } = props;
  const _a = react_1.useState(null); const inferredChild = _a[0]; const
    setInferredChild = _a[1];
  react_1.useEffect(() => {
    if (record && !inferredChild) {
      const inferredElements = ra_core_1.getElementsFromRecords([record], showFieldTypes_1.default);
      const inferredChild_1 = new ra_core_1.InferredElement(showFieldTypes_1.default.show, null, inferredElements);
      process.env.NODE_ENV !== 'production'
                // eslint-disable-next-line no-console
                && console.log(`Guessed Show:\n\nexport const ${inflection_1.default.capitalize(inflection_1.default.singularize(resource))}Show = props => (\n    <Show {...props}>\n${inferredChild_1.getRepresentation()}\n    </Show>\n);`);
      setInferredChild(inferredChild_1.getElement());
    }
  }, [record, inferredChild, resource]);
  return react_1.default.createElement(Show_1.ShowView, { ...props }, inferredChild);
};
ShowViewGuesser.propTypes = Show_1.ShowView.propTypes;
const ShowGuesser = function (props) { return (react_1.default.createElement(ShowViewGuesser, { ...props, ...ra_core_1.useShowController(props) })); };
exports.default = ShowGuesser;
