import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import FalseIcon from '@material-ui/icons/Clear';
import TrueIcon from '@material-ui/icons/Done';
import compose from 'recompose/compose';
import { translate } from 'ra-core';
import styled from 'styled-components';


import sanitizeRestProps from './sanitizeRestProps';

const BooleanTypography = styled.div`
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.46429em;
`;

const BooleanFieldLabel = styled.span`
  // Move the text out of the flow of the container.
  position: absolute;

   // Reduce its height and width to just one pixel.
  height: 1;
  width: 1;

   // Hide any overflowing elements or text.
  overflow: hidden;

   // Clip the box to zero pixels.
  clip: rect(0, 0, 0, 0);

   // Text won't wrap to a second line.
  white-space: nowrap;
`;

export const BooleanField = ({
  className,
  classes,
  source,
  record = {},
  translate,
  valueLabelTrue,
  valueLabelFalse,
  ...rest
}) => {
  const value = get(record, source);
  let ariaLabel = value ? valueLabelTrue : valueLabelFalse;

  if (!ariaLabel) {
    ariaLabel = value === false
      ? translate('ra.boolean.false')
      : translate('ra.boolean.true');
  }

  if (value === false) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <BooleanFieldLabel>{ariaLabel}</BooleanFieldLabel>
        <FalseIcon />
      </BooleanTypography>
    );
  }

  if (value === true) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <BooleanFieldLabel>{ariaLabel}</BooleanFieldLabel>
        <TrueIcon />
      </BooleanTypography>
    );
  }

  return (
    <BooleanTypography
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
  valueLabelTrue: PropTypes.string,
  valueLabelFalse: PropTypes.string,
};

BooleanField.defaultProps = {
  translate: x => x,
};

const PureBooleanField = compose(
  pure,
  translate
)(BooleanField);

PureBooleanField.defaultProps = {
  addLabel: true,
};

export default PureBooleanField;
