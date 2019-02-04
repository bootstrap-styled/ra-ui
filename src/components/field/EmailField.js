import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import A from '@bootstrap-styled/v4/lib/A';

import sanitizeRestProps from './sanitizeRestProps';

const EmailField = ({
  className, source, record = {}, ...rest
}) => (
  <A
    className={className}
    href={`mailto:${get(record, source)}`}
    {...sanitizeRestProps(rest)}
  >
    {get(record, source)}
  </A>
);

EmailField.propTypes = {
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

const PureEmailField = pure(EmailField);

PureEmailField.defaultProps = {
  addLabel: true,
};

export default PureEmailField;
