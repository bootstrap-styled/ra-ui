/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { ListController, getListControllerProps } from 'ra-core';

import Title from '../layout/Title';
import ListToolbar from './ListToolbar';
import DefaultPagination from './Pagination';
import BulkDeleteButton from '../button/BulkDeleteButton';
import BulkActionsToolbar from './BulkActionsToolbar';
import DefaultActions from './ListActions';
import CardContent from '../layout/CardContent';

const DefaultBulkActionButtons = props => <BulkDeleteButton {...props} />;

const sanitizeRestProps = ({
  actions,
  basePath,
  bulkActions,
  changeListParams,
  children,
  className,
  crudGetList,
  currentSort,
  data,
  defaultTitle,
  displayedFilters,
  exporter,
  filter,
  filterDefaultValues,
  filters,
  filterValues,
  hasCreate,
  hasEdit,
  hasList,
  hasShow,
  hideFilter,
  history,
  ids,
  isLoading,
  loadedOnce,
  locale,
  location,
  match,
  onSelect,
  onToggleItem,
  onUnselectItems,
  options,
  page,
  pagination,
  params,
  permissions,
  perPage,
  push,
  query,
  refresh,
  resource,
  selectedIds,
  setFilters,
  setPage,
  setPerPage,
  setSelectedIds,
  setSort,
  showFilter,
  sort,
  theme,
  title,
  toggleItem,
  total,
  translate,
  version,
  ...rest
}) => rest;

export const ListView = ({
  // component props
  actions,
  aside,
  filter,
  filters,
  bulkActions, // deprecated
  bulkActionButtons,
  pagination,
  // overridable by user
  children,
  className,
  exporter,
  title,
  ...rest
}) => {
  const { defaultTitle, version } = rest;
  const controllerProps = getListControllerProps(rest);
  return (
    <div
      className={classnames('list-page d-flex', className)}
      {...sanitizeRestProps(rest)}
    >
      <Title title={title} defaultTitle={defaultTitle} />
      <CardContent>
        {bulkActions !== false
        && bulkActionButtons !== false
        && bulkActionButtons
        && !bulkActions && (
          <BulkActionsToolbar {...controllerProps}>
            {bulkActionButtons}
          </BulkActionsToolbar>
        )}
        {(filters || actions) && (
          <ListToolbar
            filters={filters}
            {...controllerProps}
            actions={actions}
            bulkActions={bulkActions}
            exporter={exporter}
          />
        )}
        <div key={version}>
          {children
          && cloneElement(Children.only(children), {
            ...controllerProps,
            hasBulkActions:
              bulkActions !== false
              && bulkActionButtons !== false,
          })}
          {pagination
          && cloneElement(pagination, controllerProps)}
        </div>
      </CardContent>
      {aside && cloneElement(aside, controllerProps)}
    </div>
  );
};

ListView.propTypes = {
  actions: PropTypes.element,
  aside: PropTypes.node,
  basePath: PropTypes.string,
  bulkActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  bulkActionButtons: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  children: PropTypes.element,
  className: PropTypes.string,
  currentSort: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.string,
  }),
  data: PropTypes.object,
  defaultTitle: PropTypes.string,
  displayedFilters: PropTypes.object,
  exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  filterDefaultValues: PropTypes.object,
  filters: PropTypes.element,
  filterValues: PropTypes.object,
  hasCreate: PropTypes.bool,
  hideFilter: PropTypes.func,
  ids: PropTypes.array,
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
  onToggleItem: PropTypes.func,
  onUnselectItems: PropTypes.func,
  page: PropTypes.number,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  perPage: PropTypes.number,
  refresh: PropTypes.func,
  resource: PropTypes.string,
  selectedIds: PropTypes.array,
  setFilters: PropTypes.func,
  setPage: PropTypes.func,
  setPerPage: PropTypes.func,
  setSort: PropTypes.func,
  showFilter: PropTypes.func,
  title: PropTypes.any,
  total: PropTypes.number,
  translate: PropTypes.func,
  version: PropTypes.number,
};

ListView.defaultProps = {
  actions: <DefaultActions />,
  bulkActionButtons: <DefaultBulkActionButtons />,
  pagination: <DefaultPagination />,
};

/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * In Redux terms, <List> is a connected component, and <Datagrid> is a dumb component.
 *
 * Props:
 *   - title
 *   - perPage
 *   - sort
 *   - filter (the permanent filter to apply to the query)
 *   - actions
 *   - filters (a React Element used to display the filter form)
 *   - pagination
 *
 * @example
 *     const PostFilter = (props) => (
 *         <Filter {...props}>
 *             <TextInput label="Search" source="q" alwaysOn />
 *             <TextInput label="Title" source="title" />
 *         </Filter>
 *     );
 *     export const PostList = (props) => (
 *         <List {...props}
 *             title="List of posts"
 *             sort={{ field: 'published_at' }}
 *             filter={{ is_published: true }}
 *             filters={<PostFilter />}
 *         >
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="title" />
 *                 <EditButton />
 *             </Datagrid>
 *         </List>
 *     );
 */
export const List = props => (
  <ListController {...props}>
    {controllerProps => <ListView {...props} {...controllerProps} />}
  </ListController>
);

List.propTypes = {
  // the props you can change
  actions: PropTypes.element,
  aside: PropTypes.node,
  bulkActions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  bulkActionButtons: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  children: PropTypes.node,
  className: PropTypes.string,
  filter: PropTypes.object,
  filterDefaultValues: PropTypes.object,
  filters: PropTypes.element,
  pagination: PropTypes.element,
  perPage: PropTypes.number.isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.string,
  }),
  title: PropTypes.any,
  // the props managed by react-admin
  authProvider: PropTypes.func,
  hasCreate: PropTypes.bool.isRequired,
  hasEdit: PropTypes.bool.isRequired,
  hasList: PropTypes.bool.isRequired,
  hasShow: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  path: PropTypes.string,
  resource: PropTypes.string.isRequired,
};

List.defaultProps = {
  filter: {},
  perPage: 10,
};

export default List;
