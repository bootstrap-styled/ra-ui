import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import inflection from 'inflection';
import {
  useTranslate,
  useDelete,
  useRefresh,
  useNotify,
  useRedirect,
  CRUD_DELETE,
} from 'ra-core';

import Confirm from '../layout/Confirm';
import Button from './Button';

const sanitizeRestProps = ({
  basePath,
  classes,
  filterValues,
  handleSubmit,
  handleSubmitWithRedirect,
  invalid,
  label,
  pristine,
  resource,
  saving,
  selectedIds,
  submitOnEnter,
  redirect,
  ...rest
}) => rest;

const DeleteWithConfirmButton = ({
  basePath,
  className,
  icon,
  label = 'ra.action.delete',
  onClick,
  record,
  resource,
  redirect: redirectTo,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const translate = useTranslate();
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();

  const [deleteOne, { loading }] = useDelete(
    resource,
    record && record.id,
    record,
    {
      action: CRUD_DELETE,
      onSuccess: () => {
        notify('ra.notification.deleted', 'info', { smart_count: 1 });
        redirect(redirectTo, basePath);
        refresh();
      },
      onFailure: error => notify(
        typeof error === 'string'
          ? error
          : error.message || 'ra.notification.http_error',
        'warning',
      ),
      undoable: false,
    },
  );

  const handleClick = e => {
    setOpen(true);
    e.stopPropagation();
  };

  const handleDialogClose = e => {
    setOpen(false);
    e.stopPropagation();
  };

  const handleDelete = useCallback(() => {
    deleteOne();
    if (typeof onClick === 'function') {
      onClick();
    }
  }, [deleteOne, onClick]);

  return (
    <>
      <Button
        color="danger"
        onClick={handleClick}
        label={label}
        className={classnames(
          'ra-delete-button',
          className,
        )}
        key="button"
        {...sanitizeRestProps(rest)}
      >
        {icon}
      </Button>
      <Confirm
        isOpen={open}
        loading={loading}
        title="ra.message.delete_title"
        content="ra.message.delete_content"
        translateOptions={{
          name: inflection.humanize(
            translate(`resources.${resource}.name`, {
              smart_count: 1,
              _: inflection.singularize(resource),
            }),
            true,
          ),
          id: record.id,
        }}
        onConfirm={handleDelete}
        onClose={handleDialogClose}
      />
    </>
  );
};

DeleteWithConfirmButton.propTypes = {
  basePath: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
  resource: PropTypes.string,
  icon: PropTypes.element,
};

DeleteWithConfirmButton.defaultProps = {
  redirect: 'list',
  icon: <FontAwesomeIcon icon="trash" />,
};

export default DeleteWithConfirmButton;
