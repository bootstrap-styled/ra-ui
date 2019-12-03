import React from 'react';
import PropTypes from 'prop-types';
import { useInput, FieldTitle } from 'ra-core';

import ResettableTextField from './ResettableTextField';
import InputHelperText from './InputHelperText';
import sanitizeRestProps from './sanitizeRestProps';

/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
export const TextInput = ({
  label,
  format,
  helperText,
  onBlur,
  onFocus,
  onChange,
  options,
  parse,
  resource,
  source,
  validate,
  ...rest
}) => {
  const {
    id,
    input,
    isRequired,
    meta: { error, touched },
  } = useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'text',
    validate,
    ...rest,
  });

  return (
    <ResettableTextField
      id={id}
      {...input}
      label={
        label !== ''
        && label !== false && (
          <FieldTitle
            label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />
        )
      }
      error={!!(touched && error)}
      helperText={
        (touched && error) || helperText ? (
          <InputHelperText
            touched={touched}
            error={error}
            helperText={helperText}
          />
        ) : null
      }
      {...options}
      {...sanitizeRestProps(rest)}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
};

TextInput.defaultProps = {
  options: {},
};

export default TextInput;
