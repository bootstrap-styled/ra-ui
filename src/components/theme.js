import { makeScopedTheme, toMakeTheme } from 'bootstrap-styled';

const theme = makeScopedTheme('raUiBootstrapStyled', {
  '$appbar-padding-y': '.75rem',
  '$appbar-padding-x': '.25rem',
  '$zindex-appbar': '1000',
  '$appbar-color': '#fff',
  '$appbar-bg-color': '#0275d8',
});

export const makeTheme = toMakeTheme(theme);

export default theme;
