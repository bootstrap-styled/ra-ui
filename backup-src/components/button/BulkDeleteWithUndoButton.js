import React from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@material-ui/icons/Delete';
import {
  useDeleteMany,
  useRefresh,
  useNotify,
  useUnselectAll,
  CRUD_DELETE_MANY,
} from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';

import Button from './Button';

const sanitizeRestProps = ({
  basePath,
  classes,
  dispatchCrudDeleteMany,
  filterValues,
  label,
  resource,
  selectedIds,
  startUndoable,
  undoable,
  ...rest
}) => rest;

const DeleteButton = styled(Button)`
  ${props => `
    color: ${props.theme.$red} 
    &:hover {
      background-color: ${Color(props.theme.$red).fade(0.12).toString()};
      // Reset on mouse devices
      @media (hover: none) {
        background-color: transparent;
      }
    }
  `}
`;

const BulkDeleteWithUndoButton = ({
  basePath,
  classes: classesOverride,
  icon,
  label,
  onClick,
  resource,
  selectedIds,
  startUndoable,
  ...rest
}) => {
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const refresh = useRefresh();
  const [deleteMany, { loading }] = useDeleteMany(resource, selectedIds, {
    action: CRUD_DELETE_MANY,
    onSuccess: () => {
      notify(
        'ra.notification.deleted',
        'info',
        { smart_count: selectedIds.length },
        true
      );
      unselectAll(resource);
      refresh();
    },
    onFailure: error => notify(
      typeof error === 'string'
        ? error
        : error.message || 'ra.notification.http_error',
      'warning'
    ),
    undoable: true,
  });

  const handleClick = () => {
    deleteMany();
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <DeleteButton
      onClick={handleClick}
      label={label}
      disabled={loading}
      {...sanitizeRestProps(rest)}
    >
      {icon}
    </DeleteButton>
  );
};
BulkDeleteWithUndoButton.propTypes = {
  basePath: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  resource: PropTypes.string.isRequired,
  startUndoable: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon: PropTypes.element,
};

BulkDeleteWithUndoButton.defaultProps = {
  label: 'ra.action.delete',
  undoable: true,
  icon: <ActionDelete />,
};

export default BulkDeleteWithUndoButton;
