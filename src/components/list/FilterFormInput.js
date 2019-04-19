import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ActionHide from '@material-ui/icons/HighlightOff';
import { translate } from 'ra-core';
import Button from '../button/Button';

const emptyRecord = {};

const sanitizeRestProps = ({ alwaysOn, ...props }) => props;

const FilterFormInput = ({
  filterElement,
  handleHide,
  resource,
  translate,
  locale, // eslint-disable-line no-unused-vars
}) => (
  <div
    data-source={filterElement.props.source}
    className="filter-field mx-2 align-items-center my-3 d-flex"
  >
    {!filterElement.props.alwaysOn && (
      <Button
        className="hide-filter cursor-pointer d-flex"
        size="sm"
        onClick={handleHide}
        data-key={filterElement.props.source}
        title={translate(
          'ra.action.remove_filter'
        )}
      >
        <ActionHide />
      </Button>
    )}
    <Field
      allowEmpty
      {...sanitizeRestProps(filterElement.props)}
      name={filterElement.props.source}
      component={filterElement.type}
      resource={resource}
      record={emptyRecord}
    />
    <div>&nbsp;</div>
  </div>
);

FilterFormInput.propTypes = {
  filterElement: PropTypes.node,
  handleHide: PropTypes.func,
  resource: PropTypes.string,
  locale: PropTypes.string,
  translate: PropTypes.func,
};

export default translate(FilterFormInput);
