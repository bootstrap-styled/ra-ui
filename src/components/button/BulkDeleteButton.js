import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import { crudDeleteMany, startUndoable } from 'ra-core';

import Button from './Button';

const sanitizeRestProps = ({
  basePath,
  dispatchCrudDeleteMany,
  filterValues,
  label,
  resource,
  selectedIds,
  startUndoable,
  undoable,
  ...rest
}) => rest;

// const styles = theme => ({
//     deleteButton: {
//         color: theme.palette.error.main,
//         '&:hover': {
//             backgroundColor: fade(theme.palette.error.main, 0.12),
//             // Reset on mouse devices
//             '@media (hover: none)': {
//                 backgroundColor: 'transparent',
//             },
//         },
//     },
// });

class BulkDeleteButton extends Component {
    static propTypes = {
      basePath: PropTypes.string,
      dispatchCrudDeleteMany: PropTypes.func.isRequired,
      label: PropTypes.string,
      resource: PropTypes.string.isRequired,
      startUndoable: PropTypes.func,
      selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
      undoable: PropTypes.bool,
      icon: PropTypes.element,
    };

    static defaultProps = {
      label: 'ra.action.delete',
      undoable: true,
      icon: <ActionDelete />,
    };

    handleClick = () => {
      const {
        basePath,
        dispatchCrudDeleteMany,
        resource,
        selectedIds,
        startUndoable,
        undoable,
        onClick,
      } = this.props;
      if (undoable) {
        startUndoable(crudDeleteMany(resource, selectedIds, basePath));
      } else {
        dispatchCrudDeleteMany(resource, selectedIds, basePath);
      }

      if (typeof onClick === 'function') {
        onClick();
      }
    };

    render() {
      const {
        label, icon, ...rest
      } = this.props;
      return (
        <Button
          onClick={this.handleClick}
          label={label}
          {...sanitizeRestProps(rest)}
        >
          {icon}
        </Button>
      );
    }
}

const EnhancedBulkDeleteButton = compose(
  connect(
    undefined,
    {
      startUndoable,
      dispatchCrudDeleteMany: crudDeleteMany,
    }
  ),
)(BulkDeleteButton);

export default EnhancedBulkDeleteButton;
