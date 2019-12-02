import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classnames from 'classnames';
import { Li, Ul, Img } from '@bootstrap-styled/v4';

import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

export const ImageField = ({
  className,
  record,
  source,
  src,
  title,
  ...rest
}) => {
  const sourceValue = get(record, source);
  if (!sourceValue) {
    return <div className={className} {...sanitizeRestProps(rest)} />;
  }

  if (Array.isArray(sourceValue)) {
    return (
      <Ul
        className={classnames('d-flex', className)}
        {...sanitizeRestProps(rest)}
      >
        {sourceValue.map((file, index) => {
          const titleValue = get(file, title) || title;
          const srcValue = get(file, src) || title;

          return (
            <Li key={index}>
              <Img
                alt={titleValue}
                title={titleValue}
                src={srcValue}
                className="m-1"
              />
            </Li>
          );
        })}
      </Ul>
    );
  }

  const titleValue = get(record, title) || title;

  return (
    <div className={className} {...sanitizeRestProps(rest)}>
      <Img
        title={titleValue}
        alt={titleValue}
        src={sourceValue}
        className="m-1"
      />
    </div>
  );
};

// wat? TypeScript looses the displayName if we don't set it explicitly
ImageField.displayName = 'ImageField';

ImageField.defaultProps = {
  addLabel: true,
};

ImageField.propTypes = {
  ...fieldPropTypes,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default ImageField;
