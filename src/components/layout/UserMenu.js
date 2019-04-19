import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ButtonDropdown from '@bootstrap-styled/v4/lib/Button/ButtonDropdown';
import DropdownMenu from '@bootstrap-styled/v4/lib/Dropdown/DropdownMenu';
import Button from '../button/Button';

class UserMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    logout: PropTypes.node,
    icon: PropTypes.node,
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
      children, label, icon, logout,
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
          style={{ height: '48px' }}
        >
          <Button
            className="add-filter h-100 cursor-pointer text-white rounded-0"
            onClick={this.handleMenu}
            label={label}
          >
            {icon}
          </Button>
          <DropdownMenu right className="mt-0 rounded-0 rounded-bottom">
            {Children.map(children, menuItem => isValidElement(menuItem)
              ? cloneElement(menuItem, { onClick: this.handleClose }) : null)}
            {logout}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default UserMenu;
