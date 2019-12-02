
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
Object.defineProperty(exports, '__esModule', { value: true });
function getFormInitialValues(initialValues, defaultValue, record) {
  let finalInitialValues = { ...initialValues, ...record };
  if (typeof defaultValue !== 'undefined') {
    console.warn('"defaultValue" is deprecated, please use "initialValues" instead');
  }
  if (typeof defaultValue === 'object') {
    finalInitialValues = { ...defaultValue, ...finalInitialValues };
  } else if (typeof defaultValue === 'function') {
    finalInitialValues = { ...defaultValue(record), ...finalInitialValues };
  }
  return finalInitialValues;
}
exports.default = getFormInitialValues;
