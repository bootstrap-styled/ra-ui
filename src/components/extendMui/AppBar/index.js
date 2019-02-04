import styled from 'styled-components';

const AppBar = styled.header`
${props => `
  position: static;
  top: 0;
  right: 0;
  left: 0;
  padding: ${props.theme.raUiBootstrapStyled['$appbar-padding-y']} ${props.theme.raUiBootstrapStyled['$appbar-padding-x']};
  display: flex;
  align-items: center;
  z-index: ${props.theme.raUiBootstrapStyled['$zindex-appbar']};
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: row;
  color: ${props.theme.raUiBootstrapStyled['$appbar-color']};
  background: ${props.theme.raUiBootstrapStyled['$appbar-bg-color']};
`}
`;

const defaultProps = {
  theme: {
    raUiBootstrapStyled: {
      '$appbar-padding-y': '.75rem',
      '$appbar-padding-x': '.25rem',
      '$zindex-appbar': '1000',
      '$appbar-color': '#fff',
      '$appbar-bg-color': '#0275d8',

    },
  },
};

AppBar.defaultProps = defaultProps;

export default AppBar;
