import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ActionDelete from '@material-ui/icons/Delete';
import inflection from 'inflection';
import { translate, crudDeleteMany } from 'ra-core';
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

const StyledButton = styled(Button)`
  ${props => `
    color: ${props.theme.$red} 
    &:hover {
      background-color: ${Color(props.theme.$red.fade(0.12).toString())}
    }
  `}
`;

class BulkDeleteWithConfirmButton extends Component {
  static propTypes = {
    basePath: PropTypes.string,
    crudDeleteMany: PropTypes.func.isRequired,
    label: PropTypes.string,
    resource: PropTypes.string.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
    icon: PropTypes.element,
  };

  static defaultProps = {
    label: 'ra.action.delete',
    icon: <ActionDelete />,
  };

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
      basePath,
      crudDeleteMany,
      resource,
      selectedIds,
      onClick,
    } = this.props;

    crudDeleteMany(resource, selectedIds, basePath);

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  render() {
    const {
      classes,
      label,
      icon,
      onClick,
      resource,
      selectedIds,
      translate,
      ...rest
    } = this.props;
    return (
      <Fragment>
        <StyledButton
          onClick={this.handleClick}
          label={label}
          {...sanitizeRestProps(rest)}
        >
          {icon}
        </StyledButton>
        <Confirm
          isOpen={this.state.isOpen}
          title="ra.message.bulk_delete_title"
          content="ra.message.bulk_delete_content"
          translateOptions={{
            smart_count: selectedIds.length,
            name: inflection.humanize(
              translate(`resources.${resource}.name`, {
                smart_count: selectedIds.length,
                _: inflection.inflect(
                  resource,
                  selectedIds.length
                ),
              }),
              true
            ),
          }}
          onConfirm={this.handleDelete}
          onClose={this.handleDialogClose}
        />
      </Fragment>
    );
  }
}

const EnhancedBulkDeleteWithConfirmButton = compose(
  connect(
    undefined,
    { crudDeleteMany }
  ),
  translate,
)(BulkDeleteWithConfirmButton);

export default EnhancedBulkDeleteWithConfirmButton;
