import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@material-ui/icons/Delete';
import inflection from 'inflection';
import {
  useTranslate,
  useDeleteMany,
  useRefresh,
  useNotify,
  useUnselectAll,
  CRUD_DELETE_MANY,
} from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';
import Confirm from '../layout/Confirm';
import Button from './Button';

const sanitizeRestProps = ({
  basePath,
  crudDeleteMany,
  filterValues,
  label,
  resource,
  selectedIds,
  ...rest
}) => rest;

const DeleteButton = styled(Button)`
  ${props => `
    color: ${props.theme.$red} 
    &:hover {
      background-color: ${Color(props.theme.$red.fade(0.12).toString())};
      // Reset on mouse devices
      @media (hover: none) {
        background-color: transparent;
      }
    }
  `}
`;

const BulkDeleteWithConfirmButton = ({
  basePath,
  crudDeleteMany,
  icon,
  label,
  onClick,
  resource,
  selectedIds,
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const refresh = useRefresh();
  const translate = useTranslate();
  const [deleteMany, { loading }] = useDeleteMany(resource, selectedIds, {
    action: CRUD_DELETE_MANY,
    onSuccess: () => {
      refresh();
      notify('ra.notification.deleted', 'info', {
        smart_count: selectedIds.length,
      });
      unselectAll(resource);
    },
    onFailure: error => notify(
      typeof error === 'string'
        ? error
        : error.message || 'ra.notification.http_error',
      'warning'
    ),
  });

  const handleClick = e => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteMany();

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <Fragment>
      <DeleteButton
        onClick={handleClick}
        label={label}
        {...sanitizeRestProps(rest)}
      >
        {icon}
      </DeleteButton>
      <Confirm
        isOpen={isOpen}
        loading={loading}
        title="ra.message.bulk_delete_title"
        content="ra.message.bulk_delete_content"
        translateOptions={{
          smart_count: selectedIds.length,
          name: inflection.humanize(
            translate(`resources.${resource}.name`, {
              smart_count: selectedIds.length,
              _: inflection.inflect(resource, selectedIds.length),
            }),
            true
          ),
        }}
        onConfirm={handleDelete}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

BulkDeleteWithConfirmButton.propTypes = {
  basePath: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  resource: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon: PropTypes.element,
};

BulkDeleteWithConfirmButton.defaultProps = {
  label: 'ra.action.delete',
  icon: <ActionDelete />,
};

export default BulkDeleteWithConfirmButton;
