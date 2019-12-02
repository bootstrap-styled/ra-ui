import React from 'react';
import pure from 'recompose/pure';

import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

/**
 * @example
 * <FunctionField source="last_name" label="Name" render={record => `${record.first_name} ${record.last_name}`} />
 */
const FunctionField = ({
  className,
  record = {},
  source,
  render,
  ...rest
}) => record ? (
  <span className={className} {...sanitizeRestProps(rest)}>
    {render(record, source)}
  </span>
) : null;

const EnhancedFunctionField = pure(FunctionField);

EnhancedFunctionField.defaultProps = {
  addLabel: true,
};

EnhancedFunctionField.propTypes = {
  ...fieldPropTypes,
};

EnhancedFunctionField.displayName = 'EnhancedFunctionField';

export default EnhancedFunctionField;
