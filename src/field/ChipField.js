import React from 'react';
import compose from 'recompose/compose';
import get from 'lodash/get';
import pure from 'recompose/pure';
import { Badge } from '@bootstrap-styled/v4';
import classnames from 'classnames';
import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

export const ChipField = ({
  className,
  source,
  record = {},
  ...rest
}) => (
  <Badge
    className={classnames('m-1', className)}
    {...sanitizeRestProps(rest)}
  >
    {get(record, source)}
  </Badge>
);

const EnhancedChipField = compose(pure)(ChipField);

EnhancedChipField.defaultProps = {
  addLabel: true,
};

EnhancedChipField.propTypes = {
  ...ChipField.propTypes,
  ...fieldPropTypes,
};

EnhancedChipField.displayName = 'EnhancedChipField';

export default EnhancedChipField;
