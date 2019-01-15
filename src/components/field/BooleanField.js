import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import FalseIcon from '@material-ui/icons/Clear';
import TrueIcon from '@material-ui/icons/Done';
import styled from 'styled-components';

const Typography = styled.div`
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.46429em;
`;


import sanitizeRestProps from './sanitizeRestProps';

export const BooleanField = ({ className, source, record = {}, ...rest }) => {
    if (get(record, source) === false) {
        return (
            <Typography
                className={className}
                {...sanitizeRestProps(rest)}
            >
                <FalseIcon />
            </Typography>
        );
    }

    if (get(record, source) === true) {
        return (
            <Typography
                className={className}
                {...sanitizeRestProps(rest)}
            >
                <TrueIcon />
            </Typography>
        );
    }

    return (
        <span
            className={className}
            {...sanitizeRestProps(rest)}
        />
    );
};

BooleanField.propTypes = {
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

const PureBooleanField = pure(BooleanField);

PureBooleanField.defaultProps = {
    addLabel: true,
};

export default PureBooleanField;
