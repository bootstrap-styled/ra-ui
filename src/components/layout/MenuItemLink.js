import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import ListGroupItem from '@bootstrap-styled/v4/lib/ListGroup/ListGroupItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: theme.palette.text.secondary,
        display: 'flex',
        alignItems: 'flex-start',
    },
    active: {
        color: theme.palette.text.primary,
    },
    icon: { paddingRight: '1.2em' },
});

export class MenuItemLink extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        className: PropTypes.string,
        leftIcon: PropTypes.node,
        onClick: PropTypes.func,
        primaryText: PropTypes.string,
        staticContext: PropTypes.object,
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    };

    handleMenuTap = (e) => {
        this.props.onClick && this.props.onClick(e);
    };

    render() {
        const {
            classes,
            className,
            primaryText,
            leftIcon,
            staticContext,
            ...props
        } = this.props;

        return (
            <ListGroupItem
                className={classnames(className, 'border-0 rounded-0 d-flex flex-start pl-2')}
                style={{ textDecoration: 'none', transition: 'all .2s ease-in-out' }}
                action
                tag={NavLink}
                {...props}
                onClick={this.handleMenuTap}
            >
                {leftIcon && (
                    <span className="pr-3 py-1 d-flex">
                        {cloneElement(leftIcon, { titleAccess: primaryText })}
                    </span>
                )}
                {primaryText}
            </ListGroupItem>
        );
    }
}

export default MenuItemLink;
