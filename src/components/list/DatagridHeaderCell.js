import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

import styled from 'styled-components';
import { FieldTitle, translate } from 'ra-core';

const ThContainer = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-direction: inherit;
  justify-content: flex-start;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  user-select: none;
  background-color: transparent;
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
  &.active {
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const DatagridHeaderCell = ({
  className,
  field,
  currentSort,
  updateSort,
  resource,
  isSorting,
  translate,
  ...rest
}) => (
  <Th
    className={classnames(className, field.props.headerClassName)}
    {...rest}
  >
    {field.props.sortable !== false
    && (field.props.sortBy || field.props.source) ? (
        <ThContainer  // eslint-disable-line
          role="button"
          onClick={updateSort}
          data-sort={field.props.source}
          className={classnames({ active: field.props.source === currentSort.field })}
        >
          <FieldTitle
            label={field.props.label}
            source={field.props.source}
            resource={resource}
          />
          {field.props.source === currentSort.field ? (
            currentSort.order === 'ASC' ? (
              <ArrowUpward className="ml-2" />
            ) : (
              <ArrowDownward className="ml-2" />
            )
          ) : (
            false
          )}
        </ThContainer>
      ) : (
        <FieldTitle
          label={field.props.label}
          source={field.props.source}
          resource={resource}
        />
      )}
  </Th>
);

DatagridHeaderCell.propTypes = {
  className: PropTypes.string,
  field: PropTypes.element,
  currentSort: PropTypes.shape({
    sort: PropTypes.string,
    order: PropTypes.string,
  }).isRequired,
  isSorting: PropTypes.bool,
  sortable: PropTypes.bool,
  resource: PropTypes.string,
  translate: PropTypes.func.isRequired,
  updateSort: PropTypes.func.isRequired,
};

const enhance = compose(
  shouldUpdate(
    (props, nextProps) => props.isSorting !== nextProps.isSorting
      || (nextProps.isSorting
        && props.currentSort.order !== nextProps.currentSort.order)
  ),
  translate,
);

export default enhance(DatagridHeaderCell);
