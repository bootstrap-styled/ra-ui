import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import styled from 'styled-components';
import ButtonBs from '@bootstrap-styled/v4/lib/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import classnames from 'classnames';
import { translate } from 'ra-core';

import Responsive from '../layout/Responsive';

const ButtonRa = styled(ButtonBs)`
  ${props => `
    &.btn-secondary {
      text-decoration: none;
      border: none;
      background: transparent;
      color: ${props.theme['$brand-primary']};
      &:hover {
        background-color: rgba(63, 81, 181, 0.08);
        border: none;
        color: ${props.theme['$brand-primary']};
      }
    }
  `}
`;


const Button = ({
  alignIcon = 'left',
  children,
  className,
  color = 'secondary',
  disabled,
  label,
  size = 'sm',
  translate,
  ...rest
}) => (
  <Responsive
    small={
      label && !disabled ? (
        <Tooltip title={translate(label, { _: label })}>
          <IconButton
            aria-label={translate(label, { _: label })}
            className={className}
            color={color}
            {...rest}
          >
            {children}
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          className={className}
          color={color}
          disabled={disabled}
          {...rest}
        >
          {children}
        </IconButton>
      )
    }
    medium={(
      <ButtonRa
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
    )}
  />
);

Button.propTypes = {
  alignIcon: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', '', 'lg']),
  translate: PropTypes.func.isRequired,
};

Button.defaultProps = {
  size: 'sm',
};


const enhance = compose(
  translate
);

/** @component */
export default enhance(Button);
