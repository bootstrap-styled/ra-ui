import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ReferenceFieldController } from 'ra-core';

import LinearProgress from '../layout/LinearProgress';
import Link from '../Link';
import sanitizeRestProps from './sanitizeRestProps';


// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

export const ReferenceFieldView = ({
  allowEmpty,
  basePath,
  children,
  className,
  isLoading,
  record,
  reference,
  referenceRecord,
  resource,
  resourceLinkPath,
  source,
  translateChoice = false,
  ...rest
}) => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (resourceLinkPath) {
    return (
      <Link
        to={resourceLinkPath}
        className={className}
        onClick={stopPropagation}
      >
        {React.cloneElement(Children.only(children), {
          className: classnames(
            children.props.className,
          ),
          record: referenceRecord,
          resource: reference,
          allowEmpty,
          basePath,
          translateChoice,
          ...sanitizeRestProps(rest),
        })}
      </Link>
    );
  }

  return React.cloneElement(Children.only(children), {
    record: referenceRecord,
    resource: reference,
    allowEmpty,
    basePath,
    translateChoice,
    ...sanitizeRestProps(rest),
  });
};

ReferenceFieldView.propTypes = {
  allowEmpty: PropTypes.bool,
  basePath: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  record: PropTypes.object,
  reference: PropTypes.string,
  referenceRecord: PropTypes.object,
  resource: PropTypes.string,
  resourceLinkPath: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  source: PropTypes.string,
  translateChoice: PropTypes.bool,
};

/**
 * Fetch reference record, and delegate rendering to child component.
 *
 * The reference prop sould be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * By default, includes a link to the <Edit> page of the related record
 * (`/users/:userId` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" linkType="show">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * You can also prevent `<ReferenceField>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" linkType={false}>
 *     <TextField source="name" />
 * </ReferenceField>
 */
const ReferenceField = ({ children, ...props }) => {
  if (React.Children.count(children) !== 1) {
    throw new Error('<ReferenceField> only accepts a single child');
  }

  return (
    <ReferenceFieldController {...props}>
      {controllerProps => (
        <ReferenceFieldView
          {...props}
          {...{ children, ...controllerProps }}
        />
      )}
    </ReferenceFieldController>
  );
};

ReferenceField.propTypes = {
  addLabel: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  basePath: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  cellClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object,
  reference: PropTypes.string.isRequired,
  resource: PropTypes.string,
  sortBy: PropTypes.string,
  source: PropTypes.string.isRequired,
  translateChoice: PropTypes.func,
  linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

ReferenceField.defaultProps = {
  allowEmpty: false,
  linkType: 'edit',
  record: {},
};

const EnhancedReferenceField = ReferenceField;

EnhancedReferenceField.defaultProps = {
  addLabel: true,
};

export default EnhancedReferenceField;
