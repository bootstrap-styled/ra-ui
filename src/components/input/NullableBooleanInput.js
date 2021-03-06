import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import Input from '@bootstrap-styled/v4/lib/Input';
import Option from '@bootstrap-styled/v4/lib/Option';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import compose from 'recompose/compose';
import { addField, translate, FieldTitle } from 'ra-core';

import sanitizeRestProps from './sanitizeRestProps';


export class NullableBooleanInput extends Component {
  state = {
    value: this.props.input.value,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.input.value !== this.props.input.value) {
      this.setState({ value: nextProps.input.value });
    }
  }

  handleChange = event => {
    this.props.input.onChange(
      this.getBooleanFromString(event.target.value)
    );
    this.setState({ value: event.target.value });
  };

  getBooleanFromString = value => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
  };

  getStringFromBoolean = value => {
    if (value === true) return 'true';
    if (value === false) return 'false';
    return '';
  };

  render() {
    const {
      className,
      isRequired,
      label,
      meta,
      options,
      resource,
      source,
      translate,
      ...rest
    } = this.props;
    const { touched, error } = meta;
    return (
      <FormGroup color={error ? 'danger' : ''} className={className}>
        <FieldTitle
          label={label}
          source={source}
          resource={resource}
          isRequired={isRequired}
        />
        <Input
          value={this.getStringFromBoolean(this.state.value)}
          onChange={this.handleChange}
          type="select"
          {...options}
          {...sanitizeRestProps(rest)}
        >
          <Option value="" />
          <Option value="false">
            {translate('ra.boolean.false')}
          </Option>
          <Option value="true">
            {translate('ra.boolean.true')}
          </Option>
        </Input>
        {!!(touched && error) && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

NullableBooleanInput.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
  translate: PropTypes.func.isRequired,
};

const enhance = compose(
  addField,
  translate,
);

export default enhance(NullableBooleanInput);
