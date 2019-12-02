
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const prop_types_1 = __importDefault(require('prop-types'));
const classnames_1 = __importDefault(require('classnames'));
const CardContent_1 = __importDefault(require('@material-ui/core/CardContent'));
const styles_1 = require('@material-ui/core/styles');
const useStyles = styles_1.makeStyles(theme => {
  let _a;
  return ({
    root: {
      paddingTop: 0,
      paddingBottom: 0,
      '&:first-child': {
        paddingTop: 16,
      },
      '&:last-child': (_a = {
        paddingBottom: 16,
      },
      _a[theme.breakpoints.only('xs')] = {
        paddingBottom: 70,
      },
      _a),
    },
  });
});
/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
const CardContentInner = function (_a) {
  const classesOverride = _a.classes; const { className } = _a; const
    { children } = _a;
  const classes = useStyles({ classes: classesOverride });
  return (react_1.default.createElement(CardContent_1.default, { className: classnames_1.default(classes.root, className) }, children));
};
CardContentInner.propTypes = {
  className: prop_types_1.default.string,
  classes: prop_types_1.default.object,
  children: prop_types_1.default.node,
};
exports.default = CardContentInner;
