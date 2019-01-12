import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '@bootstrap-styled/v4/lib/Label';
import Input from '@bootstrap-styled/v4/lib/Input';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import { addField, FieldTitle } from 'ra-core';

import sanitizeRestProps from './sanitizeRestProps';

export class BooleanInput extends Component {
    handleChange = (event, value) => {
        this.props.input.onChange(value);
    };

    render() {
        const {
            className,
            id,
            input,
            isRequired,
            label,
            source,
            resource,
            options,
            ...rest
        } = this.props;

        const { value, ...inputProps } = input;

        return (
          <FormGroup className={classnames(className, 'mr-5')} check {...sanitizeRestProps(rest)}>
            <Label check>
              <Input
                type="checkbox"
                className={classnames(classNameInput, 'mr-2')}
                checked={!!value}
                onChange={this.handleChange}
                size={size}
                {...inputProps}
              />
              <FieldTitle
                label={label}
                source={source}
                resource={resource}
                isRequired={isRequired}
              />
            </Label>
          </FormGroup>
        );
    }
}

BooleanInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    resource: PropTypes.string,
    source: PropTypes.string,
    options: PropTypes.object,
};

BooleanInput.defaultProps = {
    options: {},
};

export default addField(BooleanInput);
