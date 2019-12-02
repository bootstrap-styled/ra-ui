
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
const Datagrid_1 = __importDefault(require('../list/Datagrid'));
const ArrayField_1 = __importDefault(require('../field/ArrayField'));
const BooleanField_1 = __importDefault(require('../field/BooleanField'));
const DateField_1 = __importDefault(require('../field/DateField'));
const EmailField_1 = __importDefault(require('../field/EmailField'));
const NumberField_1 = __importDefault(require('../field/NumberField'));
const ReferenceField_1 = __importDefault(require('../field/ReferenceField'));
const ReferenceArrayField_1 = __importDefault(require('../field/ReferenceArrayField'));
const RichTextField_1 = __importDefault(require('../field/RichTextField'));
const SimpleShowLayout_1 = __importDefault(require('./SimpleShowLayout'));
const TextField_1 = __importDefault(require('../field/TextField'));
const UrlField_1 = __importDefault(require('../field/UrlField'));
exports.default = {
  show: {
    component(props) { return react_1.default.createElement(SimpleShowLayout_1.default, { ...props }); },
    representation(_, children) { return `        <SimpleShowLayout>\n${children.map(child => `            ${child.getRepresentation()}`).join('\n')}\n        </SimpleShowLayout>`; },
  },
  array: {
    // eslint-disable-next-line react/display-name
    component(_a) {
      const { children } = _a;
      const props = __rest(_a, ['children']);
      return (react_1.default.createElement(ArrayField_1.default, { ...props },
        react_1.default.createElement(Datagrid_1.default, null, children)));
    },
    representation(props, children) {
      return `<ArrayField source="${props.source}"><Datagrid>${children
        .map(child => child.getRepresentation())
        .join('\n')}</Datagrid></ArrayField>`;
    },
  },
  boolean: {
    component: BooleanField_1.default,
    representation(props) { return `<BooleanField source="${props.source}" />`; },
  },
  date: {
    component: DateField_1.default,
    representation(props) { return `<DateField source="${props.source}" />`; },
  },
  email: {
    component: EmailField_1.default,
    representation(props) { return `<EmailField source="${props.source}" />`; },
  },
  id: {
    component: TextField_1.default,
    representation(props) { return `<TextField source="${props.source}" />`; },
  },
  number: {
    component: NumberField_1.default,
    representation(props) { return `<NumberField source="${props.source}" />`; },
  },
  reference: {
    component: ReferenceField_1.default,
    representation(props) {
      return `<ReferenceField source="${props.source}" reference="${props.reference}"><TextField source="id" /></ReferenceField>`;
    },
  },
  referenceChild: {
    component(props) { return react_1.default.createElement(TextField_1.default, { source: 'id', ...props }); },
    representation() { return '<TextField source="id" />'; },
  },
  referenceArray: {
    component: ReferenceArrayField_1.default,
    representation(props) {
      return `<ReferenceArrayField source="${props.source}" reference="${props.reference}"><TextField source="id" /></ReferenceArrayField>`;
    },
  },
  referenceArrayChild: {
    component(props) { return react_1.default.createElement(TextField_1.default, { source: 'id', ...props }); },
    representation() { return '<TextField source="id" />'; },
  },
  richText: {
    component: RichTextField_1.default,
    representation(props) { return `<RichTextField source="${props.source}" />`; },
  },
  string: {
    component: TextField_1.default,
    representation(props) { return `<TextField source="${props.source}" />`; },
  },
  url: {
    component: UrlField_1.default,
    representation(props) { return `<UrlField source="${props.source}" />`; },
  },
};
