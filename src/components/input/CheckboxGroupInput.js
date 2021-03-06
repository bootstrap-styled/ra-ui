import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import Input from '@bootstrap-styled/v4/lib/Input';
import Label from '@bootstrap-styled/v4/lib/Label';
import compose from 'recompose/compose';
import { addField, translate, FieldTitle } from 'ra-core';

import defaultSanitizeRestProps from './sanitizeRestProps';

const sanitizeRestProps = ({
  setFilter,
  setPagination,
  setSort,
  ...rest
}) => defaultSanitizeRestProps(rest);

/**
 * An Input component for a checkbox group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * The expected input must be an array of identifiers (e.g. [12, 31]) which correspond to
 * the 'optionValue' of 'choices' attribute objects.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *     { id: 12, name: 'Ray Hakt' },
 *     { id: 31, name: 'Ann Gullar' },
 *     { id: 42, name: 'Sean Phonee' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi' },
 *    { _id: 456, full_name: 'Jane Austen' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.category.programming' },
 *    { id: 'lifestyle', name: 'myroot.category.lifestyle' },
 *    { id: 'photography', name: 'myroot.category.photography' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <CheckboxGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Checkbox> components
 */
export class CheckboxGroupInput extends Component {
  handleCheck = (event, isChecked) => {
    const {
      input: { value, onChange },
    } = this.props;
    let newValue;
    try {
      // try to convert string value to number, e.g. '123'
      newValue = JSON.parse(event.target.value);
    } catch (e) {
      // impossible to convert value, e.g. 'abc'
      newValue = event.target.value;
    }
    if (isChecked) {
      onChange([...(value || []), ...[newValue]]);
    } else {
      onChange(value.filter(v => v != newValue)); // eslint-disable-line eqeqeq
    }
  };

  renderCheckbox = choice => {
    const {
      id,
      input: { value },
      optionText,
      optionValue,
      options,
      translate,
      translateChoice,
    } = this.props;
    const choiceName = React.isValidElement(optionText) // eslint-disable-line no-nested-ternary
      ? React.cloneElement(optionText, { record: choice })
      : typeof optionText === 'function'
        ? optionText(choice)
        : get(choice, optionText);
    return (
      <Label check key={get(choice, optionValue)}>
        <Input
          type="checkbox"
          id={id}
          checked={
            value ? (
              value.find(v => v === get(choice, optionValue))
                !== undefined
            ) : (
              false
            )
          }
          onChange={this.handleCheck}
          value={String(get(choice, optionValue))}
          {...options}
        />
        {
          translateChoice ? (
            translate(choiceName, { _: choiceName })
          ) : (
            choiceName
          )
        }
      </Label>
    );
  };

  render() {
    const {
      choices,
      className,
      isRequired,
      label,
      meta,
      resource,
      source,
      input,
      ...rest
    } = this.props;
    if (typeof meta === 'undefined') {
      throw new Error(
        "The CheckboxGroupInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
      );
    }

    const { touched, error, helperText = false } = meta;

    return (
      <FormGroup check className={className} {...sanitizeRestProps(rest)}>
        <FieldTitle
          label={label}
          source={source}
          resource={resource}
          isRequired={isRequired}
        />
        <div className="d-flex">{choices.map(this.renderCheckbox)}</div>
        {touched && error && <FormFeedback>{error}</FormFeedback>}
        {helperText && <FormFeedback>{helperText}</FormFeedback>}
      </FormGroup>
    );
  }
}

CheckboxGroupInput.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  label: PropTypes.string,
  source: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }),
  isRequired: PropTypes.bool,
  optionText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  optionValue: PropTypes.string.isRequired,
  resource: PropTypes.string,
  translate: PropTypes.func.isRequired,
  translateChoice: PropTypes.bool.isRequired,
  meta: PropTypes.object,
};

CheckboxGroupInput.defaultProps = {
  choices: [],
  options: {},
  optionText: 'name',
  optionValue: 'id',
  translateChoice: true,
};

const EnhancedCheckboxGroupInput = compose(
  addField,
  translate,
)(CheckboxGroupInput);

export default EnhancedCheckboxGroupInput;
