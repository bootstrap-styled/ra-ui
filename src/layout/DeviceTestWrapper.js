
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
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const css_mediaquery_1 = __importDefault(require('css-mediaquery'));
const styles_1 = require('@material-ui/styles');
const styles_2 = require('@material-ui/core/styles');
/**
 * Test utility to simulate a device form factor for server-side mediaQueries
 *
 * Do not use inside a browser.
 *
 * @example
 *
 * <DeviceTestWrapper width="sm">
 *     <MyResponsiveComponent />
 * <DeviceTestWrapper>
 */
const DeviceTestWrapper = function (_a) {
  const _b = _a.width; const width = _b === void 0 ? 'md' : _b; const
    { children } = _a;
  const theme = styles_2.createMuiTheme();
  // Use https://github.com/ericf/css-mediaquery as ponyfill.
  const ssrMatchMedia = function (query) {
    return ({
      matches: css_mediaquery_1.default.match(query, {
      // The estimated CSS width of the browser.
      // For the sake of this demo, we are using a fixed value.
      // In production, you can look into client-hint https://caniuse.com/#search=client%20hint
      // or user-agent resolution.
        width: theme.breakpoints.width(width),
      }),
    });
  };
  return (react_1.default.createElement(styles_1.ThemeProvider, { theme: { ...theme, props: { MuiUseMediaQuery: { ssrMatchMedia } } } }, children));
};
exports.default = DeviceTestWrapper;
