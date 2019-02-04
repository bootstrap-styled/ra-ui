import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '@bootstrap-styled/v4/lib/Label';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import classnames from 'classnames';
import { FieldTitle } from 'ra-core';

const LabeledContainer = styled.div`
  padding: 1rem 0 1rem,
  border: 0,
  background: none,
  margin: 0, // Reset for Safari
  display: block,
  width: 100%,
`;

/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
export const Labeled = ({
  children,
  className,
  fullWidth,
  id,
  input,
  isRequired,
  label,
  meta,
  resource,
  source,
  ...rest
}) => {
  if (!label && !source) {
    throw new Error(
      `Cannot create label for component <${children
      && children.type
      && children.type
        .name}>: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props`
    );
  }
  const restProps = fullWidth ? { ...rest, fullWidth } : rest;

  return (
    <FormGroup
      className={classnames(className, { 'w-100': fullWidth })}
    >
      <Label htmlFor={id}>
        <FieldTitle
          label={label}
          source={source}
          resource={resource}
          isRequired={isRequired}
        />
      </Label>
      <LabeledContainer>
        {children && typeof children.type !== 'string'
          ? React.cloneElement(children, {
            input,
            resource,
            ...restProps,
          })
          : children}
      </LabeledContainer>
    </FormGroup>
  );
};

Labeled.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  record: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
  labelStyle: PropTypes.object,
};

export default Labeled;
