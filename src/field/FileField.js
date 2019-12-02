import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classnames from 'classnames';
import { A, Li, Ul } from '@bootstrap-styled/v4';
import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

export const FileField = ({
  className,
  record,
  source,
  title,
  src,
  target,
  ...rest
}) => {
  const sourceValue = get(record, source);

  if (!sourceValue) {
    return (
      <div
        className={className}
        {...sanitizeRestProps(rest)}
      />
    );
  }

  if (Array.isArray(sourceValue)) {
    return (
      <Ul
        className={classnames('d-inline-block', className)}
        {...sanitizeRestProps(rest)}
      >
        {sourceValue.map((file, index) => {
          const titleValue = get(file, title) || title;
          const srcValue = get(file, src) || title;

          return (
            <Li key={index}>
              <A
                href={srcValue}
                title={titleValue}
                target={target}
              >
                {titleValue}
              </A>
            </Li>
          );
        })}
      </Ul>
    );
  }

  const titleValue = get(record, title) || title;

  return (
    <div
      className={classnames('d-inline-block', className)}
      {...sanitizeRestProps(rest)}
    >
      <A href={sourceValue} title={titleValue} target={target}>
        {titleValue}
      </A>
    </div>
  );
};
FileField.defaultProps = {
  addLabel: true,
};

FileField.propTypes = {
  ...fieldPropTypes,
  src: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
};

export default FileField;
