import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import { startUndoable, crudDeleteMany } from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';
import { omit } from 'lodash';

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
      background-color: ${Color(props.theme.$red).fade(0.12).toString()}
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
    className: PropTypes.string,
    theme: PropTypes.shape({
      $red: PropTypes.string,
    }),
  };

  static defaultProps = {
    label: 'ra.action.delete',
    undoable: true,
    icon: <ActionDelete />,
    theme: {
      $red: '#d9534f',
    },
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
      className, label, icon, onClick, ...rest
    } = omit(this.props, ['theme']);
    return (
      <StyledButton
        onClick={this.handleClick}
        label={label}
        className={className}
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
