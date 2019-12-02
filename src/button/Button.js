import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';
import { Button as ButtonBs } from '@bootstrap-styled/v4';
import Tooltip from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import { useTranslate } from 'ra-core';
import withWidth from 'bootstrap-styled/lib/withWidth';

const ButtonRa = styled(ButtonBs)`
  ${props => `
    && {
      background: transparent;
      font-size: 0.8125rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      border: none;
      text-transform: uppercase;
      text-decoration: none;
      
      &.icon-button {
        border-radius: 100%;
        padding: 12px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      
      &:not(.btn-danger) {
        color: ${props.theme['$brand-primary']};
        &:hover {
          background-color: rgba(63, 81, 181, 0.08);
          border: none;
          color: ${props.theme['$brand-primary']};
        }
      }
      
      &.btn-danger {
        color: ${props.theme['$brand-danger']} 
        &:hover {
          background-color: ${Color(props.theme['$brand-danger']).fade(0.82).toString()}
        }
      }
    }
  `}
`;

const Button = ({
  width,
  component: Tag,
  alignIcon = 'left',
  children,
  className,
  color,
  disabled,
  label,
  size = 'sm',
  ...rest
}) => {
  const translate = useTranslate();
  return width === 'xs' ? (
    label && !disabled ? (
      <Tooltip title={translate(label, { _: label })}>
        <Button
          tag={Tag}
          aria-label={translate(label, { _: label })}
          className={classnames(className, 'icon-button')}
          color={color}
          {...rest}
        >
          {children}
        </Button>
      </Tooltip>
    ) : (
      <Button
        tag={Tag}
        className={classnames(className, 'icon-button')}
        color={color}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    )
  ) : (
    <ButtonRa
      tag={Tag}
      className={classnames('d-inline-flex align-items-center', className)}
      color={color}
      size={size}
      aria-label={label ? translate(label, { _: label }) : undefined}
      disabled={disabled}
      {...rest}
    >
      {alignIcon === 'left'
      && children
      && React.cloneElement(children)}
      {label && (
        <span
          className={classnames({
            'pl-2': alignIcon === 'left',
            'pr-2': alignIcon !== 'left',
          })}
        >
          {translate(label, { _: label })}
        </span>
      )}
      {alignIcon === 'right'
      && children
      && React.cloneElement(children)}
    </ButtonRa>
  );
};

Button.propTypes = {
  alignIcon: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', '', 'lg']),
};

Button.defaultProps = {
  color: 'secondary',
  size: 'sm',
};

export default withWidth()(Button);
