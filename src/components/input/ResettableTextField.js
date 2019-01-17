import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classnames from 'classnames';
import Input from '@bootstrap-styled/v4/lib/Input';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import { translate } from 'ra-core';


/**
 * An override of the default Material-UI TextField which is resettable
 */
class ResettableTextField extends Component {
  static propTypes = {
    clearAlwaysVisible: PropTypes.bool,
    InputProps: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    resettable: PropTypes.bool,
    translate: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  };

  handleClickClearButton = (event) => {
    event.preventDefault();
    this.props.onChange('');
  };

  handleMouseDownClearButton = (event) => {
    event.preventDefault();
  };

  handleFocus = (event) => {
    this.props.onFocus && this.props.onFocus(event); // eslint-disable-line no-unused-expressions
  };

  handleBlur = (event) => {
    this.props.onBlur && this.props.onBlur(event); // eslint-disable-line no-unused-expressions
  };

  render() {
    const {
      translate,
      clearAlwaysVisible,
      InputProps,
      value,
      error,
      helperText,
      className,
      label,
      fullWidth,
      resettable,
      ...props
    } = this.props;

    return (
      <FormGroup color={error ? 'danger' : ''} className={className}>
        {label}
        <Input
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          value={value}
          className={classnames({ 'w-100': fullWidth })}
          {...InputProps}
          {...props}
        />
        {InputProps && !InputProps.endAdornment ? resettable
          && value && (
          <InputAdornment position="end">
            <IconButton
              aria-label={translate(
                'ra.action.clear_input_value'
              )}
              title={translate(
                'ra.action.clear_input_value'
              )}
              disableRipple
              onClick={this.handleClickClearButton}
              onMouseDown={
                this.handleMouseDownClearButton
              }
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ) : InputProps && InputProps.endAdornment}
        {error && <FormFeedback>{helperText}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default compose(
  translate,
)(ResettableTextField);
