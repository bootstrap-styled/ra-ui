import {
  createMakeTheme,
  makeTheme as makeThemeBs,
  makeScopedTheme,
  toMakeTheme,
} from 'bootstrap-styled';

export const makeTheme = createMakeTheme([
  toMakeTheme(makeThemeBs({
    '$enable-rounded': true,
    '$enable-shadows': true,
    '$font-family-base': '"Roboto", "Helvetica", "Arial", sans-serif',
    '$border-radius': '.5em',
    '$badge-font-size': '90%',
    '$badge-font-weight': 'normal',
    '$badge-padding-x': '.8em',
    '$badge-padding-y': '0.6em',
    '$tooltip-bg': '#999',
    '$tooltip-opacity': '1',
    '$tooltip-font-size': '0.75rem',
    '$tooltip-line-height': '1.2',
    '$tooltip-padding-y': '0.25rem',
    '$tooltip-padding-x': '0.25rem',
  })),
  toMakeTheme(makeScopedTheme('raUi', {
    '$fab-enable-shadows': true,
    // '$appbar-padding-y': '.75rem',
    // '$appbar-padding-x': '.25rem',
    // '$zindex-appbar': '1000',
    // '$appbar-color': '#fff',
    // '$appbar-bg-color': '#0275d8',
  })),
]);

export default makeTheme();
