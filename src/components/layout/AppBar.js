import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import H2 from '@bootstrap-styled/v4/lib/H2';
import styled from 'styled-components';

import MenuIcon from '@material-ui/icons/Menu';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'ra-core';
import withWidth from '../extendMui/withWidth';
import BsAppBar from '../extendMui/AppBar';

import LoadingIndicator from './LoadingIndicator';
import UserMenu from './UserMenu';
import Headroom from './Headroom';

const MenuButton = styled.button`
  cursor: pointer;
  color: inherit;
  margin: 0;
  border: 0;
  outline: none;
  user-select: none;
  text-decoration: none;
  background-color: transparent;
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  align-items: center;
`;

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
    <BsAppBar className={classnames(className, 'appbar p-0')} {...rest}>
      <MenuButton
        aria-label="open drawer"
        className="mx-3"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </MenuButton>
      <H2 className="appbar-title my-0" id="react-admin-title">
        <span>
          {typeof title === 'string' ? title : React.cloneElement(title)}
        </span>
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
    state => ({
      locale: state.i18n.locale, // force redraw on locale change
    }),
    {
      toggleSidebar: toggleSidebarAction,
    }
  ),
  withWidth()
);

/** @component */
export default enhance(AppBar);
