import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFilter from '@material-ui/icons/FilterList';
import ButtonDropdown from '@bootstrap-styled/v4/lib/Button/ButtonDropdown';
import DropdownMenu from '@bootstrap-styled/v4/lib/Dropdown/DropdownMenu';
import classnames from 'classnames';
import compose from 'recompose/compose';
import { translate } from 'ra-core';

import FilterButtonMenuItem from './FilterButtonMenuItem';
import Button from '../button/Button';

export class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  getHiddenFilters() {
    const { filters, displayedFilters, filterValues } = this.props;
    return filters.filter(
      filterElement => !filterElement.props.alwaysOn
        && !displayedFilters[filterElement.props.source]
        && !filterValues[filterElement.props.source]
    );
  }

  handleClickButton(event) {
    // This prevents ghost click.
    event && event.preventDefault(); // eslint-disable-line no-unused-expressions

    this.setState({
      open: !this.state.open, // eslint-disable-line react/no-access-state-in-setstate
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleShow({ source, defaultValue }) {
    this.props.showFilter(source, defaultValue);
    this.setState({
      open: false,
    });
  }

  button = null; // eslint-disable-line react/sort-comp

  render() {
    const hiddenFilters = this.getHiddenFilters();
    const {
      className,
      resource,
      showFilter,
      displayedFilters,
      filterValues,
      translate,
      ...rest
    } = this.props;
    const { open } = this.state;

    return (
      hiddenFilters.length > 0 && (
        <ButtonDropdown
          className={classnames('d-inline-block', className)}
          isOpen={open}
          toggle={this.handleClickButton}
          {...rest}
        >
          <Button
            className="add-filter h-100 cursor-pointer"
            onClick={this.handleClickButton}
            label="ra.action.add_filter"
          >
            <ContentFilter />
          </Button>
          <DropdownMenu right>
            {hiddenFilters.map(filterElement => (
              <FilterButtonMenuItem
                key={filterElement.props.source}
                filter={filterElement.props}
                resource={resource}
                onShow={this.handleShow}
                className="cursor-pointer"
              />
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      )
    );
  }
}

FilterButton.propTypes = {
  resource: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.node).isRequired,
  displayedFilters: PropTypes.object.isRequired,
  filterValues: PropTypes.object.isRequired,
  showFilter: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default compose(
  translate,
)(FilterButton);
