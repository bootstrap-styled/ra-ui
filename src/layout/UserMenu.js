import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslate } from 'ra-core';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Tooltip,
  Button,
} from '@bootstrap-styled/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const translate = useTranslate();

  const {
    children,
    label,
    icon,
    logout,
  } = props;
  if (!logout && !children) return null;
  const open = Boolean(anchorEl);

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Tooltip
        placement="bottom"
        isOpen={isOpen}
        target="tooltip-user-menu-button"
        toggle={() => setIsOpen(!isOpen)}
      >
        {label && translate(label, { _: label })}
      </Tooltip>
      <Dropdown isOpen={open} toggle={open ? handleClose : handleMenu}>
        <Button
          tether="top-right"
          tag={DropdownToggle}
          id="tooltip-user-menu-button"
          alt={label && translate(label, { _: label })}
          className="bg-transparent border-0 shadow-none"
          onClick={handleMenu}
        >
          {icon}
        </Button>
        <DropdownMenu className="dropdown-menu-right">
          {Children.map(children, menuItem => isValidElement(menuItem)
            ? cloneElement(menuItem, {
              onClick: handleClose,
            })
            : null)}
          {logout}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

UserMenu.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  logout: PropTypes.element,
  icon: PropTypes.node,
};

UserMenu.defaultProps = {
  label: 'ra.auth.user_menu',
  icon: <FontAwesomeIcon icon="user-circle" />,
};

export default UserMenu;
