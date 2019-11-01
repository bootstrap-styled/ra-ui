import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import inflection from 'inflection';
import { translate, crudDelete } from 'ra-core';
import styled from 'styled-components';
import Color from '@bootstrap-styled/color';

import Confirm from '../layout/Confirm';
import Button from './Button';

const sanitizeRestProps = ({
  basePath,
  crudDelete,
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

const StyledButton = styled(Button)`
  ${props => `
    color: ${props.theme.$red};
    &:hover {
      background-color: ${Color(props.theme.$red).fade(0.12).toString()}
    }
  `}
`;

class DeleteWithConfirmButton extends Component {
  state = { isOpen: false };

  handleClick = e => {
    this.setState({ isOpen: true });
    e.stopPropagation();
  };

  handleDialogClose = () => {
    this.setState({ isOpen: false });
  };

  handleDelete = () => {
    const {
      crudDelete, resource, record, basePath, redirect,
    } = this.props;
    crudDelete(resource, record.id, record, basePath, redirect);
  };

  render() {
    const {
      className,
      icon,
      label = 'ra.action.delete',
      onClick,
      record,
      resource,
      translate,
      ...rest
    } = this.props;
    return (
      <Fragment>
        <StyledButton
          onClick={this.handleClick}
          label={label}
          className={classnames(
            'ra-delete-button',
            className
          )}
          {...sanitizeRestProps(rest)}
        >
          {icon}
        </StyledButton>
        <Confirm
          isOpen={this.state.isOpen}
          title="ra.message.delete_title"
          content="ra.message.delete_content"
          translateOptions={{
            name: inflection.humanize(
              translate(`resources.${resource}.name`, {
                smart_count: 1,
                _: inflection.singularize(resource),
              }),
              true
            ),
            id: record.id,
          }}
          onConfirm={this.handleDelete}
          onClose={this.handleDialogClose}
        />
      </Fragment>
    );
  }
}

DeleteWithConfirmButton.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  crudDelete: PropTypes.func.isRequired,
  label: PropTypes.string,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
  resource: PropTypes.string.isRequired,
  translate: PropTypes.func,
  icon: PropTypes.element,
};

DeleteWithConfirmButton.defaultProps = {
  redirect: 'list',
  icon: <ActionDelete />,
};

export default compose(
  connect(
    null,
    { crudDelete }
  ),
  translate,
)(DeleteWithConfirmButton);
