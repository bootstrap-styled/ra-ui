import React from 'react';
import { useTranslate, ValidationError } from 'ra-core';

const InputHelperText = ({
  helperText,
  touched,
  error,
}) => {
  const translate = useTranslate();

  return touched && error ? (
    <ValidationError error={error} />
  ) : helperText ? (
    <>{translate(helperText, { _: helperText })}</>
  ) : null;
};

export default InputHelperText;
