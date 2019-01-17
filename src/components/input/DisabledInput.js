import React from 'react';
import PropTypes from 'prop-types';
import Input from '@bootstrap-styled/v4/lib/Input';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import { addField, FieldTitle } from '@yeutech/ra-core';

import sanitizeRestProps from './sanitizeRestProps';

const DisabledInput = ({
  classes,
  className,
  record,
  input: { value }, // eslint-disable-line no-unused-vars
  label,
  resource,
  source,
  options,
  // Our props
  labelHidden,
  classNameInput,
  input,
  size,
  ...rest
}) => (
  <FormGroup className={className} {...sanitizeRestProps(rest)}>
    <FieldTitle
      label={label}
      source={source}
      resource={resource}
    />
    <Input
      size={size}
      className={classNameInput}
      value={value}
      disabled
    />
  </FormGroup>
);

DisabledInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  record: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
  labelHidden: PropTypes.bool,
  classNameInput: PropTypes.string,
  size: PropTypes.string,
};

export default addField(DisabledInput);
