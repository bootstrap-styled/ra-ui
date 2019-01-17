import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps } from 'ra-core';
import Table from '@bootstrap-styled/v4/lib/Table';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import FormCustom from '@bootstrap-styled/v4/lib/Form/FormCustom';
import Td from '@bootstrap-styled/v4/lib/Table/Td';

import classnames from 'classnames';

import DatagridHeaderCell from './DatagridHeaderCell';
import DatagridBody from './DatagridBody';
import DatagridLoading from './DatagridLoading';

/**
 * The Datagrid component renders a list of records as a table.
 * It is usually used as a child of the <List> and <ReferenceManyField> components.
 *
 * Props:
 *  - rowStyle
 *
 * @example Display all posts as a datagrid
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <Datagrid rowStyle={postRowStyle}>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="body" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 */
class Datagrid extends Component {
    updateSort = (event) => {
      event.stopPropagation();
      this.props.setSort(event.currentTarget.dataset.sort);
    };

    handleSelectAll = (event) => {
      const { onSelect, ids, selectedIds } = this.props;
      if (event.target.checked) {
        onSelect(
          ids.reduce(
            (idList, id) => idList.includes(id) ? idList : idList.concat(id),

            selectedIds
          )
        );
      } else {
        onSelect([]);
      }
    };

    render() {
      const {
        basePath,
        body,
        children,
        className,
        currentSort,
        data,
        expand,
        hasBulkActions,
        hover,
        ids,
        isLoading,
        loadedOnce, // eslint-disable-line react/prop-types
        onSelect,
        onToggleItem,
        resource,
        rowClick,
        rowStyle,
        selectedIds,
        setSort,
        total,
        version,
        ...rest
      } = this.props;

      /**
         * if loadedOnce is false, the list displays for the first time, and the dataProvider hasn't answered yet
         * if loadedOnce is true, the data for the list has at least been returned once by the dataProvider
         * if loadedOnce is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
         */
      if (loadedOnce === false) {
        return (
          <DatagridLoading
            className={className}
            expand={expand}
            hasBulkActions={hasBulkActions}
            nbChildren={React.Children.count(children)}
          />
        );
      }

      /**
         * Once loaded, the data for the list may be empty. Instead of
         * displaying the table header with zero data rows,
         * the datagrid displays nothing in this case.
         */
      if (!isLoading && (ids.length === 0 || total === 0)) {
        return null;
      }

      /**
         * After the initial load, if the data for the list isn't empty,
         * and even if the data is refreshing (e.g. after a filter change),
         * the datagrid displays the current data.
         */
      return (
        <Table
          className={classnames(className, 'mb-0')}
          style={{ tableLayout: 'fixed' }}
          {...sanitizeListRestProps(rest)}
        >
          <Thead>
            <Tr>
              {expand && (
                <Th />
              )}
              {hasBulkActions && (
                <Td className="py-0">
                  <FormCustom
                    className="select-all cursor-pointer mb-0"
                    checked={
                      selectedIds.length > 0
                                    && ids.length > 0
                                    && !ids.find(
                                      (it) => selectedIds.indexOf(it) === -1
                                    )
                    }
                    onChange={this.handleSelectAll}
                  />
                </Td>
              )}
              {React.Children.map(
                children,
                (field, index) => field ? (
                  <DatagridHeaderCell
                    className="p-0"
                    currentSort={currentSort}
                    field={field}
                    isSorting={
                      currentSort.field
                                            === (field.props.sortBy || field.props.source)
                    }
                    key={field.props.source || index}
                    resource={resource}
                    updateSort={this.updateSort}
                  />
                ) : null
              )}
            </Tr>
          </Thead>
          {React.cloneElement(
            body,
            {
              basePath,
              expand,
              rowClick,
              data,
              hasBulkActions,
              hover,
              ids,
              isLoading,
              onToggleItem,
              resource,
              rowStyle,
              selectedIds,
              version,
            },
            children
          )}
        </Table>
      );
    }
}

Datagrid.propTypes = {
  basePath: PropTypes.string,
  body: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  currentSort: PropTypes.shape({
    sort: PropTypes.string,
    order: PropTypes.string,
  }).isRequired,
  data: PropTypes.object.isRequired,
  expand: PropTypes.node,
  hasBulkActions: PropTypes.bool.isRequired,
  hover: PropTypes.bool,
  ids: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
  onToggleItem: PropTypes.func,
  resource: PropTypes.string,
  rowClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rowStyle: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  setSort: PropTypes.func,
  total: PropTypes.number,
  version: PropTypes.number,
};

Datagrid.defaultProps = {
  data: {},
  hasBulkActions: false,
  ids: [],
  selectedIds: [],
  body: <DatagridBody />,
};

export default Datagrid;
