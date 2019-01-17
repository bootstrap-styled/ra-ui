import React from 'react';
import PropTypes from 'prop-types';
import Progress from '@bootstrap-styled/v4/lib/Progress';
import ProgressBar from '@bootstrap-styled/v4/lib/Progress/ProgressBar';

import { ReferenceArrayFieldController } from 'ra-core';


export const ReferenceArrayFieldView = ({
  children,
  className,
  data,
  ids,
  loadedOnce,
  reference,
  referenceBasePath,
}) => {
  if (loadedOnce === false) {
    return (
      <Progress className="mt-2">
        <ProgressBar valueNow={100} striped animated />
      </Progress>
    );
  }

  return React.cloneElement(children, {
    className,
    resource: reference,
    ids,
    data,
    loadedOnce,
    basePath: referenceBasePath,
    currentSort: {},
  });
};

ReferenceArrayFieldView.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  ids: PropTypes.array,
  loadedOnce: PropTypes.bool,
  children: PropTypes.element.isRequired,
  reference: PropTypes.string.isRequired,
  referenceBasePath: PropTypes.string,
};

/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 */
export const ReferenceArrayField = ({ children, ...props }) => {
  if (React.Children.count(children) !== 1) {
    throw new Error(
      '<ReferenceArrayField> only accepts a single child (like <Datagrid>)'
    );
  }

  return (
    <ReferenceArrayFieldController {...props}>
      {(controllerProps) => (
        <ReferenceArrayFieldView
          {...props}
          {...{ children, ...controllerProps }}
        />
      )}
    </ReferenceArrayFieldController>
  );
};

ReferenceArrayField.propTypes = {
  addLabel: PropTypes.bool,
  basePath: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  label: PropTypes.string,
  record: PropTypes.object.isRequired,
  reference: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  sortBy: PropTypes.string,
  source: PropTypes.string.isRequired,
};

const EnhancedReferenceArrayField = ReferenceArrayField;

EnhancedReferenceArrayField.defaultProps = {
  addLabel: true,
};

export default EnhancedReferenceArrayField;
