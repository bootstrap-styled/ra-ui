import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Toolbar from '@material-ui/core/Toolbar';
import { translate, sanitizeListRestProps } from 'ra-core';

import CardActions from '../layout/CardActions';

// const styles = theme => ({
//   toolbar: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 3,
//     color:
//       theme.palette.type === 'light'
//         ? theme.palette.primary.main
//         : theme.palette.text.primary,
//     justifyContent: 'space-between',
//     backgroundColor:
//       theme.palette.type === 'light'
//         ? lighten(theme.palette.primary.light, 0.85)
//         : theme.palette.primary.dark,
//     minHeight: 64,
//     height: 64,
//     transition: `${theme.transitions.create(
//       'height'
//     )}, ${theme.transitions.create('min-height')}`,
//   },
//   toolbarCollapsed: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 3,
//     minHeight: 0,
//     height: 0,
//     overflowY: 'hidden',
//     transition: theme.transitions.create('all'),
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// });

const BulkActionsToolbar = ({
  basePath,
  filterValues,
  label,
  resource,
  selectedIds,
  translate,
  children,
  ...rest
}) => selectedIds.length > 0 ? (
  <Toolbar
    data-test="bulk-actions-toolbar"
    {...sanitizeListRestProps(rest)}
  >
    <div>
      <h2>
        {translate(label, {
          _: label,
          smart_count: selectedIds.length,
        })}
      </h2>
    </div>
    <CardActions>
      {Children.map(children, child => cloneElement(child, {
        basePath,
        filterValues,
        resource,
        selectedIds,
      }))}
    </CardActions>
  </Toolbar>
) : (
  <Toolbar />
);

BulkActionsToolbar.propTypes = {
  children: PropTypes.node,
  basePath: PropTypes.string,
  filterValues: PropTypes.object,
  label: PropTypes.string,
  resource: PropTypes.string,
  selectedIds: PropTypes.array,
  translate: PropTypes.func.isRequired,
};

BulkActionsToolbar.defaultProps = {
  label: 'ra.action.bulk_actions',
};

const enhance = compose(
  translate,
);

export default enhance(BulkActionsToolbar);
