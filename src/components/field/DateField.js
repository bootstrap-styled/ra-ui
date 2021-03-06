import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import pure from 'recompose/pure';

import sanitizeRestProps from './sanitizeRestProps';

const TypographyDateField = styled.div`
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.46429em;
`;

const toLocaleStringSupportsLocales = (() => {
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  try {
    new Date().toLocaleString('i');
  } catch (error) {
    return error instanceof RangeError;
  }
  return false;
})();

/**
 * Display a date value as a locale string.
 *
 * Uses Intl.DateTimeFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs date as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 * @example
 * <DateField source="published_at" />
 * // renders the record { id: 1234, published_at: new Date('2012-11-07') } as
 * <span>07/11/2012</span>
 *
 * <DateField source="published_at" className="red" />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span class="red">07/11/2012</span>
 *
 * <DateField source="share" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>Wednesday, November 7, 2012</span>
 *
 * <DateField source="price" locales="fr-FR" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>mercredi 7 novembre 2012</span>
 */

export const DateField = ({
  className,
  locales,
  options,
  record,
  showTime = false,
  source,
  ...rest
}) => {
  if (!record) return null;
  const value = get(record, source);
  if (value == null) return null;
  const date = value instanceof Date ? value : new Date(value);
  const dateString = showTime
    ? toLocaleStringSupportsLocales
      ? date.toLocaleString(locales, options)
      : date.toLocaleString()
    : toLocaleStringSupportsLocales
      ? date.toLocaleDateString(locales, options)
      : date.toLocaleDateString();

  return (
    <TypographyDateField className={className} {...sanitizeRestProps(rest)}>
      {dateString}
    </TypographyDateField>
  );
};

DateField.propTypes = {
  addLabel: PropTypes.bool,
  basePath: PropTypes.string,
  className: PropTypes.string,
  cellClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  label: PropTypes.string,
  locales: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  options: PropTypes.object,
  record: PropTypes.object,
  showTime: PropTypes.bool,
  sortBy: PropTypes.string,
  source: PropTypes.string.isRequired,
};

const PureDateField = pure(DateField);

PureDateField.defaultProps = {
  addLabel: true,
};

export default PureDateField;
