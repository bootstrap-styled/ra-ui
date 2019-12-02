import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

export const removeTags = input => input ? input.replace(/<[^>]+>/gm, '') : '';

/* eslint-disable react/no-danger */
const RichTextField = ({
  className,
  source,
  record = {},
  stripTags,
  ...rest
}) => {
  const value = get(record, source);
  if (stripTags) {
    return (
      <span
        className={className}
        {...sanitizeRestProps(rest)}
      >
        {removeTags(value)}
      </span>
    );
  }

  return (
    <span
      className={className}
      {...sanitizeRestProps(rest)}
    >
      <span dangerouslySetInnerHTML={{ __html: value }} />
    </span>
  );
};

const EnhancedRichTextField = pure(RichTextField);

EnhancedRichTextField.defaultProps = {
  addLabel: true,
  stripTags: false,
};

EnhancedRichTextField.propTypes = {
  ...fieldPropTypes,
  stripTags: PropTypes.bool,
};

EnhancedRichTextField.displayName = 'EnhancedRichTextField';

export default EnhancedRichTextField;
