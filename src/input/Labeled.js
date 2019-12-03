import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, FormGroup } from '@bootstrap-styled/v4';
import classnames from 'classnames';
import { FieldTitle } from 'ra-core';

const LabeledContainer = styled.div`
  ${props => `
    font-family: ${props.theme['$font-family-base']};
    padding: ${props.theme.$spacer} 0 calc(${props.theme.$spacer} / 2);
    border: 0;
    box-sizing: content-box;
    vertical-align: middle;
    background: none;
    margin: 0; // Reset for Safari
    display: block;
    width: 100%;
  `}
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
    // @ts-ignore
    const name = children && children.type && children.type.name;

    throw new Error(
      `Cannot create label for component <${name}>: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props`
    );
  }
  const restProps = fullWidth ? { ...rest, fullWidth } : rest;

  return (
    <FormGroup
      className={classnames(className, {
        'w-100': fullWidth,
        'bg-danger': meta && meta.touched && !!meta.error,
      })}
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
          ? cloneElement(children, {
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
  classes: PropTypes.object,
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
