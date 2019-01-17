import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import compose from 'recompose/compose';
import styled from 'styled-components';
import { mediaBreakpointDown } from '@bootstrap-styled/css-mixins/lib/breakpoints';

import AppBar from './AppBar';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Notification from './Notification';
import Error from './Error';
import defaultTheme from '../defaultTheme';

const LayoutWrapper = styled.div`
    ${(props) => `
        display: flex;
        flex-direction: column;
        z-index: 1;
        background-color: ${props.theme['$body-bg']};
        position: relative;
        min-width: fit-content;
        width: 100%;
    `}
`;

const LayoutFrame = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentWithSidebar = styled.main`
    display: flex;
    flex-grow: 1;
`;

const Content = styled.div.attrs({ className: 'layout-content' })`
    ${(props) => `
        &.layout-content {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 1rem 1rem .75rem 0rem;
            ${mediaBreakpointDown('xs', props.theme['$grid-breakpoints'],
    `
                padding-left: 5rem;
                `)}
            ${mediaBreakpointDown('xs', props.theme['$grid-breakpoints'],
    `
                padding-left: 0rem;
                `)}
        }
    `}
`;


const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
]);


const sanitizeRestProps = ({
  staticContext,
  history,
  location,
  match,
  ...props
}) => props;

class Layout extends Component {
  state = { hasError: false, errorMessage: null, errorInfo: null };

  constructor(props) {
    super(props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */
    props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidCatch(errorMessage, errorInfo) {
    this.setState({ hasError: true, errorMessage, errorInfo });
  }

  render() {
    const {
      appBar,
      children,
      classes,
      className,
      customRoutes,
      error,
      dashboard,
      logout,
      menu,
      notification,
      open,
      sidebar,
      title,
      ...props
    } = this.props;
    const { hasError, errorMessage, errorInfo } = this.state;
    return (
      <LayoutWrapper
        className={classnames('layout', className)}
        {...sanitizeRestProps(props)}
      >
        <LayoutFrame>
          {createElement(appBar, { title, open, logout })}
          <ContentWithSidebar>
            {createElement(sidebar, {
              children: createElement(menu, {
                logout,
                hasDashboard: !!dashboard,
              }),
            })}
            <Content>
              {hasError
                ? createElement(error, {
                  error: errorMessage,
                  errorInfo,
                  title,
                })
                : children}
            </Content>
          </ContentWithSidebar>
          {createElement(notification)}
        </LayoutFrame>
      </LayoutWrapper>
    );
  }
}

Layout.propTypes = {
  appBar: componentPropType,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object,
  className: PropTypes.string,
  customRoutes: PropTypes.array,
  dashboard: componentPropType,
  error: componentPropType,
  history: PropTypes.object.isRequired,
  logout: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  menu: componentPropType,
  notification: componentPropType,
  open: PropTypes.bool,
  sidebar: componentPropType,
  title: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  appBar: AppBar,
  error: Error,
  menu: Menu,
  notification: Notification,
  sidebar: Sidebar,
};

const mapStateToProps = (state) => ({
  open: state.admin.ui.sidebarOpen,
});

const EnhancedLayout = compose(
  connect(
    mapStateToProps,
    {}, // Avoid connect passing dispatch in props
  ),
  withRouter,
)(Layout);

class LayoutWithTheme extends Component { // eslint-disable-line react/no-multi-comp
  constructor(props) {
    super(props);
    this.theme = createMuiTheme(props.theme);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.theme !== this.props.theme) {
      this.theme = createMuiTheme(nextProps.theme);
    }
  }

  render() {
    const { theme, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={this.theme}>
        <EnhancedLayout {...rest} />
      </MuiThemeProvider>
    );
  }
}

LayoutWithTheme.propTypes = {
  theme: PropTypes.object,
};

LayoutWithTheme.defaultProps = {
  theme: defaultTheme,
};

export default LayoutWithTheme;
