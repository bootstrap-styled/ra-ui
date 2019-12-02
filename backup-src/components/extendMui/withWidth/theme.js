export const makeTheme = (userTheme = {}) => {
  const newTheme = { raUiBootstrapStyled: {} };
  const v = newTheme.raUiBootstrapStyled;
  const u = userTheme || {};


  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };
  newTheme.raUiBootstrapStyled = v;
  return { ...newTheme, ...userTheme };
};

export default makeTheme();
