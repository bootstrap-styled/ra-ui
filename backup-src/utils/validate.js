/* eslint-disable no-underscore-dangle */
/* @link http://stackoverflow.com/questions/46155/validate-email-address-in-javascript */
const isEmpty = value => typeof value === 'undefined' || value === null || value === '';

const getMessage = (message, messageArgs, value, values, props) => typeof message === 'function'
  ? message({
    args: messageArgs,
    value,
    values,
    ...props,
  })
  : props.translate(message, {
    _: message,
    ...messageArgs,
  });


export const regexDoesNotContain = (pattern, message = 'ra.validation.regex.doesNotContain') => (
  value,
  values,
  props
) => !isEmpty(value) && typeof value === 'string' && pattern.test(value)
  ? getMessage(message, { pattern }, value, values, props)
  : undefined;
