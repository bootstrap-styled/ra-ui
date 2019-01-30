import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import Fa from '@bootstrap-styled/v4/lib/Fa';
import Dropdown from '@bootstrap-styled/v4/lib/Dropdown';
import DropdownToggle from '@bootstrap-styled/v4/lib/Dropdown/DropdownToggle';
import DropdownMenu from '@bootstrap-styled/v4/lib/Dropdown/DropdownMenu';

class SelectInputUnstyled extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen, // eslint-disable-line
    });
  };


  handleItemClick = child => event => {
    const { onChange } = this.props;
    if (onChange) {
      let value;
      let target;

      if (event.target) {
        target = event.target; // eslint-disable-line
      }

      value = Array.isArray(this.props.value) ? [...this.props.value] : []; // eslint-disable-line
      const itemIndex = value.indexOf(child.props.value);

      if (itemIndex === -1) {
        value.push(child.props.value);
      } else {
        value.splice(itemIndex, 1);
      }

      event.persist();
      event.target = { ...target, value }; // eslint-disable-line

      onChange(event, child);
    }
  };

  render() {
    const {
      children,
      className,
      value,
      renderValue,
    } = this.props;


    const items = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }
      let selected;
      selected = value.indexOf(child.props.value) !== -1; // eslint-disable-line

      return React.cloneElement(child, {
        onClick: this.handleItemClick(child),
        role: 'option',
        selected,
        value: undefined, // The value is most likely not a valid HTML attribute.
        className: classnames({ active: selected }),
      });
    });

    return (
      <div className={classnames(className, 'select-multiple cursor-pointer')}>
        <Dropdown isOpen={this.state.isOpen} toggle={this.handleClick} dropup>
          <DropdownToggle tag="div" className="select-multiple-toggle d-flex align-items-center" tabIndex="0">
            {value ? renderValue(value) : null}
            <Fa plus-circle color="success" className="ml-2" size="2x" />
          </DropdownToggle>
          <DropdownMenu>
            {items}
          </DropdownMenu>
        </Dropdown>
        <input value={Array.isArray(value) ? value.join(',') : value} type="hidden" />
      </div>
    );
  }
}

const SelectInput = styled(SelectInputUnstyled)`
${props => `
  &.select-multiple {
    .select-multiple-toggle {
      border: 1px solid lightgrey;
      line-height: 1.25;
      padding: .25rem;
      min-height: 32px;
      border-radius: 5px;
      min-width: 75px;
      width: auto;
      &:focus {
        outline: 1px solid ${props.theme['$brand-primary']};
      }
      .badge {
        border-radius: 1rem;
        padding: .75rem;
      }
    }
    .dropdown-item {
      padding: .25rem;
      &.active {
        background-color: lightgrey;
        color: black;
      }
    }
  }
`}
`;

SelectInput.propTypes = {
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  options: PropTypes.array,
  /**
   * The input value.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]).isRequired,
};

export default SelectInput;
