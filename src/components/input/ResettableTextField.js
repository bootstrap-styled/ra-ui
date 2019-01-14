import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classnames from 'classnames';
import Input from '@bootstrap-styled/v4/lib/Input';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MuiTextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

import { translate } from 'ra-core';

const styles = {
    clearIcon: {
        height: 16,
        width: 0,
    },
    visibleClearIcon: {
        width: 16,
    },
    clearButton: {
        height: 24,
        width: 0,
    },
    visibleClearButton: {
        width: 24,
    },
};

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

    state = { showClear: false };

    handleClickClearButton = event => {
        event.preventDefault();
        this.props.onChange('');
    };

    handleMouseDownClearButton = event => {
        event.preventDefault();
    };

    handleFocus = event => {
        this.setState({ showClear: true });
        this.props.onFocus && this.props.onFocus(event);
    };

    handleBlur = event => {
        this.setState({ showClear: false });
        this.props.onBlur && this.props.onBlur(event);
    };

    render() {
        const {
            translate,
            clearAlwaysVisible,
            InputProps,
            value,
            resettable,
            error,
            helperText,
            className,
            label,
            fullWidth,
            ...props
        } = this.props;

        const { showClear } = this.state;


        return (
          <FormGroup color={error ? 'danger' : ''} className={className}>
            {label}
            <Input
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              value={value}
              className={classnames({'w-100': fullWidth })}
              {...InputProps}
              {...props}
            />
            {!InputProps.endAdornment ? resettable &&
            value && (
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
            ) : InputProps.endAdornment}
            {error && <FormFeedback>{error}</FormFeedback>}
            {helperText && <FormFeedback>{helperText}</FormFeedback>}
          </FormGroup>
        );
    }
}

export default compose(
    translate,
)(ResettableTextField);
