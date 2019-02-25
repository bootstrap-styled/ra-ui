import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormBs from '@bootstrap-styled/v4/lib/Form';
import styled from 'styled-components';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import lodashSet from 'lodash/set';

import FilterFormInput from './FilterFormInput';

const Form = styled(FormBs)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0;
  align-items: flex-end;
`;

const sanitizeRestProps = ({
  anyTouched,
  asyncValidate,
  asyncValidating,
  autofill,
  blur,
  change,
  clearAsyncError,
  clearFields,
  clearSubmit,
  clearSubmitErrors,
  destroy,
  dirty,
  dispatch,
  displayedFilters,
  filterValues,
  handleSubmit,
  hideFilter,
  initialize,
  initialized,
  initialValues,
  invalid,
  pristine,
  pure,
  reset,
  resetSection,
  save,
  setFilter,
  setFilters,
  submit,
  submitFailed,
  submitSucceeded,
  submitting,
  touch,
  triggerSubmit,
  untouch,
  valid,
  validate,
  ...props
}) => props;

export class FilterForm extends Component {
  componentDidMount() {
    this.props.filters.forEach(filter => {
      if (filter.props.alwaysOn && filter.props.defaultValue) {
        throw new Error(
          'Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.'
        );
      }
    });
  }

  getShownFilters() {
    const { filters, displayedFilters, initialValues } = this.props;

    return filters.filter(
      filterElement => filterElement.props.alwaysOn
        || displayedFilters[filterElement.props.source]
        || typeof initialValues[filterElement.props.source] !== 'undefined'
    );
  }

  handleHide = event => this.props.hideFilter(event.currentTarget.dataset.key);

  render() {
    const {
      className, resource, ...rest
    } = this.props;

    return (
      <Form
        tag="div"
        className={className}
        {...sanitizeRestProps(rest)}
      >
        {this.getShownFilters().map(filterElement => (
          <FilterFormInput
            key={filterElement.props.source}
            filterElement={filterElement}
            handleHide={this.handleHide}
            resource={resource}
          />
        ))}
        <div />
      </Form>
    );
  }
}

FilterForm.propTypes = {
  resource: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.node).isRequired,
  displayedFilters: PropTypes.object.isRequired,
  hideFilter: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  className: PropTypes.string,
};

export const mergeInitialValuesWithDefaultValues = ({
  initialValues,
  filters,
}) => ({
  initialValues: {
    ...filters
      .filter(
        filterElement => filterElement.props.alwaysOn
          && filterElement.props.defaultValue
      )
      .reduce(
        (acc, filterElement) => lodashSet(
          { ...acc },
          filterElement.props.source,
          filterElement.props.defaultValue
        ),
        {}
      ),
    ...initialValues,
  },
});

const enhance = compose(
  withProps(mergeInitialValuesWithDefaultValues),
  reduxForm({
    form: 'filterForm',
    enableReinitialize: true,
    destroyOnUnmount: false, // do not destroy to preserve state across navigation
    onChange: (values, dispatch, props) => props && props.setFilters(values),
  })
);

export default enhance(FilterForm);
