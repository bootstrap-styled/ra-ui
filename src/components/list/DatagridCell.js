import React from 'react';
import PropTypes from 'prop-types';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import classnames from 'classnames';

const sanitizeRestProps = ({
    cellClassName,
    className,
    field,
    formClassName,
    headerClassName,
    record,
    basePath,
    resource,
    ...rest
}) => rest;

export const DatagridCell = ({
    className,
    field,
    record,
    basePath,
    resource,
    ...rest
}) => (
    <Td
        style={{ verticalAlign: 'middle', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        className={classnames(className, 'p-0 align-middle')}
        {...sanitizeRestProps(rest)}
    >
        {React.cloneElement(field, {
          record,
          basePath: field.props.basePath || basePath,
          resource,
        })}
    </Td>
);

DatagridCell.propTypes = {
    className: PropTypes.string,
    field: PropTypes.element,
    record: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    basePath: PropTypes.string,
    resource: PropTypes.string,
};

// wat? TypeScript looses the displayName if we don't set it explicitly
DatagridCell.displayName = 'DatagridCell';

export default DatagridCell;
