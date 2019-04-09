import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import { startUndoable, crudDeleteMany } from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';

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

const StyledButton = styled(Button)`
  ${props => `
    color: ${props.theme.$red} 
    &:hover {
      background-color: ${Color(props.theme.$red.fade(0.12).toString())}
    }
  `}
`;

class BulkDeleteWithUndoButton extends Component {
  static propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    resource: PropTypes.string.isRequired,
    startUndoable: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
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
      resource,
      selectedIds,
      startUndoable,
      onClick,
    } = this.props;

    startUndoable(crudDeleteMany(resource, selectedIds, basePath));

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  render() {
    const {
      classes, label, icon, onClick, ...rest
    } = this.props;
    return (
      <StyledButton
        onClick={this.handleClick}
        label={label}
        className={classes.deleteButton}
        {...sanitizeRestProps(rest)}
      >
        {icon}
      </StyledButton>
    );
  }
}

const EnhancedBulkDeleteWithConfirmButton = compose(
  connect(
    undefined,
    { startUndoable }
  ),
)(BulkDeleteWithUndoButton);

export default EnhancedBulkDeleteWithConfirmButton;
