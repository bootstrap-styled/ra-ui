import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

export const styles = theme => ({
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
  },
});

function AvatarUnstyled(props) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenClassNameProp,
    className: classNameProp,
    component: Component,
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;

  const className = classnames(
    {
      'color-default': childrenProp && !src && !srcSet,
    },
    classNameProp,
  );
  let children = null;

  if (childrenProp) {
    if (
      childrenClassNameProp
      && typeof childrenProp !== 'string'
      && React.isValidElement(childrenProp)
    ) {
      const childrenClassName = classnames(childrenClassNameProp, childrenProp.props.className);
      children = React.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        className="avatar-img"
        {...imgProps}
      />
    );
  }

  return (
    <Component className={classnames(className, 'avatar')} {...other}>
      {children}
    </Component>
  );
}

const Avatar = styled(AvatarUnstyled)`
  ${props => `
    &.avatar {
      position: 'relative';
      display: 'flex';
      align-items: 'center';
      justify-content: 'center';
      flex-shrink: 0;
      width: theme.spacing.unit * 5;
      height: theme.spacing.unit * 5;
      font-family: theme.typography.fontFamily;
      font-size: theme.typography.pxToRem(20);
      border-radius: '50%';
      overflow: 'hidden';
      user-select: 'none';
      &.color-default {
        color: ${props.theme['$avatar-color-default']}
        background-color: ${props.theme['$avatar-bg-default']}
      };
      .avatar-img {
        width: '100%';
        height: '100%';
        text-align: 'center';
        // Handle non-square image. The property isn't supported by IE11.
        object-fit: 'cover';
      }
    }
  `}
`;

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Properties applied to the `img` element when the component
   * is used to display an image.
   */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: PropTypes.string,
};

Avatar.defaultProps = {
  component: 'div',
};

/** @component */
export default Avatar;
