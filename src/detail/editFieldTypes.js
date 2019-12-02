
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
const SimpleForm_1 = __importDefault(require('../form/SimpleForm'));
const SimpleFormIterator_1 = __importDefault(require('../form/SimpleFormIterator'));
const ArrayInput_1 = __importDefault(require('../input/ArrayInput'));
const BooleanInput_1 = __importDefault(require('../input/BooleanInput'));
const DateInput_1 = __importDefault(require('../input/DateInput'));
const NumberInput_1 = __importDefault(require('../input/NumberInput'));
const ReferenceInput_1 = __importDefault(require('../input/ReferenceInput'));
const ReferenceArrayInput_1 = __importDefault(require('../input/ReferenceArrayInput'));
const SelectInput_1 = __importDefault(require('../input/SelectInput'));
const TextInput_1 = __importDefault(require('../input/TextInput'));
exports.default = {
  form: {
    component: SimpleForm_1.default,
    representation(_, children) { return `        <SimpleForm>\n${children.map(child => `            ${child.getRepresentation()}`).join('\n')}\n        </SimpleForm>`; },
  },
  array: {
    // eslint-disable-next-line react/display-name
    component(_a) {
      const { children } = _a;
      const props = __rest(_a, ['children']);
      return (react_1.default.createElement(ArrayInput_1.default, { ...props },
        react_1.default.createElement(SimpleFormIterator_1.default, null, children)));
    },
    representation(props, children) {
      return `<ArrayInput source="${props.source}"><SimpleFormIterator>${children
        .map(child => child.getRepresentation())
        .join('\n')}</SimpleFormIterator></ArrayInput>`;
    },
  },
  boolean: {
    component: BooleanInput_1.default,
    representation(props) { return `<BooleanInput source="${props.source}" />`; },
  },
  date: {
    component: DateInput_1.default,
    representation(props) { return `<DateInput source="${props.source}" />`; },
  },
  email: {
    component: TextInput_1.default,
    representation(props) { return `<TextInput source="${props.source}" />`; },
  },
  id: {
    component: TextInput_1.default,
    representation(props) { return `<TextInput source="${props.source}" />`; },
  },
  number: {
    component: NumberInput_1.default,
    representation(props) { return `<NumberInput source="${props.source}" />`; },
  },
  reference: {
    component: ReferenceInput_1.default,
    representation(props, children) {
      return `<ReferenceInput source="${props.source}" reference="${props.reference}">${children.getRepresentation()}</ReferenceInput>`;
    },
  },
  referenceChild: {
    component(props) { return react_1.default.createElement(SelectInput_1.default, { optionText: 'id', ...props }); },
    representation() { return '<SelectInput optionText="id" />'; },
  },
  referenceArray: {
    component: ReferenceArrayInput_1.default,
    representation(props) {
      return `<ReferenceArrayInput source="${props.source}" reference="${props.reference}"><TextInput source="id" /></ReferenceArrayInput>`;
    },
  },
  referenceArrayChild: {
    component(props) { return react_1.default.createElement(SelectInput_1.default, { optionText: 'id', ...props }); },
    representation() { return '<SelectInput optionText="id" />'; },
  },
  richText: {
    component: TextInput_1.default,
    representation(props) { return `<TextInput source="${props.source}" />`; },
  },
  string: {
    component: TextInput_1.default,
    representation(props) { return `<TextInput source="${props.source}" />`; },
  },
  url: {
    component: TextInput_1.default,
    representation(props) { return `<TextInput source="${props.source}" />`; },
  },
};
