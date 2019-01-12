import { allowFalseValue } from '../theme/utils';
/**
 * BOOTSTRAP THEME ROW
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
export const makeTheme = (userTheme = {}) => {
  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  const v = {};
  const u = userTheme;
  // all var must be grouped in a named theme
	v['_name'] = u['_name'] || 'ra-ui-bootstrap-styled';

  return Object.assign({}, u, v);
};

export default makeTheme();
