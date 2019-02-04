import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import ListGroupItem from '@bootstrap-styled/v4/lib/ListGroup/ListGroupItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class MenuItemLink extends Component {
    static propTypes = {
      /** @ignore */
      className: PropTypes.string,
      /** @ignore */
      leftIcon: PropTypes.node,
      /** It will be passed to FontAwesomeIcon component as follow: <FontAwesomeIcon icon={faCircle} /> */
      leftFaIcon: PropTypes.shape({
        icon: PropTypes.array.isRequired,
        iconName: PropTypes.string.isRequired,
        prefix: PropTypes.string.isRequired,
      }),
      /** @ignore */
      onClick: PropTypes.func,
      /** @ignore */
      primaryText: PropTypes.string,
      /** @ignore */
      staticContext: PropTypes.object,
      /** @ignore */
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    };

    handleMenuTap = e => {
      this.props.onClick && this.props.onClick(e); // eslint-disable-line no-unused-expressions
    };

    render() {
      const {
        className,
        primaryText,
        leftIcon,
        leftFaIcon,
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
          {leftFaIcon && (
            <FontAwesomeIcon icon={leftFaIcon} />
          )}
          {!leftFaIcon && leftIcon && (
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
