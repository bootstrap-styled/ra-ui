import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';

import DropdownItem from '@bootstrap-styled/v4/lib/Dropdown/DropdownItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { translate, userLogout as userLogoutAction } from 'ra-core';

const sanitizeRestProps = ({
  className,
  translate,
  userLogout,
  locale,
  redirectTo,
  ...rest
}) => rest;
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
const Logout = ({
  className, translate, userLogout, ...rest
}) => (
  <DropdownItem
    className={classnames('logout', className)}
    onClick={userLogout}
    {...sanitizeRestProps(rest)}
  >
    <span>
      <ExitIcon />
    </span>
    {translate('ra.auth.logout')}
  </DropdownItem>
);

Logout.propTypes = {
  className: PropTypes.string,
  translate: PropTypes.func,
  userLogout: PropTypes.func,
  redirectTo: PropTypes.string,
};

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch, { redirectTo }) => ({
  userLogout: () => dispatch(userLogoutAction(redirectTo)),
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
);

export default enhance(Logout);
