import React from 'react';
import PropTypes from 'prop-types';
import shouldUpdate from 'recompose/shouldUpdate';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';
import classnames from 'classnames';

import DatagridRow from './DatagridRow';

const DatagridBody = ({
  basePath,
  children,
  className,
  data,
  expand,
  hasBulkActions,
  hover,
  ids,
  isLoading,
  onToggleItem,
  resource,
  row,
  rowClick,
  rowStyle,
  selectedIds,
  styles,
  version,
  ...rest
}) => (
  <Tbody className={classnames('datagrid-body', className)} {...rest}>
    {ids.map((id, rowIndex) => React.cloneElement(
      row,
      {
        basePath,
        className,
        expand,
        hasBulkActions,
        hover,
        id,
        key: id,
        onToggleItem,
        record: data[id],
        resource,
        rowClick,
        selected: selectedIds.includes(id),
        style: rowStyle ? rowStyle(data[id], rowIndex) : null,
      },
      children
    ))}
  </Tbody>
);

DatagridBody.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  expand: PropTypes.node,
  hasBulkActions: PropTypes.bool.isRequired,
  hover: PropTypes.bool,
  ids: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool,
  onToggleItem: PropTypes.func,
  resource: PropTypes.string,
  row: PropTypes.element.isRequired,
  rowClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rowStyle: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  styles: PropTypes.object,
  version: PropTypes.number,
};

DatagridBody.defaultProps = {
  data: {},
  hasBulkActions: false,
  ids: [],
  row: <DatagridRow />,
};

const areArraysEqual = (arr1, arr2) => arr1.length == arr2.length && arr1.every((v, i) => v === arr2[i]); // eslint-disable-line eqeqeq

const PureDatagridBody = shouldUpdate(
  (props, nextProps) => props.version !== nextProps.version
    || nextProps.isLoading === false
    || !areArraysEqual(props.ids, nextProps.ids)
    || props.data !== nextProps.data
)(DatagridBody);

// trick material-ui Table into thinking this is one of the child type it supports
PureDatagridBody.muiName = 'TableBody';

export default PureDatagridBody;
