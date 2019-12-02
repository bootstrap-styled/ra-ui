
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
const recompose_1 = require('recompose');
const react_dropzone_1 = require('react-dropzone');
const styles_1 = require('@material-ui/core/styles');
const FormHelperText_1 = __importDefault(require('@material-ui/core/FormHelperText'));
const classnames_1 = __importDefault(require('classnames'));
const ra_core_1 = require('ra-core');
const Labeled_1 = __importDefault(require('./Labeled'));
const FileInputPreview_1 = __importDefault(require('./FileInputPreview'));
const sanitizeRestProps_1 = __importDefault(require('./sanitizeRestProps'));
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const useStyles = styles_1.makeStyles(theme => ({
  dropZone: {
    background: theme.palette.background.default,
    cursor: 'pointer',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
  preview: {},
  removeButton: {},
  root: { width: '100%' },
}));
const FileInput = function (_a) {
  const { accept } = _a;
  const { children } = _a;
  const { className } = _a;
  const classesOverride = _a.classes;
  const { format } = _a;
  const { helperText } = _a;
  const { label } = _a;
  const _b = _a.labelMultiple;
  const labelMultiple = _b === void 0 ? 'ra.input.file.upload_several' : _b;
  const _c = _a.labelSingle;
  const labelSingle = _c === void 0 ? 'ra.input.file.upload_single' : _c;
  const { maxSize } = _a;
  const { minSize } = _a;
  const _d = _a.multiple;
  const multiple = _d === void 0 ? false : _d;
  const _e = _a.options;
  const _f = _e === void 0 ? {} : _e;
  const inputPropsOptions = _f.inputProps;
  const options = __rest(_f, ['inputProps']);
  const { parse } = _a;
  const { placeholder } = _a;
  const { resource } = _a;
  const { source } = _a;
  const { validate } = _a;
  const rest = __rest(_a, ['accept', 'children', 'className', 'classes', 'format', 'helperText', 'label', 'labelMultiple', 'labelSingle', 'maxSize', 'minSize', 'multiple', 'options', 'parse', 'placeholder', 'resource', 'source', 'validate']);
  const translate = ra_core_1.useTranslate();
  const classes = useStyles({ classes: classesOverride });
  // turn a browser dropped file structure into expected structure
  const transformFile = function (file) {
    let _a;
    if (!(file instanceof File)) {
      return file;
    }
    const _b = react_1.Children.only(children).props; const { source } = _b; const
      { title } = _b;
    const preview = URL.createObjectURL(file);
    const transformedFile = (_a = {
      rawFile: file,
    },
    _a[source] = preview,
    _a);
    if (title) {
      transformedFile[title] = file.name;
    }
    return transformedFile;
  };
  const transformFiles = function (files) {
    if (!files) {
      return multiple ? [] : null;
    }
    if (Array.isArray(files)) {
      return files.map(transformFile);
    }
    return transformFile(files);
  };
  const _g = ra_core_1.useInput({
    format: format || transformFiles, parse: parse || transformFiles, source, type: 'file', validate, ...rest,
  }); const { id } = _g; const _h = _g.input; const { onChange } = _h; const { value } = _h; const inputProps = __rest(_h, ['onChange', 'value']); const { meta } = _g; const
    { isRequired } = _g;
  const { touched } = meta;
  const { error } = meta;
  const files = value ? (Array.isArray(value) ? value : [value]) : [];
  const onDrop = function (newFiles) {
    const updatedFiles = multiple ? files.concat(newFiles) : newFiles.slice();
    if (multiple) {
      onChange(updatedFiles);
    } else {
      onChange(updatedFiles[0]);
    }
  };
  const onRemove = function (file) {
    return function () {
      if (multiple) {
        const filteredFiles = files.filter(stateFile => !recompose_1.shallowEqual(stateFile, file));
        onChange(filteredFiles);
      } else {
        onChange(null);
      }
    };
  };
  const childrenElement = react_1.isValidElement(react_1.Children.only(children))
    ? react_1.Children.only(children)
    : undefined;
  const _j = react_dropzone_1.useDropzone({
    ...options,
    accept,
    maxSize,
    minSize,
    multiple,
    onDrop,
  }); const { getRootProps } = _j; const
    { getInputProps } = _j;
  return (react_1.default.createElement(Labeled_1.default, {
    id, label, className: classnames_1.default(classes.root, className), source, resource, isRequired, meta, ...sanitizeRestProps_1.default(rest),
  },
  react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement('div', { 'data-testid': 'dropzone', className: classes.dropZone, ...getRootProps() },
      react_1.default.createElement('input', { id, ...getInputProps({ ...inputProps, ...inputPropsOptions }) }),
      placeholder || (multiple ? (react_1.default.createElement('p', null, translate(labelMultiple))) : (react_1.default.createElement('p', null, translate(labelSingle))))),
    children && (react_1.default.createElement('div', { className: 'previews' }, files.map((file, index) => (react_1.default.createElement(FileInputPreview_1.default, {
      key: index, file, onRemove: onRemove(file), className: classes.removeButton,
    }, react_1.cloneElement(childrenElement, {
      record: file,
      className: classes.preview,
    })))))),
    (touched && error) || helperText ? (react_1.default.createElement(FormHelperText_1.default, null,
      react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText }))) : null)));
};
FileInput.propTypes = {
  accept: prop_types_1.default.string,
  children: prop_types_1.default.element,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  id: prop_types_1.default.string,
  isRequired: prop_types_1.default.bool,
  label: prop_types_1.default.string,
  labelMultiple: prop_types_1.default.string,
  labelSingle: prop_types_1.default.string,
  maxSize: prop_types_1.default.number,
  minSize: prop_types_1.default.number,
  multiple: prop_types_1.default.bool,
  options: prop_types_1.default.object,
  resource: prop_types_1.default.string,
  source: prop_types_1.default.string,
  placeholder: prop_types_1.default.node,
};
exports.default = FileInput;
