import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { useTranslate } from 'ra-core';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fieldPropTypes } from './types';
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
  valueLabelTrue,
  valueLabelFalse,
  ...rest
}) => {
  const translate = useTranslate();
  const value = get(record, source);
  let ariaLabel = value ? valueLabelTrue : valueLabelFalse;

  if (!ariaLabel) {
    ariaLabel = value === false ? 'ra.boolean.false' : 'ra.boolean.true';
  }

  if (value === false) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <BooleanFieldLabel>{translate(ariaLabel, { _: ariaLabel })}</BooleanFieldLabel>
        <FontAwesomeIcon icon="times" data-testid="false" />
      </BooleanTypography>
    );
  }

  if (value === true) {
    return (
      <BooleanTypography
        className={className}
        {...sanitizeRestProps(rest)}
      >
        <BooleanFieldLabel>{translate(ariaLabel, { _: ariaLabel })}</BooleanFieldLabel>
        <FontAwesomeIcon icon="check" data-testid="true" />
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

const EnhancedBooleanField = compose(pure)(BooleanField);

EnhancedBooleanField.defaultProps = {
  addLabel: true,
};

EnhancedBooleanField.propTypes = {
  ...fieldPropTypes,
  valueLabelFalse: PropTypes.string,
  valueLabelTrue: PropTypes.string,
};
EnhancedBooleanField.displayName = 'EnhancedBooleanField';

export default EnhancedBooleanField;
