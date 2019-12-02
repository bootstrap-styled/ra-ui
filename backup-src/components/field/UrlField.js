import React from 'react';
import get from 'lodash/get';
import pure from 'recompose/pure';
import { A } from '@bootstrap-styled/v4';
import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

const UrlField = ({
  className, source, record = {}, ...rest
}) => (
  <A
    className={className}
    href={get(record, source)}
    {...sanitizeRestProps(rest)}
  >
    {get(record, source)}
  </A>
);

const EnhancedUrlField = pure(UrlField);

EnhancedUrlField.defaultProps = {
  addLabel: true,
};

EnhancedUrlField.propTypes = fieldPropTypes;
EnhancedUrlField.displayName = 'EnhancedUrlField';

export default EnhancedUrlField;
