import React, { Component, Fragment, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import Button from '@bootstrap-styled/v4/lib/Button';
import Input from '@bootstrap-styled/v4/lib/Input';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import Label from '@bootstrap-styled/v4/lib/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { linkToRecord } from 'ra-core';
import styled from 'styled-components';

import DatagridCell from './DatagridCell';

const FormCheckBoxBs = styled(FormGroup)`
  display: inline-flex;
  transition: none;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  text-align: center;
`;

const sanitizeRestProps = ({
  basePath,
  children,
  className,
  rowClick,
  id,
  isLoading,
  onToggleItem,
  push,
  record,
  resource,
  selected,
  ...rest
}) => rest;

class DatagridRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleToggleExpanded = event => {
    this.setState(state => ({ expanded: !state.expanded }));
    event.stopPropagation();
  };

  handleToggle = event => {
    this.props.onToggleItem(this.props.id);
    event.stopPropagation();
  };

  handleClick = async event => {
    const {
      basePath, rowClick, id, record,
    } = this.props;

    if (!rowClick) return;

    if (typeof rowClick === 'function') {
      const path = await rowClick(id, basePath, record);
      this.handleRedirection(path, event);
      return;
    }

    this.handleRedirection(rowClick, event);
  };

  handleRedirection = (path, event) => {
    const { basePath, id, push } = this.props;

    if (path === 'edit') {
      push(linkToRecord(basePath, id));
      return;
    }
    if (path === 'show') {
      push(linkToRecord(basePath, id, 'show'));
      return;
    }

    if (path === 'expand') {
      this.handleToggleExpanded(event);
      return;
    }

    push(path);
  };

  render() {
    const {
      basePath,
      children,
      className,
      expand,
      hasBulkActions,
      id,
      record,
      resource,
      selected,
      ...rest
    } = this.props;
    const { expanded } = this.state;
    return (
      <Fragment>
        <Tr
          className={className}
          key={id}
          onClick={this.handleClick}
          {...sanitizeRestProps(rest)}
        >
          {expand && (
            <Td>
              <Button
                tag="div"
                tabIndex={-1}
                aria-hidden="true"
                onClick={this.handleToggleExpanded}
              >
                <ExpandMoreIcon />
              </Button>
            </Td>
          )}
          {hasBulkActions && (
            <Td className="p-0">
              <FormCheckBoxBs className="mb-0">
                <Label>
                  <Input
                    type="checkbox"
                    className="select-item cursor-pointer"
                    checked={selected}
                    onChange={this.handleToggle}
                  />
                </Label>
              </FormCheckBoxBs>
            </Td>
          )}
          {React.Children.map(
            children,
            (field, index) => isValidElement(field) ? (
              <DatagridCell
                key={`${id}-${field.props.source || index}`}
                className={classnames(
                  `column-${field.props.source}`,
                )}
                record={record}
                id={id}
                {...{ field, basePath, resource }}
              />
            ) : null
          )}
        </Tr>
        {expand
        && expanded && (
          <Tr key={`${id}-expand`}>
            <Td>
              {React.cloneElement(expand, {
                record,
                basePath,
                resource,
                id: String(id),
              })}
            </Td>
          </Tr>
        )}
      </Fragment>
    );
  }
}

DatagridRow.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  expand: PropTypes.node,
  hasBulkActions: PropTypes.bool.isRequired,
  id: PropTypes.any,
  onToggleItem: PropTypes.func,
  push: PropTypes.func,
  record: PropTypes.object.isRequired,
  resource: PropTypes.string,
  rowClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  selected: PropTypes.bool,
};

DatagridRow.defaultProps = {
  hasBulkActions: false,
  record: {},
  selected: false,
};

// wat? TypeScript looses the displayName if we don't set it explicitly
DatagridRow.displayName = 'DatagridRow';

export default connect(
  null,
  { push }
)(DatagridRow);
