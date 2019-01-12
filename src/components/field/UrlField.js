import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import A from '@bootstrap-styled/v4/lib/A';
import sanitizeRestProps from './sanitizeRestProps';

const UrlField = ({ className, source, record = {}, ...rest }) => (
    <A
        className={className}
        href={get(record, source)}
        {...sanitizeRestProps(rest)}
    >
        {get(record, source)}
    </A>
);

UrlField.propTypes = {
    addLabel: PropTypes.bool,
    basePath: PropTypes.string,
    className: PropTypes.string,
    cellClassName: PropTypes.string,
    headerClassName: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    sortBy: PropTypes.string,
    source: PropTypes.string.isRequired,
};

const PureUrlField = pure(UrlField);

PureUrlField.defaultProps = {
    addLabel: true,
};

export default PureUrlField;
