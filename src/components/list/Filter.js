import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps } from 'ra-core';

import FilterForm from './FilterForm';
import FilterButton from './FilterButton';

export class Filter extends Component {
  renderButton() {
    const {
      context,
      resource,
      children,
      showFilter,
      hideFilter,
      displayedFilters,
      filterValues,
      ...rest
    } = this.props;

    return (
      <FilterButton
        resource={resource}
        filters={React.Children.toArray(children)}
        showFilter={showFilter}
        displayedFilters={displayedFilters}
        filterValues={filterValues}
        {...sanitizeListRestProps(rest)}
      />
    );
  }

  renderForm() {
    const {
      context,
      resource,
      children,
      hideFilter,
      displayedFilters,
      showFilter,
      filterValues,
      setFilters,
      ...rest
    } = this.props;

    return (
      <FilterForm
        resource={resource}
        filters={React.Children.toArray(children)}
        hideFilter={hideFilter}
        displayedFilters={displayedFilters}
        initialValues={filterValues}
        setFilters={setFilters}
        {...sanitizeListRestProps(rest)}
      />
    );
  }

  render() {
    return this.props.context === 'button'
      ? this.renderButton()
      : this.renderForm();
  }
}

Filter.propTypes = {
  children: PropTypes.node,
  context: PropTypes.oneOf(['form', 'button']),
  displayedFilters: PropTypes.object,
  filterValues: PropTypes.object,
  hideFilter: PropTypes.func,
  setFilters: PropTypes.func,
  showFilter: PropTypes.func,
  resource: PropTypes.string.isRequired,
};

export default Filter;
