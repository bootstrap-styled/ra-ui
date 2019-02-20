import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import FalseIcon from '@material-ui/icons/Clear';
import TrueIcon from '@material-ui/icons/Done';
import styled from 'styled-components';


import sanitizeRestProps from './sanitizeRestProps';

const BooleanTypography = styled.div`
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.46429em;
`;

export const BooleanField = ({
  className, source, record = {}, ...rest
}) => {
  if (get(record, source) === false) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <FalseIcon />
      </BooleanTypography>
    );
  }

  if (get(record, source) === true) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <TrueIcon />
      </BooleanTypography>
    );
  }

  return (
    <span
      className={className}
      {...sanitizeRestProps(rest)}
    />
  );
};

BooleanField.propTypes = {
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

const PureBooleanField = pure(BooleanField);

PureBooleanField.defaultProps = {
  addLabel: true,
};

export default PureBooleanField;
