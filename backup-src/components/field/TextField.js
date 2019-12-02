import React from 'react';
import get from 'lodash/get';
import pure from 'recompose/pure';
import styled from 'styled-components';

import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

const Text = styled.span`
  margin: 0;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.46429em;
`;

const TextField = ({
  className, source, record = {}, ...rest
}) => {
  const value = get(record, source);
  return (
    <Text
      className={className}
      {...sanitizeRestProps(rest)}
    >
      {value && typeof value !== 'string' ? JSON.stringify(value) : value}
    </Text>
  );
};

// wat? TypeScript looses the displayName if we don't set it explicitly
TextField.displayName = 'TextField';

const EnhancedTextField = pure(TextField);

EnhancedTextField.defaultProps = {
  addLabel: true,
};

EnhancedTextField.propTypes = {
  ...fieldPropTypes,
};

EnhancedTextField.displayName = 'EnhancedTextField';

export default EnhancedTextField;
