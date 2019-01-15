import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Labeled from '../input/Labeled';

const sanitizeRestProps = ({ basePath, record, ...rest }) => rest;

export const FormInput = ({ classes, input, ...rest }) =>
    input ? (
        <div
            className={classnames(
                'ra-input',
                `ra-input-${input.props.source}`,
                input.props.formClassName
            )}
        >
            {input.props.addLabel ? (
              console.log(input.props)
            ) : (
              console.log(input.props)

            )}
        </div>
    ) : null;

FormInput.propTypes = {
    className: PropTypes.string,
    input: PropTypes.object,
};

// wat? TypeScript looses the displayName if we don't set it explicitly
FormInput.displayName = 'FormInput';

export default FormInput;
