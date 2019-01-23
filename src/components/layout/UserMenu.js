import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { translate } from 'ra-core';
import ButtonDropdown from '@bootstrap-styled/v4/lib/Button/ButtonDropdown';
import DropdownMenu from '@bootstrap-styled/v4/lib/Dropdown/DropdownMenu';
import Button from '../button/Button';

class UserMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    logout: PropTypes.node,
    icon: PropTypes.node,
    translate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: 'ra.auth.user_menu',
    icon: <AccountCircle />,
  };

  state = {
    open: false,
  };

  handleMenu = () => {
    this.setState({ open: !this.state.open }); // eslint-disable-line react/no-access-state-in-setstate
  };


  render() {
    const {
      children, label, icon, logout, translate,
    } = this.props;
    const { open } = this.state;
    if (!logout && !children) return null;

    return (
      <div>
        <ButtonDropdown
          id="menu-appbar"
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup
          toggle={this.handleMenu}
          isOpen={open}
        >
          <Button
            className="add-filter h-100 cursor-pointer"
            onClick={this.handleMenu}
            label={label && translate(label, { _: label })}
          >
            {icon}
          </Button>
          <DropdownMenu right>
            {Children.map(children, menuItem => cloneElement(menuItem, { onClick: this.handleMenu }))}
            {logout}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default translate(UserMenu);
