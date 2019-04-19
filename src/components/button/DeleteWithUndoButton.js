import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import { translate, crudDelete, startUndoable } from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';
import { omit } from 'lodash';

import Button from './Button';

export const sanitizeRestProps = ({
  basePath,
  dispatchCrudDelete,
  filterValues,
  handleSubmit,
  handleSubmitWithRedirect,
  invalid,
  label,
  pristine,
  resource,
  saving,
  selectedIds,
  startUndoable,
  undoable,
  redirect,
  submitOnEnter,
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

class DeleteWithUndoButton extends Component {
  handleDelete = event => {
    event.stopPropagation();
    const {
      startUndoable,
      resource,
      record,
      basePath,
      redirect,
      onClick,
    } = this.props;

    startUndoable(
      crudDelete(resource, record.id, record, basePath, redirect)
    );

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  render() {
    const {
      label = 'ra.action.delete',
      className,
      icon,
      onClick,
      ...rest
    } = omit(this.props, ['theme']);

    return (
      <StyledButton
        onClick={this.handleDelete}
        label={label}
        className={classnames(
          'ra-delete-button',
          className
        )}
        {...sanitizeRestProps(rest)}
      >
        {icon}
      </StyledButton>
    );
  }
}

DeleteWithUndoButton.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
  resource: PropTypes.string.isRequired,
  startUndoable: PropTypes.func,
  translate: PropTypes.func,
  icon: PropTypes.element,
  theme: PropTypes.shape({
    $red: PropTypes.string,
  }),
};

DeleteWithUndoButton.defaultProps = {
  redirect: 'list',
  undoable: true,
  icon: <ActionDelete />,
  theme: {
    $red: '#d9534f',
  },
};

export default compose(
  connect(
    null,
    { startUndoable }
  ),
  translate,
)(DeleteWithUndoButton);
