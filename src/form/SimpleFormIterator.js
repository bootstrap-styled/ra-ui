
const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());
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
const compose_1 = __importDefault(require('recompose/compose'));
const react_transition_group_1 = require('react-transition-group');
const get_1 = __importDefault(require('lodash/get'));
const Typography_1 = __importDefault(require('@material-ui/core/Typography'));
const Button_1 = __importDefault(require('@material-ui/core/Button'));
const FormHelperText_1 = __importDefault(require('@material-ui/core/FormHelperText'));
const styles_1 = require('@material-ui/core/styles');
const RemoveCircleOutline_1 = __importDefault(require('@material-ui/icons/RemoveCircleOutline'));
const AddCircleOutline_1 = __importDefault(require('@material-ui/icons/AddCircleOutline'));
const ra_core_1 = require('ra-core');
const classnames_1 = __importDefault(require('classnames'));
const FormInput_1 = __importDefault(require('../form/FormInput'));
const styles = function (theme) {
  let _a; let
    _b;
  return styles_1.createStyles({
    root: {
      padding: 0,
      marginBottom: 0,
      '& > li:last-child': {
        borderBottom: 'none',
      },
    },
    line: (_a = {
      display: 'flex',
      listStyleType: 'none',
      borderBottom: `solid 1px ${theme.palette.divider}`,
    },
    _a[theme.breakpoints.down('xs')] = { display: 'block' },
    _a['&.fade-enter'] = {
      opacity: 0.01,
      transform: 'translateX(100vw)',
    },
    _a['&.fade-enter-active'] = {
      opacity: 1,
      transform: 'translateX(0)',
      transition: 'all 500ms ease-in',
    },
    _a['&.fade-exit'] = {
      opacity: 1,
      transform: 'translateX(0)',
    },
    _a['&.fade-exit-active'] = {
      opacity: 0.01,
      transform: 'translateX(100vw)',
      transition: 'all 500ms ease-in',
    },
    _a),
    index: (_b = {
      width: '3em',
      paddingTop: '1em',
    },
    _b[theme.breakpoints.down('sm')] = { display: 'none' },
    _b),
    form: { flex: 2 },
    action: {
      paddingTop: '0.5em',
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
  });
};
const SimpleFormIterator = /** @class */ (function (_super) {
  __extends(SimpleFormIterator, _super);
  function SimpleFormIterator(props) {
    const _this = _super.call(this, props) || this;
    _this.removeField = function (index) {
      return function () {
        const { fields } = _this.props;
        _this.ids.splice(index, 1);
        fields.remove(index);
      };
    };
    // Returns a boolean to indicate whether to disable the remove button for certain fields.
    // If disableRemove is a function, then call the function with the current record to
    // determining if the button should be disabled. Otherwise, use a boolean property that
    // enables or disables the button for all of the fields.
    _this.disableRemoveField = function (record, disableRemove) {
      if (typeof disableRemove === 'boolean') {
        return disableRemove;
      }
      return disableRemove && disableRemove(record);
    };
    _this.addField = function () {
      const { fields } = _this.props;
      _this.ids.push(_this.nextId++);
      fields.push({});
    };
    // we need a unique id for each field for a proper enter/exit animation
    // but redux-form doesn't provide one (cf https://github.com/erikras/redux-form/issues/2735)
    // so we keep an internal map between the field position and an auto-increment id
    _this.nextId = props.fields.length
      ? props.fields.length
      : props.defaultValue
        ? props.defaultValue.length
        : 0;
    // We check whether we have a defaultValue (which must be an array) before checking
    // the fields prop which will always be empty for a new record.
    // Without it, our ids wouldn't match the default value and we would get key warnings
    // on the CssTransition element inside our render method
    _this.ids = _this.nextId > 0 ? Array.from(Array(_this.nextId).keys()) : [];
    return _this;
  }
  SimpleFormIterator.prototype.render = function () {
    const _this = this;
    const _a = this.props; const { basePath } = _a; const _b = _a.classes; const classes = _b === void 0 ? {} : _b; const { children } = _a; const { fields } = _a; const _c = _a.meta; const { error } = _c; const { submitFailed } = _c; const { record } = _a; const { resource } = _a; const { source } = _a; const { translate } = _a; const { disableAdd } = _a; const { disableRemove } = _a; const { variant } = _a; const
      { margin } = _a;
    const records = get_1.default(record, source);
    return fields ? (react_1.default.createElement('ul', { className: classes.root },
      submitFailed && typeof error !== 'object' && error && (react_1.default.createElement(FormHelperText_1.default, { error: true }, error)),
      react_1.default.createElement(react_transition_group_1.TransitionGroup, null, fields.map((member, index) => (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: _this.ids[index], timeout: 500, classNames: 'fade' },
        react_1.default.createElement('li', { className: classes.line },
          react_1.default.createElement(Typography_1.default, { variant: 'body1', className: classes.index }, index + 1),
          react_1.default.createElement('section', { className: classes.form }, react_1.Children.map(children, (input, index2) => react_1.isValidElement(input) ? (react_1.default.createElement(FormInput_1.default, {
            basePath: input.props.basePath
                                || basePath,
            input: react_1.cloneElement(input, {
              source: input.props.source
                ? `${member}.${input.props.source}`
                : member,
              index: input.props.source
                ? undefined
                : index2,
              label: typeof input.props
                .label
                                    === 'undefined'
                ? input.props.source
                  ? `resources.${resource}.fields.${input
                    .props
                    .source}`
                  : undefined
                : input.props.label,
            }),
            record: (records
                                && records[index])
                                || {},
            resource,
            variant,
            margin,
          })) : null)),
          !_this.disableRemoveField((records && records[index]) || {}, disableRemove) && (react_1.default.createElement('span', { className: classes.action },
            react_1.default.createElement(Button_1.default, { className: classnames_1.default('button-remove', `button-remove-${source}-${index}`), size: 'small', onClick: _this.removeField(index) },
              react_1.default.createElement(RemoveCircleOutline_1.default, { className: classes.leftIcon }),
              translate('ra.action.remove'))))))))),
      !disableAdd && (react_1.default.createElement('li', { className: classes.line },
        react_1.default.createElement('span', { className: classes.action },
          react_1.default.createElement(Button_1.default, { className: classnames_1.default('button-add', `button-add-${source}`), size: 'small', onClick: this.addField },
            react_1.default.createElement(AddCircleOutline_1.default, { className: classes.leftIcon }),
            translate('ra.action.add'))))))) : null;
  };
  return SimpleFormIterator;
}(react_1.Component));
exports.SimpleFormIterator = SimpleFormIterator;
SimpleFormIterator.defaultProps = {
  disableAdd: false,
  disableRemove: false,
};
SimpleFormIterator.propTypes = {
  defaultValue: prop_types_1.default.any,
  basePath: prop_types_1.default.string,
  children: prop_types_1.default.node,
  classes: prop_types_1.default.object,
  className: prop_types_1.default.string,
  fields: prop_types_1.default.object,
  meta: prop_types_1.default.object,
  record: prop_types_1.default.object,
  source: prop_types_1.default.string,
  resource: prop_types_1.default.string,
  translate: prop_types_1.default.func,
  disableAdd: prop_types_1.default.bool,
  disableRemove: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
exports.default = compose_1.default(ra_core_1.translate, styles_1.withStyles(styles))(SimpleFormIterator);
