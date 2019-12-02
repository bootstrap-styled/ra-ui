import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form as ReactFinalForm } from 'react-final-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  Button,
  Label,
  Input,
  Form,
  FormGroup,
  FormFeedback,
} from '@bootstrap-styled/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

import {
  useTranslate, useLogin, useNotify, useSafeSetState,
} from 'ra-core';

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
  meta: { touched, error } = { touched: false, error: '' }, // eslint-disable-line react/prop-types
  input: { ...inputProps }, // eslint-disable-line react/prop-types
  ...props
}) => (
  <FormGroup color={touched && error ? 'danger' : ''}>
    <Label>{props.label}</Label>
    <Input {...inputProps} {...props} />
    {!!(touched && error) && <FormFeedback>{touched && error}</FormFeedback>}
  </FormGroup>
);
const login = (auth, dispatch, { redirectTo }) => dispatch(userLogin(auth, redirectTo));

const LoginForm = ({
  isLoading, handleSubmit, translate,
}) => (
  <Form onSubmit={handleSubmit(login)}>
    <div className="px-3 pb-3">
      <div className="mt-3">
        <Field
          autoFocus
          id="username"
          name="username"
          component={renderInput}
          label={translate('ra.auth.username')}
          disabled={isLoading}
        />
      </div>
      <div className="mt-3">
        <Field
          id="password"
          name="password"
          component={renderInput}
          label={translate('ra.auth.password')}
          type="password"
          disabled={isLoading}
        />
      </div>
    </div>
    <div className="py-2 px-3">
      <Button
        type="submit"
        color="primary"
        disabled={isLoading}
        className="w-100"
      >
        {isLoading && (
          <FontAwesomeIcon
            className="m-3"
            size="2x"
            spin
            icon={faCircleNotch}
          />
        )}
        {translate('ra.auth.sign_in')}
      </Button>
    </div>
  </Form>
);

LoginForm.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  redirectTo: PropTypes.string,
};

export default LoginForm;
