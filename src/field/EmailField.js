import React from 'react';
import get from 'lodash/get';
import pure from 'recompose/pure';
import { A } from '@bootstrap-styled/v4';

import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

const EmailField = ({
  className, source, record = {}, ...rest
}) => (
  <A
    className={className}
    href={`mailto:${get(record, source)}`}
    onClick={stopPropagation}
    {...sanitizeRestProps(rest)}
  >
    {get(record, source)}
  </A>
);

const EnhancedEmailField = pure(EmailField);

EnhancedEmailField.defaultProps = {
  addLabel: true,
};

EnhancedEmailField.propTypes = fieldPropTypes;
EnhancedEmailField.displayName = 'EnhancedEmailField';

export default EnhancedEmailField;
