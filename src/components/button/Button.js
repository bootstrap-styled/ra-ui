import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import ButtonBs from '@bootstrap-styled/v4/lib/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import classnames from 'classnames';
import { translate } from 'ra-core';

import Responsive from '../layout/Responsive';


const Button = ({
    alignIcon = 'left',
    children,
    className,
    color = 'primary',
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
        medium={
            <ButtonBs
                className={classnames('d-inline-flex align-items-center', className)}
                color={color}
                size={size}
                aria-label={label ? translate(label, { _: label }) : undefined}
                disabled={disabled}
                {...rest}
            >
                {alignIcon === 'left' &&
                    children &&
                    React.cloneElement(children)}
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
                {alignIcon === 'right' &&
                    children &&
                    React.cloneElement(children)}
            </ButtonBs>
        }
    />
);

Button.propTypes = {
    alignIcon: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.string,
    translate: PropTypes.func.isRequired,
};

const enhance = compose(
    translate
);

/** @component */
export default enhance(Button);
