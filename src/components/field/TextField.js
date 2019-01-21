import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import styled from 'styled-components';

import sanitizeRestProps from './sanitizeRestProps';

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

TextField.propTypes = {
  addLabel: PropTypes.bool,
  basePath: PropTypes.string,
  className: PropTypes.string,
  cellClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  sortBy: PropTypes.string,
  source: PropTypes.string.isRequired,
};

// wat? TypeScript looses the displayName if we don't set it explicitly
TextField.displayName = 'TextField';
const PureTextField = pure(TextField);

PureTextField.defaultProps = {
  addLabel: true,
};

export default PureTextField;
