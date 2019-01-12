// Passes bsTheme + customTheme as a merged object userTheme.
export const makeTheme = (userTheme) => {
	// Create scope to create new variables.
	const newTheme = { raUiBootstrapStyled: {} };
	const v = newTheme.raUiBootstrapStyled;
	// Get userTheme variables if existant.
	const u = userTheme || {};

  // Start with assigning color names to specific hex values.
  v['$appbar-padding-x'] = u['$appbar-padding-x'] || '.25rem';
	v['$appbar-padding-y'] = u['$appbar-padding-y'] || '.75rem';
	v['$appbar-height'] = u['$appbar-height'] || '75px';

	v['$appbar-bg-color'] = u['$appbar-bg-color'] || u['$brand-primary'];
	v['$appbar-color'] = u['$appbar-color'] || u['$white'];
	v['$zindex-appbar'] = u['$zindex-appbar'] || u['$zindex-navbar'];

	newTheme.raUiBootstrapStyled = v;

	return { ...newTheme, ...userTheme };
};

export default makeTheme();
