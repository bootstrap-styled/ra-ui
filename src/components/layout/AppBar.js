import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import H2 from '@bootstrap-styled/v4/lib/H2';
import Button from '@bootstrap-styled/v4/lib/Button';
import styled from 'styled-components';

import MenuIcon from '@material-ui/icons/Menu';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'ra-core';
import withWidth from '../extendMui/withWidth';
import BsAppBar from '../extendMui/AppBar';

import LoadingIndicator from './LoadingIndicator';
import UserMenu from './UserMenu';
import Headroom from './Headroom';

const AppBarUnstyled = ({
  children,
  className,
  logout,
  open,
  title,
  toggleSidebar,
  userMenu,
  width,
  ...rest
}) => (
  <Headroom>
    <BsAppBar className={classnames(className, 'appbar')} {...rest}>
      <Button
        color="primary"
        aria-label="open drawer"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </Button>
      <H2 className="appbar-title my-0">
        {typeof title === 'string' ? title : React.cloneElement(title)}
      </H2>
      <LoadingIndicator />
      {cloneElement(userMenu, { logout })}
    </BsAppBar>
  </Headroom>
);

AppBarUnstyled.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logout: PropTypes.element,
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  userMenu: PropTypes.node,
  width: PropTypes.string,
};

AppBarUnstyled.defaultProps = {
  userMenu: <UserMenu />,
};

const AppBar = styled(AppBarUnstyled)`
  &.appbar {
      .appbar-title {
          flex: 1;
      }
      
      .appbar-nav{
          .nav {
              height: 100%;
              .nav-link {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  padding: 0 .5rem;
              }
              .dropdown-item {
                  width: auto;
              }
          }
      }
  }
`;

const enhance = compose(
  connect(
    (state) => ({
      locale: state.i18n.locale, // force redraw on locale change
    }),
    {
      toggleSidebar: toggleSidebarAction,
    }
  ),
  withWidth()
);

export default enhance(AppBar);
