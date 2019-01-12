import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import pure from 'recompose/pure';
import Badge from '@bootstrap-styled/v4/lib/Badge';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import sanitizeRestProps from './sanitizeRestProps';

export const ChipField = ({
    className,
    source,
    record = {},
    ...rest
}) => {
    return (
        <Badge
          className={classnames('m-1', className)}
            {...sanitizeRestProps(rest)}
        >
          {get(record, source)}
        </Badge>
    );
};

ChipField.propTypes = {
    className: PropTypes.string,
    elStyle: PropTypes.object,
    sortBy: PropTypes.string,
    source: PropTypes.string.isRequired,
    record: PropTypes.object,
};

// wat? TypeScript looses the displayName if we don't set it explicitly
ChipField.displayName = 'ChipField';

const PureChipField = pure(ChipField);

export default PureChipField;
