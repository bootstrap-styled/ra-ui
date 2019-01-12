import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';

import ListGroupItem from '@bootstrap-styled/v4/lib/ListGroup/ListGroupItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { translate, userLogout as userLogoutAction } from 'ra-core';

const sanitizeRestProps = ({
    classes,
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
const Logout = ({ classes, className, translate, userLogout, ...rest }) => (
    <ListGroupItem
        className={classnames('logout', className)}
        onClick={userLogout}
        {...sanitizeRestProps(rest)}
    >
        <span className={classes.iconMenuPaddingStyle}>
            <ExitIcon />
        </span>
        {translate('ra.auth.logout')}
    </ListGroupItem>
);

Logout.propTypes = {
    classes: PropTypes.object,
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
