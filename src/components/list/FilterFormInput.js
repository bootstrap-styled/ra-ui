import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import IconButton from '@material-ui/core/IconButton';
import ActionHide from '@material-ui/icons/HighlightOff';
import Button from '@bootstrap-styled/v4/lib/Button';

import { translate } from 'ra-core';

const emptyRecord = {};

const sanitizeRestProps = ({ alwaysOn, ...props }) => props;

const FilterFormInput = ({
    filterElement,
    handleHide,
    classes,
    resource,
    translate,
}) => (
    <div
        data-source={filterElement.props.source}
        className="filter-field mx-2 align-items-center my-3 d-flex"
    >
      {!filterElement.props.alwaysOn && (
        <Button
          className="hide-filter cursor-pointer d-flex"
          size="sm"
          color="danger"
          outline
          onClick={handleHide}
          data-key={filterElement.props.source}
          tooltip={translate(
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
        <div className={classes.spacer}>&nbsp;</div>
    </div>
);

FilterFormInput.propTypes = {
    filterElement: PropTypes.node,
    handleHide: PropTypes.func,
    classes: PropTypes.object,
    resource: PropTypes.string,
    translate: PropTypes.func,
};

export default translate(FilterFormInput);
