import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Button from '@bootstrap-styled/v4/lib/Button';

import { FieldTitle, translate } from 'ra-core';

// remove the sort icons when not active
const styles = {
    icon: {
        display: 'none',
    },
    active: {
        '& $icon': {
            display: 'inline',
        },
    },
};

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
        className={classnames(className, 'p-0', field.props.headerClassName)}
        {...rest}
    >
        {field.props.sortable !== false &&
        (field.props.sortBy || field.props.source) ? (
              <Button
                tag='span'
                color="secondary"
                className="border-0 w-100 rounded-0"
                active={field.props.source === currentSort.field}
                onClick={updateSort}
                data-sort={field.props.source}
              >
                <FieldTitle
                  label={field.props.label}
                  source={field.props.source}
                  resource={resource}
                />
                {field.props.source === currentSort.field ? (
                  currentSort.order === 'ASC' ? (
                    "UP"
                  ) : (
                    "DOWN"
                  )
                ) : (
                  false
                )}
              </Button>
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
        (props, nextProps) =>
            props.isSorting !== nextProps.isSorting ||
            (nextProps.isSorting &&
                props.currentSort.order !== nextProps.currentSort.order)
    ),
    translate,
);

export default enhance(DatagridHeaderCell);
