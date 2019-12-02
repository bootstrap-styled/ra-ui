import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classnames from 'classnames';
import { Li, Ul as UlBs, Img as ImgBs } from '@bootstrap-styled/v4';
import styled from 'styled-components';

import sanitizeRestProps from './sanitizeRestProps';
import { fieldPropTypes } from './types';

const Ul = styled(UlBs)`
  display: flex;
  list-style-type: none;
`;

const Img = styled(ImgBs)`
  margin: 0.5rem;
  max-height: 10rem;
`;

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
